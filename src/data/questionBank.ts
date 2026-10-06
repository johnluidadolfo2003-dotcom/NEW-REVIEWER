import { BoardProblem, SubjectType } from '../types';

// Curated high-yield board exam questions across MATH, ESAS, and EE
export const CORE_BOARD_PROBLEMS: BoardProblem[] = [
  // ===================== MATH (Items 1 to 35) =====================
  {
    id: 'math-p1',
    subject: 'MATH',
    topicId: 'math-1',
    topicName: 'Algebra & Quadratic Equations',
    dayNumber: 1,
    questionNumber: 1,
    question: 'Find the value of k such that the quadratic equation 3x² - kx + 12 = 0 has two equal real roots.',
    options: ['±6', '±12', '±18', '±24'],
    correctAnswer: 1, // ±12
    keyFormulaUsed: 'Discriminant: Δ = b² - 4ac = 0 for equal roots',
    difficulty: 'Foundation',
    eli5Takeaway: 'For a quadratic parabola to touch the horizontal ground at only ONE single spot (equal roots), its discriminant "b² - 4ac" must be exactly zero.',
    stepByStepSolution: [
      {
        step: 1,
        title: 'Identify coefficients from standard form',
        explanation: 'In ax² + bx + c = 0, we identify: a = 3, b = -k, and c = 12.',
        calculation: 'a = 3, b = -k, c = 12'
      },
      {
        step: 2,
        title: 'Apply the equal roots condition',
        explanation: 'For equal real roots, the discriminant Δ must equal zero.',
        calculation: 'Δ = b² - 4ac = 0\n(-k)² - 4(3)(12) = 0'
      },
      {
        step: 3,
        title: 'Solve for k',
        explanation: 'Rearrange and take the square root of both sides.',
        calculation: 'k² - 144 = 0  =>  k² = 144  =>  k = ±√144 = ±12'
      }
    ],
    visualDiagram: {
      type: 'calculus_tangent',
      caption: 'Parabola vertex touching the x-axis tangentially when k = 12 or k = -12.'
    }
  },
  {
    id: 'math-p2',
    subject: 'MATH',
    topicId: 'math-2',
    topicName: 'Trigonometry & Complex Phasors',
    dayNumber: 1,
    questionNumber: 2,
    question: 'Convert the rectangular impedance Z = 12 + j16 Ω into its equivalent polar form |Z|∠θ.',
    options: ['20∠53.13° Ω', '20∠36.87° Ω', '28∠53.13° Ω', '28∠36.87° Ω'],
    correctAnswer: 0, // 20∠53.13°
    keyFormulaUsed: '|Z| = √(R² + X²),  θ = arctan(X / R)',
    difficulty: 'Foundation',
    eli5Takeaway: 'Think of walking 12 paces East (Resistance) and 16 paces North (Inductance). The straight-line distance is 20 paces at an angle pointing 53.13° North of East.',
    stepByStepSolution: [
      {
        step: 1,
        title: 'Calculate magnitude |Z|',
        explanation: 'Use the Pythagorean theorem for the real and imaginary components.',
        calculation: '|Z| = √(12² + 16²) = √(144 + 256) = √400 = 20 Ω'
      },
      {
        step: 2,
        title: 'Calculate phase angle θ',
        explanation: 'Compute the inverse tangent of (imaginary / real).',
        calculation: 'θ = arctan(16 / 12) = arctan(1.3333) ≈ 53.13°'
      },
      {
        step: 3,
        title: 'Form the polar expression',
        explanation: 'Combine magnitude and angle: |Z|∠θ.',
        calculation: 'Z = 20∠53.13° Ω'
      }
    ],
    visualDiagram: {
      type: 'impedance_triangle',
      caption: 'Impedance right triangle: Base R = 12Ω, Height X = 16Ω, Hypotenuse |Z| = 20Ω.'
    }
  },
  {
    id: 'math-p3',
    subject: 'MATH',
    topicId: 'math-3',
    topicName: 'Differential Calculus',
    dayNumber: 1,
    questionNumber: 3,
    question: 'The electric charge in Coulombs flowing through an inductor varies with time as q(t) = 3t³ - 6t² + 4t + 5. Find the current at time t = 2 seconds.',
    options: ['12 A', '16 A', '20 A', '24 A'],
    correctAnswer: 1, // 16 A
    keyFormulaUsed: 'Current is the derivative of charge: i(t) = dq/dt',
    difficulty: 'Moderate',
    eli5Takeaway: 'Current is just how fast coulombs of charge are rushing past a point per second. So we take the derivative (slope) of charge with respect to time.',
    stepByStepSolution: [
      {
        step: 1,
        title: 'Differentiate charge q(t) with respect to time t',
        explanation: 'Apply the power rule d/dt(t^n) = n·t^(n-1) to each term.',
        calculation: 'i(t) = dq/dt = d/dt(3t³ - 6t² + 4t + 5)\ni(t) = 9t² - 12t + 4'
      },
      {
        step: 2,
        title: 'Evaluate at time t = 2 s',
        explanation: 'Substitute t = 2 into the current equation.',
        calculation: 'i(2) = 9(2)² - 12(2) + 4\ni(2) = 9(4) - 24 + 4 = 36 - 24 + 4 = 16 A'
      }
    ],
    visualDiagram: {
      type: 'calculus_tangent',
      caption: 'Slope of q(t) curve at t = 2 s equals 16 Amperes.'
    }
  },
  {
    id: 'math-p4',
    subject: 'MATH',
    topicId: 'math-4',
    topicName: 'Integral Calculus (RMS)',
    dayNumber: 1,
    questionNumber: 4,
    question: 'Determine the Root-Mean-Square (RMS) value of a pure sinusoidal alternating voltage v(t) = 325 sin(377t) Volts.',
    options: ['230 V', '325 V', '162.5 V', '207 V'],
    correctAnswer: 0, // 230 V
    keyFormulaUsed: 'V_rms = V_peak / √2 ≈ 0.7071 · V_peak',
    difficulty: 'Foundation',
    eli5Takeaway: 'A household wall outlet in the Philippines says 230V, but the voltage actually peaks at 325V! 230V is the RMS (effective heating) value.',
    stepByStepSolution: [
      {
        step: 1,
        title: 'Extract peak amplitude V_m',
        explanation: 'From v(t) = V_m sin(ωt), V_m = 325 V.',
        calculation: 'V_peak = 325 V'
      },
      {
        step: 2,
        title: 'Apply the sinusoidal RMS formula',
        explanation: 'For any sine wave, the integral of squared sine over a period yields V_rms = V_peak / √2.',
        calculation: 'V_rms = 325 / √2 = 325 / 1.4142 ≈ 229.81 V ≈ 230 V'
      }
    ],
    visualDiagram: {
      type: 'rms_sine_wave',
      caption: 'RMS effective voltage V_rms = 230V derived from peak 325V (V_rms = V_peak / √2).'
    }
  },
  {
    id: 'math-p5',
    subject: 'MATH',
    topicId: 'math-5',
    topicName: 'Differential Equations & RC Transients',
    dayNumber: 1,
    questionNumber: 5,
    question: 'A 50 μF capacitor is connected in series with a 40 kΩ resistor to a 100 V DC source. Calculate the time constant τ of the circuit.',
    options: ['1.0 s', '2.0 s', '0.5 s', '4.0 s'],
    correctAnswer: 1, // 2.0 s
    keyFormulaUsed: 'Time constant: τ = R · C',
    difficulty: 'Foundation',
    eli5Takeaway: 'The time constant τ tells you how sluggish the circuit is. After 2 seconds, the capacitor will be 63.2% charged (about 63.2 Volts).',
    stepByStepSolution: [
      {
        step: 1,
        title: 'Convert units to base SI units',
        explanation: 'R = 40 kΩ = 40 × 10³ Ω, C = 50 μF = 50 × 10⁻⁶ F.',
        calculation: 'R = 40,000 Ω\nC = 0.000050 F'
      },
      {
        step: 2,
        title: 'Multiply R and C',
        explanation: 'τ = R × C.',
        calculation: 'τ = (40 × 10³ Ω) × (50 × 10⁻⁶ F) = 2000 × 10⁻³ = 2.0 seconds'
      }
    ],
    visualDiagram: {
      type: 'rc_transient_curve',
      caption: 'RC transient exponential voltage rise reaching 63.2% at t = τ = 2.0 seconds.'
    }
  },
  {
    id: 'math-p6',
    subject: 'MATH',
    topicId: 'math-6',
    topicName: 'Engineering Economy',
    dayNumber: 1,
    questionNumber: 6,
    question: 'A standby diesel generator costs Php 500,000 with a salvage value of Php 50,000 at the end of its 10-year useful life. What is the annual depreciation using the Straight-Line Method?',
    options: ['Php 40,000', 'Php 45,000', 'Php 50,000', 'Php 55,000'],
    correctAnswer: 1, // Php 45,000
    keyFormulaUsed: 'Straight Line Depreciation: d = (First Cost - Salvage Value) / n',
    difficulty: 'Foundation',
    eli5Takeaway: 'The generator loses 450,000 pesos of value evenly over 10 years, which is 45,000 pesos lost each year.',
    stepByStepSolution: [
      {
        step: 1,
        title: 'Find total depreciable amount',
        explanation: 'Subtract salvage value from the initial purchase cost.',
        calculation: 'Depreciable Amount = FC - SV = 500,000 - 50,000 = Php 450,000'
      },
      {
        step: 2,
        title: 'Divide by useful life n = 10 years',
        explanation: 'Annual depreciation d = (FC - SV) / n.',
        calculation: 'd = 450,000 / 10 = Php 45,000 per year'
      }
    ],
    visualDiagram: {
      type: 'depreciation_timeline',
      caption: 'Uniform straight-line depreciation timeline: Initial ₱500,000 to Salvage ₱50,000 over 10 years.'
    }
  },

  // ===================== ESAS (Items 36 to 41: Engineering Economics) =====================
  // Main Reference: Drive Folder "ESAS - Engineering Economics"
  {
    id: 'esas-p1',
    subject: 'ESAS',
    topicId: 'esas-1',
    topicName: 'Compound Interest & Doubling Time',
    dayNumber: 1,
    questionNumber: 36,
    question: 'An electrical contracting firm deposits ₱150,000 in a commercial bank paying 9% compounded quarterly. How many years will it take for the account to double to ₱300,000?',
    options: ['5.25 years', '7.79 years', '8.04 years', '9.12 years'],
    correctAnswer: 1, // 7.79 years
    keyFormulaUsed: 'F = P · (1 + i)^n  =>  n = ln(F / P) / ln(1 + i)',
    difficulty: 'Foundation',
    eli5Takeaway: 'Money grows exponentially with compound interest. To find how long it takes to double, solve for the unknown exponent using the Canon F-789SGA SOLVE feature.',
    stepByStepSolution: [
      {
        step: 1,
        title: 'Identify given parameters',
        explanation: 'Principal P = ₱150,000, Future amount F = ₱300,000, nominal rate r = 9% = 0.09, compounding frequency m = 4 (quarterly). Periodic interest i = 0.09 / 4 = 0.0225.',
        calculation: 'P = 150,000\nF = 300,000\ni = 0.09 / 4 = 0.0225\nn = 4 · t'
      },
      {
        step: 2,
        title: 'Set up the compound interest equation',
        explanation: 'F = P(1 + i)^n. Substitute the values: 300,000 = 150,000 · (1 + 0.0225)^(4t), which simplifies to 2 = (1.0225)^(4t).',
        calculation: '2 = (1.0225)^(4t)'
      },
      {
        step: 3,
        title: 'Solve for time t in years',
        explanation: 'Take the natural logarithm of both sides: ln(2) = 4t · ln(1.0225) => t = ln(2) / [4 · ln(1.0225)].',
        calculation: 't = 0.693147 / [4 × 0.022251] = 0.693147 / 0.089003 = 7.788 years ≈ 7.79 years'
      }
    ],
    visualDiagram: {
      type: 'depreciation_timeline',
      caption: 'Compound interest growth curve: ₱150,000 doubling to ₱300,000 in 7.79 years at 9% compounded quarterly.'
    },
    canonCalTech: {
      calculator: 'Canon F-789SGA',
      mode: 'COMP (Mode 1)',
      keystrokes: [
        'Method 1 (Direct Formula):',
        '[ln] 2 [)] ÷ ( 4 × [ln] ( 1 + 0.09 ÷ 4 ) [)] [=]',
        'Display: 7.78772',
        'Method 2 (Using SOLVE):',
        '2 [ALPHA] [=] ( 1 + 0.09 ÷ 4 ) [xʸ] ( 4 × [ALPHA] [X] )',
        '[SHIFT] [SOLVE]',
        '8 [=] (Initial guess)',
        'Display: X = 7.7877'
      ],
      resultDisplay: '7.79 years',
      proTip: 'On the Canon F-789SGA, [ALPHA] [=] types the red equal sign. Always provide an initial guess (e.g. 8) for the fastest solve convergence!'
    }
  },
  {
    id: 'esas-p2',
    subject: 'ESAS',
    topicId: 'esas-1',
    topicName: 'Effective Annual Interest Rate (ER)',
    dayNumber: 1,
    questionNumber: 37,
    question: 'A commercial bank offers an industrial machinery loan at a nominal interest rate of 12% compounded monthly. What is the true equivalent effective annual interest rate (ER)?',
    options: ['12.00%', '12.36%', '12.68%', '13.14%'],
    correctAnswer: 2, // 12.68%
    keyFormulaUsed: 'ER = (1 + r / m)^m - 1',
    difficulty: 'Foundation',
    eli5Takeaway: 'Because monthly interest is added 12 times a year, you pay interest on interest. The actual annual rate you experience is 12.68%, not 12%.',
    stepByStepSolution: [
      {
        step: 1,
        title: 'Identify nominal rate and frequency',
        explanation: 'Nominal annual rate r = 12% = 0.12. Monthly compounding means m = 12 periods per year.',
        calculation: 'r = 0.12,  m = 12'
      },
      {
        step: 2,
        title: 'Apply the Effective Rate formula',
        explanation: 'ER = (1 + r/m)^m - 1 = (1 + 0.12/12)^12 - 1 = (1.01)^12 - 1.',
        calculation: 'ER = (1.01)^12 - 1 = 1.126825 - 1 = 0.126825'
      },
      {
        step: 3,
        title: 'Convert to percentage',
        explanation: 'Multiply by 100% to express as an annual percentage.',
        calculation: 'ER = 0.126825 × 100% = 12.68%'
      }
    ],
    visualDiagram: {
      type: 'depreciation_timeline',
      caption: 'Nominal 12% compounded monthly yields an effective annual rate of 12.68%.'
    },
    canonCalTech: {
      calculator: 'Canon F-789SGA',
      mode: 'COMP (Mode 1)',
      keystrokes: [
        '( 1 + 0.12 ÷ 12 ) [xʸ] 12 - 1 [=]',
        '[×] 100 [=]',
        'Display: 12.682503'
      ],
      resultDisplay: '12.68%',
      proTip: 'For continuous compounding at nominal rate r on Canon F-789SGA: Press [SHIFT] [ln] (e^x), enter 0.12, subtract 1, and multiply by 100.'
    }
  },
  {
    id: 'esas-p3',
    subject: 'ESAS',
    topicId: 'esas-2',
    topicName: 'Ordinary Annuity Present Worth & Cash Price',
    dayNumber: 1,
    questionNumber: 38,
    question: 'A power distribution cooperative purchased an automated sub-station monitoring system with a cash down payment of ₱200,000 and uniform quarterly installments of ₱25,000 for 4 years at 8% compounded quarterly. What was the equivalent cash price of the system?',
    options: ['₱512,480', '₱539,635', '₱567,110', '₱600,000'],
    correctAnswer: 1, // ₱539,635
    keyFormulaUsed: 'Cash Price = Down Payment + A · [ (1 - (1+i)^(-n)) / i ]',
    difficulty: 'Moderate',
    eli5Takeaway: 'The total cash price equals the initial cash handed over PLUS the present discounted lump-sum value of all 16 future quarterly payments.',
    stepByStepSolution: [
      {
        step: 1,
        title: 'Determine periodic rate and number of periods',
        explanation: 'Quarterly interest i = 8% / 4 = 2% = 0.02. Total quarterly payments n = 4 years × 4 = 16 payments.',
        calculation: 'i = 0.08 / 4 = 0.02\nn = 4 × 4 = 16 payments\nA = ₱25,000'
      },
      {
        step: 2,
        title: 'Calculate Present Worth of the Annuity (P_A)',
        explanation: 'P_A = A · [(1 - (1 + i)^(-n)) / i] = 25,000 · [(1 - (1.02)^(-16)) / 0.02].',
        calculation: 'P_A = 25,000 × [ (1 - 0.728446) / 0.02 ] = 25,000 × 13.5777 = ₱339,635'
      },
      {
        step: 3,
        title: 'Add the initial down payment to get total cash price',
        explanation: 'Total Cash Price = Down Payment + P_A = 200,000 + 339,635 = ₱539,635.',
        calculation: 'Total Cash Price = 200,000 + 339,635 = ₱539,635'
      }
    ],
    visualDiagram: {
      type: 'depreciation_timeline',
      caption: 'Cash price timeline: Down payment ₱200,000 + 16 quarterly payments of ₱25,000 discounted at 2% per quarter.'
    },
    canonCalTech: {
      calculator: 'Canon F-789SGA',
      mode: 'COMP (Mode 1)',
      keystrokes: [
        '200000 + 25000 × ( 1 - ( 1 + 0.02 ) [xʸ] -16 ) ÷ 0.02 [=]',
        'Display: 539634.93'
      ],
      resultDisplay: '₱539,635',
      proTip: 'Store the interest rate 0.02 into memory A: Type 0.02 [SHIFT] [STO] [A]. Then use [ALPHA] [A] in the formula for zero typos!'
    }
  },
  {
    id: 'esas-p4',
    subject: 'ESAS',
    topicId: 'esas-3',
    topicName: 'Sum-of-the-Years-Digits (SOYD) Depreciation',
    dayNumber: 1,
    questionNumber: 39,
    question: 'A 3-phase, 500 kVA pad-mounted distribution transformer has a first cost of ₱500,000 and an estimated scrap value of ₱50,000 at the end of its 8-year useful life. Using the Sum-of-the-Years-Digits (SOYD) method, what is the depreciation charge for the 3rd year?',
    options: ['₱56,250', '₱75,000', '₱84,375', '₱90,000'],
    correctAnswer: 1, // ₱75,000
    keyFormulaUsed: 'd_m = (FC - SV) · [ (n - m + 1) / Σ ],  where Σ = n(n + 1) / 2',
    difficulty: 'Moderate',
    eli5Takeaway: 'In SOYD, the asset loses more value in earlier years. In year 3 of an 8-year life, the numerator is 8 - 3 + 1 = 6 out of total 36 digits.',
    stepByStepSolution: [
      {
        step: 1,
        title: 'Calculate the total depreciable base',
        explanation: 'Depreciable amount = First Cost (FC) - Salvage Value (SV).',
        calculation: 'Depreciable Base = 500,000 - 50,000 = ₱450,000'
      },
      {
        step: 2,
        title: 'Compute the sum of the years digits (Σ)',
        explanation: 'For n = 8 years, Σ = 1 + 2 + 3 + ... + 8 = n(n + 1) / 2.',
        calculation: 'Σ = 8 × (8 + 1) / 2 = 8 × 9 / 2 = 36'
      },
      {
        step: 3,
        title: 'Find the reverse digit for year m = 3',
        explanation: 'Reverse digit = n - m + 1 = 8 - 3 + 1 = 6.',
        calculation: 'Digit for Year 3 = 6'
      },
      {
        step: 4,
        title: 'Calculate Year 3 depreciation d_3',
        explanation: 'd_3 = 450,000 × (6 / 36) = 450,000 × (1 / 6) = ₱75,000.',
        calculation: 'd_3 = 450,000 × (6 / 36) = ₱75,000'
      }
    ],
    visualDiagram: {
      type: 'depreciation_timeline',
      caption: 'SOYD Depreciation schedule: ₱450,000 total depreciation with Year 3 fraction = 6/36 = ₱75,000.'
    },
    canonCalTech: {
      calculator: 'Canon F-789SGA',
      mode: 'COMP (Mode 1)',
      keystrokes: [
        '( 500000 - 50000 ) × ( 8 - 3 + 1 ) ÷ ( 8 × 9 ÷ 2 ) [=]',
        'Display: 75000'
      ],
      resultDisplay: '₱75,000',
      proTip: 'To find Σ on Canon F-789SGA for any large n: Press [SHIFT] [log] (Σ), type [ALPHA] [X], set lower limit 1 and upper limit 8, press [=]. Output is 36.'
    }
  },
  {
    id: 'esas-p5',
    subject: 'ESAS',
    topicId: 'esas-4',
    topicName: 'Capitalized Cost of Infrastructure',
    dayNumber: 1,
    questionNumber: 40,
    question: 'A run-of-river hydroelectric diversion canal costs ₱15,000,000 to construct. Annual dredging and gate maintenance costs ₱400,000. Every 12 years, the intake weir and trash racks require major reconstruction costing ₱2,500,000. If the effective interest rate is 8% per annum, what is the capitalized cost of the project?',
    options: ['₱18,500,000', '₱21,647,000', '₱23,450,000', '₱25,120,000'],
    correctAnswer: 1, // ₱21,647,000
    keyFormulaUsed: 'CC = FC + (OM / i) + [ RC / ((1 + i)^k - 1) ]',
    difficulty: 'Board Exam Level',
    eli5Takeaway: 'Capitalized cost is the total money you need right now to build the dam, maintain it forever, and rebuild the gates every 12 years indefinitely.',
    stepByStepSolution: [
      {
        step: 1,
        title: 'Break down the three components of Capitalized Cost',
        explanation: 'Capitalized cost consists of: (1) First Cost FC, (2) Present worth of perpetual annual maintenance (OM / i), and (3) Present worth of recurring replacement every k years [RC / ((1+i)^k - 1)].',
        calculation: 'FC = ₱15,000,000\nOM = ₱400,000 / year\nRC = ₱2,500,000 every k = 12 years\ni = 0.08'
      },
      {
        step: 2,
        title: 'Calculate perpetual annual maintenance present worth',
        explanation: 'PW_OM = OM / i = 400,000 / 0.08 = ₱5,000,000.',
        calculation: 'PW_OM = 400,000 / 0.08 = ₱5,000,000'
      },
      {
        step: 3,
        title: 'Calculate periodic replacement present worth',
        explanation: 'PW_RC = RC / [(1 + i)^k - 1] = 2,500,000 / [(1.08)^12 - 1] = 2,500,000 / [2.51817 - 1] = 2,500,000 / 1.51817.',
        calculation: 'PW_RC = 2,500,000 / 1.51817 = ₱1,646,750'
      },
      {
        step: 4,
        title: 'Sum all three components',
        explanation: 'Total CC = 15,000,000 + 5,000,000 + 1,646,750 = ₱21,646,750 ≈ ₱21,647,000.',
        calculation: 'Total CC = ₱21,646,750 ≈ ₱21,647,000'
      }
    ],
    visualDiagram: {
      type: 'depreciation_timeline',
      caption: 'Capitalized cost components: ₱15M initial + ₱5M perpetual maintenance + ₱1.647M perpetual replacement fund.'
    },
    canonCalTech: {
      calculator: 'Canon F-789SGA',
      mode: 'COMP (Mode 1)',
      keystrokes: [
        '15000000 + 400000 ÷ 0.08 + 2500000 ÷ ( 1.08 [xʸ] 12 - 1 ) [=]',
        'Display: 21646749.8'
      ],
      resultDisplay: '₱21,647,000',
      proTip: 'On Canon F-789SGA, use the fraction key [■/□] to enter the compound denominator cleanly without misplaced parentheses.'
    }
  },
  {
    id: 'esas-p6',
    subject: 'ESAS',
    topicId: 'esas-6',
    topicName: 'Break-Even Analysis & Contribution Margin',
    dayNumber: 1,
    questionNumber: 41,
    question: 'An electrical manufacturing company produces commercial LED floodlights. Annual fixed overhead cost is ₱1,800,000. The variable manufacturing cost per floodlight is ₱320, and each unit sells for ₱560. What is the annual break-even sales volume in units?',
    options: ['5,625 units', '7,500 units', '8,150 units', '9,000 units'],
    correctAnswer: 1, // 7,500 units
    keyFormulaUsed: 'Q_BEP = Fixed Costs / (Unit Selling Price - Unit Variable Cost)',
    difficulty: 'Foundation',
    eli5Takeaway: 'Each floodlight sold gives a ₱240 profit margin (₱560 - ₱320). To cover the ₱1,800,000 rent and overhead, you must sell exactly 7,500 units.',
    stepByStepSolution: [
      {
        step: 1,
        title: 'Identify cost parameters',
        explanation: 'Fixed Cost FC = ₱1,800,000, Selling price per unit p = ₱560, Variable cost per unit v = ₱320.',
        calculation: 'FC = ₱1,800,000\np = ₱560\nv = ₱320'
      },
      {
        step: 2,
        title: 'Calculate Contribution Margin per unit',
        explanation: 'Contribution margin = p - v = 560 - 320 = ₱240 per unit.',
        calculation: 'Margin = 560 - 320 = ₱240'
      },
      {
        step: 3,
        title: 'Compute break-even volume Q_BEP',
        explanation: 'Q_BEP = FC / (p - v) = 1,800,000 / 240 = 7,500 units.',
        calculation: 'Q_BEP = 1,800,000 / 240 = 7,500 units'
      }
    ],
    visualDiagram: {
      type: 'depreciation_timeline',
      caption: 'Break-even graph: Total Revenue line intersects Total Cost line at Q = 7,500 units.'
    },
    canonCalTech: {
      calculator: 'Canon F-789SGA',
      mode: 'COMP (Mode 1)',
      keystrokes: [
        '1800000 ÷ ( 560 - 320 ) [=]',
        'Display: 7500'
      ],
      resultDisplay: '7,500 units',
      proTip: 'To find break-even sales revenue in Pesos directly: Multiply Q by selling price: [Ans] × 560 [=] -> ₱4,200,000.'
    }
  },

  // ===================== EE PROFESSIONAL (Items 66 to 100) =====================
  {
    id: 'ee-p1',
    subject: 'EE',
    topicId: 'ee-1',
    topicName: 'DC Circuits & Maximum Power Transfer',
    dayNumber: 1,
    questionNumber: 66,
    question: 'A DC source with an open-circuit voltage Vth = 48 V and internal Thevenin resistance Rth = 6 Ω delivers power to a variable load resistor RL. What is the maximum power that can be transferred to the load?',
    options: ['48 W', '96 W', '192 W', '384 W'],
    correctAnswer: 1, // 96 W
    keyFormulaUsed: 'P_max = (V_th)² / (4 · R_th)',
    difficulty: 'Moderate',
    eli5Takeaway: 'You get maximum power delivered into a load when its resistance matches the source resistance (RL = 6 Ω). Half the voltage drops internally, half drops on the load.',
    stepByStepSolution: [
      {
        step: 1,
        title: 'Apply the Maximum Power Transfer condition',
        explanation: 'Maximum power transfer occurs when R_L = R_th = 6 Ω.',
        calculation: 'R_L = 6 Ω'
      },
      {
        step: 2,
        title: 'Calculate load voltage and current',
        explanation: 'Total circuit resistance is R_th + R_L = 6 + 6 = 12 Ω. Current I = 48 / 12 = 4 A.',
        calculation: 'I = 48 V / 12 Ω = 4 A\nV_L = 4 A × 6 Ω = 24 V'
      },
      {
        step: 3,
        title: 'Calculate maximum power',
        explanation: 'P_max = I² · R_L = 4² × 6 = 16 × 6 = 96 Watts. Or directly: V_th² / (4 R_th) = 48² / 24 = 2304 / 24 = 96 W.',
        calculation: 'P_max = 96 Watts'
      }
    ],
    visualDiagram: {
      type: 'thevenin_circuit',
      caption: 'Thevenin generator Vth = 48V, Rth = 6Ω connected to load RL = 6Ω.'
    }
  },
  {
    id: 'ee-p2',
    subject: 'EE',
    topicId: 'ee-2',
    topicName: 'Single-Phase AC Power Triangle',
    dayNumber: 1,
    questionNumber: 67,
    question: 'A single-phase industrial load absorbs 80 kW of active power at a lagging power factor of 0.80 from a 230 V, 60 Hz line. What is the reactive power Q absorbed by this load?',
    options: ['40 kVAR', '60 kVAR', '80 kVAR', '100 kVAR'],
    correctAnswer: 1, // 60 kVAR
    keyFormulaUsed: 'S = P / pf,  Q = √(S² - P²) = P · tan(θ)',
    difficulty: 'Moderate',
    eli5Takeaway: 'The famous 3-4-5 right triangle in electrical engineering: If Active Power P is 80 kW (4 units) and power factor is 0.8 (cos θ = 0.8), Apparent Power S is 100 kVA (5 units), and Reactive Power Q is 60 kVAR (3 units)!',
    stepByStepSolution: [
      {
        step: 1,
        title: 'Find Apparent Power S',
        explanation: 'S = P / pf.',
        calculation: 'S = 80 kW / 0.80 = 100 kVA'
      },
      {
        step: 2,
        title: 'Calculate Reactive Power Q using the Power Triangle',
        explanation: 'Apply Pythagorean theorem: S² = P² + Q², so Q = √(S² - P²).',
        calculation: 'Q = √(100² - 80²) = √(10,000 - 6,400) = √3,600 = 60 kVAR'
      }
    ],
    visualDiagram: {
      type: 'power_triangle',
      caption: 'Power triangle: Horizontal P = 80 kW, Vertical Q = 60 kVAR, Hypotenuse S = 100 kVA.'
    }
  },
  {
    id: 'ee-p3',
    subject: 'EE',
    topicId: 'ee-3',
    topicName: 'Three-Phase Systems (Wye Connection)',
    dayNumber: 1,
    questionNumber: 68,
    question: 'A balanced 3-phase, 4-wire Wye system delivers power to a load. If the measured line-to-neutral (phase) voltage is 230 V, what is the line-to-line voltage?',
    options: ['230 V', '398 V', '460 V', '480 V'],
    correctAnswer: 1, // 398 V (or 400V)
    keyFormulaUsed: 'V_line = √3 · V_phase in a Wye (Star) system',
    difficulty: 'Foundation',
    eli5Takeaway: 'In a Wye system, the line-to-line voltage spans across two phase windings separated by 120 degrees, making it √3 (1.732) times bigger than line-to-neutral.',
    stepByStepSolution: [
      {
        step: 1,
        title: 'Apply Wye relation for line and phase voltage',
        explanation: 'In balanced Wye (Star): V_line = √3 × V_phase.',
        calculation: 'V_line = √3 × 230 V = 1.73205 × 230 V ≈ 398.37 V ≈ 398 V'
      }
    ],
    visualDiagram: {
      type: 'three_phase_wye',
      caption: 'Two 230V phasors 120° apart subtract to form a line-to-line vector of 398V.'
    }
  },
  {
    id: 'ee-p4',
    subject: 'EE',
    topicId: 'ee-4',
    topicName: 'Transformers (Turns Ratio & Current)',
    dayNumber: 1,
    questionNumber: 69,
    question: 'A 25 kVA single-phase step-down transformer has a primary voltage of 2400 V and secondary voltage of 240 V. Calculate the full-load secondary current.',
    options: ['10.42 A', '52.1 A', '104.17 A', '208.3 A'],
    correctAnswer: 2, // 104.17 A
    keyFormulaUsed: 'I_secondary = S_rated / V_secondary',
    difficulty: 'Foundation',
    eli5Takeaway: 'Rated kVA is the total apparent power the transformer can handle without overheating. Divide kVA by volts to find current.',
    stepByStepSolution: [
      {
        step: 1,
        title: 'Formula for secondary current',
        explanation: 'I₂ = S / V₂.',
        calculation: 'S = 25,000 VA\nV₂ = 240 V'
      },
      {
        step: 2,
        title: 'Compute I₂',
        explanation: 'I₂ = 25,000 / 240.',
        calculation: 'I₂ = 104.167 A ≈ 104.17 A'
      }
    ],
    visualDiagram: {
      type: 'transformer_schematic',
      caption: '2400V to 240V step-down transformer secondary current calculation.'
    }
  },
  {
    id: 'ee-p5',
    subject: 'EE',
    topicId: 'ee-5',
    topicName: 'AC Induction Motors (Speed & Slip)',
    dayNumber: 1,
    questionNumber: 70,
    question: 'A 4-pole, 60 Hz 3-phase induction motor runs at a full-load rotor speed of 1728 RPM. What is the percent slip of the motor?',
    options: ['2.5%', '4.0%', '5.0%', '6.0%'],
    correctAnswer: 1, // 4.0%
    keyFormulaUsed: 'N_s = 120f / P,  s = (N_s - N_r) / N_s',
    difficulty: 'Foundation',
    eli5Takeaway: 'The spinning stator magnetic field runs at exactly 1800 RPM. The rotor lags behind at 1728 RPM. The 72 RPM difference is a 4% slip.',
    stepByStepSolution: [
      {
        step: 1,
        title: 'Calculate synchronous speed N_s',
        explanation: 'N_s = (120 × f) / P.',
        calculation: 'N_s = (120 × 60) / 4 = 7200 / 4 = 1800 RPM'
      },
      {
        step: 2,
        title: 'Calculate rotor slip s',
        explanation: 's = (N_s - N_r) / N_s.',
        calculation: 's = (1800 - 1728) / 1800 = 72 / 1800 = 0.04 = 4.0%'
      }
    ],
    visualDiagram: {
      type: 'motor_torque_speed',
      caption: 'Torque-speed relation: Ns = 1800 RPM, Nr = 1728 RPM (Slip = 4%).'
    }
  },
  {
    id: 'ee-p6',
    subject: 'EE',
    topicId: 'ee-6',
    topicName: 'Power Systems & Fault Analysis',
    dayNumber: 1,
    questionNumber: 71,
    question: 'In symmetrical component analysis of power system faults, which sequence component current is present ONLY when there is a ground connection involved in the fault?',
    options: ['Positive sequence current (I₁)', 'Negative sequence current (I₂)', 'Zero sequence current (I₀)', 'Synchronous sequence current'],
    correctAnswer: 2, // Zero sequence
    keyFormulaUsed: 'Zero sequence current requires neutral/ground return path: I_n = 3 · I₀',
    difficulty: 'Moderate',
    eli5Takeaway: 'Zero sequence currents are identical in all 3 phases (they point the exact same direction at the same time). For them to flow anywhere, there MUST be a ground or neutral wire for them to return through!',
    stepByStepSolution: [
      {
        step: 1,
        title: 'Understand sequence components',
        explanation: 'Positive sequence has phase sequence ABC; negative sequence has ACB. Zero sequence currents in all 3 phases are in phase with each other (Ia0 = Ib0 = Ic0).',
        calculation: 'I_neutral = Ia + Ib + Ic = 3 · Ia0'
      },
      {
        step: 2,
        title: 'Identify ground requirement',
        explanation: 'Because zero sequence currents sum up to 3·Ia0 at the neutral node, they cannot circulate unless there is a physical path to ground. Hence, line-to-line faults have zero sequence = 0.',
        calculation: 'Zero sequence flows ONLY in ground faults (SLG, DLG).'
      }
    ],
    visualDiagram: {
      type: 'three_phase_wye',
      caption: 'Zero sequence currents require neutral/ground return path.'
    }
  }
];

