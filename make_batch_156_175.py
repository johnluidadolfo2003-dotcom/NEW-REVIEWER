# -*- coding: utf-8 -*-
"""Problems 156 to 175: Advanced Concepts, Levelized Cost & Comprehensive Capstone Board Problems"""
import math
from generate_problems_helper import make_problem, format_peso, format_peso_int

problems_156_175 = []

# ==========================================
# Problem 156: Geometric Gradient with g = i
# ==========================================
# When escalation rate g equals interest rate i:
# P = n * A1 / (1 + i)
# A1 = 200,000, g = 8%, i = 8%, n = 10 years.
# P = 10 * 200,000 / 1.08 = 2,000,000 / 1.08 = 1,851,851.85
p156_tot = 10 * 200000 / 1.08 # 1,851,851.85
p156_obj = make_problem(
    num=156,
    category="Advanced Replacement & Inflation",
    topic="Cash Flow Modeling: Geometric Gradient Special Case (g = i)",
    question="An annual maintenance contract begins at ₱200,000 at the end of Year 1 and escalates at exactly 8.0% per year for 10 years. If the company's discount rate is also exactly 8.0% per year, what is the Present Worth of the 10-year contract?",
    given=[
        ("Initial Cash Flow A_1", "Year 1 Outlay", "₱200,000"),
        ("Escalation Rate g", "Annual Increase", "8.0%"),
        ("Discount Rate i", "Cost of Capital", "8.0% (Note: g = i)"),
        ("Number of Years n", "Duration", "10 years")
    ],
    formula="When g = i: P = n * A_1 / (1 + i) = n * A_1 / (1 + g)",
    steps=[
        ("Observe Special Condition", "When escalation rate equals the discount rate (g = i), the standard denominator (i - g) becomes zero.", "Singularity condition"),
        ("Apply L'Hopital / Geometric Identity", "Each discounted term equals A_1 / (1 + i) identically for all n periods.", "Constant discounted terms"),
        ("Compute Present Worth", f"P = 10 * ₱200,000 / 1.08 = ₱2,000,000 / 1.08", f"₱{p156_tot:,.2f}")
    ],
    final_ans=format_peso(p156_tot),
    choices=[
        f"A. {format_peso(p156_tot)}",
        f"B. ₱2,000,000.00",
        f"C. ₱1,650,420.00",
        f"D. ₱1,728,000.00"
    ],
    correct_letter="A",
    shortcut="When g = i, P = n * A1 / (1 + i) = 10 * 200k / 1.08 = ₱1,851,851.85.",
    keystrokes=["10 * 200000 / 1.08 ="],
    cal_disp="1851851.852",
    cal_tip="Do NOT try to use the regular formula when g = i, as dividing by (i - g = 0) causes a Math ERROR on your calculator!",
    trap="Trying to divide by zero with the general geometric formula.",
    week_day=7,
    diff="Board Exam Standard"
)
problems_156_175.append(p156_obj)

# ==========================================
# Problem 157: Continuous Compounding
# ==========================================
# Principal P = 500,000, nominal rate r = 10%, time n = 6 years.
# Future worth F = P * e^(r*n) = 500,000 * e^(0.10 * 6) = 500,000 * e^0.60 = 500,000 * 1.8221188 = 911,059.40.
# Effective Annual Rate EAR = e^r - 1 = e^0.10 - 1 = 1.10517 - 1 = 10.52%.
f157 = 500000 * math.exp(0.10 * 6) # 911,059.40
ear157 = (math.exp(0.10) - 1) * 100 # 10.52%
p157_obj = make_problem(
    num=157,
    category="Advanced Replacement & Inflation",
    topic="Continuous Compounding: Future Value and Effective Annual Rate",
    question=f"A specialized environmental remediation bond deposits {format_peso_int(500000)} in an interest-bearing escrow account earning 10.0% nominal annual interest compounded continuously for 6 years. Compute the accumulated future worth and the Effective Annual Rate (EAR).",
    given=[
        ("Principal P", "Deposit Basis", format_peso_int(500000)),
        ("Nominal Annual Rate r", "Continuous Compounding", "10.0%"),
        ("Time Horizon n", "Elapsed Duration", "6 years")
    ],
    formula="F = P * e^(r * n) ; EAR = e^r - 1",
    steps=[
        ("Compute Future Worth", "F = 500,000 * e^(0.10 * 6) = 500,000 * e^0.60 = 500,000 * 1.822119", f"₱{f157:,.2f}"),
        ("Compute Effective Annual Rate", "EAR = e^0.10 - 1 = 1.105171 - 1", f"{ear157:.2f}%")
    ],
    final_ans=f"F = {format_peso(f157)}, EAR = {ear157:.2f}%",
    choices=[
        f"A. F = {format_peso(f157)}, EAR = {ear157:.2f}%",
        f"B. F = ₱885,780.00, EAR = 10.00%",
        f"C. F = ₱905,185.00, EAR = 10.38%",
        f"D. F = ₱925,000.00, EAR = 10.75%"
    ],
    correct_letter="A",
    shortcut="F = 500,000 * e^0.60 = ₱911,059.40. EAR = e^0.10 - 1 = 10.52%.",
    keystrokes=["500000 * [SHIFT] [ln] 0.60 =", "[SHIFT] [ln] 0.10 - 1 ="],
    cal_disp="911059.4",
    cal_tip="Continuous compounding represents the mathematical limit of compounding frequency as m approaches infinity.",
    trap="Using annual compounding (1.10^6 = 1.771561) instead of continuous exponential compounding.",
    week_day=7,
    diff="Foundation"
)
problems_156_175.append(p157_obj)

# ==========================================
# Problem 158: Capital Rationing via Profitability Index (PI)
# ==========================================
# Total budget = 10,000,000.
# Project A: CapEx = 4,000,000, NPV = 1,200,000 -> PI = 1,200,000 / 4,000,000 = 0.30
# Project B: CapEx = 3,000,000, NPV = 1,050,000 -> PI = 1,050,000 / 3,000,000 = 0.35
# Project C: CapEx = 5,000,000, NPV = 1,600,000 -> PI = 1,600,000 / 5,000,000 = 0.32
# Project D: CapEx = 3,000,000, NPV = 900,000 -> PI = 900,000 / 3,000,000 = 0.30
# Rank by PI:
# 1. Project B: CapEx 3M, NPV 1.05M (Budget left: 7M)
# 2. Project C: CapEx 5M, NPV 1.60M (Budget left: 2M)
# Budget left is 2M, neither A (4M) nor D (3M) fits.
# Or check combinations:
# B + C = 8M, NPV = 2.65M
# A + B + D = 4M + 3M + 3M = 10M, NPV = 1.2M + 1.05M + 0.9M = 3.15M!
# A + C = 9M, NPV = 1.2M + 1.6M = 2.80M!
# Best combination under 10M constraint is A + B + D with total NPV = ₱3,150,000!
p158_obj = make_problem(
    num=158,
    category="Capital Budgeting & Evaluation",
    topic="Capital Rationing: Portfolio Selection under Strict Budget Constraint",
    question="A renewable energy developer has a strict capital expenditure limit of ₱10,000,000 for the upcoming fiscal year. Four independent projects are available:\n- Project A: CapEx ₱4,000,000; NPV ₱1,200,000\n- Project B: CapEx ₱3,000,000; NPV ₱1,050,000\n- Project C: CapEx ₱5,000,000; NPV ₱1,600,000\n- Project D: CapEx ₱3,000,000; NPV ₱900,000\nProjects cannot be fractionally funded. Which project portfolio maximizes total NPV without exceeding the ₱10,000,000 budget?",
    given=[
        ("Available Capital Budget", "Ceiling Constraint", "₱10,000,000"),
        ("Candidate Projects", "A (₱4M, NPV ₱1.2M), B (₱3M, NPV ₱1.05M), C (₱5M, NPV ₱1.6M), D (₱3M, NPV ₱0.9M)", "Independent, integer funding")
    ],
    formula="Maximize Sum(NPV_i) subject to Sum(CapEx_i) <= Budget",
    steps=[
        ("Evaluate Feasible Combinations", "- B + C: CapEx = ₱8M, Total NPV = ₱1.05M + ₱1.60M = ₱2.65M\n- A + C: CapEx = ₱9M, Total NPV = ₱1.20M + ₱1.60M = ₱2.80M\n- A + B + D: CapEx = ₱4M + ₱3M + ₱3M = ₱10M, Total NPV = ₱1.20M + ₱1.05M + ₱0.90M = ₱3.15M", "Portfolio enumeration"),
        ("Select Optimal Portfolio", "The combination of Projects A, B, and D utilizes 100% of the budget and delivers the highest total NPV of ₱3,150,000.", "A + B + D")
    ],
    final_ans="Projects A, B, and D (Total NPV = ₱3,150,000)",
    choices=[
        "A. Projects A, B, and D (Total NPV = ₱3,150,000)",
        "B. Projects B and C (Total NPV = ₱2,650,000)",
        "C. Projects A and C (Total NPV = ₱2,800,000)",
        "D. Project C and D (Total NPV = ₱2,500,000)"
    ],
    correct_letter="A",
    shortcut="Check all combos <= 10M: A+B+D = 4+3+3 = 10M, NPV = 1.2+1.05+0.9 = 3.15M. Highest!",
    keystrokes=["1200000 + 1050000 + 900000 ="],
    cal_disp="3150000",
    cal_tip="Because projects are indivisible (lumpy capital), ranking purely by Profitability Index can leave unspent budget; complete combinatorial checking ensures the true maximum NPV is identified.",
    trap="Blindly picking B and C based on individual PI ranking without noticing that A+B+D fully absorbs the budget for greater total wealth.",
    week_day=7,
    diff="Advanced"
)
problems_156_175.append(p158_obj)

