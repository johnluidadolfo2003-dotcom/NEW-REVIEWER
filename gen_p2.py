# -*- coding: utf-8 -*-
"""
Problems 81 to 110 for Engineering Economics
"""
import math

def format_peso(val):
    return f"₱{val:,.2f}"

def format_peso_int(val):
    return f"₱{round(val):,}"

problems_81_110 = []

# =========================================================================
# 81: Perpetuity with Growth (Gordon Model)
# =========================================================================
A81 = 100000; g81 = 0.03; i81 = 0.09
P81 = A81 / (i81 - g81)
problems_81_110.append({
    "id": "dsp-econ-81",
    "problemNumber": 81,
    "weekDay": 2,
    "folderName": "economics sample problem",
    "sourceFile": "03_Annuities_Ordinary_Due_Deferred.pdf",
    "sourceDocumentName": "Doc 03: Growing Perpetuity",
    "category": "Annuities & Perpetuity",
    "topicTitle": "Capital Value of a Perpetual Stream Growing Annually at 3%",
    "prcExamRef": "REE Board Exam Standard Problem",
    "difficulty": "Moderate",
    "question": "A transmission line right-of-way perpetual easement pays ₱100,000 at the end of the first year, with subsequent payments increasing by 3% every year indefinitely to account for land appreciation. If the interest rate is 9% per annum, what is the present worth of this perpetual lease stream?",
    "choices": [
        "A. ₱1,666,667",
        "B. ₱1,500,000",
        "C. ₱1,800,000",
        "D. ₱1,450,000"
    ],
    "correctLetter": "A",
    "shortcutSolution": "P = A_1 / (i - g) = 100,000 / (0.09 - 0.03) = 100,000 / 0.06 = ₱1,666,666.67",
    "given": [
        {"symbol": "A_1", "meaning": "Initial first-year payment", "value": "₱100,000"},
        {"symbol": "g", "meaning": "Annual perpetual growth rate", "value": "3% per year"},
        {"symbol": "i", "meaning": "Discount rate", "value": "9% per year"}
    ],
    "governingFormula": "P = \\frac{A_1}{i - g} \\quad (\\text{for } i > g)",
    "solutionSteps": [
        {"step": 1, "title": "Compute Effective Denominator", "explanation": "Net discount rate (i - g):", "calculation": "i - g = 0.09 - 0.03 = 0.06"},
        {"step": 2, "title": "Calculate Present Worth P", "explanation": "Divide initial payment by net rate:", "calculation": f"P = \\frac{{100,000}}{{0.06}} = {format_peso(P81)}"}
    ],
    "finalAnswer": "₱1,666,667",
    "canonCalTech": {
        "calculator": "Canon F-789SGA",
        "mode": "COMP (Mode 1)",
        "keystrokes": ["100000 ÷ ( 0.09 - 0.03 ) [=] ⟹ 1666666.67"],
        "resultDisplay": "1666666.67",
        "proTip": "Growing perpetuity requires i > g; if g ≥ i, the present worth diverges to infinity."
    },
    "mentalModelOrTrap": "Do not divide by i; growth rate g offsets the discount rate in the denominator: (i - g)."
})

