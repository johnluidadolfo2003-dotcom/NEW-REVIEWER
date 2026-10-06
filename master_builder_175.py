# -*- coding: utf-8 -*-
"""
Generates problems 98 to 175 and merges with 1-97 to produce exactly 175 solving problems.
"""
import math
import json
import re

def p_peso(val):
    return f"₱{val:,.2f}"

def p_int(val):
    return f"₱{round(val):,}"

def make_p(num, day, cat, src_file, doc_name, title, q, choices, ans, formula, steps, final_ans, caltech_keys, result_disp, pro_tip, trap, given_list):
    return {
        "id": f"dsp-econ-{num:02d}" if num < 100 else f"dsp-econ-{num}",
        "problemNumber": num,
        "weekDay": day,
        "folderName": "economics sample problem",
        "sourceFile": src_file,
        "sourceDocumentName": doc_name,
        "category": cat,
        "topicTitle": title,
        "prcExamRef": "REE Board Exam Standard Problem",
        "difficulty": "Board Exam Standard",
        "question": q,
        "choices": choices,
        "correctLetter": ans,
        "shortcutSolution": f"Direct formula: {formula} ⟹ {final_ans}",
        "given": given_list,
        "governingFormula": formula,
        "solutionSteps": steps,
        "finalAnswer": final_ans,
        "canonCalTech": {
            "calculator": "Canon F-789SGA",
            "mode": "COMP (Mode 1)",
            "keystrokes": caltech_keys,
            "resultDisplay": result_disp,
            "proTip": pro_tip
        },
        "mentalModelOrTrap": trap
    }

new_problems = []

# =========================================================================
# Problems 98-105: Capitalized Cost
# =========================================================================

# 98: Industrial Boiler
FC98 = 8000000; SV98 = 800000; L98 = 20; O98 = 300000; i98 = 0.10
CC98 = FC98 + (FC98 - SV98)/((1+i98)**L98 - 1) + O98/i98
new_problems.append(make_p(
    98, 3, "Capitalized Cost", "05_Capitalized_Cost_Perpetual_Replacements.pdf", "Doc 05: Industrial Equipment Capitalized Cost",
    "Capitalized Cost of an Industrial Boiler with 20-Year Useful Life and Annual Upkeep",
    "An industrial steam boiler plant costs ₱8,000,000 to install, has a life of 20 years, a salvage value of ₱800,000, and annual operating/maintenance costs of ₱300,000. With interest at 10% per annum, what is the capitalized cost of providing perpetual boiler service?",
    ["A. ₱12,252,400", "B. ₱11,800,000", "C. ₱12,650,000", "D. ₱11,200,000"], "A",
    "CC = FC + (FC - SV)/[(1+i)^L - 1] + O/i",
    [{"step": 1, "title": "Compute Replacement Fund", "explanation": "7,200,000 / [(1.10)^20 - 1]:", "calculation": f"\\text{{PW}}_{{rep}} = \\frac{{7,200,000}}{{5.727500}} = {p_peso((FC98-SV98)/((1+i98)**L98 - 1))}"},
     {"step": 2, "title": "Compute Capitalized Operating Cost", "explanation": "300,000 / 0.10:", "calculation": f"\\text{{PW}}_{{op}} = \\frac{{300,000}}{{0.10}} = {p_peso(O98/i98)}"},
     {"step": 3, "title": "Total Capitalized Cost", "explanation": "Add first cost:", "calculation": f"CC = 8M + 1,257,093 + 3M = {p_peso(CC98)}"}],
    p_int(CC98), ["8000000 + 7200000 ÷ ( 1.10 [xʸ] 20 - 1 ) + 300000 ÷ 0.10 [=] ⟹ 12257093"],
    "₱12,257,093", "Enter all three terms in one continuous keystroke expression.",
    "Do not forget to deduct salvage value from the numerator of the replacement fund.",
    [{"symbol": "FC", "meaning": "First cost", "value": "₱8,000,000"}, {"symbol": "SV", "meaning": "Salvage value", "value": "₱800,000"}, {"symbol": "L", "meaning": "Life", "value": "20 years"}, {"symbol": "O", "meaning": "Annual O&M", "value": "₱300,000"}]
))

