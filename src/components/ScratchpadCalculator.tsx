import React, { useState } from 'react';

interface ScratchpadCalculatorProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ScratchpadCalculator: React.FC<ScratchpadCalculatorProps> = ({ isOpen, onClose }) => {
  const [calcInput, setCalcInput] = useState<string>('');
  const [calcResult, setCalcResult] = useState<string>('');
  const [notes, setNotes] = useState<string>(() => {
    return localStorage.getItem('ree_study_scratchpad') || '';
  });

  if (!isOpen) return null;

  const handleCalculate = () => {
    try {
      // Safe math evaluation with Math functions exposed
      const sanitized = calcInput
        .replace(/sqrt\(/g, 'Math.sqrt(')
        .replace(/sin\(/g, 'Math.sin(')
        .replace(/cos\(/g, 'Math.cos(')
        .replace(/tan\(/g, 'Math.tan(')
        .replace(/atan\(/g, 'Math.atan(')
        .replace(/pi/gi, 'Math.PI')
        .replace(/\^/g, '**');

      // Simple math expression evaluator
      // eslint-disable-next-line no-new-func
      const result = Function(`"use strict"; return (${sanitized})`)();
      if (typeof result === 'number' && !isNaN(result)) {
        setCalcResult(Number(result.toFixed(4)).toString());
      } else {
        setCalcResult('Error');
      }
    } catch (e) {
      setCalcResult('Syntax Error');
    }
  };

  const handleNotesChange = (text: string) => {
    setNotes(text);
    localStorage.setItem('ree_study_scratchpad', text);
  };

  return (
    <div className="fixed bottom-4 right-4 w-80 sm:w-96 bg-slate-900 border border-slate-700 rounded-lg shadow-2xl z-50 overflow-hidden flex flex-col font-sans">
      {/* Header */}
      <div className="bg-slate-950 px-3.5 py-2.5 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <span className="text-xs font-bold text-slate-100 uppercase tracking-wider">Engineering Scratchpad &amp; Quick Calc</span>
        </div>
        <button
          onClick={onClose}
          className="text-slate-400 hover:text-slate-100 text-xs px-1.5 py-0.5 rounded hover:bg-slate-800"
          title="Close scratchpad"
        >
          ✕
        </button>
      </div>

      <div className="p-3.5 space-y-3">
        {/* Quick Calculator */}
        <div className="space-y-1.5">
          <span className="text-[10px] uppercase font-mono text-slate-400 block font-bold">Quick Math Evaluator:</span>
          <div className="flex gap-1.5">
            <input
              type="text"
              value={calcInput}
              onChange={(e) => setCalcInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleCalculate();
              }}
              placeholder="e.g. sqrt(30^2 + 40^2) or 230 / sqrt(3)"
              className="flex-1 bg-slate-950 border border-slate-800 rounded px-2.5 py-1 text-xs text-slate-200 font-mono focus:outline-none focus:border-amber-500"
            />
            <button
              onClick={handleCalculate}
              className="px-3 py-1 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold rounded"
            >
              =
            </button>
          </div>

          {calcResult && (
            <div className="bg-slate-950 p-2 rounded border border-slate-800 flex justify-between items-center text-xs">
              <span className="text-slate-400 text-[11px]">Result:</span>
              <span className="font-mono font-bold text-amber-300 text-sm">{calcResult}</span>
            </div>
          )}

          {/* Quick Calc Buttons */}
          <div className="grid grid-cols-4 gap-1 text-[11px] font-mono">
            <button
              onClick={() => setCalcInput((prev) => prev + 'sqrt(')}
              className="p-1 bg-slate-950 hover:bg-slate-800 border border-slate-800 rounded text-slate-300"
            >
              √
            </button>
            <button
              onClick={() => setCalcInput((prev) => prev + '^2')}
              className="p-1 bg-slate-950 hover:bg-slate-800 border border-slate-800 rounded text-slate-300"
            >
              x²
            </button>
            <button
              onClick={() => setCalcInput((prev) => prev + ' * sqrt(3)')}
              className="p-1 bg-slate-950 hover:bg-slate-800 border border-slate-800 rounded text-slate-300"
            >
              ×√3
            </button>
            <button
              onClick={() => setCalcInput((prev) => prev + ' / sqrt(3)')}
              className="p-1 bg-slate-950 hover:bg-slate-800 border border-slate-800 rounded text-slate-300"
            >
              ÷√3
            </button>
          </div>
        </div>

        {/* Scratchpad Textarea */}
        <div className="space-y-1">
          <div className="flex justify-between items-center">
            <span className="text-[10px] uppercase font-mono text-slate-400 font-bold">Jot Down Numbers &amp; Notes:</span>
            <button
              onClick={() => handleNotesChange('')}
              className="text-[10px] text-slate-500 hover:text-slate-300"
            >
              Clear
            </button>
          </div>
          <textarea
            value={notes}
            onChange={(e) => handleNotesChange(e.target.value)}
            rows={4}
            placeholder="Write down intermediate values:&#10;V = 230V, Z = 50 ohms&#10;I = 4.6A, PF = 0.8..."
            className="w-full bg-slate-950 border border-slate-800 rounded p-2 text-xs text-slate-200 font-mono resize-none focus:outline-none focus:border-amber-500 leading-relaxed"
          />
        </div>
      </div>
    </div>
  );
};
