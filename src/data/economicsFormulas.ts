export interface EconomicsFormula {
  id: string;
  title: string;
  formula: string;
  symbols: string;
  useWhen: string;
  trap: string;
  day: number;
}
const common =
  "P: present amount; F: future amount; A: equal periodic payment; i: decimal interest per payment period; n: number of periods.";
export const ECONOMICS_FORMULAS: EconomicsFormula[] = [
  {
    id: "simple",
    title: "Simple interest",
    formula: "I = Prt; F = P(1+rt); P = F/(1+rt)",
    symbols:
      "I: interest; r: decimal annual rate; t: years (days/360 ordinary, days/365 or 366 exact).",
    useWhen: "Interest is charged only on the original principal.",
    trap: "Identify the day basis; exclude the starting date when counting elapsed days.",
    day: 1,
  },
  {
    id: "compound",
    title: "Single-payment compound interest",
    formula: "F = P(1+i)^n; P = F/(1+i)^n; I = F-P",
    symbols: common,
    useWhen: "One amount grows or is discounted over time.",
    trap: "Use i=r/m and n=mt only when r is a nominal rate compounded m times yearly.",
    day: 1,
  },
  {
    id: "rate",
    title: "Match interest to the payment period",
    formula:
      "i_e = (1+r/m)^m-1; i_p = (1+r/m)^{m/p}-1; r_2 = m_2[(1+r_1/m_1)^{m_1/m_2}-1]",
    symbols:
      "r: nominal annual rate; m: compoundings/year; p: payments/year; iₑ: effective annual rate; iₚ: effective rate/payment period.",
    useWhen:
      "Compounding and payment intervals differ, or equivalent rates are requested.",
    trap: "For an effective annual rate iₑ, use iₚ=(1+iₑ)^(1/p)−1. Never divide an effective annual rate by 12.",
    day: 2,
  },
  {
    id: "continuous",
    title: "Continuous compounding",
    formula: "F = Pe^{rt}; i_e = e^r-1; r = ln(1+i_e); t = ln(F/P)/r",
    symbols:
      "r: continuous decimal annual rate; t: years; e: exponential constant.",
    useWhen: "The question explicitly says compounded continuously.",
    trap: "Use the eˣ function for growth and ln for time or rate.",
    day: 2,
  },
  {
    id: "pa",
    title: "Ordinary annuity — present worth",
    formula: "P = A[1-(1+i)^{-n}]/i",
    symbols: common,
    useWhen:
      "Equal payments occur at each period-end; first payment is one period away.",
    trap: "The P/A value is located one period before the first payment.",
    day: 3,
  },
  {
    id: "fa",
    title: "Ordinary annuity — future worth",
    formula: "F = A[(1+i)^n-1]/i",
    symbols: common,
    useWhen: "Equal deposits accumulate to the date of the final deposit.",
    trap: "The final deposit earns zero additional periods at that date.",
    day: 3,
  },
  {
    id: "cr",
    title: "Capital recovery / loan payment",
    formula: "A = Pi/[1-(1+i)^{-n}]",
    symbols: common,
    useWhen: "A present amount is repaid by equal period-end payments.",
    trap: "Deduct the down payment before calculating the financed principal.",
    day: 3,
  },
  {
    id: "sf",
    title: "Sinking-fund deposit",
    formula: "A = Fi/[(1+i)^n-1]",
    symbols: common,
    useWhen: "Find equal deposits needed to reach a future target.",
    trap: "For replacement savings, the target may be cost minus salvage.",
    day: 3,
  },
  {
    id: "due",
    title: "Beginning-of-period annuity",
    formula:
      "P_due = P_ordinary(1+i); F_due = F_ordinary(1+i); A_due = A_ordinary/(1+i)",
    symbols: common,
    useWhen:
      "The first payment is now, or each deposit is at the beginning of a period.",
    trap: "Count payments on a timeline; do not add an extra payment.",
    day: 4,
  },
  {
    id: "deferred",
    title: "Deferred annuity",
    formula: "P_0 = A[1-(1+i)^{-n}]/[i(1+i)^{k-1}]",
    symbols: common + " k: period of first payment.",
    useWhen: "An equal series starts later than period 1.",
    trap: "Discount k−1 periods, not k, because P/A is one period before the first payment.",
    day: 4,
  },
  {
    id: "perpetuity",
    title: "Perpetuity",
    formula: "P = A/i; P_0 = A/[i(1+i)^{k-1}]",
    symbols: common + " k: first-payment period.",
    useWhen: "Payments repeat forever, with positive i.",
    trap: "Match i to the payment interval before dividing.",
    day: 4,
  },
  {
    id: "cashflow",
    title: "Unequal cash flows and arithmetic gradient",
    formula:
      "P = Σ[C_t/(1+i)^t]; F_N = Σ[C_t(1+i)^{N-t}]; A_G = G[1/i-n/((1+i)^n-1)]",
    symbols:
      "Cₜ: cash flow at period t; N: focal period; G: yearly increment (zero gradient at year 1). " +
      common,
    useWhen:
      "Amounts change, rates change in stages, or payments need a common focal date.",
    trap: "Choose one date and move every amount to that date. For a gradient, A=A₁+A_G.",
    day: 4,
  },
  {
    id: "sl",
    title: "Straight-line depreciation",
    formula: "D = (C-S)/n; BV_m = C-mD; d = D/C",
    symbols:
      "C: installed first cost; S: net salvage; D: annual depreciation; BVₘ: book value after m years; d: annual fraction of first cost.",
    useWhen: "An equal depreciation charge is taken every year.",
    trap: "Installation adds to first cost; dismantling reduces net salvage.",
    day: 5,
  },
  {
    id: "syd",
    title: "Sum-of-years digits",
    formula: "SYD = n(n+1)/2; D_m = (C-S)(n-m+1)/SYD; BV_m = C-ΣD_j",
    symbols: "C: first cost; S: salvage; n: life; m: year number.",
    useWhen: "Depreciation is accelerated using descending year digits.",
    trap: "Year m uses n−m+1. Total depreciation and book value are different questions.",
    day: 5,
  },
  {
    id: "db",
    title: "Declining balance and double declining balance",
    formula: "k = 1-(S/C)^{1/n}; BV_m = C(1-k)^m; D_m = kBV_{m-1}; k_DDB = 2/n",
    symbols:
      "k: annual fraction of beginning book value; C: cost; S: salvage floor; n: life; m: elapsed years.",
    useWhen: "A constant percentage of book value is depreciated each year.",
    trap: "DDB uses 2/n, not the rate derived from salvage. Do not depreciate below salvage; zero-salvage restriction applies to salvage-derived fixed-percentage DB.",
    day: 5,
  },
  {
    id: "sinkingDep",
    title: "Sinking-fund depreciation",
    formula:
      "A = (C-S)i/[(1+i)^n-1]; TD_m = A[(1+i)^m-1]/i; D_m = A(1+i)^{m-1}",
    symbols:
      "A: fixed annual fund deposit; TDₘ: accumulated depreciation; Dₘ: year-m depreciation charge.",
    useWhen:
      "Depreciation is represented by an interest-earning replacement fund.",
    trap: "The fixed deposit A is different from the increasing annual depreciation charge Dₘ.",
    day: 5,
  },
  {
    id: "real",
    title: "Inflation and real purchasing power",
    formula:
      "1+i_nominal = (1+i_real)(1+f); F_real = F_nominal/(1+f)^t; C_future = C_now(1+f)^t",
    symbols:
      "f: inflation fraction per year; real: constant purchasing-power terms; nominal: money at that date.",
    useWhen:
      "Convert future money to today’s purchasing power or combine inflation and return.",
    trap: "Adding percentages is an approximation; multiply growth factors for the exact rate.",
    day: 6,
  },
  {
    id: "euac",
    title: "Equivalent uniform annual cost",
    formula: "EUAC = Ci/[1-(1+i)^{-n}] - Si/[(1+i)^n-1] + O",
    symbols:
      "C: initial cost; S: salvage; O: uniform annual operation and maintenance. " +
      common,
    useWhen: "Compare equivalent services by annual cost.",
    trap: "Discount unequal maintenance first, then annualize it. State repeatability assumptions for unequal lives.",
    day: 6,
  },
  {
    id: "annualSL",
    title: "Handout convention: annual cost with straight line",
    formula: "AC = (C-S)/n + iC + O",
    symbols:
      "C: first cost; S: salvage; O: annual running cost; i: annual interest.",
    useWhen:
      "The source explicitly requests straight-line annual cost under this convention.",
    trap: "This handout convention charges interest on original capital; it is not the capital-recovery EUAC formula.",
    day: 6,
  },
  {
    id: "annualSF",
    title: "Handout convention: annual cost with sinking fund",
    formula: "AC = (C-S)i/[(1+i)^n-1] + iC + O",
    symbols: "C: first cost; S: salvage; O: annual operation cost.",
    useWhen:
      "Annual cost combines replacement deposit and interest on original capital.",
    trap: "Keep fund deposit and interest on capital separate.",
    day: 6,
  },
  {
    id: "cc",
    title: "Capitalized cost",
    formula: "CC = C + O/i + (C_replacement-S)/[(1+i)^n-1]",
    symbols:
      "C: initial cost; O: perpetual annual expense; n: replacement interval; S: salvage from each replacement.",
    useWhen: "A service is maintained indefinitely with positive interest.",
    trap: "Recurring replacements begin at year n; include first cost once.",
    day: 6,
  },
  {
    id: "bcr",
    title: "Benefit–cost ratio",
    formula: "B/C = PW(benefits)/PW(costs); NPV = PW(benefits)-PW(costs)",
    symbols:
      "PW: present worth using the same discount rate and horizon for both sides.",
    useWhen: "Compare project benefits with costs.",
    trap: "B/C≥1 corresponds to nonnegative NPV under the stated cash flows; mutually exclusive alternatives need incremental analysis.",
    day: 7,
  },
  {
    id: "irr",
    title: "Rate of return",
    formula: "0 = -P + Σ[C_t/(1+x)^t]",
    symbols:
      "x: unknown periodic return; P: initial investment; Cₜ: later net receipts.",
    useWhen: "Solve for the rate that makes present worth zero.",
    trap: "Use a decimal X in SOLVE and verify the residual. Nonconventional cash flows can have multiple or no IRRs.",
    day: 7,
  },
  {
    id: "bond",
    title: "Bond price and yield",
    formula: "Price = Coupon[1-(1+i)^{-n}]/i + Redemption/(1+i)^n",
    symbols:
      "Coupon: payment per coupon period; i: yield per coupon period; n: number of coupons.",
    useWhen: "Price a bond or solve for yield.",
    trap: "Coupon rate determines cash paid; yield discounts cash. They are not interchangeable.",
    day: 7,
  },
  {
    id: "breakEven",
    title: "Break-even quantity and payback",
    formula:
      "Q = FC/(SP-VC); Profit = Q(SP-VC)-FC; Payback = Investment/annual_net_receipts",
    symbols: "FC: fixed cost; SP: unit selling price; VC: unit variable cost.",
    useWhen:
      "Revenue must cover fixed and variable costs; simple payback assumes constant annual net receipts.",
    trap: "Round Q upward for indivisible units. Simple payback ignores the time value of money.",
    day: 7,
  },
];
export const formulaById = Object.fromEntries(
  ECONOMICS_FORMULAS.map((f) => [f.id, f]),
);
export const ECONOMICS_SOURCE_ROOT =
  "https://drive.google.com/drive/folders/13xPdd6pHRaJ_HsX3cmFlluqZ93tCATBG";
export const ECONOMICS_SAMPLE_ROOT =
  "https://drive.google.com/drive/folders/1dmr64S1v8SQRP3KTx4ZdRQ56SntGwwZa";
export const CANON_MANUAL =
  "https://ij.manual.canon/cal/webmanual/WebPortal/pdf/F-789SGA%20(EXP)_EN.pdf";
export const ECONOMICS_SOURCE_SHEETS = [
  ...Array.from({ length: 10 }, (_, i) => `IMG_0${766 + i}.HEIC`),
  ...Array.from({ length: 10 }, (_, i) => `IMG_0${778 + i}.HEIC`),
];
