# -*- coding: utf-8 -*-
"""Problems 121 to 135: Capital Budgeting & Bond Valuation"""
import math
from generate_problems_helper import make_problem, format_peso, format_peso_int

problems_121_135 = []

# ==========================================
# Problem 121: Modified Benefit-Cost Ratio
# ==========================================
# Using same parameters as 120: I = 20M, n = 25, i = 8%, O&M = 500,000, B = 3,200,000
# CR = 1,873,575.60
# Modified B/C = (B - O&M) / CR = (3,200,000 - 500,000) / 1,873,575.60 = 2,700,000 / 1,873,575.60 = 1.44
i121 = 0.08; n121 = 25; inv121 = 20000000; om121 = 500000; ben121 = 3200000
cr121 = inv121 * (i121 / (1 - (1 + i121)**(-n121))) # 1,873,575.60
mod_bc121 = (ben121 - om121) / cr121 # 1.441
p121_obj = make_problem(
    num=121,
    category="Capital Budgeting & Evaluation",
    topic="Public Works: Modified Benefit-Cost Ratio",
    question=f"For the flood protection project with initial investment {format_peso_int(inv121)}, {n121}-year life, {int(i121*100)}% discount rate, annual maintenance of {format_peso_int(om121)}, and annual benefits of {format_peso_int(ben121)}, determine the Modified Benefit-Cost ratio.",
    given=[
        ("Initial Investment I", "Capital Outlay", format_peso_int(inv121)),
        ("Annual Benefits B", "Direct Public Benefits", format_peso_int(ben121)),
        ("Annual Maintenance O&M", "Recurring Operations", format_peso_int(om121)),
        ("Discount Rate i", "Cost of Capital", f"{int(i121*100)}%"),
        ("Project Life n", "Duration", f"{n121} years")
    ],
    formula="Modified B/C = (B - O&M) / Capital Recovery",
    steps=[
        ("Capital Recovery", f"CR = {inv121:,} * (A/P, 8%, 25)", f"₱{cr121:,.2f}"),
        ("Net Annual Benefits", f"Net B = {ben121:,} - {om121:,}", "₱2,700,000.00"),
        ("Compute Modified B/C", "Modified B/C = 2,700,000 / 1,873,575.60", f"{mod_bc121:.2f}")
    ],
    final_ans=f"Modified B/C = {mod_bc121:.2f}",
    choices=[
        f"A. Modified B/C = {mod_bc121:.2f}",
        f"B. Modified B/C = 1.35",
        f"C. Modified B/C = 1.20",
        f"D. Modified B/C = 1.58"
    ],
    correct_letter="A",
    shortcut="Modified B/C = (3.2M - 0.5M) / 1.874M = 2.7M / 1.874M = 1.44.",
    keystrokes=["( 3200000 - 500000 ) / ( 20000000 * ( 0.08 / ( 1 - 1.08 ^ -25 ) ) ) ="],
    cal_disp="1.4411",
    cal_tip="In Modified B/C, operating costs are subtracted from benefits in the numerator rather than added to capital in the denominator.",
    trap="Notice both conventional and modified ratios always agree on the accept/reject decision (both > 1.0), but yield different numerical values.",
    week_day=5,
    diff="Moderate"
)
problems_121_135.append(p121_obj)

# ==========================================
# Problem 122: Incremental Benefit-Cost Analysis (Delta B / Delta C)
# ==========================================
# Plan A: Annual Cost = 1,000,000; Annual Benefit = 1,500,000 -> B/C = 1.50
# Plan B: Annual Cost = 1,600,000; Annual Benefit = 2,200,000 -> B/C = 1.375
# Delta Cost = 600,000; Delta Benefit = 700,000
# Delta B / Delta C = 700,000 / 600,000 = 1.167 > 1.0 -> Choose Plan B!
p122_obj = make_problem(
    num=122,
    category="Capital Budgeting & Evaluation",
    topic="Incremental B/C Analysis: Selecting Between Mutually Exclusive Public Projects",
    question="Two mutually exclusive highway bypass proposals are under evaluation by DPWH:\n- Plan A: Equivalent Annual Cost = ₱1,000,000; Annual Benefits = ₱1,500,000 (B/C = 1.50)\n- Plan B: Equivalent Annual Cost = ₱1,600,000; Annual Benefits = ₱2,200,000 (B/C = 1.38)\nUsing incremental Benefit-Cost analysis (ΔB / ΔC), which design should be chosen?",
    given=[
        ("Plan A (Base)", "Cost = ₱1.0M, Benefit = ₱1.5M", "B/C = 1.50"),
        ("Plan B (Higher Cost)", "Cost = ₱1.6M, Benefit = ₱2.2M", "B/C = 1.38")
    ],
    formula="Delta B / Delta C = (B_B - B_A) / (C_B - C_A)",
    steps=[
        ("Calculate Incremental Benefits", "Delta B = ₱2,200,000 - ₱1,500,000", "₱700,000.00"),
        ("Calculate Incremental Cost", "Delta C = ₱1,600,000 - ₱1,000,000", "₱600,000.00"),
        ("Compute Incremental Ratio", "Delta B / Delta C = ₱700,000 / ₱600,000", "1.17"),
        ("Decision", "Since Delta B / Delta C = 1.17 > 1.00, the extra ₱600,000 investment in Plan B is justified. Choose Plan B.", "Select Plan B")
    ],
    final_ans="Delta B / Delta C = 1.17; Choose Plan B",
    choices=[
        "A. Delta B / Delta C = 1.17; Choose Plan B",
        "B. Delta B / Delta C = 0.86; Choose Plan A",
        "C. Choose Plan A because overall B/C (1.50) is higher",
        "D. Neither plan is economically justified"
    ],
    correct_letter="A",
    shortcut="Delta B / Delta C = 700k / 600k = 1.17 > 1.0. The higher investment is justified!",
    keystrokes=["( 2200000 - 1500000 ) / ( 1600000 - 1000000 ) ="],
    cal_disp="1.166667",
    cal_tip="CRITICAL BOARD EXAM RULE: Never select mutually exclusive projects by simply picking the highest individual B/C ratio! You MUST perform incremental analysis.",
    trap="Falling into the trap of picking Plan A simply because its individual B/C (1.50) is greater than Plan B's (1.38).",
    week_day=5,
    diff="Advanced"
)
problems_121_135.append(p122_obj)

