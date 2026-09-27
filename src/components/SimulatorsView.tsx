import React, { useState } from 'react';

export const SimulatorsView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'rlc' | 'threephase' | 'motor' | 'pec'>('rlc');

  // Simulator 1: AC RLC & Phasor State
  const [resistance, setResistance] = useState<number>(30); // Ohms
  const [inductanceMh, setInductanceMh] = useState<number>(100); // mH
  const [capacitanceUf, setCapacitanceUf] = useState<number>(50); // uF
  const [frequency, setFrequency] = useState<number>(60); // Hz
  const [voltageRms, setVoltageRms] = useState<number>(230); // Volts

  // Calculated RLC variables
  const L = inductanceMh / 1000;
  const C = capacitanceUf / 1000000;
  const omega = 2 * Math.PI * frequency;
  const xl = omega * L;
  const xc = 1 / (omega * C);
  const netX = xl - xc;
  const z = Math.sqrt(resistance * resistance + netX * netX);
  const phaseAngleRad = Math.atan2(netX, resistance);
  const phaseAngleDeg = (phaseAngleRad * 180) / Math.PI;
  const currentRms = z > 0 ? voltageRms / z : 0;
  const powerFactor = Math.cos(phaseAngleRad);
  const activePower = voltageRms * currentRms * powerFactor; // W
  const reactivePower = voltageRms * currentRms * Math.sin(phaseAngleRad); // VAR
  const apparentPower = voltageRms * currentRms; // VA
  const resonantFreq = 1 / (2 * Math.PI * Math.sqrt(L * C));

  // Simulator 2: 3-Phase State
  const [connectionType, setConnectionType] = useState<'WYE' | 'DELTA'>('WYE');
  const [phaseVoltage, setPhaseVoltage] = useState<number>(230);
  const [phaseImpedance, setPhaseImpedance] = useState<number>(15); // Ohms
  const lineVoltage3P = connectionType === 'WYE' ? Math.round(phaseVoltage * Math.sqrt(3)) : phaseVoltage;
  const phaseCurrent3P = phaseImpedance > 0 ? (connectionType === 'WYE' ? phaseVoltage / phaseImpedance : lineVoltage3P / phaseImpedance) : 0;
  const lineCurrent3P = connectionType === 'WYE' ? phaseCurrent3P : phaseCurrent3P * Math.sqrt(3);
  const totalPower3P = Math.sqrt(3) * lineVoltage3P * lineCurrent3P * 0.85; // assume 0.85 pf

  // Simulator 3: AC Motor State
  const [poles, setPoles] = useState<number>(4);
  const [motorFreq, setMotorFreq] = useState<number>(60);
  const [motorLoadPercent, setMotorLoadPercent] = useState<number>(75);
  const syncSpeed = (120 * motorFreq) / poles;
  const motorSlip = 0.01 + (motorLoadPercent / 100) * 0.05; // 1% to 6%
  const rotorSpeed = Math.round(syncSpeed * (1 - motorSlip));
  const rotorFreq = motorSlip * motorFreq;

  // Simulator 4: PEC Voltage Drop
  const [pecCurrent, setPecCurrent] = useState<number>(24); // Amperes
  const [pecLength, setPecLength] = useState<number>(30); // meters one-way
  const [pecSystemVoltage, setPecSystemVoltage] = useState<number>(230); // 230V standard in PH
  const [wireGauge, setWireGauge] = useState<'2.0' | '3.5' | '5.5' | '8.0' | '14.0'>('3.5');

  // Copper resistance in Ohms/km at 75°C
  const wireData: Record<string, { name: string; rPerKm: number; ampacity: number; awg: string }> = {
    '2.0': { name: '2.0 mm²', rPerKm: 9.5, ampacity: 20, awg: '14 AWG' },
    '3.5': { name: '3.5 mm²', rPerKm: 5.4, ampacity: 30, awg: '12 AWG' },
    '5.5': { name: '5.5 mm²', rPerKm: 3.4, ampacity: 40, awg: '10 AWG' },
    '8.0': { name: '8.0 mm²', rPerKm: 2.3, ampacity: 55, awg: '8 AWG' },
    '14.0': { name: '14.0 mm²', rPerKm: 1.3, ampacity: 75, awg: '6 AWG' },
  };

  const selectedWire = wireData[wireGauge];
  const pecVoltageDrop = (2 * pecCurrent * pecLength * selectedWire.rPerKm) / 1000;
  const pecDropPercent = (pecVoltageDrop / pecSystemVoltage) * 100;
  const loadVoltage = pecSystemVoltage - pecVoltageDrop;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="border border-slate-800 bg-slate-900/90 p-5 rounded-lg">
        <h2 className="text-xl font-bold text-slate-100 tracking-tight">Interactive Visual Engineering Simulators</h2>
        <p className="text-slate-400 text-sm mt-1">
          Designed for visual and slow learners. Manipulate circuit parameters directly and observe real-time vectors, waveforms, power triangles, and code compliance.
        </p>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-800">
          <button
            onClick={() => setActiveTab('rlc')}
            className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
              activeTab === 'rlc'
                ? 'bg-amber-500 text-slate-950 font-semibold'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            AC RLC &amp; Phasor Visualizer
          </button>
          <button
            onClick={() => setActiveTab('threephase')}
            className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
              activeTab === 'threephase'
                ? 'bg-amber-500 text-slate-950 font-semibold'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            3-Phase Wye vs Delta
          </button>
          <button
            onClick={() => setActiveTab('motor')}
            className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
              activeTab === 'motor'
                ? 'bg-amber-500 text-slate-950 font-semibold'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            Induction Motor Speed &amp; Slip
          </button>
          <button
            onClick={() => setActiveTab('pec')}
            className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
              activeTab === 'pec'
                ? 'bg-amber-500 text-slate-950 font-semibold'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            PEC Voltage Drop &amp; Wire Sizing
          </button>
        </div>
      </div>

      {/* Simulator 1: AC RLC */}
      {activeTab === 'rlc' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Controls */}
          <div className="lg:col-span-5 border border-slate-800 bg-slate-900 p-5 rounded-lg space-y-4">
            <h3 className="text-base font-semibold text-slate-200">Circuit Parameters</h3>

            <div>
              <div className="flex justify-between text-xs text-slate-400 mb-1">
                <span>Resistance (R):</span>
                <span className="font-mono text-amber-400">{resistance} Ω</span>
              </div>
              <input
                type="range"
                min="5"
                max="100"
                value={resistance}
                onChange={(e) => setResistance(Number(e.target.value))}
                className="w-full accent-amber-500"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs text-slate-400 mb-1">
                <span>Inductance (L):</span>
                <span className="font-mono text-cyan-400">{inductanceMh} mH</span>
              </div>
              <input
                type="range"
                min="10"
                max="300"
                value={inductanceMh}
                onChange={(e) => setInductanceMh(Number(e.target.value))}
                className="w-full accent-cyan-500"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs text-slate-400 mb-1">
                <span>Capacitance (C):</span>
                <span className="font-mono text-emerald-400">{capacitanceUf} μF</span>
              </div>
              <input
                type="range"
                min="10"
                max="200"
                value={capacitanceUf}
                onChange={(e) => setCapacitanceUf(Number(e.target.value))}
                className="w-full accent-emerald-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <div>
                <label className="text-xs text-slate-400 block mb-1">Frequency (Hz)</label>
                <select
                  value={frequency}
                  onChange={(e) => setFrequency(Number(e.target.value))}
                  className="w-full bg-slate-950 border border-slate-700 rounded px-2.5 py-1.5 text-xs text-slate-200"
                >
                  <option value={50}>50 Hz</option>
                  <option value={60}>60 Hz (Philippine Grid)</option>
                  <option value={120}>120 Hz</option>
                </select>
              </div>

              <div>
                <label className="text-xs text-slate-400 block mb-1">Supply RMS Voltage (V)</label>
                <input
                  type="number"
                  value={voltageRms}
                  onChange={(e) => setVoltageRms(Number(e.target.value))}
                  className="w-full bg-slate-950 border border-slate-700 rounded px-2.5 py-1.5 text-xs text-slate-200 font-mono"
                />
              </div>
            </div>

            {/* Slow Learner Intuition Callout */}
            <div className="bg-slate-950 border border-slate-800 p-3.5 rounded text-xs space-y-1.5">
              <div className="text-amber-400 font-semibold uppercase tracking-wider text-[10px]">Visual Intuition:</div>
              <p className="text-slate-300">
                {netX > 0 ? (
                  <>Inductive reactance (XL = {xl.toFixed(1)}Ω) dominates over XC ({xc.toFixed(1)}Ω). The circuit is <strong>LAGGING</strong>. Current peaks <strong>{Math.abs(phaseAngleDeg).toFixed(1)}°</strong> AFTER voltage.</>
                ) : netX < 0 ? (
                  <>Capacitive reactance (XC = {xc.toFixed(1)}Ω) dominates over XL ({xl.toFixed(1)}Ω). The circuit is <strong>LEADING</strong>. Current peaks <strong>{Math.abs(phaseAngleDeg).toFixed(1)}°</strong> BEFORE voltage.</>
                ) : (
                  <>XL exactly equals XC! The circuit is at <strong>RESONANCE</strong>. Phase angle is 0°, and current reaches absolute maximum.</>
                )}
              </p>
            </div>
          </div>

          {/* Visual Outputs & Graphics */}
          <div className="lg:col-span-7 space-y-4">
            {/* Live Values Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="border border-slate-800 bg-slate-900 p-3 rounded">
                <span className="text-[11px] text-slate-400 block">Total Impedance |Z|</span>
                <span className="font-mono text-base font-bold text-slate-100">{z.toFixed(2)} Ω</span>
                <span className="text-[10px] text-slate-500 block">θ = {phaseAngleDeg.toFixed(1)}°</span>
              </div>

              <div className="border border-slate-800 bg-slate-900 p-3 rounded">
                <span className="text-[11px] text-slate-400 block">Current (I_rms)</span>
                <span className="font-mono text-base font-bold text-amber-400">{currentRms.toFixed(2)} A</span>
                <span className="text-[10px] text-slate-500 block">Peak = {(currentRms * 1.414).toFixed(1)}A</span>
              </div>

              <div className="border border-slate-800 bg-slate-900 p-3 rounded">
                <span className="text-[11px] text-slate-400 block">Power Factor</span>
                <span className="font-mono text-base font-bold text-emerald-400">{powerFactor.toFixed(3)}</span>
                <span className="text-[10px] text-slate-500 block">{netX > 0 ? 'Lagging' : netX < 0 ? 'Leading' : 'Unity'}</span>
              </div>

              <div className="border border-slate-800 bg-slate-900 p-3 rounded">
                <span className="text-[11px] text-slate-400 block">Resonance (f₀)</span>
                <span className="font-mono text-base font-bold text-cyan-400">{resonantFreq.toFixed(1)} Hz</span>
                <span className="text-[10px] text-slate-500 block">1/(2π√LC)</span>
              </div>
            </div>

            {/* SVG Live Phasor & Waveform Display */}
            <div className="border border-slate-800 bg-slate-900 p-4 rounded-lg">
              <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Live Waveform (Voltage vs Current)</h4>
              <div className="bg-slate-950 rounded p-2 border border-slate-800">
                <svg viewBox="0 0 500 160" className="w-full h-40">
                  {/* Center zero line */}
                  <line x1="0" y1="80" x2="500" y2="80" stroke="#334155" strokeDasharray="3 3" />
                  
                  {/* Voltage Waveform (Amber) */}
                  <path
                    d={Array.from({ length: 50 }, (_, i) => {
                      const x = i * 10;
                      const rad = (x / 500) * 4 * Math.PI;
                      const y = 80 - Math.sin(rad) * 60;
                      return `${i === 0 ? 'M' : 'L'} ${x} ${y.toFixed(1)}`;
                    }).join(' ')}
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="2.5"
                  />

                  {/* Current Waveform (Cyan) shifted by phaseAngleRad */}
                  <path
                    d={Array.from({ length: 50 }, (_, i) => {
                      const x = i * 10;
                      const rad = (x / 500) * 4 * Math.PI - phaseAngleRad;
                      const y = 80 - Math.sin(rad) * 45;
                      return `${i === 0 ? 'M' : 'L'} ${x} ${y.toFixed(1)}`;
                    }).join(' ')}
                    fill="none"
                    stroke="#06b6d4"
                    strokeWidth="2"
                    strokeDasharray="4 2"
                  />

                  {/* Legend */}
                  <circle cx="20" cy="20" r="4" fill="#f59e0b" />
                  <text x="30" y="24" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">Voltage v(t) [Ref 0°]</text>

                  <circle cx="180" cy="20" r="4" fill="#06b6d4" />
                  <text x="190" y="24" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">Current i(t) [Phase: {phaseAngleDeg.toFixed(1)}°]</text>
                </svg>
              </div>

              {/* Power Triangle Breakdown */}
              <div className="grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-slate-800 text-xs">
                <div>
                  <span className="text-slate-400 block">Active Power (P):</span>
                  <span className="font-mono text-amber-400 font-semibold">{activePower.toFixed(0)} Watts</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Reactive Power (Q):</span>
                  <span className="font-mono text-cyan-400 font-semibold">{Math.abs(reactivePower).toFixed(0)} VAR</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Apparent Power (S):</span>
                  <span className="font-mono text-emerald-400 font-semibold">{apparentPower.toFixed(0)} VA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Simulator 2: 3-Phase Wye vs Delta */}
      {activeTab === 'threephase' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5 border border-slate-800 bg-slate-900 p-5 rounded-lg space-y-4">
            <h3 className="text-base font-semibold text-slate-200">Three-Phase Configuration</h3>

            <div className="flex gap-3">
              <button
                onClick={() => setConnectionType('WYE')}
                className={`flex-1 py-2 rounded text-xs font-semibold border ${
                  connectionType === 'WYE'
                    ? 'bg-amber-500/10 border-amber-500 text-amber-400'
                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                Wye (Y) / Star
              </button>
              <button
                onClick={() => setConnectionType('DELTA')}
                className={`flex-1 py-2 rounded text-xs font-semibold border ${
                  connectionType === 'DELTA'
                    ? 'bg-amber-500/10 border-amber-500 text-amber-400'
                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                Delta (Δ) / Mesh
              </button>
            </div>

            <div>
              <div className="flex justify-between text-xs text-slate-400 mb-1">
                <span>Phase Voltage (V_phase):</span>
                <span className="font-mono text-amber-400">{phaseVoltage} V</span>
              </div>
              <input
                type="range"
                min="100"
                max="480"
                step="10"
                value={phaseVoltage}
                onChange={(e) => setPhaseVoltage(Number(e.target.value))}
                className="w-full accent-amber-500"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs text-slate-400 mb-1">
                <span>Phase Load Impedance (Z_load):</span>
                <span className="font-mono text-cyan-400">{phaseImpedance} Ω</span>
              </div>
              <input
                type="range"
                min="5"
                max="50"
                value={phaseImpedance}
                onChange={(e) => setPhaseImpedance(Number(e.target.value))}
                className="w-full accent-cyan-500"
              />
            </div>

            <div className="bg-slate-950 border border-slate-800 p-3.5 rounded text-xs space-y-1.5">
              <div className="text-amber-400 font-semibold uppercase tracking-wider text-[10px]">Rule of Thumb:</div>
              <p className="text-slate-300">
                {connectionType === 'WYE' ? (
                  <>In <strong>Wye (Y)</strong>, line voltage is <strong>√3 (1.732) times higher</strong> than phase voltage (V_line = √3 · V_phase), while line current equals phase current (I_line = I_phase).</>
                ) : (
                  <>In <strong>Delta (Δ)</strong>, line voltage <strong>equals</strong> phase voltage (V_line = V_phase), while line current is <strong>√3 times higher</strong> than phase current (I_line = √3 · I_phase).</>
                )}
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 border border-slate-800 bg-slate-900 p-5 rounded-lg space-y-4">
            <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider">3-Phase Balanced Vector Constellation</h4>
            
            <div className="bg-slate-950 p-4 rounded border border-slate-800 flex items-center justify-center">
              <svg viewBox="0 0 300 240" className="w-64 h-56">
                <circle cx="150" cy="120" r="90" fill="none" stroke="#1e293b" strokeDasharray="3 3" />
                <circle cx="150" cy="120" r="3" fill="#cbd5e1" />

                {/* Phase A (0 deg) */}
                <line x1="150" y1="120" x2="240" y2="120" stroke="#f59e0b" strokeWidth="2.5" />
                <text x="245" y="125" fill="#f59e0b" fontSize="11" fontFamily="sans-serif" fontWeight="bold">Va (0°)</text>

                {/* Phase B (-120 deg) */}
                <line x1="150" y1="120" x2="105" y2="198" stroke="#06b6d4" strokeWidth="2.5" />
                <text x="65" y="210" fill="#06b6d4" fontSize="11" fontFamily="sans-serif" fontWeight="bold">Vb (-120°)</text>

                {/* Phase C (+120 deg) */}
                <line x1="150" y1="120" x2="105" y2="42" stroke="#10b981" strokeWidth="2.5" />
                <text x="65" y="40" fill="#10b981" fontSize="11" fontFamily="sans-serif" fontWeight="bold">Vc (+120°)</text>

                <text x="110" y="125" fill="#64748b" fontSize="10" fontFamily="sans-serif">120° apart</text>
              </svg>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
              <div className="bg-slate-950 p-3 rounded border border-slate-800">
                <span className="text-slate-400 block">Line-to-Line Voltage</span>
                <span className="font-mono text-base font-bold text-amber-400">{lineVoltage3P} V</span>
              </div>
              <div className="bg-slate-950 p-3 rounded border border-slate-800">
                <span className="text-slate-400 block">Line Current</span>
                <span className="font-mono text-base font-bold text-cyan-400">{lineCurrent3P.toFixed(1)} A</span>
              </div>
              <div className="bg-slate-950 p-3 rounded border border-slate-800">
                <span className="text-slate-400 block">Total 3-Phase Power</span>
                <span className="font-mono text-base font-bold text-emerald-400">{(totalPower3P / 1000).toFixed(2)} kW</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Simulator 3: Induction Motor */}
      {activeTab === 'motor' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5 border border-slate-800 bg-slate-900 p-5 rounded-lg space-y-4">
            <h3 className="text-base font-semibold text-slate-200">Motor Nameplate Settings</h3>

            <div>
              <label className="text-xs text-slate-400 block mb-1">Number of Stator Poles (P)</label>
              <div className="grid grid-cols-4 gap-2">
                {[2, 4, 6, 8].map((p) => (
                  <button
                    key={p}
                    onClick={() => setPoles(p)}
                    className={`py-1.5 rounded text-xs font-semibold border ${
                      poles === p
                        ? 'bg-amber-500/10 border-amber-500 text-amber-400'
                        : 'bg-slate-950 border-slate-800 text-slate-400'
                    }`}
                  >
                    {p} Poles
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs text-slate-400 mb-1">
                <span>Supply Frequency:</span>
                <span className="font-mono text-amber-400">{motorFreq} Hz</span>
              </div>
              <div className="flex gap-2">
                {[50, 60].map((f) => (
                  <button
                    key={f}
                    onClick={() => setMotorFreq(f)}
                    className={`flex-1 py-1.5 rounded text-xs font-semibold border ${
                      motorFreq === f
                        ? 'bg-amber-500/10 border-amber-500 text-amber-400'
                        : 'bg-slate-950 border-slate-800 text-slate-400'
                    }`}
                  >
                    {f} Hz {f === 60 ? '(PH Standard)' : ''}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs text-slate-400 mb-1">
                <span>Mechanical Load Torque:</span>
                <span className="font-mono text-cyan-400">{motorLoadPercent}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={motorLoadPercent}
                onChange={(e) => setMotorLoadPercent(Number(e.target.value))}
                className="w-full accent-cyan-500"
              />
            </div>

            <div className="bg-slate-950 border border-slate-800 p-3.5 rounded text-xs space-y-1.5">
              <div className="text-amber-400 font-semibold uppercase tracking-wider text-[10px]">Slow Learner Concept:</div>
              <p className="text-slate-300">
                The stator creates a magnetic whirlwind at <strong>{syncSpeed} RPM</strong>. The rotor can never reach {syncSpeed} RPM; if it did, there would be zero relative motion, no induced voltage in the rotor bars, and zero torque. The {syncSpeed - rotorSpeed} RPM gap is the <strong>Slip</strong>.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 border border-slate-800 bg-slate-900 p-5 rounded-lg space-y-4">
            <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Speed &amp; Slip Gauge</h4>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="bg-slate-950 p-3 rounded border border-slate-800">
                <span className="text-[11px] text-slate-400 block">Synchronous Speed (Ns)</span>
                <span className="font-mono text-lg font-bold text-slate-100">{syncSpeed} RPM</span>
                <span className="text-[10px] text-slate-500 block">120f / P</span>
              </div>

              <div className="bg-slate-950 p-3 rounded border border-slate-800">
                <span className="text-[11px] text-slate-400 block">Rotor Shaft Speed (Nr)</span>
                <span className="font-mono text-lg font-bold text-amber-400">{rotorSpeed} RPM</span>
                <span className="text-[10px] text-slate-500 block">Ns · (1 - s)</span>
              </div>

              <div className="bg-slate-950 p-3 rounded border border-slate-800">
                <span className="text-[11px] text-slate-400 block">Rotor Slip (s)</span>
                <span className="font-mono text-lg font-bold text-emerald-400">{(motorSlip * 100).toFixed(2)}%</span>
                <span className="text-[10px] text-slate-500 block">f_rotor = {rotorFreq.toFixed(2)} Hz</span>
              </div>
            </div>

            {/* Visual Speed Bar Comparison */}
            <div className="space-y-2 pt-2">
              <div className="text-xs text-slate-400 flex justify-between">
                <span>Stator Magnetic Field:</span>
                <span className="font-mono text-slate-300">{syncSpeed} RPM (100%)</span>
              </div>
              <div className="w-full bg-slate-950 h-3 rounded overflow-hidden border border-slate-800">
                <div className="bg-slate-400 h-full w-full"></div>
              </div>

              <div className="text-xs text-slate-400 flex justify-between pt-1">
                <span>Rotor Physical Shaft:</span>
                <span className="font-mono text-amber-400">{rotorSpeed} RPM ({((rotorSpeed / syncSpeed) * 100).toFixed(1)}%)</span>
              </div>
              <div className="w-full bg-slate-950 h-3 rounded overflow-hidden border border-slate-800">
                <div
                  className="bg-amber-500 h-full transition-all duration-200"
                  style={{ width: `${(rotorSpeed / syncSpeed) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Simulator 4: PEC Voltage Drop */}
      {activeTab === 'pec' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5 border border-slate-800 bg-slate-900 p-5 rounded-lg space-y-4">
            <h3 className="text-base font-semibold text-slate-200">Branch Circuit Sizing</h3>

            <div>
              <label className="text-xs text-slate-400 block mb-1">Copper Conductor Size (PEC 1)</label>
              <div className="grid grid-cols-2 gap-2">
                {Object.entries(wireData).map(([key, item]) => (
                  <button
                    key={key}
                    onClick={() => setWireGauge(key as any)}
                    className={`p-2 rounded text-left border ${
                      wireGauge === key
                        ? 'bg-amber-500/10 border-amber-500 text-amber-400'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <div className="text-xs font-semibold">{item.name}</div>
                    <div className="text-[10px] text-slate-500">{item.awg} • Max {item.ampacity}A</div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs text-slate-400 mb-1">
                <span>Load Current (I):</span>
                <span className="font-mono text-amber-400">{pecCurrent} A</span>
              </div>
              <input
                type="range"
                min="5"
                max={selectedWire.ampacity}
                value={pecCurrent}
                onChange={(e) => setPecCurrent(Number(e.target.value))}
                className="w-full accent-amber-500"
              />
              <span className="text-[10px] text-slate-500">Max allowable for this wire: {selectedWire.ampacity} A</span>
            </div>

            <div>
              <div className="flex justify-between text-xs text-slate-400 mb-1">
                <span>One-Way Run Distance:</span>
                <span className="font-mono text-cyan-400">{pecLength} meters</span>
              </div>
              <input
                type="range"
                min="5"
                max="100"
                value={pecLength}
                onChange={(e) => setPecLength(Number(e.target.value))}
                className="w-full accent-cyan-500"
              />
            </div>
          </div>

          <div className="lg:col-span-7 border border-slate-800 bg-slate-900 p-5 rounded-lg space-y-4">
            <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Philippine Electrical Code (PEC) Compliance</h4>

            {/* Status Banner */}
            <div
              className={`p-4 rounded border text-sm flex items-center justify-between ${
                pecDropPercent <= 3.0
                  ? 'bg-emerald-950/40 border-emerald-600/50 text-emerald-300'
                  : pecDropPercent <= 5.0
                  ? 'bg-amber-950/40 border-amber-600/50 text-amber-300'
                  : 'bg-rose-950/40 border-rose-600/50 text-rose-300'
              }`}
            >
              <div>
                <span className="font-bold block">
                  {pecDropPercent <= 3.0
                    ? 'PEC Branch Circuit Compliant (≤ 3%)'
                    : pecDropPercent <= 5.0
                    ? 'Exceeds Branch Limit (3%), Within Total Feeder Limit (≤ 5%)'
                    : 'NON-COMPLIANT: Voltage Drop Exceeds PEC 5% Maximum!'}
                </span>
                <span className="text-xs opacity-80">
                  {pecDropPercent > 3.0
                    ? 'Recommendation: Upsize to larger copper conductor gauge.'
                    : 'Excellent conductor sizing for efficiency and fire prevention.'}
                </span>
              </div>
              <div className="text-2xl font-mono font-black">{pecDropPercent.toFixed(2)}%</div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
              <div className="bg-slate-950 p-3 rounded border border-slate-800">
                <span className="text-slate-400 block">Calculated Voltage Drop</span>
                <span className="font-mono text-base font-bold text-slate-100">{pecVoltageDrop.toFixed(2)} V</span>
                <span className="text-[10px] text-slate-500 block">VD = 2·I·L·R / 1000</span>
              </div>

              <div className="bg-slate-950 p-3 rounded border border-slate-800">
                <span className="text-slate-400 block">Voltage at Farthest Load</span>
                <span className="font-mono text-base font-bold text-amber-400">{loadVoltage.toFixed(1)} V</span>
                <span className="text-[10px] text-slate-500 block">Nominal: {pecSystemVoltage} V</span>
              </div>

              <div className="bg-slate-950 p-3 rounded border border-slate-800">
                <span className="text-slate-400 block">Conductor Resistance</span>
                <span className="font-mono text-base font-bold text-cyan-400">{(2 * pecLength * selectedWire.rPerKm / 1000).toFixed(3)} Ω</span>
                <span className="text-[10px] text-slate-500 block">Two-way loop run</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