# =========================================================================
# 82: Ordinary Annuity with Balloon Payment
# =========================================================================
A82 = 20000; i82 = 0.01; n82 = 36; Bal82 = 150000
P_ann82 = A82 * ((1 - (1 + i82)**(-n82)) / i82) # 20000 * 30.1075 = 602,150.10
P_bal82 = Bal82 * (1 + i82)**(-n82) # 150000 * 0.698925 = 104,838.74
P_tot82 = P_ann82 + P_bal82 # 706,988.84
problems_81_110.append({
    "id": "dsp-econ-82",
    "problemNumber": 82,
    "weekDay": 2,
    "folderName": "economics sample problem",
    "sourceFile": "03_Annuities_Ordinary_Due_Deferred.pdf",
    "sourceDocumentName": "Doc 03: Annuity with Balloon Payment",
    "category": "Annuities & Perpetuity",
    "topicTitle": "Present Worth of Monthly Installment Financing with Final Balloon Payment",
    "prcExamRef": "REE Board Exam Standard Problem",
    "difficulty": "Moderate",
    "question": "A utility vehicle is financed through 36 monthly payments of ₱20,000 payable at the end of each month, plus a final lump-sum balloon payment of ₱150,000 due alongside the 36th installment. If interest is 12% per annum compounded monthly, what is the initial cash equivalent value of this financing structure?",
    "choices": [
        "A. ₱706,989",
        "B. ₱685,400",
        "C. ₱724,150",
        "D. ₱695,200"
    ],
    "correctLetter": "A",
    "shortcutSolution": "P = 20,000 · (P/A, 1%, 36) + 150,000 · (P/F, 1%, 36) = ₱602,150.10 + ₱104,838.74 = ₱706,988.84",
    "given": [
        {"symbol": "A", "meaning": "Monthly installment", "value": "₱20,000"},
        {"symbol": "Balloon", "meaning": "Lump-sum balloon payment at month 36", "value": "₱150,000"},
        {"symbol": "i", "meaning": "Monthly interest rate", "value": "12% / 12 = 1.0% per month"},
        {"symbol": "n", "meaning": "Financing term", "value": "36 months"}
    ],
    "governingFormula": "P = A \\left[ \\frac{1 - (1 + i)^{-n}}{i} \\right] + \\text{Balloon}(1 + i)^{-n}",
    "solutionSteps": [
        {"step": 1, "title": "Compute Present Worth of Monthly Payments", "explanation": "P_ann = 20,000 × [1 - (1.01)^(-36)] / 0.01:", "calculation": f"P_{{ann}} = 20,000 \\times 30.107505 = {format_peso(P_ann82)}"},
        {"step": 2, "title": "Compute Present Worth of Balloon Payment", "explanation": "P_bal = 150,000 × (1.01)^(-36):", "calculation": f"P_{{bal}} = 150,000 \\times 0.698925 = {format_peso(P_bal82)}"},
        {"step": 3, "title": "Sum Present Values", "explanation": "P_total = P_ann + P_bal:", "calculation": f"P_{{tot}} = 602,150.10 + 104,838.74 = {format_peso(P_tot82)}"}
    ],
    "finalAnswer": "₱706,989",
    "canonCalTech": {
        "calculator": "Canon F-789SGA",
        "mode": "COMP (Mode 1)",
        "keystrokes": ["20000 × ( 1 - 1.01 [xʸ] -36 ) ÷ 0.01 + 150000 × 1.01 [xʸ] -36 [=] ⟹ 706988.84"],
        "resultDisplay": "706988.84",
        "proTip": "Combine both terms in one expression using the [+] operator on Canon F-789SGA."
    },
    "mentalModelOrTrap": "A balloon payment is simply a single future lump sum at time n, evaluated together with the regular annuity series."
})

# =========================================================================
# 83: Solving for Number of Annuity Payments n
# =========================================================================
P83 = 300000; A83 = 45000; i83 = 0.08
# 300000 = 45000 * [1 - (1.08)^-n] / 0.08
# 300000 * 0.08 / 45000 = 24000 / 45000 = 0.533333 = 1 - (1.08)^-n
# (1.08)^-n = 1 - 0.533333 = 0.466667
# -n * ln(1.08) = ln(0.466667)
# n = -ln(0.466667) / ln(1.08) = 0.762140 / 0.076961 = 9.903 => 10 payments
n83 = -math.log(1 - (P83 * i83 / A83)) / math.log(1 + i83)
problems_81_110.append({
    "id": "dsp-econ-83",
    "problemNumber": 83,
    "weekDay": 2,
    "folderName": "economics sample problem",
    "sourceFile": "03_Annuities_Ordinary_Due_Deferred.pdf",
    "sourceDocumentName": "Doc 03: Solving for Number of Payments",
    "category": "Annuities & Perpetuity",
    "topicTitle": "Number of Annual Payments Required to Fully Pay Off a ₱300,000 Debt at ₱45,000/yr",
    "prcExamRef": "REE Board Exam Standard Problem",
    "difficulty": "Moderate",
    "question": "A utility contractor owes ₱300,000 on an equipment purchase at an annual interest rate of 8%. If the contractor can pay ₱45,000 at the end of each year, how many full payments are required to completely liquidate the debt?",
    "choices": [
        "A. 10 annual payments (9.90 years)",
        "B. 8 annual payments (7.85 years)",
        "C. 12 annual payments (11.50 years)",
        "D. 7 annual payments (6.67 years)"
    ],
    "correctLetter": "A",
    "shortcutSolution": "n = -ln(1 - Pi/A) / ln(1 + i) = -ln(1 - 300k(0.08)/45k) / ln(1.08) = -ln(0.466667) / ln(1.08) = 9.90 ≈ 10 payments",
    "given": [
        {"symbol": "P", "meaning": "Initial debt balance", "value": "₱300,000"},
        {"symbol": "A", "meaning": "Annual installment capability", "value": "₱45,000"},
        {"symbol": "i", "meaning": "Annual interest rate", "value": "8% per year"}
    ],
    "governingFormula": "n = -\\frac{\\ln\\left(1 - \\frac{P \\cdot i}{A}\\right)}{\\ln(1 + i)}",
    "solutionSteps": [
        {"step": 1, "title": "Check Annual Interest Burden", "explanation": "Minimum payment must exceed first year interest:", "calculation": "I_1 = 300,000 \\times 0.08 = ₱24,000 < ₱45,000 \\quad (\\text{Debt will amortize})"},
        {"step": 2, "title": "Evaluate Argument of Logarithm", "explanation": "1 - (P · i / A):", "calculation": "1 - \\frac{24,000}{45,000} = 1 - 0.533333 = 0.466667"},
        {"step": 3, "title": "Apply Natural Logarithm Formula", "explanation": "Solve for n:", "calculation": f"n = \\frac{{-\\ln(0.466667)}}{{\\ln(1.08)}} = \\frac{{0.762140}}{{0.076961}} = {n83:.2f} \\approx 10 \\text{{ payments}}"}
    ],
    "finalAnswer": "10 annual payments (9.90 years)",
    "canonCalTech": {
        "calculator": "Canon F-789SGA",
        "mode": "COMP (Mode 1)",
        "keystrokes": ["- [ln] ( 1 - 300000 × 0.08 ÷ 45000 ) ÷ [ln] 1.08 [=] ⟹ 9.9029"],
        "resultDisplay": "9.90",
        "proTip": "If A ≤ P · i, the debt never amortizes and the calculator returns Math ERROR."
    },
    "mentalModelOrTrap": "Since payments are discrete, 9.90 means 9 full payments of ₱45,000 and a 10th smaller fractional payment."
})

