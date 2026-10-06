"""Build the source-backed data. Inputs are manually transcribed, not generated questions."""
import ast,json,math,re
from economics_solution_steps import load_givens, build_steps
from economics_formula_pairs import make_pair, SPECS
from economics_handout_forms import handout_pair
givens_by_number=load_givens()
from pathlib import Path

def pa(i,n): return n if i==0 else (1-(1+i)**(-n))/i
def fa(i,n): return n if i==0 else ((1+i)**n-1)/i
def cr(i,n): return 1/pa(i,n)
def sf(i,n): return 1/fa(i,n)
def root(fn):
 lo,hi=0.,1.
 while fn(hi)>0: hi*=2
 for _ in range(150):
  mid=(lo+hi)/2
  if fn(mid)>0: lo=mid
  else: hi=mid
 return (lo+hi)/2
def irr(p,a,n): return root(lambda i:a*pa(i,n)-p)
def bondYield(p,a,s,n): return root(lambda i:a*pa(i,n)+s/(1+i)**n-p)
env=dict(pa=pa,fa=fa,cr=cr,sf=sf,irr=irr,bondYield=bondYield,exp=math.exp,log=math.log,sum=sum,range=range)

class Entry(ast.NodeTransformer):
 def visit_Call(self,node):
  name=node.func.id if isinstance(node.func,ast.Name) else ''
  if name in ['pa','fa','cr','sf']:
   i,n=[ast.unparse(x) for x in node.args]
   expr={'pa':f'(1-(1+({i}))**(-({n})))/({i})','fa':f'((1+({i}))**({n})-1)/({i})','cr':f'({i})/(1-(1+({i}))**(-({n})))','sf':f'({i})/((1+({i}))**({n})-1)'}[name]
   return self.visit(ast.parse('('+expr+')',mode='eval').body)
  if name=='sum':
   gen=node.args[0];c=gen.generators[0]; values=eval(compile(ast.Expression(c.iter),'entry','eval'),{'__builtins__':{}},env)
   class Replace(ast.NodeTransformer):
    def __init__(self,v): self.v=v
    def visit_Name(self,n): return ast.Constant(self.v) if n.id==c.target.id else n
   import copy
   nodes=[Replace(v).visit(copy.deepcopy(gen.elt)) for v in values]
   result=nodes[0]
   for n in nodes[1:]:result=ast.BinOp(result,ast.Add(),n)
   return self.visit(result)
  return self.generic_visit(node)

def entry(expr):
 if not expr:return 'No calculator entry: a target amount is missing.'
 if 'irr(' in expr:
  c=ast.parse(expr,mode='eval').body
  call=c.left if isinstance(c,ast.BinOp) else c
  p,a,n=[ast.unparse(x) for x in call.args]
  return f'{a} × (1 − (1 + X)^(−{n})) ÷ X − {p} = 0'
 if 'bondYield(' in expr:
  call=ast.parse(expr,mode='eval').body.left
  p,a,s,n=[ast.unparse(x) for x in call.args]
  return f'{a} × (1 − (1 + X)^(−{n})) ÷ X + {s} ÷ (1 + X)^{n} − {p} = 0'
 t=Entry().visit(ast.parse(expr,mode='eval'));ast.fix_missing_locations(t)
 return ast.unparse(t).replace('**','^').replace('exp(', 'e^(').replace('log(', 'ln(').replace('*',' × ').replace('/',' ÷ ')

