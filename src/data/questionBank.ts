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
      type: 'graph',
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
      type: 'vector',
      caption: 'Impedance right triangle: Base R = 12, Height X = 16, Hypotenuse |Z| = 20.'
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
      type: 'graph',
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
    ]
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
    ]
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
    ]
  },

  // ===================== ESAS (Items 36 to 65) =====================
  {
    id: 'esas-p1',
    subject: 'ESAS',
    topicId: 'esas-1',
    topicName: 'General Physics & Energy',
    dayNumber: 1,
    questionNumber: 36,
    question: 'An electric motor delivers 10 Horsepower (HP) to a water pump. Convert this mechanical power output into Watts.',
    options: ['7,460 W', '7,350 W', '5,500 W', '8,000 W'],
    correctAnswer: 0, // 7,460 W
    keyFormulaUsed: '1 HP = 746 Watts',
    difficulty: 'Foundation',
    eli5Takeaway: '1 mechanical horsepower equals 746 electrical watts. Memorize this constant: 1 HP = 746 W.',
    stepByStepSolution: [
      {
        step: 1,
        title: 'Apply conversion factor',
        explanation: 'Multiply mechanical HP by 746 Watts/HP.',
        calculation: 'P = 10 HP × 746 W/HP = 7,460 Watts (or 7.46 kW)'
      }
    ]
  },
  {
    id: 'esas-p2',
    subject: 'ESAS',
    topicId: 'esas-2',
    topicName: 'Engineering Mechanics (Torque)',
    dayNumber: 1,
    questionNumber: 37,
    question: 'A 3-phase induction motor produces a full-load shaft torque of 80 N-m while rotating at a speed of 1750 RPM. What is the shaft mechanical output power?',
    options: ['12.5 kW', '14.66 kW', '16.2 kW', '18.4 kW'],
    correctAnswer: 1, // 14.66 kW
    keyFormulaUsed: 'P = 2πNT / 60  or  P = ω · T',
    difficulty: 'Moderate',
    eli5Takeaway: 'Power equals rotational speed in radians per second multiplied by turning twist (torque).',
    stepByStepSolution: [
      {
        step: 1,
        title: 'Convert speed N from RPM to angular velocity ω in rad/s',
        explanation: 'ω = 2πN / 60.',
        calculation: 'ω = (2 × 3.14159 × 1750) / 60 = 183.26 rad/s'
      },
      {
        step: 2,
        title: 'Multiply by torque T',
        explanation: 'P = ω × T.',
        calculation: 'P = 183.26 rad/s × 80 N-m = 14,660.8 Watts ≈ 14.66 kW'
      }
    ]
  },
  {
    id: 'esas-p3',
    subject: 'ESAS',
    topicId: 'esas-3',
    topicName: 'Strength of Materials (Shaft Torsion)',
    dayNumber: 1,
    questionNumber: 38,
    question: 'Under Hooke\'s law, the ratio of tensile stress (σ) to tensile strain (ε) within the elastic limit of a copper busbar is known as:',
    options: ['Poisson\'s Ratio', 'Modulus of Elasticity (Young\'s Modulus)', 'Shear Modulus', 'Bulk Modulus'],
    correctAnswer: 1, // Young's Modulus
    keyFormulaUsed: 'E = σ / ε (Hooke\'s Law)',
    difficulty: 'Foundation',
    eli5Takeaway: 'Young\'s Modulus is the stiffness rating of a material. A high E means it takes huge force to stretch it even a tiny bit.',
    stepByStepSolution: [
      {
        step: 1,
        title: 'Define Hooke\'s Law',
        explanation: 'Within the proportional elastic limit, stress is directly proportional to strain: σ = E·ε.',
        calculation: 'E = σ / ε = Young\'s Modulus of Elasticity (Pascals or psi)'
      }
    ]
  },
  {
    id: 'esas-p4',
    subject: 'ESAS',
    topicId: 'esas-4',
    topicName: 'Fluid Mechanics & Hydro Power',
    dayNumber: 1,
    questionNumber: 39,
    question: 'A hydroelectric generating station has an effective head of 50 meters and water discharge flow of 20 m³/s. If the overall turbine-generator efficiency is 88%, what is the electrical power generated?',
    options: ['8,633 kW', '9,810 kW', '7,550 kW', '10,250 kW'],
    correctAnswer: 0, // 8,633 kW
    keyFormulaUsed: 'P (kW) = 9.81 · Q · H · η',
    difficulty: 'Moderate',
    eli5Takeaway: 'Falling water creates power: 9.81 kN/m³ (water density) × flow rate × drop height × efficiency.',
    stepByStepSolution: [
      {
        step: 1,
        title: 'Recall the hydroelectric power formula',
        explanation: 'P = ρ · g · Q · H · η. Since ρg for water is 9.81 kN/m³, P in kW = 9.81 × Q × H × η.',
        calculation: 'P = 9.81 × 20 m³/s × 50 m × 0.88'
      },
      {
        step: 2,
        title: 'Compute total kW output',
        explanation: 'Multiply all terms.',
        calculation: 'P = 9.81 × 1000 × 0.88 = 8,632.8 kW ≈ 8,633 kW'
      }
    ]
  },
  {
    id: 'esas-p5',
    subject: 'ESAS',
    topicId: 'esas-5',
    topicName: 'RA 7920 (New Electrical Engineering Law)',
    dayNumber: 1,
    questionNumber: 40,
    question: 'According to Republic Act No. 7920 (New Electrical Engineering Law), to pass the Registered Electrical Engineer (REE) Licensure Examination, a candidate must obtain a weighted general average of at least:',
    options: ['75% with no grade below 60%', '70% with no grade below 50% in any subject', '70% with no grade below 60%', '75% with no grade below 50%'],
    correctAnswer: 1, // 70% with no grade below 50%
    keyFormulaUsed: 'RA 7920 Section 19: Gen Avg ≥ 70%, No Subject < 50%',
    difficulty: 'Board Exam Level',
    eli5Takeaway: 'You need an overall 70% average across MATH (33%), ESAS (30%), and EE (37%), AND you must not score below 50% on any of the three individual tests.',
    stepByStepSolution: [
      {
        step: 1,
        title: 'Verify RA 7920 Section 19 requirement',
        explanation: 'Section 19 explicitly dictates that to pass, an examinee must obtain a general average of at least 70% with no grade lower than 50% in any subject.',
        calculation: 'Passing Criteria: General Average ≥ 70% AND min(MATH, ESAS, EE) ≥ 50%'
      }
    ]
  },
  {
    id: 'esas-p6',
    subject: 'ESAS',
    topicId: 'esas-6',
    topicName: 'Philippine Electrical Code (PEC 1)',
    dayNumber: 1,
    questionNumber: 41,
    question: 'According to the Philippine Electrical Code (PEC), what is the maximum recommended total voltage drop from the service entrance to the farthest outlet for combined feeder and branch circuits?',
    options: ['2%', '3%', '5%', '10%'],
    correctAnswer: 2, // 5%
    keyFormulaUsed: 'PEC Section 2.10.1.19 / 2.15.1.2: Branch ≤ 3%, Total ≤ 5%',
    difficulty: 'Foundation',
    eli5Takeaway: 'The branch circuit alone should drop at most 3%, and the overall total from service entry to outlet should never lose more than 5% voltage.',
    stepByStepSolution: [
      {
        step: 1,
        title: 'Check PEC limits for voltage drop',
        explanation: 'PEC recommends conductors for branch circuits be sized to prevent a voltage drop exceeding 3% at the farthest outlet, and maximum total voltage drop on both feeder and branch circuit combined shall not exceed 5%.',
        calculation: 'Branch circuit max VD = 3%\nTotal combined (feeder + branch) max VD = 5%'
      }
    ]
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
      type: 'schematic',
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
      type: 'vector',
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
      type: 'vector',
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
    ]
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
    ]
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
    ]
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
