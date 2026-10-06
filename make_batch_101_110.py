# -*- coding: utf-8 -*-
"""Problems 101 to 135 for Engineering Economics Sample Problem Suite"""
import math
from generate_problems_helper import make_problem, format_peso, format_peso_int

problems_101_135 = []

# ==========================================
# Problem 101: Working Hours Method
# ==========================================
C101 = 1800000; CL101 = 200000; total_hrs101 = 40000; hrs_yr101 = 6500
dep_hr101 = (C101 - CL101) / total_hrs101 # (1,600,000)/40,000 = 40.00 / hr
d_yr101 = hrs_yr101 * dep_hr101 # 6,500 * 40 = 260,000
bv_yr101 = C101 - d_yr101 # 1,540,000
p101 = make_problem(
    num=101,
    category="Depreciation Methods",
    topic="Working Hours Method: Hourly Rate & First Year Book Value",
    question=f"A commercial excavator was bought for {format_peso_int(C101)} with an expected salvage value of {format_peso_int(CL101)} after {total_hrs101:,} operating hours. If the machine operated for {hrs_yr101:,} hours during its first year, determine the hourly depreciation rate and the book value at the end of Year 1.",
    given=[
        ("C_0", "First Cost", format_peso_int(C101)),
        ("C_L", "Salvage Value", format_peso_int(CL101)),
        ("Total Hours", "Lifetime Rated Operating Hours", f"{total_hrs101:,} hours"),
        ("Hours Used", "Operating Hours in Year 1", f"{hrs_yr101:,} hours")
    ],
    formula="Rate per hour = (C_0 - C_L) / Total Hours ; BV_1 = C_0 - (Hours * Rate)",
    steps=[
        ("Hourly Rate", f"Rate = ({C101:,} - {CL101:,}) / {total_hrs101:,} = ₱1,600,000 / 40,000", f"₱{dep_hr101:.2f} per hour"),
        ("Year 1 Depreciation", f"d_1 = {hrs_yr101:,} hrs * ₱{dep_hr101:.2f}/hr", f"₱{d_yr101:,.2f}"),
        ("End of Year 1 Book Value", f"BV_1 = {C101:,} - {d_yr101:,}", f"₱{bv_yr101:,.2f}")
    ],
    final_ans=f"Rate = ₱{dep_hr101:.2f}/hr, BV_1 = {format_peso(bv_yr101)}",
    choices=[
        f"A. Rate = ₱{dep_hr101:.2f}/hr, BV_1 = {format_peso(bv_yr101)}",
        f"B. Rate = ₱45.00/hr, BV_1 = ₱1,507,500.00",
        f"C. Rate = ₱38.50/hr, BV_1 = ₱1,549,750.00",
        f"D. Rate = ₱40.00/hr, BV_1 = ₱1,600,000.00"
    ],
    correct_letter="A",
    shortcut="Rate = 1600000/40000 = 40/hr. BV = 1800000 - 6500*40 = ₱1,540,000.",
    keystrokes=["1800000 - 6500 * ( 1600000 / 40000 ) ="],
    cal_disp="1540000",
    cal_tip="Working Hours method is identical to Service Output, substituting operating hours for output pieces.",
    trap="Always deduct salvage value before calculating hourly rate.",
    week_day=4,
    diff="Foundation"
)
problems_101_135.append(p101)