# ==========================================
# Problem 159: Multi-tier Utility Electricity Tariff & Peak Demand
# ==========================================
# Industrial customer:
# Peak demand = 800 kW. Demand charge = ₱250 / kW-month.
# Energy consumption = 240,000 kWh/month.
# Tier 1 (First 100,000 kWh) @ ₱7.50/kWh
# Tier 2 (Next 100,000 kWh) @ ₱6.80/kWh
# Tier 3 (Excess above 200,000 kWh) = 40,000 kWh @ ₱6.00/kWh
# Monthly demand charge = 800 * 250 = ₱200,000.
# Monthly energy charge = 100,000*7.50 + 100,000*6.80 + 40,000*6.00 = 750,000 + 680,000 + 240,000 = ₱1,670,000.
# Total monthly bill = 200,000 + 1,670,000 = ₱1,870,000.
# Average cost per kWh = 1,870,000 / 240,000 = ₱7.79 / kWh.
tot_energy159 = 100000 * 7.50 + 100000 * 6.80 + 40000 * 6.00 # 1,670,000
tot_bill159 = 800 * 250 + tot_energy159 # 1,870,000
avg_rate159 = tot_bill159 / 240000 # 7.79
p159_obj = make_problem(
    num=159,
    category="Break-Even & Cost Analysis",
    topic="Industrial Utility Economics: Two-Part Tariff and Inverted Block Rate",
    question=f"A semiconductor fabrication plant registers a maximum monthly demand of 800 kW and consumes 240,000 kWh in a billing month under the following two-part industrial tariff:\n- Demand Charge: ₱250.00 per kW of peak demand\n- Energy Charges: First 100,000 kWh at ₱7.50/kWh; Next 100,000 kWh at ₱6.80/kWh; Excess above 200,000 kWh at ₱6.00/kWh\nCalculate the total monthly power bill and the effective blended cost per kWh.",
    given=[
        ("Peak Demand", "Billing Demand", "800 kW"),
        ("Total Consumption", "Monthly Energy Usage", "240,000 kWh"),
        ("Demand Rate", "Capacity Charge", "₱250.00 / kW-month"),
        ("Energy Blocks", "Tier 1: ₱7.50, Tier 2: ₱6.80, Tier 3: ₱6.00", "Declining block pricing")
    ],
    formula="Total Bill = (Peak kW * Demand Rate) + Sum(kWh_tier * Rate_tier) ; Blended Rate = Total Bill / Total kWh",
    steps=[
        ("Demand Charge", "800 kW * ₱250.00/kW", "₱200,000.00"),
        ("Tier 1 Energy", "100,000 kWh * ₱7.50", "₱750,000.00"),
        ("Tier 2 Energy", "100,000 kWh * ₱6.80", "₱680,000.00"),
        ("Tier 3 Energy", "40,000 kWh * ₱6.00", "₱240,000.00"),
        ("Total Monthly Bill", f"Total = ₱200,000 + ₱750,000 + ₱680,000 + ₱240,000", f"₱{tot_bill159:,.2f}"),
        ("Blended Cost per kWh", f"Rate = {tot_bill159:,} / 240,000", f"₱{avg_rate159:.2f} per kWh")
    ],
    final_ans=f"Total Bill = {format_peso(tot_bill159)}, Blended Rate = ₱{avg_rate159:.2f}/kWh",
    choices=[
        f"A. Total Bill = {format_peso(tot_bill159)}, Blended Rate = ₱{avg_rate159:.2f}/kWh",
        f"B. Total Bill = ₱1,670,000.00, Blended Rate = ₱6.96/kWh",
        f"C. Total Bill = ₱1,950,000.00, Blended Rate = ₱8.13/kWh",
        f"D. Total Bill = ₱1,800,000.00, Blended Rate = ₱7.50/kWh"
    ],
    correct_letter="A",
    shortcut="Demand = 800*250 = 200k. Energy = 100k*7.5 + 100k*6.8 + 40k*6 = 1.67M. Total = ₱1.87M. Avg = 1.87M / 240k = ₱7.79/kWh.",
    keystrokes=["800 * 250 + 100000 * 7.50 + 100000 * 6.80 + 40000 * 6.00 =", "Ans / 240000 ="],
    cal_disp="7.791666667",
    cal_tip="The two-part tariff separates fixed capacity delivery costs (demand charge) from variable fuel/generation consumption (energy charge).",
    trap="Omitting the demand charge component (giving ₱1,670,000).",
    week_day=7,
    diff="Moderate"
)
problems_156_175.append(p159_obj)

# ==========================================
# Problem 160: Expected Monetary Value (EMV) Decision Tree
# ==========================================
# Bidding decision on design-build substation:
# Option 1: Bid High (₱50M). Probability of winning = 30%. Profit if won = ₱8,000,000. Cost of bid preparation = ₱500,000.
# If lose, profit = -₱500,000.
# EMV_High = 0.30 * (8,000,000 - 500,000) + 0.70 * (-500,000) = 0.30 * 7.5M - 0.70 * 0.5M = 2.25M - 0.35M = ₱1,900,000.
# Option 2: Bid Moderate (₱44M). Probability of winning = 70%. Profit if won = ₱4,000,000.
# EMV_Mod = 0.70 * (4,000,000 - 500,000) + 0.30 * (-500,000) = 0.70 * 3.5M - 0.30 * 0.5M = 2.45M - 0.15M = ₱2,300,000.
# Option 3: Do Not Bid. EMV = ₱0.
# Best decision is Bid Moderate with EMV = ₱2,300,000.
emv_high160 = 0.30 * 7500000 - 0.70 * 500000 # 1,900,000
emv_mod160 = 0.70 * 3500000 - 0.30 * 500000 # 2,300,000
p160_obj = make_problem(
    num=160,
    category="Capital Budgeting & Evaluation",
    topic="Risk Decision Trees: Expected Monetary Value (EMV) of Competitive Tender",
    question="An EPC contractor evaluates bidding on a grid substation tender. Proposal preparation costs ₱500,000 regardless of outcome:\n- Strategy 1 (Bid High): 30% chance of winning; gross profit if won is ₱8,000,000\n- Strategy 2 (Bid Moderate): 70% chance of winning; gross profit if won is ₱4,000,000\n- Strategy 3 (Do Not Bid): Guaranteed profit of ₱0\nCalculate the Expected Monetary Value (EMV) for each bidding strategy and identify the optimal choice.",
    given=[
        ("Bid Preparation Cost", "Sunk tender expense", "₱500,000"),
        ("Strategy 1 (High)", "P(Win) = 30%, Gross Profit = ₱8.0M", "Net if won = ₱7.5M"),
        ("Strategy 2 (Moderate)", "P(Win) = 70%, Gross Profit = ₱4.0M", "Net if won = ₱3.5M")
    ],
    formula="EMV = P(Win) * Net_Win + P(Lose) * Net_Lose",
    steps=[
        ("EMV Strategy 1 (High)", "EMV_1 = (0.30 * ₱7,500,000) + (0.70 * -₱500,000) = ₱2,250,000 - ₱350,000", f"₱{emv_high160:,.2f}"),
        ("EMV Strategy 2 (Moderate)", "EMV_2 = (0.70 * ₱3,500,000) + (0.30 * -₱500,000) = ₱2,450,000 - ₱150,000", f"₱{emv_mod160:,.2f}"),
        ("Decision Rule", f"Strategy 2 yields higher expected return by ₱{emv_mod160 - emv_high160:,.2f}. Choose Strategy 2.", "Select Strategy 2")
    ],
    final_ans=f"EMV_High = {format_peso(emv_high160)}, EMV_Mod = {format_peso(emv_mod160)}; Choose Strategy 2",
    choices=[
        f"A. EMV_High = {format_peso(emv_high160)}, EMV_Mod = {format_peso(emv_mod160)}; Choose Strategy 2",
        f"B. EMV_High = ₱2,400,000.00, EMV_Mod = ₱2,800,000.00; Choose Strategy 2",
        f"C. EMV_High = ₱1,900,000.00, EMV_Mod = ₱1,800,000.00; Choose Strategy 1",
        f"D. EMV_High = ₱2,250,000.00, EMV_Mod = ₱2,450,000.00; Choose Strategy 2"
    ],
    correct_letter="A",
    shortcut="EMV1 = 0.3*8M - 0.5M = 2.4M - 0.5M = 1.9M. EMV2 = 0.7*4M - 0.5M = 2.8M - 0.5M = 2.3M. Choose Moderate.",
    keystrokes=["0.30 * 8000000 - 500000 =", "0.70 * 4000000 - 500000 ="],
    cal_disp="2300000",
    cal_tip="Factoring proposal preparation costs directly from the expected gross payout (E[Gross] - Cost) gives the identical result in one keystroke!",
    trap="Forgetting to subtract the ₱500,000 tender preparation cost from both outcomes.",
    week_day=7,
    diff="Board Exam Standard"
)
problems_156_175.append(p160_obj)

# ==========================================
# Problem 161: Expected Value of Perfect Information (EVPI)
# ==========================================
# In problem 160:
# If perfect information is available:
# When high state occurs (30%): we bid high and win ₱7.5M.
# When moderate state occurs (40% where high loses but mod wins): we bid moderate and win ₱3.5M.
# When lose state occurs (30%): we do not bid (cost = 0).
# Expected Value with Perfect Information (EVwPI) = 0.30 * 7.5M + 0.40 * 3.5M + 0.30 * 0 = 2.25M + 1.40M = ₱3,650,000.
# EVPI = EVwPI - Max(EMV without info) = 3,650,000 - 2,300,000 = ₱1,350,000.
evpi161 = 3650000 - 2300000
p161_obj = make_problem(
    num=161,
    category="Capital Budgeting & Evaluation",
    topic="Information Economics: Expected Value of Perfect Information (EVPI)",
    question="Using the tender bidding scenario from Problem 160 (where Maximum EMV under uncertainty is ₱2,300,000), suppose a market intelligence consultant can determine competitor bid prices in advance with 100% accuracy. The expected profit with perfect knowledge is ₱3,650,000. What is the maximum fee the contractor should be willing to pay for this intelligence (Expected Value of Perfect Information, EVPI)?",
    given=[
        ("Expected Value with Perfect Info (EVwPI)", "Value with 100% Foresight", "₱3,650,000"),
        ("Max EMV without Info", "Best Decision under Uncertainty", "₱2,300,000")
    ],
    formula="EVPI = EVwPI - Max(EMV without information)",
    steps=[
        ("Compute EVPI", "EVPI = ₱3,650,000 - ₱2,300,000", f"₱{evpi161:,.2f}"),
        ("Economic Interpretation", "The contractor should pay at most ₱1,350,000; paying more would erode expected returns below the uninformed baseline.", "Maximum fee threshold")
    ],
    final_ans=format_peso(evpi161),
    choices=[
        f"A. {format_peso(evpi161)}",
        f"B. ₱1,500,000.00",
        f"C. ₱1,200,000.00",
        f"D. ₱1,850,000.00"
    ],
    correct_letter="A",
    shortcut="EVPI = 3,650,000 - 2,300,000 = ₱1,350,000.",
    keystrokes=["3650000 - 2300000 ="],
    cal_disp="1350000",
    cal_tip="EVPI establishes an upper bound on what any engineering study, soil test, or market survey is worth.",
    trap="Thinking EVPI is the full ₱3,650,000 (forgetting to subtract the baseline EMV).",
    week_day=7,
    diff="Moderate"
)
problems_156_175.append(p161_obj)

