import React, { useState } from 'react';
import { SubjectType, StudyTopic } from '../types';
import { MASTER_STUDY_ROADMAP } from '../data/roadmapData';
import { getSubtopicLesson } from '../data/subtopicLessons';
import { CleanMath } from './CleanMath';

interface RoadmapViewProps {
  onSelectTopicForPractice?: (topicId: string) => void;
  onOpenSimulator?: () => void;
  onGoToFoundations?: () => void;
  onGoToMathBasics?: () => void;
  onGoToFastTrack?: () => void;
}

export const RoadmapView: React.FC<RoadmapViewProps> = ({
  onSelectTopicForPractice,
  onOpenSimulator,
  onGoToFoundations,
  onGoToMathBasics,
  onGoToFastTrack,
}) => {
  const [selectedSubject, setSelectedSubject] = useState<'ALL' | SubjectType>('ALL');
  const [completedTopics, setCompletedTopics] = useState<Record<string, boolean>>({});
  const [expandedTopic, setExpandedTopic] = useState<string | null>('math-1');
  const [activeSubtopicIndex, setActiveSubtopicIndex] = useState<Record<string, number>>({});
  const [understoodSubtopics, setUnderstoodSubtopics] = useState<Record<string, boolean>>({});

  const filteredRoadmap = MASTER_STUDY_ROADMAP.filter(
    (item) => selectedSubject === 'ALL' || item.subject === selectedSubject
  );

  const toggleComplete = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setCompletedTopics((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const completedCount = Object.values(completedTopics).filter(Boolean).length;
  const progressPct = Math.round((completedCount / MASTER_STUDY_ROADMAP.length) * 100);

  return (
    <div className="space-y-6">
      {/* 1-Week Fast-Track Alert for Economics */}
      <div className="bg-slate-950 border border-amber-500/30 p-3.5 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
          <span className="text-slate-300">
            Studying Engineering Economics on a 1-week timeline? Follow the <strong>7-Day Fast-Track Pass Plan</strong> based on the &quot;ESAS - Engineering Economics&quot; drive folder.
          </span>
        </div>
        {onGoToFastTrack && (
          <button
            onClick={onGoToFastTrack}
            className="px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded text-xs shrink-0 transition-colors"
          >
            Start 1-Week Sprint →
          </button>
        )}
      </div>

      {/* Header Guidance Banner */}
      <div className="border border-slate-800 bg-slate-900 p-5 rounded-lg flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-base font-bold text-slate-100 tracking-tight">
              Study Sequence
            </h2>
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">
              18 Topics
            </span>
          </div>
          <p className="text-slate-400 text-xs mt-1">
            Curriculum progression: Math (1–5) · ESAS (6–10) · EE Professional (11–18)
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Filter Controls */}
          <div className="flex gap-1.5">
            {(['ALL', 'MATH', 'ESAS', 'EE'] as const).map((sub) => (
              <button
                key={sub}
                onClick={() => setSelectedSubject(sub)}
                className={`px-3 py-1.5 rounded text-xs font-semibold border transition-colors ${
                  selectedSubject === sub
                    ? 'bg-amber-500/15 border-amber-500 text-amber-300'
                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                {sub === 'ALL' ? 'All (18)' : sub}
              </button>
            ))}
          </div>

          <div className="bg-slate-950 border border-slate-800 px-3 py-1.5 rounded text-xs font-mono text-amber-400">
            {completedCount}/{MASTER_STUDY_ROADMAP.length} Complete
          </div>
        </div>
      </div>

      {/* Sequential Topic Cards */}
      <div className="space-y-4">
        {filteredRoadmap.map((topic, index) => {
          const isExpanded = expandedTopic === topic.id;
          const isDone = completedTopics[topic.id];

          return (
            <div
              key={topic.id}
              className={`border rounded-lg transition-all ${
                isDone
                  ? 'border-emerald-900/50 bg-slate-900/60'
                  : isExpanded
                  ? 'border-slate-700 bg-slate-900'
                  : 'border-slate-800 bg-slate-900/80 hover:border-slate-700'
              }`}
            >
              {/* Header Bar */}
              <div
                onClick={() => setExpandedTopic(isExpanded ? null : topic.id)}
                className="p-4 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div className="flex items-start sm:items-center gap-3">
                  {/* Step Priority Badge */}
                  <span className="w-8 h-8 rounded bg-slate-950 border border-slate-800 flex items-center justify-center font-mono text-xs font-bold text-amber-400 shrink-0">
                    {topic.orderPriority}
                  </span>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                        {topic.subject}
                      </span>
                      <h3 className="text-base font-semibold text-slate-100">{topic.title}</h3>
                    </div>
                    <p className="text-xs text-slate-400 mt-0.5">{topic.description}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 self-end sm:self-center shrink-0">
                  <span className="text-[11px] font-mono text-slate-400 hidden md:inline">
                    ~{topic.recommendedDays} Days
                  </span>
                  <button
                    onClick={(e) => toggleComplete(topic.id, e)}
                    className={`px-3 py-1 rounded text-xs border font-medium transition-colors ${
                      isDone
                        ? 'bg-emerald-950 border-emerald-500 text-emerald-300'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {isDone ? 'Topic Mastered' : 'Mark as Done'}
                  </button>
                  <span className="text-slate-500 text-xs">{isExpanded ? '▲' : '▼'}</span>
                </div>
              </div>

              {/* Expanded Deep Dive Details */}
              {isExpanded && (
                <div className="p-5 border-t border-slate-800 space-y-5 bg-slate-950/50">
                  {/* Visual Intuition & Exam Weight */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-slate-900 border border-slate-800 p-4 rounded-lg space-y-1.5">
                      <div className="text-xs font-mono uppercase text-cyan-400 tracking-wider font-semibold">
                        Visual Intuition
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">{topic.eli5Intuition}</p>
                    </div>

                    <div className="bg-slate-900 border border-slate-800 p-4 rounded-lg space-y-1.5">
                      <div className="text-xs font-mono uppercase text-amber-400 tracking-wider font-semibold">
                        Exam Weight
                      </div>
                      <p className="text-xs text-slate-300">{topic.boardExamWeight}</p>
                      <div className="text-[11px] text-slate-400 mt-1">
                        Pacing: ~{topic.recommendedDays} study days
                      </div>
                    </div>
                  </div>

                  {/* Core Subtopics to Master */}
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider">
                        Curriculum Subtopics
                      </h4>
                      <span className="text-[10px] text-amber-400 font-mono">
                        {topic.subtopics.filter((_, idx) => understoodSubtopics[`${topic.id}-${idx}`]).length} of {topic.subtopics.length} Understood
                      </span>
                    </div>

                    {/* Subtopic Selector Chips */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {topic.subtopics.map((sub, i) => {
                        const isSubActive = (activeSubtopicIndex[topic.id] ?? 0) === i;
                        const isUnderstood = understoodSubtopics[`${topic.id}-${i}`];

                        return (
                          <button
                            key={i}
                            onClick={() =>
                              setActiveSubtopicIndex((prev) => ({
                                ...prev,
                                [topic.id]: i,
                              }))
                            }
                            className={`p-2.5 rounded text-left border text-xs flex items-center justify-between transition-colors ${
                              isSubActive
                                ? 'bg-amber-500/20 border-amber-500 text-amber-200 font-semibold shadow-sm'
                                : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                            }`}
                          >
                            <div className="flex items-center gap-2 truncate">
                              <span
                                className={`w-5 h-5 rounded flex items-center justify-center font-mono text-[10px] font-bold shrink-0 ${
                                  isSubActive ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-400'
                                }`}
                              >
                                {i + 1}
                              </span>
                              <span className="truncate">{sub}</span>
                            </div>

                            {isUnderstood && (
                              <span className="text-emerald-400 font-mono text-[10px] ml-2 shrink-0">
                                ✓ Understood
                              </span>
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {/* Active Subtopic Deep-Dive & Learning Card */}
                    {(() => {
                      const curSubIdx = activeSubtopicIndex[topic.id] ?? 0;
                      const curSubTitle = topic.subtopics[curSubIdx] || topic.subtopics[0];
                      const lesson = getSubtopicLesson(topic.id, curSubIdx, curSubTitle);
                      const isUnderstood = understoodSubtopics[`${topic.id}-${curSubIdx}`];

                      return (
                        <div className="border border-amber-500/30 bg-slate-950 p-4 sm:p-5 rounded-lg space-y-4 mt-2">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2.5 border-b border-slate-800">
                            <div>
                              <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/30">
                                Subtopic {curSubIdx + 1} of {topic.subtopics.length}
                              </span>
                              <h5 className="text-sm font-bold text-slate-100 mt-1">{lesson.subtopicTitle}</h5>
                            </div>

                            <button
                              onClick={() =>
                                setUnderstoodSubtopics((prev) => ({
                                  ...prev,
                                  [`${topic.id}-${curSubIdx}`]: !prev[`${topic.id}-${curSubIdx}`],
                                }))
                              }
                              className={`px-3 py-1 rounded text-xs border font-medium transition-colors ${
                                isUnderstood
                                  ? 'bg-emerald-950 border-emerald-500 text-emerald-300 font-bold'
                                  : 'bg-slate-900 border-slate-700 text-slate-300 hover:text-white'
                              }`}
                            >
                              {isUnderstood ? '✓ Understood' : 'Mark as Understood'}
                            </button>
                          </div>

                          {/* Concept & Physical Model */}
                          <div className="bg-slate-900/80 border border-slate-800 p-3.5 rounded-lg space-y-2">
                            <p className="text-xs text-slate-200 leading-relaxed font-sans">{lesson.inPlainEnglish}</p>
                            <p className="text-xs text-amber-200/90 leading-relaxed font-sans pt-2 border-t border-slate-800/80">
                              <span className="font-semibold text-amber-400 mr-1.5 font-mono text-[11px] uppercase">Mental Model:</span>
                              {lesson.visualMentalModel}
                            </p>
                          </div>

                          {/* Governing Formula */}
                          <div className="border border-slate-800 bg-slate-900 p-3.5 rounded-lg space-y-1">
                            <span className="text-[10px] uppercase font-mono tracking-wider text-emerald-400 font-bold block">
                              Governing Formula:
                            </span>
                            <div className="bg-slate-950 p-2.5 rounded border border-slate-800 overflow-x-auto">
                              <CleanMath math={lesson.coreRuleOrFormula} block className="text-amber-300 font-bold text-xs sm:text-sm py-1.5" />
                            </div>
                          </div>

                          {/* Common Exam Trap */}
                          <div className="border border-rose-900/40 bg-rose-950/20 p-3 rounded-lg space-y-0.5 text-xs">
                            <span className="font-mono text-[10px] text-rose-400 uppercase font-bold block">
                              Exam Pitfall:
                            </span>
                            <p className="text-rose-200/90 text-[11px] leading-relaxed">{lesson.deadlyExamTrap}</p>
                          </div>

                          {/* Worked Example */}
                          <div className="border border-slate-800 bg-slate-900 p-3.5 rounded-lg space-y-2 text-xs">
                            <span className="font-semibold text-slate-200 uppercase text-[11px] block">
                              Worked Example:
                            </span>
                            <div className="font-medium text-slate-300 bg-slate-950 p-2.5 rounded border border-slate-800">
                              {lesson.workedExample.problemStatement}
                            </div>
                            <div className="space-y-1.5 pl-2 border-l border-slate-800 text-[11px] text-slate-300 font-mono">
                              {lesson.workedExample.stepByStep.map((st, sIdx) => (
                                <div key={sIdx} className="flex items-start gap-1.5">
                                  <span className="text-amber-400 shrink-0">•</span>
                                  <CleanMath math={st} />
                                </div>
                              ))}
                            </div>
                            <div className="pt-1 text-emerald-400 font-mono font-bold text-xs">
                              Answer: {lesson.workedExample.finalAnswer}
                            </div>
                          </div>

                          {/* Subtopic Paging Controls */}
                          <div className="flex justify-between pt-2 border-t border-slate-800 text-xs">
                            <button
                              onClick={() =>
                                setActiveSubtopicIndex((prev) => ({
                                  ...prev,
                                  [topic.id]: Math.max(0, curSubIdx - 1),
                                }))
                              }
                              disabled={curSubIdx === 0}
                              className="px-2.5 py-1 bg-slate-900 border border-slate-800 text-slate-400 hover:text-white rounded disabled:opacity-30"
                            >
                              ◀ Prev Subtopic
                            </button>

                            <button
                              onClick={() =>
                                setActiveSubtopicIndex((prev) => ({
                                  ...prev,
                                  [topic.id]: Math.min(topic.subtopics.length - 1, curSubIdx + 1),
                                }))
                              }
                              disabled={curSubIdx === topic.subtopics.length - 1}
                              className="px-3 py-1 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded disabled:opacity-30"
                            >
                              Next Subtopic ▶
                            </button>
                          </div>
                        </div>
                      );
                    })()}
                  </div>

                  {/* Key Formulas */}
                  <div>
                    <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Must-Know Formulas
                    </h4>
                    <div className="space-y-2.5">
                      {topic.keyFormulas.map((f, i) => (
                        <div key={i} className="bg-slate-900 border border-slate-800 p-3.5 rounded-lg text-xs space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-slate-200">{f.name}</span>
                            <span className="text-[10px] font-mono text-cyan-400">Board Exam Formula</span>
                          </div>
                          <div className="bg-slate-950 border border-slate-800 p-2.5 rounded overflow-x-auto">
                            <CleanMath math={f.formula} block className="text-amber-300 font-bold text-xs sm:text-sm py-1" />
                          </div>
                          <p className="text-slate-400 text-[11px] leading-relaxed">{f.explanation}</p>
                          {f.variables && f.variables.length > 0 && (
                            <div className="flex flex-wrap gap-x-3 gap-y-1 text-[10px] font-mono text-slate-400 pt-1.5 border-t border-slate-800/80">
                              {f.variables.map((v, vIdx) => (
                                <span key={vIdx} className="bg-slate-950 px-1.5 py-0.5 rounded border border-slate-800/60 text-slate-300">
                                  {v}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Link to Simulators or Practice */}
                  <div className="pt-2 flex flex-wrap gap-2">
                    {onGoToMathBasics && (
                      <button
                        onClick={onGoToMathBasics}
                        className="px-3.5 py-1.5 rounded bg-slate-950 border border-amber-500/50 hover:border-amber-400 text-amber-300 text-xs font-medium"
                      >
                        Math from Scratch ▶
                      </button>
                    )}
                    {onOpenSimulator && (
                      <button
                        onClick={onOpenSimulator}
                        className="px-3.5 py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 font-medium"
                      >
                        Launch Simulator
                      </button>
                    )}
                    {onSelectTopicForPractice && (
                      <button
                        onClick={() => onSelectTopicForPractice(topic.id)}
                        className="px-3.5 py-1.5 rounded bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-semibold"
                      >
                        Practice Questions for this Topic
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
