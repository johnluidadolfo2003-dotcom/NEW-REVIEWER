import React, { useState, useMemo } from 'react';
import { BoardProblem, SubjectType } from '../types';
import { generateDaily100Set } from '../data/questionBank';

interface Daily100ViewProps {
  onOpenSimulator?: () => void;
}

export const Daily100View: React.FC<Daily100ViewProps> = ({ onOpenSimulator }) => {
  const [selectedDay, setSelectedDay] = useState<number>(1);
  const [activeSubject, setActiveSubject] = useState<'ALL' | SubjectType>('ALL');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<Record<string, boolean>>({});
  const [showExplanation, setShowExplanation] = useState<boolean>(true);
  const [studyMode, setStudyMode] = useState<'guided' | 'exam'>('guided');
  const [revealedSteps, setRevealedSteps] = useState<Record<string, number>>({});

  // Generate the 100 problems for the selected day
  const dailyProblems = useMemo(() => {
    return generateDaily100Set(selectedDay);
  }, [selectedDay]);

  // Filter problems by subject if active
  const filteredProblems = useMemo(() => {
    if (activeSubject === 'ALL') return dailyProblems;
    return dailyProblems.filter((p) => p.subject === activeSubject);
  }, [dailyProblems, activeSubject]);

  const currentProblem = filteredProblems[currentIndex] || dailyProblems[0];

  // Scoring metrics
  const answeredCount = Object.keys(userAnswers).length;
  const correctCount = Object.entries(userAnswers).filter(([id, ans]) => {
    const prob = dailyProblems.find((p) => p.id === id);
    return prob && prob.correctAnswer === ans;
  }).length;

  const handleSelectOption = (optionIndex: number) => {
    if (!currentProblem) return;
    setUserAnswers((prev) => ({
      ...prev,
      [currentProblem.id]: optionIndex,
    }));
    // Auto-reveal first step for slow learners
    setRevealedSteps((prev) => ({
      ...prev,
      [currentProblem.id]: prev[currentProblem.id] || 1,
    }));
  };

  const toggleFlag = (id: string) => {
    setFlaggedQuestions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const nextStep = (id: string, totalSteps: number) => {
    setRevealedSteps((prev) => {
      const current = prev[id] || 1;
      return {
        ...prev,
        [id]: Math.min(current + 1, totalSteps),
      };
    });
  };

  // PRC Subject breakdown scores
  const mathProbs = dailyProblems.filter((p) => p.subject === 'MATH');
  const esasProbs = dailyProblems.filter((p) => p.subject === 'ESAS');
  const eeProbs = dailyProblems.filter((p) => p.subject === 'EE');

  const mathCorrect = mathProbs.filter((p) => userAnswers[p.id] === p.correctAnswer).length;
  const esasCorrect = esasProbs.filter((p) => userAnswers[p.id] === p.correctAnswer).length;
  const eeCorrect = eeProbs.filter((p) => userAnswers[p.id] === p.correctAnswer).length;

  const mathPercent = mathProbs.length ? (mathCorrect / mathProbs.length) * 100 : 0;
  const esasPercent = esasProbs.length ? (esasCorrect / esasProbs.length) * 100 : 0;
  const eePercent = eeProbs.length ? (eeCorrect / eeProbs.length) * 100 : 0;

  // Weighted board average: MATH 33%, ESAS 30%, EE 37%
  const weightedAverage = (0.33 * mathPercent + 0.30 * esasPercent + 0.37 * eePercent).toFixed(1);
  const isPassing = parseFloat(weightedAverage) >= 70 && mathPercent >= 50 && esasPercent >= 50 && eePercent >= 50;

  return (
    <div className="space-y-6">
      {/* Top Banner & Day Navigation */}
      <div className="border border-slate-800 bg-slate-900/90 p-5 rounded-lg flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-bold text-slate-100 tracking-tight">Daily 100 Board Exam Challenge</h2>
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/30">
              Day {selectedDay} of 30
            </span>
          </div>
          <p className="text-slate-400 text-xs mt-1">
            Exact Philippine Board of Electrical Engineering balance: 35 Mathematics, 30 ESAS, 35 EE Professional.
          </p>
        </div>

        {/* Day Controls & Study Mode */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center bg-slate-950 border border-slate-800 rounded p-1">
            <button
              onClick={() => {
                setSelectedDay((d) => Math.max(1, d - 1));
                setCurrentIndex(0);
              }}
              disabled={selectedDay === 1}
              className="px-2 py-1 text-xs text-slate-400 hover:text-slate-200 disabled:opacity-30"
            >
              Prev Day
            </button>
            <span className="px-2 text-xs font-mono font-semibold text-slate-200">Day {selectedDay}</span>
            <button
              onClick={() => {
                setSelectedDay((d) => Math.min(30, d + 1));
                setCurrentIndex(0);
              }}
              disabled={selectedDay === 30}
              className="px-2 py-1 text-xs text-slate-400 hover:text-slate-200 disabled:opacity-30"
            >
              Next Day
            </button>
          </div>

          <div className="flex bg-slate-950 border border-slate-800 rounded p-1 text-xs">
            <button
              onClick={() => setStudyMode('guided')}
              className={`px-3 py-1 rounded transition-colors ${
                studyMode === 'guided' ? 'bg-amber-500 text-slate-950 font-semibold' : 'text-slate-400'
              }`}
            >
              Guided Slow-Paced
            </button>
            <button
              onClick={() => setStudyMode('exam')}
              className={`px-3 py-1 rounded transition-colors ${
                studyMode === 'exam' ? 'bg-amber-500 text-slate-950 font-semibold' : 'text-slate-400'
              }`}
            >
              Simulated Exam
            </button>
          </div>
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
          <span className="text-[11px] text-slate-400 block">MATH Score (33%)</span>
          <span className="text-lg font-mono font-bold text-amber-400">{mathCorrect} / 35</span>
          <span className="text-[10px] text-slate-500 block">{mathPercent.toFixed(1)}% (Min 50%)</span>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-3 rounded">
          <span className="text-[11px] text-slate-400 block">ESAS Score (30%)</span>
          <span className="text-lg font-mono font-bold text-cyan-400">{esasCorrect} / 30</span>
          <span className="text-[10px] text-slate-500 block">{esasPercent.toFixed(1)}% (Min 50%)</span>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-3 rounded">
          <span className="text-[11px] text-slate-400 block">EE Score (37%)</span>
          <span className="text-lg font-mono font-bold text-emerald-400">{eeCorrect} / 35</span>
          <span className="text-[10px] text-slate-500 block">{eePercent.toFixed(1)}% (Min 50%)</span>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-3 rounded col-span-2 md:col-span-1">
          <span className="text-[11px] text-slate-400 block">Board Rating</span>
          <span className={`text-lg font-mono font-bold ${isPassing ? 'text-emerald-400' : 'text-amber-400'}`}>
            {weightedAverage}%
          </span>
          <span className="text-[10px] text-slate-400 block">
            {isPassing ? 'PASSING (≥ 70%)' : 'TARGET: ≥ 70%'}
          </span>
        </div>
      </div>

      {/* Main Study Arena */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Question Card (8 Cols) */}
        <div className="lg:col-span-8 space-y-4">
          {/* Subject Filter Tabs */}
          <div className="flex gap-2">
            {(['ALL', 'MATH', 'ESAS', 'EE'] as const).map((sub) => (
              <button
                key={sub}
                onClick={() => {
                  setActiveSubject(sub);
                  setCurrentIndex(0);
                }}
                className={`px-3 py-1 rounded text-xs font-semibold border ${
                  activeSubject === sub
                    ? 'bg-amber-500/10 border-amber-500 text-amber-400'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                {sub === 'ALL' ? 'All 100 Questions' : sub === 'MATH' ? 'MATH (35)' : sub === 'ESAS' ? 'ESAS (30)' : 'EE Prof (35)'}
              </button>
            ))}
          </div>

          {currentProblem ? (
            <div className="border border-slate-800 bg-slate-900 p-5 rounded-lg space-y-4">
              {/* Question Meta */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-mono font-bold text-slate-100 text-sm">
                    Item #{currentProblem.questionNumber} of 100
                  </span>
                  <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-[11px]">
                    {currentProblem.subject}
                  </span>
                  <span className="text-slate-400">{currentProblem.topicName}</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => toggleFlag(currentProblem.id)}
                    className={`px-2 py-1 rounded text-xs border ${
                      flaggedQuestions[currentProblem.id]
                        ? 'bg-amber-500/20 border-amber-500 text-amber-300'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-300'
                    }`}
                  >
                    {flaggedQuestions[currentProblem.id] ? 'Flagged for Review' : 'Flag Question'}
                  </button>
                </div>
              </div>

              {/* Question Text */}
              <div className="text-slate-100 text-base leading-relaxed font-normal">
                {currentProblem.question}
              </div>

              {/* Options */}
              <div className="space-y-2 pt-2">
                {currentProblem.options.map((option, idx) => {
                  const isSelected = userAnswers[currentProblem.id] === idx;
                  const isAnswered = userAnswers[currentProblem.id] !== undefined;
                  const isCorrect = currentProblem.correctAnswer === idx;

                  let optionStyle = 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700';
                  if (studyMode === 'guided' && isAnswered) {
                    if (isCorrect) {
                      optionStyle = 'bg-emerald-950/40 border-emerald-500/80 text-emerald-200 font-semibold';
                    } else if (isSelected) {
                      optionStyle = 'bg-rose-950/40 border-rose-500/80 text-rose-300';
                    }
                  } else if (isSelected) {
                    optionStyle = 'bg-amber-500/10 border-amber-500 text-amber-300 font-semibold';
                  }

                  const label = String.fromCharCode(65 + idx); // A, B, C, D

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      className={`w-full text-left p-3.5 rounded-lg border text-sm flex items-start gap-3 transition-colors ${optionStyle}`}
                    >
                      <span className="font-mono text-xs w-6 h-6 rounded bg-slate-800 flex items-center justify-center shrink-0 text-slate-300 font-bold">
                        {label}
                      </span>
                      <span className="pt-0.5">{option}</span>
                    </button>
                  );
                })}
              </div>

              {/* Guided Slow-Learner Solution Box */}
              {studyMode === 'guided' && userAnswers[currentProblem.id] !== undefined && showExplanation && (
                <div className="mt-5 border-t border-slate-800 pt-4 space-y-4">
                  {/* Formula and Key Concept */}
                  <div className="bg-slate-950 border border-slate-800 p-3.5 rounded">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-amber-400 block mb-1">
                      Key Formula Used:
                    </span>
                    <div className="font-mono text-xs text-slate-200">{currentProblem.keyFormulaUsed}</div>
                  </div>

                  {/* ELI5 Visual Intuition */}
                  <div className="bg-slate-950 border border-slate-800 p-3.5 rounded">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-cyan-400 block mb-1">
                      Slow-Learner Visual Intuition:
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed">{currentProblem.eli5Takeaway}</p>
                  </div>

                  {/* Step by Step Breakdown */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                        Step-by-Step Derivation:
                      </span>
                      {currentProblem.stepByStepSolution.length > (revealedSteps[currentProblem.id] || 1) && (
                        <button
                          onClick={() => nextStep(currentProblem.id, currentProblem.stepByStepSolution.length)}
                          className="text-xs text-amber-400 hover:text-amber-300 font-medium underline"
                        >
                          Show Next Calculation Step ({(revealedSteps[currentProblem.id] || 1)} of {currentProblem.stepByStepSolution.length})
                        </button>
                      )}
                    </div>

                    <div className="space-y-2">
                      {currentProblem.stepByStepSolution
                        .slice(0, revealedSteps[currentProblem.id] || 1)
                        .map((step) => (
                          <div key={step.step} className="bg-slate-950/70 border border-slate-800 p-3 rounded text-xs space-y-1">
                            <div className="text-slate-200 font-semibold">
                              Step {step.step}: {step.title}
                            </div>
                            <div className="text-slate-400">{step.explanation}</div>
                            {step.calculation && (
                              <pre className="font-mono text-amber-300 bg-slate-900 p-2 rounded text-[11px] overflow-x-auto mt-1">
                                {step.calculation}
                              </pre>
                            )}
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Prev / Next Question buttons */}
              <div className="flex justify-between pt-4 border-t border-slate-800">
                <button
                  onClick={() => setCurrentIndex((idx) => Math.max(0, idx - 1))}
                  disabled={currentIndex === 0}
                  className="px-4 py-2 bg-slate-950 border border-slate-800 rounded text-xs text-slate-300 hover:text-slate-100 disabled:opacity-30"
                >
                  Previous Item
                </button>

                <div className="flex gap-2">
                  {onOpenSimulator && (
                    <button
                      onClick={onOpenSimulator}
                      className="px-3 py-2 bg-slate-800 hover:bg-slate-700 rounded text-xs text-slate-200 font-medium"
                    >
                      Open Circuit Simulator
                    </button>
                  )}
                  <button
                    onClick={() => setCurrentIndex((idx) => Math.min(filteredProblems.length - 1, idx + 1))}
                    disabled={currentIndex === filteredProblems.length - 1}
                    className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold rounded text-xs disabled:opacity-30"
                  >
                    Next Item
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="border border-slate-800 bg-slate-900 p-8 rounded-lg text-center text-slate-400 text-sm">
              No questions found for this subject filter.
            </div>
          )}
        </div>

        {/* Right: 100-Question Quick Navigation Grid (4 Cols) */}
        <div className="lg:col-span-4 border border-slate-800 bg-slate-900 p-4 rounded-lg space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <h3 className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
              100-Item Grid Navigator
            </h3>
            <span className="text-[11px] font-mono text-slate-400">
              {answeredCount}/100 answered
            </span>
          </div>

          <div className="flex gap-2 text-[10px] text-slate-400 pb-1">
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded bg-emerald-600 inline-block" /> Answered
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded bg-amber-500 inline-block" /> Flagged
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded bg-slate-950 border border-slate-700 inline-block" /> Unanswered
            </span>
          </div>

          {/* Grid buttons 1 to 100 */}
          <div className="grid grid-cols-10 gap-1.5 max-h-[480px] overflow-y-auto pr-1">
            {dailyProblems.map((prob, i) => {
              const isAnswered = userAnswers[prob.id] !== undefined;
              const isFlagged = flaggedQuestions[prob.id];
              const isCurrent = currentProblem && currentProblem.id === prob.id;

              let btnBg = 'bg-slate-950 text-slate-400 border-slate-800';
              if (isAnswered) {
                btnBg = 'bg-emerald-950/80 text-emerald-300 border-emerald-700';
              }
              if (isFlagged) {
                btnBg = 'bg-amber-950/80 text-amber-300 border-amber-600';
              }
              if (isCurrent) {
                btnBg += ' ring-2 ring-amber-400';
              }

              return (
                <button
                  key={prob.id}
                  onClick={() => {
                    const matchIndex = filteredProblems.findIndex((p) => p.id === prob.id);
                    if (matchIndex !== -1) {
                      setCurrentIndex(matchIndex);
                    } else {
                      setActiveSubject('ALL');
                      setCurrentIndex(i);
                    }
                  }}
                  className={`h-7 rounded border text-[11px] font-mono font-medium flex items-center justify-center transition-colors ${btnBg}`}
                >
                  {i + 1}
                </button>
              );
            })}
          </div>

          <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400 space-y-1">
            <div>• Items 1 to 35: <strong>Mathematics</strong></div>
            <div>• Items 36 to 65: <strong>Engineering Sciences (ESAS)</strong></div>
            <div>• Items 66 to 100: <strong>EE Professional</strong></div>
          </div>
        </div>
      </div>
    </div>
  );
};
