# -*- coding: utf-8 -*-
"""Problems 136 to 155: Capitalized Cost, Annual Worth & Life Cycle Economics"""
import math
from generate_problems_helper import make_problem, format_peso, format_peso_int

problems_136_155 = []

# ==========================================
# Problem 136: Perpetual Bond (Consols)
# ==========================================
# Consol pays ₱8,000 annually forever. Yield = 6.4%. Price = 8000 / 0.064 = 125,000.
p136_price = 8000 / 0.064 # 125,000
p136_obj = make_problem(
    num=136,
    category="Bonds & Securities",
    topic="Perpetual Bonds: Value of a Consol with No Maturity Date",
    question="A sovereign perpetuity (consol) pays an annual interest coupon of ₱8,000 forever with no maturity date. If the required rate of return for perpetual sovereign debt is 6.40%, what is the present value of the bond?",
    given=[
        ("Perpetual Coupon I", "Annual Cash Inflow", "₱8,000 forever"),
        ("Yield Rate i", "Required Rate of Return", "6.40%")
    ],
    formula="P = I / i",
    steps=[
        ("Perpetuity Capitalization", "P = ₱8,000 / 0.064", f"₱{p136_price:,.2f}")
    ],
    final_ans=format_peso(p136_price),
    choices=[
        f"A. {format_peso(p136_price)}",
        f"B. ₱100,000.00",
        f"C. ₱135,000.00",
        f"D. ₱118,500.00"
    ],
    correct_letter="A",
    shortcut="P = 8,000 / 0.064 = ₱125,000.",
    keystrokes=["8000 / 0.064 ="],
    cal_disp="125000",
    cal_tip="Perpetuities have no principal repayment term (n = infinity); the entire value is the capitalized coupon flow.",
    trap="Attempting to use a 20-year or 30-year annuity formula.",
    week_day=6,
    diff="Foundation"
)
problems_136_155.append(p136_obj)

# ==========================================
# Problem 137: Tax-Equivalent Yield Comparison
# ==========================================
# Municipal bond pays 5.6% tax-free. Corporate bond is taxable at 30%.
# Tax-equivalent yield = 5.6% / (1 - 0.30) = 8.00%.
p137_tey = 5.6 / (1 - 0.30) # 8.00%
p137_obj = make_problem(
    num=137,
    category="Bonds & Securities",
    topic="Comparative Securities: Tax-Equivalent Yield of Tax-Exempt Bonds",
    question="A tax-exempt municipal development bond offers an annual return of 5.60%. An investor is subject to a 30% combined income tax rate on corporate securities. What nominal yield must a taxable corporate bond offer to be economically equivalent to the municipal bond?",
    given=[
        ("Municipal Yield r_muni", "Tax-Exempt Yield", "5.60%"),
        ("Marginal Tax Rate t", "Income Tax", "30%")
    ],
    formula="Tax-Equivalent Yield = r_muni / (1 - t)",
    steps=[
        ("Compute Tax-Equivalent Yield", "r_corp = 5.60% / (1 - 0.30) = 5.60% / 0.70", f"{p137_tey:.2f}%")
    ],
    final_ans=f"{p137_tey:.2f}%",
    choices=[
        f"A. {p137_tey:.2f}%",
        f"B. 7.28%",
        f"C. 6.85%",
        f"D. 8.40%"
    ],
    correct_letter="A",
    shortcut="5.6% / 0.70 = 8.00%.",
    keystrokes=["5.60 / ( 1 - 0.30 ) ="],
    cal_disp="8",
    cal_tip="Investors keep only (1 - t) of taxable bond returns; dividing the tax-free yield by (1 - t) grossing it up for comparison.",
    trap="Multiplying by (1 - t) which yields 3.92%.",
    week_day=6,
    diff="Moderate"
)
problems_136_155.append(p137_obj)

# ==========================================
# Problem 138: Callable Bond: Yield to Call (YTC)
# ==========================================
# Par = 10,000, 9% annual coupon (₱900), Price = 10,400.
# Callable in 5 years at 103% (₱10,300).
# 10,400 = 900 * (P/A, YTC, 5) + 10,300 * (P/F, YTC, 5)
# Let's solve: YTC = approx 8.35%
p138_obj = make_problem(
    num=138,
    category="Bonds & Securities",
    topic="Callable Bonds: Yield to Call (YTC)",
    question="A ₱10,000, 9% annual bond currently sells at a premium for ₱10,400. The issuer has the right to call the bond in 5 years at a call premium of 103% (₱10,300). Compute the Yield to Call (YTC).",
    given=[
        ("Current Price P", "Market Cost", "₱10,400"),
        ("Annual Coupon I", "9% of ₱10,000", "₱900"),
        ("Call Price C", "103% of Par", "₱10,300"),
        ("Call Horizon n", "Time to Call Date", "5 years")
    ],
    formula="P = I * (P/A, YTC, n) + C * (P/F, YTC, n)",
    steps=[
        ("Approximate YTC Formula", "YTC_approx = [ 900 + (10,300 - 10,400)/5 ] / [ (10,300 + 2*10,400)/3 ] = [ 900 - 20 ] / [ 31,100 / 3 ] = 880 / 10,366.67", "8.49%"),
        ("Exact Solution via Calculator Solver", "10,400 = 900*(1 - (1+i)^-5)/i + 10,300*(1+i)^-5", "8.35%")
    ],
    final_ans="YTC = 8.35%",
    choices=[
        "A. YTC = 8.35%",
        "B. YTC = 9.00%",
        "C. YTC = 7.80%",
        "D. YTC = 8.85%"
    ],
    correct_letter="A",
    shortcut="SOLVE on Casio fx-991ES: -10400 + 900*(1 - (1+X)^-5)/X + 10300*(1+X)^-5 = 0 => X = 0.0835 = 8.35%.",
    keystrokes=["- 10400 + 900 * ( 1 - ( 1 + X ) ^ -5 ) / X + 10300 * ( 1 + X ) ^ -5 [ALPHA] [=] 0", "[SHIFT] [SOLVE] 0.08 [=]"],
    cal_disp="X = 0.08352",
    cal_tip="For premium bonds, YTC is usually lower than YTM, so conservative bond investors evaluate Yield to Worst (YTW).",
    trap="Using Par value (₱10,000) at Year 5 instead of the call price (₱10,300).",
    week_day=6,
    diff="Advanced"
)
problems_136_155.append(p138_obj)

# ==========================================
# Problem 139: Bond Duration & Price Sensitivity
# ==========================================
# Modified duration D* = 6.5 years. Current price = ₱10,000. Interest rates rise by 75 bps (+0.75%).
# % change in price = -D* * Delta y = -6.5 * 0.0075 = -0.04875 (-4.88%)
# Price change = -487.50 => New price = ₱9,512.50
p139_new_p = 10000 * (1 - 6.5 * 0.0075) # 9,512.50
p139_obj = make_problem(
    num=139,
    category="Bonds & Securities",
    topic="Bond Volatility: Modified Duration and Price Sensitivity",
    question=f"A corporate bond portfolio is valued at ₱10,000,000 with an effective Modified Duration of 6.50 years. If market interest rates increase by 75 basis points (+0.75%), what is the approximate percentage change in portfolio value and the estimated new portfolio market value?",
    given=[
        ("Portfolio Value", "Current Worth", "₱10,000,000"),
        ("Modified Duration D*", "Interest Rate Sensitivity", "6.50 years"),
        ("Yield Shock Delta y", "Interest Rate Increase", "+0.75% = +0.0075")
    ],
    formula="Delta P / P = -D* * Delta y ; New Price = P * (1 + Delta P / P)",
    steps=[
        ("Percentage Price Change", "Delta P / P = -6.50 * 0.0075 = -0.04875", "-4.875%"),
        ("Dollar Change in Value", "Loss = ₱10,000,000 * -0.04875", "-₱487,500.00"),
        ("New Portfolio Value", "New Value = ₱10,000,000 - ₱487,500", "₱9,512,500.00")
    ],
    final_ans="-4.88% (New Value = ₱9,512,500.00)",
    choices=[
        "A. -4.88% (New Value = ₱9,512,500.00)",
        "B. +4.88% (New Value = ₱10,487,500.00)",
        "C. -6.50% (New Value = ₱9,350,000.00)",
        "D. -3.25% (New Value = ₱9,675,000.00)"
    ],
    correct_letter="A",
    shortcut="Change = -6.5 * 0.75% = -4.875%. New value = 10M * (1 - 0.04875) = ₱9,512,500.",
    keystrokes=["10000000 * ( 1 - 6.50 * 0.0075 ) ="],
    cal_disp="9512500",
    cal_tip="Duration measures price sensitivity: bond prices ALWAYS move inversely to market interest rates.",
    trap="Forgetting the negative sign in the duration relationship.",
    week_day=6,
    diff="Moderate"
)
problems_136_155.append(p139_obj)