# ==========================================
# Problem 162: Sensitivity Analysis Switching Value
# ==========================================
# Solar project: CapEx = 20M. Annual production = 2.5M kWh.
# Project life = 20 yrs, i = 8%. (P/A, 8%, 20) = 9.818147.
# Required Tariff P such that NPV = 0:
# 20M = 2.5M * P * (P/A, 8%, 20) => P = 20M / (2.5M * 9.818147) = 8.00 / 9.818147 = ₱0.8148 / kWh levelized capital.
# If annual O&M = ₱500,000:
# Total PW cost = 20M + 500k * 9.818147 = 20M + 4.909M = ₱24,909,074.
# Breakeven Tariff = 24,909,074 / (2.5M * 9.818147) = ₱1.015 / kWh.
pw_cost162 = 20000000 + 500000 * ((1 - 1.08**(-20))/0.08) # 24,909,073.71
pw_kwh162 = 2500000 * ((1 - 1.08**(-20))/0.08) # 24,545,368.62
lcoe162 = pw_cost162 / pw_kwh162 # 1.0148
p162_obj = make_problem(
    num=162,
    category="Capital Budgeting & Evaluation",
    topic="Sensitivity Analysis: Levelized Cost of Electricity (LCOE) Tariff Threshold",
    question=f"A commercial rooftop solar installation costs ₱20,000,000 and requires ₱500,000 in annual maintenance over a 20-year horizon at an 8% discount rate. The system produces 2,500,000 kWh annually. What is the minimum electricity sale price (Levelized Cost of Electricity, LCOE) per kWh required to achieve economic break-even (NPV = 0)?",
    given=[
        ("CapEx", "Turnkey Solar Investment", "₱20,000,000"),
        ("Annual O&M", "Operations & Inverter Maintenance", "₱500,000/year"),
        ("Annual Generation", "Power Output", "2,500,000 kWh/year"),
        ("Life & Discount Rate", "20 years, 8%", "(P/A, 8%, 20) = 9.818147")
    ],
    formula="LCOE = Total Present Worth of Life-Cycle Costs / Total Discounted Generation = [ CapEx + O&M*(P/A, i, n) ] / [ kWh * (P/A, i, n) ]",
    steps=[
        ("Present Worth of Total Life-Cycle Costs", f"PW_Cost = ₱20,000,000 + ₱500,000 * 9.818147", f"₱{pw_cost162:,.2f}"),
        ("Present Worth of Energy Output", f"PW_kWh = 2,500,000 kWh * 9.818147", f"{pw_kwh162:,.0f} kWh"),
        ("Compute LCOE", f"LCOE = {pw_cost162:,.2f} / {pw_kwh162:,.0f}", f"₱{lcoe162:.3f} per kWh")
    ],
    final_ans=f"LCOE = ₱{lcoe162:.3f} / kWh (₱{lcoe162:.2f}/kWh)",
    choices=[
        f"A. LCOE = ₱{lcoe162:.3f} / kWh",
        f"B. LCOE = ₱1.250 / kWh",
        f"C. LCOE = ₱0.815 / kWh",
        f"D. LCOE = ₱1.450 / kWh"
    ],
    correct_letter="A",
    shortcut="LCOE = [20M/(P/A, 8%, 20) + 500k] / 2.5M = [20M/9.818 + 500k]/2.5M = [2.037M + 0.5M]/2.5M = 2.537M / 2.5M = ₱1.015/kWh.",
    keystrokes=["( 20000000 * ( 0.08 / ( 1 - 1.08 ^ -20 ) ) + 500000 ) / 2500000 ="],
    cal_disp="1.014818",
    cal_tip="LCOE equals equivalent annual cost divided by annual kWh output! Fast shortcut: (CR + O&M) / kWh.",
    trap="Forgetting annual O&M (giving ₱0.815/kWh).",
    week_day=7,
    diff="Board Exam Standard"
)
problems_156_175.append(p162_obj)

# ==========================================
# Problem 163: Battery Energy Storage System (BESS) Arbitrage
# ==========================================
# 1 MWh (1,000 kWh) BESS. Round-trip efficiency eta = 85%.
# Daily cycle: Charge 1,000 kWh during off-peak @ ₱3.50/kWh -> Charge cost = ₱3,500.
# Discharge 850 kWh during peak @ ₱12.00/kWh -> Discharge revenue = 850 * 12.00 = ₱10,200.
# Net daily arbitrage margin = 10,200 - 3,500 = ₱6,700 / day.
# Annual margin (365 days) = 6,700 * 365 = ₱2,445,500 / yr.
# Annual battery degradation & maintenance = ₱400,000.
# Net annual cash flow = 2,445,500 - 400,000 = ₱2,045,500.
# Turnkey BESS CapEx = ₱12,000,000. Simple payback = 12M / 2.0455M = 5.87 years.
net_daily163 = 850 * 12.00 - 1000 * 3.50 # 6,700
net_annual163 = net_daily163 * 365 - 400000 # 2,045,500
payback163 = 12000000 / net_annual163 # 5.866
p163_obj = make_problem(
    num=163,
    category="Capital Budgeting & Evaluation",
    topic="Energy Storage Economics: BESS Energy Arbitrage & Peak Shaving Payback",
    question="A 1,000 kWh lithium iron phosphate Battery Energy Storage System (BESS) costs ₱12,000,000 turnkey. The system performs one cycle per day with an 85% round-trip efficiency: charging 1,000 kWh at off-peak rates of ₱3.50/kWh and discharging 850 kWh during peak hours at ₱12.00/kWh. Annual warranty and auxiliary cooling costs are ₱400,000. Compute the net annual arbitrage operating profit and the simple payback period.",
    given=[
        ("Storage Capacity", "Daily Cycle Volume", "1,000 kWh charge / 850 kWh discharge"),
        ("Tariff Differential", "Off-peak: ₱3.50/kWh, Peak: ₱12.00/kWh", "Spread = ₱8.50/kWh gross"),
        ("Capital Investment", "Turnkey BESS", "₱12,000,000"),
        ("Annual Operating Cost", "Warranty & HVAC", "₱400,000/year")
    ],
    formula="Daily Margin = (Peak kWh * Peak Rate) - (Charge kWh * Off-Peak Rate) ; Net Annual = (Daily * 365) - O&M ; Payback = CapEx / Net Annual",
    steps=[
        ("Daily Gross Arbitrage", "Daily = (850 kWh * ₱12.00) - (1,000 kWh * ₱3.50) = ₱10,200 - ₱3,500", "₱6,700.00 per day"),
        ("Annual Arbitrage Revenue", "Revenue = ₱6,700/day * 365 days", "₱2,445,500.00 per year"),
        ("Net Annual Cash Flow", "Net = ₱2,445,500 - ₱400,000", f"₱{net_annual163:,.2f}"),
        ("Simple Payback Period", f"Payback = ₱12,000,000 / ₱{net_annual163:,.2f}", f"{payback163:.2f} years")
    ],
    final_ans=f"Net Annual = {format_peso(net_annual163)}, Payback = {payback163:.2f} years",
    choices=[
        f"A. Net Annual = {format_peso(net_annual163)}, Payback = {payback163:.2f} years",
        f"B. Net Annual = ₱2,445,500.00, Payback = 4.91 years",
        f"C. Net Annual = ₱1,850,000.00, Payback = 6.49 years",
        f"D. Net Annual = ₱2,200,000.00, Payback = 5.45 years"
    ],
    correct_letter="A",
    shortcut="Daily = 850*12 - 1000*3.5 = 6,700. Annual = 6700*365 - 400k = ₱2,045,500. Payback = 12M / 2.0455M = 5.87 years.",
    keystrokes=["( 850 * 12 - 1000 * 3.5 ) * 365 - 400000 =", "12000000 / Ans ="],
    cal_disp="5.866536",
    cal_tip="Round-trip efficiency losses reduce discharge energy: only 850 kWh is sold for every 1,000 kWh purchased.",
    trap="Assuming 1,000 kWh is discharged (ignoring round-trip conversion losses).",
    week_day=7,
    diff="Board Exam Standard"
)
problems_156_175.append(p163_obj)

