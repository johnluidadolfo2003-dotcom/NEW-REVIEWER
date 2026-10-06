import assert from "node:assert/strict";
import { economicsFormulaLatex } from "../src/utils/economicsMath";
import { ECONOMICS_TOPIC_NOTES } from "../src/data/economicsTopics";
import katex from "katex";
import { DRIVE_SAMPLE_PROBLEMS as problems } from "../src/data/driveSampleProblems";
import { ECON_TERMS_QUESTIONS as terms } from "../src/data/econTermsQuestions";
import {
  ECONOMICS_FORMULAS,
  formulaById,
  ECONOMICS_SOURCE_SHEETS,
} from "../src/data/economicsFormulas";
const value = (n: number) => problems[n - 1].resultValue!;
const close = (actual: number, expected: number, tolerance = 1e-7) =>
  assert.ok(
    Math.abs(actual - expected) < tolerance,
    `${actual} differs from ${expected}`,
  );
const present = (cash: number[], rate: number) =>
  cash.reduce((total, c, t) => total + c / (1 + rate) ** t, 0);
assert.deepEqual(
  problems.map((p) => p.problemNumber),
  Array.from({ length: 175 }, (_, i) => i + 1),
);
assert.deepEqual(
  terms.map((p) => p.termNumber),
  Array.from({ length: 100 }, (_, i) => i + 1),
);
for (const p of problems) {
  assert.ok(p.formulaId && formulaById[p.formulaId]);
  assert.ok(
    p.shortcutSolution && p.calculatorEntry && p.solutionSteps.length >= 3,
  );
  assert.ok(ECONOMICS_SOURCE_SHEETS.includes(p.sourceFile));
  if (p.answerStatus === "matched") assert.ok(p.correctLetter);
  if (
    ["choice-mismatch", "missing-given", "ambiguous"].includes(p.answerStatus!)
  )
    assert.equal(p.correctLetter, undefined);
  if (p.resultValue !== null) assert.ok(Number.isFinite(p.resultValue));
}
for (const t of terms)
  assert.ok(ECONOMICS_SOURCE_SHEETS.includes(t.sourceFile!));
// Independent cash-flow checks, without the annuity-factor helpers used to build the data.
close(value(3), present([0, ...Array(9).fill(30), 1030], 0.04));
close(present([-10000, ...Array(10).fill(value(5))], 0.05), 0);
close(present([-60000 + value(6), ...Array(11).fill(value(6))], 0.06), 0);
close(
  value(16),
  100000 + present([...Array(6).fill(0), ...Array(10).fill(8000)], 0.06),
);
close(value(97), present(Array(5).fill(2000), 0.04));
close(
  value(102),
  present([0, ...Array.from({ length: 8 }, (_, j) => 20000 + 1500 * j)], 0.07),
);
close(present([-350000, ...Array(3).fill(200000)], value(73) / 100), 0);
close(present([-1120, ...Array(9).fill(100), 1140], value(161) / 100), 0);
close(value(66), 100000 * 0.92 ** 3);
close(value(96), 500 * (Math.exp(0.25) - 1.05 ** 5));
assert.equal(value(167), 1228);
assert.equal(value(171), 33334);
assert.equal(value(172), 2369);
assert.equal(problems[94].answerStatus, "missing-given");
assert.equal(problems[157].answerStatus, "choice-mismatch");
assert.equal(terms[82].correctLetter, null);
assert.equal(terms[97].correctLetter, null);
// Ensure formula text remains syntactically renderable even with long names.
for (const f of ECONOMICS_FORMULAS)
  for (const latex of economicsFormulaLatex(f.formula))
    katex.renderToString(latex, { throwOnError: true, strict: "ignore" });
console.log(
  "PASS: 175 problems, 100 terms, formula/source coverage, and 15 independent numerical checks.",
);

assert.deepEqual(
  ECONOMICS_TOPIC_NOTES.map((t) => t.id).sort(),
  ECONOMICS_FORMULAS.map((f) => f.id).sort(),
);
for (const t of ECONOMICS_TOPIC_NOTES)
  assert.ok(
    t.idea && t.recognize && t.example && t.steps.length >= 3 && t.answer,
  );
