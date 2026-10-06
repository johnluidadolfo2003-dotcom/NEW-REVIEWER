# -*- coding: utf-8 -*-
"""Problems 91 to 110: Depreciation Methods & Asset Valuation"""
import math
from generate_problems_helper import make_problem, format_peso, format_peso_int

problems_91_110 = []

# ==========================================
# Problem 91: Straight-Line Depreciation
# ==========================================
C91 = 1200000; CL91 = 150000; n91 = 8; m91 = 5
d91 = (C91 - CL91) / n91 # 131,250
BV91 = C91 - m91 * d91 # 543,750
p91 = make_problem(
    num=91,
    category="Depreciation Methods",
    topic="Straight-Line Depreciation: Annual Charge & Book Value",
    question=f"A commercial diesel generator was acquired for {format_peso_int(C91)} with an estimated economic life of {n91} years and a terminal salvage value of {format_peso_int(CL91)}. Using the Straight-Line (SL) method, calculate the annual depreciation charge and the book value of the generator at the end of Year {m91}.",
    given=[
        ("C_0", "First Cost / Purchase Price", format_peso_int(C91)),
        ("C_L", "Salvage Value", format_peso_int(CL91)),
        ("n", "Economic Useful Life", f"{n91} years"),
        ("m", "Depreciation Period under evaluation", f"{m91} years")
    ],
    formula="d = (C_0 - C_L) / n ; BV_m = C_0 - m * d",
    steps=[
        ("Calculate Annual Depreciation", f"d = ({C91:,} - {CL91:,}) / {n91}", f"d = ₱{d91:,.2f} per year"),
        ("Calculate Book Value at End of Year 5", f"BV_5 = C_0 - 5 * d = {C91:,} - 5 * ({d91:,.2f})", f"BV_5 = ₱{BV91:,.2f}")
    ],
    final_ans=f"d = {format_peso(d91)}, BV_5 = {format_peso(BV91)}",
    choices=[
        f"A. d = {format_peso(d91)}, BV_5 = {format_peso(BV91)}",
        f"B. d = ₱150,000.00, BV_5 = ₱450,000.00",
        f"C. d = ₱115,000.00, BV_5 = ₱625,000.00",
        f"D. d = ₱131,250.00, BV_5 = ₱675,000.00"
    ],
    correct_letter="A",
    shortcut=f"Store d in variable D: (1200000 - 150000)/8 -> D = 131,250. Then BV = 1200000 - 5*D = 543,750.",
    keystrokes=["( 1200000 - 150000 ) / 8 =", "Ans [STO] [D]", "1200000 - 5 * [ALPHA] [D] ="],
    cal_disp="543750",
    cal_tip="Straight Line assumes constant degradation. Accumulated depreciation D_m is simply m * d.",
    trap="Do not forget to subtract the salvage value C_L before dividing by n; dividing the initial cost C_0 by n yields an incorrect annual depreciation.",
    week_day=4,
    diff="Foundation"
)
problems_91_110.append(p91)

# ==========================================
# Problem 92: Straight-Line Method: Depreciation Rate
# ==========================================
C92 = 850000; rate92 = 0.10; n92 = 8
# If depreciation rate is 10% of (C_0 - C_L), or 10% per year:
CL92 = 170000 # salvage
d92 = (C92 - CL92) / n92 # 85,000
p92 = make_problem(
    num=92,
    category="Depreciation Methods",
    topic="Straight-Line Depreciation: Salvage Value from Depreciation Rate",
    question=f"A CNC milling machine costs {format_peso_int(C92)} and has an estimated life of {n92} years. If the annual depreciation charge is {format_peso_int(d92)}, determine the estimated salvage value of the equipment at the end of its useful life.",
    given=[
        ("C_0", "Initial Cost", format_peso_int(C92)),
        ("n", "Useful Life", f"{n92} years"),
        ("d", "Annual Depreciation Charge", format_peso_int(d92))
    ],
    formula="d = (C_0 - C_L) / n  =>  C_L = C_0 - n * d",
    steps=[
        ("Total Depreciable Base", f"Total Depreciation = n * d = {n92} * {d92:,}", f"₱{n92 * d92:,.2f}"),
        ("Compute Salvage Value", f"C_L = C_0 - (n * d) = {C92:,} - {n92 * d92:,}", f"C_L = ₱{CL92:,.2f}")
    ],
    final_ans=format_peso(CL92),
    choices=[
        f"A. {format_peso(CL92)}",
        f"B. ₱150,000.00",
        f"C. ₱185,000.00",
        f"D. ₱200,000.00"
    ],
    correct_letter="A",
    shortcut=f"C_L = 850000 - 8 * 85000 = 170000.",
    keystrokes=["850000 - 8 * 85000 ="],
    cal_disp="170000",
    cal_tip="Direct subtraction of total depreciation gives salvage value.",
    trap="Do not confuse total depreciation base (C_0 - C_L) with salvage value C_L.",
    week_day=4,
    diff="Foundation"
)
problems_91_110.append(p92)