# ==========================================
# Problem 140: TIPS / Inflation-Indexed Bond
# ==========================================
# Par = 100,000. Real coupon = 3% semi-annual (1.5%). Inflation in year 1 is 4% (2% semi-annual).
# Adjusted principal after 6 months = 100,000 * 1.02 = 102,000. Coupon 1 = 102,000 * 0.015 = 1,530.
# Adjusted principal after 12 months = 102,000 * 1.02 = 104,040. Coupon 2 = 104,040 * 0.015 = 1,560.60.
# Total year 1 coupons = 1,530 + 1,560.60 = 3,090.60. End of Year 1 Principal = ₱104,040.
p140_obj = make_problem(
    num=140,
    category="Bonds & Securities",
    topic="Inflation-Indexed Securities: Principal Accretion and Semi-Annual Coupons",
    question="An investor holds a ₱100,000 inflation-indexed bond paying a real coupon of 3.0% per annum (semi-annual payments of 1.5%). Inflation during the first year is 4.0% per annum (2.0% per semi-annual period). What is the inflation-adjusted principal and the total coupon income received during Year 1?",
    given=[
        ("Initial Par Value", "Base Principal", "₱100,000"),
        ("Real Coupon Rate", "Semi-Annual Real Rate", "1.5% per period"),
        ("Semi-Annual Inflation", "Index Ratio Adjustment", "2.0% per period")
    ],
    formula="Adjusted Principal_t = Principal_{t-1} * (1 + inflation_t) ; Coupon_t = Adjusted Principal_t * real_rate",
    steps=[
        ("Period 1 Adjustment (Month 6)", "Principal_1 = ₱100,000 * 1.02 = ₱102,000; Coupon_1 = ₱102,000 * 0.015", "Coupon_1 = ₱1,530.00"),
        ("Period 2 Adjustment (Month 12)", "Principal_2 = ₱102,000 * 1.02 = ₱104,040; Coupon_2 = ₱104,040 * 0.015", "Coupon_2 = ₱1,560.60"),
        ("Total Income and Final Principal", "Total Coupons = ₱1,530 + ₱1,560.60 = ₱3,090.60; End Principal = ₱104,040.00", "Complete Year 1 Status")
    ],
    final_ans="Principal = ₱104,040.00, Coupons = ₱3,090.60",
    choices=[
        "A. Principal = ₱104,040.00, Coupons = ₱3,090.60",
        "B. Principal = ₱104,000.00, Coupons = ₱3,000.00",
        "C. Principal = ₱100,000.00, Coupons = ₱7,000.00",
        "D. Principal = ₱102,000.00, Coupons = ₱3,060.00"
    ],
    correct_letter="A",
    shortcut="Principal after 2 semi-periods = 100,000 * 1.02^2 = ₱104,040. Coupons = 102k*0.015 + 104,040*0.015 = ₱3,090.60.",
    keystrokes=["100000 * 1.02 ^ 2 =", "100000 * 1.02 * 0.015 + 100000 * 1.02 ^ 2 * 0.015 ="],
    cal_disp="3090.6",
    cal_tip="In TIPS, the coupon rate is applied to the inflation-accreted principal, protecting both interest and maturity principal against purchasing power loss.",
    trap="Applying the coupon rate to the unadjusted ₱100,000 par value.",
    week_day=6,
    diff="Board Exam Standard"
)
problems_136_155.append(p140_obj)

# ==========================================
# Problem 141: Capitalized Cost of Perpetual Asset
# ==========================================
# Initial cost = 12,000,000, annual maintenance = 450,000, i = 9%.
# CC = C_0 + O&M / i = 12,000,000 + 450,000 / 0.09 = 12,000,000 + 5,000,000 = 17,000,000.
p141_cc = 12000000 + 450000 / 0.09 # 17,000,000
p141_obj = make_problem(
    num=141,
    category="Capital Budgeting & Evaluation",
    topic="Capitalized Cost: Perpetual Project with Annual Maintenance",
    question=f"A municipal reinforced concrete drainage canal has an initial construction cost of ₱12,000,000. Annual cleaning and inspection costs are estimated at ₱450,000 perpetually. If money is worth 9% per annum, what is the capitalized cost of the drainage canal?",
    given=[
        ("Initial Construction Cost C_0", "First Cost", "₱12,000,000"),
        ("Annual Perpetual Maintenance A", "O&M Cost", "₱450,000/year"),
        ("Interest Rate i", "Perpetual Rate of Return", "9%")
    ],
    formula="Capitalized Cost (CC) = C_0 + A / i",
    steps=[
        ("Present Value of Perpetual Maintenance", "PV_perpetual = ₱450,000 / 0.09", "₱5,000,000.00"),
        ("Total Capitalized Cost", "CC = ₱12,000,000 + ₱5,000,000", f"₱{p141_cc:,.2f}")
    ],
    final_ans=format_peso(p141_cc),
    choices=[
        f"A. {format_peso(p141_cc)}",
        f"B. ₱16,500,000.00",
        f"C. ₱18,200,000.00",
        f"D. ₱15,000,000.00"
    ],
    correct_letter="A",
    shortcut="CC = 12M + 450k / 0.09 = 12M + 5M = ₱17,000,000.",
    keystrokes=["12000000 + 450000 / 0.09 ="],
    cal_disp="17000000",
    cal_tip="Capitalized cost is the present worth of an infinite cash stream required to construct and maintain an asset indefinitely.",
    trap="Multiplying annual cost by a finite number of years (like 20 or 50 years) instead of dividing by i.",
    week_day=6,
    diff="Foundation"
)
problems_136_155.append(p141_obj)

# ==========================================
# Problem 142: Capitalized Cost with Periodic Replacement
# ==========================================
# Bridge: Initial cost = 5,000,000. Annual maintenance = 120,000.
# Deck replacement every 10 years cost = 1,500,000.
# i = 8%.
# CC = C_0 + A/i + R / ((1+i)^k - 1)
# 1,500,000 / (1.08^10 - 1) = 1,500,000 / 1.158925 = 1,294,299.85
# A/i = 120,000 / 0.08 = 1,500,000
# Total CC = 5,000,000 + 1,500,000 + 1,294,299.85 = 7,794,299.85
p142_repl = 1500000 / (1.08**10 - 1) # 1,294,303.48
p142_cc = 5000000 + 120000 / 0.08 + p142_repl # 7,794,303.48
p142_obj = make_problem(
    num=142,
    category="Capital Budgeting & Evaluation",
    topic="Capitalized Cost: Asset with Periodic Major Overhauls",
    question="A steel highway bridge has an initial construction cost of ₱5,000,000 and requires annual routine maintenance of ₱120,000. In addition, the asphalt wearing course and deck must be resurfaced every 10 years at a cost of ₱1,500,000 perpetually. If the interest rate is 8% compounded annually, calculate the total capitalized cost of the bridge.",
    given=[
        ("Initial Cost C_0", "First Cost", "₱5,000,000"),
        ("Annual Maintenance A", "Perpetual Routine Cost", "₱120,000/year"),
        ("Periodic Replacement R", "Major Resurfacing Cost", "₱1,500,000 every 10 years"),
        ("Interest Rate i", "Discount Rate", "8%")
    ],
    formula="CC = C_0 + A / i + R / ((1 + i)^k - 1)",
    steps=[
        ("Annual Maintenance Capitalized", "PW_A = ₱120,000 / 0.08", "₱1,500,000.00"),
        ("Periodic Replacement Capitalized", "PW_R = ₱1,500,000 / (1.08^10 - 1) = ₱1,500,000 / 1.158925", f"₱{p142_repl:,.2f}"),
        ("Total Capitalized Cost", f"CC = ₱5,000,000 + ₱1,500,000 + ₱{p142_repl:,.2f}", f"₱{p142_cc:,.2f}")
    ],
    final_ans=format_peso(p142_cc),
    choices=[
        f"A. {format_peso(p142_cc)}",
        f"B. ₱8,250,000.00",
        f"C. ₱7,120,500.00",
        f"D. ₱6,500,000.00"
    ],
    correct_letter="A",
    shortcut="CC = 5M + 120k/0.08 + 1.5M/(1.08^10 - 1) = 5M + 1.5M + 1.294M = ₱7,794,303.48.",
    keystrokes=["5000000 + 120000 / 0.08 + 1500000 / ( 1.08 ^ 10 - 1 ) ="],
    cal_disp="7794303.483",
    cal_tip="The present value of an infinite periodic sum R occurring every k years is R / ((1+i)^k - 1). Memorize this classic PRC board formula!",
    trap="Using R / (k * i) which is invalid.",
    week_day=6,
    diff="Board Exam Standard"
)
problems_136_155.append(p142_obj)

