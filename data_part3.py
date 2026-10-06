# -*- coding: utf-8 -*-
"""
Problems 91 to 120 for Engineering Economics (Sample Problem Bank)
Focus: Capitalized Cost & Depreciation Methods (SLM, SFM, DBM, DDBM, SOYD, Hours, Output)
"""
import math

def format_peso(val):
    return f"₱{val:,.2f}"

def format_peso_int(val):
    return f"₱{round(val):,}"

problems_91_120 = []

# =========================================================================
# 91: Capitalized Cost of a Concrete Bridge (No Replacement)
# =========================================================================
FC91 = 12000000; O91 = 150000; i91 = 0.08
CC91 = FC91 + (O91 / i91) # 12M + 1.875M = 13,875,000
problems_91_120.append({
    "id": "dsp-econ-91",
    "problemNumber": 91,
    "weekDay": 3,
    "folderName": "economics sample problem",
    "sourceFile": "05_Capitalized_Cost_Perpetual_Replacements.pdf",
    "sourceDocumentName": "Doc 05: Capitalized Cost Fundamentals",
    "category": "Capitalized Cost",
    "topicTitle": "Capitalized Cost of a Reinforced Concrete Bridge with Perpetual Maintenance",
    "prcExamRef": "REE Board Exam Standard Problem",
    "difficulty": "Foundation",
    "question": "A permanent reinforced concrete bridge costs ₱12,000,000 to construct and requires an estimated annual maintenance and inspection expenditure of ₱150,000 forever. If the interest rate is 8% per annum, what is the capitalized cost of the bridge?",
    "choices": [
        "A. ₱13,875,000",
        "B. ₱13,500,000",
        "C. ₱14,200,000",
        "D. ₱12,950,000"
    ],
    "correctLetter": "A",
    "shortcutSolution": "CC = FC + O / i = 12,000,000 + 150,000 / 0.08 = 12,000,000 + 1,875,000 = ₱13,875,000",
    "given": [
        {"symbol": "FC", "meaning": "First cost of construction", "value": "₱12,000,000"},
        {"symbol": "O", "meaning": "Annual perpetual maintenance", "value": "₱150,000 per year"},
        {"symbol": "i", "meaning": "Interest rate", "value": "8% per annum"}
    ],
    "governingFormula": "CC = FC + \\frac{O}{i}",
    "solutionSteps": [
        {"step": 1, "title": "Compute Present Worth of Perpetual Maintenance", "explanation": "Capitalized upkeep = O / i:", "calculation": f"\\text{{PW}}_{{maint}} = \\frac{{150,000}}{{0.08}} = {format_peso(O91 / i91)}"},
        {"step": 2, "title": "Sum First Cost and Capitalized Maintenance", "explanation": "CC = FC + O / i:", "calculation": f"CC = 12,000,000 + 1,875,000 = {format_peso(CC91)}"}
    ],
    "finalAnswer": "₱13,875,000",
    "canonCalTech": {
        "calculator": "Canon F-789SGA",
        "mode": "COMP (Mode 1)",
        "keystrokes": ["12000000 + 150000 ÷ 0.08 [=] ⟹ 13875000"],
        "resultDisplay": "13875000",
        "proTip": "Capitalized cost is simply the present worth of providing a facility indefinitely: CC = FC + O/i."
    },
    "mentalModelOrTrap": "Do not multiply annual maintenance by any number of years; since life is perpetual, divide directly by i."
})

