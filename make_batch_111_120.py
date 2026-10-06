# -*- coding: utf-8 -*-
"""Problems 111 to 130: Break-Even, Cost Analysis & Capital Budgeting Methods"""
import math
from generate_problems_helper import make_problem, format_peso, format_peso_int

problems_111_130 = []

# ==========================================
# Problem 111: Classic Break-Even Point
# ==========================================
fc111 = 1500000; p111 = 250; vc111 = 150
cm111 = p111 - vc111 # 100
q_be111 = fc111 / cm111 # 15,000 units
rev_be111 = q_be111 * p111 # 3,750,000
p111_obj = make_problem(
    num=111,
    category="Break-Even & Cost Analysis",
    topic="Break-Even Analysis: Sales Volume and Break-Even Revenue",
    question=f"A small electrical transformer manufacturing facility has fixed overhead costs of {format_peso_int(fc111)} per year. Variable manufacturing costs are ₱{vc111:.2f} per unit, and each transformer sells for ₱{p111:.2f}. Calculate the break-even sales volume in units and the total break-even sales revenue.",
    given=[
        ("FC", "Fixed Annual Overhead", format_peso_int(fc111)),
        ("P", "Unit Selling Price", f"₱{p111:.2f}"),
        ("VC", "Unit Variable Cost", f"₱{vc111:.2f}")
    ],
    formula="CM = P - VC ; Q_BE = FC / CM ; Sales_BE = Q_BE * P",
    steps=[
        ("Unit Contribution Margin", f"CM = ₱{p111:.2f} - ₱{vc111:.2f}", f"₱{cm111:.2f} per unit"),
        ("Break-Even Units", f"Q_BE = {fc111:,} / {cm111:.2f}", f"{q_be111:,.0f} units"),
        ("Break-Even Sales Revenue", f"Sales_BE = {q_be111:,.0f} * ₱{p111:.2f}", f"₱{rev_be111:,.2f}")
    ],
    final_ans=f"Q_BE = {q_be111:,.0f} units, Revenue = {format_peso(rev_be111)}",
    choices=[
        f"A. Q_BE = {q_be111:,.0f} units, Revenue = {format_peso(rev_be111)}",
        f"B. Q_BE = 12,500 units, Revenue = ₱3,125,000.00",
        f"C. Q_BE = 18,000 units, Revenue = ₱4,500,000.00",
        f"D. Q_BE = 10,000 units, Revenue = ₱2,500,000.00"
    ],
    correct_letter="A",
    shortcut="Q_BE = 1,500,000 / (250 - 150) = 15,000 units. Revenue = 15,000 * 250 = ₱3,750,000.",
    keystrokes=["1500000 / ( 250 - 150 ) =", "Ans * 250 ="],
    cal_disp="3750000",
    cal_tip="Contribution margin ratio is CM/P = 100/250 = 40%. Break-even revenue = FC / CM ratio = 1.5M / 0.40 = ₱3.75M.",
    trap="Do not confuse variable cost with total cost per unit.",
    week_day=5,
    diff="Foundation"
)
problems_111_130.append(p111_obj)

# ==========================================
# Problem 112: Break-Even with Target Profit
# ==========================================
fc112 = 2400000; p112 = 800; vc112 = 480; target_prof112 = 1200000
cm112 = p112 - vc112 # 320
q_target112 = (fc112 + target_prof112) / cm112 # (3,600,000) / 320 = 11,250 units
p112_obj = make_problem(
    num=112,
    category="Break-Even & Cost Analysis",
    topic="Cost-Volume-Profit (CVP): Target Profit Output Quantity",
    question=f"A solar charge controller assembly line incurs annual fixed costs of {format_peso_int(fc112)}. Variable production costs are ₱{vc112:.2f} per unit and the retail selling price is ₱{p112:.2f}. How many units must be produced and sold annually to achieve a target operating profit of {format_peso_int(target_prof112)}?",
    given=[
        ("FC", "Annual Fixed Costs", format_peso_int(fc112)),
        ("Target Profit", "Desired Operating Income", format_peso_int(target_prof112)),
        ("P", "Unit Selling Price", f"₱{p112:.2f}"),
        ("VC", "Unit Variable Cost", f"₱{vc112:.2f}")
    ],
    formula="Q = (FC + Target Profit) / (P - VC)",
    steps=[
        ("Unit Contribution Margin", f"CM = ₱{p112:.2f} - ₱{vc112:.2f}", f"₱{cm112:.2f} per unit"),
        ("Required Target Quantity", f"Q = ({fc112:,} + {target_prof112:,}) / {cm112:.2f} = 3,600,000 / 320", f"{q_target112:,.0f} units")
    ],
    final_ans=f"{q_target112:,.0f} units",
    choices=[
        f"A. {q_target112:,.0f} units",
        f"B. 10,000 units",
        f"C. 12,500 units",
        f"D. 9,500 units"
    ],
    correct_letter="A",
    shortcut="Q = (2,400,000 + 1,200,000) / (800 - 480) = 3,600,000 / 320 = 11,250 units.",
    keystrokes=["( 2400000 + 1200000 ) / ( 800 - 480 ) ="],
    cal_disp="11250",
    cal_tip="Target profit behaves mathematically as an additional fixed cost requirement.",
    trap="Subtracting target profit instead of adding it to fixed overhead.",
    week_day=5,
    diff="Moderate"
)
problems_111_130.append(p112_obj)