# ==========================================
# Problem 123: Simple Payback Period
# ==========================================
inv123 = 4500000; savings123 = 900000
payback123 = inv123 / savings123 # 5.0 years
p123_obj = make_problem(
    num=123,
    category="Capital Budgeting & Evaluation",
    topic="Investment Screening: Simple Payback Period",
    question=f"An energy recovery system costs {format_peso_int(inv123)} to install and reduces factory electric utility expenses by {format_peso_int(savings123)} each year. What is the simple payback period of the investment?",
    given=[
        ("Initial Investment", "Capital Expenditure", format_peso_int(inv123)),
        ("Annual Net Cash Inflow", "Utility Cost Reduction", format_peso_int(savings123))
    ],
    formula="Simple Payback Period = Initial Investment / Annual Net Cash Flow",
    steps=[
        ("Compute Payback", f"Payback = {inv123:,} / {savings123:,}", f"{payback123:.1f} years")
    ],
    final_ans=f"{payback123:.1f} years",
    choices=[
        f"A. {payback123:.1f} years",
        f"B. 4.2 years",
        f"C. 6.0 years",
        f"D. 3.8 years"
    ],
    correct_letter="A",
    shortcut="4,500,000 / 900,000 = 5.0 years.",
    keystrokes=["4500000 / 900000 ="],
    cal_disp="5",
    cal_tip="Simple payback period ignores the time value of money and any cash flows beyond the payback cutoff.",
    trap="Applying a discount rate when 'simple' payback is requested.",
    week_day=5,
    diff="Foundation"
)
problems_121_135.append(p123_obj)

# ==========================================
# Problem 124: Discounted Payback Period
# ==========================================
# Investment = 1,000,000. Annual cash flow = 300,000. Interest rate = 10%.
# P = A * (P/A, 10%, n) => 1,000,000 = 300,000 * [(1 - 1.1^-n)/0.10]
# 1 - 1.1^-n = 0.33333 => 1.1^-n = 0.66667 => -n * ln(1.1) = ln(0.66667) => n = -(-0.405465) / 0.095310 = 4.25 years
i124 = 0.10; inv124 = 1000000; a124 = 300000
dpb124 = -math.log(1 - (inv124 * i124 / a124)) / math.log(1 + i124) # 4.254 years
p124_obj = make_problem(
    num=124,
    category="Capital Budgeting & Evaluation",
    topic="Discounted Payback Period: Recovery Time Factoring Time Value of Money",
    question=f"A machinery automation upgrade requires an initial outlay of {format_peso_int(inv124)} and generates net annual savings of {format_peso_int(a124)}. If the firm's cost of capital is {int(i124*100)}%, calculate the discounted payback period.",
    given=[
        ("Initial Investment", "Capital Outlay", format_peso_int(inv124)),
        ("Annual Inflow A", "Yearly Savings", format_peso_int(a124)),
        ("Discount Rate i", "MARR", f"{int(i124*100)}%")
    ],
    formula="Investment = A * [(1 - (1 + i)^(-n)) / i]  =>  n = -ln(1 - I*i/A) / ln(1 + i)",
    steps=[
        ("Set up Present Worth Equivalence", f"{inv124:,} = {a124:,} * [(1 - 1.10^-n) / 0.10]", "Equation"),
        ("Isolate Compound Factor", f"1 - 1.10^-n = ({inv124:,} * 0.10) / {a124:,} = 100,000 / 300,000 = 0.3333", "1.10^-n = 0.6667"),
        ("Solve for n using Logarithms", "n = -ln(0.66667) / ln(1.10) = 0.405465 / 0.095310", f"{dpb124:.2f} years")
    ],
    final_ans=f"{dpb124:.2f} years",
    choices=[
        f"A. {dpb124:.2f} years",
        f"B. 3.33 years",
        f"C. 4.85 years",
        f"D. 5.10 years"
    ],
    correct_letter="A",
    shortcut="n = -ln(1 - 1M*0.1/300k) / ln(1.1) = -ln(2/3) / ln(1.1) = 4.25 years.",
    keystrokes=["- ln ( 1 - 1000000 * 0.10 / 300000 ) / ln ( 1.10 ) ="],
    cal_disp="4.254164",
    cal_tip="Discounted payback is always LONGER than simple payback (which would be 1M/300k = 3.33 years) because cash flows are discounted.",
    trap="Forgetting the discount rate and giving 3.33 years (simple payback).",
    week_day=5,
    diff="Board Exam Standard"
)
problems_121_135.append(p124_obj)

