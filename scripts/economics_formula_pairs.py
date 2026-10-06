"""Question-specific symbolic equations and their exact numeric substitutions.
Both displayed lines are rendered from one AST; evaluation is checked against
an independently maintained answer expression in economics-problems.tsv.
"""
import ast
import math

SPECS = {}

def add(nums, lhs, expression, **parameters):
    for n in ([nums] if isinstance(nums, int) else nums):
        assert n not in SPECS, n
        SPECS[n] = (lhs, expression, parameters)

add(1, 'F_{real}', 'P*((1+i)/(1+f))**t', P=10000,i=.15,f=.06,t=5)
add(2, 'C', 'BV+t*D', BV=10000,t=5,D=4000)
for n,K,i,N,R in [(3,30,.04,10,1000),(49,350,.08,8,5000),(163,110,.12,20,1000)]:
    add(n,'Price','K*pa(i,n)+R/(1+i)**n',K=K,i=i,n=N,R=R)
for n,P,A,N in [(4,350000,200000,3),(73,350000,200000,3),(100,8000,750,15)]:
    add(n,'0','A*pa(x,n)-P',P=P,A=A,n=N)
for n,P,i,N in [(5,10000,.05,10),(10,1000000,1.12**(1/12)-1,120),(25,12000,1.05**2-1,6),(45,10000,.12,6),(46,15000,.04,12),(104,100000,.01,240),(107,1800000,.15/12,60),(151,100000,.06,20)]:
    add(n,'A','P*cr(i,n)',P=P,i=i,n=N)
for n,P,i,N in [(6,60000,.06,12),(26,12000,.08,5)]:
    add(n,'A_{due}','P*cr(i,n)/(1+i)',P=P,i=i,n=N)
for n in [7,136,137]:add(n,'D_m','(C-S)*(n-m+1)/(n*(n+1)/2)',C=10000,S=0,n=20,m=3)
add(8,'EUAC','C*cr(i,n)-S*sf(i,n)',C=15000,S=2000,i=.12,n=6)
for n,C,R,i,N in [(9,250,100,.06,20),(156,250000000,100000000,.06,20)]:
    add(n,'CC','C+R/((1+i)**n-1)',C=C,R=R,i=i,n=N)
add(11,'Loss','C-m*(C-S)/n-V',C=120000,m=5,S=10000,n=10,V=30000)
add(12,'D_1/C','2/(n+1)',q=.20)
for n in [13,57]:add(n,'r_{percent}','d/(1-d)*Y/h*100',d=.03,Y=360,h=69)
add(14,'r_{2,percent}','m_2*((1+r_1/m_1)**(m_1/m_2)-1)*100',r_1=.12,m_1=2,m_2=4)
for n,A,i,N in [(15,6000,.15,5),(48,500,.01,24),(63,300,.01,20),(99,6000,.15,5)]:
    add(n,'F','A*fa(i,n)',A=A,i=i,n=N)
for n in [16,114]:add(n,'P_0','P_d+A*pa(i,n)/(1+i)**(k-1)',P_d=100000,A=8000,i=.06,n=10,k=6)
for n,C in [(17,720000),(43,1000000)]:add(n,'TD','C*(1-(1-k)**n)',C=C,k=.25,n=10)
add(18,'C_2','(C_1*cr(i,n_1)-S_1*sf(i,n_1)+S_2*sf(i,n_2))/cr(i,n_2)',C_1=5000,S_1=800,S_2=1000,i=.04,n_1=2,n_2=3)
for n,C,S,i,N in [(19,300000,30000,.18,15),(158,324000,50000,.06,4),(159,24000,0,.06,5)]:
    add(n,'CC','C+(C-S)/((1+i)**n-1)',C=C,S=S,i=i,n=N)