# ==========================================
# Problem 102: MACRS 5-year Property Half-Year Convention
# ==========================================
C102 = 1000000
# MACRS 5-yr rates: Yr 1: 20%, Yr 2: 32%, Yr 3: 19.20%, Yr 4: 11.52%, Yr 5: 11.52%, Yr 6: 5.76%
d1_102 = C102 * 0.20 # 200,000
d2_102 = C102 * 0.32 # 320,000
bv2_102 = C102 - (d1_102 + d2_102) # 480,000
p102 = make_problem(
    num=102,
    category="Depreciation Methods",
    topic="MACRS 5-Year Property: Half-Year Convention Book Value",
    question=f"A server farm computer cluster is classified as 5-year property under MACRS with an unadjusted cost basis of {format_peso_int(C102)}. The statutory recovery percentages are: Year 1 = 20.00%, Year 2 = 32.00%, Year 3 = 19.20%. Ignoring salvage value per MACRS rules, find the book value at the end of the second recovery year.",
    given=[
        ("C_0", "Unadjusted Cost Basis", format_peso_int(C102)),
        ("Recovery Period", "MACRS 5-Year Class", "5 years (6 recovery periods)"),
        ("Year 1 Rate", "Statutory Percentage", "20.00%"),
        ("Year 2 Rate", "Statutory Percentage", "32.00%")
    ],
    formula="BV_m = C_0 * [1 - Sum_{t=1}^m r_t]",
    steps=[
        ("Accumulated Depreciation Fraction", "Sum = 20% + 32%", "52% of initial basis"),
        ("Accumulated Depreciation Amount", f"D_2 = {C102:,} * 0.52", f"₱{d1_102 + d2_102:,.2f}"),
        ("Book Value End of Year 2", f"BV_2 = {C102:,} - {d1_102 + d2_102:,}", f"₱{bv2_102:,.2f}")
    ],
    final_ans=format_peso(bv2_102),
    choices=[
        f"A. {format_peso(bv2_102)}",
        f"B. ₱520,000.00",
        f"C. ₱600,000.00",
        f"D. ₱450,000.00"
    ],
    correct_letter="A",
    shortcut="BV_2 = 1,000,000 * (1 - 0.20 - 0.32) = 1,000,000 * 0.48 = ₱480,000.",
    keystrokes=["1000000 * ( 1 - 0.20 - 0.32 ) ="],
    cal_disp="480000",
    cal_tip="Under MACRS, salvage value is completely ignored and treated as zero for calculating annual recovery deductions.",
    trap="Never subtract salvage value from initial cost in MACRS questions.",
    week_day=4,
    diff="Moderate"
)
problems_101_135.append(p102)

# ==========================================
# Problem 103: Comparison of Depreciation Tax Shield (SL vs DDB)
# ==========================================
C103 = 2000000; n103 = 5; tax103 = 0.30; i103 = 0.10
# Straight Line: d = 400,000 each year (assume SV=0). Tax shield = 400,000 * 0.30 = 120,000 / yr.
# PW of SL shield = 120,000 * (P/A, 10%, 5) = 120,000 * 3.790787 = 454,894.41
# DDB rates (5 yrs): r = 40%.
# d1 = 800,000; d2 = 480,000; d3 = 288,000; d4 = 172,800; d5 = 259,200 (balance)
# Shields: S1=240,000; S2=144,000; S3=86,400; S4=51,840; S5=77,760
# PW(DDB shields) = 240,000/1.1 + 144,000/1.1^2 + 86,400/1.1^3 + 51,840/1.1^4 + 77,760/1.1^5
pw_sl103 = 120000 * ((1 - (1 + i103)**(-n103)) / i103) # 454,894.41
pw_ddb103 = 240000/1.1 + 144000/(1.1**2) + 86400/(1.1**3) + 51840/(1.1**4) + 77760/(1.1**5) # 496,252.30
diff103 = pw_ddb103 - pw_sl103 # 41,357.89
p103 = make_problem(
    num=103,
    category="Depreciation Methods",
    topic="Depreciation Tax Shield: Present Worth Advantage of DDB over SL",
    question=f"A corporation acquires new automation hardware for {format_peso_int(C103)} (zero salvage value, {n103}-year life). The corporate income tax rate is {int(tax103*100)}% and the after-tax discount rate is {int(i103*100)}%. Determine the Present Worth (PW) of the tax savings generated under the Double Declining Balance method compared to Straight-Line depreciation.",
    given=[
        ("C_0", "First Cost", format_peso_int(C103)),
        ("Tax Rate t", "Corporate Income Tax", f"{int(tax103*100)}%"),
        ("Discount Rate i", "Cost of Capital", f"{int(i103*100)}%"),
        ("Useful Life n", "Recovery Period", f"{n103} years")
    ],
    formula="Tax Shield = d_t * t ; PW = Sum [ (d_t * t) / (1 + i)^t ]",
    steps=[
        ("Straight-Line PW Tax Shield", f"SL Shield = ₱400,000 * 0.30 = ₱120,000/yr. PW = 120,000 * (P/A, 10%, 5)", f"₱{pw_sl103:,.2f}"),
        ("DDB Yearly Shields", "Yr 1: ₱240,000, Yr 2: ₱144,000, Yr 3: ₱86,400, Yr 4: ₱51,840, Yr 5: ₱77,760", "Discounted at 10%"),
        ("DDB PW Tax Shield", "Sum discounted cash flows", f"₱{pw_ddb103:,.2f}"),
        ("PW Advantage of Accelerated Method", f"Advantage = {pw_ddb103:,.2f} - {pw_sl103:,.2f}", f"₱{diff103:,.2f}")
    ],
    final_ans=f"PW Advantage = {format_peso(diff103)}",
    choices=[
        f"A. PW Advantage = {format_peso(diff103)}",
        f"B. PW Advantage = ₱55,200.00",
        f"C. PW Advantage = ₱32,800.00",
        f"D. PW Advantage = ₱48,900.00"
    ],
    correct_letter="A",
    shortcut="Because accelerated depreciation brings tax shields forward in time, its present value is significantly higher.",
    keystrokes=["240000/1.1 + 144000/1.1^2 + 86400/1.1^3 + 51840/1.1^4 + 77760/1.1^5 - 120000 * ( 1 - 1.1 ^ -5 ) / 0.10 ="],
    cal_disp="41357.8863",
    cal_tip="Accelerated depreciation creates time-value interest savings by deferring tax payments to later periods.",
    trap="Remember that total undiscounted tax deductions are identical under both methods; the advantage arises solely from time value of money.",
    week_day=4,
    diff="Advanced"
)
problems_101_135.append(p103)