# ==========================================
# Problem 93: Sum-of-the-Years'-Digits (SOYD) Year 3
# ==========================================
C93 = 500000; CL93 = 50000; n93 = 5; m93 = 3
soyd_sum93 = n93 * (n93 + 1) // 2 # 15
base93 = C93 - CL93 # 450000
# In Year 3, remaining life at start of year is n - m + 1 = 5 - 3 + 1 = 3
d3_93 = ((n93 - m93 + 1) / soyd_sum93) * base93 # (3/15)*450000 = 90,000
p93 = make_problem(
    num=93,
    category="Depreciation Methods",
    topic="Sum-of-the-Years'-Digits (SOYD): Specific Year Depreciation",
    question=f"An industrial air compressor was purchased for {format_peso_int(C93)} with a useful life of {n93} years and a salvage value of {format_peso_int(CL93)}. Calculate the depreciation charge for the 3rd year using the Sum-of-the-Years'-Digits (SOYD) method.",
    given=[
        ("C_0", "First Cost", format_peso_int(C93)),
        ("C_L", "Salvage Value", format_peso_int(CL93)),
        ("n", "Useful Life", f"{n93} years"),
        ("m", "Year of Depreciation", f"Year {m93}")
    ],
    formula="SOYD = n(n + 1)/2 ; d_m = [(n - m + 1) / SOYD] * (C_0 - C_L)",
    steps=[
        ("Calculate Denominator (SOYD)", f"SOYD = {n93}({n93} + 1)/2 = 5 * 6 / 2", "15"),
        ("Calculate Depreciable Base", f"Base = C_0 - C_L = {C93:,} - {CL93:,}", f"₱{base93:,.2f}"),
        ("Compute Year 3 Fraction and Depreciation", f"d_3 = (5 - 3 + 1)/15 * {base93:,} = 3/15 * {base93:,}", f"d_3 = ₱{d3_93:,.2f}")
    ],
    final_ans=format_peso(d3_93),
    choices=[
        f"A. {format_peso(d3_93)}",
        f"B. ₱120,000.00",
        f"C. ₱150,000.00",
        f"D. ₱60,000.00"
    ],
    correct_letter="A",
    shortcut="Fraction in year 3 for 5-yr asset is 3/15. (3/15)*(500000 - 50000) = 90,000.",
    keystrokes=["( 3 / 15 ) * ( 500000 - 50000 ) ="],
    cal_disp="90000",
    cal_tip="In SOYD, the digits reverse: Year 1 takes n/SOYD, Year 2 takes (n-1)/SOYD, Year 3 takes (n-2)/SOYD.",
    trap="Do not use m in the numerator! The numerator is remaining life at start of period: (n - m + 1).",
    week_day=4,
    diff="Moderate"
)
problems_91_110.append(p93)

