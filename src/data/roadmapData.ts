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
    title: 'Engineering Economy & Probability',
    orderPriority: 6,
    phase: 1,
    description: 'Time value of money, present worth, annual annuity, depreciation methods (straight-line, sinking fund), permutations, and probability.',
    visualSummary: 'Cash flow timeline with arrows pointing down for costs and arrows pointing up for future revenues compounded by interest.',
    eli5Intuition: 'Money today is worth more than money tomorrow because you can invest it to earn interest. Engineering economy calculates which generator or transformer is cheapest over 20 years.',
    boardExamWeight: '14% of Mathematics',
    recommendedDays: 4,
    subtopics: [
      'Simple & Compound Interest: F = P(1 + i)^n',
      'Uniform Series Compound Amount & Sinking Fund: A = P(A/P, i, n)',
      'Depreciation Methods: Straight Line (SLD), Sum of Years Digits (SOYD), Declining Balance',
      'Capitalized Cost (Infinite life equipment)',
      'Permutations, Combinations, and Independent Probability'
    ],
    keyFormulas: [
      {
        name: 'Compound Future Worth',
        formula: 'F = P · (1 + i)^n',
        explanation: 'Computes future lump sum value after n periods at interest rate i.',
        variables: ['P: Principal present worth', 'i: interest rate per period', 'n: number of periods']
      },
      {
        name: 'Capitalized Cost',
        formula: 'CC = First Cost + (Annual Operating Cost / i)',
        explanation: 'Used for permanent installations like hydro dams and long-term transmission towers.',
        variables: ['CC: Capitalized cost', 'i: annual discount rate']
      },
      {
        name: 'Straight Line Depreciation',
        formula: 'D = (FC - SV) / n',
        explanation: 'Uniform yearly drop in asset book value.',
        variables: ['FC: First cost', 'SV: Salvage value', 'n: useful life in years']
      }
    ]
  },

  // ==================== PHASE 2: ESAS (ENGINEERING SCIENCES & ALLIED SUBJECTS) ====================
  {
    id: 'esas-1',
    subject: 'ESAS',
    title: 'General Chemistry & Physics Mechanics',
    orderPriority: 7,
    phase: 2,
    description: 'Atomic structure, periodic table, oxidation states, Newton\'s laws of motion, kinematics, work, kinetic/potential energy, and momentum.',
    visualSummary: 'Free body diagram of a mass on an inclined plane showing normal force, friction vector, and gravity components.',
    eli5Intuition: 'An object will keep resting or moving forever unless you push it. When you push, Force equals Mass times Acceleration (F = ma).',
    boardExamWeight: '12% of ESAS',
    recommendedDays: 4,
    subtopics: [
      'Atomic Number, Valence Electrons, Conductors vs Insulators vs Semiconductors',
      'Kinematics: v = v₀ + at, s = v₀t + ½at², v² = v₀² + 2as',
      'Newton\'s Laws of Motion & Friction (f = μN)',
      'Work, Kinetic Energy (½mv²), Potential Energy (mgh), and Power (P = W/t)',
      'Impulse and Conservation of Momentum'
    ],
    keyFormulas: [
      {
        name: 'Newton\'s Second Law',
        formula: 'ΣF = m · a',
        explanation: 'Net force accelerates a mass.',
        variables: ['m: mass in kg', 'a: acceleration in m/s²']
      },
      {
        name: 'Kinetic Energy & Work',
        formula: 'W = ΔKE = ½m(v₂² - v₁²)',
        explanation: 'Work done on a body equals change in its kinetic energy.',
        variables: ['m: mass', 'v: velocity']
      },
      {
        name: 'Mechanical to Electrical Power',
        formula: '1 Horsepower (HP) = 746 Watts',
        explanation: 'Crucial bridge between mechanical motor output and electrical kW ratings.',
        variables: ['1 HP = 550 ft-lb/s = 746 W']
      }
    ]
  },
  {
    id: 'esas-2',
    subject: 'ESAS',
    title: 'Engineering Mechanics: Statics & Dynamics',
    orderPriority: 8,
    phase: 2,
    description: 'Equilibrium of concurrent forces, moment of force (torque), 2D trusses (method of joints/sections), center of gravity, and rotational dynamics.',
    visualSummary: 'Truss bridge diagram with tension members in blue and compression members in red meeting at pin joints.',
    eli5Intuition: 'If something is not falling, sliding, or spinning, all the pushes cancel out (ΣF = 0) and all the twisting turns cancel out (ΣM = 0).',
    boardExamWeight: '14% of ESAS',
    recommendedDays: 4,
    subtopics: [
      'Conditions of Static Equilibrium: ΣFx = 0, ΣFy = 0, ΣM = 0',
      'Resultant of Coplanar Force Systems',
      'Analysis of Simple Pin-Connected Trusses',
      'Centroids and Moments of Inertia of Structural Shapes',
      'Rotational Dynamics: Torque τ = I·α, Rotational Kinetic Energy ½Iω²'
    ],
    keyFormulas: [
      {
        name: 'Torque / Moment of a Force',
        formula: 'M = F · d',
        explanation: 'Force multiplied by perpendicular distance to pivot point.',
        variables: ['F: force in Newtons', 'd: perpendicular moment arm in meters']
      },
      {
        name: 'Motor Shaft Torque Relation',
        formula: 'P = 2π · N · T / 60 = ω · T',
        explanation: 'Relates electric motor mechanical power P (Watts), speed N (RPM), and torque T (N-m).',
        variables: ['P: power in Watts', 'N: shaft speed in RPM', 'T: torque in N-m']
      }
    ]
  },
  {
    id: 'esas-3',
    subject: 'ESAS',
    title: 'Strength of Materials & Mechanics of Deformable Bodies',
    orderPriority: 9,
    phase: 2,
    description: 'Normal stress, shear stress, Hooke\'s law, thermal stress, torsion in circular shafts, and bending stress in beams.',
    visualSummary: 'Stress-strain curve showing proportional limit, elastic region, yield point, and ultimate tensile strength.',
    eli5Intuition: 'Stress is pressure inside a solid beam (force divided by area). Strain is how much it stretched. If you don\'t pull too hard, it springs right back like a rubber band.',
    boardExamWeight: '12% of ESAS',
    recommendedDays: 4,
    subtopics: [
      'Tensile & Compressive Stress: σ = P / A',
      'Hooke\'s Law & Modulus of Elasticity: σ = E · ε',
      'Axial Deformation: δ = (P·L) / (A·E)',
      'Torsional Shear Stress in Solid & Hollow Shafts: τ = (T·r) / J',
      'Bending Stress in Beams: σ = (M·c) / I'
    ],
    keyFormulas: [
      {
        name: 'Axial Elongation',
        formula: 'δ = (P · L) / (A · E)',
        explanation: 'How much a rod or overhead conductor stretches under tension.',
        variables: ['P: applied force', 'L: original length', 'A: cross-sectional area', 'E: Young\'s modulus']
      },
      {
        name: 'Torsion Formula for Shafts',
        formula: 'τ_max = (16 · T) / (π · d³)',
        explanation: 'Maximum shear stress on the outer surface of a solid circular motor drive shaft.',
        variables: ['T: twisting torque', 'd: shaft diameter']
      },
      {
        name: 'Factor of Safety',
        formula: 'FS = Ultimate Stress / Allowable Stress',
        explanation: 'Safety margin required for towers, poles, and conduit supports.',
        variables: ['FS > 1.0']
      }
    ]
  },
  {
    id: 'esas-4',
    subject: 'ESAS',
    title: 'Fluid Mechanics & Thermodynamics',
    orderPriority: 10,
    phase: 2,
    description: 'Fluid statics, pressure head, continuity equation, Bernoulli\'s energy equation, ideal gas law PV=mRT, laws of thermodynamics, and power cycles.',
    visualSummary: 'Hydroelectric dam cross-section showing head water level, penstock conduit, turbine runner, and tailrace.',
    eli5Intuition: 'Water high up in a dam has stored pressure. When it shoots down the pipe (Bernoulli), pressure turns into roaring speed that spins the electrical generator.',
    boardExamWeight: '14% of ESAS',
    recommendedDays: 4,
    subtopics: [
      'Fluid Pressure: P = γ·h = ρ·g·h',
      'Continuity of Flow: Q = A₁v₁ = A₂v₂',
      'Bernoulli\'s Energy Equation',
      'Ideal Gas Law: P·V = m·R·T',
      'First Law of Thermodynamics: Q - W = ΔU',
      'Carnot Heat Engine Efficiency: η = 1 - (T_cold / T_hot)'
    ],
    keyFormulas: [
      {
        name: 'Hydroelectric Power Output',
        formula: 'P = 9.81 · Q · H · η',
        explanation: 'Electrical power generated in kW from flowing water head.',
        variables: ['Q: flow discharge in m³/s', 'H: effective head in meters', 'η: overall efficiency']
      },
      {
        name: 'Carnot Maximum Efficiency',
        formula: 'η_max = (T_H - T_C) / T_H',
        explanation: 'Maximum theoretical efficiency of any thermal power plant operating between absolute temperatures in Kelvin.',
        variables: ['T_H: boiler temperature (K)', 'T_C: condenser temperature (K)']
      },
      {
        name: 'Bernoulli Equation',
        formula: 'P₁/γ + v₁²/(2g) + z₁ = P₂/γ + v₂²/(2g) + z₂ + h_L',
        explanation: 'Energy balance along a streamline of liquid flow.',
        variables: ['P/γ: pressure head', 'v²/2g: velocity head', 'z: elevation head', 'h_L: friction loss']
      }
    ]
  },
  {
    id: 'esas-5',
    subject: 'ESAS',
    title: 'Philippine Electrical Engineering Law (RA 7920)',
    orderPriority: 11,
    phase: 2,
    description: 'Provisions of Republic Act 7920: Board of Electrical Engineering composition, grades of practice (PEE, REE, RME), exam qualifications, seal, and penalties.',
    visualSummary: 'Hierarchy diagram comparing Professional Electrical Engineer (PEE), Registered Electrical Engineer (REE), and Registered Master Electrician (RME).',
    eli5Intuition: 'RA 7920 is the Philippine law that protects the profession. It defines who can sign blueprints (PEE), who can install and operate plants up to any voltage (REE), and up to 600V / 500kVA (RME).',
    boardExamWeight: '18% of ESAS (Mandatory memorization for Philippine Board Exam)',
    recommendedDays: 4,
    subtopics: [
      'RA 7920 Title, Declaration of Policy, and Definition of Terms',
      'Composition and Qualifications of the Board of Electrical Engineering (BEE)',
      'Qualifications for Examination: PEE, REE, and RME criteria',
      'Passing Grade: General Average of at least 70% with no grade below 50% in any subject',
      'Scope of Practice & Field of Practice Limitations',
      'Prohibitions, Penalties, Fines (Php 10,000 to 50,000) and Imprisonment (6 mos to 5 yrs)'
    ],
    keyFormulas: [
      {
        name: 'REE Exam Passing Criteria',
        formula: 'Weighted Average ≥ 70% and No Subject < 50%',
        explanation: 'Mathematics: 33%, ESAS: 30%, EE Professional: 37%.',
        variables: ['Gen Avg = 0.33·MATH + 0.30·ESAS + 0.37·EE']
      },
      {
        name: 'RME Practice Ceiling',
        formula: 'Voltage ≤ 600 Volts, Total Capacity ≤ 500 kVA',
        explanation: 'Registered Master Electrician scope limitation under Section 31 of RA 7920.',
        variables: ['Voltage limit: 600V', 'Capacity limit: 500kVA']
      }
    ]
  },
  {
    id: 'esas-6',
    subject: 'ESAS',
    title: 'Philippine Electrical Code (PEC 1) Essentials',
    orderPriority: 12,
    phase: 2,
    description: 'PEC Article 100 Definitions, Article 210 Branch Circuits, Article 215 Feeders, Article 250 Grounding and Bonding, wire ampacities, and conduit fill.',
    visualSummary: 'Color-coded wiring schematic showing Hot wire (Black/Red), Neutral wire (White/Gray), and Grounding conductor (Green/Bare).',
    eli5Intuition: 'The Philippine Electrical Code is the safety rulebook. It prevents fires and electrocutions by specifying how thick wires must be for a given circuit breaker size.',
    boardExamWeight: '16% of ESAS & heavily tested in EE Professional',
    recommendedDays: 5,
    subtopics: [
      'Standard Conductor Colors: Ground (Green/Bare), Neutral (White/Natural Gray), Phase conductors',
      'Continuous Loads 125% rule: Overcurrent device must be rated at least 125% of continuous load',
      'Standard Ampere Ratings for Fuses and Circuit Breakers (15, 20, 30, 40, 50, 60, 100A, etc.)',
      'Minimum Wire Gauge for Lighting (2.0 mm² / 14 AWG) and Convenience Outlets (3.5 mm² / 12 AWG)',
      'Conduit Fill Percentages: 53% for 1 conductor, 31% for 2 conductors, 40% for 3 or more conductors',
      'Permissible Voltage Drop: 3% for branch circuit, 5% maximum total from service to outlet'
    ],
    keyFormulas: [
      {
        name: 'Continuous Load Sizing',
        formula: 'Rating_min = 1.25 · I_continuous + I_noncontinuous',
        explanation: 'PEC requires branch circuit conductors and breakers to carry 125% of loads running for 3 hours or more.',
        variables: ['I_continuous: loads on for 3+ hours']
      },
      {
        name: 'Single-Phase Voltage Drop',
        formula: 'VD = (2 · I · L · R) / 1000',
        explanation: 'Voltage drop across two conductors of length L (one way).',
        variables: ['I: current (A)', 'L: one-way distance (m)', 'R: resistance (Ω/km)']
      },
      {
        name: 'Maximum Allowable Voltage Drop',
        formula: 'VD_branch ≤ 3% · V_nominal,  VD_total ≤ 5% · V_nominal',
        explanation: 'Standard PEC design criteria for lighting and power.',
        variables: ['V_nominal: 230V standard in the Philippines']
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