# ==========================================
# Problem 104: Asset Trade-in and Book Value Gain / Loss
# ==========================================
C104 = 900000; n104 = 6; m104 = 4; trade104 = 250000
# Straight line with SV = 90,000:
d104 = (C104 - 90000) / n104 # 810,000 / 6 = 135,000
bv4_104 = C104 - 4 * d104 # 900,000 - 540,000 = 360,000
loss104 = bv4_104 - trade104 # 360,000 - 250,000 = 110,000 (Loss on disposal)
p104 = make_problem(
    num=104,
    category="Depreciation Methods",
    topic="Asset Disposal: Accounting Loss on Trade-In",
    question=f"A construction contractor owns a wheel loader originally purchased for {format_peso_int(C104)} with a {n104}-year life and ₱90,000 estimated salvage value. Straight-line depreciation has been applied for {m104} years. The contractor now trades in the loader for {format_peso_int(trade104)} trade-in allowance toward a new machine. What is the accounting gain or loss realized on the trade-in?",
    given=[
        ("C_0", "Original Cost", format_peso_int(C104)),
        ("Accumulated Time", "Years in Service", f"{m104} years"),
        ("Trade-In Allowance", "Market Value at Disposal", format_peso_int(trade104)),
        ("Useful Life & Salvage", "Straight-Line Basis", f"{n104} yrs, ₱90,000 SV")
    ],
    formula="BV_m = C_0 - m * d ; Gain/(Loss) = Trade-In Value - BV_m",
    steps=[
        ("Annual Depreciation Charge", f"d = (900,000 - 90,000) / 6", "₱135,000.00 per year"),
        ("Book Value at Year 4", f"BV_4 = 900,000 - 4 * (135,000)", f"₱{bv4_104:,.2f}"),
        ("Determine Gain or Loss", f"Result = Trade-in - BV_4 = {trade104:,} - {bv4_104:,}", f"-₱{loss104:,.2f} (Loss of {format_peso(loss104)})")
    ],
    final_ans=f"Loss of {format_peso(loss104)}",
    choices=[
        f"A. Loss of {format_peso(loss104)}",
        f"B. Gain of ₱110,000.00",
        f"C. Loss of ₱90,000.00",
        f"D. Gain of ₱60,000.00"
    ],
    correct_letter="A",
    shortcut="BV_4 = 900,000 - 4*(135,000) = 360,000. Trade-in is 250,000. Loss = 360,000 - 250,000 = ₱110,000.",
    keystrokes=["250000 - ( 900000 - 4 * ( ( 900000 - 90000 ) / 6 ) ) ="],
    cal_disp="-110000",
    cal_tip="Negative difference indicates book loss; positive indicates taxable gain on disposal.",
    trap="Do not confuse original purchase price with book value when computing gain or loss on sale.",
    week_day=4,
    diff="Moderate"
)
problems_101_135.append(p104)