# ==========================================
# Problem 94: SOYD Book Value at Year 4 for 8-year asset
# ==========================================
C94 = 1600000; CL94 = 200000; n94 = 8; m94 = 4
soyd_sum94 = n94 * (n94 + 1) // 2 # 36
base94 = C94 - CL94 # 1400000
# Numerators for years 1 to 4: 8, 7, 6, 5 -> sum = 26
accum_num94 = 8 + 7 + 6 + 5 # 26
D4_94 = (accum_num94 / soyd_sum94) * base94 # (26/36)*1400000 = 1011111.11
BV4_94 = C94 - D4_94 # 588888.89
p94 = make_problem(
    num=94,
    category="Depreciation Methods",
    topic="SOYD Method: Accumulated Depreciation and Book Value",
    question=f"A fleet of utility service vehicles has an initial acquisition cost of {format_peso_int(C94)} and an estimated salvage value of {format_peso_int(CL94)} after {n94} years. Determine the book value of the fleet at the end of {m94} years using the Sum-of-the-Years'-Digits method.",
    given=[
        ("C_0", "First Cost", format_peso_int(C94)),
        ("C_L", "Salvage Value", format_peso_int(CL94)),
        ("n", "Useful Life", f"{n94} years"),
        ("m", "Evaluation Period", f"{m94} years")
    ],
    formula="SOYD = n(n+1)/2 ; D_m = [Sum_{j=1}^m (n - j + 1) / SOYD] * (C_0 - C_L) ; BV_m = C_0 - D_m",
    steps=[
        ("Compute SOYD Denominator", f"SOYD = 8 * 9 / 2", "36"),
        ("Compute Depreciated Numerator sum for 4 years", "Sum = 8 + 7 + 6 + 5", "26"),
        ("Calculate Accumulated Depreciation", f"D_4 = (26/36) * ({C94:,} - {CL94:,}) = (26/36) * {base94:,}", f"₱{D4_94:,.2f}"),
        ("Compute Book Value", f"BV_4 = C_0 - D_4 = {C94:,} - {D4_94:,.2f}", f"₱{BV4_94:,.2f}")
    ],
    final_ans=format_peso(BV4_94),
    choices=[
        f"A. {format_peso(BV4_94)}",
        f"B. ₱642,500.00",
        f"C. ₱710,000.00",
        f"D. ₱520,333.33"
    ],
    correct_letter="A",
    shortcut="Remaining digits after yr 4 are 4+3+2+1 = 10. BV_4 = C_L + (10/36)*(C_0 - C_L) = 200000 + (10/36)*1400000 = ₱588,888.89!",
    keystrokes=["200000 + ( 10 / 36 ) * 1400000 ="],
    cal_disp="588888.8889",
    cal_tip="CalTech Pro-Tip: Book Value in SOYD is directly C_L + (remaining digits / SOYD) * (C_0 - C_L). Extremely fast!",
    trap="Make sure not to omit C_L when finding Book Value from remaining fractions.",
    week_day=4,
    diff="Board Exam Standard"
)
problems_91_110.append(p94)

# ==========================================
# Problem 95: Declining Balance Method (Matheson Formula Rate)
# ==========================================
C95 = 600000; CL95 = 60000; n95 = 5
k95 = 1 - (CL95 / C95)**(1 / n95) # 1 - (0.1)**0.2 = 1 - 0.630957 = 0.369043 (36.90%)
p95 = make_problem(
    num=95,
    category="Depreciation Methods",
    topic="Declining Balance (Matheson Formula): Constant Depreciation Rate",
    question=f"A specialized testing apparatus costs {format_peso_int(C95)} and is expected to have a salvage value of {format_peso_int(CL95)} after {n95} years. Determine the constant annual depreciation rate k using the Matheson (Declining Balance) formula.",
    given=[
        ("C_0", "Initial Cost", format_peso_int(C95)),
        ("C_L", "Salvage Value", format_peso_int(CL95)),
        ("n", "Useful Life", f"{n95} years")
    ],
    formula="k = 1 - (C_L / C_0)^(1/n)",
    steps=[
        ("Substitute values into Matheson Formula", f"k = 1 - ({CL95:,} / {C95:,})^(1/{n95}) = 1 - (0.10)^0.20", "Calculation"),
        ("Compute Rate", "k = 1 - 0.6309573", f"k = {k95*100:.2f}%")
    ],
    final_ans=f"{k95*100:.2f}%",
    choices=[
        f"A. {k95*100:.2f}%",
        f"B. 40.00%",
        f"C. 33.33%",
        f"D. 28.50%"
    ],
    correct_letter="A",
    shortcut="1 - (60000/600000)^(1/5) = 1 - 0.1^0.2 = 36.90%",
    keystrokes=["1 - ( 60000 / 600000 ) ^ ( 1 / 5 ) ="],
    cal_disp="0.3690426555",
    cal_tip="In the Matheson formula, salvage value must be strictly greater than 0, otherwise k = 100%.",
    trap="Never use salvage value equal to zero in Declining Balance, as the asset would instantly depreciate to zero in year 1.",
    week_day=4,
    diff="Moderate"
)
problems_91_110.append(p95)

