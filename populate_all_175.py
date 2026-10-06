# -*- coding: utf-8 -*-
import json
import math

def format_peso(val):
    return f"₱{val:,.2f}"

def format_peso_int(val):
    return f"₱{round(val):,}"

problems = []

# =========================================================================
# Problems 61 - 70: Simple & Compound Interest, Effective Rates, Discount
# =========================================================================

# 61: Exact vs Ordinary Interest on Promissory Note
P61 = 150000; r61 = 0.12; days61 = 90
I_ord61 = P61 * r61 * (days61 / 360.0) # 4500
I_ex61 = P61 * r61 * (days61 / 365.0)  # 4438.36
diff61 = I_ord61 - I_ex61 # 61.64
problems.append({
    "id": "dsp-econ-61",
    "problemNumber": 61,
    "weekDay": 1,
    "folderName": "economics sample problem",
    "sourceFile": "01_Compound_Interest_Time_Value_Money.pdf",
    "sourceDocumentName": "Doc 01: Simple Interest & Promissory Notes",
    "category": "Simple & Compound Interest",
    "topicTitle": "Banker's Ordinary vs Exact Simple Interest on Commercial Paper",
    "prcExamRef": "REE Board Exam Standard Problem",
    "difficulty": "Foundation",
    "question": "A contracting firm discounts a 90-day promissory note with a face value of ₱150,000 at a simple interest rate of 12% per annum. Determine the difference between the ordinary (Banker's rule) interest and the exact simple interest earned by the financing bank.",
    "choices": [
        "A. ₱61.64 (Ordinary exceeds Exact)",
        "B. ₱75.00 (Ordinary exceeds Exact)",
        "C. ₱52.40 (Exact exceeds Ordinary)",
        "D. ₱84.15 (Ordinary exceeds Exact)"
    ],
    "correctLetter": "A",
    "shortcutSolution": f"\\Delta I = P \\cdot r \\cdot t \\left(\\frac{{1}}{{360}} - \\frac{{1}}{{365}}\\right) = 150,000 \\times 0.12 \\times 90 \\times \\left(\\frac{{5}}{{360 \\times 365}}\\right) = ₱61.64",
    "given": [
        {"symbol": "P", "meaning": "Principal face value", "value": "₱150,000"},
        {"symbol": "r", "meaning": "Annual simple interest rate", "value": "12%"},
        {"symbol": "d", "meaning": "Number of days", "value": "90 days"}
    ],
    "governingFormula": "I_{ord} = P \\cdot r \\cdot \\frac{d}{360}; \\quad I_{exact} = P \\cdot r \\cdot \\frac{d}{365}",
    "solutionSteps": [
        {"step": 1, "title": "Compute Ordinary Interest", "explanation": "Using 360 days per banker's year:", "calculation": f"I_{{ord}} = 150,000 \\times 0.12 \\times \\frac{{90}}{{360}} = {format_peso(I_ord61)}"},
        {"step": 2, "title": "Compute Exact Simple Interest", "explanation": "Using 365 days per calendar year:", "calculation": f"I_{{exact}} = 150,000 \\times 0.12 \\times \\frac{{90}}{{365}} = {format_peso(I_ex61)}"},
        {"step": 3, "title": "Determine Difference", "explanation": "Ordinary interest exceeds exact interest by:", "calculation": f"\\text{{Diff}} = {I_ord61:.2f} - {I_ex61:.2f} = {format_peso(diff61)}"}
    ],
    "finalAnswer": "₱61.64 (Ordinary exceeds Exact)",
    "canonCalTech": {
        "calculator": "Canon F-789SGA",
        "mode": "COMP (Mode 1)",
        "keystrokes": ["150000 × 0.12 × 90 × ( 1 ÷ 360 - 1 ÷ 365 ) [=] ⟹ 61.6438"],
        "resultDisplay": "61.64",
        "proTip": "Store 150000×0.12×90 in Ans, then multiply by (1/360 - 1/365) in one keystroke."
    },
    "mentalModelOrTrap": "Banker's rule (360 days) always yields a higher interest charge than exact interest (365 days)."
})

