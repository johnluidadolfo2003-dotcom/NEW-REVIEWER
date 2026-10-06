import React, { useState, useEffect } from 'react';
import { CleanMath } from './CleanMath';
import { ESAS_DRIVE_SAMPLE_PROBLEMS } from '../data/driveSampleProblems';

interface DayModule {
  dayNumber: number;
  title: string;
  subtitle: string;
  estimatedHours: string;
  sourceDoc: string;
  boardWeight: string;
  oneMinuteIntuition: string;
  coreFormulas: {
    name: string;
    formula: string;
    variables: string;
  }[];
  canonCalTechSummary: {
    feature: string;
    mode: string;
    quickKeys: string;
    proTip: string;
  };
  sampleProblemIds: string[];
}

export const SEVEN_DAY_ECONOMICS_CURRICULUM: DayModule[] = [
  {
    dayNumber: 1,
    title: 'Simple & Compound Interest',
    subtitle: 'Ordinary (360 days) vs Exact (365 days), Compound Lump Sum, and Solving for Unknown Time',
    estimatedHours: '1.5 Hours',
    sourceDoc: '01_Compound_Interest_Time_Value_Money.pdf',
    boardWeight: '18% of Engineering Economics',
    oneMinuteIntuition: 'Simple interest only pays on the original principal. Compound interest pays interest on your principal PLUS all previously accumulated interest. To find how many years it takes to double or triple, let the Canon F-789SGA solve the unknown exponent directly with SHIFT SOLVE.',
    coreFormulas: [
      {
        name: 'Ordinary Simple Interest',
        formula: 'I_{ord} = P \\cdot i \\cdot \\frac{d}{360}',
        variables: 'P: Principal, i: annual rate, d: days (banker\'s 360-day year)'
      },
      {
        name: 'Compound Interest Lump Sum',
        formula: 'F = P(1 + i)^n = P \\left(1 + \\frac{r}{m}\\right)^{m \\cdot t}',
        variables: 'F: Future worth, r: nominal rate, m: compounding frequency, t: years'
      },
      {
        name: 'Present Worth Discount',
        formula: 'P = \\frac{F}{(1 + i)^n} = F(1 + i)^{-n}',
        variables: 'P: Present worth today required to reach future lump sum F'
      }
    ],
    canonCalTechSummary: {
      feature: 'Exponential Exponent & SHIFT SOLVE',
      mode: 'COMP (Mode 1)',
      quickKeys: 'F = 100000 × ( 1 + 0.08 ÷ 4 ) [xʸ] ( 4 × 5 ) [=]  |  Solve n: 2 [ALPHA] [=] ( 1.08 ) [xʸ] [ALPHA] [X] ⟹ [SHIFT] [SOLVE]',
      proTip: 'Always use [ALPHA] [=] for the equation equals sign. Enter an initial guess (e.g. 10) so the solver converges in under 1 second!'
    },
    sampleProblemIds: ['dsp-econ-01', 'dsp-econ-02', 'dsp-econ-03']
  },
  {
    dayNumber: 2,
    title: 'Effective Rates & Continuous Compounding',
    subtitle: 'Nominal vs Effective Annual Rates (ER) and Continuous Euler Compounding',
    estimatedHours: '1.5 Hours',
    sourceDoc: '02_Effective_Rates_Continuous_Compounding.pdf',
    boardWeight: '15% of Engineering Economics',
    oneMinuteIntuition: 'The advertised rate (nominal) is deceptive. Because interest compounds throughout the year, the true annual yield (Effective Rate) is always higher. Continuous compounding is interest compounded every microsecond using Euler\'s constant e ≈ 2.71828.',
    coreFormulas: [
      {
        name: 'Effective Annual Rate (ER)',
        formula: 'ER = \\left(1 + \\frac{r}{m}\\right)^m - 1',
        variables: 'r: nominal annual rate, m: compounding periods per year'
      },
      {
        name: 'Continuous Compounding Lump Sum',
        formula: 'F = P \\cdot e^{r \\cdot n}',
        variables: 'e: Euler constant, r: nominal rate, n: years'
      },
      {
        name: 'Continuous Effective Rate',
        formula: 'ER_{cont} = e^r - 1',
        variables: 'True annual yield under continuous compounding'
      }
    ],
    canonCalTechSummary: {
      feature: 'Euler Exponential [SHIFT] [ln]',
      mode: 'COMP (Mode 1)',
      quickKeys: 'ER: ( 1 + 0.12 ÷ 12 ) [xʸ] 12 - 1 [=] [×] 100 [=]  |  Continuous: [SHIFT] [ln] 0.12 - 1 [=]',
      proTip: 'The yellow e^x function is accessed via [SHIFT] [ln]. To get percentage, simply multiply the decimal result by 100.'
    },
    sampleProblemIds: ['dsp-econ-04', 'dsp-econ-05']
  },
  {
    dayNumber: 3,
    title: 'Ordinary Annuities & Sinking Funds',
    subtitle: 'Equal Uniform End-of-Period Installments, Cash Price, and Reserve Funds',
    estimatedHours: '2.0 Hours',
    sourceDoc: '03_Annuities_Ordinary_Due_Deferred.pdf',
    boardWeight: '22% of Engineering Economics',
    oneMinuteIntuition: 'An ordinary annuity is a steady stream of equal payments A occurring at the END of each period (monthly car amortizations or utility bills). The Present Worth sits exactly 1 period before the first payment. A sinking fund calculates the periodic deposit needed to build up a future sum F.',
    coreFormulas: [
      {
        name: 'Ordinary Annuity Present Worth',
        formula: 'P = A \\left[ \\frac{1 - (1 + i)^{-n}}{i} \\right]',
        variables: 'P: Present lump sum, A: equal periodic payment, i: periodic rate, n: payments'
      },
      {
        name: 'Ordinary Annuity Future Worth',
        formula: 'F = A \\left[ \\frac{(1 + i)^n - 1}{i} \\right]',
        variables: 'F: Accumulated future balance from n regular deposits'
      },
      {
        name: 'Sinking Fund Factor',
        formula: 'A = F \\left[ \\frac{i}{(1 + i)^n - 1} \\right]',
        variables: 'A: Periodic deposit required to reach target future fund F'
      }
    ],
    canonCalTechSummary: {
      feature: 'Memory Storage [SHIFT] [STO] [A]',
      mode: 'COMP (Mode 1)',
      quickKeys: 'Store i: 0.01 [SHIFT] [STO] [A]  |  Formula: 15000 × ( 1 - ( 1 + [ALPHA] [A] ) [xʸ] -24 ) ÷ [ALPHA] [A] [=]',
      proTip: 'Storing the periodic rate in memory variable A saves over 30 seconds of typing and eliminates syntax errors on long equations.'
    },
    sampleProblemIds: ['dsp-econ-06', 'dsp-econ-09']
  },
  {
    dayNumber: 4,
    title: 'Annuity Due, Deferred & Perpetuity',
    subtitle: 'Immediate Beginning Payments, Grace Periods, and Infinite Streams',
    estimatedHours: '2.0 Hours',
    sourceDoc: '03_Annuities_Ordinary_Due_Deferred.pdf',
    boardWeight: '20% of Engineering Economics',
    oneMinuteIntuition: 'Annuity Due payments happen at the BEGINNING of each period: just multiply the Ordinary Annuity answer by (1 + i). In a Deferred Annuity with grace period, m is always (Year of First Payment - 1). A Perpetuity pays forever (n = ∞), where Present Worth is simply P = A / i.',
    coreFormulas: [
      {
        name: 'Annuity Due Present Worth',
        formula: 'P_{due} = P_{ord}(1 + i) = A \\left[ \\frac{1 - (1 + i)^{-n}}{i} \\right](1 + i)',
        variables: 'Multiply ordinary present worth by one compounding period'
      },
      {
        name: 'Deferred Annuity Present Worth',
        formula: 'P_0 = A \\left[ \\frac{1 - (1 + i)^{-n}}{i} \\right](1 + i)^{-m}',
        variables: 'm: deferred periods gap = (Period of 1st payment - 1)'
      },
      {
        name: 'Perpetuity (Infinite Cash Flow)',
        formula: 'P = \\frac{A}{i}',
        variables: 'Present worth of endless periodic cash flows forever (n = ∞)'
      }
    ],
    canonCalTechSummary: {
      feature: 'Grace Period Discounting & Perpetuity',
      mode: 'COMP (Mode 1)',
      quickKeys: 'Due: [Ans] × ( 1 + i ) [=]  |  Deferred: A × ( 1 - 1.1^-n ) ÷ 0.1 × 1.1^-m [=]  |  Perp: 90000 ÷ 0.06 [=]',
      proTip: 'For deferred annuities, if payments start at Year 4, the grace period m is 3. Never use m = 4!'
    },
    sampleProblemIds: ['dsp-econ-07', 'dsp-econ-08', 'dsp-econ-09']
  },
  {
    dayNumber: 5,
    title: 'Asset Depreciation Analysis (The Big 5)',
    subtitle: 'Straight-Line, Sinking Fund, SOYD, Declining Balance & Double Declining',
    estimatedHours: '2.5 Hours',
    sourceDoc: '04_Depreciation_Methods_SLM_SOYD_DBM.pdf',
    boardWeight: '22% of Engineering Economics',
    oneMinuteIntuition: 'Physical assets lose value each year. Straight-Line (SLM) has equal annual loss. SOYD charges heavier write-offs in early years using reverse digits (n - m + 1)/Σ. Declining Balance (DBM) uses constant percentage k = 1 - (SV/FC)^(1/n). DDBM doubles the straight-line rate (k = 2/n).',
    coreFormulas: [
      {
        name: 'Straight-Line Method (SLM)',
        formula: 'd = \\frac{FC - SV}{n}  |  BV_m = FC - m \\cdot d',
        variables: 'FC: First cost, SV: Salvage value, n: useful life, BV: Book value'
      },
      {
        name: 'Sum-of-the-Years-Digits (SOYD)',
        formula: 'd_m = (FC - SV) \\left[ \\frac{n - m + 1}{\\Sigma} \\right]  |  \\Sigma = \\frac{n(n + 1)}{2}',
        variables: 'm: year number. Earliest years receive the highest digits'
      },
      {
        name: 'Declining Balance Method (DBM)',
        formula: 'k = 1 - \\sqrt[n]{\\frac{SV}{FC}}  |  BV_m = FC(1 - k)^m',
        variables: 'k: constant rate. Salvage value is NOT subtracted in BV formula'
      },
      {
        name: 'Double Declining Balance (DDBM)',
        formula: 'k = \\frac{2}{n}  |  d_m = BV_{m-1} \\cdot \\frac{2}{n}',
        variables: 'Salvage value ignored until BV reaches the salvage floor'
      }
    ],
    canonCalTechSummary: {
      feature: 'Summation Key [SHIFT] [log] (Σ) & Matheson Root',
      mode: 'COMP (Mode 1)',
      quickKeys: 'SOYD Σ: [SHIFT] [log] [ALPHA] [X] , 1 , n [=]  |  DBM k: 1 - ( SV ÷ FC ) [xʸ] ( 1 ÷ n ) [=]',
      proTip: 'On Canon F-789SGA, store (1 - k) in memory A. Then book value at any year m is simply FC × A^m.'
    },
    sampleProblemIds: ['dsp-econ-10', 'dsp-econ-11', 'dsp-econ-12', 'dsp-econ-13']
  },
  {
    dayNumber: 6,
    title: 'Capitalized Cost & Perpetual Assets',
    subtitle: 'Infinite Horizon Projects, Perpetual Maintenance & Periodic Overhauls',
    estimatedHours: '2.0 Hours',
    sourceDoc: '05_Capitalized_Cost_Perpetual_Replacements.pdf',
    boardWeight: '16% of Engineering Economics',
    oneMinuteIntuition: 'Capitalized Cost is the huge present sum you deposit today so that annual interest alone maintains the asset forever (OM / i) and rebuilds it every k years indefinitely [RC / ((1+i)^k - 1)] without ever depleting the principal.',
    coreFormulas: [
      {
        name: 'Capitalized Cost (Full Form)',
        formula: 'CC = FC + \\frac{OM}{i} + \\frac{RC - SV}{(1 + i)^k - 1}',
        variables: 'FC: First cost, OM: Annual O&M, RC: Replacement cost every k years'
      },
      {
        name: 'Perpetual Annual O&M Present Worth',
        formula: 'PW_{OM} = \\frac{OM}{i}',
        variables: 'Present worth of infinite recurring annual maintenance'
      },
      {
        name: 'Periodic Sinking Fund Replacement',
        formula: 'PW_{RC} = \\frac{RC - SV}{(1 + i)^k - 1}',
        variables: 'Present worth of perpetual replacements occurring every k years'
      }
    ],
    canonCalTechSummary: {
      feature: 'One-Line Multi-Term Entry',
      mode: 'COMP (Mode 1)',
      quickKeys: 'FC + OM ÷ i + RC ÷ ( ( 1 + i ) [xʸ] k - 1 ) [=]',
      proTip: 'Ensure ( ( 1 + i ) [xʸ] k - 1 ) is completely enclosed in parentheses so the division applies to the entire compound factor.'
    },
    sampleProblemIds: ['dsp-econ-14', 'dsp-econ-15']
  },
  {
    dayNumber: 7,
    title: 'Break-Even, Payback, IRR & Gradients',
    subtitle: 'Break-Even Volume, Payback, Instant IRR via SOLVE, and Arithmetic Gradients',
    estimatedHours: '2.5 Hours',
    sourceDoc: '06_BreakEven_Payback_Rate_of_Return.pdf',
    boardWeight: '22% of Engineering Economics',
    oneMinuteIntuition: 'Break-even point is where Total Revenue equals Total Cost: Q = FC / (p - v). Internal Rate of Return (IRR) is the interest rate where Net Present Worth equals zero. Solve IRR on the Canon F-789SGA in 3 seconds using SHIFT SOLVE. Arithmetic gradients increase by constant dollar G each period.',
    coreFormulas: [
      {
        name: 'Break-Even Volume (Units)',
        formula: 'Q_{BEP} = \\frac{FC}{p - v}  |  S_{BEP} = \\frac{FC}{1 - \\frac{v}{p}}',
        variables: 'FC: Fixed costs, p: selling price per unit, v: variable cost per unit'
      },
      {
        name: 'Simple Payback Period',
        formula: 'n_{payback} = \\frac{\\text{Initial Investment}}{\\text{Annual Net Cash Flow}}',
        variables: 'Time required to recover original capital without interest'
      },
      {
        name: 'Internal Rate of Return (IRR)',
        formula: 'NPV(IRR) = \\sum_{t=0}^n \\frac{CF_t}{(1 + IRR)^t} = 0',
        variables: 'Solved using Canon F-789SGA Newton-Raphson solver'
      },
      {
        name: 'Arithmetic Gradient Series',
        formula: '(A/G, i, n) = \\frac{1}{i} - \\frac{n}{(1 + i)^n - 1}  |  A_{total} = A_1 \\pm G(A/G)',
        variables: 'A_1: Base payment at Year 1, G: constant dollar increase per year'
      }
    ],
    canonCalTechSummary: {
      feature: 'Instant IRR Solver & Gradient Factor',
      mode: 'COMP (Mode 1)',
      quickKeys: 'IRR: 350000 [ALPHA] [=] 85000 × ( 1 - ( 1 + [ALPHA] [X] ) [xʸ] -7 ) ÷ [ALPHA] [X] ⟹ [SHIFT] [SOLVE] 0.15 [=]',
      proTip: 'For IRR, always enter an initial guess of 0.15 (15%) when prompted with "X?" so the calculator does not search negative numbers.'
    },
    sampleProblemIds: ['dsp-econ-16', 'dsp-econ-17', 'dsp-econ-18', 'dsp-econ-19', 'dsp-econ-20', 'dsp-econ-21']
  }
];