# ==========================================
# Problem 96: Declining Balance Book Value
# ==========================================
C96 = 1000000; CL96 = 100000; n96 = 10; m96 = 4
k96 = 1 - (CL96 / C96)**(1 / n96) # 1 - 0.1^0.1 = 1 - 0.794328 = 0.205672
BV4_96 = C96 * (1 - k96)**m96 # C_0 * (C_L/C_0)^(m/n) = 1,000,000 * 0.1^0.4 = 398,107.17
p96 = make_problem(
    num=96,
    category="Depreciation Methods",
    topic="Declining Balance Method: Book Value after m Years",
    question=f"A manufacturing unit was bought for {format_peso_int(C96)} with a salvage value of {format_peso_int(CL96)} at the end of {n96} years. Using the Matheson Declining Balance formula, find the book value at the end of the {m96}th year.",
    given=[
        ("C_0", "First Cost", format_peso_int(C96)),
        ("C_L", "Salvage Value", format_peso_int(CL96)),
        ("n", "Life", f"{n96} years"),
        ("m", "Target Year", f"{m96} years")
    ],
    formula="BV_m = C_0 * (1 - k)^m = C_0 * (C_L / C_0)^(m/n)",
    steps=[
        ("Direct Formula for Book Value", f"BV_{m96} = {C96:,} * ({CL96:,} / {C96:,})^({m96}/{n96})", "Calculation"),
        ("Compute Power Factor", "Factor = (0.10)^0.40 = 0.398107", "0.398107"),
        ("Final Book Value", f"BV_4 = {C96:,} * 0.398107", f"₱{BV4_96:,.2f}")
    ],
    final_ans=format_peso(BV4_96),
    choices=[
        f"A. {format_peso(BV4_96)}",
        f"B. ₱450,000.00",
        f"C. ₱365,220.00",
        f"D. ₱412,800.00"
    ],
    correct_letter="A",
    shortcut="BV_m = C_0 * (C_L/C_0)^(m/n) = 1,000,000 * (0.1)^0.4 = ₱398,107.17.",
    keystrokes=["1000000 * ( 100000 / 1000000 ) ^ ( 4 / 10 ) ="],
    cal_disp="398107.1706",
    cal_tip="Direct formula eliminates rounding error from intermediate k calculation!",
    trap="Do not calculate k, round it to 2 decimal places, and re-exponentiate, as rounding introduces substantial board exam discrepancies.",
    week_day=4,
    diff="Board Exam Standard"
)
problems_91_110.append(p96)