# 62: Bank Discount vs Simple Interest
F62 = 200000; d62 = 0.10; t62 = 0.75 # 9 months
D62 = F62 * d62 * t62 # 15000
P62 = F62 - D62 # 185000
eff_rate62 = D62 / (P62 * t62) # 0.108108 => 10.81%
problems.append({
    "id": "dsp-econ-62",
    "problemNumber": 62,
    "weekDay": 1,
    "folderName": "economics sample problem",
    "sourceFile": "01_Compound_Interest_Time_Value_Money.pdf",
    "sourceDocumentName": "Doc 01: Bank Discount & Effective Yield",
    "category": "Simple & Compound Interest",
    "topicTitle": "Bank Discount Rate vs True Simple Interest Rate Yield",
    "prcExamRef": "REE Board Exam Standard Problem",
    "difficulty": "Moderate",
    "question": "An electrical contractor signs a 9-month promissory note for ₱200,000 at a bank that charges a discount rate of 10% per annum. What are the net cash proceeds received by the contractor today, and what is the true effective simple interest rate being paid on the borrowed proceeds?",
    "choices": [
        "A. Proceeds: ₱185,000 | True Rate: 10.81%",
        "B. Proceeds: ₱180,000 | True Rate: 11.11%",
        "C. Proceeds: ₱185,000 | True Rate: 10.00%",
        "D. Proceeds: ₱190,000 | True Rate: 9.25%"
    ],
    "correctLetter": "A",
    "shortcutSolution": f"P = F(1 - dt) = 200,000(1 - 0.10 \\times 0.75) = ₱185,000; \\quad i_{{true}} = \\frac{{d}}{{1 - dt}} = \\frac{{0.10}}{{1 - 0.075}} = 10.81\\%",
    "given": [
        {"symbol": "F", "meaning": "Face value of note", "value": "₱200,000"},
        {"symbol": "d", "meaning": "Bank discount rate", "value": "10% per year"},
        {"symbol": "t", "meaning": "Time period", "value": "9 months = 0.75 year"}
    ],
    "governingFormula": "P = F(1 - d \\cdot t); \\quad i_{true} = \\frac{D}{P \\cdot t} = \\frac{d}{1 - d \\cdot t}",
    "solutionSteps": [
        {"step": 1, "title": "Compute Discount Amount", "explanation": "Bank deducts discount up front:", "calculation": f"D = 200,000 \\times 0.10 \\times 0.75 = {format_peso(D62)}"},
        {"step": 2, "title": "Compute Net Proceeds", "explanation": "Cash received today:", "calculation": f"P = 200,000 - 15,000 = {format_peso(P62)}"},
        {"step": 3, "title": "Compute True Simple Interest Rate", "explanation": "Based on actual capital used:", "calculation": f"i = \\frac{{15,000}}{{185,000 \\times 0.75}} = {eff_rate62*100:.2f}\\%"}
    ],
    "finalAnswer": "Proceeds: ₱185,000 | True Rate: 10.81%",
    "canonCalTech": {
        "calculator": "Canon F-789SGA",
        "mode": "COMP (Mode 1)",
        "keystrokes": ["0.10 ÷ ( 1 - 0.10 × 0.75 ) [=] ⟹ 0.108108"],
        "resultDisplay": "10.81%",
        "proTip": "Use shortcut formula i = d / (1 - dt) directly on your Canon to find the true rate in 5 seconds."
    },
    "mentalModelOrTrap": "Discount rate is deducted from the future value F; simple interest is added to the present principal P. True interest rate is always higher than discount rate."
})

# 63: Continuous Compounding Future Value
P63 = 80000; r63 = 0.095; t63 = 6.0
F63 = P63 * math.exp(r63 * t63) # 80000 * exp(0.57) = 141,459.72
I63 = F63 - P63
problems.append({
    "id": "dsp-econ-63",
    "problemNumber": 63,
    "weekDay": 1,
    "folderName": "economics sample problem",
    "sourceFile": "01_Compound_Interest_Time_Value_Money.pdf",
    "sourceDocumentName": "Doc 01: Continuous Compounding",
    "category": "Simple & Compound Interest",
    "topicTitle": "Continuous Compounding of Substation Emergency Fund",
    "prcExamRef": "REE Board Exam Standard Problem",
    "difficulty": "Moderate",
    "question": "A rural electric cooperative deposits ₱80,000 into a high-yield emergency reserve fund that earns 9.5% nominal interest compounded continuously. What is the total accumulated balance and total compound interest earned at the end of 6 years?",
    "choices": [
        "A. Balance: ₱141,460 | Interest: ₱61,460",
        "B. Balance: ₱138,250 | Interest: ₱58,250",
        "C. Balance: ₱145,820 | Interest: ₱65,820",
        "D. Balance: ₱139,940 | Interest: ₱59,940"
    ],
    "correctLetter": "A",
    "shortcutSolution": f"F = P e^{{rt}} = 80,000 \\times e^{{0.095 \\times 6}} = 80,000 \\times e^{{0.57}} = ₱141,459.72; \\quad I = ₱61,459.72",
    "given": [
        {"symbol": "P", "meaning": "Principal deposited", "value": "₱80,000"},
        {"symbol": "r", "meaning": "Nominal continuous compounding rate", "value": "9.5% per annum"},
        {"symbol": "t", "meaning": "Investment horizon", "value": "6 years"}
    ],
    "governingFormula": "F = P \\cdot e^{r \\cdot t}; \\quad I = F - P",
    "solutionSteps": [
        {"step": 1, "title": "Compute Continuous Compound Factor", "explanation": "e^(0.095 × 6) = e^(0.57):", "calculation": f"e^{{0.57}} = {math.exp(0.57):.6f}"},
        {"step": 2, "title": "Calculate Future Worth F", "explanation": "Multiply principal by compound factor:", "calculation": f"F = 80,000 \\times {math.exp(0.57):.6f} = {format_peso(F63)}"},
        {"step": 3, "title": "Calculate Total Interest Earned", "explanation": "Subtract initial principal:", "calculation": f"I = {F63:.2f} - 80,000 = {format_peso(I63)}"}
    ],
    "finalAnswer": "Balance: ₱141,460 | Interest: ₱61,460",
    "canonCalTech": {
        "calculator": "Canon F-789SGA",
        "mode": "COMP (Mode 1)",
        "keystrokes": ["80000 × [SHIFT] [ln] ( 0.095 × 6 ) [=] ⟹ 141459.72"],
        "resultDisplay": "141459.72",
        "proTip": "On Canon F-789SGA, [SHIFT] [ln] gives the natural exponential function e^x."
    },
    "mentalModelOrTrap": "Continuous compounding gives the mathematical upper limit of compound interest for a given nominal rate."
})

# Save partial checkpoint
print("Loaded first batch of problems.")