# ==========================================
# Problem 113: Cash Break-Even Point
# ==========================================
fc_tot113 = 3000000; non_cash_dep113 = 800000; p113 = 500; vc113 = 300
cm113 = p113 - vc113 # 200
cash_fc113 = fc_tot113 - non_cash_dep113 # 2,200,000
q_cash113 = cash_fc113 / cm113 # 11,000 units
q_acct113 = fc_tot113 / cm113 # 15,000 units
p113_obj = make_problem(
    num=113,
    category="Break-Even & Cost Analysis",
    topic="Cash Break-Even vs Accounting Break-Even Volume",
    question=f"A mechanical fabrication shop reports total annual fixed expenses of {format_peso_int(fc_tot113)}, which includes {format_peso_int(non_cash_dep113)} of non-cash plant depreciation. Selling price is ₱{p113:.2f} per unit and variable costs are ₱{vc113:.2f} per unit. Find the cash break-even volume (units required to cover cash outlays only).",
    given=[
        ("Total Fixed Costs", "Accounting Overhead", format_peso_int(fc_tot113)),
        ("Depreciation", "Non-Cash Component", format_peso_int(non_cash_dep113)),
        ("P", "Selling Price", f"₱{p113:.2f}"),
        ("VC", "Variable Cost", f"₱{vc113:.2f}")
    ],
    formula="Cash Fixed Costs = Total FC - Depreciation ; Q_Cash = Cash FC / (P - VC)",
    steps=[
        ("Calculate Cash Fixed Costs", f"Cash FC = {fc_tot113:,} - {non_cash_dep113:,}", f"₱{cash_fc113:,.2f}"),
        ("Contribution Margin", f"CM = ₱{p113:.2f} - ₱{vc113:.2f}", f"₱{cm113:.2f}"),
        ("Compute Cash Break-Even Volume", f"Q_Cash = {cash_fc113:,} / {cm113:.2f}", f"{q_cash113:,.0f} units")
    ],
    final_ans=f"{q_cash113:,.0f} units",
    choices=[
        f"A. {q_cash113:,.0f} units",
        f"B. 15,000 units",
        f"C. 13,200 units",
        f"D. 12,500 units"
    ],
    correct_letter="A",
    shortcut="Q_Cash = (3,000,000 - 800,000) / (500 - 300) = 2,200,000 / 200 = 11,000 units.",
    keystrokes=["( 3000000 - 800000 ) / ( 500 - 300 ) ="],
    cal_disp="11000",
    cal_tip="Cash break-even indicates the bare survival production level below which the firm exhausts liquid reserves.",
    trap="Failing to deduct non-cash depreciation and giving the accounting break-even of 15,000 units.",
    week_day=5,
    diff="Moderate"
)
problems_111_130.append(p113_obj)