# ==========================================
# Problem 125: Net Present Value (NPV)
# ==========================================
inv125 = 5000000; n125 = 6; cf125 = 1400000; sv125 = 800000; marr125 = 0.12
# NPV = -5M + 1.4M * (P/A, 12%, 6) + 0.8M * (P/F, 12%, 6)
# (P/A, 12%, 6) = (1 - 1.12^-6)/0.12 = 4.111407
# (P/F, 12%, 6) = 1.12^-6 = 0.506631
npv125 = -inv125 + cf125 * ((1 - (1 + marr125)**(-n125)) / marr125) + sv125 * ((1 + marr125)**(-n125)) # 1,161,274.67
p125_obj = make_problem(
    num=125,
    category="Capital Budgeting & Evaluation",
    topic="Discounted Cash Flow: Net Present Value (NPV) Acceptance",
    question=f"A commercial cold-storage expansion requires an immediate investment of {format_peso_int(inv125)}. It generates annual net cash inflows of {format_peso_int(cf125)} for {n125} years, with an estimated terminal salvage value of {format_peso_int(sv125)} at the end of Year 6. If the company's MARR is {int(marr125*100)}%, compute the Net Present Value (NPV).",
    given=[
        ("Initial Investment", "Year 0 Outflow", format_peso_int(inv125)),
        ("Annual Net Cash Flow", "Years 1 to 6 Inflows", format_peso_int(cf125)),
        ("Salvage Value", "End of Year 6 Recovery", format_peso_int(sv125)),
        ("MARR", "Minimum Attractive Rate of Return", f"{int(marr125*100)}%")
    ],
    formula="NPV = -I + A * (P/A, i, n) + SV * (P/F, i, n)",
    steps=[
        ("Present Worth of Annual Savings", f"PW_A = {cf125:,} * [(1 - 1.12^-6) / 0.12] = {cf125:,} * 4.111407", "₱5,755,970.27"),
        ("Present Worth of Salvage Value", f"PW_SV = {sv125:,} * (1.12^-6) = {sv125:,} * 0.506631", "₱405,304.90"),
        ("Net Present Value", f"NPV = -{inv125:,} + 5,755,970.27 + 405,304.90", f"₱{npv125:,.2f}")
    ],
    final_ans=format_peso(npv125),
    choices=[
        f"A. {format_peso(npv125)} (Accept)",
        f"B. ₱850,420.00 (Accept)",
        f"C. -₱240,150.00 (Reject)",
        f"D. ₱1,450,000.00 (Accept)"
    ],
    correct_letter="A",
    shortcut="NPV = -5M + 1.4M*(1-1.12^-6)/0.12 + 0.8M*1.12^-6 = ₱1,161,274.67.",
    keystrokes=["- 5000000 + 1400000 * ( 1 - 1.12 ^ -6 ) / 0.12 + 800000 * 1.12 ^ -6 ="],
    cal_disp="1161274.67",
    cal_tip="Since NPV > 0, the project earns a return exceeding the 12% hurdle rate and adds shareholder value.",
    trap="Forgetting to discount the terminal salvage value at Year 6.",
    week_day=5,
    diff="Board Exam Standard"
)
problems_121_135.append(p125_obj)

# ==========================================
# Problem 126: Internal Rate of Return (IRR)
# ==========================================
# Investment = 1,000,000. Annual cash flow = 320,000 for 4 years.
# (P/A, i, 4) = 1,000,000 / 320,000 = 3.125
# (1 - (1+i)^-4)/i = 3.125
# Test i = 10%: (1-1.1^-4)/0.1 = 3.1699
# Test i = 11%: (1-1.11^-4)/0.11 = 3.1024
# Interpolation: i = 10% + 1% * (3.1699 - 3.1250) / (3.1699 - 3.1024) = 10% + (0.0449 / 0.0675)% = 10.66%
# Exact i = 10.64%
irr126 = 10.64
p126_obj = make_problem(
    num=126,
    category="Capital Budgeting & Evaluation",
    topic="Discounted Cash Flow: Internal Rate of Return (IRR) Solving",
    question=f"A small microgrid inverter upgrade costs ₱1,000,000 and generates net cost reductions of ₱320,000 at the end of each year for 4 years with zero salvage value. Find the project's Internal Rate of Return (IRR).",
    given=[
        ("Initial Investment", "Capital Outlay", "₱1,000,000"),
        ("Annual Net Savings", "Uniform Cash Inflow", "₱320,000/year"),
        ("Project Duration", "Lifespan", "4 years")
    ],
    formula="NPV = 0  =>  1,000,000 = 320,000 * [(1 - (1 + i)^(-4)) / i]",
    steps=[
        ("Target Annuity Factor", "(P/A, i, 4) = 1,000,000 / 320,000", "3.1250"),
        ("Evaluate at Test Rates", "At i = 10%: (P/A, 10%, 4) = 3.1699\nAt i = 11%: (P/A, 11%, 4) = 3.1024", "Target is between 10% and 11%"),
        ("Linear Interpolation / Solver", "i = 10% + 1% * (3.1699 - 3.1250) / (3.1699 - 3.1024)", f"{irr126:.2f}%")
    ],
    final_ans=f"IRR = {irr126:.2f}%",
    choices=[
        f"A. IRR = {irr126:.2f}%",
        f"B. IRR = 12.50%",
        f"C. IRR = 9.80%",
        f"D. IRR = 11.45%"
    ],
    correct_letter="A",
    shortcut="Enter into calculator solver: -1000 + 320*(1 - (1+X)^-4)/X = 0, [SHIFT][SOLVE] -> X = 0.1064 = 10.64%.",
    keystrokes=["- 1000 + 320 * ( 1 - ( 1 + X ) ^ -4 ) / X [ALPHA] [=] 0", "[SHIFT] [SOLVE] 0.1 [=]"],
    cal_disp="X = 0.1064",
    cal_tip="Use the Casio fx-991ES PLUS SOLVE feature directly on the NPV equation for instant 10-second answers on board exams!",
    trap="Confusing simple return (320k/1M = 32%) with the multi-year discounted IRR.",
    week_day=5,
    diff="Board Exam Standard"
)
problems_121_135.append(p126_obj)