for n,P,r,t in [(20,500000,.12,5),(89,5000,.03,10)]:add(n,'F','P*exp(r*t)',P=P,r=r,t=t)
add(21,'C','(n*BV-m*S)/(n-m)',n=6,BV=30833.33,m=5,S=12000)
add(22,'EUAC','C*cr(i,n)-S*sf(i,n)+O',C=80000,S=20000,i=.10,n=20,O=18000)
add(23,'P','A/((1+r/m)**(m/p)-1)',A=1000,r=.12,m=4,p=12)
add(24,'V_h','A*pa(i,n)*(1+i)**h',A=100000,i=.035,n=40,h=16)
add(27,'EUAC','M*pa(i,n_c)/(1+i)**w*cr(i,n)',M=100,i=.10,n_c=3,w=2,n=5)
add(28,'r_{percent}','I/P*100',I=20000,P=80000)
add(29,'P','A*pa((1+i_real)*(1+f)-1,n)',A=1000,i_real=.05,f=.06,n=10)
add(30,'F','P*(1+i)**N-C_1*(1+i)**(N-t_1)-C_2*(1+i)**(N-t_2)-C_3*(1+i)**(N-t_3)',P=15000,i=.045,N=7,C_1=4000,t_1=1,C_2=5000,t_2=4,C_3=3000,t_3=5)
for n,FC,SP,VC in [(31,70000,125,56),(166,200000,200,160),(169,69994,135,56),(173,200000,200,160)]:
    add(n,'Q','FC/(SP-VC)',FC=FC,SP=SP,VC=VC)
for n,C,S,N in [(32,45000,4350,6),(37,720000,40545.73,10),(144,720000,40545.73,10)]:
    add(n,'k_{percent}','(1-(S/C)**(1/n))*100',C=C,S=S,n=N)
for n,P,r,d,Y in [(33,10000,.08,90,360),(52,10000,.08,90,360),(58,10500,.05,75,365)]:
    add(n,'F','P*(1+r*d/Y)',P=P,r=r,d=d,Y=Y)
