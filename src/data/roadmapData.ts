import { StudyTopic } from '../types';

export const MASTER_STUDY_ROADMAP: StudyTopic[] = [
  // ==================== PHASE 1: MATHEMATICS (FOUNDATIONS FIRST) ====================
  {
    id: 'math-1',
    subject: 'MATH',
    title: 'Algebra, Equations & Polynomials',
    orderPriority: 1,
    phase: 1,
    description: 'Quadratic formulas, system of linear equations, binomial theorem, sequences, and logarithmic properties used across all EE problem solving.',
    visualSummary: 'Visualizing parabolic roots at y=0, intersecting linear planes, and logarithmic decay curves.',
    eli5Intuition: 'Think of algebra as finding the missing pieces of a balanced seesaw. If the left side has 2x + 4 and the right has 10, each x must weigh exactly 3 to keep it level.',
    boardExamWeight: '12% of Mathematics (High Frequency)',
    recommendedDays: 4,
    subtopics: [
      'Quadratic Equations & Discriminant (b² - 4ac)',
      'Systems of Linear Equations & Cramer\'s Rule (Determinants)',
      'Exponents and Logarithms (ln and log10 properties)',
      'Arithmetic & Geometric Progressions',
      'Binomial Theorem & Partial Fractions'
    ],
    keyFormulas: [
      {
        name: 'Quadratic Formula',
        formula: 'x = (-b ± √(b² - 4ac)) / (2a)',
        explanation: 'Gives the real or complex roots of any second-order equation ax² + bx + c = 0.',
        variables: ['a: coefficient of x²', 'b: coefficient of x', 'c: constant']
      },
      {
        name: 'Discriminant Behavior',
        formula: 'Δ = b² - 4ac',
        explanation: 'If Δ > 0: two real roots; Δ = 0: one repeated root; Δ < 0: two complex conjugate roots (critical for circuit damping).',
        variables: ['Δ: Discriminant']
      },
      {
        name: 'Logarithm Power Rule',
        formula: 'log_b(x^k) = k · log_b(x)',
        explanation: 'Essential for decibels (dB), RC discharge time constants, and attenuation calculations.',
        variables: ['b: base', 'k: power']
      }
    ]
  },
  {
    id: 'math-2',
    subject: 'MATH',
    title: 'Trigonometry & Polar Coordinates',
    orderPriority: 2,
    phase: 1,
    description: 'Unit circle, trigonometric identities, Law of Sines and Cosines, and converting between rectangular (x, y) and polar (r, θ) coordinates.',
    visualSummary: 'Rotating vector on the unit circle generating sine (vertical projection) and cosine (horizontal projection).',
    eli5Intuition: 'Imagine a spotlight shining on a spinning bicycle pedal from the side and from the top. The side shadow moves like a sine wave, the top shadow moves like a cosine wave.',
    boardExamWeight: '14% of Mathematics (Direct foundation for AC phasors)',
    recommendedDays: 4,
    subtopics: [
      'Unit Circle definitions of sin, cos, tan',
      'Fundamental Identities: sin²θ + cos²θ = 1, tanθ = sinθ/cosθ',
      'Double Angle & Half Angle Formulas',
      'Law of Sines: a/sinA = b/sinB = c/sinC',
      'Law of Cosines: c² = a² + b² - 2ab·cosC',
      'Polar to Rectangular conversion: x = r·cosθ, y = r·sinθ'
    ],
    keyFormulas: [
      {
        name: 'Pythagorean Identity',
        formula: 'sin²(θ) + cos²(θ) = 1',
        explanation: 'Foundation of impedance triangles and power triangles in AC circuits.',
        variables: ['θ: angle in degrees or radians']
      },
      {
        name: 'Law of Cosines',
        formula: 'c² = a² + b² - 2ab · cos(C)',
        explanation: 'Used to find resultant forces in mechanics and unbalanced line currents in 3-phase circuits.',
        variables: ['a, b: adjacent sides', 'C: included angle', 'c: opposite side']
      },
      {
        name: 'Polar to Rectangular',
        formula: 'Z = R + jX = |Z|∠θ = |Z|(cosθ + j sinθ)',
        explanation: 'Converts phasor magnitude and angle into real resistance and imaginary reactance.',
        variables: ['|Z|: magnitude = √(R² + X²)', 'θ: phase angle = arctan(X/R)']
      }
    ]
  },
  {
    id: 'math-3',
    subject: 'MATH',
    title: 'Differential Calculus & Optimization',
    orderPriority: 3,
    phase: 1,
    description: 'Limits, derivatives, rate of change, curve sketching, tangent lines, and finding maximum power, minimum cost, or optimal efficiency.',
    visualSummary: 'Tangent line sliding across a curve where slope = 0 marks the peak (maximum) or valley (minimum).',
    eli5Intuition: 'Derivative is your speedometer. Distance is where you are; the derivative is how fast you are moving right now at this exact split-second.',
    boardExamWeight: '15% of Mathematics',
    recommendedDays: 5,
    subtopics: [
      'Derivatives of Polynomials, Trigonometric, and Exponential functions',
      'Product Rule, Quotient Rule, and Chain Rule',
      'Rate of Change (Related Rates problems)',
      'Maxima and Minima: First and Second Derivative Tests',
      'Radius of Curvature & Tangent/Normal Lines'
    ],
    keyFormulas: [
      {
        name: 'Power Rule',
        formula: 'd/dx (x^n) = n · x^(n-1)',
        explanation: 'Core derivative rule for polynomial functions and motion equations.',
        variables: ['n: real power']
      },
      {
        name: 'Chain Rule',
        formula: 'd/dx [f(g(x))] = f\'(g(x)) · g\'(x)',
        explanation: 'Used when differentiating nested functions, such as sinusoidal voltage v(t) = Vm·sin(ωt + φ).',
        variables: ['f: outer function', 'g: inner function']
      },
      {
        name: 'Optimization Condition',
        formula: 'dy/dx = 0  and  d²y/dx² < 0 (Maximum)',
        explanation: 'Finds peak power transfer or minimum wire cost.',
        variables: ['dy/dx: first derivative', 'd²y/dx²: concavity']
      }
    ]
  },
  {
    id: 'math-4',
    subject: 'MATH',
    title: 'Integral Calculus & Accumulation',
    orderPriority: 4,
    phase: 1,
    description: 'Indefinite and definite integrals, integration by substitution, integration by parts, RMS value calculation, and area under curves.',
    visualSummary: 'Filling an irregular shape with thousands of ultra-thin rectangular slivers whose total sum equals the exact area.',
    eli5Intuition: 'If derivative is your speedometer, integral is your odometer. It adds up all the tiny speeds over time to tell you exactly how far you travelled.',
    boardExamWeight: '16% of Mathematics',
    recommendedDays: 5,
    subtopics: [
      'Standard Integrals and Substitution Method',
      'Integration by Parts: ∫ u dv = uv - ∫ v du',
      'Definite Integrals & Fundamental Theorem of Calculus',
      'Calculation of RMS and Average Values of waveforms',
      'Area between curves, volumes of solids of revolution, centroids'
    ],
    keyFormulas: [
      {
        name: 'RMS Value of Continuous Waveform',
        formula: 'V_rms = √( (1/T) · ∫[0 to T] v(t)² dt )',
        explanation: 'The effective heating value of any periodic AC electrical voltage or current.',
        variables: ['T: period in seconds', 'v(t): instantaneous voltage']
      },
      {
        name: 'Integration by Parts',
        formula: '∫ u dv = u·v - ∫ v du',
        explanation: 'Used for products like ∫ t · e^(-at) dt in transient circuit response.',
        variables: ['u, v: chosen sub-functions']
      },
      {
        name: 'Charge Accumulation',
        formula: 'q(t) = ∫ i(t) dt',
        explanation: 'Current is rate of charge flow; integral of current gives total coulombs stored in a capacitor.',
        variables: ['q: electric charge in Coulombs', 'i(t): current in Amperes']
      }
    ]
  },
  {
    id: 'math-5',
    subject: 'MATH',
    title: 'Differential Equations & Laplace Transforms',
    orderPriority: 5,
    phase: 1,
    description: 'First-order differential equations (RL and RC charging/discharging), second-order RLC circuits, and Laplace s-domain transformation.',
    visualSummary: 'Exponential decay curve y(t) = e^(-t/τ) showing a capacitor charging up to 63.2% in one time constant τ.',
    eli5Intuition: 'A differential equation tells you how something changes based on how much of it you currently have, like hot coffee cooling down faster when it is super boiling.',
    boardExamWeight: '12% of Mathematics (Crucial for transient EE questions)',
    recommendedDays: 5,
    subtopics: [
      'Separation of Variables & Integrating Factor',
      '1st Order RL and RC Transient Response: i(t) = I_max(1 - e^(-t/τ))',
      '2nd Order Linear Differential Equations (Underdamped, Overdamped, Critically Damped)',
      'Laplace Transform Pairs: L{1} = 1/s, L{e^(at)} = 1/(s-a), L{sin(ωt)} = ω/(s² + ω²)',
      'Inverse Laplace Transforms & Partial Fractions'
    ],
    keyFormulas: [
      {
        name: 'RC Time Constant',
        formula: 'τ = R · C',
        explanation: 'Time required for capacitor voltage to reach 63.2% of final value or discharge to 36.8%.',
        variables: ['R: resistance in Ω', 'C: capacitance in Farads', 'τ: time constant in seconds']
      },
      {
        name: 'RL Time Constant',
        formula: 'τ = L / R',
        explanation: 'Time required for inductor current to build up to 63.2% of steady state.',
        variables: ['L: inductance in Henrys', 'R: resistance in Ω']
      },
      {
        name: 'Capacitor Differential Law',
        formula: 'i(t) = C · (dv/dt)',
        explanation: 'Current through a capacitor is proportional to the rate of change of voltage.',
        variables: ['C: capacitance', 'dv/dt: voltage slope']
      }
    ]
  },
  {
    id: 'math-6',
    subject: 'MATH',
    title: 'Probability, Statistics & Vector Analysis',
    orderPriority: 6,
    phase: 1,
    description: 'Permutations, combinations, conditional probability, normal distribution, standard deviation, vector dot/cross products, and gradient/divergence.',
    visualSummary: 'Bell curve distribution and 3D coordinate vector diagram showing dot product projection and cross product orthogonal vector.',
    eli5Intuition: 'Probability measures the likelihood of events occurring, like lightning striking a substation or component failures over an operating year.',
    boardExamWeight: '14% of Mathematics',
    recommendedDays: 4,
    subtopics: [
      'Fundamental Principle of Counting, Permutations: nPr = n! / (n - r)!',
      'Combinations: nCr = n! / [r! · (n - r)!]',
      'Independent and Conditional Probability: P(A ∩ B) = P(A) · P(B|A)',
      'Normal Distribution (Gaussian Curve) and Z-score calculations',
      'Vector Dot Product (A · B = |A||B| cos θ) and Cross Product (A × B = |A||B| sin θ n)'
    ],
    keyFormulas: [
      {
        name: 'Permutations & Combinations',
        formula: 'P(n, r) = n! / (n - r)!,   C(n, r) = n! / [ r! · (n - r)! ]',
        explanation: 'Counting formulas where order matters (permutation) vs order does not matter (combination).',
        variables: ['n: total pool size', 'r: number chosen']
      },
      {
        name: 'Vector Dot Product',
        formula: 'A · B = A_x B_x + A_y B_y + A_z B_z = |A| |B| cos(θ)',
        explanation: 'Yields a scalar quantity such as electrical work W = F · d.',
        variables: ['θ: angle between vectors A and B']
      },
      {
        name: 'Standard Normal Z-Score',
        formula: 'Z = (X - μ) / σ',
        explanation: 'Normalizes raw measurements into standard normal deviations.',
        variables: ['μ: mean', 'σ: standard deviation']
      }
    ]
  },

  // ==================== PHASE 2: ESAS (ENGINEERING ECONOMICS MASTER MODULES) ====================
  // Main Reference: Drive Folder "ESAS - Engineering Economics" & Canon F-789SGA CalTech
  {
    id: 'esas-1',
    subject: 'ESAS',
    title: 'Time Value of Money: Simple & Compound Interest',
    orderPriority: 7,
    phase: 2,
    description: 'Ordinary vs exact simple interest, compound interest accumulation, nominal vs effective annual interest rate (ER), continuous compounding, and Canon F-789SGA fast SOLVE techniques.',
    visualSummary: 'Cash flow timeline comparing simple interest straight line vs compound interest exponential growth curve over n periods.',
    eli5Intuition: 'Money today is worth more than money tomorrow because today\'s money earns interest. Compound interest means you earn interest on top of your previous interest.',
    boardExamWeight: '20% of Engineering Economics (ESAS)',
    recommendedDays: 4,
    subtopics: [
      'Simple Interest: Ordinary vs Exact (360 vs 365 Days)',
      'Compound Interest Lump Sum & Present Worth',
      'Compounding Periods (Annual, Semi-Annual, Quarterly, Monthly)',
      'Nominal vs Effective Annual Interest Rate (ER)',
      'Continuous Compounding Interest',
      'Canon F-789SGA CalTech: Unknown n or i via SOLVE'
    ],
    keyFormulas: [
      {
        name: 'Compound Interest Lump Sum',
        formula: 'F = P(1 + i)^n  |  P = \\frac{F}{(1 + i)^n} = F(1 + i)^{-n}',
        explanation: 'Future lump sum accumulated from principal P at periodic rate i after n periods.',
        variables: ['P: Present worth (principal)', 'F: Future compound amount', 'i: rate per period (r/m)', 'n: total periods (m · t)']
      },
      {
        name: 'Effective Annual Rate (ER)',
        formula: 'ER = \\left(1 + \\frac{r}{m}\\right)^m - 1  |  ER_{cont} = e^r - 1',
        explanation: 'True annual interest rate earned after compounding m times per year at nominal rate r.',
        variables: ['r: nominal annual interest rate', 'm: compounding periods per year']
      },
      {
        name: 'Continuous Compounding',
        formula: 'F = P \\cdot e^{r \\cdot n}',
        explanation: 'Compounding where frequency m approaches infinity.',
        variables: ['e: Euler constant ≈ 2.71828', 'r: nominal annual rate', 'n: number of years']
      }
    ]
  },
  {
    id: 'esas-2',
    subject: 'ESAS',
    title: 'Annuities: Ordinary, Due, Deferred & Perpetuity',
    orderPriority: 8,
    phase: 2,
    description: 'Equal uniform series payments, Ordinary Annuity (end of period), Annuity Due (beginning of period), Deferred Annuity with grace periods, Perpetuity, and Canon F-789SGA keystroke shortcuts.',
    visualSummary: 'Timeline with equal uniform vertical arrows A at regular intervals discounted back to single Present Worth P or forward to Future Worth F.',
    eli5Intuition: 'Annuity is a steady stream of equal payments, like paying monthly amortizations for a car or receiving a fixed pension every year.',
    boardExamWeight: '25% of Engineering Economics (ESAS)',
    recommendedDays: 5,
    subtopics: [
      'Ordinary Annuity: Present Worth & Future Worth',
      'Annuity Due: Immediate Beginning-of-Period Payments',
      'Deferred Annuity: Grace Periods & Discounting',
      'Perpetuity: Capitalized Value of Infinite Series',
      'Sinking Fund Annuity & Periodic Reserve Allocation',
      'Canon F-789SGA CalTech: One-Line Annuity Evaluation'
    ],
    keyFormulas: [
      {
        name: 'Ordinary Annuity Present Worth',
        formula: 'P = A \\left[ \\frac{1 - (1 + i)^{-n}}{i} \\right]',
        explanation: 'Equivalent present lump sum of n uniform end-of-period payments A.',
        variables: ['P: Present Worth', 'A: Uniform periodic payment', 'i: interest rate per period', 'n: number of payments']
      },
      {
        name: 'Ordinary Annuity Future Worth',
        formula: 'F = A \\left[ \\frac{(1 + i)^n - 1}{i} \\right]',
        explanation: 'Accumulated future amount of n uniform payments deposited into an interest-bearing fund.',
        variables: ['F: Future compound amount', 'A: Periodic deposit']
      },
      {
        name: 'Perpetuity Present Worth',
        formula: 'P = \\frac{A}{i}',
        explanation: 'Present worth of an infinite uniform periodic payment (n = ∞).',
        variables: ['P: Capitalized value', 'A: Endless periodic cash flow', 'i: interest rate']
      }
    ]
  },
  {
    id: 'esas-3',
    subject: 'ESAS',
    title: 'Depreciation Analysis: SLM, SFM, SOYD, DBM & DDBM',
    orderPriority: 9,
    phase: 2,
    description: 'The 5 standard engineering asset depreciation methods: Straight Line, Sinking Fund, Sum-of-the-Years-Digits, Declining Balance (Matheson), Double Declining Balance, and Canon F-789SGA STAT mode shortcuts.',
    visualSummary: 'Comparative asset book value degradation curves: Straight-line diagonal vs rapid accelerated SOYD/DBM curves.',
    eli5Intuition: 'When an electrical contractor buys a ₱1,000,000 transformer, it loses value each year as it ages. Depreciation calculates its tax and accounting value each year.',
    boardExamWeight: '22% of Engineering Economics (ESAS)',
    recommendedDays: 5,
    subtopics: [
      'Straight-Line Method (SLM)',
      'Sinking Fund Method (SFM)',
      'Sum-of-the-Years-Digits (SOYD)',
      'Declining Balance Method (DBM / Matheson)',
      'Double Declining Balance Method (DDBM)',
      'Canon F-789SGA CalTech: STAT Mode & SOYD Summation'
    ],
    keyFormulas: [
      {
        name: 'Straight Line Depreciation (SLM)',
        formula: 'd = \\frac{FC - SV}{n}, \\quad BV_m = FC - m \\cdot d',
        explanation: 'Constant annual depreciation and book value at year m.',
        variables: ['FC: First cost', 'SV: Salvage value', 'n: useful life', 'BV_m: Book value after m years']
      },
      {
        name: 'Sum-of-the-Years-Digits (SOYD)',
        formula: 'd_m = (FC - SV) \\left[ \\frac{n - m + 1}{\\Sigma} \\right], \\quad \\Sigma = \\frac{n(n + 1)}{2}',
        explanation: 'Accelerated depreciation method where earlier years carry much higher deductions.',
        variables: ['m: current year (1, 2, ... n)', 'Σ = sum of year integers']
      },
      {
        name: 'Declining Balance (Matheson Formula)',
        formula: 'k = 1 - \\sqrt[n]{\\frac{SV}{FC}}, \\quad BV_m = FC(1 - k)^m',
        explanation: 'Constant percentage write-down of beginning-of-year book value.',
        variables: ['k: constant depreciation rate', 'BV_m: Book value at end of year m']
      }
    ]
  },
  {
    id: 'esas-4',
    subject: 'ESAS',
    title: 'Capitalized Cost & Perpetual Asset Replacement',
    orderPriority: 10,
    phase: 2,
    description: 'Capitalized cost evaluation for long-lived civil and electrical utility installations (dams, transmission towers, substations) with perpetual operation, maintenance, and periodic renewals.',
    visualSummary: 'Diagram of a 100-year infrastructure project with initial capital cost, continuous annual maintenance, and recurring replacement spikes every k years.',
    eli5Intuition: 'Capitalized cost is the huge lump sum you must deposit in a bank today so that the interest alone will maintain and rebuild a power plant forever without touching the principal.',
    boardExamWeight: '15% of Engineering Economics (ESAS)',
    recommendedDays: 4,
    subtopics: [
      'Capitalized Cost & Perpetual Life Concept',
      'Perpetual Operation & Maintenance Cost (OM / i)',
      'Periodic Replacement Cost Every k Years',
      'Comparing Perpetual Infrastructure Alternatives',
      'Canon F-789SGA CalTech: One-Line Memory Storage [STO] [A]'
    ],
    keyFormulas: [
      {
        name: 'Capitalized Cost (Full Form)',
        formula: 'CC = FC + \\frac{OM}{i} + \\frac{RC - SV}{(1 + i)^k - 1}',
        explanation: 'Total present investment required to construct, operate, and periodically replace an asset forever.',
        variables: ['FC: First cost', 'OM: Annual Operation & Maintenance', 'RC: Replacement cost', 'k: replacement interval in years', 'i: annual discount rate']
      },
      {
        name: 'Periodic Sinking Fund Replacement',
        formula: 'PW_{replacement} = \\frac{RC - SV}{(1 + i)^k - 1}',
        explanation: 'Present worth of an infinite sequence of replacements occurring every k years.',
        variables: ['RC: Cost each time replacement occurs', 'k: cycle length in years']
      }
    ]
  },
  {
    id: 'esas-5',
    subject: 'ESAS',
    title: 'Gradient Cash Flow Series & Bond Valuation',
    orderPriority: 11,
    phase: 2,
    description: 'Arithmetic gradient series (cash flows increasing by a constant amount G), Geometric gradient series (cash flows changing by constant percentage g), and municipal/corporate bond pricing.',
    visualSummary: 'Stepped staircase cash flow diagram showing base annuity A1 plus incremental gradient stairs G, 2G, 3G...',
    eli5Intuition: 'Maintenance on an electrical vehicle or generator gets more expensive every year as parts wear out. Gradient formulas calculate the equivalent flat annual budget.',
    boardExamWeight: '14% of Engineering Economics (ESAS)',
    recommendedDays: 4,
    subtopics: [
      'Arithmetic Gradient Series (Linear Increase G)',
      'Geometric Gradient Series (Percentage Growth g)',
      'Equivalent Uniform Annual Cost (EUAC)',
      'Bond Valuation: Purchase Price of Coupon Bonds',
      'Bond Yield to Maturity (YTM) & Current Yield',
      'Canon F-789SGA CalTech: Gradient & Bond Shortcuts'
    ],
    keyFormulas: [
      {
        name: 'Arithmetic Gradient to Annuity Factor',
        formula: '(A/G, i, n) = \\frac{1}{i} - \\frac{n}{(1 + i)^n - 1}',
        explanation: 'Converts a linear increase G into an equivalent uniform periodic series.',
        variables: ['G: constant dollar increase per period', 'A_1: base payment at period 1', 'i: interest rate', 'n: periods']
      },
      {
        name: 'Total Equivalent Uniform Cost',
        formula: 'A_{total} = A_1 \\pm G(A/G, i, n)',
        explanation: 'Combines base first-year cost with increasing (+G) or decreasing (-G) gradient.',
        variables: ['A_total: equivalent uniform annual cost']
      },
      {
        name: 'Bond Present Price',
        formula: 'P = \\frac{C}{(1 + i)^n} + Fr \\left[ \\frac{1 - (1 + i)^{-n}}{i} \\right]',
        explanation: 'Fair market value of a coupon bond discounting coupons and redemption value C.',
        variables: ['Fr: periodic coupon dividend', 'C: redemption value', 'i: yield rate', 'n: coupon periods']
      }
    ]
  },
  {
    id: 'esas-6',
    subject: 'ESAS',
    title: 'Break-Even Analysis, Payback Period & Rate of Return',
    orderPriority: 12,
    phase: 2,
    description: 'Break-even production volume (TR = TC), simple and discounted payback period, Internal Rate of Return (IRR / ROR), Benefit-Cost ratio (B/C), and Canon F-789SGA SOLVE techniques.',
    visualSummary: 'Graph of Total Revenue line crossing Total Cost line at the Break-Even Point Q_BEP.',
    eli5Intuition: 'Break-even tells an electrical contractor exactly how many solar panels or motors they must sell before they stop losing money and start making a profit.',
    boardExamWeight: '18% of Engineering Economics (ESAS)',
    recommendedDays: 4,
    subtopics: [
      'Break-Even Sales & Production Volume (Q_BEP)',
      'Contribution Margin & Operational Profitability',
      'Simple & Discounted Payback Period',
      'Internal Rate of Return (IRR / ROR Analysis)',
      'Benefit-Cost Ratio (B/C ≥ 1.0 Feasibility)',
      'Canon F-789SGA CalTech: Instant IRR via SHIFT SOLVE'
    ],
    keyFormulas: [
      {
        name: 'Break-Even Volume & Sales Revenue',
        formula: 'Q_{BEP} = \\frac{FC}{p - v}, \\quad S_{BEP} = \\frac{FC}{1 - \\frac{v}{p}}',
        explanation: 'Number of units needed to cover fixed costs FC with unit selling price p and unit variable cost v.',
        variables: ['FC: Total fixed costs', 'p: selling price per unit', 'v: variable cost per unit']
      },
      {
        name: 'Rate of Return (IRR Condition)',
        formula: 'NPV(IRR) = \\sum_{t=0}^n \\frac{CF_t}{(1 + IRR)^t} = 0',
        explanation: 'The internal discount rate that drives net present worth of all project cash flows to zero.',
        variables: ['CF_t: cash flow at period t', 'IRR: Internal Rate of Return']
      },
      {
        name: 'Benefit-Cost Ratio (B/C)',
        formula: 'B/C = \\frac{PW(Benefits)}{PW(Costs)} \\ge 1.0',
        explanation: 'Decision rule: project is economically justified if benefit-to-cost ratio is at least 1.0.',
        variables: ['PW: Present Worth discounted at Minimum Attractive Rate of Return (MARR)']
      }
    ]
  },

  // ==================== PHASE 3: EE PROFESSIONAL SUBJECTS (CORE MASTERY) ====================
  {
    id: 'ee-1',
    subject: 'EE',
    title: 'DC Circuits & Network Theorems',
    orderPriority: 13,
    phase: 3,
    description: 'Ohm\'s Law, Kirchhoff\'s Current & Voltage Laws (KCL/KVL), series-parallel reduction, Wye-Delta conversion, Thevenin\'s and Norton\'s theorems, and Maximum Power Transfer.',
    visualSummary: 'Thevenin equivalent circuit reducing a complex network into an ideal voltage source Vth in series with resistance Rth.',
    eli5Intuition: 'Electricity is like water in pipes: Voltage is pump pressure, Current is water flowing, Resistance is pipe friction. Thevenin proves that no matter how messy your plumbing is, from the outside it acts like one simple pump and one valve.',
    boardExamWeight: '12% of EE Professional',
    recommendedDays: 5,
    subtopics: [
      'Ohm\'s Law: V = I·R, Power P = V·I = I²R = V²/R',
      'Kirchhoff\'s Laws: KCL at nodes (ΣI_in = ΣI_out), KVL around loops (ΣV = 0)',
      'Delta-Wye (Δ - Y) Conversion Formulas',
      'Thevenin\'s Equivalent (V_th and R_th) & Norton\'s Equivalent (I_N and R_N)',
      'Maximum Power Transfer Theorem: R_load = R_thevenin',
      'Superposition Theorem (Linearity principle)'
    ],
    keyFormulas: [
      {
        name: 'Maximum Power Transfer',
        formula: 'P_max = (V_th)² / (4 · R_th)',
        explanation: 'Occurs when load resistance exactly equals internal Thevenin resistance.',
        variables: ['V_th: Thevenin open-circuit voltage', 'R_th: Thevenin resistance']
      },
      {
        name: 'Delta to Wye Conversion',
        formula: 'R_Y = (Product of Adjacent Delta Resistors) / (Sum of all 3 Delta Resistors)',
        explanation: 'Example: Ra = (Rb · Rc) / (Ra + Rb + Rc).',
        variables: ['R_Y: wye leg', 'R_delta: delta ring resistors']
      },
      {
        name: 'Current Divider Rule',
        formula: 'I₁ = I_total · (R₂ / (R₁ + R₂))',
        explanation: 'Current splits inversely proportional to resistance.',
        variables: ['I₁: branch 1 current', 'R₂: opposite branch resistance']
      }
    ]
  },
  {
    id: 'ee-2',
    subject: 'EE',
    title: 'Single-Phase AC Circuits & Phasors',
    orderPriority: 14,
    phase: 3,
    description: 'Sinusoidal voltages, RMS and average values, inductive reactance XL = 2πfL, capacitive reactance XC = 1/(2πfC), impedance Z, power factor, and resonance.',
    visualSummary: 'Phasor diagram with current lagging voltage by angle θ in an inductive load, forming the Power Triangle (P, Q, S).',
    eli5Intuition: 'In AC, voltage flips back and forth like a pendulum. Inductors act like heavy flywheels that delay current (Current LAGS). Capacitors act like elastic springs that rush current first (Current LEADS). Remember: ELI the ICE man!',
    boardExamWeight: '15% of EE Professional',
    recommendedDays: 5,
    subtopics: [
      'Sinusoids: v(t) = V_max · sin(ωt + φ), ω = 2πf',
      'Reactance: X_L = 2πfL (Ohms), X_C = 1 / (2πfC) (Ohms)',
      'Complex Impedance: Z = R + j(X_L - X_C) = |Z|∠θ',
      'Power Triangle: Real Power P (Watts), Reactive Power Q (VARs), Apparent Power S (VA)',
      'Power Factor: pf = cos(θ) = P / S',
      'Series & Parallel Resonance: f_r = 1 / (2π√(LC))',
      'Power Factor Correction using Shunt Capacitors: Q_c = P · (tan θ₁ - tan θ₂)'
    ],
    keyFormulas: [
      {
        name: 'Power Triangle Equation',
        formula: 'S² = P² + Q²   or   S = P + jQ = V_rms · (I_rms)*',
        explanation: 'Pythagorean relation between True Power (P), Reactive Power (Q), and Apparent Power (S).',
        variables: ['S: apparent power in VA', 'P: active power in Watts', 'Q: reactive power in VAR']
      },
      {
        name: 'Series Resonance Frequency',
        formula: 'f_r = 1 / (2π · √(L · C))',
        explanation: 'Frequency where inductive reactance equals capacitive reactance (X_L = X_C), minimizing impedance to Z = R.',
        variables: ['L: inductance (H)', 'C: capacitance (F)', 'f_r: resonance in Hz']
      },
      {
        name: 'Capacitor Size for PF Correction',
        formula: 'Q_c = P · [tan(arccos(pf₁)) - tan(arccos(pf₂))]',
        explanation: 'Reactive power in kVAR needed to improve power factor from pf₁ to pf₂.',
        variables: ['P: active load kW', 'pf₁: initial power factor', 'pf₂: target power factor']
      }
    ]
  },
  {
    id: 'ee-3',
    subject: 'EE',
    title: 'Three-Phase AC Systems',
    orderPriority: 15,
    phase: 3,
    description: 'Balanced Wye (Y) and Delta (Δ) connections, line vs phase voltages and currents, two-wattmeter method, and unbalanced 3-phase analysis.',
    visualSummary: '120-degree balanced phasor constellation showing V_line = √3 · V_phase leading by 30 degrees in a Wye system.',
    eli5Intuition: 'Three-phase power is like a 3-cylinder engine where pistons push smoothly 120 degrees apart. The total power delivery is continuous and never drops to zero, unlike single-phase which pulses 120 times a second.',
    boardExamWeight: '14% of EE Professional',
    recommendedDays: 5,
    subtopics: [
      'Wye (Star) Connection: V_line = √3 · V_phase ∠+30°, I_line = I_phase',
      'Delta (Mesh) Connection: V_line = V_phase, I_line = √3 · I_phase ∠-30°',
      'Total 3-Phase Power: P_total = √3 · V_line · I_line · cos(θ) = 3 · V_phase · I_phase · cos(θ)',
      'Two-Wattmeter Method: P_total = W₁ + W₂, Q_total = √3(W₁ - W₂)',
      'Power factor from Two Wattmeters: tan(θ) = √3 · (W₁ - W₂) / (W₁ + W₂)',
      'Open-Delta (V-V) Transformer Bank Capacity: 57.7% of full Delta bank'
    ],
    keyFormulas: [
      {
        name: 'Total 3-Phase Active Power',
        formula: 'P_3φ = √3 · V_L · I_L · cos(θ)',
        explanation: 'Applies to ANY balanced 3-phase load whether connected in Wye or Delta.',
        variables: ['V_L: line-to-line RMS voltage', 'I_L: line current', 'cos(θ): load power factor']
      },
      {
        name: 'Two-Wattmeter Power Factor',
        formula: 'tan(θ) = √3 · (W₁ - W₂) / (W₁ + W₂)',
        explanation: 'Calculates system power factor angle directly from two wattmeter readings.',
        variables: ['W₁: reading of wattmeter 1', 'W₂: reading of wattmeter 2']
      },
      {
        name: 'Open-Delta Rating',
        formula: 'S_V-V = (1 / √3) · S_Δ-Δ = 0.577 · S_Δ-Δ',
        explanation: 'When one transformer is removed from a 3-unit delta bank, the remaining two can carry 57.7% of original kVA.',
        variables: ['S_V-V: capacity of open-delta', 'S_Δ-Δ: original 3-transformer bank capacity']
      }
    ]
  },
  {
    id: 'ee-4',
    subject: 'EE',
    title: 'Transformers (Single-Phase & Three-Phase)',
    orderPriority: 16,
    phase: 3,
    description: 'Ideal transformer turns ratio, EMF equation, open-circuit & short-circuit tests, equivalent impedance, voltage regulation, and all-day efficiency.',
    visualSummary: 'Cutaway magnetic iron core showing primary windings inducing magnetic flux Φ linking secondary windings without physical electrical contact.',
    eli5Intuition: 'A transformer is a magnetic gearbox. It can step voltage up to travel over mountains with tiny current (less heat loss), then step it down safely to 230V for your home appliances.',
    boardExamWeight: '14% of EE Professional',
    recommendedDays: 5,
    subtopics: [
      'Turns Ratio: a = N₁ / N₂ = V₁ / V₂ = I₂ / I₁ = √(Z₁ / Z₂)',
      'Transformer EMF Equation: E = 4.44 · f · N · Φ_max',
      'Open-Circuit Test (Core/Iron losses P_core) and Short-Circuit Test (Copper losses P_cu)',
      'Voltage Regulation: %VR = [(V_no_load - V_full_load) / V_full_load] · 100%',
      'Maximum Efficiency Condition: Copper Loss = Core Loss (P_cu = P_core)',
      'All-Day Efficiency = Energy Output in kWh / (Energy Output + Losses) in 24 hours',
      'Autotransformers & Conductive vs Inductive Power Transfer'
    ],
    keyFormulas: [
      {
        name: 'Transformer EMF Equation',
        formula: 'E = 4.44 · f · N · B_max · A_core',
        explanation: 'Relates frequency, number of turns, and maximum magnetic flux density.',
        variables: ['f: frequency (60 Hz)', 'N: number of turns', 'B_max: peak flux density (Tesla)', 'A: core area (m²)']
      },
      {
        name: 'Voltage Regulation',
        formula: '%VR = [(|V₂_NL| - |V₂_FL|) / |V₂_FL|] · 100%',
        explanation: 'Measure of transformer ability to deliver constant secondary voltage under load.',
        variables: ['V₂_NL: no load voltage', 'V₂_FL: rated full load voltage']
      },
      {
        name: 'Maximum Efficiency Load Fraction',
        formula: 'x_max_eff = √(P_core / P_cu_FL)',
        explanation: 'Fraction of full-load kVA where transformer achieves its highest operating efficiency.',
        variables: ['P_core: iron loss in Watts', 'P_cu_FL: full load copper loss in Watts']
      }
    ]
  },
  {
    id: 'ee-5',
    subject: 'EE',
    title: 'AC Machines: Induction Motors & Synchronous Machines',
    orderPriority: 17,
    phase: 3,
    description: 'Synchronous speed Ns = 120f/P, rotor slip s, torque-speed characteristic, starting methods, alternator voltage regulation, and synchronous motor power-factor improvement (synchronous condenser).',
    visualSummary: 'Stator revolving magnetic field rotating at Ns, pulling rotor bars behind it at speed Nr with slip s.',
    eli5Intuition: 'An induction motor is a carrot on a stick. The stator creates a spinning magnetic field (the carrot). The rotor chases it (the donkey) but can never quite catch up (slip), because if it did, the magnetic push would disappear!',
    boardExamWeight: '16% of EE Professional',
    recommendedDays: 5,
    subtopics: [
      'Synchronous Speed: N_s = (120 · f) / P (RPM)',
      'Rotor Slip: s = (N_s - N_r) / N_s',
      'Rotor Frequency: f_r = s · f',
      'Rotor Power Flow: P_gap : P_cu_rotor : P_mech = 1 : s : (1 - s)',
      'Starting of Induction Motors: Direct-on-Line (DOL), Star-Delta, Auto-transformer',
      'Alternators: Pitch Factor (k_p) and Distribution Factor (k_d)',
      'Synchronous Condensers (Over-excited synchronous motors operating without load to supply leading VARs)'
    ],
    keyFormulas: [
      {
        name: 'Synchronous Speed',
        formula: 'N_s = (120 · f) / P',
        explanation: 'Speed of rotating magnetic field produced by stator windings.',
        variables: ['f: supply frequency in Hz (60 Hz in PH)', 'P: number of magnetic poles']
      },
      {
        name: 'Induction Motor Slip',
        formula: 's = (N_s - N_r) / N_s',
        explanation: 'Relative difference between synchronous speed and actual shaft speed.',
        variables: ['N_s: synchronous RPM', 'N_r: rotor RPM']
      },
      {
        name: 'Rotor Copper Loss Relation',
        formula: 'P_cu_rotor = s · P_gap',
        explanation: 'Heat dissipated in rotor windings equals slip times air-gap power.',
        variables: ['P_gap: electromagnetic power crossing the air gap']
      }
    ]
  },
  {
    id: 'ee-6',
    subject: 'EE',
    title: 'Power Transmission, Fault Analysis & Protection',
    orderPriority: 18,
    phase: 3,
    description: 'Transmission line models (short, medium nominal-π, long), Ferranti effect, skin effect, per-unit system, symmetrical components (positive, negative, zero sequence), and protective relays.',
    visualSummary: 'Symmetrical components diagram decomposing an unbalanced 3-phase fault into balanced positive, negative, and zero sequence sets.',
    eli5Intuition: 'A high voltage transmission grid is an electric highway. Symmetrical components is like mathematical prism that breaks messy unbalanced short-circuits into three clean, orderly color beams that are easy to calculate.',
    boardExamWeight: '15% of EE Professional',
    recommendedDays: 5,
    subtopics: [
      'Short Transmission Line model (negligible capacitance: V_S = V_R + I·Z)',
      'Ferranti Effect (Receiving end voltage exceeds sending end at light loads)',
      'Per-Unit (pu) System: Z_pu_new = Z_pu_old · (V_base_old / V_base_new)² · (S_base_new / S_base_old)',
      'Symmetrical Components: Fortescue transformation matrix (a = 1∠120°)',
      'Types of Faults: Symmetrical 3-phase, Single Line-to-Ground (SLG, most common 70%), Line-to-Line (L-L), Double Line-to-Ground (DLG)',
      'Protective Relaying ANSI Device Numbers: 50 (Instantaneous Overcurrent), 51 (Time Overcurrent), 87 (Differential), 27 (Undervoltage)'
    ],
    keyFormulas: [
      {
        name: 'Per-Unit Impedance Base Conversion',
        formula: 'Z_pu_new = Z_pu_old · (V_old / V_new)² · (S_new / S_old)',
        explanation: 'Scales equipment impedance onto chosen common system MVA and kV base.',
        variables: ['S: base power in MVA', 'V: base voltage in kV']
      },
      {
        name: 'Single Line-to-Ground Fault Current',
        formula: 'I_f = 3 · I_a0 = (3 · E_a) / (Z₁ + Z₂ + Z₀ + 3Z_f)',
        explanation: 'Calculates fault current when one transmission conductor touches ground.',
        variables: ['Z₁, Z₂, Z₀: sequence impedances', 'Z_f: fault impedance']
      },
      {
        name: 'Surge Impedance of Overhead Line',
        formula: 'Z_c = √(L / C)  ≈ 300 to 400 Ω',
        explanation: 'Characteristic surge impedance of overhead high voltage lines.',
        variables: ['L: inductance per unit length', 'C: capacitance per unit length']
      }
    ]
  }
];