# ==========================================
# Problem 127: Incremental Rate of Return (Delta IRR)
# ==========================================
# Alt 1: Cost ₱500,000, Annual savings ₱130,000 for 6 yrs.
# Alt 2: Cost ₱800,000, Annual savings ₱205,000 for 6 yrs.
# MARR = 10%.
# Delta Investment = 300,000. Delta Annual Savings = 75,000.
# (P/A, Delta i, 6) = 300,000 / 75,000 = 4.0000
# At i = 12%: (P/A, 12%, 6) = 4.1114
# At i = 13%: (P/A, 13%, 6) = 3.9975
# Delta IRR = approx 12.98%
# Since Delta IRR (12.98%) > MARR (10%), select Alt 2!
delta_irr127 = 12.98
p127_obj = make_problem(
    num=127,
    category="Capital Budgeting & Evaluation",
    topic="Mutually Exclusive Alternatives: Incremental Rate of Return (ΔIRR)",
    question="A manufacturing plant is deciding between two air handling units with 6-year lives and zero salvage value (MARR = 10%):\n- Unit 1: Initial Cost ₱500,000; Annual Benefit ₱130,000\n- Unit 2: Initial Cost ₱800,000; Annual Benefit ₱205,000\nCalculate the incremental rate of return (ΔIRR) on the additional investment and identify which unit should be selected.",
    given=[
        ("Unit 1", "Cost = ₱500k, Benefit = ₱130k/yr", "Base alternative"),
        ("Unit 2", "Cost = ₱800k, Benefit = ₱205k/yr", "Higher initial outlay"),
        ("MARR", "Hurdle Rate", "10%"),
        ("Useful Life", "Equal Lives", "6 years")
    ],
    formula="Delta I = I_2 - I_1 ; Delta A = A_2 - A_1 ; Delta I = Delta A * (P/A, Delta i, n)",
    steps=[
        ("Compute Incremental Outlay and Inflow", "Delta I = ₱800,000 - ₱500,000 = ₱300,000; Delta A = ₱205,000 - ₱130,000 = ₱75,000", "Incremental series"),
        ("Find Annuity Factor", "(P/A, Delta i, 6) = ₱300,000 / ₱75,000", "4.0000"),
        ("Solve for Delta IRR", "Solving (1 - (1+i)^-6)/i = 4.0000 yields", f"Delta IRR = {delta_irr127:.2f}%"),
        ("Decision", f"Since Delta IRR ({delta_irr127:.2f}%) > MARR (10.00%), the additional ₱300,000 outlay is justified. Choose Unit 2.", "Select Unit 2")
    ],
    final_ans=f"ΔIRR = {delta_irr127:.2f}%; Select Unit 2",
    choices=[
        f"A. ΔIRR = {delta_irr127:.2f}%; Select Unit 2",
        f"B. ΔIRR = 9.20%; Select Unit 1",
        f"C. ΔIRR = 15.00%; Select Unit 2",
        f"D. ΔIRR = 8.50%; Select Unit 1"
    ],
    correct_letter="A",
    shortcut="Delta I = 300k, Delta A = 75k. (P/A, i, 6) = 4.0. SOLVE: -300 + 75*(1-(1+X)^-6)/X = 0 => X = 12.98% > 10%, select Unit 2.",
    keystrokes=["- 300 + 75 * ( 1 - ( 1 + X ) ^ -6 ) / X [ALPHA] [=] 0", "[SHIFT] [SOLVE] 0.1 [=]"],
    cal_disp="X = 0.1298",
    cal_tip="Whenever ΔIRR > MARR, the higher-investment alternative is the superior economic choice.",
    trap="Comparing individual IRRs directly: individual IRR can be deceiving for mutually exclusive projects of different scale.",
    week_day=5,
    diff="Advanced"
)
problems_121_135.append(p127_obj)

# ==========================================
# Problem 128: External Rate of Return (ERR / Modified IRR)
# ==========================================
# Cost = 1,000,000. Cash flows: Yr 1 = 400,000, Yr 2 = 500,000, Yr 3 = 600,000.
# Reinvestment rate c = 8%. Horizon = 3 yrs.
# Terminal Worth FW_3 = 400k*(1.08^2) + 500k*(1.08^1) + 600k = 466,560 + 540,000 + 600,000 = 1,606,560.
# 1,000,000 * (1 + ERR)^3 = 1,606,560 => (1 + ERR) = (1.606560)^(1/3) = 1.1712 => ERR = 17.12%
fw_err128 = 400000 * (1.08**2) + 500000 * 1.08 + 600000 # 1,606,560
err128 = ((fw_err128 / 1000000)**(1/3) - 1) * 100 # 17.12%
p128_obj = make_problem(
    num=128,
    category="Capital Budgeting & Evaluation",
    topic="Reinvestment Assumption: External Rate of Return (ERR / MIRR)",
    question="A testing lab upgrade costs ₱1,000,000. Cash inflows are ₱400,000 at Year 1, ₱500,000 at Year 2, and ₱600,000 at Year 3. Intermediate cash flows are reinvested at the company's external financing rate of 8% per year. Find the project's External Rate of Return (ERR).",
    given=[
        ("Initial Investment", "Year 0 Outflow", "₱1,000,000"),
        ("Cash Flows", "Yr 1 = ₱400k, Yr 2 = ₱500k, Yr 3 = ₱600k", "Intermediate inflows"),
        ("Reinvestment Rate", "External Rate of Return c", "8%"),
        ("Project Horizon", "Duration", "3 years")
    ],
    formula="FW_n = Sum [ CF_t * (1 + c)^(n - t) ] ; C_0 * (1 + ERR)^n = FW_n",
    steps=[
        ("Compound Inflows to Terminal Year 3", "FW_3 = 400k*(1.08^2) + 500k*(1.08) + 600k = 466,560 + 540,000 + 600,000", f"₱{fw_err128:,.2f}"),
        ("Solve for ERR", f"(1 + ERR)^3 = {fw_err128:,} / 1,000,000 = 1.606560", f"ERR = {err128:.2f}%")
    ],
    final_ans=f"ERR = {err128:.2f}%",
    choices=[
        f"A. ERR = {err128:.2f}%",
        f"B. ERR = 21.40%",
        f"C. ERR = 14.80%",
        f"D. ERR = 19.50%"
    ],
    correct_letter="A",
    shortcut="FW = 400k*1.08^2 + 500k*1.08 + 600k = 1,606,560. ERR = (1,606,560 / 1M)^(1/3) - 1 = 17.12%.",
    keystrokes=["( ( 400000 * 1.08 ^ 2 + 500000 * 1.08 + 600000 ) / 1000000 ) ^ ( 1 / 3 ) - 1 ="],
    cal_disp="0.171206",
    cal_tip="ERR removes the unrealistic internal reinvestment assumption of IRR by explicitly compounding intermediate cash at a known market rate.",
    trap="Compounding Year 3 cash flow: cash received at the end of Year 3 earns zero interest because it is already at the terminal horizon.",
    week_day=5,
    diff="Board Exam Standard"
)
problems_121_135.append(p128_obj)

