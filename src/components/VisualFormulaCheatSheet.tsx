import React, { useState } from 'react';
import { SubjectType } from '../types';
import { CleanMath, StackedFraction } from './CleanMath';

interface FormulaCard {
  subject: SubjectType;
  category: string;
  name: string;
  formula: string;
  variables: string;
  tip: string;
}

const CHEAT_SHEET_FORMULAS: FormulaCard[] = [
  // ==================== MATHEMATICS ====================
  {
    subject: 'MATH',
    category: 'Algebra & Roots',
    name: 'Quadratic Formula & Vieta\'s Relations',
    formula: 'x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}  |  x_1 + x_2 = -\\frac{b}{a}  |  x_1 \\cdot x_2 = \\frac{c}{a}',
    variables: 'a, b, c: coefficients of ax² + bx + c = 0',
    tip: 'If discriminant b² - 4ac = 0, roots are real and equal (critical damping in RLC circuits).'
  },
  {
    subject: 'MATH',
    category: 'Progressions',
    name: 'Arithmetic & Geometric Sequences',
    formula: 'a_n = a_1 + (n-1)d  |  S_n = \\frac{n}{2}(2a_1 + (n-1)d)  |  S_n = \\frac{a_1(r^n - 1)}{r - 1}',
    variables: 'a₁: first term, d: common difference, r: common ratio, n: term number',
    tip: 'For infinite GP (|r| < 1): S_inf = a₁ / (1 - r).'
  },
  {
    subject: 'MATH',
    category: 'Trigonometry',
    name: 'Fundamental Identities & Law of Cosines',
    formula: '\\sin^2\\theta + \\cos^2\\theta = 1  |  c^2 = a^2 + b^2 - 2ab \\cdot \\cos(C)  |  \\tan(\\theta) = \\frac{\\sin(\\theta)}{\\cos(\\theta)}',
    variables: 'a, b, c: triangle side lengths, C: included opposite angle',
    tip: 'Used directly to calculate resultant vectors in mechanics and 3-phase line current sums.'
  },
  {
    subject: 'MATH',
    category: 'Analytic Geometry',
    name: 'Point-to-Line Distance & Conics',
    formula: 'd = \\frac{|Ax_1 + By_1 + C|}{\\sqrt{A^2 + B^2}}  |  B^2 - 4AC',
    variables: 'Ax + By + C = 0: line equation, (x₁, y₁): given point',
    tip: 'B² - 4AC < 0: Ellipse (or circle); = 0: Parabola; > 0: Hyperbola.'
  },
  {
    subject: 'MATH',
    category: 'Differential Calculus',
    name: 'Derivatives of Motion & Electrical Transients',
    formula: 'i(t) = \\frac{dq}{dt}  |  v_L(t) = L \\cdot \\frac{di}{dt}  |  i_C(t) = C \\cdot \\frac{dv}{dt}',
    variables: 'q: Coulombs, i: Amperes, L: Inductance (H), C: Capacitance (F)',
    tip: 'An inductor opposes sudden changes in current. A capacitor opposes sudden changes in voltage.'
  },
  {
    subject: 'MATH',
    category: 'Integral Calculus',
    name: 'RMS and Average Sinusoidal Values',
    formula: 'V_{rms} = \\frac{V_{max}}{\\sqrt{2}} \\approx 0.7071 V_{max}  |  V_{avg} = \\frac{2}{\\pi} V_{max} \\approx 0.637 V_{max}',
    variables: 'Applies to pure sinusoidal alternating waveforms',
    tip: 'Philippine 230V household voltage is the RMS value; the actual voltage peaks at 325V!'
  },
  {
    subject: 'MATH',
    category: 'Differential Equations',
    name: '1st Order Linear Integrating Factor & 2nd Order Damping',
    formula: 'y \\cdot e^{\\int P dx} = \\int Q \\cdot e^{\\int P dx} dx + C  |  s^2 + \\frac{R}{L}s + \\frac{1}{LC} = 0',
    variables: 'P(x), Q(x): differential functions, s: complex frequency roots',
    tip: 'Underdamped if R < 2√(L/C), Critically damped if R = 2√(L/C), Overdamped if R > 2√(L/C).'
  },
  {
    subject: 'MATH',
    category: 'Laplace Transforms',
    name: 'Standard Operational Laplace Pairs',
    formula: 'L\\{1\\} = \\frac{1}{s}  |  L\\{e^{at}\\} = \\frac{1}{s - a}  |  L\\{\\sin(\\omega t)\\} = \\frac{\\omega}{s^2 + \\omega^2}  |  L\\{\\cos(\\omega t)\\} = \\frac{s}{s^2 + \\omega^2}',
    variables: 's: complex frequency variable = σ + jω',
    tip: 'Transforms differential equations in the time domain into simple algebraic equations in the s-domain.'
  },
  {
    subject: 'MATH',
    category: 'Probability & Combinatorics',
    name: 'Permutations and Combinations',
    formula: 'P(n, r) = \\frac{n!}{(n - r)!}  |  C(n, r) = \\frac{n!}{r! \\cdot (n - r)!}',
    variables: 'n: total items, r: selected items',
    tip: 'Use Permutation when ORDER matters (e.g. relay priority); use Combination when order does not matter.'
  },
  {
    subject: 'MATH',
    category: 'Engineering Economy',
    name: 'Compound Interest & Annuity',
    formula: 'F = P(1 + i)^n  |  A = P \\left[ \\frac{i(1 + i)^n}{(1 + i)^n - 1} \\right]',
    variables: 'P: Present Worth, F: Future Worth, A: Uniform annual payment, i: interest rate, n: years',
    tip: 'For continuous compounding: F = P · e^(r·n).'
  },
  {
    subject: 'MATH',
    category: 'Engineering Economy',
    name: 'Depreciation (Straight-Line & Sinking Fund)',
    formula: 'd_{SL} = \\frac{FC - SV}{n}  |  d_{SF} = (FC - SV) \\left[ \\frac{i}{(1 + i)^n - 1} \\right]',
    variables: 'FC: First cost, SV: Salvage value, n: useful life in years, i: interest rate',
    tip: 'Straight-line has identical annual depreciation; sinking fund accounts for interest accumulation.'
  },

  // ==================== ESAS (ENGINEERING ECONOMICS) ====================
  // Main Reference: Drive Folder "ESAS - Engineering Economics"
  {
    subject: 'ESAS',
    category: 'Time Value of Money',
    name: 'Simple Interest & Commercial Discount',
    formula: 'I_{ord} = P \\cdot i \\cdot \\frac{d}{360}  |  I_{exact} = P \\cdot i \\cdot \\frac{d}{365}  |  d = \\frac{i}{1 + i}  |  i = \\frac{d}{1 - d}',
    variables: 'P: Principal, i: interest rate, d: loan days or discount rate. Default to 360-day banker\'s year.',
    tip: 'Canon F-789SGA: Unless "exact" is specified, always use 360 days in the denominator for simple interest.'
  },
  {
    subject: 'ESAS',
    category: 'Time Value of Money',
    name: 'Compound Interest Lump Sum (Future & Present Worth)',
    formula: 'F = P(1 + i)^n = P \\left(1 + \\frac{r}{m}\\right)^{m \\cdot t}  |  P = \\frac{F}{(1 + i)^n} = F(1 + i)^{-n}',
    variables: 'P: Present Worth, F: Future Worth, i = \\frac{r}{m} (periodic rate), n = m \\cdot t (total periods)',
    tip: 'Canon F-789SGA CalTech: Solve unknown n or i with [SHIFT] [SOLVE]. For continuous compounding: F = P \\cdot e^{r \\cdot t}.'
  },
  {
    subject: 'ESAS',
    category: 'Time Value of Money',
    name: 'Nominal vs Effective Annual Rate (ER) & Continuous Compounding',
    formula: 'ER = \\left(1 + \\frac{r}{m}\\right)^m - 1  |  ER_{cont} = e^r - 1  |  F_{cont} = P \\cdot e^{r \\cdot t}',
    variables: 'r: nominal annual rate, m: compounding periods per year (m=4 quarterly, m=12 monthly, m=365 daily)',
    tip: 'Canon F-789SGA: Enter (1 + r÷m)^m - 1, then [×] 100 [=]. Effective rate is strictly higher than nominal for m > 1.'
  },
  {
    subject: 'ESAS',
    category: 'Annuities',
    name: 'Ordinary Annuity Present & Future Worth',
    formula: 'P = A \\left[ \\frac{1 - (1 + i)^{-n}}{i} \\right]  |  F = A \\left[ \\frac{(1 + i)^n - 1}{i} \\right]',
    variables: 'A: uniform periodic payment (end of period), i: periodic rate, n: number of payments',
    tip: 'Canon F-789SGA CalTech: Store i into memory [A] via [SHIFT] [STO] [A]. Use natural fraction key [■/□] to enter factor.'
  },
  {
    subject: 'ESAS',
    category: 'Annuities',
    name: 'Sinking Fund & Capital Recovery Factors',
    formula: 'A_{SF} = F \\left[ \\frac{i}{(1 + i)^n - 1} \\right]  |  A_{CR} = P \\left[ \\frac{i(1 + i)^n}{(1 + i)^n - 1} \\right] = P \\left[ \\frac{i}{1 - (1 + i)^{-n}} \\right]',
    variables: 'A_SF: periodic deposit to reach future lump sum F; A_CR: periodic installment to amortize loan P',
    tip: 'Canon F-789SGA: Sinking fund solves for A given F; Capital recovery solves for A given present principal P.'
  },
  {
    subject: 'ESAS',
    category: 'Annuities',
    name: 'Annuity Due & Deferred Annuity',
    formula: 'P_{due} = P_{ord}(1 + i)  |  P_{def} = P_{ord}(1 + i)^{-m}',
    variables: 'm: deferred periods (Period of first payment - 1)',
    tip: 'Canon F-789SGA: If payments are at the BEGINNING of each period (due), multiply ordinary annuity by (1 + i).'
  },
  {
    subject: 'ESAS',
    category: 'Capitalized Cost',
    name: 'Perpetuity & Capitalized Cost of Infrastructure',
    formula: 'P = \\frac{A}{i}  |  CC = FC + \\frac{OM}{i} + \\frac{RC - SV}{(1 + i)^k - 1}',
    variables: 'FC: First cost, OM: Annual O&M, RC - SV: Net replacement cost every k years, i: annual discount rate',
    tip: 'Canon F-789SGA CalTech: The periodic renewal denominator is ((1+i)^k - 1). Never subtract 1 from the annual OM term!'
  },
  {
    subject: 'ESAS',
    category: 'Depreciation (SLM & SFM)',
    name: 'Straight-Line (SLM) & Sinking Fund (SFM) Depreciation',
    formula: 'd_{SL} = \\frac{FC - SV}{n}  |  d_{SF} = (FC - SV) \\left[ \\frac{i}{(1 + i)^n - 1} \\right]  |  BV_m = FC - D_m',
    variables: 'FC: First cost, SV: Salvage value, n: useful economic life in years, i: interest rate',
    tip: 'Canon F-789SGA: In SLM, annual depreciation is constant. In SFM, reserve earns compound interest.'
  },
  {
    subject: 'ESAS',
    category: 'Depreciation (Accelerated)',
    name: 'Sum-of-the-Years-Digits (SOYD) Depreciation',
    formula: 'd_m = (FC - SV) \\left[ \\frac{n - m + 1}{\\Sigma} \\right]  |  \\Sigma = \\frac{n(n + 1)}{2}',
    variables: 'm: specific year (1, 2, ... n), Σ = sum of digits',
    tip: 'Canon F-789SGA CalTech: Compute Σ for any large n using [SHIFT] [log] (Σ), type [ALPHA] [X], from 1 to n.'
  },
  {
    subject: 'ESAS',
    category: 'Depreciation (Accelerated)',
    name: 'Declining Balance (DBM / Matheson) & DDBM',
    formula: 'k_{DBM} = 1 - \\sqrt[n]{\\frac{SV}{FC}} = 1 - \\left(\\frac{SV}{FC}\\right)^{\\frac{1}{n}}  |  k_{DDBM} = \\frac{2}{n}  |  BV_m = FC(1 - k)^m',
    variables: 'k: constant depreciation rate, BV_m: Book value at end of year m',
    tip: 'Canon F-789SGA CalTech: Compute rate k, press [SHIFT] [STO] [A], then calculate BV_m = FC × (1 - A)^m.'
  },
  {
    subject: 'ESAS',
    category: 'Gradient Series & Bonds',
    name: 'Arithmetic Gradient Series to Uniform Annuity',
    formula: '(A/G, i, n) = \\frac{1}{i} - \\frac{n}{(1 + i)^n - 1}  |  A_{total} = A_1 \\pm G(A/G, i, n)',
    variables: 'G: constant annual increase/decrease, A_1: first-year cash flow, i: rate, n: years',
    tip: 'Canon F-789SGA: Enter the (A/G) factor directly with the fraction key. Add (+G) if costs increase, subtract (-G) if decreasing.'
  },
  {
    subject: 'ESAS',
    category: 'Gradient Series & Bonds',
    name: 'Bond Purchase Price Valuation (Periodic Coupons)',
    formula: 'P = \\frac{C}{(1 + i)^n} + Fr \\left[ \\frac{1 - (1 + i)^{-n}}{i} \\right]',
    variables: 'C: redemption price (usually face value F), Fr: periodic coupon dividend, i: yield rate per period, n: periods',
    tip: 'Canon F-789SGA: For semi-annual coupons: divide coupon by 2, divide yield by 2, double years (n = 2 · t).'
  },
  {
    subject: 'ESAS',
    category: 'Financial Evaluation',
    name: 'Break-Even Volume & Margin',
    formula: 'Q_{BEP} = \\frac{FC}{p - v}  |  S_{BEP} = \\frac{FC}{1 - \\frac{v}{p}}',
    variables: 'FC: Total fixed overhead, p: selling price per unit, v: variable cost per unit',
    tip: 'Contribution margin is (p - v). Break-even sales in Pesos = Q_BEP · p.'
  },
  {
    subject: 'ESAS',
    category: 'Financial Evaluation',
    name: 'Internal Rate of Return (IRR) & Benefit-Cost Ratio',
    formula: 'NPV(IRR) = \\sum_{t=0}^n \\frac{CF_t}{(1 + IRR)^t} = 0  |  B/C = \\frac{PW(\\text{Benefits})}{PW(\\text{Costs})} \\ge 1.0',
    variables: 'NPV: Net Present Worth, IRR: Internal discount rate, B/C: Benefit-Cost ratio',
    tip: 'Canon F-789SGA CalTech: Type NPW equation using [ALPHA] [=] 0, then press [SHIFT] [SOLVE] with initial guess 0.1.'
  },

  // ==================== EE PROFESSIONAL ====================
  {
    subject: 'EE',
    category: 'DC Circuits',
    name: 'Maximum Power Transfer Theorem',
    formula: 'P_{max} = \\frac{(V_{th})^2}{4 \\cdot R_{th}}',
    variables: 'V_th: Thevenin voltage, R_th: Thevenin internal resistance',
    tip: 'Occurs when load resistance R_load equals source resistance R_thevenin. Internal efficiency is 50%.'
  },
  {
    subject: 'EE',
    category: 'AC Circuits',
    name: 'Power Triangle & Power Factor Correction',
    formula: 'S^2 = P^2 + Q^2  |  P = S \\cdot \\cos\\theta  |  Q = S \\cdot \\sin\\theta  |  Q_c = P(\\tan\\theta_1 - \\tan\\theta_2)',
    variables: 'P: Real Power (Watts), Q: Reactive Power (VAR), S: Apparent Power (VA)',
    tip: 'Connecting shunt capacitors adds leading VARs, canceling inductive VARs without altering true kW load.'
  },
  {
    subject: 'EE',
    category: 'AC Resonance',
    name: 'Series & Parallel Resonant Frequency',
    formula: 'f_0 = \\frac{1}{2\\pi \\sqrt{L \\cdot C}}  |  Q = \\frac{\\omega_0 L}{R} = \\frac{1}{\\omega_0 C R}',
    variables: 'L: Inductance in Henrys, C: Capacitance in Farads, f₀: resonance in Hz',
    tip: 'At series resonance, impedance is purely resistive and at minimum (Z = R), maximizing current.'
  },
  {
    subject: 'EE',
    category: '3-Phase Systems',
    name: 'Wye and Delta Relations',
    formula: 'Wye: V_L = \\sqrt{3} \\cdot V_{ph} \\angle 30^\\circ, I_L = I_{ph}  |  Delta: V_L = V_{ph}, I_L = \\sqrt{3} \\cdot I_{ph} \\angle -30^\\circ',
    variables: 'V_L: line-to-line voltage, V_ph: phase voltage, I_L: line current, I_ph: phase current',
    tip: 'Total 3-phase power is always P = √3 · V_L · I_L · cos(θ) for balanced loads regardless of connection.'
  },
  {
    subject: 'EE',
    category: '3-Phase Systems',
    name: 'Two-Wattmeter Power Factor Method',
    formula: 'P_{total} = W_1 + W_2  |  Q_{total} = \\sqrt{3}(W_1 - W_2)  |  \\tan(\\theta) = \\frac{\\sqrt{3}(W_1 - W_2)}{W_1 + W_2}',
    variables: 'W₁, W₂: wattmeter power readings',
    tip: 'If power factor is 0.5, one wattmeter reads zero (W₂ = 0). If pf < 0.5, one wattmeter reads negative.'
  },
  {
    subject: 'EE',
    category: 'Transformers',
    name: 'Turns Ratio, EMF Equation & Voltage Regulation',
    formula: 'a = \\frac{N_1}{N_2} = \\frac{V_1}{V_2} = \\frac{I_2}{I_1}  |  E = 4.44 \\cdot f \\cdot N \\cdot B_{max} \\cdot A  |  \\%VR = \\frac{V_{NL} - V_{FL}}{V_{FL}} \\cdot 100\\%',
    variables: 'f: 60 Hz, N: turns, B_max: peak flux density (Tesla), A: core area (m²)',
    tip: 'Maximum transformer efficiency occurs when copper loss equals core iron loss (P_cu = P_core).'
  },
  {
    subject: 'EE',
    category: 'Transformers',
    name: 'Open-Delta (V-V) Transformer Bank Capacity',
    formula: 'S_{V-V} = \\frac{1}{\\sqrt{3}} \\cdot S_{\\Delta-\\Delta} \\approx 0.577 \\cdot S_{\\Delta-\\Delta}',
    variables: 'S_V-V: open-delta rating, S_Δ-Δ: original 3-transformer delta bank rating',
    tip: 'If one transformer in a 3-unit delta bank fails, the remaining two can carry 57.7% of the original 3-unit bank.'
  },
  {
    subject: 'EE',
    category: 'AC Machines (Induction)',
    name: 'Synchronous Speed, Slip & Rotor Power Ratio',
    formula: 'N_s = \\frac{120f}{P}  |  s = \\frac{N_s - N_r}{N_s}  |  P_{gap} : P_{cu} : P_{mech} = 1 : s : (1 - s)',
    variables: 'f: frequency in Hz, P: poles, N_s: synchronous RPM, N_r: shaft RPM, s: slip',
    tip: 'Rotor copper loss is always exactly slip times air-gap power: P_cu_rotor = s · P_gap.'
  },
  {
    subject: 'EE',
    category: 'AC Machines (Synchronous)',
    name: 'Alternator Pitch & Distribution Factors',
    formula: 'k_p = \\cos\\left(\\frac{\\alpha}{2}\\right)  |  k_d = \\frac{\\sin\\left(\\frac{m \\cdot \\beta}{2}\\right)}{m \\cdot \\sin\\left(\\frac{\\beta}{2}\\right)}',
    variables: 'α: chording angle, m: slots per pole per phase, β: slot angle in electrical degrees',
    tip: 'Short-pitching windings eliminates undesirable harmonics (especially 5th and 7th harmonics).'
  },
  {
    subject: 'EE',
    category: 'Power Systems (Per-Unit)',
    name: 'Per-Unit Impedance Base Conversion',
    formula: 'Z_{pu,new} = Z_{pu,old} \\cdot \\left(\\frac{V_{base,old}}{V_{base,new}}\\right)^2 \\cdot \\left(\\frac{S_{base,new}}{S_{base,old}}\\right)',
    variables: 'V_base: rated kV, S_base: rated MVA',
    tip: 'Notice that voltage base ratio is SQUARED and inverted, while MVA base ratio is direct.'
  },
  {
    subject: 'EE',
    category: 'Power Systems (Faults)',
    name: 'Single Line-to-Ground (SLG) Fault Current',
    formula: 'I_f = 3 \\cdot I_{a0} = \\frac{3 \\cdot E_a}{Z_1 + Z_2 + Z_0 + 3Z_f}',
    variables: 'Z₁, Z₂, Z₀: positive, negative, and zero sequence impedances, Z_f: fault impedance',
    tip: 'SLG is the most frequent fault on power systems (~70% of all faults) and requires zero sequence path.'
  },
  {
    subject: 'EE',
    category: 'Transmission Lines',
    name: 'Surge Impedance & Ferranti Effect',
    formula: 'Z_c = \\sqrt{\\frac{L}{C}} \\approx 300 \\text{ to } 400\\,\\Omega  |  V_R > V_S',
    variables: 'L: line inductance per km, C: line capacitance per km',
    tip: 'The Ferranti effect causes receiving-end voltage to exceed sending-end voltage on long lightly loaded lines.'
  },
  {
    subject: 'EE',
    category: 'Illumination Engineering',
    name: 'Lumen Method for Interior Lighting Design',
    formula: 'N_{lamps} = \\frac{E \\cdot \\text{Area}}{\\text{Lumens} \\cdot UF \\cdot MF}',
    variables: 'E: required illuminance in Lux (Lumens/m²), UF: Utilization Factor, MF: Maintenance Factor',
    tip: 'Inverse square law: Illuminance E = I / d² where I is luminous intensity in Candelas.'
  }
];