# ==========================================
# Problem 105: Depletion of Natural Resources (Cost Depletion)
# ==========================================
mineral_cost105 = 50000000; total_tons105 = 2000000; mined_yr105 = 180000
unit_depletion105 = mineral_cost105 / total_tons105 # 25.00 / ton
yr_depletion105 = mined_yr105 * unit_depletion105 # 180,000 * 25 = 4,500,000
p105 = make_problem(
    num=105,
    category="Depreciation Methods",
    topic="Natural Resource Depletion: Unit Cost Depletion Method",
    question=f"A mining exploration company purchased a copper-gold ore reserve for {format_peso_int(mineral_cost105)}. Geological surveys confirm {total_tons105:,} metric tons of economically recoverable ore. In the current tax year, the mine extracted and processed {mined_yr105:,} tons. Compute the allowable cost depletion deduction for the year.",
    given=[
        ("Investment Cost", "Mineral Property Acquisition Basis", format_peso_int(mineral_cost105)),
        ("Estimated Reserves", "Total Recoverable Ore Volume", f"{total_tons105:,} metric tons"),
        ("Annual Extraction", "Tons Mined in Current Year", f"{mined_yr105:,} metric tons")
    ],
    formula="Unit Depletion Rate = Property Basis / Total Recoverable Tons ; Depletion Deduction = Units Extracted * Rate",
    steps=[
        ("Unit Depletion Rate", f"Rate = {mineral_cost105:,} / {total_tons105:,}", f"₱{unit_depletion105:.2f} per metric ton"),
        ("Annual Depletion Charge", f"D = {mined_yr105:,} tons * ₱{unit_depletion105:.2f}/ton", f"₱{yr_depletion105:,.2f}")
    ],
    final_ans=format_peso(yr_depletion105),
    choices=[
        f"A. {format_peso(yr_depletion105)}",
        f"B. ₱5,000,000.00",
        f"C. ₱3,850,000.00",
        f"D. ₱4,200,000.00"
    ],
    correct_letter="A",
    shortcut="Depletion = 180,000 * (50,000,000 / 2,000,000) = 180,000 * 25 = ₱4,500,000.",
    keystrokes=["180000 * ( 50000000 / 2000000 ) ="],
    cal_disp="4500000",
    cal_tip="Cost depletion directly mirrors the units-of-production method of depreciation.",
    trap="Ensure not to confuse cost depletion with statutory percentage depletion.",
    week_day=4,
    diff="Foundation"
)
problems_101_135.append(p105)

# ==========================================
# Problem 106: Percentage Depletion Allowance (Statutory Cap)
# ==========================================
gross_inc106 = 40000000; taxable_inc106 = 12000000; statutory_rate106 = 0.22
tentative_pct106 = gross_inc106 * statutory_rate106 # 8,800,000
cap106 = taxable_inc106 * 0.50 # 50% limit of taxable income before depletion = 6,000,000
allowable106 = min(tentative_pct106, cap106) # 6,000,000
p106 = make_problem(
    num=106,
    category="Depreciation Methods",
    topic="Percentage Depletion Allowance: 50% Taxable Income Limitation",
    question=f"A geothermal power developer generated {format_peso_int(gross_inc106)} in gross mineral revenue with taxable income of {format_peso_int(taxable_inc106)} (computed without the depletion allowance). The statutory percentage depletion rate for the resource is 22%. Under tax code regulations, percentage depletion cannot exceed 50% of the taxable income from the property. What is the allowable percentage depletion deduction?",
    given=[
        ("Gross Income", "Total Resource Sales", format_peso_int(gross_inc106)),
        ("Taxable Income", "Net Income before Depletion", format_peso_int(taxable_inc106)),
        ("Statutory Rate", "Applicable Resource Percentage", "22%"),
        ("Ceiling Rule", "Tax Code Maximum Constraint", "50% of Taxable Income")
    ],
    formula="Tentative = Gross * Rate ; Statutory Ceiling = 50% * Taxable Income ; Allowable = min(Tentative, Ceiling)",
    steps=[
        ("Calculate Tentative Depletion", f"Tentative = {gross_inc106:,} * 0.22", f"₱{tentative_pct106:,.2f}"),
        ("Compute 50% Taxable Income Ceiling", f"Ceiling = {taxable_inc106:,} * 0.50", f"₱{cap106:,.2f}"),
        ("Apply Statutory Limitation", f"Since ₱8,800,000 > ₱6,000,000, deduction is capped at 50% limit", f"₱{allowable106:,.2f}")
    ],
    final_ans=format_peso(allowable106),
    choices=[
        f"A. {format_peso(allowable106)}",
        f"B. ₱8,800,000.00",
        f"C. ₱7,200,000.00",
        f"D. ₱6,600,000.00"
    ],
    correct_letter="A",
    shortcut="Tentative is 0.22*40M = 8.8M. But 50% of 12M is 6M. The lesser figure applies: ₱6,000,000.",
    keystrokes=["min ( 0.22 * 40000000 , 0.50 * 12000000 ) -> 6000000"],
    cal_disp="6000000",
    cal_tip="Percentage depletion is unique: total deductions over time can actually exceed the property's original acquisition cost!",
    trap="Overlooking the 50% taxable income statutory cap and selecting ₱8,800,000.",
    week_day=4,
    diff="Advanced"
)
problems_101_135.append(p106)