# ==========================================
# Problem 114: Multi-Product Break-Even
# ==========================================
# Product A: Price ₱100, VC ₱60 -> CM ₱40. Sales mix: 60%
# Product B: Price ₱200, VC ₱140 -> CM ₱60. Sales mix: 40%
# Weighted CM = 0.60 * 40 + 0.40 * 60 = 24 + 24 = ₱48.00 per unit bundle
fc114 = 960000
cm_bundle114 = 0.60 * 40 + 0.40 * 60 # 48
total_q114 = fc114 / cm_bundle114 # 20,000 units total
qa114 = total_q114 * 0.60 # 12,000
qb114 = total_q114 * 0.40 # 8,000
p114_obj = make_problem(
    num=114,
    category="Break-Even & Cost Analysis",
    topic="Multi-Product Break-Even: Weighted Contribution Margin",
    question=f"A switchgear company manufactures two models of breaker panels:\n- Standard: Selling Price ₱100, Variable Cost ₱60, 60% sales mix\n- Heavy Duty: Selling Price ₱200, Variable Cost ₱140, 40% sales mix\nAnnual fixed overhead is {format_peso_int(fc114)}. Determine total break-even sales volume and units required for each model.",
    given=[
        ("Model Standard", "P = ₱100, VC = ₱60, Mix = 60%", "CM = ₱40"),
        ("Model Heavy Duty", "P = ₱200, VC = ₱140, Mix = 40%", "CM = ₱60"),
        ("Fixed Costs", "Total Annual Plant Overhead", format_peso_int(fc114))
    ],
    formula="Weighted CM = Sum(w_i * CM_i) ; Total Q = FC / Weighted CM ; Q_i = w_i * Total Q",
    steps=[
        ("Weighted Contribution Margin", "Weighted CM = (0.60 * 40) + (0.40 * 60) = 24 + 24", "₱48.00 per composite unit"),
        ("Total Combined Break-Even Volume", f"Total Q = {fc114:,} / 48", f"{total_q114:,.0f} units"),
        ("Break-Even Breakdown", f"Standard = 60% * 20,000 = {qa114:,.0f} units; Heavy Duty = 40% * 20,000 = {qb114:,.0f} units", "Complete Breakdown")
    ],
    final_ans=f"Total: {total_q114:,.0f} units (Standard: {qa114:,.0f}, Heavy Duty: {qb114:,.0f})",
    choices=[
        f"A. Total: {total_q114:,.0f} units (Standard: {qa114:,.0f}, Heavy Duty: {qb114:,.0f})",
        f"B. Total: 24,000 units (Standard: 14,400, Heavy Duty: 9,600)",
        f"C. Total: 18,000 units (Standard: 10,800, Heavy Duty: 7,200)",
        f"D. Total: 22,500 units (Standard: 13,500, Heavy Duty: 9,000)"
    ],
    correct_letter="A",
    shortcut="CM_w = 0.6*40 + 0.4*60 = 48. Total Q = 960k / 48 = 20,000 units. Standard = 12k, Heavy Duty = 8k.",
    keystrokes=["960000 / ( 0.60 * 40 + 0.40 * 60 ) ="],
    cal_disp="20000",
    cal_tip="Ensure sales mix weighting uses unit volume percentages rather than revenue percentages when calculating per-unit weighted CM.",
    trap="Weighting by price instead of unit sales mix.",
    week_day=5,
    diff="Board Exam Standard"
)
problems_111_130.append(p114_obj)

