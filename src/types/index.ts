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
    type: string; // impedance_triangle, power_triangle, thevenin_circuit, transformer_schematic, three_phase_wye, motor_torque_speed, pec_branch_circuit, calculus_tangent
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
  canonCalTech?: {
    calculator: string; // e.g. "Canon F-789SGA"
    mode: string; // "COMP (Mode 1)" | "STAT (Mode 3)" | "EQN (Mode 5)" | "TABLE (Mode 7)"
    keystrokes: string[]; // Step-by-step key presses
    resultDisplay?: string; // Displayed number or output
    proTip?: string; // Quick exam tip for the Canon F-789SGA
  };
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

export interface DriveScannedTopic {
  id: string;
  sourceFile: string;
  sourceFileId: string;
  subject: SubjectType;
  title: string;
  simpleCoreIdea: string; // The simple 1-2 sentence breakdown
  simpleFormula: string; // Clean math formula
  formulaLabels: string; // Plain English label for each symbol
  simpleExample: {
    statement: string;
    steps: string[];
    result: string;
  };
  simpleExamTrap: string; // Simple pitfall
  relatedTopicId?: string; // Link to roadmap
  simulatorTab?: 'rlc' | 'threephase' | 'motor' | 'pec';
  canonCalTech?: {
    calculator: string;
    mode: string;
    keystrokes: string[];
    proTip?: string;
  };
}

export interface DriveSampleProblem {
  formulaId?: string;
  resultValue?: number | null;
  calculatorEntry?: string;
  substitutionMath?: string | null;
  assumption?: boolean;
  answerStatus?: "matched" | "nearest-choice" | "choice-mismatch" | "missing-given" | "ambiguous";
  id: string;
  sourceFile: string;
  sourceDocumentName: string;
  folderName?: string; // Reference folder e.g. 'Economics Sample Problems'
  category: string;
  topicTitle: string;
  problemNumber: number;
  prcExamRef?: string;
  weekDay?: number; // Day 1 to 7 for the 1-Week Fast-Track plan
  difficulty: 'Foundation' | 'Moderate' | 'Board Exam Standard' | 'Advanced' | 'Mastery';
  question: string;
  choices?: string[]; // Multiple choice options (A, B, C, D)
  correctLetter?: 'A' | 'B' | 'C' | 'D'; // Board exam verified correct letter
  shortcutSolution?: string; // Fast 30-45s direct shortcut solution
  given: { symbol: string; meaning: string; value: string }[];
  governingFormula: string;
  formulaSymbols?: string;
  formulaOrigin?: "handout" | "derived";
  solutionSteps: {
    step: number;
    title: string;
    explanation: string;
    calculation?: string;
    calculationMath?: string;
    intermediateValue?: number | null;
  }[];
  finalAnswer: string;
  canonCalTech: {
    calculator: string;
    mode: string;
    keystrokes: string[];
    resultDisplay: string;
    proTip: string;
  };
  mentalModelOrTrap: string;
}

export interface EconTermQuestion {
  sourceFile?: string;
  id: string; // 'term-econ-01' to 'term-econ-100'
  termNumber: number; // 1 to 100
  category: string; // e.g. 'Foundations of Economics', 'Cost Concepts', etc.
  termOrConcept: string; // Key economic term or principle
  prcExamRef?: string;
  difficulty: 'Foundation' | 'Moderate' | 'Board Exam Standard' | 'Advanced';
  question: string;
  choices: string[]; // [A, B, C, D]
  correctLetter?: 'A' | 'B' | 'C' | 'D' | null;
  correctDefinition: string;
  examExplanation: string;
  boardExamTrapOrNote?: string;
}

export interface EconDayPlan {
  dayNumber: number; // 1 to 7
  dayTitle: string;
  focusArea: string;
  sourceDoc: string;
  estimatedHours: number;
  coreConcepts: string[];
  keyFormulas: {
    name: string;
    formula: string;
    description: string;
  }[];
  canonKeystrokeHighlight: {
    mode: string;
    keyTechnique: string;
    keystrokes: string[];
    proTip: string;
  };
  examTraps: string[];
  sampleProblemIds: string[];
  selfCheckQuiz?: {
    question: string;
    options: [string, string, string, string];
    correctAnswer: number;
    explanation: string;
  }[];
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