# =========================================================================
# 84: Bi-Monthly Annuity Payments
# =========================================================================
A84 = 18000; r84 = 0.12; m84 = 6; t84 = 5.0
i84 = r84 / m84 # 0.02 per bi-monthly period
n84 = int(m84 * t84) # 30 periods
P84 = A84 * ((1 - (1 + i84)**(-n84)) / i84) # 18000 * 22.396456 = 403,136.20
problems_81_110.append({
    "id": "dsp-econ-84",
    "problemNumber": 84,
    "weekDay": 2,
    "folderName": "economics sample problem",
    "sourceFile": "03_Annuities_Ordinary_Due_Deferred.pdf",
    "sourceDocumentName": "Doc 03: Bi-Monthly Annuity Evaluation",
    "category": "Annuities & Perpetuity",
    "topicTitle": "Present Worth of Bi-Monthly Payments over 5 Years at 12% Compounded Bi-Monthly",
    "prcExamRef": "REE Board Exam Standard Problem",
    "difficulty": "Moderate",
    "question": "A telecommunications company agrees to pay ₱18,000 every 2 months (bi-monthly) for 5 years to lease space on a cellular tower. If the interest rate is 12% per annum compounded bi-monthly, what is the present worth of this lease contract?",
    "choices": [
        "A. ₱403,136",
        "B. ₱392,500",
        "C. ₱415,800",
        "D. ₱388,400"
    ],
    "correctLetter": "A",
    "shortcutSolution": "P = 18,000 · [1 - (1.02)^{-30}] / 0.02 = 18,000 × 22.396456 = ₱403,136.20",
    "given": [
        {"symbol": "A", "meaning": "Bi-monthly installment", "value": "₱18,000"},
        {"symbol": "m", "meaning": "Compounding frequency", "value": "6 periods per year (every 2 months)"},
        {"symbol": "i", "meaning": "Periodic bi-monthly rate", "value": "12% / 6 = 2.0%"},
        {"symbol": "n", "meaning": "Total periods", "value": "5 years × 6 = 30 bi-months"}
    ],
    "governingFormula": "P = A \\left[ \\frac{1 - (1 + i)^{-n}}{i} \\right]",
    "solutionSteps": [
        {"step": 1, "title": "Compute Bi-Monthly Rate and Periods", "explanation": "6 compounding cycles per calendar year:", "calculation": "i = \\frac{0.12}{6} = 0.02; \\quad n = 5 \\times 6 = 30"},
        {"step": 2, "title": "Evaluate Present Worth Factor", "explanation": "[1 - (1.02)^(-30)] / 0.02:", "calculation": "\\frac{1 - (1.02)^{-30}}{0.02} = \\frac{1 - 0.552071}{0.02} = 22.396456"},
        {"step": 3, "title": "Calculate Present Worth P", "explanation": "Multiply bi-monthly payment by factor:", "calculation": f"P = 18,000 \\times 22.396456 = {format_peso(P84)}"}
    ],
    "finalAnswer": "₱403,136",
    "canonCalTech": {
        "calculator": "Canon F-789SGA",
        "mode": "COMP (Mode 1)",
        "keystrokes": ["18000 × ( 1 - 1.02 [xʸ] -30 ) ÷ 0.02 [=] ⟹ 403136.20"],
        "resultDisplay": "403136.20",
        "proTip": "Bi-monthly means 6 times a year (every 2 months), whereas semi-monthly means 24 times a year (twice a month)."
    },
    "mentalModelOrTrap": "Do not confuse 'bi-monthly' (every 2 months, m = 6) with 'semi-monthly' (twice a month, m = 24)."
})