for n,ie in [(34,.0833),(88,.10),(91,.04),(92,.24)]:add(n,'r_{percent}','log(1+i_e)*100',i_e=ie)
add(35,'F_N','C_1*(1+i)**3+C_2*(1+i)**2+C_3*(1+i)+C_4',C_1=5000,C_2=4500,C_3=4000,C_4=3500,i=.05)
for n,F,i,N in [(36,40000,.015,36),(39,150000,.03,10),(105,20000,.06,12),(106,100000,.10,5)]:add(n,'A','F*sf(i,n)',F=F,i=i,n=N)
for n,N in [(38,8),(47,10),(134,10)]:add(n,'A','(C-S)*sf(i,n)',C=20000,S=2000,i=.04,n=N)
add(40,'F_{due}','A*fa(i,n)*(1+i)',A=3000,i=.015,n=16)
add(41,'F','P*(1+r*t_s)*(1+i)**n',P=600,r=.06,t_s=4,i=.05,n=12)
add(42,'BV_m','C-m*(C-S+L)/n',C=800000,m=6,S=50000,L=15000,n=10)
for n,I,r,t in [(44,328,.085,2),(53,450,.06,2.5),(60,9600,.16,5)]:add(n,'P','I/(r*t)',I=I,r=r,t=t)
add(50,'AC','(C-S)/n+M+H*c_h',C=10500,S=400,n=10,M=300,H=1600,c_h=.85)
add(51,'F','P*(1+r*h/12)',P=5000,r=.15,h=15)
for n,F,r,d in [(54,25000,.14,60),(56,1500,.10,90)]:add(n,'P','F/(1+r*d/Y)',F=F,r=r,d=d,Y=360)
add(55,'r_{percent}','I_net/((1-tax)*P)*Y/d*100',I_net=890.39,tax=.20,P=110000,Y=360,d=31)
add(59,'I','P*r*d/Y',P=5000,r=.22,d=318,Y=366)
add(61,'I','P*r*t',P=6800,r=.11,t=3)
for n,P,r,m,N in [(62,5000,.08,4,40),(67,500000,.1125,12,93)]:add(n,'I','P*((1+r/m)**n-1)',P=P,r=r,m=m,n=N)
add(64,'P','A_1*pa(i,n_1)+A_2*pa(i,n_2)/(1+i)**n_1+(A_3/i)/(1+i)**(n_1+n_2)',A_1=30000,A_2=40000,A_3=50000,i=.15,n_1=6,n_2=4)
for n,P,i,N in [(65,50000,.075,5),(72,2825,.0125,32),(74,1000,.06,12),(77,5000,.02,40),(79,10000,.005,240)]:add(n,'F','P*(1+i)**n',P=P,i=i,n=N)
add(66,'BV_m','C*(1-2/n)**m',C=100000,n=25,m=3)
add(68,'F','P*(1+i)**N-C_1*(1+i)**(N-t_1)-C_2*(1+i)**(N-t_2)',P=800000,i=.20,N=5,C_1=300000,t_1=1,C_2=400000,t_2=3)
add(69,'I','P*((1+i)**n-1)',P=10000,i=.12,n=5)
add(70,'P','F/((1+i_1)**n_1*(1+i_2)**n_2)',F=20000,i_1=.08,n_1=5,i_2=.03,n_2=20)
for n,A,i,N in [(71,1000,.04,5),(98,2000,.03,6),(101,2000,.025,10),(103,200,.06,10),(108,10000,1.12**(1/12)-1,60)]:add(n,'P','A*pa(i,n)',A=A,i=i,n=N)
add(75,'I_4','P*((F_2/P)**2-1)',P=3000,F_2=3500)
add(76,'P','F/(1+i)**n',F=10000,i=.03,n=10)
for n in [78,83]:add(n,'i_{e,percent}','((1+r/m)**m-1)*100',r=.08,m=4)
add(80,'i_{e,percent}','((1+r/m)**m-1)*100',r=.18,m=8)
add(81,'i_{e,percent}','((1+i)**m-1)*100',i=.015,m=12)
add(82,'i_e','(1+r/m)**m-1',r=.095)
add(84,'r_{2,percent}','m_2*((1+r_1/m_1)**(m_1/m_2)-1)*100',r_1=.12,m_1=12,m_2=6)
add(85,'i_{e,percent}','(exp(r)-1)*100',r=.12)
add(86,'r_{percent}','m*((1+i_e)**(1/m)-1)*100',m=12,i_e=.1956)
add(87,'r_{percent}','m*((F/P)**(1/(m*t))-1)*100',m=2,F=1126.49,P=1000,t=4)
add(90,'t','log(a)/r',a=2,r=.10)
add(93,'r_{percent}','log(a)/t*100',a=1.34986,t=10)
add(94,'i_{e,percent}','(exp(r_month*m)-1)*100',r_month=.015,m=12)
add(95,'t','log(F/P)/r',P=2000,r=.08)
add(96,'Delta_F','P*(exp(r*t)-(1+r)**t)',P=500,r=.05,t=5)
for n,A,i,N in [(97,2000,.04,5),(110,120000,.15,6)]:add(n,'P_{due}','A*pa(i,n)*(1+i)',A=A,i=i,n=N)
add(102,'P','sum((A+G*(t-1))/(1+i)**t for t in range(1,n+1))',A=20000,G=1500,i=.07,n=8)
add(109,'A','F/fa(i,n)',F=5000,i=.06,n=6)
add(111,'F_{due}','A*fa(i,n)*(1+i)',A=200,i=.07,n=15)
for n,P,i,N,k in [(112,2000,.0225,10,6),(113,187400,.05,8,10)]:add(n,'A','P*(1+i)**(k-1)*cr(i,n)',P=P,i=i,n=N,k=k)
add(115,'P_0','A*pa(i,n)/(1+i)**(k-1)',A=2000,i=.04,n=3,k=4)
for n,A,i in [(116,5000,.10),(119,10000,.10)]:add(n,'P','A/i',A=A,i=i)
add(117,'P_0','A/(i*(1+i)**(k-1))',A=1000,i=.08,k=5)
add(118,'P','A/((1+r/m)**m-1)',A=2000,r=.10,m=4)
add(120,'A','P*i',P=1000,i=.155)
add(121,'P','A/((1+i)**h-1)',A=15000,i=.02,h=2)
for n,C,S,N in [(122,10000,500,10),(124,15000,1000,3)]:add(n,'D','(C-S)/n',C=C,S=S,n=N)
for n,C,S,N,m in [(123,10000,1000,10,6),(127,900000,200000,8,5),(128,200000,25000,20,12),(130,530000,53000,10,5)]:add(n,'BV_m','C-m*(C-S)/n',C=C,S=S,n=N,m=m)
add(125,'D','(C-S+L)/n',C=800000,S=50000,L=15000,n=10)
for n in [126,131]:add(n,'d_{percent}','((C-S)/n)/C*100',C=45000,S=2500,n=5)
add(129,'TD_m','m*(C-S)/n',m=3,C=500000,S=100000,n=25)
add(132,'A','(C-S)*sf(i,n)',C=10000,S=500,i=.04,n=10)
add(133,'AC','(C-S)*sf(i,n)+C*i',C=30000,S=10000,i=.08,n=5)
for n,m in [(135,3),(140,4)]:add(n,'TD_m','(C-S)*sum(n-j+1 for j in range(1,m+1))/(n*(n+1)/2)',C=9000,S=1000,n=10,m=m)
add(138,'BV_1','C-(C-S)*n/(n*(n+1)/2)',C=9000,S=1000,n=10)
add(139,'BV_m','C-(C-S)*sum(n-j+1 for j in range(1,m+1))/(n*(n+1)/2)',C=15000,S=0,n=5,m=3)
add(141,'BV_m','C*(1-k)**m',C=50000,k=.20,m=9)
add(142,'BV_m','C*(S/C)**(m/n)',C=480000,S=48000,m=5,n=12)
add(143,'BV_m','C*(1-2/n)**m',C=90000,n=8,m=5)
for n,real,f in [(145,.15,.09),(148,.10,.06)]:add(n,'i_{nominal,percent}','((1+f)*(1+i_real)-1)*100',f=f,i_real=real)
add(146,'C_future','C*(1+f)**t',C=100,f=.07,t=10)
for n in [147,164]:add(n,'i_{real,percent}','((1+i)/(1+f)-1)*100',i=.05,f=.02)
add(149,'EUAC','sum(G*t/(1+i)**t for t in range(1,n+1))*cr(i,n)',G=100,i=.06,n=4)
add(150,'AC','(C-S)/n+C*i',C=100000,S=5000,n=10,i=.05)
for n,C,O,i in [(152,500000,10000,.06),(154,500000,90000,.15),(155,100000,18000,.08),(157,1500000,150000,.15)]:add(n,'CC','C+O/i',C=C,O=O,i=i)
add(153,'CC','C+(C-S)/((1+i)**n-1)+O/i',C=50000,S=2000,i=.10,n=10,O=1200)
add(160,'R','(Price-K*pa(i,n))*(1+i)**n',Price=1080,K=100,i=.12,n=8)
for n,Price,K,R,N in [(161,1120,100,1040,10),(162,950000,30000,1000000,15),(165,1030,80,1000,10)]:add(n,'0','K*pa(x,n)+R/(1+x)**n-Price',Price=Price,K=K,R=R,n=N)
add(167,'Q','(FC_1+FC_2+FC_3)/(SP-VC_1-VC_2)',FC_1=3500,FC_2=25000,FC_3=12000,SP=55,VC_1=20,VC_2=2)
add(168,'Q','FC/(SP-VC)',FC=80000,SP=.50,VC=0)
for n,FC,SP,a,b,c in [(170,100000,1200,300,400,100),(171,50000,6,.75,3.25,.50),(174,461600,995,315,100,3),(175,34950,250,15,65,20)]:add(n,'Q','FC/(SP-VC_1-VC_2-VC_3)',FC=FC,SP=SP,VC_1=a,VC_2=b,VC_3=c)
add(172,'Q','FC/(SP-VC_1-VC_2)',FC=450000,SP=250,VC_1=45,VC_2=15)
assert set(SPECS)==set(range(1,176))