# ==========================================
# Problem 143: Permanent vs Temporary Structure Comparison
# ==========================================
# Concrete bridge (Permanent): First cost = 8,000,000, Annual maintenance = 80,000. CC_1 = 8M + 80k/0.08 = 8M + 1M = ₱9,000,000.
# Timber trestle (Temporary): First cost = 3,000,000, Life = 15 yrs, Annual maintenance = 150,000.
# CC_2 = 3M + 150k/0.08 + 3M / (1.08^15 - 1) = 3M + 1.875M + 3M / 2.172169 = 4.875M + 1,381,108 = ₱6,256,108.
# Difference = 9,000,000 - 6,256,108 = 2,743,892. Timber is cheaper by ₱2,743,892.
cc_conc143 = 8000000 + 80000 / 0.08 # 9,000,000
cc_timb143 = 3000000 + 150000 / 0.08 + 3000000 / (1.08**15 - 1) # 6,256,108.13
diff143 = cc_conc143 - cc_timb143
p143_obj = make_problem(
    num=143,
    category="Capital Budgeting & Evaluation",
    topic="Capitalized Cost Comparison: Permanent vs Renewable Structure",
    question="A railway authority is comparing two bridge designs across a mountain river (i = 8%):\n- Design 1 (Reinforced Concrete): Permanent lifespan, Initial cost ₱8,000,000, Annual maintenance ₱80,000\n- Design 2 (Creosoted Timber Trestle): 15-year life, Initial cost ₱3,000,000, Replaced every 15 years at ₱3,000,000, Annual maintenance ₱150,000\nCompute the capitalized cost of both designs and identify which design is more economical.",
    given=[
        ("Design 1 (Concrete)", "Cost = ₱8.0M, Life = Infinite, Maintenance = ₱80k/yr", "Permanent"),
        ("Design 2 (Timber)", "Cost = ₱3.0M, Life = 15 yrs, Maintenance = ₱150k/yr", "Renewable"),
        ("Interest Rate", "Cost of Capital", "8%")
    ],
    formula="CC_Permanent = C_0 + A/i ; CC_Renewable = C_0 + A/i + C_0 / ((1+i)^n - 1)",
    steps=[
        ("Concrete Capitalized Cost", "CC_1 = ₱8,000,000 + ₱80,000 / 0.08", f"₱{cc_conc143:,.2f}"),
        ("Timber Capitalized Cost", f"CC_2 = ₱3,000,000 + ₱150,000/0.08 + ₱3,000,000/(1.08^15 - 1)", f"₱{cc_timb143:,.2f}"),
        ("Comparison", f"Timber trestle is lower by ₱{diff143:,.2f}", "Timber is more economical")
    ],
    final_ans=f"Concrete CC = {format_peso(cc_conc143)}, Timber CC = {format_peso(cc_timb143)}; Choose Timber",
    choices=[
        f"A. Concrete CC = {format_peso(cc_conc143)}, Timber CC = {format_peso(cc_timb143)}; Choose Timber",
        f"B. Concrete CC = ₱9,000,000.00, Timber CC = ₱10,250,000.00; Choose Concrete",
        f"C. Concrete CC = ₱8,500,000.00, Timber CC = ₱6,800,000.00; Choose Timber",
        f"D. Concrete CC = ₱9,000,000.00, Timber CC = ₱8,450,000.00; Choose Timber"
    ],
    correct_letter="A",
    shortcut="CC1 = 8M + 80k/0.08 = 9M. CC2 = 3M + 150k/0.08 + 3M/(1.08^15 - 1) = 6.256M. Choose Timber.",
    keystrokes=["8000000 + 80000 / 0.08 =", "3000000 + 150000 / 0.08 + 3000000 / ( 1.08 ^ 15 - 1 ) ="],
    cal_disp="6256108.13",
    cal_tip="Even though timber has higher maintenance and must be rebuilt every 15 years, the much lower initial capital cost makes it economically superior at 8% interest.",
    trap="Forgetting the infinite replacement term for the timber bridge.",
    week_day=6,
    diff="Board Exam Standard"
)
problems_136_155.append(p143_obj)

# ==========================================
# Problem 144: Capital Recovery with Return
# ==========================================
# Equipment: First cost = 800,000, Salvage = 100,000, Life = 5 yrs, i = 12%.
# CR = (P - S)(A/P, 12%, 5) + S*i
# (P/A, 12%, 5) = 3.604776 -> (A/P, 12%, 5) = 0.277410
# CR = (800k - 100k)*0.277410 + 100k*0.12 = 700k * 0.277410 + 12,000 = 194,186.78 + 12,000 = 206,186.78
cr144 = (800000 - 100000) * (0.12 / (1 - 1.12**(-5))) + 100000 * 0.12 # 206,186.78
p144_obj = make_problem(
    num=144,
    category="Capital Budgeting & Evaluation",
    topic="Capital Recovery (CR): Sinking Fund & Present Worth Formulas",
    question=f"A piece of testing equipment costs ₱800,000 and has an estimated salvage value of ₱100,000 at the end of its 5-year life. If money is worth 12% per year, determine the exact Capital Recovery (CR) amount required each year to recover the capital with return.",
    given=[
        ("First Cost P", "Capital Expenditure", "₱800,000"),
        ("Salvage Value S", "Terminal Value", "₱100,000"),
        ("Useful Life n", "Duration", "5 years"),
        ("Interest Rate i", "MARR", "12%")
    ],
    formula="CR = (P - S) * (A/P, i, n) + S * i  OR  (P - S) * (A/F, i, n) + P * i",
    steps=[
        ("Compute Annuity Factor (A/P, 12%, 5)", "A/P = 0.12 / (1 - 1.12^-5) = 0.12 / 0.432573", "0.277410"),
        ("Compute Capital Recovery", f"CR = (800,000 - 100,000) * 0.277410 + (100,000 * 0.12) = 700,000 * 0.277410 + 12,000", f"₱{cr144:,.2f}")
    ],
    final_ans=format_peso(cr144),
    choices=[
        f"A. {format_peso(cr144)}",
        f"B. ₱194,186.78",
        f"C. ₱215,400.00",
        f"D. ₱180,000.00"
    ],
    correct_letter="A",
    shortcut="CR = 700k*(0.12/(1-1.12^-5)) + 100k*0.12 = 194,186.78 + 12,000 = ₱206,186.78.",
    keystrokes=["700000 * ( 0.12 / ( 1 - 1.12 ^ -5 ) ) + 100000 * 0.12 ="],
    cal_disp="206186.78",
    cal_tip="Capital recovery represents the equivalent uniform annual cost of owning an asset, combining depreciation recovery with the required interest return.",
    trap="Omitting the S*i term (giving ₱194,186.78).",
    week_day=6,
    diff="Moderate"
)
problems_136_155.append(p144_obj)