export const EconomicsWeekView: React.FC<{
  onSelectTopicForPractice?: () => void;
  onGoToCalTech?: () => void;
  onGoToDriveProblems?: () => void;
}> = ({ onSelectTopicForPractice, onGoToCalTech, onGoToDriveProblems }) => {
  const [activeDay, setActiveDay] = useState<number>(1);
  const [completedDays, setCompletedDays] = useState<Record<number, boolean>>({});
  const [showFullCheatSheet, setShowFullCheatSheet] = useState<boolean>(false);
  const [expandedDrillIds, setExpandedDrillIds] = useState<Record<string, boolean>>({});

  // Load progress from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('ree_econ_1week_progress');
      if (saved) {
        setCompletedDays(JSON.parse(saved));
      }
    } catch (e) {
      console.warn('Could not read saved progress:', e);
    }
  }, []);

  const toggleDayComplete = (day: number) => {
    setCompletedDays((prev) => {
      const next = { ...prev, [day]: !prev[day] };
      try {
        localStorage.setItem('ree_econ_1week_progress', JSON.stringify(next));
      } catch (e) {
        console.warn('Could not save progress:', e);
      }
      return next;
    });
  };

  const currentModule = SEVEN_DAY_ECONOMICS_CURRICULUM.find((m) => m.dayNumber === activeDay) || SEVEN_DAY_ECONOMICS_CURRICULUM[0];
  const completedCount = Object.values(completedDays).filter(Boolean).length;
  const progressPercent = Math.round((completedCount / 7) * 100);

  // Retrieve matching sample problems for today's drill
  const currentDrillProblems = ESAS_DRIVE_SAMPLE_PROBLEMS.filter((p) =>
    currentModule.sampleProblemIds.includes(p.id)
  );

  const toggleDrillProblem = (id: string) => {
    setExpandedDrillIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="space-y-6">
      {/* Top Banner: 1-Week Crash Course Overview */}
      <div className="border border-slate-800 bg-slate-900 p-5 rounded-lg space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-amber-500/10 text-amber-400 border border-amber-500/30 font-bold">
                1-Week Fast-Track
              </span>
              <span className="text-[10px] font-mono text-slate-400">
                Primary Guide: ESAS - Engineering Economics
              </span>
            </div>
            <h1 className="text-xl font-bold text-slate-100 tracking-tight mt-1">
              7-Day Engineering Economics Intensive Mastery
            </h1>
            <p className="text-xs text-slate-400 max-w-2xl mt-0.5">
              Structured to pass Engineering Economics in exactly 7 days. Focus on 3 core formulas, 1 Canon F-789SGA CalTech key sequence, and 3 board exam sample drills each day.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setShowFullCheatSheet(!showFullCheatSheet)}
              className="px-3 py-1.5 rounded text-xs font-semibold bg-slate-950 border border-slate-800 hover:border-slate-700 text-amber-300 transition-colors whitespace-nowrap"
            >
              {showFullCheatSheet ? 'Close 7-Day Cheat Sheet' : '1-Page 7-Day Cheat Sheet 📋'}
            </button>

            {onGoToDriveProblems && (
              <button
                onClick={onGoToDriveProblems}
                className="px-3 py-1.5 rounded text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors whitespace-nowrap"
              >
                All {ESAS_DRIVE_SAMPLE_PROBLEMS.length} Drive Problems ↗
              </button>
            )}
          </div>
        </div>

        {/* Progress Tracker Bar */}
        <div className="bg-slate-950 p-3.5 rounded-lg border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-slate-200">1-Week Progress:</span>
              <span className="text-amber-400 font-mono font-bold">{completedCount} of 7 Days Completed</span>
            </div>
            <span className="font-mono text-emerald-400 font-bold">{progressPercent}% Ready</span>
          </div>
          <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden border border-slate-800">
            <div
              className="bg-amber-500 h-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* 7-Day Navigation Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2 pt-2 border-t border-slate-800/80">
          {SEVEN_DAY_ECONOMICS_CURRICULUM.map((mod) => {
            const isCurrent = activeDay === mod.dayNumber;
            const isDone = completedDays[mod.dayNumber];

            return (
              <button
                key={mod.dayNumber}
                onClick={() => setActiveDay(mod.dayNumber)}
                className={`p-2.5 rounded border text-left transition-colors flex flex-col justify-between ${
                  isCurrent
                    ? 'bg-amber-500 text-slate-950 border-amber-500 font-bold shadow-md'
                    : isDone
                    ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-300'
                    : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-mono uppercase ${isCurrent ? 'text-slate-900' : 'text-slate-400'}`}>
                    Day {mod.dayNumber}
                  </span>
                  {isDone && (
                    <span className="text-emerald-400 text-xs font-bold">✓</span>
                  )}
                </div>
                <div className={`text-xs font-semibold mt-1 truncate ${isCurrent ? 'text-slate-950' : 'text-slate-200'}`}>
                  {mod.title.split('&')[0].trim()}
                </div>
                <span className={`text-[10px] font-mono mt-0.5 ${isCurrent ? 'text-slate-800' : 'text-slate-400'}`}>
                  {mod.estimatedHours}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 1-Page Printable/Scrollable Cheat Sheet Modal */}
      {showFullCheatSheet && (
        <div className="border border-amber-500/40 bg-slate-900 p-5 rounded-lg space-y-5 shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div>
              <span className="text-[10px] font-mono uppercase text-amber-400 font-bold">Quick Exam Refresher</span>
              <h2 className="text-base font-bold text-slate-100">7-Day Master Formula &amp; Canon CalTech Cheat Sheet</h2>
            </div>
            <button
              onClick={() => setShowFullCheatSheet(false)}
              className="px-2.5 py-1 text-xs rounded bg-slate-950 text-slate-400 hover:text-white border border-slate-800"
            >
              ✕ Close
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SEVEN_DAY_ECONOMICS_CURRICULUM.map((mod) => (
              <div key={mod.dayNumber} className="bg-slate-950 p-4 rounded-lg border border-slate-800 space-y-2 text-xs">
                <div className="flex items-center justify-between border-b border-slate-800 pb-1.5">
                  <span className="font-bold text-amber-400 font-mono">Day {mod.dayNumber}: {mod.title}</span>
                  <span className="text-[10px] text-slate-500 font-mono">{mod.boardWeight}</span>
                </div>
                <div className="space-y-1">
                  {mod.coreFormulas.map((f, fIdx) => (
                    <div key={fIdx} className="bg-slate-900 p-1.5 rounded font-mono text-slate-200">
                      <span className="text-slate-400 block text-[10px]">{f.name}:</span>
                      <span className="text-amber-300 font-bold">{f.formula}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-1 text-[11px] text-slate-400 border-t border-slate-800/80">
                  <strong className="text-amber-400 font-mono">CalTech:</strong> {mod.canonCalTechSummary.quickKeys}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Main Focus Card: Current Day Content */}
      <div className="border border-slate-800 bg-slate-900 rounded-lg p-5 sm:p-6 space-y-6">
        {/* Day Header with Action Checkbox */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 font-mono text-xs font-bold border border-amber-500/30">
                DAY {currentModule.dayNumber} OF 7
              </span>
              <span className="text-xs text-slate-400 font-mono">
                Est. Study Time: {currentModule.estimatedHours} • {currentModule.boardWeight}
              </span>
            </div>
            <h2 className="text-xl font-bold text-slate-100 mt-1">{currentModule.title}</h2>
            <p className="text-xs text-slate-400 mt-0.5">{currentModule.subtitle}</p>
          </div>

          <button
            onClick={() => toggleDayComplete(currentModule.dayNumber)}
            className={`px-4 py-2 rounded text-xs font-bold border transition-colors flex items-center gap-2 shrink-0 ${
              completedDays[currentModule.dayNumber]
                ? 'bg-emerald-950 border-emerald-500 text-emerald-300'
                : 'bg-slate-950 border-slate-700 text-slate-200 hover:border-amber-500 hover:text-white'
            }`}
          >
            <span>{completedDays[currentModule.dayNumber] ? '✓ Day Completed' : 'Mark Day as Completed'}</span>
          </button>
        </div>

        {/* 1-Minute Intuition Card (ELI5) */}
        <div className="bg-slate-950 border border-slate-800 p-4 rounded-lg space-y-1.5">
          <span className="text-[10px] uppercase font-mono tracking-wider text-amber-400 font-bold block">
            1-Minute Concept Intuition (Read First):
          </span>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">
            {currentModule.oneMinuteIntuition}
          </p>
        </div>

        {/* Section 1: Must-Know Formulas (Clean & Zero-Fluff) */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300 font-mono flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>Must-Know Governing Formulas (Only {currentModule.coreFormulas.length})</span>
            </h3>
            <span className="text-[10px] text-slate-500 font-mono">Drive Ref: {currentModule.sourceDoc}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {currentModule.coreFormulas.map((f, i) => (
              <div key={i} className="bg-slate-950 border border-slate-800 p-3.5 rounded-lg space-y-2 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-slate-100 block">{f.name}</span>
                  <div className="bg-slate-900 p-2 rounded border border-slate-800/80 my-2 overflow-x-auto">
                    <CleanMath math={f.formula} block className="text-amber-300 font-bold text-xs sm:text-sm" />
                  </div>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed pt-1 border-t border-slate-900 font-mono">
                  {f.variables}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Canon F-789SGA CalTech Cheat Box */}
        <div className="bg-slate-950 border border-amber-500/40 p-4 sm:p-5 rounded-lg space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-2.5">
            <div className="flex items-center gap-2">
              <span className="text-amber-400 font-mono font-bold text-xs uppercase">
                Canon F-789SGA Daily Shortcut:
              </span>
              <span className="text-slate-200 text-xs font-bold">{currentModule.canonCalTechSummary.feature}</span>
            </div>
            <span className="text-[10px] font-mono text-slate-300 bg-slate-900 border border-slate-800 px-2 py-0.5 rounded self-start sm:self-center">
              {currentModule.canonCalTechSummary.mode}
            </span>
          </div>

          <div className="bg-slate-900 p-3 rounded border border-slate-800 font-mono text-xs text-amber-300 overflow-x-auto leading-relaxed">
            {currentModule.canonCalTechSummary.quickKeys}
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-400 pt-1">
            <p className="text-[11px] text-amber-300/90 italic">
              <strong className="text-amber-400 not-italic font-mono uppercase text-[10px] mr-1.5">Exam Pro-Tip:</strong>
              {currentModule.canonCalTechSummary.proTip}
            </p>
            {onGoToCalTech && (
              <button
                onClick={onGoToCalTech}
                className="text-slate-300 hover:text-white underline text-xs shrink-0 self-start sm:self-center"
              >
                Open Interactive Simulator ↗
              </button>
            )}
          </div>
        </div>

        {/* Section 3: Daily High-Yield Practice Drills */}
        <div className="space-y-4 pt-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300 font-mono flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Today&apos;s Board Practice Drills ({currentDrillProblems.length} Problems)</span>
            </h3>
            <span className="text-[11px] text-slate-500">Extracted from &quot;ESAS - Engineering Economics&quot; folder</span>
          </div>

          <div className="space-y-3">
            {currentDrillProblems.map((prob) => {
              const isExpanded = !!expandedDrillIds[prob.id];

              return (
                <div key={prob.id} className="border border-slate-800 bg-slate-950 rounded-lg overflow-hidden">
                  <div
                    onClick={() => toggleDrillProblem(prob.id)}
                    className="p-4 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-900/50 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded bg-slate-900 border border-slate-800 flex items-center justify-center font-mono text-[10px] font-bold text-amber-400 shrink-0">
                        #{prob.problemNumber}
                      </span>
                      <div>
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-slate-900 text-slate-400 border border-slate-800">
                            {prob.difficulty}
                          </span>
                          <span className="text-[10px] font-mono text-slate-500">{prob.category}</span>
                        </div>
                        <h4 className="text-xs sm:text-sm font-bold text-slate-100">{prob.topicTitle}</h4>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 self-end sm:self-center shrink-0">
                      <span className="text-emerald-400 font-mono text-xs font-bold">
                        Ans: {prob.finalAnswer.split('|')[0].trim()}
                      </span>
                      <span className="text-xs text-slate-400 font-mono">
                        {isExpanded ? 'Hide ▲' : 'Show Solution ▼'}
                      </span>
                    </div>
                  </div>

                  <div className="px-4 pb-3 text-xs text-slate-300 leading-relaxed font-sans border-t border-slate-900 pt-2.5">
                    {prob.question}
                  </div>

                  {isExpanded && (
                    <div className="p-4 bg-slate-900/90 border-t border-slate-800 space-y-3 text-xs">
                      {/* Given & Formula */}
                      <div className="bg-slate-950 p-3 rounded border border-slate-800 space-y-1.5">
                        <span className="text-[10px] font-mono uppercase text-emerald-400 font-bold block">Governing Formula:</span>
                        <div className="overflow-x-auto py-0.5">
                          <CleanMath math={prob.governingFormula} block className="text-amber-300 font-bold text-xs sm:text-sm" />
                        </div>
                      </div>

                      {/* Step-by-Step */}
                      <div className="bg-slate-950 p-3 rounded border border-slate-800 space-y-2">
                        <span className="text-[10px] font-mono uppercase text-slate-300 font-bold block">Step-by-Step Solution:</span>
                        {prob.solutionSteps.map((st) => (
                          <div key={st.step} className="space-y-1 pl-2 border-l border-slate-800">
                            <span className="font-bold text-slate-200 text-[11px]">• {st.title}</span>
                            <p className="text-slate-400 text-[11px]">{st.explanation}</p>
                            {st.calculation && (
                              <div className="bg-slate-900 p-1.5 rounded overflow-x-auto my-1">
                                <CleanMath math={st.calculation} block className="text-amber-200 text-xs" />
                              </div>
                            )}
                          </div>
                        ))}
                      </div>

                      {/* Canon CalTech Box */}
                      <div className="bg-slate-950 p-3 rounded border border-amber-500/30 space-y-1.5 font-mono text-[11px]">
                        <span className="text-amber-400 font-bold uppercase text-[10px] block">Canon F-789SGA Key Sequence:</span>
                        <div className="bg-slate-900 p-2 rounded text-amber-300">
                          {prob.canonCalTech.keystrokes.join('  ➔  ')}
                        </div>
                        <p className="text-slate-400 italic text-[10px] pt-1">
                          <strong className="text-amber-400 not-italic">Pro-Tip:</strong> {prob.canonCalTech.proTip}
                        </p>
                      </div>

                      {/* Final Answer */}
                      <div className="p-2.5 bg-emerald-950/40 border border-emerald-500/40 rounded flex items-center justify-between text-xs">
                        <span className="text-emerald-300 font-bold">Verified Result: {prob.finalAnswer}</span>
                        <span className="text-[10px] font-mono text-slate-400">PRC Board Key</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Day Paging Footer */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-4 border-t border-slate-800">
          <button
            onClick={() => setActiveDay((d) => Math.max(1, d - 1))}
            disabled={activeDay === 1}
            className="px-3 py-1.5 rounded bg-slate-950 border border-slate-800 text-slate-300 hover:text-white text-xs disabled:opacity-30"
          >
            ◀ Previous Day (Day {Math.max(1, activeDay - 1)})
          </button>

          <span className="text-xs font-mono text-slate-400 text-center">
            Day {activeDay} of 7 · {currentModule.title}
          </span>

          <button
            onClick={() => {
              if (activeDay < 7) {
                setActiveDay(activeDay + 1);
              } else if (onSelectTopicForPractice) {
                onSelectTopicForPractice();
              }
            }}
            className="px-4 py-1.5 rounded bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs"
          >
            {activeDay < 7 ? `Next Day (Day ${activeDay + 1}) ▶` : 'Take Final Board Drill ▶'}
          </button>
        </div>
      </div>
    </div>
  );
};