MEANINGS = dict(P='Principal or present worth',F='Future amount',C='First cost',S='Salvage value',BV='Book value',D='Annual depreciation',TD='Total depreciation',t='Time in years',m='Compounding periods per year or requested year',n='Number of periods or useful life',i='Effective rate per payment period',f='Annual inflation rate',r='Annual interest rate',A='Equal payment',K='Coupon per period',R='Redemption or recurring replacement cost',O='Annual operating cost',M='Annual maintenance cost',V='Sale value',L='Dismantling cost',FC='Fixed cost',SP='Selling price per unit',VC='Variable cost per unit',k='Depreciation rate or first payment period',d='Days or discount fraction',Y='Days per year',h='Elapsed intervals',w='Warranty years',H='Operating hours per year',c_h='Operating cost per hour',G='Yearly increase',a='Growth factor F/P',I='Interest',I_net='After-tax interest',tax='Withholding-tax fraction',Price='Bond price',P_d='Down payment',F_2='Amount after two years',t_s='Simple-interest years',r_month='Continuous monthly rate',i_e='Effective annual rate',i_real='Real annual rate',x='Unknown decimal yield')

def num(v):
    # Do not round a derived payment-period rate before substituting it.
    return str(v) if not isinstance(v,float) else format(v,'.15g')