# ==========================================
# Problem 145: Lease vs Buy Decision
# ==========================================
# Purchase: Cost = 1,200,000, 5-yr life, SV = 200,000, Annual maintenance = 40,000.
# Lease: Annual lease payment = 290,000 paid at BEGINNING of each year (annuity due), lessor covers maintenance.
# i = 10%.
# PW_Buy = 1,200,000 + 40,000 * (P/A, 10%, 5) - 200,000 * (P/F, 10%, 5)
# = 1.2M + 40k * 3.790787 - 200k * 0.620921 = 1,200,000 + 151,631.48 - 124,184.26 = 1,227,447.22
# PW_Lease = 290,000 * (1 + (P/A, 10%, 4)) = 290,000 * (1 + 3.169865) = 290,000 * 4.169865 = 1,209,260.97
# Difference = 1,227,447.22 - 1,209,260.97 = 18,186.25 -> Lease is cheaper by ₱18,186.25!
pw_buy145 = 1200000 + 40000 * ((1 - 1.10**(-5))/0.10) - 200000 * (1.10**(-5)) # 1,227,447.22
pw_lease145 = 290000 * (1 + ((1 - 1.10**(-4))/0.10)) # 1,209,260.97
diff145 = pw_buy145 - pw_lease145
p145_obj = make_problem(
    num=145,
    category="Capital Budgeting & Evaluation",
    topic="Financing Decisions: Lease vs Buy Net Present Cost",
    question="A survey engineering firm requires a LiDAR terrestrial scanner for a 5-year contract (i = 10%):\n- Option 1 (Buy): Purchase price ₱1,200,000, Annual calibration/maintenance ₱40,000 (end of yr), Salvage value ₱200,000 at end of Year 5\n- Option 2 (Lease): Annual lease payment ₱290,000 payable at the start of each year (Years 0 to 4); all maintenance included by lessor\nDetermine the Present Worth of Cost for both options and recommend the superior alternative.",
    given=[
        ("Option 1 (Buy)", "CapEx = ₱1.2M, O&M = ₱40k/yr, SV = ₱200k", "Ownership"),
        ("Option 2 (Lease)", "₱290k/yr at beginning of year for 5 years", "Annuity due"),
        ("Discount Rate i", "Cost of Capital", "10%")
    ],
    formula="PW_Buy = P + O&M*(P/A, i, n) - SV*(P/F, i, n) ; PW_Lease = Lease * (1 + (P/A, i, n-1))",
    steps=[
        ("Present Cost of Purchase", f"PW_Buy = 1,200,000 + 40,000*(P/A, 10%, 5) - 200,000*(P/F, 10%, 5)", f"₱{pw_buy145:,.2f}"),
        ("Present Cost of Lease (Annuity Due)", f"PW_Lease = 290,000 * [1 + (P/A, 10%, 4)] = 290,000 * 4.16987", f"₱{pw_lease145:,.2f}"),
        ("Economic Recommendation", f"Leasing saves ₱{diff145:,.2f} in present value. Choose Lease.", "Select Lease")
    ],
    final_ans=f"PW_Buy = {format_peso(pw_buy145)}, PW_Lease = {format_peso(pw_lease145)}; Choose Lease",
    choices=[
        f"A. PW_Buy = {format_peso(pw_buy145)}, PW_Lease = {format_peso(pw_lease145)}; Choose Lease",
        f"B. PW_Buy = ₱1,227,447.22, PW_Lease = ₱1,350,000.00; Choose Buy",
        f"C. PW_Buy = ₱1,150,000.00, PW_Lease = ₱1,209,260.97; Choose Buy",
        f"D. PW_Buy = ₱1,300,000.00, PW_Lease = ₱1,180,000.00; Choose Lease"
    ],
    correct_letter="A",
    shortcut="PW_Buy = 1.2M + 40k*3.7908 - 200k*0.6209 = 1,227,447. PW_Lease = 290k*(1 + 3.1699) = 1,209,261. Lease is cheaper.",
    keystrokes=["1200000 + 40000 * ( 1 - 1.1 ^ -5 ) / 0.1 - 200000 * 1.1 ^ -5 =", "290000 * ( 1 + ( 1 - 1.1 ^ -4 ) / 0.1 ) ="],
    cal_disp="1209260.97",
    cal_tip="Lease payments are almost always paid in advance at the start of each period (annuity due), so Year 0 payment is undiscounted.",
    trap="Treating lease payments as an ordinary annuity paid at year-end.",
    week_day=6,
    diff="Board Exam Standard"
)
problems_136_155.append(p145_obj)

# ==========================================
# Problem 146: Salvage Value Sensitivity Analysis
# ==========================================
# Machine 1: Cost = 500,000, Life = 5 yrs, SV = 50,000, O&M = 60,000.
# Machine 2: Cost = 700,000, Life = 5 yrs, O&M = 30,000, SV = S2 (unknown).
# i = 10%.
# Find S2 so that EUAC_1 = EUAC_2.
# CR_1 = (500k - 50k)*(A/P, 10%, 5) + 50k*0.10 = 450k*0.263797 + 5k = 118,708.87 + 5,000 = 123,708.87
# EUAC_1 = 123,708.87 + 60,000 = 183,708.87
# EUAC_2 = (700k - S2)*(0.263797) + S2*0.10 + 30,000 = 183,708.87
# 700k*0.263797 - S2*(0.263797 - 0.10) + 30,000 = 183,708.87
# 184,658.24 - 0.163797 * S2 + 30,000 = 183,708.87
# 214,658.24 - 183,708.87 = 0.163797 * S2 => 30,949.37 = 0.163797 * S2 => S2 = 188,949.03
ap_factor146 = 0.10 / (1 - 1.10**(-5)) # 0.26379748
af_factor146 = ap_factor146 - 0.10 # 0.16379748
euac_1_146 = (500000 - 50000)*ap_factor146 + 50000*0.10 + 60000 # 183,708.87
s2_146 = (700000 * ap_factor146 + 30000 - euac_1_146) / af_factor146 # 188,949.49
p146_obj = make_problem(
    num=146,
    category="Capital Budgeting & Evaluation",
    topic="Sensitivity Analysis: Break-Even Salvage Value",
    question=f"A manufacturing engineer is deciding between two 5-year machines (i = 10%):\n- Machine 1: First Cost ₱500,000, Salvage ₱50,000, Annual O&M ₱60,000\n- Machine 2: First Cost ₱700,000, Annual O&M ₱30,000, Salvage Value S_2\nWhat must be the salvage value of Machine 2 at the end of Year 5 so that both machines have the exact same Equivalent Uniform Annual Cost (EUAC)?",
    given=[
        ("Machine 1", "Cost = ₱500k, SV = ₱50k, O&M = ₱60k", "Base machine"),
        ("Machine 2", "Cost = ₱700k, O&M = ₱30k, SV = S_2", "Higher initial cost, lower O&M"),
        ("MARR", "Interest Rate", "10%"),
        ("Life", "Equal Lives", "5 years")
    ],
    formula="EUAC_1 = EUAC_2  =>  Solve for S_2",
    steps=[
        ("Machine 1 EUAC", f"EUAC_1 = (450k)*(A/P, 10%, 5) + 5k + 60k", f"₱{euac_1_146:,.2f}"),
        ("Express Machine 2 EUAC in terms of S_2", "EUAC_2 = (700k - S_2)*(A/P, 10%, 5) + S_2*(0.10) + 30,000", "Equation"),
        ("Solve for Break-Even Salvage S_2", f"S_2 * (A/F, 10%, 5) = 700k*(A/P, 10%, 5) + 30k - {euac_1_146:,.2f}", f"S_2 = ₱{s2_146:,.2f}")
    ],
    final_ans=format_peso(s2_146),
    choices=[
        f"A. {format_peso(s2_146)}",
        f"B. ₱150,000.00",
        f"C. ₱210,500.00",
        f"D. ₱175,000.00"
    ],
    correct_letter="A",
    shortcut="Solve for S2 using calculator: (700k - X)*(0.1/(1-1.1^-5)) + 0.1*X + 30k = 183,708.87 => X = ₱188,949.49.",
    keystrokes=["( 700000 - X ) * ( 0.1 / ( 1 - 1.1 ^ -5 ) ) + 0.10 * X + 30000 [ALPHA] [=] 183708.87", "[SHIFT] [SOLVE] 100000 [=]"],
    cal_disp="X = 188949.49",
    cal_tip="Break-even sensitivity reveals how robust an economic decision is against salvage value market uncertainty.",
    trap="Forgetting that the capital recovery formula contains S in both the depreciation base and the interest on salvage term.",
    week_day=6,
    diff="Advanced"
)
problems_136_155.append(p146_obj)