# ==========================================
# Problem 97: Double Declining Balance (DDB) Year 2
# ==========================================
C97 = 400000; n97 = 5; CL97 = 40000
rate_ddb97 = 2 / n97 # 0.40 (40%)
d1_97 = C97 * rate_ddb97 # 160000
bv1_97 = C97 - d1_97 # 240000
d2_97 = bv1_97 * rate_ddb97 # 96000
bv2_97 = bv1_97 - d2_97 # 144000
p97 = make_problem(
    num=97,
    category="Depreciation Methods",
    topic="Double Declining Balance (DDB): Year 2 Depreciation & Book Value",
    question=f"A piece of heavy construction machinery costs {format_peso_int(C97)} with an estimated life of {n97} years and a salvage value of {format_peso_int(CL97)}. Using the Double Declining Balance (DDB) method, determine the depreciation charge for the second year and the book value at the end of the second year.",
    given=[
        ("C_0", "First Cost", format_peso_int(C97)),
        ("n", "Useful Life", f"{n97} years"),
        ("C_L", "Estimated Salvage Value", format_peso_int(CL97)),
        ("DDB Rate", "2 / n", f"2 / {n97} = 40%")
    ],
    formula="Rate = 2/n ; d_m = BV_{m-1} * (2/n) ; BV_m = BV_{m-1} - d_m",
    steps=[
        ("Year 1 Depreciation", f"d_1 = {C97:,} * 0.40", f"₱{d1_97:,.2f}"),
        ("Book Value End of Year 1", f"BV_1 = {C97:,} - {d1_97:,}", f"₱{bv1_97:,.2f}"),
        ("Year 2 Depreciation", f"d_2 = BV_1 * 0.40 = {bv1_97:,} * 0.40", f"₱{d2_97:,.2f}"),
        ("Book Value End of Year 2", f"BV_2 = BV_1 - d_2 = {bv1_97:,} - {d2_97:,}", f"₱{bv2_97:,.2f}")
    ],
    final_ans=f"d_2 = {format_peso(d2_97)}, BV_2 = {format_peso(bv2_97)}",
    choices=[
        f"A. d_2 = {format_peso(d2_97)}, BV_2 = {format_peso(bv2_97)}",
        f"B. d_2 = ₱100,000.00, BV_2 = ₱150,000.00",
        f"C. d_2 = ₱86,400.00, BV_2 = ₱160,000.00",
        f"D. d_2 = ₱96,000.00, BV_2 = ₱130,000.00"
    ],
    correct_letter="A",
    shortcut="BV_2 = 400000 * (1 - 0.4)^2 = 400000 * 0.36 = ₱144,000. d_2 = BV_1 * 0.4 = 240000 * 0.4 = ₱96,000.",
    keystrokes=["400000 * ( 1 - 2 / 5 ) ^ 2 ="],
    cal_disp="144000",
    cal_tip="In DDB, salvage value is NOT subtracted when calculating annual depreciation; it only acts as a lower floor that book value cannot fall below.",
    trap="Never subtract salvage value from C_0 when initiating DDB calculations!",
    week_day=4,
    diff="Moderate"
)
problems_91_110.append(p97)

# ==========================================
# Problem 98: DDB Salvage Floor Constraint
# ==========================================
C98 = 300000; n98 = 5; CL98 = 50000
# DDB rate = 2/5 = 40%
# Yr 1: d1 = 120,000 -> BV1 = 180,000
# Yr 2: d2 = 72,000 -> BV2 = 108,000
# Yr 3: d3 = 43,200 -> BV3 = 64,800
# Yr 4: tentative d4 = 64,800 * 0.4 = 25,920 -> BV would be 38,880 < CL (50,000)!
# Therefore, d4 is capped at 64,800 - 50,000 = 14,800!
bv3_98 = 64800
d4_tentative = bv3_98 * 0.4 # 25,920
d4_actual = bv3_98 - CL98 # 14,800
p98 = make_problem(
    num=98,
    category="Depreciation Methods",
    topic="Double Declining Balance: Salvage Value Floor Limitation",
    question=f"An asset costs {format_peso_int(C98)} with a useful life of {n98} years and a mandatory terminal salvage value of {format_peso_int(CL98)}. Using DDB, the book value at the end of Year 3 is {format_peso_int(bv3_98)}. What is the allowable depreciation charge in Year 4?",
    given=[
        ("C_0", "First Cost", format_peso_int(C98)),
        ("BV_3", "Book Value at end of Year 3", format_peso_int(bv3_98)),
        ("C_L", "Salvage Value Floor", format_peso_int(CL98)),
        ("DDB Rate", "2 / 5", "40%")
    ],
    formula="d_4 = min[ BV_3 * (2/n), BV_3 - C_L ]",
    steps=[
        ("Calculate Unconstrained DDB Depreciation", f"d_tentative = {bv3_98:,} * 0.40", f"₱{d4_tentative:,.2f}"),
        ("Check Resulting Book Value", f"BV_tentative = {bv3_98:,} - {d4_tentative:,.2f} = ₱38,880.00 < Salvage Value ({CL98:,})", "Violates floor!"),
        ("Apply Depreciation Cap", f"d_4 = BV_3 - C_L = {bv3_98:,} - {CL98:,}", f"₱{d4_actual:,.2f}")
    ],
    final_ans=format_peso(d4_actual),
    choices=[
        f"A. {format_peso(d4_actual)}",
        f"B. ₱25,920.00",
        f"C. ₱20,000.00",
        f"D. ₱18,500.00"
    ],
    correct_letter="A",
    shortcut="Since 64,800 - 0.4*64,800 = 38,880 < 50,000, depreciation is capped at 64,800 - 50,000 = ₱14,800.",
    keystrokes=["64800 - 50000 ="],
    cal_disp="14800",
    cal_tip="Classic PRC board exam trap: An asset CANNOT be depreciated below its salvage value under DDB rules.",
    trap="Selecting ₱25,920 (the unconstrained 40% of BV3) without verifying whether BV drops below salvage value.",
    week_day=4,
    diff="Advanced"
)
problems_91_110.append(p98)

