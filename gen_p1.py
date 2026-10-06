# -*- coding: utf-8 -*-
"""
Problems 61 to 90 for Engineering Economics (Sample Problem Bank)
"""
import math

def format_peso(val):
    return f"₱{val:,.2f}"

def format_peso_int(val):
    return f"₱{round(val):,}"

problems_61_90 = []

# =========================================================================
# 61: Banker's Ordinary vs Exact Simple Interest
# =========================================================================
P61 = 150000; r61 = 0.12; days61 = 90
I_ord61 = P61 * r61 * (days61 / 360.0)
I_ex61 = P61 * r61 * (days61 / 365.0)
diff61 = I_ord61 - I_ex61
problems_61_90.append({
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

# =========================================================================
# 62: Bank Discount Rate vs True Simple Interest
# =========================================================================
F62 = 200000; d62 = 0.10; t62 = 0.75
D62 = F62 * d62 * t62
P62 = F62 - D62
eff_rate62 = D62 / (P62 * t62)
problems_61_90.append({
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

# =========================================================================
# 63: Continuous Compounding Future Value
# =========================================================================
P63 = 80000; r63 = 0.095; t63 = 6.0
F63 = P63 * math.exp(r63 * t63)
I63 = F63 - P63
problems_61_90.append({
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

# =========================================================================
# 64: Nominal vs Effective Annual Rate (EAR)
# =========================================================================
r64 = 0.12
ear_semi64 = (1 + r64/2)**2 - 1
ear_quart64 = (1 + r64/4)**4 - 1
ear_month64 = (1 + r64/12)**12 - 1
ear_cont64 = math.exp(r64) - 1
problems_61_90.append({
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
        {"step": 1, "title": "Quarterly Compounding (m = 4)", "explanation": "EAR = (1 + 0.03)^4 - 1 = 1.125509 - 1 = 12.55%", "calculation": f"EAR_q = (1.03)^4 - 1 = {ear_quart64*100:.2f}\\%"},
        {"step": 2, "title": "Monthly Compounding (m = 12)", "explanation": "EAR = (1 + 0.01)^12 - 1 = 1.126825 - 1 = 12.68%", "calculation": f"EAR_m = (1.01)^{{12}} - 1 = {ear_month64*100:.2f}\\%"},
        {"step": 3, "title": "Continuous Compounding (m → ∞)", "explanation": "EAR = e^(0.12) - 1 = 1.127497 - 1 = 12.75%", "calculation": f"EAR_{{cont}} = e^{{0.12}} - 1 = {ear_cont64*100:.2f}\\%"}
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

# =========================================================================
# 65: Doubling Time Exact vs Rule of 72
# =========================================================================
r65 = 0.085
t_exact65 = math.log(2) / math.log(1 + r65)
t_rule72_65 = 72 / 8.5
problems_61_90.append({
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

# =========================================================================
# 66: Equivalent Interest Rates (Quarterly vs Monthly)
# =========================================================================
# Find nominal rate r_q compounded quarterly equivalent to 10% compounded monthly
r_m66 = 0.10
# (1 + r_q/4)^4 = (1 + 0.10/12)^12
# 1 + r_q/4 = (1 + 0.10/12)^3
r_q66 = 4 * ((1 + r_m66/12)**3 - 1) # 0.100836 => 10.08%
problems_61_90.append({
    "id": "dsp-econ-66",
    "problemNumber": 66,
    "weekDay": 1,
    "folderName": "economics sample problem",
    "sourceFile": "02_Effective_Rates_Continuous_Compounding.pdf",
    "sourceDocumentName": "Doc 02: Equivalent Rates & Compounding Conversions",
    "category": "Simple & Compound Interest",
    "topicTitle": "Nominal Rate Compounded Quarterly Equivalent to 10% Compounded Monthly",
    "prcExamRef": "REE Board Exam Standard Problem",
    "difficulty": "Moderate",
    "question": "What nominal annual rate of interest compounded quarterly is economically equivalent to a nominal rate of 10% per annum compounded monthly?",
    "choices": [
        "A. 10.08% compounded quarterly",
        "B. 10.25% compounded quarterly",
        "C. 9.92% compounded quarterly",
        "D. 10.42% compounded quarterly"
    ],
    "correctLetter": "A",
    "shortcutSolution": "1 + r_q/4 = (1 + 0.10/12)^3 \\implies r_q = 4[(1.008333)^3 - 1] = 4(0.025209) = 10.08%",
    "given": [
        {"symbol": "r_m", "meaning": "Nominal rate compounded monthly", "value": "10% per annum (m = 12)"},
        {"symbol": "m_q", "meaning": "Target compounding frequency", "value": "Quarterly (m = 4)"}
    ],
    "governingFormula": "\\left(1 + \\frac{r_q}{4}\\right)^4 = \\left(1 + \\frac{r_m}{12}\\right)^{12}",
    "solutionSteps": [
        {"step": 1, "title": "Equate Effective Annual Rates", "explanation": "Both rates must generate identical effective annual multipliers:", "calculation": "\\left(1 + \\frac{r_q}{4}\\right)^4 = \\left(1 + \\frac{0.10}{12}\\right)^{12}"},
        {"step": 2, "title": "Take 4th Root of Both Sides", "explanation": "Divide exponent by 4:", "calculation": "1 + \\frac{r_q}{4} = \\left(1 + \\frac{0.10}{12}\\right)^3 = (1.008333)^3 = 1.025209"},
        {"step": 3, "title": "Solve for r_q", "explanation": "Subtract 1 and multiply by 4:", "calculation": f"r_q = 4 \\times 0.025209 = {r_q66*100:.2f}\\%"}
    ],
    "finalAnswer": "10.08% compounded quarterly",
    "canonCalTech": {
        "calculator": "Canon F-789SGA",
        "mode": "COMP (Mode 1)",
        "keystrokes": ["4 × ( ( 1 + 0.10 ÷ 12 ) [xʸ] 3 - 1 ) [=] ⟹ 0.100836"],
        "resultDisplay": "10.08%",
        "proTip": "Notice 12/4 = 3, so simply raise the monthly factor to power 3, subtract 1, and multiply by 4."
    },
    "mentalModelOrTrap": "Because quarterly compounds less frequently than monthly, its nominal rate must be slightly higher (10.08% vs 10.00%) to match the yield."
})

# =========================================================================
# 67: Discounting Future Cash Flow to Present Worth
# =========================================================================
F67 = 500000; r67 = 0.11; m67 = 2; t67 = 8
i_per67 = r67 / m67 # 0.055
n_tot67 = m67 * t67 # 16
P67 = F67 / ((1 + i_per67)**n_tot67) # 500000 / (1.055^16) = 212,414.92
problems_61_90.append({
    "id": "dsp-econ-67",
    "problemNumber": 67,
    "weekDay": 1,
    "folderName": "economics sample problem",
    "sourceFile": "01_Compound_Interest_Time_Value_Money.pdf",
    "sourceDocumentName": "Doc 01: Present Worth Discounting",
    "category": "Simple & Compound Interest",
    "topicTitle": "Present Worth of Future Substation Expansion Fund at Semi-Annual Interest",
    "prcExamRef": "REE Board Exam Standard Problem",
    "difficulty": "Foundation",
    "question": "A distribution utility will require ₱500,000 for a power transformer refurbishment exactly 8 years from now. If invested funds earn 11% nominal interest compounded semi-annually, what lump-sum amount must be set aside today to meet this future obligation?",
    "choices": [
        "A. ₱212,415",
        "B. ₱218,650",
        "C. ₱205,320",
        "D. ₱224,800"
    ],
    "correctLetter": "A",
    "shortcutSolution": "P = F(1 + r/m)^{-mt} = 500,000(1 + 0.055)^{-16} = 500,000 × 0.424830 = ₱212,414.92",
    "given": [
        {"symbol": "F", "meaning": "Future refurbishment cost", "value": "₱500,000"},
        {"symbol": "r", "meaning": "Nominal interest rate", "value": "11% per annum"},
        {"symbol": "m", "meaning": "Compounding frequency", "value": "Semi-annually (2)"},
        {"symbol": "t", "meaning": "Time period", "value": "8 years (n = 16 periods)"}
    ],
    "governingFormula": "P = \\frac{F}{\\left(1 + \\frac{r}{m}\\right)^{m \\cdot t}} = F\\left(1 + i\\right)^{-n}",
    "solutionSteps": [
        {"step": 1, "title": "Determine Periodic Rate and Periods", "explanation": "Semi-annual periodic rate and total periods:", "calculation": "i = \\frac{0.11}{2} = 0.055; \\quad n = 2 \\times 8 = 16"},
        {"step": 2, "title": "Compute Present Worth Discount Factor", "explanation": "(1 + 0.055)^(-16):", "calculation": "(1.055)^{-16} = 0.424830"},
        {"step": 3, "title": "Calculate Present Worth P", "explanation": "Multiply future worth by discount factor:", "calculation": f"P = 500,000 \\times 0.424830 = {format_peso(P67)}"}
    ],
    "finalAnswer": "₱212,415",
    "canonCalTech": {
        "calculator": "Canon F-789SGA",
        "mode": "COMP (Mode 1)",
        "keystrokes": ["500000 ÷ ( 1 + 0.11 ÷ 2 ) [xʸ] 16 [=] ⟹ 212414.92"],
        "resultDisplay": "212414.92",
        "proTip": "Enter directly as 500000 × ( 1.055 ) [xʸ] -16 to save steps."
    },
    "mentalModelOrTrap": "Remember that semi-annual doubling of periods (8 × 2 = 16) must be paired with halving of the annual rate (11% / 2 = 5.5%)."
})

# =========================================================================
# 68: Variable Multi-Stage Interest Rates
# =========================================================================
P68 = 100000
F1_68 = P68 * (1 + 0.08)**3   # Year 3
F2_68 = F1_68 * (1 + 0.10)**4 # Year 7
F3_68 = F2_68 * (1 + 0.12)**3 # Year 10
# 100000 * 1.08^3 * 1.10^4 * 1.12^3 = 100000 * 1.259712 * 1.464100 * 1.404928 = 259,103.11
problems_61_90.append({
    "id": "dsp-econ-68",
    "problemNumber": 68,
    "weekDay": 1,
    "folderName": "economics sample problem",
    "sourceFile": "01_Compound_Interest_Time_Value_Money.pdf",
    "sourceDocumentName": "Doc 01: Multi-Stage Interest Rates",
    "category": "Simple & Compound Interest",
    "topicTitle": "Accumulated Future Worth with Varying Interest Rates over a 10-Year Horizon",
    "prcExamRef": "REE Board Exam Standard Problem",
    "difficulty": "Moderate",
    "question": "A principal of ₱100,000 is invested in an industrial development bond that pays 8% compounded annually for the first 3 years, 10% compounded annually for the next 4 years, and 12% compounded annually for the final 3 years. What is the total accumulated sum at the end of the 10-year term?",
    "choices": [
        "A. ₱259,103",
        "B. ₱248,500",
        "C. ₱267,820",
        "D. ₱252,340"
    ],
    "correctLetter": "A",
    "shortcutSolution": "F = 100,000(1.08)^3(1.10)^4(1.12)^3 = 100,000 × 1.259712 × 1.464100 × 1.404928 = ₱259,103.11",
    "given": [
        {"symbol": "P", "meaning": "Initial principal", "value": "₱100,000"},
        {"symbol": "i_1, n_1", "meaning": "Stage 1 rate and duration", "value": "8% for 3 years"},
        {"symbol": "i_2, n_2", "meaning": "Stage 2 rate and duration", "value": "10% for 4 years"},
        {"symbol": "i_3, n_3", "meaning": "Stage 3 rate and duration", "value": "12% for 3 years"}
    ],
    "governingFormula": "F = P \\prod_{k=1}^m (1 + i_k)^{n_k}",
    "solutionSteps": [
        {"step": 1, "title": "Compute Stage 1 Accumulation (t = 3)", "explanation": "F_1 = 100,000(1.08)^3:", "calculation": f"F_1 = 100,000 \\times 1.259712 = {format_peso(F1_68)}"},
        {"step": 2, "title": "Compute Stage 2 Accumulation (t = 7)", "explanation": "F_2 = F_1(1.10)^4:", "calculation": f"F_2 = 125,971.20 \\times 1.464100 = {format_peso(F2_68)}"},
        {"step": 3, "title": "Compute Stage 3 Accumulation (t = 10)", "explanation": "F_3 = F_2(1.12)^3:", "calculation": f"F_3 = 184,434.43 \\times 1.404928 = {format_peso(F3_68)}"}
    ],
    "finalAnswer": "₱259,103",
    "canonCalTech": {
        "calculator": "Canon F-789SGA",
        "mode": "COMP (Mode 1)",
        "keystrokes": ["100000 × 1.08 [xʸ] 3 × 1.10 [xʸ] 4 × 1.12 [xʸ] 3 [=] ⟹ 259103.11"],
        "resultDisplay": "259103.11",
        "proTip": "Chain multiplications continuously without intermediate rounding on the Canon F-789SGA."
    },
    "mentalModelOrTrap": "Do not simply average the interest rates (8+10+12)/3 = 10%; compound growth is multiplicative, not arithmetic."
})

# =========================================================================
# 69: Unknown Time Period n
# =========================================================================
P69 = 60000; F69 = 180000; r69 = 0.09; m69 = 4
i_per69 = r69 / m69 # 0.0225
n_periods69 = math.log(F69 / P69) / math.log(1 + i_per69) # ln(3) / ln(1.0225) = 1.098612 / 0.022251 = 49.373 periods
t_years69 = n_periods69 / 4.0 # 12.34 years
problems_61_90.append({
    "id": "dsp-econ-69",
    "problemNumber": 69,
    "weekDay": 1,
    "folderName": "economics sample problem",
    "sourceFile": "01_Compound_Interest_Time_Value_Money.pdf",
    "sourceDocumentName": "Doc 01: Solving for Time Period n",
    "category": "Simple & Compound Interest",
    "topicTitle": "Determining Time in Years for Capital to Triple at 9% Compounded Quarterly",
    "prcExamRef": "REE Board Exam Standard Problem",
    "difficulty": "Moderate",
    "question": "How many years will it take for an initial capital investment of ₱60,000 to triple in value to ₱180,000 if placed in a development trust fund that yields 9% per annum compounded quarterly?",
    "choices": [
        "A. 12.34 years (49.4 quarters)",
        "B. 11.50 years (46.0 quarters)",
        "C. 13.10 years (52.4 quarters)",
        "D. 10.85 years (43.4 quarters)"
    ],
    "correctLetter": "A",
    "shortcutSolution": "n = ln(F/P) / ln(1 + i) = ln(3) / ln(1.0225) = 49.37 quarters; t = 49.37 / 4 = 12.34 years",
    "given": [
        {"symbol": "P", "meaning": "Initial investment", "value": "₱60,000"},
        {"symbol": "F", "meaning": "Target tripling amount", "value": "₱180,000 (F/P = 3)"},
        {"symbol": "r", "meaning": "Nominal interest rate", "value": "9% compounded quarterly (i = 2.25%/qtr)"}
    ],
    "governingFormula": "F = P(1 + i)^n \\implies n = \\frac{\\ln(F/P)}{\\ln(1 + i)}; \\quad t = \\frac{n}{m}",
    "solutionSteps": [
        {"step": 1, "title": "Determine Periodic Rate i", "explanation": "Quarterly rate:", "calculation": "i = \\frac{0.09}{4} = 0.0225"},
        {"step": 2, "title": "Solve for Number of Quarters n", "explanation": "Apply natural logarithm:", "calculation": f"n = \\frac{{\\ln(180,000 / 60,000)}}{{\\ln(1.0225)}} = \\frac{{\\ln(3)}}{{\\ln(1.0225)}} = \\frac{{1.098612}}{{0.022251}} = {n_periods69:.2f} \\text{{ quarters}}"},
        {"step": 3, "title": "Convert Quarters to Years", "explanation": "Divide by 4 quarters per year:", "calculation": f"t = \\frac{{{n_periods69:.2f}}}{{4}} = {t_years69:.2f} \\text{{ years}}"}
    ],
    "finalAnswer": "12.34 years (49.4 quarters)",
    "canonCalTech": {
        "calculator": "Canon F-789SGA",
        "mode": "COMP (Mode 1)",
        "keystrokes": ["[ln] 3 ÷ [ln] 1.0225 ÷ 4 [=] ⟹ 12.3433"],
        "resultDisplay": "12.34 years",
        "proTip": "Divide by 4 right at the end to get time directly in years."
    },
    "mentalModelOrTrap": "Always watch the units: n from the logarithmic formula is in periods (quarters), so divide by m (4) to get calendar years."
})

# =========================================================================
# 70: Unknown Nominal Interest Rate
# =========================================================================
P70 = 250000; F70 = 450000; t70 = 5.0; m70 = 2
n70 = m70 * t70 # 10 periods
i_per70 = (F70 / P70)**(1.0 / n70) - 1 # (1.8)^0.1 - 1 = 1.060541 - 1 = 0.060541
r70 = m70 * i_per70 # 0.121082 => 12.11%
problems_61_90.append({
    "id": "dsp-econ-70",
    "problemNumber": 70,
    "weekDay": 1,
    "folderName": "economics sample problem",
    "sourceFile": "01_Compound_Interest_Time_Value_Money.pdf",
    "sourceDocumentName": "Doc 01: Solving for Unknown Interest Rate",
    "category": "Simple & Compound Interest",
    "topicTitle": "Solving for Nominal Rate Compounded Semi-Annually Given Principal and 5-Year Maturity",
    "prcExamRef": "REE Board Exam Standard Problem",
    "difficulty": "Moderate",
    "question": "An electrical engineering firm invests ₱250,000 into a renewable energy venture capital pool. Exactly 5 years later, the investment is redeemed for ₱450,000. If interest was compounded semi-annually, what was the nominal annual rate of return earned on this project?",
    "choices": [
        "A. 12.11% compounded semi-annually",
        "B. 11.85% compounded semi-annually",
        "C. 12.48% compounded semi-annually",
        "D. 11.50% compounded semi-annually"
    ],
    "correctLetter": "A",
    "shortcutSolution": "i = (F/P)^{1/n} - 1 = (450,000 / 250,000)^{0.1} - 1 = 6.054%; r = 2 × 6.054% = 12.11%",
    "given": [
        {"symbol": "P", "meaning": "Initial principal", "value": "₱250,000"},
        {"symbol": "F", "meaning": "Redemption value", "value": "₱450,000"},
        {"symbol": "t, m", "meaning": "Time and compounding", "value": "5 years, semi-annually (n = 10 periods)"}
    ],
    "governingFormula": "F = P(1 + i)^n \\implies i = \\left(\\frac{F}{P}\\right)^{\\frac{1}{n}} - 1; \\quad r = m \\cdot i",
    "solutionSteps": [
        {"step": 1, "title": "Compute Periodic Rate i", "explanation": "Take the 10th root of (F/P):", "calculation": f"i = \\left(\\frac{{450,000}}{{250,000}}\\right)^{{1/10}} - 1 = (1.8)^{{0.1}} - 1 = {i_per70:.6f} = 6.054\\%"},
        {"step": 2, "title": "Compute Nominal Annual Rate r", "explanation": "Multiply by semi-annual frequency m = 2:", "calculation": f"r = 2 \\times 6.054\\% = {r70*100:.2f}\\%"}
    ],
    "finalAnswer": "12.11% compounded semi-annually",
    "canonCalTech": {
        "calculator": "Canon F-789SGA",
        "mode": "COMP (Mode 1)",
        "keystrokes": ["2 × ( ( 450000 ÷ 250000 ) [xʸ] ( 1 ÷ 10 ) - 1 ) [=] ⟹ 0.121082"],
        "resultDisplay": "12.11%",
        "proTip": "Use Canon root key or fractional exponent [xʸ] ( 1 ÷ 10 ) directly."
    },
    "mentalModelOrTrap": "Remember that the formula gives periodic rate i. To get nominal rate r, you must multiply by m = 2."
})

# =========================================================================
# 71: Ordinary Annuity Future Worth (Quarterly Deposits)
# =========================================================================
A71 = 15000; r71 = 0.08; m71 = 4; t71 = 7.0
i71 = r71 / m71 # 0.02
n71 = int(m71 * t71) # 28
F71 = A71 * (((1 + i71)**n71 - 1) / i71) # 15000 * ((1.02^28 - 1) / 0.02) = 15000 * 37.051214 = 555,768.21
problems_61_90.append({
    "id": "dsp-econ-71",
    "problemNumber": 71,
    "weekDay": 2,
    "folderName": "economics sample problem",
    "sourceFile": "03_Annuities_Ordinary_Due_Deferred.pdf",
    "sourceDocumentName": "Doc 03: Ordinary Annuity Future Value",
    "category": "Annuities & Perpetuity",
    "topicTitle": "Future Worth of Quarterly Deposits for Substation Emergency Replacement",
    "prcExamRef": "REE Board Exam Standard Problem",
    "difficulty": "Foundation",
    "question": "An industrial plant deposits ₱15,000 at the end of each quarter into a sinking fund that pays 8% per annum compounded quarterly. What will be the accumulated total balance in the fund at the end of 7 years?",
    "choices": [
        "A. ₱555,768",
        "B. ₱542,300",
        "C. ₱568,900",
        "D. ₱530,450"
    ],
    "correctLetter": "A",
    "shortcutSolution": "F = A · [(1 + i)^n - 1] / i = 15,000 × [(1.02)^{28} - 1] / 0.02 = 15,000 × 37.0512 = ₱555,768.21",
    "given": [
        {"symbol": "A", "meaning": "Quarterly deposit", "value": "₱15,000"},
        {"symbol": "i", "meaning": "Quarterly periodic rate", "value": "8% / 4 = 2.0% per quarter"},
        {"symbol": "n", "meaning": "Total periods", "value": "7 years × 4 = 28 quarters"}
    ],
    "governingFormula": "F = A \\left[ \\frac{(1 + i)^n - 1}{i} \\right]",
    "solutionSteps": [
        {"step": 1, "title": "Compute Periodic Rate and Total Periods", "explanation": "Rate and quarters:", "calculation": "i = \\frac{0.08}{4} = 0.02; \\quad n = 7 \\times 4 = 28"},
        {"step": 2, "title": "Evaluate Compound Amount Factor", "explanation": "[(1.02)^28 - 1] / 0.02:", "calculation": "\\frac{(1.02)^{28} - 1}{0.02} = \\frac{1.741024 - 1}{0.02} = 37.051214"},
        {"step": 3, "title": "Calculate Future Worth F", "explanation": "Multiply deposit by factor:", "calculation": f"F = 15,000 \\times 37.051214 = {format_peso(F71)}"}
    ],
    "finalAnswer": "₱555,768",
    "canonCalTech": {
        "calculator": "Canon F-789SGA",
        "mode": "COMP (Mode 1)",
        "keystrokes": ["15000 × ( ( 1.02 ) [xʸ] 28 - 1 ) ÷ 0.02 [=] ⟹ 555768.21"],
        "resultDisplay": "555768.21",
        "proTip": "Use parenthesis around the numerator ( ( 1.02 ) [xʸ] 28 - 1 ) before dividing by i."
    },
    "mentalModelOrTrap": "Ordinary annuity deposits occur at the end of each period, so the last deposit earns zero interest."
})

# =========================================================================
# 72: Ordinary Annuity Present Worth (Monthly Installment)
# =========================================================================
A72 = 25000; r72 = 0.12; m72 = 12; t72 = 4.0
i72 = r72 / m72 # 0.01
n72 = int(m72 * t72) # 48
P72 = A72 * ((1 - (1 + i72)**(-n72)) / i72) # 25000 * ((1 - 1.01^-48) / 0.01) = 25000 * 37.973959 = 949,348.99
problems_61_90.append({
    "id": "dsp-econ-72",
    "problemNumber": 72,
    "weekDay": 2,
    "folderName": "economics sample problem",
    "sourceFile": "03_Annuities_Ordinary_Due_Deferred.pdf",
    "sourceDocumentName": "Doc 03: Ordinary Annuity Present Value",
    "category": "Annuities & Perpetuity",
    "topicTitle": "Equivalent Cash Price of Diesel Generator on a 48-Month Installment Plan",
    "prcExamRef": "REE Board Exam Standard Problem",
    "difficulty": "Foundation",
    "question": "A mining facility purchases a 500 kVA backup diesel generator on installment terms of ₱25,000 payable at the end of each month for 4 years. If money is worth 12% compounded monthly, what is the equivalent cash price of the generator today?",
    "choices": [
        "A. ₱949,349",
        "B. ₱925,000",
        "C. ₱972,400",
        "D. ₱960,800"
    ],
    "correctLetter": "A",
    "shortcutSolution": "P = A · [1 - (1 + i)^{-n}] / i = 25,000 × [1 - (1.01)^{-48}] / 0.01 = 25,000 × 37.97396 = ₱949,348.99",
    "given": [
        {"symbol": "A", "meaning": "Monthly installment payment", "value": "₱25,000"},
        {"symbol": "i", "meaning": "Monthly periodic rate", "value": "12% / 12 = 1.0% per month"},
        {"symbol": "n", "meaning": "Total monthly payments", "value": "4 years × 12 = 48 months"}
    ],
    "governingFormula": "P = A \\left[ \\frac{1 - (1 + i)^{-n}}{i} \\right]",
    "solutionSteps": [
        {"step": 1, "title": "Compute Monthly Rate and Total Months", "explanation": "Periodic rate and periods:", "calculation": "i = \\frac{0.12}{12} = 0.01; \\quad n = 4 \\times 12 = 48"},
        {"step": 2, "title": "Evaluate Present Worth Annuity Factor", "explanation": "[1 - (1.01)^(-48)] / 0.01:", "calculation": "\\frac{1 - (1.01)^{-48}}{0.01} = \\frac{1 - 0.620260}{0.01} = 37.973959"},
        {"step": 3, "title": "Calculate Equivalent Cash Price P", "explanation": "Multiply installment by factor:", "calculation": f"P = 25,000 \\times 37.973959 = {format_peso(P72)}"}
    ],
    "finalAnswer": "₱949,349",
    "canonCalTech": {
        "calculator": "Canon F-789SGA",
        "mode": "COMP (Mode 1)",
        "keystrokes": ["25000 × ( 1 - ( 1.01 ) [xʸ] -48 ) ÷ 0.01 [=] ⟹ 949348.99"],
        "resultDisplay": "949348.99",
        "proTip": "Total nominal payments = 48 × ₱25,000 = ₱1,200,000. Interest component is ₱1,200,000 - ₱949,349 = ₱250,651."
    },
    "mentalModelOrTrap": "Equivalent cash price is simply the present worth P of all future installment payments discounted at the specified interest rate."
})

# =========================================================================
# 73: Sinking Fund Payment Calculation
# =========================================================================
F73 = 1200000; r73 = 0.09; m73 = 2; t73 = 6.0
i73 = r73 / m73 # 0.045
n73 = int(m73 * t73) # 12
A73 = F73 * (i73 / ((1 + i73)**n73 - 1)) # 1200000 * (0.045 / (1.045^12 - 1)) = 1200000 * 0.064663 = 77,595.66
problems_61_90.append({
    "id": "dsp-econ-73",
    "problemNumber": 73,
    "weekDay": 2,
    "folderName": "economics sample problem",
    "sourceFile": "03_Annuities_Ordinary_Due_Deferred.pdf",
    "sourceDocumentName": "Doc 03: Sinking Fund Periodic Deposit",
    "category": "Annuities & Perpetuity",
    "topicTitle": "Semi-Annual Sinking Fund Deposit to Amass ₱1,200,000 in 6 Years",
    "prcExamRef": "REE Board Exam Standard Problem",
    "difficulty": "Moderate",
    "question": "An electric power cooperative must accumulate ₱1,200,000 in 6 years to replace aging SCADA communication hardware. How much must be deposited semi-annually into a sinking fund that earns 9% per annum compounded semi-annually?",
    "choices": [
        "A. ₱77,596",
        "B. ₱81,250",
        "C. ₱74,800",
        "D. ₱85,400"
    ],
    "correctLetter": "A",
    "shortcutSolution": "A = F · i / [(1 + i)^n - 1] = 1,200,000 × 0.045 / [(1.045)^{12} - 1] = 1,200,000 × 0.064663 = ₱77,595.66",
    "given": [
        {"symbol": "F", "meaning": "Target accumulated future amount", "value": "₱1,200,000"},
        {"symbol": "i", "meaning": "Semi-annual periodic rate", "value": "9% / 2 = 4.5% per semi-annual"},
        {"symbol": "n", "meaning": "Total semi-annual periods", "value": "6 years × 2 = 12 periods"}
    ],
    "governingFormula": "A = F \\left[ \\frac{i}{(1 + i)^n - 1} \\right]",
    "solutionSteps": [
        {"step": 1, "title": "Determine Rate and Periods", "explanation": "Periodic rate and total compounding cycles:", "calculation": "i = \\frac{0.09}{2} = 0.045; \\quad n = 6 \\times 2 = 12"},
        {"step": 2, "title": "Compute Sinking Fund Factor", "explanation": "i / [(1 + i)^n - 1]:", "calculation": "\\frac{0.045}{(1.045)^{12} - 1} = \\frac{0.045}{0.695881} = 0.064663"},
        {"step": 3, "title": "Calculate Semi-Annual Deposit A", "explanation": "Multiply target by sinking fund factor:", "calculation": f"A = 1,200,000 \\times 0.064663 = {format_peso(A73)}"}
    ],
    "finalAnswer": "₱77,596",
    "canonCalTech": {
        "calculator": "Canon F-789SGA",
        "mode": "COMP (Mode 1)",
        "keystrokes": ["1200000 × 0.045 ÷ ( ( 1.045 ) [xʸ] 12 - 1 ) [=] ⟹ 77595.66"],
        "resultDisplay": "77595.66",
        "proTip": "Total deposited = 12 × ₱77,595.66 = ₱931,148. Total interest earned = ₱1,200,000 - ₱931,148 = ₱268,852."
    },
    "mentalModelOrTrap": "Sinking fund factor (A/F) is the reciprocal of the uniform series compound amount factor (F/A)."
})

# =========================================================================
# 74: Capital Recovery Payment (Loan Amortization)
# =========================================================================
P74 = 850000; i74 = 0.10; n74 = 10
A74 = P74 * ((i74 * (1 + i74)**n74) / ((1 + i74)**n74 - 1)) # 850000 * (0.10 * 1.10^10 / (1.10^10 - 1)) = 850000 * 0.162745 = 138,333.59
problems_61_90.append({
    "id": "dsp-econ-74",
    "problemNumber": 74,
    "weekDay": 2,
    "folderName": "economics sample problem",
    "sourceFile": "03_Annuities_Ordinary_Due_Deferred.pdf",
    "sourceDocumentName": "Doc 03: Capital Recovery Factor",
    "category": "Annuities & Perpetuity",
    "topicTitle": "Annual Capital Recovery Payment to Fully Amortize ₱850,000 over 10 Years",
    "prcExamRef": "REE Board Exam Standard Problem",
    "difficulty": "Foundation",
    "question": "A renewable energy developer secures an equipment financing loan of ₱850,000 at an annual interest rate of 10% to be repaid in 10 equal end-of-year installments. Determine the annual capital recovery payment required.",
    "choices": [
        "A. ₱138,334",
        "B. ₱145,200",
        "C. ₱132,500",
        "D. ₱140,800"
    ],
    "correctLetter": "A",
    "shortcutSolution": "A = P · [i(1 + i)^n] / [(1 + i)^n - 1] = 850,000 × [0.10(1.10)^{10}] / [(1.10)^{10} - 1] = 850,000 × 0.162745 = ₱138,333.59",
    "given": [
        {"symbol": "P", "meaning": "Principal loan borrowed", "value": "₱850,000"},
        {"symbol": "i", "meaning": "Annual interest rate", "value": "10% per annum"},
        {"symbol": "n", "meaning": "Number of annual installments", "value": "10 years"}
    ],
    "governingFormula": "A = P \\left[ \\frac{i(1 + i)^n}{(1 + i)^n - 1} \\right] = P(A/P, i, n)",
    "solutionSteps": [
        {"step": 1, "title": "Compute Capital Recovery Factor (A/P, 10%, 10)", "explanation": "0.10(1.10)^10 / [(1.10)^10 - 1]:", "calculation": "\\frac{0.10(2.593742)}{2.593742 - 1} = \\frac{0.259374}{1.593742} = 0.162745"},
        {"step": 2, "title": "Calculate Annual Installment A", "explanation": "Multiply principal by capital recovery factor:", "calculation": f"A = 850,000 \\times 0.162745 = {format_peso(A74)}"}
    ],
    "finalAnswer": "₱138,334",
    "canonCalTech": {
        "calculator": "Canon F-789SGA",
        "mode": "COMP (Mode 1)",
        "keystrokes": ["850000 × 0.10 × ( 1.10 ) [xʸ] 10 ÷ ( ( 1.10 ) [xʸ] 10 - 1 ) [=] ⟹ 138333.59"],
        "resultDisplay": "138333.59",
        "proTip": "Alternatively, 850000 ÷ ( ( 1 - 1.10 [xʸ] -10 ) ÷ 0.10 ) gives the same answer."
    },
    "mentalModelOrTrap": "Capital recovery factor (A/P) = Sinking fund factor (A/F) + i. Check: 0.062745 + 0.10 = 0.162745."
})

# =========================================================================
# 75: Annuity Due Future Worth (Beginning of Month)
# =========================================================================
A75 = 10000; r75 = 0.06; m75 = 12; t75 = 5.0
i75 = r75 / m75 # 0.005
n75 = int(m75 * t75) # 60
F_due75 = A75 * (((1 + i75)**n75 - 1) / i75) * (1 + i75) # 10000 * ((1.005^60 - 1)/0.005) * 1.005 = 10000 * 69.770030 * 1.005 = 701,188.80
problems_61_90.append({
    "id": "dsp-econ-75",
    "problemNumber": 75,
    "weekDay": 2,
    "folderName": "economics sample problem",
    "sourceFile": "03_Annuities_Ordinary_Due_Deferred.pdf",
    "sourceDocumentName": "Doc 03: Annuity Due Future Value",
    "category": "Annuities & Perpetuity",
    "topicTitle": "Future Worth of Monthly Deposits Made in Advance (Annuity Due)",
    "prcExamRef": "REE Board Exam Standard Problem",
    "difficulty": "Moderate",
    "question": "A consulting engineer deposits ₱10,000 at the beginning of each month into an expansion reserve fund yielding 6% per annum compounded monthly. What will be the accumulated fund balance at the end of 5 years?",
    "choices": [
        "A. ₱701,189",
        "B. ₱697,700",
        "C. ₱712,450",
        "D. ₱685,300"
    ],
    "correctLetter": "A",
    "shortcutSolution": "F_{due} = F_{ord}(1 + i) = 10,000 × [(1.005)^{60} - 1] / 0.005 × (1.005) = ₱697,700.30 × 1.005 = ₱701,188.80",
    "given": [
        {"symbol": "A", "meaning": "Monthly deposit in advance", "value": "₱10,000"},
        {"symbol": "i", "meaning": "Monthly periodic rate", "value": "6% / 12 = 0.5% per month"},
        {"symbol": "n", "meaning": "Total monthly deposits", "value": "5 years × 12 = 60 months"}
    ],
    "governingFormula": "F_{due} = A \\left[ \\frac{(1 + i)^n - 1}{i} \\right] (1 + i)",
    "solutionSteps": [
        {"step": 1, "title": "Compute Ordinary Annuity Future Worth", "explanation": "End-of-period accumulation:", "calculation": "F_{ord} = 10,000 \\times \\frac{(1.005)^{60} - 1}{0.005} = ₱697,700.30"},
        {"step": 2, "title": "Multiply by (1 + i) for Advance Timing", "explanation": "Each payment earns one extra month of interest:", "calculation": f"F_{{due}} = 697,700.30 \\times 1.005 = {format_peso(F_due75)}"}
    ],
    "finalAnswer": "₱701,189",
    "canonCalTech": {
        "calculator": "Canon F-789SGA",
        "mode": "COMP (Mode 1)",
        "keystrokes": ["10000 × ( ( 1.005 ) [xʸ] 60 - 1 ) ÷ 0.005 × 1.005 [=] ⟹ 701188.80"],
        "resultDisplay": "701188.80",
        "proTip": "Annuity Due is simply Ordinary Annuity multiplied by (1 + i)."
    },
    "mentalModelOrTrap": "Payments at the beginning of each period (due) always accumulate more interest than payments at the end (ordinary)."
})

# =========================================================================
# 76: Annuity Due Present Worth (Leasing Contract)
# =========================================================================
A76 = 30000; i76 = 0.09; n76 = 8
P_due76 = A76 * ((1 - (1 + i76)**(-n76)) / i76) * (1 + i76) # 30000 * 5.534819 * 1.09 = 181,003.73
problems_61_90.append({
    "id": "dsp-econ-76",
    "problemNumber": 76,
    "weekDay": 2,
    "folderName": "economics sample problem",
    "sourceFile": "03_Annuities_Ordinary_Due_Deferred.pdf",
    "sourceDocumentName": "Doc 03: Annuity Due Present Value",
    "category": "Annuities & Perpetuity",
    "topicTitle": "Present Worth of an 8-Year Equipment Lease Payable Annually in Advance",
    "prcExamRef": "REE Board Exam Standard Problem",
    "difficulty": "Moderate",
    "question": "A utility leases fiber-optic testing equipment for ₱30,000 per year payable at the beginning of each year for 8 years. If the company's cost of capital is 9% per annum, what is the present worth of the lease commitments?",
    "choices": [
        "A. ₱181,004",
        "B. ₱166,045",
        "C. ₱192,500",
        "D. ₱175,800"
    ],
    "correctLetter": "A",
    "shortcutSolution": "P_{due} = P_{ord}(1 + i) = 30,000 × [1 - (1.09)^{-8}] / 0.09 × 1.09 = 30,000 × 5.534819 × 1.09 = ₱181,003.73",
    "given": [
        {"symbol": "A", "meaning": "Annual lease payment in advance", "value": "₱30,000"},
        {"symbol": "i", "meaning": "Cost of capital", "value": "9% per year"},
        {"symbol": "n", "meaning": "Number of annual lease payments", "value": "8 years"}
    ],
    "governingFormula": "P_{due} = A \\left[ \\frac{1 - (1 + i)^{-n}}{i} \\right] (1 + i) = A + A \\left[ \\frac{1 - (1 + i)^{-(n-1)}}{i} \\right]",
    "solutionSteps": [
        {"step": 1, "title": "Compute Ordinary Annuity Present Worth", "explanation": "If payments were at year-end:", "calculation": "P_{ord} = 30,000 \\times \\frac{1 - (1.09)^{-8}}{0.09} = 30,000 \\times 5.534819 = ₱166,044.57"},
        {"step": 2, "title": "Adjust for Beginning-of-Year Payment Timing", "explanation": "Multiply by (1 + i):", "calculation": f"P_{{due}} = 166,044.57 \\times 1.09 = {format_peso(P_due76)}"}
    ],
    "finalAnswer": "₱181,004",
    "canonCalTech": {
        "calculator": "Canon F-789SGA",
        "mode": "COMP (Mode 1)",
        "keystrokes": ["30000 × ( 1 - ( 1.09 ) [xʸ] -8 ) ÷ 0.09 × 1.09 [=] ⟹ 181003.73"],
        "resultDisplay": "181003.73",
        "proTip": "Notice that the first ₱30,000 is paid today at t=0, so P_due = 30,000 + 30,000(P/A, 9%, 7)."
    },
    "mentalModelOrTrap": "In lease agreements, advance payments reduce lender risk; mathematically P_due = P_ord × (1 + i)."
})

# =========================================================================
# 77: Comparison of Annuity Due vs Ordinary Annuity
# =========================================================================
A77 = 50000; i77 = 0.08; n77 = 10
P_ord77 = A77 * ((1 - (1 + i77)**(-n77)) / i77) # 50000 * 6.710081 = 335,504.07
P_due77 = P_ord77 * (1 + i77) # 362,344.40
diff77 = P_due77 - P_ord77 # 26,840.33
problems_61_90.append({
    "id": "dsp-econ-77",
    "problemNumber": 77,
    "weekDay": 2,
    "folderName": "economics sample problem",
    "sourceFile": "03_Annuities_Ordinary_Due_Deferred.pdf",
    "sourceDocumentName": "Doc 03: Annuity Due vs Ordinary Comparison",
    "category": "Annuities & Perpetuity",
    "topicTitle": "Present Worth Difference Between Annuity Due and Ordinary Annuity",
    "prcExamRef": "REE Board Exam Standard Problem",
    "difficulty": "Moderate",
    "question": "An engineering contractor can receive ₱50,000 per year for 10 years. Determine the difference in present worth if payments are received at the beginning of each year (Annuity Due) versus at the end of each year (Ordinary Annuity) at an interest rate of 8% per annum.",
    "choices": [
        "A. ₱26,840 (Annuity Due is higher)",
        "B. ₱24,500 (Annuity Due is higher)",
        "C. ₱28,950 (Annuity Due is higher)",
        "D. ₱22,100 (Annuity Due is higher)"
    ],
    "correctLetter": "A",
    "shortcutSolution": "ΔP = P_{due} - P_{ord} = P_{ord}(1 + i) - P_{ord} = i · P_{ord} = 0.08 × ₱335,504.07 = ₱26,840.33",
    "given": [
        {"symbol": "A", "meaning": "Annual payment", "value": "₱50,000"},
        {"symbol": "i", "meaning": "Interest rate", "value": "8% per annum"},
        {"symbol": "n", "meaning": "Number of years", "value": "10 years"}
    ],
    "governingFormula": "\\Delta P = P_{due} - P_{ord} = i \\cdot P_{ord}",
    "solutionSteps": [
        {"step": 1, "title": "Compute Ordinary Annuity Present Worth", "explanation": "P_ord = 50,000(P/A, 8%, 10):", "calculation": f"P_{{ord}} = 50,000 \\times \\frac{{1 - (1.08)^{{-10}}}}{{0.08}} = {format_peso(P_ord77)}"},
        {"step": 2, "title": "Compute Annuity Due Present Worth", "explanation": "P_due = P_ord(1 + 0.08):", "calculation": f"P_{{due}} = 335,504.07 \\times 1.08 = {format_peso(P_due77)}"},
        {"step": 3, "title": "Determine Difference", "explanation": "ΔP = i × P_ord:", "calculation": f"\\Delta P = 0.08 \\times 335,504.07 = {format_peso(diff77)}"}
    ],
    "finalAnswer": "₱26,840 (Annuity Due is higher)",
    "canonCalTech": {
        "calculator": "Canon F-789SGA",
        "mode": "COMP (Mode 1)",
        "keystrokes": ["0.08 × 50000 × ( 1 - ( 1.08 ) [xʸ] -10 ) ÷ 0.08 [=] ⟹ 26840.33"],
        "resultDisplay": "26840.33",
        "proTip": "Notice that ΔP = i × P_ord cancels out the 0.08 in denominator: ΔP = 50,000(1 - 1.08^-10) = ₱26,840.33!"
    },
    "mentalModelOrTrap": "Shortcut: ΔP = A · [1 - (1 + i)^(-n)] directly without dividing and multiplying by i."
})

# =========================================================================
# 78: Deferred Annuity (Present Worth with Deferral)
# =========================================================================
A78 = 40000; i78 = 0.10; n78 = 6; k78 = 4 # deferred 4 periods
# P_0 = A * (P/A, 10%, 6) * (1.10)^(-4)
P_ord78 = A78 * ((1 - (1 + i78)**(-n78)) / i78) # 40000 * 4.355261 = 174,210.43
P_def78 = P_ord78 * ((1 + i78)**(-k78)) # 174210.43 * 0.683013 = 118,988.07
problems_61_90.append({
    "id": "dsp-econ-78",
    "problemNumber": 78,
    "weekDay": 2,
    "folderName": "economics sample problem",
    "sourceFile": "03_Annuities_Ordinary_Due_Deferred.pdf",
    "sourceDocumentName": "Doc 03: Deferred Annuity Present Value",
    "category": "Annuities & Perpetuity",
    "topicTitle": "Present Worth of a 6-Year Annuity Deferred for 4 Years at 10% Interest",
    "prcExamRef": "REE Board Exam Standard Problem",
    "difficulty": "Moderate",
    "question": "A patent generates ₱40,000 per year for 6 years, with the first payment received at the end of Year 5 (a deferral of 4 years). If interest is 10% per annum, what is the present worth of this patent at Year 0?",
    "choices": [
        "A. ₱118,988",
        "B. ₱125,400",
        "C. ₱112,850",
        "D. ₱130,200"
    ],
    "correctLetter": "A",
    "shortcutSolution": "P_0 = A · (P/A, 10%, 6) · (P/F, 10%, 4) = 40,000 × 4.355261 × (1.10)^{-4} = 174,210.43 × 0.683013 = ₱118,988.07",
    "given": [
        {"symbol": "A", "meaning": "Annual patent revenue", "value": "₱40,000"},
        {"symbol": "n", "meaning": "Number of payments", "value": "6 payments"},
        {"symbol": "k", "meaning": "Deferral period", "value": "4 years (first payment at t = 5)"},
        {"symbol": "i", "meaning": "Interest rate", "value": "10% per year"}
    ],
    "governingFormula": "P_0 = A \\left[ \\frac{1 - (1 + i)^{-n}}{i} \\right] (1 + i)^{-k}",
    "solutionSteps": [
        {"step": 1, "title": "Compute Present Worth at Year 4 (P_4)", "explanation": "Annuity evaluated 1 period before first payment (at t = 4):", "calculation": f"P_4 = 40,000 \\times \\frac{{1 - (1.10)^{{-6}}}}{{0.10}} = {format_peso(P_ord78)}"},
        {"step": 2, "title": "Discount P_4 to Year 0 (P_0)", "explanation": "Discount lump sum over 4 deferral years:", "calculation": f"P_0 = 174,210.43 \\times (1.10)^{{-4}} = 174,210.43 \\times 0.683013 = {format_peso(P_def78)}"}
    ],
    "finalAnswer": "₱118,988",
    "canonCalTech": {
        "calculator": "Canon F-789SGA",
        "mode": "COMP (Mode 1)",
        "keystrokes": ["40000 × ( 1 - ( 1.10 ) [xʸ] -6 ) ÷ 0.10 × ( 1.10 ) [xʸ] -4 [=] ⟹ 118988.07"],
        "resultDisplay": "118988.07",
        "proTip": "Remember: deferral period k = (First payment period) - 1. Here, first payment is Year 5, so k = 4."
    },
    "mentalModelOrTrap": "A common board exam mistake is discounting by 5 periods instead of 4. An ordinary annuity's present worth sits 1 period before the first payment."
})

# =========================================================================
# 79: Deferred Loan Repayment with Grace Period
# =========================================================================
P79 = 500000; i79 = 0.12; k79 = 3; n79 = 5
# Grace period: 3 years. First payment at t = 4.
# Value of loan at t = 3: P_3 = P_0 * (1 + i)^3 = 500000 * 1.12^3 = 702,464.00
P3_79 = P79 * (1 + i79)**k79
A79 = P3_79 * ((i79 * (1 + i79)**n79) / ((1 + i79)**n79 - 1)) # 702464 * 0.2774097 = 194,870.36
problems_61_90.append({
    "id": "dsp-econ-79",
    "problemNumber": 79,
    "weekDay": 2,
    "folderName": "economics sample problem",
    "sourceFile": "03_Annuities_Ordinary_Due_Deferred.pdf",
    "sourceDocumentName": "Doc 03: Deferred Loan Amortization",
    "category": "Annuities & Perpetuity",
    "topicTitle": "Equal Annual Repayments on ₱500,000 Loan with 3-Year Grace Period at 12%",
    "prcExamRef": "REE Board Exam Standard Problem",
    "difficulty": "Moderate",
    "question": "A tech cooperative secures a ₱500,000 plant modernization loan at 12% interest per annum. The bank grants a 3-year grace period during which interest accumulates but no payments are made. The loan is to be repaid in 5 equal annual installments starting at the end of Year 4. Find the annual installment amount.",
    "choices": [
        "A. ₱194,870",
        "B. ₱182,500",
        "C. ₱205,300",
        "D. ₱178,900"
    ],
    "correctLetter": "A",
    "shortcutSolution": "P_3 = 500,000(1.12)^3 = ₱702,464; A = 702,464 × [0.12(1.12)^5] / [(1.12)^5 - 1] = 702,464 × 0.277410 = ₱194,870.36",
    "given": [
        {"symbol": "P_0", "meaning": "Initial loan principal", "value": "₱500,000"},
        {"symbol": "i", "meaning": "Interest rate", "value": "12% per annum"},
        {"symbol": "k", "meaning": "Grace period", "value": "3 years"},
        {"symbol": "n", "meaning": "Number of equal payments", "value": "5 years"}
    ],
    "governingFormula": "P_k = P_0(1 + i)^k; \\quad A = P_k \\left[ \\frac{i(1 + i)^n}{(1 + i)^n - 1} \\right]",
    "solutionSteps": [
        {"step": 1, "title": "Compute Accumulated Debt at End of Grace Period (t = 3)", "explanation": "Interest accumulates compound growth over 3 years:", "calculation": f"P_3 = 500,000 \\times (1.12)^3 = 500,000 \\times 1.404928 = {format_peso(P3_79)}"},
        {"step": 2, "title": "Compute Capital Recovery Factor for 5 Years", "explanation": "(A/P, 12%, 5):", "calculation": "\\frac{0.12(1.12)^5}{(1.12)^5 - 1} = \\frac{0.211481}{0.762342} = 0.277410"},
        {"step": 3, "title": "Calculate Annual Installment A", "explanation": "Amortize P_3 over 5 payments:", "calculation": f"A = 702,464 \\times 0.277410 = {format_peso(A79)}"}
    ],
    "finalAnswer": "₱194,870",
    "canonCalTech": {
        "calculator": "Canon F-789SGA",
        "mode": "COMP (Mode 1)",
        "keystrokes": ["500000 × ( 1.12 ) [xʸ] 3 × 0.12 ÷ ( 1 - ( 1.12 ) [xʸ] -5 ) [=] ⟹ 194870.36"],
        "resultDisplay": "194870.36",
        "proTip": "Combine growth (1.12)^3 and amortization directly in a single line on the Canon F-789SGA."
    },
    "mentalModelOrTrap": "Always compound the principal during the grace period before applying the capital recovery formula."
})

# =========================================================================
# 80: Perpetuity (Perpetual Scholarship Endowment)
# =========================================================================
A80 = 120000; i80 = 0.08
P80 = A80 / i80 # 120000 / 0.08 = 1,500,000
problems_61_90.append({
    "id": "dsp-econ-80",
    "problemNumber": 80,
    "weekDay": 2,
    "folderName": "economics sample problem",
    "sourceFile": "03_Annuities_Ordinary_Due_Deferred.pdf",
    "sourceDocumentName": "Doc 03: Perpetuity & Endowment Valuation",
    "category": "Annuities & Perpetuity",
    "topicTitle": "Capital Endowment Required to Fund a Perpetual ₱120,000 Annual Engineering Scholarship",
    "prcExamRef": "REE Board Exam Standard Problem",
    "difficulty": "Foundation",
    "question": "An electrical engineering alumni association desires to establish a perpetual annual scholarship granting ₱120,000 every year forever. If the endowment fund earns an effective annual return of 8%, how much lump-sum endowment must be deposited today?",
    "choices": [
        "A. ₱1,500,000",
        "B. ₱1,440,000",
        "C. ₱1,600,000",
        "D. ₱1,350,000"
    ],
    "correctLetter": "A",
    "shortcutSolution": "P = A / i = 120,000 / 0.08 = ₱1,500,000",
    "given": [
        {"symbol": "A", "meaning": "Annual perpetual award", "value": "₱120,000 per year"},
        {"symbol": "i", "meaning": "Perpetual investment yield", "value": "8% per annum"}
    ],
    "governingFormula": "P = \\frac{A}{i}",
    "solutionSteps": [
        {"step": 1, "title": "Apply Perpetuity Formula", "explanation": "As n → ∞, [1 - (1+i)^(-n)] / i approaches 1 / i:", "calculation": f"P = \\frac{{120,000}}{{0.08}} = {format_peso(P80)}"}
    ],
    "finalAnswer": "₱1,500,000",
    "canonCalTech": {
        "calculator": "Canon F-789SGA",
        "mode": "COMP (Mode 1)",
        "keystrokes": ["120000 ÷ 0.08 [=] ⟹ 1500000"],
        "resultDisplay": "1500000",
        "proTip": "Perpetuity is the simplest formula in engineering economics: P = A / i."
    },
    "mentalModelOrTrap": "The principal of ₱1,500,000 remains untouched forever; only the annual interest (8% of ₱1.5M = ₱120,000) is paid out."
})

print("Generated problems 61 to 80.")
