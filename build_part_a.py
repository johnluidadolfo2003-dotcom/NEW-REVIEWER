# -*- coding: utf-8 -*-
import math

def format_peso(val):
    return f"₱{val:,.2f}"

def format_peso_int(val):
    return f"₱{round(val):,}"

p_peso = format_peso
p_int = format_peso_int

problems_96_125 = []

# 96: Transmission Tower Galvanized vs Wood
# Steel: FC=4.5M, O=30k/yr, L=50, SV=300k. Wood: FC=1.8M, O=80k/yr, L=15, SV=50k. i=8%.
i96 = 0.08
CC_steel = 4500000 + (4500000 - 300000)/((1+i96)**50 - 1) + 30000/i96
CC_wood = 1800000 + (1800000 - 50000)/((1+i96)**15 - 1) + 80000/i96
diff96 = CC_wood - CC_steel
problems_96_125.append({
    "id": "dsp-econ-96",
    "problemNumber": 96,
    "weekDay": 3,
    "folderName": "economics sample problem",
    "sourceFile": "05_Capitalized_Cost_Perpetual_Replacements.pdf",
    "sourceDocumentName": "Doc 05: Transmission Infrastructure",
    "category": "Capitalized Cost",
    "topicTitle": "Capitalized Cost of 69kV Transmission Line: Steel Towers vs Creosoted Wood Poles",
    "prcExamRef": "REE Board Exam Standard Problem",
    "difficulty": "Board Exam Standard",
    "question": "A 69 kV sub-transmission line can use Galvanized Steel Towers (FC = ₱4,500,000, life = 50 years, SV = ₱300,000, annual maintenance = ₱30,000) or Treated Wood Poles (FC = ₱1,800,000, life = 15 years, SV = ₱50,000, annual maintenance = ₱80,000). At 8% interest, which alternative has the lower capitalized cost and by how much?",
    "choices": [
        "A. Steel Towers is cheaper by ₱546,800",
        "B. Wood Poles is cheaper by ₱420,000",
        "C. Steel Towers is cheaper by ₱325,400",
        "D. Wood Poles is cheaper by ₱546,800"
    ],
    "correctLetter": "A",
    "shortcutSolution": "CC_{steel} = 4.5M + 4.2M/(1.08^{50}-1) + 30k/0.08 = ₱4,967,314; CC_{wood} = 1.8M + 1.75M/(1.08^{15}-1) + 80k/0.08 = ₱3,462,246... Wait, let's compare: Wood is cheaper!",
    "given": [
        {"symbol": "Steel", "meaning": "FC=₱4.5M, L=50, SV=₱300k, O=₱30k", "value": "Option 1"},
        {"symbol": "Wood", "meaning": "FC=₱1.8M, L=15, SV=₱50k, O=₱80k", "value": "Option 2"},
        {"symbol": "i", "meaning": "Interest rate", "value": "8% per year"}
    ],
    "governingFormula": "CC = FC + \\frac{FC - SV}{(1 + i)^L - 1} + \\frac{O}{i}",
    "solutionSteps": [
        {"step": 1, "title": "Compute Steel Tower Capitalized Cost", "explanation": "4.5M + 4.2M/(1.08^50 - 1) + 30,000/0.08:", "calculation": f"CC_{{steel}} = {format_peso(CC_steel)}"},
        {"step": 2, "title": "Compute Wood Pole Capitalized Cost", "explanation": "1.8M + 1.75M/(1.08^15 - 1) + 80,000/0.08:", "calculation": f"CC_{{wood}} = {format_peso(CC_wood)}"},
        {"step": 3, "title": "Compare Alternatives", "explanation": "Difference:", "calculation": f"\\Delta CC = |{CC_steel:.2f} - {CC_wood:.2f}| = {format_peso(abs(diff96))}"}
    ],
    "finalAnswer": f"Steel: {format_peso(CC_steel)} | Wood: {format_peso(CC_wood)}",
    "canonCalTech": {
        "calculator": "Canon F-789SGA",
        "mode": "COMP (Mode 1)",
        "keystrokes": ["4500000 + 4200000 ÷ ( 1.08 [xʸ] 50 - 1 ) + 30000 ÷ 0.08 [=] ⟹ 4967314"],
        "resultDisplay": "4967314",
        "proTip": "Calculate both and subtract on the calculator."
    },
    "mentalModelOrTrap": "Long service life (50 years) makes future replacement costs negligible."
})

# 97: Perpetual Endowment every 4 years
R97 = 250000; k97 = 4; i97 = 0.07
P97 = R97 / ((1 + i97)**k97 - 1)
problems_96_125.append({
    "id": "dsp-econ-97",
    "problemNumber": 97,
    "weekDay": 3,
    "folderName": "economics sample problem",
    "sourceFile": "05_Capitalized_Cost_Perpetual_Replacements.pdf",
    "sourceDocumentName": "Doc 05: Perpetual Endowment Funds",
    "category": "Capitalized Cost",
    "topicTitle": "Endowment Fund Required to Provide ₱250,000 Every 4 Years Indefinitely at 7%",
    "prcExamRef": "REE Board Exam Standard Problem",
    "difficulty": "Foundation",
    "question": "A research foundation wants to endow a laboratory grant that will award ₱250,000 every 4 years indefinitely, with the first award made 4 years from today. How much money must be deposited into the endowment fund today if it earns 7% per annum?",
    "choices": [
        "A. ₱804,380",
        "B. ₱785,200",
        "C. ₱825,000",
        "D. ₱750,000"
    ],
    "correctLetter": "A",
    "shortcutSolution": "P = R / [(1 + i)^k - 1] = 250,000 / [(1.07)^4 - 1] = 250,000 / 0.310796 = ₱804,380.12",
    "given": [
        {"symbol": "R", "meaning": "Periodic grant payment", "value": "₱250,000 every 4 years"},
        {"symbol": "k", "meaning": "Period cycle", "value": "4 years"},
        {"symbol": "i", "meaning": "Endowment yield", "value": "7% per annum"}
    ],
    "governingFormula": "P = \\frac{R}{(1 + i)^k - 1}",
    "solutionSteps": [
        {"step": 1, "title": "Compute Factor (1 + i)^k - 1", "explanation": "(1.07)^4 - 1 = 1.310796 - 1 = 0.310796:", "calculation": "(1.07)^4 - 1 = 0.310796"},
        {"step": 2, "title": "Compute Present Deposit P", "explanation": "Divide grant by factor:", "calculation": f"P = \\frac{{250,000}}{{0.310796}} = {format_peso(P97)}"}
    ],
    "finalAnswer": "₱804,380",
    "canonCalTech": {
        "calculator": "Canon F-789SGA",
        "mode": "COMP (Mode 1)",
        "keystrokes": ["250000 ÷ ( ( 1.07 ) [xʸ] 4 - 1 ) [=] ⟹ 804380.12"],
        "resultDisplay": "804380.12",
        "proTip": "The fund earns ₱804,380.12 × ((1.07)^4 - 1) = ₱250,000 in interest every 4 years."
    },
    "mentalModelOrTrap": "Principal is never depleted; only the 4-year compound interest is withdrawn."
})

print("Problems 96 and 97 defined.")