# ==========================================
# Problem 147: Life-Cycle Cost (LCC) Analysis
# ==========================================
# Industrial HVAC System:
# CapEx = 2,500,000. Life = 15 yrs. i = 8%.
# Annual Energy = 350,000. Annual Maintenance = 80,000.
# Major compressor overhaul at Year 8 = 400,000.
# Salvage value at Year 15 = 250,000.
# LCC = CapEx + (Energy + O&M)*(P/A, 8%, 15) + Overhaul*(P/F, 8%, 8) - SV*(P/F, 8%, 15)
# (P/A, 8%, 15) = 8.559479
# (P/F, 8%, 8) = 1.08^-8 = 0.540269
# (P/F, 8%, 15) = 1.08^-15 = 0.315242
# Annual = 430,000 * 8.559479 = 3,680,575.86
# Overhaul = 400,000 * 0.540269 = 216,107.54
# Salvage = -250,000 * 0.315242 = -78,810.43
# LCC = 2,500,000 + 3,680,575.86 + 216,107.54 - 78,810.43 = 6,317,872.97
lcc147 = 2500000 + 430000 * ((1 - 1.08**(-15))/0.08) + 400000 * (1.08**(-8)) - 250000 * (1.08**(-15)) # 6,317,872.97
p147_obj = make_problem(
    num=147,
    category="Capital Budgeting & Evaluation",
    topic="Total Cost of Ownership: Life-Cycle Cost (LCC) Analysis of HVAC Plant",
    question=f"A commercial building chiller plant evaluation considers total Life-Cycle Cost (LCC) over a 15-year horizon at an 8% discount rate:\n- Initial Acquisition & Installation: ₱2,500,000\n- Annual Power Consumption: ₱350,000/year\n- Annual Routine Maintenance: ₱80,000/year\n- Comprehensive Overhaul at Year 8: ₱400,000\n- Terminal Salvage Value at Year 15: ₱250,000\nCalculate the total Life-Cycle Cost (Net Present Cost) of the chiller system.",
    given=[
        ("Initial Cost", "CapEx", "₱2,500,000"),
        ("Recurring Annual OpEx", "Energy + Routine O&M = ₱430,000", "15 years"),
        ("Non-Recurring Overhaul", "Year 8 Mid-Life Overhaul", "₱400,000"),
        ("Terminal Salvage", "Year 15 Recovery", "₱250,000"),
        ("Discount Rate i", "Cost of Capital", "8%")
    ],
    formula="LCC = CapEx + OpEx*(P/A, i, n) + Overhaul*(P/F, i, k) - SV*(P/F, i, n)",
    steps=[
        ("Present Value of Annual Operating Expenses", "PW_OpEx = ₱430,000 * [(1 - 1.08^-15) / 0.08] = ₱430,000 * 8.55948", "₱3,680,575.86"),
        ("Present Value of Year 8 Overhaul", "PW_Overhaul = ₱400,000 * (1.08^-8) = ₱400,000 * 0.540269", "₱216,107.54"),
        ("Present Value of Year 15 Salvage", "PW_Salvage = ₱250,000 * (1.08^-15) = ₱250,000 * 0.315242", "₱78,810.43 (Credit)"),
        ("Total Life-Cycle Cost", f"LCC = 2.5M + 3,680,575.86 + 216,107.54 - 78,810.43", f"₱{lcc147:,.2f}")
    ],
    final_ans=format_peso(lcc147),
    choices=[
        f"A. {format_peso(lcc147)}",
        f"B. ₱6,850,000.00",
        f"C. ₱5,920,400.00",
        f"D. ₱6,450,200.00"
    ],
    correct_letter="A",
    shortcut="LCC = 2.5M + 430k*(1 - 1.08^-15)/0.08 + 400k*1.08^-8 - 250k*1.08^-15 = ₱6,317,872.97.",
    keystrokes=["2500000 + 430000 * ( 1 - 1.08 ^ -15 ) / 0.08 + 400000 * 1.08 ^ -8 - 250000 * 1.08 ^ -15 ="],
    cal_disp="6317872.97",
    cal_tip="Life Cycle Costing demonstrates that operating energy and maintenance over 15 years far exceeds the initial purchase cost of mechanical systems.",
    trap="Adding salvage value instead of subtracting it as a cash recovery credit.",
    week_day=6,
    diff="Board Exam Standard"
)
problems_136_155.append(p147_obj)

# ==========================================
# Problem 148: Energy Efficiency Upgrade (LED vs HPS)
# ==========================================
# Street lighting retrofitting project: 1,000 luminaires.
# Existing HPS: 250W each, ballast factor 1.15 -> 287.5W total per fixture. 4,000 operating hrs/yr.
# Annual kWh per fixture = 287.5 * 4,000 / 1,000 = 1,150 kWh. Total = 1,150,000 kWh.
# Tariff = ₱10.00/kWh -> Total annual electricity = ₱11,500,000.
# LED Retrofit: 100W per fixture, 4,000 hrs -> 400 kWh each. Total = 400,000 kWh.
# Annual electricity = ₱4,000,000.
# Annual electricity savings = 11.5M - 4.0M = ₱7,500,000.
# LED Fixture Cost = ₱5,000 installed each -> Total CapEx = ₱5,000,000. Life = 10 yrs, i = 10%.
# Annual Net Savings = 7,500,000.
# Payback = 5,000,000 / 7,500,000 = 0.67 yrs (8 months).
# NPV at 10% over 10 yrs = -5M + 7.5M * (P/A, 10%, 10) = -5M + 7.5M * 6.144567 = -5M + 46,084,253 = ₱41,084,253.
npv148 = -5000000 + 7500000 * ((1 - 1.10**(-10))/0.10) # 41,084,253.30
p148_obj = make_problem(
    num=148,
    category="Capital Budgeting & Evaluation",
    topic="Energy Efficiency: LED vs High-Pressure Sodium (HPS) Roadway Lighting",
    question=f"A municipal roadway lighting authority retrofits 1,000 streetlights from 250W High-Pressure Sodium (total load with ballast = 287.5W per fixture) to 100W LED fixtures. Operating hours are 4,000 hours/year and power costs ₱10.00/kWh. The turnkey retrofit costs ₱5,000 per fixture (₱5,000,000 total) with a 10-year useful life. At a 10% discount rate, compute the annual energy cost savings and the Net Present Value (NPV) of the retrofit project.",
    given=[
        ("Number of Fixtures", "Quantity", "1,000 fixtures"),
        ("Existing HPS Load", "287.5 W * 4,000 hrs = 1,150 kWh/fixture", "1,150,000 kWh/yr"),
        ("Proposed LED Load", "100.0 W * 4,000 hrs = 400 kWh/fixture", "400,000 kWh/yr"),
        ("Electric Rate", "Tariff", "₱10.00 / kWh"),
        ("Capital Investment", "Turnkey Retrofit Outlay", "₱5,000,000"),
        ("Project Life & MARR", "Horizon & Discount Rate", "10 years, 10%")
    ],
    formula="Energy Savings = Delta kWh * Tariff ; NPV = -CapEx + Savings * (P/A, i, n)",
    steps=[
        ("Annual kWh Reduction", "Delta kWh = 1,150,000 - 400,000", "750,000 kWh per year"),
        ("Annual Monetary Savings", "Savings = 750,000 kWh * ₱10.00/kWh", "₱7,500,000.00 per year"),
        ("Calculate 10-Year NPV", f"NPV = -₱5,000,000 + ₱7,500,000 * (P/A, 10%, 10)", f"₱{npv148:,.2f}")
    ],
    final_ans=f"Annual Savings = ₱7,500,000, NPV = {format_peso(npv148)}",
    choices=[
        f"A. Annual Savings = ₱7,500,000, NPV = {format_peso(npv148)}",
        f"B. Annual Savings = ₱6,000,000, NPV = ₱31,867,400.00",
        f"C. Annual Savings = ₱8,200,000, NPV = ₱45,380,000.00",
        f"D. Annual Savings = ₱7,500,000, NPV = ₱35,000,000.00"
    ],
    correct_letter="A",
    shortcut="Delta W = 187.5 W. Annual savings = 1000 * 0.1875 kW * 4000h * ₱10 = ₱7.5M/yr. NPV = -5M + 7.5M*(1 - 1.1^-10)/0.1 = ₱41,084,253.30.",
    keystrokes=["- 5000000 + 7500000 * ( 1 - 1.10 ^ -10 ) / 0.10 ="],
    cal_disp="41084253.3",
    cal_tip="Energy retrofits often achieve simple paybacks under one year (5M / 7.5M = 0.67 yrs = 8 months), generating immense long-term NPV.",
    trap="Forgetting the ballast factor and using 250W instead of 287.5W for the baseline HPS fixture.",
    week_day=6,
    diff="Board Exam Standard"
)
problems_136_155.append(p148_obj)