# ==========================================
# Problem 129: Equivalent Uniform Annual Cost (EUAC)
# ==========================================
# Pump A: Cost = 300,000, Life = 3 yrs, Annual O&M = 50,000, SV = 30,000, i = 10%
# CR_A = (300k - 30k)*(A/P, 10%, 3) + 30k*0.10 = 270k*(0.402115) + 3k = 108,571 + 3,000 = 111,571
# EUAC_A = 111,571 + 50,000 = 161,571
# Pump B: Cost = 600,000, Life = 6 yrs, Annual O&M = 30,000, SV = 60,000, i = 10%
# CR_B = (600k - 60k)*(A/P, 10%, 6) + 60k*0.10 = 540k*(0.229607) + 6k = 123,988 + 6,000 = 129,988
# EUAC_B = 129,988 + 30,000 = 159,988
euac_a129 = (300000 - 30000)*(0.10/(1 - 1.10**(-3))) + 30000*0.10 + 50000 # 161,571.01
euac_b129 = (600000 - 60000)*(0.10/(1 - 1.10**(-6))) + 60000*0.10 + 30000 # 159,987.98
p129_obj = make_problem(
    num=129,
    category="Capital Budgeting & Evaluation",
    topic="Unequal Lives: Equivalent Uniform Annual Cost (EUAC) Comparison",
    question="A water district evaluates two centrifugal pump models to handle water transfer (i = 10%):\n- Model A: First Cost ₱300,000; Salvage ₱30,000; Life 3 yrs; Annual O&M ₱50,000\n- Model B: First Cost ₱600,000; Salvage ₱60,000; Life 6 yrs; Annual O&M ₱30,000\nCalculate the EUAC for both models and determine the more economical choice.",
    given=[
        ("Model A", "Cost = ₱300k, SV = ₱30k, Life = 3 yrs, O&M = ₱50k", "Short life"),
        ("Model B", "Cost = ₱600k, SV = ₱60k, Life = 6 yrs, O&M = ₱30k", "Long life"),
        ("MARR", "Interest Rate", "10%")
    ],
    formula="CR = (P - S)(A/P, i, n) + S*i ; EUAC = CR + Annual O&M",
    steps=[
        ("Model A EUAC", f"CR_A = (300k - 30k)*(A/P, 10%, 3) + 30k(0.10) = ₱111,571.01. EUAC_A = ₱111,571.01 + ₱50,000", f"₱{euac_a129:,.2f}"),
        ("Model B EUAC", f"CR_B = (600k - 60k)*(A/P, 10%, 6) + 60k(0.10) = ₱129,987.98. EUAC_B = ₱129,987.98 + ₱30,000", f"₱{euac_b129:,.2f}"),
        ("Decision", f"Model B has lower annual cost by ₱{euac_a129 - euac_b129:,.2f}/yr. Select Model B.", "Select Model B")
    ],
    final_ans=f"EUAC_A = {format_peso(euac_a129)}, EUAC_B = {format_peso(euac_b129)}; Select Model B",
    choices=[
        f"A. EUAC_A = {format_peso(euac_a129)}, EUAC_B = {format_peso(euac_b129)}; Select Model B",
        f"B. EUAC_A = ₱150,000.00, EUAC_B = ₱165,000.00; Select Model A",
        f"C. EUAC_A = ₱161,571.01, EUAC_B = ₱172,400.00; Select Model A",
        f"D. EUAC_A = ₱175,000.00, EUAC_B = ₱159,987.98; Select Model B"
    ],
    correct_letter="A",
    shortcut="Model A CR = 270k*(0.1/(1-1.1^-3)) + 3k = 111.57k -> EUAC = 161.57k. Model B CR = 540k*(0.1/(1-1.1^-6)) + 6k = 129.99k -> EUAC = 159.99k. Choose Model B.",
    keystrokes=["270000 * ( 0.10 / ( 1 - 1.10 ^ -3 ) ) + 3000 + 50000 =", "540000 * ( 0.10 / ( 1 - 1.10 ^ -6 ) ) + 6000 + 30000 ="],
    cal_disp="159987.98",
    cal_tip="The EUAC method compares alternatives with unequal service lives directly without expanding to the Least Common Multiple (LCM) of lives.",
    trap="Comparing Present Worth directly without using LCM (which would incorrectly penalize Model B simply for having a longer horizon).",
    week_day=5,
    diff="Board Exam Standard"
)
problems_121_135.append(p129_obj)