# ==========================================
# Problem 115: Degree of Operating Leverage (DOL)
# ==========================================
q115 = 20000; p115 = 500; vc115 = 300; fc115 = 2500000
sales115 = q115 * p115 # 10,000,000
tot_vc115 = q115 * vc115 # 6,000,000
cm_tot115 = sales115 - tot_vc115 # 4,000,000
ebit115 = cm_tot115 - fc115 # 1,500,000
dol115 = cm_tot115 / ebit115 # 4,000,000 / 1,500,000 = 2.67
p115_obj = make_problem(
    num=115,
    category="Break-Even & Cost Analysis",
    topic="Operating Leverage: Degree of Operating Leverage (DOL)",
    question=f"A valve manufacturing company produces and sells {q115:,} precision check valves at ₱{p115:.2f} each. Unit variable costs are ₱{vc115:.2f} and fixed operating expenses are {format_peso_int(fc115)}. Calculate the Degree of Operating Leverage (DOL) at this sales volume and the percentage increase in EBIT if sales increase by 15%.",
    given=[
        ("Sales Volume Q", "Current Operating Rate", f"{q115:,} units"),
        ("Price P", "Selling Price", f"₱{p115:.2f}"),
        ("Variable Cost VC", "Unit Variable Expense", f"₱{vc115:.2f}"),
        ("Fixed Costs FC", "Fixed Operating Burden", format_peso_int(fc115)),
        ("Sales Increase", "Projected Demand Growth", "15%")
    ],
    formula="DOL = Total Contribution Margin / EBIT ; Delta EBIT% = DOL * Delta Sales%",
    steps=[
        ("Total Contribution Margin", f"CM = {q115:,} * (₱{p115:.2f} - ₱{vc115:.2f}) = {q115:,} * ₱200", f"₱{cm_tot115:,.2f}"),
        ("Operating Income (EBIT)", f"EBIT = {cm_tot115:,} - {fc115:,}", f"₱{ebit115:,.2f}"),
        ("Degree of Operating Leverage", f"DOL = {cm_tot115:,} / {ebit115:,} = 4,000,000 / 1,500,000", f"{dol115:.2f}"),
        ("EBIT Growth on 15% Sales Increase", f"Delta EBIT% = {dol115:.2f} * 15%", f"{dol115 * 15:.1f}%")
    ],
    final_ans=f"DOL = {dol115:.2f}, EBIT increases by {dol115 * 15:.1f}%",
    choices=[
        f"A. DOL = {dol115:.2f}, EBIT increases by {dol115 * 15:.1f}%",
        f"B. DOL = 2.25, EBIT increases by 33.8%",
        f"C. DOL = 3.10, EBIT increases by 46.5%",
        f"D. DOL = 1.85, EBIT increases by 27.8%"
    ],
    correct_letter="A",
    shortcut="DOL = (20,000 * 200) / (20,000 * 200 - 2,500,000) = 4M / 1.5M = 2.67. 2.67 * 15% = 40.0%.",
    keystrokes=["4000000 / 1500000 =", "Ans * 15 ="],
    cal_disp="40",
    cal_tip="Higher fixed costs produce a higher DOL, magnifying both profits during upturns and losses during downturns.",
    trap="Dividing Sales by EBIT instead of Contribution Margin by EBIT.",
    week_day=5,
    diff="Board Exam Standard"
)
problems_111_130.append(p115_obj)

# ==========================================
# Problem 116: Margin of Safety (MOS)
# ==========================================
actual_sales116 = 8000000; be_sales116 = 5000000
mos_amount116 = actual_sales116 - be_sales116 # 3,000,000
mos_ratio116 = mos_amount116 / actual_sales116 # 3M / 8M = 37.50%
p116_obj = make_problem(
    num=116,
    category="Break-Even & Cost Analysis",
    topic="Risk Evaluation: Margin of Safety Amount and MOS Ratio",
    question=f"An electrical contracting company generates {format_peso_int(actual_sales116)} in annual gross billing. Based on their overhead and variable project costs, their break-even revenue point is {format_peso_int(be_sales116)}. Determine the Margin of Safety (MOS) amount and the Margin of Safety percentage.",
    given=[
        ("Actual Sales", "Current Operating Revenue", format_peso_int(actual_sales116)),
        ("Break-Even Sales", "Zero-Profit Revenue Threshold", format_peso_int(be_sales116))
    ],
    formula="MOS Amount = Actual Sales - Break-Even Sales ; MOS Ratio = MOS Amount / Actual Sales",
    steps=[
        ("Compute MOS Amount", f"MOS = {actual_sales116:,} - {be_sales116:,}", f"₱{mos_amount116:,.2f}"),
        ("Compute MOS Percentage", f"MOS% = {mos_amount116:,} / {actual_sales116:,} * 100%", f"{mos_ratio116 * 100:.2f}%")
    ],
    final_ans=f"MOS = {format_peso(mos_amount116)} ({mos_ratio116 * 100:.2f}%)",
    choices=[
        f"A. MOS = {format_peso(mos_amount116)} ({mos_ratio116 * 100:.2f}%)",
        f"B. MOS = ₱2,500,000.00 (31.25%)",
        f"C. MOS = ₱3,500,000.00 (43.75%)",
        f"D. MOS = ₱3,000,000.00 (60.00%)"
    ],
    correct_letter="A",
    shortcut="MOS% = (8M - 5M) / 8M = 3/8 = 37.5%.",
    keystrokes=["( 8000000 - 5000000 ) / 8000000 ="],
    cal_disp="0.375",
    cal_tip="Margin of Safety represents how far sales can drop before the enterprise begins suffering losses.",
    trap="Dividing by Break-Even Sales instead of Actual Sales in the denominator.",
    week_day=5,
    diff="Foundation"
)
problems_111_130.append(p116_obj)