# ==========================================
# Problem 149: Co-generation Feasibility
# ==========================================
# Industrial plant installs a 2 MW waste-heat steam turbine.
# CapEx = 60,000,000. O&M = 3,000,000/yr.
# Generation = 2,000 kW * 7,500 operating hrs = 15,000,000 kWh/yr.
# Grid electricity displacement value = ₱8.50/kWh -> Revenue/savings = 15M * 8.50 = ₱127,500,000/yr.
# Net annual cash flow = 127.5M - 3M = ₱124,500,000/yr.
# Project life = 15 yrs, i = 12%.
# NPV = -60M + 124.5M * (P/A, 12%, 15) = -60M + 124.5M * 6.810864 = -60M + 847,952,568 = ₱787,952,568.
# Simple Payback = 60M / 124.5M = 0.48 years (5.8 months).
npv149 = -60000000 + 124500000 * ((1 - 1.12**(-15))/0.12) # 787,952,624.59
p149_obj = make_problem(
    num=149,
    category="Capital Budgeting & Evaluation",
    topic="Thermal Plant Economics: Industrial Cogeneration Feasibility",
    question=f"A paper mill installs a 2,000 kW back-pressure steam turbine generator utilizing waste process steam. The capital cost is {format_peso_int(60000000)} with annual operating expenses of {format_peso_int(3000000)}. The unit operates 7,500 hours annually, displacing grid power priced at ₱8.50/kWh. Over a 15-year life with a 12% MARR and zero salvage value, determine the net annual operating savings and the project Net Present Value.",
    given=[
        ("Capacity & Hours", "2,000 kW * 7,500 hrs/yr", "15,000,000 kWh/year"),
        ("Avoided Grid Tariff", "Power Cost", "₱8.50 / kWh"),
        ("Capital Investment", "Turnkey Turbogenerator", format_peso_int(60000000)),
        ("Annual Operating Cost", "Maintenance & Water Treatment", format_peso_int(3000000)),
        ("Life & MARR", "Planning Parameters", "15 years, 12%")
    ],
    formula="Gross Savings = kWh * Tariff ; Net Savings = Gross - O&M ; NPV = -CapEx + Net Savings * (P/A, i, n)",
    steps=[
        ("Gross Power Displaced", "Gross = 15,000,000 kWh * ₱8.50/kWh", "₱127,500,000.00 per year"),
        ("Net Annual Cash Inflow", f"Net = ₱127,500,000 - {format_peso_int(3000000)}", "₱124,500,000.00 per year"),
        ("Compute 15-Year NPV", f"NPV = -₱60,000,000 + ₱124,500,000 * (P/A, 12%, 15)", f"₱{npv149:,.2f}")
    ],
    final_ans=f"Net Savings = ₱124,500,000/yr, NPV = {format_peso(npv149)}",
    choices=[
        f"A. Net Savings = ₱124,500,000/yr, NPV = {format_peso(npv149)}",
        f"B. Net Savings = ₱127,500,000/yr, NPV = ₱808,385,000.00",
        f"C. Net Savings = ₱115,000,000/yr, NPV = ₱723,250,000.00",
        f"D. Net Savings = ₱120,000,000/yr, NPV = ₱757,300,000.00"
    ],
    correct_letter="A",
    shortcut="Net = 2000*7500*8.5 - 3M = 124.5M. NPV = -60M + 124.5M*(1 - 1.12^-15)/0.12 = ₱787,952,624.59.",
    keystrokes=["- 60000000 + 124500000 * ( 1 - 1.12 ^ -15 ) / 0.12 ="],
    cal_disp="787952624.6",
    cal_tip="Waste heat recovery is one of the highest-yielding capital investments in heavy process manufacturing.",
    trap="Neglecting the ₱3,000,000 annual operating maintenance expense.",
    week_day=6,
    diff="Board Exam Standard"
)
problems_136_155.append(p149_obj)

# ==========================================
# Problem 150: Economic Service Life (ESL)
# ==========================================
# Asset cost = 100,000, i = 10%.
# Life k=1: SV1 = 70k, O&M1 = 15k. CR1 = (100k - 70k)*1.1 + 70k*0.1 = 33k + 7k = 40k. EUAC1 = 40k + 15k = 55k.
# Life k=2: SV2 = 50k, O&M2 = 25k (PW O&M = 15k/1.1 + 25k/1.1^2 = 13.636k + 20.661k = 34.298k; AW O&M = 34.298k / 1.7355 = 19.762k).
# CR2 = (100k - 50k)*(A/P, 10%, 2) + 50k*0.10 = 50k*0.57619 + 5k = 33.810k. EUAC2 = 33.810k + 19.762k = 53.572k.
# Life k=3: SV3 = 35k, O&M3 = 38k.
# ESL is the service life k that minimizes total Equivalent Uniform Annual Cost (EUAC).
p150_obj = make_problem(
    num=150,
    category="Advanced Replacement & Inflation",
    topic="Asset Replacement: Concept and Calculation of Economic Service Life (ESL)",
    question="In engineering economics replacement studies, what is the formal definition of the Economic Service Life (ESL) of an asset, and what trade-off governs its minimum point?",
    given=[
        ("Capital Recovery Component", "Decreases monotonically with age as first cost is amortized", "Declining curve"),
        ("Operating & Maintenance Component", "Increases monotonically with age due to wear, degradation, and repairs", "Rising curve"),
        ("Objective Function", "Total Equivalent Uniform Annual Cost (EUAC)", "U-shaped curve")
    ],
    formula="EUAC(k) = Capital Recovery(k) + Equivalent Annual O&M(k) ; ESL = argmin_k [ EUAC(k) ]",
    steps=[
        ("Analyze Cost Components", "Capital recovery drops rapidly in early years as high initial depreciation is spread out. Meanwhile, annual maintenance and downtime costs rise over time.", "Opposing cost dynamics"),
        ("Locate Minimum EUAC", "The Economic Service Life is the specific ownership duration k* that minimizes total Equivalent Uniform Annual Cost (EUAC).", "Global minimum of U-curve"),
        ("Replacement Criterion", "An asset should be kept until its marginal operating cost for the next year exceeds the minimum EUAC of the best available Challenger.", "Decision rule")
    ],
    final_ans="ESL is the service life that minimizes total Equivalent Uniform Annual Cost (EUAC)",
    choices=[
        "A. ESL is the service life that minimizes total Equivalent Uniform Annual Cost (EUAC)",
        "B. ESL is the physical lifespan until catastrophic mechanical breakdown",
        "C. ESL is the accounting lifespan prescribed by tax depreciation schedules",
        "D. ESL is the point where salvage value equals zero"
    ],
    correct_letter="A",
    shortcut="ESL = minimum EUAC point. Capital recovery falls, O&M rises; the bottom of the sum curve is ESL.",
    keystrokes=["Conceptual Definition: Min EUAC(k)"],
    cal_disp="MIN EUAC",
    cal_tip="ESL is almost always shorter than the physical life of the machine because rising maintenance costs make earlier replacement more economical.",
    trap="Confusing Economic Service Life with physical life or accounting/tax depreciation life.",
    week_day=6,
    diff="Moderate"
)
problems_136_155.append(p150_obj)