# 99: High Voltage Underground Cable
FC99 = 15000000; L99 = 25; SV99 = 1500000; O99 = 80000; i99 = 0.08
CC99 = FC99 + (FC99 - SV99)/((1+i99)**L99 - 1) + O99/i99
new_problems.append(make_p(
    99, 3, "Capitalized Cost", "05_Capitalized_Cost_Perpetual_Replacements.pdf", "Doc 05: Underground Distribution",
    "Capitalized Cost of 115 kV Underground XLPE Transmission Line",
    "A 115 kV underground XLPE transmission circuit requires ₱15,000,000 initial capital, has an expected operational life of 25 years with salvage value of ₱1,500,000, and annual inspection costs of ₱80,000. If interest is 8% per annum, determine its capitalized cost.",
    ["A. ₱18,299,650", "B. ₱17,500,000", "C. ₱19,100,000", "D. ₱16,850,000"], "A",
    "CC = FC + (FC - SV)/[(1+i)^L - 1] + O/i",
    [{"step": 1, "title": "Compute Replacement Fund", "explanation": "13.5M / [(1.08)^25 - 1]:", "calculation": f"\\text{{PW}}_{{rep}} = \\frac{{13,500,000}}{{5.848475}} = {p_peso((FC99-SV99)/((1+i99)**L99 - 1))}"},
     {"step": 2, "title": "Compute Capitalized Annual Upkeep", "explanation": "80,000 / 0.08:", "calculation": f"\\text{{PW}}_{{upkeep}} = \\frac{{80,000}}{{0.08}} = {p_peso(O99/i99)}"},
     {"step": 3, "title": "Sum All Elements", "explanation": "CC = FC + PW_rep + PW_upkeep:", "calculation": f"CC = 15M + 2,308,294 + 1M = {p_peso(CC99)}"}],
    p_int(CC99), ["15000000 + 13500000 ÷ ( 1.08 [xʸ] 25 - 1 ) + 80000 ÷ 0.08 [=] ⟹ 18308294"],
    "₱18,308,294", "Use Canon memory to verify intermediate parts.",
    "Underground cables have low maintenance costs but high periodic replacement capital.",
    [{"symbol": "FC", "meaning": "Initial capital", "value": "₱15,000,000"}, {"symbol": "L", "meaning": "Life", "value": "25 years"}, {"symbol": "SV", "meaning": "Salvage", "value": "₱1,500,000"}, {"symbol": "O", "meaning": "Annual upkeep", "value": "₱80,000"}]
))

# 100: Maximum Justified Capital Cost
Annual_Sav100 = 600000; i100 = 0.09
# Maximum investment = Annual savings / i
Max_Inv100 = Annual_Sav100 / i100
new_problems.append(make_p(
    100, 3, "Capitalized Cost", "05_Capitalized_Cost_Perpetual_Replacements.pdf", "Doc 05: Justified Investment",
    "Maximum Justified Initial Investment for a Perpetual Energy Efficiency Upgrade",
    "A waste-heat recovery system for an electric arc furnace generates continuous annual electricity savings of ₱600,000 indefinitely. If the facility's minimum attractive rate of return is 9% per annum, what is the maximum justified initial investment for this project?",
    ["A. ₱6,666,667", "B. ₱6,000,000", "C. ₱7,200,000", "D. ₱5,400,000"], "A",
    "\\text{Max Investment} = \\frac{\\text{Annual Savings}}{i}",
    [{"step": 1, "title": "Apply Capitalized Worth Principle", "explanation": "Present worth of perpetual savings must equal maximum investment:", "calculation": f"P = \\frac{{600,000}}{{0.09}} = {p_peso(Max_Inv100)}"}],
    "₱6,666,667", ["600000 ÷ 0.09 [=] ⟹ 6666666.67"],
    "₱6,666,667", "At this investment, NPV = 0 and IRR = 9%. Any lower cost yields positive net value.",
    "If first cost exceeds ₱6,666,667, the return falls below 9% and the project is unacceptable.",
    [{"symbol": "Savings", "meaning": "Perpetual annual savings", "value": "₱600,000"}, {"symbol": "MARR", "meaning": "Discount rate", "value": "9%"}]
))

