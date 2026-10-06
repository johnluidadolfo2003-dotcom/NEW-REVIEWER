import { DriveSampleProblem } from '../types';
import { formulaById } from './economicsFormulas';
export const DRIVE_SAMPLE_PROBLEMS: DriveSampleProblem[] = [
  {
    "id": "econ-sample-001",
    "problemNumber": 1,
    "sourceFile": "IMG_0778.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "real",
    "topicTitle": "real",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "In year zero, invest ₱10,000 in a 15% security for 5 years. Average annual inflation is 6%. How much is the maturity balance in year-zero pesos?",
    "choices": [
      "A. 15030.03",
      "B. 20113.57",
      "C. 18289.05",
      "D. 16892.34"
    ],
    "correctLetter": "A",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "real",
    "resultValue": 15030.030969122607,
    "calculatorEntry": "10000  ×  (1.15  ÷  1.06) ^ 5",
    "shortcutSolution": "Discount the nominal maturity amount by inflation; do not merely subtract 6% from 15%.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Discount the nominal maturity amount by inflation; do not merely subtract 6% from 15%."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "10000  ×  (1.15  ÷  1.06) ^ 5"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "₱15,030.03"
      }
    ],
    "finalAnswer": "₱15,030.03",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "10000  ×  (1.15  ÷  1.06) ^ 5",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "₱15,030.03",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Discount the nominal maturity amount by inflation; do not merely subtract 6% from 15%."
  },
  {
    "id": "econ-sample-002",
    "problemNumber": 2,
    "sourceFile": "IMG_0778.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "sl",
    "topicTitle": "sl",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "A machine was sold for $10,000 after 5 years. Its straight-line depreciation charge was $4,000 annually. Determine the original cost.",
    "choices": [
      "A. 25000",
      "B. 35000",
      "C. 30000",
      "D. 40000"
    ],
    "correctLetter": "C",
    "answerStatus": "matched",
    "assumption": true,
    "formulaId": "sl",
    "resultValue": 30000,
    "calculatorEntry": "10000 + 5  ×  4000",
    "shortcutSolution": "Treat the sale price as the remaining value, as intended by the problem.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Treat the sale price as the remaining value, as intended by the problem."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "10000 + 5  ×  4000"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "$30,000.00"
      }
    ],
    "finalAnswer": "$30,000.00",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "10000 + 5  ×  4000",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "$30,000.00",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Treat the sale price as the remaining value, as intended by the problem."
  },
  {
    "id": "econ-sample-003",
    "problemNumber": 3,
    "sourceFile": "IMG_0778.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "bond",
    "topicTitle": "bond",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "A $1,000 bond pays a 6% coupon semiannually and matures in 5 years. Find its price at an 8% nominal annual yield.",
    "choices": [
      "A. 918.89",
      "B. 942.47",
      "C. 981.54",
      "D. 938.65"
    ],
    "correctLetter": "A",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "bond",
    "resultValue": 918.8910422064497,
    "calculatorEntry": "30  ×  ((1 - (1 + 0.04) ^ (-10))  ÷  0.04) + 1000  ÷  1.04 ^ 10",
    "shortcutSolution": "Coupon = 1000(0.06)/2; yield per period = 0.08/2; periods = 10.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Coupon = 1000(0.06)/2; yield per period = 0.08/2; periods = 10."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "30  ×  ((1 - (1 + 0.04) ^ (-10))  ÷  0.04) + 1000  ÷  1.04 ^ 10"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "$918.89"
      }
    ],
    "finalAnswer": "$918.89",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "30  ×  ((1 - (1 + 0.04) ^ (-10))  ÷  0.04) + 1000  ÷  1.04 ^ 10",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "$918.89",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Coupon = 1000(0.06)/2; yield per period = 0.08/2; periods = 10."
  },
  {
    "id": "econ-sample-004",
    "problemNumber": 4,
    "sourceFile": "IMG_0778.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "irr",
    "topicTitle": "irr",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "Invest $350,000 and receive $200,000 at each year-end for 3 years. What is the nearest annual rate of return?",
    "choices": [
      "A. 15",
      "B. 33",
      "C. 57",
      "D. 42"
    ],
    "correctLetter": "B",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "irr",
    "resultValue": 32.675160635692976,
    "calculatorEntry": "200000 × (1 − (1 + X)^(−3)) ÷ X − 350000 = 0",
    "shortcutSolution": "Solve 200000(P/A,X,3)−350000=0; use X≈0.3 initially. Nearest whole-percent choice.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Solve 200000(P/A,X,3)−350000=0; use X≈0.3 initially. Nearest whole-percent choice."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "200000 × (1 − (1 + X)^(−3)) ÷ X − 350000 = 0"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "32.68%"
      }
    ],
    "finalAnswer": "32.68%",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "200000 × (1 − (1 + X)^(−3)) ÷ X − 350000 = 0",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "32.68%",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Solve 200000(P/A,X,3)−350000=0; use X≈0.3 initially. Nearest whole-percent choice."
  },
  {
    "id": "econ-sample-005",
    "problemNumber": 5,
    "sourceFile": "IMG_0778.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "cr",
    "topicTitle": "cr",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "Amortize a ₱10,000 debt at 10% compounded semiannually by equal semiannual payments over 5 years. First payment is in 6 months. Find each payment.",
    "choices": [
      "A. 1234.09",
      "B. 1255.90",
      "C. 1275.68",
      "D. 1295.05"
    ],
    "correctLetter": "D",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "cr",
    "resultValue": 1295.0457496545662,
    "calculatorEntry": "10000  ×  (0.05  ÷  (1 - (1 + 0.05) ^ (-10)))",
    "shortcutSolution": "i = 0.10/2 and n = 5×2; ordinary annuity.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "i = 0.10/2 and n = 5×2; ordinary annuity."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "10000  ×  (0.05  ÷  (1 - (1 + 0.05) ^ (-10)))"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "₱1,295.05"
      }
    ],
    "finalAnswer": "₱1,295.05",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "10000  ×  (0.05  ÷  (1 - (1 + 0.05) ^ (-10)))",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "₱1,295.05",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "i = 0.10/2 and n = 5×2; ordinary annuity."
  },
  {
    "id": "econ-sample-006",
    "problemNumber": 6,
    "sourceFile": "IMG_0778.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "due",
    "topicTitle": "due",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "A $60,000 machine is paid by 12 quarterly installments at the beginning of each period. Interest is 24% compounded quarterly. Find each payment.",
    "choices": [
      "A. 7371.91",
      "B. 7521.51",
      "C. 6412.31",
      "D. 6751.53"
    ],
    "correctLetter": "D",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "due",
    "resultValue": 6751.529964943219,
    "calculatorEntry": "60000  ×  (0.06  ÷  (1 - (1 + 0.06) ^ (-12)))  ÷  1.06",
    "shortcutSolution": "Divide the ordinary payment by 1+i because every payment is one period earlier.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Divide the ordinary payment by 1+i because every payment is one period earlier."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "60000  ×  (0.06  ÷  (1 - (1 + 0.06) ^ (-12)))  ÷  1.06"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "$6,751.53"
      }
    ],
    "finalAnswer": "$6,751.53",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "60000  ×  (0.06  ÷  (1 - (1 + 0.06) ^ (-12)))  ÷  1.06",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "$6,751.53",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Divide the ordinary payment by 1+i because every payment is one period earlier."
  },
  {
    "id": "econ-sample-007",
    "problemNumber": 7,
    "sourceFile": "IMG_0778.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "syd",
    "topicTitle": "syd",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "An asset costs ₱10,000, lasts 20 years, and has zero salvage. Find the third-year depreciation using SYD.",
    "choices": [
      "A. 857.14",
      "B. 862.19",
      "C. 871.11",
      "D. 880"
    ],
    "correctLetter": "A",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "syd",
    "resultValue": 857.1428571428571,
    "calculatorEntry": "10000  ×  18  ÷  210",
    "shortcutSolution": "Year 3 uses the digit 20−3+1=18; SYD = 20×21/2.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Year 3 uses the digit 20−3+1=18; SYD = 20×21/2."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "10000  ×  18  ÷  210"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "₱857.14"
      }
    ],
    "finalAnswer": "₱857.14",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "10000  ×  18  ÷  210",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "₱857.14",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Year 3 uses the digit 20−3+1=18; SYD = 20×21/2."
  },
  {
    "id": "econ-sample-008",
    "problemNumber": 8,
    "sourceFile": "IMG_0778.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "euac",
    "topicTitle": "euac",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "Equipment costs ₱15,000, lasts 6 years, and has ₱2,000 salvage. At 12%, find the nearest equivalent uniform annual cost.",
    "choices": [
      "A. 1500",
      "B. 2500",
      "C. 3500",
      "D. 4500"
    ],
    "correctLetter": "C",
    "answerStatus": "nearest-choice",
    "assumption": false,
    "formulaId": "euac",
    "resultValue": 3401.9343395201786,
    "calculatorEntry": "15000  ×  (0.12  ÷  (1 - (1 + 0.12) ^ (-6))) - 2000  ×  (0.12  ÷  ((1 + 0.12) ^ 6 - 1))",
    "shortcutSolution": "Annualize the purchase and subtract annualized salvage. Select the nearest stated choice. Closest printed choice C is 3500; the unrounded calculated result is 3,401.93433952. This choice is approximate, not an exact match.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Annualize the purchase and subtract annualized salvage. Select the nearest stated choice. Closest printed choice C is 3500; the unrounded calculated result is 3,401.93433952. This choice is approximate, not an exact match."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "15000  ×  (0.12  ÷  (1 - (1 + 0.12) ^ (-6))) - 2000  ×  (0.12  ÷  ((1 + 0.12) ^ 6 - 1))"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "₱3,401.93"
      }
    ],
    "finalAnswer": "₱3,401.93",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "15000  ×  (0.12  ÷  (1 - (1 + 0.12) ^ (-6))) - 2000  ×  (0.12  ÷  ((1 + 0.12) ^ 6 - 1))",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "₱3,401.93",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Annualize the purchase and subtract annualized salvage. Select the nearest stated choice. Closest printed choice C is 3500; the unrounded calculated result is 3,401.93433952. This choice is approximate, not an exact match."
  },
  {
    "id": "econ-sample-009",
    "problemNumber": 9,
    "sourceFile": "IMG_0778.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "cc",
    "topicTitle": "cc",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "At 6%, find the capitalized cost of a ₱250 million bridge requiring ₱100 million rebuilding every 20 years.",
    "choices": [
      "A. 275.3",
      "B. 265.5",
      "C. 295.3",
      "D. 282.1"
    ],
    "correctLetter": "C",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "cc",
    "resultValue": 295.307594961419,
    "calculatorEntry": "250 + 100  ÷  (1.06 ^ 20 - 1)",
    "shortcutSolution": "The first rebuilding occurs at year 20, then repeats indefinitely.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "The first rebuilding occurs at year 20, then repeats indefinitely."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "250 + 100  ÷  (1.06 ^ 20 - 1)"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "₱295.31 million"
      }
    ],
    "finalAnswer": "₱295.31 million",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "250 + 100  ÷  (1.06 ^ 20 - 1)",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "₱295.31 million",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "The first rebuilding occurs at year 20, then repeats indefinitely."
  },
  {
    "id": "econ-sample-010",
    "problemNumber": 10,
    "sourceFile": "IMG_0778.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "cr",
    "topicTitle": "cr",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "A ₱1 million house loan charges 12% compounded annually. Find the monthly payment over 10 years.",
    "choices": [
      "A. 13994.17",
      "B. 14801.12",
      "C. 13720.15",
      "D. 14078.78"
    ],
    "correctLetter": "A",
    "answerStatus": "nearest-choice",
    "assumption": false,
    "formulaId": "cr",
    "resultValue": 13994.717386775068,
    "calculatorEntry": "1000000  ×  ((1.12 ^ (1  ÷  12) - 1)  ÷  (1 - (1 + (1.12 ^ (1  ÷  12) - 1)) ^ (-120)))",
    "shortcutSolution": "Annual compounding means effective monthly i = 1.12^(1/12)−1, not 0.12/12. Closest printed choice A is 13994.17; the unrounded calculated result is 13,994.71738678. This choice is approximate, not an exact match.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Annual compounding means effective monthly i = 1.12^(1/12)−1, not 0.12/12. Closest printed choice A is 13994.17; the unrounded calculated result is 13,994.71738678. This choice is approximate, not an exact match."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "1000000  ×  ((1.12 ^ (1  ÷  12) - 1)  ÷  (1 - (1 + (1.12 ^ (1  ÷  12) - 1)) ^ (-120)))"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "₱13,994.72"
      }
    ],
    "finalAnswer": "₱13,994.72",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "1000000  ×  ((1.12 ^ (1  ÷  12) - 1)  ÷  (1 - (1 + (1.12 ^ (1  ÷  12) - 1)) ^ (-120)))",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "₱13,994.72",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Annual compounding means effective monthly i = 1.12^(1/12)−1, not 0.12/12. Closest printed choice A is 13994.17; the unrounded calculated result is 13,994.71738678. This choice is approximate, not an exact match."
  },
  {
    "id": "econ-sample-011",
    "problemNumber": 11,
    "sourceFile": "IMG_0778.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "sl",
    "topicTitle": "sl",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "A machine cost ₱120,000 five years ago, has ₱10,000 salvage after 10 years, and is sold now for ₱30,000. Find the unrecovered depreciation (“sink cost” in the sheet), using straight line.",
    "choices": [
      "A. 21000",
      "B. 30000",
      "C. 35000",
      "D. 25000"
    ],
    "correctLetter": "C",
    "answerStatus": "matched",
    "assumption": true,
    "formulaId": "sl",
    "resultValue": 35000.0,
    "calculatorEntry": "120000 - 5  ×  (120000 - 10000)  ÷  10 - 30000",
    "shortcutSolution": "Book value is ₱65,000. The loss versus book value is ₱35,000. This is the sheet's intended unrecovered-loss calculation; sunk cost generally means an unrecoverable past expenditure.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Book value is ₱65,000. The loss versus book value is ₱35,000. This is the sheet's intended unrecovered-loss calculation; sunk cost generally means an unrecoverable past expenditure."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "120000 - 5  ×  (120000 - 10000)  ÷  10 - 30000"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "₱35,000.00"
      }
    ],
    "finalAnswer": "₱35,000.00",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "120000 - 5  ×  (120000 - 10000)  ÷  10 - 30000",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "₱35,000.00",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Book value is ₱65,000. The loss versus book value is ₱35,000. This is the sheet's intended unrecovered-loss calculation; sunk cost generally means an unrecoverable past expenditure."
  },
  {
    "id": "econ-sample-012",
    "problemNumber": 12,
    "sourceFile": "IMG_0778.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "syd",
    "topicTitle": "syd",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "With no salvage, annual SYD depreciation must never exceed 20% of first cost. Find the minimum useful life.",
    "choices": [
      "A. 7",
      "B. 8",
      "C. 9",
      "D. 10"
    ],
    "correctLetter": "C",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "syd",
    "resultValue": 9,
    "calculatorEntry": "9",
    "shortcutSolution": "The largest charge is the first: 2/(n+1)≤0.20, so n≥9.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "The largest charge is the first: 2/(n+1)≤0.20, so n≥9."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "9"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "9.00 years"
      }
    ],
    "finalAnswer": "9.00 years",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "9",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "9.00 years",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "The largest charge is the first: 2/(n+1)≤0.20, so n≥9."
  },
  {
    "id": "econ-sample-013",
    "problemNumber": 13,
    "sourceFile": "IMG_0778.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "simple",
    "topicTitle": "simple",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "An item is payable in 100 days, with a 3% discount if paid in 31 days. Find the annual simple interest charged.",
    "choices": [
      "A. 12.15",
      "B. 6.25",
      "C. 22.32",
      "D. 16.14"
    ],
    "correctLetter": "D",
    "answerStatus": "matched",
    "assumption": true,
    "formulaId": "simple",
    "resultValue": 16.136261766024205,
    "calculatorEntry": "0.03  ÷  0.97  ×  (360  ÷  69)  ×  100",
    "shortcutSolution": "The extra 69 days cost 3% of the full price, but the financed principal is 97% of that price. Use the ordinary 360-day convention.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "The extra 69 days cost 3% of the full price, but the financed principal is 97% of that price. Use the ordinary 360-day convention."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "0.03  ÷  0.97  ×  (360  ÷  69)  ×  100"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "16.14%"
      }
    ],
    "finalAnswer": "16.14%",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "0.03  ÷  0.97  ×  (360  ÷  69)  ×  100",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "16.14%",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "The extra 69 days cost 3% of the full price, but the financed principal is 97% of that price. Use the ordinary 360-day convention."
  },
  {
    "id": "econ-sample-014",
    "problemNumber": 14,
    "sourceFile": "IMG_0778.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "rate",
    "topicTitle": "rate",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "Convert 12% nominal annual interest compounded semiannually to an equivalent nominal annual rate compounded quarterly.",
    "choices": [
      "A. 19.23",
      "B. 23.56",
      "C. 14.67",
      "D. 11.83"
    ],
    "correctLetter": "D",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "rate",
    "resultValue": 11.825205639479996,
    "calculatorEntry": "4  ×  (1.06 ^ 0.5 - 1)  ×  100",
    "shortcutSolution": "Match annual growth: (1+r/4)^4 = (1+0.12/2)^2.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Match annual growth: (1+r/4)^4 = (1+0.12/2)^2."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "4  ×  (1.06 ^ 0.5 - 1)  ×  100"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "11.83%"
      }
    ],
    "finalAnswer": "11.83%",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "4  ×  (1.06 ^ 0.5 - 1)  ×  100",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "11.83%",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Match annual growth: (1+r/4)^4 = (1+0.12/2)^2."
  },
  {
    "id": "econ-sample-015",
    "problemNumber": 15,
    "sourceFile": "IMG_0778.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "fa",
    "topicTitle": "fa",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "Find the accumulated amount of a 5-year ordinary annuity paying ₱6,000 annually at 15%.",
    "choices": [
      "A. 40519.21",
      "B. 40681.29",
      "C. 40454.29",
      "D. 40329.10"
    ],
    "correctLetter": "C",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "fa",
    "resultValue": 40454.28749999998,
    "calculatorEntry": "6000  ×  (((1 + 0.15) ^ 5 - 1)  ÷  0.15)",
    "shortcutSolution": "Five end-of-year deposits; use F/A.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Five end-of-year deposits; use F/A."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "6000  ×  (((1 + 0.15) ^ 5 - 1)  ÷  0.15)"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "₱40,454.29"
      }
    ],
    "finalAnswer": "₱40,454.29",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "6000  ×  (((1 + 0.15) ^ 5 - 1)  ÷  0.15)",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "₱40,454.29",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Five end-of-year deposits; use F/A."
  },
  {
    "id": "econ-sample-016",
    "problemNumber": 16,
    "sourceFile": "IMG_0778.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "deferred",
    "topicTitle": "deferred",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "A lot is paid by ₱100,000 now plus ten ₱8,000 semiannual payments starting 3 years from now. Find present value at 12% compounded semiannually.",
    "choices": [
      "A. 142999.08",
      "B. 143104.89",
      "C. 142189.67",
      "D. 143999.08"
    ],
    "correctLetter": "D",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "deferred",
    "resultValue": 143999.0816174022,
    "calculatorEntry": "100000 + 8000  ×  ((1 - (1 + 0.06) ^ (-10))  ÷  0.06)  ÷  1.06 ^ 5",
    "shortcutSolution": "First payment is at period 6. The annuity value is at period 5, so discount five periods.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "First payment is at period 6. The annuity value is at period 5, so discount five periods."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "100000 + 8000  ×  ((1 - (1 + 0.06) ^ (-10))  ÷  0.06)  ÷  1.06 ^ 5"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "₱143,999.08"
      }
    ],
    "finalAnswer": "₱143,999.08",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "100000 + 8000  ×  ((1 - (1 + 0.06) ^ (-10))  ÷  0.06)  ÷  1.06 ^ 5",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "₱143,999.08",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "First payment is at period 6. The annuity value is at period 5, so discount five periods."
  },
  {
    "id": "econ-sample-017",
    "problemNumber": 17,
    "sourceFile": "IMG_0778.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "db",
    "topicTitle": "db",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "A $720,000 machine lasts 10 years and depreciates at 25% of book value annually. Find total depreciation over its life.",
    "choices": [
      "A. 679454",
      "B. 667245",
      "C. 672125",
      "D. 681582"
    ],
    "correctLetter": "A",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "db",
    "resultValue": 679454.2694091797,
    "calculatorEntry": "720000  ×  (1 - 0.75 ^ 10)",
    "shortcutSolution": "Total depreciation = first cost minus remaining book value; do not sum ten equal charges.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Total depreciation = first cost minus remaining book value; do not sum ten equal charges."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "720000  ×  (1 - 0.75 ^ 10)"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "$679,454.27"
      }
    ],
    "finalAnswer": "$679,454.27",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "720000  ×  (1 - 0.75 ^ 10)",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "$679,454.27",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Total depreciation = first cost minus remaining book value; do not sum ten equal charges."
  },
  {
    "id": "econ-sample-018",
    "problemNumber": 18,
    "sourceFile": "IMG_0778.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "euac",
    "topicTitle": "euac",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "A motor costs ₱5,000, lasts 2 years, and has ₱800 salvage. At 4%, how much can be paid for an equivalent 3-year motor with ₱1,000 salvage?",
    "choices": [
      "A. 7892.13",
      "B. 7157.40",
      "C. 7489.21",
      "D. 7300.12"
    ],
    "correctLetter": "B",
    "answerStatus": "nearest-choice",
    "assumption": false,
    "formulaId": "euac",
    "resultValue": 7157.437280783955,
    "calculatorEntry": "(5000  ×  (0.04  ÷  (1 - (1 + 0.04) ^ (-2))) - 800  ×  (0.04  ÷  ((1 + 0.04) ^ 2 - 1)) + 1000  ×  (0.04  ÷  ((1 + 0.04) ^ 3 - 1)))  ÷  (0.04  ÷  (1 - (1 + 0.04) ^ (-3)))",
    "shortcutSolution": "Set both annual costs equal; solve for the new first cost. Closest printed choice B is 7157.40; the unrounded calculated result is 7,157.43728078. This choice is approximate, not an exact match.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Set both annual costs equal; solve for the new first cost. Closest printed choice B is 7157.40; the unrounded calculated result is 7,157.43728078. This choice is approximate, not an exact match."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "(5000  ×  (0.04  ÷  (1 - (1 + 0.04) ^ (-2))) - 800  ×  (0.04  ÷  ((1 + 0.04) ^ 2 - 1)) + 1000  ×  (0.04  ÷  ((1 + 0.04) ^ 3 - 1)))  ÷  (0.04  ÷  (1 - (1 + 0.04) ^ (-3)))"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "₱7,157.44"
      }
    ],
    "finalAnswer": "₱7,157.44",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "(5000  ×  (0.04  ÷  (1 - (1 + 0.04) ^ (-2))) - 800  ×  (0.04  ÷  ((1 + 0.04) ^ 2 - 1)) + 1000  ×  (0.04  ÷  ((1 + 0.04) ^ 3 - 1)))  ÷  (0.04  ÷  (1 - (1 + 0.04) ^ (-3)))",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "₱7,157.44",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Set both annual costs equal; solve for the new first cost. Closest printed choice B is 7157.40; the unrounded calculated result is 7,157.43728078. This choice is approximate, not an exact match."
  },
  {
    "id": "econ-sample-019",
    "problemNumber": 19,
    "sourceFile": "IMG_0778.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "cc",
    "topicTitle": "cc",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "A textile plant installs a boiler for ₱300,000. Life is 15 years and salvage is ₱30,000. Find capitalized cost at 18% annually.",
    "choices": [
      "A. 323500.33",
      "B. 322549.33",
      "C. 332509.33",
      "D. 341240.33"
    ],
    "correctLetter": null,
    "answerStatus": "choice-mismatch",
    "assumption": true,
    "formulaId": "cc",
    "resultValue": 324604.17377949867,
    "calculatorEntry": "300000 + 270000  ÷  (1.18 ^ 15 - 1)",
    "shortcutSolution": "Assume identical replacement indefinitely; net replacement = cost minus salvage. No printed choice matches the calculated result at its stated precision. Check the original sheet; do not force a letter.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Assume identical replacement indefinitely; net replacement = cost minus salvage. No printed choice matches the calculated result at its stated precision. Check the original sheet; do not force a letter."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "300000 + 270000  ÷  (1.18 ^ 15 - 1)"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "₱324,604.17"
      }
    ],
    "finalAnswer": "₱324,604.17",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "300000 + 270000  ÷  (1.18 ^ 15 - 1)",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "₱324,604.17",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Assume identical replacement indefinitely; net replacement = cost minus salvage. No printed choice matches the calculated result at its stated precision. Check the original sheet; do not force a letter."
  },
  {
    "id": "econ-sample-020",
    "problemNumber": 20,
    "sourceFile": "IMG_0778.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "continuous",
    "topicTitle": "continuous",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "Borrow ₱500,000 at 12% compounded continuously. How much is owed after 5 years?",
    "choices": [
      "A. 910059.40",
      "B. 911059.40",
      "C. 912059.40",
      "D. 913059.40"
    ],
    "correctLetter": "B",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "continuous",
    "resultValue": 911059.4001952545,
    "calculatorEntry": "500000  ×  e^(0.12  ×  5)",
    "shortcutSolution": "Use e^(rt), with r as a decimal.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Use e^(rt), with r as a decimal."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "500000  ×  e^(0.12  ×  5)"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "₱911,059.40"
      }
    ],
    "finalAnswer": "₱911,059.40",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "500000  ×  e^(0.12  ×  5)",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "₱911,059.40",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Use e^(rt), with r as a decimal."
  },
  {
    "id": "econ-sample-021",
    "problemNumber": 21,
    "sourceFile": "IMG_0778.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "sl",
    "topicTitle": "sl",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "A machine has ₱12,000 salvage after 6 years and book value ₱30,833.33 after 5 years. Find its first cost using straight line.",
    "choices": [
      "A. 125500",
      "B. 125000",
      "C. 135500",
      "D. 135000"
    ],
    "correctLetter": "B",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "sl",
    "resultValue": 124999.98000000001,
    "calculatorEntry": "6  ×  30833.33 - 5  ×  12000",
    "shortcutSolution": "BV5 = C−5(C−S)/6; rearrange to C = 6BV5−5S. Book value was rounded in the question.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "BV5 = C−5(C−S)/6; rearrange to C = 6BV5−5S. Book value was rounded in the question."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "6  ×  30833.33 - 5  ×  12000"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "₱124,999.98"
      }
    ],
    "finalAnswer": "₱124,999.98",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "6  ×  30833.33 - 5  ×  12000",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "₱124,999.98",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "BV5 = C−5(C−S)/6; rearrange to C = 6BV5−5S. Book value was rounded in the question."
  },
  {
    "id": "econ-sample-022",
    "problemNumber": 22,
    "sourceFile": "IMG_0778.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "euac",
    "topicTitle": "euac",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "A machine costs $80,000, has $20,000 salvage after 20 years, and costs $18,000 annually to operate. Find EUAC at 10%.",
    "choices": [
      "A. 23000",
      "B. 25000",
      "C. 27000",
      "D. 29000"
    ],
    "correctLetter": "C",
    "answerStatus": "nearest-choice",
    "assumption": true,
    "formulaId": "euac",
    "resultValue": 27047.577486352748,
    "calculatorEntry": "80000  ×  (0.1  ÷  (1 - (1 + 0.1) ^ (-20))) - 20000  ×  (0.1  ÷  ((1 + 0.1) ^ 20 - 1)) + 18000",
    "shortcutSolution": "Purchase annualization + operation − salvage annualization. The coarse choices imply a nearest-value selection. Closest printed choice C is 27000; the unrounded calculated result is 27,047.57748635. This choice is approximate, not an exact match.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Purchase annualization + operation − salvage annualization. The coarse choices imply a nearest-value selection. Closest printed choice C is 27000; the unrounded calculated result is 27,047.57748635. This choice is approximate, not an exact match."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "80000  ×  (0.1  ÷  (1 - (1 + 0.1) ^ (-20))) - 20000  ×  (0.1  ÷  ((1 + 0.1) ^ 20 - 1)) + 18000"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "$27,047.58"
      }
    ],
    "finalAnswer": "$27,047.58",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "80000  ×  (0.1  ÷  (1 - (1 + 0.1) ^ (-20))) - 20000  ×  (0.1  ÷  ((1 + 0.1) ^ 20 - 1)) + 18000",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "$27,047.58",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Purchase annualization + operation − salvage annualization. The coarse choices imply a nearest-value selection. Closest printed choice C is 27000; the unrounded calculated result is 27,047.57748635. This choice is approximate, not an exact match."
  },
  {
    "id": "econ-sample-023",
    "problemNumber": 23,
    "sourceFile": "IMG_0778.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "perpetuity",
    "topicTitle": "perpetuity",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "At 12% compounded quarterly, find the present value of a perpetuity paying $1,000 monthly.",
    "choices": [
      "A. 83333",
      "B. 98125",
      "C. 101000",
      "D. 400000"
    ],
    "correctLetter": "C",
    "answerStatus": "nearest-choice",
    "assumption": false,
    "formulaId": "perpetuity",
    "resultValue": 100993.43148355873,
    "calculatorEntry": "1000  ÷  (1.03 ^ (1  ÷  3) - 1)",
    "shortcutSolution": "Convert the quarterly rate to an effective monthly rate before using P=A/i. Closest printed choice C is 101000; the unrounded calculated result is 100,993.43148356. This choice is approximate, not an exact match.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Convert the quarterly rate to an effective monthly rate before using P=A/i. Closest printed choice C is 101000; the unrounded calculated result is 100,993.43148356. This choice is approximate, not an exact match."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "1000  ÷  (1.03 ^ (1  ÷  3) - 1)"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "$100,993.43"
      }
    ],
    "finalAnswer": "$100,993.43",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "1000  ÷  (1.03 ^ (1  ÷  3) - 1)",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "$100,993.43",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Convert the quarterly rate to an effective monthly rate before using P=A/i. Closest printed choice C is 101000; the unrounded calculated result is 100,993.43148356. This choice is approximate, not an exact match."
  },
  {
    "id": "econ-sample-024",
    "problemNumber": 24,
    "sourceFile": "IMG_0778.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "pa",
    "topicTitle": "pa",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "An endowment pays ₱100,000 each quarter-end for 10 years. What equivalent lump sum can be received at the end of year 4 at 14% compounded quarterly?",
    "choices": [
      "A. 3802862",
      "B. 3702939",
      "C. 3502546",
      "D. 3602431"
    ],
    "correctLetter": "B",
    "answerStatus": "nearest-choice",
    "assumption": false,
    "formulaId": "pa",
    "resultValue": 3702939.7312401324,
    "calculatorEntry": "100000  ×  ((1 - (1 + 0.035) ^ (-40))  ÷  0.035)  ×  1.035 ^ 16",
    "shortcutSolution": "Value all 40 payments at time zero, then carry that value to quarter 16. Closest printed choice B is 3702939; the unrounded calculated result is 3,702,939.73124013. This choice is approximate, not an exact match.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Value all 40 payments at time zero, then carry that value to quarter 16. Closest printed choice B is 3702939; the unrounded calculated result is 3,702,939.73124013. This choice is approximate, not an exact match."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "100000  ×  ((1 - (1 + 0.035) ^ (-40))  ÷  0.035)  ×  1.035 ^ 16"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "₱3,702,939.73"
      }
    ],
    "finalAnswer": "₱3,702,939.73",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "100000  ×  ((1 - (1 + 0.035) ^ (-40))  ÷  0.035)  ×  1.035 ^ 16",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "₱3,702,939.73",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Value all 40 payments at time zero, then carry that value to quarter 16. Closest printed choice B is 3702939; the unrounded calculated result is 3,702,939.73124013. This choice is approximate, not an exact match."
  },
  {
    "id": "econ-sample-025",
    "problemNumber": 25,
    "sourceFile": "IMG_0778.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "cr",
    "topicTitle": "cr",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "A ₱12,000 debt at 20% compounded quarterly is amortized by semiannual payments over 3 years, starting in 6 months. Find each payment.",
    "choices": [
      "A. 2775.50",
      "B. 2662.89",
      "C. 2590.04",
      "D. 2409.78"
    ],
    "correctLetter": "A",
    "answerStatus": "nearest-choice",
    "assumption": false,
    "formulaId": "cr",
    "resultValue": 2775.505086512059,
    "calculatorEntry": "12000  ×  ((1.05 ^ 2 - 1)  ÷  (1 - (1 + (1.05 ^ 2 - 1)) ^ (-6)))",
    "shortcutSolution": "Payment-period rate = 1.05²−1 = 10.25%; six payments. Closest printed choice A is 2775.50; the unrounded calculated result is 2,775.50508651. This choice is approximate, not an exact match.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Payment-period rate = 1.05²−1 = 10.25%; six payments. Closest printed choice A is 2775.50; the unrounded calculated result is 2,775.50508651. This choice is approximate, not an exact match."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "12000  ×  ((1.05 ^ 2 - 1)  ÷  (1 - (1 + (1.05 ^ 2 - 1)) ^ (-6)))"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "₱2,775.51"
      }
    ],
    "finalAnswer": "₱2,775.51",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "12000  ×  ((1.05 ^ 2 - 1)  ÷  (1 - (1 + (1.05 ^ 2 - 1)) ^ (-6)))",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "₱2,775.51",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Payment-period rate = 1.05²−1 = 10.25%; six payments. Closest printed choice A is 2775.50; the unrounded calculated result is 2,775.50508651. This choice is approximate, not an exact match."
  },
  {
    "id": "econ-sample-026",
    "problemNumber": 26,
    "sourceFile": "IMG_0778.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "due",
    "topicTitle": "due",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "A ₱12,000 washing machine is paid over 5 years at 8% compounded annually, with payments at each year's beginning. Find the yearly payment.",
    "choices": [
      "A. 2782.85",
      "B. 2872.58",
      "C. 2400",
      "D. 2827.58"
    ],
    "correctLetter": "A",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "due",
    "resultValue": 2782.849495187071,
    "calculatorEntry": "12000  ×  (0.08  ÷  (1 - (1 + 0.08) ^ (-5)))  ÷  1.08",
    "shortcutSolution": "Ordinary payment divided by 1.08 gives the due-annuity payment.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Ordinary payment divided by 1.08 gives the due-annuity payment."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "12000  ×  (0.08  ÷  (1 - (1 + 0.08) ^ (-5)))  ÷  1.08"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "₱2,782.85"
      }
    ],
    "finalAnswer": "₱2,782.85",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "12000  ×  (0.08  ÷  (1 - (1 + 0.08) ^ (-5)))  ÷  1.08",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "₱2,782.85",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Ordinary payment divided by 1.08 gives the due-annuity payment."
  },
  {
    "id": "econ-sample-027",
    "problemNumber": 27,
    "sourceFile": "IMG_0779.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "euac",
    "topicTitle": "euac",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "A printer has a 5-year life and a 2-year warranty. Maintenance is $100 at each year-end after the warranty. Find equivalent annual maintenance cost at 10%.",
    "choices": [
      "A. 54",
      "B. 68",
      "C. 62",
      "D. 70"
    ],
    "correctLetter": "A",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "euac",
    "resultValue": 54.21696614306073,
    "calculatorEntry": "100  ×  ((1 - (1 + 0.1) ^ (-3))  ÷  0.1)  ÷  1.1 ^ 2  ×  (0.1  ÷  (1 - (1 + 0.1) ^ (-5)))",
    "shortcutSolution": "Only years 3, 4, and 5 incur maintenance; annualize over the entire 5-year life.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Only years 3, 4, and 5 incur maintenance; annualize over the entire 5-year life."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "100  ×  ((1 - (1 + 0.1) ^ (-3))  ÷  0.1)  ÷  1.1 ^ 2  ×  (0.1  ÷  (1 - (1 + 0.1) ^ (-5)))"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "$54.22"
      }
    ],
    "finalAnswer": "$54.22",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "100  ×  ((1 - (1 + 0.1) ^ (-3))  ÷  0.1)  ÷  1.1 ^ 2  ×  (0.1  ÷  (1 - (1 + 0.1) ^ (-5)))",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "$54.22",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Only years 3, 4, and 5 incur maintenance; annualize over the entire 5-year life."
  },
  {
    "id": "econ-sample-028",
    "problemNumber": 28,
    "sourceFile": "IMG_0779.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "simple",
    "topicTitle": "simple",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "A ₱100,000 one-year loan has 20% interest deducted immediately. The borrower repays ₱100,000 after a year. Find the actual interest rate.",
    "choices": [
      "A. 23.5",
      "B. 24.7",
      "C. 25",
      "D. 25.8"
    ],
    "correctLetter": "C",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "simple",
    "resultValue": 25.0,
    "calculatorEntry": "20000  ÷  80000  ×  100",
    "shortcutSolution": "Actual cash received = ₱80,000; interest cost = ₱20,000.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Actual cash received = ₱80,000; interest cost = ₱20,000."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "20000  ÷  80000  ×  100"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "25.00%"
      }
    ],
    "finalAnswer": "25.00%",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "20000  ÷  80000  ×  100",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "25.00%",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Actual cash received = ₱80,000; interest cost = ₱20,000."
  },
  {
    "id": "econ-sample-029",
    "problemNumber": 29,
    "sourceFile": "IMG_0779.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "real",
    "topicTitle": "real",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "An annuity pays $1,000 yearly for 10 years. Require a 5% real return with 6% annual inflation. Find the price to pay.",
    "choices": [
      "A. 5662",
      "B. 6231",
      "C. 5924",
      "D. 5816"
    ],
    "correctLetter": "D",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "real",
    "resultValue": 5815.876511007723,
    "calculatorEntry": "1000  ×  ((1 - (1 + (1.05  ×  1.06 - 1)) ^ (-10))  ÷  (1.05  ×  1.06 - 1))",
    "shortcutSolution": "The equivalent nominal discount rate is 1.05×1.06−1=11.3%.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "The equivalent nominal discount rate is 1.05×1.06−1=11.3%."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "1000  ×  ((1 - (1 + (1.05  ×  1.06 - 1)) ^ (-10))  ÷  (1.05  ×  1.06 - 1))"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "$5,815.88"
      }
    ],
    "finalAnswer": "$5,815.88",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "1000  ×  ((1 - (1 + (1.05  ×  1.06 - 1)) ^ (-10))  ÷  (1.05  ×  1.06 - 1))",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "$5,815.88",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "The equivalent nominal discount rate is 1.05×1.06−1=11.3%."
  },
  {
    "id": "econ-sample-030",
    "problemNumber": 30,
    "sourceFile": "IMG_0779.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "cashflow",
    "topicTitle": "cashflow",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "Pay a $15,000 debt by $4,000 at month 3, $5,000 at month 12, $3,000 at month 15, and a final payment at month 21. Interest is 18% compounded quarterly. Find final payment.",
    "choices": [
      "A. 6723.14",
      "B. 7128.26",
      "C. 6221.98",
      "D. 7210.62"
    ],
    "correctLetter": "C",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "cashflow",
    "resultValue": 6221.98133259474,
    "calculatorEntry": "15000  ×  1.045 ^ 7 - 4000  ×  1.045 ^ 6 - 5000  ×  1.045 ^ 3 - 3000  ×  1.045 ^ 2",
    "shortcutSolution": "Use month 21 as the focal date: quarter 7. Accumulate each earlier cash flow to quarter 7.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Use month 21 as the focal date: quarter 7. Accumulate each earlier cash flow to quarter 7."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "15000  ×  1.045 ^ 7 - 4000  ×  1.045 ^ 6 - 5000  ×  1.045 ^ 3 - 3000  ×  1.045 ^ 2"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "$6,221.98"
      }
    ],
    "finalAnswer": "$6,221.98",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "15000  ×  1.045 ^ 7 - 4000  ×  1.045 ^ 6 - 5000  ×  1.045 ^ 3 - 3000  ×  1.045 ^ 2",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "$6,221.98",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Use month 21 as the focal date: quarter 7. Accumulate each earlier cash flow to quarter 7."
  },
  {
    "id": "econ-sample-031",
    "problemNumber": 31,
    "sourceFile": "IMG_0779.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "breakEven",
    "topicTitle": "breakEven",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "A machine shop has $70,000 annual fixed maintenance cost. Forgings cost $56 each and sell for $125. Find break-even units.",
    "choices": [
      "A. 780",
      "B. 890",
      "C. 900",
      "D. 1015"
    ],
    "correctLetter": "D",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "breakEven",
    "resultValue": 1015,
    "calculatorEntry": "70000  ÷  (125 - 56)",
    "shortcutSolution": "Round up to a whole unit to actually cover costs; the sheet gives approximate volumes. Continuous break-even ratio = 1,014.4928; whole-unit minimum = 1,015.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Round up to a whole unit to actually cover costs; the sheet gives approximate volumes. Continuous break-even ratio = 1,014.4928; whole-unit minimum = 1,015."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "70000  ÷  (125 - 56)"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "1,015 units"
      }
    ],
    "finalAnswer": "1,015 units",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "70000  ÷  (125 - 56)",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "1,015 units",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Round up to a whole unit to actually cover costs; the sheet gives approximate volumes. Continuous break-even ratio = 1,014.4928; whole-unit minimum = 1,015."
  },
  {
    "id": "econ-sample-032",
    "problemNumber": 32,
    "sourceFile": "IMG_0779.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "db",
    "topicTitle": "db",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "A ₱45,000 machine has ₱4,350 book value after 6 years. Find its constant-percentage annual depreciation rate.",
    "choices": [
      "A. 33.25",
      "B. 32.25",
      "C. 35.25",
      "D. 34.25"
    ],
    "correctLetter": "B",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "db",
    "resultValue": 32.2546552508194,
    "calculatorEntry": "(1 - (4350  ÷  45000) ^ (1  ÷  6))  ×  100",
    "shortcutSolution": "Use k=1−(S/C)^(1/n).",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Use k=1−(S/C)^(1/n)."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "(1 - (4350  ÷  45000) ^ (1  ÷  6))  ×  100"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "32.25%"
      }
    ],
    "finalAnswer": "32.25%",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "(1 - (4350  ÷  45000) ^ (1  ÷  6))  ×  100",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "32.25%",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Use k=1−(S/C)^(1/n)."
  },
  {
    "id": "econ-sample-033",
    "problemNumber": 33,
    "sourceFile": "IMG_0779.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "simple",
    "topicTitle": "simple",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "Borrow $10,000 for 90 days at 8% simple interest. Find amount due.",
    "choices": [
      "A. 10500",
      "B. 11200",
      "C. 10200",
      "D. 11500"
    ],
    "correctLetter": "C",
    "answerStatus": "matched",
    "assumption": true,
    "formulaId": "simple",
    "resultValue": 10200.0,
    "calculatorEntry": "10000  ×  (1 + 0.08  ×  90  ÷  360)",
    "shortcutSolution": "Ordinary 360-day assumption; exact interest would give a different result.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Ordinary 360-day assumption; exact interest would give a different result."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "10000  ×  (1 + 0.08  ×  90  ÷  360)"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "$10,200.00"
      }
    ],
    "finalAnswer": "$10,200.00",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "10000  ×  (1 + 0.08  ×  90  ÷  360)",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "$10,200.00",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Ordinary 360-day assumption; exact interest would give a different result."
  },
  {
    "id": "econ-sample-034",
    "problemNumber": 34,
    "sourceFile": "IMG_0779.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "continuous",
    "topicTitle": "continuous",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "Find the continuously compounded nominal annual rate equivalent to an 8.33% effective annual rate. The sheet also mentions a 6-year period.",
    "choices": [
      "A. 7",
      "B. 5",
      "C. 8",
      "D. 6"
    ],
    "correctLetter": "C",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "continuous",
    "resultValue": 8.001193796938463,
    "calculatorEntry": "ln(1.0833)  ×  100",
    "shortcutSolution": "An annual effective rate converts by r=ln(1+ie); the six years do not change that annual conversion.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "An annual effective rate converts by r=ln(1+ie); the six years do not change that annual conversion."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "ln(1.0833)  ×  100"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "8.00%"
      }
    ],
    "finalAnswer": "8.00%",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "ln(1.0833)  ×  100",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "8.00%",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "An annual effective rate converts by r=ln(1+ie); the six years do not change that annual conversion."
  },
  {
    "id": "econ-sample-035",
    "problemNumber": 35,
    "sourceFile": "IMG_0779.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "cashflow",
    "topicTitle": "cashflow",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "Debt payments are ₱5,000, ₱4,500, ₱4,000, and ₱3,500 at years 1 to 4. Find accumulated amount at year 4 at 5%.",
    "choices": [
      "A. 18030.56",
      "B. 18290.12",
      "C. 18621.89",
      "D. 18449.37"
    ],
    "correctLetter": "D",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "cashflow",
    "resultValue": 18449.375,
    "calculatorEntry": "5000  ×  1.05 ^ 3 + 4500  ×  1.05 ^ 2 + 4000  ×  1.05 + 3500",
    "shortcutSolution": "Move each payment to year 4. The last payment earns no further interest.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Move each payment to year 4. The last payment earns no further interest."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "5000  ×  1.05 ^ 3 + 4500  ×  1.05 ^ 2 + 4000  ×  1.05 + 3500"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "₱18,449.38"
      }
    ],
    "finalAnswer": "₱18,449.38",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "5000  ×  1.05 ^ 3 + 4500  ×  1.05 ^ 2 + 4000  ×  1.05 + 3500",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "₱18,449.38",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Move each payment to year 4. The last payment earns no further interest."
  },
  {
    "id": "econ-sample-036",
    "problemNumber": 36,
    "sourceFile": "IMG_0779.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "sf",
    "topicTitle": "sf",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "A father needs ₱40,000 on his son's 21st birthday. Deposit every 6 months at 3% compounded semiannually, starting at age 3½. Find each deposit.",
    "choices": [
      "A. 829.68",
      "B. 815.80",
      "C. 830.12",
      "D. 846.10"
    ],
    "correctLetter": "D",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "sf",
    "resultValue": 846.0958214366807,
    "calculatorEntry": "40000  ×  (0.015  ÷  ((1 + 0.015) ^ 36 - 1))",
    "shortcutSolution": "Counting the deposit at age 3½ and the final deposit at 21 gives 36 deposits.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Counting the deposit at age 3½ and the final deposit at 21 gives 36 deposits."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "40000  ×  (0.015  ÷  ((1 + 0.015) ^ 36 - 1))"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "₱846.10"
      }
    ],
    "finalAnswer": "₱846.10",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "40000  ×  (0.015  ÷  ((1 + 0.015) ^ 36 - 1))",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "₱846.10",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Counting the deposit at age 3½ and the final deposit at 21 gives 36 deposits."
  },
  {
    "id": "econ-sample-037",
    "problemNumber": 37,
    "sourceFile": "IMG_0779.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "db",
    "topicTitle": "db",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "A $720,000 machine has $40,545.73 book value after 10 years. Find constant-percentage depreciation rate.",
    "choices": [
      "A. 20",
      "B. 30",
      "C. 18",
      "D. 25"
    ],
    "correctLetter": "D",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "db",
    "resultValue": 25.000000109287768,
    "calculatorEntry": "(1 - (40545.73  ÷  720000) ^ 0.1)  ×  100",
    "shortcutSolution": "Salvage is rounded; the rate is approximately 25%.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Salvage is rounded; the rate is approximately 25%."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "(1 - (40545.73  ÷  720000) ^ 0.1)  ×  100"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "25.00%"
      }
    ],
    "finalAnswer": "25.00%",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "(1 - (40545.73  ÷  720000) ^ 0.1)  ×  100",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "25.00%",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Salvage is rounded; the rate is approximately 25%."
  },
  {
    "id": "econ-sample-038",
    "problemNumber": 38,
    "sourceFile": "IMG_0779.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "sf",
    "topicTitle": "sf",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "Machinery costs $20,000, lasts 8 years, and has $2,000 scrap value. Find annual replacement deposits at 4%.",
    "choices": [
      "A. 1880",
      "B. 2033",
      "C. 2103",
      "D. 1953"
    ],
    "correctLetter": "D",
    "answerStatus": "nearest-choice",
    "assumption": false,
    "formulaId": "sf",
    "resultValue": 1953.500976840831,
    "calculatorEntry": "18000  ×  (0.04  ÷  ((1 + 0.04) ^ 8 - 1))",
    "shortcutSolution": "Replacement fund target = cost minus scrap. Closest printed choice D is 1953; the unrounded calculated result is 1,953.50097684. This choice is approximate, not an exact match.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Replacement fund target = cost minus scrap. Closest printed choice D is 1953; the unrounded calculated result is 1,953.50097684. This choice is approximate, not an exact match."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "18000  ×  (0.04  ÷  ((1 + 0.04) ^ 8 - 1))"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "$1,953.50"
      }
    ],
    "finalAnswer": "$1,953.50",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "18000  ×  (0.04  ÷  ((1 + 0.04) ^ 8 - 1))",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "$1,953.50",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Replacement fund target = cost minus scrap. Closest printed choice D is 1953; the unrounded calculated result is 1,953.50097684. This choice is approximate, not an exact match."
  },
  {
    "id": "econ-sample-039",
    "problemNumber": 39,
    "sourceFile": "IMG_0779.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "sf",
    "topicTitle": "sf",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "Bonds mature for ₱150,000 after 10 years. How much must be deposited annually in a 3% sinking fund?",
    "choices": [
      "A. 13084.58",
      "B. 13048.85",
      "C. 13408.58",
      "D. 13480.58"
    ],
    "correctLetter": "A",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "sf",
    "resultValue": 13084.575990773928,
    "calculatorEntry": "150000  ×  (0.03  ÷  ((1 + 0.03) ^ 10 - 1))",
    "shortcutSolution": "Ten end-of-year deposits accumulate to the bond principal.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Ten end-of-year deposits accumulate to the bond principal."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "150000  ×  (0.03  ÷  ((1 + 0.03) ^ 10 - 1))"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "₱13,084.58"
      }
    ],
    "finalAnswer": "₱13,084.58",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "150000  ×  (0.03  ÷  ((1 + 0.03) ^ 10 - 1))",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "₱13,084.58",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Ten end-of-year deposits accumulate to the bond principal."
  },
  {
    "id": "econ-sample-040",
    "problemNumber": 40,
    "sourceFile": "IMG_0779.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "due",
    "topicTitle": "due",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "Receive $3,000 at the beginning of every 3 months for 4 years. Find accumulated amount at year 4 at 6% compounded quarterly.",
    "choices": [
      "A. 45604",
      "B. 64320",
      "C. 54604",
      "D. 46690"
    ],
    "correctLetter": "C",
    "answerStatus": "matched",
    "assumption": true,
    "formulaId": "due",
    "resultValue": 54604.066173799176,
    "calculatorEntry": "3000  ×  (((1 + 0.015) ^ 16 - 1)  ÷  0.015)  ×  1.015",
    "shortcutSolution": "16 beginning-of-quarter payments; multiply ordinary future worth by 1.015. The source prints “34 years” but asks the end of year 4; this solution uses 4 years.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "16 beginning-of-quarter payments; multiply ordinary future worth by 1.015. The source prints “34 years” but asks the end of year 4; this solution uses 4 years."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "3000  ×  (((1 + 0.015) ^ 16 - 1)  ÷  0.015)  ×  1.015"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "$54,604.07"
      }
    ],
    "finalAnswer": "$54,604.07",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "3000  ×  (((1 + 0.015) ^ 16 - 1)  ÷  0.015)  ×  1.015",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "$54,604.07",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "16 beginning-of-quarter payments; multiply ordinary future worth by 1.015. The source prints “34 years” but asks the end of year 4; this solution uses 4 years."
  },
  {
    "id": "econ-sample-041",
    "problemNumber": 41,
    "sourceFile": "IMG_0779.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "cashflow",
    "topicTitle": "cashflow",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "Lend $600 for 4 years at 6% simple interest, then invest the entire amount for 12 years at 5% compounded annually. Find final amount.",
    "choices": [
      "A. 1783",
      "B. 1249",
      "C. 2014",
      "D. 1336"
    ],
    "correctLetter": "D",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "cashflow",
    "resultValue": 1336.117106560465,
    "calculatorEntry": "600  ×  (1 + 0.06  ×  4)  ×  1.05 ^ 12",
    "shortcutSolution": "First stage is simple; second stage is compound.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "First stage is simple; second stage is compound."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "600  ×  (1 + 0.06  ×  4)  ×  1.05 ^ 12"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "$1,336.12"
      }
    ],
    "finalAnswer": "$1,336.12",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "600  ×  (1 + 0.06  ×  4)  ×  1.05 ^ 12",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "$1,336.12",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "First stage is simple; second stage is compound."
  },
  {
    "id": "econ-sample-042",
    "problemNumber": 42,
    "sourceFile": "IMG_0779.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "sl",
    "topicTitle": "sl",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "A mill costs ₱800,000 installed, lasts 10 years, has ₱50,000 salvage and ₱15,000 dismantling cost. Find book value after 6 years using straight line.",
    "choices": [
      "A. 341000",
      "B. 343000",
      "C. 340000",
      "D. 342000"
    ],
    "correctLetter": "A",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "sl",
    "resultValue": 341000.0,
    "calculatorEntry": "800000 - 6  ×  (800000 - 50000 + 15000)  ÷  10",
    "shortcutSolution": "Net salvage = ₱35,000; annual depreciation = ₱76,500.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Net salvage = ₱35,000; annual depreciation = ₱76,500."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "800000 - 6  ×  (800000 - 50000 + 15000)  ÷  10"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "₱341,000.00"
      }
    ],
    "finalAnswer": "₱341,000.00",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "800000 - 6  ×  (800000 - 50000 + 15000)  ÷  10",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "₱341,000.00",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Net salvage = ₱35,000; annual depreciation = ₱76,500."
  },
  {
    "id": "econ-sample-043",
    "problemNumber": 43,
    "sourceFile": "IMG_0779.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "db",
    "topicTitle": "db",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "A $1 million milling machine has a 10-year life and loses 25% of its book value annually. Find total depreciation over its life.",
    "choices": [
      "A. 892422",
      "B. 932252",
      "C. 943686",
      "D. 899541"
    ],
    "correctLetter": "C",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "db",
    "resultValue": 943686.4852905273,
    "calculatorEntry": "1000000  ×  (1 - 0.75 ^ 10)",
    "shortcutSolution": "Book value after ten years is C(0.75)^10.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Book value after ten years is C(0.75)^10."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "1000000  ×  (1 - 0.75 ^ 10)"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "$943,686.49"
      }
    ],
    "finalAnswer": "$943,686.49",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "1000000  ×  (1 - 0.75 ^ 10)",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "$943,686.49",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Book value after ten years is C(0.75)^10."
  },
  {
    "id": "econ-sample-044",
    "problemNumber": 44,
    "sourceFile": "IMG_0779.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "simple",
    "topicTitle": "simple",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "Earn $328 interest in 2 years at 8.5% simple interest. Find principal.",
    "choices": [
      "A. 1720",
      "B. 1838",
      "C. 1930",
      "D. 2020"
    ],
    "correctLetter": "C",
    "answerStatus": "nearest-choice",
    "assumption": false,
    "formulaId": "simple",
    "resultValue": 1929.4117647058822,
    "calculatorEntry": "328  ÷  (0.085  ×  2)",
    "shortcutSolution": "Rearrange I=Prt to P=I/(rt). Closest printed choice C is 1930; the unrounded calculated result is 1,929.41176471. This choice is approximate, not an exact match.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Rearrange I=Prt to P=I/(rt). Closest printed choice C is 1930; the unrounded calculated result is 1,929.41176471. This choice is approximate, not an exact match."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "328  ÷  (0.085  ×  2)"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "$1,929.41"
      }
    ],
    "finalAnswer": "$1,929.41",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "328  ÷  (0.085  ×  2)",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "$1,929.41",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Rearrange I=Prt to P=I/(rt). Closest printed choice C is 1930; the unrounded calculated result is 1,929.41176471. This choice is approximate, not an exact match."
  },
  {
    "id": "econ-sample-045",
    "problemNumber": 45,
    "sourceFile": "IMG_0779.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "cr",
    "topicTitle": "cr",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "Find the annual payment to extinguish a ₱10,000 debt over 6 years at 12% annually.",
    "choices": [
      "A. 2324.62",
      "B. 2234.26",
      "C. 2432.26",
      "D. 2342.26"
    ],
    "correctLetter": "C",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "cr",
    "resultValue": 2432.257184246291,
    "calculatorEntry": "10000  ×  (0.12  ÷  (1 - (1 + 0.12) ^ (-6)))",
    "shortcutSolution": "Six end-of-year payments.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Six end-of-year payments."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "10000  ×  (0.12  ÷  (1 - (1 + 0.12) ^ (-6)))"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "₱2,432.26"
      }
    ],
    "finalAnswer": "₱2,432.26",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "10000  ×  (0.12  ÷  (1 - (1 + 0.12) ^ (-6)))",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "₱2,432.26",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Six end-of-year payments."
  },
  {
    "id": "econ-sample-046",
    "problemNumber": 46,
    "sourceFile": "IMG_0779.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "cr",
    "topicTitle": "cr",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "A $20,000 property has a $5,000 down payment. The balance is paid by 12 equal annual installments at 4%. Find installment.",
    "choices": [
      "A. 1859",
      "B. 1598",
      "C. 1895",
      "D. 1589"
    ],
    "correctLetter": "B",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "cr",
    "resultValue": 1598.2825902908478,
    "calculatorEntry": "15000  ×  (0.04  ÷  (1 - (1 + 0.04) ^ (-12)))",
    "shortcutSolution": "Only the $15,000 balance is financed.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Only the $15,000 balance is financed."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "15000  ×  (0.04  ÷  (1 - (1 + 0.04) ^ (-12)))"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "$1,598.28"
      }
    ],
    "finalAnswer": "$1,598.28",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "15000  ×  (0.04  ÷  (1 - (1 + 0.04) ^ (-12)))",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "$1,598.28",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Only the $15,000 balance is financed."
  },
  {
    "id": "econ-sample-047",
    "problemNumber": 47,
    "sourceFile": "IMG_0779.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "sf",
    "topicTitle": "sf",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "A $20,000 machine lasts 10 years and has $2,000 salvage. Find annual savings for replacement at 4%.",
    "choices": [
      "A. 1300",
      "B. 1200",
      "C. 1400",
      "D. 1500"
    ],
    "correctLetter": "D",
    "answerStatus": "nearest-choice",
    "assumption": false,
    "formulaId": "sf",
    "resultValue": 1499.236997942456,
    "calculatorEntry": "18000  ×  (0.04  ÷  ((1 + 0.04) ^ 10 - 1))",
    "shortcutSolution": "The options are coarse; compare the calculated amount with them. Closest printed choice D is 1500; the unrounded calculated result is 1,499.23699794. This choice is approximate, not an exact match.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "The options are coarse; compare the calculated amount with them. Closest printed choice D is 1500; the unrounded calculated result is 1,499.23699794. This choice is approximate, not an exact match."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "18000  ×  (0.04  ÷  ((1 + 0.04) ^ 10 - 1))"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "$1,499.24"
      }
    ],
    "finalAnswer": "$1,499.24",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "18000  ×  (0.04  ÷  ((1 + 0.04) ^ 10 - 1))",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "$1,499.24",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "The options are coarse; compare the calculated amount with them. Closest printed choice D is 1500; the unrounded calculated result is 1,499.23699794. This choice is approximate, not an exact match."
  },
  {
    "id": "econ-sample-048",
    "problemNumber": 48,
    "sourceFile": "IMG_0779.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "fa",
    "topicTitle": "fa",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "Deposit ₱500 at each month-end in an account at 12% compounded monthly. The planned horizon is 10 years, but the question asks the amount after 2 years. Find that amount.",
    "choices": [
      "A. 13100.60",
      "B. 13589.50",
      "C. 13982.80",
      "D. 13486.70"
    ],
    "correctLetter": "D",
    "answerStatus": "nearest-choice",
    "assumption": false,
    "formulaId": "fa",
    "resultValue": 13486.732426595738,
    "calculatorEntry": "500  ×  (((1 + 0.01) ^ 24 - 1)  ÷  0.01)",
    "shortcutSolution": "Use the requested 2 years = 24 deposits, not the planned 120 deposits. Closest printed choice D is 13486.70; the unrounded calculated result is 13,486.73242660. This choice is approximate, not an exact match.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Use the requested 2 years = 24 deposits, not the planned 120 deposits. Closest printed choice D is 13486.70; the unrounded calculated result is 13,486.73242660. This choice is approximate, not an exact match."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "500  ×  (((1 + 0.01) ^ 24 - 1)  ÷  0.01)"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "₱13,486.73"
      }
    ],
    "finalAnswer": "₱13,486.73",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "500  ×  (((1 + 0.01) ^ 24 - 1)  ÷  0.01)",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "₱13,486.73",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Use the requested 2 years = 24 deposits, not the planned 120 deposits. Closest printed choice D is 13486.70; the unrounded calculated result is 13,486.73242660. This choice is approximate, not an exact match."
  },
  {
    "id": "econ-sample-049",
    "problemNumber": 49,
    "sourceFile": "IMG_0779.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "bond",
    "topicTitle": "bond",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "A $5,000 bond pays 7% annually and repays principal at year 8. Find its price for an 8% return.",
    "choices": [
      "A. 4712.95",
      "B. 4652.19",
      "C. 4523.24",
      "D. 4429.13"
    ],
    "correctLetter": "A",
    "answerStatus": "nearest-choice",
    "assumption": false,
    "formulaId": "bond",
    "resultValue": 4712.668052813735,
    "calculatorEntry": "350  ×  ((1 - (1 + 0.08) ^ (-8))  ÷  0.08) + 5000  ÷  1.08 ^ 8",
    "shortcutSolution": "Discount the coupons and redemption separately. Closest printed choice A is 4712.95; the unrounded calculated result is 4,712.66805281. This choice is approximate, not an exact match.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Discount the coupons and redemption separately. Closest printed choice A is 4712.95; the unrounded calculated result is 4,712.66805281. This choice is approximate, not an exact match."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "350  ×  ((1 - (1 + 0.08) ^ (-8))  ÷  0.08) + 5000  ÷  1.08 ^ 8"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "$4,712.67"
      }
    ],
    "finalAnswer": "$4,712.67",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "350  ×  ((1 - (1 + 0.08) ^ (-8))  ÷  0.08) + 5000  ÷  1.08 ^ 8",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "$4,712.67",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Discount the coupons and redemption separately. Closest printed choice A is 4712.95; the unrounded calculated result is 4,712.66805281. This choice is approximate, not an exact match."
  },
  {
    "id": "econ-sample-050",
    "problemNumber": 50,
    "sourceFile": "IMG_0779.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "annualSL",
    "topicTitle": "annualSL",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "A motor costs ₱6,000, a generator ₱4,000, and assembly ₱500. The system lasts 10 years, has ₱400 salvage, runs 1,600 hours yearly, costs ₱0.85/hour and ₱300 annual maintenance. Find annual cost using straight-line depreciation.",
    "choices": [
      "A. 2710",
      "B. 2630",
      "C. 2480",
      "D. 2670"
    ],
    "correctLetter": "D",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "annualSL",
    "resultValue": 2670.0,
    "calculatorEntry": "(10500 - 400)  ÷  10 + 300 + 1600  ×  0.85",
    "shortcutSolution": "No interest rate is given; combine depreciation and operating costs only.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "No interest rate is given; combine depreciation and operating costs only."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "(10500 - 400)  ÷  10 + 300 + 1600  ×  0.85"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "₱2,670.00"
      }
    ],
    "finalAnswer": "₱2,670.00",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "(10500 - 400)  ÷  10 + 300 + 1600  ×  0.85",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "₱2,670.00",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "No interest rate is given; combine depreciation and operating costs only."
  },
  {
    "id": "econ-sample-051",
    "problemNumber": 51,
    "sourceFile": "IMG_0780.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "simple",
    "topicTitle": "simple",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "A $5,000 loan lasts 15 months at 15% simple interest. Find amount due.",
    "choices": [
      "A. 5937",
      "B. 5720",
      "C. 5683",
      "D. 5822"
    ],
    "correctLetter": "A",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "simple",
    "resultValue": 5937.5,
    "calculatorEntry": "5000  ×  (1 + 0.15  ×  15  ÷  12)",
    "shortcutSolution": "15 months = 1.25 years.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "15 months = 1.25 years."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "5000  ×  (1 + 0.15  ×  15  ÷  12)"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "$5,937.50"
      }
    ],
    "finalAnswer": "$5,937.50",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "5000  ×  (1 + 0.15  ×  15  ÷  12)",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "$5,937.50",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "15 months = 1.25 years."
  },
  {
    "id": "econ-sample-052",
    "problemNumber": 52,
    "sourceFile": "IMG_0780.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "simple",
    "topicTitle": "simple",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "Borrow ₱10,000 and repay after 90 days at 8% simple interest. Find amount due.",
    "choices": [
      "A. 10200",
      "B. 11500",
      "C. 9500",
      "D. 10700"
    ],
    "correctLetter": "A",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "simple",
    "resultValue": 10200.0,
    "calculatorEntry": "10000  ×  (1 + 0.08  ×  90  ÷  360)",
    "shortcutSolution": "Use 360 days under ordinary simple interest.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Use 360 days under ordinary simple interest."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "10000  ×  (1 + 0.08  ×  90  ÷  360)"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "₱10,200.00"
      }
    ],
    "finalAnswer": "₱10,200.00",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "10000  ×  (1 + 0.08  ×  90  ÷  360)",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "₱10,200.00",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Use 360 days under ordinary simple interest."
  },
  {
    "id": "econ-sample-053",
    "problemNumber": 53,
    "sourceFile": "IMG_0780.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "simple",
    "topicTitle": "simple",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "Interest is $450 after 2 years 6 months at 6% simple interest. Find principal.",
    "choices": [
      "A. 2800",
      "B. 3100",
      "C. 3400",
      "D. 3000"
    ],
    "correctLetter": "D",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "simple",
    "resultValue": 3000.0,
    "calculatorEntry": "450  ÷  (0.06  ×  2.5)",
    "shortcutSolution": "Use t=2.5 years.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Use t=2.5 years."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "450  ÷  (0.06  ×  2.5)"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "$3,000.00"
      }
    ],
    "finalAnswer": "$3,000.00",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "450  ÷  (0.06  ×  2.5)",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "$3,000.00",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Use t=2.5 years."
  },
  {
    "id": "econ-sample-054",
    "problemNumber": 54,
    "sourceFile": "IMG_0780.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "simple",
    "topicTitle": "simple",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "A television costs ₱25,000 payable after 60 days. Find immediate cash price if money is worth 14% simple interest.",
    "choices": [
      "A. 20234.87",
      "B. 19222.67",
      "C. 24429.97",
      "D. 28456.23"
    ],
    "correctLetter": "C",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "simple",
    "resultValue": 24429.967426710096,
    "calculatorEntry": "25000  ÷  (1 + 0.14  ×  60  ÷  360)",
    "shortcutSolution": "Discount by dividing by 1+rt, not by subtracting interest on the maturity price.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Discount by dividing by 1+rt, not by subtracting interest on the maturity price."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "25000  ÷  (1 + 0.14  ×  60  ÷  360)"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "₱24,429.97"
      }
    ],
    "finalAnswer": "₱24,429.97",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "25000  ÷  (1 + 0.14  ×  60  ÷  360)",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "₱24,429.97",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Discount by dividing by 1+rt, not by subtracting interest on the maturity price."
  },
  {
    "id": "econ-sample-055",
    "problemNumber": 55,
    "sourceFile": "IMG_0780.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "simple",
    "topicTitle": "simple",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "A ₱110,000 time deposit for 31 days earns ₱890.39 after 20% withholding tax on interest. Find annual rate.",
    "choices": [
      "A. 12.5",
      "B. 11.95",
      "C. 12.25",
      "D. 11.75"
    ],
    "correctLetter": "D",
    "answerStatus": "matched",
    "assumption": true,
    "formulaId": "simple",
    "resultValue": 11.750014662756598,
    "calculatorEntry": "890.39  ÷  (0.8  ×  110000)  ×  (360  ÷  31)  ×  100",
    "shortcutSolution": "The day basis is not stated. With ordinary 360-day interest, r≈11.75% (D); a 365-day basis gives ≈11.91%, which does not match a printed option.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "The day basis is not stated. With ordinary 360-day interest, r≈11.75% (D); a 365-day basis gives ≈11.91%, which does not match a printed option."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "890.39  ÷  (0.8  ×  110000)  ×  (360  ÷  31)  ×  100"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "11.75%"
      }
    ],
    "finalAnswer": "11.75%",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "890.39  ÷  (0.8  ×  110000)  ×  (360  ÷  31)  ×  100",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "11.75%",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "The day basis is not stated. With ordinary 360-day interest, r≈11.75% (D); a 365-day basis gives ≈11.91%, which does not match a printed option."
  },
  {
    "id": "econ-sample-056",
    "problemNumber": 56,
    "sourceFile": "IMG_0780.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "simple",
    "topicTitle": "simple",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "A fan costs $1,500 payable after 90 days. Find cash price at 10% simple interest.",
    "choices": [
      "A. 1463",
      "B. 1280",
      "C. 1502",
      "D. 1320"
    ],
    "correctLetter": "A",
    "answerStatus": "matched",
    "assumption": true,
    "formulaId": "simple",
    "resultValue": 1463.4146341463415,
    "calculatorEntry": "1500  ÷  (1 + 0.1  ×  90  ÷  360)",
    "shortcutSolution": "The sheet inconsistently labels the options with pesos; the arithmetic uses the same monetary unit throughout.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "The sheet inconsistently labels the options with pesos; the arithmetic uses the same monetary unit throughout."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "1500  ÷  (1 + 0.1  ×  90  ÷  360)"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "$1,463.41"
      }
    ],
    "finalAnswer": "$1,463.41",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "1500  ÷  (1 + 0.1  ×  90  ÷  360)",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "$1,463.41",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "The sheet inconsistently labels the options with pesos; the arithmetic uses the same monetary unit throughout."
  },
  {
    "id": "econ-sample-057",
    "problemNumber": 57,
    "sourceFile": "IMG_0780.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "simple",
    "topicTitle": "simple",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "An item is payable after 100 days, with 3% discount if paid in 31 days. Find annual simple interest charged.",
    "choices": [
      "A. 17.33",
      "B. 14.81",
      "C. 15.48",
      "D. 16.14"
    ],
    "correctLetter": "D",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "simple",
    "resultValue": 16.136261766024205,
    "calculatorEntry": "0.03  ÷  0.97  ×  (360  ÷  69)  ×  100",
    "shortcutSolution": "Finance 97% of the price over an extra 69 days.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Finance 97% of the price over an extra 69 days."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "0.03  ÷  0.97  ×  (360  ÷  69)  ×  100"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "16.14%"
      }
    ],
    "finalAnswer": "16.14%",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "0.03  ÷  0.97  ×  (360  ÷  69)  ×  100",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "16.14%",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Finance 97% of the price over an extra 69 days."
  },
  {
    "id": "econ-sample-058",
    "problemNumber": 58,
    "sourceFile": "IMG_0780.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "simple",
    "topicTitle": "simple",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "Find total amount on $10,500 at 5% for 75 days using exact interest.",
    "choices": [
      "A. 10619.38",
      "B. 10668.27",
      "C. 10640.63",
      "D. 10607.87"
    ],
    "correctLetter": "D",
    "answerStatus": "nearest-choice",
    "assumption": false,
    "formulaId": "simple",
    "resultValue": 10607.876712328767,
    "calculatorEntry": "10500  ×  (1 + 0.05  ×  75  ÷  365)",
    "shortcutSolution": "Exact interest uses the actual-year basis; no leap year is specified. Closest printed choice D is 10607.87; the unrounded calculated result is 10,607.87671233. This choice is approximate, not an exact match.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Exact interest uses the actual-year basis; no leap year is specified. Closest printed choice D is 10607.87; the unrounded calculated result is 10,607.87671233. This choice is approximate, not an exact match."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "10500  ×  (1 + 0.05  ×  75  ÷  365)"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "$10,607.88"
      }
    ],
    "finalAnswer": "$10,607.88",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "10500  ×  (1 + 0.05  ×  75  ÷  365)",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "$10,607.88",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Exact interest uses the actual-year basis; no leap year is specified. Closest printed choice D is 10607.87; the unrounded calculated result is 10,607.87671233. This choice is approximate, not an exact match."
  },
  {
    "id": "econ-sample-059",
    "problemNumber": 59,
    "sourceFile": "IMG_0780.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "simple",
    "topicTitle": "simple",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "Find exact simple interest on $5,000 from January 15 to November 28, 1992 at 22%.",
    "choices": [
      "A. 955.74",
      "B. 894.23",
      "C. 942.32",
      "D. 825.43"
    ],
    "correctLetter": "A",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "simple",
    "resultValue": 955.7377049180328,
    "calculatorEntry": "5000  ×  0.22  ×  318  ÷  366",
    "shortcutSolution": "1992 is a leap year. Exclude the starting date and include the ending date: 318 days.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "1992 is a leap year. Exclude the starting date and include the ending date: 318 days."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "5000  ×  0.22  ×  318  ÷  366"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "$955.74"
      }
    ],
    "finalAnswer": "$955.74",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "5000  ×  0.22  ×  318  ÷  366",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "$955.74",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "1992 is a leap year. Exclude the starting date and include the ending date: 318 days."
  },
  {
    "id": "econ-sample-060",
    "problemNumber": 60,
    "sourceFile": "IMG_0780.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "simple",
    "topicTitle": "simple",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "Interest paid is $9,600 after 5 years at 16% simple interest. Find loan principal.",
    "choices": [
      "A. 16400",
      "B. 12500",
      "C. 12000",
      "D. 18000"
    ],
    "correctLetter": "C",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "simple",
    "resultValue": 12000.0,
    "calculatorEntry": "9600  ÷  (0.16  ×  5)",
    "shortcutSolution": "P=I/(rt); the answer is principal, not amount due.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "P=I/(rt); the answer is principal, not amount due."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "9600  ÷  (0.16  ×  5)"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "$12,000.00"
      }
    ],
    "finalAnswer": "$12,000.00",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "9600  ÷  (0.16  ×  5)",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "$12,000.00",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "P=I/(rt); the answer is principal, not amount due."
  },
  {
    "id": "econ-sample-061",
    "problemNumber": 61,
    "sourceFile": "IMG_0780.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "simple",
    "topicTitle": "simple",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "Find interest on ₱6,800 for 3 years at 11% simple interest.",
    "choices": [
      "A. 1875",
      "B. 1987",
      "C. 2144",
      "D. 2244"
    ],
    "correctLetter": "D",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "simple",
    "resultValue": 2244.0,
    "calculatorEntry": "6800  ×  0.11  ×  3",
    "shortcutSolution": "Interest only: do not add the principal.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Interest only: do not add the principal."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "6800  ×  0.11  ×  3"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "₱2,244.00"
      }
    ],
    "finalAnswer": "₱2,244.00",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "6800  ×  0.11  ×  3",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "₱2,244.00",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Interest only: do not add the principal."
  },
  {
    "id": "econ-sample-062",
    "problemNumber": 62,
    "sourceFile": "IMG_0780.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "compound",
    "topicTitle": "compound",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "Invest ₱5,000 for 10 years at 8% compounded quarterly. Find compound interest earned.",
    "choices": [
      "A. 6005.30",
      "B. 6000",
      "C. 6040.20",
      "D. 6010.20"
    ],
    "correctLetter": "C",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "compound",
    "resultValue": 6040.198318074268,
    "calculatorEntry": "5000  ×  ((1 + 0.08  ÷  4) ^ 40 - 1)",
    "shortcutSolution": "Interest = future amount minus principal.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Interest = future amount minus principal."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "5000  ×  ((1 + 0.08  ÷  4) ^ 40 - 1)"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "₱6,040.20"
      }
    ],
    "finalAnswer": "₱6,040.20",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "5000  ×  ((1 + 0.08  ÷  4) ^ 40 - 1)",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "₱6,040.20",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Interest = future amount minus principal."
  },
  {
    "id": "econ-sample-063",
    "problemNumber": 63,
    "sourceFile": "IMG_0780.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "fa",
    "topicTitle": "fa",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "Deposit $300 at each half-year end for 10 years at 2% compounded semiannually. Find accumulated amount.",
    "choices": [
      "A. 6383",
      "B. 6424",
      "C. 6605",
      "D. 6512"
    ],
    "correctLetter": "C",
    "answerStatus": "nearest-choice",
    "assumption": false,
    "formulaId": "fa",
    "resultValue": 6605.701198439012,
    "calculatorEntry": "300  ×  (((1 + 0.01) ^ 20 - 1)  ÷  0.01)",
    "shortcutSolution": "20 deposits at 1% each half-year. Closest printed choice C is 6605; the unrounded calculated result is 6,605.70119844. This choice is approximate, not an exact match.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "20 deposits at 1% each half-year. Closest printed choice C is 6605; the unrounded calculated result is 6,605.70119844. This choice is approximate, not an exact match."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "300  ×  (((1 + 0.01) ^ 20 - 1)  ÷  0.01)"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "$6,605.70"
      }
    ],
    "finalAnswer": "$6,605.70",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "300  ×  (((1 + 0.01) ^ 20 - 1)  ÷  0.01)",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "$6,605.70",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "20 deposits at 1% each half-year. Closest printed choice C is 6605; the unrounded calculated result is 6,605.70119844. This choice is approximate, not an exact match."
  },
  {
    "id": "econ-sample-064",
    "problemNumber": 64,
    "sourceFile": "IMG_0780.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "cashflow",
    "topicTitle": "cashflow",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "At 15%, find the investment needed to fund annual scholarships: $30,000 for years 1–6, $40,000 for years 7–10, and $50,000 every year thereafter.",
    "choices": [
      "A. 254423",
      "B. 249562",
      "C. 264522",
      "D. 241282"
    ],
    "correctLetter": null,
    "answerStatus": "choice-mismatch",
    "assumption": false,
    "formulaId": "cashflow",
    "resultValue": 245300.82013556152,
    "calculatorEntry": "30000  ×  ((1 - (1 + 0.15) ^ (-6))  ÷  0.15) + 40000  ×  ((1 - (1 + 0.15) ^ (-4))  ÷  0.15)  ÷  1.15 ^ 6 + 50000  ÷  0.15  ÷  1.15 ^ 10",
    "shortcutSolution": "Split into two finite annuities and a deferred perpetuity. No printed choice matches the calculated result at its stated precision. Check the original sheet; do not force a letter.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Split into two finite annuities and a deferred perpetuity. No printed choice matches the calculated result at its stated precision. Check the original sheet; do not force a letter."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "30000  ×  ((1 - (1 + 0.15) ^ (-6))  ÷  0.15) + 40000  ×  ((1 - (1 + 0.15) ^ (-4))  ÷  0.15)  ÷  1.15 ^ 6 + 50000  ÷  0.15  ÷  1.15 ^ 10"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "$245,300.82"
      }
    ],
    "finalAnswer": "$245,300.82",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "30000  ×  ((1 - (1 + 0.15) ^ (-6))  ÷  0.15) + 40000  ×  ((1 - (1 + 0.15) ^ (-4))  ÷  0.15)  ÷  1.15 ^ 6 + 50000  ÷  0.15  ÷  1.15 ^ 10",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "$245,300.82",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Split into two finite annuities and a deferred perpetuity. No printed choice matches the calculated result at its stated precision. Check the original sheet; do not force a letter."
  },
  {
    "id": "econ-sample-065",
    "problemNumber": 65,
    "sourceFile": "IMG_0780.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "compound",
    "topicTitle": "compound",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "₱50,000 earns 7.5% annually for 5 years without withdrawals. Find accumulated amount.",
    "choices": [
      "A. 70374.90",
      "B. 71781.47",
      "C. 72475.23",
      "D. 78536.34"
    ],
    "correctLetter": "B",
    "answerStatus": "matched",
    "assumption": true,
    "formulaId": "compound",
    "resultValue": 71781.46630859374,
    "calculatorEntry": "50000  ×  1.075 ^ 5",
    "shortcutSolution": "Assume annual compounding as implied by the question.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Assume annual compounding as implied by the question."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "50000  ×  1.075 ^ 5"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "₱71,781.47"
      }
    ],
    "finalAnswer": "₱71,781.47",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "50000  ×  1.075 ^ 5",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "₱71,781.47",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Assume annual compounding as implied by the question."
  },
  {
    "id": "econ-sample-066",
    "problemNumber": 66,
    "sourceFile": "IMG_0780.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "db",
    "topicTitle": "db",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "A ₱100,000 machine lasts 25 years and has ₱5,000 salvage. Using double declining balance, find nearest book value after 3 years.",
    "choices": [
      "A. 16000",
      "B. 22000",
      "C. 58000",
      "D. 78000"
    ],
    "correctLetter": "D",
    "answerStatus": "nearest-choice",
    "assumption": false,
    "formulaId": "db",
    "resultValue": 77868.8,
    "calculatorEntry": "100000  ×  (1 - 2  ÷  25) ^ 3",
    "shortcutSolution": "DDB rate = 2/25 = 8%. Salvage is a lower limit; the year-3 book value remains above it. Closest printed choice D is 78000; the unrounded calculated result is 77,868.80000000. This choice is approximate, not an exact match.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "DDB rate = 2/25 = 8%. Salvage is a lower limit; the year-3 book value remains above it. Closest printed choice D is 78000; the unrounded calculated result is 77,868.80000000. This choice is approximate, not an exact match."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "100000  ×  (1 - 2  ÷  25) ^ 3"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "₱77,868.80"
      }
    ],
    "finalAnswer": "₱77,868.80",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "100000  ×  (1 - 2  ÷  25) ^ 3",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "₱77,868.80",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "DDB rate = 2/25 = 8%. Salvage is a lower limit; the year-3 book value remains above it. Closest printed choice D is 78000; the unrounded calculated result is 77,868.80000000. This choice is approximate, not an exact match."
  },
  {
    "id": "econ-sample-067",
    "problemNumber": 67,
    "sourceFile": "IMG_0780.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "compound",
    "topicTitle": "compound",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "Deposit $500,000 at 11.25% compounded monthly for 7 years 9 months. Find compound interest.",
    "choices": [
      "A. 684137",
      "B. 672192",
      "C. 690849",
      "D. 668286"
    ],
    "correctLetter": "C",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "compound",
    "resultValue": 690848.728731616,
    "calculatorEntry": "500000  ×  ((1 + 0.1125  ÷  12) ^ 93 - 1)",
    "shortcutSolution": "93 monthly periods. Subtract the original deposit.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "93 monthly periods. Subtract the original deposit."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "500000  ×  ((1 + 0.1125  ÷  12) ^ 93 - 1)"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "$690,848.73"
      }
    ],
    "finalAnswer": "$690,848.73",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "500000  ×  ((1 + 0.1125  ÷  12) ^ 93 - 1)",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "$690,848.73",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "93 monthly periods. Subtract the original deposit."
  },
  {
    "id": "econ-sample-068",
    "problemNumber": 68,
    "sourceFile": "IMG_0780.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "cashflow",
    "topicTitle": "cashflow",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "A property costs $1 million cash. Pay $200,000 now, $300,000 at year 1, $400,000 at year 3, and the balance at year 5. Find final payment at 20% annually.",
    "choices": [
      "A. 832211",
      "B. 883380",
      "C. 941412",
      "D. 792576"
    ],
    "correctLetter": "D",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "cashflow",
    "resultValue": 792575.9999999995,
    "calculatorEntry": "800000  ×  1.2 ^ 5 - 300000  ×  1.2 ^ 4 - 400000  ×  1.2 ^ 2",
    "shortcutSolution": "Move the financed balance and payments to year 5.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Move the financed balance and payments to year 5."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "800000  ×  1.2 ^ 5 - 300000  ×  1.2 ^ 4 - 400000  ×  1.2 ^ 2"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "$792,576.00"
      }
    ],
    "finalAnswer": "$792,576.00",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "800000  ×  1.2 ^ 5 - 300000  ×  1.2 ^ 4 - 400000  ×  1.2 ^ 2",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "$792,576.00",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Move the financed balance and payments to year 5."
  },
  {
    "id": "econ-sample-069",
    "problemNumber": 69,
    "sourceFile": "IMG_0780.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "compound",
    "topicTitle": "compound",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "Invest ₱10,000 to be repaid in one sum after 5 years at 12% annually. How much profit is realized in “present day pesos”?",
    "choices": [
      "A. 7563.29",
      "B. 7498.20",
      "C. 7340.12",
      "D. 7623.42"
    ],
    "correctLetter": null,
    "answerStatus": "ambiguous",
    "assumption": true,
    "formulaId": "compound",
    "resultValue": 7623.416832000007,
    "calculatorEntry": "10000  ×  (1.12 ^ 5 - 1)",
    "shortcutSolution": "This expression gives nominal interest ₱7,623.42. The phrase “present day pesos” is ambiguous: discounting that interest at 12% gives a different present worth, and no inflation rate is supplied.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "This expression gives nominal interest ₱7,623.42. The phrase “present day pesos” is ambiguous: discounting that interest at 12% gives a different present worth, and no inflation rate is supplied."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "10000  ×  (1.12 ^ 5 - 1)"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "₱7,623.42"
      }
    ],
    "finalAnswer": "₱7,623.42",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "10000  ×  (1.12 ^ 5 - 1)",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "₱7,623.42",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "This expression gives nominal interest ₱7,623.42. The phrase “present day pesos” is ambiguous: discounting that interest at 12% gives a different present worth, and no inflation rate is supplied."
  },
  {
    "id": "econ-sample-070",
    "problemNumber": 70,
    "sourceFile": "IMG_0780.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "compound",
    "topicTitle": "compound",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "Need $20,000 after 10 years. Interest is 8% annually for the first 5 years, then 12% compounded quarterly for the next 5. Find investment today.",
    "choices": [
      "A. 7249.52",
      "B. 7536.45",
      "C. 7104.28",
      "D. 7302.18"
    ],
    "correctLetter": "B",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "compound",
    "resultValue": 7536.448298084197,
    "calculatorEntry": "20000  ÷  (1.08 ^ 5  ×  1.03 ^ 20)",
    "shortcutSolution": "Divide by both successive growth factors.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Divide by both successive growth factors."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "20000  ÷  (1.08 ^ 5  ×  1.03 ^ 20)"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "$7,536.45"
      }
    ],
    "finalAnswer": "$7,536.45",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "20000  ÷  (1.08 ^ 5  ×  1.03 ^ 20)",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "$7,536.45",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Divide by both successive growth factors."
  },
  {
    "id": "econ-sample-071",
    "problemNumber": 71,
    "sourceFile": "IMG_0780.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "pa",
    "topicTitle": "pa",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "Find present value of $1,000 paid at each year-end for 5 years at 4%.",
    "choices": [
      "A. 4451",
      "B. 4415",
      "C. 4541",
      "D. 4514"
    ],
    "correctLetter": "A",
    "answerStatus": "nearest-choice",
    "assumption": false,
    "formulaId": "pa",
    "resultValue": 4451.822331016208,
    "calculatorEntry": "1000  ×  ((1 - (1 + 0.04) ^ (-5))  ÷  0.04)",
    "shortcutSolution": "Five end-of-year payments. Closest printed choice A is 4451; the unrounded calculated result is 4,451.82233102. This choice is approximate, not an exact match.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Five end-of-year payments. Closest printed choice A is 4451; the unrounded calculated result is 4,451.82233102. This choice is approximate, not an exact match."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "1000  ×  ((1 - (1 + 0.04) ^ (-5))  ÷  0.04)"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "$4,451.82"
      }
    ],
    "finalAnswer": "$4,451.82",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "1000  ×  ((1 - (1 + 0.04) ^ (-5))  ÷  0.04)",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "$4,451.82",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Five end-of-year payments. Closest printed choice A is 4451; the unrounded calculated result is 4,451.82233102. This choice is approximate, not an exact match."
  },
  {
    "id": "econ-sample-072",
    "problemNumber": 72,
    "sourceFile": "IMG_0780.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "compound",
    "topicTitle": "compound",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "Invest $2,825 for 8 years at 5% compounded quarterly. Find accumulated amount.",
    "choices": [
      "A. 4204",
      "B. 4712",
      "C. 4902",
      "D. 4414"
    ],
    "correctLetter": "A",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "compound",
    "resultValue": 4203.968686780381,
    "calculatorEntry": "2825  ×  1.0125 ^ 32",
    "shortcutSolution": "i=1.25%, n=32.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "i=1.25%, n=32."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "2825  ×  1.0125 ^ 32"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "$4,203.97"
      }
    ],
    "finalAnswer": "$4,203.97",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "2825  ×  1.0125 ^ 32",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "$4,203.97",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "i=1.25%, n=32."
  },
  {
    "id": "econ-sample-073",
    "problemNumber": 73,
    "sourceFile": "IMG_0780.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "irr",
    "topicTitle": "irr",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "Invest $350,000 and receive $200,000 annually for 3 years. Find annual rate of return.",
    "choices": [
      "A. 15.8",
      "B. 32.7",
      "C. 27.5",
      "D. 42.3"
    ],
    "correctLetter": "B",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "irr",
    "resultValue": 32.675160635692976,
    "calculatorEntry": "200000 × (1 − (1 + X)^(−3)) ÷ X − 350000 = 0",
    "shortcutSolution": "Use SOLVE on the annuity present-worth residual.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Use SOLVE on the annuity present-worth residual."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "200000 × (1 − (1 + X)^(−3)) ÷ X − 350000 = 0"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "32.68%"
      }
    ],
    "finalAnswer": "32.68%",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "200000 × (1 − (1 + X)^(−3)) ÷ X − 350000 = 0",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "32.68%",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Use SOLVE on the annuity present-worth residual."
  },
  {
    "id": "econ-sample-074",
    "problemNumber": 74,
    "sourceFile": "IMG_0780.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "compound",
    "topicTitle": "compound",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "Deposit $1,000 at 6% compounded annually. Find accumulated amount after 12 years.",
    "choices": [
      "A. 2021",
      "B. 2214",
      "C. 2142",
      "D. 2012"
    ],
    "correctLetter": "D",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "compound",
    "resultValue": 2012.1964718355514,
    "calculatorEntry": "1000  ×  1.06 ^ 12",
    "shortcutSolution": "One deposit; use a lump-sum growth factor.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "One deposit; use a lump-sum growth factor."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "1000  ×  1.06 ^ 12"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "$2,012.20"
      }
    ],
    "finalAnswer": "$2,012.20",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "1000  ×  1.06 ^ 12",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "$2,012.20",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "One deposit; use a lump-sum growth factor."
  },
  {
    "id": "econ-sample-075",
    "problemNumber": 75,
    "sourceFile": "IMG_0780.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "compound",
    "topicTitle": "compound",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "Compound interest on ₱3,000 over 2 years is ₱500. Find compound interest on the same principal over 4 years.",
    "choices": [
      "A. 956",
      "B. 1083",
      "C. 1125",
      "D. 1526"
    ],
    "correctLetter": "B",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "compound",
    "resultValue": 1083.3333333333342,
    "calculatorEntry": "3000  ×  ((3500  ÷  3000) ^ 2 - 1)",
    "shortcutSolution": "The four-year growth factor is the square of the two-year factor.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "The four-year growth factor is the square of the two-year factor."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "3000  ×  ((3500  ÷  3000) ^ 2 - 1)"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "₱1,083.33"
      }
    ],
    "finalAnswer": "₱1,083.33",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "3000  ×  ((3500  ÷  3000) ^ 2 - 1)",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "₱1,083.33",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "The four-year growth factor is the square of the two-year factor."
  },
  {
    "id": "econ-sample-076",
    "problemNumber": 76,
    "sourceFile": "IMG_0781.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "compound",
    "topicTitle": "compound",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "At 6% compounded semiannually, how much must be deposited today to receive $10,000 after 5 years?",
    "choices": [
      "A. 7472",
      "B. 13439",
      "C. 7441",
      "D. 13382"
    ],
    "correctLetter": "C",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "compound",
    "resultValue": 7440.93914896725,
    "calculatorEntry": "10000  ÷  1.03 ^ 10",
    "shortcutSolution": "Ten half-year periods.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Ten half-year periods."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "10000  ÷  1.03 ^ 10"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "$7,440.94"
      }
    ],
    "finalAnswer": "$7,440.94",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "10000  ÷  1.03 ^ 10",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "$7,440.94",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Ten half-year periods."
  },
  {
    "id": "econ-sample-077",
    "problemNumber": 77,
    "sourceFile": "IMG_0781.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "compound",
    "topicTitle": "compound",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "Find accumulated amount of ₱5,000 after 10 years at 8% compounded quarterly.",
    "choices": [
      "A. 12456.20",
      "B. 13876.50",
      "C. 10345.80",
      "D. 11040.20"
    ],
    "correctLetter": "D",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "compound",
    "resultValue": 11040.198318074268,
    "calculatorEntry": "5000  ×  1.02 ^ 40",
    "shortcutSolution": "This asks for the total amount, unlike problem 62 which asks interest only.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "This asks for the total amount, unlike problem 62 which asks interest only."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "5000  ×  1.02 ^ 40"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "₱11,040.20"
      }
    ],
    "finalAnswer": "₱11,040.20",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "5000  ×  1.02 ^ 40",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "₱11,040.20",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "This asks for the total amount, unlike problem 62 which asks interest only."
  },
  {
    "id": "econ-sample-078",
    "problemNumber": 78,
    "sourceFile": "IMG_0781.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "rate",
    "topicTitle": "rate",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "Find the annual compounded rate equivalent to 8% compounded quarterly.",
    "choices": [
      "A. 11.74",
      "B. 9.14",
      "C. 8.24",
      "D. 10.94"
    ],
    "correctLetter": "C",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "rate",
    "resultValue": 8.243215999999997,
    "calculatorEntry": "(1.02 ^ 4 - 1)  ×  100",
    "shortcutSolution": "The equivalent annually compounded rate equals the effective annual rate.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "The equivalent annually compounded rate equals the effective annual rate."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "(1.02 ^ 4 - 1)  ×  100"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "8.24%"
      }
    ],
    "finalAnswer": "8.24%",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "(1.02 ^ 4 - 1)  ×  100",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "8.24%",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "The equivalent annually compounded rate equals the effective annual rate."
  },
  {
    "id": "econ-sample-079",
    "problemNumber": 79,
    "sourceFile": "IMG_0781.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "compound",
    "topicTitle": "compound",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "Invest $10,000 for 20 years at 6% compounded monthly. Find accumulated amount.",
    "choices": [
      "A. 32070",
      "B. 32898",
      "C. 32620",
      "D. 33102"
    ],
    "correctLetter": "D",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "compound",
    "resultValue": 33102.044758073636,
    "calculatorEntry": "10000  ×  1.005 ^ 240",
    "shortcutSolution": "240 monthly periods.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "240 monthly periods."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "10000  ×  1.005 ^ 240"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "$33,102.04"
      }
    ],
    "finalAnswer": "$33,102.04",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "10000  ×  1.005 ^ 240",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "$33,102.04",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "240 monthly periods."
  },
  {
    "id": "econ-sample-080",
    "problemNumber": 80,
    "sourceFile": "IMG_0781.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "rate",
    "topicTitle": "rate",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "Find effective annual rate for 18% compounded semi-quarterly.",
    "choices": [
      "A. 19.25",
      "B. 19.48",
      "C. 18.46",
      "D. 18.95"
    ],
    "correctLetter": "B",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "rate",
    "resultValue": 19.48311418149109,
    "calculatorEntry": "((1 + 0.18  ÷  8) ^ 8 - 1)  ×  100",
    "shortcutSolution": "Semi-quarterly means eight compounding periods per year.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Semi-quarterly means eight compounding periods per year."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "((1 + 0.18  ÷  8) ^ 8 - 1)  ×  100"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "19.48%"
      }
    ],
    "finalAnswer": "19.48%",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "((1 + 0.18  ÷  8) ^ 8 - 1)  ×  100",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "19.48%",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Semi-quarterly means eight compounding periods per year."
  },
  {
    "id": "econ-sample-081",
    "problemNumber": 81,
    "sourceFile": "IMG_0781.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "rate",
    "topicTitle": "rate",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "A firm charges 1.5% per month on credit purchases. Find equivalent effective annual rate.",
    "choices": [
      "A. 1.5",
      "B. 18.5",
      "C. 18",
      "D. 19.56"
    ],
    "correctLetter": "D",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "rate",
    "resultValue": 19.561817146153395,
    "calculatorEntry": "(1.015 ^ 12 - 1)  ×  100",
    "shortcutSolution": "Monthly rate is already given; do not divide it by 12.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Monthly rate is already given; do not divide it by 12."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "(1.015 ^ 12 - 1)  ×  100"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "19.56%"
      }
    ],
    "finalAnswer": "19.56%",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "(1.015 ^ 12 - 1)  ×  100",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "19.56%",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Monthly rate is already given; do not divide it by 12."
  },
  {
    "id": "econ-sample-082",
    "problemNumber": 82,
    "sourceFile": "IMG_0781.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "rate",
    "topicTitle": "rate",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "A bank advertises 9.5% nominal interest yielding 9.84% annually. How often is interest compounded?",
    "choices": [
      "A. monthly",
      "B. bi-monthly",
      "C. quarterly",
      "D. daily"
    ],
    "correctLetter": "C",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "rate",
    "resultValue": 4,
    "calculatorEntry": "4",
    "shortcutSolution": "At m=4, (1+0.095/4)^4−1≈9.84%. Test the four candidate frequencies.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "At m=4, (1+0.095/4)^4−1≈9.84%. Test the four candidate frequencies."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "4"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "Quarterly (4 times per year)"
      }
    ],
    "finalAnswer": "Quarterly (4 times per year)",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "4",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "Quarterly (4 times per year)",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "At m=4, (1+0.095/4)^4−1≈9.84%. Test the four candidate frequencies."
  },
  {
    "id": "econ-sample-083",
    "problemNumber": 83,
    "sourceFile": "IMG_0781.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "rate",
    "topicTitle": "rate",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "Find annual compounded rate equivalent to 8% compounded quarterly.",
    "choices": [
      "A. 8.07",
      "B. 8.12",
      "C. 8.16",
      "D. 8.24"
    ],
    "correctLetter": "D",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "rate",
    "resultValue": 8.243215999999997,
    "calculatorEntry": "(1.02 ^ 4 - 1)  ×  100",
    "shortcutSolution": "Four quarterly growth factors produce one annual growth factor.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Four quarterly growth factors produce one annual growth factor."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "(1.02 ^ 4 - 1)  ×  100"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "8.24%"
      }
    ],
    "finalAnswer": "8.24%",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "(1.02 ^ 4 - 1)  ×  100",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "8.24%",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Four quarterly growth factors produce one annual growth factor."
  },
  {
    "id": "econ-sample-084",
    "problemNumber": 84,
    "sourceFile": "IMG_0781.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "rate",
    "topicTitle": "rate",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "Convert 12% compounded monthly to an equivalent nominal rate compounded bimonthly.",
    "choices": [
      "A. 12.12",
      "B. 12.06",
      "C. 12.02",
      "D. 12.21"
    ],
    "correctLetter": "B",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "rate",
    "resultValue": 12.060000000000004,
    "calculatorEntry": "6  ×  (1.01 ^ 2 - 1)  ×  100",
    "shortcutSolution": "Bimonthly means once every two months, or six periods annually.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Bimonthly means once every two months, or six periods annually."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "6  ×  (1.01 ^ 2 - 1)  ×  100"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "12.06%"
      }
    ],
    "finalAnswer": "12.06%",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "6  ×  (1.01 ^ 2 - 1)  ×  100",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "12.06%",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Bimonthly means once every two months, or six periods annually."
  },
  {
    "id": "econ-sample-085",
    "problemNumber": 85,
    "sourceFile": "IMG_0781.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "continuous",
    "topicTitle": "continuous",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "Find effective annual interest rate for 12% compounded continuously.",
    "choices": [
      "A. 12.40",
      "B. 11.26",
      "C. 12.75",
      "D. 11.55"
    ],
    "correctLetter": "C",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "continuous",
    "resultValue": 12.749685157937574,
    "calculatorEntry": "(e^(0.12) - 1)  ×  100",
    "shortcutSolution": "Use e^r−1.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Use e^r−1."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "(e^(0.12) - 1)  ×  100"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "12.75%"
      }
    ],
    "finalAnswer": "12.75%",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "(e^(0.12) - 1)  ×  100",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "12.75%",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Use e^r−1."
  },
  {
    "id": "econ-sample-086",
    "problemNumber": 86,
    "sourceFile": "IMG_0781.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "rate",
    "topicTitle": "rate",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "Effective annual interest is 19.56% with 12 compounding periods. Find nominal annual rate.",
    "choices": [
      "A. 1.5",
      "B. 21.41",
      "C. 18",
      "D. 1.63"
    ],
    "correctLetter": "C",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "rate",
    "resultValue": 17.99845735349468,
    "calculatorEntry": "12  ×  (1.1956 ^ (1  ÷  12) - 1)  ×  100",
    "shortcutSolution": "Nominal rate = m[(1+ie)^(1/m)−1]; the effective rate is rounded.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Nominal rate = m[(1+ie)^(1/m)−1]; the effective rate is rounded."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "12  ×  (1.1956 ^ (1  ÷  12) - 1)  ×  100"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "18.00%"
      }
    ],
    "finalAnswer": "18.00%",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "12  ×  (1.1956 ^ (1  ÷  12) - 1)  ×  100",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "18.00%",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Nominal rate = m[(1+ie)^(1/m)−1]; the effective rate is rounded."
  },
  {
    "id": "econ-sample-087",
    "problemNumber": 87,
    "sourceFile": "IMG_0781.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "rate",
    "topicTitle": "rate",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "₱1,000 grows to ₱1,126.49 after 4 years with semiannual compounding. Find nominal and effective annual rates.",
    "choices": [
      "A. 3% and 3.02%",
      "B. 2.30% and 2.76%",
      "C. 4.29% and 4.32%",
      "D. 3.97% and 3.95%"
    ],
    "correctLetter": "A",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "rate",
    "resultValue": 2.999941735149747,
    "calculatorEntry": "2  ×  (1.12649 ^ (1  ÷  8) - 1)  ×  100",
    "shortcutSolution": "Find i=(F/P)^(1/8)−1; nominal=2i≈3.00%, effective=(1+i)^2−1≈3.02%.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Find i=(F/P)^(1/8)−1; nominal=2i≈3.00%, effective=(1+i)^2−1≈3.02%."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "2  ×  (1.12649 ^ (1  ÷  8) - 1)  ×  100"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "3.00% nominal; 3.02% effective annually"
      }
    ],
    "finalAnswer": "3.00% nominal; 3.02% effective annually",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "2  ×  (1.12649 ^ (1  ÷  8) - 1)  ×  100",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "3.00% nominal; 3.02% effective annually",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Find i=(F/P)^(1/8)−1; nominal=2i≈3.00%, effective=(1+i)^2−1≈3.02%."
  },
  {
    "id": "econ-sample-088",
    "problemNumber": 88,
    "sourceFile": "IMG_0781.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "continuous",
    "topicTitle": "continuous",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "Find continuously compounded nominal rate equivalent to 10% effective annually.",
    "choices": [
      "A. 11.12",
      "B. 10.19",
      "C. 10.68",
      "D. 9.53"
    ],
    "correctLetter": "D",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "continuous",
    "resultValue": 9.531017980432493,
    "calculatorEntry": "ln(1.1)  ×  100",
    "shortcutSolution": "r=ln(1+ie).",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "r=ln(1+ie)."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "ln(1.1)  ×  100"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "9.53%"
      }
    ],
    "finalAnswer": "9.53%",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "ln(1.1)  ×  100",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "9.53%",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "r=ln(1+ie)."
  },
  {
    "id": "econ-sample-089",
    "problemNumber": 89,
    "sourceFile": "IMG_0781.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "continuous",
    "topicTitle": "continuous",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "Invest $5,000 at 3% compounded continuously for 10 years. Find future worth.",
    "choices": [
      "A. 6750",
      "B. 6570",
      "C. 6075",
      "D. 6057"
    ],
    "correctLetter": "A",
    "answerStatus": "nearest-choice",
    "assumption": false,
    "formulaId": "continuous",
    "resultValue": 6749.294037880016,
    "calculatorEntry": "5000  ×  e^(0.03  ×  10)",
    "shortcutSolution": "Use F=Pe^(rt). Closest printed choice A is 6750; the unrounded calculated result is 6,749.29403788. This choice is approximate, not an exact match.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Use F=Pe^(rt). Closest printed choice A is 6750; the unrounded calculated result is 6,749.29403788. This choice is approximate, not an exact match."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "5000  ×  e^(0.03  ×  10)"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "$6,749.29"
      }
    ],
    "finalAnswer": "$6,749.29",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "5000  ×  e^(0.03  ×  10)",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "$6,749.29",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Use F=Pe^(rt). Closest printed choice A is 6750; the unrounded calculated result is 6,749.29403788. This choice is approximate, not an exact match."
  },
  {
    "id": "econ-sample-090",
    "problemNumber": 90,
    "sourceFile": "IMG_0781.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "continuous",
    "topicTitle": "continuous",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "How long does money take to double at 10% compounded continuously?",
    "choices": [
      "A. 6.73",
      "B. 6.83",
      "C. 6.63",
      "D. 6.93"
    ],
    "correctLetter": "D",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "continuous",
    "resultValue": 6.931471805599452,
    "calculatorEntry": "ln(2)  ÷  0.1",
    "shortcutSolution": "t=ln(F/P)/r; this avoids numerical SOLVE.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "t=ln(F/P)/r; this avoids numerical SOLVE."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "ln(2)  ÷  0.1"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "6.93 years"
      }
    ],
    "finalAnswer": "6.93 years",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "ln(2)  ÷  0.1",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "6.93 years",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "t=ln(F/P)/r; this avoids numerical SOLVE."
  },
  {
    "id": "econ-sample-091",
    "problemNumber": 91,
    "sourceFile": "IMG_0781.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "continuous",
    "topicTitle": "continuous",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "Find continuously compounded nominal annual rate equivalent to a 4% effective annual rate.",
    "choices": [
      "A. 3.80",
      "B. 4.10",
      "C. 3.92",
      "D. 4.09"
    ],
    "correctLetter": "C",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "continuous",
    "resultValue": 3.922071315328133,
    "calculatorEntry": "ln(1.04)  ×  100",
    "shortcutSolution": "Use ln(1.04).",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Use ln(1.04)."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "ln(1.04)  ×  100"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "3.92%"
      }
    ],
    "finalAnswer": "3.92%",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "ln(1.04)  ×  100",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "3.92%",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Use ln(1.04)."
  },
  {
    "id": "econ-sample-092",
    "problemNumber": 92,
    "sourceFile": "IMG_0781.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "continuous",
    "topicTitle": "continuous",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "Effective annual rate is 24%. Find nominal rate of a continuously compounded loan.",
    "choices": [
      "A. 21.51",
      "B. 22.35",
      "C. 23.25",
      "D. 21.90"
    ],
    "correctLetter": "A",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "continuous",
    "resultValue": 21.511137961694548,
    "calculatorEntry": "ln(1.24)  ×  100",
    "shortcutSolution": "Use ln(1.24).",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Use ln(1.24)."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "ln(1.24)  ×  100"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "21.51%"
      }
    ],
    "finalAnswer": "21.51%",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "ln(1.24)  ×  100",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "21.51%",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Use ln(1.24)."
  },
  {
    "id": "econ-sample-093",
    "problemNumber": 93,
    "sourceFile": "IMG_0781.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "continuous",
    "topicTitle": "continuous",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "A continuously compounded investment has a 10-year compound amount factor of 1.34986. Find nominal annual rate.",
    "choices": [
      "A. 3",
      "B. 4",
      "C. 5",
      "D. 6"
    ],
    "correctLetter": "A",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "continuous",
    "resultValue": 3.0000088336903357,
    "calculatorEntry": "ln(1.34986)  ÷  10  ×  100",
    "shortcutSolution": "r=ln(F/P)/t.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "r=ln(F/P)/t."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "ln(1.34986)  ÷  10  ×  100"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "3.00%"
      }
    ],
    "finalAnswer": "3.00%",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "ln(1.34986)  ÷  10  ×  100",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "3.00%",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "r=ln(F/P)/t."
  },
  {
    "id": "econ-sample-094",
    "problemNumber": 94,
    "sourceFile": "IMG_0781.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "continuous",
    "topicTitle": "continuous",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "A credit card charges 1.5% per month compounded continuously. Find effective annual rate.",
    "choices": [
      "A. 19.72",
      "B. 20.25",
      "C. 21.20",
      "D. 19.90"
    ],
    "correctLetter": "A",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "continuous",
    "resultValue": 19.721736312181015,
    "calculatorEntry": "(e^(0.015  ×  12) - 1)  ×  100",
    "shortcutSolution": "Annual continuous rate = 0.015×12 = 0.18.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Annual continuous rate = 0.015×12 = 0.18."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "(e^(0.015  ×  12) - 1)  ×  100"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "19.72%"
      }
    ],
    "finalAnswer": "19.72%",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "(e^(0.015  ×  12) - 1)  ×  100",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "19.72%",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Annual continuous rate = 0.015×12 = 0.18."
  },
  {
    "id": "econ-sample-095",
    "problemNumber": 95,
    "sourceFile": "IMG_0781.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "continuous",
    "topicTitle": "continuous",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "A man borrows ₱2,000 at 8% compounded continuously. The sheet asks how long in years but gives no final amount.",
    "choices": [
      "A. 7.18",
      "B. 5.18",
      "C. 8.18",
      "D. 6.18"
    ],
    "correctLetter": null,
    "answerStatus": "missing-given",
    "assumption": false,
    "formulaId": "continuous",
    "resultValue": null,
    "calculatorEntry": "No calculator entry: a target amount is missing.",
    "shortcutSolution": "A target amount F is missing. Time cannot be determined from principal and rate alone; do not choose a letter.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "A target amount F is missing. Time cannot be determined from principal and rate alone; do not choose a letter."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "No calculator entry: a target amount is missing."
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "Cannot determine: missing target amount."
      }
    ],
    "finalAnswer": "Cannot determine: missing target amount.",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "No calculator entry: a target amount is missing.",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "Cannot determine: missing target amount.",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "A target amount F is missing. Time cannot be determined from principal and rate alone; do not choose a letter."
  },
  {
    "id": "econ-sample-096",
    "problemNumber": 96,
    "sourceFile": "IMG_0781.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "continuous",
    "topicTitle": "continuous",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "Find the difference between future amounts of ₱500 at 5% compounded annually and continuously after 5 years.",
    "choices": [
      "A. 3.87",
      "B. 5.48",
      "C. 4.21",
      "D. 6.25"
    ],
    "correctLetter": "A",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "continuous",
    "resultValue": 3.8719270938705197,
    "calculatorEntry": "500  ×  (e^(0.05  ×  5) - 1.05 ^ 5)",
    "shortcutSolution": "Subtract annual-compounding growth from continuous-compounding growth.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Subtract annual-compounding growth from continuous-compounding growth."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "500  ×  (e^(0.05  ×  5) - 1.05 ^ 5)"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "₱3.87"
      }
    ],
    "finalAnswer": "₱3.87",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "500  ×  (e^(0.05  ×  5) - 1.05 ^ 5)",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "₱3.87",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Subtract annual-compounding growth from continuous-compounding growth."
  },
  {
    "id": "econ-sample-097",
    "problemNumber": 97,
    "sourceFile": "IMG_0781.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "due",
    "topicTitle": "due",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "A life-insurance beneficiary receives $2,000 yearly for 5 years, with the first payment now. Find present value at 4%.",
    "choices": [
      "A. 9529",
      "B. 9295",
      "C. 9592",
      "D. 9259"
    ],
    "correctLetter": "D",
    "answerStatus": "nearest-choice",
    "assumption": false,
    "formulaId": "due",
    "resultValue": 9259.790448513713,
    "calculatorEntry": "2000  ×  ((1 - (1 + 0.04) ^ (-5))  ÷  0.04)  ×  1.04",
    "shortcutSolution": "Five beginning-of-year payments at years 0 through 4; multiply ordinary present worth by 1.04. Closest printed choice D is 9259; the unrounded calculated result is 9,259.79044851. This choice is approximate, not an exact match.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Five beginning-of-year payments at years 0 through 4; multiply ordinary present worth by 1.04. Closest printed choice D is 9259; the unrounded calculated result is 9,259.79044851. This choice is approximate, not an exact match."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "2000  ×  ((1 - (1 + 0.04) ^ (-5))  ÷  0.04)  ×  1.04"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "$9,259.79"
      }
    ],
    "finalAnswer": "$9,259.79",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "2000  ×  ((1 - (1 + 0.04) ^ (-5))  ÷  0.04)  ×  1.04",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "$9,259.79",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Five beginning-of-year payments at years 0 through 4; multiply ordinary present worth by 1.04. Closest printed choice D is 9259; the unrounded calculated result is 9,259.79044851. This choice is approximate, not an exact match."
  },
  {
    "id": "econ-sample-098",
    "problemNumber": 98,
    "sourceFile": "IMG_0781.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "pa",
    "topicTitle": "pa",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "Borrow now and repay by six ₱2,000 quarterly payments at 12% compounded quarterly. Find amount borrowed.",
    "choices": [
      "A. 10834.38",
      "B. 10382.90",
      "C. 10586.99",
      "D. 10200.56"
    ],
    "correctLetter": "A",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "pa",
    "resultValue": 10834.382887756385,
    "calculatorEntry": "2000  ×  ((1 - (1 + 0.03) ^ (-6))  ÷  0.03)",
    "shortcutSolution": "Six quarter-end payments at 3% per quarter.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Six quarter-end payments at 3% per quarter."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "2000  ×  ((1 - (1 + 0.03) ^ (-6))  ÷  0.03)"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "₱10,834.38"
      }
    ],
    "finalAnswer": "₱10,834.38",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "2000  ×  ((1 - (1 + 0.03) ^ (-6))  ÷  0.03)",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "₱10,834.38",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Six quarter-end payments at 3% per quarter."
  },
  {
    "id": "econ-sample-099",
    "problemNumber": 99,
    "sourceFile": "IMG_0781.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "fa",
    "topicTitle": "fa",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "Find accumulated amount of ₱6,000 yearly for 5 years at 15% annually.",
    "choices": [
      "A. 40454.29",
      "B. 41114.29",
      "C. 41454.29",
      "D. 40544.29"
    ],
    "correctLetter": "A",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "fa",
    "resultValue": 40454.28749999998,
    "calculatorEntry": "6000  ×  (((1 + 0.15) ^ 5 - 1)  ÷  0.15)",
    "shortcutSolution": "Ordinary annuity; same arithmetic as problem 15 with a different option order.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Ordinary annuity; same arithmetic as problem 15 with a different option order."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "6000  ×  (((1 + 0.15) ^ 5 - 1)  ÷  0.15)"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "₱40,454.29"
      }
    ],
    "finalAnswer": "₱40,454.29",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "6000  ×  (((1 + 0.15) ^ 5 - 1)  ÷  0.15)",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "₱40,454.29",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Ordinary annuity; same arithmetic as problem 15 with a different option order."
  },
  {
    "id": "econ-sample-100",
    "problemNumber": 100,
    "sourceFile": "IMG_0781.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "irr",
    "topicTitle": "irr",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "A machine costs ₱10,000 cash, or ₱2,000 down plus ₱750 each year for 15 years. Find annual interest rate.",
    "choices": [
      "A. 4.61",
      "B. 3.81",
      "C. 5.71",
      "D. 11"
    ],
    "correctLetter": "A",
    "answerStatus": "nearest-choice",
    "assumption": false,
    "formulaId": "irr",
    "resultValue": 4.5992104381622445,
    "calculatorEntry": "750 × (1 − (1 + X)^(−15)) ÷ X − 8000 = 0",
    "shortcutSolution": "The financed principal is ₱8,000; solve 750(P/A,X,15)−8000=0. Closest printed choice A is 4.61; the unrounded calculated result is 4.59921044. This choice is approximate, not an exact match.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "The financed principal is ₱8,000; solve 750(P/A,X,15)−8000=0. Closest printed choice A is 4.61; the unrounded calculated result is 4.59921044. This choice is approximate, not an exact match."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "750 × (1 − (1 + X)^(−15)) ÷ X − 8000 = 0"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "4.60%"
      }
    ],
    "finalAnswer": "4.60%",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "750 × (1 − (1 + X)^(−15)) ÷ X − 8000 = 0",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "4.60%",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "The financed principal is ₱8,000; solve 750(P/A,X,15)−8000=0. Closest printed choice A is 4.61; the unrounded calculated result is 4.59921044. This choice is approximate, not an exact match."
  },
  {
    "id": "econ-sample-101",
    "problemNumber": 101,
    "sourceFile": "IMG_0781.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "pa",
    "topicTitle": "pa",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "Ten equal ₱2,000 quarterly payments repay a loan at 10% compounded quarterly. Find amount borrowed.",
    "choices": [
      "A. 17304.78",
      "B. 17404.12",
      "C. 17504.13",
      "D. 17604.34"
    ],
    "correctLetter": "C",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "pa",
    "resultValue": 17504.127861941815,
    "calculatorEntry": "2000  ×  ((1 - (1 + 0.025) ^ (-10))  ÷  0.025)",
    "shortcutSolution": "Use present worth with i=0.025, n=10.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Use present worth with i=0.025, n=10."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "2000  ×  ((1 - (1 + 0.025) ^ (-10))  ÷  0.025)"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "₱17,504.13"
      }
    ],
    "finalAnswer": "₱17,504.13",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "2000  ×  ((1 - (1 + 0.025) ^ (-10))  ÷  0.025)",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "₱17,504.13",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Use present worth with i=0.025, n=10."
  },
  {
    "id": "econ-sample-102",
    "problemNumber": 102,
    "sourceFile": "IMG_0781.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "cashflow",
    "topicTitle": "cashflow",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "Lease payments start at $20,000 at year 1 and rise by $1,500 annually for 8 years. Find equivalent lump sum today at 7%.",
    "choices": [
      "A. 147609",
      "B. 168224",
      "C. 156321",
      "D. 142125"
    ],
    "correctLetter": "A",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "cashflow",
    "resultValue": 147609.377331991,
    "calculatorEntry": "(20000 + 1500  ×  (1 - 1))  ÷  1.07 ^ 1 + (20000 + 1500  ×  (2 - 1))  ÷  1.07 ^ 2 + (20000 + 1500  ×  (3 - 1))  ÷  1.07 ^ 3 + (20000 + 1500  ×  (4 - 1))  ÷  1.07 ^ 4 + (20000 + 1500  ×  (5 - 1))  ÷  1.07 ^ 5 + (20000 + 1500  ×  (6 - 1))  ÷  1.07 ^ 6 + (20000 + 1500  ×  (7 - 1))  ÷  1.07 ^ 7 + (20000 + 1500  ×  (8 - 1))  ÷  1.07 ^ 8",
    "shortcutSolution": "Discount each payment. A gradient starts with zero increment at year 1.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Discount each payment. A gradient starts with zero increment at year 1."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "(20000 + 1500  ×  (1 - 1))  ÷  1.07 ^ 1 + (20000 + 1500  ×  (2 - 1))  ÷  1.07 ^ 2 + (20000 + 1500  ×  (3 - 1))  ÷  1.07 ^ 3 + (20000 + 1500  ×  (4 - 1))  ÷  1.07 ^ 4 + (20000 + 1500  ×  (5 - 1))  ÷  1.07 ^ 5 + (20000 + 1500  ×  (6 - 1))  ÷  1.07 ^ 6 + (20000 + 1500  ×  (7 - 1))  ÷  1.07 ^ 7 + (20000 + 1500  ×  (8 - 1))  ÷  1.07 ^ 8"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "$147,609.38"
      }
    ],
    "finalAnswer": "$147,609.38",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "(20000 + 1500  ×  (1 - 1))  ÷  1.07 ^ 1 + (20000 + 1500  ×  (2 - 1))  ÷  1.07 ^ 2 + (20000 + 1500  ×  (3 - 1))  ÷  1.07 ^ 3 + (20000 + 1500  ×  (4 - 1))  ÷  1.07 ^ 4 + (20000 + 1500  ×  (5 - 1))  ÷  1.07 ^ 5 + (20000 + 1500  ×  (6 - 1))  ÷  1.07 ^ 6 + (20000 + 1500  ×  (7 - 1))  ÷  1.07 ^ 7 + (20000 + 1500  ×  (8 - 1))  ÷  1.07 ^ 8",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "$147,609.38",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Discount each payment. A gradient starts with zero increment at year 1."
  },
  {
    "id": "econ-sample-103",
    "problemNumber": 103,
    "sourceFile": "IMG_0781.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "pa",
    "topicTitle": "pa",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "Pay $200 at each year-end for 10 years. Find present worth at 6%.",
    "choices": [
      "A. 1274",
      "B. 1472",
      "C. 1247",
      "D. 1427"
    ],
    "correctLetter": "B",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "pa",
    "resultValue": 1472.0174102829405,
    "calculatorEntry": "200  ×  ((1 - (1 + 0.06) ^ (-10))  ÷  0.06)",
    "shortcutSolution": "End-of-year series; P/A factor.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "End-of-year series; P/A factor."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "200  ×  ((1 - (1 + 0.06) ^ (-10))  ÷  0.06)"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "$1,472.02"
      }
    ],
    "finalAnswer": "$1,472.02",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "200  ×  ((1 - (1 + 0.06) ^ (-10))  ÷  0.06)",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "$1,472.02",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "End-of-year series; P/A factor."
  },
  {
    "id": "econ-sample-104",
    "problemNumber": 104,
    "sourceFile": "IMG_0781.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "cr",
    "topicTitle": "cr",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "Buy ₱100,000 land on monthly installments over 20 years at 12% nominal interest. Find monthly amortization.",
    "choices": [
      "A. 1101.08",
      "B. 1121.01",
      "C. 1152.15",
      "D. 1128.12"
    ],
    "correctLetter": "A",
    "answerStatus": "nearest-choice",
    "assumption": true,
    "formulaId": "cr",
    "resultValue": 1101.0861335696097,
    "calculatorEntry": "100000  ×  (0.01  ÷  (1 - (1 + 0.01) ^ (-240)))",
    "shortcutSolution": "Assume monthly compounding consistent with the installment convention; i=1%, n=240. Closest printed choice A is 1101.08; the unrounded calculated result is 1,101.08613357. This choice is approximate, not an exact match.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Assume monthly compounding consistent with the installment convention; i=1%, n=240. Closest printed choice A is 1101.08; the unrounded calculated result is 1,101.08613357. This choice is approximate, not an exact match."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "100000  ×  (0.01  ÷  (1 - (1 + 0.01) ^ (-240)))"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "₱1,101.09"
      }
    ],
    "finalAnswer": "₱1,101.09",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "100000  ×  (0.01  ÷  (1 - (1 + 0.01) ^ (-240)))",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "₱1,101.09",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Assume monthly compounding consistent with the installment convention; i=1%, n=240. Closest printed choice A is 1101.08; the unrounded calculated result is 1,101.08613357. This choice is approximate, not an exact match."
  },
  {
    "id": "econ-sample-105",
    "problemNumber": 105,
    "sourceFile": "IMG_0781.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "sf",
    "topicTitle": "sf",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "Find annual deposits for 12 years to accumulate ₱20,000 at 6% annually.",
    "choices": [
      "A. 1290.34",
      "B. 1185.54",
      "C. 1107.34",
      "D. 1205.74"
    ],
    "correctLetter": "B",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "sf",
    "resultValue": 1185.5405876132716,
    "calculatorEntry": "20000  ×  (0.06  ÷  ((1 + 0.06) ^ 12 - 1))",
    "shortcutSolution": "A=F(A/F,i,n).",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "A=F(A/F,i,n)."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "20000  ×  (0.06  ÷  ((1 + 0.06) ^ 12 - 1))"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "₱1,185.54"
      }
    ],
    "finalAnswer": "₱1,185.54",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "20000  ×  (0.06  ÷  ((1 + 0.06) ^ 12 - 1))",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "₱1,185.54",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "A=F(A/F,i,n)."
  },
  {
    "id": "econ-sample-106",
    "problemNumber": 106,
    "sourceFile": "IMG_0782.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "sf",
    "topicTitle": "sf",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "Find annual deposits to accumulate ₱100,000 on the date of the fifth annual deposit at 10%.",
    "choices": [
      "A. 16002.18",
      "B. 15890.12",
      "C. 16379.75",
      "D. 15980.12"
    ],
    "correctLetter": "C",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "sf",
    "resultValue": 16379.748079474524,
    "calculatorEntry": "100000  ×  (0.1  ÷  ((1 + 0.1) ^ 5 - 1))",
    "shortcutSolution": "Five deposits, with the final deposit included at the target date.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Five deposits, with the final deposit included at the target date."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "100000  ×  (0.1  ÷  ((1 + 0.1) ^ 5 - 1))"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "₱16,379.75"
      }
    ],
    "finalAnswer": "₱16,379.75",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "100000  ×  (0.1  ÷  ((1 + 0.1) ^ 5 - 1))",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "₱16,379.75",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Five deposits, with the final deposit included at the target date."
  },
  {
    "id": "econ-sample-107",
    "problemNumber": 107,
    "sourceFile": "IMG_0782.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "cr",
    "topicTitle": "cr",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "A 10% down payment of ₱200,000 is made on a house and lot. Pay the balance monthly over 5 years at 15% compounded monthly. Find installment.",
    "choices": [
      "A. 42821.87",
      "B. 42980",
      "C. 43102.23",
      "D. 43189.03"
    ],
    "correctLetter": "A",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "cr",
    "resultValue": 42821.87415544581,
    "calculatorEntry": "1800000  ×  (0.15  ÷  12  ÷  (1 - (1 + 0.15  ÷  12) ^ (-60)))",
    "shortcutSolution": "Total price = 200000/0.10 = ₱2 million; finance ₱1.8 million.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Total price = 200000/0.10 = ₱2 million; finance ₱1.8 million."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "1800000  ×  (0.15  ÷  12  ÷  (1 - (1 + 0.15  ÷  12) ^ (-60)))"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "₱42,821.87"
      }
    ],
    "finalAnswer": "₱42,821.87",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "1800000  ×  (0.15  ÷  12  ÷  (1 - (1 + 0.15  ÷  12) ^ (-60)))",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "₱42,821.87",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Total price = 200000/0.10 = ₱2 million; finance ₱1.8 million."
  },
  {
    "id": "econ-sample-108",
    "problemNumber": 108,
    "sourceFile": "IMG_0782.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "pa",
    "topicTitle": "pa",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "A car is paid by $10,000 monthly for 60 months. Interest is 12% compounded annually. Find cash price.",
    "choices": [
      "A. 455879",
      "B. 502362",
      "C. 492526",
      "D. 548283"
    ],
    "correctLetter": "A",
    "answerStatus": "nearest-choice",
    "assumption": false,
    "formulaId": "pa",
    "resultValue": 455877.9470303733,
    "calculatorEntry": "10000  ×  ((1 - (1 + (1.12 ^ (1  ÷  12) - 1)) ^ (-60))  ÷  (1.12 ^ (1  ÷  12) - 1))",
    "shortcutSolution": "Convert the effective annual rate to effective monthly before discounting. Closest printed choice A is 455879; the unrounded calculated result is 455,877.94703037. This choice is approximate, not an exact match.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Convert the effective annual rate to effective monthly before discounting. Closest printed choice A is 455879; the unrounded calculated result is 455,877.94703037. This choice is approximate, not an exact match."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "10000  ×  ((1 - (1 + (1.12 ^ (1  ÷  12) - 1)) ^ (-60))  ÷  (1.12 ^ (1  ÷  12) - 1))"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "$455,877.95"
      }
    ],
    "finalAnswer": "$455,877.95",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "10000  ×  ((1 - (1 + (1.12 ^ (1  ÷  12) - 1)) ^ (-60))  ÷  (1.12 ^ (1  ÷  12) - 1))",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "$455,877.95",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Convert the effective annual rate to effective monthly before discounting. Closest printed choice A is 455879; the unrounded calculated result is 455,877.94703037. This choice is approximate, not an exact match."
  },
  {
    "id": "econ-sample-109",
    "problemNumber": 109,
    "sourceFile": "IMG_0782.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "fa",
    "topicTitle": "fa",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "Deposit an equal amount each January 1 from year 1 through year 6 at 6%. Find deposit needed to have ₱5,000 on the date of the last deposit.",
    "choices": [
      "A. 751",
      "B. 717",
      "C. 715",
      "D. 725"
    ],
    "correctLetter": "B",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "fa",
    "resultValue": 716.8131423744768,
    "calculatorEntry": "5000  ÷  (((1 + 0.06) ^ 6 - 1)  ÷  0.06)",
    "shortcutSolution": "Six deposits have 5,4,3,2,1,0 years of growth; target date is the last deposit, not one year later.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Six deposits have 5,4,3,2,1,0 years of growth; target date is the last deposit, not one year later."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "5000  ÷  (((1 + 0.06) ^ 6 - 1)  ÷  0.06)"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "₱716.81"
      }
    ],
    "finalAnswer": "₱716.81",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "5000  ÷  (((1 + 0.06) ^ 6 - 1)  ÷  0.06)",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "₱716.81",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Six deposits have 5,4,3,2,1,0 years of growth; target date is the last deposit, not one year later."
  },
  {
    "id": "econ-sample-110",
    "problemNumber": 110,
    "sourceFile": "IMG_0782.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "due",
    "topicTitle": "due",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "Find present worth of six $120,000 payments at the beginning of each year at 15% annually.",
    "choices": [
      "A. 522260",
      "B. 580450",
      "C. 520320",
      "D. 550470"
    ],
    "correctLetter": "A",
    "answerStatus": "nearest-choice",
    "assumption": false,
    "formulaId": "due",
    "resultValue": 522258.61176136805,
    "calculatorEntry": "120000  ×  ((1 - (1 + 0.15) ^ (-6))  ÷  0.15)  ×  1.15",
    "shortcutSolution": "Due annuity; first payment is now. Closest printed choice A is 522260; the unrounded calculated result is 522,258.61176137. This choice is approximate, not an exact match.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Due annuity; first payment is now. Closest printed choice A is 522260; the unrounded calculated result is 522,258.61176137. This choice is approximate, not an exact match."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "120000  ×  ((1 - (1 + 0.15) ^ (-6))  ÷  0.15)  ×  1.15"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "$522,258.61"
      }
    ],
    "finalAnswer": "$522,258.61",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "120000  ×  ((1 - (1 + 0.15) ^ (-6))  ÷  0.15)  ×  1.15",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "$522,258.61",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Due annuity; first payment is now. Closest printed choice A is 522260; the unrounded calculated result is 522,258.61176137. This choice is approximate, not an exact match."
  },
  {
    "id": "econ-sample-111",
    "problemNumber": 111,
    "sourceFile": "IMG_0782.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "due",
    "topicTitle": "due",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "Deposit $200 at the beginning of each year for 15 years at 7% annually. Find approximate balance at year 15.",
    "choices": [
      "A. 5800",
      "B. 5200",
      "C. 5600",
      "D. 5400"
    ],
    "correctLetter": "D",
    "answerStatus": "nearest-choice",
    "assumption": false,
    "formulaId": "due",
    "resultValue": 5377.610710186885,
    "calculatorEntry": "200  ×  (((1 + 0.07) ^ 15 - 1)  ÷  0.07)  ×  1.07",
    "shortcutSolution": "All 15 deposits earn one extra year's interest compared with an ordinary annuity. Closest printed choice D is 5400; the unrounded calculated result is 5,377.61071019. This choice is approximate, not an exact match.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "All 15 deposits earn one extra year's interest compared with an ordinary annuity. Closest printed choice D is 5400; the unrounded calculated result is 5,377.61071019. This choice is approximate, not an exact match."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "200  ×  (((1 + 0.07) ^ 15 - 1)  ÷  0.07)  ×  1.07"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "$5,377.61"
      }
    ],
    "finalAnswer": "$5,377.61",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "200  ×  (((1 + 0.07) ^ 15 - 1)  ÷  0.07)  ×  1.07",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "$5,377.61",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "All 15 deposits earn one extra year's interest compared with an ordinary annuity. Closest printed choice D is 5400; the unrounded calculated result is 5,377.61071019. This choice is approximate, not an exact match."
  },
  {
    "id": "econ-sample-112",
    "problemNumber": 112,
    "sourceFile": "IMG_0782.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "deferred",
    "topicTitle": "deferred",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "A student borrows ₱2,000 at 4.5% annually, repaid by ten equal semiannual installments starting 3 years later. Find each payment.",
    "choices": [
      "A. 252.12",
      "B. 261.89",
      "C. 273.90",
      "D. 280.94"
    ],
    "correctLetter": "A",
    "answerStatus": "matched",
    "assumption": true,
    "formulaId": "deferred",
    "resultValue": 252.12055503347696,
    "calculatorEntry": "2000  ×  1.0225 ^ 5  ×  (0.0225  ÷  (1 - (1 + 0.0225) ^ (-10)))",
    "shortcutSolution": "Assume nominal annual 4.5% compounded semiannually. First payment at period 6 means discount five periods.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Assume nominal annual 4.5% compounded semiannually. First payment at period 6 means discount five periods."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "2000  ×  1.0225 ^ 5  ×  (0.0225  ÷  (1 - (1 + 0.0225) ^ (-10)))"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "₱252.12"
      }
    ],
    "finalAnswer": "₱252.12",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "2000  ×  1.0225 ^ 5  ×  (0.0225  ÷  (1 - (1 + 0.0225) ^ (-10)))",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "₱252.12",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Assume nominal annual 4.5% compounded semiannually. First payment at period 6 means discount five periods."
  },
  {
    "id": "econ-sample-113",
    "problemNumber": 113,
    "sourceFile": "IMG_0782.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "deferred",
    "topicTitle": "deferred",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "Borrow ₱187,400 at 5% annually. Repay by eight equal annual payments starting at the end of year 10. Find annual payment.",
    "choices": [
      "A. 43600.10",
      "B. 43489.47",
      "C. 43263.91",
      "D. 43763.20"
    ],
    "correctLetter": null,
    "answerStatus": "choice-mismatch",
    "assumption": false,
    "formulaId": "deferred",
    "resultValue": 44980.5566512375,
    "calculatorEntry": "187400  ×  1.05 ^ 9  ×  (0.05  ÷  (1 - (1 + 0.05) ^ (-8)))",
    "shortcutSolution": "The eight-payment annuity value is at year 9; carry the loan to that year first. No printed choice matches the calculated result at its stated precision. Check the original sheet; do not force a letter.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "The eight-payment annuity value is at year 9; carry the loan to that year first. No printed choice matches the calculated result at its stated precision. Check the original sheet; do not force a letter."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "187400  ×  1.05 ^ 9  ×  (0.05  ÷  (1 - (1 + 0.05) ^ (-8)))"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "₱44,980.56"
      }
    ],
    "finalAnswer": "₱44,980.56",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "187400  ×  1.05 ^ 9  ×  (0.05  ÷  (1 - (1 + 0.05) ^ (-8)))",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "₱44,980.56",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "The eight-payment annuity value is at year 9; carry the loan to that year first. No printed choice matches the calculated result at its stated precision. Check the original sheet; do not force a letter."
  },
  {
    "id": "econ-sample-114",
    "problemNumber": 114,
    "sourceFile": "IMG_0782.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "deferred",
    "topicTitle": "deferred",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "Pay ₱100,000 down and ten ₱8,000 semiannual installments starting after 3 years. Find cash price at 12% compounded semiannually.",
    "choices": [
      "A. 134666.80",
      "B. 143999.08",
      "C. 154696.80",
      "D. 164969.80"
    ],
    "correctLetter": "B",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "deferred",
    "resultValue": 143999.0816174022,
    "calculatorEntry": "100000 + 8000  ×  ((1 - (1 + 0.06) ^ (-10))  ÷  0.06)  ÷  1.06 ^ 5",
    "shortcutSolution": "Same cash flow as problem 16; first installment is at period 6.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Same cash flow as problem 16; first installment is at period 6."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "100000 + 8000  ×  ((1 - (1 + 0.06) ^ (-10))  ÷  0.06)  ÷  1.06 ^ 5"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "₱143,999.08"
      }
    ],
    "finalAnswer": "₱143,999.08",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "100000 + 8000  ×  ((1 - (1 + 0.06) ^ (-10))  ÷  0.06)  ÷  1.06 ^ 5",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "₱143,999.08",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Same cash flow as problem 16; first installment is at period 6."
  },
  {
    "id": "econ-sample-115",
    "problemNumber": 115,
    "sourceFile": "IMG_0782.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "deferred",
    "topicTitle": "deferred",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "Three $2,000 annual payments begin 4 years from today. Find present value at 4%.",
    "choices": [
      "A. 5311",
      "B. 4943",
      "C. 4934",
      "D. 5131"
    ],
    "correctLetter": "C",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "deferred",
    "resultValue": 4934.091647038452,
    "calculatorEntry": "2000  ×  ((1 - (1 + 0.04) ^ (-3))  ÷  0.04)  ÷  1.04 ^ 3",
    "shortcutSolution": "The annuity present value is one period before the first payment, at year 3.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "The annuity present value is one period before the first payment, at year 3."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "2000  ×  ((1 - (1 + 0.04) ^ (-3))  ÷  0.04)  ÷  1.04 ^ 3"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "$4,934.09"
      }
    ],
    "finalAnswer": "$4,934.09",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "2000  ×  ((1 - (1 + 0.04) ^ (-3))  ÷  0.04)  ÷  1.04 ^ 3",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "$4,934.09",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "The annuity present value is one period before the first payment, at year 3."
  },
  {
    "id": "econ-sample-116",
    "problemNumber": 116,
    "sourceFile": "IMG_0782.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "perpetuity",
    "topicTitle": "perpetuity",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "Find present worth of $5,000 paid at each year-end forever at 10%.",
    "choices": [
      "A. 50000",
      "B. 5500",
      "C. 55000",
      "D. 500000"
    ],
    "correctLetter": "A",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "perpetuity",
    "resultValue": 50000.0,
    "calculatorEntry": "5000  ÷  0.1",
    "shortcutSolution": "Perpetuity first payment is one year from now.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Perpetuity first payment is one year from now."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "5000  ÷  0.1"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "$50,000.00"
      }
    ],
    "finalAnswer": "$50,000.00",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "5000  ÷  0.1",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "$50,000.00",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Perpetuity first payment is one year from now."
  },
  {
    "id": "econ-sample-117",
    "problemNumber": 117,
    "sourceFile": "IMG_0782.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "perpetuity",
    "topicTitle": "perpetuity",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "Find present worth of $1,000 yearly forever at 8%, first payment at the end of year 5.",
    "choices": [
      "A. 15300",
      "B. 10500",
      "C. 9188",
      "D. 8450"
    ],
    "correctLetter": "C",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "perpetuity",
    "resultValue": 9187.873159955665,
    "calculatorEntry": "1000  ÷  0.08  ÷  1.08 ^ 4",
    "shortcutSolution": "P=A/i is located at year 4; discount four years.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "P=A/i is located at year 4; discount four years."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "1000  ÷  0.08  ÷  1.08 ^ 4"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "$9,187.87"
      }
    ],
    "finalAnswer": "$9,187.87",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "1000  ÷  0.08  ÷  1.08 ^ 4",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "$9,187.87",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "P=A/i is located at year 4; discount four years."
  },
  {
    "id": "econ-sample-118",
    "problemNumber": 118,
    "sourceFile": "IMG_0782.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "perpetuity",
    "topicTitle": "perpetuity",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "Find present worth of $2,000 yearly forever when money is worth 10% compounded quarterly.",
    "choices": [
      "A. 12150",
      "B. 30000",
      "C. 50000",
      "D. 19268"
    ],
    "correctLetter": "D",
    "answerStatus": "nearest-choice",
    "assumption": false,
    "formulaId": "perpetuity",
    "resultValue": 19265.430217375848,
    "calculatorEntry": "2000  ÷  (1.025 ^ 4 - 1)",
    "shortcutSolution": "Convert quarterly compounding to effective annual rate for annual payments. Closest printed choice D is 19268; the unrounded calculated result is 19,265.43021738. This choice is approximate, not an exact match.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Convert quarterly compounding to effective annual rate for annual payments. Closest printed choice D is 19268; the unrounded calculated result is 19,265.43021738. This choice is approximate, not an exact match."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "2000  ÷  (1.025 ^ 4 - 1)"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "$19,265.43"
      }
    ],
    "finalAnswer": "$19,265.43",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "2000  ÷  (1.025 ^ 4 - 1)",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "$19,265.43",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Convert quarterly compounding to effective annual rate for annual payments. Closest printed choice D is 19268; the unrounded calculated result is 19,265.43021738. This choice is approximate, not an exact match."
  },
  {
    "id": "econ-sample-119",
    "problemNumber": 119,
    "sourceFile": "IMG_0782.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "perpetuity",
    "topicTitle": "perpetuity",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "Find present worth of a $10,000 annual perpetuity at 10%.",
    "choices": [
      "A. 1000000",
      "B. 1000",
      "C. 100000",
      "D. 10000"
    ],
    "correctLetter": "C",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "perpetuity",
    "resultValue": 100000.0,
    "calculatorEntry": "10000  ÷  0.1",
    "shortcutSolution": "P=A/i.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "P=A/i."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "10000  ÷  0.1"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "$100,000.00"
      }
    ],
    "finalAnswer": "$100,000.00",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "10000  ÷  0.1",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "$100,000.00",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "P=A/i."
  },
  {
    "id": "econ-sample-120",
    "problemNumber": 120,
    "sourceFile": "IMG_0782.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "perpetuity",
    "topicTitle": "perpetuity",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "A perpetuity is worth $1,000 at 15.5%. Find periodic cash flow.",
    "choices": [
      "A. 155",
      "B. 845",
      "C. 6451",
      "D. 1183"
    ],
    "correctLetter": "A",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "perpetuity",
    "resultValue": 155.0,
    "calculatorEntry": "1000  ×  0.155",
    "shortcutSolution": "A=Pi.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "A=Pi."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "1000  ×  0.155"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "$155.00"
      }
    ],
    "finalAnswer": "$155.00",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "1000  ×  0.155",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "$155.00",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "A=Pi."
  },
  {
    "id": "econ-sample-121",
    "problemNumber": 121,
    "sourceFile": "IMG_0782.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "perpetuity",
    "topicTitle": "perpetuity",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "Find present worth of a $15,000 semiannual perpetuity at 8% compounded quarterly.",
    "choices": [
      "A. 363525",
      "B. 388121",
      "C. 354266",
      "D. 371287"
    ],
    "correctLetter": "D",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "perpetuity",
    "resultValue": 371287.12871287134,
    "calculatorEntry": "15000  ÷  (1.02 ^ 2 - 1)",
    "shortcutSolution": "Half-year effective rate = 1.02²−1.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Half-year effective rate = 1.02²−1."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "15000  ÷  (1.02 ^ 2 - 1)"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "$371,287.13"
      }
    ],
    "finalAnswer": "$371,287.13",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "15000  ÷  (1.02 ^ 2 - 1)",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "$371,287.13",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Half-year effective rate = 1.02²−1."
  },
  {
    "id": "econ-sample-122",
    "problemNumber": 122,
    "sourceFile": "IMG_0782.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "sl",
    "topicTitle": "sl",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "Equipment costs $10,000 and has $500 salvage after 10 years. Find annual straight-line depreciation.",
    "choices": [
      "A. 950",
      "B. 1050",
      "C. 1000",
      "D. 880"
    ],
    "correctLetter": "A",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "sl",
    "resultValue": 950.0,
    "calculatorEntry": "(10000 - 500)  ÷  10",
    "shortcutSolution": "Divide the depreciable base by useful life.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Divide the depreciable base by useful life."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "(10000 - 500)  ÷  10"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "$950.00"
      }
    ],
    "finalAnswer": "$950.00",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "(10000 - 500)  ÷  10",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "$950.00",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Divide the depreciable base by useful life."
  },
  {
    "id": "econ-sample-123",
    "problemNumber": 123,
    "sourceFile": "IMG_0782.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "sl",
    "topicTitle": "sl",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "A $10,000 machine lasts 10 years and has salvage of 10% of its cost. Find book value after 6 years using straight line.",
    "choices": [
      "A. 4700",
      "B. 4600",
      "C. 4800",
      "D. 4500"
    ],
    "correctLetter": "B",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "sl",
    "resultValue": 4600.0,
    "calculatorEntry": "10000 - 6  ×  (10000 - 1000)  ÷  10",
    "shortcutSolution": "Salvage = $1,000; annual depreciation = $900.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Salvage = $1,000; annual depreciation = $900."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "10000 - 6  ×  (10000 - 1000)  ÷  10"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "$4,600.00"
      }
    ],
    "finalAnswer": "$4,600.00",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "10000 - 6  ×  (10000 - 1000)  ÷  10",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "$4,600.00",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Salvage = $1,000; annual depreciation = $900."
  },
  {
    "id": "econ-sample-124",
    "problemNumber": 124,
    "sourceFile": "IMG_0782.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "sl",
    "topicTitle": "sl",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "Tools cost $15,000, last 3 years, and have $1,000 salvage. Find annual straight-line depreciation.",
    "choices": [
      "A. 4600",
      "B. 4100",
      "C. 5200",
      "D. 6500"
    ],
    "correctLetter": null,
    "answerStatus": "choice-mismatch",
    "assumption": true,
    "formulaId": "sl",
    "resultValue": 4666.666666666667,
    "calculatorEntry": "(15000 - 1000)  ÷  3",
    "shortcutSolution": "The correct charge is $4,666.67; the printed $4,600 is not standard rounding to the shown precision. No printed choice matches the calculated result at its stated precision. Check the original sheet; do not force a letter.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "The correct charge is $4,666.67; the printed $4,600 is not standard rounding to the shown precision. No printed choice matches the calculated result at its stated precision. Check the original sheet; do not force a letter."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "(15000 - 1000)  ÷  3"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "$4,666.67"
      }
    ],
    "finalAnswer": "$4,666.67",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "(15000 - 1000)  ÷  3",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "$4,666.67",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "The correct charge is $4,666.67; the printed $4,600 is not standard rounding to the shown precision. No printed choice matches the calculated result at its stated precision. Check the original sheet; do not force a letter."
  },
  {
    "id": "econ-sample-125",
    "problemNumber": 125,
    "sourceFile": "IMG_0782.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "sl",
    "topicTitle": "sl",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "A mill costs ₱800,000 installed, lasts 10 years, and has ₱50,000 salvage with ₱15,000 dismantling. Find annual straight-line depreciation.",
    "choices": [
      "A. 75500",
      "B. 76000",
      "C. 76500",
      "D. 77000"
    ],
    "correctLetter": "C",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "sl",
    "resultValue": 76500.0,
    "calculatorEntry": "(800000 - 50000 + 15000)  ÷  10",
    "shortcutSolution": "Deduct net salvage ₱35,000, not gross salvage ₱50,000.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Deduct net salvage ₱35,000, not gross salvage ₱50,000."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "(800000 - 50000 + 15000)  ÷  10"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "₱76,500.00"
      }
    ],
    "finalAnswer": "₱76,500.00",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "(800000 - 50000 + 15000)  ÷  10",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "₱76,500.00",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Deduct net salvage ₱35,000, not gross salvage ₱50,000."
  },
  {
    "id": "econ-sample-126",
    "problemNumber": 126,
    "sourceFile": "IMG_0782.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "sl",
    "topicTitle": "sl",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "A $45,000 welding machine lasts 5 years and has $2,500 salvage. Find annual straight-line depreciation rate as a percent of first cost.",
    "choices": [
      "A. 16.25",
      "B. 18.89",
      "C. 17.23",
      "D. 19.54"
    ],
    "correctLetter": "B",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "sl",
    "resultValue": 18.88888888888889,
    "calculatorEntry": "(45000 - 2500)  ÷  5  ÷  45000  ×  100",
    "shortcutSolution": "The annual charge is $8,500; divide by first cost to get the rate.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "The annual charge is $8,500; divide by first cost to get the rate."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "(45000 - 2500)  ÷  5  ÷  45000  ×  100"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "18.89%"
      }
    ],
    "finalAnswer": "18.89%",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "(45000 - 2500)  ÷  5  ÷  45000  ×  100",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "18.89%",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "The annual charge is $8,500; divide by first cost to get the rate."
  },
  {
    "id": "econ-sample-127",
    "problemNumber": 127,
    "sourceFile": "IMG_0782.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "sl",
    "topicTitle": "sl",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "Equipment costs $900,000, lasts 8 years, and has $200,000 salvage. Find book value after 5 years by straight line.",
    "choices": [
      "A. 446200",
      "B. 438300",
      "C. 421400",
      "D. 462500"
    ],
    "correctLetter": "D",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "sl",
    "resultValue": 462500.0,
    "calculatorEntry": "900000 - 5  ×  (900000 - 200000)  ÷  8",
    "shortcutSolution": "Subtract five annual charges.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Subtract five annual charges."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "900000 - 5  ×  (900000 - 200000)  ÷  8"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "$462,500.00"
      }
    ],
    "finalAnswer": "$462,500.00",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "900000 - 5  ×  (900000 - 200000)  ÷  8",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "$462,500.00",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Subtract five annual charges."
  },
  {
    "id": "econ-sample-128",
    "problemNumber": 128,
    "sourceFile": "IMG_0782.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "sl",
    "topicTitle": "sl",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "A $200,000 machine has $25,000 salvage after 20 years. Find straight-line book value after 12 years.",
    "choices": [
      "A. 105000",
      "B. 115000",
      "C. 87500",
      "D. 95000"
    ],
    "correctLetter": "D",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "sl",
    "resultValue": 95000.0,
    "calculatorEntry": "200000 - 12  ×  (200000 - 25000)  ÷  20",
    "shortcutSolution": "Annual charge = $8,750.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Annual charge = $8,750."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "200000 - 12  ×  (200000 - 25000)  ÷  20"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "$95,000.00"
      }
    ],
    "finalAnswer": "$95,000.00",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "200000 - 12  ×  (200000 - 25000)  ÷  20",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "$95,000.00",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Annual charge = $8,750."
  },
  {
    "id": "econ-sample-129",
    "problemNumber": 129,
    "sourceFile": "IMG_0782.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "sl",
    "topicTitle": "sl",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "An asset costs ₱500,000 and has ₱100,000 salvage after 25 years. Find total straight-line depreciation in the first 3 years.",
    "choices": [
      "A. 48000",
      "B. 24000",
      "C. 32000",
      "D. 16000"
    ],
    "correctLetter": "A",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "sl",
    "resultValue": 48000.0,
    "calculatorEntry": "3  ×  (500000 - 100000)  ÷  25",
    "shortcutSolution": "Total depreciation is three times the annual charge.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Total depreciation is three times the annual charge."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "3  ×  (500000 - 100000)  ÷  25"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "₱48,000.00"
      }
    ],
    "finalAnswer": "₱48,000.00",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "3  ×  (500000 - 100000)  ÷  25",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "₱48,000.00",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Total depreciation is three times the annual charge."
  },
  {
    "id": "econ-sample-130",
    "problemNumber": 130,
    "sourceFile": "IMG_0782.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "sl",
    "topicTitle": "sl",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "Equipment costs ₱500,000 plus ₱30,000 installation. Life is 10 years; salvage is 10% of first cost. Find straight-line book value after 5 years.",
    "choices": [
      "A. 291500",
      "B. 242241",
      "C. 282242",
      "D. 214242"
    ],
    "correctLetter": "A",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "sl",
    "resultValue": 291500.0,
    "calculatorEntry": "530000 - 5  ×  (530000 - 53000)  ÷  10",
    "shortcutSolution": "First cost includes installation; salvage is ₱53,000.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "First cost includes installation; salvage is ₱53,000."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "530000 - 5  ×  (530000 - 53000)  ÷  10"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "₱291,500.00"
      }
    ],
    "finalAnswer": "₱291,500.00",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "530000 - 5  ×  (530000 - 53000)  ÷  10",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "₱291,500.00",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "First cost includes installation; salvage is ₱53,000."
  },
  {
    "id": "econ-sample-131",
    "problemNumber": 131,
    "sourceFile": "IMG_0782.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "sl",
    "topicTitle": "sl",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "A ₱45,000 welding machine lasts 5 years and has ₱2,500 salvage. Find annual straight-line depreciation rate.",
    "choices": [
      "A. 18.89",
      "B. 19.21",
      "C. 19.58",
      "D. 19.89"
    ],
    "correctLetter": "A",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "sl",
    "resultValue": 18.88888888888889,
    "calculatorEntry": "(45000 - 2500)  ÷  5  ÷  45000  ×  100",
    "shortcutSolution": "Same calculation as problem 126, with reordered choices.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Same calculation as problem 126, with reordered choices."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "(45000 - 2500)  ÷  5  ÷  45000  ×  100"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "18.89%"
      }
    ],
    "finalAnswer": "18.89%",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "(45000 - 2500)  ÷  5  ÷  45000  ×  100",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "18.89%",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Same calculation as problem 126, with reordered choices."
  },
  {
    "id": "econ-sample-132",
    "problemNumber": 132,
    "sourceFile": "IMG_0783.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "sinkingDep",
    "topicTitle": "sinkingDep",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "Equipment costs ₱10,000 and has ₱500 salvage after 10 years. Find annual sinking-fund deposit at 4%.",
    "choices": [
      "A. 791.26",
      "B. 792.61",
      "C. 726.17",
      "D. 771.26"
    ],
    "correctLetter": "A",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "sinkingDep",
    "resultValue": 791.2639711362962,
    "calculatorEntry": "9500  ×  (0.04  ÷  ((1 + 0.04) ^ 10 - 1))",
    "shortcutSolution": "The question's “annual depreciation cost” is the fixed sinking-fund deposit.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "The question's “annual depreciation cost” is the fixed sinking-fund deposit."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "9500  ×  (0.04  ÷  ((1 + 0.04) ^ 10 - 1))"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "₱791.26"
      }
    ],
    "finalAnswer": "₱791.26",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "9500  ×  (0.04  ÷  ((1 + 0.04) ^ 10 - 1))",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "₱791.26",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "The question's “annual depreciation cost” is the fixed sinking-fund deposit."
  },
  {
    "id": "econ-sample-133",
    "problemNumber": 133,
    "sourceFile": "IMG_0783.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "annualSF",
    "topicTitle": "annualSF",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "A $30,000 machine is used for 5 years and sold for $10,000. At 8%, find annual cost using sinking-fund depreciation.",
    "choices": [
      "A. 4589",
      "B. 4745",
      "C. 5809",
      "D. 5320"
    ],
    "correctLetter": "C",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "annualSF",
    "resultValue": 5809.129091336728,
    "calculatorEntry": "20000  ×  (0.08  ÷  ((1 + 0.08) ^ 5 - 1)) + 30000  ×  0.08",
    "shortcutSolution": "Annual cost = sinking-fund deposit + interest on original capital, as used in the handout.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Annual cost = sinking-fund deposit + interest on original capital, as used in the handout."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "20000  ×  (0.08  ÷  ((1 + 0.08) ^ 5 - 1)) + 30000  ×  0.08"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "$5,809.13"
      }
    ],
    "finalAnswer": "$5,809.13",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "20000  ×  (0.08  ÷  ((1 + 0.08) ^ 5 - 1)) + 30000  ×  0.08",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "$5,809.13",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Annual cost = sinking-fund deposit + interest on original capital, as used in the handout."
  },
  {
    "id": "econ-sample-134",
    "problemNumber": 134,
    "sourceFile": "IMG_0783.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "sf",
    "topicTitle": "sf",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "A $20,000 machine lasts 10 years and has $2,000 salvage. Find annual replacement savings at 4%.",
    "choices": [
      "A. 1300",
      "B. 1200",
      "C. 1400",
      "D. 1500"
    ],
    "correctLetter": "D",
    "answerStatus": "nearest-choice",
    "assumption": false,
    "formulaId": "sf",
    "resultValue": 1499.236997942456,
    "calculatorEntry": "18000  ×  (0.04  ÷  ((1 + 0.04) ^ 10 - 1))",
    "shortcutSolution": "Same replacement fund as problem 47. Closest printed choice D is 1500; the unrounded calculated result is 1,499.23699794. This choice is approximate, not an exact match.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Same replacement fund as problem 47. Closest printed choice D is 1500; the unrounded calculated result is 1,499.23699794. This choice is approximate, not an exact match."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "18000  ×  (0.04  ÷  ((1 + 0.04) ^ 10 - 1))"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "$1,499.24"
      }
    ],
    "finalAnswer": "$1,499.24",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "18000  ×  (0.04  ÷  ((1 + 0.04) ^ 10 - 1))",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "$1,499.24",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Same replacement fund as problem 47. Closest printed choice D is 1500; the unrounded calculated result is 1,499.23699794. This choice is approximate, not an exact match."
  },
  {
    "id": "econ-sample-135",
    "problemNumber": 135,
    "sourceFile": "IMG_0783.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "syd",
    "topicTitle": "syd",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "An asset costs ₱9,000, lasts 10 years, and has ₱1,000 salvage. Find total SYD depreciation in the first 3 years.",
    "choices": [
      "A. 3279.27",
      "B. 3927.27",
      "C. 3729.27",
      "D. 3792.72"
    ],
    "correctLetter": "B",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "syd",
    "resultValue": 3927.2727272727275,
    "calculatorEntry": "8000  ×  (10 + 9 + 8)  ÷  55",
    "shortcutSolution": "Use the digits 10+9+8 over the sum 55.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Use the digits 10+9+8 over the sum 55."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "8000  ×  (10 + 9 + 8)  ÷  55"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "₱3,927.27"
      }
    ],
    "finalAnswer": "₱3,927.27",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "8000  ×  (10 + 9 + 8)  ÷  55",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "₱3,927.27",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Use the digits 10+9+8 over the sum 55."
  },
  {
    "id": "econ-sample-136",
    "problemNumber": 136,
    "sourceFile": "IMG_0783.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "syd",
    "topicTitle": "syd",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "A ₱10,000 asset lasts 20 years with zero salvage. Find third-year SYD depreciation.",
    "choices": [
      "A. 1000",
      "B. 857",
      "C. 937",
      "D. 747"
    ],
    "correctLetter": "B",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "syd",
    "resultValue": 857.1428571428571,
    "calculatorEntry": "10000  ×  18  ÷  210",
    "shortcutSolution": "Year 3 uses digit 18.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Year 3 uses digit 18."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "10000  ×  18  ÷  210"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "₱857.14"
      }
    ],
    "finalAnswer": "₱857.14",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "10000  ×  18  ÷  210",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "₱857.14",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Year 3 uses digit 18."
  },
  {
    "id": "econ-sample-137",
    "problemNumber": 137,
    "sourceFile": "IMG_0783.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "syd",
    "topicTitle": "syd",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "A $10,000 asset lasts 20 years with zero salvage. Find third-year SYD depreciation.",
    "choices": [
      "A. 824",
      "B. 842",
      "C. 828",
      "D. 857"
    ],
    "correctLetter": "D",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "syd",
    "resultValue": 857.1428571428571,
    "calculatorEntry": "10000  ×  18  ÷  210",
    "shortcutSolution": "Same numeric result as problem 136; different option order.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Same numeric result as problem 136; different option order."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "10000  ×  18  ÷  210"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "$857.14"
      }
    ],
    "finalAnswer": "$857.14",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "10000  ×  18  ÷  210",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "$857.14",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Same numeric result as problem 136; different option order."
  },
  {
    "id": "econ-sample-138",
    "problemNumber": 138,
    "sourceFile": "IMG_0783.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "syd",
    "topicTitle": "syd",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "A ₱9,000 asset lasts 10 years with ₱1,000 salvage. Find book value after the first year using SYD.",
    "choices": [
      "A. 8000",
      "B. 6500",
      "C. 7545",
      "D. 6000"
    ],
    "correctLetter": "C",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "syd",
    "resultValue": 7545.454545454546,
    "calculatorEntry": "9000 - 8000  ×  10  ÷  55",
    "shortcutSolution": "Deduct only first-year depreciation.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Deduct only first-year depreciation."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "9000 - 8000  ×  10  ÷  55"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "₱7,545.45"
      }
    ],
    "finalAnswer": "₱7,545.45",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "9000 - 8000  ×  10  ÷  55",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "₱7,545.45",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Deduct only first-year depreciation."
  },
  {
    "id": "econ-sample-139",
    "problemNumber": 139,
    "sourceFile": "IMG_0783.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "syd",
    "topicTitle": "syd",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "Equipment cost $15,000 three years ago and lasts 5 years. Find book value after year 3 using SYD.",
    "choices": [
      "A. 4000",
      "B. 3000",
      "C. 4600",
      "D. 2800"
    ],
    "correctLetter": "B",
    "answerStatus": "matched",
    "assumption": true,
    "formulaId": "syd",
    "resultValue": 2999.9999999999995,
    "calculatorEntry": "15000  ×  (1 - (5 + 4 + 3)  ÷  15)",
    "shortcutSolution": "Assume zero salvage because none is specified.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Assume zero salvage because none is specified."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "15000  ×  (1 - (5 + 4 + 3)  ÷  15)"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "$3,000.00"
      }
    ],
    "finalAnswer": "$3,000.00",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "15000  ×  (1 - (5 + 4 + 3)  ÷  15)",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "$3,000.00",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Assume zero salvage because none is specified."
  },
  {
    "id": "econ-sample-140",
    "problemNumber": 140,
    "sourceFile": "IMG_0783.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "syd",
    "topicTitle": "syd",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "A $9,000 asset lasts 10 years and has $1,000 salvage. Find total SYD depreciation after 4 years.",
    "choices": [
      "A. 4945",
      "B. 4594",
      "C. 4549",
      "D. 4954"
    ],
    "correctLetter": "A",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "syd",
    "resultValue": 4945.454545454545,
    "calculatorEntry": "8000  ×  (10 + 9 + 8 + 7)  ÷  55",
    "shortcutSolution": "Use four descending year digits; do not subtract from first cost because total depreciation is requested.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Use four descending year digits; do not subtract from first cost because total depreciation is requested."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "8000  ×  (10 + 9 + 8 + 7)  ÷  55"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "$4,945.45"
      }
    ],
    "finalAnswer": "$4,945.45",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "8000  ×  (10 + 9 + 8 + 7)  ÷  55",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "$4,945.45",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Use four descending year digits; do not subtract from first cost because total depreciation is requested."
  },
  {
    "id": "econ-sample-141",
    "problemNumber": 141,
    "sourceFile": "IMG_0783.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "db",
    "topicTitle": "db",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "A ₱50,000 machine loses 20% of starting book value each year. Find book value after 9 years.",
    "choices": [
      "A. 6710.89",
      "B. 6400.89",
      "C. 6666.89",
      "D. 6512.78"
    ],
    "correctLetter": "A",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "db",
    "resultValue": 6710.886400000003,
    "calculatorEntry": "50000  ×  0.8 ^ 9",
    "shortcutSolution": "Keep 80% of book value each year.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Keep 80% of book value each year."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "50000  ×  0.8 ^ 9"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "₱6,710.89"
      }
    ],
    "finalAnswer": "₱6,710.89",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "50000  ×  0.8 ^ 9",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "₱6,710.89",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Keep 80% of book value each year."
  },
  {
    "id": "econ-sample-142",
    "problemNumber": 142,
    "sourceFile": "IMG_0783.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "db",
    "topicTitle": "db",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "A $480,000 machine lasts 12 years and has salvage equal to 10% of first cost. Find book value after 5 years using declining balance.",
    "choices": [
      "A. 183896",
      "B. 196432",
      "C. 152758",
      "D. 214785"
    ],
    "correctLetter": "A",
    "answerStatus": "nearest-choice",
    "assumption": false,
    "formulaId": "db",
    "resultValue": 183896.9687787498,
    "calculatorEntry": "480000  ×  0.1 ^ (5  ÷  12)",
    "shortcutSolution": "Use C(S/C)^(m/n). The printed choice near the result may contain a typo. Closest printed choice A is 183896; the unrounded calculated result is 183,896.96877875. This choice is approximate, not an exact match.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Use C(S/C)^(m/n). The printed choice near the result may contain a typo. Closest printed choice A is 183896; the unrounded calculated result is 183,896.96877875. This choice is approximate, not an exact match."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "480000  ×  0.1 ^ (5  ÷  12)"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "$183,896.97"
      }
    ],
    "finalAnswer": "$183,896.97",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "480000  ×  0.1 ^ (5  ÷  12)",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "$183,896.97",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Use C(S/C)^(m/n). The printed choice near the result may contain a typo. Closest printed choice A is 183896; the unrounded calculated result is 183,896.96877875. This choice is approximate, not an exact match."
  },
  {
    "id": "econ-sample-143",
    "problemNumber": 143,
    "sourceFile": "IMG_0783.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "db",
    "topicTitle": "db",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "Equipment costs ₱90,000, lasts 8 years, and has ₱18,000 salvage. Find book value and accumulated depreciation after 5 years using double declining balance.",
    "choices": [
      "A. 21357.42 and 68642.58",
      "B. 24362.48 and 65637.52",
      "C. 15830.34 and 74169.66",
      "D. 19442.78 and 70557.22"
    ],
    "correctLetter": "A",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "db",
    "resultValue": 21357.421875,
    "calculatorEntry": "90000  ×  0.75 ^ 5",
    "shortcutSolution": "DDB rate = 2/8. BV≈₱21,357.42, accumulated depreciation≈₱68,642.58; BV remains above salvage at year 5.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "DDB rate = 2/8. BV≈₱21,357.42, accumulated depreciation≈₱68,642.58; BV remains above salvage at year 5."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "90000  ×  0.75 ^ 5"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "₱21,357.42 book value; ₱68,642.58 accumulated depreciation"
      }
    ],
    "finalAnswer": "₱21,357.42 book value; ₱68,642.58 accumulated depreciation",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "90000  ×  0.75 ^ 5",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "₱21,357.42 book value; ₱68,642.58 accumulated depreciation",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "DDB rate = 2/8. BV≈₱21,357.42, accumulated depreciation≈₱68,642.58; BV remains above salvage at year 5."
  },
  {
    "id": "econ-sample-144",
    "problemNumber": 144,
    "sourceFile": "IMG_0783.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "db",
    "topicTitle": "db",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "A $720,000 machine has $40,545.73 salvage after 10 years. Find constant annual declining-balance rate.",
    "choices": [
      "A. 20",
      "B. 30",
      "C. 18",
      "D. 25"
    ],
    "correctLetter": "D",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "db",
    "resultValue": 25.000000109287768,
    "calculatorEntry": "(1 - (40545.73  ÷  720000) ^ 0.1)  ×  100",
    "shortcutSolution": "Same rate calculation as problem 37.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Same rate calculation as problem 37."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "(1 - (40545.73  ÷  720000) ^ 0.1)  ×  100"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "25.00%"
      }
    ],
    "finalAnswer": "25.00%",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "(1 - (40545.73  ÷  720000) ^ 0.1)  ×  100",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "25.00%",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Same rate calculation as problem 37."
  },
  {
    "id": "econ-sample-145",
    "problemNumber": 145,
    "sourceFile": "IMG_0783.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "real",
    "topicTitle": "real",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "Inflation is 9% and the real cost of money is 15% annually. Find the combined nominal rate for future costs estimated in present dollars.",
    "choices": [
      "A. 24",
      "B. 6",
      "C. 22.45",
      "D. 25.35"
    ],
    "correctLetter": "D",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "real",
    "resultValue": 25.350000000000005,
    "calculatorEntry": "(1.09  ×  1.15 - 1)  ×  100",
    "shortcutSolution": "Combine by multiplying growth factors; do not add percentages only.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Combine by multiplying growth factors; do not add percentages only."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "(1.09  ×  1.15 - 1)  ×  100"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "25.35%"
      }
    ],
    "finalAnswer": "25.35%",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "(1.09  ×  1.15 - 1)  ×  100",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "25.35%",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Combine by multiplying growth factors; do not add percentages only."
  },
  {
    "id": "econ-sample-146",
    "problemNumber": 146,
    "sourceFile": "IMG_0783.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "real",
    "topicTitle": "real",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "An item costs $100 today. At 7% annual inflation, find its price after 10 years.",
    "choices": [
      "A. 206.93",
      "B. 185.58",
      "C. 196.67",
      "D. 178.76"
    ],
    "correctLetter": "C",
    "answerStatus": "nearest-choice",
    "assumption": false,
    "formulaId": "real",
    "resultValue": 196.71513572895665,
    "calculatorEntry": "100  ×  1.07 ^ 10",
    "shortcutSolution": "Future price = today's price times the inflation growth factor. Closest printed choice C is 196.67; the unrounded calculated result is 196.71513573. This choice is approximate, not an exact match.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Future price = today's price times the inflation growth factor. Closest printed choice C is 196.67; the unrounded calculated result is 196.71513573. This choice is approximate, not an exact match."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "100  ×  1.07 ^ 10"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "$196.72"
      }
    ],
    "finalAnswer": "$196.72",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "100  ×  1.07 ^ 10",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "$196.72",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Future price = today's price times the inflation growth factor. Closest printed choice C is 196.67; the unrounded calculated result is 196.71513573. This choice is approximate, not an exact match."
  },
  {
    "id": "econ-sample-147",
    "problemNumber": 147,
    "sourceFile": "IMG_0783.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "real",
    "topicTitle": "real",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "A ₱1,000 bond pays ₱50 annually for 20 years and repays ₱1,000 at maturity. At 2% annual inflation, find real rate of return.",
    "choices": [
      "A. 2.94",
      "B. 4.25",
      "C. 3.16",
      "D. 5.16"
    ],
    "correctLetter": "A",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "real",
    "resultValue": 2.941176470588247,
    "calculatorEntry": "(1.05  ÷  1.02 - 1)  ×  100",
    "shortcutSolution": "Bought at par: nominal yield = 5%; real yield = (1.05/1.02)−1.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Bought at par: nominal yield = 5%; real yield = (1.05/1.02)−1."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "(1.05  ÷  1.02 - 1)  ×  100"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "2.94%"
      }
    ],
    "finalAnswer": "2.94%",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "(1.05  ÷  1.02 - 1)  ×  100",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "2.94%",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Bought at par: nominal yield = 5%; real yield = (1.05/1.02)−1."
  },
  {
    "id": "econ-sample-148",
    "problemNumber": 148,
    "sourceFile": "IMG_0783.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "real",
    "topicTitle": "real",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "Inflation is 6% and real cost of money is 10%. Find the combined nominal rate.",
    "choices": [
      "A. 16.6",
      "B. 17.7",
      "C. 15.5",
      "D. 14.4"
    ],
    "correctLetter": "A",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "real",
    "resultValue": 16.600000000000016,
    "calculatorEntry": "(1.06  ×  1.1 - 1)  ×  100",
    "shortcutSolution": "Multiply 1.06 by 1.10 and subtract 1.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Multiply 1.06 by 1.10 and subtract 1."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "(1.06  ×  1.1 - 1)  ×  100"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "16.60%"
      }
    ],
    "finalAnswer": "16.60%",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "(1.06  ×  1.1 - 1)  ×  100",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "16.60%",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Multiply 1.06 by 1.10 and subtract 1."
  },
  {
    "id": "econ-sample-149",
    "problemNumber": 149,
    "sourceFile": "IMG_0783.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "euac",
    "topicTitle": "euac",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "Maintenance costs at years 1–4 are $100, $200, $300, $400. Find equivalent uniform annual maintenance at 6%.",
    "choices": [
      "A. 243",
      "B. 292",
      "C. 256",
      "D. 238"
    ],
    "correctLetter": "A",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "euac",
    "resultValue": 242.72338417817681,
    "calculatorEntry": "(100  ×  1  ÷  1.06 ^ 1 + 100  ×  2  ÷  1.06 ^ 2 + 100  ×  3  ÷  1.06 ^ 3 + 100  ×  4  ÷  1.06 ^ 4)  ×  (0.06  ÷  (1 - (1 + 0.06) ^ (-4)))",
    "shortcutSolution": "Discount unequal costs to time zero, then annualize.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Discount unequal costs to time zero, then annualize."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "(100  ×  1  ÷  1.06 ^ 1 + 100  ×  2  ÷  1.06 ^ 2 + 100  ×  3  ÷  1.06 ^ 3 + 100  ×  4  ÷  1.06 ^ 4)  ×  (0.06  ÷  (1 - (1 + 0.06) ^ (-4)))"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "$242.72"
      }
    ],
    "finalAnswer": "$242.72",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "(100  ×  1  ÷  1.06 ^ 1 + 100  ×  2  ÷  1.06 ^ 2 + 100  ×  3  ÷  1.06 ^ 3 + 100  ×  4  ÷  1.06 ^ 4)  ×  (0.06  ÷  (1 - (1 + 0.06) ^ (-4)))",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "$242.72",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Discount unequal costs to time zero, then annualize."
  },
  {
    "id": "econ-sample-150",
    "problemNumber": 150,
    "sourceFile": "IMG_0783.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "annualSL",
    "topicTitle": "annualSL",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "A $100,000 machine has $5,000 scrap after 10 years. At 5%, find annual cost using straight-line depreciation.",
    "choices": [
      "A. 14500",
      "B. 13200",
      "C. 11200",
      "D. 12800"
    ],
    "correctLetter": "A",
    "answerStatus": "matched",
    "assumption": true,
    "formulaId": "annualSL",
    "resultValue": 14500.0,
    "calculatorEntry": "(100000 - 5000)  ÷  10 + 100000  ×  0.05",
    "shortcutSolution": "This follows the handout convention AC = straight-line charge + i×first cost; it is different from modern capital recovery EUAC.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "This follows the handout convention AC = straight-line charge + i×first cost; it is different from modern capital recovery EUAC."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "(100000 - 5000)  ÷  10 + 100000  ×  0.05"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "$14,500.00"
      }
    ],
    "finalAnswer": "$14,500.00",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "(100000 - 5000)  ÷  10 + 100000  ×  0.05",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "$14,500.00",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "This follows the handout convention AC = straight-line charge + i×first cost; it is different from modern capital recovery EUAC."
  },
  {
    "id": "econ-sample-151",
    "problemNumber": 151,
    "sourceFile": "IMG_0783.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "euac",
    "topicTitle": "euac",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "A pipeline costs $100,000 and lasts 20 years with no stated salvage. Find equivalent annual cost at 6%.",
    "choices": [
      "A. 8718.45",
      "B. 8482.29",
      "C. 8524.58",
      "D. 8691.92"
    ],
    "correctLetter": "A",
    "answerStatus": "nearest-choice",
    "assumption": false,
    "formulaId": "euac",
    "resultValue": 8718.45569768514,
    "calculatorEntry": "100000  ×  (0.06  ÷  (1 - (1 + 0.06) ^ (-20)))",
    "shortcutSolution": "Use capital recovery over the 20-year life. Closest printed choice A is 8718.45; the unrounded calculated result is 8,718.45569769. This choice is approximate, not an exact match.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Use capital recovery over the 20-year life. Closest printed choice A is 8718.45; the unrounded calculated result is 8,718.45569769. This choice is approximate, not an exact match."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "100000  ×  (0.06  ÷  (1 - (1 + 0.06) ^ (-20)))"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "$8,718.46"
      }
    ],
    "finalAnswer": "$8,718.46",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "100000  ×  (0.06  ÷  (1 - (1 + 0.06) ^ (-20)))",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "$8,718.46",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Use capital recovery over the 20-year life. Closest printed choice A is 8718.45; the unrounded calculated result is 8,718.45569769. This choice is approximate, not an exact match."
  },
  {
    "id": "econ-sample-152",
    "problemNumber": 152,
    "sourceFile": "IMG_0783.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "cc",
    "topicTitle": "cc",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "A house costs ₱500,000 and needs ₱10,000 annual maintenance indefinitely. Find capitalized cost at 6%.",
    "choices": [
      "A. 666000",
      "B. 666666.67",
      "C. 633333.33",
      "D. 650000"
    ],
    "correctLetter": "B",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "cc",
    "resultValue": 666666.6666666667,
    "calculatorEntry": "500000 + 10000  ÷  0.06",
    "shortcutSolution": "Add initial cost and the present value of perpetual maintenance.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Add initial cost and the present value of perpetual maintenance."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "500000 + 10000  ÷  0.06"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "₱666,666.67"
      }
    ],
    "finalAnswer": "₱666,666.67",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "500000 + 10000  ÷  0.06",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "₱666,666.67",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Add initial cost and the present value of perpetual maintenance."
  },
  {
    "id": "econ-sample-153",
    "problemNumber": 153,
    "sourceFile": "IMG_0784.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "cc",
    "topicTitle": "cc",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "A timber penstock for a hydroelectric plant costs $50,000, lasts 10 years, has $2,000 salvage and $1,200 annual maintenance. Find capitalized cost at 10%.",
    "choices": [
      "A. 92118",
      "B. 96110",
      "C. 90102",
      "D. 103120"
    ],
    "correctLetter": "A",
    "answerStatus": "matched",
    "assumption": true,
    "formulaId": "cc",
    "resultValue": 92117.78954360553,
    "calculatorEntry": "50000 + 48000  ÷  (1.1 ^ 10 - 1) + 1200  ÷  0.1",
    "shortcutSolution": "Initial cost + indefinite net replacements + perpetual maintenance.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Initial cost + indefinite net replacements + perpetual maintenance."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "50000 + 48000  ÷  (1.1 ^ 10 - 1) + 1200  ÷  0.1"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "$92,117.79"
      }
    ],
    "finalAnswer": "$92,117.79",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "50000 + 48000  ÷  (1.1 ^ 10 - 1) + 1200  ÷  0.1",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "$92,117.79",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Initial cost + indefinite net replacements + perpetual maintenance."
  },
  {
    "id": "econ-sample-154",
    "problemNumber": 154,
    "sourceFile": "IMG_0784.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "cc",
    "topicTitle": "cc",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "A business needs $500,000 immediately and $90,000 annual operation and maintenance. Find capitalized cost at 15%.",
    "choices": [
      "A. 590000",
      "B. 3933000",
      "C. 1200000",
      "D. 1100000"
    ],
    "correctLetter": "D",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "cc",
    "resultValue": 1100000.0,
    "calculatorEntry": "500000 + 90000  ÷  0.15",
    "shortcutSolution": "Annual expenses are a perpetuity.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Annual expenses are a perpetuity."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "500000 + 90000  ÷  0.15"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "$1,100,000.00"
      }
    ],
    "finalAnswer": "$1,100,000.00",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "500000 + 90000  ÷  0.15",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "$1,100,000.00",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Annual expenses are a perpetuity."
  },
  {
    "id": "econ-sample-155",
    "problemNumber": 155,
    "sourceFile": "IMG_0784.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "cc",
    "topicTitle": "cc",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "An asset costs $100,000 and annual maintenance cost is $18,000. Find capitalized cost for perpetual service at 8%.",
    "choices": [
      "A. 350000",
      "B. 325000",
      "C. 320000",
      "D. 310000"
    ],
    "correctLetter": "B",
    "answerStatus": "matched",
    "assumption": true,
    "formulaId": "cc",
    "resultValue": 325000.0,
    "calculatorEntry": "100000 + 18000  ÷  0.08",
    "shortcutSolution": "The sheet says “annual cost”; the intended convention treats $18,000 as recurring expense excluding recovery of first cost.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "The sheet says “annual cost”; the intended convention treats $18,000 as recurring expense excluding recovery of first cost."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "100000 + 18000  ÷  0.08"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "$325,000.00"
      }
    ],
    "finalAnswer": "$325,000.00",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "100000 + 18000  ÷  0.08",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "$325,000.00",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "The sheet says “annual cost”; the intended convention treats $18,000 as recurring expense excluding recovery of first cost."
  },
  {
    "id": "econ-sample-156",
    "problemNumber": 156,
    "sourceFile": "IMG_0784.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "cc",
    "topicTitle": "cc",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "At 6%, find approximate capitalized cost of a $250 million bridge with $100 million rebuilding every 20 years.",
    "choices": [
      "A. 301000000",
      "B. 290000000",
      "C. 295000000",
      "D. 282000000"
    ],
    "correctLetter": "C",
    "answerStatus": "nearest-choice",
    "assumption": false,
    "formulaId": "cc",
    "resultValue": 295307594.961419,
    "calculatorEntry": "250000000 + 100000000  ÷  (1.06 ^ 20 - 1)",
    "shortcutSolution": "Same bridge cash flow as problem 9, now stated in dollars. Closest printed choice C is 295000000; the unrounded calculated result is 295,307,594.96141899. This choice is approximate, not an exact match.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Same bridge cash flow as problem 9, now stated in dollars. Closest printed choice C is 295000000; the unrounded calculated result is 295,307,594.96141899. This choice is approximate, not an exact match."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "250000000 + 100000000  ÷  (1.06 ^ 20 - 1)"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "$295,307,594.96"
      }
    ],
    "finalAnswer": "$295,307,594.96",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "250000000 + 100000000  ÷  (1.06 ^ 20 - 1)",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "$295,307,594.96",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Same bridge cash flow as problem 9, now stated in dollars. Closest printed choice C is 295000000; the unrounded calculated result is 295,307,594.96141899. This choice is approximate, not an exact match."
  },
  {
    "id": "econ-sample-157",
    "problemNumber": 157,
    "sourceFile": "IMG_0784.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "cc",
    "topicTitle": "cc",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "A structure costs $1.5 million and needs $150,000 annual maintenance indefinitely. Find capitalized cost at 15%.",
    "choices": [
      "A. 2000000",
      "B. 1150000",
      "C. 2500000",
      "D. 1750000"
    ],
    "correctLetter": "C",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "cc",
    "resultValue": 2500000.0,
    "calculatorEntry": "1500000 + 150000  ÷  0.15",
    "shortcutSolution": "Initial cost plus perpetual maintenance present worth.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Initial cost plus perpetual maintenance present worth."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "1500000 + 150000  ÷  0.15"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "$2,500,000.00"
      }
    ],
    "finalAnswer": "$2,500,000.00",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "1500000 + 150000  ÷  0.15",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "$2,500,000.00",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Initial cost plus perpetual maintenance present worth."
  },
  {
    "id": "econ-sample-158",
    "problemNumber": 158,
    "sourceFile": "IMG_0784.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "cc",
    "topicTitle": "cc",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "Equipment costs ₱324,000, has ₱50,000 salvage after 4 years, and money is worth 6%. Find capitalized cost.",
    "choices": [
      "A. 540090.34",
      "B. 541033.66",
      "C. 540589.12",
      "D. 541320.99"
    ],
    "correctLetter": null,
    "answerStatus": "choice-mismatch",
    "assumption": true,
    "formulaId": "cc",
    "resultValue": 1367901.1485046141,
    "calculatorEntry": "324000 + 274000  ÷  (1.06 ^ 4 - 1)",
    "shortcutSolution": "Assume replacement every 4 years forever. These printed choices do not fit the stated life and values. No printed choice matches the calculated result at its stated precision. Check the original sheet; do not force a letter.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Assume replacement every 4 years forever. These printed choices do not fit the stated life and values. No printed choice matches the calculated result at its stated precision. Check the original sheet; do not force a letter."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "324000 + 274000  ÷  (1.06 ^ 4 - 1)"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "₱1,367,901.15"
      }
    ],
    "finalAnswer": "₱1,367,901.15",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "324000 + 274000  ÷  (1.06 ^ 4 - 1)",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "₱1,367,901.15",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Assume replacement every 4 years forever. These printed choices do not fit the stated life and values. No printed choice matches the calculated result at its stated precision. Check the original sheet; do not force a letter."
  },
  {
    "id": "econ-sample-159",
    "problemNumber": 159,
    "sourceFile": "IMG_0784.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "cc",
    "topicTitle": "cc",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "A long-term contract supplies a new $24,000 tractor every 5 years. Find capitalized cost at 6%.",
    "choices": [
      "A. 93120",
      "B. 92360",
      "C. 94960",
      "D. 91180"
    ],
    "correctLetter": "C",
    "answerStatus": "nearest-choice",
    "assumption": true,
    "formulaId": "cc",
    "resultValue": 94958.56017247579,
    "calculatorEntry": "24000 + 24000  ÷  (1.06 ^ 5 - 1)",
    "shortcutSolution": "Assume the first tractor is delivered now, followed by replacements every 5 years. Closest printed choice C is 94960; the unrounded calculated result is 94,958.56017248. This choice is approximate, not an exact match.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Assume the first tractor is delivered now, followed by replacements every 5 years. Closest printed choice C is 94960; the unrounded calculated result is 94,958.56017248. This choice is approximate, not an exact match."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "24000 + 24000  ÷  (1.06 ^ 5 - 1)"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "$94,958.56"
      }
    ],
    "finalAnswer": "$94,958.56",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "24000 + 24000  ÷  (1.06 ^ 5 - 1)",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "$94,958.56",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Assume the first tractor is delivered now, followed by replacements every 5 years. Closest printed choice C is 94960; the unrounded calculated result is 94,958.56017248. This choice is approximate, not an exact match."
  },
  {
    "id": "econ-sample-160",
    "problemNumber": 160,
    "sourceFile": "IMG_0784.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "bond",
    "topicTitle": "bond",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "A $1,000 bond pays 10% annually and sells for $1,080. To yield 12%, find redemption price after 8 years.",
    "choices": [
      "A. 1365",
      "B. 1295",
      "C. 1550",
      "D. 1444"
    ],
    "correctLetter": "D",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "bond",
    "resultValue": 1444.0709168193864,
    "calculatorEntry": "(1080 - 100  ×  ((1 - (1 + 0.12) ^ (-8))  ÷  0.12))  ×  1.12 ^ 8",
    "shortcutSolution": "Subtract coupon present worth from price, then accumulate the remaining redemption present value.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Subtract coupon present worth from price, then accumulate the remaining redemption present value."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "(1080 - 100  ×  ((1 - (1 + 0.12) ^ (-8))  ÷  0.12))  ×  1.12 ^ 8"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "$1,444.07"
      }
    ],
    "finalAnswer": "$1,444.07",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "(1080 - 100  ×  ((1 - (1 + 0.12) ^ (-8))  ÷  0.12))  ×  1.12 ^ 8",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "$1,444.07",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Subtract coupon present worth from price, then accumulate the remaining redemption present value."
  },
  {
    "id": "econ-sample-161",
    "problemNumber": 161,
    "sourceFile": "IMG_0784.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "bond",
    "topicTitle": "bond",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "A ₱1,000 bond pays 10% annually, redeems for ₱1,040 after 10 years, and sells for ₱1,120. Find yield.",
    "choices": [
      "A. 4.68",
      "B. 6.48",
      "C. 8.64",
      "D. 8.46"
    ],
    "correctLetter": "D",
    "answerStatus": "nearest-choice",
    "assumption": false,
    "formulaId": "bond",
    "resultValue": 8.445844986909506,
    "calculatorEntry": "100 × (1 − (1 + X)^(−10)) ÷ X + 1040 ÷ (1 + X)^10 − 1120 = 0",
    "shortcutSolution": "Solve coupon present worth + redemption present worth − price = 0. Closest printed choice D is 8.46; the unrounded calculated result is 8.44584499. This choice is approximate, not an exact match.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Solve coupon present worth + redemption present worth − price = 0. Closest printed choice D is 8.46; the unrounded calculated result is 8.44584499. This choice is approximate, not an exact match."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "100 × (1 − (1 + X)^(−10)) ÷ X + 1040 ÷ (1 + X)^10 − 1120 = 0"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "8.45%"
      }
    ],
    "finalAnswer": "8.45%",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "100 × (1 − (1 + X)^(−10)) ÷ X + 1040 ÷ (1 + X)^10 − 1120 = 0",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "8.45%",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Solve coupon present worth + redemption present worth − price = 0. Closest printed choice D is 8.46; the unrounded calculated result is 8.44584499. This choice is approximate, not an exact match."
  },
  {
    "id": "econ-sample-162",
    "problemNumber": 162,
    "sourceFile": "IMG_0784.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "bond",
    "topicTitle": "bond",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "A ₱1 million issue of 3%, 15-year bonds sells at 95% of par. Find investment yield.",
    "choices": [
      "A. 3",
      "B. 3.4",
      "C. 3.7",
      "D. 4"
    ],
    "correctLetter": "B",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "bond",
    "resultValue": 3.432029485038253,
    "calculatorEntry": "30000 × (1 − (1 + X)^(−15)) ÷ X + 1000000 ÷ (1 + X)^15 − 950000 = 0",
    "shortcutSolution": "Assume annual coupons and redemption at par.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Assume annual coupons and redemption at par."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "30000 × (1 − (1 + X)^(−15)) ÷ X + 1000000 ÷ (1 + X)^15 − 950000 = 0"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "3.43%"
      }
    ],
    "finalAnswer": "3.43%",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "30000 × (1 − (1 + X)^(−15)) ÷ X + 1000000 ÷ (1 + X)^15 − 950000 = 0",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "3.43%",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Assume annual coupons and redemption at par."
  },
  {
    "id": "econ-sample-163",
    "problemNumber": 163,
    "sourceFile": "IMG_0784.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "bond",
    "topicTitle": "bond",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "A bond pays $110 annually and redeems for $1,000 after 20 years. Find approximate value at 12%.",
    "choices": [
      "A. 925",
      "B. 910",
      "C. 920",
      "D. 942"
    ],
    "correctLetter": "A",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "bond",
    "resultValue": 925.305563756724,
    "calculatorEntry": "110  ×  ((1 - (1 + 0.12) ^ (-20))  ÷  0.12) + 1000  ÷  1.12 ^ 20",
    "shortcutSolution": "Discount all coupons and the final principal.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Discount all coupons and the final principal."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "110  ×  ((1 - (1 + 0.12) ^ (-20))  ÷  0.12) + 1000  ÷  1.12 ^ 20"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "$925.31"
      }
    ],
    "finalAnswer": "$925.31",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "110  ×  ((1 - (1 + 0.12) ^ (-20))  ÷  0.12) + 1000  ÷  1.12 ^ 20",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "$925.31",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Discount all coupons and the final principal."
  },
  {
    "id": "econ-sample-164",
    "problemNumber": 164,
    "sourceFile": "IMG_0784.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "real",
    "topicTitle": "real",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "A ₱1,000 bond pays ₱50 annually for 20 years and redeems at par. Find real return with 2% annual inflation.",
    "choices": [
      "A. 2.94",
      "B. 4.25",
      "C. 3.16",
      "D. 5.16"
    ],
    "correctLetter": "A",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "real",
    "resultValue": 2.941176470588247,
    "calculatorEntry": "(1.05  ÷  1.02 - 1)  ×  100",
    "shortcutSolution": "Same real-return calculation as problem 147.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Same real-return calculation as problem 147."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "(1.05  ÷  1.02 - 1)  ×  100"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "2.94%"
      }
    ],
    "finalAnswer": "2.94%",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "(1.05  ÷  1.02 - 1)  ×  100",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "2.94%",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Same real-return calculation as problem 147."
  },
  {
    "id": "econ-sample-165",
    "problemNumber": 165,
    "sourceFile": "IMG_0784.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "bond",
    "topicTitle": "bond",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "A ₱1,000 bond pays 8% annually, matures in 10 years at par, and sells for ₱1,030. Find yield.",
    "choices": [
      "A. 7.56",
      "B. 7.65",
      "C. 7.75",
      "D. 7.86"
    ],
    "correctLetter": "A",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "bond",
    "resultValue": 7.561709905526104,
    "calculatorEntry": "80 × (1 − (1 + X)^(−10)) ÷ X + 1000 ÷ (1 + X)^10 − 1030 = 0",
    "shortcutSolution": "Since price is above par, yield must be below the 8% coupon rate.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Since price is above par, yield must be below the 8% coupon rate."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "80 × (1 − (1 + X)^(−10)) ÷ X + 1000 ÷ (1 + X)^10 − 1030 = 0"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "7.56%"
      }
    ],
    "finalAnswer": "7.56%",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "80 × (1 − (1 + X)^(−10)) ÷ X + 1000 ÷ (1 + X)^10 − 1030 = 0",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "7.56%",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Since price is above par, yield must be below the 8% coupon rate."
  },
  {
    "id": "econ-sample-166",
    "problemNumber": 166,
    "sourceFile": "IMG_0784.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "breakEven",
    "topicTitle": "breakEven",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "Monthly fixed cost is $200,000. Unit variable cost is $160 and selling price is $200. Find break-even volume.",
    "choices": [
      "A. 6500",
      "B. 8000",
      "C. 5000",
      "D. 7800"
    ],
    "correctLetter": "C",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "breakEven",
    "resultValue": 5000,
    "calculatorEntry": "200000  ÷  (200 - 160)",
    "shortcutSolution": "Contribution per unit = selling price minus variable cost.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Contribution per unit = selling price minus variable cost."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "200000  ÷  (200 - 160)"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "5,000 units"
      }
    ],
    "finalAnswer": "5,000 units",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "200000  ÷  (200 - 160)",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "5,000 units",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Contribution per unit = selling price minus variable cost."
  },
  {
    "id": "econ-sample-167",
    "problemNumber": 167,
    "sourceFile": "IMG_0784.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "breakEven",
    "topicTitle": "breakEven",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "An ice plant has electricity ₱20/block, tax ₱2/block, real estate tax ₱3,500/month, wages ₱25,000/month, other fixed costs ₱12,000/month, and selling price ₱55/block. Find monthly break-even blocks.",
    "choices": [
      "A. 1220",
      "B. 1224",
      "C. 1228",
      "D. 1302"
    ],
    "correctLetter": "C",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "breakEven",
    "resultValue": 1228,
    "calculatorEntry": "(3500 + 25000 + 12000)  ÷  (55 - 20 - 2)",
    "shortcutSolution": "Fixed total = ₱40,500; contribution = ₱33/block. Exact ratio≈1,227.27; need 1,228 blocks. Continuous break-even ratio = 1,227.2727; whole-unit minimum = 1,228.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Fixed total = ₱40,500; contribution = ₱33/block. Exact ratio≈1,227.27; need 1,228 blocks. Continuous break-even ratio = 1,227.2727; whole-unit minimum = 1,228."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "(3500 + 25000 + 12000)  ÷  (55 - 20 - 2)"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "1,228 units"
      }
    ],
    "finalAnswer": "1,228 units",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "(3500 + 25000 + 12000)  ÷  (55 - 20 - 2)",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "1,228 units",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Fixed total = ₱40,500; contribution = ₱33/block. Exact ratio≈1,227.27; need 1,228 blocks. Continuous break-even ratio = 1,227.2727; whole-unit minimum = 1,228."
  },
  {
    "id": "econ-sample-168",
    "problemNumber": 168,
    "sourceFile": "IMG_0784.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "breakEven",
    "topicTitle": "breakEven",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "A company sells 500,000 automotive parts yearly at ₱0.50 each. Annual fixed expenses are ₱80,000. Find break-even units.",
    "choices": [
      "A. 160000",
      "B. 162000",
      "C. 165000",
      "D. 170000"
    ],
    "correctLetter": "A",
    "answerStatus": "matched",
    "assumption": true,
    "formulaId": "breakEven",
    "resultValue": 160000,
    "calculatorEntry": "80000  ÷  0.5",
    "shortcutSolution": "No variable cost is stated. The result assumes zero variable cost; with a nonzero variable cost, the problem needs another given.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "No variable cost is stated. The result assumes zero variable cost; with a nonzero variable cost, the problem needs another given."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "80000  ÷  0.5"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "160,000 units"
      }
    ],
    "finalAnswer": "160,000 units",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "80000  ÷  0.5",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "160,000 units",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "No variable cost is stated. The result assumes zero variable cost; with a nonzero variable cost, the problem needs another given."
  },
  {
    "id": "econ-sample-169",
    "problemNumber": 169,
    "sourceFile": "IMG_0784.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "breakEven",
    "topicTitle": "breakEven",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "Annual fixed maintenance is ₱69,994; cost is ₱56/forging and selling price ₱135. Find break-even units.",
    "choices": [
      "A. 886",
      "B. 885",
      "C. 688",
      "D. 668"
    ],
    "correctLetter": "A",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "breakEven",
    "resultValue": 886,
    "calculatorEntry": "69994  ÷  (135 - 56)",
    "shortcutSolution": "Contribution = ₱79 per unit.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Contribution = ₱79 per unit."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "69994  ÷  (135 - 56)"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "886 units"
      }
    ],
    "finalAnswer": "886 units",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "69994  ÷  (135 - 56)",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "886 units",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Contribution = ₱79 per unit."
  },
  {
    "id": "econ-sample-170",
    "problemNumber": 170,
    "sourceFile": "IMG_0784.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "breakEven",
    "topicTitle": "breakEven",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "Labor is $300/unit, material $400/unit, other variable cost $100/unit, fixed charges $100,000/month, and selling price $1,200/unit. Find break-even units.",
    "choices": [
      "A. 300",
      "B. 500",
      "C. 250",
      "D. 400"
    ],
    "correctLetter": "C",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "breakEven",
    "resultValue": 250,
    "calculatorEntry": "100000  ÷  (1200 - 300 - 400 - 100)",
    "shortcutSolution": "Include all three variable-cost components.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Include all three variable-cost components."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "100000  ÷  (1200 - 300 - 400 - 100)"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "250 units"
      }
    ],
    "finalAnswer": "250 units",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "100000  ÷  (1200 - 300 - 400 - 100)",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "250 units",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Include all three variable-cost components."
  },
  {
    "id": "econ-sample-171",
    "problemNumber": 171,
    "sourceFile": "IMG_0784.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "breakEven",
    "topicTitle": "breakEven",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "Plywood costs $0.75 labor, $3.25 material, and $0.50 other variable cost per piece. Fixed cost is $50,000/month, selling price $6. Find break-even pieces.",
    "choices": [
      "A. 33333",
      "B. 38265",
      "C. 44444",
      "D. 22222"
    ],
    "correctLetter": null,
    "answerStatus": "choice-mismatch",
    "assumption": true,
    "formulaId": "breakEven",
    "resultValue": 33334,
    "calculatorEntry": "50000  ÷  (6 - 0.75 - 3.25 - 0.5)",
    "shortcutSolution": "Exact break-even is 33,333.33; 33,334 whole pieces are required. The printed 33,333 is an approximation, not enough to fully cover cost. Continuous break-even ratio = 33,333.3333; whole-unit minimum = 33,334. No printed choice matches the calculated result at its stated precision. Check the original sheet; do not force a letter.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Exact break-even is 33,333.33; 33,334 whole pieces are required. The printed 33,333 is an approximation, not enough to fully cover cost. Continuous break-even ratio = 33,333.3333; whole-unit minimum = 33,334. No printed choice matches the calculated result at its stated precision. Check the original sheet; do not force a letter."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "50000  ÷  (6 - 0.75 - 3.25 - 0.5)"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "33,334 units"
      }
    ],
    "finalAnswer": "33,334 units",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "50000  ÷  (6 - 0.75 - 3.25 - 0.5)",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "33,334 units",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Exact break-even is 33,333.33; 33,334 whole pieces are required. The printed 33,333 is an approximation, not enough to fully cover cost. Continuous break-even ratio = 33,333.3333; whole-unit minimum = 33,334. No printed choice matches the calculated result at its stated precision. Check the original sheet; do not force a letter."
  },
  {
    "id": "econ-sample-172",
    "problemNumber": 172,
    "sourceFile": "IMG_0784.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "breakEven",
    "topicTitle": "breakEven",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "Labor and materials cost $45/unit and other variable cost $15/unit. Fixed cost is $450,000/month and selling price $250. Find break-even units.",
    "choices": [
      "A. 2368",
      "B. 3210",
      "C. 2340",
      "D. 3310"
    ],
    "correctLetter": null,
    "answerStatus": "choice-mismatch",
    "assumption": true,
    "formulaId": "breakEven",
    "resultValue": 2369,
    "calculatorEntry": "450000  ÷  (250 - 45 - 15)",
    "shortcutSolution": "Exact ratio is 2,368.42; need 2,369 whole units. Printed 2,368 is only an approximate ratio. Continuous break-even ratio = 2,368.4211; whole-unit minimum = 2,369. No printed choice matches the calculated result at its stated precision. Check the original sheet; do not force a letter.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Exact ratio is 2,368.42; need 2,369 whole units. Printed 2,368 is only an approximate ratio. Continuous break-even ratio = 2,368.4211; whole-unit minimum = 2,369. No printed choice matches the calculated result at its stated precision. Check the original sheet; do not force a letter."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "450000  ÷  (250 - 45 - 15)"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "2,369 units"
      }
    ],
    "finalAnswer": "2,369 units",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "450000  ÷  (250 - 45 - 15)",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "2,369 units",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Exact ratio is 2,368.42; need 2,369 whole units. Printed 2,368 is only an approximate ratio. Continuous break-even ratio = 2,368.4211; whole-unit minimum = 2,369. No printed choice matches the calculated result at its stated precision. Check the original sheet; do not force a letter."
  },
  {
    "id": "econ-sample-173",
    "problemNumber": 173,
    "sourceFile": "IMG_0784.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "breakEven",
    "topicTitle": "breakEven",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "A steel drum maker has $200,000 yearly fixed cost, $160 cost per drum, and $200 selling price. Find annual break-even drums.",
    "choices": [
      "A. 1250",
      "B. 2500",
      "C. 5000",
      "D. 1000"
    ],
    "correctLetter": "C",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "breakEven",
    "resultValue": 5000,
    "calculatorEntry": "200000  ÷  (200 - 160)",
    "shortcutSolution": "Contribution = $40/drum.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Contribution = $40/drum."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "200000  ÷  (200 - 160)"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "5,000 units"
      }
    ],
    "finalAnswer": "5,000 units",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "200000  ÷  (200 - 160)",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "5,000 units",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Contribution = $40/drum."
  },
  {
    "id": "econ-sample-174",
    "problemNumber": 174,
    "sourceFile": "IMG_0784.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "breakEven",
    "topicTitle": "breakEven",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "An item costs ₱315 labor, ₱100 material, and ₱3 other variable cost. It sells for ₱995. Monthly overhead is ₱461,600. Find break-even units.",
    "choices": [
      "A. 782",
      "B. 800",
      "C. 806",
      "D. 812"
    ],
    "correctLetter": "B",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "breakEven",
    "resultValue": 800,
    "calculatorEntry": "461600  ÷  (995 - 315 - 100 - 3)",
    "shortcutSolution": "Contribution = ₱577 per unit.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Contribution = ₱577 per unit."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "461600  ÷  (995 - 315 - 100 - 3)"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "800 units"
      }
    ],
    "finalAnswer": "800 units",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "461600  ÷  (995 - 315 - 100 - 3)",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "800 units",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Contribution = ₱577 per unit."
  },
  {
    "id": "econ-sample-175",
    "problemNumber": 175,
    "sourceFile": "IMG_0784.HEIC",
    "sourceDocumentName": "Practice Problems in Engineering Economics",
    "folderName": "Economics Sample Problem",
    "category": "breakEven",
    "topicTitle": "breakEven",
    "weekDay": 1,
    "difficulty": "Moderate",
    "question": "A chair maker has ₱34,950 monthly fixed cost. Labor is ₱15/chair, material ₱65, and other variable cost ₱20. Selling price is ₱250. Find break-even chairs.",
    "choices": [
      "A. 236",
      "B. 225",
      "C. 233",
      "D. 228"
    ],
    "correctLetter": "C",
    "answerStatus": "matched",
    "assumption": false,
    "formulaId": "breakEven",
    "resultValue": 233,
    "calculatorEntry": "34950  ÷  (250 - 15 - 65 - 20)",
    "shortcutSolution": "Contribution = ₱150 per chair.",
    "given": [],
    "governingFormula": "",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Choose the method",
        "explanation": "Contribution = ₱150 per chair."
      },
      {
        "step": 2,
        "title": "Substitute once",
        "explanation": "Use decimal rates, matched payment periods, and full calculator precision.",
        "calculation": "34950  ÷  (250 - 15 - 65 - 20)"
      },
      {
        "step": 3,
        "title": "Check the result",
        "explanation": "233 units"
      }
    ],
    "finalAnswer": "233 units",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "34950  ÷  (250 - 15 - 65 - 20)",
        "Press =. For an expression containing X, use SOLVE with a decimal initial estimate; then verify the residual."
      ],
      "resultDisplay": "233 units",
      "proTip": "Use the power key for ^ and the negative-sign key for a negative exponent; round only the final result."
    },
    "mentalModelOrTrap": "Contribution = ₱150 per chair."
  }
].map(p => ({...p, correctLetter: (p.correctLetter || undefined) as DriveSampleProblem['correctLetter'], difficulty: 'Moderate' as const, category: formulaById[p.formulaId].title, topicTitle: formulaById[p.formulaId].title, governingFormula: formulaById[p.formulaId].formula, weekDay: formulaById[p.formulaId].day, answerStatus: p.answerStatus as DriveSampleProblem['answerStatus']}));
export const ESAS_DRIVE_SAMPLE_PROBLEMS = DRIVE_SAMPLE_PROBLEMS;
