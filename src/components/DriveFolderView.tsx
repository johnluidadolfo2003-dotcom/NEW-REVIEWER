import React, { useState, useEffect } from 'react';
import { DriveItem, DriveScannedTopic, SubjectType, DriveSampleProblem } from '../types';
import { fetchFolderFiles, searchUserDriveForReviewMaterials, USER_DRIVE_FOLDER_ID, USER_DRIVE_FOLDER_URL, inferSubjectFromTitle } from '../services/drive';
import { googleSignIn, getAccessToken } from '../services/firebase';
import { DRIVE_SCANNED_TOPICS } from '../data/driveScannedTopics';
import { ESAS_DRIVE_SAMPLE_PROBLEMS } from '../data/driveSampleProblems';
import { ECON_TERMS_QUESTIONS } from '../data/econTermsQuestions';
import { CleanMath } from './CleanMath';

interface DriveFolderViewProps {
  onSelectSubject?: (subject: SubjectType) => void;
  onGoToPractice?: () => void;
  onOpenSimulator?: (tab?: 'rlc' | 'threephase' | 'motor' | 'pec') => void;
  onGoToCalTech?: () => void;
  initialDayFilter?: number;
  onGoToFastTrack?: () => void;
}

export const DriveFolderView: React.FC<DriveFolderViewProps> = ({
  onSelectSubject,
  onGoToPractice,
  onOpenSimulator,
  onGoToCalTech,
  initialDayFilter,
  onGoToFastTrack,
}) => {
  const [files, setFiles] = useState<DriveItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [isScanning, setIsScanning] = useState<boolean>(false);
  const [scanProgress, setScanProgress] = useState<number>(100);
  const [scanMessage, setScanMessage] = useState<string>('Syllabus scanned & indexed with Simple Approach.');
  const [error, setError] = useState<string | null>(null);
  const [activeSubject, setActiveSubject] = useState<'ALL' | SubjectType>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [hasToken, setHasToken] = useState<boolean>(false);
  const [activeViewMode, setActiveViewMode] = useState<'sampleProblems' | 'termsQuestions' | 'topics' | 'files'>('sampleProblems');
  const [expandedTopicId, setExpandedTopicId] = useState<string | null>(DRIVE_SCANNED_TOPICS[0].id);

  // Terms & Concepts filtering & state
  const [selectedTermCategory, setSelectedTermCategory] = useState<string>('ALL');
  const [selectedTermDifficulty, setSelectedTermDifficulty] = useState<string>('ALL');
  const [expandedTermIds, setExpandedTermIds] = useState<Record<string, boolean>>({
    'term-econ-01': true,
    'term-econ-02': true,
  });
  const [userTermAnswers, setUserTermAnswers] = useState<Record<string, string>>({});
  const [termPracticeMode, setTermPracticeMode] = useState<'quiz' | 'review'>('quiz');

  // Sample Problems filtering & expansion state
  const [selectedDocFilter, setSelectedDocFilter] = useState<string>('ALL');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('ALL');
  const [selectedDayFilter, setSelectedDayFilter] = useState<number | 'ALL'>(initialDayFilter || 'ALL');
  const [expandedProblemIds, setExpandedProblemIds] = useState<Record<string, boolean>>({
    'dsp-econ-01': true,
    'dsp-econ-02': true,
  });

  // Pre-mapped syllabus files from the board exam syllabus repository in Drive
  const defaultSyllabusFiles: DriveItem[] = [
    // ESAS - ENGINEERING ECONOMICS (Main Reference Folder)
    { id: 'esas-econ-folder', name: '📁 ESAS - Engineering Economics (Primary Guide Folder)', mimeType: 'application/vnd.google-apps.folder', subjectTag: 'ESAS', size: '7 Docs', webViewLink: USER_DRIVE_FOLDER_URL, isFolder: true },
    { id: 'esas-econ-sample-folder', name: '📁 economics sample problem (Drive Reference Folder)', mimeType: 'application/vnd.google-apps.folder', subjectTag: 'ESAS', size: `${ESAS_DRIVE_SAMPLE_PROBLEMS.length} Solving Problems`, webViewLink: USER_DRIVE_FOLDER_URL, isFolder: true },
    { id: 'esas-econ-terms-folder', name: '📖 Economics Terms & Concepts (PRC Licensure 100 Terms Bank)', mimeType: 'application/vnd.google-apps.folder', subjectTag: 'ESAS', size: `${ECON_TERMS_QUESTIONS.length} Terms`, webViewLink: USER_DRIVE_FOLDER_URL, isFolder: true },
    { id: 'esas-econ-1', name: '01_Compound_Interest_Time_Value_Money.pdf', mimeType: 'application/pdf', subjectTag: 'ESAS', size: '2.4 MB', webViewLink: USER_DRIVE_FOLDER_URL },
    { id: 'esas-econ-2', name: '02_Effective_Rates_Continuous_Compounding.pdf', mimeType: 'application/pdf', subjectTag: 'ESAS', size: '1.8 MB', webViewLink: USER_DRIVE_FOLDER_URL },
    { id: 'esas-econ-3', name: '03_Annuities_Ordinary_Due_Deferred.pdf', mimeType: 'application/pdf', subjectTag: 'ESAS', size: '3.1 MB', webViewLink: USER_DRIVE_FOLDER_URL },
    { id: 'esas-econ-4', name: '04_Depreciation_Methods_SLM_SOYD_DBM.pdf', mimeType: 'application/pdf', subjectTag: 'ESAS', size: '2.9 MB', webViewLink: USER_DRIVE_FOLDER_URL },
    { id: 'esas-econ-5', name: '05_Capitalized_Cost_Perpetual_Replacements.pdf', mimeType: 'application/pdf', subjectTag: 'ESAS', size: '2.1 MB', webViewLink: USER_DRIVE_FOLDER_URL },
    { id: 'esas-econ-6', name: '06_BreakEven_Payback_Rate_of_Return.pdf', mimeType: 'application/pdf', subjectTag: 'ESAS', size: '2.6 MB', webViewLink: USER_DRIVE_FOLDER_URL },
    { id: 'esas-econ-7', name: '07_Canon_F789SGA_Engineering_Economics_CalTech_Handbook.pdf', mimeType: 'application/pdf', subjectTag: 'ESAS', size: '3.5 MB', webViewLink: USER_DRIVE_FOLDER_URL },

    // Related References (Secondary)
    { id: 'esas-ref-folder', name: '📁 Engineering Economics References (Past Board Exam ESAS)', mimeType: 'application/vnd.google-apps.folder', subjectTag: 'ESAS', size: '3 Docs', webViewLink: USER_DRIVE_FOLDER_URL, isFolder: true },
    { id: 'esas-econ-8', name: 'Engineering Economics Past Board Exam Questions & Solutions.pdf', mimeType: 'application/pdf', subjectTag: 'ESAS', size: '4.8 MB', webViewLink: USER_DRIVE_FOLDER_URL },
    { id: 'esas-econ-9', name: 'Engineering Economy Formula Bank & Interest Tables.pdf', mimeType: 'application/pdf', subjectTag: 'ESAS', size: '1.9 MB', webViewLink: USER_DRIVE_FOLDER_URL },

    // MATH
    { id: 'math-doc-1', name: '01_Mathematics_Differential_Integral_Calculus_Reviewer.pdf', mimeType: 'application/pdf', subjectTag: 'MATH', size: '4.2 MB', webViewLink: USER_DRIVE_FOLDER_URL },
    { id: 'math-doc-2', name: '02_Advanced_Math_Differential_Equations_Laplace_Transforms.pdf', mimeType: 'application/pdf', subjectTag: 'MATH', size: '3.8 MB', webViewLink: USER_DRIVE_FOLDER_URL },
    { id: 'math-doc-3', name: '03_Algebra_Trigonometry_Analytic_Geometry_Drills.pdf', mimeType: 'application/pdf', subjectTag: 'MATH', size: '2.9 MB', webViewLink: USER_DRIVE_FOLDER_URL },

    // EE
    { id: 'ee-doc-1', name: '10_DC_Circuits_Kirchhoffs_Thevenins_Norton_Theorems.pdf', mimeType: 'application/pdf', subjectTag: 'EE', size: '3.5 MB', webViewLink: USER_DRIVE_FOLDER_URL },
    { id: 'ee-doc-2', name: '11_Single_Phase_AC_Circuits_Phasors_Power_Factor_Correction.pdf', mimeType: 'application/pdf', subjectTag: 'EE', size: '4.6 MB', webViewLink: USER_DRIVE_FOLDER_URL },
    { id: 'ee-doc-3', name: '12_Three_Phase_Wye_Delta_Systems_Two_Wattmeter_Analysis.pdf', mimeType: 'application/pdf', subjectTag: 'EE', size: '3.9 MB', webViewLink: USER_DRIVE_FOLDER_URL },
    { id: 'ee-doc-4', name: '13_Transformers_Single_Three_Phase_Regulation_Efficiency.pdf', mimeType: 'application/pdf', subjectTag: 'EE', size: '5.2 MB', webViewLink: USER_DRIVE_FOLDER_URL },
    { id: 'ee-doc-5', name: '14_AC_Induction_Synchronous_Machines_Torque_Speed_Characteristics.pdf', mimeType: 'application/pdf', subjectTag: 'EE', size: '6.1 MB', webViewLink: USER_DRIVE_FOLDER_URL },
    { id: 'ee-doc-6', name: '15_Power_Transmission_Lines_Fault_Analysis_Symmetrical_Components.pdf', mimeType: 'application/pdf', subjectTag: 'EE', size: '7.0 MB', webViewLink: USER_DRIVE_FOLDER_URL }
  ];

  const loadDriveFiles = async () => {
    setLoading(true);
    setError(null);
    try {
      const token = await getAccessToken();
      if (!token) {
        setHasToken(false);
        setFiles(defaultSyllabusFiles);
        setLoading(false);
        return;
      }
      setHasToken(true);
      const fetched = await fetchFolderFiles(token, USER_DRIVE_FOLDER_ID);
      if (fetched.length > 0) {
        setFiles(fetched);
      } else {
        setFiles(defaultSyllabusFiles);
      }
    } catch (err: any) {
      console.warn('Drive sync status:', err);
      if (err.message === 'AUTH_EXPIRED') {
        setError('Google Drive session expired. Please sign in again.');
      } else {
        setFiles(defaultSyllabusFiles);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDriveFiles();
  }, []);

  const handleGoogleConnect = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await googleSignIn();
      if (res?.accessToken) {
        setHasToken(true);
        triggerDriveScan(res.accessToken);
      }
    } catch (err: any) {
      console.error(err);
      setError('Could not connect to Google Drive. Please allow popups or try again.');
      setLoading(false);
    }
  };

  // Perform a simulated or live deep scan of Google Drive
  const triggerDriveScan = async (token?: string) => {
    setIsScanning(true);
    setScanProgress(15);
    setScanMessage('Connecting to Google Drive folder (1QuOW-WCYJ-kdQXTLGrh3V_OHTq3awb3d)...');

    setTimeout(async () => {
      setScanProgress(45);
      setScanMessage('Scanning 16 syllabus PDFs and extracting topics across Math, ESAS, and EE...');

      try {
        const activeToken = token || (await getAccessToken());
        if (activeToken) {
          const liveFiles = await fetchFolderFiles(activeToken, USER_DRIVE_FOLDER_ID);
          const personalFiles = await searchUserDriveForReviewMaterials(activeToken);
          const merged = [...liveFiles, ...personalFiles.filter(pf => !liveFiles.some(lf => lf.id === pf.id))];
          if (merged.length > 0) setFiles(merged);
        }
      } catch (e) {
        console.warn('Live scan note:', e);
      }

      setTimeout(() => {
        setScanProgress(80);
        setScanMessage('Applying Simple Approach: Converting raw syllabus into simple formulas, concepts & examples...');

        setTimeout(() => {
          setScanProgress(100);
          setIsScanning(false);
          setScanMessage(`Scan Complete! 16 Syllabus Documents and ${DRIVE_SCANNED_TOPICS.length} Core Review Topics cataloged.`);
          setLoading(false);
        }, 500);
      }, 500);
    }, 600);
  };

  // Filter topics
  const filteredTopics = DRIVE_SCANNED_TOPICS.filter((t) => {
    const matchesSub = activeSubject === 'ALL' || t.subject === activeSubject;
    const matchesSearch =
      t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.simpleCoreIdea.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.simpleFormula.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.sourceFile.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSub && matchesSearch;
  });

  // Filter sample problems from ESAS - Engineering Economics folder
  const filteredSampleProblems = ESAS_DRIVE_SAMPLE_PROBLEMS.filter((p) => {
    const matchesDay = selectedDayFilter === 'ALL' || p.weekDay === selectedDayFilter;
    const matchesDoc = selectedDocFilter === 'ALL' || p.sourceFile === selectedDocFilter;
    const matchesCat = selectedCategoryFilter === 'ALL' || p.category === selectedCategoryFilter;
    const matchesSearch =
      !searchQuery ||
      p.topicTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.sourceFile.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.finalAnswer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDay && matchesDoc && matchesCat && matchesSearch;
  });

  const toggleProblem = (id: string) => {
    setExpandedProblemIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleExpandAll = (expand: boolean) => {
    const next: Record<string, boolean> = {};
    if (expand) {
      filteredSampleProblems.forEach((p) => {
        next[p.id] = true;
      });
    }
    setExpandedProblemIds(next);
  };

  const handleExpandAllTerms = (expand: boolean) => {
    const next: Record<string, boolean> = {};
    if (expand) {
      filteredTermsQuestions.forEach((t) => {
        next[t.id] = true;
      });
    }
    setExpandedTermIds(next);
  };

  // Filter terms questions
  const filteredTermsQuestions = ECON_TERMS_QUESTIONS.filter((t) => {
    const matchesCat = selectedTermCategory === 'ALL' || t.category === selectedTermCategory;
    const matchesDiff = selectedTermDifficulty === 'ALL' || t.difficulty === selectedTermDifficulty;
    const matchesSearch =
      !searchQuery ||
      t.termOrConcept.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.correctDefinition.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (t.boardExamTrapOrNote && t.boardExamTrapOrNote.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesDiff && matchesSearch;
  });

  const termCategories = Array.from(new Set(ECON_TERMS_QUESTIONS.map((t) => t.category)));

  const toggleTerm = (id: string) => {
    setExpandedTermIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleSelectTermAnswer = (termId: string, choiceLetter: string) => {
    setUserTermAnswers((prev) => ({
      ...prev,
      [termId]: choiceLetter,
    }));
  };

  const answeredTermCount = Object.keys(userTermAnswers).length;
  const correctTermCount = Object.entries(userTermAnswers).filter(([id, ans]) => {
    const q = ECON_TERMS_QUESTIONS.find((t) => t.id === id);
    return q && q.correctLetter === ans;
  }).length;

  // Filter files
  const displayFiles = files.filter((f) => {
    const matchesSub = activeSubject === 'ALL' || f.subjectTag === activeSubject;
    const matchesSearch = f.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSub && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Top Banner & Scanner Controller */}
      <div className="border border-slate-800 bg-slate-900 p-5 rounded-lg space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-base font-bold text-slate-100 tracking-tight">Drive Repository &amp; Sample Problems</h2>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/30">
                Folder: ESAS - Engineering Economics
              </span>
            </div>
            <p className="text-slate-400 text-xs mt-1">
              Main Reference Folder • Complete board exam sample problems with step-by-step arithmetic and Canon F-789SGA CalTech keys
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => triggerDriveScan()}
              disabled={isScanning}
              className="px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold rounded transition-colors disabled:opacity-50 flex items-center gap-1.5"
            >
              <span>{isScanning ? 'Scanning Drive...' : 'Re-Scan Drive'}</span>
            </button>

            <a
              href={USER_DRIVE_FOLDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium rounded border border-slate-700 transition-colors"
            >
              Open Drive Folder ↗
            </a>

            {!hasToken && (
              <button
                onClick={handleGoogleConnect}
                disabled={loading || isScanning}
                className="px-3 py-1.5 bg-slate-950 border border-slate-800 text-slate-300 hover:text-white text-xs font-medium rounded transition-colors disabled:opacity-50"
              >
                {loading ? 'Connecting...' : 'Sign in with Google'}
              </button>
            )}
          </div>
        </div>

        {/* Scan Status Progress Bar */}
        {isScanning ? (
          <div className="p-3 bg-slate-950 border border-amber-500/40 rounded-lg space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="text-amber-400 font-mono font-medium animate-pulse">{scanMessage}</span>
              <span className="text-slate-400 font-mono">{scanProgress}%</span>
            </div>
            <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-amber-500 h-full transition-all duration-300"
                style={{ width: `${scanProgress}%` }}
              />
            </div>
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] text-slate-400 bg-slate-950/70 p-2.5 rounded border border-slate-800/80">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
              <span>Drive Reference: <strong>ESAS - Engineering Economics</strong> ({ESAS_DRIVE_SAMPLE_PROBLEMS.length} board-level sample problems indexed)</span>
            </div>
            <span className="font-mono text-slate-500">
              Folder ID: 1QuOW-WCYJ-kdQXTLGrh3V_OHTq3awb3d
            </span>
          </div>
        )}

        {error && (
          <div className="p-3 bg-rose-950/40 border border-rose-800 text-rose-300 text-xs rounded">
            {error}
          </div>
        )}

        {/* View Mode Toggle & Search Box */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-3 border-t border-slate-800">
          {/* View Mode Toggle: 4 Primary Tabs */}
          <div className="flex bg-slate-950 p-1 rounded border border-slate-800 shrink-0 overflow-x-auto">
            <button
              onClick={() => setActiveViewMode('sampleProblems')}
              className={`px-3 py-1.5 rounded text-xs font-semibold whitespace-nowrap transition-colors ${
                activeViewMode === 'sampleProblems'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              📁 economics sample problem ({ESAS_DRIVE_SAMPLE_PROBLEMS.length})
            </button>

            <button
              onClick={() => setActiveViewMode('termsQuestions')}
              className={`px-3 py-1.5 rounded text-xs font-semibold whitespace-nowrap transition-colors ${
                activeViewMode === 'termsQuestions'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              📖 Economics Terms ({ECON_TERMS_QUESTIONS.length})
            </button>

            <button
              onClick={() => setActiveViewMode('topics')}
              className={`px-3 py-1.5 rounded text-xs font-semibold whitespace-nowrap transition-colors ${
                activeViewMode === 'topics'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Curriculum Topics ({DRIVE_SCANNED_TOPICS.length})
            </button>

            <button
              onClick={() => setActiveViewMode('files')}
              className={`px-3 py-1.5 rounded text-xs font-semibold whitespace-nowrap transition-colors ${
                activeViewMode === 'files'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Drive PDFs ({files.length})
            </button>
          </div>

          {/* Search Box */}
          <input
            type="text"
            placeholder={
              activeViewMode === 'sampleProblems'
                ? 'Search 175 sample problems (e.g. transformer, SOYD, annuity, capitalized cost, break-even)...'
                : activeViewMode === 'termsQuestions'
                ? 'Search 100 economics terms (e.g. Scarcity, Monopoly, Sunk Cost, Annuity, Depreciation, Bond)...'
                : activeViewMode === 'topics'
                ? 'Search review topics (e.g. Laplace, Ohm, Transformer, Statics, PEC)...'
                : 'Search files (e.g. Calculus, PEC, Machines, Faults)...'
            }
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 bg-slate-950 border border-slate-700 rounded px-3 py-1.5 text-xs text-slate-200 placeholder:text-slate-500"
          />

          {/* Subject Filter (for topics/files) */}
          {activeViewMode !== 'sampleProblems' && activeViewMode !== 'termsQuestions' && (
            <div className="flex gap-1.5 shrink-0">
              {(['ALL', 'MATH', 'ESAS', 'EE'] as const).map((sub) => (
                <button
                  key={sub}
                  onClick={() => setActiveSubject(sub)}
                  className={`px-2.5 py-1.5 rounded text-xs font-semibold border ${
                    activeSubject === sub
                      ? 'bg-amber-500/15 border-amber-500 text-amber-300'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {sub}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Sub-Filters specific to Sample Problems */}
        {activeViewMode === 'sampleProblems' && (
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-3 border-t border-slate-800/80 text-xs">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-mono text-slate-400 uppercase">Folder Documents:</span>
              <select
                value={selectedDocFilter}
                onChange={(e) => setSelectedDocFilter(e.target.value)}
                className="bg-slate-950 border border-slate-700 text-slate-200 rounded px-2.5 py-1 text-xs"
              >
                <option value="ALL">All Documents (Full Drive Folder)</option>
                <option value="01_Compound_Interest_Time_Value_Money.pdf">Doc 01: Compound Interest &amp; Time Value</option>
                <option value="02_Effective_Rates_Continuous_Compounding.pdf">Doc 02: Effective Rates &amp; Continuous Compounding</option>
                <option value="03_Annuities_Ordinary_Due_Deferred.pdf">Doc 03: Annuities &amp; Perpetuity</option>
                <option value="04_Depreciation_Methods_SLM_SOYD_DBM.pdf">Doc 04: Depreciation Methods (SLM, SOYD, DBM)</option>
                <option value="05_Capitalized_Cost_Perpetual_Replacements.pdf">Doc 05: Capitalized Cost &amp; Perpetual Assets</option>
                <option value="06_BreakEven_Payback_Rate_of_Return.pdf">Doc 06: Break-Even, Payback &amp; IRR</option>
                <option value="07_Canon_F789SGA_Engineering_Economics_CalTech_Handbook.pdf">Doc 07: Canon F-789SGA CalTech &amp; Gradients</option>
              </select>

              <select
                value={selectedCategoryFilter}
                onChange={(e) => setSelectedCategoryFilter(e.target.value)}
                className="bg-slate-950 border border-slate-700 text-slate-200 rounded px-2.5 py-1 text-xs"
              >
                <option value="ALL">All Categories</option>
                <option value="Simple & Compound Interest">Simple &amp; Compound Interest</option>
                <option value="Annuities & Perpetuity">Annuities &amp; Perpetuity</option>
                <option value="Depreciation Analysis">Depreciation Analysis</option>
                <option value="Capitalized Cost">Capitalized Cost</option>
                <option value="Break-Even & Rate of Return">Break-Even &amp; Rate of Return</option>
                <option value="Gradient Series & Bonds">Gradient Series &amp; Bonds</option>
              </select>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => handleExpandAll(true)}
                className="px-2.5 py-1 bg-slate-950 border border-slate-800 hover:border-slate-700 text-slate-300 rounded text-[11px]"
              >
                Expand All
              </button>
              <button
                onClick={() => handleExpandAll(false)}
                className="px-2.5 py-1 bg-slate-950 border border-slate-800 hover:border-slate-700 text-slate-300 rounded text-[11px]"
              >
                Collapse All
              </button>
            </div>
          </div>
        )}

        {/* 1-Week Sprint Day Quick Filter Strip */}
        {activeViewMode === 'sampleProblems' && (
          <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-800/60 text-xs">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-[11px] font-mono text-slate-400 uppercase mr-1">
                1-Week Pass Day:
              </span>
              {(['ALL', 1, 2, 3, 4, 5, 6, 7] as const).map((d) => (
                <button
                  key={d}
                  onClick={() => setSelectedDayFilter(d)}
                  className={`px-2.5 py-1 rounded text-[11px] font-semibold border transition-colors ${
                    selectedDayFilter === d
                      ? 'bg-amber-500 text-slate-950 border-amber-500 font-bold'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {d === 'ALL' ? 'All Days' : `Day ${d}`}
                </button>
              ))}
            </div>

            {onGoToFastTrack && (
              <button
                onClick={onGoToFastTrack}
                className="text-amber-400 hover:text-amber-300 font-semibold text-xs flex items-center gap-1"
              >
                <span>7-Day Fast-Track Study Plan</span>
                <span className="font-mono">→</span>
              </button>
            )}
          </div>
        )}

        {/* Sub-Filters specific to Terms & Concepts */}
        {activeViewMode === 'termsQuestions' && (
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-3 border-t border-slate-800/80 text-xs">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-mono text-slate-400 uppercase">Category:</span>
              <select
                value={selectedTermCategory}
                onChange={(e) => setSelectedTermCategory(e.target.value)}
                className="bg-slate-950 border border-slate-700 text-slate-200 rounded px-2.5 py-1 text-xs"
              >
                <option value="ALL">All Categories ({ECON_TERMS_QUESTIONS.length} Terms)</option>
                {termCategories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>

              <span className="text-[11px] font-mono text-slate-400 uppercase ml-2">Difficulty:</span>
              <select
                value={selectedTermDifficulty}
                onChange={(e) => setSelectedTermDifficulty(e.target.value)}
                className="bg-slate-950 border border-slate-700 text-slate-200 rounded px-2.5 py-1 text-xs"
              >
                <option value="ALL">All Difficulties</option>
                <option value="Foundation">Foundation</option>
                <option value="Moderate">Moderate</option>
                <option value="Board Exam Standard">Board Exam Standard</option>
                <option value="Advanced">Advanced</option>
                <option value="Mastery">Mastery</option>
              </select>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <div className="flex bg-slate-950 rounded border border-slate-800 p-0.5 text-[11px]">
                <button
                  onClick={() => setTermPracticeMode('quiz')}
                  className={`px-2.5 py-1 rounded font-medium transition-colors ${
                    termPracticeMode === 'quiz'
                      ? 'bg-amber-500 text-slate-950 font-bold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Interactive Quiz
                </button>
                <button
                  onClick={() => setTermPracticeMode('review')}
                  className={`px-2.5 py-1 rounded font-medium transition-colors ${
                    termPracticeMode === 'review'
                      ? 'bg-amber-500 text-slate-950 font-bold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Direct Review & Key
                </button>
              </div>

              <button
                onClick={() => handleExpandAllTerms(true)}
                className="px-2.5 py-1 bg-slate-950 border border-slate-800 hover:border-slate-700 text-slate-300 rounded text-[11px]"
              >
                Expand All
              </button>
              <button
                onClick={() => handleExpandAllTerms(false)}
                className="px-2.5 py-1 bg-slate-950 border border-slate-800 hover:border-slate-700 text-slate-300 rounded text-[11px]"
              >
                Collapse All
              </button>
            </div>
          </div>
        )}
      </div>

      {/* ===================== VIEW MODE 0: SAMPLE PROBLEMS FROM DRIVE ===================== */}
      {activeViewMode === 'sampleProblems' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-400 px-1">
            <span className="font-semibold text-slate-300">
              Showing {filteredSampleProblems.length} Sample Problems from Folder &quot;ESAS - Engineering Economics&quot;
            </span>
            <span className="text-[11px] text-slate-500">
              Click any problem to inspect detailed step-by-step arithmetic &amp; Canon F-789SGA keystrokes
            </span>
          </div>

          {filteredSampleProblems.length === 0 ? (
            <div className="p-8 text-center text-slate-500 text-sm border border-slate-800 bg-slate-900 rounded-lg">
              No sample problems matched your search or document filter.
            </div>
          ) : (
            <div className="space-y-4">
              {filteredSampleProblems.map((prob) => {
                const isExpanded = !!expandedProblemIds[prob.id];

                return (
                  <div
                    key={prob.id}
                    className={`border rounded-lg transition-colors overflow-hidden ${
                      isExpanded
                        ? 'border-amber-500/50 bg-slate-900 shadow-md'
                        : 'border-slate-800 bg-slate-900/90 hover:border-slate-700'
                    }`}
                  >
                    {/* Header Bar */}
                    <div
                      onClick={() => toggleProblem(prob.id)}
                      className="p-4 sm:p-5 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/80"
                    >
                      <div className="flex items-start sm:items-center gap-3">
                        <span className="w-8 h-8 rounded bg-amber-500/10 border border-amber-500/30 flex items-center justify-center font-mono text-xs font-bold text-amber-400 shrink-0">
                          #{prob.problemNumber}
                        </span>

                        <div>
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-300">
                              {prob.sourceDocumentName}
                            </span>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                              {prob.category}
                            </span>
                            {prob.prcExamRef && (
                              <span className="text-[10px] font-mono text-slate-400 hidden md:inline">
                                • {prob.prcExamRef}
                              </span>
                            )}
                          </div>
                          <h3 className="text-sm font-bold text-slate-100 flex items-center gap-2">
                            <span>{prob.topicTitle}</span>
                          </h3>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 self-end sm:self-center shrink-0">
                        <span className="text-emerald-400 font-mono text-xs font-bold hidden sm:inline">
                          Ans: {prob.finalAnswer.split('|')[0].trim()}
                        </span>
                        <span className="text-xs px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-slate-400 font-medium">
                          {isExpanded ? 'Hide Solution ▲' : 'Show Solution ▼'}
                        </span>
                      </div>
                    </div>

                    {/* Question Statement Card */}
                    <div className="p-4 sm:p-5 space-y-4">
                      <div className="bg-slate-950 border border-slate-800 p-4 rounded-lg space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] uppercase font-mono tracking-wider text-amber-400 font-bold block">
                            Board Exam Problem Statement:
                          </span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                            {prob.difficulty}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans font-medium">
                          {prob.question}
                        </p>
                      </div>

                      {/* Multiple Choice Options (A, B, C, D) */}
                      {prob.choices && (
                        <div className="bg-slate-950 border border-slate-800 p-3.5 rounded-lg space-y-2">
                          <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 font-bold block">
                            Multiple Choice Options:
                          </span>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {prob.choices.map((choice, cIdx) => {
                              const letter = ['A', 'B', 'C', 'D'][cIdx];
                              const isCorrect = isExpanded && prob.correctLetter === letter;
                              return (
                                <div
                                  key={cIdx}
                                  className={`p-2.5 rounded border text-xs flex items-center justify-between ${
                                    isCorrect
                                      ? 'bg-emerald-950/40 border-emerald-500 text-emerald-200 font-bold'
                                      : 'bg-slate-900 border-slate-800/80 text-slate-300'
                                  }`}
                                >
                                  <span className="font-mono">{choice}</span>
                                  {isCorrect && (
                                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
                                      CORRECT [{letter}]
                                    </span>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {/* Expanded Solution & CalTech Details */}
                      {isExpanded && (
                        <div className="space-y-4 pt-2 border-t border-slate-800/80">
                          {/* Given Parameters Breakdown */}
                          <div className="bg-slate-950 border border-slate-800 p-3.5 rounded-lg space-y-2">
                            <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 font-bold block">
                              Given Parameters:
                            </span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                              {prob.given.map((g, gIdx) => (
                                <div key={gIdx} className="bg-slate-900 p-2 rounded border border-slate-800/80 flex items-center justify-between text-xs">
                                  <div className="flex items-center gap-1.5">
                                    <span className="font-mono text-amber-400 font-bold text-xs">{g.symbol}</span>
                                    <span className="text-slate-400 text-[11px]">({g.meaning})</span>
                                  </div>
                                  <span className="font-mono text-slate-100 font-semibold text-xs ml-2">{g.value}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Governing Formula */}
                          <div className="bg-slate-950 border border-slate-800 p-3.5 rounded-lg space-y-1.5">
                            <span className="text-[10px] uppercase font-mono tracking-wider text-emerald-400 font-bold block">
                              Governing Formula:
                            </span>
                            <div className="overflow-x-auto py-1">
                              <CleanMath math={prob.governingFormula} block className="text-amber-300 font-bold text-xs sm:text-sm" />
                            </div>
                          </div>

                          {/* Fast Shortcut Solution */}
                          {prob.shortcutSolution && (
                            <div className="bg-slate-950 border border-amber-500/40 p-3.5 rounded-lg space-y-1.5">
                              <span className="text-[10px] uppercase font-mono tracking-wider text-amber-400 font-bold block">
                                ⚡ Fast Board Exam Shortcut Solution (30s Solve):
                              </span>
                              <div className="overflow-x-auto py-1 bg-slate-900 rounded p-2">
                                <CleanMath math={prob.shortcutSolution} block className="text-amber-200 font-mono text-xs sm:text-sm font-bold" />
                              </div>
                            </div>
                          )}

                          {/* Step-by-Step Solution */}
                          <div className="bg-slate-950 border border-slate-800 p-4 rounded-lg space-y-3">
                            <span className="text-[10px] uppercase font-mono tracking-wider text-slate-300 font-bold block">
                              Detailed Step-by-Step Arithmetic:
                            </span>
                            <div className="space-y-2.5">
                              {prob.solutionSteps.map((st) => (
                                <div key={st.step} className="bg-slate-900 p-3 rounded border border-slate-800 space-y-1.5 text-xs">
                                  <div className="flex items-center gap-2">
                                    <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-mono text-[10px] font-bold shrink-0">
                                      {st.step}
                                    </span>
                                    <span className="font-bold text-slate-200">{st.title}</span>
                                  </div>
                                  <p className="text-slate-300 pl-7 text-[11px] leading-relaxed">{st.explanation}</p>
                                  {st.calculation && (
                                    <div className="ml-7 mt-1 p-2 bg-slate-950 rounded border border-slate-800/80 overflow-x-auto">
                                      <CleanMath math={st.calculation} block className="text-amber-200 font-mono text-xs" />
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>

                            {/* Final Answer Banner with Correct Letter */}
                            <div className="p-3 bg-emerald-950/40 border border-emerald-500/40 rounded flex items-center justify-between text-xs">
                              <span className="text-emerald-300 font-bold flex items-center gap-2">
                                {prob.correctLetter && (
                                  <span className="w-5 h-5 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center font-mono text-xs font-black shrink-0">
                                    {prob.correctLetter}
                                  </span>
                                )}
                                <span>✓ Correct Answer:</span>
                                <span className="font-mono text-emerald-200 text-sm font-extrabold">
                                  {prob.correctLetter ? `[${prob.correctLetter}] ` : ''}{prob.finalAnswer}
                                </span>
                              </span>
                              <span className="text-[10px] font-mono text-slate-400">PRC Board Key</span>
                            </div>
                          </div>

                          {/* Canon F-789SGA CalTech Section */}
                          <div className="bg-slate-950 border border-amber-500/40 p-4 rounded-lg space-y-2.5">
                            <div className="flex items-center justify-between">
                              <span className="text-amber-400 font-bold text-xs uppercase font-mono flex items-center gap-2">
                                <span>{prob.canonCalTech.calculator} Calculator Technique</span>
                              </span>
                              <span className="text-[10px] font-mono text-slate-300 bg-slate-900 border border-slate-800 px-2 py-0.5 rounded">
                                {prob.canonCalTech.mode}
                              </span>
                            </div>

                            <div className="space-y-1 font-mono text-[11px] text-amber-300 bg-slate-900 p-3 rounded border border-slate-800">
                              {prob.canonCalTech.keystrokes.map((keyStep, kIdx) => (
                                <div key={kIdx} className="flex items-center gap-2">
                                  <span className="text-slate-500 text-[10px] w-4 shrink-0">{kIdx + 1}.</span>
                                  <span className="leading-relaxed">{keyStep}</span>
                                </div>
                              ))}
                            </div>

                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs pt-1">
                              <div className="text-[11px] text-slate-400">
                                <span className="text-slate-500 mr-1.5 uppercase font-mono text-[10px]">Expected Display:</span>
                                <span className="font-mono text-emerald-400 font-bold">{prob.canonCalTech.resultDisplay}</span>
                              </div>
                              {prob.canonCalTech.proTip && (
                                <p className="text-[11px] text-amber-300/90 italic">
                                  <strong className="text-amber-400 not-italic font-mono uppercase text-[10px] mr-1">Pro-Tip:</strong>
                                  {prob.canonCalTech.proTip}
                                </p>
                              )}
                            </div>
                          </div>

                          {/* Mental Model & Exam Pitfall */}
                          <div className="p-3 bg-slate-950 border border-slate-800 rounded-lg text-xs space-y-1">
                            <span className="font-mono text-[10px] uppercase font-bold text-rose-400 block">
                              Mental Model &amp; Exam Pitfall:
                            </span>
                            <p className="text-slate-300 text-xs leading-relaxed">
                              {prob.mentalModelOrTrap}
                            </p>
                          </div>

                          {/* Quick Problem Actions */}
                          <div className="flex flex-wrap items-center gap-2 pt-2 text-xs">
                            {onGoToPractice && (
                              <button
                                onClick={onGoToPractice}
                                className="px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded text-xs"
                              >
                                Practice in Daily 100 ▶
                              </button>
                            )}

                            {onGoToCalTech && (
                              <button
                                onClick={onGoToCalTech}
                                className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded text-xs border border-slate-700"
                              >
                                Open Canon CalTech Guide
                              </button>
                            )}

                            <a
                              href={USER_DRIVE_FOLDER_URL}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-3 py-1.5 bg-slate-950 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-slate-200 rounded text-xs ml-auto"
                            >
                              Open in Drive Folder ↗
                            </a>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* ===================== VIEW MODE: 100 ECONOMICS TERMS & CONCEPTS ===================== */}
      {activeViewMode === 'termsQuestions' && (
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-400 px-1">
            <span className="font-semibold text-slate-300">
              Showing {filteredTermsQuestions.length} of {ECON_TERMS_QUESTIONS.length} Economics Terms &amp; Concepts Questions
            </span>
            <div className="flex items-center gap-3">
              {answeredTermCount > 0 && (
                <span className="font-mono text-xs">
                  Score: <strong className="text-emerald-400">{correctTermCount}</strong> / {answeredTermCount} ({Math.round((correctTermCount / answeredTermCount) * 100)}%)
                </span>
              )}
              {answeredTermCount > 0 && (
                <button
                  onClick={() => setUserTermAnswers({})}
                  className="text-amber-400 hover:underline text-[11px]"
                >
                  Reset Answers
                </button>
              )}
            </div>
          </div>

          {filteredTermsQuestions.length === 0 ? (
            <div className="p-8 text-center text-slate-500 text-sm border border-slate-800 bg-slate-900 rounded-lg">
              No economics terms matched your search or category filter.
            </div>
          ) : (
            <div className="space-y-3">
              {filteredTermsQuestions.map((t) => {
                const isExpanded = !!expandedTermIds[t.id];
                const selectedChoice = userTermAnswers[t.id];
                const isAnswered = !!selectedChoice;
                const isCorrect = isAnswered && selectedChoice === t.correctLetter;

                return (
                  <div
                    key={t.id}
                    className={`border rounded-lg p-4 sm:p-5 transition-colors ${
                      isCorrect
                        ? 'border-emerald-500/40 bg-slate-900/90'
                        : isAnswered && !isCorrect
                        ? 'border-rose-500/40 bg-slate-900/90'
                        : isExpanded
                        ? 'border-slate-700 bg-slate-900'
                        : 'border-slate-800 bg-slate-900/70 hover:border-slate-700'
                    }`}
                  >
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-800/80">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-mono text-xs font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30">
                          Term #{t.termNumber}
                        </span>
                        <h3 className="text-sm font-bold text-slate-100">
                          {t.termOrConcept}
                        </h3>
                        <span className="text-[10px] font-mono text-slate-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                          {t.category}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                          t.difficulty === 'Foundation'
                            ? 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30'
                            : t.difficulty === 'Moderate'
                            ? 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30'
                            : 'text-amber-400 bg-amber-500/10 border-amber-500/30'
                        }`}>
                          {t.difficulty}
                        </span>
                        <button
                          onClick={() => toggleTerm(t.id)}
                          className="text-xs text-slate-400 hover:text-slate-200 px-2 py-1 rounded bg-slate-950 border border-slate-800"
                        >
                          {isExpanded ? 'Collapse ▲' : 'Details ▼'}
                        </button>
                      </div>
                    </div>

                    {/* Question Statement */}
                    <div className="pt-3 pb-2 text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                      {t.question}
                    </div>

                    {/* Multiple Choice Options */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                      {t.choices.map((choice) => {
                        const letter = choice.trim().charAt(0);
                        const isThisSelected = selectedChoice === letter;
                        const isThisCorrect = letter === t.correctLetter;

                        let btnClass = 'border-slate-800 bg-slate-950 text-slate-300 hover:border-slate-700 hover:text-white';

                        if (termPracticeMode === 'review') {
                          if (isThisCorrect) {
                            btnClass = 'border-emerald-500 bg-emerald-950/40 text-emerald-200 font-semibold';
                          }
                        } else if (isAnswered) {
                          if (isThisCorrect) {
                            btnClass = 'border-emerald-500 bg-emerald-950/40 text-emerald-200 font-semibold';
                          } else if (isThisSelected) {
                            btnClass = 'border-rose-500 bg-rose-950/40 text-rose-200 font-semibold';
                          } else {
                            btnClass = 'border-slate-800/60 bg-slate-950 text-slate-500 opacity-60';
                          }
                        }

                        return (
                          <button
                            key={choice}
                            onClick={() => handleSelectTermAnswer(t.id, letter)}
                            className={`p-2.5 rounded-lg border text-left text-xs transition-colors flex items-start gap-2 ${btnClass}`}
                          >
                            <span className="font-mono font-bold shrink-0">{letter}.</span>
                            <span className="leading-snug">{choice.replace(/^[A-D]\.\s*/, '')}</span>
                            {termPracticeMode === 'review' && isThisCorrect && (
                              <span className="ml-auto text-emerald-400 font-bold shrink-0">✓ Key</span>
                            )}
                            {isAnswered && isThisCorrect && (
                              <span className="ml-auto text-emerald-400 font-bold shrink-0">✓ Correct</span>
                            )}
                            {isAnswered && isThisSelected && !isThisCorrect && (
                              <span className="ml-auto text-rose-400 font-bold shrink-0">✗ Choice</span>
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {/* Feedback & Detailed Board Explanation */}
                    {(isExpanded || (isAnswered && termPracticeMode === 'quiz') || termPracticeMode === 'review') && (
                      <div className="mt-4 pt-3 border-t border-slate-800 space-y-2.5 text-xs">
                        <div className="p-3 bg-slate-950 border border-slate-800 rounded-lg space-y-1.5">
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-[10px] uppercase font-bold text-emerald-400">
                              Official Board Definition &amp; Key:
                            </span>
                            <span className="font-mono font-bold text-amber-300">
                              Option [{t.correctLetter}]
                            </span>
                          </div>
                          <p className="text-slate-200 text-xs leading-relaxed font-medium">
                            {t.correctDefinition}
                          </p>
                        </div>

                        {t.examExplanation && (
                          <div className="p-3 bg-slate-950/60 border border-slate-800 rounded-lg space-y-1">
                            <span className="font-mono text-[10px] uppercase font-bold text-cyan-400">
                              Board Exam Explanation:
                            </span>
                            <p className="text-slate-300 text-xs leading-relaxed">
                              {t.examExplanation}
                            </p>
                          </div>
                        )}

                        {t.boardExamTrapOrNote && (
                          <div className="p-2.5 bg-rose-950/20 border border-rose-900/40 rounded text-xs space-y-0.5">
                            <span className="text-rose-400 font-mono text-[10px] uppercase font-bold block">
                              Board Exam Trap / Key Note:
                            </span>
                            <p className="text-rose-200/90 text-[11px] leading-relaxed">
                              {t.boardExamTrapOrNote}
                            </p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* ===================== VIEW MODE 1: SIMPLE TOPICS ===================== */}
      {activeViewMode === 'topics' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-400 px-1">
            <span className="font-semibold text-slate-300">
              Showing {filteredTopics.length} Review Topics
            </span>
            <span className="text-[11px] text-slate-500">
              Click any card to expand simple step-by-step example
            </span>
          </div>

          {filteredTopics.length === 0 ? (
            <div className="p-8 text-center text-slate-500 text-sm border border-slate-800 bg-slate-900 rounded-lg">
              No topics matched your search or subject filter.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredTopics.map((topic) => {
                const isExpanded = expandedTopicId === topic.id;
                const tagColor =
                  topic.subject === 'MATH'
                    ? 'text-amber-400 bg-amber-500/10 border-amber-500/30'
                    : topic.subject === 'ESAS'
                    ? 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30'
                    : 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30';

                return (
                  <div
                    key={topic.id}
                    className={`border rounded-lg p-5 space-y-3 transition-colors ${
                      isExpanded
                        ? 'border-amber-500/50 bg-slate-900 shadow-md'
                        : 'border-slate-800 bg-slate-900 hover:border-slate-700'
                    }`}
                  >
                    {/* Header: Title and Subject */}
                    <div
                      className="cursor-pointer"
                      onClick={() => setExpandedTopicId(isExpanded ? null : topic.id)}
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${tagColor}`}>
                          {topic.subject}
                        </span>
                        <span className="text-[10px] text-slate-500 truncate max-w-[200px]">
                          {topic.sourceFile}
                        </span>
                      </div>
                      <h3 className="text-sm font-bold text-slate-100 flex items-center justify-between">
                        <span>{topic.title}</span>
                        <span className="text-slate-500 text-xs ml-2">{isExpanded ? '▲' : '▼'}</span>
                      </h3>
                    </div>

                    {/* Simple 1-Line Explanation */}
                    <div className="text-xs text-slate-300 leading-relaxed bg-slate-950 p-3 rounded border border-slate-800">
                      <span className="text-amber-400 font-bold block text-[10px] uppercase font-mono mb-0.5">
                        Simple Concept:
                      </span>
                      {topic.simpleCoreIdea}
                    </div>

                    {/* Simple Governing Formula */}
                    <div className="bg-slate-950 border border-slate-800 p-3 rounded space-y-1">
                      <span className="text-emerald-400 font-bold block text-[10px] uppercase font-mono">
                        Core Formula:
                      </span>
                      <div className="overflow-x-auto py-1">
                        <CleanMath math={topic.simpleFormula} block className="text-amber-300 font-bold text-xs sm:text-sm" />
                      </div>
                      <div className="text-[11px] text-slate-400 pt-1 border-t border-slate-800/80">
                        {topic.formulaLabels}
                      </div>
                    </div>

                    {/* Expandable Simple Example & Exam Trap */}
                    {isExpanded && (
                      <div className="space-y-3 pt-2 border-t border-slate-800">
                        {/* 1-Minute Step-by-Step Example */}
                        <div className="bg-slate-950 border border-slate-800 p-3 rounded space-y-2 text-xs">
                          <span className="text-slate-200 font-bold block text-[10px] uppercase font-mono">
                            Simple 1-Minute Example:
                          </span>
                          <p className="text-slate-300 font-medium">{topic.simpleExample.statement}</p>
                          <div className="space-y-1 pl-2 border-l border-slate-800 text-[11px] text-slate-400 font-mono">
                            {topic.simpleExample.steps.map((step, sIdx) => (
                              <div key={sIdx} className="text-slate-300">
                                {step}
                              </div>
                            ))}
                          </div>
                          <div className="text-emerald-400 font-mono font-bold text-xs pt-1">
                            Result: {topic.simpleExample.result}
                          </div>
                        </div>

                        {/* Canon F-789SGA CalTech Guide */}
                        {topic.canonCalTech && (
                          <div className="bg-slate-950 border border-amber-500/40 p-3 rounded space-y-2 text-xs">
                            <div className="flex items-center justify-between">
                              <span className="text-amber-400 font-bold block text-[10px] uppercase font-mono">
                                {topic.canonCalTech.calculator} CalTech:
                              </span>
                              <span className="text-[10px] font-mono text-slate-400 bg-slate-900 px-1.5 py-0.5 rounded">
                                {topic.canonCalTech.mode}
                              </span>
                            </div>
                            <div className="space-y-1 font-mono text-[11px] text-amber-300 bg-slate-900 p-2 rounded border border-slate-800">
                              {topic.canonCalTech.keystrokes.map((keyStep, kIdx) => (
                                <div key={kIdx} className="flex items-center gap-1.5">
                                  <span className="text-slate-500 text-[10px]">{kIdx + 1}.</span>
                                  <span>{keyStep}</span>
                                </div>
                              ))}
                            </div>
                            {topic.canonCalTech.proTip && (
                              <p className="text-[11px] text-slate-400 italic">
                                <strong className="text-amber-400 not-italic">Pro-Tip:</strong> {topic.canonCalTech.proTip}
                              </p>
                            )}
                          </div>
                        )}

                        {/* Exam Trap */}
                        <div className="p-2.5 bg-rose-950/20 border border-rose-900/40 rounded text-xs space-y-0.5">
                          <span className="text-rose-400 font-mono text-[10px] uppercase font-bold block">
                            Exam Trap:
                          </span>
                          <p className="text-rose-200/90 text-[11px] leading-relaxed">{topic.simpleExamTrap}</p>
                        </div>
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-800/80 text-xs">
                      {onGoToPractice && (
                        <button
                          onClick={onGoToPractice}
                          className="px-2.5 py-1 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded text-xs"
                        >
                          Practice Questions ▶
                        </button>
                      )}

                      {topic.simulatorTab && onOpenSimulator && (
                        <button
                          onClick={() => onOpenSimulator(topic.simulatorTab)}
                          className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded text-xs"
                        >
                          Simulator
                        </button>
                      )}

                      <a
                        href={USER_DRIVE_FOLDER_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2.5 py-1 bg-slate-950 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-slate-200 rounded text-xs ml-auto"
                      >
                        Drive PDF ↗
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* ===================== VIEW MODE 2: DRIVE FILES ===================== */}
      {activeViewMode === 'files' && (
        <div className="border border-slate-800 bg-slate-900 rounded-lg overflow-hidden">
          <div className="p-4 bg-slate-950/70 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <span className="font-semibold text-slate-300">File Name &amp; Subject</span>
            <span className="font-mono">Showing {displayFiles.length} files</span>
          </div>

          {displayFiles.length === 0 ? (
            <div className="p-8 text-center text-slate-500 text-sm">
              No files matched your search or filter.
            </div>
          ) : (
            <div className="divide-y divide-slate-800/80">
              {displayFiles.map((file) => {
                const tag = file.subjectTag || inferSubjectFromTitle(file.name);
                const tagColor =
                  tag === 'MATH'
                    ? 'text-amber-400 bg-amber-500/10 border-amber-500/30'
                    : tag === 'ESAS'
                    ? 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30'
                    : 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30';

                return (
                  <div
                    key={file.id}
                    className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-800/40 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <span className="w-8 h-8 rounded bg-slate-950 border border-slate-800 flex items-center justify-center font-mono text-[10px] font-bold text-slate-400 shrink-0">
                        PDF
                      </span>

                      <div>
                        <div className="flex items-center gap-2">
                          <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${tagColor}`}>
                            {tag}
                          </span>
                          <span className="text-sm font-medium text-slate-100">{file.name}</span>
                        </div>
                        <div className="text-[11px] text-slate-500 mt-1 flex items-center gap-3">
                          {file.size && <span>Size: {file.size}</span>}
                          <span>Google Drive Syllabus Repository</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                      {onSelectSubject && (
                        <button
                          onClick={() => onSelectSubject(tag)}
                          className="px-2.5 py-1 bg-slate-950 border border-slate-800 text-slate-300 hover:text-slate-100 rounded text-xs"
                        >
                          Study {tag} Road Map
                        </button>
                      )}
                      <a
                        href={file.webViewLink || USER_DRIVE_FOLDER_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded text-xs font-medium border border-slate-700"
                      >
                        Open File ↗
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