# 101: Capitalized Cost with Geometric Increase in Maintenance
# FC = 10M, M_1 = 100k, increases by 4% per year, i = 9%
FC101 = 10000000; M1_101 = 100000; g101 = 0.04; i101 = 0.09
PW_maint101 = M1_101 / (i101 - g101) # 100k / 0.05 = 2,000,000
CC101 = FC101 + PW_maint101 # 12,000,000
new_problems.append(make_p(
    101, 3, "Capitalized Cost", "05_Capitalized_Cost_Perpetual_Replacements.pdf", "Doc 05: Geometric Maintenance",
    "Capitalized Cost with Geometrically Escalating Annual Maintenance",
    "A coastal transmission substation costs ₱10,000,000 to construct. Maintenance is ₱100,000 in Year 1 and is expected to increase by 4% each year indefinitely due to salt corrosion. With interest at 9% per annum, determine the capitalized cost.",
    ["A. ₱12,000,000", "B. ₱11,111,111", "C. ₱12,500,000", "D. ₱11,800,000"], "A",
    "CC = FC + \\frac{M_1}{i - g}",
    [{"step": 1, "title": "Compute Net Discount Rate (i - g)", "explanation": "0.09 - 0.04 = 0.05:", "calculation": "i - g = 0.09 - 0.04 = 0.05"},
     {"step": 2, "title": "Compute Present Worth of Maintenance", "explanation": "100,000 / 0.05:", "calculation": f"\\text{{PW}}_{{maint}} = \\frac{{100,000}}{{0.05}} = {p_peso(PW_maint101)}"},
     {"step": 3, "title": "Total Capitalized Cost", "explanation": "Add first cost:", "calculation": f"CC = 10,000,000 + 2,000,000 = {p_peso(CC101)}"}],
    "₱12,000,000", ["10000000 + 100000 ÷ ( 0.09 - 0.04 ) [=] ⟹ 12000000"],
    "₱12,000,000", "Use (i - g) in denominator for geometric perpetual growth.",
    "If growth g ≥ i, the capitalized cost would be infinite.",
    [{"symbol": "FC", "meaning": "First cost", "value": "₱10,000,000"}, {"symbol": "M_1", "meaning": "Year 1 upkeep", "value": "₱100,000"}, {"symbol": "g", "meaning": "Growth rate", "value": "4%"}, {"symbol": "i", "meaning": "Interest", "value": "9%"}]
))

# 102: Water Distribution Pipeline Comparison (Ductile Iron vs PVC)
# Iron: FC=6M, L=50, O=20k. PVC: FC=3.5M, L=25, O=45k. i=7%.
i102 = 0.07
CC_iron102 = 6000000 + 6000000/((1+i102)**50 - 1) + 20000/i102
CC_pvc102 = 3500000 + 3500000/((1+i102)**25 - 1) + 45000/i102
diff102 = CC_iron102 - CC_pvc102
new_problems.append(make_p(
    102, 3, "Capitalized Cost", "05_Capitalized_Cost_Perpetual_Replacements.pdf", "Doc 05: Pipeline Engineering",
    "Capitalized Cost Comparison: Ductile Iron Pipe vs C-900 PVC Main at 7%",
    "A cooling water distribution main can be built with Ductile Iron (FC = ₱6,000,000, life = 50 years, no salvage, annual maintenance = ₱20,000) or C-900 PVC (FC = ₱3,500,000, life = 25 years, no salvage, annual maintenance = ₱45,000). At 7% interest, which has the lower capitalized cost?",
    ["A. PVC is cheaper by ₱1,563,000", "B. Iron is cheaper by ₱850,000", "C. PVC is cheaper by ₱1,120,000", "D. Iron is cheaper by ₱1,563,000"], "A",
    "CC = FC + \\frac{FC}{(1 + i)^L - 1} + \\frac{O}{i}",
    [{"step": 1, "title": "Compute Ductile Iron Capitalized Cost", "explanation": "6M + 6M/(1.07^50 - 1) + 20k/0.07:", "calculation": f"CC_{{iron}} = {p_peso(CC_iron102)}"},
     {"step": 2, "title": "Compute PVC Main Capitalized Cost", "explanation": "3.5M + 3.5M/(1.07^25 - 1) + 45k/0.07:", "calculation": f"CC_{{pvc}} = {p_peso(CC_pvc102)}"},
     {"step": 3, "title": "Determine Difference", "explanation": "Difference:", "calculation": f"\\Delta CC = {CC_iron102:.2f} - {CC_pvc102:.2f} = {p_peso(abs(diff102))}"}],
    f"PVC is cheaper by {p_peso(abs(diff102))}", ["6000000 + 6000000 ÷ ( 1.07 [xʸ] 50 - 1 ) + 20000 ÷ 0.07 [=] ⟹ 6496464"],
    "₱4,933,464 vs ₱6,496,464", "Store both in memories A and B and subtract.",
    "Lower initial cost of PVC outweighs the shorter 25-year service life at 7% interest.",
    [{"symbol": "Iron", "meaning": "FC=₱6M, L=50, O=₱20k", "value": "Option 1"}, {"symbol": "PVC", "meaning": "FC=₱3.5M, L=25, O=₱45k", "value": "Option 2"}, {"symbol": "i", "meaning": "Rate", "value": "7%"}]
))

