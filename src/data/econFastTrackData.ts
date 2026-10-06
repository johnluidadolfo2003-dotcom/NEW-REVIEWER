import { EconDayPlan } from '../types';

export const ECON_FAST_TRACK_DAYS: EconDayPlan[] = [
  // =========================================================================
  // DAY 1: TIME VALUE OF MONEY & INTEREST
  // Reference: 01_Compound_Interest_Time_Value_Money.pdf & 02_Effective_Rate_Continuous_Compounding.pdf
  // =========================================================================
  {
    dayNumber: 1,
    dayTitle: 'Simple & Compound Interest, Effective Rates',
    focusArea: 'Time Value of Money & Exponential Growth',
    sourceDoc: '01_Compound_Interest_Time_Value_Money.pdf & 02_Effective_Rate_Continuous_Compounding.pdf',
    estimatedHours: 2.0,
    coreConcepts: [
      'Simple Interest: Ordinary uses 360-day year (banker\'s rule); Exact uses 365-day year. On PRC exams, always default to Ordinary.',
      'Compound Lump Sum: Future Worth F and Present Worth P with periodic rate i = r/m and total periods n = m · t.',
      'Effective Annual Rate (ER): Accounts for compounding frequency m. Higher m results in higher ER.',
      'Continuous Compounding: As m approaches infinity, compounding follows natural exponent e.'
    ],
    keyFormulas: [
      {
        name: 'Ordinary vs Exact Simple Interest',
        formula: 'I_{ord} = P \\cdot i \\cdot \\frac{d}{360} \\; | \\; I_{exact} = P \\cdot i \\cdot \\frac{d}{365}',
        description: 'd = days of loan. Default to 360 days unless exact is stated.'
      },
      {
        name: 'Compound Amount Factor (Future & Present Worth)',
        formula: 'F = P(1 + i)^n = P\\left(1 + \\frac{r}{m}\\right)^{m \\cdot t} \\; | \\; P = \\frac{F}{(1 + i)^n} = F(1 + i)^{-n}',
        description: 'Periodic rate i = r/m, total periods n = m · t.'
      },
      {
        name: 'Effective Annual Rate (ER) & Continuous Compounding',
        formula: 'ER = \\left(1 + \\frac{r}{m}\\right)^m - 1 \\; | \\; F_{cont} = P \\cdot e^{r \\cdot t} \\; | \\; ER_{cont} = e^r - 1',
        description: 'r = nominal rate, m = compound periods per year, t = time in years.'
      }
    ],
    canonKeystrokeHighlight: {
      mode: 'COMP (Mode 1) & SOLVE',
      keyTechnique: 'Solve unknown periods n or interest rate i',
      keystrokes: [
        'Press [MODE] [1] (COMP).',
        'Enter equation: [P] [×] ( 1 [+] [i] ) [^] [ALPHA] [X] [ALPHA] [=] [F]',
        'Press [SHIFT] [CALC] (SOLVE), type initial guess, press [=].',
        'Display: X = n (number of periods).'
      ],
      proTip: 'Store periodic rate i into memory [A]: r [÷] m [SHIFT] [RCL] (STO) [A].'
    },
    examTraps: [
      'Always convert nominal rate r to periodic rate i = r/m (e.g., 12% compounded monthly = 1%).',
      'If not specified, simple interest is Ordinary (360 days).'
    ],
    sampleProblemIds: ['dsp-econ-01', 'dsp-econ-02', 'dsp-econ-03', 'dsp-econ-04', 'dsp-econ-05'],
    selfCheckQuiz: [
      {
        question: 'What is the effective annual rate of 12% compounded quarterly?',
        options: ['12.00%', '12.48%', '12.55%', '12.68%'],
        correctAnswer: 2,
        explanation: 'ER = (1 + 0.12/4)^4 - 1 = (1.03)^4 - 1 = 12.55%.'
      },
      {
        question: 'What is the future worth of ₱100,000 after 3 years at 10% compounded continuously?',
        options: ['₱130,000', '₱133,100', '₱134,986', '₱135,210'],
        correctAnswer: 2,
        explanation: 'F = P · e^(rn) = 100,000 · e^(0.10 · 3) = 100,000 · e^0.30 = ₱134,986.'
      }
    ]
  },

  // =========================================================================
  // DAY 2: ANNUITIES & PAYMENT SERIES
  // Reference: 03_Annuities_Ordinary_Due_Deferred.pdf
  // =========================================================================
  {
    dayNumber: 2,
    dayTitle: 'Ordinary Annuities, Annuity Due, Deferred Annuities',
    focusArea: 'Equal Payment Series & Sinking Funds',
    sourceDoc: '03_Annuities_Ordinary_Due_Deferred.pdf',
    estimatedHours: 2.0,
    coreConcepts: [
      'Ordinary Annuity: Uniform payments A made at the END of each period.',
      'Annuity Due: Payments made at the BEGINNING of each period: P_due = P_ordinary · (1 + i).',
      'Deferred Annuity: Payments start after m deferred periods: P_def = P_ordinary · (1 + i)⁻ᵐ.',
      'Sinking Fund: Uniform periodic deposit A to accumulate a future target F.',
      'Capital Recovery: Uniform periodic installment A to amortize a present debt P.'
    ],
    keyFormulas: [
      {
        name: 'Ordinary Annuity Present & Future Worth',
        formula: 'P = A \\left[ \\frac{1 - (1 + i)^{-n}}{i} \\right] \\; | \\; F = A \\left[ \\frac{(1 + i)^n - 1}{i} \\right]',
        description: 'A = uniform periodic payment, i = periodic rate, n = payments.'
      },
      {
        name: 'Sinking Fund & Capital Recovery',
        formula: 'A_{SF} = F \\left[ \\frac{i}{(1 + i)^n - 1} \\right] \\; | \\; A_{CR} = P \\left[ \\frac{i(1 + i)^n}{(1 + i)^n - 1} \\right]',
        description: 'SF accumulates future lump sum F; CR amortizes present loan P.'
      },
      {
        name: 'Annuity Due & Deferred Annuity',
        formula: 'P_{due} = P_{ord}(1 + i) \\; | \\; P_{def} = P_{ord}(1 + i)^{-m}',
        description: 'm = number of deferred periods (period of first payment minus 1).'
      }
    ],
    canonKeystrokeHighlight: {
      mode: 'COMP (Mode 1) with Memory [STO]',
      keyTechnique: 'Natural fraction entry for uniform series',
      keystrokes: [
        'Store rate i: [i] [SHIFT] [RCL] (STO) [A].',
        'Use natural fraction key [■/□]:',
        'Numerator: 1 [-] ( 1 [+] [ALPHA] [A] ) [^] [-] [n]',
        'Denominator: [ALPHA] [A]',
        'Multiply by payment: [×] [A] [=].'
      ],
      proTip: 'For Annuity Due, calculate Ordinary Annuity and immediately multiply by (1 + i).'
    },
    examTraps: [
      'Deferred period m: If payments start at end of Year 4, the deferred period is m = 3.',
      'Sinking Fund solves for A given F; Capital Recovery solves for A given P.'
    ],
    sampleProblemIds: ['dsp-econ-06', 'dsp-econ-07', 'dsp-econ-08', 'dsp-econ-09'],
    selfCheckQuiz: [
      {
        question: 'An engineer borrows ₱500,000 payable in 5 equal annual installments at 10%. What is the annual payment?',
        options: ['₱100,000', '₱125,000', '₱131,899', '₱142,500'],
        correctAnswer: 2,
        explanation: 'A = 500,000 × [0.10(1.10)^5 / ((1.10)^5 - 1)] = ₱131,899.'
      },
      {
        question: 'How is the present worth of an Annuity Due derived from an Ordinary Annuity?',
        options: ['Divided by (1 + i)', 'Multiplied by (1 + i)', 'Multiplied by (1 + i)²', 'Subtracted by i'],
        correctAnswer: 1,
        explanation: 'Each payment occurs 1 period earlier, so P_due = P_ord · (1 + i).'
      }
    ]
  },

  // =========================================================================
  // DAY 3: CAPITALIZED COST & PERPETUITIES
  // Reference: 05_Capitalized_Cost_Perpetual_Projects.pdf
  // =========================================================================
  {
    dayNumber: 3,
    dayTitle: 'Capitalized Cost, Perpetuities & Infrastructure',
    focusArea: 'Perpetual Assets & Periodic Replacements',
    sourceDoc: '05_Capitalized_Cost_Perpetual_Projects.pdf',
    estimatedHours: 2.0,
    coreConcepts: [
      'Perpetuity: Uniform payment series continuing forever (n → ∞): P = A / i.',
      'Capitalized Cost (CC): Present sum to construct and maintain an asset indefinitely.',
      'Three Terms: Initial First Cost (FC) + Perpetual O&M (OM / i) + Periodic Replacement Sinking Fund.',
      'Periodic Renewal: To fund replacement net cost (RC - SV) every k years forever, present endowment is (RC - SV) / ((1+i)^k - 1).'
    ],
    keyFormulas: [
      {
        name: 'Perpetuity Present Worth',
        formula: 'P = \\frac{A}{i}',
        description: 'Present value of infinite annual equal cash flows.'
      },
      {
        name: 'Complete Capitalized Cost (CC)',
        formula: 'CC = FC + \\frac{OM}{i} + \\frac{RC - SV}{(1 + i)^k - 1}',
        description: 'FC = First Cost, OM = Annual O&M, RC - SV = Net replacement cost every k years.'
      },
      {
        name: 'Equivalent Uniform Annual Cost (EUAC)',
        formula: 'EUAC = CC \\cdot i = FC \\cdot i + OM + \\frac{(RC - SV) \\cdot i}{(1 + i)^k - 1}',
        description: 'Converts capitalized cost directly into equivalent annual cost.'
      }
    ],
    canonKeystrokeHighlight: {
      mode: 'COMP (Mode 1)',
      keyTechnique: 'Single-line capitalized cost evaluation',
      keystrokes: [
        'FC [+] ( OM [÷] i ) [+] ( ( RC [-] SV ) [÷] ( ( 1 [+] i ) [^] k [-] 1 ) ) [=]',
        'Example (FC=10M, OM=200k, RC=3M every 15 yrs, i=8%):',
        '10000000 [+] ( 200000 [÷] 0.08 ) [+] ( 3000000 [÷] ( 1.08 [^] 15 [-] 1 ) ) [=]',
        'Display: 13,892,104'
      ],
      proTip: 'The periodic renewal denominator is ((1+i)^k - 1). Never subtract 1 from the annual OM term.'
    },
    examTraps: [
      'OM is annual, so its denominator is simply i. Never use ((1+i)^1 - 1) as k.',
      'Deduct salvage value SV from replacement cost RC in the periodic term: (RC - SV).'
    ],
    sampleProblemIds: ['dsp-econ-14', 'dsp-econ-15'],
    selfCheckQuiz: [
      {
        question: 'A canal costs ₱4,000,000 to construct and requires ₱150,000 annual maintenance forever at 6% interest. What is its capitalized cost?',
        options: ['₱4,150,000', '₱5,500,000', '₱6,500,000', '₱7,200,000'],
        correctAnswer: 2,
        explanation: 'CC = 4,000,000 + (150,000 / 0.06) = 4,000,000 + 2,500,000 = ₱6,500,000.'
      },
      {
        question: 'What is the present endowment needed to provide ₱1,000,000 every 10 years forever at 10% interest?',
        options: ['₱385,543', '₱627,454', '₱1,000,000', '₱1,593,742'],
        correctAnswer: 1,
        explanation: 'P = 1,000,000 / [(1.10)^10 - 1] = 1,000,000 / 1.59374 = ₱627,454.'
      }
    ]
  },

  // =========================================================================
  // DAY 4: DEPRECIATION METHODS
  // Reference: 04_Depreciation_Methods_Comparative.pdf
  // =========================================================================
  {
    dayNumber: 4,
    dayTitle: 'Depreciation: SLM, SFM, SOYD, DBM & DDBM',
    focusArea: 'Asset Devaluation & Book Value Methods',
    sourceDoc: '04_Depreciation_Methods_Comparative.pdf',
    estimatedHours: 2.0,
    coreConcepts: [
      'Straight-Line (SLM): Constant annual depreciation d = (FC - SV) / n.',
      'Sinking Fund (SFM): Sinking fund formula accounts for interest on depreciation reserves.',
      'Sum-of-the-Years-Digits (SOYD): Accelerated depreciation using remaining life over sum of years digits Σ.',
      'Declining Balance (DBM / Matheson): Fixed percentage k = 1 - (SV/FC)^(1/n). Book Value BV_m = FC(1 - k)ᵐ.',
      'Double Declining Balance (DDBM): Fixed rate k = 2 / n applied to remaining book value.'
    ],
    keyFormulas: [
      {
        name: 'Straight-Line (SLM) & Sinking Fund (SFM)',
        formula: 'd_{SL} = \\frac{FC - SV}{n} \\; | \\; d_{SF} = (FC - SV) \\left[ \\frac{i}{(1 + i)^n - 1} \\right]',
        description: 'SLM depreciation is constant; SFM includes compounding interest reserve.'
      },
      {
        name: 'Sum-of-the-Years-Digits (SOYD)',
        formula: 'd_m = (FC - SV) \\left[ \\frac{n - m + 1}{\\Sigma} \\right] \\; | \\; \\Sigma = \\frac{n(n + 1)}{2}',
        description: 'm = specific year (Year 1 numerator is n, Year 2 is n - 1).'
      },
      {
        name: 'Declining Balance (DBM) & Double Declining (DDBM)',
        formula: 'k_{DBM} = 1 - \\sqrt[n]{\\frac{SV}{FC}} = 1 - \\left(\\frac{SV}{FC}\\right)^{\\frac{1}{n}} \\; | \\; k_{DDBM} = \\frac{2}{n} \\; | \\; BV_m = FC(1 - k)^m',
        description: 'DBM uses salvage value SV; DDBM ignores SV in rate calculation.'
      }
    ],
    canonKeystrokeHighlight: {
      mode: 'STAT (Mode 3) & COMP (Mode 1)',
      keyTechnique: 'Instant sum of digits Σ and stored DBM rate',
      keystrokes: [
        'Sum of digits Σ: [SHIFT] [log] (Σ), enter [ALPHA] [X], from 1 to n, press [=].',
        'DBM rate: 1 [-] [SHIFT] [■/□] (ⁿ√) n [►] ( SV [÷] FC ) [=]',
        'Store into A: [SHIFT] [RCL] (STO) [A].',
        'Book Value year m: FC [×] ( 1 [-] [ALPHA] [A] ) [^] m [=].'
      ],
      proTip: 'In DDBM, annual rate is strictly 2 over n (2/n). Never subtract salvage value when computing rate k.'
    },
    examTraps: [
      'In SOYD, the numerator for Year 1 is n (largest), not 1.',
      'Cumulative depreciation D_m is FC minus Book Value: D_m = FC - BV_m.'
    ],
    sampleProblemIds: ['dsp-econ-10', 'dsp-econ-11', 'dsp-econ-12', 'dsp-econ-13'],
    selfCheckQuiz: [
      {
        question: 'An asset costs ₱150,000 with salvage value ₱30,000 after 5 years. Using SLM, what is book value at year 3?',
        options: ['₱72,000', '₱78,000', '₱90,000', '₱102,000'],
        correctAnswer: 1,
        explanation: 'Annual dep = (150,000 - 30,000) / 5 = ₱24,000. BV_3 = 150,000 - 3(24,000) = ₱78,000.'
      },
      {
        question: 'For an asset with useful life n = 10 years, what is the fixed DDBM depreciation rate?',
        options: ['10%', '15%', '20%', '25%'],
        correctAnswer: 2,
        explanation: 'k_DDBM = 2 / n = 2 / 10 = 0.20 = 20%.'
      }
    ]
  },

  // =========================================================================
  // DAY 5: GRADIENT SERIES & BOND VALUATION
  // Reference: 07_Canon_F789SGA_Engineering_Economics_CalTech.pdf
  // =========================================================================
  {
    dayNumber: 5,
    dayTitle: 'Gradient Series & Bond Valuation',
    focusArea: 'Arithmetic Gradients & Bond Pricing',
    sourceDoc: '07_Canon_F789SGA_Engineering_Economics_CalTech.pdf',
    estimatedHours: 2.0,
    coreConcepts: [
      'Arithmetic Gradient (G): Cash flow increases by constant dollar amount G each period.',
      'Uniform Series Conversion: A_total = A₁ ± G · (A/G, i, n).',
      'Bond Valuation: Investor receives periodic dividend coupons (I = F · r) plus redemption price C at maturity.',
      'Discount vs Premium: If purchase price P < face value F, bond is bought at discount (Yield > Coupon).'
    ],
    keyFormulas: [
      {
        name: 'Arithmetic Gradient to Annuity Factor (A/G, i, n)',
        formula: '(A/G, i, n) = \\frac{1}{i} - \\frac{n}{(1 + i)^n - 1} \\; | \\; A_{total} = A_1 \\pm G(A/G)',
        description: 'Converts annual gradient G into equivalent uniform annuity.'
      },
      {
        name: 'Bond Purchase Price Formula',
        formula: 'P = \\frac{C}{(1 + i)^n} + Fr \\left[ \\frac{1 - (1 + i)^{-n}}{i} \\right]',
        description: 'C = redemption price, Fr = coupon dividend per period, i = yield rate per period.'
      }
    ],
    canonKeystrokeHighlight: {
      mode: 'COMP (Mode 1)',
      keyTechnique: 'Bond valuation evaluation',
      keystrokes: [
        'Example (Face=1M, Coupon 8% semiannual r=4%, Yield 10% i=5%, 10 yrs n=20):',
        '1000000 [×] ( 1.05 [^] -20 ) [+] 40000 [×] ( ( 1 [-] 1.05 [^] -20 ) [÷] 0.05 ) [=]',
        'Display: 875,377.90 (sells at discount).'
      ],
      proTip: 'On PRC exams, bond coupons are usually semiannual: divide annual coupon by 2, divide annual yield by 2, and double years (n = 2 · years).'
    },
    examTraps: [
      'The gradient G starts in Year 2 (Year 1 has gradient = 0).',
      'Dividend I uses coupon rate r (I = F · r), but discounting uses yield rate i.'
    ],
    sampleProblemIds: ['dsp-econ-20', 'dsp-econ-21'],
    selfCheckQuiz: [
      {
        question: 'When required investor yield (10%) exceeds the bond coupon rate (8%), the bond sells at:',
        options: ['A premium (> par)', 'Par value', 'A discount (< par)', 'Cannot be determined'],
        correctAnswer: 2,
        explanation: 'When investor demands higher yield than coupon, purchase price must be below par (discount).'
      },
      {
        question: 'Cash flows: Year 1 = ₱10,000, Year 2 = ₱13,000, Year 3 = ₱16,000. What is gradient G?',
        options: ['₱1,000', '₱3,000', '₱10,000', '₱13,000'],
        correctAnswer: 1,
        explanation: 'Base A₁ = 10,000. Annual increase G = 13,000 - 10,000 = ₱3,000.'
      }
    ]
  },

  // =========================================================================
  // DAY 6: BREAK-EVEN, PAYBACK, IRR & BENEFIT-COST
  // Reference: 06_BreakEven_Payback_RateOfReturn_IRR.pdf
  // =========================================================================
  {
    dayNumber: 6,
    dayTitle: 'Break-Even, Payback, IRR & Benefit-Cost (B/C)',
    focusArea: 'Financial Evaluation & Decision Analysis',
    sourceDoc: '06_BreakEven_Payback_RateOfReturn_IRR.pdf',
    estimatedHours: 2.0,
    coreConcepts: [
      'Break-Even Point (BEP): Production volume Q where Total Revenue (TR) equals Total Cost (TC).',
      'Contribution Margin: (p - v) is selling price minus unit variable cost.',
      'Payback Period: Time required for cumulative net cash flow to recover initial capital.',
      'Internal Rate of Return (IRR): The exact discount rate that makes Net Present Value (NPV) = 0.',
      'Benefit-Cost Ratio (B/C): PW(Benefits) / PW(Costs) ≥ 1.0 indicates economically justified project.'
    ],
    keyFormulas: [
      {
        name: 'Break-Even Volume & Margin',
        formula: 'Q_{BEP} = \\frac{FC}{p - v} \\; | \\; S_{BEP} = \\frac{FC}{1 - \\frac{v}{p}}',
        description: 'FC = fixed costs, p = unit selling price, v = unit variable cost.'
      },
      {
        name: 'Internal Rate of Return (IRR) & Benefit-Cost Ratio',
        formula: 'NPV(IRR) = \\sum_{t=0}^n \\frac{CF_t}{(1 + IRR)^t} = 0 \\; | \\; B/C = \\frac{PW(Benefits)}{PW(Costs)} \\ge 1.0',
        description: 'IRR discounts net cash flows to zero; B/C must be ≥ 1.0 for feasibility.'
      }
    ],
    canonKeystrokeHighlight: {
      mode: 'COMP (Mode 1) & SOLVE',
      keyTechnique: 'Solve IRR root using [SHIFT] [SOLVE]',
      keystrokes: [
        'Enter cash flow polynomial with variable [X] as IRR:',
        '-500000 [+] 180000 [×] ( ( 1 [-] ( 1 [+] [ALPHA] [X] ) [^] -4 ) [÷] [ALPHA] [X] ) [ALPHA] [=] 0',
        'Press [SHIFT] [CALC] (SOLVE), prompt "X?": Enter 0.15, press [=].',
        'Display: X = 0.1636 (IRR = 16.36%).'
      ],
      proTip: 'Always input a positive guess like 0.1 when running SOLVE for IRR to converge quickly.'
    },
    examTraps: [
      'Total Cost = Fixed Cost + (v · Q). Do not confuse unit variable cost with total variable cost.',
      'Basic Payback Period ignores interest; only Discounted Payback accounts for time value.'
    ],
    sampleProblemIds: ['dsp-econ-16', 'dsp-econ-17', 'dsp-econ-18', 'dsp-econ-19'],
    selfCheckQuiz: [
      {
        question: 'Fixed cost is ₱1,200,000/yr. Product sells for ₱500 with unit variable cost of ₱300. What is break-even volume?',
        options: ['2,400 units', '4,000 units', '6,000 units', '8,000 units'],
        correctAnswer: 2,
        explanation: 'Q_BEP = 1,200,000 / (500 - 300) = 1,200,000 / 200 = 6,000 units.'
      },
      {
        question: 'A public project is considered economically justified under the Benefit-Cost method when:',
        options: ['B/C < 0.5', 'B/C = 0.75', 'B/C ≥ 1.0', 'B/C > 5.0 only'],
        correctAnswer: 2,
        explanation: 'A project is economically viable whenever PW(Benefits) ≥ PW(Costs), meaning B/C ≥ 1.0.'
      }
    ]
  },

  // =========================================================================
  // DAY 7: SPEED RUN MOCK SIMULATION & FINAL PASS READINESS
  // Reference: All 7 Syllabus Documents
  // =========================================================================
  {
    dayNumber: 7,
    dayTitle: 'Mock Board Simulation & 100% Pass Readiness',
    focusArea: 'Comprehensive Review & Formula Checklist',
    sourceDoc: 'All 7 Syllabus Documents',
    estimatedHours: 2.5,
    coreConcepts: [
      'Comprehensive speed drill across all 6 core economics modules.',
      'Target pace: 1.5 minutes per question using Canon F-789SGA shortcuts.',
      'PRC Passing Standard: Weighted average ≥ 70% with no subject below 50%.'
    ],
    keyFormulas: [
      {
        name: 'The Core 4 Master Formulas',
        formula: 'F = P(1 + i)^n \\; | \\; P = A\\left[ \\frac{1 - (1 + i)^{-n}}{i} \\right] \\; | \\; CC = FC + \\frac{OM}{i} + \\frac{RC}{(1 + i)^k - 1} \\; | \\; Q_{BEP} = \\frac{FC}{p - v}',
        description: 'These 4 equations account for over 75% of PRC Engineering Economics board questions.'
      },
      {
        name: 'Effective Annual Rate Quick Formula',
        formula: 'ER = \\left(1 + \\frac{r}{m}\\right)^m - 1 \\; | \\; ER_{cont} = e^r - 1',
        description: 'Standard formula for nominal vs effective rate comparisons.'
      }
    ],
    canonKeystrokeHighlight: {
      mode: 'ALL MODES SPEED DRILL',
      keyTechnique: 'Top 3 Canon F-789SGA Power Moves',
      keystrokes: [
        'Move 1: Store rate into memory: r [÷] m [SHIFT] [RCL] (STO) [A].',
        'Move 2: Solve unknown n, i, or IRR with [SHIFT] [CALC] (SOLVE).',
        'Move 3: Use natural display fraction key [■/□] for clean stacked fractions.'
      ],
      proTip: 'Reset calculator memory before exam: [SHIFT] [9] [3] [=] [AC].'
    },
    examTraps: [
      'Check compounding frequency: monthly (m=12), quarterly (m=4), semiannual (m=2).',
      'Simple interest defaults to 360 days (Ordinary) unless "exact" is specified.',
      'Annuity Due multiplies ordinary annuity by (1 + i).'
    ],
    sampleProblemIds: [
      'dsp-econ-01', 'dsp-econ-02', 'dsp-econ-06', 'dsp-econ-10',
      'dsp-econ-11', 'dsp-econ-14', 'dsp-econ-16', 'dsp-econ-18',
      'dsp-econ-20', 'dsp-econ-21'
    ],
    selfCheckQuiz: [
      {
        question: 'Which depreciation method does NOT deduct salvage value when computing the depreciation rate?',
        options: ['Straight-Line (SLM)', 'Sinking Fund (SFM)', 'Double Declining Balance (DDBM)', 'Sum-of-the-Years-Digits (SOYD)'],
        correctAnswer: 2,
        explanation: 'In DDBM, fixed rate is simply 2/n applied directly to initial cost FC without deducting salvage value.'
      },
      {
        question: 'What is the required overall passing standard for the PRC REE licensure exam?',
        options: [
          'Weighted Average ≥ 65% with no subject below 40%',
          'Weighted Average ≥ 70% with no subject below 50%',
          'Weighted Average ≥ 75% with no subject below 60%',
          'Straight 70% in all subjects'
        ],
        correctAnswer: 1,
        explanation: 'PRC standard requires general weighted average of at least 70% with no grade below 50% in any subject.'
      }
    ]
  }
];