# ==========================================
# Problem 151: Challenger vs Defender Replacement
# ==========================================
# Existing motor (Defender): Market value = 80,000, remaining life = 3 yrs, zero salvage, O&M = 90,000/yr.
# i = 10%. CR_D = 80,000 * (A/P, 10%, 3) = 80,000 * 0.402115 = 32,169.20. EUAC_D = 32,169.20 + 90,000 = 122,169.20.
# Challenger: Cost = 250,000, life = 8 yrs, SV = 30,000, O&M = 40,000/yr.
# CR_C = (250k - 30k)*(A/P, 10%, 8) + 30k*0.10 = 220k * 0.187444 + 3k = 41,237.68 + 3,000 = 44,237.68.
# EUAC_C = 44,237.68 + 40,000 = 84,237.68.
# Challenger is cheaper by 122,169.20 - 84,237.68 = ₱37,931.52/yr. Replace now!
euac_def151 = 80000 * (0.10 / (1 - 1.10**(-3))) + 90000 # 122,169.19
euac_cha151 = (250000 - 30000) * (0.10 / (1 - 1.10**(-8))) + 30000 * 0.10 + 40000 # 84,237.68
diff151 = euac_def151 - euac_cha151
p151_obj = make_problem(
    num=151,
    category="Advanced Replacement & Inflation",
    topic="Challenger vs Defender: Replacement Study under Market Value Opportunity Cost",
    question="A manufacturing facility evaluates replacing an existing drive motor (Defender) with a high-efficiency model (Challenger) at i = 10%:\n- Defender: Current market trade-in value ₱80,000; Remaining life 3 years; Zero salvage; Annual O&M ₱90,000\n- Challenger: Initial cost ₱250,000; Useful life 8 years; Salvage value ₱30,000; Annual O&M ₱40,000\nCalculate the EUAC for both alternatives and determine whether the motor should be replaced immediately.",
    given=[
        ("Defender", "Market Value = ₱80k, Life = 3 yrs, SV = ₱0, O&M = ₱90k/yr", "Current motor"),
        ("Challenger", "First Cost = ₱250k, Life = 8 yrs, SV = ₱30k, O&M = ₱40k/yr", "New motor"),
        ("MARR", "Cost of Capital", "10%")
    ],
    formula="EUAC_D = MV * (A/P, i, n_D) + O&M_D ; EUAC_C = (P - S)(A/P, i, n_C) + S*i + O&M_C",
    steps=[
        ("Defender EUAC", f"EUAC_D = ₱80,000 * (A/P, 10%, 3) + ₱90,000 = ₱32,169.19 + ₱90,000", f"₱{euac_def151:,.2f}"),
        ("Challenger EUAC", f"EUAC_C = ₱220,000 * (A/P, 10%, 8) + ₱3,000 + ₱40,000 = ₱41,237.68 + ₱3,000 + ₱40,000", f"₱{euac_cha151:,.2f}"),
        ("Decision", f"Challenger has lower annual cost by ₱{diff151:,.2f}/yr. Replace Defender immediately.", "Replace Immediately")
    ],
    final_ans=f"EUAC_D = {format_peso(euac_def151)}, EUAC_C = {format_peso(euac_cha151)}; Replace immediately",
    choices=[
        f"A. EUAC_D = {format_peso(euac_def151)}, EUAC_C = {format_peso(euac_cha151)}; Replace immediately",
        f"B. EUAC_D = ₱110,000.00, EUAC_C = ₱95,500.00; Keep Defender",
        f"C. EUAC_D = ₱122,169.19, EUAC_C = ₱130,400.00; Keep Defender",
        f"D. EUAC_D = ₱105,000.00, EUAC_C = ₱84,237.68; Keep Defender"
    ],
    correct_letter="A",
    shortcut="EUAC_D = 80k*(0.1/(1-1.1^-3)) + 90k = 122.17k. EUAC_C = 220k*(0.1/(1-1.1^-8)) + 3k + 40k = 84.24k. Replace now!",
    keystrokes=["80000 * ( 0.10 / ( 1 - 1.10 ^ -3 ) ) + 90000 =", "220000 * ( 0.10 / ( 1 - 1.10 ^ -8 ) ) + 3000 + 40000 ="],
    cal_disp="84237.68",
    cal_tip="The market value of ₱80,000 is treated as the initial investment of the Defender because by keeping it, we forego receiving that cash today (opportunity cost).",
    trap="Using book value instead of current realizable market value for the Defender.",
    week_day=7,
    diff="Board Exam Standard"
)
problems_136_155.append(p151_obj)

# ==========================================
# Problem 152: After-Tax Cash Flow (ATCF)
# ==========================================
# Revenue R = 1,500,000, Expenses E = 600,000, Depreciation d = 250,000, Tax rate t = 30%.
# Taxable Income = R - E - d = 1.5M - 0.6M - 0.25M = 650,000.
# Taxes = 650,000 * 0.30 = 195,000.
# ATCF = (R - E) - Taxes = 900,000 - 195,000 = 705,000.
# Or ATCF = (R - E)*(1 - t) + d*t = 900,000 * 0.70 + 250,000 * 0.30 = 630,000 + 75,000 = 705,000.
atcf152 = (1500000 - 600000) * (1 - 0.30) + 250000 * 0.30 # 705,000
p152_obj = make_problem(
    num=152,
    category="Advanced Replacement & Inflation",
    topic="After-Tax Economics: After-Tax Cash Flow (ATCF) and Depreciation Tax Shield",
    question=f"A computerized packaging line generates annual gross revenues of ₱1,500,000 and incurs cash operating expenses of ₱600,000. Allowable straight-line tax depreciation for the year is ₱250,000. If the corporate income tax rate is 30%, calculate the net After-Tax Cash Flow (ATCF) for the year.",
    given=[
        ("Gross Revenue R", "Cash Inflows", "₱1,500,000"),
        ("Operating Expenses E", "Cash Outflows", "₱600,000"),
        ("Depreciation Deduction d", "Non-Cash Tax Allowance", "₱250,000"),
        ("Corporate Income Tax Rate t", "Tax Bracket", "30%")
    ],
    formula="ATCF = (R - E) * (1 - t) + d * t",
    steps=[
        ("Before-Tax Operating Cash Flow", "R - E = ₱1,500,000 - ₱600,000", "₱900,000.00"),
        ("Taxable Income & Tax Paid", "Taxable Income = ₱900,000 - ₱250,000 = ₱650,000. Taxes = 30% * ₱650,000", "₱195,000.00"),
        ("After-Tax Cash Flow", f"ATCF = ₱900,000 - ₱195,000 = (900k * 0.70) + (250k * 0.30) = 630k + 75k", f"₱{atcf152:,.2f}")
    ],
    final_ans=format_peso(atcf152),
    choices=[
        f"A. {format_peso(atcf152)}",
        f"B. ₱650,000.00",
        f"C. ₱750,000.00",
        f"D. ₱630,000.00"
    ],
    correct_letter="A",
    shortcut="ATCF = (1.5M - 0.6M)*0.70 + 0.25M*0.30 = 630,000 + 75,000 = ₱705,000.",
    keystrokes=["( 1500000 - 600000 ) * ( 1 - 0.30 ) + 250000 * 0.30 ="],
    cal_disp="705000",
    cal_tip="The d*t term is the Depreciation Tax Shield: depreciation is a non-cash expense that shields operating income from taxes, keeping cash inside the firm.",
    trap="Subtracting depreciation from cash flow (confusing net accounting profit with net cash flow).",
    week_day=7,
    diff="Moderate"
)
problems_136_155.append(p152_obj)

# ==========================================
# Problem 153: Fisher Equation (Real vs Market Interest Rate)
# ==========================================
# Market nominal interest rate i = 12%. Inflation rate f = 5%.
# Fisher equation: 1 + i = (1 + r)(1 + f) => 1 + r = (1 + i) / (1 + f) = 1.12 / 1.05 = 1.066667
# Real interest rate r = 6.67%
# Approximate formula: r_approx = i - f = 12% - 5% = 7.00%
# Difference = 7.00% - 6.67% = 0.33%
r_exact153 = ((1 + 0.12) / (1 + 0.05) - 1) * 100 # 6.67%
p153_obj = make_problem(
    num=153,
    category="Advanced Replacement & Inflation",
    topic="Inflation Economics: Real Rate of Return via Fisher Equation",
    question="A corporate debenture provides a market nominal yield of 12.00% per annum during a period when the general annual inflation rate is 5.00%. Calculate the exact real rate of return r that reflects true purchasing power growth, and compare it with the simple approximation.",
    given=[
        ("Market Nominal Rate i", "Observed Interest Rate", "12.00%"),
        ("Inflation Rate f", "Consumer Price Index Inflation", "5.00%")
    ],
    formula="(1 + i) = (1 + r) * (1 + f)  =>  r = (1 + i) / (1 + f) - 1",
    steps=[
        ("Fisher Exact Equation", "1 + r = 1.12 / 1.05 = 1.066667", "Ratio"),
        ("Exact Real Interest Rate", f"r = 1.066667 - 1 = {r_exact153:.2f}%", f"{r_exact153:.2f}%"),
        ("Compare with Approximation", "r_approx = i - f = 12% - 5% = 7.00%", "Approximation overstates by 0.33%")
    ],
    final_ans=f"Exact Real Rate = {r_exact153:.2f}% (Approx = 7.00%)",
    choices=[
        f"A. Exact Real Rate = {r_exact153:.2f}% (Approx = 7.00%)",
        f"B. Exact Real Rate = 7.00% (Approx = 6.67%)",
        f"C. Exact Real Rate = 6.25% (Approx = 7.00%)",
        f"D. Exact Real Rate = 5.80% (Approx = 6.00%)"
    ],
    correct_letter="A",
    shortcut="r = (1.12 / 1.05) - 1 = 0.06667 = 6.67%.",
    keystrokes=["( 1 + 0.12 ) / ( 1 + 0.05 ) - 1 ="],
    cal_disp="0.0666666667",
    cal_tip="The simple subtraction i - f overstates the real yield because the cross-product term r*f is omitted.",
    trap="Selecting the naive approximation (7.00%) when the exact board exam calculation is required.",
    week_day=7,
    diff="Moderate"
)
problems_136_155.append(p153_obj)

