import React, { useState } from 'react';
import { SubjectType } from '../types';
import { CleanMath } from './CleanMath';

interface Pillar {
  id: string;
  subject: SubjectType;
  title: string;
  order: number;
  oneLiner: string;
  whyItMatters: string;
  mentalModel: string;
  svgType: string;
  masterFormula: string;
  formulaMeaning: string;
  deadlyTrap: string;
  practiceProblem: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  };
}

export const CORE_PILLARS: Pillar[] = [
  // ===================== MATHEMATICS FOUNDATIONS =====================
  {
    id: 'math-pillar-1',
    subject: 'MATH',
    title: 'Algebra & Formula Rearrangement',
    order: 1,
    oneLiner: 'Solving for the unknown variable without making algebraic sign errors.',
    whyItMatters: 'Every board exam problem has a formula. If you panic or make an error when isolating a variable like solving for R in P = V²/R, you lose points on problems you actually knew how to solve.',
    mentalModel: 'Think of an equation as a perfectly balanced scale. Whatever operation you do to the left side (divide, multiply, square, take square root), you MUST do the exact same thing to the right side.',
    svgType: 'algebra_balance',
    masterFormula: 'x = (-b ± √(b² - 4ac)) / (2a)',
    formulaMeaning: 'Quadratic formula: solves any equation of type ax² + bx + c = 0. In circuit analysis, circuit resonance and transient poles are often roots of a quadratic equation.',
    deadlyTrap: 'Forgetting the negative sign in -b or forgetting that the square root covers the entire discriminant (b² - 4ac).',
    practiceProblem: {
      question: 'A 230V electric heater is rated at 1150 Watts. What is the heater resistance R?',
      options: ['23 Ω', '46 Ω', '92 Ω', '0.2 Ω'],
      correctIndex: 1,
      explanation: 'Since P = V² / R, multiply both sides by R and divide by P: R = V² / P = (230)² / 1150 = 52900 / 1150 = 46 Ω.'
    }
  },
  {
    id: 'math-pillar-2',
    subject: 'MATH',
    title: 'Right-Triangle Trigonometry (SOH-CAH-TOA)',
    order: 2,
    oneLiner: 'The secret skeleton behind all AC Circuits and Power Triangles.',
    whyItMatters: 'Alternating Current (AC) is governed by sinusoidal waves. The relationship between Resistance (R), Reactance (X), and Impedance (Z) is literally a right triangle. If you know SOH-CAH-TOA, you already know AC electricity!',
    mentalModel: 'Picture a right triangle: The horizontal base is Resistance R (does real work, produces heat). The vertical height is Reactance X (stores magnetic/electric energy). The hypotenuse is total Impedance Z (the total opposition the source feels).',
    svgType: 'trig_pythagoras',
    masterFormula: 'Z² = R² + X²   ⟹   cos(θ) = R / Z   ⟹   tan(θ) = X / R',
    formulaMeaning: 'Pythagorean Theorem & Cosine: The power factor (pf) in AC circuits is simply cos(θ) = R / Z. Real power P is S·cos(θ), Reactive power Q is S·sin(θ).',
    deadlyTrap: 'Do NOT simply add R and X (e.g. 3Ω + 4Ω is NOT 7Ω in AC circuits! It is √(3² + 4²) = 5Ω because they are 90 degrees out of phase).',
    practiceProblem: {
      question: 'An AC coil has a resistance R = 6 Ω and inductive reactance XL = 8 Ω. What is the total impedance Z?',
      options: ['14 Ω', '10 Ω', '2 Ω', '48 Ω'],
      correctIndex: 1,
      explanation: 'Z = √(R² + X²) = √(6² + 8²) = √(36 + 64) = √100 = 10 Ω.'
    }
  },
  {
    id: 'math-pillar-3',
    subject: 'MATH',
    title: 'Complex Numbers & Phasors (Rectangular vs Polar)',
    order: 3,
    oneLiner: 'How engineers represent magnitude and phase angle as a single 2D number.',
    whyItMatters: 'In DC, voltages are just numbers (like 12V). In AC, voltage and current oscillate and have a time lag (phase angle). Complex numbers let us add, subtract, multiply, and divide AC voltages and currents.',
    mentalModel: 'Rectangular form (a + jb) is like street directions: go "a" blocks East, and "b" blocks North. Polar form (R ∠ θ) is like GPS radar: look at distance R in direction angle θ.',
    svgType: 'complex_plane',
    masterFormula: 'A ∠ θ = A·cos(θ) + j A·sin(θ)   and   (A ∠ θ₁) × (B ∠ θ₂) = (A·B) ∠ (θ₁ + θ₂)',
    formulaMeaning: 'Use Rectangular form to ADD/SUBTRACT impedances or currents. Use Polar form to MULTIPLY/DIVIDE voltages, currents, and impedances (Ohm\'s Law: V = I × Z).',
    deadlyTrap: 'Trying to add polar numbers directly without converting to rectangular first. (10∠30° + 10∠60° is NOT 20∠90°!).',
    practiceProblem: {
      question: 'A voltage V = 100 ∠ 0° Volts is applied to an impedance Z = 20 ∠ 30° Ohms. What is the current I?',
      options: ['5 ∠ 30° A', '5 ∠ -30° A', '2000 ∠ 30° A', '5 ∠ 0° A'],
      correctIndex: 1,
      explanation: 'Ohm\'s law: I = V / Z = (100 ∠ 0°) / (20 ∠ 30°) = (100/20) ∠ (0° - 30°) = 5 ∠ -30° A. Notice the current lags the voltage by 30°!'
    }
  },
  {
    id: 'math-pillar-4',
    subject: 'MATH',
    title: 'Differential Calculus: The Speed of Change',
    order: 4,
    oneLiner: 'Derivatives are not abstract curves—they are physical rates of change.',
    whyItMatters: 'Current is the derivative of charge: i(t) = dq/dt. Induced voltage in an inductor is the derivative of current: v(t) = L (di/dt). Faraday\'s law of induction is e = -N (dΦ/dt). Every electrical sensor and generator operates on derivatives.',
    mentalModel: 'The derivative dy/dx is simply the speedometer of a function. If the graph is flat, the derivative is 0. If it climbs steeply, the derivative is huge. When finding maximum power or minimum loss, the slope is 0 (d/dx = 0).',
    svgType: 'calculus_derivative',
    masterFormula: 'd/dt (tⁿ) = n·tⁿ⁻¹   and   i(t) = dq/dt   and   v_L(t) = L·(di/dt)',
    formulaMeaning: 'Power rule: bring down the exponent and subtract 1. To find the current, take the derivative of the charge function with respect to time.',
    deadlyTrap: 'Forgetting that the derivative of a constant is 0 (e.g. d/dt [5] = 0). A constant DC voltage produces NO current through a capacitor (i = C dv/dt = 0).',
    practiceProblem: {
      question: 'The electric charge entering a terminal is given by q(t) = 3t² + 4t + 5 Coulombs. What is the current at t = 2 seconds?',
      options: ['16 Amperes', '25 Amperes', '10 Amperes', '12 Amperes'],
      correctIndex: 0,
      explanation: 'Current i(t) = dq/dt = d/dt (3t² + 4t + 5) = 6t + 4. At t = 2: i(2) = 6(2) + 4 = 12 + 4 = 16 A.'
    }
  },
  {
    id: 'math-pillar-5',
    subject: 'MATH',
    title: 'Integral Calculus: Total Accumulation & RMS Area',
    order: 5,
    oneLiner: 'Integration is just adding up countless tiny pieces into a grand total.',
    whyItMatters: 'If you know the power consumed every second, integration gives you total energy consumed (kWh). Integration also defines the RMS (Root Mean Square) value of AC waveforms: V_rms = V_peak / √2.',
    mentalModel: 'Picture filling a bucket with water while the tap rate is changing. Integration calculates the total water accumulated in the bucket between time t₁ and t₂ (the area under the rate curve).',
    svgType: 'calculus_integral',
    masterFormula: '∫ tⁿ dt = (tⁿ⁺¹)/(n+1) + C   and   W = ∫ P(t) dt   and   V_rms = V_m / √2',
    formulaMeaning: 'Integral power rule: add 1 to the exponent and divide by the new exponent. Total electrical work/energy W is the integral of instantaneous power p(t) over time.',
    deadlyTrap: 'Forgetting to subtract the lower limit when evaluating a definite integral: ∫_a^b f(t) dt = F(b) - F(a).',
    practiceProblem: {
      question: 'A constant current of 5 Amperes charges an empty capacitor for 4 seconds. What is the total charge Q delivered?',
      options: ['20 Coulombs', '1.25 Coulombs', '9 Coulombs', '40 Coulombs'],
      correctIndex: 0,
      explanation: 'Q = ∫₀⁴ i(t) dt = ∫₀⁴ 5 dt = [5t]₀⁴ = 5(4) - 5(0) = 20 Coulombs.'
    }
  },

  // ===================== ESAS FOUNDATIONS (ENGINEERING ECONOMICS) =====================
  // Main Reference: Drive Folder "ESAS - Engineering Economics"
  {
    id: 'esas-pillar-1',
    subject: 'ESAS',
    title: 'Time Value of Money & Compound Interest',
    order: 6,
    oneLiner: 'Money today is worth more than money tomorrow: exponential interest growth.',
    whyItMatters: 'Foundational concept for all Engineering Economics board items. Governs how loans, equipment financing, and project savings grow over time.',
    mentalModel: 'A snowball rolling down a snowy mountain: In simple interest, only the initial core gains weight. In compound interest, every layer of snow that sticks starts collecting even more snow as it rolls.',
    svgType: 'econ_compound_growth',
    masterFormula: 'F = P(1 + i)^n  |  P = \\frac{F}{(1 + i)^n} = F(1 + i)^{-n}',
    formulaMeaning: 'Where P is Present Principal, F is Future Worth, i is periodic interest rate (nominal r divided by m), and n is total compounding periods (years × m). Canon F-789SGA: Solve for unknown n or i with [SHIFT] [SOLVE].',
    deadlyTrap: 'Forgetting to divide the nominal interest rate r by the compounding frequency m (e.g. quarterly m=4, monthly m=12), or forgetting to multiply years by m.',
    practiceProblem: {
      question: 'An engineer deposits ₱100,000 at 8% compounded quarterly for 5 years. What is the accumulated future amount F?',
      options: ['₱148,595', '₱140,000', '₱146,933', '₱152,100'],
      correctIndex: 0,
      explanation: 'Periodic rate i = 8% / 4 = 2% = 0.02. Total periods n = 5 × 4 = 20 quarters. F = 100,000 · (1.02)^20 = ₱148,595.'
    }
  },
  {
    id: 'esas-pillar-2',
    subject: 'ESAS',
    title: 'Annuities, Sinking Funds & Perpetuity',
    order: 7,
    oneLiner: 'Equal regular installment series: car loans, mortgages, and infinite endowments.',
    whyItMatters: 'Accounts for 25% of all ESAS engineering economy problems. Master ordinary annuity, annuity due, deferred grace periods, and infinite perpetuity.',
    mentalModel: 'A steady stream of equal water drops filling or draining a reservoir. Discounting all drops back to the beginning is Present Worth P; collecting them all at the end is Future Worth F.',
    svgType: 'econ_annuity_timeline',
    masterFormula: 'P = A \\left[ \\frac{1 - (1 + i)^{-n}}{i} \\right]  |  P = \\frac{A}{i}',
    formulaMeaning: 'Where A is the uniform periodic payment, i is interest per period, and n is number of payments. For Annuity Due, multiply result by (1 + i). Canon F-789SGA: Store interest rate with 0.08 [SHIFT] [STO] [A] for one-line solving.',
    deadlyTrap: 'Present Worth P of an Ordinary Annuity sits exactly ONE PERIOD BEFORE the first payment. If payment 1 is at t=1, P is at t=0.',
    practiceProblem: {
      question: 'What is the present worth of an annual pension of ₱50,000 received at the end of each year for 10 years at 8% annual interest?',
      options: ['₱335,504', '₱500,000', '₱289,320', '₱350,000'],
      correctIndex: 0,
      explanation: 'P = 50,000 · [(1 - (1.08)^-10) / 0.08] = 50,000 × 6.71008 = ₱335,504.'
    }
  },
  {
    id: 'esas-pillar-3',
    subject: 'ESAS',
    title: 'Asset Depreciation Methods (SLM, SFM, SOYD, DBM)',
    order: 8,
    oneLiner: 'How physical machinery, transformers, and trucks lose value as they age.',
    whyItMatters: 'Essential for tax accounting and equipment replacement planning. The PRC tests the 5 classical methods: Straight-Line, Sinking Fund, SOYD, Declining Balance, and DDBM.',
    mentalModel: 'A new transformer loses monetary value as its insulation ages and windings wear down. Straight-line drops uniformly; accelerated methods write off the heaviest chunk in year 1.',
    svgType: 'econ_depreciation_curves',
    masterFormula: 'd_{SL} = \\frac{FC - SV}{n}  |  d_m = (FC - SV) \\left[ \\frac{n - m + 1}{\\Sigma} \\right]',
    formulaMeaning: 'Where FC is First Cost, SV is Salvage Value, n is useful life in years, and Σ = n(n+1)/2 is sum of the digits. Canon F-789SGA: Use [SHIFT] [log] (Σ) to sum digits instantly.',
    deadlyTrap: 'For Declining Balance (DBM), Salvage Value is NOT subtracted in the base: BV_m = FC · (1 - k)^m. For Double Declining (DDBM), rate k = 2 / n.',
    practiceProblem: {
      question: 'A ₱500,000 generator has a salvage value of ₱50,000 after 5 years. What is the Year 1 depreciation using SOYD?',
      options: ['₱150,000', '₱90,000', '₱100,000', '₱120,000'],
      correctIndex: 0,
      explanation: 'Depreciable amount = 500,000 - 50,000 = ₱450,000. Sum of digits Σ = 5(6)/2 = 15. Year 1 ratio = 5/15. Depreciation d_1 = 450,000 × (5/15) = ₱150,000.'
    }
  },
  {
    id: 'esas-pillar-4',
    subject: 'ESAS',
    title: 'Capitalized Cost & Perpetual Power Infrastructure',
    order: 9,
    oneLiner: 'The present sum needed to construct and maintain an asset forever.',
    whyItMatters: 'Used for long-lived utility assets like hydro dams, transmission corridors, and substations where project life is modeled as infinite (perpetual horizon).',
    mentalModel: 'A bank deposit so large that the annual interest alone covers perpetual operation and maintenance (OM / i) and rebuilds the equipment every k years indefinitely without draining the principal.',
    svgType: 'econ_capitalized_timeline',
    masterFormula: 'CC = FC + \\frac{OM}{i} + \\frac{RC - SV}{(1 + i)^k - 1}',
    formulaMeaning: 'Where FC is Initial Cost, OM is perpetual annual maintenance, RC is periodic replacement cost every k years, and i is discount rate. Canon F-789SGA: Enter in 1 line using stored variable [ALPHA] [A].',
    deadlyTrap: 'Do not multiply OM by years! When life is infinite, OM divided by i gives the exact perpetual present worth.',
    practiceProblem: {
      question: 'A transmission tower costs ₱2,000,000 to erect with annual maintenance of ₱80,000 forever. At 8% interest, find the Capitalized Cost.',
      options: ['₱3,000,000', '₱2,800,000', '₱2,080,000', '₱3,600,000'],
      correctIndex: 0,
      explanation: 'Perpetual maintenance PW = OM / i = 80,000 / 0.08 = ₱1,000,000. Total CC = 2,000,000 + 1,000,000 = ₱3,000,000.'
    }
  },
  {
    id: 'esas-pillar-5',
    subject: 'ESAS',
    title: 'Break-Even Analysis, Payback & Rate of Return (IRR)',
    order: 10,
    oneLiner: 'Evaluating profitability, minimum sales quotas, and internal return rates.',
    whyItMatters: 'Tells an electrical contractor how many units they must sell to avoid losses, and calculates project rate of return (IRR) to determine investment viability.',
    mentalModel: 'A seesaw: Fixed costs weigh down the starting line. Every unit sold adds a contribution margin (p - v). When sales reach Q_BEP, the seesaw balances. Above that is profit.',
    svgType: 'econ_breakeven_chart',
    masterFormula: 'Q_{BEP} = \\frac{FC}{p - v}  |  NPV(IRR) = \\sum_{t=0}^n \\frac{CF_t}{(1 + IRR)^t} = 0',
    formulaMeaning: 'Where FC is total fixed costs, p is selling price per unit, v is variable cost per unit. IRR is solved on Canon F-789SGA using [ALPHA] [=] and [SHIFT] [SOLVE].',
    deadlyTrap: 'Contribution margin is (p - v), not (p + v). Do not confuse Break-Even Units (Q_BEP) with Break-Even Revenue in pesos (Q_BEP × p).',
    practiceProblem: {
      question: 'An electrical manufacturing plant has annual fixed costs of ₱900,000. Each circuit breaker sells for ₱500 with variable manufacturing cost of ₱200. Find break-even volume.',
      options: ['3,000 units', '4,500 units', '1,800 units', '2,250 units'],
      correctIndex: 0,
      explanation: 'Contribution margin = 500 - 200 = ₱300/unit. Q_BEP = FC / (p - v) = 900,000 / 300 = 3,000 units per year.'
    }
  },

  // ===================== EE PROFESSIONAL FOUNDATIONS =====================
  {
    id: 'ee-pillar-1',
    subject: 'EE',
    title: 'DC Circuit Fundamentals (Ohm\'s Law, KCL & KVL)',
    order: 11,
    oneLiner: 'The absolute bedrock of all electrical engineering analysis.',
    whyItMatters: 'If you cannot solve a basic 2-loop DC resistor circuit, AC circuits will be impossible. Every power grid, microprocessor, and electric car battery bank relies on KCL and KVL.',
    mentalModel: 'Water pipe analogy: Voltage V is water pressure (pump). Current I is the water flow rate (gallons/second). Resistance R is pipe constriction. Kirchhoff\'s Current Law (KCL): A pipe junction cannot store water; flow in = flow out. Kirchhoff\'s Voltage Law (KVL): If you hike up a mountain and return to the start, total elevation change is zero.',
    svgType: 'kcl_kvl_circuit',
    masterFormula: 'V = I·R   and   ∑ I_in = ∑ I_out (KCL)   and   ∑ V_drops = 0 (KVL)',
    formulaMeaning: 'Resistors in Series add directly: R_total = R₁ + R₂. Resistors in Parallel add as inverses: 1/R_total = 1/R₁ + 1/R₂ (or product over sum: R₁R₂ / (R₁+R₂)).',
    deadlyTrap: 'Confusing series current with parallel voltage. In a SERIES circuit, CURRENT is identical everywhere. In a PARALLEL branch, VOLTAGE is identical across all branches.',
    practiceProblem: {
      question: 'Two resistors of 20 Ω and 30 Ω are connected in parallel across a 120V DC source. What is the equivalent resistance and total current?',
      options: ['12 Ω and 10 A', '50 Ω and 2.4 A', '600 Ω and 0.2 A', '25 Ω and 4.8 A'],
      correctIndex: 0,
      explanation: 'Parallel equivalent R_eq = (R₁ · R₂) / (R₁ + R₂) = (20 × 30) / (20 + 30) = 600 / 50 = 12 Ω. Total current I = V / R_eq = 120 / 12 = 10 Amperes.'
    }
  },
  {
    id: 'ee-pillar-2',
    subject: 'EE',
    title: 'AC Circuits, Reactance & The Power Triangle',
    order: 12,
    oneLiner: 'How inductors and capacitors resist AC, and why Power Factor matters.',
    whyItMatters: '99% of electricity in the world is generated and distributed as AC. Inductors resist AC via magnetic back-EMF (XL = 2πfL). Capacitors resist AC by charging (XC = 1 / (2πfC)). Understanding P, Q, S and power factor correction is the #1 most frequent board exam topic!',
    mentalModel: 'The Beer Mug Analogy: The liquid beer in the mug is Active Real Power P (kW) that actually quenches your thirst (does real mechanical work). The foam on top is Reactive Power Q (kVAR) needed to create magnetic fields in motors. The entire mug capacity is Apparent Power S (kVA) that the utility company must supply.',
    svgType: 'power_triangle_pillar',
    masterFormula: 'P = V·I·cos(θ) (kW)   and   Q = V·I·sin(θ) (kVAR)   and   S = V·I = √(P² + Q²) (kVA)',
    formulaMeaning: 'Power Factor pf = cos(θ) = P / S. A low power factor means excessive line current and high I²R losses, prompting utilities to impose penalty surcharges.',
    deadlyTrap: 'Assuming a capacitor adds inductive VARs. Capacitors supply LEADING reactive VARs (-jQ) that cancel out the LAGGING inductive VARs (+jQ) of motors, bringing power factor close to 1.0!',
    practiceProblem: {
      question: 'An industrial plant consumes 80 kW of real power and 60 kVAR of inductive reactive power. What is the total apparent power S and operating power factor?',
      options: ['100 kVA, pf = 0.80 lagging', '140 kVA, pf = 0.57 lagging', '100 kVA, pf = 0.80 leading', '48 kVA, pf = 0.60 lagging'],
      correctIndex: 0,
      explanation: 'Apparent power S = √(P² + Q²) = √(80² + 60²) = √(6400 + 3600) = √10000 = 100 kVA. Power Factor pf = P / S = 80 / 100 = 0.80 lagging.'
    }
  },
  {
    id: 'ee-pillar-3',
    subject: 'EE',
    title: '3-Phase Power Systems: Wye vs Delta Configurations',
    order: 13,
    oneLiner: 'Why the entire world transmits high power with 3 wires instead of 2.',
    whyItMatters: 'Three-phase power provides constant, smooth torque to large motors with zero pulsation, and uses 25% less conductor copper than equivalent single-phase systems.',
    mentalModel: 'Wye (Star) has a central common Neutral point (like a peace sign ☮). Delta (Mesh) has closed corners in a triangle (Δ) with NO neutral wire. In Wye, line voltage is 1.732× (√3) higher than phase voltage. In Delta, line voltage equals phase voltage, but line current is 1.732× higher.',
    svgType: 'three_phase_pillar',
    masterFormula: 'WYE: V_L = √3·V_ph, I_L = I_ph   |   DELTA: V_L = V_ph, I_L = √3·I_ph   |   P_3φ = √3·V_L·I_L·cos(θ)',
    formulaMeaning: 'The 3-phase power formula P = √3 · V_line · I_line · cos(θ) applies equally to BOTH Wye and Delta connections when using LINE values!',
    deadlyTrap: 'Using √3 with phase voltage instead of line voltage in the 3-phase power formula. Remember: P_total = 3 · V_phase · I_phase · cos(θ) OR √3 · V_line · I_line · cos(θ).',
    practiceProblem: {
      question: 'A 3-phase balanced Wye connected load has a line voltage of 400V. What is the phase voltage across each phase branch?',
      options: ['230.9 V', '400 V', '692.8 V', '133.3 V'],
      correctIndex: 0,
      explanation: 'In a Wye connection: V_phase = V_line / √3 = 400 / 1.732 = 230.9 Volts (standard 230V commercial branch voltage!).'
    }
  },
  {
    id: 'ee-pillar-4',
    subject: 'EE',
    title: 'Transformers: Voltage Stepping & Impedance Reflection',
    order: 14,
    oneLiner: 'Transferring electrical energy between circuits through magnetic flux without any moving parts.',
    whyItMatters: 'Without transformers, long-distance power grids are impossible. Stepping up voltage to 230 kV reduces current, slashing transmission line I²R heat losses by thousands of times.',
    mentalModel: 'Magnetic Seesaw: The primary coil turns electrical current into an alternating magnetic flux in the iron core. The secondary coil absorbs that flux and turns it back into voltage. If secondary has half the turns, it outputs half the voltage, but delivers DOUBLE the current (Power In ≈ Power Out).',
    svgType: 'transformer_pillar',
    masterFormula: 'Turns Ratio a = N₁ / N₂ = V₁ / V₂ = I₂ / I₁   and   Z₁ = a² · Z₂',
    formulaMeaning: 'Voltage is proportional to turns; Current is INVERSELY proportional to turns. When reflecting an impedance from secondary to primary, multiply by the SQUARE of the turns ratio (a²).',
    deadlyTrap: 'Inverting the current ratio. If a step-down transformer halves the voltage (V₂ = 0.5 V₁), the current DOUBLES (I₂ = 2 I₁)! Current is always opposite to voltage.',
    practiceProblem: {
      question: 'A single-phase transformer has 1000 primary turns and 200 secondary turns. If 2400V is applied to the primary, what is the secondary open-circuit voltage?',
      options: ['480 V', '12,000 V', '240 V', '960 V'],
      correctIndex: 0,
      explanation: 'Turns ratio a = N₁ / N₂ = 1000 / 200 = 5. Secondary voltage V₂ = V₁ / a = 2400 / 5 = 480 Volts.'
    }
  },
  {
    id: 'ee-pillar-5',
    subject: 'EE',
    title: 'AC Induction Motors: Synchronous Speed, Slip & Torque',
    order: 15,
    oneLiner: 'The workhorse of industry: converting 3-phase electricity into rotational power.',
    whyItMatters: 'Induction motors consume over 60% of all generated electricity in industrial plants. The board exam constantly tests synchronous speed (Ns), actual rotor speed (Nr), slip (s), and rotor copper loss.',
    mentalModel: 'A rotating magnetic field spins in the stator at synchronous speed Ns. The rotor tries to catch up with the field, like a dog chasing a moving car. If the rotor ever caught up completely (speed Nr = Ns), the magnetic field would not cut the rotor bars, zero current would be induced, and torque would drop to zero! Therefore, the rotor MUST always run slightly slower (slip s > 0).',
    svgType: 'motor_slip_pillar',
    masterFormula: 'N_s = 120·f / P   and   s = (N_s - N_r) / N_s   and   P_rotor-loss = s · P_airgap',
    formulaMeaning: 'Where f is supply frequency (60 Hz in Philippines), P is number of stator poles (must be an even integer: 2, 4, 6, 8), Ns is synchronous speed in RPM, and s is decimal slip.',
    deadlyTrap: 'Using slip in percent in formulas instead of decimal (e.g. 5% slip must be written as 0.05 in calculations!).',
    practiceProblem: {
      question: 'A 4-pole, 60 Hz 3-phase induction motor runs at a full-load speed of 1728 RPM. What is the synchronous speed and operating slip?',
      options: ['1800 RPM and 4%', '1200 RPM and 5%', '3600 RPM and 2%', '1800 RPM and 7.2%'],
      correctIndex: 0,
      explanation: 'N_s = 120f / P = (120 × 60) / 4 = 7200 / 4 = 1800 RPM. Slip s = (N_s - N_r) / N_s = (1800 - 1728) / 1800 = 72 / 1800 = 0.04 = 4.0%.'
    }
  }
];