# ==========================================
# Problem 130: Minimum Attractive Rate of Return (WACC)
# ==========================================
# Capital structure: 40% Debt at 8% interest, tax rate = 30%.
# 60% Equity at 15% required return.
# After-tax cost of debt = 8% * (1 - 0.30) = 5.60%
# WACC = 0.40 * 5.60% + 0.60 * 15.00% = 2.24% + 9.00% = 11.24%
wacc130 = 0.40 * (8.0 * (1 - 0.30)) + 0.60 * 15.0 # 11.24%
p130_obj = make_problem(
    num=130,
    category="Capital Budgeting & Evaluation",
    topic="Cost of Capital: Weighted Average Cost of Capital (WACC)",
    question="An engineering corporation finances capital projects using 40% long-term bank debt and 60% common equity. The interest rate on debt is 8.0% per annum, and the company is subject to a 30% corporate income tax rate. The cost of equity capital is 15.0%. Compute the firm's Weighted Average Cost of Capital (WACC), which serves as its benchmark MARR.",
    given=[
        ("Debt Ratio w_d", "Proportion of Debt", "40%"),
        ("Equity Ratio w_e", "Proportion of Equity", "60%"),
        ("Pre-Tax Cost of Debt r_d", "Borrowing Rate", "8.0%"),
        ("Corporate Tax Rate t", "Income Tax", "30%"),
        ("Cost of Equity r_e", "Required Equity Return", "15.0%")
    ],
    formula="After-Tax Cost of Debt = r_d * (1 - t) ; WACC = (w_d * r_d * (1 - t)) + (w_e * r_e)",
    steps=[
        ("After-Tax Cost of Debt", "r_d(after-tax) = 8.0% * (1 - 0.30)", "5.60%"),
        ("Equity Contribution", "w_e * r_e = 0.60 * 15.0%", "9.00%"),
        ("Debt Contribution", "w_d * r_d(after-tax) = 0.40 * 5.60%", "2.24%"),
        ("Compute WACC", f"WACC = 2.24% + 9.00%", f"{wacc130:.2f}%")
    ],
    final_ans=f"WACC = {wacc130:.2f}%",
    choices=[
        f"A. WACC = {wacc130:.2f}%",
        f"B. WACC = 12.20%",
        f"C. WACC = 10.50%",
        f"D. WACC = 13.80%"
    ],
    correct_letter="A",
    shortcut="WACC = 0.40 * 8% * 0.70 + 0.60 * 15% = 2.24% + 9.00% = 11.24%.",
    keystrokes=["0.40 * 8 * ( 1 - 0.30 ) + 0.60 * 15 ="],
    cal_disp="11.24",
    cal_tip="Interest paid on corporate debt is tax-deductible, creating a debt tax shield that lowers the effective cost of debt financing.",
    trap="Failing to deduct taxes from the cost of debt (giving 0.4*8 + 0.6*15 = 12.20%).",
    week_day=5,
    diff="Moderate"
)
problems_121_135.append(p130_obj)

# ==========================================
# Problem 131: Bond Valuation
# ==========================================
# Par = 10,000, Coupon = 8% payable semi-annually (C = 400), Maturity = 10 yrs (20 semi-periods)
# Desired Yield = 10% compounded semi-annually (r = 5% per period)
# Price = 400 * (P/A, 5%, 20) + 10,000 * (P/F, 5%, 20)
# (P/A, 5%, 20) = (1 - 1.05^-20)/0.05 = 12.462210
# (P/F, 5%, 20) = 1.05^-20 = 0.376889
# Price = 400 * 12.462210 + 10,000 * 0.376889 = 4,984.88 + 3,768.89 = 8,753.78
p131_price = 400 * ((1 - 1.05**(-20)) / 0.05) + 10000 * (1.05**(-20)) # 8,753.78
p131_obj = make_problem(
    num=131,
    category="Bonds & Securities",
    topic="Bond Pricing: Discount Bond Value with Semi-Annual Coupons",
    question="A ₱10,000, 8% bond pays interest semi-annually and matures at par in 10 years. An investor desires to earn a yield of 10% compounded semi-annually. What price should the investor pay for the bond today?",
    given=[
        ("Par Value F", "Face Value at Redemption", "₱10,000"),
        ("Coupon Rate r", "8% per year payable semi-annually", "Semi-annual coupon I = ₱400"),
        ("Yield to Maturity i", "10% compounded semi-annually", "Semi-annual yield i = 5%"),
        ("Number of Periods n", "10 years * 2", "20 semi-annual periods")
    ],
    formula="P = I * (P/A, i, n) + F * (P/F, i, n)",
    steps=[
        ("Semi-Annual Coupon Payment", "I = ₱10,000 * (0.08 / 2)", "₱400.00"),
        ("Present Value of Coupon Stream", "PW_Coupons = ₱400 * [(1 - 1.05^-20) / 0.05] = ₱400 * 12.46221", "₱4,984.88"),
        ("Present Value of Par Redemption", "PW_Par = ₱10,000 * (1.05^-20) = ₱10,000 * 0.37689", "₱3,768.89"),
        ("Total Purchase Price", f"Price = ₱4,984.88 + ₱3,768.89", f"₱{p131_price:,.2f}")
    ],
    final_ans=format_peso(p131_price),
    choices=[
        f"A. {format_peso(p131_price)}",
        f"B. ₱9,240.50",
        f"C. ₱8,125.00",
        f"D. ₱10,000.00"
    ],
    correct_letter="A",
    shortcut="Price = 400*(1 - 1.05^-20)/0.05 + 10000*1.05^-20 = ₱8,753.78.",
    keystrokes=["400 * ( 1 - 1.05 ^ -20 ) / 0.05 + 10000 * 1.05 ^ -20 ="],
    cal_disp="8753.7787",
    cal_tip="Because the market yield (10%) exceeds the bond coupon rate (8%), the bond must sell at a discount (below par).",
    trap="Forgetting to divide both coupon rate and yield by 2 for semi-annual compounding.",
    week_day=6,
    diff="Board Exam Standard"
)
problems_121_135.append(p131_obj)

