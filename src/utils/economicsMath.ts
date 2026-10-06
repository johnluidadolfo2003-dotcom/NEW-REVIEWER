import { ECONOMICS_HANDOUT_FORMS } from "../data/economicsHandoutForms";
import { ECONOMICS_FORMULAS } from "../data/economicsFormulas";
const latex: Record<string, string[]> = {
  simple: [String.raw`I=Prt`, String.raw`F=P(1+rt),\quad P=\frac{F}{1+rt}`],
  compound: [
    String.raw`F=P(1+i)^n`,
    String.raw`P=\frac{F}{(1+i)^n},\quad I=F-P`,
  ],
  rate: [
    String.raw`i_e=\left(1+\frac{r}{m}\right)^m-1`,
    String.raw`i_p=\left(1+\frac{r}{m}\right)^{m/p}-1`,
    String.raw`r_2=m_2\left[\left(1+\frac{r_1}{m_1}\right)^{m_1/m_2}-1\right]`,
  ],
  continuous: [
    String.raw`F=Pe^{rt},\quad i_e=e^r-1`,
    String.raw`r=\ln(1+i_e),\quad t=\frac{\ln(F/P)}{r}`,
  ],
  pa: [String.raw`P=A\frac{1-(1+i)^{-n}}{i}`],
  fa: [String.raw`F=A\frac{(1+i)^n-1}{i}`],
  cr: [String.raw`A=P\frac{i}{1-(1+i)^{-n}}`],
  sf: [String.raw`A=F\frac{i}{(1+i)^n-1}`],
  due: [
    String.raw`P_{\mathrm{due}}=P_{\mathrm{ordinary}}(1+i)`,
    String.raw`F_{\mathrm{due}}=F_{\mathrm{ordinary}}(1+i)`,
    String.raw`A_{\mathrm{due}}=\frac{A_{\mathrm{ordinary}}}{1+i}`,
  ],
  deferred: [String.raw`P_0=A\frac{1-(1+i)^{-n}}{i(1+i)^{k-1}}`],
  perpetuity: [String.raw`P=\frac{A}{i},\quad P_0=\frac{A}{i(1+i)^{k-1}}`],
  cashflow: [
    String.raw`P=\sum_t\frac{C_t}{(1+i)^t}`,
    String.raw`F_N=\sum_t C_t(1+i)^{N-t}`,
    String.raw`A_G=G\left[\frac{1}{i}-\frac{n}{(1+i)^n-1}\right]`,
  ],
  sl: [String.raw`D=\frac{C-S}{n},\quad BV_m=C-mD`, String.raw`d=\frac{D}{C}`],
  syd: [
    String.raw`SYD=\frac{n(n+1)}{2}`,
    String.raw`D_m=\frac{(C-S)(n-m+1)}{SYD}`,
    String.raw`BV_m=C-\sum_{j=1}^{m}D_j`,
  ],
  db: [
    String.raw`k=1-\left(\frac{S}{C}\right)^{1/n}`,
    String.raw`BV_m=C(1-k)^m`,
    String.raw`D_m=kBV_{m-1},\quad k_{\mathrm{DDB}}=\frac{2}{n}`,
  ],
  sinkingDep: [
    String.raw`A=\frac{(C-S)i}{(1+i)^n-1}`,
    String.raw`TD_m=A\frac{(1+i)^m-1}{i}`,
    String.raw`D_m=A(1+i)^{m-1}`,
  ],
  real: [
    String.raw`1+i_{\mathrm{nominal}}=(1+i_{\mathrm{real}})(1+f)`,
    String.raw`F_{\mathrm{real}}=\frac{F_{\mathrm{nominal}}}{(1+f)^t}`,
    String.raw`C_{\mathrm{future}}=C_{\mathrm{now}}(1+f)^t`,
  ],
  euac: [String.raw`EUAC=\frac{Ci}{1-(1+i)^{-n}}-\frac{Si}{(1+i)^n-1}+O`],
  annualSL: [String.raw`AC=\frac{C-S}{n}+iC+O`],
  annualSF: [String.raw`AC=\frac{(C-S)i}{(1+i)^n-1}+iC+O`],
  cc: [
    String.raw`CC=C+\frac{O}{i}+\frac{C_{\mathrm{replacement}}-S}{(1+i)^n-1}`,
  ],
  bcr: [
    String.raw`\frac{B}{C}=\frac{PW(\mathrm{benefits})}{PW(\mathrm{costs})}`,
    String.raw`NPV=PW(\mathrm{benefits})-PW(\mathrm{costs})`,
  ],
  irr: [String.raw`0=-P+\sum_t\frac{C_t}{(1+x)^t}`],
  bond: [
    String.raw`\mathrm{Price}=\mathrm{Coupon}\frac{1-(1+i)^{-n}}{i}+\frac{\mathrm{Redemption}}{(1+i)^n}`,
  ],
  breakEven: [
    String.raw`Q=\frac{FC}{SP-VC}`,
    String.raw`\mathrm{Profit}=Q(SP-VC)-FC`,
    String.raw`\mathrm{Payback}=\frac{\mathrm{Investment}}{\mathrm{annual\ net\ receipts}}`,
  ],
};
export const economicsFormulaLatex = (formula: string): string[] => {
  const f = ECONOMICS_FORMULAS.find((f) => f.formula === formula);
  return f ? (ECONOMICS_HANDOUT_FORMS[f.id]?.latex || latex[f.id]) : [formula];
};
