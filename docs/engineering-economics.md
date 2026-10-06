# Engineering Economics content and verification

The app opens on the economics week plan. The main ESAS handout determines the lesson order and formulas. Practice appears below the plan after all seven days have been marked complete. Progress uses device-local storage; malformed or duplicate progress values cannot bypass the gate.

## References

- Main reference: ESAS Engineering Economics handout. IMG_0766 is the cover; IMG_0767–IMG_0775 are the nine handout pages.
- Economics Sample Problem sheets. IMG_0778–IMG_0784 contain numerical problems 1–175. IMG_0785–IMG_0787 contain terms questions 1–100. These are the supplementary practice reference.
- [Official Canon F-789SGA manual](https://ij.manual.canon/cal/webmanual/WebPortal/pdf/F-789SGA%20(EXP)_EN.pdf), especially COMP, SOLVE, and CALC. The user's model spelling was interpreted as F-789SGA and that assumption is visible in the guide. Entries are checked mathematically; they have not been tested on physical calculator hardware.

The 275 sample questions were transcribed from the supplied photos, with minor wording cleanup. They replace the previous incomplete numerical data and generic generated terms. Sample-sheet numbering and option order are preserved. Each problem records its source filename. Fourteen selected handout examples are worked within the week plan, supplemented by an in-app worked teaching example for each of the 25 topics.

All 25 topic explanations, formulas, and worked teaching examples are written inside the app, both in the week lessons and a searchable Topic Lessons section. All 175 solving problems and 100 terms questions are rendered in the app with expandable solutions. Study screens do not link out to Drive or require reading external pages. Original scans remain in Drive and are not copied into this public repository because they include contact information. Source filenames are shown only as provenance.

## Answer policy

Solutions are derived from the stated data, not copied from an official PRC answer key. A matching choice is distinguished from the nearest printed choice. Tiny discrepancies attributable to printed factors, rounding, or transcription in the source are labeled approximate and retain the calculated result. Explicit approximate-choice questions retain their nearest-choice instruction. Larger inconsistencies or missing inputs do not receive a forced letter.

Important source issues include:

- Numerical 19, 64, 113, 124 and 158: no matching choice under the stated values/conventions.
- Numerical 69: “present day pesos” is ambiguous without a stated purchasing-power/discount convention. Nominal interest is shown with an explanation.
- Numerical 95: no target amount is supplied, so time cannot be determined.
- Numerical 171 and 172: printed choices round down; the minimum whole-unit quantities must round up.
- Numerical 40: the source prints “34 years” while asking the end of year 4. The worked calculation explicitly uses four years.
- Numerical 55: both day bases are discussed; ordinary 360-day interest matches the intended printed option.
- Numerical 66: double declining balance uses 2/n, not a salvage-derived declining-balance percentage.
- Terms 27, 59, 83 and 98: no unique defensible printed answer is given. The explanations identify missing or overlapping terminology.
- Terms involving partnership liability, accounting ratios or industry conventions are identified as classroom/handout descriptions rather than universal current legal or financial rules.
- Main handout sample 13 requests annual withdrawals but prints choices that do not fit that cash-flow timing. The annual-payment calculation is shown explicitly.

## Maintenance

`src/data/economicsFormulas.ts` is the shared formula bank; `src/utils/economicsMath.ts` supplies checked KaTeX expressions. Sample solutions, their calculator entries, topic filters and day assignments use the same formula IDs.

To edit the numerical or terms content, change `scripts/economics-problems.tsv`, `scripts/economics-givens.tsv`, or `scripts/economics-terms.tsv`, then run:

```sh
python scripts/build-economics.py
npm run test:economics
npm run lint
npm run build
```

The build script evaluates trusted, checked-in expressions at generation time; the app does not evaluate user-supplied math strings. Numerical tests compare representative annuity, deferred-payment, return and bond calculations with independent cash-flow sums. Coverage checks require all 175 numerical and 100 terms numbers, a real source-sheet reference, and a formula for every numerical question. Interaction tests cover completion, unlock/relock, local persistence, search, hidden expanded answers, terms, calculator instructions, formula rendering all 25 topic lessons, all 175 numerical and 100 terms questions across their practice pages, and the absence of Drive review links.

## Easy-to-follow numerical solutions

All 175 numerical questions include curated, named givens; a timing/method explanation; the shared formula; a mathematically formatted substitution; short arithmetic steps with intermediate values; and a separate Canon shortcut entry. The calculation steps use the same checked expression as the answer, preserve full precision internally, and shorten intermediate decimals only for display. Rate-of-return and bond-yield solutions explicitly verify their present-worth residual. Minimum whole-unit break-even answers show the upward-rounding step. Missing-data questions explain why calculation must stop.

`economics_solution_steps.py` builds these teaching calculations; no expression evaluation is performed in the app. Formula and arithmetic rendering is checked for every solution. The 175 original questions, choices, final results, answer letters and discrepancy classifications are preserved by this presentation update.
