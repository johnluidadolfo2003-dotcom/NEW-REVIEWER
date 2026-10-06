"""Build readable arithmetic from the same checked expression used for the answer.
No expressions are evaluated in the browser. Inputs are trusted repository data.
"""
import ast,copy,math
from pathlib import Path

def number(value):
    return f'{value:.8f}'.rstrip('0').rstrip('.') if isinstance(value,float) else str(value)

def load_givens():
    result={}
    for line in Path('scripts/economics-givens.tsv').read_text().splitlines():
        n,items=line.split('|')
        result[int(n)]=[dict(symbol='',meaning=pair.partition('=')[0].strip(),value=pair.partition('=')[2].strip()) for pair in items.split(';')]
    assert set(result)==set(range(1,176)), 'Every numerical problem needs curated givens.'
    return result

def build_steps(n,key,expr,note,result,value,final,env):
    rows=[]
    def evaluate(node,local=None):
        return eval(compile(ast.Expression(node),'checked solution','eval'),{'__builtins__':{}},dict(env,**(local or {})))
    def factor(name,i,count):
        i,count=number(i),number(count)
        return {'pa':rf'\frac{{1-(1+{i})^{{-{count}}}}}{{{i}}}',
                'fa':rf'\frac{{(1+{i})^{{{count}}}-1}}{{{i}}}',
                'cr':rf'\frac{{{i}}}{{1-(1+{i})^{{-{count}}}}}',
                'sf':rf'\frac{{{i}}}{{(1+{i})^{{{count}}}-1}}'}[name]
    def latex(node):
        if isinstance(node,ast.Constant):return number(node.value)
        if isinstance(node,ast.Name):return node.id
        if isinstance(node,ast.UnaryOp):return ('-' if isinstance(node.op,ast.USub) else '+')+latex(node.operand)
        if isinstance(node,ast.BinOp):
            a,b=latex(node.left),latex(node.right)
            if isinstance(node.op,ast.Div):return rf'\frac{{{a}}}{{{b}}}'
            if isinstance(node.op,ast.Pow):return rf'\left({a}\right)^{{{b}}}'
            if isinstance(node.op,ast.Mult):return rf'\left({a}\right)\times\left({b}\right)'
            return rf'\left({a}\right){"+" if isinstance(node.op,ast.Add) else "-"}\left({b}\right)'
        if isinstance(node,ast.Call):
            name=node.func.id
            if name in ['pa','fa','cr','sf']:return factor(name,*[evaluate(a) for a in node.args])
            if name=='exp':return rf'e^{{{latex(node.args[0])}}}'
            if name=='log':return rf'\ln\left({latex(node.args[0])}\right)'
            if name in ['irr','bondYield']:return 'X'
            if name=='sum':
                gen=node.args[0];values=list(evaluate(gen.generators[0].iter));symbol=gen.generators[0].target.id
                return rf'\sum_{{{symbol}={min(values)}}}^{{{max(values)}}}\left({latex(gen.elt)}\right)'
        raise ValueError(ast.dump(node))
    def terms(node):
        gen=node.args[0];clause=gen.generators[0]
        for t in evaluate(clause.iter):
            class Replace(ast.NodeTransformer):
                def visit_Name(self,other):return ast.Constant(t) if other.id==clause.target.id else other
            yield t,ast.fix_missing_locations(Replace().visit(copy.deepcopy(gen.elt)))
    def emit(title,why,mathtext,v=None):
        rows.append(dict(step=len(rows)+1,title=title,explanation=why,calculationMath=mathtext+(rf' = {number(v)}' if v is not None else ''),intermediateValue=v))
    if not expr:
        return [dict(step=1,title='Identify the missing value',explanation='Time needs both the starting amount P and the target amount F. The question supplies P and r, but no F.',calculationMath=r't=\frac{\ln(F/P)}{r}'),dict(step=2,title='Stop rather than guess',explanation='Different target amounts give different times, so no unique time or correct option can be calculated.')],None
    if n==12:
        return [dict(step=1,title='Use the largest SYD charge',explanation='With zero salvage, the first year has the largest fraction of cost.',calculationMath=r'\frac{D_1}{C}=\frac{n}{n(n+1)/2}=\frac{2}{n+1}'),dict(step=2,title='Apply the 20% ceiling',explanation='Require the first-year charge to be no more than 0.20 of first cost.',calculationMath=r'\frac{2}{n+1}\leq0.20\Rightarrow n+1\geq10\Rightarrow n\geq9'),dict(step=3,title='Choose the minimum whole-year life',explanation='Nine years gives exactly 20%; eight years gives 2/9≈22.22% and fails.',calculationMath='n=9')],None
    if n==82:
        for title,m in [('Monthly',12),('Every two months',6),('Quarterly',4),('Daily (365)',365)]:
            annual=((1+.095/m)**m-1)*100
            emit(title,'Test this frequency using the effective annual-rate formula.',rf'\left[\left(1+\frac{{0.095}}{{{m}}}\right)^{{{m}}}-1\right]\times100',annual)
        rows.append(dict(step=len(rows)+1,title='Match the advertised rate',explanation='Quarterly compounding rounds to the stated 9.84% effective annual rate. Therefore choose C.'))
        return rows,None
    root=ast.parse(expr,mode='eval').body
    def visit(node,is_final=False):
        if isinstance(node,ast.Call):
            name=node.func.id
            if name=='sum':
                for t,term in terms(node):
                    emit(f'Discount the year-{t} cash flow','Move this payment back to today using its own payment date.',latex(term),evaluate(term))
                emit('Add the present values','These discounted amounts can now be added because they are all at the same date.',r'P=\sum_t\frac{C_t}{(1+i)^t}',evaluate(node))
                return
            for a in node.args:visit(a)
            if name in ['pa','fa','cr','sf']:
                i,count=[evaluate(a) for a in node.args]
                titles={'pa':'Find the present-worth factor','fa':'Find the accumulated-savings factor','cr':'Find the loan-payment factor','sf':'Find the savings-deposit factor'}
                why={'pa':'Multiply an equal payment by this factor to obtain its value one period before the first payment.','fa':'Multiply an equal deposit by this factor to obtain the amount on the final deposit date.','cr':'Multiply the financed principal by this factor to obtain each period-end payment.','sf':'Multiply the future target by this factor to obtain each period-end deposit.'}[name]
                emit(titles[name],f'Use i={number(i)} ({i*100:.6f}% per payment period) and n={number(count)}. '+why,latex(node),evaluate(node))
            elif name in ['irr','bondYield']:
                args=[evaluate(a) for a in node.args];x=evaluate(node)
                if name=='irr':
                    p,a,count=args;residual=a*env['pa'](x,count)-p
                    equation=rf'{number(a)}\frac{{1-(1+X)^{{-{number(count)}}}}}{{X}}-{number(p)}=0'
                else:
                    p,a,s,count=args;residual=a*env['pa'](x,count)+s/(1+x)**count-p
                    equation=rf'{number(a)}\frac{{1-(1+X)^{{-{number(count)}}}}}{{X}}+\frac{{{number(s)}}}{{(1+X)^{{{number(count)}}}}}-{number(p)}=0'
                emit('Set present worth equal to the price','X is the unknown decimal rate. In Canon COMP, enter this residual and use SOLVE with a nonzero initial estimate.',equation)
                emit('Solve the decimal rate','A numerical solver gives this X; convert it to percent only after solving.',r'X',x)
                emit('Check the solved rate','Substitute the solved rate back into the residual. It should be close to zero.',r'\mathrm{residual}',residual)
            else:
                emit('Apply the exponential' if name=='exp' else 'Apply the natural logarithm','Use eˣ for continuous growth; use ln to reverse exponential growth.',latex(node),evaluate(node))
            return
        if isinstance(node,ast.BinOp):
            visit(node.left);visit(node.right)
            # Avoid clutter from the repeated trivial conversion 1+i.
            if isinstance(node.op,ast.Add) and isinstance(node.left,ast.Constant) and node.left.value==1 and isinstance(node.right,ast.Constant) and abs(node.right.value)<1:return
            if isinstance(node.op,ast.Pow):
                title='Calculate the growth or remaining-value factor'
                why='Apply the exponent for the stated number of periods; a negative exponent discounts rather than accumulates.'
            elif isinstance(node.op,ast.Sub):title='Subtract the stated amounts';why='Subtract in this order; the order matters for cost, interest, or remaining book value.'
            elif isinstance(node.op,ast.Add):title='Combine the amounts';why='Add the components represented in the substituted expression.'
            elif isinstance(node.op,ast.Div):title='Divide to find the required ratio';why='Keep the entire denominator grouped; use the full-precision result.'
            else:title='Multiply the components';why='Use the amounts and factor from the formula; keep full precision.'
            # For arithmetic steps, show already-evaluated operands to keep each line short.
            l,r=evaluate(node.left),evaluate(node.right)
            compact=rf'\frac{{{number(l)}}}{{{number(r)}}}' if isinstance(node.op,ast.Div) else rf'\left({number(l)}\right)^{{{number(r)}}}' if isinstance(node.op,ast.Pow) else f'{number(l)}'+(r'\times' if isinstance(node.op,ast.Mult) else '+' if isinstance(node.op,ast.Add) else '-')+f'({number(r)})'
            if key=='breakEven':
                if isinstance(node.op,ast.Add):title='Add the fixed-cost components';why='Combine fixed costs for the same time interval as the requested sales volume.'
                elif isinstance(node.op,ast.Sub):title='Find contribution per unit';why='Selling price minus variable costs is the amount each sale contributes toward fixed costs.'
                elif is_final and isinstance(node.op,ast.Div):title='Find the break-even ratio';why='Divide total fixed cost by contribution per unit; then round upward if whole units are required.'
            elif is_final and isinstance(node.op,ast.Mult) and isinstance(node.right,ast.Constant) and node.right.value==100:
                title='Convert the decimal rate to percent';why='Multiplying a decimal rate by 100 expresses the same rate as a percentage.'
            elif key=='bond' and is_final and isinstance(node.op,ast.Add):
                title='Add coupon and redemption present worth';why='Both components have been discounted to today, so their sum is the bond price.'
            elif key=='due' and is_final:
                title='Adjust for beginning-of-period timing';why='Payments one period earlier have an extra factor of 1+i in their worth; divide the ordinary payment by 1+i when finding an installment.'
            emit(title,why,compact,evaluate(node))
        elif isinstance(node,ast.UnaryOp):visit(node.operand)
    visit(root,True)
    if n==87:
        periodic=(1.12649**(1/8)-1)
        emit('Find the effective annual rate','Two half-year growth factors make one year; this completes the second part of the requested answer.',rf'\left[(1+{number(periodic)})^2-1\right]\times100',((1+periodic)**2-1)*100)
    if n==143:emit('Find accumulated depreciation','Book value is the remaining amount. Subtract it from original cost to get total depreciation.',rf'90000-{number(result)}',90000-result)
    if value!=result and key=='breakEven':emit('Round upward for whole units','A fraction of a unit cannot cover fixed cost. The minimum whole-unit quantity is the ceiling, not ordinary rounding.',rf'\lceil {number(result)}\rceil',value)
    return rows,latex(root)