# ==========================================
# Problem 164: Kelvin's Economic Law for Conductors
# ==========================================
# Kelvin's Law states: The most economical conductor cross-section occurs when the annual cost of energy lost (I^2*R) equals the annual capital cost of the conductor investment.
p164_obj = make_problem(
    num=164,
    category="Capital Budgeting & Evaluation",
    topic="Transmission Line Optimization: Kelvin's Economic Law of Electrical Conductors",
    question="In electrical engineering economics, Kelvin's Law specifies the optimum conductor size for power transmission lines. According to Kelvin's Law, what condition defines the most economical conductor cross-sectional area?",
    given=[
        ("Conductor Capital Cost Component", "Directly proportional to cross-sectional area A (weight of copper/aluminum)", "Linear investment cost"),
        ("Energy Loss Component", "Inversely proportional to area A (Resistance R = rho * L / A)", "I^2 * R loss cost"),
        ("Optimization Principle", "Minimizing total annual cost", "d(Total Cost)/dA = 0")
    ],
    formula="Annual Cost of Energy Lost (I^2 * R) = Annual Capital Recovery Cost of Conductor",
    steps=[
        ("Analyze Component Curves", "Capital recovery of conductor material increases linearly with Area A. The cost of electrical I^2*R heat losses decreases hyperbolically with 1/A.", "Two opposing cost curves"),
        ("Equate Derivatives", "Differentiating Total Annual Cost with respect to A and setting to zero yields the exact crossover point where annual lost energy cost equals annual interest and depreciation on conductor capital.", "Equality criterion"),
        ("Formulate Law", "The most economical conductor size is that for which the annual cost of energy lost equals the annual cost of interest and depreciation on conductor capital outlay.", "Kelvin's Law")
    ],
    final_ans="Annual cost of energy lost equals annual capital charges on conductor investment",
    choices=[
        "A. Annual cost of energy lost equals annual capital charges on conductor investment",
        "B. Conductor voltage drop is strictly less than 2.0%",
        "C. Conductor temperature remains below 75 degrees Celsius",
        "D. Initial cost of copper equals total installation labor cost"
    ],
    correct_letter="A",
    shortcut="Kelvin's Law: Annual loss cost = Annual capital charge of conductor.",
    keystrokes=["Conceptual Rule: Cost(Losses) = Cost(Capital)"],
    cal_disp="KELVIN LAW",
    cal_tip="Kelvin's Law is a staple theoretical question in EE/REE and ESAS board examinations.",
    trap="Confusing economic conductor size (Kelvin's Law) with thermal ampacity rating or voltage drop limits.",
    week_day=7,
    diff="Board Exam Standard"
)
problems_156_175.append(p164_obj)

# ==========================================
# Problem 165: Wind Farm Capacity Factor & Revenue
# ==========================================
# 50 MW wind farm. Capacity factor = 32%.
# Annual generation = 50,000 kW * 8,760 hrs * 0.32 = 140,160,000 kWh/yr.
# Feed-in Tariff FIT = ₱6.50/kWh.
# Gross revenue = 140,160,000 * ₱6.50 = ₱911,040,000 / yr.
# Annual O&M = ₱150,000,000.
# Net annual cash flow = ₱761,040,000.
kwh165 = 50000 * 8760 * 0.32 # 140,160,000
rev165 = kwh165 * 6.50 # 911,040,000
net165 = rev165 - 150000000 # 761,040,000
p165_obj = make_problem(
    num=165,
    category="Capital Budgeting & Evaluation",
    topic="Renewable Energy Metrics: Wind Farm Capacity Factor & Annual Revenue",
    question=f"A 50 MW commercial wind farm operates with an average Capacity Factor of 32.0%. Generated power is sold under an approved Feed-in Tariff (FIT) of ₱6.50/kWh. Annual operations, maintenance, and land lease expenses total {format_peso_int(150000000)}. Calculate the annual energy production in kWh, gross revenue, and net annual operating cash flow.",
    given=[
        ("Installed Capacity", "Rated Nameplate Output", "50 MW = 50,000 kW"),
        ("Hours per Year", "Calendar Basis", "8,760 hours"),
        ("Capacity Factor CF", "Actual vs Maximum Output", "32.0%"),
        ("Feed-in Tariff", "Power Purchase Price", "₱6.50 / kWh"),
        ("Annual OpEx", "O&M and Leases", format_peso_int(150000000))
    ],
    formula="Annual kWh = Capacity (kW) * 8,760 * CF ; Gross Revenue = kWh * Tariff ; Net Cash Flow = Gross Revenue - OpEx",
    steps=[
        ("Compute Annual Energy Generation", f"kWh = 50,000 kW * 8,760 hrs * 0.32", f"{kwh165:,.0f} kWh per year"),
        ("Gross Feed-in Tariff Revenue", f"Revenue = {kwh165:,.0f} kWh * ₱6.50", f"₱{rev165:,.2f}"),
        ("Net Operating Cash Flow", f"Net = ₱{rev165:,.2f} - ₱150,000,000", f"₱{net165:,.2f}")
    ],
    final_ans=f"Annual Generation = 140,160,000 kWh, Net Cash Flow = {format_peso(net165)}",
    choices=[
        f"A. Annual Generation = 140,160,000 kWh, Net Cash Flow = {format_peso(net165)}",
        f"B. Annual Generation = 140,160,000 kWh, Net Cash Flow = ₱911,040,000.00",
        f"C. Annual Generation = 438,000,000 kWh, Net Cash Flow = ₱2,697,000,000.00",
        f"D. Annual Generation = 125,000,000 kWh, Net Cash Flow = ₱662,500,000.00"
    ],
    correct_letter="A",
    shortcut="kWh = 50k*8760*0.32 = 140.16M. Gross = 140.16M*6.5 = 911.04M. Net = 911.04M - 150M = ₱761,040,000.",
    keystrokes=["50000 * 8760 * 0.32 =", "Ans * 6.50 - 150000000 ="],
    cal_disp="761040000",
    cal_tip="Capacity factor reflects real-world wind intermittency; a 50 MW plant produces on average 50 * 0.32 = 16 MW continuous equivalent.",
    trap="Using 100% capacity factor (8,760 * 50 MW = 438 million kWh).",
    week_day=7,
    diff="Moderate"
)
problems_156_175.append(p165_obj)

# ==========================================
# Problem 166: BOT Concession Financial Viability
# ==========================================
# Toll expressway BOT (Build-Operate-Transfer):
# CapEx = 5,000,000,000. Concession period = 25 years.
# Traffic = 40,000 vehicles/day. Toll = ₱80 / vehicle.
# Annual toll revenue = 40,000 * 80 * 365 = ₱1,168,000,000 / yr.
# Annual maintenance = ₱200,000,000. Net annual cash flow = ₱968,000,000 / yr.
# At 12% equity hurdle rate: (P/A, 12%, 25) = 7.843139.
# NPV = -5,000,000,000 + 968,000,000 * 7.843139 = -5B + 7,592,158,552 = ₱2,592,158,552.
net_bot166 = 40000 * 80 * 365 - 200000000 # 968,000,000
npv_bot166 = -5000000000 + net_bot166 * ((1 - 1.12**(-25))/0.12) # 2,592,158,168.65
p166_obj = make_problem(
    num=166,
    category="Capital Budgeting & Evaluation",
    topic="Infrastructure Finance: Build-Operate-Transfer (BOT) Concession NPV",
    question=f"A toll expressway consortium undertakes a 25-year Build-Operate-Transfer (BOT) highway concession requiring an initial capital outlay of ₱5,000,000,000. Traffic volume is 40,000 vehicles/day paying an average toll of ₱80.00. Annual toll collection and road maintenance costs are ₱200,000,000. If the consortium requires a 12% rate of return and transfers the facility to the government at Year 25 with zero terminal compensation, compute the project Net Present Value.",
    given=[
        ("Initial Construction Outlay", "Turnkey BOT CapEx", "₱5,000,000,000"),
        ("Concession Period", "Operating Horizon", "25 years"),
        ("Average Daily Traffic (ADT)", "Traffic Volume", "40,000 vehicles/day"),
        ("Toll Rate", "Average Tariff", "₱80.00 / vehicle"),
        ("Annual Operations Cost", "Maintenance & Collection", "₱200,000,000"),
        ("Hurdle Rate", "Required Return", "12%")
    ],
    formula="Annual Toll = ADT * Toll * 365 ; Net Cash Flow = Toll - OpEx ; NPV = -CapEx + Net * (P/A, i, n)",
    steps=[
        ("Gross Annual Toll Collections", "Gross = 40,000 * ₱80.00 * 365 days", "₱1,168,000,000.00 per year"),
        ("Net Annual Cash Flow", "Net = ₱1,168,000,000 - ₱200,000,000", "₱968,000,000.00 per year"),
        ("Compute 25-Year Concession NPV", f"NPV = -₱5,000,000,000 + ₱968,000,000 * (P/A, 12%, 25)", f"₱{npv_bot166:,.2f}")
    ],
    final_ans=format_peso(npv_bot166),
    choices=[
        f"A. {format_peso(npv_bot166)}",
        f"B. ₱1,850,000,000.00",
        f"C. ₱3,240,500,000.00",
        f"D. -₱450,000,000.00"
    ],
    correct_letter="A",
    shortcut="Net = 40k*80*365 - 200M = 968M. NPV = -5B + 968M*(1 - 1.12^-25)/0.12 = ₱2,592,158,168.65.",
    keystrokes=["- 5000000000 + ( 40000 * 80 * 365 - 200000000 ) * ( 1 - 1.12 ^ -25 ) / 0.12 ="],
    cal_disp="2592158169",
    cal_tip="Under BOT contracts, private developers recover their capital and targeted profit over the concession duration before transferring ownership to the state.",
    trap="Forgetting that the highway is handed over for zero value at Year 25 (no salvage value).",
    week_day=7,
    diff="Board Exam Standard"
)
problems_156_175.append(p166_obj)

