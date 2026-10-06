// Academic equations transcribed from the supplied Engineering Economics handout.
// Preserve its symbols and algebraic layout; extended topics are marked derived.
export interface HandoutForm {
  formula: string;
  latex: string[];
  symbols: string;
  sourceFile: string;
  printed: boolean;
}
const annuity = String.raw`P=\frac{A[(1+i)^n-1]}{(1+i)^n i}`;
const fund = String.raw`F=\frac{A[(1+i)^n-1]}{i}`;
const depSymbols = "C₀: first cost; Cₙ: salvage; Cₘ: book value; d: annual depreciation; Dₘ: total depreciation; n: useful life; m: requested year.";
export const ECONOMICS_HANDOUT_FORMS: Record<string, HandoutForm> = {
  simple: {
    formula: "I = Pin; F = P(1+in)",
    latex: [String.raw`I=Pin`, String.raw`F=P(1+in)`],
    symbols: "I: interest; P: principal; i: annual rate; n: time in years (days/360 ordinary, days/365 or 366 exact).",
    sourceFile: "IMG_0767.HEIC", printed: true,
  },
  compound: {
    formula: "F = P(1+i)^n; i = R/m; n = mN; F = P(1+R/m)^{mN}",
    latex: [String.raw`F=P(1+i)^n`, String.raw`i=\frac{R}{m},\quad n=mN`, String.raw`F=P\left(1+\frac{R}{m}\right)^{mN}`],
    symbols: "R: nominal annual rate; i: rate per period; m: compounding periods per year; N: years; n: total periods; P: present worth; F: future worth.",
    sourceFile: "IMG_0768.HEIC", printed: true,
  },
  rate: {
    formula: "ER = (1+R/m)^m-1",
    latex: [String.raw`ER=\left(1+\frac{R}{m}\right)^m-1`],
    symbols: "ER: effective annual rate; R: nominal annual rate; m: compounding periods per year. All rates are decimals in the formula.",
    sourceFile: "IMG_0768.HEIC", printed: true,
  },
  continuous: {
    formula: "F = Pe^{rN}; ER = e^r-1",
    latex: [String.raw`F=Pe^{rN}`, String.raw`ER=e^r-1`],
    symbols: "F: future worth; P: present worth; r: continuous annual rate; N: years; ER: effective annual rate.",
    sourceFile: "IMG_0769.HEIC", printed: true,
  },
  pa: {
    formula: "P = A[(1+i)^n-1]/[(1+i)^n i]",
    latex: [annuity],
    symbols: "P: present worth; A: equal payment; i: rate per payment period; n: payment periods.",
    sourceFile: "IMG_0769.HEIC", printed: true,
  },
  fa: {
    formula: "F = A[(1+i)^n-1]/i",
    latex: [fund],
    symbols: "F: future worth; A: equal payment; i: rate per payment period; n: payment periods.",
    sourceFile: "IMG_0769.HEIC", printed: true,
  },
  cr: {
    formula: "P = A[(1+i)^n-1]/[(1+i)^n i]; solve for A",
    latex: [annuity, String.raw`A=\frac{Pi(1+i)^n}{(1+i)^n-1}`],
    symbols: "P: financed present amount; A: installment to find; i: payment-period rate; n: payments. The second line rearranges the printed present-worth formula.",
    sourceFile: "IMG_0769.HEIC", printed: false,
  },
  sf: {
    formula: "F = A[(1+i)^n-1]/i; solve for A",
    latex: [fund, String.raw`A=\frac{Fi}{(1+i)^n-1}`],
    symbols: "F: target fund; A: deposit to find; i: period rate; n: deposits. The second line rearranges the printed future-worth formula.",
    sourceFile: "IMG_0769.HEIC", printed: false,
  },
  due: {
    formula: "P = A[(1+i)^n-1](1+i)/[(1+i)^n i]; F = A[(1+i)^n-1](1+i)/i",
    latex: [String.raw`P=\frac{A[(1+i)^n-1]}{(1+i)^n i}(1+i)`, String.raw`F=\frac{A[(1+i)^n-1]}{i}(1+i)`],
    symbols: "A: payment; i: period rate; n: payments. The extra (1+i) follows the handout's beginning-of-period timeline.",
    sourceFile: "IMG_0770.HEIC", printed: false,
  },
  deferred: {
    formula: "P_0 = A[(1+i)^n-1]/[(1+i)^n i(1+i)^{k-1}]",
    latex: [String.raw`P_0=\frac{A[(1+i)^n-1]}{(1+i)^n i(1+i)^{k-1}}`],
    symbols: "A: payment; i: period rate; n: number of payments; k: first payment period. Discount the ordinary-annuity worth by k−1 periods.",
    sourceFile: "IMG_0770.HEIC", printed: false,
  },
  perpetuity: {
    formula: "P = A/i",
    latex: [String.raw`P=\frac{A}{i}`],
    symbols: "P: present worth; A: perpetual payment; i: rate matching the payment interval.",
    sourceFile: "IMG_0771.HEIC", printed: true,
  },
  sl: {
    formula: "d = (C_0-C_n)/n; D_m = md; C_m = C_0-D_m",
    latex: [String.raw`d=\frac{C_0-C_n}{n}`, String.raw`D_m=md`, String.raw`C_m=C_0-D_m`],
    symbols: depSymbols,
    sourceFile: "IMG_0771.HEIC", printed: true,
  },
  sinkingDep: {
    formula: "d = (C_0-C_n)i/[(1+i)^n-1]; D_m = d[(1+i)^m-1]/i; C_m = C_0-D_m",
    latex: [String.raw`d=\frac{(C_0-C_n)i}{(1+i)^n-1}`, String.raw`D_m=\frac{d[(1+i)^m-1]}{i}`, String.raw`C_m=C_0-D_m`],
    symbols: depSymbols + " i: annual fund rate; d: fixed annual fund deposit for this method.",
    sourceFile: "IMG_0772.HEIC", printed: true,
  },
  syd: {
    formula: "SYD = n(n+1)/2; d_1 = (C_0-C_n)n/SYD; d_2 = (C_0-C_n)(n-1)/SYD; d_3 = (C_0-C_n)(n-2)/SYD; D_m = Σd_j; C_m = C_0-D_m",
    latex: [String.raw`SYD=\frac12 n(n+1)`, String.raw`d_1=(C_0-C_n)\frac{n}{SYD}`, String.raw`d_2=(C_0-C_n)\frac{n-1}{SYD},\quad d_3=(C_0-C_n)\frac{n-2}{SYD}`, String.raw`D_m=d_1+d_2+\cdots+d_m,\quad C_m=C_0-D_m`],
    symbols: depSymbols + " dⱼ: depreciation in year j; SYD: sum of useful-life digits.",
    sourceFile: "IMG_0772.HEIC", printed: true,
  },
  db: {
    formula: "K = 1-(C_n/C_0)^{1/n}; C_m = C_0(1-K)^m; K_DDB = 2/n",
    latex: [String.raw`K=1-\sqrt[n]{\frac{C_n}{C_0}}`, String.raw`C_m=C_0(1-K)^m`, String.raw`K_{DDB}=\frac{2}{n}\quad\text{(double declining-balance extension)}`],
    symbols: depSymbols + " K: annual fraction of beginning book value. DDB uses 2/n, not the salvage-derived K.",
    sourceFile: "IMG_0773.HEIC", printed: false,
  },
  real: {
    formula: "F = P(1+f)^n; F = P(1+i_c)^n; i_c = i+f+if",
    latex: [String.raw`F=P(1+f)^n`, String.raw`F=P(1+i_c)^n`, String.raw`i_c=i+f+if`],
    symbols: "P: present price; F: future price; f: inflation; n: years; i: real interest rate; i_c: combined interest-inflation rate.",
    sourceFile: "IMG_0773.HEIC", printed: true,
  },
  annualSL: {
    formula: "AC = d+C_0r+OM; d = (C_0-C_n)/n",
    latex: [String.raw`AC=d+C_0r+OM`, String.raw`d=\frac{C_0-C_n}{n}`],
    symbols: "AC: annual cost; d: annual depreciation; C₀: first cost; r: annual interest on capital; OM: yearly operation and maintenance.",
    sourceFile: "IMG_0774.HEIC", printed: true,
  },
  annualSF: {
    formula: "AC = d+C_0r+OM; d = (C_0-C_n)i/[(1+i)^n-1]",
    latex: [String.raw`AC=d+C_0r+OM`, String.raw`d=\frac{(C_0-C_n)i}{(1+i)^n-1}`],
    symbols: "AC: annual cost; d: annual fund deposit; C₀: first cost; r: annual interest on capital; OM: annual operating cost; i: fund rate.",
    sourceFile: "IMG_0774.HEIC", printed: false,
  },
  cc: {
    formula: "CC = C_0+P; P = A/i; P_recurring = (C_replacement-C_n)/[(1+i)^n-1]",
    latex: [String.raw`CC=C_0+P`, String.raw`P=\frac{A}{i}`, String.raw`P_{recurring}=\frac{C_{replacement}-C_n}{(1+i)^n-1}\quad\text{(recurring-replacement extension)}`],
    symbols: "CC: capitalized cost; C₀: initial cost; P: present worth of recurring expenses; A: annual expense; i: annual rate; n: replacement interval; Cₙ: salvage.",
    sourceFile: "IMG_0774.HEIC", printed: false,
  },
  bcr: {
    formula: "BCR = PV_benefit/PV_cost",
    latex: [String.raw`BCR=\frac{PV_{benefit}}{PV_{cost}}`],
    symbols: "PV: present value; use the same rate and study period for benefits and costs.",
    sourceFile: "IMG_0775.HEIC", printed: true,
  },
  bond: {
    formula: "P = D[(1+i)^n-1]/[(1+i)^n i]+C/(1+i)^n",
    latex: [String.raw`P=\frac{D[(1+i)^n-1]}{(1+i)^n i}+\frac{C}{(1+i)^n}`],
    symbols: "P: present bond price; D: dividend per coupon period; C: redemption price; i: yield per coupon period; n: coupon periods; F: face value.",
    sourceFile: "IMG_0775.HEIC", printed: true,
  },
};