def symbol(name):
    if '{' in name:return name
    if name=='D_1/C':return r'\frac{D_1}{C}'
    parts=name.split('_',1)
    return parts[0] if len(parts)==1 else parts[0]+'_{'+parts[1]+'}'

def render(node, values=None):
    values=values or {}
    if isinstance(node,ast.Constant):return num(node.value)
    if isinstance(node,ast.Name):return num(values[node.id]) if node.id in values else symbol(node.id)
    if isinstance(node,ast.UnaryOp):return ('-' if isinstance(node.op,ast.USub) else '+')+render(node.operand,values)
    if isinstance(node,ast.BinOp):
        a,b=render(node.left,values),render(node.right,values)
        if isinstance(node.op,ast.Div):return rf'\frac{{{a}}}{{{b}}}'
        if isinstance(node.op,ast.Pow):
            base=rf'\left({a}\right)' if isinstance(node.left,(ast.BinOp,ast.UnaryOp)) else a
            return rf'{base}^{{{b}}}'
        if isinstance(node.op,ast.Mult):
            if isinstance(node.left,ast.BinOp) and isinstance(node.left.op,(ast.Add,ast.Sub)):a=rf'\left({a}\right)'
            if isinstance(node.right,ast.BinOp) and isinstance(node.right.op,(ast.Add,ast.Sub)):b=rf'\left({b}\right)'
            return rf'{a}\times {b}'
        if isinstance(node.op,ast.Sub) and isinstance(node.right,ast.BinOp) and isinstance(node.right.op,(ast.Add,ast.Sub)):b=rf'\left({b}\right)'
        return a+('+' if isinstance(node.op,ast.Add) else '-')+b
    if isinstance(node,ast.Call):
        name=node.func.id
        if name in ['pa','fa','cr','sf']:
            i,n=[render(a,values) for a in node.args]
            return {'pa':rf'\frac{{1-\left(1+{i}\right)^{{-{n}}}}}{{{i}}}',
                    'fa':rf'\frac{{\left(1+{i}\right)^{{{n}}}-1}}{{{i}}}',
                    'cr':rf'\frac{{{i}}}{{1-\left(1+{i}\right)^{{-{n}}}}}',
                    'sf':rf'\frac{{{i}}}{{\left(1+{i}\right)^{{{n}}}-1}}'}[name]
        if name=='exp':return rf'e^{{{render(node.args[0],values)}}}'
        if name=='log':return rf'\ln\left({render(node.args[0],values)}\right)'
        if name=='sum':
            gen=node.args[0];clause=gen.generators[0];start=render(clause.iter.args[0],values)
            end=clause.iter.args[1]
            # range(1,n+1) has upper included bound n.
            assert isinstance(end,ast.BinOp) and isinstance(end.op,ast.Add) and end.right.value==1
            end=render(end.left,values)
            return rf'\sum_{{{clause.target.id}={start}}}^{{{end}}}\left({render(gen.elt,values)}\right)'
    raise ValueError(ast.dump(node))

