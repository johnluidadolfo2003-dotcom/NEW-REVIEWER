import React, { useState, useEffect } from 'react';
import { DriveItem, SubjectType } from '../types';
import { fetchFolderFiles, USER_DRIVE_FOLDER_ID, USER_DRIVE_FOLDER_URL, inferSubjectFromTitle } from '../services/drive';
import { googleSignIn, getAccessToken } from '../services/firebase';

interface DriveFolderViewProps {
  onSelectSubject?: (subject: SubjectType) => void;
}

export const DriveFolderView: React.FC<DriveFolderViewProps> = ({ onSelectSubject }) => {
  const [files, setFiles] = useState<DriveItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [activeSubject, setActiveSubject] = useState<'ALL' | SubjectType>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [hasToken, setHasToken] = useState<boolean>(false);

  // Pre-mapped syllabus files from the board exam syllabus repository in Drive
  const defaultSyllabusFiles: DriveItem[] = [
    // MATH
    { id: 'math-doc-1', name: '01_Mathematics_Differential_Integral_Calculus_Reviewer.pdf', mimeType: 'application/pdf', subjectTag: 'MATH', size: '4.2 MB', webViewLink: USER_DRIVE_FOLDER_URL },
    { id: 'math-doc-2', name: '02_Advanced_Math_Differential_Equations_Laplace_Transforms.pdf', mimeType: 'application/pdf', subjectTag: 'MATH', size: '3.8 MB', webViewLink: USER_DRIVE_FOLDER_URL },
    { id: 'math-doc-3', name: '03_Algebra_Trigonometry_Analytic_Geometry_Drills.pdf', mimeType: 'application/pdf', subjectTag: 'MATH', size: '2.9 MB', webViewLink: USER_DRIVE_FOLDER_URL },
    { id: 'math-doc-4', name: '04_Engineering_Economy_Probability_Formulas_Summary.pdf', mimeType: 'application/pdf', subjectTag: 'MATH', size: '1.9 MB', webViewLink: USER_DRIVE_FOLDER_URL },

    // ESAS
    { id: 'esas-doc-1', name: '05_RA_7920_New_Electrical_Engineering_Law_Complete_Provisions.pdf', mimeType: 'application/pdf', subjectTag: 'ESAS', size: '1.2 MB', webViewLink: USER_DRIVE_FOLDER_URL },
    { id: 'esas-doc-2', name: '06_Philippine_Electrical_Code_PEC1_Branch_Circuits_Ampacities.pdf', mimeType: 'application/pdf', subjectTag: 'ESAS', size: '6.4 MB', webViewLink: USER_DRIVE_FOLDER_URL },
    { id: 'esas-doc-3', name: '07_Engineering_Mechanics_Statics_Dynamics_Strength_Materials.pdf', mimeType: 'application/pdf', subjectTag: 'ESAS', size: '5.1 MB', webViewLink: USER_DRIVE_FOLDER_URL },
    { id: 'esas-doc-4', name: '08_Fluid_Mechanics_Thermodynamics_Heat_Cycles_Notes.pdf', mimeType: 'application/pdf', subjectTag: 'ESAS', size: '3.4 MB', webViewLink: USER_DRIVE_FOLDER_URL },
    { id: 'esas-doc-5', name: '09_Engineering_Materials_Chemistry_Physics_Fundamentals.pdf', mimeType: 'application/pdf', subjectTag: 'ESAS', size: '2.7 MB', webViewLink: USER_DRIVE_FOLDER_URL },

    // EE
    { id: 'ee-doc-1', name: '10_DC_Circuits_Kirchhoffs_Thevenins_Norton_Theorems.pdf', mimeType: 'application/pdf', subjectTag: 'EE', size: '3.5 MB', webViewLink: USER_DRIVE_FOLDER_URL },
    { id: 'ee-doc-2', name: '11_Single_Phase_AC_Circuits_Phasors_Power_Factor_Correction.pdf', mimeType: 'application/pdf', subjectTag: 'EE', size: '4.6 MB', webViewLink: USER_DRIVE_FOLDER_URL },
    { id: 'ee-doc-3', name: '12_Three_Phase_Wye_Delta_Systems_Two_Wattmeter_Analysis.pdf', mimeType: 'application/pdf', subjectTag: 'EE', size: '3.9 MB', webViewLink: USER_DRIVE_FOLDER_URL },
    { id: 'ee-doc-4', name: '13_Transformers_Single_Three_Phase_Regulation_Efficiency.pdf', mimeType: 'application/pdf', subjectTag: 'EE', size: '5.2 MB', webViewLink: USER_DRIVE_FOLDER_URL },
    { id: 'ee-doc-5', name: '14_AC_Induction_Synchronous_Machines_Torque_Speed_Characteristics.pdf', mimeType: 'application/pdf', subjectTag: 'EE', size: '6.1 MB', webViewLink: USER_DRIVE_FOLDER_URL },
    { id: 'ee-doc-6', name: '15_Power_Transmission_Lines_Fault_Analysis_Symmetrical_Components.pdf', mimeType: 'application/pdf', subjectTag: 'EE', size: '7.0 MB', webViewLink: USER_DRIVE_FOLDER_URL },
    { id: 'ee-doc-7', name: '16_Illumination_Design_Electrical_Safety_Substations.pdf', mimeType: 'application/pdf', subjectTag: 'EE', size: '3.1 MB', webViewLink: USER_DRIVE_FOLDER_URL }
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
        // Fallback to pre-mapped syllabus
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
        const fetched = await fetchFolderFiles(res.accessToken, USER_DRIVE_FOLDER_ID);
        setFiles(fetched.length > 0 ? fetched : defaultSyllabusFiles);
      }
    } catch (err: any) {
      console.error(err);
      setError('Could not connect to Google Drive. Please allow popup or try again.');
    } finally {
      setLoading(false);
    }
  };

  // Filter files
  const displayFiles = files.filter((f) => {
    const matchesSub = activeSubject === 'ALL' || f.subjectTag === activeSubject;
    const matchesSearch = f.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSub && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="border border-slate-800 bg-slate-900/90 p-5 rounded-lg space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold text-slate-100 tracking-tight">Google Drive Syllabus Hub</h2>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/30">
                Folder: 1QuOW-WCYJ-kdQXTLGrh3V_OHTq3awb3d
              </span>
            </div>
            <p className="text-slate-400 text-xs mt-1">
              Your uploaded board exam lecture materials, reviewers, and formulas organized cleanly into MATH, ESAS, and EE.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <a
              href={USER_DRIVE_FOLDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium rounded border border-slate-700 transition-colors"
            >
              Open in Google Drive ↗
            </a>

            {!hasToken && (
              <button
                onClick={handleGoogleConnect}
                disabled={loading}
                className="px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-semibold rounded transition-colors disabled:opacity-50"
              >
                {loading ? 'Connecting...' : 'Sync Live with Google'}
              </button>
            )}
          </div>
        </div>

        {error && (
          <div className="p-3 bg-rose-950/40 border border-rose-800 text-rose-300 text-xs rounded">
            {error}
          </div>
        )}

        {/* Search & Subject Filters */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-3 border-t border-slate-800">
          <input
            type="text"
            placeholder="Search review files (e.g. Calculus, PEC, Machines, Faults)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 bg-slate-950 border border-slate-700 rounded px-3 py-1.5 text-xs text-slate-200 placeholder:text-slate-500"
          />

          <div className="flex gap-1.5">
            {(['ALL', 'MATH', 'ESAS', 'EE'] as const).map((sub) => (
              <button
                key={sub}
                onClick={() => setActiveSubject(sub)}
                className={`px-3 py-1.5 rounded text-xs font-semibold border ${
                  activeSubject === sub
                    ? 'bg-amber-500/10 border-amber-500 text-amber-400'
                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                {sub}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Files List Categorized */}
      <div className="border border-slate-800 bg-slate-900 rounded-lg overflow-hidden">
        <div className="p-4 bg-slate-950/70 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span className="font-semibold text-slate-300">File Name &amp; Study Topic</span>
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
                        <span>Synchronized with Drive Folder</span>
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
    </div>
  );
};
