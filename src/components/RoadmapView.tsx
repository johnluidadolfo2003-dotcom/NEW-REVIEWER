import React, { useState } from 'react';
import { SubjectType, StudyTopic } from '../types';
import { MASTER_STUDY_ROADMAP } from '../data/roadmapData';

interface RoadmapViewProps {
  onSelectTopicForPractice?: (topicId: string) => void;
  onOpenSimulator?: () => void;
}

export const RoadmapView: React.FC<RoadmapViewProps> = ({ onSelectTopicForPractice, onOpenSimulator }) => {
  const [selectedSubject, setSelectedSubject] = useState<'ALL' | SubjectType>('ALL');
  const [completedTopics, setCompletedTopics] = useState<Record<string, boolean>>({});
  const [expandedTopic, setExpandedTopic] = useState<string | null>('math-1');

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
      {/* Header Guidance Banner */}
      <div className="border border-slate-800 bg-slate-900/90 p-5 rounded-lg space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-slate-100 tracking-tight">
              Recommended Study Sequence: What to Study First
            </h2>
            <p className="text-slate-400 text-xs mt-1">
              Organized for visual and slow learners. Master mathematical tools first, then build physical intuition through ESAS, and finally tackle complex EE electrical machines and power systems.
            </p>
          </div>

          <div className="bg-slate-950 border border-slate-800 px-4 py-2.5 rounded text-right shrink-0">
            <span className="text-[11px] text-slate-400 block">Syllabus Mastery</span>
            <span className="text-lg font-mono font-bold text-amber-400">{completedCount} of {MASTER_STUDY_ROADMAP.length} Topics</span>
            <span className="text-[10px] text-slate-500 block">{progressPct}% complete</span>
          </div>
        </div>

        {/* 3-Phase Sequential Explanation Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-3 border-t border-slate-800 text-xs">
          <div className="bg-slate-950 p-3 rounded border border-slate-800">
            <div className="text-amber-400 font-bold mb-1">Phase 1: MATH (Study First)</div>
            <p className="text-slate-400 text-[11px] leading-relaxed">
              Algebra, Trig, Calculus &amp; Complex Numbers. You cannot calculate AC phasors or transient circuits without mastering vectors and derivatives first.
            </p>
          </div>

          <div className="bg-slate-950 p-3 rounded border border-slate-800">
            <div className="text-cyan-400 font-bold mb-1">Phase 2: ESAS (Study Second)</div>
            <p className="text-slate-400 text-[11px] leading-relaxed">
              Physics, Mechanics, Thermo, RA 7920 law, and Philippine Electrical Code. Builds physical intuition for forces, torque, and legal board exam questions.
            </p>
          </div>

          <div className="bg-slate-950 p-3 rounded border border-slate-800">
            <div className="text-emerald-400 font-bold mb-1">Phase 3: EE Core (Study Third)</div>
            <p className="text-slate-400 text-[11px] leading-relaxed">
              DC/AC Circuits, 3-Phase, Transformers, Induction/Synchronous Machines, and Power System Faults. Synthesizes Math + Physics into electrical design.
            </p>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="flex gap-2 pt-2">
          {(['ALL', 'MATH', 'ESAS', 'EE'] as const).map((sub) => (
            <button
              key={sub}
              onClick={() => setSelectedSubject(sub)}
              className={`px-3 py-1.5 rounded text-xs font-semibold border ${
                selectedSubject === sub
                  ? 'bg-amber-500/10 border-amber-500 text-amber-400'
                  : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              {sub === 'ALL' ? 'Complete Roadmap (All 18 Topics)' : `${sub} Only`}
            </button>
          ))}
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
                  {/* Slow Learner ELI5 & Visual Intuition */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-slate-900 border border-slate-800 p-4 rounded-lg space-y-1.5">
                      <div className="text-xs font-mono uppercase text-cyan-400 tracking-wider font-semibold">
                        Slow-Learner Visual Intuition
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">{topic.eli5Intuition}</p>
                    </div>

                    <div className="bg-slate-900 border border-slate-800 p-4 rounded-lg space-y-1.5">
                      <div className="text-xs font-mono uppercase text-amber-400 tracking-wider font-semibold">
                        Board Exam Strategic Weight
                      </div>
                      <p className="text-xs text-slate-300">{topic.boardExamWeight}</p>
                      <div className="text-[11px] text-slate-400 mt-2">
                        Suggested pacing: {topic.recommendedDays} study days with 20-30 practice problems daily.
                      </div>
                    </div>
                  </div>

                  {/* Subtopics Covered */}
                  <div>
                    <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Core Subtopics to Master
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {topic.subtopics.map((sub, i) => (
                        <div
                          key={i}
                          className="bg-slate-900 border border-slate-800/80 px-3 py-2 rounded text-xs text-slate-300 flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                          <span>{sub}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Formulas */}
                  <div>
                    <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Must-Know Formulas
                    </h4>
                    <div className="space-y-2">
                      {topic.keyFormulas.map((f, i) => (
                        <div key={i} className="bg-slate-900 border border-slate-800 p-3 rounded-lg text-xs space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-slate-200">{f.name}</span>
                            <code className="font-mono text-amber-400 font-bold bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                              {f.formula}
                            </code>
                          </div>
                          <p className="text-slate-400 text-[11px]">{f.explanation}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Link to Simulators or Practice */}
                  <div className="pt-2 flex flex-wrap gap-2">
                    {onOpenSimulator && (
                      <button
                        onClick={onOpenSimulator}
                        className="px-3.5 py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 font-medium"
                      >
                        Launch Interactive Simulator
                      </button>
                    )}
                    {onSelectTopicForPractice && (
                      <button
                        onClick={() => onSelectTopicForPractice(topic.id)}
                        className="px-3.5 py-1.5 rounded bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-semibold"
                      >
                        Solve 100-Problem Practice for this Topic
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