# =========================================================================
# 92: Capitalized Cost with Periodic Overhaul Every k Years
# =========================================================================
FC92 = 5000000; R92 = 400000; k92 = 5; i92 = 0.10
# Periodic cost capitalized = R / [(1 + i)^k - 1]
# (1.10)^5 - 1 = 1.61051 - 1 = 0.61051
PW_R92 = R92 / ((1 + i92)**k92 - 1) # 400000 / 0.61051 = 655,190
CC92 = FC92 + PW_R92 # 5,655,190
problems_91_120.append({
    "id": "dsp-econ-92",
    "problemNumber": 92,
    "weekDay": 3,
    "folderName": "economics sample problem",
    "sourceFile": "05_Capitalized_Cost_Perpetual_Replacements.pdf",
    "sourceDocumentName": "Doc 05: Periodic Overhauls & Replacements",
    "category": "Capitalized Cost",
    "topicTitle": "Capitalized Cost with Major Overhaul Occurring Every 5 Years in Perpetuity",
    "prcExamRef": "REE Board Exam Standard Problem",
    "difficulty": "Moderate",
    "question": "A substation perimeter protective coating and surge arrester overhaul costs ₱400,000 and must be repeated every 5 years indefinitely. If the initial construction cost is ₱5,000,000 and the interest rate is 10% per annum, find the total capitalized cost of the installation.",
    "choices": [
        "A. ₱5,655,190",
        "B. ₱5,800,000",
        "C. ₱5,400,000",
        "D. ₱5,725,500"
    ],
    "correctLetter": "A",
    "shortcutSolution": "CC = FC + R / [(1 + i)^k - 1] = 5,000,000 + 400,000 / [(1.10)^5 - 1] = 5,000,000 + 655,190 = ₱5,655,190",
    "given": [
        {"symbol": "FC", "meaning": "Initial first cost", "value": "₱5,000,000"},
        {"symbol": "R", "meaning": "Periodic overhaul cost", "value": "₱400,000"},
        {"symbol": "k", "meaning": "Overhaul interval", "value": "Every 5 years"},
        {"symbol": "i", "meaning": "Interest rate", "value": "10% per year"}
    ],
    "governingFormula": "CC = FC + \\frac{R}{(1 + i)^k - 1}",
    "solutionSteps": [
        {"step": 1, "title": "Compute Denominator (Compound Interest Factor)", "explanation": "(1 + 0.10)^5 - 1:", "calculation": "(1.10)^5 - 1 = 1.610510 - 1 = 0.610510"},
        {"step": 2, "title": "Compute Capitalized Value of Periodic Replacements", "explanation": "R / [(1 + i)^k - 1]:", "calculation": f"\\text{{PW}}_{{periodic}} = \\frac{{400,000}}{{0.610510}} = {format_peso(PW_R92)}"},
        {"step": 3, "title": "Total Capitalized Cost", "explanation": "Add first cost:", "calculation": f"CC = 5,000,000 + 655,189.92 = {format_peso(CC92)}"}
    ],
    "finalAnswer": "₱5,655,190",
    "canonCalTech": {
        "calculator": "Canon F-789SGA",
        "mode": "COMP (Mode 1)",
        "keystrokes": ["5000000 + 400000 ÷ ( ( 1.10 ) [xʸ] 5 - 1 ) [=] ⟹ 5655189.92"],
        "resultDisplay": "5655190",
        "proTip": "The term R / [(1+i)^k - 1] represents the lump sum today that will earn enough interest to pay R every k years forever."
    },
    "mentalModelOrTrap": "Do not divide R by (k · i); the correct sinking fund capitalized divisor is (1 + i)^k - 1."
})