# ==========================================
# Problem 167: Geothermal Wellhead Drilling Economics
# ==========================================
# Deep geothermal well: Drilling cost = 250,000,000.
# Probability of commercial steam success = 70%.
# If successful, well delivers 5 MW steam equivalent, generating ₱90,000,000 net profit per year for 15 years.
# If dry hole (30%), zero revenue, salvage value = ₱10,000,000 (casing salvage).
# i = 10%. (P/A, 10%, 15) = 7.606080.
# PW of success = -250M + 90M * 7.606080 = -250M + 684,547,200 = ₱434,547,200.
# PW of dry hole = -250M + 10M = -₱240,000,000.
# Expected NPV = 0.70 * 434,547,200 + 0.30 * (-240,000,000) = 304,183,040 - 72,000,000 = ₱232,183,040.
pw_succ167 = -250000000 + 90000000 * ((1 - 1.10**(-15))/0.10) # 434,547,159.95
pw_dry167 = -250000000 + 10000000 # -240,000,000
exp_npv167 = 0.70 * pw_succ167 + 0.30 * pw_dry167 # 232,183,011.97
p167_obj = make_problem(
    num=167,
    category="Capital Budgeting & Evaluation",
    topic="Geothermal Reservoir Exploration: Risk-Weighted Expected NPV",
    question=f"A geothermal exploration well costs ₱250,000,000 to drill. Subsurface geophysical models estimate a 70% probability of discovering a commercial steam reservoir and a 30% risk of a dry hole:\n- If commercial: Generates net cash flow of ₱90,000,000/year for 15 years\n- If dry: Produces zero revenue, with ₱10,000,000 casing salvage value\nAt a 10% hurdle rate, compute the project's Expected Net Present Value (ENPV).",
    given=[
        ("Drilling Expenditure", "Exploration Well Outlay", "₱250,000,000"),
        ("Commercial Probability", "P(Commercial)", "70%"),
        ("Dry Hole Probability", "P(Dry)", "30%"),
        ("Commercial Cash Flow", "₱90M/yr for 15 years", "10% MARR"),
        ("Dry Hole Salvage", "Terminal recovery", "₱10,000,000")
    ],
    formula="ENPV = P(Success) * NPV_Success + P(Dry) * NPV_Dry",
    steps=[
        ("NPV if Commercial Success", f"NPV_Success = -₱250M + ₱90M * (P/A, 10%, 15) = -₱250M + ₱684,547,160", f"₱{pw_succ167:,.2f}"),
        ("NPV if Dry Hole", f"NPV_Dry = -₱250M + ₱10M", f"₱{pw_dry167:,.2f}"),
        ("Expected NPV", f"ENPV = (0.70 * ₱{pw_succ167:,.2f}) + (0.30 * -₱240M)", f"₱{exp_npv167:,.2f}")
    ],
    final_ans=format_peso(exp_npv167),
    choices=[
        f"A. {format_peso(exp_npv167)}",
        f"B. ₱304,180,000.00",
        f"C. ₱185,500,000.00",
        f"D. ₱260,000,000.00"
    ],
    correct_letter="A",
    shortcut="NPV_succ = -250M + 90M*(1-1.1^-15)/0.1 = 434.55M. NPV_dry = -240M. ENPV = 0.7*434.55M - 0.3*240M = ₱232,183,011.97.",
    keystrokes=["0.70 * ( - 250000000 + 90000000 * ( 1 - 1.10 ^ -15 ) / 0.10 ) + 0.30 * ( - 240000000 ) ="],
    cal_disp="232183012",
    cal_tip="Geothermal exploration appraisal explicitly discounts resource probability trees before committing multi-million drilling capital.",
    trap="Ignoring the 30% probability of dry hole loss.",
    week_day=7,
    diff="Advanced"
)
problems_156_175.append(p167_obj)

# ==========================================
# Problem 168: Solar PV with Battery Inverter Mid-Life Replacement
# ==========================================
# 500 kWp C&I Solar PV with 200 kWh battery storage.
# Initial Cost = 25,000,000. Life = 20 yrs. i = 9%.
# Inverter & Battery replacement required at end of Year 10 = 6,000,000.
# Annual electricity savings = 3,800,000. Annual maintenance = 400,000.
# Net annual savings = 3,400,000.
# Salvage value at Year 20 = 2,000,000.
# NPV = -25M - 6M*(1.09^-10) + 3.4M*(P/A, 9%, 20) + 2M*(1.09^-20)
# (P/A, 9%, 20) = (1 - 1.09^-20)/0.09 = 9.128546
# 1.09^-10 = 0.422411 => 6M * 0.422411 = 2,534,465
# 1.09^-20 = 0.178431 => 2M * 0.178431 = 356,863
# 3.4M * 9.128546 = 31,037,055
# NPV = -25,000,000 - 2,534,465 + 31,037,055 + 356,863 = ₱3,859,453
npv168 = -25000000 - 6000000 * (1.09**(-10)) + 3400000 * ((1 - 1.09**(-20))/0.09) + 2000000 * (1.09**(-20)) # 3,859,453.30
p168_obj = make_problem(
    num=168,
    category="Capital Budgeting & Evaluation",
    topic="Hybrid Renewable Energy: Solar-Plus-Storage with Mid-Life Inverter Replacement",
    question=f"A commercial factory installs a 500 kWp rooftop solar PV plant with battery storage for {format_peso_int(25000000)}. Over a 20-year project life (MARR = 9%):\n- Net annual utility bill savings: ₱3,400,000/year\n- Inverter and battery replacement required at Year 10: ₱6,000,000\n- Terminal salvage value at Year 20: ₱2,000,000\nCalculate the Net Present Value (NPV) of the solar-plus-storage system.",
    given=[
        ("Initial Investment", "Turnkey PV-BESS Outlay", format_peso_int(25000000)),
        ("Annual Net Savings", "Utility Bill Reductions", "₱3,400,000/year"),
        ("Year 10 Replacement", "Battery & Inverter Overhaul", "₱6,000,000"),
        ("Year 20 Salvage", "Terminal Plant Scrap Value", "₱2,000,000"),
        ("Discount Rate i", "Cost of Capital", "9% over 20 years")
    ],
    formula="NPV = -I - Replacement*(P/F, i, 10) + Savings*(P/A, i, 20) + Salvage*(P/F, i, 20)",
    steps=[
        ("Present Value of Year 10 Replacement", "PW_Repl = ₱6,000,000 * (1.09^-10) = ₱6,000,000 * 0.422411", "₱2,534,464.96"),
        ("Present Value of 20-Year Savings", "PW_Savings = ₱3,400,000 * [(1 - 1.09^-20) / 0.09] = ₱3,400,000 * 9.128546", "₱31,037,056.40"),
        ("Present Value of Terminal Salvage", "PW_Salvage = ₱2,000,000 * (1.09^-20) = ₱2,000,000 * 0.178431", "₱356,861.86"),
        ("Total Net Present Value", f"NPV = -₱25M - ₱2,534,464.96 + ₱31,037,056.40 + ₱356,861.86", f"₱{npv168:,.2f}")
    ],
    final_ans=format_peso(npv168),
    choices=[
        f"A. {format_peso(npv168)}",
        f"B. ₱4,500,000.00",
        f"C. ₱2,980,200.00",
        f"D. ₱5,120,400.00"
    ],
    correct_letter="A",
    shortcut="NPV = -25M - 6M*1.09^-10 + 3.4M*(1-1.09^-20)/0.09 + 2M*1.09^-20 = ₱3,859,453.30.",
    keystrokes=["- 25000000 - 6000000 * 1.09 ^ -10 + 3400000 * ( 1 - 1.09 ^ -20 ) / 0.09 + 2000000 * 1.09 ^ -20 ="],
    cal_disp="3859453.3",
    cal_tip="Mid-life component replacements are treated as intermediate capital outflows discounted by (P/F, i, k).",
    trap="Forgetting to discount the Year 10 battery replacement.",
    week_day=7,
    diff="Board Exam Standard"
)
problems_156_175.append(p168_obj)

# ==========================================
# Problem 169: Carbon Offset Credits Cash Flow
# ==========================================
# Biogas digester: Produces 10,000 carbon credits (tCO2e) annually.
# Carbon credit price = ₱1,200 / credit. Annual carbon revenue = 10,000 * 1,200 = ₱12,000,000.
# Electrical power generation savings = ₱8,000,000.
# Total revenue = 12M + 8M = ₱20,000,000 / yr.
# Annual O&M = ₱5,000,000. Net annual cash flow = ₱15,000,000.
# CapEx = ₱65,000,000. Life = 10 yrs, i = 12%.
# (P/A, 12%, 10) = 5.650223.
# NPV = -65,000,000 + 15,000,000 * 5.650223 = -65M + 84,753,346 = ₱19,753,346.
npv169 = -65000000 + 15000000 * ((1 - 1.12**(-10))/0.12) # 19,753,346.12
p169_obj = make_problem(
    num=169,
    category="Capital Budgeting & Evaluation",
    topic="Environmental Engineering Economics: Carbon Offset Revenue & Waste-to-Energy NPV",
    question=f"An industrial agro-waste biogas digester requires {format_peso_int(65000000)} in initial capital. The plant generates ₱8,000,000 in grid electricity offsets and earns 10,000 certified carbon credits (tCO2e) annually, sold on international voluntary markets at ₱1,200 per credit. Annual operating expenses are ₱5,000,000. With a 10-year life and a 12% MARR, determine the project Net Present Value.",
    given=[
        ("Initial Investment", "Biogas Plant Turnkey CapEx", format_peso_int(65000000)),
        ("Power Offsets", "Displaced Electricity", "₱8,000,000/year"),
        ("Carbon Credits", "10,000 credits * ₱1,200/credit", "₱12,000,000/year"),
        ("Operating Expenses", "Annual Maintenance", "₱5,000,000/year"),
        ("Life & MARR", "Horizon & Discount Rate", "10 years, 12%")
    ],
    formula="Gross Annual = Power Savings + Carbon Credits ; Net Cash Flow = Gross - O&M ; NPV = -CapEx + Net * (P/A, i, n)",
    steps=[
        ("Total Annual Gross Revenues", "Gross = ₱8,000,000 (power) + ₱12,000,000 (carbon)", "₱20,000,000.00 per year"),
        ("Net Annual Cash Inflow", "Net = ₱20,000,000 - ₱5,000,000", "₱15,000,000.00 per year"),
        ("Compute 10-Year NPV", f"NPV = -₱65,000,000 + ₱15,000,000 * (P/A, 12%, 10)", f"₱{npv169:,.2f}")
    ],
    final_ans=format_peso(npv169),
    choices=[
        f"A. {format_peso(npv169)}",
        f"B. ₱15,240,000.00",
        f"C. ₱24,180,000.00",
        f"D. ₱11,850,000.00"
    ],
    correct_letter="A",
    shortcut="Net = 8M + 12M - 5M = 15M. NPV = -65M + 15M*(1 - 1.12^-10)/0.12 = ₱19,753,346.12.",
    keystrokes=["- 65000000 + 15000000 * ( 1 - 1.12 ^ -10 ) / 0.12 ="],
    cal_disp="19753346.12",
    cal_tip="Carbon credits constitute an additional revenue stream that frequently transforms marginal environmental projects into highly lucrative investments.",
    trap="Omitting carbon credit proceeds from project revenues.",
    week_day=7,
    diff="Board Exam Standard"
)
problems_156_175.append(p169_obj)