# ==========================================
# Problem 132: Premium Bond Valuation
# ==========================================
# Par = 10,000, Coupon = 12% quarterly (C = 300), Maturity = 5 yrs (20 quarters)
# Yield = 8% compounded quarterly (r = 2% per quarter)
# Price = 300 * (P/A, 2%, 20) + 10,000 * (P/F, 2%, 20)
# (P/A, 2%, 20) = (1 - 1.02^-20)/0.02 = 16.351433
# (P/F, 2%, 20) = 1.02^-20 = 0.672971
# Price = 300 * 16.351433 + 10,000 * 0.672971 = 4,905.43 + 6,729.71 = 11,635.14
p132_price = 300 * ((1 - 1.02**(-20)) / 0.02) + 10000 * (1.02**(-20)) # 11,635.14
p132_obj = make_problem(
    num=132,
    category="Bonds & Securities",
    topic="Bond Pricing: Premium Bond Value with Quarterly Coupons",
    question="A corporate debenture with a par value of ₱10,000 bears a coupon rate of 12% payable quarterly. It matures in 5 years. If an institutional fund requires a yield of 8% compounded quarterly, calculate the premium purchase price.",
    given=[
        ("Par Value F", "Redemption Value", "₱10,000"),
        ("Quarterly Coupon", "12% / 4 = 3%", "I = ₱300 per quarter"),
        ("Quarterly Yield", "8% / 4 = 2%", "i = 2% per quarter"),
        ("Number of Quarters", "5 years * 4", "20 quarters")
    ],
    formula="P = I * (P/A, i, n) + F * (P/F, i, n)",
    steps=[
        ("Quarterly Coupon", "I = ₱10,000 * 0.03", "₱300.00"),
        ("Present Value of Coupons", "PW_Coupons = ₱300 * [(1 - 1.02^-20) / 0.02]", "₱4,905.43"),
        ("Present Value of Par", "PW_Par = ₱10,000 * (1.02^-20)", "₱6,729.71"),
        ("Total Purchase Price", f"Price = ₱4,905.43 + ₱6,729.71", f"₱{p132_price:,.2f}")
    ],
    final_ans=format_peso(p132_price),
    choices=[
        f"A. {format_peso(p132_price)}",
        f"B. ₱10,850.20",
        f"C. ₱12,140.00",
        f"D. ₱11,200.75"
    ],
    correct_letter="A",
    shortcut="Price = 300*(1 - 1.02^-20)/0.02 + 10000*1.02^-20 = ₱11,635.14.",
    keystrokes=["300 * ( 1 - 1.02 ^ -20 ) / 0.02 + 10000 * 1.02 ^ -20 ="],
    cal_disp="11635.1433",
    cal_tip="When coupon rate (12%) exceeds market yield (8%), the bond trades at a PREMIUM above par.",
    trap="Using annual periods (5) instead of quarterly periods (20).",
    week_day=6,
    diff="Moderate"
)
problems_121_135.append(p132_obj)

# ==========================================
# Problem 133: Current Yield vs Yield to Maturity
# ==========================================
# Bond selling at ₱9,200, Par = ₱10,000, Coupon = 7% annual (₱700), Life = 8 yrs
# Current Yield = Coupon / Current Price = 700 / 9,200 = 7.61%
# Approximate YTM (Bond Salesman's Formula):
# YTM_approx = [ I + (F - P)/n ] / [ (F + 2P)/3 ] = [ 700 + (10000 - 9200)/8 ] / [ (10000 + 18400)/3 ]
# = [ 700 + 100 ] / [ 28400 / 3 ] = 800 / 9466.67 = 8.45%
curr_yd133 = (700 / 9200) * 100 # 7.61%
ytm_approx133 = (700 + (10000 - 9200)/8) / ((10000 + 2*9200)/3) * 100 # 8.45%
p133_obj = make_problem(
    num=133,
    category="Bonds & Securities",
    topic="Bond Yield Metrics: Current Yield vs Yield to Maturity (YTM)",
    question="A ₱10,000 par value bond with an annual coupon rate of 7% currently trades in the market for ₱9,200. It matures in 8 years. Calculate the Current Yield and the approximate Yield to Maturity (YTM) using the standard bond salesman's formula.",
    given=[
        ("Par Value F", "Face Value", "₱10,000"),
        ("Market Price P", "Current Price", "₱9,200"),
        ("Annual Coupon I", "7% of Par", "₱700"),
        ("Years to Maturity n", "Remaining Horizon", "8 years")
    ],
    formula="Current Yield = I / P ; Approximate YTM = [ I + (F - P)/n ] / [ (F + 2P) / 3 ]",
    steps=[
        ("Current Yield", "CY = ₱700 / ₱9,200", f"{curr_yd133:.2f}%"),
        ("Numerator of YTM", "700 + (10,000 - 9,200)/8 = 700 + 100", "₱800.00"),
        ("Denominator of YTM", "(10,000 + 2 * 9,200)/3 = 28,400 / 3", "₱9,466.67"),
        ("Approximate YTM", "YTM = ₱800 / ₱9,466.67", f"{ytm_approx133:.2f}%")
    ],
    final_ans=f"Current Yield = {curr_yd133:.2f}%, Approximate YTM = {ytm_approx133:.2f}%",
    choices=[
        f"A. Current Yield = {curr_yd133:.2f}%, Approximate YTM = {ytm_approx133:.2f}%",
        f"B. Current Yield = 7.00%, Approximate YTM = 8.00%",
        f"C. Current Yield = 7.61%, Approximate YTM = 7.61%",
        f"D. Current Yield = 8.15%, Approximate YTM = 8.85%"
    ],
    correct_letter="A",
    shortcut="Current Yield = 700/9200 = 7.61%. YTM = [700 + 800/8] / [(10000 + 18400)/3] = 800 / 9466.7 = 8.45%.",
    keystrokes=["700 / 9200 =", "( 700 + ( 10000 - 9200 ) / 8 ) / ( ( 10000 + 2 * 9200 ) / 3 ) ="],
    cal_disp="0.084507",
    cal_tip="Current yield ignores capital gains realized when the discount bond matures at par; YTM incorporates both coupon income and capital appreciation.",
    trap="Confusing Current Yield with Yield to Maturity.",
    week_day=6,
    diff="Moderate"
)
problems_121_135.append(p133_obj)