export const CoreFoundationsView: React.FC<{
  onOpenSimulator?: () => void;
  onGoToDaily100?: () => void;
  onGoToMathBasics?: () => void;
}> = ({ onOpenSimulator, onGoToDaily100, onGoToMathBasics }) => {
  const [selectedSubject, setSelectedSubject] = useState<'ALL' | SubjectType>('ALL');
  const [activePillarId, setActivePillarId] = useState<string>('math-pillar-1');
  const [userQuizAnswers, setUserQuizAnswers] = useState<Record<string, number>>({});
  const [showQuizSolution, setShowQuizSolution] = useState<Record<string, boolean>>({});

  const filteredPillars = CORE_PILLARS.filter(
    (p) => selectedSubject === 'ALL' || p.subject === selectedSubject
  );

  const activePillar = CORE_PILLARS.find((p) => p.id === activePillarId) || CORE_PILLARS[0];

  const handleSelectQuiz = (pillarId: string, optIdx: number) => {
    setUserQuizAnswers((prev) => ({ ...prev, [pillarId]: optIdx }));
    setShowQuizSolution((prev) => ({ ...prev, [pillarId]: true }));
  };

  return (
    <div className="space-y-6">
      {/* Clean Compact Header */}
      <div className="border border-slate-800 bg-slate-900 p-5 rounded-lg flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-base font-bold text-slate-100 tracking-tight">
              Core Foundations
            </h2>
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">
              15 Principles
            </span>
          </div>
          <p className="text-slate-400 text-xs mt-1">
            Fundamental concepts and physical models across Math, ESAS, and EE
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Subject Filter Bar */}
          <div className="flex gap-1.5">
            {(['ALL', 'MATH', 'ESAS', 'EE'] as const).map((sub) => (
              <button
                key={sub}
                onClick={() => setSelectedSubject(sub)}
                className={`px-3 py-1.5 rounded text-xs font-semibold border transition-colors ${
                  selectedSubject === sub
                    ? 'bg-amber-500/15 border-amber-500 text-amber-300'
                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                {sub === 'ALL' ? 'All (15)' : `${sub} (5)`}
              </button>
            ))}
          </div>

          {onGoToMathBasics && (
            <button
              onClick={onGoToMathBasics}
              className="px-3 py-1.5 bg-slate-950 border border-amber-500/50 hover:border-amber-400 text-amber-300 text-xs font-semibold rounded"
            >
              Math from Scratch ▶
            </button>
          )}

          {onGoToDaily100 && (
            <button
              onClick={onGoToDaily100}
              className="px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold rounded"
            >
              Daily 100 Practice ▶
            </button>
          )}
        </div>
      </div>

      {/* Main 2-Column Interactive Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: List of 15 Core Pillars (4 Columns) */}
        <div className="lg:col-span-4 space-y-2">
          <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider pb-1 flex justify-between items-center">
            <span>Core Pillars</span>
            <span className="font-mono text-[10px] text-slate-400">{filteredPillars.length} in view</span>
          </div>

          <div className="space-y-1.5 max-h-[640px] overflow-y-auto pr-1">
            {filteredPillars.map((p) => {
              const isSelected = p.id === activePillar.id;
              const hasAnsweredQuiz = userQuizAnswers[p.id] !== undefined;

              return (
                <button
                  key={p.id}
                  onClick={() => setActivePillarId(p.id)}
                  className={`w-full text-left p-3 rounded-lg border text-xs transition-colors flex items-start gap-2.5 ${
                    isSelected
                      ? 'bg-amber-500/15 border-amber-500 text-amber-200 shadow-md'
                      : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <span
                    className={`w-5 h-5 rounded flex items-center justify-center font-mono text-[11px] font-bold shrink-0 mt-0.5 ${
                      isSelected
                        ? 'bg-amber-500 text-slate-950'
                        : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    {p.order}
                  </span>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className="font-mono text-[10px] px-1.5 py-0.2 rounded bg-slate-800 text-slate-300">
                        {p.subject}
                      </span>
                      {hasAnsweredQuiz && (
                        <span className="text-[10px] text-emerald-400 font-mono">✓ Tested</span>
                      )}
                    </div>
                    <div className="font-semibold text-slate-100 truncate">{p.title}</div>
                    <div className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">{p.oneLiner}</div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Deep-Dive Visual Workbench (8 Columns) */}
        <div className="lg:col-span-8 space-y-4">
          <div className="border border-slate-800 bg-slate-900 p-6 rounded-lg space-y-5">
            {/* Topic Header */}
            <div className="border-b border-slate-800 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 font-mono text-xs font-bold border border-amber-500/30">
                    Pillar #{activePillar.order} of 15 · {activePillar.subject}
                  </span>
                  <h3 className="text-lg font-bold text-slate-100">{activePillar.title}</h3>
                </div>
                <p className="text-xs text-slate-400 mt-1">{activePillar.oneLiner}</p>
              </div>
            </div>

            {/* Concept & Physical Intuition */}
            <div className="bg-slate-950 border border-slate-800 p-4 rounded-lg space-y-2 text-xs">
              <span className="text-[10px] uppercase font-mono tracking-wider text-amber-400 font-bold block">
                Core Intuition:
              </span>
              <p className="text-slate-200 leading-relaxed font-sans">{activePillar.mentalModel}</p>
              <p className="text-slate-400 leading-relaxed pt-1 border-t border-slate-900">{activePillar.whyItMatters}</p>
            </div>

            {/* Visual Drawing / Schematic Graphic */}
            <div className="bg-slate-950 border border-slate-800 p-4 rounded-lg flex flex-col items-center justify-center">
              <div className="text-[10px] uppercase font-mono text-slate-400 mb-2">Circuit &amp; Vector Schematic:</div>
              {/* Dynamic SVG depending on Pillar */}
              {activePillar.svgType === 'trig_pythagoras' && (
                <svg viewBox="0 0 320 180" className="w-72 h-40">
                  <line x1="40" y1="140" x2="220" y2="140" stroke="#f59e0b" strokeWidth="3" />
                  <text x="100" y="160" fill="#f59e0b" fontSize="12" fontFamily="JetBrains Mono" fontWeight="bold">Resistance R (Adjacent)</text>
                  <line x1="220" y1="140" x2="220" y2="30" stroke="#06b6d4" strokeWidth="3" />
                  <text x="228" y="85" fill="#06b6d4" fontSize="12" fontFamily="JetBrains Mono" fontWeight="bold">Reactance X (Opposite)</text>
                  <line x1="40" y1="140" x2="220" y2="30" stroke="#10b981" strokeWidth="3" />
                  <text x="75" y="70" fill="#10b981" fontSize="13" fontFamily="JetBrains Mono" fontWeight="bold">Impedance Z (Hypotenuse)</text>
                  <path d="M 80 140 A 40 40 0 0 0 74 118" fill="none" stroke="#e2e8f0" strokeWidth="1.5" />
                  <text x="88" y="132" fill="#cbd5e1" fontSize="11">cos(θ) = R / Z = pf</text>
                  <polyline points="205,140 205,125 220,125" fill="none" stroke="#64748b" strokeWidth="1.5" />
                </svg>
              )}

              {activePillar.svgType === 'algebra_balance' && (
                <svg viewBox="0 0 320 160" className="w-72 h-36">
                  <polygon points="160,50 150,130 170,130" fill="#475569" />
                  <line x1="50" y1="50" x2="270" y2="50" stroke="#f59e0b" strokeWidth="4" />
                  <circle cx="160" cy="50" r="5" fill="#ffffff" />
                  <rect x="70" y="20" width="50" height="30" fill="#0369a1" rx="4" />
                  <text x="85" y="40" fill="#ffffff" fontSize="11" fontFamily="JetBrains Mono" fontWeight="bold">P·R</text>
                  <rect x="200" y="20" width="50" height="30" fill="#0369a1" rx="4" />
                  <text x="215" y="40" fill="#ffffff" fontSize="11" fontFamily="JetBrains Mono" fontWeight="bold">V²</text>
                  <text x="100" y="150" fill="#e2e8f0" fontSize="11" fontFamily="JetBrains Mono">Balance: Divide both by P ⟹ R = V²/P</text>
                </svg>
              )}

              {activePillar.svgType === 'complex_plane' && (
                <svg viewBox="0 0 320 180" className="w-72 h-40">
                  <line x1="30" y1="100" x2="290" y2="100" stroke="#475569" strokeWidth="1.5" />
                  <text x="250" y="90" fill="#94a3b8" fontSize="10">Real (Re) +</text>
                  <line x1="160" y1="10" x2="160" y2="170" stroke="#475569" strokeWidth="1.5" />
                  <text x="165" y="25" fill="#94a3b8" fontSize="10">+j Imaginary</text>
                  <line x1="160" y1="100" x2="245" y2="45" stroke="#f59e0b" strokeWidth="3" />
                  <circle cx="245" cy="45" r="4" fill="#f59e0b" />
                  <text x="250" y="45" fill="#f59e0b" fontSize="11" fontFamily="JetBrains Mono" fontWeight="bold">Z = R + jX = |Z| ∠ θ</text>
                  <path d="M 195 100 A 35 35 0 0 0 190 77" fill="none" stroke="#cbd5e1" strokeWidth="1.5" />
                  <text x="195" y="85" fill="#cbd5e1" fontSize="10">θ = tan⁻¹(X/R)</text>
                </svg>
              )}

              {activePillar.svgType === 'calculus_derivative' && (
                <svg viewBox="0 0 320 180" className="w-72 h-40">
                  <line x1="40" y1="150" x2="300" y2="150" stroke="#475569" strokeWidth="2" />
                  <line x1="40" y1="150" x2="40" y2="20" stroke="#475569" strokeWidth="2" />
                  <path d="M 40 140 Q 140 130 260 30" fill="none" stroke="#06b6d4" strokeWidth="3" />
                  <line x1="100" y1="145" x2="240" y2="25" stroke="#f59e0b" strokeWidth="2.5" strokeDasharray="4 2" />
                  <circle cx="170" cy="85" r="4" fill="#f59e0b" />
                  <text x="180" y="90" fill="#f59e0b" fontSize="11" fontFamily="JetBrains Mono" fontWeight="bold">Instantaneous Slope = dq/dt = i(t)</text>
                </svg>
              )}

              {activePillar.svgType === 'calculus_integral' && (
                <svg viewBox="0 0 320 180" className="w-72 h-40">
                  <line x1="40" y1="150" x2="300" y2="150" stroke="#475569" strokeWidth="2" />
                  <line x1="40" y1="150" x2="40" y2="20" stroke="#475569" strokeWidth="2" />
                  <path d="M 50 150 L 50 80 Q 150 40 250 110 L 250 150 Z" fill="#0369a1" opacity="0.4" />
                  <path d="M 50 80 Q 150 40 250 110" fill="none" stroke="#38bdf8" strokeWidth="3" />
                  <text x="100" y="115" fill="#f8fafc" fontSize="12" fontFamily="JetBrains Mono" fontWeight="bold">Area Under Curve = ∫ p(t) dt = Total Energy</text>
                </svg>
              )}

              {activePillar.svgType === 'kcl_kvl_circuit' && (
                <svg viewBox="0 0 320 160" className="w-72 h-36">
                  <rect x="50" y="30" width="220" height="100" fill="none" stroke="#94a3b8" strokeWidth="2" />
                  <circle cx="50" cy="80" r="14" fill="#0f172a" stroke="#f59e0b" strokeWidth="2" />
                  <text x="44" y="85" fill="#f59e0b" fontSize="10" fontWeight="bold">12V</text>
                  <rect x="135" y="24" width="50" height="12" fill="#0284c7" rx="2" />
                  <text x="145" y="34" fill="#ffffff" fontSize="9" fontWeight="bold">R1 = 4Ω</text>
                  <rect x="135" y="124" width="50" height="12" fill="#0284c7" rx="2" />
                  <text x="145" y="134" fill="#ffffff" fontSize="9" fontWeight="bold">R2 = 2Ω</text>
                  <text x="90" y="85" fill="#e2e8f0" fontSize="11" fontFamily="JetBrains Mono">I = 12V / (4+2) = 2A</text>
                </svg>
              )}

              {activePillar.svgType === 'power_triangle_pillar' && (
                <svg viewBox="0 0 320 180" className="w-72 h-40">
                  <line x1="40" y1="140" x2="220" y2="140" stroke="#f59e0b" strokeWidth="3" />
                  <text x="80" y="160" fill="#f59e0b" fontSize="11" fontFamily="JetBrains Mono" fontWeight="bold">Active P = VI·cos(θ) (kW)</text>
                  <line x1="220" y1="140" x2="220" y2="30" stroke="#06b6d4" strokeWidth="3" />
                  <text x="228" y="85" fill="#06b6d4" fontSize="11" fontFamily="JetBrains Mono" fontWeight="bold">Reactive Q = VI·sin(θ) (kVAR)</text>
                  <line x1="40" y1="140" x2="220" y2="30" stroke="#a855f7" strokeWidth="3" />
                  <text x="85" y="70" fill="#c084fc" fontSize="12" fontFamily="JetBrains Mono" fontWeight="bold">Apparent S = VI (kVA)</text>
                </svg>
              )}

              {activePillar.svgType === 'three_phase_pillar' && (
                <svg viewBox="0 0 320 180" className="w-72 h-40">
                  <polygon points="160,25 60,150 260,150" fill="none" stroke="#f59e0b" strokeWidth="3" />
                  <circle cx="160" cy="25" r="4" fill="#f59e0b" />
                  <circle cx="60" cy="150" r="4" fill="#06b6d4" />
                  <circle cx="260" cy="150" r="4" fill="#10b981" />
                  <text x="145" y="18" fill="#f59e0b" fontSize="10" fontWeight="bold">Phase A</text>
                  <text x="15" y="165" fill="#06b6d4" fontSize="10" fontWeight="bold">Phase B</text>
                  <text x="265" y="165" fill="#10b981" fontSize="10" fontWeight="bold">Phase C</text>
                  <text x="95" y="100" fill="#e2e8f0" fontSize="11" fontFamily="JetBrains Mono">P_3φ = √3 · V_L · I_L · cos(θ)</text>
                </svg>
              )}

              {activePillar.svgType === 'motor_slip_pillar' && (
                <svg viewBox="0 0 320 160" className="w-72 h-36">
                  <circle cx="160" cy="80" r="60" fill="none" stroke="#334155" strokeWidth="6" />
                  <circle cx="160" cy="80" r="45" fill="#0f172a" stroke="#f59e0b" strokeWidth="3" />
                  <line x1="160" y1="80" x2="160" y2="25" stroke="#38bdf8" strokeWidth="3" strokeDasharray="3 2" />
                  <text x="165" y="35" fill="#38bdf8" fontSize="10" fontWeight="bold">Ns = 1800 RPM (Stator Field)</text>
                  <line x1="160" y1="80" x2="185" y2="40" stroke="#f59e0b" strokeWidth="3" />
                  <text x="190" y="55" fill="#f59e0b" fontSize="10" fontWeight="bold">Nr = 1728 RPM (Rotor)</text>
                  <text x="100" y="155" fill="#e2e8f0" fontSize="11" fontFamily="JetBrains Mono">Slip s = (1800-1728)/1800 = 4%</text>
                </svg>
              )}

              {/* Engineering Economics SVGs */}
              {activePillar.svgType === 'econ_compound_growth' && (
                <svg viewBox="0 0 320 160" className="w-72 h-36">
                  <line x1="40" y1="130" x2="290" y2="130" stroke="#475569" strokeWidth="2" />
                  <line x1="40" y1="130" x2="40" y2="20" stroke="#475569" strokeWidth="2" />
                  <text x="270" y="145" fill="#94a3b8" fontSize="10" fontFamily="JetBrains Mono">Time (n)</text>
                  <text x="15" y="25" fill="#94a3b8" fontSize="10" fontFamily="JetBrains Mono">Pesos</text>
                  {/* Flat Principal baseline */}
                  <line x1="40" y1="100" x2="280" y2="100" stroke="#64748b" strokeWidth="1.5" strokeDasharray="4 2" />
                  <text x="50" y="95" fill="#94a3b8" fontSize="9">Principal P (Constant)</text>
                  {/* Exponential compound curve */}
                  <path d="M 40 100 Q 180 95 280 30" fill="none" stroke="#f59e0b" strokeWidth="3" />
                  <circle cx="280" cy="30" r="4" fill="#f59e0b" />
                  <text x="180" y="45" fill="#f59e0b" fontSize="11" fontFamily="JetBrains Mono" fontWeight="bold">F = P · (1 + i)ⁿ</text>
                  <text x="45" y="115" fill="#38bdf8" fontSize="9">t=0 (Present P)</text>
                </svg>
              )}

              {activePillar.svgType === 'econ_annuity_timeline' && (
                <svg viewBox="0 0 320 160" className="w-72 h-36">
                  <line x1="30" y1="100" x2="290" y2="100" stroke="#475569" strokeWidth="2" />
                  {/* Uniform Payment Arrows A */}
                  {[70, 115, 160, 205, 250].map((x, i) => (
                    <g key={i}>
                      <line x1={x} y1="100" x2={x} y2="50" stroke="#10b981" strokeWidth="2.5" />
                      <polygon points={`${x-4},55 ${x+4},55 ${x},45`} fill="#10b981" />
                      <text x={x-5} y="40" fill="#10b981" fontSize="10" fontWeight="bold" fontFamily="JetBrains Mono">A</text>
                      <circle cx={x} cy="100" r="3" fill="#cbd5e1" />
                      <text x={x-3} y="115" fill="#94a3b8" fontSize="9" fontFamily="JetBrains Mono">{i+1}</text>
                    </g>
                  ))}
                  {/* Present Worth arrow at t=0 */}
                  <line x1="35" y1="100" x2="35" y2="140" stroke="#f59e0b" strokeWidth="3" />
                  <polygon points="31,135 39,135 35,145" fill="#f59e0b" />
                  <text x="42" y="135" fill="#f59e0b" fontSize="11" fontWeight="bold" fontFamily="JetBrains Mono">P (t=0)</text>
                  <text x="110" y="145" fill="#cbd5e1" fontSize="10" fontFamily="JetBrains Mono">P = A · [(1 - (1+i)⁻ⁿ) / i]</text>
                </svg>
              )}

              {activePillar.svgType === 'econ_depreciation_curves' && (
                <svg viewBox="0 0 320 160" className="w-72 h-36">
                  <line x1="40" y1="130" x2="280" y2="130" stroke="#475569" strokeWidth="2" />
                  <line x1="40" y1="130" x2="40" y2="20" stroke="#475569" strokeWidth="2" />
                  <text x="45" y="30" fill="#f8fafc" fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">FC (First Cost)</text>
                  {/* Salvage Value line */}
                  <line x1="40" y1="110" x2="270" y2="110" stroke="#64748b" strokeWidth="1.5" strokeDasharray="3 2" />
                  <text x="210" y="105" fill="#94a3b8" fontSize="9">SV (Salvage Floor)</text>
                  {/* Straight-line diagonal */}
                  <line x1="40" y1="35" x2="260" y2="110" stroke="#38bdf8" strokeWidth="2.5" />
                  <text x="160" y="70" fill="#38bdf8" fontSize="10" fontWeight="bold" fontFamily="JetBrains Mono">SLM (Constant d)</text>
                  {/* SOYD / DBM accelerated curve */}
                  <path d="M 40 35 Q 100 100 260 110" fill="none" stroke="#f59e0b" strokeWidth="2.5" />
                  <text x="80" y="115" fill="#f59e0b" fontSize="10" fontWeight="bold" fontFamily="JetBrains Mono">SOYD / DBM</text>
                  <text x="250" y="145" fill="#94a3b8" fontSize="9" fontFamily="JetBrains Mono">n years</text>
                </svg>
              )}

              {activePillar.svgType === 'econ_capitalized_timeline' && (
                <svg viewBox="0 0 320 160" className="w-72 h-36">
                  <line x1="30" y1="90" x2="290" y2="90" stroke="#475569" strokeWidth="2" />
                  {/* Initial Cost FC */}
                  <line x1="45" y1="90" x2="45" y2="25" stroke="#f43f5e" strokeWidth="3" />
                  <polygon points="41,30 49,30 45,20" fill="#f43f5e" />
                  <text x="30" y="15" fill="#f43f5e" fontSize="10" fontWeight="bold" fontFamily="JetBrains Mono">FC (t=0)</text>
                  {/* Annual O&M stream */}
                  <path d="M 45 75 Q 160 70 280 75" fill="none" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="2 2" />
                  <text x="110" y="65" fill="#38bdf8" fontSize="10" fontFamily="JetBrains Mono">Annual O&M forever (OM / i)</text>
                  {/* Periodic replacement spikes every k years */}
                  <line x1="120" y1="90" x2="120" y2="40" stroke="#f59e0b" strokeWidth="2.5" />
                  <text x="110" y="35" fill="#f59e0b" fontSize="9" fontWeight="bold">RC</text>
                  <text x="115" y="105" fill="#94a3b8" fontSize="9" fontFamily="JetBrains Mono">k yrs</text>
                  <line x1="195" y1="90" x2="195" y2="40" stroke="#f59e0b" strokeWidth="2.5" />
                  <text x="185" y="35" fill="#f59e0b" fontSize="9" fontWeight="bold">RC</text>
                  <text x="190" y="105" fill="#94a3b8" fontSize="9" fontFamily="JetBrains Mono">2k yrs</text>
                  <line x1="270" y1="90" x2="270" y2="40" stroke="#f59e0b" strokeWidth="2.5" />
                  <text x="260" y="35" fill="#f59e0b" fontSize="9" fontWeight="bold">RC</text>
                  <text x="265" y="105" fill="#94a3b8" fontSize="9" fontFamily="JetBrains Mono">3k yrs...</text>
                  <text x="70" y="135" fill="#e2e8f0" fontSize="10" fontFamily="JetBrains Mono">CC = FC + OM/i + RC/((1+i)ᵏ - 1)</text>
                </svg>
              )}

              {activePillar.svgType === 'econ_breakeven_chart' && (
                <svg viewBox="0 0 320 160" className="w-72 h-36">
                  <line x1="40" y1="130" x2="280" y2="130" stroke="#475569" strokeWidth="2" />
                  <line x1="40" y1="130" x2="40" y2="20" stroke="#475569" strokeWidth="2" />
                  {/* Fixed Cost horizontal line */}
                  <line x1="40" y1="95" x2="280" y2="95" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3 2" />
                  <text x="45" y="90" fill="#94a3b8" fontSize="9">Fixed Cost (FC)</text>
                  {/* Total Cost line starting at FC */}
                  <line x1="40" y1="95" x2="260" y2="40" stroke="#f43f5e" strokeWidth="2.5" />
                  <text x="200" y="35" fill="#f43f5e" fontSize="9" fontWeight="bold" fontFamily="JetBrains Mono">TC = FC + vQ</text>
                  {/* Total Revenue line starting at origin */}
                  <line x1="40" y1="130" x2="250" y2="25" stroke="#10b981" strokeWidth="2.5" />
                  <text x="180" y="20" fill="#10b981" fontSize="9" fontWeight="bold" fontFamily="JetBrains Mono">TR = p · Q</text>
                  {/* Intersection BEP */}
                  <circle cx="150" cy="67" r="4" fill="#f59e0b" />
                  <line x1="150" y1="67" x2="150" y2="130" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="2 2" />
                  <text x="135" y="145" fill="#f59e0b" fontSize="10" fontWeight="bold" fontFamily="JetBrains Mono">Q_BEP</text>
                  <text x="215" y="65" fill="#10b981" fontSize="9" fontWeight="bold">PROFIT ZONE</text>
                </svg>
              )}

              {/* Default schematic fallback for other types */}
              {!['trig_pythagoras', 'algebra_balance', 'complex_plane', 'calculus_derivative', 'calculus_integral', 'kcl_kvl_circuit', 'power_triangle_pillar', 'three_phase_pillar', 'motor_slip_pillar', 'econ_compound_growth', 'econ_annuity_timeline', 'econ_depreciation_curves', 'econ_capitalized_timeline', 'econ_breakeven_chart'].includes(activePillar.svgType) && (
                <div className="p-4 text-center font-mono text-xs text-amber-300">
                  <span className="text-slate-400 mr-2 uppercase text-[10px]">Foundational Rule:</span>
                  <CleanMath math={activePillar.masterFormula} />
                </div>
              )}
            </div>

            {/* The One Master Formula & Explanation */}
            <div className="border border-slate-800 bg-slate-950 p-4 rounded-lg space-y-2">
              <span className="text-[10px] uppercase font-mono tracking-wider text-amber-400 block font-bold">
                Governing Formula:
              </span>
              <div className="bg-slate-900 p-3 rounded border border-slate-800 overflow-x-auto">
                <CleanMath math={activePillar.masterFormula} block className="text-base text-amber-200 font-bold" />
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">{activePillar.formulaMeaning}</p>
            </div>

            {/* Board Exam Pitfall */}
            <div className="border border-rose-900/40 bg-rose-950/20 p-3.5 rounded-lg space-y-1">
              <span className="text-rose-400 font-bold text-xs uppercase font-mono block">
                Exam Pitfall:
              </span>
              <p className="text-xs text-rose-200/90 leading-relaxed">{activePillar.deadlyTrap}</p>
            </div>

            {/* Test Your Foundation: Quick Practice Interactive Check */}
            <div className="border border-slate-800 bg-slate-950 p-4 rounded-lg space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-200 uppercase tracking-wider">
                  Practice Problem
                </span>
                {userQuizAnswers[activePillar.id] !== undefined && (
                  <span className="text-xs font-mono font-bold text-emerald-400">
                    {userQuizAnswers[activePillar.id] === activePillar.practiceProblem.correctIndex
                      ? '✓ Correct Answer!'
                      : 'Review the Explanation Below'}
                  </span>
                )}
              </div>

              <div className="text-slate-200 text-xs font-medium leading-relaxed">
                {activePillar.practiceProblem.question}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                {activePillar.practiceProblem.options.map((opt, oIdx) => {
                  const isSelected = userQuizAnswers[activePillar.id] === oIdx;
                  const isCorrect = activePillar.practiceProblem.correctIndex === oIdx;
                  const hasAnswered = userQuizAnswers[activePillar.id] !== undefined;

                  let style = 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700';
                  if (hasAnswered) {
                    if (isCorrect) {
                      style = 'bg-emerald-950 border-emerald-500 text-emerald-200 font-bold';
                    } else if (isSelected) {
                      style = 'bg-rose-950 border-rose-500 text-rose-200';
                    }
                  }

                  return (
                    <button
                      key={oIdx}
                      onClick={() => handleSelectQuiz(activePillar.id, oIdx)}
                      className={`p-2.5 rounded text-left border text-xs flex items-center gap-2 transition-colors ${style}`}
                    >
                      <span className="w-5 h-5 rounded bg-slate-800 flex items-center justify-center font-mono text-[10px] shrink-0">
                        {String.fromCharCode(65 + oIdx)}
                      </span>
                      <span>{opt}</span>
                    </button>
                  );
                })}
              </div>

              {/* Immediate Step-by-Step Explanation */}
              {showQuizSolution[activePillar.id] && (
                <div className="mt-3 p-3 bg-slate-900 border border-slate-800 rounded text-xs space-y-2">
                  <span className="text-[10px] uppercase font-mono text-emerald-400 font-bold block">
                    Detailed Solution:
                  </span>
                  <div className="text-slate-300 text-xs leading-relaxed bg-slate-950 p-2.5 rounded border border-slate-800">
                    <CleanMath math={activePillar.practiceProblem.explanation} />
                  </div>
                </div>
              )}
            </div>

            {/* Quick Navigation to next pillar */}
            <div className="flex justify-between pt-3 border-t border-slate-800">
              <button
                onClick={() => {
                  const idx = filteredPillars.findIndex((p) => p.id === activePillar.id);
                  if (idx > 0) setActivePillarId(filteredPillars[idx - 1].id);
                }}
                disabled={filteredPillars.findIndex((p) => p.id === activePillar.id) === 0}
                className="px-3 py-1.5 bg-slate-950 border border-slate-800 rounded text-xs text-slate-300 hover:text-white disabled:opacity-30"
              >
                ◀ Previous Pillar
              </button>

              <button
                onClick={() => {
                  const idx = filteredPillars.findIndex((p) => p.id === activePillar.id);
                  if (idx < filteredPillars.length - 1) setActivePillarId(filteredPillars[idx + 1].id);
                }}
                disabled={filteredPillars.findIndex((p) => p.id === activePillar.id) === filteredPillars.length - 1}
                className="px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded text-xs disabled:opacity-30"
              >
                Next Pillar ▶
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