export const VisualFormulaCheatSheet: React.FC = () => {
  const [filterSub, setFilterSub] = useState<'ALL' | SubjectType>('ALL');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [showLiveSolvers, setShowLiveSolvers] = useState<boolean>(false);

  // Live Solver 1: Ohm's Law & DC Power
  const [ohmV, setOhmV] = useState<number>(230);
  const [ohmR, setOhmR] = useState<number>(46);
  const ohmI = ohmR > 0 ? (ohmV / ohmR).toFixed(2) : '0';
  const ohmP = ohmR > 0 ? ((ohmV * ohmV) / ohmR).toFixed(1) : '0';

  // Live Solver 2: AC Impedance & Power Factor
  const [acR, setAcR] = useState<number>(30);
  const [acXl, setAcXl] = useState<number>(60);
  const [acXc, setAcXc] = useState<number>(20);
  const netX = acXl - acXc;
  const acZ = Math.sqrt(acR * acR + netX * netX).toFixed(2);
  const acPf = (acR / Math.max(0.01, Math.sqrt(acR * acR + netX * netX))).toFixed(3);

  // Live Solver 3: Induction Motor Speed & Slip
  const [motorPoles, setMotorPoles] = useState<number>(4);
  const [motorF, setMotorF] = useState<number>(60);
  const [motorRpm, setMotorRpm] = useState<number>(1728);
  const calcNs = Math.round((120 * motorF) / motorPoles);
  const calcSlipPct = calcNs > 0 ? (((calcNs - motorRpm) / calcNs) * 100).toFixed(2) : '0';

  // Live Solver 4: Engineering Economics (Compound Interest & Doubling Time)
  const [econP, setEconP] = useState<number>(100000);
  const [econR, setEconR] = useState<number>(8); // 8%
  const [econM, setEconM] = useState<number>(4); // Quarterly
  const [econT, setEconT] = useState<number>(5); // 5 years
  const periodicI = (econR / 100) / Math.max(1, econM);
  const totalN = Math.max(1, econM) * econT;
  const econF = Math.round(econP * Math.pow(1 + periodicI, totalN));
  const doublingYears = periodicI > 0 ? (Math.log(2) / (Math.max(1, econM) * Math.log(1 + periodicI))).toFixed(2) : '0';
  const effectiveRate = ((Math.pow(1 + periodicI, Math.max(1, econM)) - 1) * 100).toFixed(2);

  const filtered = CHEAT_SHEET_FORMULAS.filter((f) => {
    const matchesSub = filterSub === 'ALL' || f.subject === filterSub;
    const matchesQuery =
      f.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      f.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      f.formula.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSub && matchesQuery;
  });

  return (
    <div className="space-y-6">
      {/* Search & Subject Bar */}
      <div className="border border-slate-800 bg-slate-900/90 p-5 rounded-lg space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-base font-bold text-slate-100 tracking-tight">Formula Bank</h2>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">
                {filtered.length} Formulas
              </span>
            </div>
            <p className="text-slate-400 text-xs mt-1">
              Governing formulas, variable definitions, and exam notes across Math, ESAS, and EE
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setShowLiveSolvers(!showLiveSolvers)}
              className={`px-3 py-1.5 rounded text-xs font-bold border transition-colors ${
                showLiveSolvers
                  ? 'bg-amber-500 text-slate-950 border-amber-400 font-bold'
                  : 'bg-slate-950 border-amber-500/50 text-amber-400 hover:bg-amber-500/10'
              }`}
            >
              {showLiveSolvers ? 'Hide Solvers' : 'Interactive Solvers'}
            </button>

            <div className="flex gap-1.5">
              {(['ALL', 'MATH', 'ESAS', 'EE'] as const).map((sub) => (
                <button
                  key={sub}
                  onClick={() => setFilterSub(sub)}
                  className={`px-3 py-1.5 rounded text-xs font-semibold border transition-colors ${
                    filterSub === sub
                      ? 'bg-amber-500/10 border-amber-500 text-amber-400'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {sub === 'ALL' ? 'All' : sub}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Live Interactive Solvers Panel */}
        {showLiveSolvers && (
          <div className="pt-3 border-t border-slate-800 space-y-3">
            <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider flex items-center gap-2">
              <span>Interactive Mini Solvers</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              {/* Solver 1: Ohm's Law */}
              <div className="bg-slate-950 border border-slate-800 p-3.5 rounded-lg space-y-2 text-xs">
                <span className="font-bold text-slate-200 block">1. DC Ohm's Law &amp; Power</span>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <span className="text-[10px] text-slate-400 block">Voltage V:</span>
                    <input
                      type="number"
                      value={ohmV}
                      onChange={(e) => setOhmV(Number(e.target.value))}
                      className="w-full bg-slate-900 border border-slate-800 rounded px-2 py-1 text-xs text-amber-300 font-mono"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block">Resistance R:</span>
                    <input
                      type="number"
                      value={ohmR}
                      onChange={(e) => setOhmR(Number(e.target.value))}
                      className="w-full bg-slate-900 border border-slate-800 rounded px-2 py-1 text-xs text-cyan-300 font-mono"
                    />
                  </div>
                </div>
                <div className="pt-2 border-t border-slate-800/80 font-mono text-[11px] text-slate-300 space-y-1.5">
                  <div className="flex items-center gap-1.5">
                    <span>Current I = </span>
                    <StackedFraction num="V" den="R" />
                    <span>=</span>
                    <strong className="text-amber-400">{ohmI} A</strong>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span>Power P = </span>
                    <StackedFraction num={<span>V<sup className="text-[0.7em] text-amber-300 ml-0.5">2</sup></span>} den="R" />
                    <span>=</span>
                    <strong className="text-emerald-400">{ohmP} W</strong>
                  </div>
                </div>
              </div>

              {/* Solver 2: AC Impedance */}
              <div className="bg-slate-950 border border-slate-800 p-3.5 rounded-lg space-y-2 text-xs">
                <span className="font-bold text-slate-200 block">2. AC Series Impedance |Z|</span>
                <div className="grid grid-cols-3 gap-1.5">
                  <div>
                    <span className="text-[10px] text-slate-400 block">R (Ω):</span>
                    <input
                      type="number"
                      value={acR}
                      onChange={(e) => setAcR(Number(e.target.value))}
                      className="w-full bg-slate-900 border border-slate-800 rounded px-1.5 py-1 text-xs text-slate-200 font-mono"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block">XL (Ω):</span>
                    <input
                      type="number"
                      value={acXl}
                      onChange={(e) => setAcXl(Number(e.target.value))}
                      className="w-full bg-slate-900 border border-slate-800 rounded px-1.5 py-1 text-xs text-cyan-300 font-mono"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block">XC (Ω):</span>
                    <input
                      type="number"
                      value={acXc}
                      onChange={(e) => setAcXc(Number(e.target.value))}
                      className="w-full bg-slate-900 border border-slate-800 rounded px-1.5 py-1 text-xs text-emerald-300 font-mono"
                    />
                  </div>
                </div>
                <div className="pt-2 border-t border-slate-800/80 font-mono text-[11px] text-slate-300 space-y-1.5">
                  <div className="flex items-center gap-1.5">
                    <span>Z = √(R<sup className="text-[0.7em] text-amber-300 ml-0.5">2</sup> + X<sup className="text-[0.7em] text-cyan-300 ml-0.5">2</sup>) = </span>
                    <strong className="text-amber-400">{acZ} Ω</strong>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span>PF = cos(θ) = </span>
                    <StackedFraction num="R" den="Z" />
                    <span>=</span>
                    <strong className="text-cyan-400">{acPf}</strong>
                    <span className="text-slate-400 text-[10px]">({netX > 0 ? 'Lagging' : netX < 0 ? 'Leading' : 'Unity'})</span>
                  </div>
                </div>
              </div>

              {/* Solver 3: Induction Motor */}
              <div className="bg-slate-950 border border-slate-800 p-3.5 rounded-lg space-y-2 text-xs">
                <span className="font-bold text-slate-200 block">3. Motor Speed &amp; Slip</span>
                <div className="grid grid-cols-3 gap-1.5">
                  <div>
                    <span className="text-[10px] text-slate-400 block">Poles:</span>
                    <select
                      value={motorPoles}
                      onChange={(e) => setMotorPoles(Number(e.target.value))}
                      className="w-full bg-slate-900 border border-slate-800 rounded px-1.5 py-1 text-xs text-slate-200 font-mono"
                    >
                      <option value={2}>2</option>
                      <option value={4}>4</option>
                      <option value={6}>6</option>
                      <option value={8}>8</option>
                    </select>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block">Freq (Hz):</span>
                    <select
                      value={motorF}
                      onChange={(e) => setMotorF(Number(e.target.value))}
                      className="w-full bg-slate-900 border border-slate-800 rounded px-1.5 py-1 text-xs text-slate-200 font-mono"
                    >
                      <option value={60}>60</option>
                      <option value={50}>50</option>
                    </select>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block">Rotor Nr:</span>
                    <input
                      type="number"
                      value={motorRpm}
                      onChange={(e) => setMotorRpm(Number(e.target.value))}
                      className="w-full bg-slate-900 border border-slate-800 rounded px-1.5 py-1 text-xs text-amber-300 font-mono"
                    />
                  </div>
                </div>
                <div className="pt-2 border-t border-slate-800/80 font-mono text-[11px] text-slate-300 space-y-1.5">
                  <div className="flex items-center gap-1.5">
                    <span>N<sub className="text-[0.75em] text-slate-400">s</sub> = </span>
                    <StackedFraction num="120 · f" den="P" />
                    <span>=</span>
                    <strong className="text-cyan-400">{calcNs} RPM</strong>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span>Slip s = </span>
                    <StackedFraction num="N_s - N_r" den="N_s" />
                    <span>=</span>
                    <strong className="text-emerald-400">{calcSlipPct}%</strong>
                  </div>
                </div>
              </div>

              {/* Solver 4: Engineering Economics (Compound Interest & Doubling Time) */}
              <div className="bg-slate-950 border border-slate-800 p-3.5 rounded-lg space-y-2 text-xs">
                <span className="font-bold text-amber-400 block">4. Engineering Economics</span>
                <div className="grid grid-cols-2 gap-1.5">
                  <div>
                    <span className="text-[10px] text-slate-400 block">Principal P (₱):</span>
                    <input
                      type="number"
                      value={econP}
                      onChange={(e) => setEconP(Number(e.target.value))}
                      className="w-full bg-slate-900 border border-slate-800 rounded px-1.5 py-1 text-xs text-slate-200 font-mono"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block">Rate r (%/yr):</span>
                    <input
                      type="number"
                      value={econR}
                      onChange={(e) => setEconR(Number(e.target.value))}
                      className="w-full bg-slate-900 border border-slate-800 rounded px-1.5 py-1 text-xs text-amber-300 font-mono"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block">Periods/Yr (m):</span>
                    <select
                      value={econM}
                      onChange={(e) => setEconM(Number(e.target.value))}
                      className="w-full bg-slate-900 border border-slate-800 rounded px-1.5 py-1 text-xs text-slate-200 font-mono"
                    >
                      <option value={1}>Annual (1)</option>
                      <option value={2}>Semi-Annual (2)</option>
                      <option value={4}>Quarterly (4)</option>
                      <option value={12}>Monthly (12)</option>
                    </select>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block">Years (t):</span>
                    <input
                      type="number"
                      value={econT}
                      onChange={(e) => setEconT(Number(e.target.value))}
                      className="w-full bg-slate-900 border border-slate-800 rounded px-1.5 py-1 text-xs text-slate-200 font-mono"
                    />
                  </div>
                </div>
                <div className="pt-2 border-t border-slate-800/80 font-mono text-[11px] text-slate-300 space-y-1">
                  <div className="flex items-center justify-between">
                    <span>Future F = </span>
                    <strong className="text-amber-400">₱{econF.toLocaleString()}</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Effective Rate = </span>
                    <strong className="text-emerald-400">{effectiveRate}%</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Doubling Time = </span>
                    <strong className="text-cyan-400">{doublingYears} yrs</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <input
          type="text"
          placeholder="Filter formulas (e.g. slip, voltage drop, power triangle, carnot, wye, thevenin, laplace)..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-slate-950 border border-slate-700 rounded px-3 py-2 text-xs text-slate-200 placeholder:text-slate-500"
        />
      </div>

      {/* Grid of Formulas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((item, idx) => {
          const subColor =
            item.subject === 'MATH'
              ? 'text-amber-400 bg-amber-500/10 border-amber-500/30'
              : item.subject === 'ESAS'
              ? 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30'
              : 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30';

          return (
            <div key={idx} className="border border-slate-800 bg-slate-900 p-4 rounded-lg space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-200">{item.name}</span>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${subColor}`}>
                  {item.subject} • {item.category}
                </span>
              </div>

              {/* Clean Math Formula Display with Stacked Fractions and Exponents */}
              <div className="bg-slate-950 border border-slate-800 p-3 rounded overflow-x-auto">
                <CleanMath math={item.formula} block className="text-amber-300 font-bold text-sm sm:text-base py-2.5" />
              </div>

              {/* Variable Definitions */}
              <div className="text-[11px] text-slate-400">
                <span className="font-semibold text-slate-300">Variables: </span>
                {item.variables}
              </div>

              {/* Memory Tip */}
              <div className="bg-slate-950/60 border border-slate-800/80 p-2.5 rounded text-[11px] text-slate-300 space-y-0.5">
                <span className="font-mono text-amber-400 text-[10px] uppercase block font-semibold">
                  Exam Note:
                </span>
                <p>{item.tip}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
