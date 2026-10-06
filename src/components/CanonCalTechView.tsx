import React, { useState } from 'react';
import { CleanMath } from './CleanMath';
import { ESAS_DRIVE_SAMPLE_PROBLEMS } from '../data/driveSampleProblems';

export interface CalTechPreset {
  id: string;
  category: 'Time Value of Money' | 'Annuities' | 'Depreciation' | 'Capitalized Cost' | 'Gradients & Bonds' | 'Break-Even & IRR';
  title: string;
  boardProblemPrompt: string;
  formula: string;
  canonMode: string;
  keystrokes: {
    key: string;
    action: string;
    note?: string;
  }[];
  displayOutput: string;
  proTip: string;
  boardExamNote: string;
}

export const CALTECH_PRESETS: CalTechPreset[] = [
  // ==================== TIME VALUE OF MONEY ====================
  {
    id: 'ct-tvm-1',
    category: 'Time Value of Money',
    title: 'Compound Interest Future Worth (F = P(1+i)ⁿ)',
    boardProblemPrompt: 'Find the future worth of ₱100,000 deposited for 5 years at 8% compounded quarterly.',
    formula: 'F = P · (1 + i)^n = 100,000 · (1 + 0.08 / 4)^(4 · 5)',
    canonMode: 'MODE 1 (COMP)',
    keystrokes: [
      { key: '[MODE]', action: 'Press [MODE]' },
      { key: '[1]', action: 'Select 1: COMP' },
      { key: '100000', action: 'Enter Principal P' },
      { key: '[×]', action: 'Multiply' },
      { key: '[(]', action: 'Open parenthesis' },
      { key: '1 [+] 0.08 [÷] 4', action: 'Enter (1 + r/m)' },
      { key: '[)]', action: 'Close parenthesis' },
      { key: '[xʸ]', action: 'Power key' },
      { key: '[(] 4 [×] 5 [)]', action: 'Exponent (m · t)' },
      { key: '[=]', action: 'Execute calculation' }
    ],
    displayOutput: '148594.7396',
    proTip: 'On Canon F-789SGA, use the [xʸ] key located just below the replay pad for exponents.',
    boardExamNote: 'Divide annual rate by m (4 for quarterly, 12 for monthly) and multiply years by m.'
  },
  {
    id: 'ct-tvm-2',
    category: 'Time Value of Money',
    title: 'Doubling Time Solver via [SHIFT] [SOLVE]',
    boardProblemPrompt: 'How many years will it take for an investment to double at 9% compounded semi-annually?',
    formula: '2 = (1 + 0.09 / 2)^(2X)',
    canonMode: 'MODE 1 (COMP) -> SOLVE',
    keystrokes: [
      { key: '2', action: 'Enter 2 (doubling factor)' },
      { key: '[ALPHA]', action: 'Press ALPHA' },
      { key: '[=]', action: 'Insert red equality sign (CALC key)' },
      { key: '[(] 1 [+] 0.09 [÷] 2 [)]', action: 'Enter periodic base' },
      { key: '[xʸ]', action: 'Power key' },
      { key: '[(] 2 [ALPHA] [X] [)]', action: 'Type 2X into exponent' },
      { key: '[SHIFT]', action: 'Press SHIFT' },
      { key: '[SOLVE]', action: 'Trigger Newton-Raphson solver (CALC key)' },
      { key: '8 [=]', action: 'Supply initial guess: X = 8, then press [=]' }
    ],
    displayOutput: 'X = 7.871987\nL - R = 0',
    proTip: 'When Canon F-789SGA asks "X?", type an educated guess like 8 before pressing [=] to make it converge in 1 second!',
    boardExamNote: 'L - R = 0 on the Canon F-789SGA display confirms the solution is 100% numerically exact.'
  },
  {
    id: 'ct-tvm-3',
    category: 'Time Value of Money',
    title: 'Effective Annual Rate (ER) from Nominal Compounding',
    boardProblemPrompt: 'Find the effective annual rate for 12% compounded monthly.',
    formula: 'ER = (1 + 0.12 / 12)^12 - 1',
    canonMode: 'MODE 1 (COMP)',
    keystrokes: [
      { key: '[(] 1 [+] 0.12 [÷] 12 [)]', action: 'Enter base (1 + r/m)' },
      { key: '[xʸ] 12', action: 'Raise to power 12' },
      { key: '[-] 1', action: 'Subtract 1' },
      { key: '[=]', action: 'Execute' },
      { key: '[×] 100 [=]', action: 'Convert to percentage' }
    ],
    displayOutput: '12.682503',
    proTip: 'For continuous compounding at 12%: Press [SHIFT] [ln] (eˣ), type 0.12, press [-] 1 [=]. Result is 12.75%.',
    boardExamNote: 'Effective rate is ALWAYS higher than nominal rate for compounding frequencies m > 1.'
  },

  // ==================== ANNUITIES ====================
  {
    id: 'ct-ann-1',
    category: 'Annuities',
    title: 'Ordinary Annuity Present Worth (P = A·[(1-(1+i)⁻ⁿ)/i])',
    boardProblemPrompt: 'Find the cash value of ₱15,000 paid at the end of every month for 3 years at 12% compounded monthly.',
    formula: 'P = 15,000 · [ (1 - (1 + 0.01)^(-36)) / 0.01 ]',
    canonMode: 'MODE 1 (COMP)',
    keystrokes: [
      { key: '15000', action: 'Enter periodic payment A' },
      { key: '[×]', action: 'Multiply' },
      { key: '[■/□]', action: 'Press natural fraction key' },
      { key: '1 [-] [(] 1 [+] 0.01 [)] [xʸ] -36', action: 'Type numerator' },
      { key: '[▼]', action: 'Down arrow to denominator' },
      { key: '0.01', action: 'Enter periodic rate i' },
      { key: '[=]', action: 'Evaluate' }
    ],
    displayOutput: '451612.56',
    proTip: 'Use Canon F-789SGA natural fraction key [■/□] so you never need nested parentheses!',
    boardExamNote: 'If payments are made at the BEGINNING of each period (Annuity Due), simply multiply the answer by (1 + i).'
  },
  {
    id: 'ct-ann-2',
    category: 'Annuities',
    title: 'Sinking Fund Uniform Deposit (A = F·[i/((1+i)ⁿ - 1)])',
    boardProblemPrompt: 'What uniform annual deposit A is needed to accumulate ₱1,000,000 in 10 years at 8% compounded annually?',
    formula: 'A = 1,000,000 · [ 0.08 / ((1 + 0.08)^10 - 1) ]',
    canonMode: 'MODE 1 (COMP)',
    keystrokes: [
      { key: '1000000 [×]', action: 'Future sum target F' },
      { key: '[■/□]', action: 'Fraction key' },
      { key: '0.08', action: 'Numerator i' },
      { key: '[▼]', action: 'Down arrow' },
      { key: '[(] 1.08 [)] [xʸ] 10 [-] 1', action: 'Denominator ((1+i)^n - 1)' },
      { key: '[=]', action: 'Evaluate' }
    ],
    displayOutput: '69029.4887',
    proTip: 'Deposit ₱69,029.49 each year. Store 0.08 in [STO] [A] if calculating multiple terms.',
    boardExamNote: 'Sinking fund factor A/F is the reciprocal of the uniform series compound amount factor F/A.'
  },
  {
    id: 'ct-ann-3',
    category: 'Annuities',
    title: 'Deferred Annuity (P₀ = P_ordinary · (1+i)⁻ᵐ)',
    boardProblemPrompt: 'A loan of ₱100,000 is to be settled in 5 equal annual payments starting 3 years from today at 10% per year. Find payment A.',
    formula: '100,000 = A · [ (1 - 1.10^(-5)) / 0.10 ] · (1.10)^(-2)',
    canonMode: 'MODE 1 (COMP) -> SOLVE',
    keystrokes: [
      { key: '100000 [ALPHA] [=]', action: 'Enter 100000 =' },
      { key: '[ALPHA] [X] [×]', action: 'Unknown payment variable X' },
      { key: '[■/□] 1 [-] 1.10 [xʸ] -5 [▼] 0.10', action: 'Ordinary annuity factor' },
      { key: '[▶] [×] 1.10 [xʸ] -2', action: 'Discount factor for m = 2 deferred years' },
      { key: '[SHIFT] [SOLVE]', action: 'Trigger Canon solver' },
      { key: '30000 [=]', action: 'Initial guess: 30000' }
    ],
    displayOutput: 'X = 31919.46\nL - R = 0',
    proTip: 'The deferred period m is always (Period of first payment - 1). For payment starting at t=3, m = 2.',
    boardExamNote: 'Never discount by 3 years! Payment 1 already covers Year 3 interest.'
  },

  // ==================== DEPRECIATION ====================
  {
    id: 'ct-dep-1',
    category: 'Depreciation',
    title: 'Sum-of-the-Years-Digits (SOYD) with Canon [Σ] Trick',
    boardProblemPrompt: 'A ₱500,000 generator has SV = ₱50,000 after 8 years. Find depreciation in Year 3 using SOYD.',
    formula: 'd₃ = (500,000 - 50,000) · [ (8 - 3 + 1) / Σ ], where Σ = 8(9)/2 = 36',
    canonMode: 'MODE 1 (COMP)',
    keystrokes: [
      { key: '[(] 500000 [-] 50000 [)]', action: 'Depreciable amount (FC - SV)' },
      { key: '[×] [■/□]', action: 'Multiply by fraction' },
      { key: '8 [-] 3 [+] 1', action: 'Reverse digit numerator = 6' },
      { key: '[▼]', action: 'Down arrow to denominator' },
      { key: '8 [×] 9 [÷] 2', action: 'Sum of digits: n(n+1)/2 = 36' },
      { key: '[=]', action: 'Evaluate' }
    ],
    displayOutput: '75000',
    proTip: 'For large n (e.g. n=30), compute Σ directly on Canon F-789SGA using [SHIFT] [log] (Σ), type [ALPHA] [X], from 1 to 30.',
    boardExamNote: 'In SOYD, reverse digit for year m is ALWAYS (n - m + 1).'
  },
  {
    id: 'ct-dep-2',
    category: 'Depreciation',
    title: 'Declining Balance (Matheson Formula k = 1 - ⁿ√(SV/FC))',
    boardProblemPrompt: 'A ₱600,000 motor has SV = ₱60,000 after 5 years. Find depreciation rate k and Year 2 book value BV₂.',
    formula: 'k = 1 - (60,000 / 600,000)^(1/5),   BV₂ = 600,000 · (1 - k)²',
    canonMode: 'MODE 1 (COMP)',
    keystrokes: [
      { key: '1 [-] [(] 60000 [÷] 600000 [)] [xʸ] [(] 1 [÷] 5 [)] [=]', action: 'Calculate rate k' },
      { key: '[SHIFT] [STO] [A]', action: 'Store rate k into Memory A (0.36904)' },
      { key: '600000 [×] [(] 1 [-] [ALPHA] [A] [)] [x²] [=]', action: 'Compute BV₂ = FC · (1 - k)²' }
    ],
    displayOutput: 'BV₂ = 238861.64',
    proTip: 'Storing intermediate rates into Canon memory [A] guarantees zero rounding error across all sub-questions!',
    boardExamNote: 'For Double Declining Balance (DDBM), k is simply 2 / n, and SV is ignored until floor.'
  },

  // ==================== CAPITALIZED COST ====================
  {
    id: 'ct-cap-1',
    category: 'Capitalized Cost',
    title: 'Perpetual Capitalized Cost (CC = FC + OM/i + RC/((1+i)ᵏ - 1))',
    boardProblemPrompt: 'A hydro weir costs ₱15,000,000 with annual O&M of ₱400,000 and ₱2,500,000 gate replacement every 12 years. At i = 8%, find CC.',
    formula: 'CC = 15,000,000 + (400,000 / 0.08) + [ 2,500,000 / ((1.08)^12 - 1) ]',
    canonMode: 'MODE 1 (COMP)',
    keystrokes: [
      { key: '15000000 [+] 400000 [÷] 0.08', action: 'First Cost + Perpetual O&M' },
      { key: '[+]', action: 'Add periodic renewal' },
      { key: '[■/□] 2500000', action: 'Replacement numerator RC' },
      { key: '[▼] [(] 1.08 [)] [xʸ] 12 [-] 1', action: 'Denominator ((1+i)^k - 1)' },
      { key: '[=]', action: 'Evaluate total Capitalized Cost' }
    ],
    displayOutput: '21646749.8',
    proTip: 'The denominator for periodic replacement is ((1+i)^k - 1), NEVER subtract 1 in the annual OM term!',
    boardExamNote: 'Result rounded to board exam choices is ₱21,647,000.'
  },

  // ==================== BREAK-EVEN & IRR ====================
  {
    id: 'ct-irr-1',
    category: 'Break-Even & IRR',
    title: 'Internal Rate of Return (IRR) via [SHIFT] [SOLVE]',
    boardProblemPrompt: 'A solar installation costs ₱400,000 and saves ₱85,000 annually for 7 years with zero salvage value. Find the internal rate of return (IRR).',
    formula: '400,000 = 85,000 · [ (1 - (1 + X)^(-7)) / X ]',
    canonMode: 'MODE 1 (COMP) -> SOLVE',
    keystrokes: [
      { key: '400000 [ALPHA] [=]', action: 'Type 400000 =' },
      { key: '85000 [×] [■/□]', action: 'Multiply by fraction' },
      { key: '1 [-] [(] 1 [+] [ALPHA] [X] [)] [xʸ] -7', action: 'Numerator with variable X' },
      { key: '[▼] [ALPHA] [X]', action: 'Denominator X' },
      { key: '[SHIFT] [SOLVE]', action: 'Trigger Newton-Raphson solver' },
      { key: '0.1 [=]', action: 'Initial guess: X = 0.1 (10%)' }
    ],
    displayOutput: 'X = 0.11721\nL - R = 0',
    proTip: 'Multiplied by 100, IRR is 11.72%. Never guess randomly; supplying 0.1 solves within 2 seconds.',
    boardExamNote: 'IRR is the exact interest rate that brings Net Present Worth (NPW) of all cash flows to zero.'
  },
  {
    id: 'ct-be-1',
    category: 'Break-Even & IRR',
    title: 'Break-Even Volume & Margin (Q = FC / (p - v))',
    boardProblemPrompt: 'Fixed overhead is ₱1,800,000. Unit selling price is ₱560 and variable cost is ₱320. Find break-even volume.',
    formula: 'Q_BEP = 1,800,000 / (560 - 320)',
    canonMode: 'MODE 1 (COMP)',
    keystrokes: [
      { key: '1800000 [÷] [(] 560 [-] 320 [)] [=]', action: 'Evaluate break-even quantity' },
      { key: '[×] 560 [=]', action: 'Optional: Multiply by p to get Break-Even Sales in Pesos' }
    ],
    displayOutput: 'Q = 7500 units\nSales = ₱4,200,000',
    proTip: 'Contribution Margin is (p - v) = ₱240/unit. Each unit sold covers ₱240 of fixed overhead.',
    boardExamNote: 'If asked for profit at sales Q = 10,000: Profit = (10,000 - 7,500) × 240 = ₱600,000.'
  }
];