# ==========================================
# Problem 107: Composite Depreciation Rate
# ==========================================
# Machine A: Cost = 600,000, SV = 60,000, n = 5 -> d_A = 108,000
# Machine B: Cost = 400,000, SV = 40,000, n = 10 -> d_B = 36,000
# Machine C: Cost = 1,000,000, SV = 100,000, n = 15 -> d_C = 60,000
# Total Cost = 2,000,000; Total Annual Dep = 204,000
# Composite Rate = Total Annual Dep / Total Cost = 204,000 / 2,000,000 = 10.20%
# Composite Life = Total Depreciable Base / Total Annual Dep = 1,800,000 / 204,000 = 8.82 years
comp_rate107 = 204000 / 2000000 # 0.1020 (10.20%)
comp_life107 = 1800000 / 204000 # 8.82 years
p107 = make_problem(
    num=107,
    category="Depreciation Methods",
    topic="Composite Depreciation: Plant Rate and Composite Useful Life",
    question="A manufacturing plant consists of three production assets:\n- Asset A: Cost ₱600,000, Salvage ₱60,000, Life 5 yrs\n- Asset B: Cost ₱400,000, Salvage ₱40,000, Life 10 yrs\n- Asset C: Cost ₱1,000,000, Salvage ₱100,000, Life 15 yrs\nCalculate the composite depreciation rate and the composite life of the entire plant using the straight-line basis.",
    given=[
        ("Total Plant First Cost", "Sum of Assets A + B + C", "₱2,000,000"),
        ("Total Salvage Value", "Sum of Salvages", "₱200,000"),
        ("Annual Depreciations", "d_A = ₱108,000; d_B = ₱36,000; d_C = ₱60,000", "Total d = ₱204,000/yr")
    ],
    formula="Composite Rate = Total Annual Dep / Total First Cost ; Composite Life = Total Depreciable Base / Total Annual Dep",
    steps=[
        ("Sum Annual Depreciations", "d_tot = 108,000 + 36,000 + 60,000", "₱204,000 per year"),
        ("Composite Depreciation Rate", "Rate = ₱204,000 / ₱2,000,000", "10.20% per year"),
        ("Composite Life", "Life = (₱2,000,000 - ₱200,000) / ₱204,000 = ₱1,800,000 / ₱204,000", f"{comp_life107:.2f} years")
    ],
    final_ans=f"Rate = 10.20%, Life = {comp_life107:.2f} years",
    choices=[
        f"A. Rate = 10.20%, Life = {comp_life107:.2f} years",
        f"B. Rate = 11.50%, Life = 9.25 years",
        f"C. Rate = 9.80%, Life = 10.00 years",
        f"D. Rate = 10.20%, Life = 7.50 years"
    ],
    correct_letter="A",
    shortcut="Total d = 108k+36k+60k = 204k. Rate = 204k/2000k = 10.2%. Life = 1800k/204k = 8.82 yrs.",
    keystrokes=["204000 / 2000000 =", "1800000 / 204000 ="],
    cal_disp="8.823529",
    cal_tip="Composite depreciation simplifies accounting by applying a single average rate across diverse assets.",
    trap="Do not take a simple arithmetic average of the useful lives (5+10+15)/3 = 10 yrs; you must weight by depreciable base.",
    week_day=4,
    diff="Board Exam Standard"
)
problems_101_135.append(p107)

