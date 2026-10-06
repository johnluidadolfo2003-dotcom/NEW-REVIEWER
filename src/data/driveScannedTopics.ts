import { DriveScannedTopic } from '../types';

export const DRIVE_SCANNED_TOPICS: DriveScannedTopic[] = [
  // ==========================================
  // MATHEMATICS (Files 01 - 04)
  // ==========================================
  {
    id: 'dt-math-1',
    sourceFile: '01_Mathematics_Differential_Integral_Calculus_Reviewer.pdf',
    sourceFileId: 'math-doc-1',
    subject: 'MATH',
    title: 'Derivatives & Instantaneous Rates of Change',
    simpleCoreIdea: 'A derivative is simply the instantaneous speedometer reading of a graph. If something changes over time, its derivative tells you how fast it is changing right now.',
    simpleFormula: 'v(t) = ds / dt,   i(t) = dq / dt,   v_L(t) = L · (di / dt)',
    formulaLabels: 's = position, q = electrical charge (Coulombs), i = current (Amps), L = inductance (Henries)',
    simpleExample: {
      statement: 'If charge flowing through a conductor is q(t) = 5t² + 2t Coulombs, what is current i at t = 3 seconds?',
      steps: [
        'Step 1: Take the derivative: i(t) = dq/dt = 10t + 2',
        'Step 2: Substitute t = 3: i(3) = 10(3) + 2 = 30 + 2 = 32 A'
      ],
      result: 'i = 32 Amperes'
    },
    simpleExamTrap: 'Do not plug in numbers before taking the derivative! Always differentiate the variables first, then plug in the given time.',
    relatedTopicId: 'math-4'
  },
  {
    id: 'dt-math-2',
    sourceFile: '01_Mathematics_Differential_Integral_Calculus_Reviewer.pdf',
    sourceFileId: 'math-doc-1',
    subject: 'MATH',
    title: 'Maxima, Minima & Optimization',
    simpleCoreIdea: 'At the very peak of a mountain or the lowest point of a valley, the ground is completely flat. Therefore, to find the maximum or minimum value, set the derivative to zero.',
    simpleFormula: 'dy / dx = 0',
    formulaLabels: 'dy/dx = slope of the curve. If the second derivative d²y/dx² < 0, it is a Maximum.',
    simpleExample: {
      statement: 'A rectangular area is enclosed with 100 meters of fencing. Find the width x that gives maximum enclosed area.',
      steps: [
        'Step 1: Perimeter: 2x + 2y = 100 ⟹ y = 50 - x',
        'Step 2: Area function: A = x · y = x(50 - x) = 50x - x²',
        'Step 3: Set derivative to zero: dA/dx = 50 - 2x = 0 ⟹ x = 25 meters'
      ],
      result: 'Width x = 25 m, Length y = 25 m (Square gives max area: 625 m²)'
    },
    simpleExamTrap: 'Always check if the problem asks for the dimension (e.g. 25 m) or the maximum area itself (625 m²).',
    relatedTopicId: 'math-4'
  },
  {
    id: 'dt-math-3',
    sourceFile: '01_Mathematics_Differential_Integral_Calculus_Reviewer.pdf',
    sourceFileId: 'math-doc-1',
    subject: 'MATH',
    title: 'Integration & RMS Effective Value',
    simpleCoreIdea: 'Integration is just adding up millions of tiny slices together to find the total sum. In AC electricity, the RMS value is the equivalent DC value that produces the exact same heating effect.',
    simpleFormula: 'V_rms = V_max / √2 ≈ 0.7071 · V_max',
    formulaLabels: 'V_rms = Root Mean Square effective voltage, V_max = Peak sinusoidal amplitude',
    simpleExample: {
      statement: 'Philippine household outlets deliver 230 V RMS AC. What is the peak voltage of the wave?',
      steps: [
        'Step 1: Rearrange formula: V_max = V_rms · √2',
        'Step 2: Calculate: V_max = 230 · 1.4142 = 325.27 V'
      ],
      result: 'Peak Voltage V_max = 325.3 V'
    },
    simpleExamTrap: 'AC voltmeters and ammeters always measure RMS values, never peak values, unless specifically labeled as a peak detector.',
    relatedTopicId: 'math-4'
  },
  {
    id: 'dt-math-4',
    sourceFile: '02_Advanced_Math_Differential_Equations_Laplace_Transforms.pdf',
    sourceFileId: 'math-doc-2',
    subject: 'MATH',
    title: '1st Order RC & RL Circuit Transients',
    simpleCoreIdea: 'When you turn on a switch, voltages and currents do not jump instantly. They curve smoothly according to a time constant τ (tau). After 5 time constants (5τ), the circuit is 99.3% settled in steady state.',
    simpleFormula: 'v(t) = V_final · (1 - e^(-t / τ)),   where  τ_RC = R · C   and   τ_RL = L / R',
    formulaLabels: 'τ = time constant (seconds), R = resistance (Ω), C = capacitance (Farads), L = inductance (Henries)',
    simpleExample: {
      statement: 'A 10 kΩ resistor is in series with a 100 μF capacitor across 100 V DC. How long is 1 time constant τ?',
      steps: [
        'Step 1: Calculate τ = R · C = 10,000 Ω × (100 × 10^-6 F)',
        'Step 2: τ = 1.0 second. At t = 1 s, capacitor reaches 63.2% of 100 V = 63.2 V.'
      ],
      result: 'Time constant τ = 1.0 second'
    },
    simpleExamTrap: 'For RC circuits, τ = R · C. For RL circuits, τ = L / R (not R / L!).',
    relatedTopicId: 'math-5'
  },
  {
    id: 'dt-math-5',
    sourceFile: '02_Advanced_Math_Differential_Equations_Laplace_Transforms.pdf',
    sourceFileId: 'math-doc-2',
    subject: 'MATH',
    title: 'Laplace Transforms for Electrical Systems',
    simpleCoreIdea: 'Laplace transforms convert difficult calculus differential equations into simple high school algebra equations by turning time (t) into complex frequency (s).',
    simpleFormula: 'L{1} = 1 / s,   L{e^(at)} = 1 / (s - a),   L{sin(ωt)} = ω / (s² + ω²)',
    formulaLabels: 's = complex frequency variable (σ + jω), ω = angular frequency in rad/s',
    simpleExample: {
      statement: 'Find the Laplace transform of a 60 Hz sinusoidal voltage wave v(t) = sin(377t).',
      steps: [
        'Step 1: Identify angular frequency ω = 2π(60) ≈ 377 rad/s',
        'Step 2: Apply transform formula: L{sin(377t)} = 377 / (s² + 377²)'
      ],
      result: 'V(s) = 377 / (s² + 142129)'
    },
    simpleExamTrap: 'In the denominator for sin(ωt), it is s² PLUS ω² (never minus). Minus is for hyperbolic sinh(at).',
    relatedTopicId: 'math-5'
  },
  {
    id: 'dt-math-6',
    sourceFile: '03_Algebra_Trigonometry_Analytic_Geometry_Drills.pdf',
    sourceFileId: 'math-doc-3',
    subject: 'MATH',
    title: 'Quadratic Equations & RLC Resonance Damping',
    simpleCoreIdea: 'The discriminant (b² - 4ac) tells you if a system will oscillate back and forth (ringing), bounce smoothly to rest (overdamped), or return to zero in the fastest possible time without overshoot (critically damped).',
    simpleFormula: 'x = (-b ± √(b² - 4ac)) / (2a),   Discriminant Δ = b² - 4ac',
    formulaLabels: 'If Δ > 0: Overdamped. If Δ = 0: Critically Damped. If Δ < 0: Underdamped (Oscillatory ringing).',
    simpleExample: {
      statement: 'Find the roots of x² - 8x + 12 = 0.',
      steps: [
        'Step 1: Identify coefficients: a = 1, b = -8, c = 12',
        'Step 2: Discriminant: (-8)² - 4(1)(12) = 64 - 48 = 16 (Positive, so 2 real roots)',
        'Step 3: Roots: x = (8 ± √16) / 2 = (8 ± 4) / 2 ⟹ x = 6 and x = 2'
      ],
      result: 'Roots x₁ = 6, x₂ = 2'
    },
    simpleExamTrap: 'Watch out for signs: -b when b = -8 becomes POSITIVE 8.',
    relatedTopicId: 'math-1'
  },
  {
    id: 'dt-math-7',
    sourceFile: '03_Algebra_Trigonometry_Analytic_Geometry_Drills.pdf',
    sourceFileId: 'math-doc-3',
    subject: 'MATH',
    title: 'AC Phasor Trigonometry & Law of Cosines',
    simpleCoreIdea: 'When adding AC voltages or currents that are out of phase, you cannot just add their numbers directly. You must add them like vectors using trigonometry and the Pythagorean theorem.',
    simpleFormula: 'c = √(a² + b² - 2ab · cos(C)),   tan(θ) = Opposite / Adjacent',
    formulaLabels: 'c = resultant vector magnitude, a & b = component magnitudes, C = included angle between vectors',
    simpleExample: {
      statement: 'A circuit has a resistance of 40 Ω and an inductive reactance of 30 Ω in series. What is total impedance |Z|?',
      steps: [
        'Step 1: R and X are at 90° right angles to each other',
        'Step 2: |Z| = √(R² + X²) = √(40² + 30²) = √(1600 + 900) = √2500 = 50 Ω'
      ],
      result: 'Total Impedance |Z| = 50 Ω'
    },
    simpleExamTrap: 'Never add 40 Ω + 30 Ω = 70 Ω! In AC circuits, resistance and reactance are at right angles.',
    relatedTopicId: 'math-2',
    simulatorTab: 'rlc'
  },
  {
    id: 'dt-math-8',
    sourceFile: '04_Engineering_Economy_Probability_Formulas_Summary.pdf',
    sourceFileId: 'math-doc-4',
    subject: 'MATH',
    title: 'Compound Interest & Time Value of Money',
    simpleCoreIdea: 'A peso today is worth more than a peso in the future because today\'s peso can earn interest. Compound interest means you earn interest on both your initial money AND your accumulated interest.',
    simpleFormula: 'F = P · (1 + i)^n',
    formulaLabels: 'F = Future Worth, P = Present Worth, i = interest rate per period (as a decimal), n = number of periods',
    simpleExample: {
      statement: 'An engineering company deposits ₱100,000 in an account paying 8% compounded annually for 5 years. What is the future worth?',
      steps: [
        'Step 1: Identify: P = 100,000, i = 0.08, n = 5',
        'Step 2: Compute: F = 100,000 · (1 + 0.08)^5 = 100,000 · (1.4693)'
      ],
      result: 'Future Worth F = ₱146,933'
    },
    simpleExamTrap: 'If interest is compounded quarterly or monthly, divide interest rate i by periods per year and multiply years n by periods per year.',
    relatedTopicId: 'math-3'
  },
  {
    id: 'dt-math-9',
    sourceFile: '04_Engineering_Economy_Probability_Formulas_Summary.pdf',
    sourceFileId: 'math-doc-4',
    subject: 'MATH',
    title: 'Straight-Line Depreciation of Equipment',
    simpleCoreIdea: 'Every piece of electrical equipment (transformers, generators, trucks) loses value every year as it wears out. Straight-line depreciation assumes it loses the exact same amount of value every year.',
    simpleFormula: 'd = (FC - SV) / n',
    formulaLabels: 'd = annual depreciation charge, FC = First Cost, SV = Salvage/Scrap Value at end of life, n = useful economic life in years',
    simpleExample: {
      statement: 'A 500 kVA distribution transformer costs ₱450,000 with an expected salvage value of ₱50,000 after 20 years. What is annual depreciation?',
      steps: [
        'Step 1: Total loss in value = ₱450,000 - ₱50,000 = ₱400,000',
        'Step 2: Divide by 20 years: d = 400,000 / 20 = ₱20,000 per year'
      ],
      result: 'Annual Depreciation d = ₱20,000 / year'
    },
    simpleExamTrap: 'Do not forget to subtract the Salvage Value (SV) before dividing by useful life n.',
    relatedTopicId: 'math-3'
  },

  // ==========================================
  // ESAS - ENGINEERING ECONOMICS (Main Folder: "ESAS - Engineering Economics")
  // ==========================================
  {
    id: 'dt-esas-1',
    sourceFile: '01_Compound_Interest_Time_Value_Money.pdf',
    sourceFileId: 'esas-econ-1',
    subject: 'ESAS',
    title: 'Compound Interest & Lump-Sum Accumulation',
    simpleCoreIdea: 'Money earns interest, and then that earned interest starts earning even more interest. The future worth F grows exponentially with the formula F = P(1 + i)^n.',
    simpleFormula: 'F = P · (1 + i)^n,   P = F · (1 + i)^(-n)',
    formulaLabels: 'F = Future lump sum, P = Present principal, i = interest rate per period (r / m), n = total number of compounding periods (m · years)',
    simpleExample: {
      statement: 'An engineer deposits ₱100,000 in a bank paying 8% compounded quarterly for 5 years. Find the accumulated future amount F.',
      steps: [
        'Step 1: Periodic interest i = 8% / 4 = 2% = 0.02',
        'Step 2: Total compounding periods n = 5 years × 4 quarters = 20 quarters',
        'Step 3: Calculate: F = 100,000 · (1 + 0.02)^20 = 100,000 · (1.485947)'
      ],
      result: 'Future Worth F = ₱148,595'
    },
    simpleExamTrap: 'Always divide the nominal rate r by the compounding frequency m, and multiply years by m! For quarterly, divide by 4 and multiply years by 4.',
    relatedTopicId: 'esas-1',
    canonCalTech: {
      calculator: 'Canon F-789SGA',
      mode: 'COMP (Mode 1)',
      keystrokes: [
        '[MODE] [1]',
        '100000 × ( 1 + 0.08 ÷ 4 ) [xʸ] ( 4 × 5 ) [=]',
        'Display: 148594.7396'
      ],
      proTip: 'To find doubling time on Canon F-789SGA: Type 2 = (1 + 0.08÷4)^(4X) using [ALPHA] [=] and [ALPHA] [X], then press [SHIFT] [SOLVE] [=].'
    }
  },
  {
    id: 'dt-esas-2',
    sourceFile: '02_Effective_Rates_Continuous_Compounding.pdf',
    sourceFileId: 'esas-econ-2',
    subject: 'ESAS',
    title: 'Nominal vs Effective Interest Rate (ER)',
    simpleCoreIdea: 'Because interest compounds throughout the year, the true annual yield (Effective Rate) is always higher than the advertised nominal rate. Compounding continuous uses Euler\'s constant e.',
    simpleFormula: 'ER = (1 + r / m)^m - 1,   Continuous ER = e^r - 1',
    formulaLabels: 'ER = Effective Rate per year (decimal), r = nominal annual rate, m = compounding periods per year (m=12 for monthly, m=365 for daily)',
    simpleExample: {
      statement: 'A lending firm quotes 12% compounded monthly. What is the equivalent effective annual interest rate?',
      steps: [
        'Step 1: Identify: nominal r = 0.12, m = 12',
        'Step 2: Apply formula: ER = (1 + 0.12 / 12)^12 - 1 = (1.01)^12 - 1',
        'Step 3: Calculate: 1.126825 - 1 = 0.126825 = 12.68%'
      ],
      result: 'Effective Rate ER = 12.68% per year'
    },
    simpleExamTrap: 'When comparing two loan offers with different compounding frequencies, never compare nominal rates directly; always compare their Effective Rates (ER).',
    relatedTopicId: 'esas-1',
    canonCalTech: {
      calculator: 'Canon F-789SGA',
      mode: 'COMP (Mode 1)',
      keystrokes: [
        '( 1 + 0.12 ÷ 12 ) [xʸ] 12 - 1 [=]',
        '[×] 100 [=]',
        'Display: 12.6825%'
      ],
      proTip: 'For continuous compounding on Canon F-789SGA: Press [SHIFT] [ln] (e^x), enter 0.12, subtract 1, and press [=].'
    }
  },
  {
    id: 'dt-esas-3',
    sourceFile: '03_Annuities_Ordinary_Due_Deferred.pdf',
    sourceFileId: 'esas-econ-3',
    subject: 'ESAS',
    title: 'Ordinary Annuity: Present Worth & Sinking Fund',
    simpleCoreIdea: 'An annuity is a series of equal payments made at regular intervals. Ordinary annuity means payments occur at the END of each period (e.g. monthly salary or car payments).',
    simpleFormula: 'P = A · [ (1 - (1 + i)^(-n)) / i ],   F = A · [ ((1 + i)^n - 1) / i ]',
    formulaLabels: 'P = Present lump sum, F = Future accumulated amount, A = Uniform periodic payment, i = interest per period, n = total payments',
    simpleExample: {
      statement: 'An engineer pays ₱15,000 at the end of each month for 3 years to buy an equipment testing kit. If interest is 12% compounded monthly, find the cash price P.',
      steps: [
        'Step 1: i = 12% / 12 = 1% = 0.01 per month, n = 3 × 12 = 36 months',
        'Step 2: Present Worth factor: [1 - (1 + 0.01)^(-36)] / 0.01 = 30.1075',
        'Step 3: Multiply by payment A: P = 15,000 × 30.1075 = ₱451,613'
      ],
      result: 'Cash Price P = ₱451,613'
    },
    simpleExamTrap: 'If payments are at the BEGINNING of each period (Annuity Due), multiply the entire result by (1 + i).',
    relatedTopicId: 'esas-2',
    canonCalTech: {
      calculator: 'Canon F-789SGA',
      mode: 'COMP (Mode 1)',
      keystrokes: [
        '15000 × ( 1 - ( 1 + 0.01 ) [xʸ] -36 ) ÷ 0.01 [=]',
        'Display: 451612.56'
      ],
      proTip: 'Store the monthly interest in memory A: Type 0.01 [SHIFT] [STO] [A]. Then write your formula cleanly using [ALPHA] [A]!'
    }
  },
  {
    id: 'dt-esas-4',
    sourceFile: '03_Annuities_Ordinary_Due_Deferred.pdf',
    sourceFileId: 'esas-econ-3',
    subject: 'ESAS',
    title: 'Deferred Annuity & Perpetuity',
    simpleCoreIdea: 'In a deferred annuity, the first payment is postponed by m periods (grace period). A perpetuity is an annuity that pays out forever (n = ∞), where Present Worth is simply P = A / i.',
    simpleFormula: 'P_0 = A · [ (1 - (1 + i)^(-n)) / i ] · (1 + i)^(-m),   Perpetuity: P = A / i',
    formulaLabels: 'm = number of deferred periods before regular annuity starts, A = uniform periodic payment, i = interest rate',
    simpleExample: {
      statement: 'A student loan of ₱100,000 is to be repaid in 5 equal annual payments, with the first payment deferred until 3 years from today. Interest is 10%. Find payment A.',
      steps: [
        'Step 1: Identify: P_0 = 100,000, n = 5 payments, deferred m = 2 periods (since payment 1 is at t=3)',
        'Step 2: Discount formula: 100,000 = A · [(1 - 1.10^-5) / 0.10] · (1.10)^-2',
        'Step 3: Factor = 3.790786 · 0.826446 = 3.13288. A = 100,000 / 3.13288 = ₱31,919'
      ],
      result: 'Annual Payment A = ₱31,919'
    },
    simpleExamTrap: 'Deferred period m is (Year of first payment - 1). If payment starts at end of Year 3, m = 3 - 1 = 2.',
    relatedTopicId: 'esas-2',
    canonCalTech: {
      calculator: 'Canon F-789SGA',
      mode: 'COMP (Mode 1)',
      keystrokes: [
        '100000 ÷ ( ( 1 - 1.10 [xʸ] -5 ) ÷ 0.10 × 1.10 [xʸ] -2 ) [=]',
        'Display: 31919.46'
      ],
      proTip: 'On Canon F-789SGA, you can also use [SHIFT] [SOLVE]: Type 100000 = X × ((1-1.1^-5)÷0.1) × 1.1^-2, then press [SHIFT] [SOLVE] [=].'
    }
  },
  {
    id: 'dt-esas-5',
    sourceFile: '04_Depreciation_Methods_SLM_SOYD_DBM.pdf',
    sourceFileId: 'esas-econ-4',
    subject: 'ESAS',
    title: 'The Big 5 Depreciation Methods (SLM, SOYD, DBM)',
    simpleCoreIdea: 'Physical assets lose value each year. Straight-Line (SLM) has equal annual loss. SOYD and Declining Balance (DBM) write off more in the first few years when the machine is newest.',
    simpleFormula: 'SLM: d = (FC - SV)/n | SOYD: d_m = (FC - SV)·(n - m + 1)/Σ | DBM: k = 1 - (SV/FC)^(1/n)',
    formulaLabels: 'FC = First Cost, SV = Salvage Value, n = useful life, m = specific year, Σ = sum of years digits = n(n+1)/2, k = depreciation rate',
    simpleExample: {
      statement: 'A 500 kVA distribution transformer costs ₱600,000 with SV = ₱60,000 after 5 years. Find depreciation in Year 2 using SOYD.',
      steps: [
        'Step 1: Total depreciable amount = ₱600,000 - ₱60,000 = ₱540,000',
        'Step 2: Sum of digits Σ = 1 + 2 + 3 + 4 + 5 = 5(6)/2 = 15',
        'Step 3: Year 2 reverse digit = 5 - 2 + 1 = 4. Ratio = 4 / 15',
        'Step 4: Depreciation d_2 = 540,000 × (4 / 15) = ₱144,000'
      ],
      result: 'Year 2 Depreciation d_2 = ₱144,000'
    },
    simpleExamTrap: 'For Declining Balance (DBM), Salvage Value is NOT subtracted in the base: BV_m = FC · (1 - k)^m. For DDBM: k = 2 / n.',
    relatedTopicId: 'esas-3',
    canonCalTech: {
      calculator: 'Canon F-789SGA',
      mode: 'COMP (Mode 1)',
      keystrokes: [
        '540000 × ( 5 - 2 + 1 ) ÷ 15 [=]',
        'Display: 144000',
        'For DBM rate k: 1 - ( 60000 ÷ 600000 ) [xʸ] ( 1 ÷ 5 ) [=]',
        'Display: 0.3690 (36.9%)'
      ],
      proTip: 'To find Σ on Canon F-789SGA for large n (e.g. n=25): Press [SHIFT] [log] (Σ), type [ALPHA] [X], set X from 1 to 25, press [=].'
    }
  },
  {
    id: 'dt-esas-6',
    sourceFile: '05_Capitalized_Cost_Perpetual_Replacements.pdf',
    sourceFileId: 'esas-econ-5',
    subject: 'ESAS',
    title: 'Capitalized Cost & Perpetual Power Infrastructure',
    simpleCoreIdea: 'Capitalized cost CC is the present sum needed to construct an asset, fund its annual operation forever, and replace it every k years indefinitely.',
    simpleFormula: 'CC = FC + (OM / i) + [ RC / ((1 + i)^k - 1) ]',
    formulaLabels: 'FC = First Cost, OM = Annual Operation & Maintenance, RC = Periodic replacement cost every k years, i = discount rate',
    simpleExample: {
      statement: 'A hydro plant costs ₱20,000,000 to construct. Annual maintenance is ₱600,000. Turbine replacement costs ₱4,000,000 every 10 years. At i = 6%, find Capitalized Cost.',
      steps: [
        'Step 1: First cost = ₱20,000,000',
        'Step 2: Perpetual maintenance = OM / i = 600,000 / 0.06 = ₱10,000,000',
        'Step 3: Periodic replacement = 4,000,000 / [(1.06)^10 - 1] = 4,000,000 / 0.790848 = ₱5,057,862',
        'Step 4: Total CC = 20,000,000 + 10,000,000 + 5,057,862 = ₱35,057,862'
      ],
      result: 'Capitalized Cost CC = ₱35,057,862'
    },
    simpleExamTrap: 'Make sure not to subtract 1 in the annual OM term (it is simply OM / i). Only the periodic replacement term has ((1 + i)^k - 1) in the denominator.',
    relatedTopicId: 'esas-4',
    canonCalTech: {
      calculator: 'Canon F-789SGA',
      mode: 'COMP (Mode 1)',
      keystrokes: [
        '20000000 + ( 600000 ÷ 0.06 ) + ( 4000000 ÷ ( 1.06 [xʸ] 10 - 1 ) ) [=]',
        'Display: 35057862.33'
      ],
      proTip: 'Store interest i into memory: 0.06 [SHIFT] [STO] [A]. Then you can reuse [ALPHA] [A] across the entire equation.'
    }
  },
  {
    id: 'dt-esas-7',
    sourceFile: '06_BreakEven_Payback_Rate_of_Return.pdf',
    sourceFileId: 'esas-econ-6',
    subject: 'ESAS',
    title: 'Break-Even Volume & Internal Rate of Return (IRR)',
    simpleCoreIdea: 'Break-even point is where Total Revenue equals Total Cost (zero profit). Rate of Return (IRR) is the exact interest rate where Net Present Worth (NPW) of a project equals zero.',
    simpleFormula: 'Q_BEP = FC / (p - v),   NPW(IRR) = PW(Inflows) - PW(Outflows) = 0',
    formulaLabels: 'FC = Fixed Costs, p = selling price per unit, v = variable cost per unit, Q = units produced, IRR = Internal Rate of Return',
    simpleExample: {
      statement: 'A rooftop solar installation costs ₱500,000 and generates net electrical savings of ₱110,000 per year for 8 years with zero salvage value. Find the internal rate of return (ROR / IRR).',
      steps: [
        'Step 1: Set NPW = 0: -500,000 + 110,000 · [(1 - (1+i)^-8) / i] = 0',
        'Step 2: Present Worth factor: [(1 - (1+i)^-8) / i] = 500,000 / 110,000 = 4.5455',
        'Step 3: Solve for i: i = 14.96%'
      ],
      result: 'Rate of Return (IRR) = 14.96%'
    },
    simpleExamTrap: 'Do not use simple trial-and-error tables on the board exam! The Canon F-789SGA SOLVE command computes the exact IRR decimal in 3 seconds.',
    relatedTopicId: 'esas-6',
    canonCalTech: {
      calculator: 'Canon F-789SGA',
      mode: 'COMP (Mode 1)',
      keystrokes: [
        '500000 [ALPHA] [=] 110000 × ( 1 - ( 1 + [ALPHA] [X] ) [xʸ] -8 ) ÷ [ALPHA] [X]',
        '[SHIFT] [SOLVE]',
        '0.1 [=] (Initial guess)',
        'Display: X = 0.14959 (14.96%)'
      ],
      proTip: 'Always input an initial guess near 0.1 (10%) when prompted with "X?" so Canon F-789SGA converges rapidly.'
    }
  },

  // ==========================================
  // ELECTRICAL ENGINEERING PROFESSIONAL (Files 10 - 16)
  // ==========================================
  {
    id: 'dt-ee-1',
    sourceFile: '10_DC_Circuits_Kirchhoffs_Thevenins_Norton_Theorems.pdf',
    sourceFileId: 'ee-doc-1',
    subject: 'EE',
    title: 'Ohm\'s Law & DC Electrical Power',
    simpleCoreIdea: 'Voltage is the electrical push, current is the flow of electrons, and resistance opposes the flow. Power is the rate at which electrical energy is transformed into heat, light, or work.',
    simpleFormula: 'V = I · R,   P = V · I = I² · R = V² / R',
    formulaLabels: 'V = Voltage (Volts), I = Current (Amperes), R = Resistance (Ohms), P = Real Power (Watts)',
    simpleExample: {
      statement: 'A 230 V water heater draws 10 Amperes of current. What is its resistance and power rating?',
      steps: [
        'Step 1: Resistance: R = V / I = 230 V / 10 A = 23 Ω',
        'Step 2: Power: P = V · I = 230 V × 10 A = 2,300 Watts (2.3 kW)'
      ],
      result: 'Resistance R = 23 Ω, Power P = 2,300 W'
    },
    simpleExamTrap: 'Power quadruples if you double the voltage across a fixed resistor because P = V² / R (voltage is squared!).',
    relatedTopicId: 'ee-10'
  },
  {
    id: 'dt-ee-2',
    sourceFile: '10_DC_Circuits_Kirchhoffs_Thevenins_Norton_Theorems.pdf',
    sourceFileId: 'ee-doc-1',
    subject: 'EE',
    title: 'Thévenin\'s Equivalent & Maximum Power Transfer',
    simpleCoreIdea: 'No matter how huge and complicated a linear circuit is, you can replace the entire circuit with just ONE single ideal voltage source (V_th) in series with ONE single resistor (R_th). Maximum power transfers to a load when load resistance equals Thévenin resistance.',
    simpleFormula: 'R_load = R_th   ⟹   P_max = V_th² / (4 · R_th)',
    formulaLabels: 'V_th = open-circuit voltage across load terminals, R_th = equivalent resistance looking back with independent sources turned off',
    simpleExample: {
      statement: 'A circuit has Thévenin equivalent V_th = 24 V and R_th = 6 Ω. What load resistance R_L extracts maximum power, and what is P_max?',
      steps: [
        'Step 1: For maximum power, match load: R_L = R_th = 6 Ω',
        'Step 2: Apply formula: P_max = V_th² / (4 · R_th) = 24² / (4 × 6) = 576 / 24 = 24 Watts'
      ],
      result: 'R_L = 6 Ω, Maximum Power P_max = 24 W'
    },
    simpleExamTrap: 'At maximum power transfer, circuit efficiency is only 50% because the other 50% of power is lost inside the internal resistor R_th.',
    relatedTopicId: 'ee-10'
  },
  {
    id: 'dt-ee-3',
    sourceFile: '11_Single_Phase_AC_Circuits_Phasors_Power_Factor_Correction.pdf',
    sourceFileId: 'ee-doc-2',
    subject: 'EE',
    title: 'AC Power Triangle: Real, Reactive & Apparent Power',
    simpleCoreIdea: 'Real power P (Watts) does real work like turning a shaft. Reactive power Q (VAR) only sloshes back and forth to create magnetic fields in coils. Apparent power S (VA) is the total vector hypotenuse the power plant must generate.',
    simpleFormula: 'S = √(P² + Q²),   Power Factor (pf) = cos(θ) = P / S',
    formulaLabels: 'P = Real Power (Watts/kW), Q = Reactive Power (VAR/kVAR), S = Apparent Power (VA/kVA), pf = Power Factor (0.0 to 1.0)',
    simpleExample: {
      statement: 'A factory draws 40 kW of real power and 30 kVAR of inductive reactive power. What is its apparent power S and power factor?',
      steps: [
        'Step 1: Apparent power hypotenuse: S = √(40² + 30²) = √(1600 + 900) = √2500 = 50 kVA',
        'Step 2: Power factor: pf = P / S = 40 kW / 50 kVA = 0.80 Lagging'
      ],
      result: 'Apparent Power S = 50 kVA, Power Factor = 0.80 Lagging'
    },
    simpleExamTrap: 'Motor loads are inductive, meaning current lags voltage (Lagging pf). Adding shunt capacitors supplies VARs locally to improve power factor closer to 1.0.',
    relatedTopicId: 'ee-11',
    simulatorTab: 'rlc'
  },
  {
    id: 'dt-ee-4',
    sourceFile: '12_Three_Phase_Wye_Delta_Systems_Two_Wattmeter_Analysis.pdf',
    sourceFileId: 'ee-doc-3',
    subject: 'EE',
    title: 'Three-Phase Wye (Y) vs Delta (Δ) Relationships',
    simpleCoreIdea: 'Almost all commercial power generation and transmission is 3-phase. In Wye connections, line voltage is √3 times phase voltage. In Delta connections, line voltage equals phase voltage while line current is √3 times phase current.',
    simpleFormula: 'WYE: V_L = √3 · V_ph,  I_L = I_ph   |   DELTA: V_L = V_ph,  I_L = √3 · I_ph',
    formulaLabels: 'Total 3-Phase Power in both connections: P_3P = √3 · V_L · I_L · cos(θ)',
    simpleExample: {
      statement: 'A 3-phase Wye generator produces 230 V per phase. What is the line-to-line voltage V_L?',
      steps: [
        'Step 1: In Wye connection, V_L = √3 · V_ph',
        'Step 2: V_L = 1.732 × 230 V ≈ 398.4 V (Standard 400 V industrial distribution)'
      ],
      result: 'Line-to-Line Voltage V_L = 400 V'
    },
    simpleExamTrap: 'When using the total 3-phase power formula P = √3 · V_L · I_L · pf, ALWAYS use LINE quantities, never phase quantities.',
    relatedTopicId: 'ee-12',
    simulatorTab: 'threephase'
  },
  {
    id: 'dt-ee-5',
    sourceFile: '12_Three_Phase_Wye_Delta_Systems_Two_Wattmeter_Analysis.pdf',
    sourceFileId: 'ee-doc-3',
    subject: 'EE',
    title: 'Two-Wattmeter Method for 3-Phase Power Measurement',
    simpleCoreIdea: 'You can measure the total power and power factor of any balanced 3-phase load using only two single-phase wattmeters (W₁ and W₂).',
    simpleFormula: 'Total Power P = W₁ + W₂,   tan(θ) = √3 · (W₁ - W₂) / (W₁ + W₂)',
    formulaLabels: 'If pf = 1.0: W₁ = W₂. If pf = 0.5: One wattmeter reads exactly zero. If pf < 0.5: One wattmeter reads negative!',
    simpleExample: {
      statement: 'Two wattmeters measuring a 3-phase motor read W₁ = 5,000 W and W₂ = 2,500 W. What is the total real power absorbed?',
      steps: [
        'Step 1: Total real power is simply the direct sum of both wattmeters',
        'Step 2: P_total = W₁ + W₂ = 5,000 W + 2,500 W = 7,500 W (7.5 kW)'
      ],
      result: 'Total Power P = 7.5 kW'
    },
    simpleExamTrap: 'If the power factor is below 0.5, one of the wattmeters will reverse or read negative. Total power is still W₁ + W₂ (where W₂ is negative, e.g. 5000 + (-1000) = 4000 W).',
    relatedTopicId: 'ee-12'
  },
  {
    id: 'dt-ee-6',
    sourceFile: '13_Transformers_Single_Three_Phase_Regulation_Efficiency.pdf',
    sourceFileId: 'ee-doc-4',
    subject: 'EE',
    title: 'Ideal Transformers: Voltage, Current & Turns Ratio',
    simpleCoreIdea: 'Transformers step voltage up or down using mutual electromagnetic induction between two coils. Because power in equals power out (ignoring small losses), stepping UP voltage steps DOWN current by the exact same ratio.',
    simpleFormula: 'V_1 / V_2 = N_1 / N_2 = I_2 / I_1 = a',
    formulaLabels: 'V_1, V_2 = primary and secondary voltages; N_1, N_2 = primary and secondary coil turns; a = turns ratio',
    simpleExample: {
      statement: 'A step-down transformer has 1,200 primary turns and 120 secondary turns. If primary voltage is 2,400 V, what is secondary voltage?',
      steps: [
        'Step 1: Turns ratio: a = N_1 / N_2 = 1200 / 120 = 10',
        'Step 2: Secondary voltage: V_2 = V_1 / a = 2400 V / 10 = 240 V'
      ],
      result: 'Secondary Voltage V_2 = 240 V'
    },
    simpleExamTrap: 'Current ratio is INVERTED compared to voltage ratio: V_1 / V_2 = I_2 / I_1 (current goes the opposite direction).',
    relatedTopicId: 'ee-13'
  },
  {
    id: 'dt-ee-7',
    sourceFile: '14_AC_Induction_Synchronous_Machines_Torque_Speed_Characteristics.pdf',
    sourceFileId: 'ee-doc-5',
    subject: 'EE',
    title: 'AC Induction Motors: Synchronous Speed & Rotor Slip',
    simpleCoreIdea: 'The stator creates a rotating magnetic field spinning at synchronous speed N_s. The physical rotor inside must spin slightly SLOWER than N_s (slip) so magnetic field lines cut the rotor bars to generate torque.',
    simpleFormula: 'N_s = (120 · f) / P,   Slip s = (N_s - N_r) / N_s',
    formulaLabels: 'N_s = synchronous magnetic speed (RPM), f = AC supply frequency (60 Hz in Philippines), P = number of magnetic poles, N_r = actual rotor speed (RPM)',
    simpleExample: {
      statement: 'A 4-pole 60 Hz induction motor runs at 1,746 RPM at full load. What is its synchronous speed and percentage slip?',
      steps: [
        'Step 1: Calculate synchronous speed: N_s = (120 × 60) / 4 = 7,200 / 4 = 1,800 RPM',
        'Step 2: Calculate slip: s = (1,800 - 1,746) / 1,800 = 54 / 1,800 = 0.03 = 3.0%'
      ],
      result: 'Synchronous Speed N_s = 1,800 RPM, Slip s = 3.0%'
    },
    simpleExamTrap: 'At standstill (rotor stopped), slip s = 1.0 (100%). At synchronous speed, slip s = 0.0 (and torque drops to zero).',
    relatedTopicId: 'ee-14',
    simulatorTab: 'motor'
  },
  {
    id: 'dt-ee-8',
    sourceFile: '15_Power_Transmission_Lines_Fault_Analysis_Symmetrical_Components.pdf',
    sourceFileId: 'ee-doc-6',
    subject: 'EE',
    title: 'Short Circuit Fault Analysis & Per-Unit System',
    simpleCoreIdea: 'When a short circuit occurs, massive fault current rushes toward the fault point. The per-unit system standardizes all different voltage levels (e.g. 230 kV, 69 kV, 13.8 kV) onto a single common decimal base for easy calculations.',
    simpleFormula: 'I_fault = I_base / Z_pu,   Fault MVA = Base MVA / Z_pu',
    formulaLabels: 'Z_pu = per-unit impedance up to fault location, Base MVA = chosen reference rating (typically 100 MVA)',
    simpleExample: {
      statement: 'A 100 MVA system has a total per-unit impedance of 0.10 pu up to a transformer fault. What is the 3-phase fault MVA?',
      steps: [
        'Step 1: Fault MVA = Base MVA / Z_pu',
        'Step 2: Fault MVA = 100 MVA / 0.10 = 1,000 MVA'
      ],
      result: 'Short Circuit Duty = 1,000 MVA'
    },
    simpleExamTrap: 'Single line-to-ground (SLG) fault is the most common fault in real life (over 70% of all faults), but 3-phase symmetrical fault usually gives the highest current.',
    relatedTopicId: 'ee-15'
  },
  {
    id: 'dt-ee-9',
    sourceFile: '16_Illumination_Design_Electrical_Safety_Substations.pdf',
    sourceFileId: 'ee-doc-7',
    subject: 'EE',
    title: 'Illumination Engineering & Inverse Square Law',
    simpleCoreIdea: 'Light radiates outward from a bulb like an expanding sphere. As you move twice as far away, the light spreads over 4 times the area, so illuminance drops with the square of distance.',
    simpleFormula: 'E = I / d²,   Lumen Method: N_lamps = (E · Area) / (Lumens · CU · MF)',
    formulaLabels: 'E = Illuminance (Lux = lumens/m²), I = luminous intensity (Candelas), d = distance (meters), CU = coefficient of utilization, MF = maintenance factor',
    simpleExample: {
      statement: 'A point light source of 400 Candelas hangs directly 2 meters above a desk surface. What is the illuminance on the desk?',
      steps: [
        'Step 1: Apply inverse square law: E = I / d²',
        'Step 2: Calculate: E = 400 / 2² = 400 / 4 = 100 Lux'
      ],
      result: 'Illuminance E = 100 Lux'
    },
    simpleExamTrap: 'If light hits the surface at an angle θ from normal, multiply by cos(θ): E = (I / d²) · cos(θ) (Lambert\'s Cosine Law).',
    relatedTopicId: 'ee-16'
  }
];
