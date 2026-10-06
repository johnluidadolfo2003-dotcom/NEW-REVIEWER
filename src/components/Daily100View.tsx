import React, { useState, useMemo, useEffect, useRef } from 'react';
import { SubjectType } from '../types';
import { generateDaily100Set } from '../data/questionBank';
import { SolutionDiagram } from './SolutionDiagram';
import { ScratchpadCalculator } from './ScratchpadCalculator';
import { CleanMath } from './CleanMath';

interface Daily100ViewProps {
  onOpenSimulator?: () => void;
  onGoToFoundations?: () => void;
}

export const Daily100View: React.FC<Daily100ViewProps> = ({ onOpenSimulator, onGoToFoundations }) => {
  const [selectedDay, setSelectedDay] = useState<number>(1);
  const [activeSubject, setActiveSubject] = useState<'ALL' | SubjectType>('ALL');
  const [activeSprint, setActiveSprint] = useState<'ALL' | 'SPRINT_1' | 'SPRINT_2' | 'SPRINT_3' | 'SPRINT_4' | 'MISSED'>('ALL');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<Record<string, boolean>>({});
  const [showAllSolutions, setShowAllSolutions] = useState<boolean>(false);
  const [viewFormat, setViewFormat] = useState<'split' | 'stacked' | 'all_list'>('split');
  const [singleRevealedSolutions, setSingleRevealedSolutions] = useState<Record<string, boolean>>({});
  const [studyMode, setStudyMode] = useState<'guided' | 'exam'>('guided');
  const [revealedSteps, setRevealedSteps] = useState<Record<string, number>>({});
  const [zenMode, setZenMode] = useState<boolean>(false);
  const [isScratchpadOpen, setIsScratchpadOpen] = useState<boolean>(false);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  // Pomodoro Timer State (25 min study / 5 min break)
  const [pomodoroSeconds, setPomodoroSeconds] = useState<number>(25 * 60);
  const [pomodoroActive, setPomodoroActive] = useState<boolean>(false);
  const [pomodoroType, setPomodoroType] = useState<'study' | 'break'>('study');
  const audioCtxRef = useRef<AudioContext | null>(null);

  // Sound generator using Web Audio API (No external sound files required)
  const playChime = (type: 'correct' | 'click' | 'alarm') => {
    if (!soundEnabled) return;
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      if (type === 'correct') {
        osc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
        osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.1); // E5
        gain.gain.setValueAtTime(0.12, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
        osc.start();
        osc.stop(ctx.currentTime + 0.3);
      } else if (type === 'click') {
        osc.frequency.setValueAtTime(400, ctx.currentTime);
        gain.gain.setValueAtTime(0.05, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
        osc.start();
        osc.stop(ctx.currentTime + 0.08);
      } else if (type === 'alarm') {
        osc.frequency.setValueAtTime(880, ctx.currentTime);
        gain.gain.setValueAtTime(0.2, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.6);
        osc.start();
        osc.stop(ctx.currentTime + 0.6);
      }
    } catch (e) {
      // Ignore audio failure if restricted by browser policy
    }
  };

  // Pomodoro ticker
  useEffect(() => {
    let interval: any = null;
    if (pomodoroActive && pomodoroSeconds > 0) {
      interval = setInterval(() => {
        setPomodoroSeconds((prev) => prev - 1);
      }, 1000);
    } else if (pomodoroActive && pomodoroSeconds === 0) {
      playChime('alarm');
      if (pomodoroType === 'study') {
        setPomodoroType('break');
        setPomodoroSeconds(5 * 60);
      } else {
        setPomodoroType('study');
        setPomodoroSeconds(25 * 60);
      }
    }
    return () => clearInterval(interval);
  }, [pomodoroActive, pomodoroSeconds, pomodoroType]);

  // Generate the 100 problems for the selected day
  const dailyProblems = useMemo(() => {
    return generateDaily100Set(selectedDay);
  }, [selectedDay]);

  // Filter problems by Subject and Sprint
  const filteredProblems = useMemo(() => {
    let list = dailyProblems;
    if (activeSubject !== 'ALL') {
      list = list.filter((p) => p.subject === activeSubject);
    }

    if (activeSprint === 'SPRINT_1') {
      list = list.filter((p) => p.questionNumber >= 1 && p.questionNumber <= 25);
    } else if (activeSprint === 'SPRINT_2') {
      list = list.filter((p) => p.questionNumber >= 26 && p.questionNumber <= 50);
    } else if (activeSprint === 'SPRINT_3') {
      list = list.filter((p) => p.questionNumber >= 51 && p.questionNumber <= 75);
    } else if (activeSprint === 'SPRINT_4') {
      list = list.filter((p) => p.questionNumber >= 76 && p.questionNumber <= 100);
    } else if (activeSprint === 'MISSED') {
      list = list.filter(
        (p) =>
          (userAnswers[p.id] !== undefined && userAnswers[p.id] !== p.correctAnswer) ||
          flaggedQuestions[p.id] === true
      );
    }

    return list.length > 0 ? list : dailyProblems;
  }, [dailyProblems, activeSubject, activeSprint, userAnswers, flaggedQuestions]);

  const currentProblem = filteredProblems[currentIndex] || dailyProblems[0];

  // Scoring metrics
  const answeredCount = Object.keys(userAnswers).length;
  const correctCount = Object.entries(userAnswers).filter(([id, ans]) => {
    const prob = dailyProblems.find((p) => p.id === id);
    return prob && prob.correctAnswer === ans;
  }).length;

  const handleSelectOption = (optionIndex: number) => {
    if (!currentProblem) return;
    const isCorrect = currentProblem.correctAnswer === optionIndex;
    setUserAnswers((prev) => ({
      ...prev,
      [currentProblem.id]: optionIndex,
    }));
    setRevealedSteps((prev) => ({
      ...prev,
      [currentProblem.id]: 10,
    }));

    if (isCorrect) {
      playChime('correct');
    } else {
      playChime('click');
    }
  };

  const toggleFlag = (id: string) => {
    setFlaggedQuestions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
    playChime('click');
  };

  const toggleSingleSolution = (id: string) => {
    setSingleRevealedSolutions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
    setRevealedSteps((prev) => ({
      ...prev,
      [id]: 10,
    }));
    playChime('click');
  };

  const toggleRevealAllSolutions = () => {
    const nextState = !showAllSolutions;
    setShowAllSolutions(nextState);
    if (nextState) {
      const fullSteps: Record<string, number> = {};
      dailyProblems.forEach((p) => {
        fullSteps[p.id] = p.stepByStepSolution.length;
      });
      setRevealedSteps(fullSteps);
    }
    playChime('click');
  };

  const resetCurrentDay = () => {
    if (window.confirm(`Reset all answers and flags for Day ${selectedDay}?`)) {
      setUserAnswers({});
      setFlaggedQuestions({});
      setSingleRevealedSolutions({});
      setRevealedSteps({});
      setShowAllSolutions(false);
      setCurrentIndex(0);
    }
  };

  // Keyboard shortcut listener for fast, all-day ergonomics
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;

      if (e.key === '1' || e.key.toLowerCase() === 'a') {
        handleSelectOption(0);
      } else if (e.key === '2' || e.key.toLowerCase() === 'b') {
        handleSelectOption(1);
      } else if (e.key === '3' || e.key.toLowerCase() === 'c') {
        handleSelectOption(2);
      } else if (e.key === '4' || e.key.toLowerCase() === 'd') {
        handleSelectOption(3);
      } else if (e.key.toLowerCase() === 's' || e.key === ' ') {
        e.preventDefault();
        if (currentProblem) toggleSingleSolution(currentProblem.id);
      } else if (e.key === 'ArrowRight') {
        setCurrentIndex((idx) => Math.min(filteredProblems.length - 1, idx + 1));
      } else if (e.key === 'ArrowLeft') {
        setCurrentIndex((idx) => Math.max(0, idx - 1));
      } else if (e.key.toLowerCase() === 'f') {
        if (currentProblem) toggleFlag(currentProblem.id);
      } else if (e.key === 'Escape' && zenMode) {
        setZenMode(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentProblem, filteredProblems.length, zenMode]);

  // Subject breakdown scores
  const mathProbs = dailyProblems.filter((p) => p.subject === 'MATH');
  const esasProbs = dailyProblems.filter((p) => p.subject === 'ESAS');
  const eeProbs = dailyProblems.filter((p) => p.subject === 'EE');

  const mathCorrect = mathProbs.filter((p) => userAnswers[p.id] === p.correctAnswer).length;
  const esasCorrect = esasProbs.filter((p) => userAnswers[p.id] === p.correctAnswer).length;
  const eeCorrect = eeProbs.filter((p) => userAnswers[p.id] === p.correctAnswer).length;

  const mathPercent = mathProbs.length ? (mathCorrect / mathProbs.length) * 100 : 0;
  const esasPercent = esasProbs.length ? (esasCorrect / esasProbs.length) * 100 : 0;
  const eePercent = eeProbs.length ? (eeCorrect / eeProbs.length) * 100 : 0;

  const weightedAverage = (0.33 * mathPercent + 0.30 * esasPercent + 0.37 * eePercent).toFixed(1);
  const isPassing = parseFloat(weightedAverage) >= 70 && mathPercent >= 50 && esasPercent >= 50 && eePercent >= 50;

  const isCurrentSolutionVisible =
    showAllSolutions ||
    singleRevealedSolutions[currentProblem?.id] ||
    (studyMode === 'guided' && userAnswers[currentProblem?.id] !== undefined);

  // Format pomodoro time mm:ss
  const formatPomodoro = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="space-y-6">
      {/* Floating Scratchpad Window */}
      <ScratchpadCalculator isOpen={isScratchpadOpen} onClose={() => setIsScratchpadOpen(false)} />

      {/* ===================== ZEN FOCUS MODE HEADER BAR ===================== */}
      {zenMode && (
        <div className="bg-slate-900 border border-slate-700 p-3 rounded-lg flex flex-wrap items-center justify-between gap-3 shadow-2xl sticky top-2 z-40">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono font-bold text-amber-400">
              ZEN FOCUS MODE: Item #{currentProblem?.questionNumber} of 100 ({currentProblem?.subject})
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs">
            {/* Pomodoro Timer Badge in Zen Mode */}
            <div className="flex items-center gap-1.5 bg-slate-950 px-2.5 py-1 rounded border border-slate-800">
              <span className="text-[10px] text-slate-400 uppercase font-mono">
                {pomodoroType === 'study' ? 'Sprint' : 'Rest'}:
              </span>
              <span className="font-mono font-bold text-amber-300">{formatPomodoro(pomodoroSeconds)}</span>
              <button
                onClick={() => setPomodoroActive(!pomodoroActive)}
                className="text-[10px] text-slate-300 hover:text-white underline ml-1"
              >
                {pomodoroActive ? 'Pause' : 'Start'}
              </button>
            </div>

            <button
              onClick={() => setIsScratchpadOpen(!isScratchpadOpen)}
              className="px-2.5 py-1 bg-slate-950 border border-slate-800 text-slate-300 hover:text-white rounded"
            >
              Scratchpad
            </button>

            <button
              onClick={() => setZenMode(false)}
              className="px-3 py-1 bg-amber-500 text-slate-950 font-bold rounded hover:bg-amber-400"
            >
              Exit Zen Mode (Esc)
            </button>
          </div>
        </div>
      )}

      {/* ===================== NORMAL TOP DASHBOARD ===================== */}
      {!zenMode && (
        <>
          {/* Top Banner & Pacing Bar */}
          <div className="border border-slate-800 bg-slate-900/90 p-5 rounded-lg flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-3">
                <h2 className="text-base font-bold text-slate-100 tracking-tight">Daily 100 Practice</h2>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/30">
                  Day {selectedDay} of 30
                </span>
              </div>
              <p className="text-slate-400 text-xs mt-1">
                100 board-style problems categorized into four 25-item sprints
              </p>
            </div>

            {/* Global Controls & Master Solution Reveal Button */}
            <div className="flex flex-wrap items-center gap-2">
              {/* Pomodoro Timer Widget */}
              <div className="flex items-center bg-slate-950 border border-slate-800 rounded px-2.5 py-1 text-xs gap-2">
                <span className="text-[10px] font-mono text-slate-400">
                  {pomodoroType === 'study' ? 'Sprint' : 'Rest'}:
                </span>
                <span className="font-mono font-bold text-amber-400">{formatPomodoro(pomodoroSeconds)}</span>
                <button
                  onClick={() => setPomodoroActive(!pomodoroActive)}
                  className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                    pomodoroActive ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-300'
                  }`}
                >
                  {pomodoroActive ? 'Pause' : 'Start'}
                </button>
                <button
                  onClick={() => {
                    setPomodoroActive(false);
                    setPomodoroSeconds(25 * 60);
                  }}
                  className="text-[10px] text-slate-500 hover:text-slate-300"
                  title="Reset Timer"
                >
                  ↺
                </button>
              </div>

              {/* Day Jumper */}
              <div className="flex items-center bg-slate-950 border border-slate-800 rounded p-1">
                <button
                  onClick={() => {
                    setSelectedDay((d) => Math.max(1, d - 1));
                    setCurrentIndex(0);
                  }}
                  disabled={selectedDay === 1}
                  className="px-2 py-1 text-xs text-slate-400 hover:text-slate-200 disabled:opacity-30"
                  title="Previous Day Set"
                >
                  ◀
                </button>
                <select
                  value={selectedDay}
                  onChange={(e) => {
                    setSelectedDay(Number(e.target.value));
                    setCurrentIndex(0);
                  }}
                  className="bg-transparent text-xs font-mono font-semibold text-amber-400 px-1 py-0.5 focus:outline-none cursor-pointer"
                >
                  {Array.from({ length: 30 }, (_, i) => i + 1).map((d) => (
                    <option key={d} value={d} className="bg-slate-900 text-slate-100">
                      Day {d}
                    </option>
                  ))}
                </select>
                <button
                  onClick={() => {
                    setSelectedDay((d) => Math.min(30, d + 1));
                    setCurrentIndex(0);
                  }}
                  disabled={selectedDay === 30}
                  className="px-2 py-1 text-xs text-slate-400 hover:text-slate-200 disabled:opacity-30"
                  title="Next Day Set"
                >
                  ▶
                </button>
              </div>

              {/* Zen Focus Mode Button */}
              <button
                onClick={() => setZenMode(true)}
                className="px-3 py-1.5 rounded text-xs font-medium bg-amber-500/15 border border-amber-500 text-amber-300 hover:bg-amber-500/25 flex items-center gap-1.5"
                title="Enter distraction-free study mode"
              >
                <span>Zen Mode</span>
              </button>

              {/* Show All Solutions Button */}
              <button
                onClick={toggleRevealAllSolutions}
                className={`px-3 py-1.5 rounded text-xs font-medium border transition-colors flex items-center gap-1.5 ${
                  showAllSolutions
                    ? 'bg-amber-500 text-slate-950 border-amber-400 font-bold'
                    : 'bg-slate-950 border-amber-500/50 text-amber-400 hover:bg-amber-500/10'
                }`}
              >
                <span>{showAllSolutions ? 'Hide All Solutions' : 'Show All Solutions'}</span>
              </button>

              {/* Scratchpad Toggle Button */}
              <button
                onClick={() => setIsScratchpadOpen(!isScratchpadOpen)}
                className="px-2.5 py-1.5 bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-300 rounded text-xs"
                title="Open Quick Math Scratchpad"
              >
                Scratchpad
              </button>

              {/* Sound Toggle */}
              <button
                onClick={() => setSoundEnabled(!soundEnabled)}
                className={`px-2.5 py-1.5 border rounded text-xs font-mono font-medium ${
                  soundEnabled ? 'border-slate-800 bg-slate-950 text-emerald-400' : 'border-slate-800 bg-slate-950 text-slate-500'
                }`}
                title={soundEnabled ? 'Sound Enabled' : 'Sound Muted'}
              >
                {soundEnabled ? 'Audio: On' : 'Audio: Off'}
              </button>

              <button
                onClick={resetCurrentDay}
                className="px-2.5 py-1.5 bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-slate-200 rounded text-xs"
                title="Reset answers for this day"
              >
                Reset
              </button>
            </div>
          </div>

          {/* Practice Sprints */}
          <div className="border border-slate-800 bg-slate-900 p-3 rounded-lg space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
              <span className="font-semibold text-slate-300 uppercase tracking-wider text-[11px]">
                Practice Sprints
              </span>
              <span className="text-[10px] text-slate-400 font-mono">
                Shortcuts: A–D to answer · Space for solution · ◀/▶ navigate
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-6 gap-2 text-xs">
              <button
                onClick={() => {
                  setActiveSprint('ALL');
                  setCurrentIndex(0);
                }}
                className={`p-2 rounded border text-left transition-colors ${
                  activeSprint === 'ALL'
                    ? 'bg-amber-500 text-slate-950 font-bold border-amber-400'
                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                <div className="font-bold">Full 100 Set</div>
                <div className={`text-[10px] ${activeSprint === 'ALL' ? 'text-slate-900' : 'text-slate-500'}`}>Items 1 to 100</div>
              </button>

              <button
                onClick={() => {
                  setActiveSprint('SPRINT_1');
                  setCurrentIndex(0);
                }}
                className={`p-2 rounded border text-left transition-colors ${
                  activeSprint === 'SPRINT_1'
                    ? 'bg-amber-500 text-slate-950 font-bold border-amber-400'
                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                <div className="font-bold">Sprint 1 (MATH)</div>
                <div className={`text-[10px] ${activeSprint === 'SPRINT_1' ? 'text-slate-900' : 'text-slate-500'}`}>Items 1 - 25</div>
              </button>

              <button
                onClick={() => {
                  setActiveSprint('SPRINT_2');
                  setCurrentIndex(0);
                }}
                className={`p-2 rounded border text-left transition-colors ${
                  activeSprint === 'SPRINT_2'
                    ? 'bg-amber-500 text-slate-950 font-bold border-amber-400'
                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                <div className="font-bold">Sprint 2 (MATH+ESAS)</div>
                <div className={`text-[10px] ${activeSprint === 'SPRINT_2' ? 'text-slate-900' : 'text-slate-500'}`}>Items 26 - 50</div>
              </button>

              <button
                onClick={() => {
                  setActiveSprint('SPRINT_3');
                  setCurrentIndex(0);
                }}
                className={`p-2 rounded border text-left transition-colors ${
                  activeSprint === 'SPRINT_3'
                    ? 'bg-amber-500 text-slate-950 font-bold border-amber-400'
                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                <div className="font-bold">Sprint 3 (ESAS+EE)</div>
                <div className={`text-[10px] ${activeSprint === 'SPRINT_3' ? 'text-slate-900' : 'text-slate-500'}`}>Items 51 - 75</div>
              </button>

              <button
                onClick={() => {
                  setActiveSprint('SPRINT_4');
                  setCurrentIndex(0);
                }}
                className={`p-2 rounded border text-left transition-colors ${
                  activeSprint === 'SPRINT_4'
                    ? 'bg-amber-500 text-slate-950 font-bold border-amber-400'
                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                <div className="font-bold">Sprint 4 (EE Prof)</div>
                <div className={`text-[10px] ${activeSprint === 'SPRINT_4' ? 'text-slate-900' : 'text-slate-500'}`}>Items 76 - 100</div>
              </button>

              <button
                onClick={() => {
                  setActiveSprint('MISSED');
                  setCurrentIndex(0);
                }}
                className={`p-2 rounded border text-left transition-colors ${
                  activeSprint === 'MISSED'
                    ? 'bg-rose-500 text-slate-950 font-bold border-rose-400'
                    : 'bg-slate-950 border-rose-900/50 text-rose-300 hover:text-rose-200'
                }`}
              >
                <div className="font-bold">Review Mistakes</div>
                <div className={`text-[10px] ${activeSprint === 'MISSED' ? 'text-slate-900' : 'text-slate-400'}`}>Incorrect &amp; Flagged</div>
              </button>
            </div>
          </div>

          {/* Progress & PRC Board Score Tracker */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            <div className="bg-slate-900 border border-slate-800 p-3 rounded">
              <span className="text-[11px] text-slate-400 block">Completed Today</span>
              <span className="text-lg font-mono font-bold text-slate-100">{answeredCount} / 100</span>
              <div className="w-full bg-slate-950 h-1.5 rounded-full mt-1.5 overflow-hidden">
                <div className="bg-amber-500 h-full" style={{ width: `${answeredCount}%` }} />
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-3 rounded">
              <span className="text-[11px] text-slate-400 block">MATH (33%)</span>
              <span className="text-lg font-mono font-bold text-amber-400">{mathCorrect} / 35</span>
              <span className="text-[10px] text-slate-500 block">{mathPercent.toFixed(1)}% (Pass: ≥50%)</span>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-3 rounded">
              <span className="text-[11px] text-slate-400 block">ESAS (30%)</span>
              <span className="text-lg font-mono font-bold text-cyan-400">{esasCorrect} / 30</span>
              <span className="text-[10px] text-slate-500 block">{esasPercent.toFixed(1)}% (Pass: ≥50%)</span>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-3 rounded">
              <span className="text-[11px] text-slate-400 block">EE Prof (37%)</span>
              <span className="text-lg font-mono font-bold text-emerald-400">{eeCorrect} / 35</span>
              <span className="text-[10px] text-slate-500 block">{eePercent.toFixed(1)}% (Pass: ≥50%)</span>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-3 rounded col-span-2 md:col-span-1">
              <span className="text-[11px] text-slate-400 block">Board Rating</span>
              <span className={`text-lg font-mono font-bold ${isPassing ? 'text-emerald-400' : 'text-amber-400'}`}>
                {weightedAverage}%
              </span>
              <span className="text-[10px] text-slate-400 block">
                {isPassing ? 'PASSED (≥ 70%)' : 'TARGET: ≥ 70%'}
              </span>
            </div>
          </div>
        </>
      )}

      {/* ===================== MAIN QUESTION & SOLUTION WORKSPACE ===================== */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* LEFT COLUMN (5 Columns, STICKY): THE QUESTION CARD - ALWAYS VISIBLE! */}
        <div className="lg:col-span-5 lg:sticky lg:top-16 self-start space-y-4">
          {currentProblem ? (
            <div className="border border-slate-800 bg-slate-900 p-5 rounded-lg space-y-4 shadow-xl z-20">
              {/* Question Header & Action Buttons */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-800 text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-mono font-bold text-amber-400 text-sm">
                    Item #{currentProblem.questionNumber} of 100
                  </span>
                  <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-[11px]">
                    {currentProblem.subject}
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => toggleFlag(currentProblem.id)}
                    className={`px-2 py-0.5 rounded text-xs border ${
                      flaggedQuestions[currentProblem.id]
                        ? 'bg-amber-500/20 border-amber-500 text-amber-300'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-300'
                    }`}
                  >
                    {flaggedQuestions[currentProblem.id] ? '★ Flagged' : 'Flag (F)'}
                  </button>

                  <button
                    onClick={() => toggleSingleSolution(currentProblem.id)}
                    className={`px-2.5 py-1 rounded text-xs font-semibold border transition-colors ${
                      isCurrentSolutionVisible
                        ? 'bg-amber-500 text-slate-950 border-amber-400 font-bold'
                        : 'bg-slate-950 border-slate-700 text-slate-300 hover:text-white'
                    }`}
                  >
                    {isCurrentSolutionVisible ? 'Hide Solution' : 'Show Solution (Space)'}
                  </button>
                </div>
              </div>

              <div className="text-[11px] font-mono text-slate-400">
                Topic: <span className="text-slate-300">{currentProblem.topicName}</span>
              </div>

              {/* Question Prompt */}
              <div className="text-slate-100 text-sm md:text-base leading-relaxed font-semibold bg-slate-950/80 p-3.5 rounded border border-slate-800/80">
                {currentProblem.question}
              </div>

              {/* 4 Multiple Choice Options (A, B, C, D) */}
              <div className="space-y-2 pt-1">
                {currentProblem.options.map((option, idx) => {
                  const isSelected = userAnswers[currentProblem.id] === idx;
                  const isAnswered = userAnswers[currentProblem.id] !== undefined;
                  const isCorrect = currentProblem.correctAnswer === idx;

                  let optionStyle = 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700';
                  if (isCurrentSolutionVisible || (studyMode === 'guided' && isAnswered)) {
                    if (isCorrect) {
                      optionStyle = 'bg-emerald-950/60 border-emerald-500 text-emerald-200 font-bold ring-1 ring-emerald-500/50';
                    } else if (isSelected) {
                      optionStyle = 'bg-rose-950/60 border-rose-500 text-rose-300';
                    }
                  } else if (isSelected) {
                    optionStyle = 'bg-amber-500/15 border-amber-500 text-amber-300 font-semibold';
                  }

                  const label = String.fromCharCode(65 + idx);

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      className={`w-full text-left p-3 rounded-lg border text-xs sm:text-sm flex items-start gap-2.5 transition-colors ${optionStyle}`}
                    >
                      <span className="font-mono text-xs w-6 h-6 rounded bg-slate-800 flex items-center justify-center shrink-0 text-slate-300 font-bold">
                        {label}
                      </span>
                      <span className="pt-0.5 flex-1">{option}</span>
                      {(isCurrentSolutionVisible || isAnswered) && isCorrect && (
                        <span className="text-emerald-400 font-mono text-xs font-bold shrink-0">
                          ✓ Correct
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Prev / Next Navigation */}
              <div className="flex justify-between pt-3 border-t border-slate-800">
                <button
                  onClick={() => setCurrentIndex((idx) => Math.max(0, idx - 1))}
                  disabled={currentIndex === 0}
                  className="px-3 py-1.5 bg-slate-950 border border-slate-800 rounded text-xs text-slate-300 hover:text-slate-100 disabled:opacity-30"
                >
                  ◀ Prev (←)
                </button>

                <button
                  onClick={() => setCurrentIndex((idx) => Math.min(filteredProblems.length - 1, idx + 1))}
                  disabled={currentIndex === filteredProblems.length - 1}
                  className="px-3.5 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded text-xs disabled:opacity-30"
                >
                  Next (→) ▶
                </button>
              </div>
            </div>
          ) : null}

          {/* Fast Jumper Strip */}
          <div className="border border-slate-800 bg-slate-900 p-3 rounded-lg text-xs space-y-2">
            <div className="flex justify-between items-center text-[11px] text-slate-400">
              <span>Fast Question Jumper:</span>
              <span className="font-mono">{currentIndex + 1} of {filteredProblems.length} in view</span>
            </div>
            <div className="flex gap-1 overflow-x-auto py-1">
              {filteredProblems.slice(Math.max(0, currentIndex - 4), Math.min(filteredProblems.length, currentIndex + 6)).map((prob) => {
                const realIndex = filteredProblems.findIndex((p) => p.id === prob.id);
                const isCur = realIndex === currentIndex;
                const isAns = userAnswers[prob.id] !== undefined;
                return (
                  <button
                    key={prob.id}
                    onClick={() => setCurrentIndex(realIndex)}
                    className={`w-7 h-7 rounded text-[11px] font-mono shrink-0 border ${
                      isCur
                        ? 'bg-amber-500 text-slate-950 font-bold border-amber-400'
                        : isAns
                        ? 'bg-emerald-950 text-emerald-300 border-emerald-700'
                        : 'bg-slate-950 text-slate-400 border-slate-800'
                    }`}
                  >
                    {prob.questionNumber}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN (7 Columns): THE SOLUTION & VISUAL WORKBENCH */}
        <div className="lg:col-span-7 space-y-4">
          {currentProblem && (
            <div className="border border-slate-800 bg-slate-900 p-5 rounded-lg space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
                  <h3 className="text-sm font-bold text-slate-100 uppercase tracking-wider">
                    Solution Breakdown
                  </h3>
                </div>

                <div className="text-[11px] font-mono text-slate-400">
                  Item #{currentProblem.questionNumber}
                </div>
              </div>

              {/* Technical Drawing */}
              {currentProblem.visualDiagram && (
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block font-bold">
                    Schematic:
                  </span>
                  <SolutionDiagram
                    type={currentProblem.visualDiagram.type}
                    caption={currentProblem.visualDiagram.caption}
                  />
                </div>
              )}

              {/* Key Formula Applied Box */}
              <div className="bg-slate-950 border border-slate-800 p-4 rounded-lg space-y-1.5">
                <span className="text-[10px] uppercase font-mono tracking-wider text-amber-400 block font-bold">
                  Governing Formula:
                </span>
                <div className="bg-slate-900 p-2.5 rounded border border-slate-800 overflow-x-auto">
                  <CleanMath math={currentProblem.keyFormulaUsed} block className="text-amber-200 font-bold text-sm sm:text-base py-1" />
                </div>
              </div>

              {/* Core Concept Box */}
              <div className="bg-slate-950 border border-slate-800 p-4 rounded-lg space-y-1.5">
                <span className="text-[10px] uppercase font-mono tracking-wider text-cyan-400 block font-bold">
                  Core Concept:
                </span>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">{currentProblem.eli5Takeaway}</p>
              </div>

              {/* Step-by-Step Derivation */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-200 uppercase tracking-wider">
                    Step-by-Step Solution:
                  </span>
                </div>

                <div className="space-y-2.5">
                  {currentProblem.stepByStepSolution.map((step) => (
                    <div key={step.step} className="bg-slate-950 border border-slate-800 p-3.5 rounded-lg text-xs space-y-1.5">
                      <div className="text-slate-100 font-bold flex items-center gap-2">
                        <span className="w-5 h-5 rounded bg-slate-800 text-amber-400 font-mono text-[10px] flex items-center justify-center font-bold">
                          {step.step}
                        </span>
                        <span>{step.title}</span>
                      </div>
                      <div className="text-slate-400 pl-7">{step.explanation}</div>
                      {step.calculation && (
                        <div className="pl-7 pt-1">
                          <div className="font-mono text-amber-300 bg-slate-900 p-2.5 rounded text-[11px] overflow-x-auto border border-slate-800">
                            <CleanMath math={step.calculation} />
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Canon F-789SGA CalTech Section (For Engineering Economics & Board Items) */}
              {currentProblem.canonCalTech && (
                <div className="bg-slate-950 border border-amber-500/40 p-4 rounded-lg space-y-2.5">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-amber-400/10 text-amber-400 font-mono text-[10px] font-bold border border-amber-400/20">
                        {currentProblem.canonCalTech.calculator}
                      </span>
                      <span className="text-xs font-bold text-slate-100 uppercase tracking-wider">
                        Calculator Technique (CalTech)
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                      {currentProblem.canonCalTech.mode}
                    </span>
                  </div>

                  {/* Keystrokes List */}
                  <div className="space-y-1.5 pt-1">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block font-bold">
                      Keystroke Sequence:
                    </span>
                    <div className="space-y-1">
                      {currentProblem.canonCalTech.keystrokes.map((step, kIdx) => (
                        <div key={kIdx} className="bg-slate-900 p-2 rounded border border-slate-800 text-xs font-mono text-amber-300 flex items-center gap-2">
                          <span className="text-slate-400 text-[10px] w-4">{kIdx + 1}.</span>
                          <span className="select-all">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pro Tip & Display Result */}
                  <div className="pt-1 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                    {currentProblem.canonCalTech.proTip && (
                      <div className="text-[11px] text-slate-400 italic">
                        <strong className="text-amber-400 not-italic">Pro-Tip:</strong> {currentProblem.canonCalTech.proTip}
                      </div>
                    )}
                    {currentProblem.canonCalTech.resultDisplay && (
                      <div className="shrink-0 bg-slate-900 px-2.5 py-1 rounded border border-slate-800 font-mono text-emerald-400 font-bold text-xs text-right">
                        LCD: {currentProblem.canonCalTech.resultDisplay}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Correct Answer Confirmation Footer */}
              <div className="p-3 bg-emerald-950/30 border border-emerald-600/40 rounded flex items-center justify-between text-xs">
                <span className="text-slate-300">
                  Official Board Exam Answer:
                </span>
                <span className="font-mono font-bold text-emerald-400 text-sm">
                  [{String.fromCharCode(65 + currentProblem.correctAnswer)}] {currentProblem.options[currentProblem.correctAnswer]}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