def make_pair(n, original, env):
    lhs,expr,params=SPECS[n]
    root=ast.parse(expr,mode='eval').body
    display_params=dict(params)
    if n in [10,108]:
        display_params['i']=r'\left((1+0.12)^{1/12}-1\right)'
    if n==25:
        display_params['i']=r'\left((1+0.05)^2-1\right)'
    symbolic=render(root);numeric=render(root,display_params)
    if n==12:
        return dict(governingFormula=rf'{symbol(lhs)}={symbolic}\leq q',substitutionMath=rf'{symbol(lhs)}={numeric}\leq0.20',formulaSymbols='n = useful life in years; q = maximum annual fraction of first cost')
    if n==82:
        return dict(governingFormula=rf'{symbol(lhs)}={symbolic}',substitutionMath=rf'0.0984\approx{numeric}',formulaSymbols='r = nominal annual rate; m = unknown compounding periods per year; iₑ = effective annual rate')
    if n==95:
        return dict(governingFormula=rf'{symbol(lhs)}={symbolic}',substitutionMath=rf'{symbol(lhs)}={numeric}',formulaSymbols='F = missing target amount; P = principal; r = continuous annual rate; t = years')
    actual=eval(compile(ast.Expression(root),'symbolic formula','eval'),dict(env,**params,x=original/100 if n in [4,73,100,161,162,165] else 0,__builtins__={}))
    if n in [4,73,100,161,162,165]:assert abs(actual)<1e-6,(n,actual)
    else:assert math.isclose(actual,original,rel_tol=1e-12,abs_tol=1e-7),(n,actual,original)
    names=sorted({node.id for node in ast.walk(root) if isinstance(node,ast.Name)} & (set(params)|{'x'}))
    definitions=[]
    for name in names:
        base=name.split('_')[0]
        meaning=MEANINGS.get(name,MEANINGS.get(base,name))
        # These symbols have different meanings in depreciation and annuity problems.
        if name=='m':meaning='Requested depreciation year' if n in [11,123,127,128,129,130,135,139,140,141,142,143,66] else 'Compounding periods per year'
        if name=='k':meaning='First payment period' if n in [16,114,112,113,115,117] else 'Annual depreciation fraction'
        if name=='d':meaning='Discount fraction' if n in [13,57] else 'Number of days'
        definitions.append(f'{name} = {meaning.lower()}')
    formula=rf'{symbol(lhs)}={symbolic}'
    substitution=rf'{symbol(lhs)}={numeric}'
    if n in [87,143]:
        extra_lhs,extra_expr=('i_{e,percent}','((F/P)**(1/t)-1)*100') if n==87 else ('TD_m','C-C*(1-2/n)**m')
        extra=ast.parse(extra_expr,mode='eval').body
        formula=r'\begin{gathered}'+formula+r'\\'+extra_lhs+'='+render(extra)+r'\end{gathered}'
        substitution=r'\begin{gathered}'+substitution+r'\\'+extra_lhs+'='+render(extra,params)+r'\end{gathered}'
    return dict(governingFormula=formula,substitutionMath=substitution,formulaSymbols='; '.join(definitions))
