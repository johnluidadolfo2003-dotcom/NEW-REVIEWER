import React from 'react';

interface SolutionDiagramProps {
  type: string;
  caption?: string;
  data?: Record<string, any>;
}

export const SolutionDiagram: React.FC<SolutionDiagramProps> = ({ type, caption }) => {
  return (
    <div className="bg-slate-950 border border-slate-800 rounded-lg p-4 my-3 text-center">
      <div className="flex justify-center items-center overflow-x-auto py-2">
        {/* 1. IMPEDANCE RIGHT TRIANGLE */}
        {type === 'impedance_triangle' && (
          <svg viewBox="0 0 320 180" className="w-72 h-40">
            <line x1="40" y1="140" x2="220" y2="140" stroke="#f59e0b" strokeWidth="3" />
            <text x="110" y="160" fill="#f59e0b" fontSize="12" fontFamily="JetBrains Mono" fontWeight="bold">R (Resistance Ω)</text>
            
            <line x1="220" y1="140" x2="220" y2="30" stroke="#06b6d4" strokeWidth="3" />
            <text x="228" y="85" fill="#06b6d4" fontSize="12" fontFamily="JetBrains Mono" fontWeight="bold">X = X_L - X_C</text>
            
            <line x1="40" y1="140" x2="220" y2="30" stroke="#10b981" strokeWidth="3" strokeDasharray="4 2" />
            <text x="95" y="70" fill="#10b981" fontSize="13" fontFamily="JetBrains Mono" fontWeight="bold">|Z| = √(R² + X²)</text>
            
            <path d="M 80 140 A 40 40 0 0 0 74 118" fill="none" stroke="#e2e8f0" strokeWidth="1.5" />
            <text x="88" y="132" fill="#cbd5e1" fontSize="11" fontFamily="sans-serif">θ = arctan(X/R)</text>
            
            <polyline points="205,140 205,125 220,125" fill="none" stroke="#64748b" strokeWidth="1.5" />
          </svg>
        )}

        {/* 2. POWER TRIANGLE */}
        {type === 'power_triangle' && (
          <svg viewBox="0 0 320 180" className="w-72 h-40">
            <line x1="40" y1="140" x2="220" y2="140" stroke="#f59e0b" strokeWidth="3" />
            <text x="80" y="160" fill="#f59e0b" fontSize="12" fontFamily="JetBrains Mono" fontWeight="bold">P = VI·cos(θ) (kW)</text>
            
            <line x1="220" y1="140" x2="220" y2="30" stroke="#06b6d4" strokeWidth="3" />
            <text x="228" y="85" fill="#06b6d4" fontSize="12" fontFamily="JetBrains Mono" fontWeight="bold">Q = VI·sin(θ) (kVAR)</text>
            
            <line x1="40" y1="140" x2="220" y2="30" stroke="#a855f7" strokeWidth="3" />
            <text x="95" y="70" fill="#c084fc" fontSize="13" fontFamily="JetBrains Mono" fontWeight="bold">S = √(P² + Q²) (kVA)</text>
            
            <path d="M 85 140 A 45 45 0 0 0 80 115" fill="none" stroke="#e2e8f0" strokeWidth="1.5" />
            <text x="95" y="130" fill="#cbd5e1" fontSize="11" fontFamily="sans-serif">pf = cos(θ)</text>
            <polyline points="205,140 205,125 220,125" fill="none" stroke="#64748b" strokeWidth="1.5" />
          </svg>
        )}

        {/* 3. THEVENIN EQUIVALENT CIRCUIT */}
        {type === 'thevenin_circuit' && (
          <svg viewBox="0 0 340 160" className="w-80 h-36">
            <circle cx="50" cy="80" r="22" fill="#0f172a" stroke="#f59e0b" strokeWidth="2.5" />
            <text x="44" y="74" fill="#f59e0b" fontSize="13" fontWeight="bold">+</text>
            <text x="46" y="93" fill="#f59e0b" fontSize="13" fontWeight="bold">-</text>
            <text x="15" y="125" fill="#f59e0b" fontSize="11" fontFamily="JetBrains Mono">V_th</text>
            
            <line x1="50" y1="58" x2="100" y2="58" stroke="#cbd5e1" strokeWidth="2" />
            <path d="M 100 58 L 110 46 L 125 70 L 140 46 L 155 70 L 170 46 L 180 58" fill="none" stroke="#06b6d4" strokeWidth="2.5" />
            <text x="130" y="38" fill="#06b6d4" fontSize="11" fontFamily="JetBrains Mono" fontWeight="bold">R_th</text>
            <line x1="180" y1="58" x2="240" y2="58" stroke="#cbd5e1" strokeWidth="2" />
            
            <circle cx="240" cy="58" r="4" fill="#f59e0b" />
            <text x="248" y="62" fill="#cbd5e1" fontSize="11" fontWeight="bold">A</text>
            
            <path d="M 240 58 L 240 70 L 228 78 L 252 90 L 228 102 L 252 114 L 240 122 L 240 135" fill="none" stroke="#10b981" strokeWidth="2.5" />
            <text x="256" y="98" fill="#10b981" fontSize="11" fontFamily="JetBrains Mono" fontWeight="bold">R_L (Load)</text>
            
            <circle cx="240" cy="135" r="4" fill="#f59e0b" />
            <text x="248" y="140" fill="#cbd5e1" fontSize="11" fontWeight="bold">B</text>
            <line x1="50" y1="102" x2="50" y2="135" stroke="#cbd5e1" strokeWidth="2" />
            <line x1="50" y1="135" x2="240" y2="135" stroke="#cbd5e1" strokeWidth="2" />
          </svg>
        )}

        {/* 4. TRANSFORMER SCHEMATIC */}
        {type === 'transformer_schematic' && (
          <svg viewBox="0 0 340 160" className="w-80 h-36">
            <path d="M 80 40 Q 55 55 80 70 Q 55 85 80 100 Q 55 115 80 130" fill="none" stroke="#f59e0b" strokeWidth="3" />
            <text x="15" y="85" fill="#f59e0b" fontSize="12" fontFamily="JetBrains Mono" fontWeight="bold">N₁ (Primary)</text>
            <text x="20" y="105" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">V₁, I₁</text>
            
            <line x1="120" y1="30" x2="120" y2="140" stroke="#94a3b8" strokeWidth="3" />
            <line x1="130" y1="30" x2="130" y2="140" stroke="#94a3b8" strokeWidth="3" />
            <text x="100" y="22" fill="#64748b" fontSize="10" fontFamily="sans-serif">Iron Core</text>
            
            <path d="M 170 40 Q 195 55 170 70 Q 195 85 170 100 Q 195 115 170 130" fill="none" stroke="#06b6d4" strokeWidth="3" />
            <text x="210" y="85" fill="#06b6d4" fontSize="12" fontFamily="JetBrains Mono" fontWeight="bold">N₂ (Secondary)</text>
            <text x="215" y="105" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">V₂, I₂</text>

            <text x="80" y="155" fill="#e2e8f0" fontSize="11" fontFamily="JetBrains Mono">a = N₁/N₂ = V₁/V₂ = I₂/I₁</text>
          </svg>
        )}

        {/* 5. THREE PHASE WYE (STAR) */}
        {type === 'three_phase_wye' && (
          <svg viewBox="0 0 320 180" className="w-72 h-40">
            <circle cx="160" cy="95" r="5" fill="#ffffff" />
            <text x="168" y="100" fill="#ffffff" fontSize="11" fontWeight="bold">Neutral (N)</text>
            
            {/* Phase A */}
            <line x1="160" y1="95" x2="160" y2="25" stroke="#f59e0b" strokeWidth="3" />
            <circle cx="160" cy="25" r="4" fill="#f59e0b" />
            <text x="170" y="30" fill="#f59e0b" fontSize="12" fontFamily="JetBrains Mono" fontWeight="bold">Phase A (V_ph)</text>
            
            {/* Phase B */}
            <line x1="160" y1="95" x2="80" y2="145" stroke="#06b6d4" strokeWidth="3" />
            <circle cx="80" cy="145" r="4" fill="#06b6d4" />
            <text x="35" y="155" fill="#06b6d4" fontSize="12" fontFamily="JetBrains Mono" fontWeight="bold">Phase B</text>
            
            {/* Phase C */}
            <line x1="160" y1="95" x2="240" y2="145" stroke="#10b981" strokeWidth="3" />
            <circle cx="240" cy="145" r="4" fill="#10b981" />
            <text x="250" y="155" fill="#10b981" fontSize="12" fontFamily="JetBrains Mono" fontWeight="bold">Phase C</text>
            
            <path d="M 160 25 Q 210 70 240 145" fill="none" stroke="#e2e8f0" strokeWidth="1.5" strokeDasharray="3 3" />
            <text x="200" y="75" fill="#e2e8f0" fontSize="11" fontFamily="JetBrains Mono">V_line = √3 · V_phase</text>
          </svg>
        )}

        {/* 6. THREE PHASE DELTA (MESH) */}
        {type === 'three_phase_delta' && (
          <svg viewBox="0 0 320 180" className="w-72 h-40">
            {/* Closed delta triangle */}
            <polygon points="160,25 60,145 260,145" fill="none" stroke="#f59e0b" strokeWidth="3" />
            
            {/* Vertex Nodes */}
            <circle cx="160" cy="25" r="5" fill="#f59e0b" />
            <text x="150" y="16" fill="#f59e0b" fontSize="12" fontFamily="JetBrains Mono" fontWeight="bold">Node A</text>

            <circle cx="60" cy="145" r="5" fill="#06b6d4" />
            <text x="15" y="160" fill="#06b6d4" fontSize="12" fontFamily="JetBrains Mono" fontWeight="bold">Node B</text>

            <circle cx="260" cy="145" r="5" fill="#10b981" />
            <text x="268" y="160" fill="#10b981" fontSize="12" fontFamily="JetBrains Mono" fontWeight="bold">Node C</text>

            {/* Line vs Phase label */}
            <text x="100" y="90" fill="#cbd5e1" fontSize="11" fontFamily="JetBrains Mono">V_line = V_phase</text>
            <text x="95" y="110" fill="#38bdf8" fontSize="11" fontFamily="JetBrains Mono">I_line = √3 · I_phase</text>
            <text x="105" y="165" fill="#64748b" fontSize="10" fontFamily="sans-serif">No Neutral Wire in Delta</text>
          </svg>
        )}

        {/* 7. INDUCTION MOTOR TORQUE-SPEED CURVE */}
        {type === 'motor_torque_speed' && (
          <svg viewBox="0 0 320 180" className="w-72 h-40">
            <line x1="40" y1="150" x2="300" y2="150" stroke="#64748b" strokeWidth="2" />
            <text x="220" y="170" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">Speed Nr (RPM) →</text>
            
            <line x1="40" y1="150" x2="40" y2="20" stroke="#64748b" strokeWidth="2" />
            <text x="10" y="20" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">Torque T ↑</text>
            
            <path d="M 40 100 Q 140 25 210 35 T 280 150" fill="none" stroke="#f59e0b" strokeWidth="3" />
            
            <circle cx="40" cy="100" r="4" fill="#06b6d4" />
            <text x="48" y="105" fill="#06b6d4" fontSize="10" fontFamily="JetBrains Mono">Starting (s=1.0)</text>
            
            <circle cx="210" cy="35" r="4" fill="#ef4444" />
            <text x="145" y="25" fill="#f87171" fontSize="10" fontFamily="JetBrains Mono">Breakdown T_max</text>
            
            <circle cx="280" cy="150" r="4" fill="#10b981" />
            <text x="245" y="145" fill="#10b981" fontSize="10" fontFamily="JetBrains Mono">Sync Ns (s=0)</text>
          </svg>
        )}

        {/* 8. PHILIPPINE ELECTRICAL CODE (PEC) BRANCH CIRCUIT */}
        {type === 'pec_branch_circuit' && (
          <svg viewBox="0 0 340 160" className="w-80 h-36">
            <rect x="20" y="30" width="50" height="90" fill="#1e293b" stroke="#cbd5e1" strokeWidth="2" rx="4" />
            <text x="27" y="55" fill="#cbd5e1" fontSize="10" fontFamily="sans-serif" fontWeight="bold">PANEL</text>
            <rect x="35" y="70" width="20" height="30" fill="#f59e0b" rx="2" />
            <text x="38" y="88" fill="#020617" fontSize="10" fontWeight="black">20A</text>
            
            <line x1="70" y1="50" x2="260" y2="50" stroke="#ef4444" strokeWidth="3" />
            <text x="110" y="42" fill="#f87171" fontSize="10" fontFamily="JetBrains Mono">Hot Line (Phase)</text>
            
            <line x1="70" y1="75" x2="260" y2="75" stroke="#94a3b8" strokeWidth="3" strokeDasharray="5 3" />
            <text x="110" y="70" fill="#cbd5e1" fontSize="10" fontFamily="JetBrains Mono">Neutral (White)</text>
            
            <line x1="70" y1="100" x2="260" y2="100" stroke="#10b981" strokeWidth="2.5" />
            <text x="110" y="115" fill="#34d399" fontSize="10" fontFamily="JetBrains Mono">Ground (Green/Bare)</text>
            
            <rect x="260" y="40" width="50" height="70" fill="#0f172a" stroke="#f59e0b" strokeWidth="2" rx="4" />
            <text x="270" y="75" fill="#f59e0b" fontSize="10" fontFamily="JetBrains Mono">LOAD</text>
            <text x="266" y="95" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">230V Outlet</text>
            
            <text x="80" y="145" fill="#e2e8f0" fontSize="11" fontFamily="JetBrains Mono">PEC Max Drop ≤ 3% Branch</text>
          </svg>
        )}

        {/* 9. CALCULUS TANGENT & RATE OF CHANGE */}
        {type === 'calculus_tangent' && (
          <svg viewBox="0 0 320 180" className="w-72 h-40">
            <line x1="40" y1="150" x2="300" y2="150" stroke="#64748b" strokeWidth="2" />
            <text x="290" y="165" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">t (time)</text>
            <line x1="40" y1="150" x2="40" y2="20" stroke="#64748b" strokeWidth="2" />
            <text x="15" y="25" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">q(t)</text>
            
            <path d="M 40 140 Q 140 130 260 30" fill="none" stroke="#38bdf8" strokeWidth="3" />
            
            <line x1="100" y1="145" x2="240" y2="25" stroke="#f59e0b" strokeWidth="2.5" strokeDasharray="4 2" />
            <circle cx="170" cy="85" r="4" fill="#f59e0b" />
            <text x="180" y="95" fill="#f59e0b" fontSize="11" fontFamily="JetBrains Mono" fontWeight="bold">Slope = dq/dt = i(t)</text>
          </svg>
        )}

        {/* 10. DEPRECIATION TIMELINE (ECONOMY) */}
        {type === 'depreciation_timeline' && (
          <svg viewBox="0 0 320 180" className="w-72 h-40">
            <line x1="40" y1="140" x2="290" y2="140" stroke="#64748b" strokeWidth="2" />
            <text x="240" y="160" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">Years (n=10) →</text>
            <line x1="40" y1="140" x2="40" y2="20" stroke="#64748b" strokeWidth="2" />
            <text x="15" y="20" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">Book Value ₱</text>
            
            {/* Straight-line downward slope */}
            <line x1="40" y1="30" x2="260" y2="120" stroke="#f59e0b" strokeWidth="3" />
            
            <circle cx="40" cy="30" r="4" fill="#10b981" />
            <text x="50" y="32" fill="#10b981" fontSize="11" fontFamily="JetBrains Mono" fontWeight="bold">First Cost (FC = ₱500k)</text>

            <circle cx="260" cy="120" r="4" fill="#06b6d4" />
            <text x="180" y="115" fill="#06b6d4" fontSize="11" fontFamily="JetBrains Mono" fontWeight="bold">Salvage (SV = ₱50k)</text>

            <text x="70" y="85" fill="#cbd5e1" fontSize="11" fontFamily="JetBrains Mono">Annual Dep d = (FC - SV) / n = ₱45k/yr</text>
          </svg>
        )}

        {/* 11. STRESS-STRAIN CURVE (STRENGTH OF MATERIALS) */}
        {type === 'stress_strain_curve' && (
          <svg viewBox="0 0 320 180" className="w-72 h-40">
            <line x1="40" y1="150" x2="290" y2="150" stroke="#64748b" strokeWidth="2" />
            <text x="240" y="170" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">Strain ε →</text>
            <line x1="40" y1="150" x2="40" y2="20" stroke="#64748b" strokeWidth="2" />
            <text x="10" y="20" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">Stress σ ↑</text>

            {/* Elastic region linear slope Hooke's Law */}
            <line x1="40" y1="150" x2="130" y2="70" stroke="#10b981" strokeWidth="3" />
            <text x="50" y="95" fill="#34d399" fontSize="11" fontFamily="JetBrains Mono" fontWeight="bold">Hooke's Law: E = σ / ε</text>

            {/* Yield and plastic rupture */}
            <path d="M 130 70 Q 150 72 170 50 Q 230 40 260 90" fill="none" stroke="#f59e0b" strokeWidth="2.5" />
            <circle cx="130" cy="70" r="4" fill="#38bdf8" />
            <text x="135" y="65" fill="#38bdf8" fontSize="10" fontFamily="JetBrains Mono">Proportional Limit</text>
            <circle cx="260" cy="90" r="4" fill="#ef4444" />
            <text x="220" y="105" fill="#f87171" fontSize="10" fontFamily="sans-serif">Fracture</text>
          </svg>
        )}

        {/* 12. HYDROELECTRIC DAM HEAD & POWER */}
        {type === 'hydro_dam_diagram' && (
          <svg viewBox="0 0 320 180" className="w-72 h-40">
            {/* Reservoir water */}
            <rect x="20" y="30" width="80" height="90" fill="#0369a1" opacity="0.6" rx="2" />
            <text x="30" y="50" fill="#e0f2fe" fontSize="11" fontWeight="bold">Reservoir</text>
            
            {/* Dam Wall */}
            <polygon points="100,20 140,20 160,150 100,150" fill="#334155" stroke="#475569" strokeWidth="2" />
            
            {/* Penstock pipe */}
            <line x1="90" y1="80" x2="210" y2="135" stroke="#06b6d4" strokeWidth="6" />
            <text x="140" y="105" fill="#38bdf8" fontSize="10" fontFamily="JetBrains Mono">Penstock</text>

            {/* Head height indicator H */}
            <line x1="15" y1="35" x2="15" y2="135" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3 2" />
            <text x="2" y="90" fill="#f59e0b" fontSize="11" fontWeight="bold">Head H</text>

            {/* Powerhouse Turbine */}
            <circle cx="230" cy="135" r="14" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
            <text x="215" y="139" fill="#f59e0b" fontSize="9" fontWeight="bold">Turbine</text>
            <text x="160" y="165" fill="#e2e8f0" fontSize="11" fontFamily="JetBrains Mono">P = 9.81 · Q · H · η (kW)</text>
          </svg>
        )}

        {/* 13. RMS SINE WAVEFORM */}
        {type === 'rms_sine_wave' && (
          <svg viewBox="0 0 320 180" className="w-72 h-40">
            <line x1="20" y1="90" x2="300" y2="90" stroke="#475569" strokeWidth="1.5" />
            
            {/* Sine wave with true peak at y=30 and trough at y=150 */}
            <path
              d="M 20 90 Q 75 -30 130 90 T 240 90"
              fill="none"
              stroke="#f59e0b"
              strokeWidth="3"
            />

            {/* Peak line 325V at y=30 */}
            <line x1="20" y1="30" x2="300" y2="30" stroke="#f43f5e" strokeWidth="1.5" strokeDasharray="3 3" />
            <circle cx="75" cy="30" r="4" fill="#f43f5e" />
            <text x="180" y="26" fill="#f43f5e" fontSize="11" fontFamily="JetBrains Mono" fontWeight="bold">V_peak = 325V</text>

            {/* RMS line 230V at y=48 (0.707 of 60V amplitude from 90 is 47.6 -> y=48) */}
            <line x1="20" y1="48" x2="300" y2="48" stroke="#10b981" strokeWidth="2" strokeDasharray="4 2" />
            <text x="180" y="60" fill="#10b981" fontSize="11" fontFamily="JetBrains Mono" fontWeight="bold">V_rms = 230V (Peak/√2)</text>
          </svg>
        )}

        {/* 14. RC TRANSIENT RESPONSE */}
        {type === 'rc_transient_curve' && (
          <svg viewBox="0 0 320 180" className="w-72 h-40">
            <line x1="40" y1="140" x2="300" y2="140" stroke="#64748b" strokeWidth="2" />
            <text x="260" y="160" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">Time t →</text>
            <line x1="40" y1="140" x2="40" y2="20" stroke="#64748b" strokeWidth="2" />
            <text x="15" y="25" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">v_C(t)</text>

            {/* Exponential asymptotic charging */}
            <path d="M 40 140 Q 100 45 280 40" fill="none" stroke="#06b6d4" strokeWidth="3" />

            {/* Asymptote final voltage V */}
            <line x1="40" y1="40" x2="300" y2="40" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3 3" />
            <text x="220" y="32" fill="#cbd5e1" fontSize="10" fontFamily="JetBrains Mono">Final V (100%)</text>

            {/* Marker at 1 tau (63.2%) */}
            <circle cx="105" cy="77" r="4" fill="#f59e0b" />
            <line x1="105" y1="140" x2="105" y2="77" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="2 2" />
            <text x="95" y="155" fill="#f59e0b" fontSize="10" fontFamily="JetBrains Mono">t = τ = RC</text>
            <text x="115" y="80" fill="#f59e0b" fontSize="11" fontFamily="JetBrains Mono" fontWeight="bold">63.2% V</text>
          </svg>
        )}
      </div>

      {caption && (
        <div className="text-xs text-slate-400 font-mono mt-1 border-t border-slate-900 pt-2">
          {caption}
        </div>
      )}
    </div>
  );
};