# ==========================================
# Problem 108: Sinking Fund vs Straight-Line Book Value at Mid-Life
# ==========================================
C108 = 1000000; CL108 = 0; n108 = 10; i108 = 0.12; m108 = 5
bv_sl108 = C108 * (1 - m108 / n108) # 500,000
# SF: D_5 = C0 * [(1.12^5 - 1) / (1.12^10 - 1)] = 1,000,000 * (0.7623417 / 2.105848) = 362,011.75
d5_sf108 = C108 * (((1 + i108)**m108 - 1) / ((1 + i108)**n108 - 1))
bv_sf108 = C108 - d5_sf108 # 637,988.25
diff_bv108 = bv_sf108 - bv_sl108 # 137,988.25
p108 = make_problem(
    num=108,
    category="Depreciation Methods",
    topic="Comparative Depreciation: Sinking Fund vs Straight-Line Book Value",
    question=f"An electrical substation transformer costs {format_peso_int(C108)} with zero salvage value after {n108} years. If the sinking fund rate is {int(i108*100)}% compounded annually, what is the difference between the book value calculated by the Sinking Fund method and that by the Straight-Line method at the midpoint of its life (Year 5)?",
    given=[
        ("C_0", "First Cost", format_peso_int(C108)),
        ("C_L", "Salvage Value", "₱0"),
        ("n", "Useful Life", f"{n108} years"),
        ("i", "Sinking Fund Interest Rate", f"{int(i108*100)}%"),
        ("m", "Midpoint", "5 years")
    ],
    formula="BV_SL = C_0 * (1 - m/n) ; BV_SF = C_0 - C_0 * [((1+i)^m - 1) / ((1+i)^n - 1)]",
    steps=[
        ("Straight-Line Book Value at Year 5", f"BV_SL = {C108:,} * (1 - 5/10)", "₱500,000.00"),
        ("Sinking Fund Accumulated Depreciation D_5", f"D_5 = {C108:,} * [(1.12^5 - 1)/(1.12^10 - 1)]", f"₱{d5_sf108:,.2f}"),
        ("Sinking Fund Book Value at Year 5", f"BV_SF = {C108:,} - {d5_sf108:,.2f}", f"₱{bv_sf108:,.2f}"),
        ("Difference (SF Book Value - SL Book Value)", f"Difference = {bv_sf108:,.2f} - 500,000.00", f"₱{diff_bv108:,.2f}")
    ],
    final_ans=format_peso(diff_bv108),
    choices=[
        f"A. {format_peso(diff_bv108)} higher under SF",
        f"B. ₱100,000.00 higher under SF",
        f"C. ₱137,988.25 lower under SF",
        f"D. ₱125,500.00 higher under SF"
    ],
    correct_letter="A",
    shortcut="BV_SF - BV_SL = 1,000,000 * [0.5 - (1.12^5 - 1)/(1.12^10 - 1)] = ₱137,988.25 higher.",
    keystrokes=["1000000 * ( 1 - ( 1.12 ^ 5 - 1 ) / ( 1.12 ^ 10 - 1 ) ) - 500000 ="],
    cal_disp="137988.2464",
    cal_tip="Because Sinking Fund depreciation increases exponentially over time (due to compounding), its book value in early/middle years is always HIGHER than Straight-Line.",
    trap="Thinking SF book value is lower. In reality, SF depreciates slowest in the early years!",
    week_day=4,
    diff="Advanced"
)
problems_101_135.append(p108)

