import React, { useState } from 'react';
import { SubjectType } from '../types';

interface FormulaCard {
  subject: SubjectType;
  category: string;
  name: string;
  formula: string;
  variables: string;
  tip: string;
}

const CHEAT_SHEET_FORMULAS: FormulaCard[] = [
  // MATHEMATICS
  {
    subject: 'MATH',
    category: 'Algebra & Roots',
    name: 'Quadratic Formula & Roots Sum/Product',
    formula: 'x = (-b ± √(b² - 4ac)) / (2a),  x₁ + x₂ = -b/a,  x₁·x₂ = c/a',
    variables: 'a, b, c: coefficients of ax² + bx + c = 0',
    tip: 'If discriminant b² - 4ac = 0, roots are real and equal. In circuits, this marks critical damping!'
  },
  {
    subject: 'MATH',
    category: 'Trigonometry',
    name: 'Fundamental Identities & Polar Form',
    formula: 'sin²θ + cos²θ = 1,  Z = R + jX = √(R² + X²) ∠ arctan(X/R)',
    variables: 'R: real resistance, X: net reactance, Z: impedance',
    tip: 'In AC circuits, cosine gives active power, sine gives reactive VARs.'
  },
  {
    subject: 'MATH',
    category: 'Calculus',
    name: 'Derivatives of Motion & Transients',
    formula: 'i(t) = dq/dt,  v_L(t) = L (di/dt),  i_C(t) = C (dv/dt)',
    variables: 'q: Coulombs, i: Amperes, L: Inductance (H), C: Capacitance (F)',
    tip: 'An inductor resists sudden changes in CURRENT. A capacitor resists sudden changes in VOLTAGE.'
  },
  {
    subject: 'MATH',
    category: 'Calculus',
    name: 'RMS and Average Values',
    formula: 'V_rms = V_max / √2 ≈ 0.7071 V_max,  V_avg = (2 / π) V_max ≈ 0.637 V_max',
    variables: 'Applies to pure sinusoidal alternating waveforms',
    tip: 'Household 230V in the Philippines is the RMS voltage; peak voltage is 325V!'
  },
  {
    subject: 'MATH',
    category: 'Engineering Economy',
    name: 'Compound Interest & Present Worth',
    formula: 'F = P(1 + i)^n,  P = F / (1 + i)^n',
    variables: 'P: Present Worth, F: Future Worth, i: interest per period, n: periods',
    tip: 'For continuous compounding: F = P · e^(r·n).'
  },

  // ESAS
  {
    subject: 'ESAS',
    category: 'Physics & Energy',
    name: 'Horsepower to Wattage Conversion',
    formula: '1 HP = 746 Watts = 550 ft-lb/s = 0.746 kW',
    variables: 'HP: mechanical horsepower, W: electrical watts',
    tip: 'Memorize 746 W per HP. Used in almost every motor efficiency board exam problem.'
  },
  {
    subject: 'ESAS',
    category: 'Mechanics',
    name: 'Rotational Mechanical Power & Torque',
    formula: 'P = 2πNT / 60 = ω · T',
    variables: 'P: Power in Watts, N: Speed in RPM, T: Torque in N-m, ω: rad/s',
    tip: 'To get HP directly from RPM and lb-ft torque: HP = (T · N) / 5252.'
  },
  {
    subject: 'ESAS',
    category: 'Fluid Mechanics',
    name: 'Hydroelectric Power Output',
    formula: 'P (kW) = 9.81 · Q · H · η',
    variables: 'Q: discharge (m³/s), H: head (m), η: efficiency',
    tip: '9.81 is the specific weight of water in kN/m³.'
  },
  {
    subject: 'ESAS',
    category: 'Thermodynamics',
    name: 'Carnot Cycle Maximum Efficiency',
    formula: 'η_max = (T_hot - T_cold) / T_hot',
    variables: 'T_hot, T_cold: Absolute temperature in KELVIN (K = °C + 273)',
    tip: 'Always convert Celsius into Kelvin first!'
  },
  {
    subject: 'ESAS',
    category: 'Electrical Law (RA 7920)',
    name: 'PRC Board Passing Grade Requirement',
    formula: 'Gen Average ≥ 70% AND min(MATH, ESAS, EE) ≥ 50%',
    variables: 'MATH weight: 33%, ESAS weight: 30%, EE weight: 37%',
    tip: 'You can have an 85% average, but if your MATH is 49%, you fail! All subjects must be ≥ 50%.'
  },
  {
    subject: 'ESAS',
    category: 'Philippine Electrical Code',
    name: 'Voltage Drop & Maximum Branch Limits',
    formula: 'VD = 2·I·L·R / 1000,  Branch Drop ≤ 3%,  Total Drop ≤ 5%',
    variables: 'I: current (A), L: one-way distance (m), R: resistance (Ω/km)',
    tip: 'Conductor minimum for lighting is 2.0 mm² (14 AWG); convenience outlet is 3.5 mm² (12 AWG).'
  },

  // EE PROFESSIONAL
  {
    subject: 'EE',
    category: 'DC Circuits',
    name: 'Maximum Power Transfer Theorem',
    formula: 'P_max = (V_th)² / (4 · R_th)',
    variables: 'V_th: Thevenin voltage, R_th: Thevenin resistance',
    tip: 'Occurs when load resistance R_load equals source resistance R_thevenin.'
  },
  {
    subject: 'EE',
    category: 'AC Circuits',
    name: 'AC Power Triangle Equations',
    formula: 'S² = P² + Q²,  P = S·cosθ,  Q = S·sinθ,  pf = P / S',
    variables: 'P: Real Power (W), Q: Reactive Power (VAR), S: Apparent Power (VA)',
    tip: 'Lagging pf means inductive load (motors). Leading pf means capacitive load.'
  },
  {
    subject: 'EE',
    category: '3-Phase Systems',
    name: '3-Phase Power in Wye and Delta',
    formula: 'P_3φ = √3 · V_line · I_line · cosθ = 3 · V_phase · I_phase · cosθ',
    variables: 'V_line: line-to-line voltage, I_line: line current',
    tip: 'In Wye: V_line = √3 · V_phase. In Delta: I_line = √3 · I_phase.'
  },
  {
    subject: 'EE',
    category: 'Transformers',
    name: 'Turns Ratio & EMF Equation',
    formula: 'E = 4.44 · f · N · Φ_max,  a = N₁/N₂ = V₁/V₂ = I₂/I₁',
    variables: 'f: frequency (60 Hz), N: turns, Φ_max: peak core flux in Webers',
    tip: 'Maximum transformer efficiency occurs when Copper Loss equals Core Loss (P_cu = P_core).'
  },
  {
    subject: 'EE',
    category: 'AC Machines',
    name: 'Induction Motor Speed & Rotor Slip',
    formula: 'N_s = (120 · f) / P,  s = (N_s - N_r) / N_s,  f_rotor = s · f',
    variables: 'N_s: synchronous RPM, N_r: rotor RPM, P: poles, s: slip',
    tip: 'A 4-pole motor on 60 Hz has Ns = 1800 RPM. A 2-pole has Ns = 3600 RPM.'
  },
  {
    subject: 'EE',
    category: 'Power Systems',
    name: 'Per-Unit Impedance Base Change',
    formula: 'Z_pu_new = Z_pu_old · (V_base_old / V_base_new)² · (S_base_new / S_base_old)',
    variables: 'V: Base kV, S: Base MVA',
    tip: 'Notice voltage ratio is SQUARED and inverted compared to MVA ratio!'
  }
];