# =========================================================================
# 93: Capitalized Cost with Perpetual Renewal and Salvage Value
# =========================================================================
FC93 = 2500000; SV93 = 300000; L93 = 15; i93 = 0.09
# Net replacement cost every L years = FC - SV = 2,200,000
R93 = FC93 - SV93
PW_R93 = R93 / ((1 + i93)**L93 - 1) # 2.2M / (1.09^15 - 1) = 2.2M / (3.642482 - 1) = 2.2M / 2.642482 = 832,550.51
CC93 = FC93 + PW_R93 # 2.5M + 832,550.51 = 3,332,550.51
problems_91_120.append({
    "id": "dsp-econ-93",
    "problemNumber": 93,
    "weekDay": 3,
    "folderName": "economics sample problem",
    "sourceFile": "05_Capitalized_Cost_Perpetual_Replacements.pdf",
    "sourceDocumentName": "Doc 05: Perpetual Asset Renewal",
    "category": "Capitalized Cost",
    "topicTitle": "Capitalized Cost of Industrial Equipment with 15-Year Life and Salvage Value",
    "prcExamRef": "REE Board Exam Standard Problem",
    "difficulty": "Moderate",
    "question": "An emergency standby power unit costs ₱2,500,000 with an economic life of 15 years and an estimated salvage value of ₱300,000 at the end of each life cycle. If money is worth 9% per annum and the unit must be replaced perpetually, what is the capitalized cost?",
    "choices": [
        "A. ₱3,332,551",
        "B. ₱3,500,000",
        "C. ₱3,185,400",
        "D. ₱3,450,200"
    ],
    "correctLetter": "A",
    "shortcutSolution": "CC = FC + (FC - SV) / [(1 + i)^L - 1] = 2,500,000 + 2,200,000 / [(1.09)^{15} - 1] = 2,500,000 + 832,550.51 = ₱3,332,551",
    "given": [
        {"symbol": "FC", "meaning": "Initial first cost", "value": "₱2,500,000"},
        {"symbol": "SV", "meaning": "Salvage value", "value": "₱300,000"},
        {"symbol": "L", "meaning": "Useful life between replacements", "value": "15 years"},
        {"symbol": "i", "meaning": "Interest rate", "value": "9% per year"}
    ],
    "governingFormula": "CC = FC + \\frac{FC - SV}{(1 + i)^L - 1}",
    "solutionSteps": [
        {"step": 1, "title": "Compute Net Periodic Replacement Cost", "explanation": "Deduct salvage value: R = FC - SV:", "calculation": f"R = 2,500,000 - 300,000 = {format_peso(R93)}"},
        {"step": 2, "title": "Compute Capitalized Replacement Fund", "explanation": "(FC - SV) / [(1.09)^15 - 1]:", "calculation": f"\\text{{PW}}_{{rep}} = \\frac{{2,200,000}}{{(1.09)^{{15}} - 1}} = \\frac{{2,200,000}}{{2.642482}} = {format_peso(PW_R93)}"},
        {"step": 3, "title": "Calculate Total Capitalized Cost CC", "explanation": "Add initial first cost:", "calculation": f"CC = 2,500,000 + 832,550.51 = {format_peso(CC93)}"}
    ],
    "finalAnswer": "₱3,332,551",
    "canonCalTech": {
        "calculator": "Canon F-789SGA",
        "mode": "COMP (Mode 1)",
        "keystrokes": ["2500000 + ( 2500000 - 300000 ) ÷ ( ( 1.09 ) [xʸ] 15 - 1 ) [=] ⟹ 3332550.51"],
        "resultDisplay": "3332551",
        "proTip": "The first unit requires FC (₱2.5M). Every subsequent replacement only requires FC - SV (₱2.2M) because salvage is recovered."
    },
    "mentalModelOrTrap": "Never subtract salvage value from the first cost of the initial unit; only future replacements benefit from salvage value."
})