# ==========================================
# Problem 170: Combined Cycle Gas Turbine vs Coal Life Cycle
# ==========================================
# CCGT Plant: CapEx = 40,000,000 / MW. Heat rate = 7,000 BTU/kWh. Fuel cost = ₱600 / MMBTU -> Fuel = 7,000 * 600 / 1,000,000 = ₱4.20 / kWh.
# Fixed O&M = ₱800,000 / MW-yr. Variable O&M = ₱0.20 / kWh.
# Capacity factor = 75% -> 8,760 * 0.75 = 6,570 operating hours/yr.
# Generation = 6,570,000 kWh / MW-yr.
# Annual CapEx recovery at 10% over 25 yrs = 40M * (A/P, 10%, 25) = 40M * 0.110168 = ₱4,406,723 / MW-yr.
# Fuel cost per MW-yr = 6,570,000 * 4.20 = ₱27,594,000 / MW-yr.
# Variable O&M per MW-yr = 6,570,000 * 0.20 = ₱1,314,000 / MW-yr.
# Fixed O&M = ₱800,000 / MW-yr.
# Total Annual Cost per MW = 4,406,723 + 27,594,000 + 1,314,000 + 800,000 = ₱34,114,723 / MW-yr.
# LCOE = 34,114,723 / 6,570,000 kWh = ₱5.19 / kWh.
cr170 = 40000000 * (0.10 / (1 - 1.10**(-25))) # 4,406,723.19
fuel170 = 6570000 * 4.20 # 27,594,000
vom170 = 6570000 * 0.20 # 1,314,000
fom170 = 800000
tot_cost170 = cr170 + fuel170 + vom170 + fom170 # 34,114,723.19
lcoe170 = tot_cost170 / 6570000 # 5.1925
p170_obj = make_problem(
    num=170,
    category="Capital Budgeting & Evaluation",
    topic="Power Generation Economics: Combined Cycle Gas Turbine (CCGT) LCOE",
    question="A 1 MW block of a Combined Cycle Gas Turbine (CCGT) power plant has a capital cost of ₱40,000,000 with a 25-year service life (i = 10%):\n- Capacity Factor: 75% (6,570 operating hours/year)\n- Fuel Cost: ₱4.20 per kWh generated\n- Variable O&M: ₱0.20 per kWh generated\n- Fixed O&M: ₱800,000 per MW-year\nDetermine the Total Annual Cost per MW and the Levelized Cost of Electricity (LCOE) in ₱/kWh.",
    given=[
        ("Capital Cost", "40M / MW, 25 yrs, 10%", "(A/P, 10%, 25) = 0.110168"),
        ("Annual Generation", "1,000 kW * 8,760 * 0.75", "6,570,000 kWh / MW-year"),
        ("Fuel Cost", "Gas heat rate * fuel tariff", "₱4.20 / kWh"),
        ("Variable & Fixed O&M", "₱0.20/kWh variable, ₱800k/MW-yr fixed", "Operational components")
    ],
    formula="Annual Cost = CapEx*(A/P, i, n) + Fixed O&M + (Fuel + Variable O&M)*kWh ; LCOE = Annual Cost / Annual kWh",
    steps=[
        ("Annual Capital Recovery", "CR = ₱40,000,000 * (A/P, 10%, 25)", f"₱{cr170:,.2f} / MW-yr"),
        ("Annual Fuel Expense", "Fuel = 6,570,000 kWh * ₱4.20", "₱27,594,000.00 / MW-yr"),
        ("Variable & Fixed O&M", "O&M = (6,570,000 * ₱0.20) + ₱800,000 = ₱1,314,000 + ₱800,000", "₱2,114,000.00 / MW-yr"),
        ("Total Annual Cost", f"Total = ₱{cr170:,.2f} + ₱27,594,000 + ₱2,114,000", f"₱{tot_cost170:,.2f} / MW-yr"),
        ("Compute LCOE", f"LCOE = {tot_cost170:,.2f} / 6,570,000 kWh", f"₱{lcoe170:.2f} per kWh")
    ],
    final_ans=f"Annual Cost = {format_peso(tot_cost170)}/MW, LCOE = ₱{lcoe170:.2f}/kWh",
    choices=[
        f"A. Annual Cost = {format_peso(tot_cost170)}/MW, LCOE = ₱{lcoe170:.2f}/kWh",
        f"B. Annual Cost = ₱31,500,000.00/MW, LCOE = ₱4.79/kWh",
        f"C. Annual Cost = ₱36,250,000.00/MW, LCOE = ₱5.52/kWh",
        f"D. Annual Cost = ₱29,800,000.00/MW, LCOE = ₱4.53/kWh"
    ],
    correct_letter="A",
    shortcut="CR = 40M*(0.1/(1-1.1^-25)) = 4.407M. Total = 4.407M + 0.8M + 6.57M*(4.20 + 0.20) = 5.207M + 28.908M = ₱34.115M. LCOE = 34.115M / 6.57M = ₱5.19/kWh.",
    keystrokes=["40000000 * ( 0.10 / ( 1 - 1.10 ^ -25 ) ) + 800000 + 6570000 * ( 4.20 + 0.20 ) =", "Ans / 6570000 ="],
    cal_disp="5.1925",
    cal_tip="In thermal generation, fuel represents roughly 70-80% of total lifetime cost, dwarfing the initial capital expenditure.",
    trap="Omitting fixed O&M or using 8,760 hours without multiplying by the 75% capacity factor.",
    week_day=7,
    diff="Board Exam Standard"
)
problems_156_175.append(p170_obj)

# ==========================================
# Problem 171: Hydroelectric Run-of-River Project
# ==========================================
# 10 MW Hydro: CapEx = 800,000,000. Life = 40 yrs. i = 8%.
# Capacity factor = 60% -> 10,000 kW * 8,760 * 0.60 = 52,560,000 kWh/yr.
# Feed-in Tariff = ₱5.90 / kWh. Gross revenue = 52,560,000 * 5.90 = ₱310,104,000 / yr.
# Annual O&M = ₱40,000,000. Net annual cash flow = ₱270,104,000.
# (P/A, 8%, 40) = (1 - 1.08^-40)/0.08 = 11.924613.
# NPV = -800,000,000 + 270,104,000 * 11.924613 = -800M + 3,220,885,739 = ₱2,420,885,739.
# Internal Rate of Return (IRR): 800M = 270.104M * (P/A, IRR, 40) => (P/A, IRR, 40) = 800 / 270.104 = 2.9618
# For n = 40, (P/A, IRR, 40) = 2.9618 corresponds to IRR = approx 33.7%!
npv171 = -800000000 + 270104000 * ((1 - 1.08**(-40))/0.08) # 2,420,886,104.53
p171_obj = make_problem(
    num=171,
    category="Capital Budgeting & Evaluation",
    topic="Hydropower Engineering: Run-of-River Hydroelectric Net Present Value",
    question=f"A 10 MW run-of-river mini-hydro project requires {format_peso_int(800000000)} in turnkey engineering and civil construction. The plant operates at an average 60% Capacity Factor and sells power under a 40-year power purchase agreement at ₱5.90/kWh. Annual operating, maintenance, and water rights fees are ₱40,000,000. If the social hurdle rate is 8.0%, compute the project Net Present Value.",
    given=[
        ("Installed Capacity", "Nameplate", "10 MW = 10,000 kW"),
        ("Capacity Factor", "Annual Runoff Factor", "60% (52,560,000 kWh/yr)"),
        ("Turnkey CapEx", "Dam & Penstock Construction", format_peso_int(800000000)),
        ("Tariff & O&M", "₱5.90/kWh revenue, ₱40M/yr expenses", "Operating profile"),
        ("Project Horizon & Discount", "40 years, 8%", "(P/A, 8%, 40) = 11.924613")
    ],
    formula="Annual Generation = 10,000 * 8,760 * 0.60 ; Net Annual = (kWh * Tariff) - O&M ; NPV = -CapEx + Net * (P/A, i, n)",
    steps=[
        ("Annual Power Output", "Generation = 10,000 kW * 8,760 * 0.60", "52,560,000 kWh per year"),
        ("Gross Revenue", "Gross = 52,560,000 kWh * ₱5.90", "₱310,104,000.00 per year"),
        ("Net Annual Cash Flow", "Net = ₱310,104,000 - ₱40,000,000", "₱270,104,000.00 per year"),
        ("Compute 40-Year NPV", f"NPV = -₱800,000,000 + ₱270,104,000 * (P/A, 8%, 40)", f"₱{npv171:,.2f}")
    ],
    final_ans=format_peso(npv171),
    choices=[
        f"A. {format_peso(npv171)}",
        f"B. ₱1,950,000,000.00",
        f"C. ₱2,890,500,000.00",
        f"D. ₱1,620,000,000.00"
    ],
    correct_letter="A",
    shortcut="Net = 10k*8760*0.6*5.9 - 40M = 310.1M - 40M = 270.1M. NPV = -800M + 270.1M*(1 - 1.08^-40)/0.08 = ₱2,420,886,104.53.",
    keystrokes=["- 800000000 + ( 52560000 * 5.90 - 40000000 ) * ( 1 - 1.08 ^ -40 ) / 0.08 ="],
    cal_disp="2420886105",
    cal_tip="Hydroelectric plants feature high initial CapEx but zero fuel costs and extremely long lifespans (40-50+ years), generating tremendous long-term wealth.",
    trap="Using a short 10-year or 20-year horizon for a permanent hydroelectric civil structure.",
    week_day=7,
    diff="Board Exam Standard"
)
problems_156_175.append(p171_obj)