# ==========================================
# Problem 109: Asset Replacement Obsolescence
# ==========================================
# Book value = 400,000. Market value = 180,000.
# In engineering economics replacement analysis, the relevant initial cost of the existing asset (Defender) is its current market value (₱180,000). The book value of ₱400,000 and the resulting unamortized difference of ₱220,000 is a SUNK COST.
sunk109 = 400000 - 180000
p109 = make_problem(
    num=109,
    category="Depreciation Methods",
    topic="Replacement Economics: Sunk Cost Fallacy on Existing Equipment",
    question="An existing industrial boiler has a current book value of ₱400,000 on company financial statements. However, newer high-efficiency boilers have reduced its current secondary market trade-in value to ₱180,000. In evaluating whether to replace this boiler (the Defender) with a modern model (the Challenger), what investment value should be assigned to the Defender, and what is the status of the ₱220,000 difference?",
    given=[
        ("Book Value", "Historical Accounting Carrying Value", "₱400,000"),
        ("Market Value", "Current Realizable Cash Value", "₱180,000"),
        ("Difference", "Unamortized Accounting Loss", "₱220,000")
    ],
    formula="Defender Investment Value = Current Realizable Market Value (Opportunity Cost) ; Difference = Sunk Cost",
    steps=[
        ("Identify Opportunity Cost", "Continuing with the Defender sacrifices the current cash that could be obtained: ₱180,000", "₱180,000 investment basis"),
        ("Classify Historical Accounting Value", "Book value represents past cash outlays that cannot be altered by future decisions.", "Sunk Cost = ₱220,000")
    ],
    final_ans="Investment Value = ₱180,000; ₱220,000 is a Sunk Cost",
    choices=[
        "A. Investment Value = ₱180,000; ₱220,000 is a Sunk Cost",
        "B. Investment Value = ₱400,000; ₱220,000 is added to Challenger cost",
        "C. Investment Value = ₱220,000; ₱180,000 is a Salvage Credit",
        "D. Investment Value = ₱580,000; Combined capital outlay"
    ],
    correct_letter="A",
    shortcut="Engineering economics axiom: Past decisions are irrelevant to future alternatives. Always use current market value (opportunity cost); book value difference is sunk cost.",
    keystrokes=["Market Value = 180,000 ; Sunk = 400,000 - 180,000 = 220,000"],
    cal_disp="180000",
    cal_tip="The Sunk Cost Fallacy is one of the most heavily tested conceptual questions on the PRC board exam.",
    trap="Never add book value or the unamortized loss to the Challenger's first cost!",
    week_day=4,
    diff="Board Exam Standard"
)
problems_101_135.append(p109)

# ==========================================
# Problem 110: DDB to Straight-Line Switch Point
# ==========================================
# Asset cost = 100,000, life = 5 yrs, SV = 0.
# DDB rate = 40%.
# Yr 1: d = 40,000, BV = 60,000. Remaining SL over 4 yrs = 60,000/4 = 15,000. DDB yr 2 = 24,000 > 15,000.
# Yr 2: d = 24,000, BV = 36,000. Remaining SL over 3 yrs = 36,000/3 = 12,000. DDB yr 3 = 14,400 > 12,000.
# Yr 3: d = 14,400, BV = 21,600. Remaining SL over 2 yrs = 21,600/2 = 10,800. DDB yr 4 = 8,640 < 10,800!
# Therefore, switch occurs at Year 4!
p110 = make_problem(
    num=110,
    category="Depreciation Methods",
    topic="Accelerated Depreciation: Optimal Switch from DDB to Straight-Line",
    question="A laboratory testing station has an initial cost of ₱100,000 with zero salvage value and a 5-year life. Under optimum tax depreciation rules, a firm should switch from Double Declining Balance to Straight-Line in the year when remaining Straight-Line depreciation exceeds DDB depreciation. In which year should the firm switch?",
    given=[
        ("C_0", "First Cost", "₱100,000"),
        ("n", "Useful Life", "5 years"),
        ("Salvage Value", "Terminal Floor", "₱0"),
        ("DDB Rate", "2/5", "40%")
    ],
    formula="Switch when: (BV_{t-1} - C_L) / (n - t + 1) > BV_{t-1} * (2/n)",
    steps=[
        ("Year 3 Comparison", "BV_2 = ₱36,000. DDB d_3 = ₱14,400. SL d_3 = ₱36,000/3 = ₱12,000. DDB is higher, stay on DDB.", "DDB > SL"),
        ("Year 4 Comparison", "BV_3 = ₱21,600. DDB d_4 = 40% * ₱21,600 = ₱8,640. SL d_4 = ₱21,600/2 = ₱10,800. SL is higher!", "SL > DDB"),
        ("Conclusion", "Switch occurs at Year 4 to maximize depreciation deductions in years 4 and 5.", "Year 4")
    ],
    final_ans="Year 4",
    choices=[
        "A. Year 4",
        "B. Year 3",
        "C. Year 5",
        "D. Year 2"
    ],
    correct_letter="A",
    shortcut="At year 4: DDB would give 40% of 21,600 = 8,640. Straight-line distributes 21,600 equally over 2 remaining years = 10,800 each. 10,800 > 8,640, so switch in Year 4.",
    keystrokes=["21600 / 2 =", "0.4 * 21600 ="],
    cal_disp="10800",
    cal_tip="Switching to Straight-Line ensures the entire asset cost is depreciated down to salvage value by year n.",
    trap="Staying on DDB throughout leaves unamortized balance at year 5 unless switched to SL.",
    week_day=4,
    diff="Advanced"
)
problems_101_135.append(p110)

print("Depreciation batch 101-110 done.")