# =========================================================================
# 85: Sinking Fund with Salvage Value Offset
# =========================================================================
FC85 = 2000000; SV85 = 300000; i85 = 0.07; n85 = 12
# Amount to accumulate = FC - SV = 1,700,000
Net_Accum85 = FC85 - SV85
A85 = Net_Accum85 * (i85 / ((1 + i85)**n85 - 1)) # 1700000 * (0.07 / (1.07^12 - 1)) = 1700000 * 0.055906 = 95,040.20
problems_81_110.append({
    "id": "dsp-econ-85",
    "problemNumber": 85,
    "weekDay": 2,
    "folderName": "economics sample problem",
    "sourceFile": "03_Annuities_Ordinary_Due_Deferred.pdf",
    "sourceDocumentName": "Doc 03: Sinking Fund with Salvage Value",
    "category": "Annuities & Perpetuity",
    "topicTitle": "Annual Sinking Fund Deposit for Substation Transformer Replacement Net of Salvage Value",
    "prcExamRef": "REE Board Exam Standard Problem",
    "difficulty": "Moderate",
    "question": "A 10 MVA power transformer costs ₱2,000,000 new and has an expected economic life of 12 years with an estimated salvage value of ₱300,000. If an annual sinking fund earns 7% interest per annum, how much must be deposited at the end of each year to fund the net replacement cost?",
    "choices": [
        "A. ₱95,040",
        "B. ₱111,812",
        "C. ₱88,600",
        "D. ₱102,450"
    ],
    "correctLetter": "A",
    "shortcutSolution": "A = (FC - SV) · [i / ((1+i)^n - 1)] = 1,700,000 × [0.07 / (1.07^{12} - 1)] = 1,700,000 × 0.055906 = ₱95,040.20",
    "given": [
        {"symbol": "FC", "meaning": "First cost of transformer", "value": "₱2,000,000"},
        {"symbol": "SV", "meaning": "Salvage value at year 12", "value": "₱300,000"},
        {"symbol": "n", "meaning": "Service life", "value": "12 years"},
        {"symbol": "i", "meaning": "Sinking fund interest rate", "value": "7% per year"}
    ],
    "governingFormula": "A = (FC - SV) \\left[ \\frac{i}{(1 + i)^n - 1} \\right]",
    "solutionSteps": [
        {"step": 1, "title": "Calculate Net Required Replacement Capital", "explanation": "Deduct salvage value recovery:", "calculation": f"\\text{{Net Required}} = 2,000,000 - 300,000 = {format_peso(Net_Accum85)}"},
        {"step": 2, "title": "Compute Sinking Fund Factor (A/F, 7%, 12)", "explanation": "0.07 / [(1.07)^12 - 1]:", "calculation": "\\frac{0.07}{2.252192 - 1} = \\frac{0.07}{1.252192} = 0.055906"},
        {"step": 3, "title": "Calculate Annual Sinking Fund Deposit A", "explanation": "Multiply net required by factor:", "calculation": f"A = 1,700,000 \\times 0.055906 = {format_peso(A85)}"}
    ],
    "finalAnswer": "₱95,040",
    "canonCalTech": {
        "calculator": "Canon F-789SGA",
        "mode": "COMP (Mode 1)",
        "keystrokes": ["( 2000000 - 300000 ) × 0.07 ÷ ( ( 1.07 ) [xʸ] 12 - 1 ) [=] ⟹ 95040.20"],
        "resultDisplay": "95040.20",
        "proTip": "Subtract salvage value directly inside parentheses before multiplying."
    },
    "mentalModelOrTrap": "Do not accumulate the full ₱2,000,000; the sale of the retired unit will provide ₱300,000 toward the new purchase."
})