# ==========================================
# Problem 172: High-Voltage Underground Cable vs Overhead Line
# ==========================================
# Transmission Line: 20 km corridor.
# Overhead Line (OHL): CapEx = ₱15,000,000 / km -> Total CapEx = ₱300,000,000. Annual maintenance = ₱500,000 / km = ₱10,000,000. Life = 35 yrs.
# Underground Cable (UGC): CapEx = ₱60,000,000 / km -> Total CapEx = ₱1,200,000,000. Annual maintenance = ₱150,000 / km = ₱3,000,000. Life = 35 yrs.
# Social interest rate i = 8%. (P/A, 8%, 35) = 11.654568.
# PW_OHL = 300M + 10M * 11.654568 = 300M + 116.546M = ₱416,545,680.
# PW_UGC = 1,200M + 3M * 11.654568 = 1,200M + 34.964M = ₱1,234,963,704.
# Premium for undergrounding = 1,234,963,704 - 416,545,680 = ₱818,418,024.
pw_ohl172 = 300000000 + 10000000 * ((1 - 1.08**(-35))/0.08) # 416,545,681.34
pw_ugc172 = 1200000000 + 3000000 * ((1 - 1.08**(-35))/0.08) # 1,234,963,704.40
prem172 = pw_ugc172 - pw_ohl172 # 818,418,023.06
p172_obj = make_problem(
    num=172,
    category="Capital Budgeting & Evaluation",
    topic="Utility Transmission Corridor: Overhead Line vs Underground Cable Life Cycle Cost",
    question=f"A 20 km, 115 kV transmission connection between a substation and an industrial park has two route designs (i = 8%, 35-year life):\n- Option 1 (Overhead Line): First Cost ₱15,000,000/km (₱300M total); Annual Maintenance ₱500,000/km (₱10M total)\n- Option 2 (Underground XLPE Cable): First Cost ₱60,000,000/km (₱1,200M total); Annual Maintenance ₱150,000/km (₱3M total)\nCompute the total Life-Cycle Present Worth of Cost for both alternatives and the capital premium required for undergrounding.",
    given=[
        ("Corridor Length", "Distance", "20 km"),
        ("Option 1 (Overhead)", "CapEx = ₱300M, O&M = ₱10M/yr", "Standard towers"),
        ("Option 2 (Underground)", "CapEx = ₱1,200M, O&M = ₱3M/yr", "Direct buried XLPE"),
        ("Parameters", "35 years, 8% discount rate", "(P/A, 8%, 35) = 11.654568")
    ],
    formula="PW = CapEx + Annual O&M * (P/A, i, n) ; Premium = PW_Underground - PW_Overhead",
    steps=[
        ("Overhead Life-Cycle Cost", f"PW_OHL = ₱300M + ₱10M * (P/A, 8%, 35)", f"₱{pw_ohl172:,.2f}"),
        ("Underground Life-Cycle Cost", f"PW_UGC = ₱1,200M + ₱3M * (P/A, 8%, 35)", f"₱{pw_ugc172:,.2f}"),
        ("Undergrounding Cost Premium", f"Premium = ₱{pw_ugc172:,.2f} - ₱{pw_ohl172:,.2f}", f"₱{prem172:,.2f}")
    ],
    final_ans=f"PW_OHL = {format_peso(pw_ohl172)}, PW_UGC = {format_peso(pw_ugc172)}; Premium = {format_peso(prem172)}",
    choices=[
        f"A. PW_OHL = {format_peso(pw_ohl172)}, PW_UGC = {format_peso(pw_ugc172)}; Premium = {format_peso(prem172)}",
        f"B. PW_OHL = ₱350,000,000.00, PW_UGC = ₱1,250,000,000.00; Premium = ₱900,000,000.00",
        f"C. PW_OHL = ₱416,545,681.34, PW_UGC = ₱1,400,000,000.00; Premium = ₱983,454,318.66",
        f"D. PW_OHL = ₱300,000,000.00, PW_UGC = ₱1,200,000,000.00; Premium = ₱900,000,000.00"
    ],
    correct_letter="A",
    shortcut="PW_OHL = 300M + 10M*11.655 = 416.55M. PW_UGC = 1200M + 3M*11.655 = 1234.96M. Premium = 818.42M.",
    keystrokes=["300000000 + 10000000 * ( 1 - 1.08 ^ -35 ) / 0.08 =", "1200000000 + 3000000 * ( 1 - 1.08 ^ -35 ) / 0.08 =", "Ans - [Pre-Ans] ="],
    cal_disp="818418023.1",
    cal_tip="Undergrounding costs roughly 3 to 4 times more even after crediting lower annual maintenance due to immense civil trenching and conduit civil works.",
    trap="Comparing only first costs without evaluating 35-year discounted maintenance.",
    week_day=7,
    diff="Board Exam Standard"
)
problems_156_175.append(p172_obj)

# ==========================================
# Problem 173: Comprehensive Multi-Part Board Exam Problem (Substation Replacement)
# ==========================================
# Transformer replacement problem:
# Existing unit: Market value = ₱500,000, remaining life = 5 yrs, core & copper losses = ₱250,000/yr.
# Proposed amorphous metal core unit: First cost = ₱1,500,000, life = 20 yrs, core & copper losses = ₱70,000/yr.
# Salvage of new unit after 20 yrs = ₱150,000. MARR = 10%.
# EUAC of Defender: 500k*(A/P, 10%, 5) + 250k = 500k*0.263797 + 250k = 131,899 + 250,000 = ₱381,899 / yr.
# EUAC of Challenger: (1.5M - 150k)*(A/P, 10%, 20) + 150k*0.10 + 70k
# (A/P, 10%, 20) = 0.10 / (1 - 1.1^-20) = 0.117460
# CR_C = 1.35M * 0.117460 + 15,000 = 158,571 + 15,000 = 173,571.
# EUAC_C = 173,571 + 70,000 = ₱243,571 / yr.
# Annual savings by replacing = 381,899 - 243,571 = ₱138,328 / yr!
euac_def173 = 500000 * (0.10 / (1 - 1.10**(-5))) + 250000 # 381,898.74
euac_cha173 = (1500000 - 150000) * (0.10 / (1 - 1.10**(-20))) + 150000 * 0.10 + 70000 # 243,570.47
diff173 = euac_def173 - euac_cha173 # 138,328.27
p173_obj = make_problem(
    num=173,
    category="Advanced Replacement & Inflation",
    topic="Comprehensive Board Exam: Substation Power Transformer Replacement Study",
    question="A distribution utility evaluates replacing an aging standard-efficiency distribution transformer (Defender) with an amorphous metal core transformer (Challenger) at a 10% MARR:\n- Defender: Current salvage/market value ₱500,000; Remaining life 5 years with zero salvage; Annual core and copper electrical losses cost ₱250,000/year\n- Challenger: Initial installed cost ₱1,500,000; Useful life 20 years; Salvage value ₱150,000; Annual electrical losses cost ₱70,000/year\nCalculate the EUAC for both transformers and the net annual economic benefit of immediate replacement.",
    given=[
        ("Defender", "MV = ₱500k, Life = 5 yrs, SV = ₱0, Losses = ₱250k/yr", "High losses"),
        ("Challenger", "CapEx = ₱1.5M, Life = 20 yrs, SV = ₱150k, Losses = ₱70k/yr", "Low losses"),
        ("MARR", "Utility Cost of Capital", "10%")
    ],
    formula="EUAC_D = MV*(A/P, i, n_D) + Losses_D ; EUAC_C = (P - S)(A/P, i, n_C) + S*i + Losses_C",
    steps=[
        ("Defender EUAC", f"EUAC_D = ₱500,000 * (A/P, 10%, 5) + ₱250,000 = ₱131,898.74 + ₱250,000", f"₱{euac_def173:,.2f} / year"),
        ("Challenger EUAC", f"EUAC_C = (₱1,350,000 * (A/P, 10%, 20)) + (₱150,000 * 0.10) + ₱70,000 = ₱158,570.47 + ₱15,000 + ₱70,000", f"₱{euac_cha173:,.2f} / year"),
        ("Net Annual Savings", f"Savings = ₱{euac_def173:,.2f} - ₱{euac_cha173:,.2f}", f"₱{diff173:,.2f} / year")
    ],
    final_ans=f"EUAC_D = {format_peso(euac_def173)}, EUAC_C = {format_peso(euac_cha173)}; Savings = {format_peso(diff173)}/yr",
    choices=[
        f"A. EUAC_D = {format_peso(euac_def173)}, EUAC_C = {format_peso(euac_cha173)}; Savings = {format_peso(diff173)}/yr",
        f"B. EUAC_D = ₱350,000.00, EUAC_C = ₱280,000.00; Savings = ₱70,000.00/yr",
        f"C. EUAC_D = ₱381,898.74, EUAC_C = ₱315,400.00; Savings = ₱66,498.74/yr",
        f"D. EUAC_D = ₱410,000.00, EUAC_C = ₱243,570.47; Savings = ₱166,429.53/yr"
    ],
    correct_letter="A",
    shortcut="EUAC_D = 500k*(0.1/(1-1.1^-5)) + 250k = 381.90k. EUAC_C = 1.35M*(0.1/(1-1.1^-20)) + 15k + 70k = 243.57k. Savings = ₱138,328.27/yr.",
    keystrokes=["500000 * ( 0.10 / ( 1 - 1.10 ^ -5 ) ) + 250000 =", "1350000 * ( 0.10 / ( 1 - 1.10 ^ -20 ) ) + 15000 + 70000 =", "[Pre-Ans] - Ans ="],
    cal_disp="138328.27",
    cal_tip="The ₱180,000 annual reduction in electrical losses easily overcomes the amortized capital premium of the new amorphous transformer.",
    trap="Overlooking the interest on salvage value (S * i = ₱15,000) for the Challenger.",
    week_day=7,
    diff="Advanced"
)
problems_156_175.append(p173_obj)