export const CanonCalTechView: React.FC<{
  onSelectTopicForPractice?: () => void;
  onGoToDriveProblems?: () => void;
}> = ({ onSelectTopicForPractice, onGoToDriveProblems }) => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [selectedPreset, setSelectedPreset] = useState<CalTechPreset>(CALTECH_PRESETS[0]);
  const [simStepIndex, setSimStepIndex] = useState<number>(selectedPreset.keystrokes.length);

  const categories = [
    'ALL',
    'Time Value of Money',
    'Annuities',
    'Depreciation',
    'Capitalized Cost',
    'Break-Even & IRR'
  ];

  const filteredPresets = activeCategory === 'ALL'
    ? CALTECH_PRESETS
    : CALTECH_PRESETS.filter(p => p.category === activeCategory);

  const handleSelectPreset = (preset: CalTechPreset) => {
    setSelectedPreset(preset);
    setSimStepIndex(preset.keystrokes.length);
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="border border-slate-800 bg-slate-900 p-5 rounded-lg space-y-3">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-amber-400/10 text-amber-400 border border-amber-400/20 font-bold">
                PRC Approved Calculator
              </span>
              <span className="text-[10px] font-mono text-slate-400">
                Official REE Board Standard
              </span>
            </div>
            <h1 className="text-xl font-bold text-slate-100 tracking-tight mt-1">
              Canon F-789SGA Calculator Techniques (CalTech)
            </h1>
            <p className="text-xs text-slate-400 max-w-2xl mt-0.5">
              Exact key sequences, memory storage tricks, and Newton-Raphson <code className="text-amber-300 font-mono">[SHIFT] [SOLVE]</code> shortcuts for Engineering Economics based on the <strong className="text-slate-200">ESAS - Engineering Economics</strong> drive syllabus.
            </p>
          </div>

          <div className="flex items-center gap-2">
            {onGoToDriveProblems && (
              <button
                onClick={onGoToDriveProblems}
                className="px-3 py-1.5 rounded text-xs font-semibold bg-slate-950 border border-slate-800 hover:border-slate-700 text-amber-300 transition-colors whitespace-nowrap flex items-center gap-1.5"
              >
                <span>Drive Sample Problems ({ESAS_DRIVE_SAMPLE_PROBLEMS.length})</span>
                <span>↗</span>
              </button>
            )}

            {onSelectTopicForPractice && (
              <button
                onClick={onSelectTopicForPractice}
                className="px-3 py-1.5 rounded text-xs font-semibold bg-amber-500 text-slate-950 hover:bg-amber-400 transition-colors whitespace-nowrap"
              >
                Practice Board Questions
              </button>
            )}
          </div>
        </div>

        {/* Quick Calculator Vital Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-slate-800 text-[11px]">
          <div className="bg-slate-950/60 p-2 rounded border border-slate-800/80">
            <span className="text-slate-400 block font-mono text-[10px]">SOLVER SPEED</span>
            <span className="text-slate-200 font-medium">Newton-Raphson (1-3s)</span>
          </div>
          <div className="bg-slate-950/60 p-2 rounded border border-slate-800/80">
            <span className="text-slate-400 block font-mono text-[10px]">MEMORIES</span>
            <span className="text-slate-200 font-medium">19 Variables (A-F, X, Y, M)</span>
          </div>
          <div className="bg-slate-950/60 p-2 rounded border border-slate-800/80">
            <span className="text-slate-400 block font-mono text-[10px]">DISPLAY</span>
            <span className="text-slate-200 font-medium">Natural Textbook (4-Line)</span>
          </div>
          <div className="bg-slate-950/60 p-2 rounded border border-slate-800/80">
            <span className="text-slate-400 block font-mono text-[10px]">TOTAL FUNCTIONS</span>
            <span className="text-amber-400 font-medium font-mono">605 Engineering Functions</span>
          </div>
        </div>
      </div>

      {/* Main Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Preset Catalog & Filter */}
        <div className="lg:col-span-5 space-y-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1.5 pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-2.5 py-1 rounded text-[11px] font-medium transition-colors ${
                  activeCategory === cat
                    ? 'bg-amber-500 text-slate-950 font-semibold'
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* List of Presets */}
          <div className="space-y-2.5">
            {filteredPresets.map((preset) => {
              const isSelected = selectedPreset.id === preset.id;
              return (
                <div
                  key={preset.id}
                  onClick={() => handleSelectPreset(preset)}
                  className={`p-3.5 rounded-lg border cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-slate-900 border-amber-500/80 shadow-sm shadow-amber-500/10'
                      : 'bg-slate-950 border-slate-800/80 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-[10px] font-mono uppercase text-amber-400 font-bold">
                      {preset.category}
                    </span>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">
                      {preset.canonMode}
                    </span>
                  </div>
                  <h3 className="text-xs font-semibold text-slate-100">
                    {preset.title}
                  </h3>
                  <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">
                    {preset.boardProblemPrompt}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Interactive Canon F-789SGA Simulator & Keystroke Screen */}
        <div className="lg:col-span-7 space-y-4">
          {/* Virtual Calculator Display Box */}
          <div className="border border-slate-800 bg-slate-950 rounded-lg p-5 space-y-4 shadow-xl">
            {/* Top Bar of Calculator Screen */}
            <div className="border border-slate-700/80 bg-[#0f172a] rounded p-4 font-mono space-y-3">
              <div className="flex items-center justify-between text-[10px] text-slate-400 border-b border-slate-800 pb-1.5">
                <div className="flex items-center gap-3">
                  <span className="text-amber-400 font-bold">CANON F-789SGA</span>
                  <span className="text-emerald-400">MATH</span>
                  <span className="text-sky-400">DEG</span>
                </div>
                <span className="text-slate-400">{selectedPreset.canonMode}</span>
              </div>

              {/* Natural Math Display Screen */}
              <div className="space-y-1 py-1">
                <div className="text-[11px] text-slate-400">Problem Statement:</div>
                <div className="text-xs text-slate-200 italic font-sans">
                  "{selectedPreset.boardProblemPrompt}"
                </div>
                <div className="pt-2 text-[11px] text-amber-300/90 font-mono">
                  Input Formulation:
                </div>
                <div className="p-2 rounded bg-slate-900 border border-slate-800 text-xs text-slate-100 overflow-x-auto whitespace-pre-wrap">
                  {selectedPreset.formula}
                </div>
              </div>

              {/* LCD Output Line */}
              <div className="border-t border-slate-800 pt-2 flex items-baseline justify-between">
                <span className="text-[10px] text-slate-400">Result Display:</span>
                <span className="text-sm font-bold text-emerald-400 tracking-wider">
                  {selectedPreset.displayOutput}
                </span>
              </div>
            </div>

            {/* Step-by-Step Keystroke Sequence */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-2">
                  <span>Physical Keystrokes Sequence</span>
                </h4>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setSimStepIndex(Math.max(1, simStepIndex - 1))}
                    disabled={simStepIndex <= 1}
                    className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] text-slate-300 disabled:opacity-40"
                  >
                    Previous Key
                  </button>
                  <button
                    onClick={() => setSimStepIndex(Math.min(selectedPreset.keystrokes.length, simStepIndex + 1))}
                    disabled={simStepIndex >= selectedPreset.keystrokes.length}
                    className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] text-slate-300 disabled:opacity-40"
                  >
                    Next Key
                  </button>
                  <button
                    onClick={() => setSimStepIndex(selectedPreset.keystrokes.length)}
                    className="px-2 py-0.5 rounded bg-amber-500 text-slate-950 font-bold text-[10px]"
                  >
                    Show All
                  </button>
                </div>
              </div>

              {/* Key Chips */}
              <div className="space-y-2">
                {selectedPreset.keystrokes.slice(0, simStepIndex).map((step, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-2 rounded bg-slate-900/80 border border-slate-800/80 text-xs"
                  >
                    <span className="text-[10px] font-mono text-slate-400 w-4">
                      {idx + 1}.
                    </span>
                    <span className="px-2 py-0.5 rounded font-mono font-bold text-[11px] bg-slate-800 text-amber-300 border border-slate-700 shadow-sm shrink-0">
                      {step.key}
                    </span>
                    <span className="text-slate-300 text-xs">
                      {step.action}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pro Tips & Pitfalls */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
              <div className="p-3 rounded border border-amber-900/30 bg-amber-950/10 space-y-1">
                <span className="text-[10px] font-mono uppercase font-bold text-amber-400 block">
                  Canon F-789SGA Pro-Tip
                </span>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  {selectedPreset.proTip}
                </p>
              </div>

              <div className="p-3 rounded border border-sky-900/30 bg-sky-950/10 space-y-1">
                <span className="text-[10px] font-mono uppercase font-bold text-sky-400 block">
                  Board Exam Trap to Avoid
                </span>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  {selectedPreset.boardExamNote}
                </p>
              </div>
            </div>
          </div>

          {/* Essential Canon F-789SGA Cheat Guide */}
          <div className="border border-slate-800 bg-slate-900/90 p-4 rounded-lg space-y-3">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
              Must-Know Canon F-789SGA Shortcodes for the Board Exam
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
              <div className="space-y-1 bg-slate-950 p-2.5 rounded border border-slate-800">
                <span className="text-amber-400 font-mono font-semibold block text-[11px]">
                  1. Solve Equation for Variable X
                </span>
                <p className="text-[11px] text-slate-400">
                  Type equation with <code className="text-slate-200">[ALPHA] [=]</code>. Press <code className="text-slate-200">[SHIFT] [SOLVE]</code>, provide initial guess, then press <code className="text-slate-200">[=]</code>.
                </p>
              </div>

              <div className="space-y-1 bg-slate-950 p-2.5 rounded border border-slate-800">
                <span className="text-amber-400 font-mono font-semibold block text-[11px]">
                  2. Store Intermediate Number into Memory
                </span>
                <p className="text-[11px] text-slate-400">
                  Calculate result, then press <code className="text-slate-200">[SHIFT] [STO] [A]</code> (or B, C, D). Recall anytime via <code className="text-slate-200">[ALPHA] [A]</code>.
                </p>
              </div>

              <div className="space-y-1 bg-slate-950 p-2.5 rounded border border-slate-800">
                <span className="text-amber-400 font-mono font-semibold block text-[11px]">
                  3. Clean Clear Without Resetting Mode
                </span>
                <p className="text-[11px] text-slate-400">
                  Press <code className="text-slate-200">[SHIFT] [9:CLR] [2:Memory] [=]</code> to purge all 19 memories while preserving Natural Display & Degree mode settings.
                </p>
              </div>

              <div className="space-y-1 bg-slate-950 p-2.5 rounded border border-slate-800">
                <span className="text-amber-400 font-mono font-semibold block text-[11px]">
                  4. Natural Fraction Display [■/□]
                </span>
                <p className="text-[11px] text-slate-400">
                  Always use the natural fraction key for annuities and capitalized cost. Press <code className="text-slate-200">[S-D]</code> to toggle between exact fraction and decimal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
