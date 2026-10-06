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
    "given": [
      {
        "symbol": "",
        "meaning": "Principal",
        "value": "₱10,000"
      },
      {
        "symbol": "",
        "meaning": "Nominal return",
        "value": "15% yearly"
      },
      {
        "symbol": "",
        "meaning": "Inflation",
        "value": "6% yearly"
      },
      {
        "symbol": "",
        "meaning": "Time",
        "value": "5 years"
      }
    ],
    "governingFormula": "F_{real}=P\\times \\left(\\frac{1+i}{1+f}\\right)^{t}",
    "substitutionMath": "F_{real}=10000\\times \\left(\\frac{1+0.15}{1+0.06}\\right)^{5}",
    "formulaSymbols": "P = principal or present worth; f = annual inflation rate; i = effective rate per payment period; t = time in years",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Divide to find the required ratio",
        "explanation": "Keep the entire denominator grouped; use the full-precision result.",
        "calculationMath": "\\frac{1.15}{1.06} = 1.08490566",
        "intermediateValue": 1.0849056603773584
      },
      {
        "step": 2,
        "title": "Calculate the growth or remaining-value factor",
        "explanation": "Apply the exponent for the stated number of periods; a negative exponent discounts rather than accumulates.",
        "calculationMath": "\\left(1.08490566\\right)^{5} = 1.5030031",
        "intermediateValue": 1.5030030969122607
      },
      {
        "step": 3,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "10000\\times(1.5030031) = 15030.03096912",
        "intermediateValue": 15030.030969122607
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
    "given": [
      {
        "symbol": "",
        "meaning": "Sale value",
        "value": "$10,000"
      },
      {
        "symbol": "",
        "meaning": "Annual straight-line charge",
        "value": "$4,000"
      },
      {
        "symbol": "",
        "meaning": "Elapsed life",
        "value": "5 years"
      }
    ],
    "governingFormula": "C=BV+t\\times D",
    "substitutionMath": "C=10000+5\\times 4000",
    "formulaSymbols": "BV = book value; D = annual depreciation; t = time in years",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "5\\times(4000) = 20000",
        "intermediateValue": 20000
      },
      {
        "step": 2,
        "title": "Combine the amounts",
        "explanation": "Add the components represented in the substituted expression.",
        "calculationMath": "10000+(20000) = 30000",
        "intermediateValue": 30000
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
    "given": [
      {
        "symbol": "",
        "meaning": "Par and redemption",
        "value": "$1,000"
      },
      {
        "symbol": "",
        "meaning": "Coupon rate",
        "value": "6% nominal yearly"
      },
      {
        "symbol": "",
        "meaning": "Coupons",
        "value": "Semiannual"
      },
      {
        "symbol": "",
        "meaning": "Required yield",
        "value": "8% nominal yearly"
      },
      {
        "symbol": "",
        "meaning": "Life",
        "value": "5 years"
      }
    ],
    "governingFormula": "Price=K\\times \\frac{1-\\left(1+i\\right)^{-n}}{i}+\\frac{R}{\\left(1+i\\right)^{n}}",
    "substitutionMath": "Price=30\\times \\frac{1-\\left(1+0.04\\right)^{-10}}{0.04}+\\frac{1000}{\\left(1+0.04\\right)^{10}}",
    "formulaSymbols": "K = coupon per period; R = redemption or recurring replacement cost; i = effective rate per payment period; n = number of periods or useful life",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Find the present-worth factor",
        "explanation": "Use i=0.04 (4.000000% per payment period) and n=10. Multiply an equal payment by this factor to obtain its value one period before the first payment.",
        "calculationMath": "\\frac{1-(1+0.04)^{-10}}{0.04} = 8.11089578",
        "intermediateValue": 8.110895779355035
      },
      {
        "step": 2,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "30\\times(8.11089578) = 243.32687338",
        "intermediateValue": 243.32687338065105
      },
      {
        "step": 3,
        "title": "Calculate the growth or remaining-value factor",
        "explanation": "Apply the exponent for the stated number of periods; a negative exponent discounts rather than accumulates.",
        "calculationMath": "\\left(1.04\\right)^{10} = 1.48024428",
        "intermediateValue": 1.4802442849183444
      },
      {
        "step": 4,
        "title": "Divide to find the required ratio",
        "explanation": "Keep the entire denominator grouped; use the full-precision result.",
        "calculationMath": "\\frac{1000}{1.48024428} = 675.56416883",
        "intermediateValue": 675.5641688257987
      },
      {
        "step": 5,
        "title": "Add coupon and redemption present worth",
        "explanation": "Both components have been discounted to today, so their sum is the bond price.",
        "calculationMath": "243.32687338+(675.56416883) = 918.89104221",
        "intermediateValue": 918.8910422064497
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
    "given": [
      {
        "symbol": "",
        "meaning": "Initial investment",
        "value": "$350,000"
      },
      {
        "symbol": "",
        "meaning": "Year-end receipt",
        "value": "$200,000"
      },
      {
        "symbol": "",
        "meaning": "Receipts",
        "value": "3"
      }
    ],
    "governingFormula": "0=A\\times \\frac{1-\\left(1+x\\right)^{-n}}{x}-P",
    "substitutionMath": "0=200000\\times \\frac{1-\\left(1+x\\right)^{-3}}{x}-350000",
    "formulaSymbols": "A = equal payment; P = principal or present worth; n = number of periods or useful life; x = unknown decimal yield",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Set present worth equal to the price",
        "explanation": "X is the unknown decimal rate. In Canon COMP, enter this residual and use SOLVE with a nonzero initial estimate.",
        "calculationMath": "200000\\frac{1-(1+X)^{-3}}{X}-350000=0",
        "intermediateValue": null
      },
      {
        "step": 2,
        "title": "Solve the decimal rate",
        "explanation": "A numerical solver gives this X; convert it to percent only after solving.",
        "calculationMath": "X = 0.32675161",
        "intermediateValue": 0.3267516063569298
      },
      {
        "step": 3,
        "title": "Check the solved rate",
        "explanation": "Substitute the solved rate back into the residual. It should be close to zero.",
        "calculationMath": "\\mathrm{residual} = 0",
        "intermediateValue": 0.0
      },
      {
        "step": 4,
        "title": "Convert the decimal rate to percent",
        "explanation": "Multiplying a decimal rate by 100 expresses the same rate as a percentage.",
        "calculationMath": "0.32675161\\times(100) = 32.67516064",
        "intermediateValue": 32.675160635692976
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
    "given": [
      {
        "symbol": "",
        "meaning": "Loan",
        "value": "₱10,000"
      },
      {
        "symbol": "",
        "meaning": "Nominal annual rate",
        "value": "10%"
      },
      {
        "symbol": "",
        "meaning": "Compounding and payments",
        "value": "Semiannual"
      },
      {
        "symbol": "",
        "meaning": "Term",
        "value": "5 years"
      },
      {
        "symbol": "",
        "meaning": "First payment",
        "value": "6 months from now"
      }
    ],
    "governingFormula": "A=P\\times \\frac{i}{1-\\left(1+i\\right)^{-n}}",
    "substitutionMath": "A=10000\\times \\frac{0.05}{1-\\left(1+0.05\\right)^{-10}}",
    "formulaSymbols": "P = principal or present worth; i = effective rate per payment period; n = number of periods or useful life",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Find the loan-payment factor",
        "explanation": "Use i=0.05 (5.000000% per payment period) and n=10. Multiply the financed principal by this factor to obtain each period-end payment.",
        "calculationMath": "\\frac{0.05}{1-(1+0.05)^{-10}} = 0.12950457",
        "intermediateValue": 0.12950457496545661
      },
      {
        "step": 2,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "10000\\times(0.12950457) = 1295.04574965",
        "intermediateValue": 1295.0457496545662
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
    "given": [
      {
        "symbol": "",
        "meaning": "Cash price",
        "value": "$60,000"
      },
      {
        "symbol": "",
        "meaning": "Payments",
        "value": "12 quarterly payments"
      },
      {
        "symbol": "",
        "meaning": "Nominal annual rate",
        "value": "24%"
      },
      {
        "symbol": "",
        "meaning": "Timing",
        "value": "Beginning of each quarter"
      }
    ],
    "governingFormula": "A_{due}=\\frac{P\\times \\frac{i}{1-\\left(1+i\\right)^{-n}}}{1+i}",
    "substitutionMath": "A_{due}=\\frac{60000\\times \\frac{0.06}{1-\\left(1+0.06\\right)^{-12}}}{1+0.06}",
    "formulaSymbols": "P = principal or present worth; i = effective rate per payment period; n = number of periods or useful life",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Find the loan-payment factor",
        "explanation": "Use i=0.06 (6.000000% per payment period) and n=12. Multiply the financed principal by this factor to obtain each period-end payment.",
        "calculationMath": "\\frac{0.06}{1-(1+0.06)^{-12}} = 0.11927703",
        "intermediateValue": 0.11927702938066355
      },
      {
        "step": 2,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "60000\\times(0.11927703) = 7156.62176284",
        "intermediateValue": 7156.621762839813
      },
      {
        "step": 3,
        "title": "Adjust for beginning-of-period timing",
        "explanation": "Payments one period earlier have an extra factor of 1+i in their worth; divide the ordinary payment by 1+i when finding an installment.",
        "calculationMath": "\\frac{7156.62176284}{1.06} = 6751.52996494",
        "intermediateValue": 6751.529964943219
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
    "given": [
      {
        "symbol": "",
        "meaning": "Cost",
        "value": "₱10,000"
      },
      {
        "symbol": "",
        "meaning": "Salvage",
        "value": "₱0"
      },
      {
        "symbol": "",
        "meaning": "Life",
        "value": "20 years"
      },
      {
        "symbol": "",
        "meaning": "Requested charge",
        "value": "Year 3"
      },
      {
        "symbol": "",
        "meaning": "Method",
        "value": "SYD"
      }
    ],
    "governingFormula": "D_{m}=\\frac{\\left(C-S\\right)\\times \\left(n-m+1\\right)}{\\frac{n\\times \\left(n+1\\right)}{2}}",
    "substitutionMath": "D_{m}=\\frac{\\left(10000-0\\right)\\times \\left(20-3+1\\right)}{\\frac{20\\times \\left(20+1\\right)}{2}}",
    "formulaSymbols": "C = first cost; S = salvage value; m = compounding periods per year; n = number of periods or useful life",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "10000\\times(18) = 180000",
        "intermediateValue": 180000
      },
      {
        "step": 2,
        "title": "Divide to find the required ratio",
        "explanation": "Keep the entire denominator grouped; use the full-precision result.",
        "calculationMath": "\\frac{180000}{210} = 857.14285714",
        "intermediateValue": 857.1428571428571
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
    "given": [
      {
        "symbol": "",
        "meaning": "Cost",
        "value": "₱15,000"
      },
      {
        "symbol": "",
        "meaning": "Salvage",
        "value": "₱2,000"
      },
      {
        "symbol": "",
        "meaning": "Life",
        "value": "6 years"
      },
      {
        "symbol": "",
        "meaning": "Interest",
        "value": "12% yearly"
      },
      {
        "symbol": "",
        "meaning": "Find",
        "value": "Nearest equivalent annual cost"
      }
    ],
    "governingFormula": "EUAC=C\\times \\frac{i}{1-\\left(1+i\\right)^{-n}}-S\\times \\frac{i}{\\left(1+i\\right)^{n}-1}",
    "substitutionMath": "EUAC=15000\\times \\frac{0.12}{1-\\left(1+0.12\\right)^{-6}}-2000\\times \\frac{0.12}{\\left(1+0.12\\right)^{6}-1}",
    "formulaSymbols": "C = first cost; S = salvage value; i = effective rate per payment period; n = number of periods or useful life",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Find the loan-payment factor",
        "explanation": "Use i=0.12 (12.000000% per payment period) and n=6. Multiply the financed principal by this factor to obtain each period-end payment.",
        "calculationMath": "\\frac{0.12}{1-(1+0.12)^{-6}} = 0.24322572",
        "intermediateValue": 0.24322571842462912
      },
      {
        "step": 2,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "15000\\times(0.24322572) = 3648.38577637",
        "intermediateValue": 3648.385776369437
      },
      {
        "step": 3,
        "title": "Find the savings-deposit factor",
        "explanation": "Use i=0.12 (12.000000% per payment period) and n=6. Multiply the future target by this factor to obtain each period-end deposit.",
        "calculationMath": "\\frac{0.12}{(1+0.12)^{6}-1} = 0.12322572",
        "intermediateValue": 0.12322571842462915
      },
      {
        "step": 4,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "2000\\times(0.12322572) = 246.45143685",
        "intermediateValue": 246.4514368492583
      },
      {
        "step": 5,
        "title": "Subtract the stated amounts",
        "explanation": "Subtract in this order; the order matters for cost, interest, or remaining book value.",
        "calculationMath": "3648.38577637-(246.45143685) = 3401.93433952",
        "intermediateValue": 3401.9343395201786
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
    "given": [
      {
        "symbol": "",
        "meaning": "Initial bridge cost",
        "value": "₱250 million"
      },
      {
        "symbol": "",
        "meaning": "Rebuilding",
        "value": "₱100 million every 20 years"
      },
      {
        "symbol": "",
        "meaning": "Interest",
        "value": "6% yearly"
      },
      {
        "symbol": "",
        "meaning": "Horizon",
        "value": "Indefinite"
      }
    ],
    "governingFormula": "CC=C+\\frac{R}{\\left(1+i\\right)^{n}-1}",
    "substitutionMath": "CC=250+\\frac{100}{\\left(1+0.06\\right)^{20}-1}",
    "formulaSymbols": "C = first cost; R = redemption or recurring replacement cost; i = effective rate per payment period; n = number of periods or useful life",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Calculate the growth or remaining-value factor",
        "explanation": "Apply the exponent for the stated number of periods; a negative exponent discounts rather than accumulates.",
        "calculationMath": "\\left(1.06\\right)^{20} = 3.20713547",
        "intermediateValue": 3.207135472212848
      },
      {
        "step": 2,
        "title": "Subtract the stated amounts",
        "explanation": "Subtract in this order; the order matters for cost, interest, or remaining book value.",
        "calculationMath": "3.20713547-(1) = 2.20713547",
        "intermediateValue": 2.207135472212848
      },
      {
        "step": 3,
        "title": "Divide to find the required ratio",
        "explanation": "Keep the entire denominator grouped; use the full-precision result.",
        "calculationMath": "\\frac{100}{2.20713547} = 45.30759496",
        "intermediateValue": 45.307594961419014
      },
      {
        "step": 4,
        "title": "Combine the amounts",
        "explanation": "Add the components represented in the substituted expression.",
        "calculationMath": "250+(45.30759496) = 295.30759496",
        "intermediateValue": 295.307594961419
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
    "given": [
      {
        "symbol": "",
        "meaning": "Loan",
        "value": "₱1,000,000"
      },
      {
        "symbol": "",
        "meaning": "Interest",
        "value": "12% compounded annually"
      },
      {
        "symbol": "",
        "meaning": "Payments",
        "value": "Monthly for 10 years"
      }
    ],
    "governingFormula": "A=P\\times \\frac{i}{1-\\left(1+i\\right)^{-n}}",
    "substitutionMath": "A=1000000\\times \\frac{\\left((1+0.12)^{1/12}-1\\right)}{1-\\left(1+\\left((1+0.12)^{1/12}-1\\right)\\right)^{-120}}",
    "formulaSymbols": "P = principal or present worth; i = effective rate per payment period; n = number of periods or useful life",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Divide to find the required ratio",
        "explanation": "Keep the entire denominator grouped; use the full-precision result.",
        "calculationMath": "\\frac{1}{12} = 0.08333333",
        "intermediateValue": 0.08333333333333333
      },
      {
        "step": 2,
        "title": "Calculate the growth or remaining-value factor",
        "explanation": "Apply the exponent for the stated number of periods; a negative exponent discounts rather than accumulates.",
        "calculationMath": "\\left(1.12\\right)^{0.08333333} = 1.00948879",
        "intermediateValue": 1.009488792934583
      },
      {
        "step": 3,
        "title": "Subtract the stated amounts",
        "explanation": "Subtract in this order; the order matters for cost, interest, or remaining book value.",
        "calculationMath": "1.00948879-(1) = 0.00948879",
        "intermediateValue": 0.009488792934583046
      },
      {
        "step": 4,
        "title": "Find the loan-payment factor",
        "explanation": "Use i=0.00948879 (0.948879% per payment period) and n=120. Multiply the financed principal by this factor to obtain each period-end payment.",
        "calculationMath": "\\frac{0.00948879}{1-(1+0.00948879)^{-120}} = 0.01399472",
        "intermediateValue": 0.013994717386775067
      },
      {
        "step": 5,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "1000000\\times(0.01399472) = 13994.71738678",
        "intermediateValue": 13994.717386775068
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
    "given": [
      {
        "symbol": "",
        "meaning": "Installed cost",
        "value": "₱120,000"
      },
      {
        "symbol": "",
        "meaning": "Salvage",
        "value": "₱10,000"
      },
      {
        "symbol": "",
        "meaning": "Total life",
        "value": "10 years"
      },
      {
        "symbol": "",
        "meaning": "Sold after",
        "value": "5 years"
      },
      {
        "symbol": "",
        "meaning": "Selling price",
        "value": "₱30,000"
      },
      {
        "symbol": "",
        "meaning": "Method",
        "value": "Straight line"
      }
    ],
    "governingFormula": "Loss=C-\\frac{m\\times \\left(C-S\\right)}{n}-V",
    "substitutionMath": "Loss=120000-\\frac{5\\times \\left(120000-10000\\right)}{10}-30000",
    "formulaSymbols": "C = first cost; S = salvage value; V = sale value; m = requested depreciation year; n = number of periods or useful life",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Subtract the stated amounts",
        "explanation": "Subtract in this order; the order matters for cost, interest, or remaining book value.",
        "calculationMath": "120000-(10000) = 110000",
        "intermediateValue": 110000
      },
      {
        "step": 2,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "5\\times(110000) = 550000",
        "intermediateValue": 550000
      },
      {
        "step": 3,
        "title": "Divide to find the required ratio",
        "explanation": "Keep the entire denominator grouped; use the full-precision result.",
        "calculationMath": "\\frac{550000}{10} = 55000",
        "intermediateValue": 55000.0
      },
      {
        "step": 4,
        "title": "Subtract the stated amounts",
        "explanation": "Subtract in this order; the order matters for cost, interest, or remaining book value.",
        "calculationMath": "120000-(55000) = 65000",
        "intermediateValue": 65000.0
      },
      {
        "step": 5,
        "title": "Subtract the stated amounts",
        "explanation": "Subtract in this order; the order matters for cost, interest, or remaining book value.",
        "calculationMath": "65000-(30000) = 35000",
        "intermediateValue": 35000.0
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
    "calculatorEntry": "2 ÷ 0.20 − 1 = 9 years minimum",
    "shortcutSolution": "The largest charge is the first: 2/(n+1)≤0.20, so n≥9.",
    "given": [
      {
        "symbol": "",
        "meaning": "Salvage",
        "value": "Zero"
      },
      {
        "symbol": "",
        "meaning": "Maximum annual SYD charge",
        "value": "20% of first cost"
      },
      {
        "symbol": "",
        "meaning": "Find",
        "value": "Minimum whole-year life"
      }
    ],
    "governingFormula": "\\frac{D_1}{C}=\\frac{2}{n+1}\\leq q",
    "substitutionMath": "\\frac{D_1}{C}=\\frac{2}{n+1}\\leq0.20",
    "formulaSymbols": "n = useful life in years; q = maximum annual fraction of first cost",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Use the largest SYD charge",
        "explanation": "With zero salvage, the first year has the largest fraction of cost.",
        "calculationMath": "\\frac{D_1}{C}=\\frac{n}{n(n+1)/2}=\\frac{2}{n+1}"
      },
      {
        "step": 2,
        "title": "Apply the 20% ceiling",
        "explanation": "Require the first-year charge to be no more than 0.20 of first cost.",
        "calculationMath": "\\frac{2}{n+1}\\leq0.20\\Rightarrow n+1\\geq10\\Rightarrow n\\geq9"
      },
      {
        "step": 3,
        "title": "Choose the minimum whole-year life",
        "explanation": "Nine years gives exactly 20%; eight years gives 2/9≈22.22% and fails.",
        "calculationMath": "n=9"
      }
    ],
    "finalAnswer": "9.00 years",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "2 ÷ 0.20 − 1 = 9 years minimum",
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
    "given": [
      {
        "symbol": "",
        "meaning": "Normal payment date",
        "value": "Day 100"
      },
      {
        "symbol": "",
        "meaning": "Discount payment date",
        "value": "Day 31"
      },
      {
        "symbol": "",
        "meaning": "Early discount",
        "value": "3%"
      },
      {
        "symbol": "",
        "meaning": "Day basis",
        "value": "360-day assumption"
      }
    ],
    "governingFormula": "r_{percent}=\\frac{\\frac{d}{1-d}\\times Y}{h}\\times 100",
    "substitutionMath": "r_{percent}=\\frac{\\frac{0.03}{1-0.03}\\times 360}{69}\\times 100",
    "formulaSymbols": "Y = days per year; d = discount fraction; h = elapsed intervals",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Divide to find the required ratio",
        "explanation": "Keep the entire denominator grouped; use the full-precision result.",
        "calculationMath": "\\frac{0.03}{0.97} = 0.03092784",
        "intermediateValue": 0.030927835051546393
      },
      {
        "step": 2,
        "title": "Divide to find the required ratio",
        "explanation": "Keep the entire denominator grouped; use the full-precision result.",
        "calculationMath": "\\frac{360}{69} = 5.2173913",
        "intermediateValue": 5.217391304347826
      },
      {
        "step": 3,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "0.03092784\\times(5.2173913) = 0.16136262",
        "intermediateValue": 0.16136261766024204
      },
      {
        "step": 4,
        "title": "Convert the decimal rate to percent",
        "explanation": "Multiplying a decimal rate by 100 expresses the same rate as a percentage.",
        "calculationMath": "0.16136262\\times(100) = 16.13626177",
        "intermediateValue": 16.136261766024205
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
    "given": [
      {
        "symbol": "",
        "meaning": "Original nominal rate",
        "value": "12%"
      },
      {
        "symbol": "",
        "meaning": "Original compounding",
        "value": "Semiannual"
      },
      {
        "symbol": "",
        "meaning": "Required compounding",
        "value": "Quarterly"
      }
    ],
    "governingFormula": "r_{2,percent}=m_{2}\\times \\left(\\left(1+\\frac{r_{1}}{m_{1}}\\right)^{\\frac{m_{1}}{m_{2}}}-1\\right)\\times 100",
    "substitutionMath": "r_{2,percent}=4\\times \\left(\\left(1+\\frac{0.12}{2}\\right)^{\\frac{2}{4}}-1\\right)\\times 100",
    "formulaSymbols": "m_1 = compounding periods per year or requested year; m_2 = compounding periods per year or requested year; r_1 = annual interest rate",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Calculate the growth or remaining-value factor",
        "explanation": "Apply the exponent for the stated number of periods; a negative exponent discounts rather than accumulates.",
        "calculationMath": "\\left(1.06\\right)^{0.5} = 1.02956301",
        "intermediateValue": 1.0295630140987
      },
      {
        "step": 2,
        "title": "Subtract the stated amounts",
        "explanation": "Subtract in this order; the order matters for cost, interest, or remaining book value.",
        "calculationMath": "1.02956301-(1) = 0.02956301",
        "intermediateValue": 0.02956301409869999
      },
      {
        "step": 3,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "4\\times(0.02956301) = 0.11825206",
        "intermediateValue": 0.11825205639479996
      },
      {
        "step": 4,
        "title": "Convert the decimal rate to percent",
        "explanation": "Multiplying a decimal rate by 100 expresses the same rate as a percentage.",
        "calculationMath": "0.11825206\\times(100) = 11.82520564",
        "intermediateValue": 11.825205639479996
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
    "given": [
      {
        "symbol": "",
        "meaning": "Year-end payment",
        "value": "₱6,000"
      },
      {
        "symbol": "",
        "meaning": "Payments",
        "value": "5"
      },
      {
        "symbol": "",
        "meaning": "Interest",
        "value": "15% yearly"
      }
    ],
    "governingFormula": "F=A\\times \\frac{\\left(1+i\\right)^{n}-1}{i}",
    "substitutionMath": "F=6000\\times \\frac{\\left(1+0.15\\right)^{5}-1}{0.15}",
    "formulaSymbols": "A = equal payment; i = effective rate per payment period; n = number of periods or useful life",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Find the accumulated-savings factor",
        "explanation": "Use i=0.15 (15.000000% per payment period) and n=5. Multiply an equal deposit by this factor to obtain the amount on the final deposit date.",
        "calculationMath": "\\frac{(1+0.15)^{5}-1}{0.15} = 6.74238125",
        "intermediateValue": 6.742381249999996
      },
      {
        "step": 2,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "6000\\times(6.74238125) = 40454.2875",
        "intermediateValue": 40454.28749999998
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
    "given": [
      {
        "symbol": "",
        "meaning": "Down payment",
        "value": "₱100,000"
      },
      {
        "symbol": "",
        "meaning": "Installment",
        "value": "₱8,000"
      },
      {
        "symbol": "",
        "meaning": "Installments",
        "value": "10 semiannual"
      },
      {
        "symbol": "",
        "meaning": "First installment",
        "value": "End of year 3"
      },
      {
        "symbol": "",
        "meaning": "Nominal rate",
        "value": "12% semiannual compounding"
      }
    ],
    "governingFormula": "P_{0}=P_{d}+\\frac{A\\times \\frac{1-\\left(1+i\\right)^{-n}}{i}}{\\left(1+i\\right)^{k-1}}",
    "substitutionMath": "P_{0}=100000+\\frac{8000\\times \\frac{1-\\left(1+0.06\\right)^{-10}}{0.06}}{\\left(1+0.06\\right)^{6-1}}",
    "formulaSymbols": "A = equal payment; P_d = down payment; i = effective rate per payment period; k = first payment period; n = number of periods or useful life",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Find the present-worth factor",
        "explanation": "Use i=0.06 (6.000000% per payment period) and n=10. Multiply an equal payment by this factor to obtain its value one period before the first payment.",
        "calculationMath": "\\frac{1-(1+0.06)^{-10}}{0.06} = 7.36008705",
        "intermediateValue": 7.360087051414703
      },
      {
        "step": 2,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "8000\\times(7.36008705) = 58880.69641132",
        "intermediateValue": 58880.69641131762
      },
      {
        "step": 3,
        "title": "Calculate the growth or remaining-value factor",
        "explanation": "Apply the exponent for the stated number of periods; a negative exponent discounts rather than accumulates.",
        "calculationMath": "\\left(1.06\\right)^{5} = 1.33822558",
        "intermediateValue": 1.3382255776000003
      },
      {
        "step": 4,
        "title": "Divide to find the required ratio",
        "explanation": "Keep the entire denominator grouped; use the full-precision result.",
        "calculationMath": "\\frac{58880.69641132}{1.33822558} = 43999.0816174",
        "intermediateValue": 43999.081617402204
      },
      {
        "step": 5,
        "title": "Combine the amounts",
        "explanation": "Add the components represented in the substituted expression.",
        "calculationMath": "100000+(43999.0816174) = 143999.0816174",
        "intermediateValue": 143999.0816174022
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
    "given": [
      {
        "symbol": "",
        "meaning": "Cost",
        "value": "$720,000"
      },
      {
        "symbol": "",
        "meaning": "Life",
        "value": "10 years"
      },
      {
        "symbol": "",
        "meaning": "Depreciation rate",
        "value": "25% of beginning book value"
      },
      {
        "symbol": "",
        "meaning": "Find",
        "value": "Total depreciation"
      }
    ],
    "governingFormula": "TD=C\\times \\left(1-\\left(1-k\\right)^{n}\\right)",
    "substitutionMath": "TD=720000\\times \\left(1-\\left(1-0.25\\right)^{10}\\right)",
    "formulaSymbols": "C = first cost; k = annual depreciation fraction; n = number of periods or useful life",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Calculate the growth or remaining-value factor",
        "explanation": "Apply the exponent for the stated number of periods; a negative exponent discounts rather than accumulates.",
        "calculationMath": "\\left(0.75\\right)^{10} = 0.05631351",
        "intermediateValue": 0.056313514709472656
      },
      {
        "step": 2,
        "title": "Subtract the stated amounts",
        "explanation": "Subtract in this order; the order matters for cost, interest, or remaining book value.",
        "calculationMath": "1-(0.05631351) = 0.94368649",
        "intermediateValue": 0.9436864852905273
      },
      {
        "step": 3,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "720000\\times(0.94368649) = 679454.26940918",
        "intermediateValue": 679454.2694091797
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
    "given": [
      {
        "symbol": "",
        "meaning": "Old cost",
        "value": "₱5,000"
      },
      {
        "symbol": "",
        "meaning": "Old life",
        "value": "2 years"
      },
      {
        "symbol": "",
        "meaning": "Old salvage",
        "value": "₱800"
      },
      {
        "symbol": "",
        "meaning": "New life",
        "value": "3 years"
      },
      {
        "symbol": "",
        "meaning": "New salvage",
        "value": "₱1,000"
      },
      {
        "symbol": "",
        "meaning": "Interest",
        "value": "4% yearly"
      }
    ],
    "governingFormula": "C_{2}=\\frac{C_{1}\\times \\frac{i}{1-\\left(1+i\\right)^{-n_{1}}}-S_{1}\\times \\frac{i}{\\left(1+i\\right)^{n_{1}}-1}+S_{2}\\times \\frac{i}{\\left(1+i\\right)^{n_{2}}-1}}{\\frac{i}{1-\\left(1+i\\right)^{-n_{2}}}}",
    "substitutionMath": "C_{2}=\\frac{5000\\times \\frac{0.04}{1-\\left(1+0.04\\right)^{-2}}-800\\times \\frac{0.04}{\\left(1+0.04\\right)^{2}-1}+1000\\times \\frac{0.04}{\\left(1+0.04\\right)^{3}-1}}{\\frac{0.04}{1-\\left(1+0.04\\right)^{-3}}}",
    "formulaSymbols": "C_1 = first cost; S_1 = salvage value; S_2 = salvage value; i = effective rate per payment period; n_1 = number of periods or useful life; n_2 = number of periods or useful life",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Find the loan-payment factor",
        "explanation": "Use i=0.04 (4.000000% per payment period) and n=2. Multiply the financed principal by this factor to obtain each period-end payment.",
        "calculationMath": "\\frac{0.04}{1-(1+0.04)^{-2}} = 0.53019608",
        "intermediateValue": 0.5301960784313718
      },
      {
        "step": 2,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "5000\\times(0.53019608) = 2650.98039216",
        "intermediateValue": 2650.980392156859
      },
      {
        "step": 3,
        "title": "Find the savings-deposit factor",
        "explanation": "Use i=0.04 (4.000000% per payment period) and n=2. Multiply the future target by this factor to obtain each period-end deposit.",
        "calculationMath": "\\frac{0.04}{(1+0.04)^{2}-1} = 0.49019608",
        "intermediateValue": 0.4901960784313719
      },
      {
        "step": 4,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "800\\times(0.49019608) = 392.15686275",
        "intermediateValue": 392.15686274509756
      },
      {
        "step": 5,
        "title": "Subtract the stated amounts",
        "explanation": "Subtract in this order; the order matters for cost, interest, or remaining book value.",
        "calculationMath": "2650.98039216-(392.15686275) = 2258.82352941",
        "intermediateValue": 2258.8235294117617
      },
      {
        "step": 6,
        "title": "Find the savings-deposit factor",
        "explanation": "Use i=0.04 (4.000000% per payment period) and n=3. Multiply the future target by this factor to obtain each period-end deposit.",
        "calculationMath": "\\frac{0.04}{(1+0.04)^{3}-1} = 0.32034854",
        "intermediateValue": 0.320348539210661
      },
      {
        "step": 7,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "1000\\times(0.32034854) = 320.34853921",
        "intermediateValue": 320.348539210661
      },
      {
        "step": 8,
        "title": "Combine the amounts",
        "explanation": "Add the components represented in the substituted expression.",
        "calculationMath": "2258.82352941+(320.34853921) = 2579.17206862",
        "intermediateValue": 2579.1720686224226
      },
      {
        "step": 9,
        "title": "Find the loan-payment factor",
        "explanation": "Use i=0.04 (4.000000% per payment period) and n=3. Multiply the financed principal by this factor to obtain each period-end payment.",
        "calculationMath": "\\frac{0.04}{1-(1+0.04)^{-3}} = 0.36034854",
        "intermediateValue": 0.3603485392106608
      },
      {
        "step": 10,
        "title": "Divide to find the required ratio",
        "explanation": "Keep the entire denominator grouped; use the full-precision result.",
        "calculationMath": "\\frac{2579.17206862}{0.36034854} = 7157.43728078",
        "intermediateValue": 7157.437280783955
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
    "shortcutSolution": "Assume identical replacement indefinitely; net replacement = cost minus salvage. No printed choice matches the calculated result at its stated precision. The correct computed result is shown above; do not force a letter.",
    "given": [
      {
        "symbol": "",
        "meaning": "Cost",
        "value": "₱300,000"
      },
      {
        "symbol": "",
        "meaning": "Salvage",
        "value": "₱30,000"
      },
      {
        "symbol": "",
        "meaning": "Life",
        "value": "15 years"
      },
      {
        "symbol": "",
        "meaning": "Interest",
        "value": "18% yearly"
      },
      {
        "symbol": "",
        "meaning": "Assumption",
        "value": "Identical replacements forever"
      }
    ],
    "governingFormula": "CC=C+\\frac{C-S}{\\left(1+i\\right)^{n}-1}",
    "substitutionMath": "CC=300000+\\frac{300000-30000}{\\left(1+0.18\\right)^{15}-1}",
    "formulaSymbols": "C = first cost; S = salvage value; i = effective rate per payment period; n = number of periods or useful life",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Calculate the growth or remaining-value factor",
        "explanation": "Apply the exponent for the stated number of periods; a negative exponent discounts rather than accumulates.",
        "calculationMath": "\\left(1.18\\right)^{15} = 11.97374789",
        "intermediateValue": 11.973747886018288
      },
      {
        "step": 2,
        "title": "Subtract the stated amounts",
        "explanation": "Subtract in this order; the order matters for cost, interest, or remaining book value.",
        "calculationMath": "11.97374789-(1) = 10.97374789",
        "intermediateValue": 10.973747886018288
      },
      {
        "step": 3,
        "title": "Divide to find the required ratio",
        "explanation": "Keep the entire denominator grouped; use the full-precision result.",
        "calculationMath": "\\frac{270000}{10.97374789} = 24604.1737795",
        "intermediateValue": 24604.17377949866
      },
      {
        "step": 4,
        "title": "Combine the amounts",
        "explanation": "Add the components represented in the substituted expression.",
        "calculationMath": "300000+(24604.1737795) = 324604.1737795",
        "intermediateValue": 324604.17377949867
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
    "mentalModelOrTrap": "Assume identical replacement indefinitely; net replacement = cost minus salvage. No printed choice matches the calculated result at its stated precision. The correct computed result is shown above; do not force a letter."
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
    "given": [
      {
        "symbol": "",
        "meaning": "Principal",
        "value": "₱500,000"
      },
      {
        "symbol": "",
        "meaning": "Continuous rate",
        "value": "12% yearly"
      },
      {
        "symbol": "",
        "meaning": "Time",
        "value": "5 years"
      }
    ],
    "governingFormula": "F=P\\times e^{r\\times t}",
    "substitutionMath": "F=500000\\times e^{0.12\\times 5}",
    "formulaSymbols": "P = principal or present worth; r = annual interest rate; t = time in years",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "0.12\\times(5) = 0.6",
        "intermediateValue": 0.6
      },
      {
        "step": 2,
        "title": "Apply the exponential",
        "explanation": "Use eˣ for continuous growth; use ln to reverse exponential growth.",
        "calculationMath": "e^{\\left(0.12\\right)\\times\\left(5\\right)} = 1.8221188",
        "intermediateValue": 1.8221188003905089
      },
      {
        "step": 3,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "500000\\times(1.8221188) = 911059.40019525",
        "intermediateValue": 911059.4001952545
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
    "given": [
      {
        "symbol": "",
        "meaning": "Year-5 book value",
        "value": "₱30,833.33"
      },
      {
        "symbol": "",
        "meaning": "Salvage",
        "value": "₱12,000"
      },
      {
        "symbol": "",
        "meaning": "Life",
        "value": "6 years"
      },
      {
        "symbol": "",
        "meaning": "Method",
        "value": "Straight line"
      }
    ],
    "governingFormula": "C=\\frac{n\\times BV-m\\times S}{n-m}",
    "substitutionMath": "C=\\frac{6\\times 30833.33-5\\times 12000}{6-5}",
    "formulaSymbols": "BV = book value; S = salvage value; m = compounding periods per year; n = number of periods or useful life",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "6\\times(30833.33) = 184999.98",
        "intermediateValue": 184999.98
      },
      {
        "step": 2,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "5\\times(12000) = 60000",
        "intermediateValue": 60000
      },
      {
        "step": 3,
        "title": "Subtract the stated amounts",
        "explanation": "Subtract in this order; the order matters for cost, interest, or remaining book value.",
        "calculationMath": "184999.98-(60000) = 124999.98",
        "intermediateValue": 124999.98000000001
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
    "given": [
      {
        "symbol": "",
        "meaning": "Cost",
        "value": "$80,000"
      },
      {
        "symbol": "",
        "meaning": "Salvage",
        "value": "$20,000"
      },
      {
        "symbol": "",
        "meaning": "Life",
        "value": "20 years"
      },
      {
        "symbol": "",
        "meaning": "Annual operation",
        "value": "$18,000"
      },
      {
        "symbol": "",
        "meaning": "Interest",
        "value": "10% yearly"
      }
    ],
    "governingFormula": "EUAC=C\\times \\frac{i}{1-\\left(1+i\\right)^{-n}}-S\\times \\frac{i}{\\left(1+i\\right)^{n}-1}+O",
    "substitutionMath": "EUAC=80000\\times \\frac{0.1}{1-\\left(1+0.1\\right)^{-20}}-20000\\times \\frac{0.1}{\\left(1+0.1\\right)^{20}-1}+18000",
    "formulaSymbols": "C = first cost; O = annual operating cost; S = salvage value; i = effective rate per payment period; n = number of periods or useful life",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Find the loan-payment factor",
        "explanation": "Use i=0.1 (10.000000% per payment period) and n=20. Multiply the financed principal by this factor to obtain each period-end payment.",
        "calculationMath": "\\frac{0.1}{1-(1+0.1)^{-20}} = 0.11745962",
        "intermediateValue": 0.11745962477254576
      },
      {
        "step": 2,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "80000\\times(0.11745962) = 9396.7699818",
        "intermediateValue": 9396.769981803662
      },
      {
        "step": 3,
        "title": "Find the savings-deposit factor",
        "explanation": "Use i=0.1 (10.000000% per payment period) and n=20. Multiply the future target by this factor to obtain each period-end deposit.",
        "calculationMath": "\\frac{0.1}{(1+0.1)^{20}-1} = 0.01745962",
        "intermediateValue": 0.017459624772545757
      },
      {
        "step": 4,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "20000\\times(0.01745962) = 349.19249545",
        "intermediateValue": 349.19249545091515
      },
      {
        "step": 5,
        "title": "Subtract the stated amounts",
        "explanation": "Subtract in this order; the order matters for cost, interest, or remaining book value.",
        "calculationMath": "9396.7699818-(349.19249545) = 9047.57748635",
        "intermediateValue": 9047.577486352746
      },
      {
        "step": 6,
        "title": "Combine the amounts",
        "explanation": "Add the components represented in the substituted expression.",
        "calculationMath": "9047.57748635+(18000) = 27047.57748635",
        "intermediateValue": 27047.577486352748
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
    "given": [
      {
        "symbol": "",
        "meaning": "Monthly payment",
        "value": "$1,000"
      },
      {
        "symbol": "",
        "meaning": "Nominal rate",
        "value": "12% compounded quarterly"
      },
      {
        "symbol": "",
        "meaning": "Horizon",
        "value": "Forever"
      }
    ],
    "governingFormula": "P=\\frac{A}{\\left(1+\\frac{r}{m}\\right)^{\\frac{m}{p}}-1}",
    "substitutionMath": "P=\\frac{1000}{\\left(1+\\frac{0.12}{4}\\right)^{\\frac{4}{12}}-1}",
    "formulaSymbols": "A = equal payment; m = compounding periods per year; p = p; r = annual interest rate",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Divide to find the required ratio",
        "explanation": "Keep the entire denominator grouped; use the full-precision result.",
        "calculationMath": "\\frac{1}{3} = 0.33333333",
        "intermediateValue": 0.3333333333333333
      },
      {
        "step": 2,
        "title": "Calculate the growth or remaining-value factor",
        "explanation": "Apply the exponent for the stated number of periods; a negative exponent discounts rather than accumulates.",
        "calculationMath": "\\left(1.03\\right)^{0.33333333} = 1.00990163",
        "intermediateValue": 1.009901634049961
      },
      {
        "step": 3,
        "title": "Subtract the stated amounts",
        "explanation": "Subtract in this order; the order matters for cost, interest, or remaining book value.",
        "calculationMath": "1.00990163-(1) = 0.00990163",
        "intermediateValue": 0.009901634049960917
      },
      {
        "step": 4,
        "title": "Divide to find the required ratio",
        "explanation": "Keep the entire denominator grouped; use the full-precision result.",
        "calculationMath": "\\frac{1000}{0.00990163} = 100993.43148356",
        "intermediateValue": 100993.43148355873
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
    "given": [
      {
        "symbol": "",
        "meaning": "Quarter-end payment",
        "value": "₱100,000"
      },
      {
        "symbol": "",
        "meaning": "Payments",
        "value": "40 over 10 years"
      },
      {
        "symbol": "",
        "meaning": "Nominal rate",
        "value": "14% compounded quarterly"
      },
      {
        "symbol": "",
        "meaning": "Focal date",
        "value": "End of year 4"
      }
    ],
    "governingFormula": "V_{h}=A\\times \\frac{1-\\left(1+i\\right)^{-n}}{i}\\times \\left(1+i\\right)^{h}",
    "substitutionMath": "V_{h}=100000\\times \\frac{1-\\left(1+0.035\\right)^{-40}}{0.035}\\times \\left(1+0.035\\right)^{16}",
    "formulaSymbols": "A = equal payment; h = elapsed intervals; i = effective rate per payment period; n = number of periods or useful life",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Find the present-worth factor",
        "explanation": "Use i=0.035 (3.500000% per payment period) and n=40. Multiply an equal payment by this factor to obtain its value one period before the first payment.",
        "calculationMath": "\\frac{1-(1+0.035)^{-40}}{0.035} = 21.35507234",
        "intermediateValue": 21.355072337297504
      },
      {
        "step": 2,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "100000\\times(21.35507234) = 2135507.23372975",
        "intermediateValue": 2135507.2337297504
      },
      {
        "step": 3,
        "title": "Calculate the growth or remaining-value factor",
        "explanation": "Apply the exponent for the stated number of periods; a negative exponent discounts rather than accumulates.",
        "calculationMath": "\\left(1.035\\right)^{16} = 1.73398604",
        "intermediateValue": 1.7339860398284848
      },
      {
        "step": 4,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "2135507.23372975\\times(1.73398604) = 3702939.73124013",
        "intermediateValue": 3702939.7312401324
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
    "given": [
      {
        "symbol": "",
        "meaning": "Loan",
        "value": "₱12,000"
      },
      {
        "symbol": "",
        "meaning": "Nominal rate",
        "value": "20% compounded quarterly"
      },
      {
        "symbol": "",
        "meaning": "Payments",
        "value": "Semiannual for 3 years"
      }
    ],
    "governingFormula": "A=P\\times \\frac{i}{1-\\left(1+i\\right)^{-n}}",
    "substitutionMath": "A=12000\\times \\frac{\\left((1+0.05)^2-1\\right)}{1-\\left(1+\\left((1+0.05)^2-1\\right)\\right)^{-6}}",
    "formulaSymbols": "P = principal or present worth; i = effective rate per payment period; n = number of periods or useful life",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Calculate the growth or remaining-value factor",
        "explanation": "Apply the exponent for the stated number of periods; a negative exponent discounts rather than accumulates.",
        "calculationMath": "\\left(1.05\\right)^{2} = 1.1025",
        "intermediateValue": 1.1025
      },
      {
        "step": 2,
        "title": "Subtract the stated amounts",
        "explanation": "Subtract in this order; the order matters for cost, interest, or remaining book value.",
        "calculationMath": "1.1025-(1) = 0.1025",
        "intermediateValue": 0.10250000000000004
      },
      {
        "step": 3,
        "title": "Find the loan-payment factor",
        "explanation": "Use i=0.1025 (10.250000% per payment period) and n=6. Multiply the financed principal by this factor to obtain each period-end payment.",
        "calculationMath": "\\frac{0.1025}{1-(1+0.1025)^{-6}} = 0.23129209",
        "intermediateValue": 0.23129209054267155
      },
      {
        "step": 4,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "12000\\times(0.23129209) = 2775.50508651",
        "intermediateValue": 2775.505086512059
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
    "given": [
      {
        "symbol": "",
        "meaning": "Cost",
        "value": "₱12,000"
      },
      {
        "symbol": "",
        "meaning": "Interest",
        "value": "8% yearly"
      },
      {
        "symbol": "",
        "meaning": "Payments",
        "value": "5 beginning-of-year payments"
      }
    ],
    "governingFormula": "A_{due}=\\frac{P\\times \\frac{i}{1-\\left(1+i\\right)^{-n}}}{1+i}",
    "substitutionMath": "A_{due}=\\frac{12000\\times \\frac{0.08}{1-\\left(1+0.08\\right)^{-5}}}{1+0.08}",
    "formulaSymbols": "P = principal or present worth; i = effective rate per payment period; n = number of periods or useful life",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Find the loan-payment factor",
        "explanation": "Use i=0.08 (8.000000% per payment period) and n=5. Multiply the financed principal by this factor to obtain each period-end payment.",
        "calculationMath": "\\frac{0.08}{1-(1+0.08)^{-5}} = 0.25045645",
        "intermediateValue": 0.2504564545668364
      },
      {
        "step": 2,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "12000\\times(0.25045645) = 3005.4774548",
        "intermediateValue": 3005.477454802037
      },
      {
        "step": 3,
        "title": "Adjust for beginning-of-period timing",
        "explanation": "Payments one period earlier have an extra factor of 1+i in their worth; divide the ordinary payment by 1+i when finding an installment.",
        "calculationMath": "\\frac{3005.4774548}{1.08} = 2782.84949519",
        "intermediateValue": 2782.849495187071
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
    "given": [
      {
        "symbol": "",
        "meaning": "Service life",
        "value": "5 years"
      },
      {
        "symbol": "",
        "meaning": "Warranty",
        "value": "2 years"
      },
      {
        "symbol": "",
        "meaning": "Maintenance",
        "value": "$100 at years 3, 4, 5"
      },
      {
        "symbol": "",
        "meaning": "Interest",
        "value": "10% yearly"
      }
    ],
    "governingFormula": "EUAC=\\frac{M\\times \\frac{1-\\left(1+i\\right)^{-n_{c}}}{i}}{\\left(1+i\\right)^{w}}\\times \\frac{i}{1-\\left(1+i\\right)^{-n}}",
    "substitutionMath": "EUAC=\\frac{100\\times \\frac{1-\\left(1+0.1\\right)^{-3}}{0.1}}{\\left(1+0.1\\right)^{2}}\\times \\frac{0.1}{1-\\left(1+0.1\\right)^{-5}}",
    "formulaSymbols": "M = annual maintenance cost; i = effective rate per payment period; n = number of periods or useful life; n_c = number of periods or useful life; w = warranty years",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Find the present-worth factor",
        "explanation": "Use i=0.1 (10.000000% per payment period) and n=3. Multiply an equal payment by this factor to obtain its value one period before the first payment.",
        "calculationMath": "\\frac{1-(1+0.1)^{-3}}{0.1} = 2.48685199",
        "intermediateValue": 2.4868519909842246
      },
      {
        "step": 2,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "100\\times(2.48685199) = 248.6851991",
        "intermediateValue": 248.68519909842246
      },
      {
        "step": 3,
        "title": "Calculate the growth or remaining-value factor",
        "explanation": "Apply the exponent for the stated number of periods; a negative exponent discounts rather than accumulates.",
        "calculationMath": "\\left(1.1\\right)^{2} = 1.21",
        "intermediateValue": 1.2100000000000002
      },
      {
        "step": 4,
        "title": "Divide to find the required ratio",
        "explanation": "Keep the entire denominator grouped; use the full-precision result.",
        "calculationMath": "\\frac{248.6851991}{1.21} = 205.52495793",
        "intermediateValue": 205.52495793258052
      },
      {
        "step": 5,
        "title": "Find the loan-payment factor",
        "explanation": "Use i=0.1 (10.000000% per payment period) and n=5. Multiply the financed principal by this factor to obtain each period-end payment.",
        "calculationMath": "\\frac{0.1}{1-(1+0.1)^{-5}} = 0.26379748",
        "intermediateValue": 0.26379748079474524
      },
      {
        "step": 6,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "205.52495793\\times(0.26379748) = 54.21696614",
        "intermediateValue": 54.21696614306073
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
    "given": [
      {
        "symbol": "",
        "meaning": "Face repayment",
        "value": "₱100,000"
      },
      {
        "symbol": "",
        "meaning": "Interest withheld",
        "value": "20% of face value"
      },
      {
        "symbol": "",
        "meaning": "Time",
        "value": "1 year"
      },
      {
        "symbol": "",
        "meaning": "Cash received",
        "value": "₱80,000"
      }
    ],
    "governingFormula": "r_{percent}=\\frac{I}{P}\\times 100",
    "substitutionMath": "r_{percent}=\\frac{20000}{80000}\\times 100",
    "formulaSymbols": "I = interest; P = principal or present worth",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Divide to find the required ratio",
        "explanation": "Keep the entire denominator grouped; use the full-precision result.",
        "calculationMath": "\\frac{20000}{80000} = 0.25",
        "intermediateValue": 0.25
      },
      {
        "step": 2,
        "title": "Convert the decimal rate to percent",
        "explanation": "Multiplying a decimal rate by 100 expresses the same rate as a percentage.",
        "calculationMath": "0.25\\times(100) = 25",
        "intermediateValue": 25.0
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
    "given": [
      {
        "symbol": "",
        "meaning": "Year-end receipt",
        "value": "$1,000"
      },
      {
        "symbol": "",
        "meaning": "Receipts",
        "value": "10"
      },
      {
        "symbol": "",
        "meaning": "Required real return",
        "value": "5%"
      },
      {
        "symbol": "",
        "meaning": "Inflation",
        "value": "6%"
      }
    ],
    "governingFormula": "P=A\\times \\frac{1-\\left(1+\\left(1+i_{real}\\right)\\times \\left(1+f\\right)-1\\right)^{-n}}{\\left(1+i_{real}\\right)\\times \\left(1+f\\right)-1}",
    "substitutionMath": "P=1000\\times \\frac{1-\\left(1+\\left(1+0.05\\right)\\times \\left(1+0.06\\right)-1\\right)^{-10}}{\\left(1+0.05\\right)\\times \\left(1+0.06\\right)-1}",
    "formulaSymbols": "A = equal payment; f = annual inflation rate; i_real = real annual rate; n = number of periods or useful life",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "1.05\\times(1.06) = 1.113",
        "intermediateValue": 1.1130000000000002
      },
      {
        "step": 2,
        "title": "Subtract the stated amounts",
        "explanation": "Subtract in this order; the order matters for cost, interest, or remaining book value.",
        "calculationMath": "1.113-(1) = 0.113",
        "intermediateValue": 0.11300000000000021
      },
      {
        "step": 3,
        "title": "Find the present-worth factor",
        "explanation": "Use i=0.113 (11.300000% per payment period) and n=10. Multiply an equal payment by this factor to obtain its value one period before the first payment.",
        "calculationMath": "\\frac{1-(1+0.113)^{-10}}{0.113} = 5.81587651",
        "intermediateValue": 5.815876511007723
      },
      {
        "step": 4,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "1000\\times(5.81587651) = 5815.87651101",
        "intermediateValue": 5815.876511007723
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
    "given": [
      {
        "symbol": "",
        "meaning": "Debt",
        "value": "$15,000"
      },
      {
        "symbol": "",
        "meaning": "Payments",
        "value": "$4,000 at month 3, $5,000 at month 12, $3,000 at month 15"
      },
      {
        "symbol": "",
        "meaning": "Final payment date",
        "value": "Month 21"
      },
      {
        "symbol": "",
        "meaning": "Nominal rate",
        "value": "18% compounded quarterly"
      }
    ],
    "governingFormula": "F=P\\times \\left(1+i\\right)^{N}-C_{1}\\times \\left(1+i\\right)^{N-t_{1}}-C_{2}\\times \\left(1+i\\right)^{N-t_{2}}-C_{3}\\times \\left(1+i\\right)^{N-t_{3}}",
    "substitutionMath": "F=15000\\times \\left(1+0.045\\right)^{7}-4000\\times \\left(1+0.045\\right)^{7-1}-5000\\times \\left(1+0.045\\right)^{7-4}-3000\\times \\left(1+0.045\\right)^{7-5}",
    "formulaSymbols": "C_1 = first cost; C_2 = first cost; C_3 = first cost; N = n; P = principal or present worth; i = effective rate per payment period; t_1 = time in years; t_2 = time in years; t_3 = time in years",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Calculate the growth or remaining-value factor",
        "explanation": "Apply the exponent for the stated number of periods; a negative exponent discounts rather than accumulates.",
        "calculationMath": "\\left(1.045\\right)^{7} = 1.36086183",
        "intermediateValue": 1.3608618304656532
      },
      {
        "step": 2,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "15000\\times(1.36086183) = 20412.92745698",
        "intermediateValue": 20412.9274569848
      },
      {
        "step": 3,
        "title": "Calculate the growth or remaining-value factor",
        "explanation": "Apply the exponent for the stated number of periods; a negative exponent discounts rather than accumulates.",
        "calculationMath": "\\left(1.045\\right)^{6} = 1.30226012",
        "intermediateValue": 1.3022601248475152
      },
      {
        "step": 4,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "4000\\times(1.30226012) = 5209.04049939",
        "intermediateValue": 5209.040499390061
      },
      {
        "step": 5,
        "title": "Subtract the stated amounts",
        "explanation": "Subtract in this order; the order matters for cost, interest, or remaining book value.",
        "calculationMath": "20412.92745698-(5209.04049939) = 15203.88695759",
        "intermediateValue": 15203.886957594737
      },
      {
        "step": 6,
        "title": "Calculate the growth or remaining-value factor",
        "explanation": "Apply the exponent for the stated number of periods; a negative exponent discounts rather than accumulates.",
        "calculationMath": "\\left(1.045\\right)^{3} = 1.14116612",
        "intermediateValue": 1.1411661249999998
      },
      {
        "step": 7,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "5000\\times(1.14116612) = 5705.830625",
        "intermediateValue": 5705.830624999999
      },
      {
        "step": 8,
        "title": "Subtract the stated amounts",
        "explanation": "Subtract in this order; the order matters for cost, interest, or remaining book value.",
        "calculationMath": "15203.88695759-(5705.830625) = 9498.05633259",
        "intermediateValue": 9498.056332594739
      },
      {
        "step": 9,
        "title": "Calculate the growth or remaining-value factor",
        "explanation": "Apply the exponent for the stated number of periods; a negative exponent discounts rather than accumulates.",
        "calculationMath": "\\left(1.045\\right)^{2} = 1.092025",
        "intermediateValue": 1.0920249999999998
      },
      {
        "step": 10,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "3000\\times(1.092025) = 3276.075",
        "intermediateValue": 3276.0749999999994
      },
      {
        "step": 11,
        "title": "Subtract the stated amounts",
        "explanation": "Subtract in this order; the order matters for cost, interest, or remaining book value.",
        "calculationMath": "9498.05633259-(3276.075) = 6221.98133259",
        "intermediateValue": 6221.98133259474
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
    "given": [
      {
        "symbol": "",
        "meaning": "Fixed annual cost",
        "value": "$70,000"
      },
      {
        "symbol": "",
        "meaning": "Selling price",
        "value": "$125 per unit"
      },
      {
        "symbol": "",
        "meaning": "Variable cost",
        "value": "$56 per unit"
      },
      {
        "symbol": "",
        "meaning": "Find",
        "value": "Minimum whole units"
      }
    ],
    "governingFormula": "Q=\\frac{FC}{SP-VC}",
    "substitutionMath": "Q=\\frac{70000}{125-56}",
    "formulaSymbols": "FC = fixed cost; SP = selling price per unit; VC = variable cost per unit",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Find contribution per unit",
        "explanation": "Selling price minus variable costs is the amount each sale contributes toward fixed costs.",
        "calculationMath": "125-(56) = 69",
        "intermediateValue": 69
      },
      {
        "step": 2,
        "title": "Find the break-even ratio",
        "explanation": "Divide total fixed cost by contribution per unit; then round upward if whole units are required.",
        "calculationMath": "\\frac{70000}{69} = 1014.49275362",
        "intermediateValue": 1014.4927536231884
      },
      {
        "step": 3,
        "title": "Round upward for whole units",
        "explanation": "A fraction of a unit cannot cover fixed cost. The minimum whole-unit quantity is the ceiling, not ordinary rounding.",
        "calculationMath": "\\lceil 1014.49275362\\rceil = 1015",
        "intermediateValue": 1015
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
    "given": [
      {
        "symbol": "",
        "meaning": "Cost",
        "value": "₱45,000"
      },
      {
        "symbol": "",
        "meaning": "Book value after 6 years",
        "value": "₱4,350"
      },
      {
        "symbol": "",
        "meaning": "Method",
        "value": "Constant-percentage declining balance"
      }
    ],
    "governingFormula": "k_{percent}=\\left(1-\\left(\\frac{S}{C}\\right)^{\\frac{1}{n}}\\right)\\times 100",
    "substitutionMath": "k_{percent}=\\left(1-\\left(\\frac{4350}{45000}\\right)^{\\frac{1}{6}}\\right)\\times 100",
    "formulaSymbols": "C = first cost; S = salvage value; n = number of periods or useful life",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Divide to find the required ratio",
        "explanation": "Keep the entire denominator grouped; use the full-precision result.",
        "calculationMath": "\\frac{4350}{45000} = 0.09666667",
        "intermediateValue": 0.09666666666666666
      },
      {
        "step": 2,
        "title": "Divide to find the required ratio",
        "explanation": "Keep the entire denominator grouped; use the full-precision result.",
        "calculationMath": "\\frac{1}{6} = 0.16666667",
        "intermediateValue": 0.16666666666666666
      },
      {
        "step": 3,
        "title": "Calculate the growth or remaining-value factor",
        "explanation": "Apply the exponent for the stated number of periods; a negative exponent discounts rather than accumulates.",
        "calculationMath": "\\left(0.09666667\\right)^{0.16666667} = 0.67745345",
        "intermediateValue": 0.677453447491806
      },
      {
        "step": 4,
        "title": "Subtract the stated amounts",
        "explanation": "Subtract in this order; the order matters for cost, interest, or remaining book value.",
        "calculationMath": "1-(0.67745345) = 0.32254655",
        "intermediateValue": 0.322546552508194
      },
      {
        "step": 5,
        "title": "Convert the decimal rate to percent",
        "explanation": "Multiplying a decimal rate by 100 expresses the same rate as a percentage.",
        "calculationMath": "0.32254655\\times(100) = 32.25465525",
        "intermediateValue": 32.2546552508194
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
    "given": [
      {
        "symbol": "",
        "meaning": "Principal",
        "value": "$10,000"
      },
      {
        "symbol": "",
        "meaning": "Simple annual rate",
        "value": "8%"
      },
      {
        "symbol": "",
        "meaning": "Time",
        "value": "90 days"
      },
      {
        "symbol": "",
        "meaning": "Day basis",
        "value": "360-day assumption"
      }
    ],
    "governingFormula": "F=P\\times \\left(1+\\frac{r\\times d}{Y}\\right)",
    "substitutionMath": "F=10000\\times \\left(1+\\frac{0.08\\times 90}{360}\\right)",
    "formulaSymbols": "P = principal or present worth; Y = days per year; d = number of days; r = annual interest rate",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "0.08\\times(90) = 7.2",
        "intermediateValue": 7.2
      },
      {
        "step": 2,
        "title": "Divide to find the required ratio",
        "explanation": "Keep the entire denominator grouped; use the full-precision result.",
        "calculationMath": "\\frac{7.2}{360} = 0.02",
        "intermediateValue": 0.02
      },
      {
        "step": 3,
        "title": "Combine the amounts",
        "explanation": "Add the components represented in the substituted expression.",
        "calculationMath": "1+(0.02) = 1.02",
        "intermediateValue": 1.02
      },
      {
        "step": 4,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "10000\\times(1.02) = 10200",
        "intermediateValue": 10200.0
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
    "given": [
      {
        "symbol": "",
        "meaning": "Effective annual rate",
        "value": "8.33%"
      },
      {
        "symbol": "",
        "meaning": "Find",
        "value": "Equivalent continuous annual rate"
      },
      {
        "symbol": "",
        "meaning": "Mentioned period",
        "value": "6 years, not needed for annual conversion"
      }
    ],
    "governingFormula": "r_{percent}=\\ln\\left(1+i_{e}\\right)\\times 100",
    "substitutionMath": "r_{percent}=\\ln\\left(1+0.0833\\right)\\times 100",
    "formulaSymbols": "i_e = effective annual rate",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Apply the natural logarithm",
        "explanation": "Use eˣ for continuous growth; use ln to reverse exponential growth.",
        "calculationMath": "\\ln\\left(1.0833\\right) = 0.08001194",
        "intermediateValue": 0.08001193796938463
      },
      {
        "step": 2,
        "title": "Convert the decimal rate to percent",
        "explanation": "Multiplying a decimal rate by 100 expresses the same rate as a percentage.",
        "calculationMath": "0.08001194\\times(100) = 8.0011938",
        "intermediateValue": 8.001193796938463
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
    "given": [
      {
        "symbol": "",
        "meaning": "Yearly payments",
        "value": "₱5,000, ₱4,500, ₱4,000, ₱3,500 at years 1–4"
      },
      {
        "symbol": "",
        "meaning": "Interest",
        "value": "5%"
      },
      {
        "symbol": "",
        "meaning": "Focal date",
        "value": "Year 4"
      }
    ],
    "governingFormula": "F_{N}=C_{1}\\times \\left(1+i\\right)^{3}+C_{2}\\times \\left(1+i\\right)^{2}+C_{3}\\times \\left(1+i\\right)+C_{4}",
    "substitutionMath": "F_{N}=5000\\times \\left(1+0.05\\right)^{3}+4500\\times \\left(1+0.05\\right)^{2}+4000\\times \\left(1+0.05\\right)+3500",
    "formulaSymbols": "C_1 = first cost; C_2 = first cost; C_3 = first cost; C_4 = first cost; i = effective rate per payment period",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Calculate the growth or remaining-value factor",
        "explanation": "Apply the exponent for the stated number of periods; a negative exponent discounts rather than accumulates.",
        "calculationMath": "\\left(1.05\\right)^{3} = 1.157625",
        "intermediateValue": 1.1576250000000001
      },
      {
        "step": 2,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "5000\\times(1.157625) = 5788.125",
        "intermediateValue": 5788.125000000001
      },
      {
        "step": 3,
        "title": "Calculate the growth or remaining-value factor",
        "explanation": "Apply the exponent for the stated number of periods; a negative exponent discounts rather than accumulates.",
        "calculationMath": "\\left(1.05\\right)^{2} = 1.1025",
        "intermediateValue": 1.1025
      },
      {
        "step": 4,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "4500\\times(1.1025) = 4961.25",
        "intermediateValue": 4961.25
      },
      {
        "step": 5,
        "title": "Combine the amounts",
        "explanation": "Add the components represented in the substituted expression.",
        "calculationMath": "5788.125+(4961.25) = 10749.375",
        "intermediateValue": 10749.375
      },
      {
        "step": 6,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "4000\\times(1.05) = 4200",
        "intermediateValue": 4200.0
      },
      {
        "step": 7,
        "title": "Combine the amounts",
        "explanation": "Add the components represented in the substituted expression.",
        "calculationMath": "10749.375+(4200) = 14949.375",
        "intermediateValue": 14949.375
      },
      {
        "step": 8,
        "title": "Combine the amounts",
        "explanation": "Add the components represented in the substituted expression.",
        "calculationMath": "14949.375+(3500) = 18449.375",
        "intermediateValue": 18449.375
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
    "given": [
      {
        "symbol": "",
        "meaning": "Target",
        "value": "₱40,000 at age 21"
      },
      {
        "symbol": "",
        "meaning": "First deposit",
        "value": "Age 3½"
      },
      {
        "symbol": "",
        "meaning": "Deposits",
        "value": "Every half-year through age 21"
      },
      {
        "symbol": "",
        "meaning": "Nominal rate",
        "value": "3% compounded semiannually"
      }
    ],
    "governingFormula": "A=F\\times \\frac{i}{\\left(1+i\\right)^{n}-1}",
    "substitutionMath": "A=40000\\times \\frac{0.015}{\\left(1+0.015\\right)^{36}-1}",
    "formulaSymbols": "F = future amount; i = effective rate per payment period; n = number of periods or useful life",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Find the savings-deposit factor",
        "explanation": "Use i=0.015 (1.500000% per payment period) and n=36. Multiply the future target by this factor to obtain each period-end deposit.",
        "calculationMath": "\\frac{0.015}{(1+0.015)^{36}-1} = 0.0211524",
        "intermediateValue": 0.021152395535917017
      },
      {
        "step": 2,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "40000\\times(0.0211524) = 846.09582144",
        "intermediateValue": 846.0958214366807
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
    "given": [
      {
        "symbol": "",
        "meaning": "Cost",
        "value": "$720,000"
      },
      {
        "symbol": "",
        "meaning": "Year-10 book value",
        "value": "$40,545.73"
      },
      {
        "symbol": "",
        "meaning": "Method",
        "value": "Constant-percentage declining balance"
      }
    ],
    "governingFormula": "k_{percent}=\\left(1-\\left(\\frac{S}{C}\\right)^{\\frac{1}{n}}\\right)\\times 100",
    "substitutionMath": "k_{percent}=\\left(1-\\left(\\frac{40545.73}{720000}\\right)^{\\frac{1}{10}}\\right)\\times 100",
    "formulaSymbols": "C = first cost; S = salvage value; n = number of periods or useful life",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Divide to find the required ratio",
        "explanation": "Keep the entire denominator grouped; use the full-precision result.",
        "calculationMath": "\\frac{40545.73}{720000} = 0.05631351",
        "intermediateValue": 0.056313513888888896
      },
      {
        "step": 2,
        "title": "Calculate the growth or remaining-value factor",
        "explanation": "Apply the exponent for the stated number of periods; a negative exponent discounts rather than accumulates.",
        "calculationMath": "\\left(0.05631351\\right)^{0.1} = 0.75",
        "intermediateValue": 0.7499999989071223
      },
      {
        "step": 3,
        "title": "Subtract the stated amounts",
        "explanation": "Subtract in this order; the order matters for cost, interest, or remaining book value.",
        "calculationMath": "1-(0.75) = 0.25",
        "intermediateValue": 0.2500000010928777
      },
      {
        "step": 4,
        "title": "Convert the decimal rate to percent",
        "explanation": "Multiplying a decimal rate by 100 expresses the same rate as a percentage.",
        "calculationMath": "0.25\\times(100) = 25.00000011",
        "intermediateValue": 25.000000109287768
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
    "given": [
      {
        "symbol": "",
        "meaning": "Cost",
        "value": "$20,000"
      },
      {
        "symbol": "",
        "meaning": "Scrap",
        "value": "$2,000"
      },
      {
        "symbol": "",
        "meaning": "Life",
        "value": "8 years"
      },
      {
        "symbol": "",
        "meaning": "Fund interest",
        "value": "4% yearly"
      }
    ],
    "governingFormula": "A=\\left(C-S\\right)\\times \\frac{i}{\\left(1+i\\right)^{n}-1}",
    "substitutionMath": "A=\\left(20000-2000\\right)\\times \\frac{0.04}{\\left(1+0.04\\right)^{8}-1}",
    "formulaSymbols": "C = first cost; S = salvage value; i = effective rate per payment period; n = number of periods or useful life",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Find the savings-deposit factor",
        "explanation": "Use i=0.04 (4.000000% per payment period) and n=8. Multiply the future target by this factor to obtain each period-end deposit.",
        "calculationMath": "\\frac{0.04}{(1+0.04)^{8}-1} = 0.10852783",
        "intermediateValue": 0.10852783204671283
      },
      {
        "step": 2,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "18000\\times(0.10852783) = 1953.50097684",
        "intermediateValue": 1953.500976840831
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
    "given": [
      {
        "symbol": "",
        "meaning": "Redemption target",
        "value": "₱150,000"
      },
      {
        "symbol": "",
        "meaning": "Time",
        "value": "10 years"
      },
      {
        "symbol": "",
        "meaning": "Fund interest",
        "value": "3% yearly"
      }
    ],
    "governingFormula": "A=F\\times \\frac{i}{\\left(1+i\\right)^{n}-1}",
    "substitutionMath": "A=150000\\times \\frac{0.03}{\\left(1+0.03\\right)^{10}-1}",
    "formulaSymbols": "F = future amount; i = effective rate per payment period; n = number of periods or useful life",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Find the savings-deposit factor",
        "explanation": "Use i=0.03 (3.000000% per payment period) and n=10. Multiply the future target by this factor to obtain each period-end deposit.",
        "calculationMath": "\\frac{0.03}{(1+0.03)^{10}-1} = 0.08723051",
        "intermediateValue": 0.08723050660515952
      },
      {
        "step": 2,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "150000\\times(0.08723051) = 13084.57599077",
        "intermediateValue": 13084.575990773928
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
    "given": [
      {
        "symbol": "",
        "meaning": "Payment",
        "value": "$3,000 at each quarter’s beginning"
      },
      {
        "symbol": "",
        "meaning": "Time",
        "value": "4 years for requested target"
      },
      {
        "symbol": "",
        "meaning": "Nominal rate",
        "value": "6% compounded quarterly"
      },
      {
        "symbol": "",
        "meaning": "Source issue",
        "value": "“34 years” is inconsistent with its year-4 target"
      }
    ],
    "governingFormula": "F_{due}=A\\times \\frac{\\left(1+i\\right)^{n}-1}{i}\\times \\left(1+i\\right)",
    "substitutionMath": "F_{due}=3000\\times \\frac{\\left(1+0.015\\right)^{16}-1}{0.015}\\times \\left(1+0.015\\right)",
    "formulaSymbols": "A = equal payment; i = effective rate per payment period; n = number of periods or useful life",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Find the accumulated-savings factor",
        "explanation": "Use i=0.015 (1.500000% per payment period) and n=16. Multiply an equal deposit by this factor to obtain the amount on the final deposit date.",
        "calculationMath": "\\frac{(1+0.015)^{16}-1}{0.015} = 17.93236984",
        "intermediateValue": 17.93236984361221
      },
      {
        "step": 2,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "3000\\times(17.93236984) = 53797.10953084",
        "intermediateValue": 53797.109530836635
      },
      {
        "step": 3,
        "title": "Adjust for beginning-of-period timing",
        "explanation": "Payments one period earlier have an extra factor of 1+i in their worth; divide the ordinary payment by 1+i when finding an installment.",
        "calculationMath": "53797.10953084\\times(1.015) = 54604.0661738",
        "intermediateValue": 54604.066173799176
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
    "given": [
      {
        "symbol": "",
        "meaning": "Principal",
        "value": "$600"
      },
      {
        "symbol": "",
        "meaning": "First stage",
        "value": "4 years at 6% simple interest"
      },
      {
        "symbol": "",
        "meaning": "Second stage",
        "value": "12 years at 5% annual compounding"
      }
    ],
    "governingFormula": "F=P\\times \\left(1+r\\times t_{s}\\right)\\times \\left(1+i\\right)^{n}",
    "substitutionMath": "F=600\\times \\left(1+0.06\\times 4\\right)\\times \\left(1+0.05\\right)^{12}",
    "formulaSymbols": "P = principal or present worth; i = effective rate per payment period; n = number of periods or useful life; r = annual interest rate; t_s = simple-interest years",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "0.06\\times(4) = 0.24",
        "intermediateValue": 0.24
      },
      {
        "step": 2,
        "title": "Combine the amounts",
        "explanation": "Add the components represented in the substituted expression.",
        "calculationMath": "1+(0.24) = 1.24",
        "intermediateValue": 1.24
      },
      {
        "step": 3,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "600\\times(1.24) = 744",
        "intermediateValue": 744.0
      },
      {
        "step": 4,
        "title": "Calculate the growth or remaining-value factor",
        "explanation": "Apply the exponent for the stated number of periods; a negative exponent discounts rather than accumulates.",
        "calculationMath": "\\left(1.05\\right)^{12} = 1.79585633",
        "intermediateValue": 1.79585632602213
      },
      {
        "step": 5,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "744\\times(1.79585633) = 1336.11710656",
        "intermediateValue": 1336.117106560465
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
    "given": [
      {
        "symbol": "",
        "meaning": "Installed cost",
        "value": "₱800,000"
      },
      {
        "symbol": "",
        "meaning": "Gross salvage",
        "value": "₱50,000"
      },
      {
        "symbol": "",
        "meaning": "Dismantling",
        "value": "₱15,000"
      },
      {
        "symbol": "",
        "meaning": "Life",
        "value": "10 years"
      },
      {
        "symbol": "",
        "meaning": "Elapsed time",
        "value": "6 years"
      },
      {
        "symbol": "",
        "meaning": "Method",
        "value": "Straight line"
      }
    ],
    "governingFormula": "BV_{m}=C-\\frac{m\\times \\left(C-S+L\\right)}{n}",
    "substitutionMath": "BV_{m}=800000-\\frac{6\\times \\left(800000-50000+15000\\right)}{10}",
    "formulaSymbols": "C = first cost; L = dismantling cost; S = salvage value; m = compounding periods per year; n = number of periods or useful life",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Subtract the stated amounts",
        "explanation": "Subtract in this order; the order matters for cost, interest, or remaining book value.",
        "calculationMath": "800000-(50000) = 750000",
        "intermediateValue": 750000
      },
      {
        "step": 2,
        "title": "Combine the amounts",
        "explanation": "Add the components represented in the substituted expression.",
        "calculationMath": "750000+(15000) = 765000",
        "intermediateValue": 765000
      },
      {
        "step": 3,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "6\\times(765000) = 4590000",
        "intermediateValue": 4590000
      },
      {
        "step": 4,
        "title": "Divide to find the required ratio",
        "explanation": "Keep the entire denominator grouped; use the full-precision result.",
        "calculationMath": "\\frac{4590000}{10} = 459000",
        "intermediateValue": 459000.0
      },
      {
        "step": 5,
        "title": "Subtract the stated amounts",
        "explanation": "Subtract in this order; the order matters for cost, interest, or remaining book value.",
        "calculationMath": "800000-(459000) = 341000",
        "intermediateValue": 341000.0
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
    "given": [
      {
        "symbol": "",
        "meaning": "Cost",
        "value": "$1,000,000"
      },
      {
        "symbol": "",
        "meaning": "Life",
        "value": "10 years"
      },
      {
        "symbol": "",
        "meaning": "Depreciation rate",
        "value": "25% of beginning book value"
      }
    ],
    "governingFormula": "TD=C\\times \\left(1-\\left(1-k\\right)^{n}\\right)",
    "substitutionMath": "TD=1000000\\times \\left(1-\\left(1-0.25\\right)^{10}\\right)",
    "formulaSymbols": "C = first cost; k = annual depreciation fraction; n = number of periods or useful life",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Calculate the growth or remaining-value factor",
        "explanation": "Apply the exponent for the stated number of periods; a negative exponent discounts rather than accumulates.",
        "calculationMath": "\\left(0.75\\right)^{10} = 0.05631351",
        "intermediateValue": 0.056313514709472656
      },
      {
        "step": 2,
        "title": "Subtract the stated amounts",
        "explanation": "Subtract in this order; the order matters for cost, interest, or remaining book value.",
        "calculationMath": "1-(0.05631351) = 0.94368649",
        "intermediateValue": 0.9436864852905273
      },
      {
        "step": 3,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "1000000\\times(0.94368649) = 943686.48529053",
        "intermediateValue": 943686.4852905273
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
    "given": [
      {
        "symbol": "",
        "meaning": "Simple interest earned",
        "value": "$328"
      },
      {
        "symbol": "",
        "meaning": "Annual rate",
        "value": "8.5%"
      },
      {
        "symbol": "",
        "meaning": "Time",
        "value": "2 years"
      }
    ],
    "governingFormula": "P=\\frac{I}{r\\times t}",
    "substitutionMath": "P=\\frac{328}{0.085\\times 2}",
    "formulaSymbols": "I = interest; r = annual interest rate; t = time in years",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "0.085\\times(2) = 0.17",
        "intermediateValue": 0.17
      },
      {
        "step": 2,
        "title": "Divide to find the required ratio",
        "explanation": "Keep the entire denominator grouped; use the full-precision result.",
        "calculationMath": "\\frac{328}{0.17} = 1929.41176471",
        "intermediateValue": 1929.4117647058822
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
    "given": [
      {
        "symbol": "",
        "meaning": "Loan",
        "value": "₱10,000"
      },
      {
        "symbol": "",
        "meaning": "Annual rate",
        "value": "12%"
      },
      {
        "symbol": "",
        "meaning": "Payments",
        "value": "6 year-end payments"
      }
    ],
    "governingFormula": "A=P\\times \\frac{i}{1-\\left(1+i\\right)^{-n}}",
    "substitutionMath": "A=10000\\times \\frac{0.12}{1-\\left(1+0.12\\right)^{-6}}",
    "formulaSymbols": "P = principal or present worth; i = effective rate per payment period; n = number of periods or useful life",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Find the loan-payment factor",
        "explanation": "Use i=0.12 (12.000000% per payment period) and n=6. Multiply the financed principal by this factor to obtain each period-end payment.",
        "calculationMath": "\\frac{0.12}{1-(1+0.12)^{-6}} = 0.24322572",
        "intermediateValue": 0.24322571842462912
      },
      {
        "step": 2,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "10000\\times(0.24322572) = 2432.25718425",
        "intermediateValue": 2432.257184246291
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
    "given": [
      {
        "symbol": "",
        "meaning": "Price",
        "value": "$20,000"
      },
      {
        "symbol": "",
        "meaning": "Down payment",
        "value": "$5,000"
      },
      {
        "symbol": "",
        "meaning": "Payments",
        "value": "12 yearly"
      },
      {
        "symbol": "",
        "meaning": "Interest",
        "value": "4% yearly"
      }
    ],
    "governingFormula": "A=P\\times \\frac{i}{1-\\left(1+i\\right)^{-n}}",
    "substitutionMath": "A=15000\\times \\frac{0.04}{1-\\left(1+0.04\\right)^{-12}}",
    "formulaSymbols": "P = principal or present worth; i = effective rate per payment period; n = number of periods or useful life",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Find the loan-payment factor",
        "explanation": "Use i=0.04 (4.000000% per payment period) and n=12. Multiply the financed principal by this factor to obtain each period-end payment.",
        "calculationMath": "\\frac{0.04}{1-(1+0.04)^{-12}} = 0.10655217",
        "intermediateValue": 0.10655217268605652
      },
      {
        "step": 2,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "15000\\times(0.10655217) = 1598.28259029",
        "intermediateValue": 1598.2825902908478
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
    "given": [
      {
        "symbol": "",
        "meaning": "Cost",
        "value": "$20,000"
      },
      {
        "symbol": "",
        "meaning": "Salvage",
        "value": "$2,000"
      },
      {
        "symbol": "",
        "meaning": "Life",
        "value": "10 years"
      },
      {
        "symbol": "",
        "meaning": "Fund interest",
        "value": "4% yearly"
      }
    ],
    "governingFormula": "A=\\left(C-S\\right)\\times \\frac{i}{\\left(1+i\\right)^{n}-1}",
    "substitutionMath": "A=\\left(20000-2000\\right)\\times \\frac{0.04}{\\left(1+0.04\\right)^{10}-1}",
    "formulaSymbols": "C = first cost; S = salvage value; i = effective rate per payment period; n = number of periods or useful life",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Find the savings-deposit factor",
        "explanation": "Use i=0.04 (4.000000% per payment period) and n=10. Multiply the future target by this factor to obtain each period-end deposit.",
        "calculationMath": "\\frac{0.04}{(1+0.04)^{10}-1} = 0.08329094",
        "intermediateValue": 0.08329094433013644
      },
      {
        "step": 2,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "18000\\times(0.08329094) = 1499.23699794",
        "intermediateValue": 1499.236997942456
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
    "given": [
      {
        "symbol": "",
        "meaning": "Month-end deposit",
        "value": "₱500"
      },
      {
        "symbol": "",
        "meaning": "Nominal rate",
        "value": "12% compounded monthly"
      },
      {
        "symbol": "",
        "meaning": "Requested time",
        "value": "2 years"
      },
      {
        "symbol": "",
        "meaning": "Original planned time",
        "value": "10 years, not the requested target"
      }
    ],
    "governingFormula": "F=A\\times \\frac{\\left(1+i\\right)^{n}-1}{i}",
    "substitutionMath": "F=500\\times \\frac{\\left(1+0.01\\right)^{24}-1}{0.01}",
    "formulaSymbols": "A = equal payment; i = effective rate per payment period; n = number of periods or useful life",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Find the accumulated-savings factor",
        "explanation": "Use i=0.01 (1.000000% per payment period) and n=24. Multiply an equal deposit by this factor to obtain the amount on the final deposit date.",
        "calculationMath": "\\frac{(1+0.01)^{24}-1}{0.01} = 26.97346485",
        "intermediateValue": 26.973464853191476
      },
      {
        "step": 2,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "500\\times(26.97346485) = 13486.7324266",
        "intermediateValue": 13486.732426595738
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
    "given": [
      {
        "symbol": "",
        "meaning": "Par and redemption",
        "value": "$5,000"
      },
      {
        "symbol": "",
        "meaning": "Annual coupon rate",
        "value": "7%"
      },
      {
        "symbol": "",
        "meaning": "Required yield",
        "value": "8%"
      },
      {
        "symbol": "",
        "meaning": "Life",
        "value": "8 years"
      }
    ],
    "governingFormula": "Price=K\\times \\frac{1-\\left(1+i\\right)^{-n}}{i}+\\frac{R}{\\left(1+i\\right)^{n}}",
    "substitutionMath": "Price=350\\times \\frac{1-\\left(1+0.08\\right)^{-8}}{0.08}+\\frac{5000}{\\left(1+0.08\\right)^{8}}",
    "formulaSymbols": "K = coupon per period; R = redemption or recurring replacement cost; i = effective rate per payment period; n = number of periods or useful life",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Find the present-worth factor",
        "explanation": "Use i=0.08 (8.000000% per payment period) and n=8. Multiply an equal payment by this factor to obtain its value one period before the first payment.",
        "calculationMath": "\\frac{1-(1+0.08)^{-8}}{0.08} = 5.74663894",
        "intermediateValue": 5.746638943725303
      },
      {
        "step": 2,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "350\\times(5.74663894) = 2011.3236303",
        "intermediateValue": 2011.3236303038561
      },
      {
        "step": 3,
        "title": "Calculate the growth or remaining-value factor",
        "explanation": "Apply the exponent for the stated number of periods; a negative exponent discounts rather than accumulates.",
        "calculationMath": "\\left(1.08\\right)^{8} = 1.85093021",
        "intermediateValue": 1.8509302102818825
      },
      {
        "step": 4,
        "title": "Divide to find the required ratio",
        "explanation": "Keep the entire denominator grouped; use the full-precision result.",
        "calculationMath": "\\frac{5000}{1.85093021} = 2701.34442251",
        "intermediateValue": 2701.3444225098783
      },
      {
        "step": 5,
        "title": "Add coupon and redemption present worth",
        "explanation": "Both components have been discounted to today, so their sum is the bond price.",
        "calculationMath": "2011.3236303+(2701.34442251) = 4712.66805281",
        "intermediateValue": 4712.668052813735
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
    "given": [
      {
        "symbol": "",
        "meaning": "Motor cost",
        "value": "₱6,000"
      },
      {
        "symbol": "",
        "meaning": "Generator cost",
        "value": "₱4,000"
      },
      {
        "symbol": "",
        "meaning": "Assembly",
        "value": "₱500"
      },
      {
        "symbol": "",
        "meaning": "Salvage",
        "value": "₱400"
      },
      {
        "symbol": "",
        "meaning": "Life",
        "value": "10 years"
      },
      {
        "symbol": "",
        "meaning": "Operation",
        "value": "1,600 hours/year at ₱0.85/hour"
      },
      {
        "symbol": "",
        "meaning": "Maintenance",
        "value": "₱300/year"
      },
      {
        "symbol": "",
        "meaning": "Interest",
        "value": "Not stated"
      }
    ],
    "governingFormula": "AC=\\frac{C-S}{n}+M+H\\times c_{h}",
    "substitutionMath": "AC=\\frac{10500-400}{10}+300+1600\\times 0.85",
    "formulaSymbols": "C = first cost; H = operating hours per year; M = annual maintenance cost; S = salvage value; c_h = operating cost per hour; n = number of periods or useful life",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Subtract the stated amounts",
        "explanation": "Subtract in this order; the order matters for cost, interest, or remaining book value.",
        "calculationMath": "10500-(400) = 10100",
        "intermediateValue": 10100
      },
      {
        "step": 2,
        "title": "Divide to find the required ratio",
        "explanation": "Keep the entire denominator grouped; use the full-precision result.",
        "calculationMath": "\\frac{10100}{10} = 1010",
        "intermediateValue": 1010.0
      },
      {
        "step": 3,
        "title": "Combine the amounts",
        "explanation": "Add the components represented in the substituted expression.",
        "calculationMath": "1010+(300) = 1310",
        "intermediateValue": 1310.0
      },
      {
        "step": 4,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "1600\\times(0.85) = 1360",
        "intermediateValue": 1360.0
      },
      {
        "step": 5,
        "title": "Combine the amounts",
        "explanation": "Add the components represented in the substituted expression.",
        "calculationMath": "1310+(1360) = 2670",
        "intermediateValue": 2670.0
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
    "given": [
      {
        "symbol": "",
        "meaning": "Principal",
        "value": "$5,000"
      },
      {
        "symbol": "",
        "meaning": "Simple annual rate",
        "value": "15%"
      },
      {
        "symbol": "",
        "meaning": "Time",
        "value": "15 months"
      }
    ],
    "governingFormula": "F=P\\times \\left(1+\\frac{r\\times h}{12}\\right)",
    "substitutionMath": "F=5000\\times \\left(1+\\frac{0.15\\times 15}{12}\\right)",
    "formulaSymbols": "P = principal or present worth; h = elapsed intervals; r = annual interest rate",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "0.15\\times(15) = 2.25",
        "intermediateValue": 2.25
      },
      {
        "step": 2,
        "title": "Divide to find the required ratio",
        "explanation": "Keep the entire denominator grouped; use the full-precision result.",
        "calculationMath": "\\frac{2.25}{12} = 0.1875",
        "intermediateValue": 0.1875
      },
      {
        "step": 3,
        "title": "Combine the amounts",
        "explanation": "Add the components represented in the substituted expression.",
        "calculationMath": "1+(0.1875) = 1.1875",
        "intermediateValue": 1.1875
      },
      {
        "step": 4,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "5000\\times(1.1875) = 5937.5",
        "intermediateValue": 5937.5
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
    "given": [
      {
        "symbol": "",
        "meaning": "Principal",
        "value": "₱10,000"
      },
      {
        "symbol": "",
        "meaning": "Simple annual rate",
        "value": "8%"
      },
      {
        "symbol": "",
        "meaning": "Time",
        "value": "90 days"
      },
      {
        "symbol": "",
        "meaning": "Day basis",
        "value": "360-day assumption"
      }
    ],
    "governingFormula": "F=P\\times \\left(1+\\frac{r\\times d}{Y}\\right)",
    "substitutionMath": "F=10000\\times \\left(1+\\frac{0.08\\times 90}{360}\\right)",
    "formulaSymbols": "P = principal or present worth; Y = days per year; d = number of days; r = annual interest rate",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "0.08\\times(90) = 7.2",
        "intermediateValue": 7.2
      },
      {
        "step": 2,
        "title": "Divide to find the required ratio",
        "explanation": "Keep the entire denominator grouped; use the full-precision result.",
        "calculationMath": "\\frac{7.2}{360} = 0.02",
        "intermediateValue": 0.02
      },
      {
        "step": 3,
        "title": "Combine the amounts",
        "explanation": "Add the components represented in the substituted expression.",
        "calculationMath": "1+(0.02) = 1.02",
        "intermediateValue": 1.02
      },
      {
        "step": 4,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "10000\\times(1.02) = 10200",
        "intermediateValue": 10200.0
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
    "given": [
      {
        "symbol": "",
        "meaning": "Interest earned",
        "value": "$450"
      },
      {
        "symbol": "",
        "meaning": "Simple annual rate",
        "value": "6%"
      },
      {
        "symbol": "",
        "meaning": "Time",
        "value": "2 years 6 months"
      }
    ],
    "governingFormula": "P=\\frac{I}{r\\times t}",
    "substitutionMath": "P=\\frac{450}{0.06\\times 2.5}",
    "formulaSymbols": "I = interest; r = annual interest rate; t = time in years",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "0.06\\times(2.5) = 0.15",
        "intermediateValue": 0.15
      },
      {
        "step": 2,
        "title": "Divide to find the required ratio",
        "explanation": "Keep the entire denominator grouped; use the full-precision result.",
        "calculationMath": "\\frac{450}{0.15} = 3000",
        "intermediateValue": 3000.0
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
    "given": [
      {
        "symbol": "",
        "meaning": "Maturity price",
        "value": "₱25,000"
      },
      {
        "symbol": "",
        "meaning": "Simple annual rate",
        "value": "14%"
      },
      {
        "symbol": "",
        "meaning": "Time",
        "value": "60 days"
      },
      {
        "symbol": "",
        "meaning": "Day basis",
        "value": "360-day assumption"
      }
    ],
    "governingFormula": "P=\\frac{F}{1+\\frac{r\\times d}{Y}}",
    "substitutionMath": "P=\\frac{25000}{1+\\frac{0.14\\times 60}{360}}",
    "formulaSymbols": "F = future amount; Y = days per year; d = number of days; r = annual interest rate",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "0.14\\times(60) = 8.4",
        "intermediateValue": 8.4
      },
      {
        "step": 2,
        "title": "Divide to find the required ratio",
        "explanation": "Keep the entire denominator grouped; use the full-precision result.",
        "calculationMath": "\\frac{8.4}{360} = 0.02333333",
        "intermediateValue": 0.023333333333333334
      },
      {
        "step": 3,
        "title": "Combine the amounts",
        "explanation": "Add the components represented in the substituted expression.",
        "calculationMath": "1+(0.02333333) = 1.02333333",
        "intermediateValue": 1.0233333333333334
      },
      {
        "step": 4,
        "title": "Divide to find the required ratio",
        "explanation": "Keep the entire denominator grouped; use the full-precision result.",
        "calculationMath": "\\frac{25000}{1.02333333} = 24429.96742671",
        "intermediateValue": 24429.967426710096
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
    "given": [
      {
        "symbol": "",
        "meaning": "Principal",
        "value": "₱110,000"
      },
      {
        "symbol": "",
        "meaning": "Net interest",
        "value": "₱890.39"
      },
      {
        "symbol": "",
        "meaning": "Withholding",
        "value": "20% of interest"
      },
      {
        "symbol": "",
        "meaning": "Time",
        "value": "31 days"
      },
      {
        "symbol": "",
        "meaning": "Day basis",
        "value": "Not specified, both 360 and 365 discussed"
      }
    ],
    "governingFormula": "r_{percent}=\\frac{\\frac{I_{net}}{\\left(1-tax\\right)\\times P}\\times Y}{d}\\times 100",
    "substitutionMath": "r_{percent}=\\frac{\\frac{890.39}{\\left(1-0.2\\right)\\times 110000}\\times 360}{31}\\times 100",
    "formulaSymbols": "I_net = after-tax interest; P = principal or present worth; Y = days per year; d = number of days; tax = withholding-tax fraction",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "0.8\\times(110000) = 88000",
        "intermediateValue": 88000.0
      },
      {
        "step": 2,
        "title": "Divide to find the required ratio",
        "explanation": "Keep the entire denominator grouped; use the full-precision result.",
        "calculationMath": "\\frac{890.39}{88000} = 0.01011807",
        "intermediateValue": 0.010118068181818181
      },
      {
        "step": 3,
        "title": "Divide to find the required ratio",
        "explanation": "Keep the entire denominator grouped; use the full-precision result.",
        "calculationMath": "\\frac{360}{31} = 11.61290323",
        "intermediateValue": 11.612903225806452
      },
      {
        "step": 4,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "0.01011807\\times(11.61290323) = 0.11750015",
        "intermediateValue": 0.11750014662756599
      },
      {
        "step": 5,
        "title": "Convert the decimal rate to percent",
        "explanation": "Multiplying a decimal rate by 100 expresses the same rate as a percentage.",
        "calculationMath": "0.11750015\\times(100) = 11.75001466",
        "intermediateValue": 11.750014662756598
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
    "given": [
      {
        "symbol": "",
        "meaning": "Maturity price",
        "value": "$1,500"
      },
      {
        "symbol": "",
        "meaning": "Simple annual rate",
        "value": "10%"
      },
      {
        "symbol": "",
        "meaning": "Time",
        "value": "90 days"
      },
      {
        "symbol": "",
        "meaning": "Day basis",
        "value": "360-day assumption"
      }
    ],
    "governingFormula": "P=\\frac{F}{1+\\frac{r\\times d}{Y}}",
    "substitutionMath": "P=\\frac{1500}{1+\\frac{0.1\\times 90}{360}}",
    "formulaSymbols": "F = future amount; Y = days per year; d = number of days; r = annual interest rate",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "0.1\\times(90) = 9",
        "intermediateValue": 9.0
      },
      {
        "step": 2,
        "title": "Divide to find the required ratio",
        "explanation": "Keep the entire denominator grouped; use the full-precision result.",
        "calculationMath": "\\frac{9}{360} = 0.025",
        "intermediateValue": 0.025
      },
      {
        "step": 3,
        "title": "Combine the amounts",
        "explanation": "Add the components represented in the substituted expression.",
        "calculationMath": "1+(0.025) = 1.025",
        "intermediateValue": 1.025
      },
      {
        "step": 4,
        "title": "Divide to find the required ratio",
        "explanation": "Keep the entire denominator grouped; use the full-precision result.",
        "calculationMath": "\\frac{1500}{1.025} = 1463.41463415",
        "intermediateValue": 1463.4146341463415
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
    "given": [
      {
        "symbol": "",
        "meaning": "Normal payment date",
        "value": "Day 100"
      },
      {
        "symbol": "",
        "meaning": "Discount date",
        "value": "Day 31"
      },
      {
        "symbol": "",
        "meaning": "Early discount",
        "value": "3%"
      },
      {
        "symbol": "",
        "meaning": "Day basis",
        "value": "360-day assumption"
      }
    ],
    "governingFormula": "r_{percent}=\\frac{\\frac{d}{1-d}\\times Y}{h}\\times 100",
    "substitutionMath": "r_{percent}=\\frac{\\frac{0.03}{1-0.03}\\times 360}{69}\\times 100",
    "formulaSymbols": "Y = days per year; d = discount fraction; h = elapsed intervals",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Divide to find the required ratio",
        "explanation": "Keep the entire denominator grouped; use the full-precision result.",
        "calculationMath": "\\frac{0.03}{0.97} = 0.03092784",
        "intermediateValue": 0.030927835051546393
      },
      {
        "step": 2,
        "title": "Divide to find the required ratio",
        "explanation": "Keep the entire denominator grouped; use the full-precision result.",
        "calculationMath": "\\frac{360}{69} = 5.2173913",
        "intermediateValue": 5.217391304347826
      },
      {
        "step": 3,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "0.03092784\\times(5.2173913) = 0.16136262",
        "intermediateValue": 0.16136261766024204
      },
      {
        "step": 4,
        "title": "Convert the decimal rate to percent",
        "explanation": "Multiplying a decimal rate by 100 expresses the same rate as a percentage.",
        "calculationMath": "0.16136262\\times(100) = 16.13626177",
        "intermediateValue": 16.136261766024205
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
    "given": [
      {
        "symbol": "",
        "meaning": "Principal",
        "value": "$10,500"
      },
      {
        "symbol": "",
        "meaning": "Exact simple rate",
        "value": "5%"
      },
      {
        "symbol": "",
        "meaning": "Time",
        "value": "75 days"
      },
      {
        "symbol": "",
        "meaning": "Year basis",
        "value": "365 days, no leap year stated"
      }
    ],
    "governingFormula": "F=P\\times \\left(1+\\frac{r\\times d}{Y}\\right)",
    "substitutionMath": "F=10500\\times \\left(1+\\frac{0.05\\times 75}{365}\\right)",
    "formulaSymbols": "P = principal or present worth; Y = days per year; d = number of days; r = annual interest rate",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "0.05\\times(75) = 3.75",
        "intermediateValue": 3.75
      },
      {
        "step": 2,
        "title": "Divide to find the required ratio",
        "explanation": "Keep the entire denominator grouped; use the full-precision result.",
        "calculationMath": "\\frac{3.75}{365} = 0.01027397",
        "intermediateValue": 0.010273972602739725
      },
      {
        "step": 3,
        "title": "Combine the amounts",
        "explanation": "Add the components represented in the substituted expression.",
        "calculationMath": "1+(0.01027397) = 1.01027397",
        "intermediateValue": 1.0102739726027397
      },
      {
        "step": 4,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "10500\\times(1.01027397) = 10607.87671233",
        "intermediateValue": 10607.876712328767
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
    "given": [
      {
        "symbol": "",
        "meaning": "Principal",
        "value": "$5,000"
      },
      {
        "symbol": "",
        "meaning": "Simple annual rate",
        "value": "22%"
      },
      {
        "symbol": "",
        "meaning": "Dates",
        "value": "Jan 15–Nov 28, 1992"
      },
      {
        "symbol": "",
        "meaning": "Elapsed days",
        "value": "318"
      },
      {
        "symbol": "",
        "meaning": "Year basis",
        "value": "366 days"
      }
    ],
    "governingFormula": "I=\\frac{P\\times r\\times d}{Y}",
    "substitutionMath": "I=\\frac{5000\\times 0.22\\times 318}{366}",
    "formulaSymbols": "P = principal or present worth; Y = days per year; d = number of days; r = annual interest rate",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "5000\\times(0.22) = 1100",
        "intermediateValue": 1100.0
      },
      {
        "step": 2,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "1100\\times(318) = 349800",
        "intermediateValue": 349800.0
      },
      {
        "step": 3,
        "title": "Divide to find the required ratio",
        "explanation": "Keep the entire denominator grouped; use the full-precision result.",
        "calculationMath": "\\frac{349800}{366} = 955.73770492",
        "intermediateValue": 955.7377049180328
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
    "given": [
      {
        "symbol": "",
        "meaning": "Interest paid",
        "value": "$9,600"
      },
      {
        "symbol": "",
        "meaning": "Simple annual rate",
        "value": "16%"
      },
      {
        "symbol": "",
        "meaning": "Time",
        "value": "5 years"
      }
    ],
    "governingFormula": "P=\\frac{I}{r\\times t}",
    "substitutionMath": "P=\\frac{9600}{0.16\\times 5}",
    "formulaSymbols": "I = interest; r = annual interest rate; t = time in years",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "0.16\\times(5) = 0.8",
        "intermediateValue": 0.8
      },
      {
        "step": 2,
        "title": "Divide to find the required ratio",
        "explanation": "Keep the entire denominator grouped; use the full-precision result.",
        "calculationMath": "\\frac{9600}{0.8} = 12000",
        "intermediateValue": 12000.0
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
    "given": [
      {
        "symbol": "",
        "meaning": "Principal",
        "value": "₱6,800"
      },
      {
        "symbol": "",
        "meaning": "Simple annual rate",
        "value": "11%"
      },
      {
        "symbol": "",
        "meaning": "Time",
        "value": "3 years"
      },
      {
        "symbol": "",
        "meaning": "Find",
        "value": "Interest only"
      }
    ],
    "governingFormula": "I=P\\times r\\times t",
    "substitutionMath": "I=6800\\times 0.11\\times 3",
    "formulaSymbols": "P = principal or present worth; r = annual interest rate; t = time in years",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "6800\\times(0.11) = 748",
        "intermediateValue": 748.0
      },
      {
        "step": 2,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "748\\times(3) = 2244",
        "intermediateValue": 2244.0
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
    "given": [
      {
        "symbol": "",
        "meaning": "Principal",
        "value": "₱5,000"
      },
      {
        "symbol": "",
        "meaning": "Nominal rate",
        "value": "8% compounded quarterly"
      },
      {
        "symbol": "",
        "meaning": "Time",
        "value": "10 years"
      },
      {
        "symbol": "",
        "meaning": "Find",
        "value": "Interest only"
      }
    ],
    "governingFormula": "I=P\\times \\left(\\left(1+\\frac{r}{m}\\right)^{n}-1\\right)",
    "substitutionMath": "I=5000\\times \\left(\\left(1+\\frac{0.08}{4}\\right)^{40}-1\\right)",
    "formulaSymbols": "P = principal or present worth; m = compounding periods per year; n = number of periods or useful life; r = annual interest rate",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Divide to find the required ratio",
        "explanation": "Keep the entire denominator grouped; use the full-precision result.",
        "calculationMath": "\\frac{0.08}{4} = 0.02",
        "intermediateValue": 0.02
      },
      {
        "step": 2,
        "title": "Combine the amounts",
        "explanation": "Add the components represented in the substituted expression.",
        "calculationMath": "1+(0.02) = 1.02",
        "intermediateValue": 1.02
      },
      {
        "step": 3,
        "title": "Calculate the growth or remaining-value factor",
        "explanation": "Apply the exponent for the stated number of periods; a negative exponent discounts rather than accumulates.",
        "calculationMath": "\\left(1.02\\right)^{40} = 2.20803966",
        "intermediateValue": 2.2080396636148536
      },
      {
        "step": 4,
        "title": "Subtract the stated amounts",
        "explanation": "Subtract in this order; the order matters for cost, interest, or remaining book value.",
        "calculationMath": "2.20803966-(1) = 1.20803966",
        "intermediateValue": 1.2080396636148536
      },
      {
        "step": 5,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "5000\\times(1.20803966) = 6040.19831807",
        "intermediateValue": 6040.198318074268
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
    "given": [
      {
        "symbol": "",
        "meaning": "Half-year-end deposit",
        "value": "$300"
      },
      {
        "symbol": "",
        "meaning": "Nominal rate",
        "value": "2% compounded semiannually"
      },
      {
        "symbol": "",
        "meaning": "Time",
        "value": "10 years"
      }
    ],
    "governingFormula": "F=A\\times \\frac{\\left(1+i\\right)^{n}-1}{i}",
    "substitutionMath": "F=300\\times \\frac{\\left(1+0.01\\right)^{20}-1}{0.01}",
    "formulaSymbols": "A = equal payment; i = effective rate per payment period; n = number of periods or useful life",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Find the accumulated-savings factor",
        "explanation": "Use i=0.01 (1.000000% per payment period) and n=20. Multiply an equal deposit by this factor to obtain the amount on the final deposit date.",
        "calculationMath": "\\frac{(1+0.01)^{20}-1}{0.01} = 22.01900399",
        "intermediateValue": 22.019003994796705
      },
      {
        "step": 2,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "300\\times(22.01900399) = 6605.70119844",
        "intermediateValue": 6605.701198439012
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
    "shortcutSolution": "Split into two finite annuities and a deferred perpetuity. No printed choice matches the calculated result at its stated precision. The correct computed result is shown above; do not force a letter.",
    "given": [
      {
        "symbol": "",
        "meaning": "Scholarships",
        "value": "$30,000/year in years 1–6, $40,000/year in years 7–10, $50,000/year thereafter"
      },
      {
        "symbol": "",
        "meaning": "Interest",
        "value": "15% yearly"
      }
    ],
    "governingFormula": "P=A_{1}\\times \\frac{1-\\left(1+i\\right)^{-n_{1}}}{i}+\\frac{A_{2}\\times \\frac{1-\\left(1+i\\right)^{-n_{2}}}{i}}{\\left(1+i\\right)^{n_{1}}}+\\frac{\\frac{A_{3}}{i}}{\\left(1+i\\right)^{n_{1}+n_{2}}}",
    "substitutionMath": "P=30000\\times \\frac{1-\\left(1+0.15\\right)^{-6}}{0.15}+\\frac{40000\\times \\frac{1-\\left(1+0.15\\right)^{-4}}{0.15}}{\\left(1+0.15\\right)^{6}}+\\frac{\\frac{50000}{0.15}}{\\left(1+0.15\\right)^{6+4}}",
    "formulaSymbols": "A_1 = equal payment; A_2 = equal payment; A_3 = equal payment; i = effective rate per payment period; n_1 = number of periods or useful life; n_2 = number of periods or useful life",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Find the present-worth factor",
        "explanation": "Use i=0.15 (15.000000% per payment period) and n=6. Multiply an equal payment by this factor to obtain its value one period before the first payment.",
        "calculationMath": "\\frac{1-(1+0.15)^{-6}}{0.15} = 3.78448269",
        "intermediateValue": 3.784482693922957
      },
      {
        "step": 2,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "30000\\times(3.78448269) = 113534.48081769",
        "intermediateValue": 113534.48081768872
      },
      {
        "step": 3,
        "title": "Find the present-worth factor",
        "explanation": "Use i=0.15 (15.000000% per payment period) and n=4. Multiply an equal payment by this factor to obtain its value one period before the first payment.",
        "calculationMath": "\\frac{1-(1+0.15)^{-4}}{0.15} = 2.85497836",
        "intermediateValue": 2.8549783627131116
      },
      {
        "step": 4,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "40000\\times(2.85497836) = 114199.13450852",
        "intermediateValue": 114199.13450852447
      },
      {
        "step": 5,
        "title": "Calculate the growth or remaining-value factor",
        "explanation": "Apply the exponent for the stated number of periods; a negative exponent discounts rather than accumulates.",
        "calculationMath": "\\left(1.15\\right)^{6} = 2.31306077",
        "intermediateValue": 2.313060765624999
      },
      {
        "step": 6,
        "title": "Divide to find the required ratio",
        "explanation": "Keep the entire denominator grouped; use the full-precision result.",
        "calculationMath": "\\frac{114199.13450852}{2.31306077} = 49371.43727725",
        "intermediateValue": 49371.43727725085
      },
      {
        "step": 7,
        "title": "Combine the amounts",
        "explanation": "Add the components represented in the substituted expression.",
        "calculationMath": "113534.48081769+(49371.43727725) = 162905.91809494",
        "intermediateValue": 162905.91809493955
      },
      {
        "step": 8,
        "title": "Divide to find the required ratio",
        "explanation": "Keep the entire denominator grouped; use the full-precision result.",
        "calculationMath": "\\frac{50000}{0.15} = 333333.33333333",
        "intermediateValue": 333333.3333333334
      },
      {
        "step": 9,
        "title": "Calculate the growth or remaining-value factor",
        "explanation": "Apply the exponent for the stated number of periods; a negative exponent discounts rather than accumulates.",
        "calculationMath": "\\left(1.15\\right)^{10} = 4.04555774",
        "intermediateValue": 4.045557735707907
      },
      {
        "step": 10,
        "title": "Divide to find the required ratio",
        "explanation": "Keep the entire denominator grouped; use the full-precision result.",
        "calculationMath": "\\frac{333333.33333333}{4.04555774} = 82394.90204062",
        "intermediateValue": 82394.90204062196
      },
      {
        "step": 11,
        "title": "Combine the amounts",
        "explanation": "Add the components represented in the substituted expression.",
        "calculationMath": "162905.91809494+(82394.90204062) = 245300.82013556",
        "intermediateValue": 245300.82013556152
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
    "mentalModelOrTrap": "Split into two finite annuities and a deferred perpetuity. No printed choice matches the calculated result at its stated precision. The correct computed result is shown above; do not force a letter."
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
    "given": [
      {
        "symbol": "",
        "meaning": "Principal",
        "value": "₱50,000"
      },
      {
        "symbol": "",
        "meaning": "Annual compounded rate",
        "value": "7.5%"
      },
      {
        "symbol": "",
        "meaning": "Time",
        "value": "5 years"
      }
    ],
    "governingFormula": "F=P\\times \\left(1+i\\right)^{n}",
    "substitutionMath": "F=50000\\times \\left(1+0.075\\right)^{5}",
    "formulaSymbols": "P = principal or present worth; i = effective rate per payment period; n = number of periods or useful life",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Calculate the growth or remaining-value factor",
        "explanation": "Apply the exponent for the stated number of periods; a negative exponent discounts rather than accumulates.",
        "calculationMath": "\\left(1.075\\right)^{5} = 1.43562933",
        "intermediateValue": 1.4356293261718747
      },
      {
        "step": 2,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "50000\\times(1.43562933) = 71781.46630859",
        "intermediateValue": 71781.46630859374
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
    "given": [
      {
        "symbol": "",
        "meaning": "Cost",
        "value": "₱100,000"
      },
      {
        "symbol": "",
        "meaning": "Life",
        "value": "25 years"
      },
      {
        "symbol": "",
        "meaning": "Salvage floor",
        "value": "₱5,000"
      },
      {
        "symbol": "",
        "meaning": "Requested book value",
        "value": "After 3 years"
      },
      {
        "symbol": "",
        "meaning": "Method",
        "value": "Double declining balance"
      }
    ],
    "governingFormula": "BV_{m}=C\\times \\left(1-\\frac{2}{n}\\right)^{m}",
    "substitutionMath": "BV_{m}=100000\\times \\left(1-\\frac{2}{25}\\right)^{3}",
    "formulaSymbols": "C = first cost; m = requested depreciation year; n = number of periods or useful life",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Divide to find the required ratio",
        "explanation": "Keep the entire denominator grouped; use the full-precision result.",
        "calculationMath": "\\frac{2}{25} = 0.08",
        "intermediateValue": 0.08
      },
      {
        "step": 2,
        "title": "Subtract the stated amounts",
        "explanation": "Subtract in this order; the order matters for cost, interest, or remaining book value.",
        "calculationMath": "1-(0.08) = 0.92",
        "intermediateValue": 0.92
      },
      {
        "step": 3,
        "title": "Calculate the growth or remaining-value factor",
        "explanation": "Apply the exponent for the stated number of periods; a negative exponent discounts rather than accumulates.",
        "calculationMath": "\\left(0.92\\right)^{3} = 0.778688",
        "intermediateValue": 0.778688
      },
      {
        "step": 4,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "100000\\times(0.778688) = 77868.8",
        "intermediateValue": 77868.8
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
    "given": [
      {
        "symbol": "",
        "meaning": "Principal",
        "value": "$500,000"
      },
      {
        "symbol": "",
        "meaning": "Nominal rate",
        "value": "11.25% compounded monthly"
      },
      {
        "symbol": "",
        "meaning": "Time",
        "value": "7 years 9 months"
      },
      {
        "symbol": "",
        "meaning": "Find",
        "value": "Interest only"
      }
    ],
    "governingFormula": "I=P\\times \\left(\\left(1+\\frac{r}{m}\\right)^{n}-1\\right)",
    "substitutionMath": "I=500000\\times \\left(\\left(1+\\frac{0.1125}{12}\\right)^{93}-1\\right)",
    "formulaSymbols": "P = principal or present worth; m = compounding periods per year; n = number of periods or useful life; r = annual interest rate",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Divide to find the required ratio",
        "explanation": "Keep the entire denominator grouped; use the full-precision result.",
        "calculationMath": "\\frac{0.1125}{12} = 0.009375",
        "intermediateValue": 0.009375
      },
      {
        "step": 2,
        "title": "Combine the amounts",
        "explanation": "Add the components represented in the substituted expression.",
        "calculationMath": "1+(0.009375) = 1.009375",
        "intermediateValue": 1.009375
      },
      {
        "step": 3,
        "title": "Calculate the growth or remaining-value factor",
        "explanation": "Apply the exponent for the stated number of periods; a negative exponent discounts rather than accumulates.",
        "calculationMath": "\\left(1.009375\\right)^{93} = 2.38169746",
        "intermediateValue": 2.381697457463232
      },
      {
        "step": 4,
        "title": "Subtract the stated amounts",
        "explanation": "Subtract in this order; the order matters for cost, interest, or remaining book value.",
        "calculationMath": "2.38169746-(1) = 1.38169746",
        "intermediateValue": 1.3816974574632321
      },
      {
        "step": 5,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "500000\\times(1.38169746) = 690848.72873162",
        "intermediateValue": 690848.728731616
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
    "given": [
      {
        "symbol": "",
        "meaning": "Cash price",
        "value": "$1,000,000"
      },
      {
        "symbol": "",
        "meaning": "Down payment",
        "value": "$200,000"
      },
      {
        "symbol": "",
        "meaning": "Later payments",
        "value": "$300,000 at year 1 and $400,000 at year 3"
      },
      {
        "symbol": "",
        "meaning": "Final date",
        "value": "Year 5"
      },
      {
        "symbol": "",
        "meaning": "Interest",
        "value": "20% yearly"
      }
    ],
    "governingFormula": "F=P\\times \\left(1+i\\right)^{N}-C_{1}\\times \\left(1+i\\right)^{N-t_{1}}-C_{2}\\times \\left(1+i\\right)^{N-t_{2}}",
    "substitutionMath": "F=800000\\times \\left(1+0.2\\right)^{5}-300000\\times \\left(1+0.2\\right)^{5-1}-400000\\times \\left(1+0.2\\right)^{5-3}",
    "formulaSymbols": "C_1 = first cost; C_2 = first cost; N = n; P = principal or present worth; i = effective rate per payment period; t_1 = time in years; t_2 = time in years",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Calculate the growth or remaining-value factor",
        "explanation": "Apply the exponent for the stated number of periods; a negative exponent discounts rather than accumulates.",
        "calculationMath": "\\left(1.2\\right)^{5} = 2.48832",
        "intermediateValue": 2.4883199999999994
      },
      {
        "step": 2,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "800000\\times(2.48832) = 1990656",
        "intermediateValue": 1990655.9999999995
      },
      {
        "step": 3,
        "title": "Calculate the growth or remaining-value factor",
        "explanation": "Apply the exponent for the stated number of periods; a negative exponent discounts rather than accumulates.",
        "calculationMath": "\\left(1.2\\right)^{4} = 2.0736",
        "intermediateValue": 2.0736
      },
      {
        "step": 4,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "300000\\times(2.0736) = 622080",
        "intermediateValue": 622080.0
      },
      {
        "step": 5,
        "title": "Subtract the stated amounts",
        "explanation": "Subtract in this order; the order matters for cost, interest, or remaining book value.",
        "calculationMath": "1990656-(622080) = 1368576",
        "intermediateValue": 1368575.9999999995
      },
      {
        "step": 6,
        "title": "Calculate the growth or remaining-value factor",
        "explanation": "Apply the exponent for the stated number of periods; a negative exponent discounts rather than accumulates.",
        "calculationMath": "\\left(1.2\\right)^{2} = 1.44",
        "intermediateValue": 1.44
      },
      {
        "step": 7,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "400000\\times(1.44) = 576000",
        "intermediateValue": 576000.0
      },
      {
        "step": 8,
        "title": "Subtract the stated amounts",
        "explanation": "Subtract in this order; the order matters for cost, interest, or remaining book value.",
        "calculationMath": "1368576-(576000) = 792576",
        "intermediateValue": 792575.9999999995
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
    "given": [
      {
        "symbol": "",
        "meaning": "Principal",
        "value": "₱10,000"
      },
      {
        "symbol": "",
        "meaning": "Compounded rate",
        "value": "12% yearly"
      },
      {
        "symbol": "",
        "meaning": "Time",
        "value": "5 years"
      },
      {
        "symbol": "",
        "meaning": "Wording issue",
        "value": "“Present day pesos” has no specified purchasing-power convention"
      }
    ],
    "governingFormula": "I=P\\times \\left(\\left(1+i\\right)^{n}-1\\right)",
    "substitutionMath": "I=10000\\times \\left(\\left(1+0.12\\right)^{5}-1\\right)",
    "formulaSymbols": "P = principal or present worth; i = effective rate per payment period; n = number of periods or useful life",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Calculate the growth or remaining-value factor",
        "explanation": "Apply the exponent for the stated number of periods; a negative exponent discounts rather than accumulates.",
        "calculationMath": "\\left(1.12\\right)^{5} = 1.76234168",
        "intermediateValue": 1.7623416832000007
      },
      {
        "step": 2,
        "title": "Subtract the stated amounts",
        "explanation": "Subtract in this order; the order matters for cost, interest, or remaining book value.",
        "calculationMath": "1.76234168-(1) = 0.76234168",
        "intermediateValue": 0.7623416832000007
      },
      {
        "step": 3,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "10000\\times(0.76234168) = 7623.416832",
        "intermediateValue": 7623.416832000007
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
    "given": [
      {
        "symbol": "",
        "meaning": "Target",
        "value": "$20,000 at year 10"
      },
      {
        "symbol": "",
        "meaning": "First 5 years",
        "value": "8% compounded annually"
      },
      {
        "symbol": "",
        "meaning": "Next 5 years",
        "value": "12% nominal compounded quarterly"
      }
    ],
    "governingFormula": "P=\\frac{F}{\\left(1+i_{1}\\right)^{n_{1}}\\times \\left(1+i_{2}\\right)^{n_{2}}}",
    "substitutionMath": "P=\\frac{20000}{\\left(1+0.08\\right)^{5}\\times \\left(1+0.03\\right)^{20}}",
    "formulaSymbols": "F = future amount; i_1 = effective rate per payment period; i_2 = effective rate per payment period; n_1 = number of periods or useful life; n_2 = number of periods or useful life",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Calculate the growth or remaining-value factor",
        "explanation": "Apply the exponent for the stated number of periods; a negative exponent discounts rather than accumulates.",
        "calculationMath": "\\left(1.08\\right)^{5} = 1.46932808",
        "intermediateValue": 1.4693280768000005
      },
      {
        "step": 2,
        "title": "Calculate the growth or remaining-value factor",
        "explanation": "Apply the exponent for the stated number of periods; a negative exponent discounts rather than accumulates.",
        "calculationMath": "\\left(1.03\\right)^{20} = 1.80611123",
        "intermediateValue": 1.8061112346694148
      },
      {
        "step": 3,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "1.46932808\\times(1.80611123) = 2.65376995",
        "intermediateValue": 2.6537699469236857
      },
      {
        "step": 4,
        "title": "Divide to find the required ratio",
        "explanation": "Keep the entire denominator grouped; use the full-precision result.",
        "calculationMath": "\\frac{20000}{2.65376995} = 7536.44829808",
        "intermediateValue": 7536.448298084197
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
    "given": [
      {
        "symbol": "",
        "meaning": "Year-end receipt",
        "value": "$1,000"
      },
      {
        "symbol": "",
        "meaning": "Receipts",
        "value": "5"
      },
      {
        "symbol": "",
        "meaning": "Interest",
        "value": "4% yearly"
      }
    ],
    "governingFormula": "P=A\\times \\frac{1-\\left(1+i\\right)^{-n}}{i}",
    "substitutionMath": "P=1000\\times \\frac{1-\\left(1+0.04\\right)^{-5}}{0.04}",
    "formulaSymbols": "A = equal payment; i = effective rate per payment period; n = number of periods or useful life",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Find the present-worth factor",
        "explanation": "Use i=0.04 (4.000000% per payment period) and n=5. Multiply an equal payment by this factor to obtain its value one period before the first payment.",
        "calculationMath": "\\frac{1-(1+0.04)^{-5}}{0.04} = 4.45182233",
        "intermediateValue": 4.451822331016208
      },
      {
        "step": 2,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "1000\\times(4.45182233) = 4451.82233102",
        "intermediateValue": 4451.822331016208
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
    "given": [
      {
        "symbol": "",
        "meaning": "Principal",
        "value": "$2,825"
      },
      {
        "symbol": "",
        "meaning": "Nominal rate",
        "value": "5% compounded quarterly"
      },
      {
        "symbol": "",
        "meaning": "Time",
        "value": "8 years"
      }
    ],
    "governingFormula": "F=P\\times \\left(1+i\\right)^{n}",
    "substitutionMath": "F=2825\\times \\left(1+0.0125\\right)^{32}",
    "formulaSymbols": "P = principal or present worth; i = effective rate per payment period; n = number of periods or useful life",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Calculate the growth or remaining-value factor",
        "explanation": "Apply the exponent for the stated number of periods; a negative exponent discounts rather than accumulates.",
        "calculationMath": "\\left(1.0125\\right)^{32} = 1.48813051",
        "intermediateValue": 1.4881305085948253
      },
      {
        "step": 2,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "2825\\times(1.48813051) = 4203.96868678",
        "intermediateValue": 4203.968686780381
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
    "given": [
      {
        "symbol": "",
        "meaning": "Initial investment",
        "value": "$350,000"
      },
      {
        "symbol": "",
        "meaning": "Year-end receipt",
        "value": "$200,000"
      },
      {
        "symbol": "",
        "meaning": "Receipts",
        "value": "3"
      }
    ],
    "governingFormula": "0=A\\times \\frac{1-\\left(1+x\\right)^{-n}}{x}-P",
    "substitutionMath": "0=200000\\times \\frac{1-\\left(1+x\\right)^{-3}}{x}-350000",
    "formulaSymbols": "A = equal payment; P = principal or present worth; n = number of periods or useful life; x = unknown decimal yield",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Set present worth equal to the price",
        "explanation": "X is the unknown decimal rate. In Canon COMP, enter this residual and use SOLVE with a nonzero initial estimate.",
        "calculationMath": "200000\\frac{1-(1+X)^{-3}}{X}-350000=0",
        "intermediateValue": null
      },
      {
        "step": 2,
        "title": "Solve the decimal rate",
        "explanation": "A numerical solver gives this X; convert it to percent only after solving.",
        "calculationMath": "X = 0.32675161",
        "intermediateValue": 0.3267516063569298
      },
      {
        "step": 3,
        "title": "Check the solved rate",
        "explanation": "Substitute the solved rate back into the residual. It should be close to zero.",
        "calculationMath": "\\mathrm{residual} = 0",
        "intermediateValue": 0.0
      },
      {
        "step": 4,
        "title": "Convert the decimal rate to percent",
        "explanation": "Multiplying a decimal rate by 100 expresses the same rate as a percentage.",
        "calculationMath": "0.32675161\\times(100) = 32.67516064",
        "intermediateValue": 32.675160635692976
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
    "given": [
      {
        "symbol": "",
        "meaning": "Principal",
        "value": "$1,000"
      },
      {
        "symbol": "",
        "meaning": "Compounded rate",
        "value": "6% yearly"
      },
      {
        "symbol": "",
        "meaning": "Time",
        "value": "12 years"
      }
    ],
    "governingFormula": "F=P\\times \\left(1+i\\right)^{n}",
    "substitutionMath": "F=1000\\times \\left(1+0.06\\right)^{12}",
    "formulaSymbols": "P = principal or present worth; i = effective rate per payment period; n = number of periods or useful life",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Calculate the growth or remaining-value factor",
        "explanation": "Apply the exponent for the stated number of periods; a negative exponent discounts rather than accumulates.",
        "calculationMath": "\\left(1.06\\right)^{12} = 2.01219647",
        "intermediateValue": 2.0121964718355514
      },
      {
        "step": 2,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "1000\\times(2.01219647) = 2012.19647184",
        "intermediateValue": 2012.1964718355514
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
    "given": [
      {
        "symbol": "",
        "meaning": "Principal",
        "value": "₱3,000"
      },
      {
        "symbol": "",
        "meaning": "Interest after 2 years",
        "value": "₱500"
      },
      {
        "symbol": "",
        "meaning": "Requested interval",
        "value": "4 years"
      },
      {
        "symbol": "",
        "meaning": "Rate",
        "value": "Same compound rate throughout"
      }
    ],
    "governingFormula": "I_{4}=P\\times \\left(\\left(\\frac{F_{2}}{P}\\right)^{2}-1\\right)",
    "substitutionMath": "I_{4}=3000\\times \\left(\\left(\\frac{3500}{3000}\\right)^{2}-1\\right)",
    "formulaSymbols": "F_2 = amount after two years; P = principal or present worth",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Divide to find the required ratio",
        "explanation": "Keep the entire denominator grouped; use the full-precision result.",
        "calculationMath": "\\frac{3500}{3000} = 1.16666667",
        "intermediateValue": 1.1666666666666667
      },
      {
        "step": 2,
        "title": "Calculate the growth or remaining-value factor",
        "explanation": "Apply the exponent for the stated number of periods; a negative exponent discounts rather than accumulates.",
        "calculationMath": "\\left(1.16666667\\right)^{2} = 1.36111111",
        "intermediateValue": 1.3611111111111114
      },
      {
        "step": 3,
        "title": "Subtract the stated amounts",
        "explanation": "Subtract in this order; the order matters for cost, interest, or remaining book value.",
        "calculationMath": "1.36111111-(1) = 0.36111111",
        "intermediateValue": 0.3611111111111114
      },
      {
        "step": 4,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "3000\\times(0.36111111) = 1083.33333333",
        "intermediateValue": 1083.3333333333342
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
    "given": [
      {
        "symbol": "",
        "meaning": "Future target",
        "value": "$10,000"
      },
      {
        "symbol": "",
        "meaning": "Nominal rate",
        "value": "6% compounded semiannually"
      },
      {
        "symbol": "",
        "meaning": "Time",
        "value": "5 years"
      }
    ],
    "governingFormula": "P=\\frac{F}{\\left(1+i\\right)^{n}}",
    "substitutionMath": "P=\\frac{10000}{\\left(1+0.03\\right)^{10}}",
    "formulaSymbols": "F = future amount; i = effective rate per payment period; n = number of periods or useful life",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Calculate the growth or remaining-value factor",
        "explanation": "Apply the exponent for the stated number of periods; a negative exponent discounts rather than accumulates.",
        "calculationMath": "\\left(1.03\\right)^{10} = 1.34391638",
        "intermediateValue": 1.3439163793441222
      },
      {
        "step": 2,
        "title": "Divide to find the required ratio",
        "explanation": "Keep the entire denominator grouped; use the full-precision result.",
        "calculationMath": "\\frac{10000}{1.34391638} = 7440.93914897",
        "intermediateValue": 7440.93914896725
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
    "given": [
      {
        "symbol": "",
        "meaning": "Principal",
        "value": "₱5,000"
      },
      {
        "symbol": "",
        "meaning": "Nominal rate",
        "value": "8% compounded quarterly"
      },
      {
        "symbol": "",
        "meaning": "Time",
        "value": "10 years"
      },
      {
        "symbol": "",
        "meaning": "Find",
        "value": "Total amount"
      }
    ],
    "governingFormula": "F=P\\times \\left(1+i\\right)^{n}",
    "substitutionMath": "F=5000\\times \\left(1+0.02\\right)^{40}",
    "formulaSymbols": "P = principal or present worth; i = effective rate per payment period; n = number of periods or useful life",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Calculate the growth or remaining-value factor",
        "explanation": "Apply the exponent for the stated number of periods; a negative exponent discounts rather than accumulates.",
        "calculationMath": "\\left(1.02\\right)^{40} = 2.20803966",
        "intermediateValue": 2.2080396636148536
      },
      {
        "step": 2,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "5000\\times(2.20803966) = 11040.19831807",
        "intermediateValue": 11040.198318074268
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
    "given": [
      {
        "symbol": "",
        "meaning": "Nominal rate",
        "value": "8%"
      },
      {
        "symbol": "",
        "meaning": "Compounding",
        "value": "Quarterly"
      },
      {
        "symbol": "",
        "meaning": "Find",
        "value": "Equivalent annual compounded rate"
      }
    ],
    "governingFormula": "i_{e,percent}=\\left(\\left(1+\\frac{r}{m}\\right)^{m}-1\\right)\\times 100",
    "substitutionMath": "i_{e,percent}=\\left(\\left(1+\\frac{0.08}{4}\\right)^{4}-1\\right)\\times 100",
    "formulaSymbols": "m = compounding periods per year; r = annual interest rate",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Calculate the growth or remaining-value factor",
        "explanation": "Apply the exponent for the stated number of periods; a negative exponent discounts rather than accumulates.",
        "calculationMath": "\\left(1.02\\right)^{4} = 1.08243216",
        "intermediateValue": 1.08243216
      },
      {
        "step": 2,
        "title": "Subtract the stated amounts",
        "explanation": "Subtract in this order; the order matters for cost, interest, or remaining book value.",
        "calculationMath": "1.08243216-(1) = 0.08243216",
        "intermediateValue": 0.08243215999999998
      },
      {
        "step": 3,
        "title": "Convert the decimal rate to percent",
        "explanation": "Multiplying a decimal rate by 100 expresses the same rate as a percentage.",
        "calculationMath": "0.08243216\\times(100) = 8.243216",
        "intermediateValue": 8.243215999999997
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
    "given": [
      {
        "symbol": "",
        "meaning": "Principal",
        "value": "$10,000"
      },
      {
        "symbol": "",
        "meaning": "Nominal rate",
        "value": "6% compounded monthly"
      },
      {
        "symbol": "",
        "meaning": "Time",
        "value": "20 years"
      }
    ],
    "governingFormula": "F=P\\times \\left(1+i\\right)^{n}",
    "substitutionMath": "F=10000\\times \\left(1+0.005\\right)^{240}",
    "formulaSymbols": "P = principal or present worth; i = effective rate per payment period; n = number of periods or useful life",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Calculate the growth or remaining-value factor",
        "explanation": "Apply the exponent for the stated number of periods; a negative exponent discounts rather than accumulates.",
        "calculationMath": "\\left(1.005\\right)^{240} = 3.31020448",
        "intermediateValue": 3.310204475807364
      },
      {
        "step": 2,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "10000\\times(3.31020448) = 33102.04475807",
        "intermediateValue": 33102.044758073636
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
    "given": [
      {
        "symbol": "",
        "meaning": "Nominal rate",
        "value": "18%"
      },
      {
        "symbol": "",
        "meaning": "Compounding",
        "value": "Semi-quarterly, 8 periods/year"
      }
    ],
    "governingFormula": "i_{e,percent}=\\left(\\left(1+\\frac{r}{m}\\right)^{m}-1\\right)\\times 100",
    "substitutionMath": "i_{e,percent}=\\left(\\left(1+\\frac{0.18}{8}\\right)^{8}-1\\right)\\times 100",
    "formulaSymbols": "m = compounding periods per year; r = annual interest rate",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Divide to find the required ratio",
        "explanation": "Keep the entire denominator grouped; use the full-precision result.",
        "calculationMath": "\\frac{0.18}{8} = 0.0225",
        "intermediateValue": 0.0225
      },
      {
        "step": 2,
        "title": "Combine the amounts",
        "explanation": "Add the components represented in the substituted expression.",
        "calculationMath": "1+(0.0225) = 1.0225",
        "intermediateValue": 1.0225
      },
      {
        "step": 3,
        "title": "Calculate the growth or remaining-value factor",
        "explanation": "Apply the exponent for the stated number of periods; a negative exponent discounts rather than accumulates.",
        "calculationMath": "\\left(1.0225\\right)^{8} = 1.19483114",
        "intermediateValue": 1.194831141814911
      },
      {
        "step": 4,
        "title": "Subtract the stated amounts",
        "explanation": "Subtract in this order; the order matters for cost, interest, or remaining book value.",
        "calculationMath": "1.19483114-(1) = 0.19483114",
        "intermediateValue": 0.1948311418149109
      },
      {
        "step": 5,
        "title": "Convert the decimal rate to percent",
        "explanation": "Multiplying a decimal rate by 100 expresses the same rate as a percentage.",
        "calculationMath": "0.19483114\\times(100) = 19.48311418",
        "intermediateValue": 19.48311418149109
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
    "given": [
      {
        "symbol": "",
        "meaning": "Monthly rate",
        "value": "1.5%"
      },
      {
        "symbol": "",
        "meaning": "Find",
        "value": "Effective annual rate"
      }
    ],
    "governingFormula": "i_{e,percent}=\\left(\\left(1+i\\right)^{m}-1\\right)\\times 100",
    "substitutionMath": "i_{e,percent}=\\left(\\left(1+0.015\\right)^{12}-1\\right)\\times 100",
    "formulaSymbols": "i = effective rate per payment period; m = compounding periods per year",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Calculate the growth or remaining-value factor",
        "explanation": "Apply the exponent for the stated number of periods; a negative exponent discounts rather than accumulates.",
        "calculationMath": "\\left(1.015\\right)^{12} = 1.19561817",
        "intermediateValue": 1.195618171461534
      },
      {
        "step": 2,
        "title": "Subtract the stated amounts",
        "explanation": "Subtract in this order; the order matters for cost, interest, or remaining book value.",
        "calculationMath": "1.19561817-(1) = 0.19561817",
        "intermediateValue": 0.19561817146153393
      },
      {
        "step": 3,
        "title": "Convert the decimal rate to percent",
        "explanation": "Multiplying a decimal rate by 100 expresses the same rate as a percentage.",
        "calculationMath": "0.19561817\\times(100) = 19.56181715",
        "intermediateValue": 19.561817146153395
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
    "calculatorEntry": "Test quarterly: ((1 + 0.095 ÷ 4)^4 − 1) × 100 ≈ 9.84%; therefore m = 4",
    "shortcutSolution": "At m=4, (1+0.095/4)^4−1≈9.84%. Test the four candidate frequencies.",
    "given": [
      {
        "symbol": "",
        "meaning": "Nominal annual rate",
        "value": "9.5%"
      },
      {
        "symbol": "",
        "meaning": "Advertised annual effective rate",
        "value": "9.84%"
      },
      {
        "symbol": "",
        "meaning": "Find",
        "value": "Compounding frequency"
      }
    ],
    "governingFormula": "i_{e}=\\left(1+\\frac{r}{m}\\right)^{m}-1",
    "substitutionMath": "0.0984\\approx\\left(1+\\frac{0.095}{m}\\right)^{m}-1",
    "formulaSymbols": "r = nominal annual rate; m = unknown compounding periods per year; iₑ = effective annual rate",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Monthly",
        "explanation": "Test this frequency using the effective annual-rate formula.",
        "calculationMath": "\\left[\\left(1+\\frac{0.095}{12}\\right)^{12}-1\\right]\\times100 = 9.92475841",
        "intermediateValue": 9.924758408100764
      },
      {
        "step": 2,
        "title": "Every two months",
        "explanation": "Test this frequency using the effective annual-rate formula.",
        "calculationMath": "\\left[\\left(1+\\frac{0.095}{6}\\right)^{6}-1\\right]\\times100 = 9.88407519",
        "intermediateValue": 9.884075194259555
      },
      {
        "step": 3,
        "title": "Quarterly",
        "explanation": "Test this frequency using the effective annual-rate formula.",
        "calculationMath": "\\left[\\left(1+\\frac{0.095}{4}\\right)^{4}-1\\right]\\times100 = 9.84382791",
        "intermediateValue": 9.843827910400371
      },
      {
        "step": 4,
        "title": "Daily (365)",
        "explanation": "Test this frequency using the effective annual-rate formula.",
        "calculationMath": "\\left[\\left(1+\\frac{0.095}{365}\\right)^{365}-1\\right]\\times100 = 9.96452625",
        "intermediateValue": 9.964526247113369
      },
      {
        "step": 5,
        "title": "Match the advertised rate",
        "explanation": "Quarterly compounding rounds to the stated 9.84% effective annual rate. Therefore choose C."
      }
    ],
    "finalAnswer": "Quarterly (4 times per year)",
    "canonCalTech": {
      "calculator": "Canon F-789SGA",
      "mode": "COMP",
      "keystrokes": [
        "Test quarterly: ((1 + 0.095 ÷ 4)^4 − 1) × 100 ≈ 9.84%; therefore m = 4",
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
    "given": [
      {
        "symbol": "",
        "meaning": "Nominal annual rate",
        "value": "8%"
      },
      {
        "symbol": "",
        "meaning": "Compounding",
        "value": "Quarterly"
      },
      {
        "symbol": "",
        "meaning": "Find",
        "value": "Effective annual rate"
      }
    ],
    "governingFormula": "i_{e,percent}=\\left(\\left(1+\\frac{r}{m}\\right)^{m}-1\\right)\\times 100",
    "substitutionMath": "i_{e,percent}=\\left(\\left(1+\\frac{0.08}{4}\\right)^{4}-1\\right)\\times 100",
    "formulaSymbols": "m = compounding periods per year; r = annual interest rate",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Calculate the growth or remaining-value factor",
        "explanation": "Apply the exponent for the stated number of periods; a negative exponent discounts rather than accumulates.",
        "calculationMath": "\\left(1.02\\right)^{4} = 1.08243216",
        "intermediateValue": 1.08243216
      },
      {
        "step": 2,
        "title": "Subtract the stated amounts",
        "explanation": "Subtract in this order; the order matters for cost, interest, or remaining book value.",
        "calculationMath": "1.08243216-(1) = 0.08243216",
        "intermediateValue": 0.08243215999999998
      },
      {
        "step": 3,
        "title": "Convert the decimal rate to percent",
        "explanation": "Multiplying a decimal rate by 100 expresses the same rate as a percentage.",
        "calculationMath": "0.08243216\\times(100) = 8.243216",
        "intermediateValue": 8.243215999999997
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
    "given": [
      {
        "symbol": "",
        "meaning": "Original nominal annual rate",
        "value": "12%"
      },
      {
        "symbol": "",
        "meaning": "Original compounding",
        "value": "Monthly"
      },
      {
        "symbol": "",
        "meaning": "Required compounding",
        "value": "Every two months, 6 periods/year"
      }
    ],
    "governingFormula": "r_{2,percent}=m_{2}\\times \\left(\\left(1+\\frac{r_{1}}{m_{1}}\\right)^{\\frac{m_{1}}{m_{2}}}-1\\right)\\times 100",
    "substitutionMath": "r_{2,percent}=6\\times \\left(\\left(1+\\frac{0.12}{12}\\right)^{\\frac{12}{6}}-1\\right)\\times 100",
    "formulaSymbols": "m_1 = compounding periods per year or requested year; m_2 = compounding periods per year or requested year; r_1 = annual interest rate",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Calculate the growth or remaining-value factor",
        "explanation": "Apply the exponent for the stated number of periods; a negative exponent discounts rather than accumulates.",
        "calculationMath": "\\left(1.01\\right)^{2} = 1.0201",
        "intermediateValue": 1.0201
      },
      {
        "step": 2,
        "title": "Subtract the stated amounts",
        "explanation": "Subtract in this order; the order matters for cost, interest, or remaining book value.",
        "calculationMath": "1.0201-(1) = 0.0201",
        "intermediateValue": 0.020100000000000007
      },
      {
        "step": 3,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "6\\times(0.0201) = 0.1206",
        "intermediateValue": 0.12060000000000004
      },
      {
        "step": 4,
        "title": "Convert the decimal rate to percent",
        "explanation": "Multiplying a decimal rate by 100 expresses the same rate as a percentage.",
        "calculationMath": "0.1206\\times(100) = 12.06",
        "intermediateValue": 12.060000000000004
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
    "given": [
      {
        "symbol": "",
        "meaning": "Continuous annual rate",
        "value": "12%"
      },
      {
        "symbol": "",
        "meaning": "Find",
        "value": "Effective annual rate"
      }
    ],
    "governingFormula": "i_{e,percent}=\\left(e^{r}-1\\right)\\times 100",
    "substitutionMath": "i_{e,percent}=\\left(e^{0.12}-1\\right)\\times 100",
    "formulaSymbols": "r = annual interest rate",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Apply the exponential",
        "explanation": "Use eˣ for continuous growth; use ln to reverse exponential growth.",
        "calculationMath": "e^{0.12} = 1.12749685",
        "intermediateValue": 1.1274968515793757
      },
      {
        "step": 2,
        "title": "Subtract the stated amounts",
        "explanation": "Subtract in this order; the order matters for cost, interest, or remaining book value.",
        "calculationMath": "1.12749685-(1) = 0.12749685",
        "intermediateValue": 0.12749685157937574
      },
      {
        "step": 3,
        "title": "Convert the decimal rate to percent",
        "explanation": "Multiplying a decimal rate by 100 expresses the same rate as a percentage.",
        "calculationMath": "0.12749685\\times(100) = 12.74968516",
        "intermediateValue": 12.749685157937574
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
    "given": [
      {
        "symbol": "",
        "meaning": "Effective annual rate",
        "value": "19.56%"
      },
      {
        "symbol": "",
        "meaning": "Compoundings per year",
        "value": "12"
      },
      {
        "symbol": "",
        "meaning": "Find",
        "value": "Nominal annual rate"
      }
    ],
    "governingFormula": "r_{percent}=m\\times \\left(\\left(1+i_{e}\\right)^{\\frac{1}{m}}-1\\right)\\times 100",
    "substitutionMath": "r_{percent}=12\\times \\left(\\left(1+0.1956\\right)^{\\frac{1}{12}}-1\\right)\\times 100",
    "formulaSymbols": "i_e = effective annual rate; m = compounding periods per year",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Divide to find the required ratio",
        "explanation": "Keep the entire denominator grouped; use the full-precision result.",
        "calculationMath": "\\frac{1}{12} = 0.08333333",
        "intermediateValue": 0.08333333333333333
      },
      {
        "step": 2,
        "title": "Calculate the growth or remaining-value factor",
        "explanation": "Apply the exponent for the stated number of periods; a negative exponent discounts rather than accumulates.",
        "calculationMath": "\\left(1.1956\\right)^{0.08333333} = 1.01499871",
        "intermediateValue": 1.0149987144612456
      },
      {
        "step": 3,
        "title": "Subtract the stated amounts",
        "explanation": "Subtract in this order; the order matters for cost, interest, or remaining book value.",
        "calculationMath": "1.01499871-(1) = 0.01499871",
        "intermediateValue": 0.014998714461245566
      },
      {
        "step": 4,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "12\\times(0.01499871) = 0.17998457",
        "intermediateValue": 0.1799845735349468
      },
      {
        "step": 5,
        "title": "Convert the decimal rate to percent",
        "explanation": "Multiplying a decimal rate by 100 expresses the same rate as a percentage.",
        "calculationMath": "0.17998457\\times(100) = 17.99845735",
        "intermediateValue": 17.99845735349468
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
    "given": [
      {
        "symbol": "",
        "meaning": "Principal",
        "value": "₱1,000"
      },
      {
        "symbol": "",
        "meaning": "Future amount",
        "value": "₱1,126.49"
      },
      {
        "symbol": "",
        "meaning": "Time",
        "value": "4 years"
      },
      {
        "symbol": "",
        "meaning": "Compounding",
        "value": "Semiannual"
      },
      {
        "symbol": "",
        "meaning": "Find",
        "value": "Nominal and effective annual rates"
      }
    ],
    "governingFormula": "\\begin{gathered}r_{percent}=m\\times \\left(\\left(\\frac{F}{P}\\right)^{\\frac{1}{m\\times t}}-1\\right)\\times 100\\\\i_{e,percent}=\\left(\\left(\\frac{F}{P}\\right)^{\\frac{1}{t}}-1\\right)\\times 100\\end{gathered}",
    "substitutionMath": "\\begin{gathered}r_{percent}=2\\times \\left(\\left(\\frac{1126.49}{1000}\\right)^{\\frac{1}{2\\times 4}}-1\\right)\\times 100\\\\i_{e,percent}=\\left(\\left(\\frac{1126.49}{1000}\\right)^{\\frac{1}{4}}-1\\right)\\times 100\\end{gathered}",
    "formulaSymbols": "F = future amount; P = principal or present worth; m = compounding periods per year; t = time in years",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Divide to find the required ratio",
        "explanation": "Keep the entire denominator grouped; use the full-precision result.",
        "calculationMath": "\\frac{1}{8} = 0.125",
        "intermediateValue": 0.125
      },
      {
        "step": 2,
        "title": "Calculate the growth or remaining-value factor",
        "explanation": "Apply the exponent for the stated number of periods; a negative exponent discounts rather than accumulates.",
        "calculationMath": "\\left(1.12649\\right)^{0.125} = 1.01499971",
        "intermediateValue": 1.0149997086757487
      },
      {
        "step": 3,
        "title": "Subtract the stated amounts",
        "explanation": "Subtract in this order; the order matters for cost, interest, or remaining book value.",
        "calculationMath": "1.01499971-(1) = 0.01499971",
        "intermediateValue": 0.014999708675748735
      },
      {
        "step": 4,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "2\\times(0.01499971) = 0.02999942",
        "intermediateValue": 0.02999941735149747
      },
      {
        "step": 5,
        "title": "Convert the decimal rate to percent",
        "explanation": "Multiplying a decimal rate by 100 expresses the same rate as a percentage.",
        "calculationMath": "0.02999942\\times(100) = 2.99994174",
        "intermediateValue": 2.999941735149747
      },
      {
        "step": 6,
        "title": "Find the effective annual rate",
        "explanation": "Two half-year growth factors make one year; this completes the second part of the requested answer.",
        "calculationMath": "\\left[(1+0.01499971)^2-1\\right]\\times100 = 3.02244086",
        "intermediateValue": 3.0224408611854825
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
    "given": [
      {
        "symbol": "",
        "meaning": "Effective annual rate",
        "value": "10%"
      },
      {
        "symbol": "",
        "meaning": "Find",
        "value": "Continuous nominal annual rate"
      }
    ],
    "governingFormula": "r_{percent}=\\ln\\left(1+i_{e}\\right)\\times 100",
    "substitutionMath": "r_{percent}=\\ln\\left(1+0.1\\right)\\times 100",
    "formulaSymbols": "i_e = effective annual rate",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Apply the natural logarithm",
        "explanation": "Use eˣ for continuous growth; use ln to reverse exponential growth.",
        "calculationMath": "\\ln\\left(1.1\\right) = 0.09531018",
        "intermediateValue": 0.09531017980432493
      },
      {
        "step": 2,
        "title": "Convert the decimal rate to percent",
        "explanation": "Multiplying a decimal rate by 100 expresses the same rate as a percentage.",
        "calculationMath": "0.09531018\\times(100) = 9.53101798",
        "intermediateValue": 9.531017980432493
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
    "given": [
      {
        "symbol": "",
        "meaning": "Principal",
        "value": "$5,000"
      },
      {
        "symbol": "",
        "meaning": "Continuous annual rate",
        "value": "3%"
      },
      {
        "symbol": "",
        "meaning": "Time",
        "value": "10 years"
      }
    ],
    "governingFormula": "F=P\\times e^{r\\times t}",
    "substitutionMath": "F=5000\\times e^{0.03\\times 10}",
    "formulaSymbols": "P = principal or present worth; r = annual interest rate; t = time in years",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "0.03\\times(10) = 0.3",
        "intermediateValue": 0.3
      },
      {
        "step": 2,
        "title": "Apply the exponential",
        "explanation": "Use eˣ for continuous growth; use ln to reverse exponential growth.",
        "calculationMath": "e^{\\left(0.03\\right)\\times\\left(10\\right)} = 1.34985881",
        "intermediateValue": 1.3498588075760032
      },
      {
        "step": 3,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "5000\\times(1.34985881) = 6749.29403788",
        "intermediateValue": 6749.294037880016
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
    "given": [
      {
        "symbol": "",
        "meaning": "Growth target",
        "value": "Double, F/P is 2"
      },
      {
        "symbol": "",
        "meaning": "Continuous annual rate",
        "value": "10%"
      },
      {
        "symbol": "",
        "meaning": "Find",
        "value": "Time"
      }
    ],
    "governingFormula": "t=\\frac{\\ln\\left(a\\right)}{r}",
    "substitutionMath": "t=\\frac{\\ln\\left(2\\right)}{0.1}",
    "formulaSymbols": "a = growth factor f/p; r = annual interest rate",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Apply the natural logarithm",
        "explanation": "Use eˣ for continuous growth; use ln to reverse exponential growth.",
        "calculationMath": "\\ln\\left(2\\right) = 0.69314718",
        "intermediateValue": 0.6931471805599453
      },
      {
        "step": 2,
        "title": "Divide to find the required ratio",
        "explanation": "Keep the entire denominator grouped; use the full-precision result.",
        "calculationMath": "\\frac{0.69314718}{0.1} = 6.93147181",
        "intermediateValue": 6.931471805599452
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
    "given": [
      {
        "symbol": "",
        "meaning": "Effective annual rate",
        "value": "4%"
      },
      {
        "symbol": "",
        "meaning": "Find",
        "value": "Equivalent continuous annual rate"
      }
    ],
    "governingFormula": "r_{percent}=\\ln\\left(1+i_{e}\\right)\\times 100",
    "substitutionMath": "r_{percent}=\\ln\\left(1+0.04\\right)\\times 100",
    "formulaSymbols": "i_e = effective annual rate",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Apply the natural logarithm",
        "explanation": "Use eˣ for continuous growth; use ln to reverse exponential growth.",
        "calculationMath": "\\ln\\left(1.04\\right) = 0.03922071",
        "intermediateValue": 0.03922071315328133
      },
      {
        "step": 2,
        "title": "Convert the decimal rate to percent",
        "explanation": "Multiplying a decimal rate by 100 expresses the same rate as a percentage.",
        "calculationMath": "0.03922071\\times(100) = 3.92207132",
        "intermediateValue": 3.922071315328133
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
    "given": [
      {
        "symbol": "",
        "meaning": "Effective annual rate",
        "value": "24%"
      },
      {
        "symbol": "",
        "meaning": "Find",
        "value": "Equivalent continuous annual rate"
      }
    ],
    "governingFormula": "r_{percent}=\\ln\\left(1+i_{e}\\right)\\times 100",
    "substitutionMath": "r_{percent}=\\ln\\left(1+0.24\\right)\\times 100",
    "formulaSymbols": "i_e = effective annual rate",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Apply the natural logarithm",
        "explanation": "Use eˣ for continuous growth; use ln to reverse exponential growth.",
        "calculationMath": "\\ln\\left(1.24\\right) = 0.21511138",
        "intermediateValue": 0.2151113796169455
      },
      {
        "step": 2,
        "title": "Convert the decimal rate to percent",
        "explanation": "Multiplying a decimal rate by 100 expresses the same rate as a percentage.",
        "calculationMath": "0.21511138\\times(100) = 21.51113796",
        "intermediateValue": 21.511137961694548
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
    "given": [
      {
        "symbol": "",
        "meaning": "Growth factor",
        "value": "1.34986"
      },
      {
        "symbol": "",
        "meaning": "Time",
        "value": "10 years"
      },
      {
        "symbol": "",
        "meaning": "Compounding",
        "value": "Continuous"
      },
      {
        "symbol": "",
        "meaning": "Find",
        "value": "Annual nominal rate"
      }
    ],
    "governingFormula": "r_{percent}=\\frac{\\ln\\left(a\\right)}{t}\\times 100",
    "substitutionMath": "r_{percent}=\\frac{\\ln\\left(1.34986\\right)}{10}\\times 100",
    "formulaSymbols": "a = growth factor f/p; t = time in years",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Apply the natural logarithm",
        "explanation": "Use eˣ for continuous growth; use ln to reverse exponential growth.",
        "calculationMath": "\\ln\\left(1.34986\\right) = 0.30000088",
        "intermediateValue": 0.3000008833690336
      },
      {
        "step": 2,
        "title": "Divide to find the required ratio",
        "explanation": "Keep the entire denominator grouped; use the full-precision result.",
        "calculationMath": "\\frac{0.30000088}{10} = 0.03000009",
        "intermediateValue": 0.030000088336903357
      },
      {
        "step": 3,
        "title": "Convert the decimal rate to percent",
        "explanation": "Multiplying a decimal rate by 100 expresses the same rate as a percentage.",
        "calculationMath": "0.03000009\\times(100) = 3.00000883",
        "intermediateValue": 3.0000088336903357
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
    "given": [
      {
        "symbol": "",
        "meaning": "Continuous monthly rate",
        "value": "1.5%"
      },
      {
        "symbol": "",
        "meaning": "Months per year",
        "value": "12"
      },
      {
        "symbol": "",
        "meaning": "Find",
        "value": "Effective annual rate"
      }
    ],
    "governingFormula": "i_{e,percent}=\\left(e^{r_{month}\\times m}-1\\right)\\times 100",
    "substitutionMath": "i_{e,percent}=\\left(e^{0.015\\times 12}-1\\right)\\times 100",
    "formulaSymbols": "m = compounding periods per year; r_month = continuous monthly rate",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "0.015\\times(12) = 0.18",
        "intermediateValue": 0.18
      },
      {
        "step": 2,
        "title": "Apply the exponential",
        "explanation": "Use eˣ for continuous growth; use ln to reverse exponential growth.",
        "calculationMath": "e^{\\left(0.015\\right)\\times\\left(12\\right)} = 1.19721736",
        "intermediateValue": 1.1972173631218102
      },
      {
        "step": 3,
        "title": "Subtract the stated amounts",
        "explanation": "Subtract in this order; the order matters for cost, interest, or remaining book value.",
        "calculationMath": "1.19721736-(1) = 0.19721736",
        "intermediateValue": 0.19721736312181015
      },
      {
        "step": 4,
        "title": "Convert the decimal rate to percent",
        "explanation": "Multiplying a decimal rate by 100 expresses the same rate as a percentage.",
        "calculationMath": "0.19721736\\times(100) = 19.72173631",
        "intermediateValue": 19.721736312181015
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
    "given": [
      {
        "symbol": "",
        "meaning": "Principal",
        "value": "₱2,000"
      },
      {
        "symbol": "",
        "meaning": "Continuous annual rate",
        "value": "8%"
      },
      {
        "symbol": "",
        "meaning": "Target amount",
        "value": "Missing"
      },
      {
        "symbol": "",
        "meaning": "Find",
        "value": "Time, which cannot be determined"
      }
    ],
    "governingFormula": "t=\\frac{\\ln\\left(\\frac{F}{P}\\right)}{r}",
    "substitutionMath": "t=\\frac{\\ln\\left(\\frac{F}{2000}\\right)}{0.08}",
    "formulaSymbols": "F = missing target amount; P = principal; r = continuous annual rate; t = years",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Identify the missing value",
        "explanation": "Time needs both the starting amount P and the target amount F. The question supplies P and r, but no F.",
        "calculationMath": "t=\\frac{\\ln(F/P)}{r}"
      },
      {
        "step": 2,
        "title": "Stop rather than guess",
        "explanation": "Different target amounts give different times, so no unique time or correct option can be calculated."
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
    "given": [
      {
        "symbol": "",
        "meaning": "Principal",
        "value": "₱500"
      },
      {
        "symbol": "",
        "meaning": "Annual rate",
        "value": "5%"
      },
      {
        "symbol": "",
        "meaning": "Time",
        "value": "5 years"
      },
      {
        "symbol": "",
        "meaning": "Compare",
        "value": "Annual vs continuous compounding"
      }
    ],
    "governingFormula": "Delta_{F}=P\\times \\left(e^{r\\times t}-\\left(1+r\\right)^{t}\\right)",
    "substitutionMath": "Delta_{F}=500\\times \\left(e^{0.05\\times 5}-\\left(1+0.05\\right)^{5}\\right)",
    "formulaSymbols": "P = principal or present worth; r = annual interest rate; t = time in years",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "0.05\\times(5) = 0.25",
        "intermediateValue": 0.25
      },
      {
        "step": 2,
        "title": "Apply the exponential",
        "explanation": "Use eˣ for continuous growth; use ln to reverse exponential growth.",
        "calculationMath": "e^{\\left(0.05\\right)\\times\\left(5\\right)} = 1.28402542",
        "intermediateValue": 1.2840254166877414
      },
      {
        "step": 3,
        "title": "Calculate the growth or remaining-value factor",
        "explanation": "Apply the exponent for the stated number of periods; a negative exponent discounts rather than accumulates.",
        "calculationMath": "\\left(1.05\\right)^{5} = 1.27628156",
        "intermediateValue": 1.2762815625000004
      },
      {
        "step": 4,
        "title": "Subtract the stated amounts",
        "explanation": "Subtract in this order; the order matters for cost, interest, or remaining book value.",
        "calculationMath": "1.28402542-(1.27628156) = 0.00774385",
        "intermediateValue": 0.007743854187741039
      },
      {
        "step": 5,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "500\\times(0.00774385) = 3.87192709",
        "intermediateValue": 3.8719270938705197
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
    "given": [
      {
        "symbol": "",
        "meaning": "Yearly receipt",
        "value": "$2,000"
      },
      {
        "symbol": "",
        "meaning": "Payments",
        "value": "5 beginning-of-year payments"
      },
      {
        "symbol": "",
        "meaning": "Interest",
        "value": "4% yearly"
      }
    ],
    "governingFormula": "P_{due}=A\\times \\frac{1-\\left(1+i\\right)^{-n}}{i}\\times \\left(1+i\\right)",
    "substitutionMath": "P_{due}=2000\\times \\frac{1-\\left(1+0.04\\right)^{-5}}{0.04}\\times \\left(1+0.04\\right)",
    "formulaSymbols": "A = equal payment; i = effective rate per payment period; n = number of periods or useful life",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Find the present-worth factor",
        "explanation": "Use i=0.04 (4.000000% per payment period) and n=5. Multiply an equal payment by this factor to obtain its value one period before the first payment.",
        "calculationMath": "\\frac{1-(1+0.04)^{-5}}{0.04} = 4.45182233",
        "intermediateValue": 4.451822331016208
      },
      {
        "step": 2,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "2000\\times(4.45182233) = 8903.64466203",
        "intermediateValue": 8903.644662032417
      },
      {
        "step": 3,
        "title": "Adjust for beginning-of-period timing",
        "explanation": "Payments one period earlier have an extra factor of 1+i in their worth; divide the ordinary payment by 1+i when finding an installment.",
        "calculationMath": "8903.64466203\\times(1.04) = 9259.79044851",
        "intermediateValue": 9259.790448513713
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
    "given": [
      {
        "symbol": "",
        "meaning": "Quarter-end payment",
        "value": "₱2,000"
      },
      {
        "symbol": "",
        "meaning": "Payments",
        "value": "6"
      },
      {
        "symbol": "",
        "meaning": "Nominal rate",
        "value": "12% compounded quarterly"
      }
    ],
    "governingFormula": "P=A\\times \\frac{1-\\left(1+i\\right)^{-n}}{i}",
    "substitutionMath": "P=2000\\times \\frac{1-\\left(1+0.03\\right)^{-6}}{0.03}",
    "formulaSymbols": "A = equal payment; i = effective rate per payment period; n = number of periods or useful life",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Find the present-worth factor",
        "explanation": "Use i=0.03 (3.000000% per payment period) and n=6. Multiply an equal payment by this factor to obtain its value one period before the first payment.",
        "calculationMath": "\\frac{1-(1+0.03)^{-6}}{0.03} = 5.41719144",
        "intermediateValue": 5.417191443878193
      },
      {
        "step": 2,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "2000\\times(5.41719144) = 10834.38288776",
        "intermediateValue": 10834.382887756385
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
    "given": [
      {
        "symbol": "",
        "meaning": "Year-end deposit",
        "value": "₱6,000"
      },
      {
        "symbol": "",
        "meaning": "Time",
        "value": "5 years"
      },
      {
        "symbol": "",
        "meaning": "Interest",
        "value": "15% yearly"
      }
    ],
    "governingFormula": "F=A\\times \\frac{\\left(1+i\\right)^{n}-1}{i}",
    "substitutionMath": "F=6000\\times \\frac{\\left(1+0.15\\right)^{5}-1}{0.15}",
    "formulaSymbols": "A = equal payment; i = effective rate per payment period; n = number of periods or useful life",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Find the accumulated-savings factor",
        "explanation": "Use i=0.15 (15.000000% per payment period) and n=5. Multiply an equal deposit by this factor to obtain the amount on the final deposit date.",
        "calculationMath": "\\frac{(1+0.15)^{5}-1}{0.15} = 6.74238125",
        "intermediateValue": 6.742381249999996
      },
      {
        "step": 2,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "6000\\times(6.74238125) = 40454.2875",
        "intermediateValue": 40454.28749999998
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
    "given": [
      {
        "symbol": "",
        "meaning": "Cash price",
        "value": "₱10,000"
      },
      {
        "symbol": "",
        "meaning": "Down payment",
        "value": "₱2,000"
      },
      {
        "symbol": "",
        "meaning": "Year-end installment",
        "value": "₱750"
      },
      {
        "symbol": "",
        "meaning": "Payments",
        "value": "15"
      },
      {
        "symbol": "",
        "meaning": "Find",
        "value": "Annual interest rate"
      }
    ],
    "governingFormula": "0=A\\times \\frac{1-\\left(1+x\\right)^{-n}}{x}-P",
    "substitutionMath": "0=750\\times \\frac{1-\\left(1+x\\right)^{-15}}{x}-8000",
    "formulaSymbols": "A = equal payment; P = principal or present worth; n = number of periods or useful life; x = unknown decimal yield",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Set present worth equal to the price",
        "explanation": "X is the unknown decimal rate. In Canon COMP, enter this residual and use SOLVE with a nonzero initial estimate.",
        "calculationMath": "750\\frac{1-(1+X)^{-15}}{X}-8000=0",
        "intermediateValue": null
      },
      {
        "step": 2,
        "title": "Solve the decimal rate",
        "explanation": "A numerical solver gives this X; convert it to percent only after solving.",
        "calculationMath": "X = 0.0459921",
        "intermediateValue": 0.04599210438162245
      },
      {
        "step": 3,
        "title": "Check the solved rate",
        "explanation": "Substitute the solved rate back into the residual. It should be close to zero.",
        "calculationMath": "\\mathrm{residual} = 0",
        "intermediateValue": 0.0
      },
      {
        "step": 4,
        "title": "Convert the decimal rate to percent",
        "explanation": "Multiplying a decimal rate by 100 expresses the same rate as a percentage.",
        "calculationMath": "0.0459921\\times(100) = 4.59921044",
        "intermediateValue": 4.5992104381622445
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
    "given": [
      {
        "symbol": "",
        "meaning": "Quarter-end installment",
        "value": "₱2,000"
      },
      {
        "symbol": "",
        "meaning": "Payments",
        "value": "10"
      },
      {
        "symbol": "",
        "meaning": "Nominal rate",
        "value": "10% compounded quarterly"
      }
    ],
    "governingFormula": "P=A\\times \\frac{1-\\left(1+i\\right)^{-n}}{i}",
    "substitutionMath": "P=2000\\times \\frac{1-\\left(1+0.025\\right)^{-10}}{0.025}",
    "formulaSymbols": "A = equal payment; i = effective rate per payment period; n = number of periods or useful life",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Find the present-worth factor",
        "explanation": "Use i=0.025 (2.500000% per payment period) and n=10. Multiply an equal payment by this factor to obtain its value one period before the first payment.",
        "calculationMath": "\\frac{1-(1+0.025)^{-10}}{0.025} = 8.75206393",
        "intermediateValue": 8.752063930970907
      },
      {
        "step": 2,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "2000\\times(8.75206393) = 17504.12786194",
        "intermediateValue": 17504.127861941815
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
    "given": [
      {
        "symbol": "",
        "meaning": "First lease payment",
        "value": "$20,000 at year 1"
      },
      {
        "symbol": "",
        "meaning": "Annual increase",
        "value": "$1,500"
      },
      {
        "symbol": "",
        "meaning": "Payments",
        "value": "8"
      },
      {
        "symbol": "",
        "meaning": "Interest",
        "value": "7% yearly"
      }
    ],
    "governingFormula": "P=\\sum_{t=1}^{n}\\left(\\frac{A+G\\times \\left(t-1\\right)}{\\left(1+i\\right)^{t}}\\right)",
    "substitutionMath": "P=\\sum_{t=1}^{8}\\left(\\frac{20000+1500\\times \\left(t-1\\right)}{\\left(1+0.07\\right)^{t}}\\right)",
    "formulaSymbols": "A = equal payment; G = yearly increase; i = effective rate per payment period; n = number of periods or useful life",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Discount the year-1 cash flow",
        "explanation": "Move this payment back to today using its own payment date.",
        "calculationMath": "\\frac{\\left(20000\\right)+\\left(\\left(1500\\right)\\times\\left(\\left(1\\right)-\\left(1\\right)\\right)\\right)}{\\left(1.07\\right)^{1}} = 18691.58878505",
        "intermediateValue": 18691.588785046726
      },
      {
        "step": 2,
        "title": "Discount the year-2 cash flow",
        "explanation": "Move this payment back to today using its own payment date.",
        "calculationMath": "\\frac{\\left(20000\\right)+\\left(\\left(1500\\right)\\times\\left(\\left(2\\right)-\\left(1\\right)\\right)\\right)}{\\left(1.07\\right)^{2}} = 18778.93265787",
        "intermediateValue": 18778.93265787405
      },
      {
        "step": 3,
        "title": "Discount the year-3 cash flow",
        "explanation": "Move this payment back to today using its own payment date.",
        "calculationMath": "\\frac{\\left(20000\\right)+\\left(\\left(1500\\right)\\times\\left(\\left(3\\right)-\\left(1\\right)\\right)\\right)}{\\left(1.07\\right)^{3}} = 18774.85116849",
        "intermediateValue": 18774.851168489593
      },
      {
        "step": 4,
        "title": "Discount the year-4 cash flow",
        "explanation": "Move this payment back to today using its own payment date.",
        "calculationMath": "\\frac{\\left(20000\\right)+\\left(\\left(1500\\right)\\times\\left(\\left(4\\right)-\\left(1\\right)\\right)\\right)}{\\left(1.07\\right)^{4}} = 18690.93269516",
        "intermediateValue": 18690.932695164363
      },
      {
        "step": 5,
        "title": "Discount the year-5 cash flow",
        "explanation": "Move this payment back to today using its own payment date.",
        "calculationMath": "\\frac{\\left(20000\\right)+\\left(\\left(1500\\right)\\times\\left(\\left(5\\right)-\\left(1\\right)\\right)\\right)}{\\left(1.07\\right)^{5}} = 18537.64066658",
        "intermediateValue": 18537.640666575375
      },
      {
        "step": 6,
        "title": "Discount the year-6 cash flow",
        "explanation": "Move this payment back to today using its own payment date.",
        "calculationMath": "\\frac{\\left(20000\\right)+\\left(\\left(1500\\right)\\times\\left(\\left(6\\right)-\\left(1\\right)\\right)\\right)}{\\left(1.07\\right)^{6}} = 18324.41115495",
        "intermediateValue": 18324.41115495409
      },
      {
        "step": 7,
        "title": "Discount the year-7 cash flow",
        "explanation": "Move this payment back to today using its own payment date.",
        "calculationMath": "\\frac{\\left(20000\\right)+\\left(\\left(1500\\right)\\times\\left(\\left(7\\right)-\\left(1\\right)\\right)\\right)}{\\left(1.07\\right)^{7}} = 18059.74251465",
        "intermediateValue": 18059.74251465314
      },
      {
        "step": 8,
        "title": "Discount the year-8 cash flow",
        "explanation": "Move this payment back to today using its own payment date.",
        "calculationMath": "\\frac{\\left(20000\\right)+\\left(\\left(1500\\right)\\times\\left(\\left(8\\right)-\\left(1\\right)\\right)\\right)}{\\left(1.07\\right)^{8}} = 17751.27768923",
        "intermediateValue": 17751.277689233666
      },
      {
        "step": 9,
        "title": "Add the present values",
        "explanation": "These discounted amounts can now be added because they are all at the same date.",
        "calculationMath": "P=\\sum_t\\frac{C_t}{(1+i)^t} = 147609.37733199",
        "intermediateValue": 147609.377331991
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
    "given": [
      {
        "symbol": "",
        "meaning": "Year-end payment",
        "value": "$200"
      },
      {
        "symbol": "",
        "meaning": "Payments",
        "value": "10"
      },
      {
        "symbol": "",
        "meaning": "Interest",
        "value": "6% yearly"
      }
    ],
    "governingFormula": "P=A\\times \\frac{1-\\left(1+i\\right)^{-n}}{i}",
    "substitutionMath": "P=200\\times \\frac{1-\\left(1+0.06\\right)^{-10}}{0.06}",
    "formulaSymbols": "A = equal payment; i = effective rate per payment period; n = number of periods or useful life",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Find the present-worth factor",
        "explanation": "Use i=0.06 (6.000000% per payment period) and n=10. Multiply an equal payment by this factor to obtain its value one period before the first payment.",
        "calculationMath": "\\frac{1-(1+0.06)^{-10}}{0.06} = 7.36008705",
        "intermediateValue": 7.360087051414703
      },
      {
        "step": 2,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "200\\times(7.36008705) = 1472.01741028",
        "intermediateValue": 1472.0174102829405
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
    "given": [
      {
        "symbol": "",
        "meaning": "Loan",
        "value": "₱100,000"
      },
      {
        "symbol": "",
        "meaning": "Nominal annual rate",
        "value": "12%"
      },
      {
        "symbol": "",
        "meaning": "Payments",
        "value": "Monthly for 20 years"
      },
      {
        "symbol": "",
        "meaning": "Assumption",
        "value": "Monthly compounding"
      }
    ],
    "governingFormula": "A=P\\times \\frac{i}{1-\\left(1+i\\right)^{-n}}",
    "substitutionMath": "A=100000\\times \\frac{0.01}{1-\\left(1+0.01\\right)^{-240}}",
    "formulaSymbols": "P = principal or present worth; i = effective rate per payment period; n = number of periods or useful life",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Find the loan-payment factor",
        "explanation": "Use i=0.01 (1.000000% per payment period) and n=240. Multiply the financed principal by this factor to obtain each period-end payment.",
        "calculationMath": "\\frac{0.01}{1-(1+0.01)^{-240}} = 0.01101086",
        "intermediateValue": 0.011010861335696098
      },
      {
        "step": 2,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "100000\\times(0.01101086) = 1101.08613357",
        "intermediateValue": 1101.0861335696097
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
    "given": [
      {
        "symbol": "",
        "meaning": "Future target",
        "value": "₱20,000"
      },
      {
        "symbol": "",
        "meaning": "Year-end deposits",
        "value": "12"
      },
      {
        "symbol": "",
        "meaning": "Interest",
        "value": "6% yearly"
      }
    ],
    "governingFormula": "A=F\\times \\frac{i}{\\left(1+i\\right)^{n}-1}",
    "substitutionMath": "A=20000\\times \\frac{0.06}{\\left(1+0.06\\right)^{12}-1}",
    "formulaSymbols": "F = future amount; i = effective rate per payment period; n = number of periods or useful life",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Find the savings-deposit factor",
        "explanation": "Use i=0.06 (6.000000% per payment period) and n=12. Multiply the future target by this factor to obtain each period-end deposit.",
        "calculationMath": "\\frac{0.06}{(1+0.06)^{12}-1} = 0.05927703",
        "intermediateValue": 0.05927702938066358
      },
      {
        "step": 2,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "20000\\times(0.05927703) = 1185.54058761",
        "intermediateValue": 1185.5405876132716
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
    "given": [
      {
        "symbol": "",
        "meaning": "Future target",
        "value": "₱100,000 on final deposit date"
      },
      {
        "symbol": "",
        "meaning": "Year-end deposits",
        "value": "5"
      },
      {
        "symbol": "",
        "meaning": "Interest",
        "value": "10% yearly"
      }
    ],
    "governingFormula": "A=F\\times \\frac{i}{\\left(1+i\\right)^{n}-1}",
    "substitutionMath": "A=100000\\times \\frac{0.1}{\\left(1+0.1\\right)^{5}-1}",
    "formulaSymbols": "F = future amount; i = effective rate per payment period; n = number of periods or useful life",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Find the savings-deposit factor",
        "explanation": "Use i=0.1 (10.000000% per payment period) and n=5. Multiply the future target by this factor to obtain each period-end deposit.",
        "calculationMath": "\\frac{0.1}{(1+0.1)^{5}-1} = 0.16379748",
        "intermediateValue": 0.16379748079474524
      },
      {
        "step": 2,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "100000\\times(0.16379748) = 16379.74807947",
        "intermediateValue": 16379.748079474524
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
    "given": [
      {
        "symbol": "",
        "meaning": "Down payment",
        "value": "₱200,000, equal to 10% of price"
      },
      {
        "symbol": "",
        "meaning": "Payments",
        "value": "Monthly for 5 years"
      },
      {
        "symbol": "",
        "meaning": "Nominal rate",
        "value": "15% compounded monthly"
      }
    ],
    "governingFormula": "A=P\\times \\frac{i}{1-\\left(1+i\\right)^{-n}}",
    "substitutionMath": "A=1800000\\times \\frac{0.0125}{1-\\left(1+0.0125\\right)^{-60}}",
    "formulaSymbols": "P = principal or present worth; i = effective rate per payment period; n = number of periods or useful life",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Divide to find the required ratio",
        "explanation": "Keep the entire denominator grouped; use the full-precision result.",
        "calculationMath": "\\frac{0.15}{12} = 0.0125",
        "intermediateValue": 0.012499999999999999
      },
      {
        "step": 2,
        "title": "Find the loan-payment factor",
        "explanation": "Use i=0.0125 (1.250000% per payment period) and n=60. Multiply the financed principal by this factor to obtain each period-end payment.",
        "calculationMath": "\\frac{0.0125}{1-(1+0.0125)^{-60}} = 0.02378993",
        "intermediateValue": 0.023789930086358782
      },
      {
        "step": 3,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "1800000\\times(0.02378993) = 42821.87415545",
        "intermediateValue": 42821.87415544581
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
    "given": [
      {
        "symbol": "",
        "meaning": "Monthly payment",
        "value": "$10,000"
      },
      {
        "symbol": "",
        "meaning": "Payments",
        "value": "60"
      },
      {
        "symbol": "",
        "meaning": "Interest",
        "value": "12% compounded annually"
      }
    ],
    "governingFormula": "P=A\\times \\frac{1-\\left(1+i\\right)^{-n}}{i}",
    "substitutionMath": "P=10000\\times \\frac{1-\\left(1+\\left((1+0.12)^{1/12}-1\\right)\\right)^{-60}}{\\left((1+0.12)^{1/12}-1\\right)}",
    "formulaSymbols": "A = equal payment; i = effective rate per payment period; n = number of periods or useful life",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Divide to find the required ratio",
        "explanation": "Keep the entire denominator grouped; use the full-precision result.",
        "calculationMath": "\\frac{1}{12} = 0.08333333",
        "intermediateValue": 0.08333333333333333
      },
      {
        "step": 2,
        "title": "Calculate the growth or remaining-value factor",
        "explanation": "Apply the exponent for the stated number of periods; a negative exponent discounts rather than accumulates.",
        "calculationMath": "\\left(1.12\\right)^{0.08333333} = 1.00948879",
        "intermediateValue": 1.009488792934583
      },
      {
        "step": 3,
        "title": "Subtract the stated amounts",
        "explanation": "Subtract in this order; the order matters for cost, interest, or remaining book value.",
        "calculationMath": "1.00948879-(1) = 0.00948879",
        "intermediateValue": 0.009488792934583046
      },
      {
        "step": 4,
        "title": "Find the present-worth factor",
        "explanation": "Use i=0.00948879 (0.948879% per payment period) and n=60. Multiply an equal payment by this factor to obtain its value one period before the first payment.",
        "calculationMath": "\\frac{1-(1+0.00948879)^{-60}}{0.00948879} = 45.5877947",
        "intermediateValue": 45.58779470303733
      },
      {
        "step": 5,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "10000\\times(45.5877947) = 455877.94703037",
        "intermediateValue": 455877.9470303733
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
    "given": [
      {
        "symbol": "",
        "meaning": "Future target",
        "value": "₱5,000 on last deposit date"
      },
      {
        "symbol": "",
        "meaning": "Deposits",
        "value": "6, on January 1 of years 1–6"
      },
      {
        "symbol": "",
        "meaning": "Interest",
        "value": "6% yearly"
      }
    ],
    "governingFormula": "A=\\frac{F}{\\frac{\\left(1+i\\right)^{n}-1}{i}}",
    "substitutionMath": "A=\\frac{5000}{\\frac{\\left(1+0.06\\right)^{6}-1}{0.06}}",
    "formulaSymbols": "F = future amount; i = effective rate per payment period; n = number of periods or useful life",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Find the accumulated-savings factor",
        "explanation": "Use i=0.06 (6.000000% per payment period) and n=6. Multiply an equal deposit by this factor to obtain the amount on the final deposit date.",
        "calculationMath": "\\frac{(1+0.06)^{6}-1}{0.06} = 6.97531854",
        "intermediateValue": 6.975318537600006
      },
      {
        "step": 2,
        "title": "Divide to find the required ratio",
        "explanation": "Keep the entire denominator grouped; use the full-precision result.",
        "calculationMath": "\\frac{5000}{6.97531854} = 716.81314237",
        "intermediateValue": 716.8131423744768
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
    "given": [
      {
        "symbol": "",
        "meaning": "Payment",
        "value": "$120,000"
      },
      {
        "symbol": "",
        "meaning": "Payments",
        "value": "6 at beginning of each year"
      },
      {
        "symbol": "",
        "meaning": "Interest",
        "value": "15% yearly"
      }
    ],
    "governingFormula": "P_{due}=A\\times \\frac{1-\\left(1+i\\right)^{-n}}{i}\\times \\left(1+i\\right)",
    "substitutionMath": "P_{due}=120000\\times \\frac{1-\\left(1+0.15\\right)^{-6}}{0.15}\\times \\left(1+0.15\\right)",
    "formulaSymbols": "A = equal payment; i = effective rate per payment period; n = number of periods or useful life",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Find the present-worth factor",
        "explanation": "Use i=0.15 (15.000000% per payment period) and n=6. Multiply an equal payment by this factor to obtain its value one period before the first payment.",
        "calculationMath": "\\frac{1-(1+0.15)^{-6}}{0.15} = 3.78448269",
        "intermediateValue": 3.784482693922957
      },
      {
        "step": 2,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "120000\\times(3.78448269) = 454137.92327075",
        "intermediateValue": 454137.92327075487
      },
      {
        "step": 3,
        "title": "Adjust for beginning-of-period timing",
        "explanation": "Payments one period earlier have an extra factor of 1+i in their worth; divide the ordinary payment by 1+i when finding an installment.",
        "calculationMath": "454137.92327075\\times(1.15) = 522258.61176137",
        "intermediateValue": 522258.61176136805
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
    "given": [
      {
        "symbol": "",
        "meaning": "Deposit",
        "value": "$200"
      },
      {
        "symbol": "",
        "meaning": "Deposits",
        "value": "15 at beginning of each year"
      },
      {
        "symbol": "",
        "meaning": "Interest",
        "value": "7% yearly"
      }
    ],
    "governingFormula": "F_{due}=A\\times \\frac{\\left(1+i\\right)^{n}-1}{i}\\times \\left(1+i\\right)",
    "substitutionMath": "F_{due}=200\\times \\frac{\\left(1+0.07\\right)^{15}-1}{0.07}\\times \\left(1+0.07\\right)",
    "formulaSymbols": "A = equal payment; i = effective rate per payment period; n = number of periods or useful life",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Find the accumulated-savings factor",
        "explanation": "Use i=0.07 (7.000000% per payment period) and n=15. Multiply an equal deposit by this factor to obtain the amount on the final deposit date.",
        "calculationMath": "\\frac{(1+0.07)^{15}-1}{0.07} = 25.12902201",
        "intermediateValue": 25.12902201021909
      },
      {
        "step": 2,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "200\\times(25.12902201) = 5025.80440204",
        "intermediateValue": 5025.804402043817
      },
      {
        "step": 3,
        "title": "Adjust for beginning-of-period timing",
        "explanation": "Payments one period earlier have an extra factor of 1+i in their worth; divide the ordinary payment by 1+i when finding an installment.",
        "calculationMath": "5025.80440204\\times(1.07) = 5377.61071019",
        "intermediateValue": 5377.610710186885
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
    "given": [
      {
        "symbol": "",
        "meaning": "Loan",
        "value": "₱2,000"
      },
      {
        "symbol": "",
        "meaning": "Annual rate",
        "value": "4.5%"
      },
      {
        "symbol": "",
        "meaning": "Installments",
        "value": "10 semiannual"
      },
      {
        "symbol": "",
        "meaning": "First installment",
        "value": "Year 3"
      },
      {
        "symbol": "",
        "meaning": "Assumption",
        "value": "Nominal rate compounded semiannually"
      }
    ],
    "governingFormula": "A=P\\times \\left(1+i\\right)^{k-1}\\times \\frac{i}{1-\\left(1+i\\right)^{-n}}",
    "substitutionMath": "A=2000\\times \\left(1+0.0225\\right)^{6-1}\\times \\frac{0.0225}{1-\\left(1+0.0225\\right)^{-10}}",
    "formulaSymbols": "P = principal or present worth; i = effective rate per payment period; k = first payment period; n = number of periods or useful life",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Calculate the growth or remaining-value factor",
        "explanation": "Apply the exponent for the stated number of periods; a negative exponent discounts rather than accumulates.",
        "calculationMath": "\\left(1.0225\\right)^{5} = 1.11767769",
        "intermediateValue": 1.1176776934618162
      },
      {
        "step": 2,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "2000\\times(1.11767769) = 2235.35538692",
        "intermediateValue": 2235.3553869236325
      },
      {
        "step": 3,
        "title": "Find the loan-payment factor",
        "explanation": "Use i=0.0225 (2.250000% per payment period) and n=10. Multiply the financed principal by this factor to obtain each period-end payment.",
        "calculationMath": "\\frac{0.0225}{1-(1+0.0225)^{-10}} = 0.11278768",
        "intermediateValue": 0.11278768311666688
      },
      {
        "step": 4,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "2235.35538692\\times(0.11278768) = 252.12055503",
        "intermediateValue": 252.12055503347696
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
    "shortcutSolution": "The eight-payment annuity value is at year 9; carry the loan to that year first. No printed choice matches the calculated result at its stated precision. The correct computed result is shown above; do not force a letter.",
    "given": [
      {
        "symbol": "",
        "meaning": "Loan",
        "value": "₱187,400"
      },
      {
        "symbol": "",
        "meaning": "Annual rate",
        "value": "5%"
      },
      {
        "symbol": "",
        "meaning": "Payments",
        "value": "8 yearly"
      },
      {
        "symbol": "",
        "meaning": "First payment",
        "value": "End of year 10"
      }
    ],
    "governingFormula": "A=P\\times \\left(1+i\\right)^{k-1}\\times \\frac{i}{1-\\left(1+i\\right)^{-n}}",
    "substitutionMath": "A=187400\\times \\left(1+0.05\\right)^{10-1}\\times \\frac{0.05}{1-\\left(1+0.05\\right)^{-8}}",
    "formulaSymbols": "P = principal or present worth; i = effective rate per payment period; k = first payment period; n = number of periods or useful life",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Calculate the growth or remaining-value factor",
        "explanation": "Apply the exponent for the stated number of periods; a negative exponent discounts rather than accumulates.",
        "calculationMath": "\\left(1.05\\right)^{9} = 1.55132822",
        "intermediateValue": 1.5513282159785162
      },
      {
        "step": 2,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "187400\\times(1.55132822) = 290718.90767437",
        "intermediateValue": 290718.90767437394
      },
      {
        "step": 3,
        "title": "Find the loan-payment factor",
        "explanation": "Use i=0.05 (5.000000% per payment period) and n=8. Multiply the financed principal by this factor to obtain each period-end payment.",
        "calculationMath": "\\frac{0.05}{1-(1+0.05)^{-8}} = 0.15472181",
        "intermediateValue": 0.15472181362768106
      },
      {
        "step": 4,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "290718.90767437\\times(0.15472181) = 44980.55665124",
        "intermediateValue": 44980.5566512375
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
    "mentalModelOrTrap": "The eight-payment annuity value is at year 9; carry the loan to that year first. No printed choice matches the calculated result at its stated precision. The correct computed result is shown above; do not force a letter."
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
    "given": [
      {
        "symbol": "",
        "meaning": "Down payment",
        "value": "₱100,000"
      },
      {
        "symbol": "",
        "meaning": "Installment",
        "value": "₱8,000"
      },
      {
        "symbol": "",
        "meaning": "Installments",
        "value": "10 semiannual"
      },
      {
        "symbol": "",
        "meaning": "First installment",
        "value": "Year 3"
      },
      {
        "symbol": "",
        "meaning": "Nominal rate",
        "value": "12% compounded semiannually"
      }
    ],
    "governingFormula": "P_{0}=P_{d}+\\frac{A\\times \\frac{1-\\left(1+i\\right)^{-n}}{i}}{\\left(1+i\\right)^{k-1}}",
    "substitutionMath": "P_{0}=100000+\\frac{8000\\times \\frac{1-\\left(1+0.06\\right)^{-10}}{0.06}}{\\left(1+0.06\\right)^{6-1}}",
    "formulaSymbols": "A = equal payment; P_d = down payment; i = effective rate per payment period; k = first payment period; n = number of periods or useful life",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Find the present-worth factor",
        "explanation": "Use i=0.06 (6.000000% per payment period) and n=10. Multiply an equal payment by this factor to obtain its value one period before the first payment.",
        "calculationMath": "\\frac{1-(1+0.06)^{-10}}{0.06} = 7.36008705",
        "intermediateValue": 7.360087051414703
      },
      {
        "step": 2,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "8000\\times(7.36008705) = 58880.69641132",
        "intermediateValue": 58880.69641131762
      },
      {
        "step": 3,
        "title": "Calculate the growth or remaining-value factor",
        "explanation": "Apply the exponent for the stated number of periods; a negative exponent discounts rather than accumulates.",
        "calculationMath": "\\left(1.06\\right)^{5} = 1.33822558",
        "intermediateValue": 1.3382255776000003
      },
      {
        "step": 4,
        "title": "Divide to find the required ratio",
        "explanation": "Keep the entire denominator grouped; use the full-precision result.",
        "calculationMath": "\\frac{58880.69641132}{1.33822558} = 43999.0816174",
        "intermediateValue": 43999.081617402204
      },
      {
        "step": 5,
        "title": "Combine the amounts",
        "explanation": "Add the components represented in the substituted expression.",
        "calculationMath": "100000+(43999.0816174) = 143999.0816174",
        "intermediateValue": 143999.0816174022
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
    "given": [
      {
        "symbol": "",
        "meaning": "Annual receipt",
        "value": "$2,000"
      },
      {
        "symbol": "",
        "meaning": "Receipts",
        "value": "3"
      },
      {
        "symbol": "",
        "meaning": "First receipt",
        "value": "Year 4"
      },
      {
        "symbol": "",
        "meaning": "Interest",
        "value": "4% yearly"
      }
    ],
    "governingFormula": "P_{0}=\\frac{A\\times \\frac{1-\\left(1+i\\right)^{-n}}{i}}{\\left(1+i\\right)^{k-1}}",
    "substitutionMath": "P_{0}=\\frac{2000\\times \\frac{1-\\left(1+0.04\\right)^{-3}}{0.04}}{\\left(1+0.04\\right)^{4-1}}",
    "formulaSymbols": "A = equal payment; i = effective rate per payment period; k = first payment period; n = number of periods or useful life",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Find the present-worth factor",
        "explanation": "Use i=0.04 (4.000000% per payment period) and n=3. Multiply an equal payment by this factor to obtain its value one period before the first payment.",
        "calculationMath": "\\frac{1-(1+0.04)^{-3}}{0.04} = 2.77509103",
        "intermediateValue": 2.775091033227131
      },
      {
        "step": 2,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "2000\\times(2.77509103) = 5550.18206645",
        "intermediateValue": 5550.182066454262
      },
      {
        "step": 3,
        "title": "Calculate the growth or remaining-value factor",
        "explanation": "Apply the exponent for the stated number of periods; a negative exponent discounts rather than accumulates.",
        "calculationMath": "\\left(1.04\\right)^{3} = 1.124864",
        "intermediateValue": 1.124864
      },
      {
        "step": 4,
        "title": "Divide to find the required ratio",
        "explanation": "Keep the entire denominator grouped; use the full-precision result.",
        "calculationMath": "\\frac{5550.18206645}{1.124864} = 4934.09164704",
        "intermediateValue": 4934.091647038452
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
    "given": [
      {
        "symbol": "",
        "meaning": "Year-end receipt",
        "value": "$5,000"
      },
      {
        "symbol": "",
        "meaning": "Annual interest",
        "value": "10%"
      },
      {
        "symbol": "",
        "meaning": "Horizon",
        "value": "Forever"
      }
    ],
    "governingFormula": "P=\\frac{A}{i}",
    "substitutionMath": "P=\\frac{5000}{0.1}",
    "formulaSymbols": "A = equal payment; i = effective rate per payment period",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Divide to find the required ratio",
        "explanation": "Keep the entire denominator grouped; use the full-precision result.",
        "calculationMath": "\\frac{5000}{0.1} = 50000",
        "intermediateValue": 50000.0
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
    "given": [
      {
        "symbol": "",
        "meaning": "Annual receipt",
        "value": "$1,000"
      },
      {
        "symbol": "",
        "meaning": "Interest",
        "value": "8%"
      },
      {
        "symbol": "",
        "meaning": "First receipt",
        "value": "End of year 5"
      },
      {
        "symbol": "",
        "meaning": "Horizon",
        "value": "Forever"
      }
    ],
    "governingFormula": "P_{0}=\\frac{A}{i\\times \\left(1+i\\right)^{k-1}}",
    "substitutionMath": "P_{0}=\\frac{1000}{0.08\\times \\left(1+0.08\\right)^{5-1}}",
    "formulaSymbols": "A = equal payment; i = effective rate per payment period; k = first payment period",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Divide to find the required ratio",
        "explanation": "Keep the entire denominator grouped; use the full-precision result.",
        "calculationMath": "\\frac{1000}{0.08} = 12500",
        "intermediateValue": 12500.0
      },
      {
        "step": 2,
        "title": "Calculate the growth or remaining-value factor",
        "explanation": "Apply the exponent for the stated number of periods; a negative exponent discounts rather than accumulates.",
        "calculationMath": "\\left(1.08\\right)^{4} = 1.36048896",
        "intermediateValue": 1.3604889600000003
      },
      {
        "step": 3,
        "title": "Divide to find the required ratio",
        "explanation": "Keep the entire denominator grouped; use the full-precision result.",
        "calculationMath": "\\frac{12500}{1.36048896} = 9187.87315996",
        "intermediateValue": 9187.873159955665
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
    "given": [
      {
        "symbol": "",
        "meaning": "Year-end receipt",
        "value": "$2,000"
      },
      {
        "symbol": "",
        "meaning": "Nominal rate",
        "value": "10% compounded quarterly"
      },
      {
        "symbol": "",
        "meaning": "Horizon",
        "value": "Forever"
      }
    ],
    "governingFormula": "P=\\frac{A}{\\left(1+\\frac{r}{m}\\right)^{m}-1}",
    "substitutionMath": "P=\\frac{2000}{\\left(1+\\frac{0.1}{4}\\right)^{4}-1}",
    "formulaSymbols": "A = equal payment; m = compounding periods per year; r = annual interest rate",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Calculate the growth or remaining-value factor",
        "explanation": "Apply the exponent for the stated number of periods; a negative exponent discounts rather than accumulates.",
        "calculationMath": "\\left(1.025\\right)^{4} = 1.10381289",
        "intermediateValue": 1.1038128906249995
      },
      {
        "step": 2,
        "title": "Subtract the stated amounts",
        "explanation": "Subtract in this order; the order matters for cost, interest, or remaining book value.",
        "calculationMath": "1.10381289-(1) = 0.10381289",
        "intermediateValue": 0.10381289062499954
      },
      {
        "step": 3,
        "title": "Divide to find the required ratio",
        "explanation": "Keep the entire denominator grouped; use the full-precision result.",
        "calculationMath": "\\frac{2000}{0.10381289} = 19265.43021738",
        "intermediateValue": 19265.430217375848
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
    "given": [
      {
        "symbol": "",
        "meaning": "Year-end receipt",
        "value": "$10,000"
      },
      {
        "symbol": "",
        "meaning": "Interest",
        "value": "10% yearly"
      },
      {
        "symbol": "",
        "meaning": "Horizon",
        "value": "Forever"
      }
    ],
    "governingFormula": "P=\\frac{A}{i}",
    "substitutionMath": "P=\\frac{10000}{0.1}",
    "formulaSymbols": "A = equal payment; i = effective rate per payment period",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Divide to find the required ratio",
        "explanation": "Keep the entire denominator grouped; use the full-precision result.",
        "calculationMath": "\\frac{10000}{0.1} = 100000",
        "intermediateValue": 100000.0
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
    "given": [
      {
        "symbol": "",
        "meaning": "Present worth",
        "value": "$1,000"
      },
      {
        "symbol": "",
        "meaning": "Periodic interest",
        "value": "15.5%"
      },
      {
        "symbol": "",
        "meaning": "Horizon",
        "value": "Forever"
      },
      {
        "symbol": "",
        "meaning": "Find",
        "value": "Periodic payment"
      }
    ],
    "governingFormula": "A=P\\times i",
    "substitutionMath": "A=1000\\times 0.155",
    "formulaSymbols": "P = principal or present worth; i = effective rate per payment period",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "1000\\times(0.155) = 155",
        "intermediateValue": 155.0
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
    "given": [
      {
        "symbol": "",
        "meaning": "Semiannual receipt",
        "value": "$15,000"
      },
      {
        "symbol": "",
        "meaning": "Nominal rate",
        "value": "8% compounded quarterly"
      },
      {
        "symbol": "",
        "meaning": "Horizon",
        "value": "Forever"
      }
    ],
    "governingFormula": "P=\\frac{A}{\\left(1+i\\right)^{h}-1}",
    "substitutionMath": "P=\\frac{15000}{\\left(1+0.02\\right)^{2}-1}",
    "formulaSymbols": "A = equal payment; h = elapsed intervals; i = effective rate per payment period",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Calculate the growth or remaining-value factor",
        "explanation": "Apply the exponent for the stated number of periods; a negative exponent discounts rather than accumulates.",
        "calculationMath": "\\left(1.02\\right)^{2} = 1.0404",
        "intermediateValue": 1.0404
      },
      {
        "step": 2,
        "title": "Subtract the stated amounts",
        "explanation": "Subtract in this order; the order matters for cost, interest, or remaining book value.",
        "calculationMath": "1.0404-(1) = 0.0404",
        "intermediateValue": 0.04039999999999999
      },
      {
        "step": 3,
        "title": "Divide to find the required ratio",
        "explanation": "Keep the entire denominator grouped; use the full-precision result.",
        "calculationMath": "\\frac{15000}{0.0404} = 371287.12871287",
        "intermediateValue": 371287.12871287134
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
    "given": [
      {
        "symbol": "",
        "meaning": "Cost",
        "value": "$10,000"
      },
      {
        "symbol": "",
        "meaning": "Salvage",
        "value": "$500"
      },
      {
        "symbol": "",
        "meaning": "Life",
        "value": "10 years"
      },
      {
        "symbol": "",
        "meaning": "Method",
        "value": "Straight line"
      }
    ],
    "governingFormula": "D=\\frac{C-S}{n}",
    "substitutionMath": "D=\\frac{10000-500}{10}",
    "formulaSymbols": "C = first cost; S = salvage value; n = number of periods or useful life",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Subtract the stated amounts",
        "explanation": "Subtract in this order; the order matters for cost, interest, or remaining book value.",
        "calculationMath": "10000-(500) = 9500",
        "intermediateValue": 9500
      },
      {
        "step": 2,
        "title": "Divide to find the required ratio",
        "explanation": "Keep the entire denominator grouped; use the full-precision result.",
        "calculationMath": "\\frac{9500}{10} = 950",
        "intermediateValue": 950.0
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
    "given": [
      {
        "symbol": "",
        "meaning": "Cost",
        "value": "$10,000"
      },
      {
        "symbol": "",
        "meaning": "Salvage",
        "value": "10% of cost"
      },
      {
        "symbol": "",
        "meaning": "Life",
        "value": "10 years"
      },
      {
        "symbol": "",
        "meaning": "Requested book value",
        "value": "After 6 years"
      }
    ],
    "governingFormula": "BV_{m}=C-\\frac{m\\times \\left(C-S\\right)}{n}",
    "substitutionMath": "BV_{m}=10000-\\frac{6\\times \\left(10000-1000\\right)}{10}",
    "formulaSymbols": "C = first cost; S = salvage value; m = requested depreciation year; n = number of periods or useful life",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Subtract the stated amounts",
        "explanation": "Subtract in this order; the order matters for cost, interest, or remaining book value.",
        "calculationMath": "10000-(1000) = 9000",
        "intermediateValue": 9000
      },
      {
        "step": 2,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "6\\times(9000) = 54000",
        "intermediateValue": 54000
      },
      {
        "step": 3,
        "title": "Divide to find the required ratio",
        "explanation": "Keep the entire denominator grouped; use the full-precision result.",
        "calculationMath": "\\frac{54000}{10} = 5400",
        "intermediateValue": 5400.0
      },
      {
        "step": 4,
        "title": "Subtract the stated amounts",
        "explanation": "Subtract in this order; the order matters for cost, interest, or remaining book value.",
        "calculationMath": "10000-(5400) = 4600",
        "intermediateValue": 4600.0
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
    "shortcutSolution": "The correct charge is $4,666.67; the printed $4,600 is not standard rounding to the shown precision. No printed choice matches the calculated result at its stated precision. The correct computed result is shown above; do not force a letter.",
    "given": [
      {
        "symbol": "",
        "meaning": "Cost",
        "value": "$15,000"
      },
      {
        "symbol": "",
        "meaning": "Salvage",
        "value": "$1,000"
      },
      {
        "symbol": "",
        "meaning": "Life",
        "value": "3 years"
      },
      {
        "symbol": "",
        "meaning": "Method",
        "value": "Straight line"
      }
    ],
    "governingFormula": "D=\\frac{C-S}{n}",
    "substitutionMath": "D=\\frac{15000-1000}{3}",
    "formulaSymbols": "C = first cost; S = salvage value; n = number of periods or useful life",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Subtract the stated amounts",
        "explanation": "Subtract in this order; the order matters for cost, interest, or remaining book value.",
        "calculationMath": "15000-(1000) = 14000",
        "intermediateValue": 14000
      },
      {
        "step": 2,
        "title": "Divide to find the required ratio",
        "explanation": "Keep the entire denominator grouped; use the full-precision result.",
        "calculationMath": "\\frac{14000}{3} = 4666.66666667",
        "intermediateValue": 4666.666666666667
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
    "mentalModelOrTrap": "The correct charge is $4,666.67; the printed $4,600 is not standard rounding to the shown precision. No printed choice matches the calculated result at its stated precision. The correct computed result is shown above; do not force a letter."
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
    "given": [
      {
        "symbol": "",
        "meaning": "Installed cost",
        "value": "₱800,000"
      },
      {
        "symbol": "",
        "meaning": "Gross salvage",
        "value": "₱50,000"
      },
      {
        "symbol": "",
        "meaning": "Dismantling",
        "value": "₱15,000"
      },
      {
        "symbol": "",
        "meaning": "Life",
        "value": "10 years"
      },
      {
        "symbol": "",
        "meaning": "Method",
        "value": "Straight line"
      }
    ],
    "governingFormula": "D=\\frac{C-S+L}{n}",
    "substitutionMath": "D=\\frac{800000-50000+15000}{10}",
    "formulaSymbols": "C = first cost; L = dismantling cost; S = salvage value; n = number of periods or useful life",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Subtract the stated amounts",
        "explanation": "Subtract in this order; the order matters for cost, interest, or remaining book value.",
        "calculationMath": "800000-(50000) = 750000",
        "intermediateValue": 750000
      },
      {
        "step": 2,
        "title": "Combine the amounts",
        "explanation": "Add the components represented in the substituted expression.",
        "calculationMath": "750000+(15000) = 765000",
        "intermediateValue": 765000
      },
      {
        "step": 3,
        "title": "Divide to find the required ratio",
        "explanation": "Keep the entire denominator grouped; use the full-precision result.",
        "calculationMath": "\\frac{765000}{10} = 76500",
        "intermediateValue": 76500.0
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
    "given": [
      {
        "symbol": "",
        "meaning": "Cost",
        "value": "$45,000"
      },
      {
        "symbol": "",
        "meaning": "Salvage",
        "value": "$2,500"
      },
      {
        "symbol": "",
        "meaning": "Life",
        "value": "5 years"
      },
      {
        "symbol": "",
        "meaning": "Find",
        "value": "Annual straight-line charge as percentage of cost"
      }
    ],
    "governingFormula": "d_{percent}=\\frac{\\frac{C-S}{n}}{C}\\times 100",
    "substitutionMath": "d_{percent}=\\frac{\\frac{45000-2500}{5}}{45000}\\times 100",
    "formulaSymbols": "C = first cost; S = salvage value; n = number of periods or useful life",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Subtract the stated amounts",
        "explanation": "Subtract in this order; the order matters for cost, interest, or remaining book value.",
        "calculationMath": "45000-(2500) = 42500",
        "intermediateValue": 42500
      },
      {
        "step": 2,
        "title": "Divide to find the required ratio",
        "explanation": "Keep the entire denominator grouped; use the full-precision result.",
        "calculationMath": "\\frac{42500}{5} = 8500",
        "intermediateValue": 8500.0
      },
      {
        "step": 3,
        "title": "Divide to find the required ratio",
        "explanation": "Keep the entire denominator grouped; use the full-precision result.",
        "calculationMath": "\\frac{8500}{45000} = 0.18888889",
        "intermediateValue": 0.18888888888888888
      },
      {
        "step": 4,
        "title": "Convert the decimal rate to percent",
        "explanation": "Multiplying a decimal rate by 100 expresses the same rate as a percentage.",
        "calculationMath": "0.18888889\\times(100) = 18.88888889",
        "intermediateValue": 18.88888888888889
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
    "given": [
      {
        "symbol": "",
        "meaning": "Cost",
        "value": "$900,000"
      },
      {
        "symbol": "",
        "meaning": "Salvage",
        "value": "$200,000"
      },
      {
        "symbol": "",
        "meaning": "Life",
        "value": "8 years"
      },
      {
        "symbol": "",
        "meaning": "Elapsed life",
        "value": "5 years"
      },
      {
        "symbol": "",
        "meaning": "Method",
        "value": "Straight line"
      }
    ],
    "governingFormula": "BV_{m}=C-\\frac{m\\times \\left(C-S\\right)}{n}",
    "substitutionMath": "BV_{m}=900000-\\frac{5\\times \\left(900000-200000\\right)}{8}",
    "formulaSymbols": "C = first cost; S = salvage value; m = requested depreciation year; n = number of periods or useful life",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Subtract the stated amounts",
        "explanation": "Subtract in this order; the order matters for cost, interest, or remaining book value.",
        "calculationMath": "900000-(200000) = 700000",
        "intermediateValue": 700000
      },
      {
        "step": 2,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "5\\times(700000) = 3500000",
        "intermediateValue": 3500000
      },
      {
        "step": 3,
        "title": "Divide to find the required ratio",
        "explanation": "Keep the entire denominator grouped; use the full-precision result.",
        "calculationMath": "\\frac{3500000}{8} = 437500",
        "intermediateValue": 437500.0
      },
      {
        "step": 4,
        "title": "Subtract the stated amounts",
        "explanation": "Subtract in this order; the order matters for cost, interest, or remaining book value.",
        "calculationMath": "900000-(437500) = 462500",
        "intermediateValue": 462500.0
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
    "given": [
      {
        "symbol": "",
        "meaning": "Cost",
        "value": "$200,000"
      },
      {
        "symbol": "",
        "meaning": "Salvage",
        "value": "$25,000"
      },
      {
        "symbol": "",
        "meaning": "Life",
        "value": "20 years"
      },
      {
        "symbol": "",
        "meaning": "Elapsed life",
        "value": "12 years"
      },
      {
        "symbol": "",
        "meaning": "Method",
        "value": "Straight line"
      }
    ],
    "governingFormula": "BV_{m}=C-\\frac{m\\times \\left(C-S\\right)}{n}",
    "substitutionMath": "BV_{m}=200000-\\frac{12\\times \\left(200000-25000\\right)}{20}",
    "formulaSymbols": "C = first cost; S = salvage value; m = requested depreciation year; n = number of periods or useful life",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Subtract the stated amounts",
        "explanation": "Subtract in this order; the order matters for cost, interest, or remaining book value.",
        "calculationMath": "200000-(25000) = 175000",
        "intermediateValue": 175000
      },
      {
        "step": 2,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "12\\times(175000) = 2100000",
        "intermediateValue": 2100000
      },
      {
        "step": 3,
        "title": "Divide to find the required ratio",
        "explanation": "Keep the entire denominator grouped; use the full-precision result.",
        "calculationMath": "\\frac{2100000}{20} = 105000",
        "intermediateValue": 105000.0
      },
      {
        "step": 4,
        "title": "Subtract the stated amounts",
        "explanation": "Subtract in this order; the order matters for cost, interest, or remaining book value.",
        "calculationMath": "200000-(105000) = 95000",
        "intermediateValue": 95000.0
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
    "given": [
      {
        "symbol": "",
        "meaning": "Cost",
        "value": "₱500,000"
      },
      {
        "symbol": "",
        "meaning": "Salvage",
        "value": "₱100,000"
      },
      {
        "symbol": "",
        "meaning": "Life",
        "value": "25 years"
      },
      {
        "symbol": "",
        "meaning": "Requested total depreciation",
        "value": "First 3 years"
      }
    ],
    "governingFormula": "TD_{m}=\\frac{m\\times \\left(C-S\\right)}{n}",
    "substitutionMath": "TD_{m}=\\frac{3\\times \\left(500000-100000\\right)}{25}",
    "formulaSymbols": "C = first cost; S = salvage value; m = requested depreciation year; n = number of periods or useful life",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Subtract the stated amounts",
        "explanation": "Subtract in this order; the order matters for cost, interest, or remaining book value.",
        "calculationMath": "500000-(100000) = 400000",
        "intermediateValue": 400000
      },
      {
        "step": 2,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "3\\times(400000) = 1200000",
        "intermediateValue": 1200000
      },
      {
        "step": 3,
        "title": "Divide to find the required ratio",
        "explanation": "Keep the entire denominator grouped; use the full-precision result.",
        "calculationMath": "\\frac{1200000}{25} = 48000",
        "intermediateValue": 48000.0
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
    "given": [
      {
        "symbol": "",
        "meaning": "Purchase cost",
        "value": "₱500,000"
      },
      {
        "symbol": "",
        "meaning": "Installation",
        "value": "₱30,000"
      },
      {
        "symbol": "",
        "meaning": "Salvage",
        "value": "10% of installed first cost"
      },
      {
        "symbol": "",
        "meaning": "Life",
        "value": "10 years"
      },
      {
        "symbol": "",
        "meaning": "Elapsed life",
        "value": "5 years"
      }
    ],
    "governingFormula": "BV_{m}=C-\\frac{m\\times \\left(C-S\\right)}{n}",
    "substitutionMath": "BV_{m}=530000-\\frac{5\\times \\left(530000-53000\\right)}{10}",
    "formulaSymbols": "C = first cost; S = salvage value; m = requested depreciation year; n = number of periods or useful life",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Subtract the stated amounts",
        "explanation": "Subtract in this order; the order matters for cost, interest, or remaining book value.",
        "calculationMath": "530000-(53000) = 477000",
        "intermediateValue": 477000
      },
      {
        "step": 2,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "5\\times(477000) = 2385000",
        "intermediateValue": 2385000
      },
      {
        "step": 3,
        "title": "Divide to find the required ratio",
        "explanation": "Keep the entire denominator grouped; use the full-precision result.",
        "calculationMath": "\\frac{2385000}{10} = 238500",
        "intermediateValue": 238500.0
      },
      {
        "step": 4,
        "title": "Subtract the stated amounts",
        "explanation": "Subtract in this order; the order matters for cost, interest, or remaining book value.",
        "calculationMath": "530000-(238500) = 291500",
        "intermediateValue": 291500.0
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
    "given": [
      {
        "symbol": "",
        "meaning": "Cost",
        "value": "₱45,000"
      },
      {
        "symbol": "",
        "meaning": "Salvage",
        "value": "₱2,500"
      },
      {
        "symbol": "",
        "meaning": "Life",
        "value": "5 years"
      },
      {
        "symbol": "",
        "meaning": "Find",
        "value": "Annual straight-line rate"
      }
    ],
    "governingFormula": "d_{percent}=\\frac{\\frac{C-S}{n}}{C}\\times 100",
    "substitutionMath": "d_{percent}=\\frac{\\frac{45000-2500}{5}}{45000}\\times 100",
    "formulaSymbols": "C = first cost; S = salvage value; n = number of periods or useful life",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Subtract the stated amounts",
        "explanation": "Subtract in this order; the order matters for cost, interest, or remaining book value.",
        "calculationMath": "45000-(2500) = 42500",
        "intermediateValue": 42500
      },
      {
        "step": 2,
        "title": "Divide to find the required ratio",
        "explanation": "Keep the entire denominator grouped; use the full-precision result.",
        "calculationMath": "\\frac{42500}{5} = 8500",
        "intermediateValue": 8500.0
      },
      {
        "step": 3,
        "title": "Divide to find the required ratio",
        "explanation": "Keep the entire denominator grouped; use the full-precision result.",
        "calculationMath": "\\frac{8500}{45000} = 0.18888889",
        "intermediateValue": 0.18888888888888888
      },
      {
        "step": 4,
        "title": "Convert the decimal rate to percent",
        "explanation": "Multiplying a decimal rate by 100 expresses the same rate as a percentage.",
        "calculationMath": "0.18888889\\times(100) = 18.88888889",
        "intermediateValue": 18.88888888888889
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
    "given": [
      {
        "symbol": "",
        "meaning": "Cost",
        "value": "₱10,000"
      },
      {
        "symbol": "",
        "meaning": "Salvage",
        "value": "₱500"
      },
      {
        "symbol": "",
        "meaning": "Life",
        "value": "10 years"
      },
      {
        "symbol": "",
        "meaning": "Fund interest",
        "value": "4%"
      },
      {
        "symbol": "",
        "meaning": "Find",
        "value": "Annual fund deposit"
      }
    ],
    "governingFormula": "A=\\left(C-S\\right)\\times \\frac{i}{\\left(1+i\\right)^{n}-1}",
    "substitutionMath": "A=\\left(10000-500\\right)\\times \\frac{0.04}{\\left(1+0.04\\right)^{10}-1}",
    "formulaSymbols": "C = first cost; S = salvage value; i = effective rate per payment period; n = number of periods or useful life",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Find the savings-deposit factor",
        "explanation": "Use i=0.04 (4.000000% per payment period) and n=10. Multiply the future target by this factor to obtain each period-end deposit.",
        "calculationMath": "\\frac{0.04}{(1+0.04)^{10}-1} = 0.08329094",
        "intermediateValue": 0.08329094433013644
      },
      {
        "step": 2,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "9500\\times(0.08329094) = 791.26397114",
        "intermediateValue": 791.2639711362962
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
    "given": [
      {
        "symbol": "",
        "meaning": "Cost",
        "value": "$30,000"
      },
      {
        "symbol": "",
        "meaning": "Sale/salvage",
        "value": "$10,000"
      },
      {
        "symbol": "",
        "meaning": "Life",
        "value": "5 years"
      },
      {
        "symbol": "",
        "meaning": "Interest",
        "value": "8%"
      },
      {
        "symbol": "",
        "meaning": "Method",
        "value": "Sinking-fund annual cost"
      }
    ],
    "governingFormula": "AC=\\left(C-S\\right)\\times \\frac{i}{\\left(1+i\\right)^{n}-1}+C\\times i",
    "substitutionMath": "AC=\\left(30000-10000\\right)\\times \\frac{0.08}{\\left(1+0.08\\right)^{5}-1}+30000\\times 0.08",
    "formulaSymbols": "C = first cost; S = salvage value; i = effective rate per payment period; n = number of periods or useful life",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Find the savings-deposit factor",
        "explanation": "Use i=0.08 (8.000000% per payment period) and n=5. Multiply the future target by this factor to obtain each period-end deposit.",
        "calculationMath": "\\frac{0.08}{(1+0.08)^{5}-1} = 0.17045645",
        "intermediateValue": 0.17045645456683642
      },
      {
        "step": 2,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "20000\\times(0.17045645) = 3409.12909134",
        "intermediateValue": 3409.1290913367284
      },
      {
        "step": 3,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "30000\\times(0.08) = 2400",
        "intermediateValue": 2400.0
      },
      {
        "step": 4,
        "title": "Combine the amounts",
        "explanation": "Add the components represented in the substituted expression.",
        "calculationMath": "3409.12909134+(2400) = 5809.12909134",
        "intermediateValue": 5809.129091336728
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
    "given": [
      {
        "symbol": "",
        "meaning": "Cost",
        "value": "$20,000"
      },
      {
        "symbol": "",
        "meaning": "Salvage",
        "value": "$2,000"
      },
      {
        "symbol": "",
        "meaning": "Life",
        "value": "10 years"
      },
      {
        "symbol": "",
        "meaning": "Fund interest",
        "value": "4%"
      }
    ],
    "governingFormula": "A=\\left(C-S\\right)\\times \\frac{i}{\\left(1+i\\right)^{n}-1}",
    "substitutionMath": "A=\\left(20000-2000\\right)\\times \\frac{0.04}{\\left(1+0.04\\right)^{10}-1}",
    "formulaSymbols": "C = first cost; S = salvage value; i = effective rate per payment period; n = number of periods or useful life",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Find the savings-deposit factor",
        "explanation": "Use i=0.04 (4.000000% per payment period) and n=10. Multiply the future target by this factor to obtain each period-end deposit.",
        "calculationMath": "\\frac{0.04}{(1+0.04)^{10}-1} = 0.08329094",
        "intermediateValue": 0.08329094433013644
      },
      {
        "step": 2,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "18000\\times(0.08329094) = 1499.23699794",
        "intermediateValue": 1499.236997942456
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
    "given": [
      {
        "symbol": "",
        "meaning": "Cost",
        "value": "₱9,000"
      },
      {
        "symbol": "",
        "meaning": "Salvage",
        "value": "₱1,000"
      },
      {
        "symbol": "",
        "meaning": "Life",
        "value": "10 years"
      },
      {
        "symbol": "",
        "meaning": "Requested total depreciation",
        "value": "First 3 years"
      },
      {
        "symbol": "",
        "meaning": "Method",
        "value": "SYD"
      }
    ],
    "governingFormula": "TD_{m}=\\frac{\\left(C-S\\right)\\times \\sum_{j=1}^{m}\\left(n-j+1\\right)}{\\frac{n\\times \\left(n+1\\right)}{2}}",
    "substitutionMath": "TD_{m}=\\frac{\\left(9000-1000\\right)\\times \\sum_{j=1}^{3}\\left(10-j+1\\right)}{\\frac{10\\times \\left(10+1\\right)}{2}}",
    "formulaSymbols": "C = first cost; S = salvage value; m = requested depreciation year; n = number of periods or useful life",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Combine the amounts",
        "explanation": "Add the components represented in the substituted expression.",
        "calculationMath": "10+(9) = 19",
        "intermediateValue": 19
      },
      {
        "step": 2,
        "title": "Combine the amounts",
        "explanation": "Add the components represented in the substituted expression.",
        "calculationMath": "19+(8) = 27",
        "intermediateValue": 27
      },
      {
        "step": 3,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "8000\\times(27) = 216000",
        "intermediateValue": 216000
      },
      {
        "step": 4,
        "title": "Divide to find the required ratio",
        "explanation": "Keep the entire denominator grouped; use the full-precision result.",
        "calculationMath": "\\frac{216000}{55} = 3927.27272727",
        "intermediateValue": 3927.2727272727275
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
    "given": [
      {
        "symbol": "",
        "meaning": "Cost",
        "value": "₱10,000"
      },
      {
        "symbol": "",
        "meaning": "Salvage",
        "value": "Zero"
      },
      {
        "symbol": "",
        "meaning": "Life",
        "value": "20 years"
      },
      {
        "symbol": "",
        "meaning": "Requested charge",
        "value": "Year 3"
      },
      {
        "symbol": "",
        "meaning": "Method",
        "value": "SYD"
      }
    ],
    "governingFormula": "D_{m}=\\frac{\\left(C-S\\right)\\times \\left(n-m+1\\right)}{\\frac{n\\times \\left(n+1\\right)}{2}}",
    "substitutionMath": "D_{m}=\\frac{\\left(10000-0\\right)\\times \\left(20-3+1\\right)}{\\frac{20\\times \\left(20+1\\right)}{2}}",
    "formulaSymbols": "C = first cost; S = salvage value; m = compounding periods per year; n = number of periods or useful life",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "10000\\times(18) = 180000",
        "intermediateValue": 180000
      },
      {
        "step": 2,
        "title": "Divide to find the required ratio",
        "explanation": "Keep the entire denominator grouped; use the full-precision result.",
        "calculationMath": "\\frac{180000}{210} = 857.14285714",
        "intermediateValue": 857.1428571428571
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
    "given": [
      {
        "symbol": "",
        "meaning": "Cost",
        "value": "$10,000"
      },
      {
        "symbol": "",
        "meaning": "Salvage",
        "value": "Zero"
      },
      {
        "symbol": "",
        "meaning": "Life",
        "value": "20 years"
      },
      {
        "symbol": "",
        "meaning": "Requested charge",
        "value": "Year 3"
      },
      {
        "symbol": "",
        "meaning": "Method",
        "value": "SYD"
      }
    ],
    "governingFormula": "D_{m}=\\frac{\\left(C-S\\right)\\times \\left(n-m+1\\right)}{\\frac{n\\times \\left(n+1\\right)}{2}}",
    "substitutionMath": "D_{m}=\\frac{\\left(10000-0\\right)\\times \\left(20-3+1\\right)}{\\frac{20\\times \\left(20+1\\right)}{2}}",
    "formulaSymbols": "C = first cost; S = salvage value; m = compounding periods per year; n = number of periods or useful life",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "10000\\times(18) = 180000",
        "intermediateValue": 180000
      },
      {
        "step": 2,
        "title": "Divide to find the required ratio",
        "explanation": "Keep the entire denominator grouped; use the full-precision result.",
        "calculationMath": "\\frac{180000}{210} = 857.14285714",
        "intermediateValue": 857.1428571428571
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
    "given": [
      {
        "symbol": "",
        "meaning": "Cost",
        "value": "₱9,000"
      },
      {
        "symbol": "",
        "meaning": "Salvage",
        "value": "₱1,000"
      },
      {
        "symbol": "",
        "meaning": "Life",
        "value": "10 years"
      },
      {
        "symbol": "",
        "meaning": "Requested book value",
        "value": "After year 1"
      },
      {
        "symbol": "",
        "meaning": "Method",
        "value": "SYD"
      }
    ],
    "governingFormula": "BV_{1}=C-\\frac{\\left(C-S\\right)\\times n}{\\frac{n\\times \\left(n+1\\right)}{2}}",
    "substitutionMath": "BV_{1}=9000-\\frac{\\left(9000-1000\\right)\\times 10}{\\frac{10\\times \\left(10+1\\right)}{2}}",
    "formulaSymbols": "C = first cost; S = salvage value; n = number of periods or useful life",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "8000\\times(10) = 80000",
        "intermediateValue": 80000
      },
      {
        "step": 2,
        "title": "Divide to find the required ratio",
        "explanation": "Keep the entire denominator grouped; use the full-precision result.",
        "calculationMath": "\\frac{80000}{55} = 1454.54545455",
        "intermediateValue": 1454.5454545454545
      },
      {
        "step": 3,
        "title": "Subtract the stated amounts",
        "explanation": "Subtract in this order; the order matters for cost, interest, or remaining book value.",
        "calculationMath": "9000-(1454.54545455) = 7545.45454545",
        "intermediateValue": 7545.454545454546
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
    "given": [
      {
        "symbol": "",
        "meaning": "Cost",
        "value": "$15,000"
      },
      {
        "symbol": "",
        "meaning": "Life",
        "value": "5 years"
      },
      {
        "symbol": "",
        "meaning": "Elapsed life",
        "value": "3 years"
      },
      {
        "symbol": "",
        "meaning": "Assumed salvage",
        "value": "Zero because none is stated"
      },
      {
        "symbol": "",
        "meaning": "Method",
        "value": "SYD"
      }
    ],
    "governingFormula": "BV_{m}=C-\\frac{\\left(C-S\\right)\\times \\sum_{j=1}^{m}\\left(n-j+1\\right)}{\\frac{n\\times \\left(n+1\\right)}{2}}",
    "substitutionMath": "BV_{m}=15000-\\frac{\\left(15000-0\\right)\\times \\sum_{j=1}^{3}\\left(5-j+1\\right)}{\\frac{5\\times \\left(5+1\\right)}{2}}",
    "formulaSymbols": "C = first cost; S = salvage value; m = requested depreciation year; n = number of periods or useful life",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Combine the amounts",
        "explanation": "Add the components represented in the substituted expression.",
        "calculationMath": "5+(4) = 9",
        "intermediateValue": 9
      },
      {
        "step": 2,
        "title": "Combine the amounts",
        "explanation": "Add the components represented in the substituted expression.",
        "calculationMath": "9+(3) = 12",
        "intermediateValue": 12
      },
      {
        "step": 3,
        "title": "Divide to find the required ratio",
        "explanation": "Keep the entire denominator grouped; use the full-precision result.",
        "calculationMath": "\\frac{12}{15} = 0.8",
        "intermediateValue": 0.8
      },
      {
        "step": 4,
        "title": "Subtract the stated amounts",
        "explanation": "Subtract in this order; the order matters for cost, interest, or remaining book value.",
        "calculationMath": "1-(0.8) = 0.2",
        "intermediateValue": 0.19999999999999996
      },
      {
        "step": 5,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "15000\\times(0.2) = 3000",
        "intermediateValue": 2999.9999999999995
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
    "given": [
      {
        "symbol": "",
        "meaning": "Cost",
        "value": "$9,000"
      },
      {
        "symbol": "",
        "meaning": "Salvage",
        "value": "$1,000"
      },
      {
        "symbol": "",
        "meaning": "Life",
        "value": "10 years"
      },
      {
        "symbol": "",
        "meaning": "Requested total depreciation",
        "value": "First 4 years"
      },
      {
        "symbol": "",
        "meaning": "Method",
        "value": "SYD"
      }
    ],
    "governingFormula": "TD_{m}=\\frac{\\left(C-S\\right)\\times \\sum_{j=1}^{m}\\left(n-j+1\\right)}{\\frac{n\\times \\left(n+1\\right)}{2}}",
    "substitutionMath": "TD_{m}=\\frac{\\left(9000-1000\\right)\\times \\sum_{j=1}^{4}\\left(10-j+1\\right)}{\\frac{10\\times \\left(10+1\\right)}{2}}",
    "formulaSymbols": "C = first cost; S = salvage value; m = requested depreciation year; n = number of periods or useful life",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Combine the amounts",
        "explanation": "Add the components represented in the substituted expression.",
        "calculationMath": "10+(9) = 19",
        "intermediateValue": 19
      },
      {
        "step": 2,
        "title": "Combine the amounts",
        "explanation": "Add the components represented in the substituted expression.",
        "calculationMath": "19+(8) = 27",
        "intermediateValue": 27
      },
      {
        "step": 3,
        "title": "Combine the amounts",
        "explanation": "Add the components represented in the substituted expression.",
        "calculationMath": "27+(7) = 34",
        "intermediateValue": 34
      },
      {
        "step": 4,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "8000\\times(34) = 272000",
        "intermediateValue": 272000
      },
      {
        "step": 5,
        "title": "Divide to find the required ratio",
        "explanation": "Keep the entire denominator grouped; use the full-precision result.",
        "calculationMath": "\\frac{272000}{55} = 4945.45454545",
        "intermediateValue": 4945.454545454545
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
    "given": [
      {
        "symbol": "",
        "meaning": "Cost",
        "value": "₱50,000"
      },
      {
        "symbol": "",
        "meaning": "Annual DB rate",
        "value": "20%"
      },
      {
        "symbol": "",
        "meaning": "Elapsed life",
        "value": "9 years"
      }
    ],
    "governingFormula": "BV_{m}=C\\times \\left(1-k\\right)^{m}",
    "substitutionMath": "BV_{m}=50000\\times \\left(1-0.2\\right)^{9}",
    "formulaSymbols": "C = first cost; k = annual depreciation fraction; m = requested depreciation year",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Calculate the growth or remaining-value factor",
        "explanation": "Apply the exponent for the stated number of periods; a negative exponent discounts rather than accumulates.",
        "calculationMath": "\\left(0.8\\right)^{9} = 0.13421773",
        "intermediateValue": 0.13421772800000006
      },
      {
        "step": 2,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "50000\\times(0.13421773) = 6710.8864",
        "intermediateValue": 6710.886400000003
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
    "given": [
      {
        "symbol": "",
        "meaning": "Cost",
        "value": "$480,000"
      },
      {
        "symbol": "",
        "meaning": "Salvage",
        "value": "10% of cost"
      },
      {
        "symbol": "",
        "meaning": "Life",
        "value": "12 years"
      },
      {
        "symbol": "",
        "meaning": "Elapsed life",
        "value": "5 years"
      },
      {
        "symbol": "",
        "meaning": "Method",
        "value": "Salvage-derived declining balance"
      }
    ],
    "governingFormula": "BV_{m}=C\\times \\left(\\frac{S}{C}\\right)^{\\frac{m}{n}}",
    "substitutionMath": "BV_{m}=480000\\times \\left(\\frac{48000}{480000}\\right)^{\\frac{5}{12}}",
    "formulaSymbols": "C = first cost; S = salvage value; m = requested depreciation year; n = number of periods or useful life",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Divide to find the required ratio",
        "explanation": "Keep the entire denominator grouped; use the full-precision result.",
        "calculationMath": "\\frac{5}{12} = 0.41666667",
        "intermediateValue": 0.4166666666666667
      },
      {
        "step": 2,
        "title": "Calculate the growth or remaining-value factor",
        "explanation": "Apply the exponent for the stated number of periods; a negative exponent discounts rather than accumulates.",
        "calculationMath": "\\left(0.1\\right)^{0.41666667} = 0.38311868",
        "intermediateValue": 0.38311868495572876
      },
      {
        "step": 3,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "480000\\times(0.38311868) = 183896.96877875",
        "intermediateValue": 183896.9687787498
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
    "given": [
      {
        "symbol": "",
        "meaning": "Cost",
        "value": "₱90,000"
      },
      {
        "symbol": "",
        "meaning": "Salvage floor",
        "value": "₱18,000"
      },
      {
        "symbol": "",
        "meaning": "Life",
        "value": "8 years"
      },
      {
        "symbol": "",
        "meaning": "Elapsed life",
        "value": "5 years"
      },
      {
        "symbol": "",
        "meaning": "Method",
        "value": "Double declining balance"
      }
    ],
    "governingFormula": "\\begin{gathered}BV_{m}=C\\times \\left(1-\\frac{2}{n}\\right)^{m}\\\\TD_m=C-C\\times \\left(1-\\frac{2}{n}\\right)^{m}\\end{gathered}",
    "substitutionMath": "\\begin{gathered}BV_{m}=90000\\times \\left(1-\\frac{2}{8}\\right)^{5}\\\\TD_m=90000-90000\\times \\left(1-\\frac{2}{8}\\right)^{5}\\end{gathered}",
    "formulaSymbols": "C = first cost; m = requested depreciation year; n = number of periods or useful life",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Calculate the growth or remaining-value factor",
        "explanation": "Apply the exponent for the stated number of periods; a negative exponent discounts rather than accumulates.",
        "calculationMath": "\\left(0.75\\right)^{5} = 0.23730469",
        "intermediateValue": 0.2373046875
      },
      {
        "step": 2,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "90000\\times(0.23730469) = 21357.421875",
        "intermediateValue": 21357.421875
      },
      {
        "step": 3,
        "title": "Find accumulated depreciation",
        "explanation": "Book value is the remaining amount. Subtract it from original cost to get total depreciation.",
        "calculationMath": "90000-21357.421875 = 68642.578125",
        "intermediateValue": 68642.578125
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
    "given": [
      {
        "symbol": "",
        "meaning": "Cost",
        "value": "₱720,000"
      },
      {
        "symbol": "",
        "meaning": "Salvage",
        "value": "₱40,545.73"
      },
      {
        "symbol": "",
        "meaning": "Life",
        "value": "10 years"
      },
      {
        "symbol": "",
        "meaning": "Method",
        "value": "Constant-percentage declining balance"
      }
    ],
    "governingFormula": "k_{percent}=\\left(1-\\left(\\frac{S}{C}\\right)^{\\frac{1}{n}}\\right)\\times 100",
    "substitutionMath": "k_{percent}=\\left(1-\\left(\\frac{40545.73}{720000}\\right)^{\\frac{1}{10}}\\right)\\times 100",
    "formulaSymbols": "C = first cost; S = salvage value; n = number of periods or useful life",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Divide to find the required ratio",
        "explanation": "Keep the entire denominator grouped; use the full-precision result.",
        "calculationMath": "\\frac{40545.73}{720000} = 0.05631351",
        "intermediateValue": 0.056313513888888896
      },
      {
        "step": 2,
        "title": "Calculate the growth or remaining-value factor",
        "explanation": "Apply the exponent for the stated number of periods; a negative exponent discounts rather than accumulates.",
        "calculationMath": "\\left(0.05631351\\right)^{0.1} = 0.75",
        "intermediateValue": 0.7499999989071223
      },
      {
        "step": 3,
        "title": "Subtract the stated amounts",
        "explanation": "Subtract in this order; the order matters for cost, interest, or remaining book value.",
        "calculationMath": "1-(0.75) = 0.25",
        "intermediateValue": 0.2500000010928777
      },
      {
        "step": 4,
        "title": "Convert the decimal rate to percent",
        "explanation": "Multiplying a decimal rate by 100 expresses the same rate as a percentage.",
        "calculationMath": "0.25\\times(100) = 25.00000011",
        "intermediateValue": 25.000000109287768
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
    "given": [
      {
        "symbol": "",
        "meaning": "Inflation",
        "value": "9% yearly"
      },
      {
        "symbol": "",
        "meaning": "Real cost of money",
        "value": "15% yearly"
      },
      {
        "symbol": "",
        "meaning": "Find",
        "value": "Combined nominal rate"
      }
    ],
    "governingFormula": "i_{nominal,percent}=\\left(\\left(1+f\\right)\\times \\left(1+i_{real}\\right)-1\\right)\\times 100",
    "substitutionMath": "i_{nominal,percent}=\\left(\\left(1+0.09\\right)\\times \\left(1+0.15\\right)-1\\right)\\times 100",
    "formulaSymbols": "f = annual inflation rate; i_real = real annual rate",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "1.09\\times(1.15) = 1.2535",
        "intermediateValue": 1.2535
      },
      {
        "step": 2,
        "title": "Subtract the stated amounts",
        "explanation": "Subtract in this order; the order matters for cost, interest, or remaining book value.",
        "calculationMath": "1.2535-(1) = 0.2535",
        "intermediateValue": 0.25350000000000006
      },
      {
        "step": 3,
        "title": "Convert the decimal rate to percent",
        "explanation": "Multiplying a decimal rate by 100 expresses the same rate as a percentage.",
        "calculationMath": "0.2535\\times(100) = 25.35",
        "intermediateValue": 25.350000000000005
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
    "given": [
      {
        "symbol": "",
        "meaning": "Current price",
        "value": "$100"
      },
      {
        "symbol": "",
        "meaning": "Inflation",
        "value": "7% yearly"
      },
      {
        "symbol": "",
        "meaning": "Time",
        "value": "10 years"
      }
    ],
    "governingFormula": "C_{future}=C\\times \\left(1+f\\right)^{t}",
    "substitutionMath": "C_{future}=100\\times \\left(1+0.07\\right)^{10}",
    "formulaSymbols": "C = first cost; f = annual inflation rate; t = time in years",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Calculate the growth or remaining-value factor",
        "explanation": "Apply the exponent for the stated number of periods; a negative exponent discounts rather than accumulates.",
        "calculationMath": "\\left(1.07\\right)^{10} = 1.96715136",
        "intermediateValue": 1.9671513572895665
      },
      {
        "step": 2,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "100\\times(1.96715136) = 196.71513573",
        "intermediateValue": 196.71513572895665
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
    "given": [
      {
        "symbol": "",
        "meaning": "Par purchase and redemption",
        "value": "₱1,000"
      },
      {
        "symbol": "",
        "meaning": "Annual coupon",
        "value": "₱50"
      },
      {
        "symbol": "",
        "meaning": "Life",
        "value": "20 years"
      },
      {
        "symbol": "",
        "meaning": "Inflation",
        "value": "2% yearly"
      }
    ],
    "governingFormula": "i_{real,percent}=\\left(\\frac{1+i}{1+f}-1\\right)\\times 100",
    "substitutionMath": "i_{real,percent}=\\left(\\frac{1+0.05}{1+0.02}-1\\right)\\times 100",
    "formulaSymbols": "f = annual inflation rate; i = effective rate per payment period",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Divide to find the required ratio",
        "explanation": "Keep the entire denominator grouped; use the full-precision result.",
        "calculationMath": "\\frac{1.05}{1.02} = 1.02941176",
        "intermediateValue": 1.0294117647058825
      },
      {
        "step": 2,
        "title": "Subtract the stated amounts",
        "explanation": "Subtract in this order; the order matters for cost, interest, or remaining book value.",
        "calculationMath": "1.02941176-(1) = 0.02941176",
        "intermediateValue": 0.02941176470588247
      },
      {
        "step": 3,
        "title": "Convert the decimal rate to percent",
        "explanation": "Multiplying a decimal rate by 100 expresses the same rate as a percentage.",
        "calculationMath": "0.02941176\\times(100) = 2.94117647",
        "intermediateValue": 2.941176470588247
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
    "given": [
      {
        "symbol": "",
        "meaning": "Inflation",
        "value": "6% yearly"
      },
      {
        "symbol": "",
        "meaning": "Real cost of money",
        "value": "10% yearly"
      },
      {
        "symbol": "",
        "meaning": "Find",
        "value": "Combined nominal rate"
      }
    ],
    "governingFormula": "i_{nominal,percent}=\\left(\\left(1+f\\right)\\times \\left(1+i_{real}\\right)-1\\right)\\times 100",
    "substitutionMath": "i_{nominal,percent}=\\left(\\left(1+0.06\\right)\\times \\left(1+0.1\\right)-1\\right)\\times 100",
    "formulaSymbols": "f = annual inflation rate; i_real = real annual rate",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "1.06\\times(1.1) = 1.166",
        "intermediateValue": 1.1660000000000001
      },
      {
        "step": 2,
        "title": "Subtract the stated amounts",
        "explanation": "Subtract in this order; the order matters for cost, interest, or remaining book value.",
        "calculationMath": "1.166-(1) = 0.166",
        "intermediateValue": 0.16600000000000015
      },
      {
        "step": 3,
        "title": "Convert the decimal rate to percent",
        "explanation": "Multiplying a decimal rate by 100 expresses the same rate as a percentage.",
        "calculationMath": "0.166\\times(100) = 16.6",
        "intermediateValue": 16.600000000000016
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
    "given": [
      {
        "symbol": "",
        "meaning": "Year-end maintenance",
        "value": "$100, $200, $300, $400 in years 1–4"
      },
      {
        "symbol": "",
        "meaning": "Interest",
        "value": "6% yearly"
      }
    ],
    "governingFormula": "EUAC=\\sum_{t=1}^{n}\\left(\\frac{G\\times t}{\\left(1+i\\right)^{t}}\\right)\\times \\frac{i}{1-\\left(1+i\\right)^{-n}}",
    "substitutionMath": "EUAC=\\sum_{t=1}^{4}\\left(\\frac{100\\times t}{\\left(1+0.06\\right)^{t}}\\right)\\times \\frac{0.06}{1-\\left(1+0.06\\right)^{-4}}",
    "formulaSymbols": "G = yearly increase; i = effective rate per payment period; n = number of periods or useful life",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Discount the year-1 cash flow",
        "explanation": "Move this payment back to today using its own payment date.",
        "calculationMath": "\\frac{\\left(100\\right)\\times\\left(1\\right)}{\\left(1.06\\right)^{1}} = 94.33962264",
        "intermediateValue": 94.33962264150944
      },
      {
        "step": 2,
        "title": "Discount the year-2 cash flow",
        "explanation": "Move this payment back to today using its own payment date.",
        "calculationMath": "\\frac{\\left(100\\right)\\times\\left(2\\right)}{\\left(1.06\\right)^{2}} = 177.999288",
        "intermediateValue": 177.99928800284798
      },
      {
        "step": 3,
        "title": "Discount the year-3 cash flow",
        "explanation": "Move this payment back to today using its own payment date.",
        "calculationMath": "\\frac{\\left(100\\right)\\times\\left(3\\right)}{\\left(1.06\\right)^{3}} = 251.88578491",
        "intermediateValue": 251.88578490969053
      },
      {
        "step": 4,
        "title": "Discount the year-4 cash flow",
        "explanation": "Move this payment back to today using its own payment date.",
        "calculationMath": "\\frac{\\left(100\\right)\\times\\left(4\\right)}{\\left(1.06\\right)^{4}} = 316.8374653",
        "intermediateValue": 316.8374652952082
      },
      {
        "step": 5,
        "title": "Add the present values",
        "explanation": "These discounted amounts can now be added because they are all at the same date.",
        "calculationMath": "P=\\sum_t\\frac{C_t}{(1+i)^t} = 841.06216085",
        "intermediateValue": 841.0621608492561
      },
      {
        "step": 6,
        "title": "Find the loan-payment factor",
        "explanation": "Use i=0.06 (6.000000% per payment period) and n=4. Multiply the financed principal by this factor to obtain each period-end payment.",
        "calculationMath": "\\frac{0.06}{1-(1+0.06)^{-4}} = 0.28859149",
        "intermediateValue": 0.28859149237327325
      },
      {
        "step": 7,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "841.06216085\\times(0.28859149) = 242.72338418",
        "intermediateValue": 242.72338417817681
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
    "given": [
      {
        "symbol": "",
        "meaning": "Cost",
        "value": "$100,000"
      },
      {
        "symbol": "",
        "meaning": "Scrap",
        "value": "$5,000"
      },
      {
        "symbol": "",
        "meaning": "Life",
        "value": "10 years"
      },
      {
        "symbol": "",
        "meaning": "Interest",
        "value": "5%"
      },
      {
        "symbol": "",
        "meaning": "Method",
        "value": "Handout straight-line annual cost"
      }
    ],
    "governingFormula": "AC=\\frac{C-S}{n}+C\\times i",
    "substitutionMath": "AC=\\frac{100000-5000}{10}+100000\\times 0.05",
    "formulaSymbols": "C = first cost; S = salvage value; i = effective rate per payment period; n = number of periods or useful life",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Subtract the stated amounts",
        "explanation": "Subtract in this order; the order matters for cost, interest, or remaining book value.",
        "calculationMath": "100000-(5000) = 95000",
        "intermediateValue": 95000
      },
      {
        "step": 2,
        "title": "Divide to find the required ratio",
        "explanation": "Keep the entire denominator grouped; use the full-precision result.",
        "calculationMath": "\\frac{95000}{10} = 9500",
        "intermediateValue": 9500.0
      },
      {
        "step": 3,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "100000\\times(0.05) = 5000",
        "intermediateValue": 5000.0
      },
      {
        "step": 4,
        "title": "Combine the amounts",
        "explanation": "Add the components represented in the substituted expression.",
        "calculationMath": "9500+(5000) = 14500",
        "intermediateValue": 14500.0
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
    "given": [
      {
        "symbol": "",
        "meaning": "Cost",
        "value": "$100,000"
      },
      {
        "symbol": "",
        "meaning": "Life",
        "value": "20 years"
      },
      {
        "symbol": "",
        "meaning": "Interest",
        "value": "6%"
      },
      {
        "symbol": "",
        "meaning": "Assumed salvage",
        "value": "Zero, none stated"
      }
    ],
    "governingFormula": "A=P\\times \\frac{i}{1-\\left(1+i\\right)^{-n}}",
    "substitutionMath": "A=100000\\times \\frac{0.06}{1-\\left(1+0.06\\right)^{-20}}",
    "formulaSymbols": "P = principal or present worth; i = effective rate per payment period; n = number of periods or useful life",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Find the loan-payment factor",
        "explanation": "Use i=0.06 (6.000000% per payment period) and n=20. Multiply the financed principal by this factor to obtain each period-end payment.",
        "calculationMath": "\\frac{0.06}{1-(1+0.06)^{-20}} = 0.08718456",
        "intermediateValue": 0.0871845569768514
      },
      {
        "step": 2,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "100000\\times(0.08718456) = 8718.45569769",
        "intermediateValue": 8718.45569768514
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
    "given": [
      {
        "symbol": "",
        "meaning": "Initial cost",
        "value": "₱500,000"
      },
      {
        "symbol": "",
        "meaning": "Annual maintenance",
        "value": "₱10,000"
      },
      {
        "symbol": "",
        "meaning": "Interest",
        "value": "6%"
      },
      {
        "symbol": "",
        "meaning": "Horizon",
        "value": "Forever"
      }
    ],
    "governingFormula": "CC=C+\\frac{O}{i}",
    "substitutionMath": "CC=500000+\\frac{10000}{0.06}",
    "formulaSymbols": "C = first cost; O = annual operating cost; i = effective rate per payment period",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Divide to find the required ratio",
        "explanation": "Keep the entire denominator grouped; use the full-precision result.",
        "calculationMath": "\\frac{10000}{0.06} = 166666.66666667",
        "intermediateValue": 166666.6666666667
      },
      {
        "step": 2,
        "title": "Combine the amounts",
        "explanation": "Add the components represented in the substituted expression.",
        "calculationMath": "500000+(166666.66666667) = 666666.66666667",
        "intermediateValue": 666666.6666666667
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
    "given": [
      {
        "symbol": "",
        "meaning": "Cost",
        "value": "$50,000"
      },
      {
        "symbol": "",
        "meaning": "Salvage",
        "value": "$2,000"
      },
      {
        "symbol": "",
        "meaning": "Life",
        "value": "10 years"
      },
      {
        "symbol": "",
        "meaning": "Annual maintenance",
        "value": "$1,200"
      },
      {
        "symbol": "",
        "meaning": "Interest",
        "value": "10%"
      },
      {
        "symbol": "",
        "meaning": "Horizon",
        "value": "Repeated service forever"
      }
    ],
    "governingFormula": "CC=C+\\frac{C-S}{\\left(1+i\\right)^{n}-1}+\\frac{O}{i}",
    "substitutionMath": "CC=50000+\\frac{50000-2000}{\\left(1+0.1\\right)^{10}-1}+\\frac{1200}{0.1}",
    "formulaSymbols": "C = first cost; O = annual operating cost; S = salvage value; i = effective rate per payment period; n = number of periods or useful life",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Calculate the growth or remaining-value factor",
        "explanation": "Apply the exponent for the stated number of periods; a negative exponent discounts rather than accumulates.",
        "calculationMath": "\\left(1.1\\right)^{10} = 2.59374246",
        "intermediateValue": 2.5937424601000023
      },
      {
        "step": 2,
        "title": "Subtract the stated amounts",
        "explanation": "Subtract in this order; the order matters for cost, interest, or remaining book value.",
        "calculationMath": "2.59374246-(1) = 1.59374246",
        "intermediateValue": 1.5937424601000023
      },
      {
        "step": 3,
        "title": "Divide to find the required ratio",
        "explanation": "Keep the entire denominator grouped; use the full-precision result.",
        "calculationMath": "\\frac{48000}{1.59374246} = 30117.78954361",
        "intermediateValue": 30117.78954360553
      },
      {
        "step": 4,
        "title": "Combine the amounts",
        "explanation": "Add the components represented in the substituted expression.",
        "calculationMath": "50000+(30117.78954361) = 80117.78954361",
        "intermediateValue": 80117.78954360553
      },
      {
        "step": 5,
        "title": "Divide to find the required ratio",
        "explanation": "Keep the entire denominator grouped; use the full-precision result.",
        "calculationMath": "\\frac{1200}{0.1} = 12000",
        "intermediateValue": 12000.0
      },
      {
        "step": 6,
        "title": "Combine the amounts",
        "explanation": "Add the components represented in the substituted expression.",
        "calculationMath": "80117.78954361+(12000) = 92117.78954361",
        "intermediateValue": 92117.78954360553
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
    "given": [
      {
        "symbol": "",
        "meaning": "Initial cost",
        "value": "$500,000"
      },
      {
        "symbol": "",
        "meaning": "Annual operation and maintenance",
        "value": "$90,000"
      },
      {
        "symbol": "",
        "meaning": "Interest",
        "value": "15%"
      },
      {
        "symbol": "",
        "meaning": "Horizon",
        "value": "Forever"
      }
    ],
    "governingFormula": "CC=C+\\frac{O}{i}",
    "substitutionMath": "CC=500000+\\frac{90000}{0.15}",
    "formulaSymbols": "C = first cost; O = annual operating cost; i = effective rate per payment period",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Divide to find the required ratio",
        "explanation": "Keep the entire denominator grouped; use the full-precision result.",
        "calculationMath": "\\frac{90000}{0.15} = 600000",
        "intermediateValue": 600000.0
      },
      {
        "step": 2,
        "title": "Combine the amounts",
        "explanation": "Add the components represented in the substituted expression.",
        "calculationMath": "500000+(600000) = 1100000",
        "intermediateValue": 1100000.0
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
    "given": [
      {
        "symbol": "",
        "meaning": "Initial cost",
        "value": "$100,000"
      },
      {
        "symbol": "",
        "meaning": "Annual recurring expense",
        "value": "$18,000 under source convention"
      },
      {
        "symbol": "",
        "meaning": "Interest",
        "value": "8%"
      },
      {
        "symbol": "",
        "meaning": "Horizon",
        "value": "Forever"
      }
    ],
    "governingFormula": "CC=C+\\frac{O}{i}",
    "substitutionMath": "CC=100000+\\frac{18000}{0.08}",
    "formulaSymbols": "C = first cost; O = annual operating cost; i = effective rate per payment period",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Divide to find the required ratio",
        "explanation": "Keep the entire denominator grouped; use the full-precision result.",
        "calculationMath": "\\frac{18000}{0.08} = 225000",
        "intermediateValue": 225000.0
      },
      {
        "step": 2,
        "title": "Combine the amounts",
        "explanation": "Add the components represented in the substituted expression.",
        "calculationMath": "100000+(225000) = 325000",
        "intermediateValue": 325000.0
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
    "given": [
      {
        "symbol": "",
        "meaning": "Initial cost",
        "value": "$250 million"
      },
      {
        "symbol": "",
        "meaning": "Rebuilding",
        "value": "$100 million every 20 years"
      },
      {
        "symbol": "",
        "meaning": "Interest",
        "value": "6%"
      },
      {
        "symbol": "",
        "meaning": "Horizon",
        "value": "Forever"
      }
    ],
    "governingFormula": "CC=C+\\frac{R}{\\left(1+i\\right)^{n}-1}",
    "substitutionMath": "CC=250000000+\\frac{100000000}{\\left(1+0.06\\right)^{20}-1}",
    "formulaSymbols": "C = first cost; R = redemption or recurring replacement cost; i = effective rate per payment period; n = number of periods or useful life",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Calculate the growth or remaining-value factor",
        "explanation": "Apply the exponent for the stated number of periods; a negative exponent discounts rather than accumulates.",
        "calculationMath": "\\left(1.06\\right)^{20} = 3.20713547",
        "intermediateValue": 3.207135472212848
      },
      {
        "step": 2,
        "title": "Subtract the stated amounts",
        "explanation": "Subtract in this order; the order matters for cost, interest, or remaining book value.",
        "calculationMath": "3.20713547-(1) = 2.20713547",
        "intermediateValue": 2.207135472212848
      },
      {
        "step": 3,
        "title": "Divide to find the required ratio",
        "explanation": "Keep the entire denominator grouped; use the full-precision result.",
        "calculationMath": "\\frac{100000000}{2.20713547} = 45307594.96141901",
        "intermediateValue": 45307594.96141901
      },
      {
        "step": 4,
        "title": "Combine the amounts",
        "explanation": "Add the components represented in the substituted expression.",
        "calculationMath": "250000000+(45307594.96141901) = 295307594.96141899",
        "intermediateValue": 295307594.961419
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
    "given": [
      {
        "symbol": "",
        "meaning": "Initial cost",
        "value": "$1.5 million"
      },
      {
        "symbol": "",
        "meaning": "Annual maintenance",
        "value": "$150,000"
      },
      {
        "symbol": "",
        "meaning": "Interest",
        "value": "15%"
      },
      {
        "symbol": "",
        "meaning": "Horizon",
        "value": "Forever"
      }
    ],
    "governingFormula": "CC=C+\\frac{O}{i}",
    "substitutionMath": "CC=1500000+\\frac{150000}{0.15}",
    "formulaSymbols": "C = first cost; O = annual operating cost; i = effective rate per payment period",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Divide to find the required ratio",
        "explanation": "Keep the entire denominator grouped; use the full-precision result.",
        "calculationMath": "\\frac{150000}{0.15} = 1000000",
        "intermediateValue": 1000000.0
      },
      {
        "step": 2,
        "title": "Combine the amounts",
        "explanation": "Add the components represented in the substituted expression.",
        "calculationMath": "1500000+(1000000) = 2500000",
        "intermediateValue": 2500000.0
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
    "shortcutSolution": "Assume replacement every 4 years forever. These printed choices do not fit the stated life and values. No printed choice matches the calculated result at its stated precision. The correct computed result is shown above; do not force a letter.",
    "given": [
      {
        "symbol": "",
        "meaning": "Initial cost",
        "value": "₱324,000"
      },
      {
        "symbol": "",
        "meaning": "Salvage",
        "value": "₱50,000"
      },
      {
        "symbol": "",
        "meaning": "Life",
        "value": "4 years"
      },
      {
        "symbol": "",
        "meaning": "Interest",
        "value": "6%"
      },
      {
        "symbol": "",
        "meaning": "Assumption",
        "value": "Repeated replacements forever"
      }
    ],
    "governingFormula": "CC=C+\\frac{C-S}{\\left(1+i\\right)^{n}-1}",
    "substitutionMath": "CC=324000+\\frac{324000-50000}{\\left(1+0.06\\right)^{4}-1}",
    "formulaSymbols": "C = first cost; S = salvage value; i = effective rate per payment period; n = number of periods or useful life",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Calculate the growth or remaining-value factor",
        "explanation": "Apply the exponent for the stated number of periods; a negative exponent discounts rather than accumulates.",
        "calculationMath": "\\left(1.06\\right)^{4} = 1.26247696",
        "intermediateValue": 1.2624769600000003
      },
      {
        "step": 2,
        "title": "Subtract the stated amounts",
        "explanation": "Subtract in this order; the order matters for cost, interest, or remaining book value.",
        "calculationMath": "1.26247696-(1) = 0.26247696",
        "intermediateValue": 0.2624769600000003
      },
      {
        "step": 3,
        "title": "Divide to find the required ratio",
        "explanation": "Keep the entire denominator grouped; use the full-precision result.",
        "calculationMath": "\\frac{274000}{0.26247696} = 1043901.14850461",
        "intermediateValue": 1043901.1485046141
      },
      {
        "step": 4,
        "title": "Combine the amounts",
        "explanation": "Add the components represented in the substituted expression.",
        "calculationMath": "324000+(1043901.14850461) = 1367901.14850461",
        "intermediateValue": 1367901.1485046141
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
    "mentalModelOrTrap": "Assume replacement every 4 years forever. These printed choices do not fit the stated life and values. No printed choice matches the calculated result at its stated precision. The correct computed result is shown above; do not force a letter."
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
    "given": [
      {
        "symbol": "",
        "meaning": "Replacement tractor",
        "value": "$24,000"
      },
      {
        "symbol": "",
        "meaning": "Replacement interval",
        "value": "5 years"
      },
      {
        "symbol": "",
        "meaning": "Interest",
        "value": "6%"
      },
      {
        "symbol": "",
        "meaning": "Assumption",
        "value": "First tractor now, then indefinite replacements"
      }
    ],
    "governingFormula": "CC=C+\\frac{C-S}{\\left(1+i\\right)^{n}-1}",
    "substitutionMath": "CC=24000+\\frac{24000-0}{\\left(1+0.06\\right)^{5}-1}",
    "formulaSymbols": "C = first cost; S = salvage value; i = effective rate per payment period; n = number of periods or useful life",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Calculate the growth or remaining-value factor",
        "explanation": "Apply the exponent for the stated number of periods; a negative exponent discounts rather than accumulates.",
        "calculationMath": "\\left(1.06\\right)^{5} = 1.33822558",
        "intermediateValue": 1.3382255776000003
      },
      {
        "step": 2,
        "title": "Subtract the stated amounts",
        "explanation": "Subtract in this order; the order matters for cost, interest, or remaining book value.",
        "calculationMath": "1.33822558-(1) = 0.33822558",
        "intermediateValue": 0.33822557760000027
      },
      {
        "step": 3,
        "title": "Divide to find the required ratio",
        "explanation": "Keep the entire denominator grouped; use the full-precision result.",
        "calculationMath": "\\frac{24000}{0.33822558} = 70958.56017248",
        "intermediateValue": 70958.56017247579
      },
      {
        "step": 4,
        "title": "Combine the amounts",
        "explanation": "Add the components represented in the substituted expression.",
        "calculationMath": "24000+(70958.56017248) = 94958.56017248",
        "intermediateValue": 94958.56017247579
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
    "given": [
      {
        "symbol": "",
        "meaning": "Bond par",
        "value": "$1,000"
      },
      {
        "symbol": "",
        "meaning": "Annual coupon rate",
        "value": "10%"
      },
      {
        "symbol": "",
        "meaning": "Market price",
        "value": "$1,080"
      },
      {
        "symbol": "",
        "meaning": "Required yield",
        "value": "12%"
      },
      {
        "symbol": "",
        "meaning": "Life",
        "value": "8 years"
      },
      {
        "symbol": "",
        "meaning": "Find",
        "value": "Redemption price"
      }
    ],
    "governingFormula": "R=\\left(Price-K\\times \\frac{1-\\left(1+i\\right)^{-n}}{i}\\right)\\times \\left(1+i\\right)^{n}",
    "substitutionMath": "R=\\left(1080-100\\times \\frac{1-\\left(1+0.12\\right)^{-8}}{0.12}\\right)\\times \\left(1+0.12\\right)^{8}",
    "formulaSymbols": "K = coupon per period; Price = bond price; i = effective rate per payment period; n = number of periods or useful life",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Find the present-worth factor",
        "explanation": "Use i=0.12 (12.000000% per payment period) and n=8. Multiply an equal payment by this factor to obtain its value one period before the first payment.",
        "calculationMath": "\\frac{1-(1+0.12)^{-8}}{0.12} = 4.96763977",
        "intermediateValue": 4.967639766838592
      },
      {
        "step": 2,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "100\\times(4.96763977) = 496.76397668",
        "intermediateValue": 496.7639766838592
      },
      {
        "step": 3,
        "title": "Subtract the stated amounts",
        "explanation": "Subtract in this order; the order matters for cost, interest, or remaining book value.",
        "calculationMath": "1080-(496.76397668) = 583.23602332",
        "intermediateValue": 583.2360233161407
      },
      {
        "step": 4,
        "title": "Calculate the growth or remaining-value factor",
        "explanation": "Apply the exponent for the stated number of periods; a negative exponent discounts rather than accumulates.",
        "calculationMath": "\\left(1.12\\right)^{8} = 2.47596318",
        "intermediateValue": 2.4759631762948113
      },
      {
        "step": 5,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "583.23602332\\times(2.47596318) = 1444.07091682",
        "intermediateValue": 1444.0709168193864
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
    "given": [
      {
        "symbol": "",
        "meaning": "Bond par",
        "value": "₱1,000"
      },
      {
        "symbol": "",
        "meaning": "Annual coupon rate",
        "value": "10%"
      },
      {
        "symbol": "",
        "meaning": "Redemption",
        "value": "₱1,040"
      },
      {
        "symbol": "",
        "meaning": "Market price",
        "value": "₱1,120"
      },
      {
        "symbol": "",
        "meaning": "Life",
        "value": "10 years"
      },
      {
        "symbol": "",
        "meaning": "Find",
        "value": "Yield"
      }
    ],
    "governingFormula": "0=K\\times \\frac{1-\\left(1+x\\right)^{-n}}{x}+\\frac{R}{\\left(1+x\\right)^{n}}-Price",
    "substitutionMath": "0=100\\times \\frac{1-\\left(1+x\\right)^{-10}}{x}+\\frac{1040}{\\left(1+x\\right)^{10}}-1120",
    "formulaSymbols": "K = coupon per period; Price = bond price; R = redemption or recurring replacement cost; n = number of periods or useful life; x = unknown decimal yield",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Set present worth equal to the price",
        "explanation": "X is the unknown decimal rate. In Canon COMP, enter this residual and use SOLVE with a nonzero initial estimate.",
        "calculationMath": "100\\frac{1-(1+X)^{-10}}{X}+\\frac{1040}{(1+X)^{10}}-1120=0",
        "intermediateValue": null
      },
      {
        "step": 2,
        "title": "Solve the decimal rate",
        "explanation": "A numerical solver gives this X; convert it to percent only after solving.",
        "calculationMath": "X = 0.08445845",
        "intermediateValue": 0.08445844986909506
      },
      {
        "step": 3,
        "title": "Check the solved rate",
        "explanation": "Substitute the solved rate back into the residual. It should be close to zero.",
        "calculationMath": "\\mathrm{residual} = 0",
        "intermediateValue": 2.2737367544323206e-13
      },
      {
        "step": 4,
        "title": "Convert the decimal rate to percent",
        "explanation": "Multiplying a decimal rate by 100 expresses the same rate as a percentage.",
        "calculationMath": "0.08445845\\times(100) = 8.44584499",
        "intermediateValue": 8.445844986909506
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
    "given": [
      {
        "symbol": "",
        "meaning": "Bond par",
        "value": "₱1,000,000"
      },
      {
        "symbol": "",
        "meaning": "Annual coupon rate",
        "value": "3%"
      },
      {
        "symbol": "",
        "meaning": "Market price",
        "value": "95% of par"
      },
      {
        "symbol": "",
        "meaning": "Life",
        "value": "15 years"
      },
      {
        "symbol": "",
        "meaning": "Assumption",
        "value": "Annual coupons, redeem at par"
      }
    ],
    "governingFormula": "0=K\\times \\frac{1-\\left(1+x\\right)^{-n}}{x}+\\frac{R}{\\left(1+x\\right)^{n}}-Price",
    "substitutionMath": "0=30000\\times \\frac{1-\\left(1+x\\right)^{-15}}{x}+\\frac{1000000}{\\left(1+x\\right)^{15}}-950000",
    "formulaSymbols": "K = coupon per period; Price = bond price; R = redemption or recurring replacement cost; n = number of periods or useful life; x = unknown decimal yield",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Set present worth equal to the price",
        "explanation": "X is the unknown decimal rate. In Canon COMP, enter this residual and use SOLVE with a nonzero initial estimate.",
        "calculationMath": "30000\\frac{1-(1+X)^{-15}}{X}+\\frac{1000000}{(1+X)^{15}}-950000=0",
        "intermediateValue": null
      },
      {
        "step": 2,
        "title": "Solve the decimal rate",
        "explanation": "A numerical solver gives this X; convert it to percent only after solving.",
        "calculationMath": "X = 0.03432029",
        "intermediateValue": 0.03432029485038253
      },
      {
        "step": 3,
        "title": "Check the solved rate",
        "explanation": "Substitute the solved rate back into the residual. It should be close to zero.",
        "calculationMath": "\\mathrm{residual} = 0",
        "intermediateValue": 0.0
      },
      {
        "step": 4,
        "title": "Convert the decimal rate to percent",
        "explanation": "Multiplying a decimal rate by 100 expresses the same rate as a percentage.",
        "calculationMath": "0.03432029\\times(100) = 3.43202949",
        "intermediateValue": 3.432029485038253
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
    "given": [
      {
        "symbol": "",
        "meaning": "Annual coupon",
        "value": "$110"
      },
      {
        "symbol": "",
        "meaning": "Redemption",
        "value": "$1,000"
      },
      {
        "symbol": "",
        "meaning": "Life",
        "value": "20 years"
      },
      {
        "symbol": "",
        "meaning": "Yield",
        "value": "12% yearly"
      }
    ],
    "governingFormula": "Price=K\\times \\frac{1-\\left(1+i\\right)^{-n}}{i}+\\frac{R}{\\left(1+i\\right)^{n}}",
    "substitutionMath": "Price=110\\times \\frac{1-\\left(1+0.12\\right)^{-20}}{0.12}+\\frac{1000}{\\left(1+0.12\\right)^{20}}",
    "formulaSymbols": "K = coupon per period; R = redemption or recurring replacement cost; i = effective rate per payment period; n = number of periods or useful life",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Find the present-worth factor",
        "explanation": "Use i=0.12 (12.000000% per payment period) and n=20. Multiply an equal payment by this factor to obtain its value one period before the first payment.",
        "calculationMath": "\\frac{1-(1+0.12)^{-20}}{0.12} = 7.46944362",
        "intermediateValue": 7.469443624327598
      },
      {
        "step": 2,
        "title": "Multiply the components",
        "explanation": "Use the amounts and factor from the formula; keep full precision.",
        "calculationMath": "110\\times(7.46944362) = 821.63879868",
        "intermediateValue": 821.6387986760358
      },
      {
        "step": 3,
        "title": "Calculate the growth or remaining-value factor",
        "explanation": "Apply the exponent for the stated number of periods; a negative exponent discounts rather than accumulates.",
        "calculationMath": "\\left(1.12\\right)^{20} = 9.64629309",
        "intermediateValue": 9.646293093274952
      },
      {
        "step": 4,
        "title": "Divide to find the required ratio",
        "explanation": "Keep the entire denominator grouped; use the full-precision result.",
        "calculationMath": "\\frac{1000}{9.64629309} = 103.66676508",
        "intermediateValue": 103.66676508068825
      },
      {
        "step": 5,
        "title": "Add coupon and redemption present worth",
        "explanation": "Both components have been discounted to today, so their sum is the bond price.",
        "calculationMath": "821.63879868+(103.66676508) = 925.30556376",
        "intermediateValue": 925.305563756724
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
    "given": [
      {
        "symbol": "",
        "meaning": "Par purchase and redemption",
        "value": "₱1,000"
      },
      {
        "symbol": "",
        "meaning": "Annual coupon",
        "value": "₱50"
      },
      {
        "symbol": "",
        "meaning": "Life",
        "value": "20 years"
      },
      {
        "symbol": "",
        "meaning": "Inflation",
        "value": "2% yearly"
      }
    ],
    "governingFormula": "i_{real,percent}=\\left(\\frac{1+i}{1+f}-1\\right)\\times 100",
    "substitutionMath": "i_{real,percent}=\\left(\\frac{1+0.05}{1+0.02}-1\\right)\\times 100",
    "formulaSymbols": "f = annual inflation rate; i = effective rate per payment period",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Divide to find the required ratio",
        "explanation": "Keep the entire denominator grouped; use the full-precision result.",
        "calculationMath": "\\frac{1.05}{1.02} = 1.02941176",
        "intermediateValue": 1.0294117647058825
      },
      {
        "step": 2,
        "title": "Subtract the stated amounts",
        "explanation": "Subtract in this order; the order matters for cost, interest, or remaining book value.",
        "calculationMath": "1.02941176-(1) = 0.02941176",
        "intermediateValue": 0.02941176470588247
      },
      {
        "step": 3,
        "title": "Convert the decimal rate to percent",
        "explanation": "Multiplying a decimal rate by 100 expresses the same rate as a percentage.",
        "calculationMath": "0.02941176\\times(100) = 2.94117647",
        "intermediateValue": 2.941176470588247
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
    "given": [
      {
        "symbol": "",
        "meaning": "Bond par and redemption",
        "value": "₱1,000"
      },
      {
        "symbol": "",
        "meaning": "Annual coupon rate",
        "value": "8%"
      },
      {
        "symbol": "",
        "meaning": "Market price",
        "value": "₱1,030"
      },
      {
        "symbol": "",
        "meaning": "Life",
        "value": "10 years"
      },
      {
        "symbol": "",
        "meaning": "Find",
        "value": "Yield"
      }
    ],
    "governingFormula": "0=K\\times \\frac{1-\\left(1+x\\right)^{-n}}{x}+\\frac{R}{\\left(1+x\\right)^{n}}-Price",
    "substitutionMath": "0=80\\times \\frac{1-\\left(1+x\\right)^{-10}}{x}+\\frac{1000}{\\left(1+x\\right)^{10}}-1030",
    "formulaSymbols": "K = coupon per period; Price = bond price; R = redemption or recurring replacement cost; n = number of periods or useful life; x = unknown decimal yield",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Set present worth equal to the price",
        "explanation": "X is the unknown decimal rate. In Canon COMP, enter this residual and use SOLVE with a nonzero initial estimate.",
        "calculationMath": "80\\frac{1-(1+X)^{-10}}{X}+\\frac{1000}{(1+X)^{10}}-1030=0",
        "intermediateValue": null
      },
      {
        "step": 2,
        "title": "Solve the decimal rate",
        "explanation": "A numerical solver gives this X; convert it to percent only after solving.",
        "calculationMath": "X = 0.0756171",
        "intermediateValue": 0.07561709905526104
      },
      {
        "step": 3,
        "title": "Check the solved rate",
        "explanation": "Substitute the solved rate back into the residual. It should be close to zero.",
        "calculationMath": "\\mathrm{residual} = 0",
        "intermediateValue": 0.0
      },
      {
        "step": 4,
        "title": "Convert the decimal rate to percent",
        "explanation": "Multiplying a decimal rate by 100 expresses the same rate as a percentage.",
        "calculationMath": "0.0756171\\times(100) = 7.56170991",
        "intermediateValue": 7.561709905526104
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
    "given": [
      {
        "symbol": "",
        "meaning": "Fixed monthly cost",
        "value": "$200,000"
      },
      {
        "symbol": "",
        "meaning": "Variable cost",
        "value": "$160/unit"
      },
      {
        "symbol": "",
        "meaning": "Selling price",
        "value": "$200/unit"
      }
    ],
    "governingFormula": "Q=\\frac{FC}{SP-VC}",
    "substitutionMath": "Q=\\frac{200000}{200-160}",
    "formulaSymbols": "FC = fixed cost; SP = selling price per unit; VC = variable cost per unit",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Find contribution per unit",
        "explanation": "Selling price minus variable costs is the amount each sale contributes toward fixed costs.",
        "calculationMath": "200-(160) = 40",
        "intermediateValue": 40
      },
      {
        "step": 2,
        "title": "Find the break-even ratio",
        "explanation": "Divide total fixed cost by contribution per unit; then round upward if whole units are required.",
        "calculationMath": "\\frac{200000}{40} = 5000",
        "intermediateValue": 5000.0
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
    "given": [
      {
        "symbol": "",
        "meaning": "Fixed monthly costs",
        "value": "₱3,500 property tax + ₱25,000 wages + ₱12,000 other"
      },
      {
        "symbol": "",
        "meaning": "Variable costs",
        "value": "₱20 electricity + ₱2 tax per block"
      },
      {
        "symbol": "",
        "meaning": "Selling price",
        "value": "₱55/block"
      }
    ],
    "governingFormula": "Q=\\frac{FC_{1}+FC_{2}+FC_{3}}{SP-VC_{1}-VC_{2}}",
    "substitutionMath": "Q=\\frac{3500+25000+12000}{55-20-2}",
    "formulaSymbols": "FC_1 = fixed cost; FC_2 = fixed cost; FC_3 = fixed cost; SP = selling price per unit; VC_1 = variable cost per unit; VC_2 = variable cost per unit",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Add the fixed-cost components",
        "explanation": "Combine fixed costs for the same time interval as the requested sales volume.",
        "calculationMath": "3500+(25000) = 28500",
        "intermediateValue": 28500
      },
      {
        "step": 2,
        "title": "Add the fixed-cost components",
        "explanation": "Combine fixed costs for the same time interval as the requested sales volume.",
        "calculationMath": "28500+(12000) = 40500",
        "intermediateValue": 40500
      },
      {
        "step": 3,
        "title": "Find contribution per unit",
        "explanation": "Selling price minus variable costs is the amount each sale contributes toward fixed costs.",
        "calculationMath": "55-(20) = 35",
        "intermediateValue": 35
      },
      {
        "step": 4,
        "title": "Find contribution per unit",
        "explanation": "Selling price minus variable costs is the amount each sale contributes toward fixed costs.",
        "calculationMath": "35-(2) = 33",
        "intermediateValue": 33
      },
      {
        "step": 5,
        "title": "Find the break-even ratio",
        "explanation": "Divide total fixed cost by contribution per unit; then round upward if whole units are required.",
        "calculationMath": "\\frac{40500}{33} = 1227.27272727",
        "intermediateValue": 1227.2727272727273
      },
      {
        "step": 6,
        "title": "Round upward for whole units",
        "explanation": "A fraction of a unit cannot cover fixed cost. The minimum whole-unit quantity is the ceiling, not ordinary rounding.",
        "calculationMath": "\\lceil 1227.27272727\\rceil = 1228",
        "intermediateValue": 1228
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
    "given": [
      {
        "symbol": "",
        "meaning": "Annual fixed cost",
        "value": "₱80,000"
      },
      {
        "symbol": "",
        "meaning": "Selling price",
        "value": "₱0.50/unit"
      },
      {
        "symbol": "",
        "meaning": "Current production",
        "value": "500,000/year"
      },
      {
        "symbol": "",
        "meaning": "Variable cost",
        "value": "Missing, zero assumed explicitly"
      }
    ],
    "governingFormula": "Q=\\frac{FC}{SP-VC}",
    "substitutionMath": "Q=\\frac{80000}{0.5-0}",
    "formulaSymbols": "FC = fixed cost; SP = selling price per unit; VC = variable cost per unit",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Find the break-even ratio",
        "explanation": "Divide total fixed cost by contribution per unit; then round upward if whole units are required.",
        "calculationMath": "\\frac{80000}{0.5} = 160000",
        "intermediateValue": 160000.0
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
    "given": [
      {
        "symbol": "",
        "meaning": "Fixed annual cost",
        "value": "₱69,994"
      },
      {
        "symbol": "",
        "meaning": "Variable cost",
        "value": "₱56/unit"
      },
      {
        "symbol": "",
        "meaning": "Selling price",
        "value": "₱135/unit"
      }
    ],
    "governingFormula": "Q=\\frac{FC}{SP-VC}",
    "substitutionMath": "Q=\\frac{69994}{135-56}",
    "formulaSymbols": "FC = fixed cost; SP = selling price per unit; VC = variable cost per unit",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Find contribution per unit",
        "explanation": "Selling price minus variable costs is the amount each sale contributes toward fixed costs.",
        "calculationMath": "135-(56) = 79",
        "intermediateValue": 79
      },
      {
        "step": 2,
        "title": "Find the break-even ratio",
        "explanation": "Divide total fixed cost by contribution per unit; then round upward if whole units are required.",
        "calculationMath": "\\frac{69994}{79} = 886",
        "intermediateValue": 886.0
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
    "given": [
      {
        "symbol": "",
        "meaning": "Fixed monthly cost",
        "value": "$100,000"
      },
      {
        "symbol": "",
        "meaning": "Variable costs",
        "value": "$300 labor + $400 material + $100 other per unit"
      },
      {
        "symbol": "",
        "meaning": "Selling price",
        "value": "$1,200/unit"
      }
    ],
    "governingFormula": "Q=\\frac{FC}{SP-VC_{1}-VC_{2}-VC_{3}}",
    "substitutionMath": "Q=\\frac{100000}{1200-300-400-100}",
    "formulaSymbols": "FC = fixed cost; SP = selling price per unit; VC_1 = variable cost per unit; VC_2 = variable cost per unit; VC_3 = variable cost per unit",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Find contribution per unit",
        "explanation": "Selling price minus variable costs is the amount each sale contributes toward fixed costs.",
        "calculationMath": "1200-(300) = 900",
        "intermediateValue": 900
      },
      {
        "step": 2,
        "title": "Find contribution per unit",
        "explanation": "Selling price minus variable costs is the amount each sale contributes toward fixed costs.",
        "calculationMath": "900-(400) = 500",
        "intermediateValue": 500
      },
      {
        "step": 3,
        "title": "Find contribution per unit",
        "explanation": "Selling price minus variable costs is the amount each sale contributes toward fixed costs.",
        "calculationMath": "500-(100) = 400",
        "intermediateValue": 400
      },
      {
        "step": 4,
        "title": "Find the break-even ratio",
        "explanation": "Divide total fixed cost by contribution per unit; then round upward if whole units are required.",
        "calculationMath": "\\frac{100000}{400} = 250",
        "intermediateValue": 250.0
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
    "shortcutSolution": "Exact break-even is 33,333.33; 33,334 whole pieces are required. The printed 33,333 is an approximation, not enough to fully cover cost. Continuous break-even ratio = 33,333.3333; whole-unit minimum = 33,334. No printed choice matches the calculated result at its stated precision. The correct computed result is shown above; do not force a letter.",
    "given": [
      {
        "symbol": "",
        "meaning": "Fixed monthly cost",
        "value": "$50,000"
      },
      {
        "symbol": "",
        "meaning": "Variable costs",
        "value": "$0.75 labor + $3.25 material + $0.50 other per piece"
      },
      {
        "symbol": "",
        "meaning": "Selling price",
        "value": "$6/piece"
      }
    ],
    "governingFormula": "Q=\\frac{FC}{SP-VC_{1}-VC_{2}-VC_{3}}",
    "substitutionMath": "Q=\\frac{50000}{6-0.75-3.25-0.5}",
    "formulaSymbols": "FC = fixed cost; SP = selling price per unit; VC_1 = variable cost per unit; VC_2 = variable cost per unit; VC_3 = variable cost per unit",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Find contribution per unit",
        "explanation": "Selling price minus variable costs is the amount each sale contributes toward fixed costs.",
        "calculationMath": "6-(0.75) = 5.25",
        "intermediateValue": 5.25
      },
      {
        "step": 2,
        "title": "Find contribution per unit",
        "explanation": "Selling price minus variable costs is the amount each sale contributes toward fixed costs.",
        "calculationMath": "5.25-(3.25) = 2",
        "intermediateValue": 2.0
      },
      {
        "step": 3,
        "title": "Find contribution per unit",
        "explanation": "Selling price minus variable costs is the amount each sale contributes toward fixed costs.",
        "calculationMath": "2-(0.5) = 1.5",
        "intermediateValue": 1.5
      },
      {
        "step": 4,
        "title": "Find the break-even ratio",
        "explanation": "Divide total fixed cost by contribution per unit; then round upward if whole units are required.",
        "calculationMath": "\\frac{50000}{1.5} = 33333.33333333",
        "intermediateValue": 33333.333333333336
      },
      {
        "step": 5,
        "title": "Round upward for whole units",
        "explanation": "A fraction of a unit cannot cover fixed cost. The minimum whole-unit quantity is the ceiling, not ordinary rounding.",
        "calculationMath": "\\lceil 33333.33333333\\rceil = 33334",
        "intermediateValue": 33334
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
    "mentalModelOrTrap": "Exact break-even is 33,333.33; 33,334 whole pieces are required. The printed 33,333 is an approximation, not enough to fully cover cost. Continuous break-even ratio = 33,333.3333; whole-unit minimum = 33,334. No printed choice matches the calculated result at its stated precision. The correct computed result is shown above; do not force a letter."
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
    "shortcutSolution": "Exact ratio is 2,368.42; need 2,369 whole units. Printed 2,368 is only an approximate ratio. Continuous break-even ratio = 2,368.4211; whole-unit minimum = 2,369. No printed choice matches the calculated result at its stated precision. The correct computed result is shown above; do not force a letter.",
    "given": [
      {
        "symbol": "",
        "meaning": "Fixed monthly cost",
        "value": "$450,000"
      },
      {
        "symbol": "",
        "meaning": "Variable costs",
        "value": "$45 labor/material + $15 other per unit"
      },
      {
        "symbol": "",
        "meaning": "Selling price",
        "value": "$250/unit"
      }
    ],
    "governingFormula": "Q=\\frac{FC}{SP-VC_{1}-VC_{2}}",
    "substitutionMath": "Q=\\frac{450000}{250-45-15}",
    "formulaSymbols": "FC = fixed cost; SP = selling price per unit; VC_1 = variable cost per unit; VC_2 = variable cost per unit",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Find contribution per unit",
        "explanation": "Selling price minus variable costs is the amount each sale contributes toward fixed costs.",
        "calculationMath": "250-(45) = 205",
        "intermediateValue": 205
      },
      {
        "step": 2,
        "title": "Find contribution per unit",
        "explanation": "Selling price minus variable costs is the amount each sale contributes toward fixed costs.",
        "calculationMath": "205-(15) = 190",
        "intermediateValue": 190
      },
      {
        "step": 3,
        "title": "Find the break-even ratio",
        "explanation": "Divide total fixed cost by contribution per unit; then round upward if whole units are required.",
        "calculationMath": "\\frac{450000}{190} = 2368.42105263",
        "intermediateValue": 2368.4210526315787
      },
      {
        "step": 4,
        "title": "Round upward for whole units",
        "explanation": "A fraction of a unit cannot cover fixed cost. The minimum whole-unit quantity is the ceiling, not ordinary rounding.",
        "calculationMath": "\\lceil 2368.42105263\\rceil = 2369",
        "intermediateValue": 2369
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
    "mentalModelOrTrap": "Exact ratio is 2,368.42; need 2,369 whole units. Printed 2,368 is only an approximate ratio. Continuous break-even ratio = 2,368.4211; whole-unit minimum = 2,369. No printed choice matches the calculated result at its stated precision. The correct computed result is shown above; do not force a letter."
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
    "given": [
      {
        "symbol": "",
        "meaning": "Fixed annual cost",
        "value": "$200,000"
      },
      {
        "symbol": "",
        "meaning": "Variable cost",
        "value": "$160/drum"
      },
      {
        "symbol": "",
        "meaning": "Selling price",
        "value": "$200/drum"
      }
    ],
    "governingFormula": "Q=\\frac{FC}{SP-VC}",
    "substitutionMath": "Q=\\frac{200000}{200-160}",
    "formulaSymbols": "FC = fixed cost; SP = selling price per unit; VC = variable cost per unit",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Find contribution per unit",
        "explanation": "Selling price minus variable costs is the amount each sale contributes toward fixed costs.",
        "calculationMath": "200-(160) = 40",
        "intermediateValue": 40
      },
      {
        "step": 2,
        "title": "Find the break-even ratio",
        "explanation": "Divide total fixed cost by contribution per unit; then round upward if whole units are required.",
        "calculationMath": "\\frac{200000}{40} = 5000",
        "intermediateValue": 5000.0
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
    "given": [
      {
        "symbol": "",
        "meaning": "Fixed monthly cost",
        "value": "₱461,600"
      },
      {
        "symbol": "",
        "meaning": "Variable costs",
        "value": "₱315 labor + ₱100 material + ₱3 other per unit"
      },
      {
        "symbol": "",
        "meaning": "Selling price",
        "value": "₱995/unit"
      }
    ],
    "governingFormula": "Q=\\frac{FC}{SP-VC_{1}-VC_{2}-VC_{3}}",
    "substitutionMath": "Q=\\frac{461600}{995-315-100-3}",
    "formulaSymbols": "FC = fixed cost; SP = selling price per unit; VC_1 = variable cost per unit; VC_2 = variable cost per unit; VC_3 = variable cost per unit",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Find contribution per unit",
        "explanation": "Selling price minus variable costs is the amount each sale contributes toward fixed costs.",
        "calculationMath": "995-(315) = 680",
        "intermediateValue": 680
      },
      {
        "step": 2,
        "title": "Find contribution per unit",
        "explanation": "Selling price minus variable costs is the amount each sale contributes toward fixed costs.",
        "calculationMath": "680-(100) = 580",
        "intermediateValue": 580
      },
      {
        "step": 3,
        "title": "Find contribution per unit",
        "explanation": "Selling price minus variable costs is the amount each sale contributes toward fixed costs.",
        "calculationMath": "580-(3) = 577",
        "intermediateValue": 577
      },
      {
        "step": 4,
        "title": "Find the break-even ratio",
        "explanation": "Divide total fixed cost by contribution per unit; then round upward if whole units are required.",
        "calculationMath": "\\frac{461600}{577} = 800",
        "intermediateValue": 800.0
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
    "given": [
      {
        "symbol": "",
        "meaning": "Fixed monthly cost",
        "value": "₱34,950"
      },
      {
        "symbol": "",
        "meaning": "Variable costs",
        "value": "₱15 labor + ₱65 material + ₱20 other per chair"
      },
      {
        "symbol": "",
        "meaning": "Selling price",
        "value": "₱250/chair"
      }
    ],
    "governingFormula": "Q=\\frac{FC}{SP-VC_{1}-VC_{2}-VC_{3}}",
    "substitutionMath": "Q=\\frac{34950}{250-15-65-20}",
    "formulaSymbols": "FC = fixed cost; SP = selling price per unit; VC_1 = variable cost per unit; VC_2 = variable cost per unit; VC_3 = variable cost per unit",
    "solutionSteps": [
      {
        "step": 1,
        "title": "Find contribution per unit",
        "explanation": "Selling price minus variable costs is the amount each sale contributes toward fixed costs.",
        "calculationMath": "250-(15) = 235",
        "intermediateValue": 235
      },
      {
        "step": 2,
        "title": "Find contribution per unit",
        "explanation": "Selling price minus variable costs is the amount each sale contributes toward fixed costs.",
        "calculationMath": "235-(65) = 170",
        "intermediateValue": 170
      },
      {
        "step": 3,
        "title": "Find contribution per unit",
        "explanation": "Selling price minus variable costs is the amount each sale contributes toward fixed costs.",
        "calculationMath": "170-(20) = 150",
        "intermediateValue": 150
      },
      {
        "step": 4,
        "title": "Find the break-even ratio",
        "explanation": "Divide total fixed cost by contribution per unit; then round upward if whole units are required.",
        "calculationMath": "\\frac{34950}{150} = 233",
        "intermediateValue": 233.0
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
].map(p => ({...p, correctLetter: (p.correctLetter || undefined) as DriveSampleProblem['correctLetter'], difficulty: 'Moderate' as const, category: formulaById[p.formulaId].title, topicTitle: formulaById[p.formulaId].title, weekDay: formulaById[p.formulaId].day, answerStatus: p.answerStatus as DriveSampleProblem['answerStatus']}));
export const ESAS_DRIVE_SAMPLE_PROBLEMS = DRIVE_SAMPLE_PROBLEMS;