# ==========================================
# Problem 174: Continuous Compounding Equivalence to Nominal Compounding
# ==========================================
# Find the nominal annual rate r compounded continuously that is equivalent to a nominal rate of 12% compounded quarterly.
# Effective rate quarterly = (1 + 0.12/4)^4 - 1 = (1.03)^4 - 1 = 1.1255088 - 1 = 12.5509%.
# e^r_cont - 1 = 0.1255088 => e^r_cont = 1.1255088 => r_cont = ln(1.1255088) = 0.118235 = 11.82%.
# Or directly: e^r = (1 + 0.12/4)^4 => r = 4 * ln(1.03) = 4 * 0.0295588 = 0.118235 = 11.82%.
r_cont174 = 4 * math.log(1.03) * 100 # 11.8235%
p174_obj = make_problem(
    num=174,
    category="Simple & Compound Interest",
    topic="Interest Equivalence: Nominal Quarterly Rate to Continuous Compounding",
    question="What nominal annual interest rate r compounded continuously is mathematically equivalent to 12.00% nominal annual interest compounded quarterly?",
    given=[
        ("Nominal Rate r_q", "Quarterly Compounding", "12.00% per year"),
        ("Compounding Frequency m", "Quarters per year", "m = 4"),
        ("Target Condition", "Continuous Compounding", "e^r = (1 + r_q / m)^m")
    ],
    formula="e^r = (1 + r_nom / m)^m  =>  r = m * ln(1 + r_nom / m)",
    steps=[
        ("Quarterly Period Rate", "i_period = 12.00% / 4", "3.00% per quarter"),
        ("Annual Effective Growth Factor", "(1 + 0.03)^4 = 1.03^4", "1.125509"),
        ("Solve Continuous Rate using Natural Logarithm", "r = 4 * ln(1.03) = 4 * 0.0295588", f"{r_cont174:.2f}%")
    ],
    final_ans=f"{r_cont174:.2f}% per annum",
    choices=[
        f"A. {r_cont174:.2f}% per annum",
        f"B. 12.55% per annum",
        f"C. 12.00% per annum",
        f"D. 11.45% per annum"
    ],
    correct_letter="A",
    shortcut="r = 4 * ln(1.03) = 11.82%.",
    keystrokes=["4 * ln ( 1 + 0.12 / 4 ) ="],
    cal_disp="0.118235",
    cal_tip="Continuous compounding rate is always slightly LESS than the nominal discrete rate needed to achieve the same effective annual return.",
    trap="Computing the effective rate (12.55%) instead of the nominal continuous rate.",
    week_day=7,
    diff="Moderate"
)
problems_156_175.append(p174_obj)

# ==========================================
# Problem 175: Grand Capstone Board Problem (Pumped-Storage Hydro vs Battery BESS)
# ==========================================
# Grand Capstone Problem: 100 MW Grid Storage Comparison over 30-Year Horizon
# Option 1: Pumped-Storage Hydroelectric Plant (PSH)
# - First Cost = ₱10,000,000,000 (10 Billion)
# - Life = 50 years (evaluate over 30-year study period with terminal salvage value of ₱4,000,000,000)
# - Round-trip efficiency = 75%
# - Annual net arbitrage & capacity revenue = ₱1,500,000,000 / yr
# - Annual O&M = ₱200,000,000 / yr -> Net annual inflow = ₱1,300,000,000 / yr
# - MARR = 10%.
# Option 2: Lithium-ion BESS
# - Initial CapEx = ₱4,500,000,000 (4.5 Billion)
# - Useful life = 10 years. Must be completely replaced at Year 10 and Year 20 at ₱3,500,000,000 each replacement (due to tech learning curve).
# - Round-trip efficiency = 88%
# - Annual net arbitrage & capacity revenue = ₱1,700,000,000 / yr
# - Annual O&M = ₱300,000,000 / yr -> Net annual inflow = ₱1,400,000,000 / yr
# - Salvage value at Year 30 = ₱500,000,000.
# Compute 30-Year NPV for both:
# (P/A, 10%, 30) = (1 - 1.1^-30)/0.10 = 9.426914
# PSH NPV: -10,000,000,000 + 1,300,000,000 * 9.426914 + 4,000,000,000 * (1.1^-30)
# 1.1^-30 = 0.05730855
# PSH NPV = -10B + 12,254,988,200 + 229,234,200 = ₱2,484,222,400.
# BESS NPV: -4.5B - 3.5B*1.1^-10 - 3.5B*1.1^-20 + 1.4B * 9.426914 + 0.5B * 1.1^-30
# 3.5B * 1.1^-10 = 3.5B * 0.385543 = 1,349,400,500
# 3.5B * 1.1^-20 = 3.5B * 0.148644 = 520,254,000
# 1.4B * 9.426914 = 13,197,679,600
# 0.5B * 0.057309 = 28,654,500
# BESS NPV = -4,500,000,000 - 1,349,400,500 - 520,254,000 + 13,197,679,600 + 28,654,500 = ₱6,856,679,600!
# Both have positive NPV. BESS generates higher NPV by ₱4,372,457,200!
npv_psh175 = -10000000000 + 1300000000 * ((1 - 1.10**(-30))/0.10) + 4000000000 * (1.10**(-30)) # 2,484,222,789.96
npv_bess175 = -4500000000 - 3500000000 * (1.10**(-10)) - 3500000000 * (1.10**(-20)) + 1400000000 * ((1 - 1.10**(-30))/0.10) + 500000000 * (1.10**(-30)) # 6,856,679,343.88
diff175 = npv_bess175 - npv_psh175
p175_obj = make_problem(
    num=175,
    category="Capital Budgeting & Evaluation",
    topic="Grand Capstone Board Simulation: Pumped-Storage Hydro vs Utility-Scale BESS",
    question=f"A national transmission grid operator evaluates two 100 MW utility storage technologies over a 30-year planning horizon (MARR = 10%):\n- Option 1 (Pumped-Storage Hydro, PSH): Initial CapEx ₱10,000,000,000; Net annual cash inflow ₱1,300,000,000/year; Terminal salvage/residual value at Year 30 of ₱4,000,000,000\n- Option 2 (Lithium BESS): Initial CapEx ₱4,500,000,000; Replacements at Year 10 and Year 20 of ₱3,500,000,000 each; Net annual cash inflow ₱1,400,000,000/year; Terminal salvage value at Year 30 of ₱500,000,000\nCompute the 30-year Net Present Value (NPV) for both grid storage options and determine the economically superior technology.",
    given=[
        ("Option 1 (PSH)", "CapEx = ₱10B, Inflow = ₱1.3B/yr, SV_30 = ₱4.0B", "Long-life civil asset"),
        ("Option 2 (BESS)", "CapEx = ₱4.5B, Replacements = ₱3.5B at yr 10 & 20, Inflow = ₱1.4B/yr, SV_30 = ₱0.5B", "Modular asset"),
        ("Planning Horizon & MARR", "30 years, 10% discount rate", "(P/A, 10%, 30) = 9.426914")
    ],
    formula="NPV_PSH = -I + Net*(P/A, i, 30) + SV*(P/F, i, 30) ; NPV_BESS = -I - Repl*(P/F, i, 10) - Repl*(P/F, i, 20) + Net*(P/A, i, 30) + SV*(P/F, i, 30)",
    steps=[
        ("Pumped-Storage Hydro NPV", f"NPV_PSH = -₱10B + ₱1.3B * 9.426914 + ₱4.0B * (1.10^-30)", f"₱{npv_psh175:,.2f}"),
        ("Battery Storage (BESS) NPV", f"NPV_BESS = -₱4.5B - ₱3.5B*(1.10^-10) - ₱3.5B*(1.10^-20) + ₱1.4B * 9.426914 + ₱0.5B*(1.10^-30)", f"₱{npv_bess175:,.2f}"),
        ("Strategic Decision", f"BESS creates superior shareholder value by ₱{diff175:,.2f} due to lower upfront CapEx and higher round-trip conversion efficiency. Choose BESS.", "Select BESS")
    ],
    final_ans=f"NPV_PSH = {format_peso(npv_psh175)}, NPV_BESS = {format_peso(npv_bess175)}; Choose BESS",
    choices=[
        f"A. NPV_PSH = {format_peso(npv_psh175)}, NPV_BESS = {format_peso(npv_bess175)}; Choose BESS",
        f"B. NPV_PSH = ₱2,484,222,789.96, NPV_BESS = ₱2,120,000,000.00; Choose PSH",
        f"C. NPV_PSH = ₱3,150,000,000.00, NPV_BESS = ₱5,800,000,000.00; Choose BESS",
        f"D. NPV_PSH = ₱2,484,222,789.96, NPV_BESS = ₱4,250,000,000.00; Choose BESS"
    ],
    correct_letter="A",
    shortcut="PSH NPV = -10B + 1.3B*9.427 + 4B*1.1^-30 = ₱2.484B. BESS NPV = -4.5B - 3.5B*(1.1^-10 + 1.1^-20) + 1.4B*9.427 + 0.5B*1.1^-30 = ₱6.857B. BESS wins.",
    keystrokes=["- 10000000000 + 1300000000 * ( 1 - 1.10 ^ -30 ) / 0.10 + 4000000000 * 1.10 ^ -30 =", "- 4500000000 - 3500000000 * ( 1.10 ^ -10 + 1.10 ^ -20 ) + 1400000000 * ( 1 - 1.10 ^ -30 ) / 0.10 + 500000000 * 1.10 ^ -30 ="],
    cal_disp="6856679344",
    cal_tip="Even with two major multi-billion pack replacements, the dramatic time-value discount on future battery CapEx plus higher efficiency makes modular BESS economically superior at a 10% discount rate.",
    trap="Failing to discount the Year 10 and Year 20 battery pack replacements or comparing without equal 30-year horizons.",
    week_day=7,
    diff="Mastery"
)
problems_156_175.append(p175_obj)

print(f"Batch 156-175 complete. Total generated: {len(problems_156_175)}")
