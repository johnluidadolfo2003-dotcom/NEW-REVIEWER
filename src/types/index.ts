export type SubjectType = 'MATH' | 'ESAS' | 'EE';

export interface StudyTopic {
  id: string;
  subject: SubjectType;
  title: string;
  orderPriority: number; // 1 = Highest priority (study first)
  phase: number; // Phase 1, Phase 2, Phase 3
  description: string;
  visualSummary: string;
  eli5Intuition: string; // Explain Like I'm 5 for slow learners
  keyFormulas: {
    name: string;
    formula: string;
    explanation: string;
    variables: string[];
  }[];
  diagramType?: 'circuit' | 'phasor' | 'mechanics' | 'curves' | 'power_triangle' | 'wye_delta';
  boardExamWeight: string; // e.g. "High Frequency (10-15% of MATH)"
  subtopics: string[];
  recommendedDays: number;
}

export interface BoardProblem {
  id: string;
  subject: SubjectType;
  topicId: string;
  topicName: string;
  dayNumber: number; // for the 100 problems per day sets
  questionNumber: number; // 1 to 100
  question: string;
  options: [string, string, string, string];
  correctAnswer: 0 | 1 | 2 | 3;
  visualDiagram?: {
    type: 'schematic' | 'vector' | 'geometry' | 'graph' | 'table';
    svgData?: string;
    caption: string;
  };
  stepByStepSolution: {
    step: number;
    title: string;
    explanation: string;
    calculation?: string;
  }[];
  keyFormulaUsed: string;
  eli5Takeaway: string; // Slow learner intuition
  difficulty: 'Foundation' | 'Moderate' | 'Board Exam Level';
}

export interface DriveItem {
  id: string;
  name: string;
  mimeType: string;
  webViewLink?: string;
  size?: string;
  modifiedTime?: string;
  subjectTag?: SubjectType;
  isFolder?: boolean;
}

export interface DailySetState {
  currentDay: number;
  answers: Record<string, number>; // problemId -> option index
  flagged: Record<string, boolean>; // problemId -> boolean
  mode: 'practice' | 'timed'; // practice = step-by-step reveal; timed = simulated 100-item board exam
  timeRemainingSec: number;
  completed: boolean;
}

export interface UserStudySettings {
  learnerMode: 'slow_visual' | 'accelerated_review' | 'deep_mastery';
  showStepByStepInitially: boolean;
  activeSubjectFilter: 'ALL' | SubjectType;
  fontSize: 'standard' | 'large';
}