# ==========================================
# Problem 117: Shut-Down Point Decision
# ==========================================
fc_tot117 = 2000000; fc_unavoidable117 = 1200000 # sunk/unavoidable
fc_avoidable117 = 800000; p117 = 400; vc117 = 250
cm117 = p117 - vc117 # 150
# Shut-down point occurs where revenue covers variable cost + avoidable fixed cost:
# Q_sd = FC_avoidable / CM = 800,000 / 150 = 5,333.33 units
q_sd117 = math.ceil(fc_avoidable117 / cm117) # 5,334 units
p117_obj = make_problem(
    num=117,
    category="Break-Even & Cost Analysis",
    topic="Production Economics: Short-Run Shut-Down Point",
    question=f"A precast concrete plant has total annual fixed costs of {format_peso_int(fc_tot117)}. If operations are temporarily shut down, {format_peso_int(fc_unavoidable117)} in contractual overhead and property leases must still be paid (unavoidable fixed costs), while {format_peso_int(fc_avoidable117)} can be eliminated (avoidable fixed costs). Products sell for ₱{p117:.2f} with variable costs of ₱{vc117:.2f} per unit. At what sales volume should the plant shut down in the short run?",
    given=[
        ("Total Fixed Costs", "Full Annual Overhead", format_peso_int(fc_tot117)),
        ("Unavoidable FC", "Committed Overhead Even If Closed", format_peso_int(fc_unavoidable117)),
        ("Avoidable FC", "Eliminated Overhead If Closed", format_peso_int(fc_avoidable117)),
        ("Contribution Margin", f"₱{p117:.2f} - ₱{vc117:.2f}", f"₱{cm117:.2f}/unit")
    ],
    formula="Q_ShutDown = Avoidable Fixed Costs / Contribution Margin",
    steps=[
        ("Identify Avoidable Costs", f"Avoidable FC = {fc_tot117:,} - {fc_unavoidable117:,}", f"₱{fc_avoidable117:,.2f}"),
        ("Contribution Margin", f"CM = ₱{p117:.2f} - ₱{vc117:.2f}", f"₱{cm117:.2f} per unit"),
        ("Compute Shut-Down Output", f"Q_SD = {fc_avoidable117:,} / {cm117:.2f}", f"{q_sd117:,} units")
    ],
    final_ans=f"{q_sd117:,} units",
    choices=[
        f"A. {q_sd117:,} units",
        f"B. 8,000 units",
        f"C. 13,333 units",
        f"D. 4,500 units"
    ],
    correct_letter="A",
    shortcut="Q_SD = Avoidable FC / CM = 800,000 / 150 = 5,334 units. Above this volume, continuing minimizes losses.",
    keystrokes=["800000 / ( 400 - 250 ) ="],
    cal_disp="5333.333333",
    cal_tip="If revenue covers variable costs plus avoidable fixed costs, continuing operations contributes toward unavoidable costs, losing less than shutting down completely.",
    trap="Using total fixed costs (₱2,000,000) which gives the break-even point (13,333 units), not the shut-down threshold.",
    week_day=5,
    diff="Advanced"
)
problems_111_130.append(p117_obj)