# =========================================================================
# 94: Capitalized Cost Comparison: Timber vs Steel Bridge
# =========================================================================
# Timber: FC = 800,000, Life = 10 yrs, No salvage, Annual maint = 40,000
# Steel: FC = 2,200,000, Life = 30 yrs, SV = 200,000, Annual maint = 15,000
# i = 8%. Find capitalized cost difference.
i94 = 0.08
CC_timber94 = 800000 + 800000 / ((1 + i94)**10 - 1) + 40000 / i94 # 800k + 800k/1.158925 + 500k = 800k + 690,295 + 500k = 1,990,295
CC_steel94 = 2200000 + (2200000 - 200000) / ((1 + i94)**30 - 1) + 15000 / i94 # 2.2M + 2M/9.062657 + 187.5k = 2.2M + 220,686 + 187,500 = 2,608,186
diff94 = CC_steel94 - CC_timber94 # 617,891
problems_91_120.append({
    "id": "dsp-econ-94",
    "problemNumber": 94,
    "weekDay": 3,
    "folderName": "economics sample problem",
    "sourceFile": "05_Capitalized_Cost_Perpetual_Replacements.pdf",
    "sourceDocumentName": "Doc 05: Engineering Alternatives Comparison",
    "category": "Capitalized Cost",
    "topicTitle": "Capitalized Cost Comparison: Timber Bridge vs Structural Steel Bridge at 8%",
    "prcExamRef": "REE Board Exam Standard Problem",
    "difficulty": "Board Exam Standard",
    "question": "A river crossing can be served by a Timber Trestle (First Cost = ₱800,000, life = 10 years, zero salvage, annual maintenance = ₱40,000) or a Structural Steel Bridge (First Cost = ₱2,200,000, life = 30 years, salvage value = ₱200,000, annual maintenance = ₱15,000). At an interest rate of 8%, which alternative has the lower capitalized cost and by how much?",
    "choices": [
        "A. Timber is cheaper by ₱617,891",
        "B. Steel is cheaper by ₱412,500",
        "C. Timber is cheaper by ₱530,200",
        "D. Steel is cheaper by ₱617,891"
    ],
    "correctLetter": "A",
    "shortcutSolution": "CC_{timber} = 800k + 800k/(1.08^{10}-1) + 40k/0.08 = ₱1,990,295; CC_{steel} = 2.2M + 2M/(1.08^{30}-1) + 15k/0.08 = ₱2,608,186; Diff = ₱617,891",
    "given": [
        {"symbol": "Timber", "meaning": "FC = ₱800k, L = 10, SV = 0, O = ₱40k", "value": "Alternative 1"},
        {"symbol": "Steel", "meaning": "FC = ₱2.2M, L = 30, SV = ₱200k, O = ₱15k", "value": "Alternative 2"},
        {"symbol": "i", "meaning": "Interest rate", "value": "8% per year"}
    ],
    "governingFormula": "CC = FC + \\frac{FC - SV}{(1 + i)^L - 1} + \\frac{O}{i}",
    "solutionSteps": [
        {"step": 1, "title": "Compute Capitalized Cost of Timber Bridge", "explanation": "CC_timber = 800,000 + 800,000/(1.08^10 - 1) + 40,000/0.08:", "calculation": f"CC_{{timber}} = 800,000 + 690,295 + 500,000 = {format_peso(CC_timber94)}"},
        {"step": 2, "title": "Compute Capitalized Cost of Steel Bridge", "explanation": "CC_steel = 2,200,000 + 2,000,000/(1.08^30 - 1) + 15,000/0.08:", "calculation": f"CC_{{steel}} = 2,200,000 + 220,686 + 187,500 = {format_peso(CC_steel94)}"},
        {"step": 3, "title": "Compare Capitalized Costs", "explanation": "Timber is more economical by:", "calculation": f"\\Delta CC = {CC_steel94:.2f} - {CC_timber94:.2f} = {format_peso(diff94)}"}
    ],
    "finalAnswer": "Timber is cheaper by ₱617,891",
    "canonCalTech": {
        "calculator": "Canon F-789SGA",
        "mode": "COMP (Mode 1)",
        "keystrokes": [
            "800000 + 800000 ÷ ( 1.08 [xʸ] 10 - 1 ) + 40000 ÷ 0.08 [=] ⟹ 1990295",
            "2200000 + 2000000 ÷ ( 1.08 [xʸ] 30 - 1 ) + 15000 ÷ 0.08 [=] ⟹ 2608186"
        ],
        "resultDisplay": "Timber: ₱1,990,295 | Steel: ₱2,608,186",
        "proTip": "Store the first result into memory variable [M+] or [A] to compute the difference instantly."
    },
    "mentalModelOrTrap": "Despite higher annual maintenance and 10-year replacement, the lower initial cost of timber dominates at an 8% discount rate."
})