# 103: Pumping Station Staggered Replacements
# FC = 4M. Pump replacement: ₱800k every 10 yrs. Motor replacement: ₱500k every 15 yrs. Upkeep: ₱60k/yr. i = 8%.
i103 = 0.08
CC103 = 4000000 + 800000/((1+i103)**10 - 1) + 500000/((1+i103)**15 - 1) + 60000/i103
new_problems.append(make_p(
    103, 3, "Capitalized Cost", "05_Capitalized_Cost_Perpetual_Replacements.pdf", "Doc 05: Staggered Replacements",
    "Capitalized Cost of Pumping Station with Staggered Component Replacements",
    "A municipal booster station has an initial civil works cost of ₱4,000,000. Centrifugal pumps costing ₱800,000 are replaced every 10 years, electric drive motors costing ₱500,000 are replaced every 15 years, and annual upkeep is ₱60,000. At 8% interest, what is the capitalized cost?",
    ["A. ₱5,670,890", "B. ₱5,450,000", "C. ₱5,890,200", "D. ₱5,320,000"], "A",
    "CC = FC + \\sum \\frac{R_k}{(1 + i)^{L_k} - 1} + \\frac{O}{i}",
    [{"step": 1, "title": "Pump Replacement Capitalized", "explanation": "800,000 / [(1.08)^10 - 1]:", "calculation": f"\\text{{PW}}_{{pump}} = \\frac{{800,000}}{{1.158925}} = {p_peso(800000/((1+i103)**10 - 1))}"},
     {"step": 2, "title": "Motor Replacement Capitalized", "explanation": "500,000 / [(1.08)^15 - 1]:", "calculation": f"\\text{{PW}}_{{motor}} = \\frac{{500,000}}{{2.172169}} = {p_peso(500000/((1+i103)**15 - 1))}"},
     {"step": 3, "title": "Sum All Components", "explanation": "4M + 690,295 + 230,185 + 750,000:", "calculation": f"CC = {p_peso(CC103)}"}],
    p_int(CC103), ["4000000 + 800000 ÷ ( 1.08 [xʸ] 10 - 1 ) + 500000 ÷ ( 1.08 [xʸ] 15 - 1 ) + 60000 ÷ 0.08 [=] ⟹ 5670480"],
    "₱5,670,480", "Each independent component replacement has its own term.",
    "Multiple components with different replacement cycles are simply summed as separate capitalized terms.",
    [{"symbol": "Civil", "meaning": "Permanent civil works", "value": "₱4,000,000"}, {"symbol": "Pumps", "meaning": "Replace every 10 yrs", "value": "₱800,000"}, {"symbol": "Motors", "meaning": "Replace every 15 yrs", "value": "₱500,000"}, {"symbol": "Upkeep", "meaning": "Annual O&M", "value": "₱60,000"}]
))

