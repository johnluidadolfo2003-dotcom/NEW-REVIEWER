# -*- coding: utf-8 -*-
"""
Generates problems 61 through 175 for src/data/driveSampleProblems.ts
"""
import math
import json

def format_peso(val):
    return f"₱{val:,.2f}"

def format_peso_int(val):
    return f"₱{round(val):,}"

new_problems = []

def add_p(p):
    new_problems.append(p)

# =========================================================================
# Problems 61-70: Simple & Compound Interest, Effective Rates, Discount
# =========================================================================

# 61: Exact vs Ordinary Interest
P61 = 150000; r61 = 0.12; days61 = 90
I_ord61 = P61 * r61 * (days61 / 360.0)
I_ex61 = P61 * r61 * (days61 / 365.0)
diff61 = I_ord61 - I_ex61
add_p({
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
    "shortcutSolution": "ΔI = P · r · d · (1/360 - 1/365) = 150,000 × 0.12 × 90 × (5 / (360 × 365)) = ₱61.64",
    "given": [
        {"symbol": "P", "meaning": "Principal face value", "value": "₱150,000"},
        {"symbol": "r", "meaning": "Annual simple interest rate", "value": "12%"},
        {"symbol": "d", "meaning": "Number of days", "value": "90 days"}
    ],
    "governingFormula": "I_{ord} = P \\cdot r \\cdot \\frac{d}{360}; \\quad I_{exact} = P \\cdot r \\cdot \\frac{d}{365}",
    "solutionSteps": [
        {"step": 1, "title": "Compute Ordinary Interest", "explanation": "Using 360 days per banker's year:", "calculation": f"I_{{ord}} = 150,000 \\times 0.12 \\times \\frac{{90}}{{360}} = {format_peso(I_ord61)}"},
        {"step": 2, "title": "Compute Exact Simple Interest", "explanation": "Using 365 days per calendar year:", "calculation": f"I_{{exact}} = 150,000 \\times 0.12 \\times \\frac{{90}}{{365}} = {format_peso(I_ex61)}"},
        {"step": 3, "title": "Determine Difference", "explanation": "Ordinary interest exceeds exact interest by:", "calculation": f"\\Delta I = {I_ord61:.2f} - {I_ex61:.2f} = {format_peso(diff61)}"}
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
F62 = 200000; d62 = 0.10; t62 = 0.75
D62 = F62 * d62 * t62
P62 = F62 - D62
eff_rate62 = D62 / (P62 * t62)
add_p({
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
    "shortcutSolution": "P = F(1 - dt) = 200,000(1 - 0.10 × 0.75) = ₱185,000; i_{true} = d / (1 - dt) = 0.10 / (1 - 0.075) = 10.81%",
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
F63 = P63 * math.exp(r63 * t63)
I63 = F63 - P63
add_p({
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
    "shortcutSolution": "F = P · e^{rt} = 80,000 × e^{0.095 × 6} = 80,000 × e^{0.57} = ₱141,459.72; I = ₱61,459.72",
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

# 64: Nominal vs Effective Annual Rate (EAR)
r64 = 0.12
ear_semi = (1 + r64/2)**2 - 1
ear_quart = (1 + r64/4)**4 - 1
ear_month = (1 + r64/12)**12 - 1
ear_cont = math.exp(r64) - 1
add_p({
    "id": "dsp-econ-64",
    "problemNumber": 64,
    "weekDay": 1,
    "folderName": "economics sample problem",
    "sourceFile": "01_Compound_Interest_Time_Value_Money.pdf",
    "sourceDocumentName": "Doc 01: Effective Annual Rates",
    "category": "Simple & Compound Interest",
    "topicTitle": "Nominal Rate of 12% under Different Compounding Frequencies vs Continuous Compounding",
    "prcExamRef": "REE Board Exam Standard Problem",
    "difficulty": "Board Exam Standard",
    "question": "A financial institution advertises a nominal loan rate of 12% per annum. What are the corresponding Effective Annual Rates (EAR) if compounding is performed: (a) quarterly, (b) monthly, and (c) continuously?",
    "choices": [
        "A. Quarterly: 12.55% | Monthly: 12.68% | Continuous: 12.75%",
        "B. Quarterly: 12.00% | Monthly: 12.36% | Continuous: 12.50%",
        "C. Quarterly: 12.42% | Monthly: 12.55% | Continuous: 12.68%",
        "D. Quarterly: 12.68% | Monthly: 12.82% | Continuous: 13.00%"
    ],
    "correctLetter": "A",
    "shortcutSolution": "EAR_{q} = (1 + 0.12/4)^4 - 1 = 12.55%; EAR_{m} = (1 + 0.12/12)^{12} - 1 = 12.68%; EAR_{cont} = e^{0.12} - 1 = 12.75%",
    "given": [
        {"symbol": "r", "meaning": "Nominal interest rate", "value": "12% per year"},
        {"symbol": "m", "meaning": "Compounding frequencies", "value": "Quarterly (4), Monthly (12), Continuous (∞)"}
    ],
    "governingFormula": "EAR = \\left(1 + \\frac{r}{m}\\right)^m - 1; \\quad EAR_{cont} = e^r - 1",
    "solutionSteps": [
        {"step": 1, "title": "Quarterly Compounding (m = 4)", "explanation": "EAR = (1 + 0.03)^4 - 1 = 1.125509 - 1 = 12.55%", "calculation": f"EAR_q = (1.03)^4 - 1 = {ear_quart*100:.2f}\\%"},
        {"step": 2, "title": "Monthly Compounding (m = 12)", "explanation": "EAR = (1 + 0.01)^12 - 1 = 1.126825 - 1 = 12.68%", "calculation": f"EAR_m = (1.01)^{{12}} - 1 = {ear_month*100:.2f}\\%"},
        {"step": 3, "title": "Continuous Compounding (m → ∞)", "explanation": "EAR = e^(0.12) - 1 = 1.127497 - 1 = 12.75%", "calculation": f"EAR_{{cont}} = e^{{0.12}} - 1 = {ear_cont*100:.2f}\\%"}
    ],
    "finalAnswer": "Quarterly: 12.55% | Monthly: 12.68% | Continuous: 12.75%",
    "canonCalTech": {
        "calculator": "Canon F-789SGA",
        "mode": "COMP (Mode 1)",
        "keystrokes": [
            "( 1 + 0.12 ÷ 4 ) [xʸ] 4 - 1 [=] ⟹ 0.125509",
            "( 1 + 0.01 ) [xʸ] 12 - 1 [=] ⟹ 0.126825",
            "[SHIFT] [ln] 0.12 - 1 [=] ⟹ 0.127497"
        ],
        "resultDisplay": "12.55% | 12.68% | 12.75%",
        "proTip": "As m increases, EAR approaches e^r - 1 as an absolute mathematical asymptote."
    },
    "mentalModelOrTrap": "More frequent compounding yields higher effective rate; continuous compounding is the theoretical maximum."
})

# 65: Doubling Time Exact vs Rule of 72
r65 = 0.085 # 8.5% compounded annually
t_exact65 = math.log(2) / math.log(1 + r65) # 8.496 years
t_rule72_65 = 72 / 8.5 # 8.47 years
add_p({
    "id": "dsp-econ-65",
    "problemNumber": 65,
    "weekDay": 1,
    "folderName": "economics sample problem",
    "sourceFile": "01_Compound_Interest_Time_Value_Money.pdf",
    "sourceDocumentName": "Doc 01: Doubling Time & Rule of 72",
    "category": "Simple & Compound Interest",
    "topicTitle": "Capital Doubling Time: Exact Logarithmic Formula vs Quick Rule of 72",
    "prcExamRef": "REE Board Exam Standard Problem",
    "difficulty": "Moderate",
    "question": "An investor deposits funds into a solar power development bond earning 8.5% per annum compounded annually. Determine the exact time in years required for the principal to double, and compare it with the quick estimate given by the Rule of 72.",
    "choices": [
        "A. Exact: 8.50 years | Rule of 72: 8.47 years",
        "B. Exact: 9.12 years | Rule of 72: 8.47 years",
        "C. Exact: 8.16 years | Rule of 72: 8.00 years",
        "D. Exact: 8.75 years | Rule of 72: 8.90 years"
    ],
    "correctLetter": "A",
    "shortcutSolution": "t_{exact} = ln(2) / ln(1.085) = 0.693147 / 0.081580 = 8.496 ≈ 8.50 years; Rule of 72: 72 / 8.5 = 8.47 years",
    "given": [
        {"symbol": "i", "meaning": "Annual compound interest rate", "value": "8.5%"},
        {"symbol": "F/P", "meaning": "Ratio of future value to present value", "value": "2.0 (doubling)"}
    ],
    "governingFormula": "2 = (1 + i)^n \\implies n = \\frac{\\ln(2)}{\\ln(1 + i)}; \\quad n_{est} \\approx \\frac{72}{i(\\%)}",
    "solutionSteps": [
        {"step": 1, "title": "Apply Exact Logarithmic Formula", "explanation": "Taking natural log of both sides:", "calculation": f"n = \\frac{{\\ln(2)}}{{\\ln(1.085)}} = \\frac{{0.693147}}{{0.081580}} = {t_exact65:.2f} \\text{{ years}}"},
        {"step": 2, "title": "Apply Quick Rule of 72", "explanation": "Rule of 72 approximation:", "calculation": f"n_{{est}} = \\frac{{72}}{{8.5}} = {t_rule72_65:.2f} \\text{{ years}}"}
    ],
    "finalAnswer": "Exact: 8.50 years | Rule of 72: 8.47 years",
    "canonCalTech": {
        "calculator": "Canon F-789SGA",
        "mode": "COMP (Mode 1)",
        "keystrokes": ["[ln] 2 ÷ [ln] 1.085 [=] ⟹ 8.4965"],
        "resultDisplay": "8.50 years",
        "proTip": "On Canon F-789SGA, [ln] is directly accessible without shift."
    },
    "mentalModelOrTrap": "Rule of 72 is extremely accurate for interest rates between 6% and 10% (error < 1%)."
})

print("Problems 61 to 65 generated.")