# ==========================================
# Problem 99: Sinking Fund Method of Depreciation
# ==========================================
C99 = 800000; CL99 = 80000; n99 = 10; i99 = 0.08; m99 = 5
base99 = C99 - CL99 # 720000
# Annual deposit d = base * [i / ((1+i)^n - 1)]
d_sf99 = base99 * (i99 / ((1 + i99)**n99 - 1)) # 720000 * 0.0690295 = 49,701.23
# Accumulated depreciation at year m: D_m = d * [((1+i)^m - 1) / i]
D5_99 = d_sf99 * (((1 + i99)**m99 - 1) / i99) # 49,701.23 * 5.866601 = 291,577.29
BV5_99 = C99 - D5_99 # 508,422.71
p99 = make_problem(
    num=99,
    category="Depreciation Methods",
    topic="Sinking Fund Method: Annual Deposit & Book Value at Year 5",
    question=f"A concrete batching plant has an initial cost of {format_peso_int(C99)} and an estimated salvage value of {format_peso_int(CL99)} at the end of {n99} years. If the sinking fund earns interest at {int(i99*100)}% per annum, find the annual sinking fund deposit and the book value of the plant at the end of {m99} years.",
    given=[
        ("C_0", "First Cost", format_peso_int(C99)),
        ("C_L", "Salvage Value", format_peso_int(CL99)),
        ("n", "Useful Life", f"{n99} years"),
        ("i", "Sinking Fund Interest Rate", f"{int(i99*100)}% per year"),
        ("m", "Depreciation Period", f"{m99} years")
    ],
    formula="d = (C_0 - C_L) * [i / ((1+i)^n - 1)] ; D_m = d * [((1+i)^m - 1) / i] ; BV_m = C_0 - D_m",
    steps=[
        ("Compute Annual Sinking Fund Deposit", f"d = ({C99:,} - {CL99:,}) * [0.08 / (1.08^10 - 1)] = {base99:,} * 0.0690295", f"d = ₱{d_sf99:,.2f}"),
        ("Compute Accumulated Depreciation D_5", f"D_5 = {d_sf99:,.2f} * [(1.08^5 - 1) / 0.08] = {d_sf99:,.2f} * 5.86660", f"D_5 = ₱{D5_99:,.2f}"),
        ("Compute Book Value at End of Year 5", f"BV_5 = C_0 - D_5 = {C99:,} - {D5_99:,.2f}", f"BV_5 = ₱{BV5_99:,.2f}")
    ],
    final_ans=f"d = {format_peso(d_sf99)}, BV_5 = {format_peso(BV5_99)}",
    choices=[
        f"A. d = {format_peso(d_sf99)}, BV_5 = {format_peso(BV5_99)}",
        f"B. d = ₱52,400.00, BV_5 = ₱485,000.00",
        f"C. d = ₱45,000.00, BV_5 = ₱535,000.00",
        f"D. d = ₱49,701.23, BV_5 = ₱550,000.00"
    ],
    correct_letter="A",
    shortcut="D_m = (C_0 - C_L) * [(1.08^5 - 1) / (1.08^10 - 1)]. BV_5 = 800000 - 720000 * (1.08^5 - 1)/(1.08^10 - 1) = ₱508,422.71.",
    keystrokes=["800000 - 720000 * ( 1.08 ^ 5 - 1 ) / ( 1.08 ^ 10 - 1 ) ="],
    cal_disp="508422.7099",
    cal_tip="CalTech shortcut: The interest rate i cancels out in the ratio of accumulated depreciation to total depreciable base! D_m = Base * [(1+i)^m - 1] / [(1+i)^n - 1].",
    trap="Remember that accumulated depreciation in Sinking Fund includes both deposits AND compound interest earned.",
    week_day=4,
    diff="Board Exam Standard"
)
problems_91_110.append(p99)

