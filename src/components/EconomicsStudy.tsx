import React, { useState } from "react";
import katex from "katex";
import {
  BookOpen,
  Calculator,
  Check,
  ChevronRight,
  LockKeyhole,
  Search,
} from "lucide-react";
import { DRIVE_SAMPLE_PROBLEMS } from "../data/driveSampleProblems";
import { ECON_TERMS_QUESTIONS } from "../data/econTermsQuestions";
import { ECONOMICS_FORMULAS, formulaById } from "../data/economicsFormulas";
import { economicsNoteById } from "../data/economicsTopics";
import { ECONOMICS_LESSONS } from "../data/economicsLessons";
import { economicsFormulaLatex } from "../utils/economicsMath";
import type { DriveSampleProblem } from "../types";

const panel = "rounded-2xl border border-slate-800 bg-slate-900/60 p-5 sm:p-6";
const button =
  "rounded-xl border border-slate-700 px-4 py-2 text-sm hover:border-teal-400 hover:text-teal-200 transition";
const PROGRESS_KEY = "economics-source-week-v1";
export function readEconomicsProgress(): number[] {
  try {
    const data: unknown = JSON.parse(
      localStorage.getItem(PROGRESS_KEY) || "[]",
    );
    return Array.isArray(data)
      ? [
          ...new Set(
            data.filter(
              (n): n is number => Number.isInteger(n) && n >= 1 && n <= 7,
            ),
          ),
        ]
      : [];
  } catch {
    return [];
  }
}
export function EconomicsMath({ formula }: { formula: string }) {
  return (
    <div className="max-w-full text-teal-100 py-2">
      {economicsFormulaLatex(formula).map((latex, i) => (
        <div
          key={i}
          className="overflow-x-auto max-w-full"
          dangerouslySetInnerHTML={{
            __html: katex.renderToString(latex, {
              throwOnError: false,
              displayMode: true,
              strict: "ignore",
            }),
          }}
        />
      ))}
    </div>
  );
}
export function SourceSheet({ name, label }: { name: string; label?: string }) {
  return (
    <p className="mt-3 text-xs text-slate-500">
      Reference: {label || "ESAS Engineering Economics"} ·{" "}
      {name.replace(".HEIC", "")}
    </p>
  );
}
export function EconomicsTopicCard({ id }: { id: string }) {
  const f = formulaById[id],
    note = economicsNoteById[id];
  return (
    <article className={panel} data-topic-id={id}>
      <p className="text-xs text-teal-300">Day {f.day}</p>
      <h3 className="font-semibold text-lg mt-1">{f.title}</h3>
      <p className="text-sm text-slate-300 leading-relaxed mt-3">{note.idea}</p>
      <p className="text-xs text-slate-400 mt-3">
        Recognize it: {note.recognize}
      </p>
      <details className="mt-4">
        <summary className="text-sm text-teal-300 cursor-pointer">
          Learn the formula & follow an example
        </summary>
        <EconomicsMath formula={f.formula} />
        <p className="text-xs text-slate-400">{f.symbols}</p>
        <h4 className="font-semibold mt-4 text-sm">Try this example</h4>
        <p className="text-sm mt-2">{note.example}</p>
        <ol className="list-decimal ml-5 space-y-2 text-sm leading-relaxed text-slate-300 mt-3">
          {note.steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        <p className="text-sm text-teal-200 mt-4 rounded-xl bg-teal-950/40 p-3">
          {note.answer}
        </p>
        <p className="text-xs text-amber-200 mt-3">Watch for: {f.trap}</p>
      </details>
    </article>
  );
}
export function EconomicsTopics() {
  const [query, setQuery] = useState("");
  const topics = ECONOMICS_FORMULAS.filter((f) =>
    `${f.title} ${economicsNoteById[f.id].idea}`
      .toLowerCase()
      .includes(query.toLowerCase()),
  );
  return (
    <section className="space-y-5">
      <div>
        <p className="text-xs uppercase tracking-widest text-teal-300">
          Study inside the app
        </p>
        <h2 className="text-2xl font-semibold mt-1">
          Engineering Economics topic lessons
        </h2>
        <p className="text-sm text-slate-400 mt-2">
          Every topic has a simple explanation, the formula, a worked example,
          and the solving shortcut. The full 175 solving problems and 100 terms
          questions appear below the completed week plan.
        </p>
      </div>
      <details className={panel}>
        <summary className="cursor-pointer text-teal-300 text-sm">
          Start here: understand the symbols
        </summary>
        <dl className="grid sm:grid-cols-2 gap-4 mt-5 text-sm">
          {[
            [
              "Principal / present worth P",
              "Money valued today, before future interest or payments.",
            ],
            ["Future worth F", "Money valued at a stated later date."],
            [
              "Payment A",
              "An equal amount paid or received each payment period.",
            ],
            [
              "Periodic rate i",
              "Interest per payment period as a decimal: 5% = 0.05.",
            ],
            [
              "Periods n",
              "Count of compounding or payment intervals; use the same clock as i.",
            ],
            ["Salvage S", "Net value remaining when an asset is retired."],
            [
              "Book value BV",
              "First cost minus accumulated depreciation; it need not equal resale price.",
            ],
            [
              "Cash-flow timing",
              "Mark now as 0; write each amount at its actual payment date.",
            ],
          ].map(([term, definition]) => (
            <div key={term}>
              <dt className="font-medium text-teal-200">{term}</dt>
              <dd className="text-slate-400 mt-1">{definition}</dd>
            </div>
          ))}
        </dl>
        <p className="text-xs text-slate-400 mt-4">
          When i=0, equal payments total A×n and a target is divided by n; use
          these limits instead of dividing by zero in an interest-factor
          formula.
        </p>
      </details>
      <input
        aria-label="Search economics topics"
        placeholder="Search a topic…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-3 bg-slate-950 border border-slate-700 rounded-xl"
      />
      <div className="grid md:grid-cols-2 gap-4">
        {topics.map((f) => (
          <EconomicsTopicCard key={f.id} id={f.id} />
        ))}
      </div>
      {!topics.length && <p>No topics match your search.</p>}
    </section>
  );
}

export function EconomicsFormulaBank({ day }: { day?: number }) {
  const [search, setSearch] = useState("");
  const formulas = ECONOMICS_FORMULAS.filter(
    (f) =>
      (!day || f.day === day) &&
      `${f.title} ${f.useWhen}`.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <section className="space-y-4">
      <div>
        <p className="text-xs uppercase tracking-widest text-teal-300">
          ESAS · Engineering Economics
        </p>
        <h2 className="text-2xl font-semibold mt-1">Formula bank</h2>
        <p className="text-sm text-slate-400 mt-2">
          Pick the cash-flow pattern first. Rates use decimals; keep full
          precision until the answer.
        </p>
      </div>
      <input
        aria-label="Search economics formulas"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search a formula or use case…"
        className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3"
      />
      <div className="grid lg:grid-cols-2 gap-4">
        {formulas.map((f) => (
          <article key={f.id} id={`formula-${f.id}`} className={panel}>
            <p className="text-xs text-slate-500">Day {f.day}</p>
            <h3 className="font-semibold text-lg">{f.title}</h3>
            <EconomicsMath formula={f.formula} />
            <p className="text-sm text-slate-400">{f.symbols}</p>
            <p className="text-sm mt-3">{f.useWhen}</p>
            <p className="text-sm text-amber-200 mt-3">Watch for: {f.trap}</p>
          </article>
        ))}
      </div>
      {!formulas.length && <p>No formulas match your search.</p>}
    </section>
  );
}
export function EconomicsCalculatorGuide() {
  return (
    <section className="space-y-5">
      <div>
        <p className="text-xs uppercase tracking-widest text-teal-300">
          Calculator techniques
        </p>
        <h2 className="text-2xl font-semibold mt-1">Canon F-789SGA</h2>
        <p className="text-slate-400 mt-2 text-sm">
          These techniques use COMP arithmetic and the calculator’s SOLVE
          feature. Model assumed from your “F7895GA” spelling: check that the
          label on your calculator says F-789SGA.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <article className={panel}>
          <h3 className="font-semibold">1. Set up once</h3>
          <ol className="list-decimal ml-5 mt-3 space-y-2 text-sm text-slate-300">
            <li>Select COMP from MODE.</li>
            <li>Enter interest as a decimal: 12% → 0.12.</li>
            <li>
              Use the power key (xʸ) for ^. For negative exponents, use the
              negative-sign key (−), not subtraction.
            </li>
            <li>
              Use parentheses around each denominator. Press = once the full
              expression is entered.
            </li>
            <li>Keep the unrounded result; round at the final answer.</li>
          </ol>
        </article>
        <article className={panel}>
          <h3 className="font-semibold">2. Fast loan-payment entry</h3>
          <p className="text-sm text-slate-400 mt-3">
            ₱10,000; 10% nominal semiannual; five years: i=0.05, n=10.
          </p>
          <p className="font-mono break-words bg-slate-950 rounded-xl p-3 mt-3 text-teal-200">
            10000 × 0.05 ÷ (1 − 1.05^(−10))
          </p>
          <p className="text-sm mt-3">
            Result: ₱1,295.05 per half-year. Calculate the payment directly; no
            factor-table lookup is needed.
          </p>
        </article>
        <article className={panel}>
          <h3 className="font-semibold">3. Use ln for unknown time</h3>
          <p className="text-sm text-slate-400 mt-3">
            Doubling at 10% compounded continuously:
          </p>
          <p className="font-mono bg-slate-950 p-3 rounded-xl mt-3 text-teal-200">
            ln(2) ÷ 0.10 = 6.93147 years
          </p>
          <p className="text-sm mt-3">
            For growth, use the function marked eˣ. It is different from 10ˣ.
          </p>
        </article>
        <article className={panel}>
          <h3 className="font-semibold">4. SOLVE for a return or bond yield</h3>
          <ol className="list-decimal ml-5 mt-3 space-y-2 text-sm text-slate-300">
            <li>
              In COMP, enter a residual with X as the unknown decimal rate.
            </li>
            <li>For sample 73: 200000 × (1 − (1 + X)^(−3)) ÷ X − 350000.</li>
            <li>
              Invoke the function marked SOLVE and supply X≈0.30 as an initial
              estimate. Avoid X=0 because this expression divides by X.
            </li>
            <li>Result: X≈0.32689, or 32.69% (nearest printed B: 32.7%).</li>
            <li>
              Substitute X back into the expression: the residual should be
              close to zero.
            </li>
          </ol>
          <p className="text-xs text-amber-200 mt-3">
            SOLVE uses numerical approximation. A different initial estimate can
            matter; it may find only one root or fail to converge.
          </p>
        </article>
      </div>
      <p className="text-sm text-slate-400">
        CALC can evaluate stored expressions using entered variables; consult
        the manual’s CALC section before reusing a template. Expressions are
        cleared by mode changes or power-off.
      </p>
      <p className="text-xs text-slate-500">
        Reference: official Canon F-789SGA manual, SOLVE and CALC sections
        (printed pages 28–29). The instructions and examples you need are
        written above.
      </p>
    </section>
  );
}
export function EconomicsProblemCard({
  problem: p,
}: {
  problem: DriveSampleProblem;
}) {
  const [selected, setSelected] = useState<string | null>(null);
  return (
    <article className={panel}>
      <div className="flex justify-between gap-3 text-xs text-slate-400">
        <span>
          Problem {p.problemNumber} · {p.category}
        </span>
        <span>Day {p.weekDay}</span>
      </div>
      <p className="mt-3 text-base leading-relaxed">{p.question}</p>
      <div className="grid sm:grid-cols-2 gap-2 mt-4">
        {p.choices?.map((choice, j) => (
          <button
            aria-pressed={selected === "ABCD"[j]}
            key={choice}
            onClick={() => setSelected("ABCD"[j])}
            className={`text-left text-sm p-3 rounded-xl border ${selected === "ABCD"[j] ? "border-teal-400 bg-teal-950/40" : "border-slate-800 bg-slate-950/50"}`}
          >
            {choice}
          </button>
        ))}
      </div>
      <details className="mt-4 group">
        <summary className="cursor-pointer text-teal-300 font-medium text-sm py-2">
          Show formula, substitution & answer
        </summary>
        <div className="mt-3 space-y-4 border-t border-slate-800 pt-4">
          <section data-solution-stage="formula">
            <h4 className="text-sm font-semibold">1 · Formula</h4>
            <EconomicsMath formula={p.governingFormula} />
            <p className="text-xs text-slate-400">
              {p.formulaSymbols || formulaById[p.formulaId || ""].symbols}
            </p>
          </section>
          <section data-solution-stage="substitute">
            <h4 className="text-sm font-semibold">2 · Substitute the values</h4>
            {p.substitutionMath ? (
              <EconomicsMath formula={p.substitutionMath} />
            ) : (
              p.solutionSteps.map((step, j) => (
                <div key={j} className="mt-3">
                  <p className="text-sm text-slate-300">{step.explanation}</p>
                  {step.calculationMath && (
                    <EconomicsMath formula={step.calculationMath} />
                  )}
                </div>
              ))
            )}
          </section>
          <section
            data-solution-stage="answer"
            className={`rounded-xl p-4 ${p.correctLetter ? "bg-teal-950/40 border border-teal-900" : "bg-amber-950/30 border border-amber-900"}`}
          >
            <h4 className="text-sm font-semibold mb-2">3 · Answer</h4>
            <p className="font-semibold">
              {p.correctLetter
                ? `${p.answerStatus === "nearest-choice" ? "Nearest choice" : "Answer"}: ${p.correctLetter}`
                : "Source question needs a correction"}
            </p>
            <p className="mt-1">{p.finalAnswer}</p>
            {selected && p.correctLetter && (
              <p className="text-sm mt-1">
                {selected === p.correctLetter
                  ? "Your selected answer matches."
                  : `You selected ${selected}; compare your rate and timing with the solution.`}
              </p>
            )}
            {(p.assumption || p.answerStatus !== "matched") && (
              <p className="text-sm text-amber-200 mt-3 leading-relaxed">
                {p.shortcutSolution}
              </p>
            )}
          </section>
          <details className="rounded-xl border border-slate-800 p-4">
            <summary className="cursor-pointer text-sm text-teal-300">
              More explanation & calculator shortcut
            </summary>
            <div className="mt-4 space-y-4">
              <section>
                <h4 className="text-sm font-semibold">Given values</h4>
                <dl className="grid sm:grid-cols-2 gap-3 mt-3">
                  {p.given.map((item, j) => (
                    <div
                      key={j}
                      className="rounded-xl border border-slate-800 p-3 text-sm"
                    >
                      <dt className="text-xs text-slate-400">{item.meaning}</dt>
                      <dd className="mt-1 text-slate-200">{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </section>
              <div>
                <p className="text-xs uppercase tracking-wide text-slate-400">
                  Method and timing
                </p>
                <p className="text-sm mt-2 leading-relaxed">{p.shortcutSolution}</p>
                {p.assumption && (
                  <p className="text-xs text-amber-200 mt-2">
                    Read the stated convention or assumption before using the
                    answer.
                  </p>
                )}
              </div>
              <section>
                <h4 className="text-sm font-semibold">
                  Calculation details
                </h4>
                <p className="text-xs text-slate-400 mt-2">
                  Intermediate decimals below are shortened for reading. The answer
                  uses full precision.
                </p>
                <ol className="space-y-4 mt-4">
                  {p.solutionSteps.map((step, j) => (
                    <li key={j} className="border-l-2 border-teal-900 pl-4">
                      <p className="text-sm font-medium">
                        {j + 1}. {step.title}
                      </p>
                      <p className="text-sm leading-relaxed text-slate-400 mt-1">
                        {step.explanation}
                      </p>
                      {step.calculationMath && (
                        <EconomicsMath formula={step.calculationMath} />
                      )}
                    </li>
                  ))}
                </ol>
              </section>
              <div>
                <p className="text-xs uppercase tracking-wide text-slate-400">
                  Canon calculator shortcut
                </p>
                <p className="font-mono break-words bg-slate-950 p-4 rounded-xl text-sm text-teal-200 mt-2 leading-relaxed">
                  {p.calculatorEntry}
                </p>
                <p className="text-xs text-slate-400 mt-2">
                  {p.calculatorEntry?.includes("X")
                    ? "Use SOLVE; X is a decimal rate, so multiply the solved X by 100 for percent. Verify the residual."
                    : "Use the power key for ^, the negative-sign key for negative exponents, and eˣ or ln where shown. Press =; round only at the end."}
                </p>
              </div>
            </div>
          </details>
          <SourceSheet name={p.sourceFile} />
        </div>
      </details>
    </article>
  );
}
export function EconomicsPractice({ unlocked }: { unlocked: boolean }) {
  const [kind, setKind] = useState<"numbers" | "terms">("numbers");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [page, setPage] = useState(1);
  const filtered = DRIVE_SAMPLE_PROBLEMS.filter(
    (p) =>
      (category === "all" || p.formulaId === category) &&
      `${p.problemNumber} ${p.question} ${p.category}`
        .toLowerCase()
        .includes(search.toLowerCase()),
  );
  const terms = ECON_TERMS_QUESTIONS.filter((p) =>
    `${p.termNumber} ${p.question}`
      .toLowerCase()
      .includes(search.toLowerCase()),
  );
  const count = kind === "numbers" ? filtered.length : terms.length;
  const pages = Math.max(1, Math.ceil(count / 20));
  const safePage = Math.min(page, pages);
  return (
    <section id="economics-practice" className="space-y-5 scroll-mt-6">
      <div>
        <p className="text-xs uppercase tracking-widest text-teal-300">
          After the week plan
        </p>
        <h2 className="text-2xl font-semibold mt-1">
          Economics sample problems
        </h2>
        <p className="text-sm text-slate-400 mt-2">
          175 solving problems · 100 terms questions · full questions and
          solutions in this app
        </p>
      </div>
      {!unlocked ? (
        <div className={panel}>
          <LockKeyhole className="text-amber-300 mb-3" />
          <h3 className="font-semibold">
            Finish your seven-day plan to unlock practice
          </h3>
          <p className="text-sm text-slate-400 mt-2">
            Study each lesson, try its self-check, and mark the day complete.
            Then every sample problem will be available here.
          </p>
        </div>
      ) : (
        <>
          <div className="flex flex-wrap gap-2">
            {(["numbers", "terms"] as const).map((k) => (
              <button
                key={k}
                className={`${button} ${kind === k ? "bg-teal-950 text-teal-200 border-teal-600" : ""}`}
                onClick={() => {
                  setKind(k);
                  setPage(1);
                  setSearch("");
                  setCategory("all");
                }}
              >
                {k === "numbers" ? "Numerical · 175" : "Terms · 100"}
              </button>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search
                size={17}
                className="absolute left-3 top-3.5 text-slate-500"
              />
              <input
                aria-label="Search sample problems"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setPage(1);
                }}
                placeholder="Search number, phrase, or topic…"
                className="w-full pl-10 p-3 rounded-xl bg-slate-950 border border-slate-700"
              />
            </div>
            {kind === "numbers" && (
              <select
                aria-label="Filter problem topic"
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                  setPage(1);
                }}
                className="p-3 sm:max-w-xs rounded-xl bg-slate-950 border border-slate-700"
              >
                <option value="all">All topics</option>
                {ECONOMICS_FORMULAS.filter((f) =>
                  DRIVE_SAMPLE_PROBLEMS.some((p) => p.formulaId === f.id),
                ).map((f) => (
                  <option key={f.id} value={f.id}>
                    {f.title}
                  </option>
                ))}
              </select>
            )}
          </div>
          <p className="text-xs text-slate-400">
            {count} results · choose an option, then expand to check. Letters
            are independently calculated from the stated data, not an official
            answer key.
          </p>
          <div className="space-y-4">
            {kind === "numbers"
              ? filtered
                  .slice((safePage - 1) * 20, safePage * 20)
                  .map((p) => <EconomicsProblemCard key={p.id} problem={p} />)
              : terms.slice((safePage - 1) * 20, safePage * 20).map((p) => (
                  <article key={p.id} className={panel}>
                    <p className="text-xs text-slate-400">
                      Terms question {p.termNumber}
                    </p>
                    <p className="mt-3">{p.question}</p>
                    <div className="grid sm:grid-cols-2 gap-2 mt-4">
                      {p.choices.map((c) => (
                        <p
                          key={c}
                          className="p-3 rounded-xl border border-slate-800 text-sm"
                        >
                          {c}
                        </p>
                      ))}
                    </div>
                    <details className="mt-4">
                      <summary className="text-sm text-teal-300 cursor-pointer">
                        Show answer & explanation
                      </summary>
                      <p className="font-semibold mt-4">
                        {p.correctLetter
                          ? `Intended answer: ${p.correctLetter}`
                          : "No unique correct printed option"}
                      </p>
                      <p className="text-sm leading-relaxed text-slate-300 mt-2">
                        {p.examExplanation}
                      </p>
                      {p.sourceFile && <SourceSheet name={p.sourceFile} />}
                    </details>
                  </article>
                ))}
          </div>
          {count === 0 && <p>No questions match. Try another search.</p>}
          <div className="flex items-center justify-between gap-3">
            <button
              disabled={safePage === 1}
              className={`${button} disabled:opacity-30`}
              onClick={() => setPage(safePage - 1)}
            >
              Previous
            </button>
            <span className="text-sm text-slate-400">
              Page {safePage} of {pages}
            </span>
            <button
              disabled={safePage === pages}
              className={`${button} disabled:opacity-30`}
              onClick={() => setPage(safePage + 1)}
            >
              Next
            </button>
          </div>
        </>
      )}
    </section>
  );
}
export function EconomicsStudyHub({
  initialSection = "plan",
}: {
  initialSection?: "plan" | "references" | "calculator";
}) {
  const [completed, setCompleted] = useState<number[]>(readEconomicsProgress);
  const [activeDay, setActiveDay] = useState(1);
  const [section, setSection] = useState<
    "plan" | "formulas" | "calculator" | "references"
  >(initialSection);
  const lesson = ECONOMICS_LESSONS[activeDay - 1];
  const unlocked = completed.length === 7;
  const toggleDay = (day: number) => {
    const next = completed.includes(day)
      ? completed.filter((d) => d !== day)
      : [...completed, day];
    setCompleted(next);
    try {
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(next));
    } catch {
      /* Study remains usable if storage is disabled. */
    }
  };
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <header className="rounded-3xl border border-teal-900/70 bg-gradient-to-br from-teal-950/70 via-slate-900 to-slate-950 p-6 sm:p-8">
        <p className="text-xs uppercase tracking-[.2em] text-teal-300">
          ESAS · subject 01
        </p>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mt-3">
          Engineering Economics
        </h1>
        <p className="text-slate-300 text-sm sm:text-base mt-3 max-w-2xl leading-relaxed">
          One clear week. Learn the idea, follow a worked example, then build
          speed with all 175 solving problems and 100 terms questions right
          here.
        </p>
        <div className="flex items-center gap-3 mt-6">
          <div
            role="progressbar"
            aria-label="Week plan progress"
            aria-valuenow={completed.length}
            aria-valuemin={0}
            aria-valuemax={7}
            className="h-2 flex-1 max-w-sm bg-slate-800 rounded-full overflow-hidden"
          >
            <div
              className="h-full bg-teal-400 transition-all"
              style={{ width: `${(completed.length / 7) * 100}%` }}
            />
          </div>
          <span className="text-sm text-teal-200">
            {completed.length}/7 days complete
          </span>
        </div>
        <p className="text-xs text-slate-500 mt-3">
          Progress is stored on this device. The week is a study schedule; pace
          yourself as needed.
        </p>
      </header>
      <nav aria-label="Economics sections" className="flex flex-wrap gap-2">
        {[
          { id: "plan", label: "Week plan", icon: BookOpen },
          { id: "formulas", label: "Formula bank", icon: BookOpen },
          { id: "calculator", label: "Canon techniques", icon: Calculator },
          { id: "references", label: "Topic lessons", icon: BookOpen },
        ].map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setSection(id as typeof section)}
            className={`${button} flex items-center gap-2 ${section === id ? "bg-teal-950 border-teal-600 text-teal-200" : ""}`}
          >
            <Icon size={15} />
            {label}
          </button>
        ))}
      </nav>
      {section === "plan" ? (
        <>
          <div
            className="grid grid-cols-4 sm:grid-cols-7 gap-2"
            aria-label="Choose a study day"
          >
            {ECONOMICS_LESSONS.map((d) => (
              <button
                key={d.day}
                className={`rounded-xl p-3 border text-sm ${activeDay === d.day ? "border-teal-400 bg-teal-950/50" : "border-slate-800 bg-slate-900"}`}
                onClick={() => setActiveDay(d.day)}
              >
                <span className="flex items-center justify-center gap-1">
                  Day {d.day}
                  {completed.includes(d.day) && (
                    <Check size={14} className="text-teal-300" />
                  )}
                </span>
              </button>
            ))}
          </div>
          <section className={panel}>
            <p className="text-teal-300 text-xs uppercase tracking-widest">
              Day {lesson.day} · {lesson.subtitle}
            </p>
            <h2 className="text-2xl font-semibold mt-2">{lesson.title}</h2>
            <p className="text-slate-300 leading-relaxed mt-4">{lesson.idea}</p>
            <ol className="space-y-3 mt-5">
              {lesson.steps.map((s, j) => (
                <li key={s} className="flex gap-3 text-sm leading-relaxed">
                  <span className="flex-none w-6 h-6 rounded-full bg-teal-950 text-teal-300 flex items-center justify-center">
                    {j + 1}
                  </span>
                  <span>{s}</span>
                </li>
              ))}
            </ol>
            <div className="border-t border-slate-800 mt-6 pt-5">
              <p className="text-xs text-slate-400 mb-3">
                Cash-flow timing · payments at period-end unless specified
              </p>
              <div className="grid grid-cols-5 border-t-2 border-teal-700 pt-3 gap-2 text-center text-xs text-slate-400">
                {["0 · now", "1", "2", "…", "n · final"].map((x) => (
                  <div key={x}>
                    <span className="text-teal-200">{x}</span>
                    <p className="mt-1">
                      {x === "0 · now" ? "present P" : "payment / balance"}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className="space-y-4">
            <h3 className="font-semibold text-lg">Learn today’s topics</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {ECONOMICS_FORMULAS.filter((f) => f.day === lesson.day).map(
                (f) => (
                  <EconomicsTopicCard key={f.id} id={f.id} />
                ),
              )}
            </div>
          </section>
          <div className="grid md:grid-cols-2 gap-4">
            {lesson.examples.map((e) => (
              <article key={e.sourceNumber} className={panel}>
                <p className="text-xs text-slate-400">
                  Main handout · sample {e.sourceNumber}
                </p>
                <h3 className="mt-3 text-base leading-relaxed">{e.question}</h3>
                <details className="mt-4">
                  <summary className="text-teal-300 text-sm cursor-pointer">
                    Follow the shortcut solution
                  </summary>
                  <h4 className="text-sm font-semibold mt-4">1 · Formula</h4>
                  <EconomicsMath formula={e.formulaMath} />
                  <h4 className="text-sm font-semibold">2 · Substitute the values</h4>
                  <EconomicsMath formula={e.substitutionMath} />
                  <h4 className="text-sm font-semibold">3 · Answer</h4>
                  <p className="font-semibold mt-2">{e.answer}</p>
                  <details className="mt-4">
                    <summary className="text-sm text-teal-300 cursor-pointer">More explanation</summary>
                    <p className="text-sm text-slate-300 mt-2">{e.note}</p>
                  </details>
                </details>
                <SourceSheet name={e.source} />
              </article>
            ))}
          </div>
          <section className={panel}>
            <h3 className="font-semibold">Try it without looking</h3>
            <p className="text-sm mt-3">{lesson.check.question}</p>
            <details className="mt-3">
              <summary className="text-teal-300 text-sm cursor-pointer">
                Check my reasoning
              </summary>
              <p className="text-sm text-slate-300 mt-3">
                {lesson.check.answer}
              </p>
            </details>
            <div className="flex flex-wrap gap-3 mt-5">
              <button
                className={`${button} bg-teal-950 border-teal-600 text-teal-100`}
                onClick={() => toggleDay(lesson.day)}
              >
                {completed.includes(lesson.day)
                  ? `Day ${lesson.day} complete · undo`
                  : `Mark day ${lesson.day} complete`}
              </button>
              {activeDay < 7 && (
                <button
                  className={`${button} flex gap-2 items-center`}
                  onClick={() => setActiveDay(activeDay + 1)}
                >
                  Next lesson
                  <ChevronRight size={15} />
                </button>
              )}
            </div>
          </section>
          <details className={panel}>
            <summary className="cursor-pointer text-sm text-teal-300">
              Day {lesson.day} formulas · open your quick reference
            </summary>
            <div className="mt-5">
              <EconomicsFormulaBank day={lesson.day} />
            </div>
          </details>
          <EconomicsPractice unlocked={unlocked} />
        </>
      ) : section === "formulas" ? (
        <EconomicsFormulaBank />
      ) : section === "calculator" ? (
        <EconomicsCalculatorGuide />
      ) : (
        <EconomicsTopics />
      )}
    </div>
  );
}
