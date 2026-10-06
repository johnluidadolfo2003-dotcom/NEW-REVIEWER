import React, { useState, useEffect } from 'react';
import { ECON_FAST_TRACK_DAYS } from '../data/econFastTrackData';
import { ESAS_DRIVE_SAMPLE_PROBLEMS } from '../data/driveSampleProblems';
import { CleanMath } from './CleanMath';
import { DriveSampleProblem } from '../types';

interface EconFastTrackViewProps {
  onGoToDriveProblems?: (dayFilter?: number) => void;
  onGoToCalTech?: () => void;
  onGoToFormulas?: () => void;
}

export const EconFastTrackView: React.FC<EconFastTrackViewProps> = ({
  onGoToDriveProblems,
  onGoToCalTech,
  onGoToFormulas,
}) => {
  const [selectedDayNum, setSelectedDayNum] = useState<number>(1);
  const [completedDays, setCompletedDays] = useState<Record<number, boolean>>({});
  const [expandedProblemId, setExpandedProblemId] = useState<string | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});
  const [showQuizResults, setShowQuizResults] = useState<Record<string, boolean>>({});

  // View mode: 'plan' for the 7-Day Sprint, 'sampleProblems' for the Drive folder drill
  const [viewMode, setViewMode] = useState<'plan' | 'sampleProblems'>('plan');
  const [sampleProblemFilter, setSampleProblemFilter] = useState<string>('ALL');
  const [sampleSearchQuery, setSampleSearchQuery] = useState<string>('');
  const [userSelectedChoices, setUserSelectedChoices] = useState<Record<string, string>>({});

  // Load completed days from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('econ_fast_track_completed_days');
      if (saved) {
        setCompletedDays(JSON.parse(saved));
      }
    } catch (e) {
      console.warn('Could not load completed days', e);
    }
  }, []);

  const toggleDayCompleted = (day: number) => {
    setCompletedDays((prev) => {
      const next = { ...prev, [day]: !prev[day] };
      try {
        localStorage.setItem('econ_fast_track_completed_days', JSON.stringify(next));
      } catch (e) {
        console.warn('Could not save completed days', e);
      }
      return next;
    });
  };

  const activePlan = ECON_FAST_TRACK_DAYS.find((d) => d.dayNumber === selectedDayNum) || ECON_FAST_TRACK_DAYS[0];

  // Get sample problems for active day
  const dayProblems: DriveSampleProblem[] = ESAS_DRIVE_SAMPLE_PROBLEMS.filter(
    (p) => activePlan.sampleProblemIds.includes(p.id) || p.weekDay === selectedDayNum
  );

  // Filtered sample problems for folder view
  const filteredSampleProblems = ESAS_DRIVE_SAMPLE_PROBLEMS.filter((p) => {
    const matchesCategory =
      sampleProblemFilter === 'ALL' ||
      p.category.toLowerCase().includes(sampleProblemFilter.toLowerCase());
    const matchesSearch =
      !sampleSearchQuery ||
      p.topicTitle.toLowerCase().includes(sampleSearchQuery.toLowerCase()) ||
      p.question.toLowerCase().includes(sampleSearchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(sampleSearchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = [
    'ALL',
    'Simple & Compound Interest',
    'Annuities',
    'Depreciation',
    'Capitalized Cost',
    'Break-Even & Rate of Return',
    'Gradient Series & Bonds',
  ];

  const completedCount = Object.values(completedDays).filter(Boolean).length;
  const progressPercent = Math.round((completedCount / ECON_FAST_TRACK_DAYS.length) * 100);

  const handleSelectQuizOption = (quizKey: string, optIndex: number) => {
    setQuizAnswers((prev) => ({ ...prev, [quizKey]: optIndex }));
    setShowQuizResults((prev) => ({ ...prev, [quizKey]: true }));
  };

  const handleUserSelectChoice = (problemId: string, choiceLetter: string) => {
    setUserSelectedChoices((prev) => ({ ...prev, [problemId]: choiceLetter }));
  };

  return (
    <div className="space-y-6">
      {/* Top Banner & Mode Switcher */}
      <div className="border border-slate-800 bg-slate-900 p-5 rounded-lg space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-base font-bold text-slate-100 tracking-tight">
                Engineering Economics Fast-Track
              </h2>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/30">
                Drive Reference Syllabus
              </span>
            </div>
            <p className="text-slate-400 text-xs mt-1">
              Curriculum &amp; problem bank from Drive folder &quot;ESAS - Engineering Economics&quot; &bull; Folder: &quot;economics sample problem&quot;
            </p>
          </div>

          {/* Quick Action Badges */}
          <div className="flex flex-wrap items-center gap-2.5">
            <div className="bg-slate-950 border border-slate-800 px-3 py-1.5 rounded text-xs font-mono text-slate-300">
              <span className="text-amber-400 font-bold">{completedCount}/7</span> Days Mastered ({progressPercent}%)
            </div>

            {onGoToCalTech && (
              <button
                onClick={onGoToCalTech}
                className="px-3 py-1.5 bg-slate-950 hover:bg-slate-800 text-slate-300 text-xs font-medium rounded border border-slate-800 transition-colors"
              >
                Canon CalTech
              </button>
            )}

            {onGoToFormulas && (
              <button
                onClick={onGoToFormulas}
                className="px-3 py-1.5 bg-slate-950 hover:bg-slate-800 text-slate-300 text-xs font-medium rounded border border-slate-800 transition-colors"
              >
                Formula Bank
              </button>
            )}
          </div>
        </div>

        {/* View Mode Tabs: Week Pass Plan vs Economics Sample Problems */}
        <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-slate-800">
          <button
            onClick={() => setViewMode('plan')}
            className={`px-3.5 py-1.5 rounded text-xs font-semibold transition-all flex items-center gap-1.5 ${
              viewMode === 'plan'
                ? 'bg-amber-500 text-slate-950 shadow-sm'
                : 'bg-slate-950 text-slate-300 hover:text-white border border-slate-800'
            }`}
          >
            <span>1-Week Pass Plan (Days 1–7)</span>
            <span className="text-[10px] opacity-80 font-mono">({completedCount}/7)</span>
          </button>

          <button
            onClick={() => setViewMode('sampleProblems')}
            className={`px-3.5 py-1.5 rounded text-xs font-semibold transition-all flex items-center gap-1.5 ${
              viewMode === 'sampleProblems'
                ? 'bg-amber-500 text-slate-950 shadow-sm'
                : 'bg-slate-950 text-slate-300 hover:text-white border border-slate-800'
            }`}
          >
            <span>📁 Economics Sample Problems</span>
            <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-slate-900 border border-slate-700 text-amber-300">
              {ESAS_DRIVE_SAMPLE_PROBLEMS.length} Problems
            </span>
          </button>
        </div>

        {/* Progress Bar */}
        <div className="space-y-1">
          <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-slate-800/80">
            <div
              className="bg-amber-500 h-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <div className="flex justify-between items-center text-[11px] text-slate-400">
            <span>PRC Licensure Standard: 70% Passing Grade &bull; Weighted Avg</span>
            <span>{progressPercent === 100 ? '100% Ready for Board Exam' : `${7 - completedCount} Days Remaining`}</span>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* MODE 1: 1-WEEK PASS PLAN (DAYS 1 TO 7)                                     */}
      {/* ========================================================================= */}
      {viewMode === 'plan' && (
        <div className="space-y-6">
          {/* 7-Day Navigation Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
            {ECON_FAST_TRACK_DAYS.map((day) => {
              const isSelected = day.dayNumber === selectedDayNum;
              const isDone = !!completedDays[day.dayNumber];
              return (
                <button
                  key={day.dayNumber}
                  onClick={() => setSelectedDayNum(day.dayNumber)}
                  className={`p-3 rounded-lg border text-left transition-all ${
                    isSelected
                      ? 'border-amber-500 bg-amber-500/10 text-white'
                      : isDone
                      ? 'border-emerald-800/70 bg-emerald-950/20 text-slate-300 hover:border-emerald-700'
                      : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-amber-400">
                      Day {day.dayNumber}
                    </span>
                    {isDone ? (
                      <span className="text-emerald-400 text-xs font-bold font-mono">✓</span>
                    ) : (
                      <span className="text-[10px] font-mono text-slate-500">{day.estimatedHours}h</span>
                    )}
                  </div>
                  <div className="text-[11px] font-semibold truncate mt-1 text-slate-200">
                    {day.dayTitle.split(',')[0]}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Day Detail Card */}
          <div className="border border-slate-800 bg-slate-900 p-5 rounded-lg space-y-6">
            {/* Header with Completion Toggle */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-amber-400 px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30">
                    Day {activePlan.dayNumber} of 7
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    Est. Study: {activePlan.estimatedHours} Hours
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  {activePlan.dayTitle}
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Focus: {activePlan.focusArea} &bull; Reference: {activePlan.sourceDoc}
                </p>
              </div>

              <button
                onClick={() => toggleDayCompleted(activePlan.dayNumber)}
                className={`px-4 py-2 rounded text-xs font-bold transition-colors flex items-center justify-center gap-2 shrink-0 ${
                  completedDays[activePlan.dayNumber]
                    ? 'bg-emerald-600 text-white hover:bg-emerald-500'
                    : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
                }`}
              >
                <span>{completedDays[activePlan.dayNumber] ? '✓ Day Mastered' : 'Mark as Mastered'}</span>
              </button>
            </div>

            {/* Core Concepts */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
                Core PRC Concepts to Know:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {activePlan.coreConcepts.map((concept, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded bg-slate-950 border border-slate-800/80 text-xs text-slate-300 leading-relaxed flex items-start gap-2"
                  >
                    <span className="text-amber-400 font-bold font-mono text-[11px] shrink-0 mt-0.5">
                      {idx + 1}.
                    </span>
                    <span>{concept}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Must-Known Formulas with Stacked Over Fractions */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
                  Must-Known Economics Formulas:
                </h4>
                <span className="text-[10px] font-mono text-slate-500">
                  Stacked Over &bull; Proper Exponents
                </span>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {activePlan.keyFormulas.map((f, fIdx) => (
                  <div key={fIdx} className="p-4 bg-slate-950 rounded-lg border border-slate-800 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-200">{f.name}</span>
                      <span className="text-[10px] font-mono text-slate-400">Board Standard</span>
                    </div>
                    <div className="p-3 bg-slate-900 rounded border border-slate-800/80 overflow-x-auto">
                      <CleanMath math={f.formula} block className="text-amber-300 font-mono text-xs sm:text-sm font-bold" />
                    </div>
                    <p className="text-[11px] text-slate-400 italic">{f.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Canon F-789SGA CalTech Keystroke Highlight */}
            <div className="p-4 bg-slate-950 rounded-lg border border-amber-500/30 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
                  <span>Canon F-789SGA Power Technique:</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300">
                    {activePlan.canonKeystrokeHighlight.mode}
                  </span>
                </span>
                <span className="text-[10px] font-mono text-slate-400">Speed Shortcut</span>
              </div>

              <div className="text-xs font-semibold text-slate-200">
                {activePlan.canonKeystrokeHighlight.keyTechnique}
              </div>

              <div className="space-y-1 font-mono text-[11px] bg-slate-900 p-3 rounded border border-slate-800 text-slate-200">
                {activePlan.canonKeystrokeHighlight.keystrokes.map((step, sIdx) => (
                  <div key={sIdx} className="flex items-center gap-2">
                    <span className="text-slate-500 text-[10px] w-4 shrink-0">{sIdx + 1}.</span>
                    <span className="text-amber-300 font-medium">{step}</span>
                  </div>
                ))}
              </div>

              {activePlan.canonKeystrokeHighlight.proTip && (
                <div className="text-[11px] text-amber-300/90 italic pt-1">
                  <strong className="text-amber-400 not-italic font-mono uppercase text-[10px] mr-1">Pro-Tip:</strong>
                  {activePlan.canonKeystrokeHighlight.proTip}
                </div>
              )}
            </div>

            {/* Common Exam Traps */}
            <div className="p-4 bg-slate-950 rounded-lg border border-slate-800 space-y-2">
              <span className="text-xs font-mono font-bold text-rose-400 uppercase tracking-wider block">
                PRC Board Exam Pitfalls to Avoid:
              </span>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {activePlan.examTraps.map((trap, tIdx) => (
                  <li key={tIdx} className="flex items-start gap-2">
                    <span className="text-rose-400 font-bold shrink-0">&bull;</span>
                    <span>{trap}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Target Practice Problems for this Day */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
                  Target Practice Problems (Day {activePlan.dayNumber}):
                </h4>
                <button
                  onClick={() => setViewMode('sampleProblems')}
                  className="text-xs text-amber-400 hover:text-amber-300 underline font-semibold"
                >
                  View All {ESAS_DRIVE_SAMPLE_PROBLEMS.length} Sample Problems &rarr;
                </button>
              </div>

              <div className="space-y-3">
                {dayProblems.map((prob) => {
                  const isExpanded = expandedProblemId === prob.id;
                  const userChoice = userSelectedChoices[prob.id];

                  return (
                    <div
                      key={prob.id}
                      className="border border-slate-800 rounded-lg bg-slate-950 overflow-hidden space-y-0"
                    >
                      {/* Card Header */}
                      <div
                        onClick={() => setExpandedProblemId(isExpanded ? null : prob.id)}
                        className="p-3.5 cursor-pointer flex items-center justify-between gap-3 hover:bg-slate-900/60"
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="w-6 h-6 rounded bg-slate-900 border border-slate-800 flex items-center justify-center font-mono text-[11px] font-bold text-amber-400 shrink-0">
                            #{prob.problemNumber}
                          </span>
                          <div>
                            <span className="text-xs font-bold text-slate-200 block">
                              {prob.topicTitle}
                            </span>
                            <span className="text-[10px] font-mono text-slate-400">
                              {prob.category} &bull; {prob.difficulty}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          <span className="text-xs font-semibold px-2 py-1 rounded bg-slate-900 border border-slate-800 text-amber-300">
                            {isExpanded ? 'Hide Solution' : 'Solve & View Solution'}
                          </span>
                          <span className="text-xs text-slate-500">{isExpanded ? '▲' : '▼'}</span>
                        </div>
                      </div>

                      {/* Problem Statement */}
                      <div className="px-4 pb-3 text-xs text-slate-200 leading-relaxed font-sans border-t border-slate-900 pt-2.5">
                        {prob.question}
                      </div>

                      {/* Multiple Choice Options (A, B, C, D) */}
                      {prob.choices && (
                        <div className="px-4 pb-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {prob.choices.map((choice, cIdx) => {
                            const letter = ['A', 'B', 'C', 'D'][cIdx];
                            const isSelected = userChoice === letter;
                            const isCorrect = isExpanded && prob.correctLetter === letter;

                            let btnClass = 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700';
                            if (isSelected) {
                              btnClass = 'bg-amber-500/20 border-amber-500 text-amber-200';
                            }
                            if (isExpanded) {
                              if (isCorrect) {
                                btnClass = 'bg-emerald-950/40 border-emerald-500 text-emerald-200 font-bold';
                              } else if (isSelected && !isCorrect) {
                                btnClass = 'bg-rose-950/40 border-rose-500 text-rose-300 line-through';
                              }
                            }

                            return (
                              <button
                                key={cIdx}
                                onClick={() => handleUserSelectChoice(prob.id, letter)}
                                className={`p-2 rounded text-left text-xs border transition-all flex items-center justify-between ${btnClass}`}
                              >
                                <span className="font-mono text-xs">{choice}</span>
                                {isExpanded && isCorrect && (
                                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">
                                    CORRECT
                                  </span>
                                )}
                              </button>
                            );
                          })}
                        </div>
                      )}

                      {/* Expanded Solution & Correct Letter */}
                      {isExpanded && (
                        <div className="p-4 border-t border-slate-800/80 bg-slate-900/40 space-y-3">
                          {/* Correct Letter Highlight Banner */}
                          <div className="p-3 bg-emerald-950/40 border border-emerald-500/50 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                            <div className="flex items-center gap-2">
                              <span className="w-6 h-6 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center font-mono text-xs font-black shrink-0">
                                {prob.correctLetter || '✓'}
                              </span>
                              <span className="text-emerald-300 font-bold">
                                Correct Option [{prob.correctLetter}]:
                              </span>
                              <span className="font-mono text-emerald-100 font-bold">
                                {prob.finalAnswer}
                              </span>
                            </div>
                            <span className="text-[10px] font-mono text-emerald-400/80">
                              PRC Board Exam Verified
                            </span>
                          </div>

                          {/* Fast Shortcut Solution */}
                          {prob.shortcutSolution && (
                            <div className="p-3 bg-slate-950 rounded-lg border border-amber-500/40 space-y-1.5">
                              <div className="flex items-center justify-between">
                                <span className="text-[10px] font-mono uppercase font-bold text-amber-400 tracking-wider">
                                  ⚡ Fast Board Exam Shortcut Solution (30s Solve):
                                </span>
                                <span className="text-[10px] font-mono text-slate-500">Direct Method</span>
                              </div>
                              <div className="p-2 bg-slate-900 rounded font-mono text-xs text-amber-200 overflow-x-auto">
                                <CleanMath math={prob.shortcutSolution} block className="text-xs font-mono font-bold text-amber-300" />
                              </div>
                            </div>
                          )}

                          {/* Governing Formula */}
                          <div className="space-y-1">
                            <span className="text-[10px] font-mono uppercase font-bold text-slate-400 tracking-wider block">
                              Governing Formula:
                            </span>
                            <div className="p-2 bg-slate-950 rounded border border-slate-800 font-mono text-xs text-amber-300 overflow-x-auto">
                              <CleanMath math={prob.governingFormula} />
                            </div>
                          </div>

                          {/* Canon F-789SGA CalTech Keystrokes */}
                          <div className="p-3 bg-slate-950 rounded border border-slate-800 space-y-1.5 text-xs">
                            <div className="flex items-center justify-between">
                              <span className="font-mono text-amber-400 font-semibold text-[11px]">
                                {prob.canonCalTech.calculator} Keystrokes:
                              </span>
                              <span className="font-mono text-[10px] text-slate-400">{prob.canonCalTech.mode}</span>
                            </div>
                            <div className="space-y-1 bg-slate-900 p-2.5 rounded font-mono text-xs text-slate-200">
                              {prob.canonCalTech.keystrokes.map((k, kIdx) => (
                                <div key={kIdx} className="flex items-center gap-2">
                                  <span className="text-amber-500 font-bold">&rsaquo;</span>
                                  <span>{k}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Self-Check Concept Quiz */}
            {activePlan.selfCheckQuiz && activePlan.selfCheckQuiz.length > 0 && (
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
                  Self-Check Board Drills:
                </h4>
                <div className="space-y-3">
                  {activePlan.selfCheckQuiz.map((quiz, qIdx) => {
                    const quizKey = `d${activePlan.dayNumber}-q${qIdx}`;
                    const selectedOpt = quizAnswers[quizKey];
                    const isAnswered = showQuizResults[quizKey];
                    const isCorrect = selectedOpt === quiz.correctAnswer;

                    return (
                      <div key={qIdx} className="p-4 bg-slate-950 rounded-lg border border-slate-800 space-y-3">
                        <div className="text-xs font-semibold text-slate-200">
                          {qIdx + 1}. {quiz.question}
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {quiz.options.map((opt, optIdx) => {
                            let btnStyle = 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700';
                            if (isAnswered) {
                              if (optIdx === quiz.correctAnswer) {
                                btnStyle = 'bg-emerald-950/60 border-emerald-500 text-emerald-200 font-bold';
                              } else if (selectedOpt === optIdx) {
                                btnStyle = 'bg-rose-950/60 border-rose-500 text-rose-300 line-through';
                              }
                            }
                            return (
                              <button
                                key={optIdx}
                                onClick={() => handleSelectQuizOption(quizKey, optIdx)}
                                className={`p-2.5 rounded text-left text-xs border transition-colors flex items-center justify-between ${btnStyle}`}
                              >
                                <span>{opt}</span>
                                {isAnswered && optIdx === quiz.correctAnswer && (
                                  <span className="text-emerald-400 font-mono text-[10px] font-bold">✓ CORRECT</span>
                                )}
                              </button>
                            );
                          })}
                        </div>
                        {isAnswered && (
                          <div className={`p-3 rounded text-xs space-y-1 ${
                            isCorrect
                              ? 'bg-emerald-950/30 border border-emerald-800/60 text-emerald-300'
                              : 'bg-amber-950/30 border border-amber-800/60 text-amber-300'
                          }`}>
                            <div className="font-bold font-mono text-[10px] uppercase">
                              {isCorrect ? 'Concept Verified:' : 'Concept Explanation:'}
                            </div>
                            <div className="text-[11px] leading-relaxed">
                              {quiz.explanation}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Bottom Day Pagination */}
            <div className="flex items-center justify-between pt-2 border-t border-slate-800">
              <button
                onClick={() => setSelectedDayNum((prev) => Math.max(1, prev - 1))}
                disabled={selectedDayNum <= 1}
                className="px-4 py-2 bg-slate-900 border border-slate-800 rounded text-xs font-semibold text-slate-300 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors"
              >
                &larr; Day {Math.max(1, selectedDayNum - 1)}
              </button>

              <span className="text-xs font-mono text-slate-500">
                Sprint Progress: Day {selectedDayNum} of 7
              </span>

              <button
                onClick={() => setSelectedDayNum((prev) => Math.min(7, prev + 1))}
                disabled={selectedDayNum >= 7}
                className="px-4 py-2 bg-amber-500 text-slate-950 rounded text-xs font-bold hover:bg-amber-400 disabled:opacity-30 disabled:pointer-events-none transition-colors"
              >
                Day {Math.min(7, selectedDayNum + 1)} &rarr;
              </button>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* BANNER AFTER FINISHING WEEK PASS PLAN: ACCESS SAMPLE PROBLEMS             */}
          {/* ========================================================================= */}
          <div className="p-5 bg-gradient-to-r from-amber-950/30 via-slate-900 to-emerald-950/30 border border-amber-500/40 rounded-lg flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-amber-400 px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30">
                  Next Stage
                </span>
                <h4 className="text-sm font-bold text-white">
                  Done with the 1-Week Pass Plan? Practice All Economics Sample Problems
                </h4>
              </div>
              <p className="text-xs text-slate-300">
                Access all {ESAS_DRIVE_SAMPLE_PROBLEMS.length} board exam standard problems from Drive reference folder &quot;economics sample problem&quot; with shortcut solutions and correct letters.
              </p>
            </div>

            <button
              onClick={() => setViewMode('sampleProblems')}
              className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded transition-all shadow-md shrink-0 flex items-center justify-center gap-2"
            >
              <span>Practice Economics Sample Problems</span>
              <span>&rarr;</span>
            </button>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODE 2: ECONOMICS SAMPLE PROBLEMS (DRIVE REFERENCE FOLDER)                */}
      {/* ========================================================================= */}
      {viewMode === 'sampleProblems' && (
        <div className="space-y-6">
          {/* Folder Header */}
          <div className="p-4 bg-slate-900 border border-slate-800 rounded-lg space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-amber-400 px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30">
                    Drive Reference Folder
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-white">
                    📁 economics sample problem &bull; Board Exam Problem Bank
                  </h3>
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Complete collection of Engineering Economics sample problems with shortcut solutions, correct letters, and Canon F-789SGA keystrokes.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode('plan')}
                  className="px-3 py-1.5 bg-slate-950 hover:bg-slate-800 text-slate-300 text-xs font-medium rounded border border-slate-800 transition-colors"
                >
                  &larr; Back to 1-Week Plan
                </button>
              </div>
            </div>

            {/* Category Filter Pills & Search */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pt-2 border-t border-slate-800">
              <div className="flex flex-wrap items-center gap-1.5">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSampleProblemFilter(cat)}
                    className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors ${
                      sampleProblemFilter === cat
                        ? 'bg-amber-500 text-slate-950 font-bold'
                        : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="w-full md:w-64">
                <input
                  type="text"
                  placeholder="Search formula, topic, keyword..."
                  value={sampleSearchQuery}
                  onChange={(e) => setSampleSearchQuery(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 px-3 py-1.5 rounded text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>
          </div>

          {/* Results Summary */}
          <div className="flex items-center justify-between text-xs text-slate-400 font-mono px-1">
            <span>Showing {filteredSampleProblems.length} Problems from Reference Folder</span>
            <span>PRC REE Licensure Standard</span>
          </div>

          {/* Problem Cards List */}
          <div className="space-y-4">
            {filteredSampleProblems.map((prob) => {
              const isExpanded = expandedProblemId === prob.id;
              const userChoice = userSelectedChoices[prob.id];

              return (
                <div
                  key={prob.id}
                  className="border border-slate-800 rounded-lg bg-slate-900/60 overflow-hidden space-y-0 shadow-sm"
                >
                  {/* Problem Card Header */}
                  <div
                    onClick={() => setExpandedProblemId(isExpanded ? null : prob.id)}
                    className="p-4 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-800/40 transition-colors"
                  >
                    <div className="flex items-start sm:items-center gap-3">
                      <span className="w-8 h-8 rounded bg-slate-950 border border-slate-800 flex items-center justify-center font-mono text-xs font-bold text-amber-400 shrink-0">
                        #{prob.problemNumber}
                      </span>
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-slate-300 border border-slate-800">
                            {prob.category}
                          </span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                            {prob.difficulty}
                          </span>
                          <span className="text-[10px] font-mono text-slate-500">
                            Day {prob.weekDay}
                          </span>
                        </div>
                        <h4 className="text-xs sm:text-sm font-bold text-slate-100 mt-1">
                          {prob.topicTitle}
                        </h4>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5 self-end sm:self-center">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setExpandedProblemId(isExpanded ? null : prob.id);
                        }}
                        className={`px-3 py-1.5 rounded text-xs font-bold transition-all ${
                          isExpanded
                            ? 'bg-slate-800 text-slate-200 border border-slate-700'
                            : 'bg-amber-500 text-slate-950 hover:bg-amber-400'
                        }`}
                      >
                        {isExpanded ? 'Hide Solution' : 'Solve & View Solution'}
                      </button>
                      <span className="text-xs text-slate-500">{isExpanded ? '▲' : '▼'}</span>
                    </div>
                  </div>

                  {/* Problem Statement */}
                  <div className="px-4 py-3 bg-slate-950/70 border-t border-slate-800 text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">
                    {prob.question}
                  </div>

                  {/* Multiple Choice Options (A, B, C, D) */}
                  {prob.choices && (
                    <div className="p-4 bg-slate-950 border-t border-slate-800/80 space-y-2">
                      <div className="text-[10px] font-mono uppercase text-slate-400 tracking-wider font-semibold">
                        Select Your Answer (Click to Test):
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {prob.choices.map((choice, cIdx) => {
                          const letter = ['A', 'B', 'C', 'D'][cIdx];
                          const isSelected = userChoice === letter;
                          const isCorrect = isExpanded && prob.correctLetter === letter;

                          let btnClass = 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700';
                          if (isSelected) {
                            btnClass = 'bg-amber-500/20 border-amber-500 text-amber-200 font-semibold';
                          }
                          if (isExpanded) {
                            if (isCorrect) {
                              btnClass = 'bg-emerald-950/50 border-emerald-500 text-emerald-200 font-bold';
                            } else if (isSelected && !isCorrect) {
                              btnClass = 'bg-rose-950/50 border-rose-500 text-rose-300 line-through';
                            }
                          }

                          return (
                            <button
                              key={cIdx}
                              onClick={() => handleUserSelectChoice(prob.id, letter)}
                              className={`p-2.5 rounded text-left text-xs border transition-all flex items-center justify-between ${btnClass}`}
                            >
                              <span className="font-mono text-xs">{choice}</span>
                              {isExpanded && isCorrect && (
                                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">
                                  ✓ CORRECT
                                </span>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Expanded Solution & Shortcut */}
                  {isExpanded && (
                    <div className="p-4 sm:p-5 border-t border-slate-800 bg-slate-950/90 space-y-4">
                      {/* Prominent Correct Letter Banner */}
                      <div className="p-3.5 bg-emerald-950/40 border border-emerald-500/50 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                        <div className="flex items-center gap-3">
                          <span className="w-8 h-8 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center font-mono text-sm font-black shrink-0">
                            {prob.correctLetter || '✓'}
                          </span>
                          <div>
                            <span className="text-[10px] font-mono uppercase text-emerald-400 font-bold block">
                              Verified Board Exam Answer:
                            </span>
                            <span className="font-mono text-emerald-200 font-bold text-sm">
                              Option [{prob.correctLetter}] &mdash; {prob.finalAnswer}
                            </span>
                          </div>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800/80 shrink-0">
                          PRC Official Key
                        </span>
                      </div>

                      {/* Fast Shortcut Solution */}
                      {prob.shortcutSolution && (
                        <div className="p-3.5 bg-slate-900 rounded-lg border border-amber-500/40 space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-mono uppercase font-bold text-amber-400 tracking-wider flex items-center gap-1.5">
                              <span>⚡ Shortcut Solution (Solve in under 45 seconds):</span>
                            </span>
                            <span className="text-[10px] font-mono text-slate-400">Board Speed Move</span>
                          </div>
                          <div className="p-3 bg-slate-950 rounded border border-slate-800/80 overflow-x-auto">
                            <CleanMath math={prob.shortcutSolution} block className="text-xs sm:text-sm font-mono font-bold text-amber-300" />
                          </div>
                        </div>
                      )}

                      {/* Governing Formula */}
                      <div className="space-y-1.5">
                        <span className="text-[10px] font-mono uppercase font-bold text-slate-400 tracking-wider block">
                          Governing Formula (Clean Math &bull; Proper Over):
                        </span>
                        <div className="p-3 bg-slate-900 rounded border border-slate-800 font-mono text-xs sm:text-sm text-amber-300 overflow-x-auto">
                          <CleanMath math={prob.governingFormula} block className="text-xs sm:text-sm text-amber-300 font-bold" />
                        </div>
                      </div>

                      {/* Given Parameters Breakdown */}
                      <div className="space-y-1.5">
                        <span className="text-[10px] font-mono uppercase font-bold text-slate-400 tracking-wider block">
                          Given Parameters:
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                          {prob.given.map((g, gIdx) => (
                            <div key={gIdx} className="bg-slate-900 p-2 rounded border border-slate-800 text-xs flex items-center justify-between">
                              <span className="font-mono text-amber-400 font-semibold">{g.symbol}:</span>
                              <span className="text-slate-200 font-mono">{g.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Canon F-789SGA Keystrokes Box */}
                      <div className="p-3.5 bg-slate-900 rounded-lg border border-slate-800 space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-mono text-amber-400 font-bold">
                            {prob.canonCalTech.calculator} Keystrokes:
                          </span>
                          <span className="font-mono text-[10px] text-slate-400">{prob.canonCalTech.mode}</span>
                        </div>
                        <div className="space-y-1 bg-slate-950 p-2.5 rounded font-mono text-xs text-slate-200">
                          {prob.canonCalTech.keystrokes.map((k, kIdx) => (
                            <div key={kIdx} className="flex items-center gap-2">
                              <span className="text-amber-500 font-bold">&rsaquo;</span>
                              <span>{k}</span>
                            </div>
                          ))}
                        </div>
                        {prob.canonCalTech.proTip && (
                          <div className="text-[11px] text-amber-300/90 italic pt-0.5">
                            <strong className="text-amber-400 not-italic font-mono uppercase text-[10px] mr-1">Pro-Tip:</strong>
                            {prob.canonCalTech.proTip}
                          </div>
                        )}
                      </div>
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