# ==========================================
# Problem 118: Make-or-Buy Decision Indifference Volume
# ==========================================
# Make: FC = 600,000, VC = 45 per unit
# Buy: Price = 75 per unit (zero FC)
# 600,000 + 45 * Q = 75 * Q => (75 - 45) * Q = 600,000 => 30 * Q = 600,000 => Q = 20,000 units
fc_make118 = 600000; vc_make118 = 45; p_buy118 = 75
q_indiff118 = fc_make118 / (p_buy118 - vc_make118) # 20,000 units
p118_obj = make_problem(
    num=118,
    category="Break-Even & Cost Analysis",
    topic="Make-or-Buy Decision: Cost Indifference Volume",
    question=f"An electronics manufacturer requires stamped copper heat sinks. They can buy them from an external supplier at ₱{p_buy118:.2f} per piece. Alternatively, they can invest in tooling with an annual fixed cost of {format_peso_int(fc_make118)} and manufacture them internally at a variable cost of ₱{vc_make118:.2f} per unit. At what annual quantity is the company indifferent between making and buying?",
    given=[
        ("Buy Option", "External Supplier Quote", f"₱{p_buy118:.2f} per unit"),
        ("Make Option Tooling FC", "Annualized Fixed Equipment Cost", format_peso_int(fc_make118)),
        ("Make Option Unit VC", "Direct Materials and Labor", f"₱{vc_make118:.2f} per unit")
    ],
    formula="TC_Buy = TC_Make  =>  P_buy * Q = FC_make + VC_make * Q  =>  Q = FC_make / (P_buy - VC_make)",
    steps=[
        ("Equate Total Cost Equations", f"₱{p_buy118:.2f} * Q = {fc_make118:,} + ₱{vc_make118:.2f} * Q", "Equation"),
        ("Solve for Indifference Volume", f"Q * (₱{p_buy118:.2f} - ₱{vc_make118:.2f}) = {fc_make118:,} => 30 * Q = {fc_make118:,}", f"{q_indiff118:,.0f} units"),
        ("Decision Rule", f"For volume < {q_indiff118:,.0f}, BUY. For volume > {q_indiff118:,.0f}, MAKE in-house.", "Policy")
    ],
    final_ans=f"{q_indiff118:,.0f} units",
    choices=[
        f"A. {q_indiff118:,.0f} units",
        f"B. 15,000 units",
        f"C. 25,000 units",
        f"D. 18,500 units"
    ],
    correct_letter="A",
    shortcut="Q = FC / (Buy Price - Make VC) = 600,000 / (75 - 45) = 20,000 units.",
    keystrokes=["600000 / ( 75 - 45 ) ="],
    cal_disp="20000",
    cal_tip="Make-or-buy indifference is simply the break-even point where unit savings from making (₱30) amortize the fixed tooling expense.",
    trap="Inverting the sign in the denominator.",
    week_day=5,
    diff="Moderate"
)
problems_111_130.append(p118_obj)

# ==========================================
# Problem 119: Equipment Automation Indifference Point
# ==========================================
# Manual: FC = 100,000, VC = 50
# Automated: FC = 500,000, VC = 10
# 100,000 + 50 * Q = 500,000 + 10 * Q => 40 * Q = 400,000 => Q = 10,000 units
q_auto119 = (500000 - 100000) / (50 - 10) # 10,000 units
p119_obj = make_problem(
    num=119,
    category="Break-Even & Cost Analysis",
    topic="Process Selection: Indifference Volume between Manual & Automated Systems",
    question="A PCB assembly line can be configured using either manual soldering stations or a robotic surface-mount machine:\n- Manual: Annual Fixed Cost ₱100,000; Variable Cost ₱50.00/board\n- Automated: Annual Fixed Cost ₱500,000; Variable Cost ₱10.00/board\nFind the annual production volume at which both processes have equal total annual cost.",
    given=[
        ("Manual Process", "FC = ₱100,000, VC = ₱50.00", "Low CapEx, High OpEx"),
        ("Automated Process", "FC = ₱500,000, VC = ₱10.00", "High CapEx, Low OpEx")
    ],
    formula="TC_Manual = TC_Auto  =>  Q = (FC_Auto - FC_Manual) / (VC_Manual - VC_Auto)",
    steps=[
        ("Difference in Fixed Overhead", "Delta FC = ₱500,000 - ₱100,000", "₱400,000"),
        ("Difference in Variable Savings", "Delta VC = ₱50.00 - ₱10.00", "₱40.00 per board"),
        ("Compute Indifference Point", f"Q = ₱400,000 / ₱40.00", f"{q_auto119:,.0f} boards")
    ],
    final_ans=f"{q_auto119:,.0f} boards/year",
    choices=[
        f"A. {q_auto119:,.0f} boards/year",
        f"B. 12,500 boards/year",
        f"C. 8,000 boards/year",
        f"D. 15,000 boards/year"
    ],
    correct_letter="A",
    shortcut="Q = (500,000 - 100,000) / (50 - 10) = 400,000 / 40 = 10,000 boards.",
    keystrokes=["( 500000 - 100000 ) / ( 50 - 10 ) ="],
    cal_disp="10000",
    cal_tip="Below 10,000 units, choose the manual process (lower fixed cost). Above 10,000 units, the automated machine is superior.",
    trap="Adding fixed costs instead of subtracting.",
    week_day=5,
    diff="Moderate"
)
problems_111_130.append(p119_obj)