problems=[]
nearest={4,8,22,47,66,111,134,156,163}
assumptions={2,11,13,19,22,33,40,55,56,65,69,104,112,124,139,150,153,155,158,159,168,171,172}
for line in Path('scripts/economics-problems.tsv').read_text().splitlines():
 n,key,q,choices,expr,unit,note=line.split('|');n=int(n); opts=choices.split('~')
 result=eval(expr,{'__builtins__':{}},env) if expr else None
 value=math.ceil(result-1e-9) if unit=='units' and result is not None else result
 letter=None; status='missing-given' if result is None else 'choice-mismatch'
 if n==82:letter='C';status='matched'
 elif n in [87,143]:letter='A';status='matched'
 elif result is not None:
  nums=[float(re.match(r'[-\d.]+',o).group()) for o in opts]
  index=min(range(4),key=lambda j:abs(nums[j]-value))
  decimals=len(opts[index].split('.')[-1]) if '.' in opts[index] else 0
  tol=.5*10**(-decimals)+1e-7
  if abs(nums[index]-value)<=tol:letter='ABCD'[index];status='matched'
  elif n in nearest or (unit!='units' and abs(nums[index]-value)<=max(.02,abs(value)*.0005)):
   letter='ABCD'[index];status='nearest-choice'
   note+=f' Closest printed choice {letter} is {opts[index]}; the unrounded calculated result is {value:,.8f}. This choice is approximate, not an exact match.'
 if n==69:status='ambiguous';letter=None
 fmt='Cannot determine: missing target amount.' if value is None else (f'{unit}{value:,.2f}' if unit in ['₱','$'] else f'₱{value:,.2f} million' if unit=='₱ million' else f'{value:,.2f}%' if unit=='%' else f'{value:,.0f} units' if unit=='units' else f'{value:,.2f} {unit}')
 if n==87:fmt='3.00% nominal; 3.02% effective annually'
 if n==143:fmt='₱21,357.42 book value; ₱68,642.58 accumulated depreciation'
 if n==82:fmt='Quarterly (4 times per year)'
 if unit=='units' and result is not None and abs(value-result)>.00001:note+=f' Continuous break-even ratio = {result:,.4f}; whole-unit minimum = {value:,}.'
 if status=='choice-mismatch':note+=' No printed choice matches the calculated result at its stated precision. The correct computed result is shown above; do not force a letter.'
 page=778 if n<=26 else 779 if n<=50 else 780 if n<=75 else 781 if n<=105 else 782 if n<=131 else 783 if n<=152 else 784
 image=f'IMG_0{page}.HEIC'
 calc=entry(expr)
 if n==12:calc="2 ÷ 0.20 − 1 = 9 years minimum"
 if n==82:calc="Test quarterly: ((1 + 0.095 ÷ 4)^4 − 1) × 100 ≈ 9.84%; therefore m = 4"
 worked,substitution=build_steps(n,key,expr,note,result,value,fmt,env)
 pair=handout_pair(n,key,SPECS[n][2],make_pair(n,result,env))
 problems.append(dict(id=f'econ-sample-{n:03}',problemNumber=n,sourceFile=image,sourceDocumentName='Practice Problems in Engineering Economics',folderName='Economics Sample Problem',category=key,topicTitle=key,weekDay=1,difficulty='Moderate',question=q,choices=[f'{"ABCD"[j]}. {o}' for j,o in enumerate(opts)],correctLetter=letter,answerStatus=status,assumption=n in assumptions,formulaId=key,resultValue=value,calculatorEntry=calc,shortcutSolution=note,given=givens_by_number[n],**pair,solutionSteps=worked,finalAnswer=fmt,canonCalTech=dict(calculator='Canon F-789SGA',mode='COMP',keystrokes=[calc,'Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual.'],resultDisplay=fmt,proTip='Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result.'),mentalModelOrTrap=note))
# Keep bank classification and lesson day, but preserve the question-specific equation.
Path('src/data/driveSampleProblems.ts').write_text("import { DriveSampleProblem } from '../types';\nimport { formulaById } from './economicsFormulas';\nexport const DRIVE_SAMPLE_PROBLEMS: DriveSampleProblem[] = "+json.dumps(problems,ensure_ascii=False,indent=2)+".map(p => ({...p, correctLetter: (p.correctLetter || undefined) as DriveSampleProblem['correctLetter'], difficulty: 'Moderate' as const, category: formulaById[p.formulaId].title, topicTitle: formulaById[p.formulaId].title, weekDay: formulaById[p.formulaId].day, answerStatus: p.answerStatus as DriveSampleProblem['answerStatus'], formulaOrigin: p.formulaOrigin as DriveSampleProblem['formulaOrigin']}));\n")
with Path('src/data/driveSampleProblems.ts').open('a') as f: f.write('export const ESAS_DRIVE_SAMPLE_PROBLEMS = DRIVE_SAMPLE_PROBLEMS;\n')
print('Generated',len(problems),'numerical problems; flagged',sum(p['answerStatus'] not in ['matched','nearest-choice'] for p in problems),'choice/given issues.')
terms=[]
for line in Path('scripts/economics-terms.tsv').read_text().splitlines():
 n,q,choices,letter,explanation=line.split('|');n=int(n)
 terms.append(dict(id=f'term-econ-{n:02}',termNumber=n,category='Source terms',termOrConcept=q,difficulty='Foundation',question=q,choices=[f'{"ABCD"[j]}. {o}' for j,o in enumerate(choices.split('~'))],correctLetter=letter if letter!='-' else None,correctDefinition=explanation,examExplanation=explanation,sourceFile=f'IMG_0{785 if n<=32 else 786 if n<=67 else 787}.HEIC'))
Path('src/data/econTermsQuestions.ts').write_text("import { EconTermQuestion } from '../types';\nexport const ECON_TERMS_QUESTIONS = "+json.dumps(terms,ensure_ascii=False,indent=2)+" as EconTermQuestion[];\n")
print('Generated',len(terms),'source terms.')