# ==========================================
# Problem 134: Zero Coupon Bond
# ==========================================
# Face value = 100,000, Maturity = 10 yrs, desired yield = 9% compounded semi-annually (4.5% per period, 20 periods)
# Price = 100,000 * (1.045)^-20 = 100,000 * 0.414643 = 41,464.29
price134 = 100000 * (1.045**(-20)) # 41,464.29
p134_obj = make_problem(
    num=134,
    category="Bonds & Securities",
    topic="Zero-Coupon Bonds: Present Market Value",
    question="A zero-coupon treasury bond with a face value of ₱100,000 matures in 10 years. If prevailing interest rates for comparable risks are 9.0% compounded semi-annually, what is the fair market value of the bond today?",
    given=[
        ("Face Value F", "Maturity Payoff", "₱100,000"),
        ("Yield Rate i", "9.0% / 2", "4.5% per semi-annual period"),
        ("Number of Periods n", "10 years * 2", "20 semi-annual periods")
    ],
    formula="P = F * (1 + i)^(-n)",
    steps=[
        ("Identify Zero-Coupon Cash Flow", "There are no intermediate coupon payments (I = 0).", "Lump sum only"),
        ("Discount Face Value", f"P = 100,000 * (1.045^-20)", f"₱{price134:,.2f}")
    ],
    final_ans=format_peso(price134),
    choices=[
        f"A. {format_peso(price134)}",
        f"B. ₱45,200.00",
        f"C. ₱38,550.00",
        f"D. ₱50,830.00"
    ],
    correct_letter="A",
    shortcut="Price = 100,000 * 1.045^-20 = ₱41,464.29.",
    keystrokes=["100000 * ( 1 + 0.09 / 2 ) ^ -20 ="],
    cal_disp="41464.286",
    cal_tip="Zero coupon bonds sell at a steep discount, with the entire return coming from accretion between purchase price and face value.",
    trap="Using annual compounding (10 periods at 9%) when semi-annual compounding is specified.",
    week_day=6,
    diff="Foundation"
)
problems_121_135.append(p134_obj)

# ==========================================
# Problem 135: Bond Redemption at a Premium
# ==========================================
# Par = 10,000, Redeemed at 105% (C = 10,500), Coupon = 10% annual (₱1,000), Maturity = 15 yrs, Yield = 8%
# Price = 1,000 * (P/A, 8%, 15) + 10,500 * (P/F, 8%, 15)
# (P/A, 8%, 15) = (1 - 1.08^-15)/0.08 = 8.559479
# (P/F, 8%, 15) = 1.08^-15 = 0.315242
# Price = 1,000 * 8.559479 + 10,500 * 0.315242 = 8,559.48 + 3,310.04 = 11,869.52
price135 = 1000 * ((1 - 1.08**(-15)) / 0.08) + 10500 * (1.08**(-15)) # 11,869.52
p135_obj = make_problem(
    num=135,
    category="Bonds & Securities",
    topic="Special Bond Features: Bond Redemption at a Premium",
    question="A ₱10,000, 10% annual bond matures in 15 years and is redeemable at 105% of par value. What should be the selling price if the required yield is 8% per annum?",
    given=[
        ("Par Value", "Base for Coupon Payments", "₱10,000"),
        ("Redemption Value C", "105% of Par", "₱10,500"),
        ("Annual Coupon I", "10% of ₱10,000", "₱1,000"),
        ("Maturity n", "Duration", "15 years"),
        ("Yield i", "Required Rate of Return", "8%")
    ],
    formula="P = I * (P/A, i, n) + C * (P/F, i, n)",
    steps=[
        ("Coupon Payment", "I = 10% * ₱10,000", "₱1,000 per year"),
        ("Redemption Lump Sum", "C = 1.05 * ₱10,000", "₱10,500"),
        ("Present Value of Coupons", "PW_Coupons = ₱1,000 * [(1 - 1.08^-15) / 0.08]", "₱8,559.48"),
        ("Present Value of Redemption", "PW_Redemption = ₱10,500 * (1.08^-15)", "₱3,310.04"),
        ("Total Purchase Price", f"Price = ₱8,559.48 + ₱3,310.04", f"₱{price135:,.2f}")
    ],
    final_ans=format_peso(price135),
    choices=[
        f"A. {format_peso(price135)}",
        f"B. ₱11,540.00",
        f"C. ₱12,250.00",
        f"D. ₱10,870.00"
    ],
    correct_letter="A",
    shortcut="Price = 1,000*(1 - 1.08^-15)/0.08 + 10,500*1.08^-15 = ₱11,869.52.",
    keystrokes=["1000 * ( 1 - 1.08 ^ -15 ) / 0.08 + 10500 * 1.08 ^ -15 ="],
    cal_disp="11869.5179",
    cal_tip="Pay careful attention: the coupon rate (10%) applies to the PAR value (₱10,000), while the redemption payment is 105% (₱10,500).",
    trap="Applying 10% coupon rate to ₱10,500 instead of par value ₱10,000.",
    week_day=6,
    diff="Board Exam Standard"
)
problems_121_135.append(p135_obj)

print("Batch 121-135 complete.")