# =========================================================================
# 86: Deferred Annuity Due
# =========================================================================
A86 = 35000; i86 = 0.09; n86 = 5; k86 = 3 # deferred 3 years, due at beginning of year 4
# Present worth of annuity due starting at t = 3:
# P_due_at_3 = A * [1 - (1+i)^-n] / i * (1 + i)
# Then discount to t = 0 by (1 + i)^-3
# P_0 = A * [1 - (1+i)^-n] / i * (1 + i) * (1 + i)^-3 = A * (P/A, i, n) * (1 + i)^-(k - 1)
P_ord86 = A86 * ((1 - (1 + i86)**(-n86)) / i86) # 35000 * 3.889651 = 136,137.80
P0_86 = P_ord86 * (1 + i86)**(-2) # 136137.80 / 1.09^2 = 114,584.47
problems_81_110.append({
    "id": "dsp-econ-86",
    "problemNumber": 86,
    "weekDay": 2,
    "folderName": "economics sample problem",
    "sourceFile": "03_Annuities_Ordinary_Due_Deferred.pdf",
    "sourceDocumentName": "Doc 03: Deferred Annuity Due",
    "category": "Annuities & Perpetuity",
    "topicTitle": "Present Worth of a 5-Year Lease Payable in Advance Starting at Year 3",
    "prcExamRef": "REE Board Exam Standard Problem",
    "difficulty": "Moderate",
    "question": "A utility signs a warehouse lease contract requiring 5 annual payments of ₱35,000 each. The first payment is due at the beginning of Year 3 (t = 2 in continuous timeline). If money is worth 9% per annum, determine the present worth of this lease contract at Year 0.",
    "choices": [
        "A. ₱114,584",
        "B. ₱120,400",
        "C. ₱108,950",
        "D. ₱118,200"
    ],
    "correctLetter": "A",
    "shortcutSolution": "First payment at t = 2. P_0 = 35,000 · (P/A, 9%, 5) · (1.09)^{-2} = 35,000 × 3.889651 × 0.841680 = ₱114,584.47",
    "given": [
        {"symbol": "A", "meaning": "Annual payment", "value": "₱35,000"},
        {"symbol": "n", "meaning": "Number of payments", "value": "5 payments"},
        {"symbol": "t_first", "meaning": "Timing of first payment", "value": "Beginning of Year 3 = end of Year 2 (t = 2)"},
        {"symbol": "i", "meaning": "Interest rate", "value": "9% per year"}
    ],
    "governingFormula": "P_0 = A \\left[ \\frac{1 - (1 + i)^{-n}}{i} \\right] (1 + i)^{-(t_{first})}",
    "solutionSteps": [
        {"step": 1, "title": "Identify Timeline Index", "explanation": "Beginning of Year 3 corresponds to t = 2 on cash flow diagram.", "calculation": "t_{first} = 2"},
        {"step": 2, "title": "Compute Annuity Value at t = 2 (Annuity Due Anchor)", "explanation": "P_2 = 35,000 × (P/A, 9%, 5) × 1.09 or as ordinary annuity discounted from t = 1:", "calculation": f"P_2 = 35,000 \\times 3.889651 \\times 1.09 = ₱148,390.20"},
        {"step": 3, "title": "Discount to Year 0 (P_0)", "explanation": "Discount by (1.09)^(-2):", "calculation": f"P_0 = \\frac{{136,137.80}}{{(1.09)^2}} = {format_peso(P0_86)}"}
    ],
    "finalAnswer": "₱114,584",
    "canonCalTech": {
        "calculator": "Canon F-789SGA",
        "mode": "COMP (Mode 1)",
        "keystrokes": ["35000 × ( 1 - 1.09 [xʸ] -5 ) ÷ 0.09 ÷ 1.09 [xʸ] 2 [=] ⟹ 114584.47"],
        "resultDisplay": "114584.47",
        "proTip": "Beginning of year k means t = k - 1. Discount the standard (P/A) factor by (1+i)^(k-1)."
    },
    "mentalModelOrTrap": "Always draw a timeline for advance payments: 'beginning of Year 3' is exactly t = 2."
})

