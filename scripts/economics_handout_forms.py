"""Use the notation and equation forms inspected on IMG_0767–IMG_0775.
Unprinted rearrangements/extensions are identified as derived from the handout.
The original solved expressions stay in economics_formula_pairs for verification.
"""
import ast, math
from economics_formula_pairs import render, symbol


def handout_pair(n,key,params,derived):
    vals=dict(params)
    # Symbols used in the supplied handout, not a replacement notation system.
    aliases={}
    if key=='simple':aliases={'r':'i','t':'n'}
    if key in ['compound','rate']:aliases={'r':'R','r_1':'R_1','r_2':'R_2','i_e':'ER','r_percent':'R_percent','r_2,percent':'R_2,percent','i_e,percent':'ER_percent'}
    if key=='continuous':aliases={'t':'N','i_e':'ER'}
    if key in ['sl','syd','db','sinkingDep','annualSL','annualSF']:
        aliases={'C':'C_0','S':'C_n','BV':'C_m','k':'K','D':'d'}
    if key=='bond':aliases={'Price':'P','K':'D','R':'C','x':'i'}
    if key=='cc':aliases={'C':'C_0','O':'A','S':'C_n'}
    def rename(text):
        # Parse only source math identifiers; avoid changing words in LaTeX commands.
        import re
        for old,new in sorted(aliases.items(),key=lambda kv:-len(kv[0])):
            text=re.sub(r'(?<![A-Za-z_])'+re.escape(symbol(old))+r'(?![A-Za-z_])',lambda _:symbol(new),text)
        return text
    def eq(lhs,expr,values=None):
        values=vals if values is None else values
        node=ast.parse(expr,mode='eval').body
        formula=rename(symbol(lhs))+'='+rename(render(node))
        substitution=(str(values[lhs]) if lhs in values else rename(symbol(lhs)))+'='+rename(render(node,values))
        environment=dict(values,pa=lambda i,n:(1-(1+i)**(-n))/i,fa=lambda i,n:((1+i)**n-1)/i,cr=lambda i,n:i/(1-(1+i)**(-n)),sf=lambda i,n:i/((1+i)**n-1),sum=sum,range=range,exp=math.exp,log=math.log,__builtins__={})
        try:
            amount=eval(compile(ast.Expression(node),'handout substitution','eval'),environment)
            if isinstance(amount,(int,float)) and math.isfinite(amount):
                if lhs not in values:
                    substitution+='='+f'{amount:.8f}'.rstrip('0').rstrip('.')
                values[lhs]=amount
        except (NameError,TypeError,SyntaxError):
            # A question may be solving for a symbol still present in the equation.
            pass
        return formula,substitution
    def lines(equations,origin='handout',definitions=''):
        fs,ss=zip(*equations)
        wrap=lambda xs:xs[0] if len(xs)==1 else r'\begin{gathered}'+r'\\'.join(xs)+r'\end{gathered}'
        return dict(governingFormula=wrap(fs),substitutionMath=wrap(ss),formulaSymbols=definitions or rename(derived['formulaSymbols']),formulaOrigin=origin)
    def fallback():
        return dict(governingFormula=rename(derived['governingFormula']).replace('D_1','d_1'),substitutionMath=rename(derived['substitutionMath']).replace('D_1','d_1'),formulaSymbols=rename(derived['formulaSymbols']),formulaOrigin='derived')
    if key=='simple':
        if n in [13,57]:
            v={'I':.03,'P':.97,'t':r'\frac{69}{360}'}
            return lines([eq('I','P*r*t',v)],definitions='I = interest; P = financed fraction of the full price; i = unknown annual rate; n = time in years')
        if n==28:
            return lines([eq('I','P*r*t',dict(I=20000,P=80000,t=1))],definitions='I = interest; P = cash actually received; i = unknown annual rate; n = years')
        if n==55:
            v=dict(vals,t=r'\frac{31}{360}',I=890.39/(1-.20))
            return lines([eq('I','I_net/(1-tax)',vals),eq('I','P*r*t',v)],'derived','I = before-tax interest; I_net = net interest; tax = withholding fraction; P = principal; i = unknown annual rate; n = years')
        if n in [44,53,60,61]:
            return lines([eq('I','P*r*t')],definitions='I = interest; P = principal; i = annual rate; n = years')
        if n in [33,52,54,56,58]:
            v=dict(vals,t=r'\frac{'+str(vals['d'])+'}{'+str(vals['Y'])+'}')
        elif n==51:v=dict(vals,t=r'\frac{15}{12}')
        else:v=vals
        return lines([eq('F','P*(1+r*t)',v)],definitions='F = total amount; P = principal; i = annual rate; n = years')
    if key=='continuous':
        if n in [20,89]:return lines([eq('F','P*exp(r*t)')],definitions='F = future worth; P = present worth; r = annual continuous rate; N = years')
        if n==85:return lines([eq('ER','exp(r)-1')],definitions='ER = effective annual rate; r = annual continuous rate')
        if n in [34,88,91,92]:
            return lines([eq('ER','exp(r)-1',dict(ER=vals['i_e']))],definitions='ER = known effective annual rate; r = unknown continuous annual rate')
        if n in [90,93]:
            v=dict(vals,P=1,F=vals['a'])
            return lines([eq('F','P*exp(r*t)',v)],definitions='F/P = given growth factor; r = continuous annual rate; N = years')
        if n==95:
            return lines([eq('F','P*exp(r*t)')],definitions='F = missing target amount; P = principal; r = annual continuous rate; N = unknown years')
        return fallback()
    if key=='rate':
        if n in [78,80,83]:return lines([eq('ER','(1+r/m)**m-1')],definitions='ER = effective annual rate; R = nominal annual rate; m = compounding periods per year')
        if n==81:
            return lines([eq('ER','(1+i)**m-1')],'derived','ER = effective annual rate; i = monthly rate; m = months per year')
        if n==82:
            pair=eq('ER','(1+r/m)**m-1',dict(r=.095,ER=.0984))
            return lines([(pair[0],pair[1].replace('=',r'\approx',1))],'handout','ER ≈ 0.0984; R = 0.095; m = unknown compounding periods per year')
        if n==86:
            return lines([eq('ER','(1+r/m)**m-1',dict(ER=.1956,m=12))],definitions='ER = effective annual rate; R = unknown nominal annual rate; m = compounding periods per year')
        return fallback()
    if key=='compound':
        if n in [65,72,74,77,79]:return lines([eq('F','P*(1+i)**n')],definitions='F = future worth; P = present worth; i = rate per period; n = total periods')
        if n==76:return lines([eq('F','P*(1+i)**n')],definitions='F = future worth; P = unknown present worth; i = rate per period; n = total periods')
        if n in [62,67]:
            return lines([eq('F','P*(1+r/m)**n'),eq('I','F-P',vals)],'derived','F = future worth; P = principal; R = nominal annual rate; m = compounding periods per year; n = total periods; I = interest earned')
        return fallback()
    if key=='cr':
        v=vals.copy()
        if n in [10]:v['i']=r'\left((1+0.12)^{1/12}-1\right)'
        if n==25:v['i']=r'\left((1+0.05)^2-1\right)'
        return lines([eq('P','A*pa(i,n)',v)],definitions='P = financed present amount; A = unknown installment; i = rate per payment period; n = payments')
    if key=='pa':
        # Problem 24 asks for the value at another focal date.
        return lines([eq('P','A*pa(i,n)')],definitions='P = present worth; A = equal payment; i = payment-period rate; n = payments') if n!=24 else fallback()
    if key=='fa':return lines([eq('F','A*fa(i,n)')],definitions='F = accumulated amount; A = equal payment; i = payment-period rate; n = payments')
    if key=='sf':
        v=dict(vals,F=vals.get('F',vals.get('C',0)-vals.get('S',0)))
        return lines([eq('F','A*fa(i,n)',v)],definitions='F = target fund (cost minus salvage for replacement); A = unknown deposit; i = period rate; n = deposits')
    if key=='due':
        expr='A*pa(i,n)*(1+i)' if n in [6,26,97,110] else 'A*fa(i,n)*(1+i)'
        return lines([eq('P' if n in [6,26,97,110] else 'F',expr)],'derived','P = present worth; F = future worth; A = payment; i = period rate; n = payments; extra (1+i) accounts for beginning payments')
    if key=='perpetuity':
        if n in [116,119,120]:return lines([eq('P','A/i')],definitions='P = present worth; A = perpetual payment; i = matching payment-period rate')
        return fallback()
    if key=='sl':
        if n==2:
            v=dict(m=5,D=4000,BV=10000)
            return lines([eq('D_m','m*D',v),eq('BV','C-D_m',v)],definitions='C₀ = unknown first cost; Cₘ = remaining value; d = annual depreciation; Dₘ = total depreciation; m = elapsed years')
        v=dict(vals)
        if n==21:v['m']=5
        if n in [42,125]:v['S']=vals['S']-vals['L']
        eqs=[eq('d','(C-S)/n',v)]
        if n in [122,124,125]:pass
        elif n in [126,131]:eqs.append(eq('rate_{percent}','d/C*100',v))
        else:
            eqs.append(eq('D_m','m*d',v))
            if n!=129:eqs.append(eq('C_m','C-D_m',dict(v,**({'C_m':vals['BV']} if n==21 else {}))))
            if n==11:eqs.append(eq('Loss','C_m-V',v))
        return lines(eqs,'derived' if n in [11,126,131] else 'handout','C₀ = first cost; Cₙ = net salvage; n = useful life; d = annual depreciation; Dₘ = total depreciation after m years; Cₘ = book value')
    if key=='sinkingDep':
        return lines([eq('d','(C-S)*sf(i,n)')],definitions='d = fixed annual fund deposit; C₀ = first cost; Cₙ = salvage; i = annual fund rate; n = life')
    if key=='syd':
        v=vals.copy();v['SYD']=vals['n']*(vals['n']+1)/2 if 'n' in vals else None
        eqs=[eq('SYD','n*(n+1)/2',vals)]
        if n in [7,136,137]:eqs.append(eq('d_3','(C-S)*(n-2)/SYD',v))
        elif n in [135,140,139]:
            v['m']=3 if n in [135,139] else 4
            eqs.append(eq('D_m','(C-S)*sum(n-j+1 for j in range(1,m+1))/SYD',v))
            if n==139:eqs.append(eq('C_m','C-D_m',v))
        elif n==138:
            eqs += [eq('d_1','(C-S)*n/SYD',v),eq('C_1','C-d_1',v)]
        else:return fallback()
        return lines(eqs,'handout' if n in [7,136,137,138] else 'derived','C₀ = first cost; Cₙ = salvage; SYD = sum of life digits; dₘ = one-year charge; Dₘ = total depreciation; Cₘ = book value; n = useful life')
    if key=='db':
        if n in [32,37,144]:
            f=r'K=1-\sqrt[n]{\frac{C_n}{C_0}}'
            s=r'K=1-\sqrt['+str(vals['n'])+r']{\frac{'+str(vals['S'])+'}{'+str(vals['C'])+'}}'
            return lines([(f,s)],definitions='K = annual depreciation fraction; C₀ = first cost; Cₙ = salvage; n = life')
        if n==142:
            K=1-(vals['S']/vals['C'])**(1/vals['n'])
            v=dict(vals,k=K)
            f=r'K=1-\sqrt[n]{\frac{C_n}{C_0}}'
            s=r'K=1-\sqrt['+str(vals['n'])+r']{\frac{'+str(vals['S'])+'}{'+str(vals['C'])+'}}'
            return lines([(f,s),eq('C_m','C*(1-k)**m',v)],definitions='K = constant depreciation fraction; C₀ = first cost; Cₙ = salvage; n = useful life; m = requested year; Cₘ = book value')
        if n in [66,143]:
            v=dict(vals,k=2/vals['n'])
            eqs=[eq('K','2/n'),eq('C_m','C*(1-k)**m',v)]
            if n==143:eqs.append(eq('D_m','C-C_m',v))
            return lines(eqs,'derived','K = double declining-balance fraction; C₀ = first cost; n = life; m = elapsed years; Cₘ = book value; Dₘ = total depreciation')
        if n==141:return lines([eq('C_m','C*(1-k)**m')],definitions='C₀ = first cost; K = depreciation fraction; m = elapsed years; Cₘ = book value')
        if n in [17,43]:return lines([eq('C_m','C*(1-k)**n'),eq('D_n','C-C_m')],'derived','C₀ = first cost; K = annual depreciation fraction; n = elapsed years; Cₘ = book value; Dₙ = total depreciation')
    if key=='real':
        if n in [145,148]:
            v=dict(i=vals['i_real'],f=vals['f'])
            return lines([eq('i_c','i+f+i*f',v)],definitions='i = real annual rate; f = inflation; i_c = combined interest-inflation rate')
        if n in [147,164]:
            v=dict(i_c=vals['i'],f=vals['f'])
            return lines([eq('i_c','i+f+i*f',v)],definitions='i_c = nominal yield; f = inflation; i = unknown real rate')
        if n==146:return lines([eq('F','P*(1+f)**n',dict(P=100,f=.07,n=10))],definitions='P = present price; F = future price; f = inflation; n = years')
        if n==29:
            v=dict(i=vals['i_real'],f=vals['f']);ic=(1+v['i'])*(1+v['f'])-1
            return lines([eq('i_c','i+f+i*f',v),eq('P','A*pa(i_c,n)',dict(vals,i_c=ic))],'derived','i = real rate; f = inflation; i_c = combined nominal rate; A = payment; P = present worth; n = payments')
        return fallback()
    if key in ['annualSL','annualSF']:
        v=dict(vals,OM=vals.get('O',0),r=vals.get('i',0))
        if n==50:v['OM']=vals['M']+vals['H']*vals['c_h']
        dep='(C-S)/n' if key=='annualSL' else '(C-S)*sf(i,n)'
        return lines([eq('d',dep,v),eq('AC','d+C*r+OM',v)],definitions='d = annual depreciation or fund deposit; C₀ = first cost; Cₙ = salvage; r = annual interest on capital; OM = annual operation and maintenance')
    if key=='cc':
        if n in [152,154,155,157]:eqs=[eq('P','O/i'),eq('CC','C+P')];origin='handout'
        else:
            if n in [9,156]:expr='R/((1+i)**n-1)'
            elif n==153:expr='(C-S)/((1+i)**n-1)+O/i'
            else:expr='(C-S)/((1+i)**n-1)'
            eqs=[eq('P',expr),eq('CC','C+P')];origin='derived'
        return lines(eqs,origin,'CC = capitalized cost; C₀ = initial cost; P = present worth of recurring expenses; A = annual maintenance; R = recurring replacement cost; Cₙ = salvage; i = interest per year; n = replacement interval')
    if key=='bond':
        if n in [161,162,165]:expr='K*pa(x,n)+R/(1+x)**n'
        else:expr='K*pa(i,n)+R/(1+i)**n'
        return lines([eq('Price',expr)],definitions='P = bond price; D = dividend per coupon period; C = redemption price; i = yield per coupon period; n = coupon periods')
    if key=='irr':
        aliases['x']='i'
        return lines([eq('P','A*pa(x,n)')],'derived','P = invested amount; A = annual receipt; i = unknown annual return; n = receipts')
    return fallback()