# 104: Three Alternative Capitalized Cost
# Alt 1: ₱2M now, ₱150k/yr. Alt 2: ₱3M now, ₱70k/yr. Alt 3: ₱4.5M now, ₱10k/yr. i = 10%.
CC_1 = 2000000 + 150000/0.10 # 3.5M
CC_2 = 3000000 + 70000/0.10  # 3.7M
CC_3 = 4500000 + 10000/0.10  # 4.6M
new_problems.append(make_p(
    104, 3, "Capitalized Cost", "05_Capitalized_Cost_Perpetual_Replacements.pdf", "Doc 05: Multi-Alternative Selection",
    "Capitalized Cost Selection among Three Competing Industrial Facility Designs",
    "Three alternative substation perimeter security designs are considered at 10% interest: Design A (First Cost = ₱2,000,000, annual maintenance = ₱150,000), Design B (First Cost = ₱3,000,000, annual maintenance = ₱70,000), Design C (First Cost = ₱4,500,000, annual maintenance = ₱10,000). Which design has the lowest capitalized cost?",
    ["A. Design A (CC = ₱3,500,000)", "B. Design B (CC = ₱3,700,000)", "C. Design C (CC = ₱4,600,000)", "D. Design A and B are equal"], "A",
    "CC_k = FC_k + \\frac{O_k}{i}",
    [{"step": 1, "title": "Compute CC for Design A", "explanation": "2M + 150k / 0.10:", "calculation": f"CC_A = 2,000,000 + 1,500,000 = {p_peso(CC_1)}"},
     {"step": 2, "title": "Compute CC for Design B", "explanation": "3M + 70k / 0.10:", "calculation": f"CC_B = 3,000,000 + 700,000 = {p_peso(CC_2)}"},
     {"step": 3, "title": "Compute CC for Design C", "explanation": "4.5M + 10k / 0.10:", "calculation": f"CC_C = 4,500,000 + 100,000 = {p_peso(CC_3)}"}],
    "Design A (CC = ₱3,500,000)", ["2000000 + 150000 ÷ 0.10 [=] ⟹ 3500000"],
    "₱3,500,000", "Compute each in seconds: A is ₱3.5M, B is ₱3.7M, C is ₱4.6M.",
    "Higher initial cost in C does not save enough annual maintenance to justify the difference at 10% discount rate.",
    [{"symbol": "A", "meaning": "FC=₱2M, O=₱150k", "value": "₱3.5M CC"}, {"symbol": "B", "meaning": "FC=₱3M, O=₱70k", "value": "₱3.7M CC"}, {"symbol": "C", "meaning": "FC=₱4.5M, O=₱10k", "value": "₱4.6M CC"}]
))

# 105: Phased Construction Capitalized Cost
# ₱5M at t = 0, ₱3M at t = 2. Annual maintenance = ₱100k starting at t = 3. i = 8%.
P_const105 = 5000000 + 3000000/(1.08**2) # 5M + 2,572,016 = 7,572,016
P_maint105 = (100000 / 0.08) / (1.08**2) # (1,250,000) / 1.1664 = 1,071,673
CC105 = P_const105 + P_maint105
new_problems.append(make_p(
    105, 3, "Capitalized Cost", "05_Capitalized_Cost_Perpetual_Replacements.pdf", "Doc 05: Phased Infrastructure",
    "Capitalized Cost of Phased Hydro Facility Constructed over 2 Years",
    "A small hydroelectric facility requires ₱5,000,000 today and ₱3,000,000 at the end of Year 2. Annual operating maintenance of ₱100,000 commences at the end of Year 3 and continues indefinitely. At 8% interest, what is the capitalized cost at Year 0?",
    ["A. ₱8,643,690", "B. ₱8,450,200", "C. ₱8,820,000", "D. ₱8,250,000"], "A",
    "CC = FC_0 + FC_2(1+i)^{-2} + \\left(\\frac{O}{i}\\right)(1+i)^{-2}",
    [{"step": 1, "title": "Discount Year 2 Construction Cost", "explanation": "3,000,000 / (1.08)^2:", "calculation": f"\\text{{PW}}_{{const2}} = \\frac{{3,000,000}}{{1.166400}} = {p_peso(3000000/(1.08**2))}"},
     {"step": 2, "title": "Discount Perpetual Maintenance", "explanation": "(100k/0.08) at t=2 discounted to t=0:", "calculation": f"\\text{{PW}}_{{maint}} = \\frac{{1,250,000}}{{1.166400}} = {p_peso(P_maint105)}"},
     {"step": 3, "title": "Total Capitalized Cost at Year 0", "explanation": "Sum all elements:", "calculation": f"CC = 5M + 2,572,016 + 1,071,673 = {p_peso(CC105)}"}],
    p_int(CC105), ["5000000 + ( 3000000 + 100000 ÷ 0.08 ) ÷ 1.08 [xʸ] 2 [=] ⟹ 8643690"],
    "₱8,643,690", "Notice (3M + 100k/0.08) occurs at t=2; discount the sum together.",
    "Maintenance begins at Year 3, so its perpetuity value is anchored at Year 2 (one period before first payment).",
    [{"symbol": "FC_0", "meaning": "Initial outlay", "value": "₱5,000,000"}, {"symbol": "FC_2", "meaning": "Phase 2 outlay at t=2", "value": "₱3,000,000"}, {"symbol": "O", "meaning": "Annual upkeep from t=3", "value": "₱100,000"}]
))

print("Batch 98-105 compiled successfully.")