# =========================================================================
# 87: Cash Price vs Installment Price Comparison
# =========================================================================
# Cash price: ₱450,000.
# Installment: 20% down, balance in 24 monthly payments of ₱18,500.
# Find nominal annual interest rate compounded monthly.
Cash87 = 450000; Down87 = 0.20 * Cash87 # 90000
Financed87 = Cash87 - Down87 # 360000
A87 = 18500; n87 = 24
# 360000 = 18500 * [1 - (1+i)^-24] / i => (1 - (1+i)^-24)/i = 19.459459
# Solving: i ≈ 0.0175 per month (1.75%/month) => nominal r = 12 * 1.75% = 21.0%
problems_81_110.append({
    "id": "dsp-econ-87",
    "problemNumber": 87,
    "weekDay": 2,
    "folderName": "economics sample problem",
    "sourceFile": "03_Annuities_Ordinary_Due_Deferred.pdf",
    "sourceDocumentName": "Doc 03: Cash vs Installment Rate",
    "category": "Annuities & Perpetuity",
    "topicTitle": "Nominal Interest Rate Charged on an Electrical Vehicle Installment Financing Scheme",
    "prcExamRef": "REE Board Exam Standard Problem",
    "difficulty": "Board Exam Standard",
    "question": "A utility inspection truck has a cash price of ₱450,000. It can be acquired with a 20% down payment and 24 monthly installments of ₱18,500 payable at the end of each month. What nominal annual interest rate compounded monthly is charged by the dealer?",
    "choices": [
        "A. 21.05% compounded monthly",
        "B. 19.50% compounded monthly",
        "C. 22.80% compounded monthly",
        "D. 18.25% compounded monthly"
    ],
    "correctLetter": "A",
    "shortcutSolution": "Financed = 360,000; (P/A, i, 24) = 360k / 18.5k = 19.4595; By trial or Canon SOLVE: i = 1.754%/mo; r = 12 × 1.754% = 21.05%",
    "given": [
        {"symbol": "Cash", "meaning": "List cash price", "value": "₱450,000"},
        {"symbol": "Down", "meaning": "20% down payment", "value": "₱90,000"},
        {"symbol": "P", "meaning": "Balance financed", "value": "₱360,000"},
        {"symbol": "A, n", "meaning": "Monthly installment and term", "value": "₱18,500 for 24 months"}
    ],
    "governingFormula": "P = A \\left[ \\frac{1 - (1 + i)^{-n}}{i} \\right]; \\quad r = 12 \\cdot i",
    "solutionSteps": [
        {"step": 1, "title": "Compute Amount Financed", "explanation": "Deduct 20% down payment from cash price:", "calculation": "P = 450,000 - (0.20 \\times 450,000) = ₱360,000"},
        {"step": 2, "title": "Set Up Annuity Equation", "explanation": "Equate financed amount to monthly annuity:", "calculation": "360,000 = 18,500 \\left[ \\frac{1 - (1 + i)^{-24}}{i} \\right] \\implies \\frac{1 - (1 + i)^{-24}}{i} = 19.459459"},
        {"step": 3, "title": "Solve for Periodic Rate i and Nominal r", "explanation": "Using Newton-Raphson / SOLVE:", "calculation": "i = 0.017544 = 1.7544\\%/\\text{month}; \\quad r = 12 \\times 1.7544\\% = 21.05\\%"}
    ],
    "finalAnswer": "21.05% compounded monthly",
    "canonCalTech": {
        "calculator": "Canon F-789SGA",
        "mode": "COMP (Mode 1)",
        "keystrokes": ["360000 = 18500 × ( 1 - ( 1 + X ) [xʸ] -24 ) ÷ X [SHIFT] [SOLVE] ⟹ X = 0.017544, × 12 [=] ⟹ 0.2105"],
        "resultDisplay": "21.05%",
        "proTip": "Use Canon F-789SGA [SHIFT] [SOLVE] with an initial guess of X = 0.015 to find the root in seconds."
    },
    "mentalModelOrTrap": "Total paid on installment = ₱90k + (24 × ₱18.5k) = ₱534,000. Interest paid is ₱84,000 on ₱360,000 borrowed."
})

# =========================================================================
# 88: Equivalence Between Two Payment Plans
# =========================================================================
# Plan A: ₱100,000 down, ₱60,000/yr for 5 yrs
# Plan B: ₱50,000 down, ₱X/yr for 5 yrs
# Both at i = 10%. Find X so that Plan B is economically equivalent to Plan A.
i88 = 0.10; n88 = 5
PW_factor88 = (1 - (1 + i88)**(-n88)) / i88 # 3.790787
PW_A88 = 100000 + 60000 * PW_factor88 # 100000 + 227447.21 = 327,447.21
# PW_B = 50000 + X * PW_factor88 = 327447.21
X88 = (PW_A88 - 50000) / PW_factor88 # 277447.21 / 3.790787 = 73,189.87
problems_81_110.append({
    "id": "dsp-econ-88",
    "problemNumber": 88,
    "weekDay": 2,
    "folderName": "economics sample problem",
    "sourceFile": "03_Annuities_Ordinary_Due_Deferred.pdf",
    "sourceDocumentName": "Doc 03: Cash Flow Equivalence",
    "category": "Annuities & Perpetuity",
    "topicTitle": "Equivalent Annual Payment between Two Competing Equipment Purchase Plans at 10%",
    "prcExamRef": "REE Board Exam Standard Problem",
    "difficulty": "Moderate",
    "question": "A contracting company has two payment options for a trenching machine at 10% interest: Option A requires ₱100,000 down plus ₱60,000 at the end of each year for 5 years. Option B requires ₱50,000 down plus equal annual payments of ₱X for 5 years. What must ₱X be for Option B to be economically equivalent to Option A?",
    "choices": [
        "A. ₱73,190",
        "B. ₱70,000",
        "C. ₱75,400",
        "D. ₱68,500"
    ],
    "correctLetter": "A",
    "shortcutSolution": "X = 60,000 + (100,000 - 50,000) · (A/P, 10%, 5) = 60,000 + 50,000 × 0.263797 = 60,000 + 13,189.87 = ₱73,189.87",
    "given": [
        {"symbol": "Plan A", "meaning": "₱100k down + ₱60k/yr for 5 yrs", "value": "Base plan"},
        {"symbol": "Plan B", "meaning": "₱50k down + ₱X/yr for 5 yrs", "value": "Equivalent plan"},
        {"symbol": "i", "meaning": "Interest rate", "value": "10% per annum"}
    ],
    "governingFormula": "\\text{PW}_A = \\text{PW}_B \\implies 100,000 + 60,000(P/A, i, 5) = 50,000 + X(P/A, i, 5)",
    "solutionSteps": [
        {"step": 1, "title": "Compute Present Worth of Plan A", "explanation": "Down payment + discounted annuity:", "calculation": f"\\text{{PW}}_A = 100,000 + 60,000 \\times 3.790787 = {format_peso(PW_A88)}"},
        {"step": 2, "title": "Set Equal to Plan B Present Worth", "explanation": "327,447.21 = 50,000 + X(3.790787):", "calculation": f"X \\times 3.790787 = 327,447.21 - 50,000 = ₱277,447.21"},
        {"step": 3, "title": "Solve for Annual Payment X", "explanation": "Divide by present worth annuity factor:", "calculation": f"X = \\frac{{277,447.21}}{{3.790787}} = {format_peso(X88)}"}
    ],
    "finalAnswer": "₱73,190",
    "canonCalTech": {
        "calculator": "Canon F-789SGA",
        "mode": "COMP (Mode 1)",
        "keystrokes": ["60000 + 50000 × 0.10 ÷ ( 1 - 1.10 [xʸ] -5 ) [=] ⟹ 73189.87"],
        "resultDisplay": "73189.87",
        "proTip": "Direct shortcut: X = 60,000 + ΔDown × (A/P, 10%, 5). One clean line on the calculator."
    },
    "mentalModelOrTrap": "The ₱50,000 saved on the down payment must be amortized over the 5 years at 10% and added to the annual payment."
})