// Helper to generate a full 100-problem set for any given day
// 35 MATH, 30 ESAS, 35 EE matching the PRC Board of Electrical Engineering ratio!
export const generateDaily100Set = (day: number): BoardProblem[] => {
  const problems: BoardProblem[] = [];

  // Seed variation generator based on day
  const randomBetween = (min: number, max: number, seed: number) => {
    const x = Math.sin(seed * 9999 + day * 1337) * 10000;
    return min + Math.floor((x - Math.floor(x)) * (max - min + 1));
  };

  // 1. Generate 35 Mathematics Problems (Q1 to Q35)
  for (let q = 1; q <= 35; q++) {
    // If we have a matching core question, adapt it; otherwise generate procedural high-yield board problem
    const coreMatch = CORE_BOARD_PROBLEMS.find(p => p.subject === 'MATH' && p.questionNumber === q);
    if (coreMatch && day === 1) {
      problems.push({ ...coreMatch, dayNumber: day });
    } else {
      // Procedurally generate authentic board exam math problems
      const typeIndex = (q + day) % 7;
      if (typeIndex === 0) {
        // Quadratic/Algebra
        const a = 2 + (q % 3);
        const r1 = 3 + (day % 4);
        const r2 = 5 + (q % 3);
        const b = -a * (r1 + r2);
        const c = a * r1 * r2;
        problems.push({
          id: `math-d${day}-q${q}`,
          subject: 'MATH',
          topicId: 'math-1',
          topicName: 'Algebra & Roots',
          dayNumber: day,
          questionNumber: q,
          question: `Find the sum of the roots of the quadratic equation ${a}x² ${b >= 0 ? '+ ' + b : '- ' + Math.abs(b)}x + ${c} = 0.`,
          options: [`${r1 + r2}`, `${r1 * r2}`, `${-b}`, `${(r1 + r2) / 2}`],
          correctAnswer: 0,
          keyFormulaUsed: 'Sum of roots: x₁ + x₂ = -b / a',
          difficulty: 'Foundation',
          eli5Takeaway: 'You do not even need to solve the full equation! In ax² + bx + c = 0, the sum of both answers is always equal to -b divided by a.',
          visualDiagram: {
            type: 'calculus_tangent',
            caption: `Parabola quadratic curve for ${a}x² + ${b}x + ${c} = 0.`
          },
          stepByStepSolution: [
            {
              step: 1,
              title: 'Identify coefficients',
              explanation: `Here, a = ${a}, b = ${b}, and c = ${c}.`,
              calculation: `a = ${a}, b = ${b}`
            },
            {
              step: 2,
              title: 'Apply Vieta\'s formulas',
              explanation: 'The sum of the roots of a quadratic equation ax² + bx + c = 0 is always -b/a.',
              calculation: `Sum = -(${b}) / ${a} = ${-b / a} = ${r1 + r2}`
            }
          ]
        });
      } else if (typeIndex === 1) {
        // Trigonometry / AC Impedance
        const r = 3 * (1 + (q % 4));
        const xl = 4 * (1 + (q % 4));
        const z = Math.round(Math.sqrt(r * r + xl * xl));
        const angle = (Math.atan2(xl, r) * 180 / Math.PI).toFixed(1);
        problems.push({
          id: `math-d${day}-q${q}`,
          subject: 'MATH',
          topicId: 'math-2',
          topicName: 'Trigonometry & Complex Numbers',
          dayNumber: day,
          questionNumber: q,
          question: `An AC branch has a resistance R = ${r} Ω and inductive reactance XL = ${xl} Ω. What is the total impedance magnitude |Z|?`,
          options: [`${z} Ω`, `${r + xl} Ω`, `${z + 2} Ω`, `${Math.round(z * 0.8)} Ω`],
          correctAnswer: 0,
          keyFormulaUsed: '|Z| = √(R² + XL²)',
          difficulty: 'Foundation',
          eli5Takeaway: 'Reactance and resistance are at right angles (90 degrees). Use Pythagoras: A² + B² = C².',
          visualDiagram: {
            type: 'impedance_triangle',
            caption: `Impedance triangle: R = ${r}Ω, XL = ${xl}Ω, |Z| = ${z}Ω.`
          },
          stepByStepSolution: [
            {
              step: 1,
              title: 'Form impedance triangle',
              explanation: `R = ${r} Ω along real axis, XL = ${xl} Ω along imaginary +j axis.`,
              calculation: `|Z| = √(${r}² + ${xl}²) = √(${r*r} + ${xl*xl}) = √${r*r + xl*xl} = ${z} Ω`
            }
          ]
        });
      } else if (typeIndex === 2) {
        // Differential Calculus / Rate of Change
        const coeff = 2 + (q % 3);
        const tVal = 3 + (day % 3);
        const current = 3 * coeff * tVal * tVal;
        problems.push({
          id: `math-d${day}-q${q}`,
          subject: 'MATH',
          topicId: 'math-3',
          topicName: 'Differential Calculus',
          dayNumber: day,
          questionNumber: q,
          question: `The electric charge passing through a circuit node is given by q(t) = ${coeff}t³ Coulombs. Determine the instantaneous current i(t) at time t = ${tVal} seconds.`,
          options: [`${current} A`, `${current - 12} A`, `${current + 18} A`, `${coeff * tVal} A`],
          correctAnswer: 0,
          keyFormulaUsed: 'i(t) = dq/dt = d/dt(a · t³)',
          difficulty: 'Moderate',
          eli5Takeaway: 'Derivative tells you instantaneous speed of coulombs. Take the derivative and plug in time t.',
          visualDiagram: {
            type: 'calculus_tangent',
            caption: `Derivative tangent slope at t = ${tVal}s gives ${current}A.`
          },
          stepByStepSolution: [
            {
              step: 1,
              title: 'Differentiate q(t) with respect to t',
              explanation: `Apply power rule: d/dt(${coeff}t³) = 3 × ${coeff} × t² = ${3 * coeff}t².`,
              calculation: `i(t) = ${3 * coeff}t²`
            },
            {
              step: 2,
              title: `Evaluate at t = ${tVal} s`,
              explanation: `Substitute t = ${tVal} into i(t).`,
              calculation: `i(${tVal}) = ${3 * coeff} × (${tVal})² = ${3 * coeff} × ${tVal * tVal} = ${current} Amperes`
            }
          ]
        });
      } else if (typeIndex === 3) {
        // Engineering Economy
        const p = 100000;
        const iRate = 6;
        const nYears = 3;
        const f = Math.round(p * Math.pow(1 + iRate / 100, nYears));
        problems.push({
          id: `math-d${day}-q${q}`,
          subject: 'MATH',
          topicId: 'math-6',
          topicName: 'Engineering Economy',
          dayNumber: day,
          questionNumber: q,
          question: `A substation transformer fund invests Php ${p.toLocaleString()} at an annual compound interest rate of ${iRate}%. What is the accumulated future worth after ${nYears} years?`,
          options: [`Php ${f.toLocaleString()}`, `Php ${(p + p * iRate * nYears / 100).toLocaleString()}`, `Php ${(f + 5000).toLocaleString()}`, `Php ${(f - 4000).toLocaleString()}`],
          correctAnswer: 0,
          keyFormulaUsed: 'F = P · (1 + i)^n',
          difficulty: 'Foundation',
          eli5Takeaway: 'Compound interest earns interest on top of past interest every year, multiplying by (1 + i) each year.',
          visualDiagram: {
            type: 'power_triangle',
            caption: `Compounded interest growth curve over ${nYears} years at ${iRate}%.`
          },
          stepByStepSolution: [
            {
              step: 1,
              title: 'Use Compound Interest Formula',
              explanation: 'F = P(1 + i)^n where P = 100,000, i = 0.06, n = 3.',
              calculation: `F = 100,000 × (1.06)³ = 100,000 × 1.191016 = Php ${f.toLocaleString()}`
            }
          ]
        });
      } else {
        // Integral / DE / Vector Math
        const tau = (1 + (q % 4));
        problems.push({
          id: `math-d${day}-q${q}`,
          subject: 'MATH',
          topicId: 'math-5',
          topicName: 'Differential Equations & RC Transients',
          dayNumber: day,
          questionNumber: q,
          question: `In an RC series circuit with a time constant τ = ${tau} seconds connected to a DC source V, what percentage of the final voltage does the capacitor reach after exactly 1 time constant?`,
          options: ['63.2%', '50.0%', '70.7%', '86.5%'],
          correctAnswer: 0,
          keyFormulaUsed: 'v(t) = V · (1 - e^(-t/τ))',
          difficulty: 'Foundation',
          eli5Takeaway: 'When t = τ, e^(-1) ≈ 0.368. So 1 - 0.368 = 0.632 or 63.2%. Memorize 63.2% for 1 time constant!',
          visualDiagram: {
            type: 'thevenin_circuit',
            caption: `RC exponential charging transient reaching 63.2% at t = ${tau}s.`
          },
          stepByStepSolution: [
            {
              step: 1,
              title: 'Evaluate transient voltage equation',
              explanation: 'v(τ) = V(1 - e^(-1)).',
              calculation: '1 - e^(-1) = 1 - 0.36788 = 0.63212 = 63.2%'
            }
          ]
        });
      }
    }
  }

  // 2. Generate 30 ESAS Problems (Q36 to Q65)
  for (let q = 36; q <= 65; q++) {
    const coreMatch = CORE_BOARD_PROBLEMS.find(p => p.subject === 'ESAS' && p.questionNumber === q);
    if (coreMatch && day === 1) {
      problems.push({ ...coreMatch, dayNumber: day });
    } else {
      const typeIndex = (q + day) % 6;
      if (typeIndex === 0) {
        // RA 7920 Law
        problems.push({
          id: `esas-d${day}-q${q}`,
          subject: 'ESAS',
          topicId: 'esas-5',
          topicName: 'Philippine Electrical Engineering Law (RA 7920)',
          dayNumber: day,
          questionNumber: q,
          question: 'Under RA 7920, what is the maximum field of practice limitation in terms of voltage and total connected load for a Registered Master Electrician (RME)?',
          options: ['Up to 600 Volts and 500 kVA', 'Up to 230 Volts and 100 kVA', 'Up to 1000 Volts and 750 kVA', 'No voltage or capacity limitation'],
          correctAnswer: 0,
          keyFormulaUsed: 'RA 7920 Section 31 (Field of Practice of RME)',
          difficulty: 'Board Exam Level',
          eli5Takeaway: 'RMEs can install and maintain systems up to 600 Volts and 500 kVA. Above that requires an REE or PEE.',
          visualDiagram: {
            type: 'pec_branch_circuit',
            caption: 'RA 7920 Section 31: Maximum ceiling for RME practice (600V, 500kVA).'
          },
          stepByStepSolution: [
            {
              step: 1,
              title: 'Reference RA 7920 Section 31',
              explanation: 'The law clearly limits RME practice to installation, wiring, testing and maintenance of systems not exceeding 600 Volts and 500 kVA.',
              calculation: 'Limit: 600 V and 500 kVA'
            }
          ]
        });
      } else if (typeIndex === 1) {
        // Philippine Electrical Code (PEC)
        problems.push({
          id: `esas-d${day}-q${q}`,
          subject: 'ESAS',
          topicId: 'esas-6',
          topicName: 'Philippine Electrical Code (PEC 1)',
          dayNumber: day,
          questionNumber: q,
          question: 'According to the Philippine Electrical Code (PEC), what is the minimum wire size allowable for copper conductors used in general building lighting branch circuits?',
          options: ['2.0 mm² (14 AWG)', '3.5 mm² (12 AWG)', '5.5 mm² (10 AWG)', '1.25 mm² (16 AWG)'],
          correctAnswer: 0,
          keyFormulaUsed: 'PEC Section 2.10.2.1: Minimum 2.0 mm² for 15A branch',
          difficulty: 'Foundation',
          eli5Takeaway: 'In the Philippines: 2.0 mm² (14 AWG) is standard for lighting circuits (15A breaker), while 3.5 mm² (12 AWG) is used for convenience outlets (20A breaker).',
          visualDiagram: {
            type: 'pec_branch_circuit',
            caption: 'PEC 1 minimum conductor sizes: 2.0 mm² lighting, 3.5 mm² convenience outlets.'
          },
          stepByStepSolution: [
            {
              step: 1,
              title: 'Check PEC Minimum Conductor Sizes',
              explanation: 'PEC states that branch circuit conductors shall not be smaller than 2.0 mm² copper (14 AWG) for 15-Ampere branch circuits.',
              calculation: 'Minimum size = 2.0 mm² (No. 14 AWG)'
            }
          ]
        });
      } else if (typeIndex === 2) {
        // Statics / Mechanics
        const f1 = 30 + (q % 20);
        const f2 = 40 + (q % 20);
        const rForce = Math.round(Math.sqrt(f1 * f1 + f2 * f2));
        problems.push({
          id: `esas-d${day}-q${q}`,
          subject: 'ESAS',
          topicId: 'esas-2',
          topicName: 'Engineering Mechanics (Statics)',
          dayNumber: day,
          questionNumber: q,
          question: `Two perpendicular forces of ${f1} N (horizontal) and ${f2} N (vertical) act simultaneously on a transmission pole cross-arm. What is the magnitude of the resultant force?`,
          options: [`${rForce} N`, `${f1 + f2} N`, `${rForce + 5} N`, `${Math.round(rForce * 0.75)} N`],
          correctAnswer: 0,
          keyFormulaUsed: 'R = √(Fx² + Fy²)',
          difficulty: 'Foundation',
          eli5Takeaway: 'Since the two forces are perpendicular (90 degrees apart), treat them like the sides of a right triangle to find the diagonal hypotenuse.',
          visualDiagram: {
            type: 'impedance_triangle',
            caption: `Perpendicular force vector addition: ${f1}N horizontal and ${f2}N vertical yields resultant ${rForce}N.`
          },
          stepByStepSolution: [
            {
              step: 1,
              title: 'Apply vector addition',
              explanation: 'Because the forces are at 90°, R = √(F1² + F2²).',
              calculation: `R = √(${f1}² + ${f2}²) = √(${f1*f1} + ${f2*f2}) = √${f1*f1 + f2*f2} ≈ ${rForce} N`
            }
          ]
        });
      } else if (typeIndex === 3) {
        // Thermodynamics / Carnot Efficiency
        const tHighC = 300 + (day % 100);
        const tLowC = 30;
        const tHighK = tHighC + 273;
        const tLowK = tLowC + 273;
        const carnotEff = Math.round(((tHighK - tLowK) / tHighK) * 100);
        problems.push({
          id: `esas-d${day}-q${q}`,
          subject: 'ESAS',
          topicId: 'esas-4',
          topicName: 'Thermodynamics & Power Plants',
          dayNumber: day,
          questionNumber: q,
          question: `A geothermal power plant operates with steam entering at ${tHighC}°C and condensing at ${tLowC}°C. What is the maximum theoretical Carnot efficiency of this thermal cycle?`,
          options: [`${carnotEff}%`, `${Math.round(((tHighC - tLowC) / tHighC) * 100)}%`, `${carnotEff - 10}%`, `${carnotEff + 8}%`],
          correctAnswer: 0,
          keyFormulaUsed: 'η_Carnot = 1 - (T_cold / T_hot) in Kelvin',
          difficulty: 'Moderate',
          eli5Takeaway: 'Always convert Celsius into Kelvin (+273) first! If you use Celsius directly, your answer will be completely wrong.',
          visualDiagram: {
            type: 'calculus_tangent',
            caption: `Carnot maximum thermal cycle efficiency operating between ${tHighK}K and ${tLowK}K.`
          },
          stepByStepSolution: [
            {
              step: 1,
              title: 'Convert temperatures to Kelvin',
              explanation: 'K = °C + 273.',
              calculation: `T_hot = ${tHighC} + 273 = ${tHighK} K\nT_cold = ${tLowC} + 273 = ${tLowK} K`
            },
            {
              step: 2,
              title: 'Calculate Carnot efficiency',
              explanation: 'η = (T_hot - T_cold) / T_hot.',
              calculation: `η = (${tHighK} - ${tLowK}) / ${tHighK} = ${tHighK - tLowK} / ${tHighK} ≈ ${(carnotEff / 100).toFixed(3)} = ${carnotEff}%`
            }
          ]
        });
      } else {
        // Fluid Mechanics / Chemistry / Materials
        problems.push({
          id: `esas-d${day}-q${q}`,
          subject: 'ESAS',
          topicId: 'esas-3',
          topicName: 'Engineering Materials & Conductivity',
          dayNumber: day,
          questionNumber: q,
          question: 'Among standard electrical conductor metals, which of the following elements has the HIGHEST electrical conductivity at 20°C?',
          options: ['Silver', 'Copper', 'Gold', 'Aluminum'],
          correctAnswer: 0,
          keyFormulaUsed: 'Conductivity ranking: Silver (106%) > Copper (100% IACS) > Gold (70%) > Aluminum (61%)',
          difficulty: 'Foundation',
          eli5Takeaway: 'Silver is number 1 in conductivity! Copper is second, but copper is used for wires because silver is far too expensive.',
          visualDiagram: {
            type: 'impedance_triangle',
            caption: 'Relative conductivity comparison: Silver > Copper > Gold > Aluminum.'
          },
          stepByStepSolution: [
            {
              step: 1,
              title: 'Compare metal electrical conductivities',
              explanation: 'Silver has the lowest resistivity (1.59 × 10⁻⁸ Ω·m) and highest conductivity. Copper is 1.68 × 10⁻⁸ Ω·m (the 100% IACS standard).',
              calculation: 'Rank: 1. Silver, 2. Copper, 3. Gold, 4. Aluminum'
            }
          ]
        });
      }
    }
  }

  // 3. Generate 35 EE Professional Problems (Q66 to Q100)
  for (let q = 66; q <= 100; q++) {
    const coreMatch = CORE_BOARD_PROBLEMS.find(p => p.subject === 'EE' && p.questionNumber === q);
    if (coreMatch && day === 1) {
      problems.push({ ...coreMatch, dayNumber: day });
    } else {
      const typeIndex = (q + day) % 7;
      if (typeIndex === 0) {
        // AC Induction Motors
        const poles = [2, 4, 6, 8][(q + day) % 4];
        const f = 60;
        const ns = (120 * f) / poles;
        const slip = 0.05;
        const nr = Math.round(ns * (1 - slip));
        problems.push({
          id: `ee-d${day}-q${q}`,
          subject: 'EE',
          topicId: 'ee-5',
          topicName: 'AC Machines (Induction Motors)',
          dayNumber: day,
          questionNumber: q,
          question: `A ${poles}-pole, 60 Hz three-phase induction motor operates with a full-load slip of 5%. What is the rotor speed at full load?`,
          options: [`${nr} RPM`, `${ns} RPM`, `${nr - 50} RPM`, `${nr + 60} RPM`],
          correctAnswer: 0,
          keyFormulaUsed: 'Ns = 120f / P,  Nr = Ns · (1 - s)',
          difficulty: 'Foundation',
          eli5Takeaway: 'Find the magnetic field speed (Ns) first using 120f/P, then subtract the 5% slip to get shaft speed.',
          visualDiagram: {
            type: 'motor_torque_speed',
            caption: `Induction motor: ${poles}-pole 60Hz produces synchronous speed ${ns} RPM with rotor speed ${nr} RPM.`
          },
          stepByStepSolution: [
            {
              step: 1,
              title: 'Calculate synchronous speed Ns',
              explanation: 'Ns = 120 × 60 / P.',
              calculation: `Ns = 7200 / ${poles} = ${ns} RPM`
            },
            {
              step: 2,
              title: 'Calculate actual rotor speed Nr',
              explanation: 'Nr = Ns(1 - s) where s = 0.05.',
              calculation: `Nr = ${ns} × (1 - 0.05) = ${ns} × 0.95 = ${nr} RPM`
            }
          ]
        });
      } else if (typeIndex === 1) {
        // 3-Phase Power
        const vLine = 230;
        const iLine = 20 + (q % 15);
        const pf = 0.8;
        const pKw = ((Math.sqrt(3) * vLine * iLine * pf) / 1000).toFixed(2);
        problems.push({
          id: `ee-d${day}-q${q}`,
          subject: 'EE',
          topicId: 'ee-3',
          topicName: 'Three-Phase AC Power',
          dayNumber: day,
          questionNumber: q,
          question: `A balanced 3-phase load connected to a ${vLine} V line-to-line supply draws a line current of ${iLine} A at 0.80 power factor lagging. What is the total active power absorbed?`,
          options: [`${pKw} kW`, `${(parseFloat(pKw) * 1.732).toFixed(2)} kW`, `${(parseFloat(pKw) / 1.732).toFixed(2)} kW`, `${(vLine * iLine * pf / 1000).toFixed(2)} kW`],
          correctAnswer: 0,
          keyFormulaUsed: 'P_3φ = √3 · V_line · I_line · cos(θ)',
          difficulty: 'Moderate',
          eli5Takeaway: 'For any balanced 3-phase system, active power is ALWAYS √3 × V_line × I_line × pf. Do not forget the √3!',
          visualDiagram: {
            type: 'three_phase_wye',
            caption: `Balanced 3-phase load: P = √3 · ${vLine}V · ${iLine}A · 0.80 = ${pKw} kW.`
          },
          stepByStepSolution: [
            {
              step: 1,
              title: 'Apply 3-phase power formula',
              explanation: 'P = √3 × V_L × I_L × cos(θ).',
              calculation: `P = 1.73205 × ${vLine} V × ${iLine} A × 0.80`
            },
            {
              step: 2,
              title: 'Compute power in kW',
              explanation: 'Divide by 1000 to get kilowatts.',
              calculation: `P = ${Math.round(Math.sqrt(3) * vLine * iLine * pf)} W = ${pKw} kW`
            }
          ]
        });
      } else if (typeIndex === 2) {
        // Transformers
        const v1 = 2400;
        const v2 = 240;
        const kva = 50;
        const i1 = ((kva * 1000) / v1).toFixed(2);
        const i2 = ((kva * 1000) / v2).toFixed(1);
        problems.push({
          id: `ee-d${day}-q${q}`,
          subject: 'EE',
          topicId: 'ee-4',
          topicName: 'Transformers',
          dayNumber: day,
          questionNumber: q,
          question: `A ${kva} kVA, ${v1}/${v2} V, 60 Hz single-phase step-down transformer has what rated primary full-load current?`,
          options: [`${i1} A`, `${i2} A`, `${(parseFloat(i1) * 2).toFixed(2)} A`, `${(parseFloat(i1) / 2).toFixed(2)} A`],
          correctAnswer: 0,
          keyFormulaUsed: 'I_primary = S_rated / V_primary',
          difficulty: 'Foundation',
          eli5Takeaway: 'High voltage side means low current. Low voltage side means high current. Power stays the same (50 kVA).',
          visualDiagram: {
            type: 'transformer_schematic',
            caption: `Transformer ${v1}V to ${v2}V core turns ratio with I_primary = ${i1}A.`
          },
          stepByStepSolution: [
            {
              step: 1,
              title: 'Divide rated Volt-Amperes by primary voltage',
              explanation: 'I₁ = S / V₁.',
              calculation: `I₁ = 50,000 VA / ${v1} V = ${i1} Amperes`
            }
          ]
        });
      } else if (typeIndex === 3) {
        // Power Factor Correction
        problems.push({
          id: `ee-d${day}-q${q}`,
          subject: 'EE',
          topicId: 'ee-2',
          topicName: 'Power Factor Correction',
          dayNumber: day,
          questionNumber: q,
          question: 'Connecting shunt capacitors across an inductive factory load has what effect on the real power (kW) and overall power factor?',
          options: ['Real power (kW) remains constant while power factor increases closer to 1.0', 'Both real power and reactive power decrease', 'Real power increases while power factor decreases', 'Power factor remains unchanged'],
          correctAnswer: 0,
          keyFormulaUsed: 'Capacitors supply local reactive power Q_c without consuming true power P',
          difficulty: 'Foundation',
          eli5Takeaway: 'Capacitors provide the magnetizing energy locally so the electric utility does not have to send it over long wires. Real work done (kW) stays the same!',
          visualDiagram: {
            type: 'power_triangle',
            caption: 'Power factor improvement: Shunt capacitors counter lagging inductive reactive power.'
          },
          stepByStepSolution: [
            {
              step: 1,
              title: 'Evaluate capacitor action',
              explanation: 'Capacitors draw leading reactive power which cancels lagging inductive VARs. The useful mechanical work (kW) consumed by motors is unchanged, but total line kVA drops, improving the power factor toward 1.0.',
              calculation: 'P = constant, Q_net = Q_load - Q_c, pf = P/S increases'
            }
          ]
        });
      } else {
        // Faults / Protection / Transmission
        problems.push({
          id: `ee-d${day}-q${q}`,
          subject: 'EE',
          topicId: 'ee-6',
          topicName: 'Transmission & Protective Relays',
          dayNumber: day,
          questionNumber: q,
          question: 'According to IEEE/ANSI standard device numbers used in electrical substation blueprints, what is Device 51?',
          options: ['AC Inverse Time Overcurrent Relay', 'Instantaneous Overcurrent Relay', 'Differential Protective Relay', 'Undervoltage Relay'],
          correctAnswer: 0,
          keyFormulaUsed: 'ANSI Device 50 = Instantaneous Overcurrent, 51 = AC Time Overcurrent',
          difficulty: 'Board Exam Level',
          eli5Takeaway: 'Remember: 50 acts in an instant (zero delay). 51 waits on an inverse time curve so downstream branch breakers get a chance to trip first.',
          visualDiagram: {
            type: 'thevenin_circuit',
            caption: 'ANSI Standard device 51 protective time-overcurrent trip coordination.'
          },
          stepByStepSolution: [
            {
              step: 1,
              title: 'Identify ANSI Standard Protective Device Numbers',
              explanation: 'Device 50 is Instantaneous Overcurrent Relay. Device 51 is AC Time-Overcurrent Relay (trips faster for bigger fault currents). Device 87 is Differential Relay.',
              calculation: 'Device 51 = AC Time Overcurrent Relay'
            }
          ]
        });
      }
    }
  }

  return problems;
};
