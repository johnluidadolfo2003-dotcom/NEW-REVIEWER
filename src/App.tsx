import React, { useState, useEffect } from 'react';
import { User } from 'firebase/auth';
import { Navbar } from './components/Navbar';
import { RoadmapView } from './components/RoadmapView';
import { Daily100View } from './components/Daily100View';
import { SimulatorsView } from './components/SimulatorsView';
import { DriveFolderView } from './components/DriveFolderView';
import { VisualFormulaCheatSheet } from './components/VisualFormulaCheatSheet';
import { initAuth, googleSignIn, logout, setCachedToken } from './services/firebase';

export default function App() {
  const [currentTab, setCurrentTab] = useState<'roadmap' | 'daily100' | 'simulators' | 'drive' | 'formulas'>('roadmap');
  const [user, setUser] = useState<User | null>(null);
  const [isLoggingIn, setIsLoggingIn] = useState<boolean>(false);
  const [authError, setAuthError] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = initAuth(
      (authedUser, token) => {
        setUser(authedUser);
        setCachedToken(token);
      },
      () => {
        setUser(null);
        setCachedToken(null);
      }
    );
    return () => unsubscribe();
  }, []);

  const handleGoogleSignIn = async () => {
    setIsLoggingIn(true);
    setAuthError(null);
    try {
      const res = await googleSignIn();
      if (res?.user) {
        setUser(res.user);
      }
    } catch (err: any) {
      console.error('Google sign-in error:', err);
      setAuthError('Google sign in was cancelled or requires permission.');
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await logout();
      setUser(null);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Top Navigation */}
      <Navbar
        currentTab={currentTab}
        onSelectTab={setCurrentTab}
        user={user}
        onGoogleSignIn={handleGoogleSignIn}
        onSignOut={handleSignOut}
        isLoggingIn={isLoggingIn}
      />

      {/* Main Content Body */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6">
        {authError && (
          <div className="mb-6 p-3 bg-amber-950/40 border border-amber-800 text-amber-300 text-xs rounded flex justify-between items-center">
            <span>{authError}</span>
            <button onClick={() => setAuthError(null)} className="text-slate-400 hover:text-slate-200">
              ✕
            </button>
          </div>
        )}

        {/* Tab 1: What to Study First (Roadmap) */}
        {currentTab === 'roadmap' && (
          <RoadmapView
            onSelectTopicForPractice={() => setCurrentTab('daily100')}
            onOpenSimulator={() => setCurrentTab('simulators')}
          />
        )}

        {/* Tab 2: 100 Problem Per Day Set */}
        {currentTab === 'daily100' && (
          <Daily100View onOpenSimulator={() => setCurrentTab('simulators')} />
        )}

        {/* Tab 3: Interactive Visual Simulators */}
        {currentTab === 'simulators' && <SimulatorsView />}

        {/* Tab 4: Google Drive Folder Files */}
        {currentTab === 'drive' && (
          <DriveFolderView onSelectSubject={() => setCurrentTab('roadmap')} />
        )}

        {/* Tab 5: Visual Formula Cheat Sheet */}
        {currentTab === 'formulas' && <VisualFormulaCheatSheet />}
      </main>

      {/* Clean Technical Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 py-6 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div>
            <span className="font-semibold text-slate-300">
              REE Licensure Examination Visual Study Companion
            </span>
            <div className="text-[11px] text-slate-400 mt-0.5">
              Mathematics (33%) • Engineering Sciences &amp; Allied Subjects (30%) • EE Professional (37%)
            </div>
          </div>
          <div className="font-mono text-[11px] text-slate-400">
            PRC Passing Standard: Weighted Average ≥ 70% • No Subject &lt; 50%
          </div>
        </div>
      </footer>
    </div>
  );
}