# ==========================================
# Problem 100: Service Output / Production Units Method
# ==========================================
C100 = 2500000; CL100 = 250000; total_units100 = 1000000; units_m100 = 350000
dep_per_unit100 = (C100 - CL100) / total_units100 # (2,250,000)/1,000,000 = 2.25 per unit
D_units100 = units_m100 * dep_per_unit100 # 350,000 * 2.25 = 787,500
BV_units100 = C100 - D_units100 # 1,712,500
p100 = make_problem(
    num=100,
    category="Depreciation Methods",
    topic="Service Output / Production Units Method: Book Value",
    question=f"A plastic injection molding machine cost {format_peso_int(C100)} with a salvage value of {format_peso_int(CL100)}. The manufacturer estimates that the machine can produce a total of {total_units100:,} molded parts over its service lifetime. In its first three years of operation, the machine produced {units_m100:,} parts. Compute the book value of the machine at the end of the 3rd year using the Service Output method.",
    given=[
        ("C_0", "First Cost", format_peso_int(C100)),
        ("C_L", "Salvage Value", format_peso_int(CL100)),
        ("Total Units", "Lifetime Production Capacity", f"{total_units100:,} units"),
        ("Units Produced", "Accumulated Output to Date", f"{units_m100:,} units")
    ],
    formula="Rate per unit = (C_0 - C_L) / Total Units ; BV = C_0 - (Units Produced * Rate per unit)",
    steps=[
        ("Calculate Unit Depreciation Rate", f"Rate = ({C100:,} - {CL100:,}) / {total_units100:,} = {C100 - CL100:,} / {total_units100:,}", f"₱{dep_per_unit100:.2f} per unit"),
        ("Calculate Total Depreciation Charge", f"D = {units_m100:,} units * ₱{dep_per_unit100:.2f}/unit", f"₱{D_units100:,.2f}"),
        ("Compute Book Value", f"BV = {C100:,} - {D_units100:,.2f}", f"₱{BV_units100:,.2f}")
    ],
    final_ans=format_peso(BV_units100),
    choices=[
        f"A. {format_peso(BV_units100)}",
        f"B. ₱1,825,000.00",
        f"C. ₱1,650,000.00",
        f"D. ₱1,780,000.00"
    ],
    correct_letter="A",
    shortcut="BV = 2500000 - 350000 * ((2500000 - 250000) / 1000000) = ₱1,712,500.",
    keystrokes=["2500000 - 350000 * ( 2250000 / 1000000 ) ="],
    cal_disp="1712500",
    cal_tip="Service Output method links depreciation directly to usage wear-and-tear rather than elapsed calendar time.",
    trap="Ensure salvage value is subtracted before computing the per-unit depreciation rate.",
    week_day=4,
    diff="Moderate"
)
problems_91_110.append(p100)

print("Batch 91-100 generated. Writing 101-110...")
