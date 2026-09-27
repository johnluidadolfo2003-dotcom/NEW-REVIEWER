import React from 'react';
import { User } from 'firebase/auth';

interface NavbarProps {
  currentTab: 'roadmap' | 'daily100' | 'simulators' | 'drive' | 'formulas';
  onSelectTab: (tab: 'roadmap' | 'daily100' | 'simulators' | 'drive' | 'formulas') => void;
  user: User | null;
  onGoogleSignIn: () => void;
  onSignOut: () => void;
  isLoggingIn: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onSelectTab,
  user,
  onGoogleSignIn,
  onSignOut,
  isLoggingIn,
}) => {
  return (
    <header className="border-b border-slate-800 bg-slate-950/95 sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-col md:flex-row md:items-center justify-between gap-3">
        {/* Brand / Logo */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-mono font-black text-sm shrink-0">
            REE
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-base font-bold text-slate-100 tracking-tight">
                REE Board Exam Visual Mastery
              </h1>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">
                PRC Syllabus
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Personalized for Visual &amp; Slow Learners • ESAS • EE • MATH
            </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex items-center gap-1 overflow-x-auto pb-1 md:pb-0">
          <button
            onClick={() => onSelectTab('roadmap')}
            className={`px-3 py-1.5 rounded text-xs font-semibold whitespace-nowrap transition-colors ${
              currentTab === 'roadmap'
                ? 'bg-amber-500 text-slate-950'
                : 'text-slate-300 hover:bg-slate-900 hover:text-slate-100'
            }`}
          >
            What to Study First
          </button>

          <button
            onClick={() => onSelectTab('daily100')}
            className={`px-3 py-1.5 rounded text-xs font-semibold whitespace-nowrap transition-colors flex items-center gap-1.5 ${
              currentTab === 'daily100'
                ? 'bg-amber-500 text-slate-950'
                : 'text-slate-300 hover:bg-slate-900 hover:text-slate-100'
            }`}
          >
            <span>Daily 100 Problems</span>
            <span className={`text-[10px] px-1 py-0.2 rounded font-mono ${
              currentTab === 'daily100' ? 'bg-slate-950 text-amber-300' : 'bg-slate-800 text-amber-400'
            }`}>
              100/day
            </span>
          </button>

          <button
            onClick={() => onSelectTab('simulators')}
            className={`px-3 py-1.5 rounded text-xs font-semibold whitespace-nowrap transition-colors ${
              currentTab === 'simulators'
                ? 'bg-amber-500 text-slate-950'
                : 'text-slate-300 hover:bg-slate-900 hover:text-slate-100'
            }`}
          >
            Visual Simulators
          </button>

          <button
            onClick={() => onSelectTab('drive')}
            className={`px-3 py-1.5 rounded text-xs font-semibold whitespace-nowrap transition-colors ${
              currentTab === 'drive'
                ? 'bg-amber-500 text-slate-950'
                : 'text-slate-300 hover:bg-slate-900 hover:text-slate-100'
            }`}
          >
            Google Drive Files
          </button>

          <button
            onClick={() => onSelectTab('formulas')}
            className={`px-3 py-1.5 rounded text-xs font-semibold whitespace-nowrap transition-colors ${
              currentTab === 'formulas'
                ? 'bg-amber-500 text-slate-950'
                : 'text-slate-300 hover:bg-slate-900 hover:text-slate-100'
            }`}
          >
            Formula Bank
          </button>
        </nav>

        {/* User / Google Workspace OAuth Status */}
        <div className="flex items-center gap-2 shrink-0">
          {user ? (
            <div className="flex items-center gap-2">
              <div className="text-right hidden sm:block">
                <span className="text-xs font-medium text-slate-200 block truncate max-w-[120px]">
                  {user.displayName || user.email?.split('@')[0]}
                </span>
                <span className="text-[10px] text-emerald-400 font-mono block">Drive Synced</span>
              </div>
              <button
                onClick={onSignOut}
                className="px-2.5 py-1 text-xs text-slate-400 hover:text-slate-200 bg-slate-900 border border-slate-800 rounded"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <button
              onClick={onGoogleSignIn}
              disabled={isLoggingIn}
              className="flex items-center gap-2 bg-white text-slate-900 hover:bg-slate-100 px-3 py-1.5 rounded text-xs font-medium transition-colors border border-slate-300 disabled:opacity-50"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.66v3.05h3.87c2.26-2.09 3.675-5.17 3.675-9.15z"
                />
                <path
                  fill="#34A853"
                  d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.87-3.05c-1.08.72-2.45 1.16-4.06 1.16-3.13 0-5.78-2.11-6.73-4.96H1.28v3.15C3.26 21.36 7.36 24 12 24z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.27 14.24c-.25-.72-.38-1.49-.38-2.24s.13-1.52.38-2.24V6.61H1.28C.46 8.23 0 10.06 0 12s.46 3.77 1.28 5.39l3.99-3.15z"
                />
                <path
                  fill="#EA4335"
                  d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.36 0 3.26 2.64 1.28 6.61l3.99 3.15c.95-2.85 3.6-4.96 6.73-4.96z"
                />
              </svg>
              <span>{isLoggingIn ? 'Connecting...' : 'Sign in with Google'}</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
