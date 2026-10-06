import React, { useState, useEffect } from "react";
import { User } from "firebase/auth";
import { Navbar } from "./components/Navbar";
import { RoadmapView } from "./components/RoadmapView";
import { MathBasicsView } from "./components/MathBasicsView";
import { CoreFoundationsView } from "./components/CoreFoundationsView";
import { Daily100View } from "./components/Daily100View";
import { SimulatorsView } from "./components/SimulatorsView";
import { VisualFormulaCheatSheet } from "./components/VisualFormulaCheatSheet";
import { EconFastTrackView } from "./components/EconFastTrackView";
import {
  EconomicsStudyHub,
  EconomicsFormulaBank,
} from "./components/EconomicsStudy";
import {
  initAuth,
  googleSignIn,
  logout,
  setCachedToken,
} from "./services/firebase";

export default function App() {
  const [currentTab, setCurrentTab] = useState<
    | "roadmap"
    | "mathBasics"
    | "caltech"
    | "foundations"
    | "daily100"
    | "simulators"
    | "drive"
    | "formulas"
    | "fastTrack"
  >("fastTrack");
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
      },
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
      console.error("Google sign-in error:", err);
      setAuthError("Google sign in was cancelled or requires permission.");
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
            <button
              onClick={() => setAuthError(null)}
              className="text-slate-400 hover:text-slate-200"
            >
              ✕
            </button>
          </div>
        )}

        {/* Tab 1: What to Study First (Roadmap) */}
        {currentTab === "roadmap" && (
          <RoadmapView
            onSelectTopicForPractice={() => setCurrentTab("daily100")}
            onOpenSimulator={() => setCurrentTab("simulators")}
            onGoToFoundations={() => setCurrentTab("foundations")}
            onGoToMathBasics={() => setCurrentTab("mathBasics")}
            onGoToFastTrack={() => setCurrentTab("fastTrack")}
          />
        )}

        {/* Tab: 1-Week Engineering Economics Fast-Track (Pass Plan) */}
        {currentTab === "fastTrack" && (
          <EconFastTrackView
            onGoToDriveProblems={() => {
              setCurrentTab("drive");
            }}
            onGoToCalTech={() => setCurrentTab("caltech")}
            onGoToFormulas={() => setCurrentTab("formulas")}
          />
        )}

        {/* Tab: Math from Scratch (Zero-Level Primer) */}
        {currentTab === "mathBasics" && (
          <MathBasicsView
            onGoToFoundations={() => setCurrentTab("foundations")}
            onGoToDaily100={() => setCurrentTab("daily100")}
            onOpenSimulator={(tab) => {
              setCurrentTab("simulators");
            }}
          />
        )}

        {/* Tab: Canon F-789SGA Calculator Techniques */}
        {currentTab === "caltech" && (
          <EconomicsStudyHub initialSection="calculator" />
        )}

        {/* Tab 2: Core Foundations (Zero-to-Hero) */}
        {currentTab === "foundations" && (
          <CoreFoundationsView
            onOpenSimulator={() => setCurrentTab("simulators")}
            onGoToDaily100={() => setCurrentTab("daily100")}
            onGoToMathBasics={() => setCurrentTab("mathBasics")}
          />
        )}

        {/* Tab 3: 100 Problem Per Day Set */}
        {currentTab === "daily100" && (
          <Daily100View
            onOpenSimulator={() => setCurrentTab("simulators")}
            onGoToFoundations={() => setCurrentTab("foundations")}
          />
        )}

        {/* Tab 3: Interactive Visual Simulators */}
        {currentTab === "simulators" && <SimulatorsView />}

        {/* Tab 4: Google Drive Folder Files & ESAS Economics Sample Problems */}
        {currentTab === "drive" && (
          <EconomicsStudyHub initialSection="references" />
        )}

        {/* Tab 5: Visual Formula Cheat Sheet */}
        {currentTab === "formulas" && (
          <div className="space-y-8">
            <EconomicsFormulaBank />
            <details className="border border-slate-800 rounded-xl p-5">
              <summary className="cursor-pointer text-slate-400">
                Other subject formula banks
              </summary>
              <div className="mt-5">
                <VisualFormulaCheatSheet />
              </div>
            </details>
          </div>
        )}
      </main>

      {/* Clean Technical Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 py-6 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div>
            <span className="font-semibold text-slate-300">
              REE Licensure Examination Visual Study Companion
            </span>
            <div className="text-[11px] text-slate-400 mt-0.5">
              Mathematics • Engineering Sciences &amp; Allied Subjects • EE
              Professional
            </div>
          </div>
          <div className="font-mono text-[11px] text-slate-400">
            ESAS focus: Engineering Economics
          </div>
        </div>
      </footer>
    </div>
  );
}
