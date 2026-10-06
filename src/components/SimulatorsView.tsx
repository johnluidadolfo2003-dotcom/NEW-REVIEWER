import React, { useState } from 'react';
import { CleanMath, StackedFraction } from './CleanMath';

export const SimulatorsView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'rlc' | 'threephase' | 'motor' | 'pec'>('rlc');

  // ==================== SIMULATOR 1: AC RLC & PHASORS ====================
  const [resistance, setResistance] = useState<number>(30); // Ohms
  const [inductanceMh, setInductanceMh] = useState<number>(100); // mH
  const [capacitanceUf, setCapacitanceUf] = useState<number>(50); // uF
  const [frequency, setFrequency] = useState<number>(60); // Hz
  const [voltageRms, setVoltageRms] = useState<number>(230); // Volts

  const L = inductanceMh / 1000;
  const C = capacitanceUf / 1000000;
  const omega = 2 * Math.PI * frequency;
  const xl = omega * L;
  const xc = 1 / (omega * C);
  const netX = xl - xc;
  const z = Math.sqrt(resistance * resistance + netX * netX);
  // Impedance angle theta_z in radians
  const impedanceAngleRad = Math.atan2(netX, resistance);
  const impedanceAngleDeg = (impedanceAngleRad * 180) / Math.PI;
  const currentRms = z > 0 ? voltageRms / z : 0;
  const powerFactor = Math.cos(impedanceAngleRad);
  const activePower = voltageRms * currentRms * powerFactor; // Watts
  const reactivePower = voltageRms * currentRms * Math.sin(impedanceAngleRad); // VAR
  const apparentPower = voltageRms * currentRms; // VA
  const resonantFreq = 1 / (2 * Math.PI * Math.sqrt(L * C));

  // Current phasor angle relative to voltage at 0°:
  // I = V / Z. Since Z has angle +theta_z, I has angle -theta_z!
  // In Cartesian: theta_I = -impedanceAngleRad
  // Inductive (netX > 0): theta_I is negative (lagging, Quadrant IV - below x axis)
  // Capacitive (netX < 0): theta_I is positive (leading, Quadrant I - above x axis)
  // In SVG screen coordinates (+y points DOWN):
  // Angle 0°: x = cx + L, y = cy (pointing East)
  // Angle -theta (downward / lagging): y = cy + L * sin(theta_z)
  // Angle +theta (upward / leading): y = cy - L * sin(|theta_z|)
  const phasorCenterX = 130;
  const phasorCenterY = 100;
  const vLength = 80;
  const vEndX = phasorCenterX + vLength;
  const vEndY = phasorCenterY;

  const iLength = Math.min(85, Math.max(25, currentRms * 10));
  // In SVG coords: y increases downwards.
  // When netX > 0 (inductive / lagging), impedanceAngleRad > 0.
  // We want current pointing DOWNWARD (lagging). In SVG, downward is +sin.
  const iEndX = phasorCenterX + iLength * Math.cos(impedanceAngleRad);
  const iEndY = phasorCenterY + iLength * Math.sin(impedanceAngleRad);

  const applyRlcPreset = (preset: 'resonance' | 'inductive' | 'capacitive' | 'resistive') => {
    if (preset === 'resonance') {
      // At 60 Hz, resonance occurs when XL = XC
      // Let f = 60, L = 100 mH => XL = 37.70 Ω. C needed = 1/(omega*XL) = 70.36 uF
      setInductanceMh(100);
      setCapacitanceUf(70);
      setResistance(30);
      setFrequency(60);
    } else if (preset === 'inductive') {
      // Motor load (heavy inductive, lagging)
      setInductanceMh(180);
      setCapacitanceUf(25);
      setResistance(25);
      setFrequency(60);
    } else if (preset === 'capacitive') {
      // Capacitive power factor correction (leading)
      setInductanceMh(40);
      setCapacitanceUf(150);
      setResistance(30);
      setFrequency(60);
    } else if (preset === 'resistive') {
      // Pure resistance
      setInductanceMh(10);
      setCapacitanceUf(200);
      setResistance(50);
      setFrequency(60);
    }
  };

  // ==================== SIMULATOR 2: 3-PHASE WYE VS DELTA ====================
  const [connectionType, setConnectionType] = useState<'WYE' | 'DELTA'>('WYE');
  const [selectedStandard, setSelectedStandard] = useState<'ph_commercial' | 'ph_industrial'>('ph_commercial');
  const [phaseLoadZ, setPhaseLoadZ] = useState<number>(20); // Ohms per phase branch
  const [threePhasePf, setThreePhasePf] = useState<number>(0.85);

  // In standard Philippine distribution:
  // Commercial standard: 230V Line-to-Line (3-wire Delta)
  // Industrial standard: 400V Line-to-Line / 230V Line-to-Neutral (4-wire Wye)
  const lineVoltage3P = selectedStandard === 'ph_commercial' ? 230 : 400;
  const phaseVoltage3P = connectionType === 'WYE' ? Math.round(lineVoltage3P / Math.sqrt(3)) : lineVoltage3P;
  const phaseCurrent3P = phaseLoadZ > 0 ? phaseVoltage3P / phaseLoadZ : 0;
  const lineCurrent3P = connectionType === 'WYE' ? phaseCurrent3P : phaseCurrent3P * Math.sqrt(3);
  const totalRealPowerKw = (Math.sqrt(3) * lineVoltage3P * lineCurrent3P * threePhasePf) / 1000;
  const totalApparentPowerKva = (Math.sqrt(3) * lineVoltage3P * lineCurrent3P) / 1000;

  // ==================== SIMULATOR 3: AC INDUCTION MOTOR ====================
  const [poles, setPoles] = useState<number>(4);
  const [motorFreq, setMotorFreq] = useState<number>(60);
  const [motorLoadPercent, setMotorLoadPercent] = useState<number>(75);

  const syncSpeed = Math.round((120 * motorFreq) / poles);
  // Realistic motor slip curve: 0.5% at no-load, 3-5% at full load, up to 12% at overload
  const motorSlip = 0.005 + (motorLoadPercent / 100) * 0.045; // 0.5% to 5.0%
  const rotorSpeed = Math.round(syncSpeed * (1 - motorSlip));
  const rotorFreq = motorSlip * motorFreq;
  const rotorCopperLossPct = (motorSlip * 100).toFixed(2);
  const shaftTorqueNm = rotorSpeed > 0 ? Math.round((7460 * 10 * (motorLoadPercent / 100)) / ((2 * Math.PI * rotorSpeed) / 60)) : 0;

  // Tachometer needle trigonometry:
  // Semicircular arc goes from left (0 RPM) to right (3600 RPM).
  // Arc center: (150, 140), Radius = 95.
  // Left point (0 RPM): x = 150 - 95 = 55, y = 140. (Angle = 0)
  // Top point (1800 RPM): x = 150, y = 140 - 95 = 45. (Angle = π/2)
  // Right point (3600 RPM): x = 150 + 95 = 245, y = 140. (Angle = π)
  const maxDisplayRpm = 3600;
  const speedRatio = Math.min(1, Math.max(0, rotorSpeed / maxDisplayRpm));
  const needleAngle = speedRatio * Math.PI;
  const needleX = 150 - 95 * Math.cos(needleAngle);
  const needleY = 140 - 95 * Math.sin(needleAngle);

  // Stator synchronous speed marker angle
  const syncRatio = Math.min(1, Math.max(0, syncSpeed / maxDisplayRpm));
  const syncAngle = syncRatio * Math.PI;
  const syncMarkerX = 150 - 95 * Math.cos(syncAngle);
  const syncMarkerY = 140 - 95 * Math.sin(syncAngle);

  // ==================== SIMULATOR 4: PEC VOLTAGE DROP ====================
  const [wireGauge, setWireGauge] = useState<'2.0' | '3.5' | '5.5' | '8.0' | '14.0'>('3.5');
  const [pecLength, setPecLength] = useState<number>(30); // meters one-way
  const [pecCurrent, setPecCurrent] = useState<number>(18); // Amperes
  const pecSystemVoltage = 230; // standard 230V in Philippines

  const wireData: Record<string, { name: string; rPerKm: number; ampacity: number; awg: string; diamMm: number }> = {
    '2.0': { name: '2.0 mm²', rPerKm: 9.5, ampacity: 20, awg: '14 AWG', diamMm: 1.6 },
    '3.5': { name: '3.5 mm²', rPerKm: 5.4, ampacity: 30, awg: '12 AWG', diamMm: 2.1 },
    '5.5': { name: '5.5 mm²', rPerKm: 3.4, ampacity: 40, awg: '10 AWG', diamMm: 2.6 },
    '8.0': { name: '8.0 mm²', rPerKm: 2.3, ampacity: 55, awg: '8 AWG', diamMm: 3.2 },
    '14.0': { name: '14.0 mm²', rPerKm: 1.3, ampacity: 75, awg: '6 AWG', diamMm: 4.2 },
  };

  const selectedWire = wireData[wireGauge];
  // Clamped current to wire ampacity
  const safeCurrent = Math.min(pecCurrent, selectedWire.ampacity);
  // Loop resistance (2 runs: hot and neutral)
  const loopResistance = (2 * safeCurrent > 0 ? (2 * pecLength * selectedWire.rPerKm) / 1000 : 0);
  const pecVoltageDrop = (2 * safeCurrent * pecLength * selectedWire.rPerKm) / 1000;
  const pecDropPercent = (pecVoltageDrop / pecSystemVoltage) * 100;
  const loadVoltage = pecSystemVoltage - pecVoltageDrop;
  const wirePowerLossW = safeCurrent * safeCurrent * loopResistance;

  const handleSelectWire = (key: '2.0' | '3.5' | '5.5' | '8.0' | '14.0') => {
    setWireGauge(key);
    if (pecCurrent > wireData[key].ampacity) {
      setPecCurrent(wireData[key].ampacity);
    }
  };

  const applyPecPreset = (preset: 'light' | 'ac' | 'feeder' | 'main') => {
    if (preset === 'light') {
      setWireGauge('2.0');
      setPecCurrent(12);
      setPecLength(18);
    } else if (preset === 'ac') {
      setWireGauge('3.5');
      setPecCurrent(18);
      setPecLength(25);
    } else if (preset === 'feeder') {
      setWireGauge('8.0');
      setPecCurrent(38);
      setPecLength(45);
    } else if (preset === 'main') {
      setWireGauge('14.0');
      setPecCurrent(60);
      setPecLength(60);
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Header & Tab Navigation */}
      <div className="border border-slate-800 bg-slate-900/90 p-5 rounded-lg space-y-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-base font-bold text-slate-100 tracking-tight">
              Visual Simulators
            </h2>
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">
              4 Modules
            </span>
          </div>
          <p className="text-slate-400 text-xs mt-1">
            Real-time circuit, vector, machinery, and code calculation engines
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800">
          <button
            onClick={() => setActiveTab('rlc')}
            className={`px-3 py-1.5 rounded text-xs font-medium transition-colors ${
              activeTab === 'rlc'
                ? 'bg-amber-500 text-slate-950 font-semibold'
                : 'bg-slate-950 border border-slate-800 text-slate-300 hover:bg-slate-800'
            }`}
          >
            RLC &amp; Phasors
          </button>
          <button
            onClick={() => setActiveTab('threephase')}
            className={`px-3 py-1.5 rounded text-xs font-medium transition-colors ${
              activeTab === 'threephase'
                ? 'bg-amber-500 text-slate-950 font-semibold'
                : 'bg-slate-950 border border-slate-800 text-slate-300 hover:bg-slate-800'
            }`}
          >
            3-Phase Systems
          </button>
          <button
            onClick={() => setActiveTab('motor')}
            className={`px-3 py-1.5 rounded text-xs font-medium transition-colors ${
              activeTab === 'motor'
                ? 'bg-amber-500 text-slate-950 font-semibold'
                : 'bg-slate-950 border border-slate-800 text-slate-300 hover:bg-slate-800'
            }`}
          >
            Induction Motor
          </button>
          <button
            onClick={() => setActiveTab('pec')}
            className={`px-3 py-1.5 rounded text-xs font-medium transition-colors ${
              activeTab === 'pec'
                ? 'bg-amber-500 text-slate-950 font-semibold'
                : 'bg-slate-950 border border-slate-800 text-slate-300 hover:bg-slate-800'
            }`}
          >
            PEC Voltage Drop
          </button>
        </div>
      </div>

      {/* ===================== SIMULATOR 1: AC RLC & PHASORS ===================== */}
      {activeTab === 'rlc' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Controls Column */}
          <div className="lg:col-span-5 border border-slate-800 bg-slate-900 p-5 rounded-lg space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <h3 className="text-xs font-semibold text-slate-200 uppercase tracking-wider">Circuit Parameter Controls</h3>
              <span className="text-[10px] font-mono text-amber-400">f = {frequency} Hz</span>
            </div>

            {/* Quick 1-Click Presets for Slow Learners */}
            <div>
              <span className="text-[10px] uppercase font-mono text-slate-400 block mb-1 font-bold">
                1-Click Learning Presets:
              </span>
              <div className="grid grid-cols-2 gap-1.5 text-xs">
                <button
                  onClick={() => applyRlcPreset('resonance')}
                  className="px-2 py-1.5 bg-slate-950 hover:bg-slate-800 border border-slate-800 hover:border-amber-500 rounded text-left text-slate-200"
                >
                  <div className="font-semibold text-amber-400">Series Resonance</div>
                  <div className="text-[10px] text-slate-500">XL = XC, PF = 1.0</div>
                </button>
                <button
                  onClick={() => applyRlcPreset('inductive')}
                  className="px-2 py-1.5 bg-slate-950 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500 rounded text-left text-slate-200"
                >
                  <div className="font-semibold text-cyan-400">Inductive Load</div>
                  <div className="text-[10px] text-slate-500">XL &gt; XC, Lagging</div>
                </button>
                <button
                  onClick={() => applyRlcPreset('capacitive')}
                  className="px-2 py-1.5 bg-slate-950 hover:bg-slate-800 border border-slate-800 hover:border-emerald-500 rounded text-left text-slate-200"
                >
                  <div className="font-semibold text-emerald-400">Capacitor Bank</div>
                  <div className="text-[10px] text-slate-500">XC &gt; XL, Leading</div>
                </button>
                <button
                  onClick={() => applyRlcPreset('resistive')}
                  className="px-2 py-1.5 bg-slate-950 hover:bg-slate-800 border border-slate-800 hover:border-slate-500 rounded text-left text-slate-200"
                >
                  <div className="font-semibold text-slate-300">Pure Resistance</div>
                  <div className="text-[10px] text-slate-500">Z = R, zero angle</div>
                </button>
              </div>
            </div>

            {/* Slider R */}
            <div>
              <div className="flex justify-between text-xs text-slate-300 mb-1">
                <span>Resistance (R):</span>
                <span className="font-mono text-amber-400 font-bold">{resistance} Ω</span>
              </div>
              <input
                type="range"
                min="5"
                max="100"
                value={resistance}
                onChange={(e) => setResistance(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />
            </div>

            {/* Slider L */}
            <div>
              <div className="flex justify-between text-xs text-slate-300 mb-1">
                <span>Inductance (L):</span>
                <span className="font-mono text-cyan-400 font-bold">{inductanceMh} mH (XL = {xl.toFixed(1)} Ω)</span>
              </div>
              <input
                type="range"
                min="10"
                max="300"
                value={inductanceMh}
                onChange={(e) => setInductanceMh(Number(e.target.value))}
                className="w-full accent-cyan-500 cursor-pointer"
              />
            </div>

            {/* Slider C */}
            <div>
              <div className="flex justify-between text-xs text-slate-300 mb-1">
                <span>Capacitance (C):</span>
                <span className="font-mono text-emerald-400 font-bold">{capacitanceUf} μF (XC = {xc.toFixed(1)} Ω)</span>
              </div>
              <input
                type="range"
                min="10"
                max="200"
                value={capacitanceUf}
                onChange={(e) => setCapacitanceUf(Number(e.target.value))}
                className="w-full accent-emerald-500 cursor-pointer"
              />
            </div>

            <div className="grid grid-cols-2 gap-3 pt-1">
              <div>
                <label className="text-[11px] text-slate-400 block mb-1">Supply Frequency</label>
                <div className="flex gap-1.5">
                  {[50, 60].map((f) => (
                    <button
                      key={f}
                      onClick={() => setFrequency(f)}
                      className={`flex-1 py-1 rounded text-xs font-mono font-bold border transition-colors ${
                        frequency === f
                          ? 'bg-amber-500 text-slate-950 border-amber-400'
                          : 'bg-slate-950 border-slate-800 text-slate-400'
                      }`}
                    >
                      {f} Hz
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-[11px] text-slate-400 block mb-1">RMS Voltage</label>
                <input
                  type="number"
                  value={voltageRms}
                  onChange={(e) => setVoltageRms(Number(e.target.value))}
                  className="w-full bg-slate-950 border border-slate-800 rounded px-2.5 py-1 text-xs text-slate-200 font-mono"
                />
              </div>
            </div>

            {/* Slow Learner Concept Status Box */}
            <div className="bg-slate-950 border border-slate-800 p-3.5 rounded text-xs space-y-1.5">
              <div className="text-amber-400 font-semibold uppercase tracking-wider text-[10px]">
                Visual State Breakdown:
              </div>
              <p className="text-slate-300 leading-relaxed">
                {netX > 1 ? (
                  <>
                    Inductive reactance (XL = {xl.toFixed(1)}Ω) dominates capacitive reactance (XC = {xc.toFixed(1)}Ω).
                    Circuit is <strong className="text-cyan-400">LAGGING</strong>. Current lags voltage by{' '}
                    <strong className="text-amber-300">{Math.abs(impedanceAngleDeg).toFixed(1)}°</strong>. Phasor vector points DOWNWARD.
                  </>
                ) : netX < -1 ? (
                  <>
                    Capacitive reactance (XC = {xc.toFixed(1)}Ω) dominates inductive reactance (XL = {xl.toFixed(1)}Ω).
                    Circuit is <strong className="text-emerald-400">LEADING</strong>. Current leads voltage by{' '}
                    <strong className="text-amber-300">{Math.abs(impedanceAngleDeg).toFixed(1)}°</strong>. Phasor vector points UPWARD.
                  </>
                ) : (
                  <>
                    XL ≈ XC! Circuit is in <strong className="text-amber-400 font-bold">RESONANCE</strong> (f₀ = {resonantFreq.toFixed(1)} Hz).
                    Impedance drops to pure resistance (Z = R = {resistance}Ω). Power factor is 1.0 (Unity)!
                  </>
                )}
              </p>
            </div>
          </div>

          {/* Visual Outputs: Real-time 2D Phasor Vector Diagram + Waveform */}
          <div className="lg:col-span-7 space-y-4">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="border border-slate-800 bg-slate-900 p-3 rounded">
                <span className="text-[10px] text-slate-400 block font-mono">Impedance |Z|</span>
                <span className="font-mono text-base font-bold text-slate-100">{z.toFixed(2)} Ω</span>
                <span className="text-[10px] text-slate-500 block">θ = {impedanceAngleDeg.toFixed(1)}°</span>
              </div>

              <div className="border border-slate-800 bg-slate-900 p-3 rounded">
                <span className="text-[10px] text-slate-400 block font-mono">Current (I_rms)</span>
                <span className="font-mono text-base font-bold text-amber-400">{currentRms.toFixed(2)} A</span>
                <span className="text-[10px] text-slate-500 block">Peak = {(currentRms * 1.414).toFixed(1)} A</span>
              </div>

              <div className="border border-slate-800 bg-slate-900 p-3 rounded">
                <span className="text-[10px] text-slate-400 block font-mono">Power Factor</span>
                <span className="font-mono text-base font-bold text-emerald-400">{powerFactor.toFixed(3)}</span>
                <span className="text-[10px] text-slate-500 block font-medium">
                  {netX > 1 ? 'Lagging' : netX < -1 ? 'Leading' : 'Unity (1.0)'}
                </span>
              </div>

              <div className="border border-slate-800 bg-slate-900 p-3 rounded">
                <span className="text-[10px] text-slate-400 block font-mono">Resonance f₀</span>
                <span className="font-mono text-base font-bold text-cyan-400">{resonantFreq.toFixed(1)} Hz</span>
                <div className="text-[10px] text-slate-400 font-mono mt-0.5">
                  <StackedFraction num="1" den="2π · √(L · C)" />
                </div>
              </div>
            </div>

            {/* Side-by-Side Phasor Diagram & Waveform */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Corrected 2D Phasor Vector Diagram */}
              <div className="border border-slate-800 bg-slate-900 p-3.5 rounded-lg space-y-2">
                <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex justify-between">
                  <span>2D Phasor Vector Diagram</span>
                  <span className="font-mono text-amber-400">
                    {netX > 0 ? `-${impedanceAngleDeg.toFixed(1)}° Lag` : `+${Math.abs(impedanceAngleDeg).toFixed(1)}° Lead`}
                  </span>
                </div>
                <div className="bg-slate-950 rounded p-2 border border-slate-800 flex justify-center">
                  <svg viewBox="0 0 280 200" className="w-full h-44">
                    {/* Cartesian Axes */}
                    <line x1="130" y1="10" x2="130" y2="190" stroke="#334155" strokeWidth="1" strokeDasharray="3 3" />
                    <line x1="10" y1="100" x2="270" y2="100" stroke="#334155" strokeWidth="1" strokeDasharray="3 3" />
                    <circle cx="130" cy="100" r="80" fill="none" stroke="#1e293b" />

                    <text x="245" y="94" fill="#64748b" fontSize="9" fontFamily="sans-serif">Re (+)</text>
                    <text x="135" y="22" fill="#64748b" fontSize="9" fontFamily="sans-serif">+j Lead</text>
                    <text x="135" y="185" fill="#64748b" fontSize="9" fontFamily="sans-serif">-j Lag</text>

                    {/* Voltage Phasor V (Fixed Reference at 0°, horizontal East) */}
                    <line x1={phasorCenterX} y1={phasorCenterY} x2={vEndX} y2={vEndY} stroke="#f59e0b" strokeWidth="3" />
                    <circle cx={vEndX} cy={vEndY} r="4" fill="#f59e0b" />
                    <text x={vEndX + 4} y={vEndY + 4} fill="#f59e0b" fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">
                      V (230V ∠0°)
                    </text>

                    {/* Current Phasor I (Corrected Vector Direction: Downward if Lagging, Upward if Leading) */}
                    <line x1={phasorCenterX} y1={phasorCenterY} x2={iEndX} y2={iEndY} stroke="#06b6d4" strokeWidth="3" />
                    <circle cx={iEndX} cy={iEndY} r="4" fill="#06b6d4" />
                    <text x={iEndX + 4} y={iEndY + (netX >= 0 ? 12 : -4)} fill="#06b6d4" fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">
                      I ({currentRms.toFixed(1)}A)
                    </text>

                    {/* Visual Angle Arc */}
                    <path
                      d={`M ${phasorCenterX + 35} ${phasorCenterY} A 35 35 0 0 ${netX >= 0 ? 1 : 0} ${phasorCenterX + 35 * Math.cos(impedanceAngleRad)} ${phasorCenterY + 35 * Math.sin(impedanceAngleRad)}`}
                      fill="none"
                      stroke="#e2e8f0"
                      strokeWidth="1.5"
                    />
                    <text x={phasorCenterX + 40} y={phasorCenterY + (netX >= 0 ? 18 : -14)} fill="#cbd5e1" fontSize="9" fontFamily="JetBrains Mono">
                      θ = {Math.abs(impedanceAngleDeg).toFixed(1)}°
                    </text>
                  </svg>
                </div>
              </div>

              {/* Time-Domain Waveforms */}
              <div className="border border-slate-800 bg-slate-900 p-3.5 rounded-lg space-y-2">
                <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex justify-between">
                  <span>Waveform (Time Domain)</span>
                  <span className="text-[10px] text-slate-400">Amber: v(t) • Cyan: i(t)</span>
                </div>
                <div className="bg-slate-950 rounded p-2 border border-slate-800">
                  <svg viewBox="0 0 280 200" className="w-full h-44">
                    <line x1="0" y1="100" x2="280" y2="100" stroke="#334155" strokeDasharray="3 3" />
                    {/* Voltage wave */}
                    <path
                      d={Array.from({ length: 29 }, (_, i) => {
                        const x = i * 10;
                        const rad = (x / 280) * 4 * Math.PI;
                        const y = 100 - Math.sin(rad) * 60;
                        return `${i === 0 ? 'M' : 'L'} ${x} ${y.toFixed(1)}`;
                      }).join(' ')}
                      fill="none"
                      stroke="#f59e0b"
                      strokeWidth="2.5"
                    />
                    {/* Current wave shifted by impedanceAngleRad */}
                    <path
                      d={Array.from({ length: 29 }, (_, i) => {
                        const x = i * 10;
                        const rad = (x / 280) * 4 * Math.PI - impedanceAngleRad;
                        const y = 100 - Math.sin(rad) * 45;
                        return `${i === 0 ? 'M' : 'L'} ${x} ${y.toFixed(1)}`;
                      }).join(' ')}
                      fill="none"
                      stroke="#06b6d4"
                      strokeWidth="2"
                      strokeDasharray="4 2"
                    />
                    <text x="10" y="24" fill="#f59e0b" fontSize="10" fontFamily="JetBrains Mono">v(t) = Vm·sin(ωt)</text>
                    <text x="10" y="40" fill="#06b6d4" fontSize="10" fontFamily="JetBrains Mono">
                      i(t) = Im·sin(ωt {impedanceAngleDeg >= 0 ? `- ${impedanceAngleDeg.toFixed(1)}°` : `+ ${Math.abs(impedanceAngleDeg).toFixed(1)}°`})
                    </text>
                  </svg>
                </div>
              </div>
            </div>

            {/* Power Triangle Breakdown */}
            <div className="grid grid-cols-3 gap-3 border-t border-slate-800 pt-3 text-xs">
              <div className="bg-slate-950 p-2.5 rounded border border-slate-800">
                <span className="text-slate-400 block text-[11px]">Real Power (P)</span>
                <span className="font-mono text-sm font-bold text-amber-400">{activePower.toFixed(0)} W</span>
                <span className="text-[10px] text-slate-500 block">VI·cos(θ)</span>
              </div>
              <div className="bg-slate-950 p-2.5 rounded border border-slate-800">
                <span className="text-slate-400 block text-[11px]">Reactive (Q)</span>
                <span className="font-mono text-sm font-bold text-cyan-400">{Math.abs(reactivePower).toFixed(0)} VAR</span>
                <span className="text-[10px] text-slate-500 block">VI·sin(θ)</span>
              </div>
              <div className="bg-slate-950 p-2.5 rounded border border-slate-800">
                <span className="text-slate-400 block text-[11px]">Apparent (S)</span>
                <span className="font-mono text-sm font-bold text-emerald-400">{apparentPower.toFixed(0)} VA</span>
                <span className="text-[10px] text-slate-500 block">VI</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ===================== SIMULATOR 2: 3-PHASE WYE VS DELTA ===================== */}
      {activeTab === 'threephase' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5 border border-slate-800 bg-slate-900 p-5 rounded-lg space-y-4">
            <h3 className="text-xs font-semibold text-slate-200 uppercase tracking-wider">3-Phase Network Configuration</h3>

            {/* Wye vs Delta Selector */}
            <div className="flex gap-2">
              <button
                onClick={() => setConnectionType('WYE')}
                className={`flex-1 py-2 rounded text-xs font-bold border transition-colors ${
                  connectionType === 'WYE'
                    ? 'bg-amber-500 text-slate-950 border-amber-400'
                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                Wye (Star 4-Wire with Neutral)
              </button>
              <button
                onClick={() => setConnectionType('DELTA')}
                className={`flex-1 py-2 rounded text-xs font-bold border transition-colors ${
                  connectionType === 'DELTA'
                    ? 'bg-amber-500 text-slate-950 border-amber-400'
                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                Delta (Mesh 3-Wire Closed Triangle)
              </button>
            </div>

            {/* Philippine Distribution Standard Buttons */}
            <div>
              <span className="text-[10px] uppercase font-mono text-slate-400 block mb-1 font-bold">
                Philippine Grid Standards:
              </span>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <button
                  onClick={() => setSelectedStandard('ph_commercial')}
                  className={`p-2 rounded border text-left transition-colors ${
                    selectedStandard === 'ph_commercial'
                      ? 'bg-amber-500/15 border-amber-500 text-amber-300'
                      : 'bg-slate-950 border-slate-800 text-slate-400'
                  }`}
                >
                  <div className="font-bold">230V Line-to-Line</div>
                  <div className="text-[10px] text-slate-500">Meralco / Commercial Delta</div>
                </button>
                <button
                  onClick={() => setSelectedStandard('ph_industrial')}
                  className={`p-2 rounded border text-left transition-colors ${
                    selectedStandard === 'ph_industrial'
                      ? 'bg-amber-500/15 border-amber-500 text-amber-300'
                      : 'bg-slate-950 border-slate-800 text-slate-400'
                  }`}
                >
                  <div className="font-bold">400V / 230V Wye</div>
                  <div className="text-[10px] text-slate-500">Industrial 4-Wire Substation</div>
                </button>
              </div>
            </div>

            {/* Phase Load Impedance Slider */}
            <div>
              <div className="flex justify-between text-xs text-slate-300 mb-1">
                <span>Load Impedance Per Phase (Z_phase):</span>
                <span className="font-mono text-cyan-400 font-bold">{phaseLoadZ} Ω</span>
              </div>
              <input
                type="range"
                min="5"
                max="50"
                value={phaseLoadZ}
                onChange={(e) => setPhaseLoadZ(Number(e.target.value))}
                className="w-full accent-cyan-500 cursor-pointer"
              />
            </div>

            {/* Power Factor Slider */}
            <div>
              <div className="flex justify-between text-xs text-slate-300 mb-1">
                <span>Load Power Factor (pf):</span>
                <span className="font-mono text-emerald-400 font-bold">{threePhasePf.toFixed(2)}</span>
              </div>
              <input
                type="range"
                min="0.5"
                max="1.0"
                step="0.05"
                value={threePhasePf}
                onChange={(e) => setThreePhasePf(Number(e.target.value))}
                className="w-full accent-emerald-500 cursor-pointer"
              />
            </div>

            {/* Core Theory Callout */}
            <div className="bg-slate-950 border border-slate-800 p-3.5 rounded text-xs space-y-1.5">
              <div className="text-amber-400 font-semibold uppercase tracking-wider text-[10px]">
                {connectionType === 'WYE' ? 'Wye Rules to Remember:' : 'Delta Rules to Remember:'}
              </div>
              <p className="text-slate-300 leading-relaxed">
                {connectionType === 'WYE' ? (
                  <>
                    • <strong>V_line = √3 · V_phase</strong> ({lineVoltage3P} V vs {phaseVoltage3P} V)<br />
                    • <strong>I_line = I_phase</strong> ({lineCurrent3P.toFixed(1)} A)<br />
                    • Neutral wire allows single-phase 230V lighting loads to be connected from any line to Neutral!
                  </>
                ) : (
                  <>
                    • <strong>V_line = V_phase</strong> ({lineVoltage3P} V)<br />
                    • <strong>I_line = √3 · I_phase</strong> ({lineCurrent3P.toFixed(1)} A vs {phaseCurrent3P.toFixed(1)} A)<br />
                    • Notice: Because each phase sees full line voltage {lineVoltage3P}V, <strong>Delta delivers 3× more power ({totalRealPowerKw.toFixed(1)} kW) than Wye for the same load impedance!</strong>
                  </>
                )}
              </p>
            </div>
          </div>

          {/* Visual Diagram Column */}
          <div className="lg:col-span-7 border border-slate-800 bg-slate-900 p-5 rounded-lg space-y-4">
            <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
              {connectionType === 'WYE' ? 'Wye (Star) Schematic with Neutral' : 'Delta (Mesh) Closed Triangle Network'}
            </h4>

            <div className="bg-slate-950 p-4 rounded border border-slate-800 flex items-center justify-center">
              {connectionType === 'WYE' ? (
                <svg viewBox="0 0 320 220" className="w-80 h-56">
                  {/* Neutral Center */}
                  <circle cx="160" cy="110" r="6" fill="#ffffff" />
                  <text x="170" y="115" fill="#ffffff" fontSize="11" fontFamily="JetBrains Mono" fontWeight="bold">Neutral (N)</text>

                  {/* Phase A branch */}
                  <line x1="160" y1="110" x2="160" y2="25" stroke="#f59e0b" strokeWidth="3.5" />
                  <circle cx="160" cy="25" r="5" fill="#f59e0b" />
                  <text x="170" y="30" fill="#f59e0b" fontSize="11" fontFamily="JetBrains Mono" fontWeight="bold">Phase A ({phaseVoltage3P}V)</text>

                  {/* Phase B branch */}
                  <line x1="160" y1="110" x2="70" y2="165" stroke="#06b6d4" strokeWidth="3.5" />
                  <circle cx="70" cy="165" r="5" fill="#06b6d4" />
                  <text x="15" y="180" fill="#06b6d4" fontSize="11" fontFamily="JetBrains Mono" fontWeight="bold">Phase B</text>

                  {/* Phase C branch */}
                  <line x1="160" y1="110" x2="250" y2="165" stroke="#10b981" strokeWidth="3.5" />
                  <circle cx="250" cy="165" r="5" fill="#10b981" />
                  <text x="255" y="180" fill="#10b981" fontSize="11" fontFamily="JetBrains Mono" fontWeight="bold">Phase C</text>

                  <path d="M 160 25 Q 220 70 250 165" fill="none" stroke="#e2e8f0" strokeWidth="1.5" strokeDasharray="4 3" />
                  <text x="195" y="80" fill="#e2e8f0" fontSize="11" fontFamily="JetBrains Mono" fontWeight="bold">
                    V_line = √3·V_ph = {lineVoltage3P}V
                  </text>
                </svg>
              ) : (
                <svg viewBox="0 0 320 220" className="w-80 h-56">
                  {/* Delta polygon */}
                  <polygon points="160,25 60,175 260,175" fill="none" stroke="#f59e0b" strokeWidth="3.5" />
                  <circle cx="160" cy="25" r="6" fill="#f59e0b" />
                  <text x="150" y="16" fill="#f59e0b" fontSize="11" fontFamily="JetBrains Mono" fontWeight="bold">Line A ({lineCurrent3P.toFixed(1)}A)</text>

                  <circle cx="60" cy="175" r="6" fill="#06b6d4" />
                  <text x="10" y="195" fill="#06b6d4" fontSize="11" fontFamily="JetBrains Mono" fontWeight="bold">Line B</text>

                  <circle cx="260" cy="175" r="6" fill="#10b981" />
                  <text x="265" y="195" fill="#10b981" fontSize="11" fontFamily="JetBrains Mono" fontWeight="bold">Line C</text>

                  <text x="75" y="95" fill="#38bdf8" fontSize="11" fontFamily="JetBrains Mono">I_AB = {phaseCurrent3P.toFixed(1)}A</text>
                  <text x="190" y="95" fill="#34d399" fontSize="11" fontFamily="JetBrains Mono">I_CA = {phaseCurrent3P.toFixed(1)}A</text>
                  <text x="120" y="165" fill="#f59e0b" fontSize="11" fontFamily="JetBrains Mono">I_BC = {phaseCurrent3P.toFixed(1)}A</text>

                  <text x="95" y="125" fill="#e2e8f0" fontSize="11" fontFamily="JetBrains Mono">I_line = √3 · I_phase</text>
                </svg>
              )}
            </div>

            {/* Calculations Banner */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
              <div className="bg-slate-950 p-2.5 rounded border border-slate-800">
                <span className="text-slate-400 block text-[10px]">Line Voltage V_L</span>
                <span className="font-mono text-sm font-bold text-amber-400">{lineVoltage3P} V</span>
              </div>
              <div className="bg-slate-950 p-2.5 rounded border border-slate-800">
                <span className="text-slate-400 block text-[10px]">Line Current I_L</span>
                <span className="font-mono text-sm font-bold text-cyan-400">{lineCurrent3P.toFixed(1)} A</span>
              </div>
              <div className="bg-slate-950 p-2.5 rounded border border-slate-800">
                <span className="text-slate-400 block text-[10px]">Total Real Power</span>
                <span className="font-mono text-sm font-bold text-emerald-400">{totalRealPowerKw.toFixed(1)} kW</span>
              </div>
              <div className="bg-slate-950 p-2.5 rounded border border-slate-800">
                <span className="text-slate-400 block text-[10px]">Total Apparent S</span>
                <span className="font-mono text-sm font-bold text-slate-100">{totalApparentPowerKva.toFixed(1)} kVA</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ===================== SIMULATOR 3: AC INDUCTION MOTOR ===================== */}
      {activeTab === 'motor' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5 border border-slate-800 bg-slate-900 p-5 rounded-lg space-y-4">
            <h3 className="text-xs font-semibold text-slate-200 uppercase tracking-wider">Motor Nameplate &amp; Load Settings</h3>

            {/* Stator Poles Button Grid */}
            <div>
              <label className="text-[11px] text-slate-400 block mb-1">Stator Poles (P)</label>
              <div className="grid grid-cols-4 gap-2">
                {[2, 4, 6, 8].map((p) => (
                  <button
                    key={p}
                    onClick={() => setPoles(p)}
                    className={`py-2 rounded text-xs font-bold border transition-colors ${
                      poles === p
                        ? 'bg-amber-500 text-slate-950 border-amber-400'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {p} Poles
                  </button>
                ))}
              </div>
            </div>

            {/* Frequency Selection */}
            <div>
              <div className="flex justify-between text-xs text-slate-400 mb-1">
                <span>Supply Frequency:</span>
                <span className="font-mono text-amber-400 font-bold">{motorFreq} Hz</span>
              </div>
              <div className="flex gap-2">
                {[50, 60].map((f) => (
                  <button
                    key={f}
                    onClick={() => setMotorFreq(f)}
                    className={`flex-1 py-1.5 rounded text-xs font-bold border transition-colors ${
                      motorFreq === f
                        ? 'bg-amber-500 text-slate-950 border-amber-400'
                        : 'bg-slate-950 border-slate-800 text-slate-400'
                    }`}
                  >
                    {f} Hz {f === 60 ? '(Philippine Grid)' : ''}
                  </button>
                ))}
              </div>
            </div>

            {/* Load Slider & Presets */}
            <div>
              <div className="flex justify-between text-xs text-slate-300 mb-1">
                <span>Mechanical Shaft Load:</span>
                <span className="font-mono text-cyan-400 font-bold">{motorLoadPercent}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={motorLoadPercent}
                onChange={(e) => setMotorLoadPercent(Number(e.target.value))}
                className="w-full accent-cyan-500 cursor-pointer"
              />
              <div className="flex gap-1.5 mt-2">
                <button
                  onClick={() => setMotorLoadPercent(0)}
                  className="px-2 py-1 text-[10px] rounded bg-slate-950 border border-slate-800 text-slate-400 hover:text-white"
                >
                  No Load (0%)
                </button>
                <button
                  onClick={() => setMotorLoadPercent(50)}
                  className="px-2 py-1 text-[10px] rounded bg-slate-950 border border-slate-800 text-slate-400 hover:text-white"
                >
                  Half Load (50%)
                </button>
                <button
                  onClick={() => setMotorLoadPercent(100)}
                  className="px-2 py-1 text-[10px] rounded bg-slate-950 border border-slate-800 text-slate-400 hover:text-white"
                >
                  Full Load (100%)
                </button>
              </div>
            </div>

            {/* Physical Concept Box */}
            <div className="bg-slate-950 border border-slate-800 p-3.5 rounded text-xs space-y-1.5">
              <div className="text-amber-400 font-semibold uppercase tracking-wider text-[10px]">Physical Concept:</div>
              <p className="text-slate-300 leading-relaxed">
                Stator magnetic field spins at synchronous speed <strong className="text-cyan-400">{syncSpeed} RPM</strong>. 
                Rotor spins at <strong className="text-amber-400">{rotorSpeed} RPM</strong>. 
                The difference is the <strong className="text-emerald-400">Slip (s = {(motorSlip * 100).toFixed(2)}%)</strong>.
                If slip was zero, the magnetic field would not cut the rotor bars, and torque would collapse to zero!
              </p>
            </div>
          </div>

          {/* Tachometer & Dial Column */}
          <div className="lg:col-span-7 border border-slate-800 bg-slate-900 p-5 rounded-lg space-y-4">
            <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
              Synchronous Speed vs Rotor Speed Tachometer Dial
            </h4>

            <div className="grid grid-cols-3 gap-3">
              <div className="bg-slate-950 p-3 rounded border border-slate-800">
                <span className="text-[11px] text-slate-400 block">Stator Speed (Ns)</span>
                <span className="font-mono text-lg font-bold text-cyan-400">{syncSpeed} RPM</span>
                <div className="text-[10px] text-slate-400 font-mono mt-0.5">
                  <StackedFraction num="120 · f" den="P" />
                </div>
              </div>

              <div className="bg-slate-950 p-3 rounded border border-slate-800">
                <span className="text-[11px] text-slate-400 block">Shaft Speed (Nr)</span>
                <span className="font-mono text-lg font-bold text-amber-400">{rotorSpeed} RPM</span>
                <span className="text-[10px] text-slate-400 block font-mono mt-1">Ns · (1 - s)</span>
              </div>

              <div className="bg-slate-950 p-3 rounded border border-slate-800">
                <span className="text-[11px] text-slate-400 block">Rotor Slip (s)</span>
                <span className="font-mono text-lg font-bold text-emerald-400">{(motorSlip * 100).toFixed(2)}%</span>
                <div className="text-[10px] text-slate-400 font-mono mt-0.5">
                  <StackedFraction num="N_s - N_r" den="N_s" />
                </div>
              </div>
            </div>

            {/* Corrected Circular Tachometer Dial */}
            <div className="bg-slate-950 p-4 rounded border border-slate-800 flex items-center justify-center">
              <svg viewBox="0 0 300 180" className="w-80 h-44">
                {/* Semicircular background arc: from (40, 140) to (260, 140) */}
                <path d="M 40 140 A 110 110 0 0 1 260 140" fill="none" stroke="#334155" strokeWidth="14" strokeLinecap="round" />

                {/* Stator Synchronous Speed Marker Line (Cyan dashed) */}
                <line x1="150" y1="140" x2={syncMarkerX} y2={syncMarkerY} stroke="#06b6d4" strokeWidth="3" strokeDasharray="3 2" />
                <circle cx={syncMarkerX} cy={syncMarkerY} r="4" fill="#06b6d4" />
                <text x={syncMarkerX > 150 ? syncMarkerX - 45 : syncMarkerX + 10} y={syncMarkerY - 6} fill="#06b6d4" fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">
                  Ns: {syncSpeed}
                </text>

                {/* Rotor Speed Needle (Amber solid): Accurately oriented from 0 on left to 3600 on right */}
                <line x1="150" y1="140" x2={needleX} y2={needleY} stroke="#f59e0b" strokeWidth="3.5" />
                <circle cx="150" cy="140" r="7" fill="#f59e0b" />

                {/* Dial labels */}
                <text x="100" y="135" fill="#f59e0b" fontSize="16" fontFamily="JetBrains Mono" fontWeight="black">
                  {rotorSpeed} RPM
                </text>
                <text x="35" y="160" fill="#64748b" fontSize="10" fontFamily="JetBrains Mono">0</text>
                <text x="135" y="25" fill="#64748b" fontSize="10" fontFamily="JetBrains Mono">1800</text>
                <text x="245" y="160" fill="#64748b" fontSize="10" fontFamily="JetBrains Mono">3600</text>
              </svg>
            </div>

            <div className="space-y-1.5 text-xs text-slate-400">
              <div className="flex justify-between">
                <span>Rotor Copper Loss (s · P_airgap):</span>
                <span className="font-mono text-cyan-400 font-bold">{rotorCopperLossPct}% of air-gap power</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Shaft Torque:</span>
                <span className="font-mono text-emerald-400 font-bold">{shaftTorqueNm} N·m</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ===================== SIMULATOR 4: PEC VOLTAGE DROP ===================== */}
      {activeTab === 'pec' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5 border border-slate-800 bg-slate-900 p-5 rounded-lg space-y-4">
            <h3 className="text-xs font-semibold text-slate-200 uppercase tracking-wider">Branch Sizing &amp; Length Controls</h3>

            {/* Quick 1-Click Presets */}
            <div>
              <span className="text-[10px] uppercase font-mono text-slate-400 block mb-1 font-bold">
                Real-World PEC Presets:
              </span>
              <div className="grid grid-cols-2 gap-1.5 text-xs">
                <button
                  onClick={() => applyPecPreset('light')}
                  className="p-2 bg-slate-950 border border-slate-800 hover:border-amber-500 rounded text-left text-slate-200"
                >
                  <div className="font-bold text-amber-400">Lighting Branch</div>
                  <div className="text-[10px] text-slate-500">2.0 mm² • 12A • 18m</div>
                </button>
                <button
                  onClick={() => applyPecPreset('ac')}
                  className="p-2 bg-slate-950 border border-slate-800 hover:border-cyan-500 rounded text-left text-slate-200"
                >
                  <div className="font-bold text-cyan-400">Air-con Branch</div>
                  <div className="text-[10px] text-slate-500">3.5 mm² • 18A • 25m</div>
                </button>
                <button
                  onClick={() => applyPecPreset('feeder')}
                  className="p-2 bg-slate-950 border border-slate-800 hover:border-emerald-500 rounded text-left text-slate-200"
                >
                  <div className="font-bold text-emerald-400">Subpanel Feeder</div>
                  <div className="text-[10px] text-slate-500">8.0 mm² • 38A • 45m</div>
                </button>
                <button
                  onClick={() => applyPecPreset('main')}
                  className="p-2 bg-slate-950 border border-slate-800 hover:border-slate-500 rounded text-left text-slate-200"
                >
                  <div className="font-bold text-slate-300">Main Service Feeder</div>
                  <div className="text-[10px] text-slate-500">14.0 mm² • 60A • 60m</div>
                </button>
              </div>
            </div>

            {/* Wire Gauge Selector */}
            <div>
              <label className="text-[11px] text-slate-400 block mb-1">Copper Conductor Size (PEC 1)</label>
              <div className="grid grid-cols-2 gap-2">
                {Object.entries(wireData).map(([key, item]) => (
                  <button
                    key={key}
                    onClick={() => handleSelectWire(key as any)}
                    className={`p-2.5 rounded text-left border transition-colors ${
                      wireGauge === key
                        ? 'bg-amber-500 text-slate-950 border-amber-400 font-bold'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <div className="text-xs font-bold">{item.name}</div>
                    <div className={`text-[10px] ${wireGauge === key ? 'text-slate-900 font-medium' : 'text-slate-500'}`}>
                      {item.awg} • Max {item.ampacity}A
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Current Slider */}
            <div>
              <div className="flex justify-between text-xs text-slate-300 mb-1">
                <span>Load Current (I):</span>
                <span className="font-mono text-amber-400 font-bold">{safeCurrent} A</span>
              </div>
              <input
                type="range"
                min="5"
                max={selectedWire.ampacity}
                value={safeCurrent}
                onChange={(e) => setPecCurrent(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />
              <span className="text-[10px] text-slate-500">Conductor maximum ampacity: {selectedWire.ampacity} A</span>
            </div>

            {/* Distance Slider */}
            <div>
              <div className="flex justify-between text-xs text-slate-300 mb-1">
                <span>One-Way Run Distance:</span>
                <span className="font-mono text-cyan-400 font-bold">{pecLength} meters</span>
              </div>
              <input
                type="range"
                min="5"
                max="100"
                value={pecLength}
                onChange={(e) => setPecLength(Number(e.target.value))}
                className="w-full accent-cyan-500 cursor-pointer"
              />
            </div>
          </div>

          {/* Compliance Banner & Visualizer */}
          <div className="lg:col-span-7 border border-slate-800 bg-slate-900 p-5 rounded-lg space-y-4">
            <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
              Philippine Electrical Code (PEC) Compliance Status
            </h4>

            {/* Compliance Banner */}
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
                <span className="font-bold block text-sm">
                  {pecDropPercent <= 3.0
                    ? '✓ PEC Branch Circuit Compliant (≤ 3.0%)'
                    : pecDropPercent <= 5.0
                    ? 'Notice: Exceeds Branch Limit (3%), Within Feeder Limit (≤ 5.0%)'
                    : 'NON-COMPLIANT: Voltage Drop Exceeds 5% Code Maximum!'}
                </span>
                <span className="text-xs opacity-80">
                  {pecDropPercent > 3.0
                    ? 'Upsize conductor size to lower resistance and eliminate excessive thermal losses.'
                    : 'Safe, energy-efficient wire sizing meeting Philippine licensure examination standards.'}
                </span>
              </div>
              <div className="text-2xl font-mono font-black">{pecDropPercent.toFixed(2)}%</div>
            </div>

            {/* Conductor Visual Cross Section & Thermal Loss */}
            <div className="bg-slate-950 p-4 rounded border border-slate-800 flex items-center justify-around text-xs">
              <div className="text-center">
                <span className="text-slate-400 block text-[10px] uppercase font-mono">Conductor Cross-Section</span>
                <div className="w-16 h-16 rounded-full border border-slate-700 bg-slate-900 flex items-center justify-center mx-auto my-1.5">
                  <div
                    className="rounded-full bg-amber-500 shadow-sm"
                    style={{
                      width: `${selectedWire.diamMm * 9}px`,
                      height: `${selectedWire.diamMm * 9}px`,
                    }}
                  />
                </div>
                <span className="font-mono text-slate-200 font-bold">{selectedWire.name} ({selectedWire.awg})</span>
              </div>

              <div className="space-y-1.5 text-left border-l border-slate-800 pl-6">
                <div>
                  <span className="text-slate-400 block text-[10px]">Voltage Drop:</span>
                  <span className="font-mono text-sm font-bold text-slate-100">{pecVoltageDrop.toFixed(2)} V</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px]">Voltage Delivered at Load:</span>
                  <span className="font-mono text-sm font-bold text-amber-400">{loadVoltage.toFixed(1)} V</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px]">Cable Heat Dissipation (I²R):</span>
                  <span className="font-mono text-sm font-bold text-rose-400">{wirePowerLossW.toFixed(1)} Watts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