# =========================================================================
# 89: Irregular Two-Stage Annuity
# =========================================================================
# Years 1-5: ₱30,000/yr. Years 6-10: ₱50,000/yr. i = 8%. Find P_0.
i89 = 0.08
P_stage1_89 = 30000 * ((1 - (1 + i89)**(-5)) / i89) # 30000 * 3.992710 = 119,781.30
P_stage2_at5_89 = 50000 * ((1 - (1 + i89)**(-5)) / i89) # 50000 * 3.992710 = 199,635.50
P_stage2_at0_89 = P_stage2_at5_89 * (1 + i89)**(-5) # 199635.50 * 0.680583 = 135,868.53
P_tot89 = P_stage1_89 + P_stage2_at0_89 # 255,649.83
problems_81_110.append({
    "id": "dsp-econ-89",
    "problemNumber": 89,
    "weekDay": 2,
    "folderName": "economics sample problem",
    "sourceFile": "03_Annuities_Ordinary_Due_Deferred.pdf",
    "sourceDocumentName": "Doc 03: Two-Stage Stepped Annuity",
    "category": "Annuities & Perpetuity",
    "topicTitle": "Present Worth of a Stepped Two-Stage 10-Year Annuity at 8% Interest",
    "prcExamRef": "REE Board Exam Standard Problem",
    "difficulty": "Moderate",
    "question": "An engineering franchise yields ₱30,000 per year at the end of each year for the first 5 years, and ₱50,000 per year for the subsequent 5 years (Years 6 through 10). If the appropriate discount rate is 8% per annum, what is the present worth of this 10-year income stream at Year 0?",
    "choices": [
        "A. ₱255,650",
        "B. ₱242,800",
        "C. ₱268,400",
        "D. ₱250,000"
    ],
    "correctLetter": "A",
    "shortcutSolution": "P = 30,000(P/A, 8%, 5) + 50,000(P/A, 8%, 5)(1.08)^{-5} = ₱119,781.30 + ₱135,868.53 = ₱255,649.83",
    "given": [
        {"symbol": "A_1", "meaning": "Annual income for Years 1 to 5", "value": "₱30,000"},
        {"symbol": "A_2", "meaning": "Annual income for Years 6 to 10", "value": "₱50,000"},
        {"symbol": "i", "meaning": "Discount rate", "value": "8% per annum"}
    ],
    "governingFormula": "P_0 = A_1(P/A, i, 5) + A_2(P/A, i, 5)(1 + i)^{-5}",
    "solutionSteps": [
        {"step": 1, "title": "Compute Present Worth of First 5 Years", "explanation": "P_1 = 30,000 × (P/A, 8%, 5):", "calculation": f"P_1 = 30,000 \\times 3.992710 = {format_peso(P_stage1_89)}"},
        {"step": 2, "title": "Compute Present Worth of Second 5 Years", "explanation": "P_2 = 50,000 × (P/A, 8%, 5) discounted back 5 years:", "calculation": f"P_2 = 50,000 \\times 3.992710 \\times (1.08)^{{-5}} = {format_peso(P_stage2_at0_89)}"},
        {"step": 3, "title": "Sum Both Present Worths", "explanation": "P_total = P_1 + P_2:", "calculation": f"P_{{tot}} = 119,781.30 + 135,868.53 = {format_peso(P_tot89)}"}
    ],
    "finalAnswer": "₱255,650",
    "canonCalTech": {
        "calculator": "Canon F-789SGA",
        "mode": "COMP (Mode 1)",
        "keystrokes": ["( 30000 + 50000 × 1.08 [xʸ] -5 ) × ( 1 - 1.08 [xʸ] -5 ) ÷ 0.08 [=] ⟹ 255649.83"],
        "resultDisplay": "255649.83",
        "proTip": "Factor out (P/A, 8%, 5): P = (30,000 + 50,000 × 1.08^-5) × (P/A, 8%, 5) for ultra-fast calculation."
    },
    "mentalModelOrTrap": "Alternatively, view as ₱30,000/yr for 10 years plus an extra ₱20,000/yr deferred from years 6 to 10."
})