export const VisualFormulaCheatSheet: React.FC = () => {
  const [filterSub, setFilterSub] = useState<'ALL' | SubjectType>('ALL');
  const [searchTerm, setSearchTerm] = useState<string>('');

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
            <h2 className="text-xl font-bold text-slate-100 tracking-tight">Board Exam Formula Bank</h2>
            <p className="text-slate-400 text-xs mt-1">
              Visual formula cheat sheet with variable breakdowns and slow-learner memory mnemonics.
            </p>
          </div>

          <div className="flex gap-1.5">
            {(['ALL', 'MATH', 'ESAS', 'EE'] as const).map((sub) => (
              <button
                key={sub}
                onClick={() => setFilterSub(sub)}
                className={`px-3 py-1.5 rounded text-xs font-semibold border ${
                  filterSub === sub
                    ? 'bg-amber-500/10 border-amber-500 text-amber-400'
                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                {sub}
              </button>
            ))}
          </div>
        </div>

        <input
          type="text"
          placeholder="Filter formulas (e.g. slip, voltage drop, power triangle, carnot)..."
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

              {/* Monospace Formula Display */}
              <div className="bg-slate-950 border border-slate-800 p-2.5 rounded font-mono text-sm text-amber-300 font-bold overflow-x-auto">
                {item.formula}
              </div>

              {/* Variable Definitions */}
              <div className="text-[11px] text-slate-400">
                <span className="font-semibold text-slate-300">Variables: </span>
                {item.variables}
              </div>

              {/* Memory Tip */}
              <div className="bg-slate-950/60 border border-slate-800/80 p-2.5 rounded text-[11px] text-slate-300 space-y-0.5">
                <span className="font-mono text-amber-400 text-[10px] uppercase block font-semibold">
                  Exam Memory Cue:
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
