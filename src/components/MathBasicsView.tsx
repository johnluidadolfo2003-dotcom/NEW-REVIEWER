import React, { useState } from 'react';
import { CleanMath, StackedFraction } from './CleanMath';

interface MathBasicsViewProps {
  onGoToFoundations?: () => void;
  onGoToDaily100?: () => void;
  onOpenSimulator?: (tab?: 'rlc' | 'threephase' | 'motor' | 'pec') => void;
}

export const MathBasicsView: React.FC<MathBasicsViewProps> = ({
  onGoToFoundations,
  onGoToDaily100,
  onOpenSimulator,
}) => {
  const [activeTab, setActiveTab] = useState<'secrets' | 'dissector' | 'practice'>('secrets');
  const [activeSecretId, setActiveSecretId] = useState<number>(1);
  const [activeDissectId, setActiveDissectId] = useState<string>('ohms_law');

  // Interactive slider states
  // Secret 1: Seesaw
  const [seesawX, setSeesawX] = useState<number>(3);
  // Secret 3: Power of 10
  const [powerOfTenExp, setPowerOfTenExp] = useState<number>(3);
  // Secret 4: Ladder
  const [ladderAngle, setLadderAngle] = useState<number>(36.87); // classic 3-4-5 triangle
  // Secret 6: Calculus Power Rule
  const [calculusPower, setCalculusPower] = useState<number>(3);
  const [calculusCoeff, setCalculusCoeff] = useState<number>(5);

  // Practice state
  const [userPracticeAnswers, setUserPracticeAnswers] = useState<Record<number, number>>({});
  const [showPracticeSolutions, setShowPracticeSolutions] = useState<Record<number, boolean>>({});

  const mathSecrets = [
    {
      id: 1,
      name: '1. The Seesaw Rule',
      tagline: 'Balancing equations & moving numbers across =',
      analogy: 'The equals sign (=) is a balanced seesaw. Whatever you do to one side, you must do to the other to keep it level.',
      keyRule: 'To cancel an addition (+), subtract. To cancel a multiplication (·), divide. Do it to BOTH sides.',
    },
    {
      id: 2,
      name: '2. Fractions without Fear',
      tagline: 'Numerator over Denominator (no slashes)',
      analogy: 'The top number is what you have (pizza slices). The bottom number is how many people share it.',
      keyRule: 'If the bottom gets bigger, the result gets smaller. If the bottom gets close to zero, the result explodes to infinity (Short Circuit)!',
    },
    {
      id: 3,
      name: '3. Powers & Exponents',
      tagline: 'x², x³, 10⁻⁶ (micro), and natural decay e⁻ᵗ',
      analogy: 'An exponent is shorthand for repeated multiplication. A negative exponent is shorthand for repeated division.',
      keyRule: '10³ = 1,000 (kilo). 10⁻³ = 0.001 (milli). 10⁻⁶ = 0.000001 (micro). e⁻ᵗ means something is naturally calming down over time.',
    },
    {
      id: 4,
      name: '4. The Ladder on the Wall',
      tagline: 'Trigonometry (sin, cos, tan) & Power Factor',
      analogy: 'Imagine a ladder leaning against a wall. The ladder is the Hypotenuse (Z). The floor is Cosine (Real Work R). The wall is Sine (Reactance X).',
      keyRule: 'cos(θ) = Floor / Ladder = R / Z = Power Factor. If the ladder lies flat on the floor, cos(0°) = 1.0 (100% efficient!).',
    },
    {
      id: 5,
      name: '5. The Secret of "j"',
      tagline: 'Imaginary numbers are just 90° steering turns',
      analogy: 'j is NOT imaginary! In electrical engineering, multiplying by j is simply a steering command to turn 90° counter-clockwise.',
      keyRule: '1 = East (Resistor). j = North (Inductor). -j = South (Capacitor). Z = R + jX means walk R forward, then turn left 90° and walk X.',
    },
    {
      id: 6,
      name: '6. Calculus in 60 Seconds',
      tagline: 'Derivatives are Speedometers, Integrals are Odometers',
      analogy: 'Derivative tells you how fast you are moving right this instant. Integral adds up all the ground you covered.',
      keyRule: 'Power Rule: To take derivative of tⁿ, kick the power down to the front and subtract 1 from the power: d/dt(t³) = 3t².',
    },
    {
      id: 7,
      name: '7. Logarithms & Decibels',
      tagline: 'The stereo volume knob scale',
      analogy: 'A logarithm answers: "How many times do I multiply 10 by itself to get this huge number?"',
      keyRule: 'log₁₀(100) = 2. log₁₀(1,000,000) = 6. Logarithms turn massive power numbers into easy human-sized numbers (Decibels dB).',
    },
  ];

  const formulaDissections = [
    {
      id: 'ohms_law',
      title: 'Ohm\'s Law & Power',
      rawFormula: 'I = V / R,   P = V · I = V² / R = I² · R',
      variables: [
        { sym: 'V', name: 'Voltage', meaning: 'The electrical pressure pushing electrons (measured in Volts)' },
        { sym: 'I', name: 'Current', meaning: 'The flow rate of electrons passing by each second (measured in Amperes)' },
        { sym: 'R', name: 'Resistance', meaning: 'The friction in the pipe opposing the flow (measured in Ohms Ω)' },
        { sym: 'P', name: 'Power', meaning: 'The energy converted into light or heat every second (measured in Watts)' },
      ],
      howToRearrange: [
        'Starting with: V = I · R',
        'Goal 1: Find Current I ⟹ Divide both sides by R ⟹ I = V / R',
        'Goal 2: Find Resistance R ⟹ Divide both sides by I ⟹ R = V / I',
        'Goal 3: Find Voltage from Power: P = V² / R ⟹ Multiply by R: P · R = V² ⟹ Take square root: V = √(P · R)',
      ],
      concreteExample: {
        scenario: 'A Philippine electric fan is plugged into 230 V and has an internal resistance of 46 Ω.',
        steps: [
          'Step 1: Write the formula: I = V / R',
          'Step 2: Substitute the known numbers: I = 230 / 46',
          'Step 3: Divide 230 by 46: I = 5.0 Amperes',
          'Step 4: Calculate Power: P = V · I = 230 V × 5 A = 1,150 Watts (1.15 kW)',
        ],
        answer: 'Current = 5 A, Power = 1,150 W',
      },
    },
    {
      id: 'quadratic',
      title: 'Quadratic Formula & Circuit Roots',
      rawFormula: 'x = (-b ± √(b² - 4ac)) / (2a)',
      variables: [
        { sym: 'a', name: 'Coefficient of x²', meaning: 'How wide or narrow the bowl opens' },
        { sym: 'b', name: 'Coefficient of x', meaning: 'Tilts the parabola left or right' },
        { sym: 'c', name: 'Constant term', meaning: 'Where the curve crosses the vertical axis' },
        { sym: 'b² - 4ac', name: 'Discriminant (Δ)', meaning: 'Tells you if roots are real (overdamped), repeated (critically damped), or complex (oscillating ringing)' },
      ],
      howToRearrange: [
        'Always make sure one side is ZERO before identifying a, b, c: ax² + bx + c = 0',
        'Step A: Calculate the inside square root first: Δ = b² - 4ac',
        'Step B: Take the square root of Δ: √Δ',
        'Step C: Notice the ± symbol: You will get TWO answers! One using (+), one using (-)',
        'Step D: Divide the entire top by (2 · a)',
      ],
      concreteExample: {
        scenario: 'Find the two roots of x² - 6x + 8 = 0.',
        steps: [
          'Step 1: Identify: a = 1, b = -6, c = 8',
          'Step 2: Inside of square root: b² - 4ac = (-6)² - 4(1)(8) = 36 - 32 = 4',
          'Step 3: Square root of 4 is 2 (since 2 × 2 = 4)',
          'Step 4: Notice -b when b = -6 becomes positive 6: -(-6) = +6',
          'Step 5: Root 1 (use +): x₁ = (6 + 2) / (2 · 1) = 8 / 2 = 4',
          'Step 6: Root 2 (use -): x₂ = (6 - 2) / (2 · 1) = 4 / 2 = 2',
        ],
        answer: 'x = 4 and x = 2 (Both are real numbers because Δ = 4 > 0)',
      },
    },
    {
      id: 'ac_impedance',
      title: 'AC Series Impedance & Power Factor',
      rawFormula: '|Z| = √(R² + X²),   Power Factor (pf) = cos(θ) = R / |Z|',
      variables: [
        { sym: 'R', name: 'Resistance', meaning: 'The horizontal floor vector that does real useful work (Ohms Ω)' },
        { sym: 'X', name: 'Net Reactance', meaning: 'The vertical wall vector: X = X_L - X_C (Ohms Ω)' },
        { sym: '|Z|', name: 'Total Impedance', meaning: 'The diagonal ladder vector opposing the total current (Ohms Ω)' },
        { sym: 'pf', name: 'Power Factor', meaning: 'Efficiency ratio between 0.0 and 1.0 (Higher is better!)' },
      ],
      howToRearrange: [
        'Never add R + X directly! Because they are at 90° right angles, use Pythagoras: Z² = R² + X²',
        'To find |Z|: Square R, square X, add them, then take the square root.',
        'To find Power Factor: Divide the horizontal floor (R) by the ladder (|Z|): pf = R / |Z|.',
        'If R = 0, pf = 0. If X = 0 (pure resistance), pf = 1.0 (Unity power factor).',
      ],
      concreteExample: {
        scenario: 'An electric motor has a winding resistance of 30 Ω and an inductive reactance of 40 Ω.',
        steps: [
          'Step 1: Square R: 30² = 30 × 30 = 900',
          'Step 2: Square X: 40² = 40 × 40 = 1,600',
          'Step 3: Add them: 900 + 1,600 = 2,500',
          'Step 4: Take the square root: |Z| = √2,500 = 50 Ω',
          'Step 5: Calculate power factor: pf = R / |Z| = 30 / 50 = 0.60 Lagging',
        ],
        answer: 'Total Impedance |Z| = 50 Ω, Power Factor = 0.60 Lagging',
      },
    },
    {
      id: 'sync_speed',
      title: 'Motor Synchronous Speed & Slip',
      rawFormula: 'N_s = (120 · f) / P,   Slip s = (N_s - N_r) / N_s',
      variables: [
        { sym: 'N_s', name: 'Synchronous Speed', meaning: 'The speed of the rotating magnetic field inside the stator (RPM)' },
        { sym: 'f', name: 'AC Frequency', meaning: 'Frequency of the power grid (60 Hz in the Philippines)' },
        { sym: 'P', name: 'Magnetic Poles', meaning: 'Number of magnetic poles built into the motor (always an even number: 2, 4, 6, 8)' },
        { sym: 'N_r', name: 'Rotor Speed', meaning: 'The actual physical speed of the spinning motor shaft (RPM)' },
        { sym: 's', name: 'Slip', meaning: 'How much the physical rotor slips behind the magnetic field (usually 2% to 5%)' },
      ],
      howToRearrange: [
        'In the Philippines, frequency f is almost always 60 Hz.',
        'Therefore, the top is constant: 120 × 60 = 7,200!',
        'So: N_s = 7,200 / P. If 2 poles ⟹ 7,200/2 = 3,600 RPM. If 4 poles ⟹ 7,200/4 = 1,800 RPM.',
        'To find rotor speed N_r from slip: N_r = N_s · (1 - s).',
      ],
      concreteExample: {
        scenario: 'A 4-pole 60 Hz induction motor has a nameplate shaft speed of 1,728 RPM. What is its synchronous speed and slip?',
        steps: [
          'Step 1: Calculate N_s = (120 × 60) / 4 = 7,200 / 4 = 1,800 RPM',
          'Step 2: Find speed difference: N_s - N_r = 1,800 - 1,728 = 72 RPM',
          'Step 3: Divide by synchronous speed: s = 72 / 1,800 = 0.04 = 4.0%',
        ],
        answer: 'Synchronous Speed = 1,800 RPM, Slip = 4.0%',
      },
    },
    {
      id: 'transformer_ratio',
      title: 'Transformer Turns & Voltage Ratio',
      rawFormula: 'V_1 / V_2 = N_1 / N_2 = I_2 / I_1',
      variables: [
        { sym: 'V_1, V_2', name: 'Primary & Secondary Voltage', meaning: 'Input and output electrical pressure' },
        { sym: 'N_1, N_2', name: 'Primary & Secondary Turns', meaning: 'Number of copper wire loops wound on the iron core' },
        { sym: 'I_1, I_2', name: 'Primary & Secondary Current', meaning: 'Notice current is INVERTED! High voltage means low current.' },
      ],
      howToRearrange: [
        'To find secondary voltage V_2: Cross multiply ⟹ V_2 = V_1 · (N_2 / N_1)',
        'If secondary has FEWER turns (N_2 < N_1), voltage steps DOWN.',
        'If secondary has MORE turns (N_2 > N_1), voltage steps UP.',
        'Because energy cannot be created: Power In = Power Out ⟹ V_1 · I_1 = V_2 · I_2.',
      ],
      concreteExample: {
        scenario: 'A pole transformer converts 7,200 V primary distribution line down to 240 V household supply. What is the turns ratio?',
        steps: [
          'Step 1: Turns ratio a = V_1 / V_2 = 7,200 / 240',
          'Step 2: Simplify: 7,200 / 240 = 30',
          'Step 3: If secondary current is 50 A, primary current is I_1 = I_2 / 30 = 50 / 30 = 1.67 A',
        ],
        answer: 'Turns Ratio = 30 to 1 (Step Down)',
      },
    },
  ];

  const practiceQuestions = [
    {
      id: 1,
      question: 'In the formula V = I · R, if V = 120 Volts and R = 24 Ohms, what is Current I?',
      options: ['2,880 A', '5.0 A', '0.20 A', '96 A'],
      correctIdx: 1,
      explanation: 'Isolate I by dividing both sides by R: I = V / R = 120 / 24 = 5.0 Amperes.',
    },
    {
      id: 2,
      question: 'A right triangle has horizontal side R = 6 Ω and vertical side X = 8 Ω. What is the hypotenuse |Z|?',
      options: ['14 Ω', '10 Ω', '48 Ω', '2 Ω'],
      correctIdx: 1,
      explanation: 'Use Pythagoras: |Z| = √(6² + 8²) = √(36 + 64) = √100 = 10 Ω.',
    },
    {
      id: 3,
      question: 'What is 10⁻³ multiplied by 1,000?',
      options: ['1.0', '1,000,000', '0.001', '100'],
      correctIdx: 0,
      explanation: '10⁻³ is 0.001 (one thousandth). Multiplying 0.001 × 1,000 equals exactly 1.0 (They cancel each other out!).',
    },
    {
      id: 4,
      question: 'Using the Power Rule in calculus, what is the derivative d/dt of 4t²?',
      options: ['8t', '4t', '8t²', '16t'],
      correctIdx: 0,
      explanation: 'Kick the power 2 down to multiply the coefficient: 4 × 2 = 8. Subtract 1 from the power: t²⁻¹ = t¹. Result: 8t.',
    },
    {
      id: 5,
      question: 'If power factor pf = cos(θ) = R / Z, and R = 80 Ω while Z = 100 Ω, what is the power factor?',
      options: ['1.25', '0.80', '180', '8,000'],
      correctIdx: 1,
      explanation: 'pf = 80 / 100 = 0.80 (80% efficiency).',
    },
  ];

  const handleSelectPractice = (qId: number, oIdx: number) => {
    setUserPracticeAnswers((prev) => ({ ...prev, [qId]: oIdx }));
    setShowPracticeSolutions((prev) => ({ ...prev, [qId]: true }));
  };

  const selectedSecret = mathSecrets.find((s) => s.id === activeSecretId) || mathSecrets[0];
  const selectedDissect = formulaDissections.find((d) => d.id === activeDissectId) || formulaDissections[0];

  return (
    <div className="space-y-6">
      {/* Top Header Banner */}
      <div className="border border-slate-800 bg-slate-900 p-5 rounded-lg space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-base font-bold text-slate-100 tracking-tight">
                Math from Scratch: The Intuitive Guide
              </h2>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/30">
                Zero-Level Primer
              </span>
            </div>
            <p className="text-slate-400 text-xs mt-1">
              Struggling with the math? Here is every engineering math principle explained without skipped steps, using real physical analogies.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {onGoToFoundations && (
              <button
                onClick={onGoToFoundations}
                className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium rounded transition-colors"
              >
                15 Core Pillars ▶
              </button>
            )}
            {onGoToDaily100 && (
              <button
                onClick={onGoToDaily100}
                className="px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold rounded transition-colors"
              >
                Daily 100 Practice ▶
              </button>
            )}
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800">
          <button
            onClick={() => setActiveTab('secrets')}
            className={`px-3 py-1.5 rounded text-xs font-semibold transition-colors ${
              activeTab === 'secrets'
                ? 'bg-amber-500 text-slate-950 font-bold'
                : 'bg-slate-950 border border-slate-800 text-slate-300 hover:bg-slate-800'
            }`}
          >
            1. Seven Core Math Secrets
          </button>
          <button
            onClick={() => setActiveTab('dissector')}
            className={`px-3 py-1.5 rounded text-xs font-semibold transition-colors ${
              activeTab === 'dissector'
                ? 'bg-amber-500 text-slate-950 font-bold'
                : 'bg-slate-950 border border-slate-800 text-slate-300 hover:bg-slate-800'
            }`}
          >
            2. Dissect Any Formula (No Skipped Steps)
          </button>
          <button
            onClick={() => setActiveTab('practice')}
            className={`px-3 py-1.5 rounded text-xs font-semibold transition-colors ${
              activeTab === 'practice'
                ? 'bg-amber-500 text-slate-950 font-bold'
                : 'bg-slate-950 border border-slate-800 text-slate-300 hover:bg-slate-800'
            }`}
          >
            3. Math Confidence Checks
          </button>
        </div>
      </div>

      {/* ===================== TAB 1: SEVEN SECRETS ===================== */}
      {activeTab === 'secrets' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left: Secrets Selector Menu */}
          <div className="lg:col-span-4 space-y-2">
            <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider block pb-1">
              Core Math Secrets
            </span>
            <div className="space-y-1.5">
              {mathSecrets.map((secret) => {
                const isActive = secret.id === activeSecretId;
                return (
                  <button
                    key={secret.id}
                    onClick={() => setActiveSecretId(secret.id)}
                    className={`w-full text-left p-3 rounded-lg border text-xs transition-colors flex items-start gap-2.5 ${
                      isActive
                        ? 'bg-amber-500/15 border-amber-500 text-amber-200 shadow-sm'
                        : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <span
                      className={`w-5 h-5 rounded flex items-center justify-center font-mono text-[10px] font-bold shrink-0 mt-0.5 ${
                        isActive ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      {secret.id}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-slate-100 truncate">{secret.name}</div>
                      <div className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">{secret.tagline}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Secret Interactive Deep Dive */}
          <div className="lg:col-span-8 space-y-4">
            <div className="border border-slate-800 bg-slate-900 p-6 rounded-lg space-y-5">
              <div>
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/30">
                  Secret #{selectedSecret.id}
                </span>
                <h3 className="text-base font-bold text-slate-100 mt-1">{selectedSecret.name}</h3>
                <p className="text-xs text-amber-300/90 mt-0.5">{selectedSecret.tagline}</p>
              </div>

              {/* Intuitive Analogy */}
              <div className="bg-slate-950 border border-slate-800 p-4 rounded-lg space-y-1.5 text-xs">
                <span className="text-[10px] uppercase font-mono tracking-wider text-cyan-400 font-bold block">
                  The Plain-English Analogy:
                </span>
                <p className="text-slate-200 leading-relaxed font-sans">{selectedSecret.analogy}</p>
              </div>

              {/* The Golden Rule */}
              <div className="bg-slate-950 border border-slate-800 p-4 rounded-lg space-y-1.5 text-xs">
                <span className="text-[10px] uppercase font-mono tracking-wider text-emerald-400 font-bold block">
                  The Golden Rule:
                </span>
                <p className="text-slate-200 leading-relaxed font-sans">{selectedSecret.keyRule}</p>
              </div>

              {/* ================= INTERACTIVE DEMOS FOR EACH SECRET ================= */}
              {/* Secret 1 Interactive Demo: Seesaw */}
              {selectedSecret.id === 1 && (
                <div className="bg-slate-950 border border-slate-800 p-4 rounded-lg space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-200">Interactive Seesaw: 2x + 4 = 10</span>
                    <span className="font-mono text-amber-400 text-xs">Slider x = {seesawX}</span>
                  </div>

                  <input
                    type="range"
                    min="1"
                    max="6"
                    step="0.5"
                    value={seesawX}
                    onChange={(e) => setSeesawX(Number(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer"
                  />

                  {/* SVG Seesaw Drawing */}
                  <div className="flex justify-center py-2">
                    <svg viewBox="0 0 320 120" className="w-80 h-32">
                      {/* Fulcrum Triangle */}
                      <polygon points="160,80 145,115 175,115" fill="#475569" />
                      {/* Seesaw Beam */}
                      {/* Tilt angle based on difference between 2x+4 and 10 */}
                      {(() => {
                        const leftWeight = 2 * seesawX + 4;
                        const rightWeight = 10;
                        const diff = leftWeight - rightWeight;
                        const angleDeg = Math.max(-15, Math.min(15, diff * 3));
                        return (
                          <g transform={`rotate(${angleDeg}, 160, 80)`}>
                            <line x1="30" y1="80" x2="290" y2="80" stroke="#f59e0b" strokeWidth="5" strokeLinecap="round" />
                            {/* Left Tray */}
                            <rect x="40" y="50" width="55" height="30" fill="#0369a1" rx="4" />
                            <text x="67" y="70" fill="#ffffff" fontSize="11" fontFamily="JetBrains Mono" textAnchor="middle" fontWeight="bold">
                              {leftWeight}
                            </text>
                            {/* Right Tray */}
                            <rect x="225" y="50" width="55" height="30" fill="#10b981" rx="4" />
                            <text x="252" y="70" fill="#ffffff" fontSize="11" fontFamily="JetBrains Mono" textAnchor="middle" fontWeight="bold">
                              10
                            </text>
                          </g>
                        );
                      })()}
                    </svg>
                  </div>

                  <div className="text-center text-xs font-mono">
                    {2 * seesawX + 4 === 10 ? (
                      <span className="text-emerald-400 font-bold">
                        PERFECTLY BALANCED! 2({seesawX}) + 4 = 10. Therefore x = {seesawX}.
                      </span>
                    ) : 2 * seesawX + 4 > 10 ? (
                      <span className="text-rose-400">
                        Left side is too heavy ({2 * seesawX + 4} &gt; 10)! Reduce x.
                      </span>
                    ) : (
                      <span className="text-cyan-400">
                        Left side is too light ({2 * seesawX + 4} &lt; 10)! Increase x.
                      </span>
                    )}
                  </div>
                </div>
              )}

              {/* Secret 3 Interactive Demo: Powers of 10 */}
              {selectedSecret.id === 3 && (
                <div className="bg-slate-950 border border-slate-800 p-4 rounded-lg space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-200">Engineering Metric Scale: 10ⁿ</span>
                    <span className="font-mono text-amber-400 text-xs">Exponent n = {powerOfTenExp}</span>
                  </div>

                  <input
                    type="range"
                    min="-6"
                    max="6"
                    step="3"
                    value={powerOfTenExp}
                    onChange={(e) => setPowerOfTenExp(Number(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer"
                  />

                  <div className="p-3 bg-slate-900 border border-slate-800 rounded font-mono text-xs flex justify-between items-center">
                    <div>
                      <span className="text-slate-400 text-[10px] block">Prefix:</span>
                      <span className="text-amber-400 font-bold text-sm">
                        {powerOfTenExp === 6 && 'Mega (M) = 1,000,000'}
                        {powerOfTenExp === 3 && 'Kilo (k) = 1,000'}
                        {powerOfTenExp === 0 && 'Base Unit = 1'}
                        {powerOfTenExp === -3 && 'Milli (m) = 0.001'}
                        {powerOfTenExp === -6 && 'Micro (μ) = 0.000001'}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-slate-400 text-[10px] block">Common Electrical Use:</span>
                      <span className="text-cyan-300 text-xs">
                        {powerOfTenExp === 6 && 'MegaWatts (MW), MegaOhms (MΩ)'}
                        {powerOfTenExp === 3 && 'kiloWatts (kW), kiloVolts (kV)'}
                        {powerOfTenExp === 0 && 'Volts, Amperes, Watts'}
                        {powerOfTenExp === -3 && 'milliAmps (mA), milliHenries (mH)'}
                        {powerOfTenExp === -6 && 'microFarads (μF), microAmps (μA)'}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Secret 4 Interactive Demo: Ladder */}
              {selectedSecret.id === 4 && (
                <div className="bg-slate-950 border border-slate-800 p-4 rounded-lg space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-200">Adjust Ladder Angle (Power Triangle)</span>
                    <span className="font-mono text-amber-400 text-xs">Angle θ = {ladderAngle.toFixed(1)}°</span>
                  </div>

                  <input
                    type="range"
                    min="5"
                    max="85"
                    step="1"
                    value={ladderAngle}
                    onChange={(e) => setLadderAngle(Number(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer"
                  />

                  {/* Calculations */}
                  {(() => {
                    const rad = (ladderAngle * Math.PI) / 180;
                    const cosVal = Math.cos(rad);
                    const sinVal = Math.sin(rad);
                    const hypotenuse = 100;
                    const floorLength = hypotenuse * cosVal;
                    const wallHeight = hypotenuse * sinVal;

                    return (
                      <div className="space-y-3">
                        <div className="flex justify-center py-1">
                          <svg viewBox="0 0 320 140" className="w-72 h-32">
                            {/* Wall & Ground */}
                            <line x1="20" y1="120" x2="280" y2="120" stroke="#475569" strokeWidth="2" />
                            <line x1="240" y1="120" x2="240" y2="15" stroke="#475569" strokeWidth="2" />
                            {/* Floor (R) */}
                            <line x1="40" y1="120" x2="240" y2="120" stroke="#f59e0b" strokeWidth="3.5" />
                            <text x="140" y="135" fill="#f59e0b" fontSize="11" fontFamily="JetBrains Mono" textAnchor="middle" fontWeight="bold">
                              Floor (R) = {floorLength.toFixed(0)}
                            </text>
                            {/* Wall (X) */}
                            <line x1="240" y1="120" x2="240" y2={120 - wallHeight} stroke="#06b6d4" strokeWidth="3.5" />
                            <text x="250" y={120 - wallHeight / 2} fill="#06b6d4" fontSize="11" fontFamily="JetBrains Mono" fontWeight="bold">
                              Wall (X) = {wallHeight.toFixed(0)}
                            </text>
                            {/* Ladder (Z) */}
                            <line x1="40" y1="120" x2="240" y2={120 - wallHeight} stroke="#10b981" strokeWidth="4" />
                            <text x="120" y={115 - wallHeight / 2} fill="#10b981" fontSize="12" fontFamily="JetBrains Mono" fontWeight="bold">
                              Ladder (Z) = 100
                            </text>
                          </svg>
                        </div>

                        <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                          <div className="bg-slate-900 p-2 rounded border border-slate-800 text-center">
                            <span className="text-slate-400 text-[10px] block">Power Factor cos(θ):</span>
                            <span className="text-amber-400 font-bold text-sm">{cosVal.toFixed(2)}</span>
                          </div>
                          <div className="bg-slate-900 p-2 rounded border border-slate-800 text-center">
                            <span className="text-slate-400 text-[10px] block">Reactive Ratio sin(θ):</span>
                            <span className="text-cyan-400 font-bold text-sm">{sinVal.toFixed(2)}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })()}
                </div>
              )}

              {/* Secret 6 Interactive Demo: Calculus Power Rule */}
              {selectedSecret.id === 6 && (
                <div className="bg-slate-950 border border-slate-800 p-4 rounded-lg space-y-3">
                  <div className="text-xs font-semibold text-slate-200">
                    Calculus Power Rule Machine: d/dt (c · tⁿ)
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <span className="text-slate-400 block mb-1">Coefficient c: {calculusCoeff}</span>
                      <input
                        type="range"
                        min="1"
                        max="10"
                        value={calculusCoeff}
                        onChange={(e) => setCalculusCoeff(Number(e.target.value))}
                        className="w-full accent-amber-500 cursor-pointer"
                      />
                    </div>
                    <div>
                      <span className="text-slate-400 block mb-1">Power n: {calculusPower}</span>
                      <input
                        type="range"
                        min="1"
                        max="5"
                        value={calculusPower}
                        onChange={(e) => setCalculusPower(Number(e.target.value))}
                        className="w-full accent-amber-500 cursor-pointer"
                      />
                    </div>
                  </div>

                  <div className="bg-slate-900 p-3 rounded border border-slate-800 space-y-2 text-xs font-mono">
                    <div className="flex items-center gap-2">
                      <span className="text-slate-400">Original Function:</span>
                      <span className="text-slate-100 font-bold text-sm">
                        y(t) = {calculusCoeff}t<sup className="text-amber-400">{calculusPower}</sup>
                      </span>
                    </div>

                    <div className="flex items-center gap-2 pt-1 border-t border-slate-800">
                      <span className="text-slate-400">Step 1 (Kick down power):</span>
                      <span className="text-amber-300">
                        {calculusCoeff} × {calculusPower} = {calculusCoeff * calculusPower}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-slate-400">Step 2 (Subtract 1 from power):</span>
                      <span className="text-cyan-300">
                        {calculusPower} - 1 = {calculusPower - 1}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 pt-1 border-t border-slate-800">
                      <span className="text-emerald-400 font-bold">Derivative dy/dt:</span>
                      <span className="text-emerald-400 font-bold text-sm">
                        {calculusCoeff * calculusPower}t{calculusPower - 1 > 0 ? (
                          <sup>{calculusPower - 1}</sup>
                        ) : (
                          ''
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ===================== TAB 2: FORMULA DISSECTOR ===================== */}
      {activeTab === 'dissector' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left: Dissected Formulas List */}
          <div className="lg:col-span-4 space-y-2">
            <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider block pb-1">
              Select Formula to Dissect
            </span>
            <div className="space-y-1.5">
              {formulaDissections.map((d) => {
                const isActive = d.id === activeDissectId;
                return (
                  <button
                    key={d.id}
                    onClick={() => setActiveDissectId(d.id)}
                    className={`w-full text-left p-3 rounded-lg border text-xs transition-colors ${
                      isActive
                        ? 'bg-amber-500/15 border-amber-500 text-amber-200 font-semibold shadow-sm'
                        : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div className="font-semibold text-slate-100">{d.title}</div>
                    <div className="text-[11px] text-slate-400 font-mono truncate mt-0.5">{d.rawFormula}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Detailed Step-by-Step Breakdown */}
          <div className="lg:col-span-8 space-y-4">
            <div className="border border-slate-800 bg-slate-900 p-6 rounded-lg space-y-5">
              <div>
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/30">
                  Formula Dissection
                </span>
                <h3 className="text-base font-bold text-slate-100 mt-1">{selectedDissect.title}</h3>
              </div>

              {/* Master Formula Box */}
              <div className="bg-slate-950 border border-slate-800 p-4 rounded-lg space-y-1">
                <span className="text-[10px] uppercase font-mono tracking-wider text-amber-400 font-bold block">
                  Governing Equation:
                </span>
                <div className="py-1 overflow-x-auto">
                  <CleanMath math={selectedDissect.rawFormula} block className="text-amber-300 font-bold text-sm sm:text-base" />
                </div>
              </div>

              {/* Symbol Meanings */}
              <div className="space-y-2">
                <span className="text-xs font-semibold text-slate-200 uppercase tracking-wider block">
                  What Each Letter Means:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {selectedDissect.variables.map((v, idx) => (
                    <div key={idx} className="bg-slate-950 border border-slate-800 p-2.5 rounded">
                      <div className="flex items-center gap-1.5 font-mono">
                        <span className="text-amber-400 font-bold">{v.sym}</span>
                        <span className="text-slate-300 font-semibold">({v.name})</span>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-0.5">{v.meaning}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* How to Rearrange */}
              <div className="bg-slate-950 border border-slate-800 p-4 rounded-lg space-y-2 text-xs">
                <span className="text-[10px] uppercase font-mono tracking-wider text-cyan-400 font-bold block">
                  How to Rearrange (No Skipped Steps):
                </span>
                <div className="space-y-1.5 pl-2 border-l border-slate-800 font-mono text-[11px] text-slate-300">
                  {selectedDissect.howToRearrange.map((r, rIdx) => (
                    <div key={rIdx} className="leading-relaxed">
                      {r}
                    </div>
                  ))}
                </div>
              </div>

              {/* Concrete Numbers Walkthrough */}
              <div className="bg-slate-950 border border-slate-800 p-4 rounded-lg space-y-2 text-xs">
                <span className="text-[10px] uppercase font-mono tracking-wider text-emerald-400 font-bold block">
                  Real-World Calculation Walkthrough:
                </span>
                <p className="text-slate-200 font-medium">{selectedDissect.concreteExample.scenario}</p>
                <div className="space-y-1.5 pl-2 border-l border-slate-800 font-mono text-[11px] text-slate-300">
                  {selectedDissect.concreteExample.steps.map((st, sIdx) => (
                    <div key={sIdx}>{st}</div>
                  ))}
                </div>
                <div className="pt-2 text-emerald-400 font-mono font-bold text-xs">
                  Final Result: {selectedDissect.concreteExample.answer}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ===================== TAB 3: PRACTICE CONFIDENCE ===================== */}
      {activeTab === 'practice' && (
        <div className="space-y-4">
          <div className="border border-slate-800 bg-slate-900 p-4 rounded-lg flex items-center justify-between text-xs">
            <span className="font-semibold text-slate-300">
              Foundational Math Checks: Test Your Arithmetic &amp; Rearranging
            </span>
            <span className="text-amber-400 font-mono">
              {Object.keys(userPracticeAnswers).length} of {practiceQuestions.length} Answered
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {practiceQuestions.map((q) => {
              const userAnswer = userPracticeAnswers[q.id];
              const isAnswered = userAnswer !== undefined;
              const isCorrect = isAnswered && userAnswer === q.correctIdx;

              return (
                <div
                  key={q.id}
                  className={`border rounded-lg p-4 space-y-3 bg-slate-900 ${
                    isAnswered
                      ? isCorrect
                        ? 'border-emerald-500/50'
                        : 'border-rose-500/50'
                      : 'border-slate-800'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-amber-400 font-bold">Check #{q.id}</span>
                    {isAnswered && (
                      <span className={`font-mono font-bold text-[11px] ${isCorrect ? 'text-emerald-400' : 'text-rose-400'}`}>
                        {isCorrect ? '✓ Correct!' : '✗ See Explanation Below'}
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-slate-200 font-medium leading-relaxed">{q.question}</p>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {q.options.map((opt, oIdx) => {
                      const isSelected = userAnswer === oIdx;
                      let btnStyle = 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700';

                      if (isAnswered) {
                        if (oIdx === q.correctIdx) {
                          btnStyle = 'bg-emerald-950 border-emerald-500 text-emerald-200 font-bold';
                        } else if (isSelected) {
                          btnStyle = 'bg-rose-950 border-rose-500 text-rose-300';
                        }
                      }

                      return (
                        <button
                          key={oIdx}
                          onClick={() => handleSelectPractice(q.id, oIdx)}
                          className={`p-2 rounded border text-left font-mono transition-colors ${btnStyle}`}
                        >
                          <span className="text-slate-500 mr-1.5">{String.fromCharCode(65 + oIdx)}.</span>
                          {opt}
                        </button>
                      );
                    })}
                  </div>

                  {showPracticeSolutions[q.id] && (
                    <div className="p-2.5 bg-slate-950 border border-slate-800 rounded text-xs space-y-1">
                      <span className="text-[10px] uppercase font-mono text-amber-400 font-bold block">
                        Step-by-Step Breakdown:
                      </span>
                      <p className="text-slate-300 text-[11px] leading-relaxed font-mono">{q.explanation}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