# ==========================================
# Problem 120: Conventional Benefit-Cost Ratio
# ==========================================
# Municipal flood control dike:
# Initial Investment I = 20,000,000, Life = 25 years, i = 8%
# Annual O&M = 500,000
# Annual Flood Damage Benefits = 3,200,000
# Equivalent Annual Capital Recovery of I = 20M * (A/P, 8%, 25) = 20M * 0.0936788 = 1,873,576
# Total Annual Cost = 1,873,576 + 500,000 = 2,373,576
# Conventional B/C = Benefits / (CR + O&M) = 3,200,000 / 2,373,576 = 1.35
i120 = 0.08; n120 = 25; inv120 = 20000000; om120 = 500000; ben120 = 3200000
cr120 = inv120 * (i120 / (1 - (1 + i120)**(-n120))) # 1,873,575.60
tot_cost120 = cr120 + om120 # 2,373,575.60
bc_ratio120 = ben120 / tot_cost120 # 1.348
p120_obj = make_problem(
    num=120,
    category="Capital Budgeting & Evaluation",
    topic="Public Works: Conventional Benefit-Cost (B/C) Ratio",
    question=f"A municipal flood protection levee requires an initial capital expenditure of {format_peso_int(inv120)} with a service life of {n120} years and zero salvage value. Annual maintenance costs are {format_peso_int(om120)}. The project prevents an estimated {format_peso_int(ben120)} in annual flood damages to downstream properties. If the social discount rate is {int(i120*100)}%, compute the conventional Benefit-Cost ratio (B/C).",
    given=[
        ("Initial Investment I", "Capital Outlay", format_peso_int(inv120)),
        ("Annual Benefits B", "Flood Losses Averted", format_peso_int(ben120)),
        ("Annual Maintenance O&M", "Recurring Operations", format_peso_int(om120)),
        ("Social Discount Rate i", "Cost of Capital", f"{int(i120*100)}%"),
        ("Project Life n", "Planning Horizon", f"{n120} years")
    ],
    formula="CR = I * (A/P, i, n) ; Conventional B/C = B / (CR + O&M)",
    steps=[
        ("Calculate Annual Capital Recovery (CR)", f"CR = {inv120:,} * [0.08 / (1 - 1.08^-25)] = {inv120:,} * 0.093679", f"₱{cr120:,.2f} per year"),
        ("Compute Total Equivalent Annual Cost", f"Cost = CR + O&M = {cr120:,.2f} + {om120:,}", f"₱{tot_cost120:,.2f}"),
        ("Compute Conventional B/C Ratio", f"B/C = {ben120:,} / {tot_cost120:,.2f}", f"{bc_ratio120:.2f}")
    ],
    final_ans=f"B/C = {bc_ratio120:.2f} (Project is economically justified since B/C > 1.0)",
    choices=[
        f"A. B/C = {bc_ratio120:.2f} (Justified)",
        f"B. B/C = 0.95 (Not Justified)",
        f"C. B/C = 1.62 (Justified)",
        f"D. B/C = 1.15 (Justified)"
    ],
    correct_letter="A",
    shortcut="CR = 20M*(0.08/(1-1.08^-25)) = 1.874M. Total Cost = 1.874M + 0.5M = 2.374M. B/C = 3.2M / 2.374M = 1.35.",
    keystrokes=["3200000 / ( 20000000 * ( 0.08 / ( 1 - 1.08 ^ -25 ) ) + 500000 ) ="],
    cal_disp="1.348177",
    cal_tip="In Conventional B/C, O&M expenses are placed in the denominator alongside capital recovery.",
    trap="Dividing B directly by initial cost without annualizing the capital outlay.",
    week_day=5,
    diff="Board Exam Standard"
)
problems_111_130.append(p120_obj)

print("Batch 111-120 complete.")