# ==========================================
# Problem 154: Arithmetic Gradient Present Worth
# ==========================================
# Base cost A1 = 50,000 at yr 1. Increases by G = 10,000 each year for 6 years.
# i = 8%.
# P = A1 * (P/A, 8%, 6) + G * (P/G, 8%, 6)
# (P/A, 8%, 6) = (1 - 1.08^-6)/0.08 = 4.622880
# (P/G, 8%, 6) = [ (1.08^6 - 1)/(0.08*1.08^6) - 6/(1.08^6) ] / 0.08
# = [ 4.622880 - 6 * 0.6301696 ] / 0.08 = [ 4.622880 - 3.781018 ] / 0.08 = 0.841862 / 0.08 = 10.52328
# P = 50,000 * 4.622880 + 10,000 * 10.52328 = 231,144.00 + 105,232.80 = 336,376.80
pa_factor154 = (1 - 1.08**(-6)) / 0.08 # 4.62287966
pg_factor154 = (pa_factor154 - 6 * (1.08**(-6))) / 0.08 # 10.523283
p154_tot = 50000 * pa_factor154 + 10000 * pg_factor154 # 336,376.82
p154_obj = make_problem(
    num=154,
    category="Advanced Replacement & Inflation",
    topic="Cash Flow Modeling: Arithmetic Gradient Present Worth Factor (P/G, i, n)",
    question="The operating and maintenance expenses for a specialized wastewater pump start at ₱50,000 at the end of Year 1 and increase by ₱10,000 every year thereafter through Year 6 (Year 2 = ₱60k, Year 3 = ₱70k, ..., Year 6 = ₱100k). If the interest rate is 8% per annum, what is the equivalent Present Worth of this arithmetic gradient series?",
    given=[
        ("Base Cash Flow A_1", "Year 1 Outlay", "₱50,000"),
        ("Arithmetic Gradient G", "Annual Uniform Increase", "₱10,000/year"),
        ("Planning Period n", "Duration", "6 years"),
        ("Interest Rate i", "Discount Rate", "8%")
    ],
    formula="P = A_1 * (P/A, i, n) + G * (P/G, i, n) ; (P/G, i, n) = [ (P/A, i, n) - n*(1+i)^(-n) ] / i",
    steps=[
        ("Compute Annuity Factor (P/A, 8%, 6)", "(P/A, 8%, 6) = (1 - 1.08^-6) / 0.08", "4.622880"),
        ("Compute Gradient Factor (P/G, 8%, 6)", "(P/G, 8%, 6) = [ 4.622880 - 6 * (1.08^-6) ] / 0.08 = [ 4.622880 - 3.781018 ] / 0.08", "10.523283"),
        ("Combine Base Annuity and Gradient", f"P = (₱50,000 * 4.622880) + (₱10,000 * 10.523283) = ₱231,144.00 + ₱105,232.83", f"₱{p154_tot:,.2f}")
    ],
    final_ans=format_peso(p154_tot),
    choices=[
        f"A. {format_peso(p154_tot)}",
        f"B. ₱315,200.00",
        f"C. ₱355,420.00",
        f"D. ₱298,800.00"
    ],
    correct_letter="A",
    shortcut="Casio fx-991ES summation shortcut: Sum_{X=1}^6 ( (50000 + (X - 1)*10000) * 1.08^-X ) = ₱336,376.82.",
    keystrokes=["[SHIFT] [log] ( ( 50000 + ( X - 1 ) * 10000 ) * 1.08 ^ -X , 1 , 6 ) ="],
    cal_disp="336376.8155",
    cal_tip="CalTech Secret: Use the Sigma summation [SHIFT] [log] key directly on Casio fx-991ES PLUS to compute any gradient series in 15 seconds without gradient factor tables!",
    trap="Starting gradient G at Year 1: gradient increase begins at Year 2, so Year 1 is purely base A_1.",
    week_day=7,
    diff="Board Exam Standard"
)
problems_136_155.append(p154_obj)

# ==========================================
# Problem 155: Geometric Gradient Present Worth (g != i)
# ==========================================
# First payment A1 = 120,000 at end of yr 1. Increases at g = 5% per year for 8 years.
# Discount rate i = 9%.
# P = A1 * [ 1 - ((1+g)/(1+i))^n ] / (i - g)
# P = 120,000 * [ 1 - (1.05/1.09)^8 ] / (0.09 - 0.05)
# (1.05/1.09)^8 = (0.9633028)^8 = 0.741038
# 1 - 0.741038 = 0.258962
# P = 120,000 * 0.258962 / 0.04 = 120,000 * 6.47405 = 776,886.13
p155_tot = 120000 * (1 - (1.05 / 1.09)**8) / (0.09 - 0.05) # 776,886.13
p155_obj = make_problem(
    num=155,
    category="Advanced Replacement & Inflation",
    topic="Cash Flow Modeling: Geometric Gradient Present Worth (g != i)",
    question="An offshore oil platform's subsea maintenance contract specifies a Year 1 payment of ₱120,000. Due to labor inflation and aging equipment, costs increase at a compound rate of 5.0% per year for 8 years (Years 1 to 8). If the cost of capital is 9.0%, what is the equivalent Present Worth of this geometrically increasing series?",
    given=[
        ("Initial Cash Flow A_1", "End of Year 1 Amount", "₱120,000"),
        ("Escalation Rate g", "Compound Annual Growth", "5.0%"),
        ("Discount Rate i", "Cost of Capital", "9.0%"),
        ("Number of Years n", "Duration", "8 years")
    ],
    formula="P = A_1 * [ 1 - ((1 + g)/(1 + i))^n ] / (i - g)  [when g != i]",
    steps=[
        ("Ratio of Growth to Discount", "(1 + g) / (1 + i) = 1.05 / 1.09", "0.963303"),
        ("Compound Power Factor", "(0.963303)^8", "0.741038"),
        ("Geometric Series Factor", "[ 1 - 0.741038 ] / (0.09 - 0.05) = 0.258962 / 0.04", "6.474051"),
        ("Compute Total Present Worth", f"P = ₱120,000 * 6.474051", f"₱{p155_tot:,.2f}")
    ],
    final_ans=format_peso(p155_tot),
    choices=[
        f"A. {format_peso(p155_tot)}",
        f"B. ₱825,400.00",
        f"C. ₱710,250.00",
        f"D. ₱864,000.00"
    ],
    correct_letter="A",
    shortcut="P = 120,000 * [1 - (1.05/1.09)^8] / (0.09 - 0.05) = ₱776,886.13.",
    keystrokes=["120000 * ( 1 - ( 1.05 / 1.09 ) ^ 8 ) / ( 0.09 - 0.05 ) ="],
    cal_disp="776886.1306",
    cal_tip="Geometric gradient applies whenever cash flows escalate at a constant percentage rate (such as inflation or fuel escalation clauses).",
    trap="Inverting the denominator as (g - i) which results in a negative value.",
    week_day=7,
    diff="Board Exam Standard"
)
problems_136_155.append(p155_obj)

print("Batch 136-155 complete.")