# =========================================================================
# 95: Hydroelectric Dam Capitalized Cost with Dredging
# =========================================================================
FC95 = 50000000; O95 = 500000; R95 = 4000000; k95 = 12; i95 = 0.08
PW_dredge95 = R95 / ((1 + i95)**k95 - 1) # 4M / (1.08^12 - 1) = 4M / 1.518170 = 2,634,751
CC95 = FC95 + (O95 / i95) + PW_dredge95 # 50M + 6.25M + 2.635M = 58,884,751
problems_91_120.append({
    "id": "dsp-econ-95",
    "problemNumber": 95,
    "weekDay": 3,
    "folderName": "economics sample problem",
    "sourceFile": "05_Capitalized_Cost_Perpetual_Replacements.pdf",
    "sourceDocumentName": "Doc 05: Hydroelectric Infrastructure",
    "category": "Capitalized Cost",
    "topicTitle": "Capitalized Cost of a Hydroelectric Dam with Annual Upkeep and 12-Year Dredging",
    "prcExamRef": "REE Board Exam Standard Problem",
    "difficulty": "Moderate",
    "question": "A hydroelectric intake dam costs ₱50,000,000 to construct. Annual regular upkeep is ₱500,000, and comprehensive reservoir dredging costing ₱4,000,000 is required every 12 years indefinitely. With interest at 8% per annum, what is the capitalized cost of the project?",
    "choices": [
        "A. ₱58,884,751",
        "B. ₱56,250,000",
        "C. ₱60,120,400",
        "D. ₱57,500,000"
    ],
    "correctLetter": "A",
    "shortcutSolution": "CC = FC + O/i + R/[(1+i)^k - 1] = 50M + 500k/0.08 + 4M/[(1.08)^{12}-1] = 50M + 6.25M + 2.635M = ₱58,884,751",
    "given": [
        {"symbol": "FC", "meaning": "Initial construction cost", "value": "₱50,000,000"},
        {"symbol": "O", "meaning": "Annual upkeep", "value": "₱500,000 per year"},
        {"symbol": "R", "meaning": "Periodic dredging cost", "value": "₱4,000,000 every 12 years"},
        {"symbol": "i", "meaning": "Interest rate", "value": "8% per year"}
    ],
    "governingFormula": "CC = FC + \\frac{O}{i} + \\frac{R}{(1 + i)^k - 1}",
    "solutionSteps": [
        {"step": 1, "title": "Compute Capitalized Annual Upkeep", "explanation": "O / i = 500,000 / 0.08:", "calculation": f"\\text{{PW}}_{{annual}} = \\frac{{500,000}}{{0.08}} = {format_peso(O95 / i95)}"},
        {"step": 2, "title": "Compute Capitalized Periodic Dredging", "explanation": "R / [(1.08)^12 - 1]:", "calculation": f"\\text{{PW}}_{{dredge}} = \\frac{{4,000,000}}{{(1.08)^{{12}} - 1}} = \\frac{{4,000,000}}{{1.518170}} = {format_peso(PW_dredge95)}"},
        {"step": 3, "title": "Sum All Components", "explanation": "CC = FC + PW_annual + PW_dredge:", "calculation": f"CC = 50,000,000 + 6,250,000 + 2,634,751 = {format_peso(CC95)}"}
    ],
    "finalAnswer": "₱58,884,751",
    "canonCalTech": {
        "calculator": "Canon F-789SGA",
        "mode": "COMP (Mode 1)",
        "keystrokes": ["50000000 + 500000 ÷ 0.08 + 4000000 ÷ ( 1.08 [xʸ] 12 - 1 ) [=] ⟹ 58884751.27"],
        "resultDisplay": "58884751",
        "proTip": "This three-term equation (FC + O/i + R/((1+i)^k - 1)) is the most common capitalized cost question on the PRC board exam."
    },
    "mentalModelOrTrap": "Ensure you distinguish between annual recurring costs (divide by i) and periodic recurring costs (divide by (1+i)^k - 1)."
})

print("Generated problems 91 to 95.")