# =========================================================================
# 90: Annuity with Continuous Cash Flow
# =========================================================================
# A flows uniformly at rate ₱60,000 per year for 8 years. Interest is 9% continuous.
# P = A * (1 - e^-rt) / r = 60,000 * (1 - e^(-0.09 * 8)) / 0.09
r90 = 0.09; t90 = 8.0; A90 = 60000
P90 = A90 * ((1 - math.exp(-r90 * t90)) / r90) # 60000 * (1 - e^-0.72) / 0.09 = 60000 * (1 - 0.486752) / 0.09 = 342,165.17
problems_81_110.append({
    "id": "dsp-econ-90",
    "problemNumber": 90,
    "weekDay": 2,
    "folderName": "economics sample problem",
    "sourceFile": "02_Effective_Rates_Continuous_Compounding.pdf",
    "sourceDocumentName": "Doc 02: Continuous Cash Flow Annuity",
    "category": "Annuities & Perpetuity",
    "topicTitle": "Present Worth of Continuous Uniform Cash Flow Stream over 8 Years at 9%",
    "prcExamRef": "REE Board Exam Standard Problem",
    "difficulty": "Advanced",
    "question": "A run-of-river hydro generation facility produces electrical revenue flowing continuously at an average uniform rate of ₱60,000 per year over an 8-year operational phase. If the nominal interest rate is 9% compounded continuously, what is the present worth of this continuous income stream?",
    "choices": [
        "A. ₱342,165",
        "B. ₱332,080",
        "C. ₱355,400",
        "D. ₱325,900"
    ],
    "correctLetter": "A",
    "shortcutSolution": "P = \\bar{A} · [1 - e^{-rt}] / r = 60,000 × [1 - e^{-0.72}] / 0.09 = 60,000 × 5.702753 = ₱342,165.17",
    "given": [
        {"symbol": "\\bar{A}", "meaning": "Continuous revenue flow rate", "value": "₱60,000 per year"},
        {"symbol": "r", "meaning": "Nominal continuous interest rate", "value": "9% per year"},
        {"symbol": "t", "meaning": "Duration of continuous flow", "value": "8 years"}
    ],
    "governingFormula": "P = \\bar{A} \\left[ \\frac{1 - e^{-r \\cdot t}}{r} \\right]",
    "solutionSteps": [
        {"step": 1, "title": "Evaluate Exponent Term (-rt)", "explanation": "-0.09 × 8 = -0.72:", "calculation": "e^{-0.72} = 0.486752"},
        {"step": 2, "title": "Compute Continuous Annuity Factor", "explanation": "[1 - e^(-0.72)] / 0.09:", "calculation": "\\frac{1 - 0.486752}{0.09} = \\frac{0.513248}{0.09} = 5.702753"},
        {"step": 3, "title": "Calculate Present Worth P", "explanation": "Multiply continuous flow rate by factor:", "calculation": f"P = 60,000 \\times 5.702753 = {format_peso(P90)}"}
    ],
    "finalAnswer": "₱342,165",
    "canonCalTech": {
        "calculator": "Canon F-789SGA",
        "mode": "COMP (Mode 1)",
        "keystrokes": ["60000 × ( 1 - [SHIFT] [ln] ( -0.09 × 8 ) ) ÷ 0.09 [=] ⟹ 342165.17"],
        "resultDisplay": "342165.17",
        "proTip": "On Canon F-789SGA, [SHIFT] [ln] calculates e^x."
    },
    "mentalModelOrTrap": "Continuous cash flow is slightly greater than ordinary annuity (₱342,165 vs ₱332,086) because funds are received throughout the year rather than at year-end."
})

print("Problems 81 to 90 complete.")
