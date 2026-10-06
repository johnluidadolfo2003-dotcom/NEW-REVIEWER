# Engineering Economics content and verification

The app opens on the economics week plan. The main ESAS handout determines the lesson order and formulas. Practice appears below the plan after all seven days have been marked complete. Progress uses device-local storage; malformed or duplicate progress values cannot bypass the gate.

## References

- Main reference: [ESAS Engineering Economics](https://drive.google.com/drive/folders/13xPdd6pHRaJ_HsX3cmFlluqZ93tCATBG). IMG_0766 is the cover; IMG_0767–IMG_0775 are the nine handout pages.
- [Economics Sample Problem](https://drive.google.com/drive/folders/1dmr64S1v8SQRP3KTx4ZdRQ56SntGwwZa). IMG_0778–IMG_0784 contain numerical problems 1–175. IMG_0785–IMG_0787 contain terms questions 1–100. These are the supplementary practice reference.
- [Official Canon F-789SGA manual](https://ij.manual.canon/cal/webmanual/WebPortal/pdf/F-789SGA%20(EXP)_EN.pdf), especially COMP, SOLVE, and CALC. The user's model spelling was interpreted as F-789SGA and that assumption is visible in the guide. Entries are checked mathematically; they have not been tested on physical calculator hardware.

The 275 sample questions were transcribed from the supplied photos, with minor wording cleanup. They replace the previous incomplete numerical data and generic generated terms. Sample-sheet numbering and option order are preserved. Each problem records its source filename. The handout's additional exercises are accessible through its original Drive pages; 14 selected handout examples are worked within the week plan.

Original scans remain in Drive. They are not copied into this public repository because they include contact information. Source references identify the sheet and open the correct folder.

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

To edit the numerical or terms content, change `scripts/economics-problems.tsv` or `scripts/economics-terms.tsv`, then run:

```sh
python scripts/build-economics.py
npm run test:economics
npm run lint
npm run build
```

The build script evaluates trusted, checked-in expressions at generation time; the app does not evaluate user-supplied math strings. Numerical tests compare representative annuity, deferred-payment, return and bond calculations with independent cash-flow sums. Coverage checks require all 175 numerical and 100 terms numbers, a real source-sheet reference, and a formula for every numerical question. Interaction tests cover completion, unlock/relock, local persistence, search, hidden expanded answers, terms, calculator instructions, formula rendering and all 20 sheet references.
