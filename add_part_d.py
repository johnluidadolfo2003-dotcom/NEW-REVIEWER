# -*- coding: utf-8 -*-
"""
Problems 131-155: Amortization & Capital Budgeting Evaluation
"""
import math

def p_peso(val):
    return f"₱{val:,.2f}"

def p_int(val):
    return f"₱{round(val):,}"

from master_builder_175 import make_p

problems_131_155 = []

# 131: Equal Installment Loan
P131 = 600000; r131 = 0.12; m131 = 12; t131 = 5; n131 = 60; i131 = 0.01
A131 = P131 * (i131 * (1 + i131)**n131) / ((1 + i131)**n131 - 1) # 600k * 0.022244 = 13,346.67/mo
problems_131_155.append(make_p(
    131, 5, "Gradients & Amortization", "03_Annuities_Ordinary_Due_Deferred.pdf", "Doc 03: Equal Installment Amortization",
    "Monthly Installment Payment to Amortize ₱600,000 Equipment Loan over 5 Years at 12%",
    "A commercial facility borrows ₱600,000 to install rooftop solar panels at 12% per annum compounded monthly. What is the required monthly payment to completely amortize the debt over a 5-year term?",
    ["A. ₱13,347/month", "B. ₱12,500/month", "C. ₱14,100/month", "D. ₱13,850/month"], "A",
    "A = P \\left[ \\frac{i(1+i)^n}{(1+i)^n - 1} \\right]",
    [{"step": 1, "title": "Identify Periodic Parameters", "explanation": "i = 12%/12 = 0.01/month; n = 5 × 12 = 60 months", "calculation": "i = 0.01; \\quad n = 60"},
     {"step": 2, "title": "Compute Monthly Payment A", "explanation": "600,000 × [0.01(1.01)^60] / [(1.01)^60 - 1]:", "calculation": f"A = 600,000 \\times 0.022244 = {p_peso(A131)}/\\text{{month}}"}],
    "₱13,347/month", ["600000 × 0.01 ÷ ( 1 - 1.01 [xʸ] -60 ) [=] ⟹ 13346.67"],
    "₱13,347/mo", "Total paid over 5 years = 60 × ₱13,346.67 = ₱800,800. Interest paid = ₱200,800.",
    "Be sure to use monthly interest rate 1.0% and 60 periods.",
    [{"symbol": "P", "meaning": "Principal", "value": "₱600,000"}, {"symbol": "i", "meaning": "Monthly rate", "value": "1.0%"}, {"symbol": "n", "meaning": "Months", "value": "60"}]
))

# 132: Interest and Principal Breakdown in Payment 15
# Outstanding balance after 14 payments: B_14 = A * (P/A, 1%, 46) = 13,346.67 * [1 - 1.01^-46]/0.01 = 13,346.67 * 36.856235 = 491,908
# Interest in payment 15: I_15 = B_14 * i = 491,908 * 0.01 = ₱4,919.08
# Principal in payment 15: PR_15 = A - I_15 = 13,346.67 - 4,919.08 = ₱8,427.59
I15 = 4919.08; PR15 = 8427.59
problems_131_155.append(make_p(
    132, 5, "Gradients & Amortization", "03_Annuities_Ordinary_Due_Deferred.pdf", "Doc 03: Amortization Breakdown",
    "Interest and Principal Breakdown of the 15th Monthly Installment",
    "For the ₱600,000 solar loan in Problem 131 (A = ₱13,347/mo, i = 1%/mo, 60 months), how much of the 15th payment goes toward interest, and how much reduces principal?",
    ["A. Interest: ₱4,919 | Principal: ₱8,428", "B. Interest: ₱6,000 | Principal: ₱7,347", "C. Interest: ₱3,500 | Principal: ₱9,847", "D. Interest: ₱4,919 | Principal: ₱7,500"], "A",
    "I_m = B_{m-1} \\cdot i; \\quad PR_m = A - I_m; \\quad B_{m-1} = A(P/A, i, n - m + 1)",
    [{"step": 1, "title": "Compute Remaining Balance after Month 14", "explanation": "B_14 has 60 - 14 = 46 remaining payments: B_14 = 13,346.67 × (P/A, 1%, 46) = ₱491,908:", "calculation": "B_{14} = ₱491,908"},
     {"step": 2, "title": "Compute Interest Component I_15", "explanation": "I_15 = 491,908 × 0.01 = ₱4,919.08:", "calculation": f"I_{{15}} = {p_peso(I15)}"},
     {"step": 3, "title": "Compute Principal Component PR_15", "explanation": "PR_15 = 13,346.67 - 4,919.08:", "calculation": f"PR_{{15}} = {p_peso(PR15)}"}],
    "Interest: ₱4,919 | Principal: ₱8,428", ["13346.67 × ( 1 - 1.01 [xʸ] -46 ) ÷ 0.01 [=] ⟹ 491908, Ans × 0.01 [=] ⟹ 4919.08, 13346.67 - Ans [=] ⟹ 8427.59"],
    "₱4,919 | ₱8,428", "Interest is always computed on the preceding balance B_(m-1).",
    "As loan matures, interest portion decreases while principal portion increases.",
    [{"symbol": "A", "meaning": "Installment", "value": "₱13,347"}, {"symbol": "Remaining", "meaning": "Months left", "value": "46 months"}, {"symbol": "i", "meaning": "Rate", "value": "1.0%"}]
))

# 133: Outstanding Balance after 36 Payments
# B_36 = A * (P/A, 1%, 24) = 13,346.67 * [1 - 1.01^-24]/0.01 = 13,346.67 * 21.243387 = 283,528.46
B36_133 = A131 * ((1 - (1 + i131)**(-24)) / i131)
problems_131_155.append(make_p(
    133, 5, "Gradients & Amortization", "03_Annuities_Ordinary_Due_Deferred.pdf", "Doc 03: Outstanding Loan Balance",
    "Outstanding Debt Balance after Exactly 3 Years (36 Monthly Payments)",
    "For the ₱600,000 loan amortized over 60 months at 1% monthly interest (A = ₱13,347/mo), what is the remaining payoff balance immediately after the 36th monthly payment?",
    ["A. ₱283,528", "B. ₱240,000", "C. ₱312,400", "D. ₱295,000"], "A",
    "B_k = A \\left[ \\frac{1 - (1+i)^{-(n-k)}}{i} \\right] \\quad (\\text{Prospective Method})",
    [{"step": 1, "title": "Determine Remaining Unpaid Payments", "explanation": "60 - 36 = 24 remaining monthly payments:", "calculation": "n - k = 60 - 36 = 24"},
     {"step": 2, "title": "Discount Remaining Payments to Month 36", "explanation": "B_36 = 13,346.67 × (P/A, 1%, 24):", "calculation": f"B_{{36}} = 13,346.67 \\times 21.243387 = {p_peso(B36_133)}"}],
    "₱283,528", ["13346.67 × ( 1 - 1.01 [xʸ] -24 ) ÷ 0.01 [=] ⟹ 283528.46"],
    "₱283,528", "Prospective method is much faster than retrospective method: simply find PW of remaining payments.",
    "Notice that after 60% of time has elapsed (36/60), more than 47% of principal remains unpaid due to front-loaded interest.",
    [{"symbol": "Payments left", "meaning": "n - k", "value": "24 months"}, {"symbol": "A", "meaning": "Monthly installment", "value": "₱13,347"}]
))

# 134: Refinancing a Loan
# Balance ₱283,528 refinanced for remaining 24 months at 9% (0.75%/month).
# New A = 283,528.46 * [0.0075(1.0075)^24] / [(1.0075)^24 - 1] = 283,528.46 * 0.045685 = ₱12,952.95/mo.
# Monthly savings = 13,346.67 - 12,952.95 = ₱393.72/mo. Total savings = 24 * 393.72 = ₱9,449.
A_new134 = B36_133 * (0.0075 / (1 - 1.0075**(-24)))
savings_mo134 = A131 - A_new134
problems_131_155.append(make_p(
    134, 5, "Gradients & Amortization", "03_Annuities_Ordinary_Due_Deferred.pdf", "Doc 03: Loan Refinancing Analysis",
    "Monthly Payment Reduction upon Refinancing Outstanding Balance from 12% to 9%",
    "Immediately after the 36th payment, the borrower in Problem 133 refinances the remaining balance of ₱283,528 at a lower interest rate of 9% per annum compounded monthly over the remaining 24 months. What is the new monthly payment and monthly savings?",
    ["A. New Payment: ₱12,953/mo | Monthly Savings: ₱394", "B. New Payment: ₱12,250/mo | Monthly Savings: ₱1,097", "C. New Payment: ₱13,100/mo | Monthly Savings: ₱247", "D. New Payment: ₱12,800/mo | Monthly Savings: ₱547"], "A",
    "A_{new} = B_{36} \\left[ \\frac{i_{new}(1+i_{new})^{24}}{(1+i_{new})^{24} - 1} \\right]",
    [{"step": 1, "title": "Compute New Periodic Rate", "explanation": "9% / 12 = 0.75% = 0.0075/month:", "calculation": "i_{new} = 0.0075"},
     {"step": 2, "title": "Compute New Monthly Installment", "explanation": "283,528.46 × (A/P, 0.75%, 24):", "calculation": f"A_{{new}} = 283,528.46 \\times 0.045685 = {p_peso(A_new134)}"},
     {"step": 3, "title": "Calculate Monthly Savings", "explanation": "Old payment - New payment:", "calculation": f"\\Delta A = 13,346.67 - 12,952.95 = {p_peso(savings_mo134)}/\\text{{month}}"}],
    "New Payment: ₱12,953/mo | Monthly Savings: ₱394", ["283528.46 × 0.0075 ÷ ( 1 - 1.0075 [xʸ] -24 ) [=] ⟹ 12952.95, 13346.67 - Ans [=] ⟹ 393.72"],
    "₱12,953 | ₱394 savings", "Refinancing replaces old payment with new payment computed on remaining balance B_k.",
    "Be sure to use the new interest rate for the remaining duration.",
    [{"symbol": "Balance", "meaning": "B_36", "value": "₱283,528"}, {"symbol": "i_new", "meaning": "New monthly rate", "value": "0.75%"}, {"symbol": "n_rem", "meaning": "Remaining months", "value": "24"}]
))

# 135: Sinking Fund Schedule Interest at Period 3
# Accumulating ₱500,000 in 5 years at 8%. Deposit A = 500k * 0.08 / (1.08^5 - 1) = 500k * 0.170462 = 85,231.
# Fund after deposit 1: 85,231.
# Year 2 interest: 85,231 * 0.08 = 6,818.48. Balance end yr 2: 85,231 + 6,818.48 + 85,231 = 177,280.48.
# Year 3 interest: 177,280.48 * 0.08 = 14,182.44.
A135 = 500000 * 0.08 / (1.08**5 - 1)
I_yr3_135 = (A135 + A135 * 1.08) * 0.08
problems_131_155.append(make_p(
    135, 5, "Gradients & Amortization", "03_Annuities_Ordinary_Due_Deferred.pdf", "Doc 03: Sinking Fund Schedule",
    "Interest Earned by Sinking Fund During the 3rd Year (₱500k Target in 5 Years at 8%)",
    "An annual sinking fund accumulates ₱500,000 in 5 years at 8% per annum (annual deposit = ₱85,231). How much interest is earned by the sinking fund during the 3rd year specifically?",
    ["A. ₱14,182", "B. ₱13,637", "C. ₱15,200", "D. ₱12,450"], "A",
    "I_m = F_{m-1} \\cdot i; \\quad F_{m-1} = A \\left[ \\frac{(1+i)^{m-1} - 1}{i} \\right]",
    [{"step": 1, "title": "Compute Accumulated Fund at End of Year 2", "explanation": "F_2 = 85,231 × [(1.08)^2 - 1] / 0.08 = 85,231 × 2.08 = ₱177,280.48:", "calculation": "F_2 = ₱177,280.48"},
     {"step": 2, "title": "Compute Year 3 Interest Earned", "explanation": "Interest = F_2 × 0.08 = 177,280.48 × 0.08:", "calculation": f"I_3 = 177,280.48 \\times 0.08 = {p_peso(I_yr3_135)}"}],
    "₱14,182", ["500000 × 0.08 ÷ ( 1.08 [xʸ] 5 - 1 ) [=] ⟹ 85231, Ans × ( 1.08 [xʸ] 2 - 1 ) [=] ⟹ 14182.44"],
    "₱14,182", "In a sinking fund, interest earned during year m is based on the balance accumulated at year m-1.",
    "Notice: I_m = A × ((1+i)^(m-1) - 1).",
    [{"symbol": "Target", "meaning": "Future sum", "value": "₱500,000"}, {"symbol": "A", "meaning": "Annual deposit", "value": "₱85,231"}, {"symbol": "Year", "meaning": "Interest year", "value": "Year 3"}]
))

# 136: Deferred Arithmetic Gradient
# Gradient starts at Year 3. G = ₱3,000/yr for Years 3 through 7 (5 gradient terms). Base A = ₱20k (years 1-7). i = 10%.
# P_total = 20k*(P/A, 10%, 7) + G*(P/G, 10%, 6)*(1.10)^-1
# Let's compute directly: Years 1-2 = 20k. Year 3 = 23k, Year 4 = 26k, Year 5 = 29k, Year 6 = 32k, Year 7 = 35k.
# Base A = 20k for 7 yrs: 20k * 4.868419 = 97,368.
# Gradient G = 3k at t=3, 6k at t=4, 9k at t=5, 12k at t=6, 15k at t=7.
# At t=1, this is a standard gradient of length 6 with G=3k! So P_G at t=1 is 3k*(P/G, 10%, 6) = 3k * 9.68406 = 29,052.18.
# Discounted to t=0: 29,052.18 / 1.10 = 26,411.07.
# P_total = 97,368.38 + 26,411.07 = 123,779.45.
P136 = 123779.45
problems_131_155.append(make_p(
    136, 5, "Gradients & Amortization", "03_Annuities_Ordinary_Due_Deferred.pdf", "Doc 03: Deferred Arithmetic Gradient",
    "Present Worth of an Arithmetic Gradient Series Deferred to Year 3",
    "A machine requires base maintenance of ₱20,000 per year for 7 years. Starting at Year 3, additional overhaul costs increase by ₱3,000 each year through Year 7 (Year 3 = ₱23k, Year 4 = ₱26k, Year 5 = ₱29k, Year 6 = ₱32k, Year 7 = ₱35k). At 10% interest, find the total present worth.",
    ["A. ₱123,779", "B. ₱118,500", "C. ₱129,400", "D. ₱121,200"], "A",
    "P = A(P/A, i, 7) + G(P/G, i, 6)(1+i)^{-1}",
    [{"step": 1, "title": "Compute Base Annuity Present Worth", "explanation": "20,000 × (P/A, 10%, 7) = 20,000 × 4.868419 = ₱97,368.38:", "calculation": "P_A = ₱97,368.38"},
     {"step": 2, "title": "Compute Gradient Present Worth", "explanation": "Anchor gradient at t=1 (first increase at t=3): 3,000 × 9.68406 × (1.10)^(-1) = ₱26,411.07:", "calculation": "P_G = ₱26,411.07"},
     {"step": 3, "title": "Sum Both Components", "explanation": "97,368.38 + 26,411.07:", "calculation": f"P_{{tot}} = {p_peso(P136)}"}],
    "₱123,779", ["20000 × ( 1 - 1.10 [xʸ] -7 ) ÷ 0.10 + 3000 ÷ 0.10 × ( ( 1 - 1.10 [xʸ] -6 ) ÷ 0.10 - 6 × 1.10 [xʸ] -6 ) ÷ 1.10 [=] ⟹ 123779.45"],
    "123,779.45", "When gradient is deferred, discount the gradient present worth back to time zero.",
    "Ensure you correctly count the number of periods in the gradient sub-series.",
    [{"symbol": "Base", "meaning": "A = ₱20k", "value": "7 years"}, {"symbol": "Gradient", "meaning": "G = ₱3k", "value": "Starts Year 3"}]
))

# 137: Equal Principal vs Equal Total Installment
# Loan ₱300,000 for 3 years at 10% annual interest.
# Equal Principal: Principal = 100k/yr.
# Yr 1: P = 100k, Int = 30k => Total = 130k.
# Yr 2: P = 100k, Int = 20k => Total = 120k.
# Yr 3: P = 100k, Int = 10k => Total = 110k. Total interest = 60k.
# Equal Installment: A = 300k * (A/P, 10%, 3) = 300k * 0.402115 = 120,634.45/yr. Total paid = 361,903. Total int = 61,903.
# Interest difference = 61,903.35 - 60,000 = ₱1,903.35.
diff_int137 = 1903.35
problems_131_155.append(make_p(
    137, 5, "Gradients & Amortization", "03_Annuities_Ordinary_Due_Deferred.pdf", "Doc 03: Equal Principal vs Equal Total Installment",
    "Interest Savings from Equal Principal Repayment Plan vs Equal Total Installment Plan",
    "A contractor borrows ₱300,000 for 3 years at 10% annual interest. Compare Plan A (Equal annual principal repayments of ₱100,000 plus interest on unpaid balance) with Plan B (Equal total annual installments). How much total interest is saved under Plan A?",
    ["A. ₱1,903 saved under Plan A", "B. ₱3,500 saved under Plan A", "C. ₱2,450 saved under Plan A", "D. Zero savings (both pay equal interest)"], "A",
    "\\Delta \\text{Interest} = \\text{Total Int}_B - \\text{Total Int}_A",
    [{"step": 1, "title": "Compute Total Interest under Plan A (Equal Principal)", "explanation": "Yr 1: 30k; Yr 2: 20k; Yr 3: 10k:", "calculation": "\\text{Total Int}_A = 30,000 + 20,000 + 10,000 = ₱60,000"},
     {"step": 2, "title": "Compute Total Interest under Plan B (Equal Installment)", "explanation": "A = ₱120,634.45; Total paid = 3 × 120,634.45 = ₱361,903.35:", "calculation": "\\text{Total Int}_B = 361,903.35 - 300,000 = ₱61,903.35"},
     {"step": 3, "title": "Calculate Interest Savings", "explanation": "61,903.35 - 60,000:", "calculation": f"\\Delta \\text{{Int}} = {p_peso(diff_int137)}"}],
    "₱1,903 saved under Plan A", ["3 × ( 300000 × 0.10 ÷ ( 1 - 1.10 [xʸ] -3 ) ) - 300000 - 60000 [=] ⟹ 1903.35"],
    "₱1,903", "Equal principal repayments amortize the balance faster in early years, reducing total cumulative interest.",
    "Trade-off: Plan A requires higher cash outflows in the first year (₱130,000 vs ₱120,634).",
    [{"symbol": "Plan A", "meaning": "Equal principal", "value": "₱60,000 int"}, {"symbol": "Plan B", "meaning": "Equal installment", "value": "₱61,903 int"}]
))

# 138: Balloon Payment Loan Structure
# Borrow ₱1,000,000 for 5 years at 10% annual interest. Balloon payment of ₱400,000 at end of Year 5.
# A = [1,000,000 - 400,000*(1.10)^-5] * (A/P, 10%, 5) = [1M - 248,368.53] * 0.263797 = 751,631.47 * 0.263797 = ₱198,278.43/yr.
A138 = (1000000 - 400000 * 1.10**(-5)) * (0.10 / (1 - 1.10**(-5)))
problems_131_155.append(make_p(
    138, 5, "Gradients & Amortization", "03_Annuities_Ordinary_Due_Deferred.pdf", "Doc 03: Balloon Loan Structuring",
    "Annual Payment on a ₱1,000,000 Loan Structured with a ₱400,000 Final Balloon at 10%",
    "An electrical contracting company finances a mobile crane for ₱1,000,000 over 5 years at 10% annual interest. The contract stipulates a final balloon payment of ₱400,000 at the end of Year 5 alongside the final payment. What is the required annual installment?",
    ["A. ₱198,278/year", "B. ₱263,797/year", "C. ₱185,400/year", "D. ₱210,000/year"], "A",
    "A = \\left[ P - \\text{Balloon}(1+i)^{-n} \\right] (A/P, i, n)",
    [{"step": 1, "title": "Compute Present Worth of Balloon Payment", "explanation": "400,000 × (1.10)^(-5) = ₱248,368.53:", "calculation": "\\text{PW}_{balloon} = ₱248,368.53"},
     {"step": 2, "title": "Compute Net Principal to be Amortized", "explanation": "1,000,000 - 248,368.53 = ₱751,631.47:", "calculation": "P_{net} = ₱751,631.47"},
     {"step": 3, "title": "Calculate Annual Installment A", "explanation": "751,631.47 × (A/P, 10%, 5) = 751,631.47 × 0.263797:", "calculation": f"A = {p_peso(A138)}/\\text{{year}}"}],
    "₱198,278/year", ["( 1000000 - 400000 × 1.10 [xʸ] -5 ) × 0.10 ÷ ( 1 - 1.10 [xʸ] -5 ) [=] ⟹ 198278.43"],
    "₱198,278/yr", "The balloon payment reduces the annual installment from ₱263,797 down to ₱198,278.",
    "Make sure to discount the balloon payment to Year 0 before subtracting from initial principal.",
    [{"symbol": "P", "meaning": "Principal", "value": "₱1,000,000"}, {"symbol": "Balloon", "meaning": "Final lump sum", "value": "₱400,000"}, {"symbol": "A", "meaning": "Annual payment", "value": "₱198,278"}]
))

# 139: Accelerated Mortgage Repayment
# Loan ₱1,200,000 at 12% monthly (1%/mo) for 15 yrs (180 mos). Regular A = 1,200,000 * 0.012002 = ₱14,402.05/mo.
# Borrower pays extra ₱3,000/mo (Total = ₱17,402.05/mo).
# Find new number of months n_new:
# 1,200,000 = 17,402.05 * [1 - (1.01)^-n] / 0.01 => (1.01)^-n = 1 - 12,000/17,402.05 = 0.310426
# n_new = -ln(0.310426) / ln(1.01) = 1.170133 / 0.009950 = 117.6 months (9.8 years vs 15 years!).
n_new139 = -math.log(1 - (1200000 * 0.01 / 17402.05)) / math.log(1.01)
time_saved139 = 180 - n_new139
problems_131_155.append(make_p(
    139, 5, "Gradients & Amortization", "03_Annuities_Ordinary_Due_Deferred.pdf", "Doc 03: Accelerated Loan Amortization",
    "Payoff Acceleration from Paying an Extra ₱3,000 Monthly on a ₱1,200,000 Loan",
    "An engineering office has a 15-year (180 months) mortgage of ₱1,200,000 at 12% compounded monthly (regular payment = ₱14,402/mo). If the firm increases its monthly payment by ₱3,000 to ₱17,402/mo, how many months early will the mortgage be paid off?",
    ["A. 62.4 months early (5.2 years saved)", "B. 45.0 months early (3.8 years saved)", "C. 75.0 months early (6.3 years saved)", "D. 36.0 months early (3.0 years saved)"], "A",
    "n_{new} = -\\frac{\\ln\\left(1 - \\frac{P \\cdot i}{A_{new}}\\right)}{\\ln(1+i)}; \\quad \\Delta n = n_{old} - n_{new}",
    [{"step": 1, "title": "Compute New Amortization Duration", "explanation": "-ln(1 - 12,000 / 17,402.05) / ln(1.01) = 117.6 months:", "calculation": f"n_{{new}} = {n_new139:.1f} \\text{{ months}}"},
     {"step": 2, "title": "Determine Time Saved", "explanation": "180 - 117.6 = 62.4 months:", "calculation": f"\\Delta n = 180 - 117.6 = {time_saved139:.1f} \\text{{ months}}"}],
    "62.4 months early (5.2 years saved)", ["- [ln] ( 1 - 1200000 × 0.01 ÷ 17402.05 ) ÷ [ln] 1.01 [=] ⟹ 117.6, 180 - Ans [=] ⟹ 62.4"],
    "62.4 months saved", "A modest 20% increase in monthly payment cuts the loan duration by over 34% (5.2 years).",
    "Total interest savings exceeds ₱380,000 over the life of the loan.",
    [{"symbol": "Original", "meaning": "180 months", "value": "₱14,402/mo"}, {"symbol": "New", "meaning": "117.6 months", "value": "₱17,402/mo"}, {"symbol": "Saved", "meaning": "Time reduction", "value": "62.4 months"}]
))

# 140: Multi-Tier Loan Schedule
# Loan ₱500,000 for 4 years. Year 1-2 at 8%, Year 3-4 at 12%. Equal annual payments A for 4 years.
# P = A*(P/A, 8%, 2) + A*(P/A, 12%, 2)*(1.08)^-2
# (P/A, 8%, 2) = 1.783265
# (P/A, 12%, 2) = 1.690051 => discounted: 1.690051 / 1.1664 = 1.448946
# Total factor = 1.783265 + 1.448946 = 3.232211
# A = 500,000 / 3.232211 = ₱154,692.87/yr.
A140 = 500000 / (1.783265 + 1.448946)
problems_131_155.append(make_p(
    140, 5, "Gradients & Amortization", "03_Annuities_Ordinary_Due_Deferred.pdf", "Doc 03: Multi-Tier Interest Amortization",
    "Equal Annual Payment to Amortize ₱500,000 over 4 Years with Stepped Interest Rates",
    "A government development loan of ₱500,000 is amortized by 4 equal annual payments. The interest rate is 8% for the first 2 years, increasing to 12% for the final 2 years. What is the required equal annual payment A?",
    ["A. ₱154,693/year", "B. ₱162,500/year", "C. ₱148,200/year", "D. ₱158,400/year"], "A",
    "P = A(P/A, 8%, 2) + A(P/A, 12%, 2)(1.08)^{-2}",
    [{"step": 1, "title": "Compute First 2 Years Present Factor", "explanation": "(P/A, 8%, 2) = 1.783265:", "calculation": "\\text{Factor}_1 = 1.783265"},
     {"step": 2, "title": "Compute Second 2 Years Present Factor", "explanation": "(P/A, 12%, 2) × (1.08)^(-2) = 1.690051 / 1.1664 = 1.448946:", "calculation": "\\text{Factor}_2 = 1.448946"},
     {"step": 3, "title": "Solve for Equal Annual Installment A", "explanation": "500,000 / (1.783265 + 1.448946) = 500,000 / 3.232211:", "calculation": f"A = \\frac{{500,000}}{{3.232211}} = {p_peso(A140)}/\\text{{year}}"}],
    "₱154,693/year", ["500000 ÷ ( ( 1 - 1.08 [xʸ] -2 ) ÷ 0.08 + ( 1 - 1.12 [xʸ] -2 ) ÷ 0.12 ÷ 1.08 [xʸ] 2 ) [=] ⟹ 154692.87"],
    "₱154,693", "Factor out A from both stages and solve directly.",
    "Always discount the second stage by the first stage's interest rate factor (1.08)^2.",
    [{"symbol": "P", "meaning": "Principal", "value": "₱500,000"}, {"symbol": "i_1", "meaning": "Years 1-2 rate", "value": "8%"}, {"symbol": "i_2", "meaning": "Years 3-4 rate", "value": "12%"}]
))

# 141: Present Worth Comparison of Two Pumps (Equal Lives)
# Pump A: FC = 120,000, O = 15,000/yr, SV = 20,000, Life = 8 yrs, MARR = 12%.
# Pump B: FC = 160,000, O = 8,000/yr, SV = 30,000, Life = 8 yrs, MARR = 12%.
# (P/A, 12%, 8) = 4.967640; (P/F, 12%, 8) = 0.403883
PW_A141 = 120000 + 15000*4.967640 - 20000*0.403883 # 120k + 74,515 - 8,078 = 186,437
PW_B141 = 160000 + 8000*4.967640 - 30000*0.403883  # 160k + 39,741 - 12,116 = 187,625
diff141 = PW_B141 - PW_A141 # Pump A is cheaper by ₱1,188
problems_131_155.append(make_p(
    141, 6, "Capital Budgeting & Evaluation", "06_BreakEven_Payback_Rate_of_Return.pdf", "Doc 06: Present Worth Comparison",
    "Present Worth Cost Comparison of Two Pumping Systems with 8-Year Equal Lives at 12% MARR",
    "A utility evaluates two 8-year pumping systems at 12% MARR: Pump A (First Cost = ₱120,000, annual operating cost = ₱15,000, salvage value = ₱20,000) and Pump B (First Cost = ₱160,000, annual operating cost = ₱8,000, salvage value = ₱30,000). Which pump has the lower present worth of cost and by how much?",
    ["A. Pump A is cheaper by ₱1,188", "B. Pump B is cheaper by ₱4,500", "C. Pump A is cheaper by ₱6,200", "D. Pump B is cheaper by ₱1,188"], "A",
    "PW = FC + O(P/A, i, n) - SV(P/F, i, n)",
    [{"step": 1, "title": "Compute Present Worth of Cost for Pump A", "explanation": "120k + 15k(4.96764) - 20k(0.40388) = ₱186,437:", "calculation": f"PW_A = {p_peso(PW_A141)}"},
     {"step": 2, "title": "Compute Present Worth of Cost for Pump B", "explanation": "160k + 8k(4.96764) - 30k(0.40388) = ₱187,625:", "calculation": f"PW_B = {p_peso(PW_B141)}"},
     {"step": 3, "title": "Compare Alternatives", "explanation": "Pump A is cheaper by 187,625 - 186,437 = ₱1,188:", "calculation": f"\\Delta PW = {p_peso(diff141)}"}],
    "Pump A is cheaper by ₱1,188", ["120000 + 15000 × 4.96764 - 20000 × 0.40388 [=] ⟹ 186437, 160000 + 8000 × 4.96764 - 30000 × 0.40388 [=] ⟹ 187625"],
    "Pump A: ₱186,437 vs Pump B: ₱187,625", "Subtract salvage value since it is a cash inflow returning capital at end of life.",
    "Very close margin demonstrates how higher first cost almost balances annual savings.",
    [{"symbol": "Pump A", "meaning": "FC=₱120k, O=₱15k, SV=₱20k", "value": "₱186,437 PW"}, {"symbol": "Pump B", "meaning": "FC=₱160k, O=₱8k, SV=₱30k", "value": "₱187,625 PW"}]
))

# 142: Present Worth Comparison of Unequal Lives (LCM)
# Machine X: Cost = ₱100,000, Life = 4 yrs, SV = ₱10,000, O = ₱20,000/yr.
# Machine Y: Cost = ₱150,000, Life = 6 yrs, SV = ₱15,000, O = ₱14,000/yr.
# LCM = 12 years. MARR = 10%.
# Let's use EUAC which gives identical decision without expanding to 12 years:
# EUAC_X = 100k*(A/P, 10%, 4) - 10k*(A/F, 10%, 4) + 20k = 100k(0.315471) - 10k(0.215471) + 20k = 31,547 - 2,155 + 20,000 = 49,392/yr.
# EUAC_Y = 150k*(A/P, 10%, 6) - 15k*(A/F, 10%, 6) + 14k = 150k(0.229607) - 15k(0.129607) + 14k = 34,441 - 1,944 + 14,000 = 46,497/yr.
# PW over 12 yrs: PW_X = 49,392 * (P/A, 10%, 12) = 49,392 * 6.813692 = 336,542.
# PW_Y = 46,497 * 6.813692 = 316,816. Machine Y is cheaper by ₱19,726 over 12 yrs.
diff_lcm142 = 336542 - 316816
problems_131_155.append(make_p(
    142, 6, "Capital Budgeting & Evaluation", "06_BreakEven_Payback_Rate_of_Return.pdf", "Doc 06: Unequal Lives & LCM Analysis",
    "Present Worth Comparison over 12-Year Least Common Multiple (LCM) at 10% MARR",
    "Two industrial chillers have unequal lives at 10% MARR: Chiller X (Cost = ₱100k, life = 4 yrs, SV = ₱10k, O&M = ₱20k/yr) and Chiller Y (Cost = ₱150k, life = 6 yrs, SV = ₱15k, O&M = ₱14k/yr). Using the Least Common Multiple (LCM = 12 years) study period, which chiller is more economical and by how much?",
    ["A. Chiller Y is cheaper by ₱19,726", "B. Chiller X is cheaper by ₱14,500", "C. Chiller Y is cheaper by ₱28,400", "D. Chiller X is cheaper by ₱19,726"], "A",
    "\\text{LCM} = 12 \\text{ years}; \\quad \\text{PW}_{12} = \\text{EUAC} \\times (P/A, 10\\%, 12)",
    [{"step": 1, "title": "Compute EUAC for Chiller X (4-Year Cycle)", "explanation": "100k(A/P, 10%, 4) - 10k(A/F, 10%, 4) + 20k = ₱49,392/yr:", "calculation": "\\text{EUAC}_X = 31,547 - 2,155 + 20,000 = ₱49,392/\\text{year}"},
     {"step": 2, "title": "Compute EUAC for Chiller Y (6-Year Cycle)", "explanation": "150k(A/P, 10%, 6) - 15k(A/F, 10%, 6) + 14k = ₱46,497/yr:", "calculation": "\\text{EUAC}_Y = 34,441 - 1,944 + 14,000 = ₱46,497/\\text{year}"},
     {"step": 3, "title": "Convert to 12-Year Present Worth and Compare", "explanation": "Multiply EUAC by (P/A, 10%, 12) = 6.813692:", "calculation": f"\\Delta \\text{{PW}} = (49,392 - 46,497) \\times 6.813692 = 2,895 \\times 6.813692 = {p_peso(diff_lcm142)}"}],
    "Chiller Y is cheaper by ₱19,726", ["( 49392 - 46497 ) × ( 1 - 1.10 [xʸ] -12 ) ÷ 0.10 [=] ⟹ 19725.64"],
    "Chiller Y is cheaper by ₱19,726", "Pro-Tip: Compute EUAC first, then multiply by (P/A, i, LCM). This avoids modeling multiple replacement cycles.",
    "Unequal life alternatives cannot be compared directly using simple single-cycle present worth.",
    [{"symbol": "LCM", "meaning": "Study horizon", "value": "12 years"}, {"symbol": "EUAC_X", "meaning": "Chiller X annual cost", "value": "₱49,392/yr"}, {"symbol": "EUAC_Y", "meaning": "Chiller Y annual cost", "value": "₱46,497/yr"}]
))

# 143: Equivalent Uniform Annual Cost (EUAC) Comparison
# Option 1: FC = 200,000, L = 5, SV = 20,000, O = 30,000. MARR = 10%.
# Option 2: FC = 350,000, L = 10, SV = 50,000, O = 18,000. MARR = 10%.
# EUAC_1 = 200k(0.263797) - 20k(0.163797) + 30k = 52,759 - 3,276 + 30k = ₱79,483/yr.
# EUAC_2 = 350k(0.162745) - 50k(0.062745) + 18k = 56,961 - 3,137 + 18k = ₱71,824/yr.
# Difference = 79,483 - 71,824 = ₱7,659/yr in favor of Option 2.
diff_euac143 = 79483 - 71824
problems_131_155.append(make_p(
    143, 6, "Capital Budgeting & Evaluation", "06_BreakEven_Payback_Rate_of_Return.pdf", "Doc 06: EUAC Analysis",
    "Equivalent Uniform Annual Cost (EUAC) Comparison of Two Equipment Alternatives",
    "Compare two equipment options at 10% MARR: Option 1 (Cost = ₱200,000, life = 5 yrs, SV = ₱20,000, annual maintenance = ₱30,000) and Option 2 (Cost = ₱350,000, life = 10 yrs, SV = ₱50,000, annual maintenance = ₱18,000). Which option has the lower annual cost and by how much?",
    ["A. Option 2 is cheaper by ₱7,659/year", "B. Option 1 is cheaper by ₱5,200/year", "C. Option 2 is cheaper by ₱9,800/year", "D. Option 1 is cheaper by ₱7,659/year"], "A",
    "\\text{EUAC} = (FC - SV)(A/P, i, n) + SV \\cdot i + O",
    [{"step": 1, "title": "Compute EUAC for Option 1", "explanation": "(200k - 20k)(A/P, 10%, 5) + 20k(0.10) + 30k = 180k(0.263797) + 2,000 + 30,000 = ₱79,483:", "calculation": "\\text{EUAC}_1 = ₱79,483/\\text{year}"},
     {"step": 2, "title": "Compute EUAC for Option 2", "explanation": "(350k - 50k)(A/P, 10%, 10) + 50k(0.10) + 18k = 300k(0.162745) + 5,000 + 18,000 = ₱71,824:", "calculation": "\\text{EUAC}_2 = ₱71,824/\\text{year}"},
     {"step": 3, "title": "Determine Annual Savings", "explanation": "79,483 - 71,824 = ₱7,659:", "calculation": f"\\Delta \\text{{EUAC}} = {p_peso(diff_euac143)}/\\text{{year}}"}],
    "Option 2 is cheaper by ₱7,659/year", ["180000 × 0.10 ÷ ( 1 - 1.10 [xʸ] -5 ) + 2000 + 30000 [=] ⟹ 79483.46, 300000 × 0.10 ÷ ( 1 - 1.10 [xʸ] -10 ) + 5000 + 18000 [=] ⟹ 71823.50"],
    "Option 2 saves ₱7,659/yr", "EUAC shortcut formula: EUAC = (FC - SV)(A/P, i, n) + SV · i + O.",
    "EUAC is the preferred method for unequal lives because it handles differing durations automatically.",
    [{"symbol": "EUAC_1", "meaning": "Option 1 annual cost", "value": "₱79,483/yr"}, {"symbol": "EUAC_2", "meaning": "Option 2 annual cost", "value": "₱71,824/yr"}]
))

# 144: Future Worth Method Comparison
# Two investments over 15 years at 8%.
# Option A: ₱100k today. FW_A = 100k * 1.08^15 = 100k * 3.172169 = ₱317,217.
# Option B: ₱10k end of each year for 15 yrs. FW_B = 10k * (1.08^15 - 1)/0.08 = 10k * 27.152114 = ₱271,521.
# Diff = 317,217 - 271,521 = ₱45,696 in favor of Option A.
FW_A144 = 100000 * 1.08**15
FW_B144 = 10000 * ((1.08**15 - 1) / 0.08)
diff_fw144 = FW_A144 - FW_B144
problems_131_155.append(make_p(
    144, 6, "Capital Budgeting & Evaluation", "06_BreakEven_Payback_Rate_of_Return.pdf", "Doc 06: Future Worth Comparison",
    "Future Worth Method Comparison: Lump Sum of ₱100k vs Annual Deposits of ₱10k at 8%",
    "An engineering reserve fund evaluates two savings options over 15 years at 8% per annum: Option A (Deposit ₱100,000 lump sum today) and Option B (Deposit ₱10,000 at the end of each year for 15 years). What is the future worth difference at Year 15?",
    ["A. Option A yields ₱45,696 more", "B. Option B yields ₱25,400 more", "C. Option A yields ₱32,800 more", "D. Both yield identical future values"], "A",
    "FW_A = P(1+i)^n; \\quad FW_B = A \\left[ \\frac{(1+i)^n - 1}{i} \\right]",
    [{"step": 1, "title": "Compute Future Worth of Option A", "explanation": "100,000 × (1.08)^15 = 100,000 × 3.172169 = ₱317,216.91:", "calculation": f"FW_A = {p_peso(FW_A144)}"},
     {"step": 2, "title": "Compute Future Worth of Option B", "explanation": "10,000 × [(1.08)^15 - 1] / 0.08 = 10,000 × 27.152114 = ₱271,521.14:", "calculation": f"FW_B = {p_peso(FW_B144)}"},
     {"step": 3, "title": "Determine Difference", "explanation": "317,216.91 - 271,521.14 = ₱45,695.77:", "calculation": f"\\Delta FW = {p_peso(diff_fw144)}"}],
    "Option A yields ₱45,696 more", ["100000 × 1.08 [xʸ] 15 [=] ⟹ 317216.91, 10000 × ( 1.08 [xʸ] 15 - 1 ) ÷ 0.08 [=] ⟹ 271521.14, Ans - 317216.91 [=] ⟹ -45695.77"],
    "Option A: ₱317,217 vs Option B: ₱271,521", "Option A deposits the full ₱100k at t=0, so all capital compounds for the full 15 years.",
    "Option B deposits total ₱150,000 over time, yet accumulates less future value due to delayed deposit timing.",
    [{"symbol": "FW_A", "meaning": "Lump sum future value", "value": "₱317,217"}, {"symbol": "FW_B", "meaning": "Annuity future value", "value": "₱271,521"}]
))

# 145: Rate of Return (IRR) Computation
# Project: Investment P = 500,000, Net annual revenue = ₱110,000 for 7 years.
# (P/A, i, 7) = 500k / 110k = 4.545455.
# Let's solve: At i = 10%: (P/A, 10%, 7) = 4.868. At i = 12%: 4.5638. At i = 12.16%: 4.545.
# i* ≈ 12.16%
problems_131_155.append(make_p(
    145, 6, "Capital Budgeting & Evaluation", "06_BreakEven_Payback_Rate_of_Return.pdf", "Doc 06: Internal Rate of Return (IRR)",
    "Rate of Return (IRR) on a ₱500,000 Energy Efficiency Retrofit Yielding ₱110,000/yr for 7 Years",
    "A commercial building installs smart variable-frequency drive controls for ₱500,000. The retrofit produces verified annual electricity savings of ₱110,000 at the end of each year for 7 years (zero salvage value). What is the Internal Rate of Return (IRR) of this investment?",
    ["A. 12.16% per year", "B. 11.50% per year", "C. 13.00% per year", "D. 10.85% per year"], "A",
    "NPW(i^*) = -P + A(P/A, i^*, n) = 0 \\implies (P/A, i^*, 7) = \\frac{P}{A} = \\frac{500,000}{110,000} = 4.545455",
    [{"step": 1, "title": "Compute Annuity Ratio", "explanation": "500,000 / 110,000 = 4.545455:", "calculation": "(P/A, i^*, 7) = 4.545455"},
     {"step": 2, "title": "Interpolate or Solve via Canon SOLVE", "explanation": "At 12%, (P/A) = 4.5638. At 13%, (P/A) = 4.4226. Solving yields i* = 12.16%:", "calculation": "i^* = 12.16\\%"}],
    "12.16% per year", ["500000 = 110000 × ( 1 - ( 1 + X ) [xʸ] -7 ) ÷ X [SHIFT] [SOLVE] ⟹ X = 0.12160"],
    "12.16%", "On Canon F-789SGA, enter the equation using Alpha X and solve directly via [SHIFT] [SOLVE].",
    "If company MARR is 10%, this project is attractive because IRR (12.16%) > MARR.",
    [{"symbol": "P", "meaning": "Initial cost", "value": "₱500,000"}, {"symbol": "A", "meaning": "Annual savings", "value": "₱110,000"}, {"symbol": "n", "meaning": "Duration", "value": "7 years"}]
))

# 146: Incremental Rate of Return (Delta IRR)
# Machine 1: Cost = ₱200,000, Annual savings = ₱50,000/yr for 6 yrs.
# Machine 2: Cost = ₱300,000, Annual savings = ₱75,000/yr for 6 yrs.
# Incremental: ΔCost = ₱100,000, ΔSavings = ₱25,000/yr for 6 yrs.
# (P/A, Δi, 6) = 100k / 25k = 4.000.
# At 12%: (P/A) = 4.1114. At 13%: (P/A) = 3.9975. ΔIRR ≈ 12.98% ≈ 13.0%.
problems_131_155.append(make_p(
    146, 6, "Capital Budgeting & Evaluation", "06_BreakEven_Payback_Rate_of_Return.pdf", "Doc 06: Incremental ROR Analysis",
    "Incremental Rate of Return (ΔIRR) Between Two Automation Systems with 6-Year Lives",
    "Two automated packing machines are evaluated: Machine 1 (Cost = ₱200,000, annual net savings = ₱50,000/yr for 6 years) and Machine 2 (Cost = ₱300,000, annual net savings = ₱75,000/yr for 6 years). What is the incremental rate of return (ΔIRR) on the additional ₱100,000 investment in Machine 2?",
    ["A. ΔIRR = 12.98% per year", "B. ΔIRR = 15.20% per year", "C. ΔIRR = 11.50% per year", "D. ΔIRR = 14.10% per year"], "A",
    "\\Delta P = P_2 - P_1; \\quad \\Delta A = A_2 - A_1; \\quad (P/A, \\Delta i^*, 6) = \\frac{\\Delta P}{\\Delta A} = \\frac{100,000}{25,000} = 4.000000",
    [{"step": 1, "title": "Compute Incremental Cash Flows", "explanation": "ΔCost = 300k - 200k = ₱100,000; ΔSavings = 75k - 50k = ₱25,000/year:", "calculation": "\\Delta P = ₱100,000; \\quad \\Delta A = ₱25,000/\\text{year}"},
     {"step": 2, "title": "Solve for Incremental ROR", "explanation": "Solve (P/A, Δi, 6) = 100,000 / 25,000 = 4.000000:", "calculation": "\\Delta i^* = 12.98\\%"}],
    "ΔIRR = 12.98% per year", ["100000 = 25000 × ( 1 - ( 1 + X ) [xʸ] -6 ) ÷ X [SHIFT] [SOLVE] ⟹ X = 0.12977"],
    "12.98%", "If MARR is 10%, select the higher investment (Machine 2) because the incremental return 12.98% > 10%.",
    "Incremental ROR analysis is mandatory when evaluating mutually exclusive alternatives.",
    [{"symbol": "ΔP", "meaning": "Additional cost", "value": "₱100,000"}, {"symbol": "ΔA", "meaning": "Additional savings", "value": "₱25,000/yr"}]
))

# 147: Benefit-Cost Ratio (B/C Ratio)
# Public flood control project: Initial Cost = ₱20,000,000, Life = 30 yrs, MARR = 8%.
# Annual operating/maint = ₱400,000. Annual flood damage reduction (Benefits) = ₱2,800,000.
# Annual capital cost = 20M * (A/P, 8%, 30) = 20M * 0.088827 = 1,776,549. Total annual cost = 1,776,549 + 400,000 = 2,176,549.
# B/C = 2,800,000 / 2,176,549 = 1.2864 => 1.29.
BC147 = 2800000.0 / (20000000 * 0.088827 + 400000)
problems_131_155.append(make_p(
    147, 6, "Capital Budgeting & Evaluation", "06_BreakEven_Payback_Rate_of_Return.pdf", "Doc 06: Benefit-Cost Ratio Analysis",
    "Benefit-Cost Ratio (B/C) of a Public Drainage and Flood Control Infrastructure Project",
    "A government flood-mitigation project costs ₱20,000,000, has a useful life of 30 years, and annual maintenance of ₱400,000. It prevents an estimated ₱2,800,000 in commercial flood damages annually. At a social discount rate of 8% per annum, what is the conventional Benefit-Cost ratio (B/C)?",
    ["A. B/C = 1.29 (Economically Justified)", "B. B/C = 0.95 (Unjustified)", "C. B/C = 1.45 (Economically Justified)", "D. B/C = 1.12 (Economically Justified)"], "A",
    "B/C = \\frac{\\text{Annual Benefits}}{\\text{CR} + \\text{Annual O\\&M}} = \\frac{B}{I(A/P, i, n) + M}",
    [{"step": 1, "title": "Compute Annual Capital Recovery Cost CR", "explanation": "20,000,000 × (A/P, 8%, 30) = 20M × 0.088827 = ₱1,776,549/yr:", "calculation": "\\text{CR} = ₱1,776,549"},
     {"step": 2, "title": "Compute Total Annual Equivalent Cost", "explanation": "CR + O&M = 1,776,549 + 400,000 = ₱2,176,549/yr:", "calculation": "\\text{Total Cost} = ₱2,176,549"},
     {"step": 3, "title": "Compute Benefit-Cost Ratio", "explanation": "2,800,000 / 2,176,549:", "calculation": f"B/C = \\frac{{2,800,000}}{{2,176,549}} = {BC147:.2f}"}],
    "B/C = 1.29 (Economically Justified)", ["2800000 ÷ ( 20000000 × 0.08 ÷ ( 1 - 1.08 [xʸ] -30 ) + 400000 ) [=] ⟹ 1.2864"],
    "B/C = 1.29", "A project is acceptable if B/C ≥ 1.0. Here B/C = 1.29 > 1.0, so the project is economically justified.",
    "Conventional B/C places O&M in the denominator with capital costs.",
    [{"symbol": "Benefits", "meaning": "Annual damages prevented", "value": "₱2,800,000/yr"}, {"symbol": "Cost", "meaning": "Total annual cost", "value": "₱2,176,549/yr"}]
))

# 148: Incremental Benefit-Cost Ratio
# Design A: Cost = ₱10M, B = ₱1.6M/yr, C = ₱1.1M/yr. B/C = 1.45.
# Design B: Cost = ₱15M, B = ₱2.2M/yr, C = ₱1.5M/yr. B/C = 1.47.
# ΔB = 2.2M - 1.6M = 0.6M. ΔC = 1.5M - 1.1M = 0.4M.
# ΔB/ΔC = 0.6M / 0.4M = 1.50 > 1.0 => Choose Design B!
problems_131_155.append(make_p(
    148, 6, "Capital Budgeting & Evaluation", "06_BreakEven_Payback_Rate_of_Return.pdf", "Doc 06: Incremental B/C Ratio",
    "Incremental Benefit-Cost Ratio (ΔB/ΔC) Between Two Municipal Highway Alignments",
    "Two municipal highway designs are evaluated: Design A (Equivalent Annual Cost = ₱1,100,000, Annual Benefits = ₱1,600,000, B/C = 1.45) and Design B (Equivalent Annual Cost = ₱1,500,000, Annual Benefits = ₱2,200,000, B/C = 1.47). What is the incremental Benefit-Cost ratio (ΔB/ΔC), and which design should be selected?",
    ["A. ΔB/ΔC = 1.50 | Select Design B", "B. ΔB/ΔC = 0.85 | Select Design A", "C. ΔB/ΔC = 1.20 | Select Design B", "D. ΔB/ΔC = 1.50 | Select Design A"], "A",
    "\\frac{\\Delta B}{\\Delta C} = \\frac{B_B - B_A}{C_B - C_A}",
    [{"step": 1, "title": "Compute Incremental Benefits", "explanation": "2,200,000 - 1,600,000 = ₱600,000/yr:", "calculation": "\\Delta B = ₱600,000"},
     {"step": 2, "title": "Compute Incremental Costs", "explanation": "1,500,000 - 1,100,000 = ₱400,000/yr:", "calculation": "\\Delta C = ₱400,000"},
     {"step": 3, "title": "Evaluate Incremental Ratio", "explanation": "600,000 / 400,000 = 1.50:", "calculation": "\\frac{\\Delta B}{\\Delta C} = \\frac{600,000}{400,000} = 1.50 > 1.0 \\implies \\text{Select Design B}"}],
    "ΔB/ΔC = 1.50 | Select Design B", ["( 2.2 - 1.6 ) ÷ ( 1.5 - 1.1 ) [=] ⟹ 1.50"],
    "ΔB/ΔC = 1.50 (Select B)", "Since ΔB/ΔC = 1.50 > 1.0, the extra cost of Design B is justified by the extra benefits.",
    "Never select the project based solely on the highest individual B/C ratio; incremental analysis is required.",
    [{"symbol": "ΔB", "meaning": "Incremental benefits", "value": "₱600,000"}, {"symbol": "ΔC", "meaning": "Incremental cost", "value": "₱400,000"}]
))

# 149: Modified Benefit-Cost Ratio
# Benefits B = 2.8M, Disbenefits D = ₱300k, Capital Cost CR = ₱1.7765M, O&M = ₱400k.
# Modified B/C = (B - D - O&M) / CR = (2.8M - 0.3M - 0.4M) / 1.7765M = 2.1M / 1.7765M = 1.182.
BC_mod149 = (2800000 - 300000 - 400000) / 1776549.0
problems_131_155.append(make_p(
    149, 6, "Capital Budgeting & Evaluation", "06_BreakEven_Payback_Rate_of_Return.pdf", "Doc 06: Modified B/C Ratio",
    "Modified Benefit-Cost Ratio (B/C_mod) Treating Maintenance as a Benefit Deduction",
    "For the flood project in Problem 147 (Annual Benefits = ₱2.8M, Annual Disbenefits to agricultural land = ₱300k, Capital Recovery = ₱1,776,549, Annual O&M = ₱400k), what is the Modified Benefit-Cost Ratio?",
    ["A. B/C_mod = 1.18", "B. B/C_mod = 1.29", "C. B/C_mod = 1.05", "D. B/C_mod = 1.35"], "A",
    "B/C_{\\text{mod}} = \\frac{B - D - M}{I(A/P, i, n)} = \\frac{B - D - M}{\\text{CR}}",
    [{"step": 1, "title": "Compute Net Annual Benefits in Numerator", "explanation": "2.8M - 300k - 400k = ₱2,100,000:", "calculation": "\\text{Net Benefits} = 2,800,000 - 300,000 - 400,000 = ₱2,100,000"},
     {"step": 2, "title": "Divide by Capital Cost in Denominator", "explanation": "2,100,000 / 1,776,549:", "calculation": f"B/C_{{mod}} = \\frac{{2,100,000}}{{1,776,549}} = {BC_mod149:.2f}"}],
    "B/C_mod = 1.18", ["( 2800000 - 300000 - 400000 ) ÷ 1776549 [=] ⟹ 1.18206"],
    "1.18", "Modified B/C places O&M expenses in the numerator as a negative benefit rather than in the denominator.",
    "Both conventional and modified B/C always agree on whether a project is justified (both > 1.0 or both < 1.0).",
    [{"symbol": "B", "meaning": "Benefits", "value": "₱2.8M"}, {"symbol": "D", "meaning": "Disbenefits", "value": "₱300k"}, {"symbol": "M", "meaning": "O&M", "value": "₱400k"}, {"symbol": "CR", "meaning": "Capital", "value": "₱1.7765M"}]
))

# 150: Simple vs Discounted Payback Period
# Cost = ₱400,000, Net annual cash flow = ₱90,000/yr. MARR = 10%.
# Simple payback = 400k / 90k = 4.44 years.
# Discounted payback: 400k = 90k * (P/A, 10%, n) => (P/A, 10%, n) = 4.4444.
# (1 - 1.10^-n)/0.10 = 4.4444 => 1 - 1.10^-n = 0.4444 => 1.10^-n = 0.5555
# n_disc = -ln(0.5555) / ln(1.10) = 0.58778 / 0.09531 = 6.17 years!
t_simple150 = 400000.0 / 90000.0 # 4.44 yrs
t_disc150 = -math.log(1 - (400000 * 0.10 / 90000)) / math.log(1.10) # 6.17 yrs
problems_131_155.append(make_p(
    150, 6, "Capital Budgeting & Evaluation", "06_BreakEven_Payback_Rate_of_Return.pdf", "Doc 06: Simple vs Discounted Payback",
    "Comparison of Simple Payback Period vs Discounted Payback Period at 10% MARR",
    "A biomass boiler economizer requires an initial investment of ₱400,000 and generates net fuel cost savings of ₱90,000 per year. Compare the simple payback period with the discounted payback period at a 10% MARR.",
    ["A. Simple: 4.44 years | Discounted: 6.17 years", "B. Simple: 4.44 years | Discounted: 4.44 years", "C. Simple: 5.00 years | Discounted: 7.20 years", "D. Simple: 3.80 years | Discounted: 5.50 years"], "A",
    "t_{\\text{simple}} = \\frac{P}{A}; \\quad t_{\\text{disc}} = -\\frac{\\ln\\left(1 - \\frac{P \\cdot i}{A}\\right)}{\\ln(1+i)}",
    [{"step": 1, "title": "Compute Simple Payback Period", "explanation": "400,000 / 90,000 = 4.44 years:", "calculation": f"t_{{simple}} = \\frac{{400,000}}{{90,000}} = {t_simple150:.2f} \\text{{ years}}"},
     {"step": 2, "title": "Compute Discounted Payback Period", "explanation": "-ln(1 - 400k(0.10)/90k) / ln(1.10) = -ln(0.555556) / ln(1.10) = 6.17 years:", "calculation": f"t_{{disc}} = {t_disc150:.2f} \\text{{ years}}"}],
    "Simple: 4.44 years | Discounted: 6.17 years", ["400000 ÷ 90000 [=] ⟹ 4.444, - [ln] ( 1 - 400000 × 0.10 ÷ 90000 ) ÷ [ln] 1.10 [=] ⟹ 6.1668"],
    "4.44 yrs vs 6.17 yrs", "Simple payback ignores the time value of money, understating the true recovery period.",
    "Discounted payback is always strictly longer than simple payback for any positive interest rate.",
    [{"symbol": "Investment", "meaning": "Initial outlay", "value": "₱400,000"}, {"symbol": "Savings", "meaning": "Annual savings", "value": "₱90,000/yr"}, {"symbol": "MARR", "meaning": "Rate", "value": "10%"}]
))

# 151: MARR Decision Rule
problems_131_155.append(make_p(
    151, 6, "Capital Budgeting & Evaluation", "06_BreakEven_Payback_Rate_of_Return.pdf", "Doc 06: MARR Hurdle Rate Criteria",
    "Project Acceptance Decision Under Minimum Attractive Rate of Return (MARR) Criteria",
    "An electrical engineering contractor has an internal corporate MARR of 14%. Four independent energy projects have computed internal rates of return: Project W (IRR = 12.5%), Project X (IRR = 15.2%), Project Y (IRR = 14.0%), and Project Z (IRR = 16.8%). Which projects should be accepted?",
    ["A. Projects X, Y, and Z (IRR ≥ MARR)", "B. Projects X and Z only (IRR > MARR)", "C. Project Z only (highest return)", "D. All four projects"], "A",
    "\\text{Accept project if } \\text{IRR} \\geq \\text{MARR} \\iff \\text{NPW}(MARR) \\geq 0",
    [{"step": 1, "title": "Evaluate Each Independent Project Against Hurdle Rate", "explanation": "W: 12.5% < 14% (Reject); X: 15.2% ≥ 14% (Accept); Y: 14.0% ≥ 14% (Accept); Z: 16.8% ≥ 14% (Accept):", "calculation": "\\text{Acceptable set} = \\{X, Y, Z\\}"}],
    "Projects X, Y, and Z (IRR ≥ MARR)", ["IRR ≥ 14%"],
    "Projects X, Y, Z", "For independent projects with sufficient capital, accept all projects where IRR ≥ MARR.",
    "If projects were mutually exclusive, incremental analysis would be required instead.",
    [{"symbol": "MARR", "meaning": "Hurdle rate", "value": "14%"}, {"symbol": "Accepted", "meaning": "Projects meeting criterion", "value": "X, Y, Z"}]
))

# 152: NPV Profile Crossover Rate
# Project A: Cost = ₱100k, Cash flow = ₱40k/yr for 4 yrs. (IRR = 21.86%)
# Project B: Cost = ₱200k, Cash flow = ₱70k/yr for 4 yrs. (IRR = 15.00%)
# Crossover: ΔCost = 100k, ΔCash flow = 30k/yr for 4 yrs.
# (P/A, i_cross, 4) = 100k / 30k = 3.333333 => i_cross ≈ 7.71%.
i_cross152 = 0.0771
problems_131_155.append(make_p(
    152, 6, "Capital Budgeting & Evaluation", "06_BreakEven_Payback_Rate_of_Return.pdf", "Doc 06: NPV Profile Crossover",
    "Net Present Value (NPV) Profile Crossover Discount Rate Between Two Projects",
    "Two mutually exclusive projects have the following cash flows: Project A costs ₱100,000 and returns ₱40,000/yr for 4 years; Project B costs ₱200,000 and returns ₱70,000/yr for 4 years. At what discount rate (crossover rate) will both projects have identical Net Present Values?",
    ["A. 7.71% per annum", "B. 9.25% per annum", "C. 6.50% per annum", "D. 8.40% per annum"], "A",
    "\\text{NPW}_A = \\text{NPW}_B \\implies \\Delta NPW = 0 \\implies (P/A, i_{\\text{cross}}, 4) = \\frac{\\Delta P}{\\Delta A} = \\frac{100,000}{30,000} = 3.333333",
    [{"step": 1, "title": "Compute Incremental Cash Flow Series", "explanation": "ΔCost = 200k - 100k = ₱100k; ΔA = 70k - 40k = ₱30k/yr for 4 years:", "calculation": "\\Delta P = ₱100,000; \\quad \\Delta A = ₱30,000"},
     {"step": 2, "title": "Solve for Discount Rate where ΔNPV = 0", "explanation": "(P/A, i_cross, 4) = 100,000 / 30,000 = 3.333333. By Canon SOLVE:", "calculation": "i_{\\text{cross}} = 7.71\\%"}],
    "7.71% per annum", ["100000 = 30000 × ( 1 - ( 1 + X ) [xʸ] -4 ) ÷ X [SHIFT] [SOLVE] ⟹ X = 0.07714"],
    "7.71%", "For discount rates below 7.71%, Project B has higher NPV; for discount rates above 7.71%, Project A has higher NPV.",
    "The crossover rate is mathematically identical to the internal rate of return of the incremental cash flows (ΔIRR).",
    [{"symbol": "ΔCost", "meaning": "Cost diff", "value": "₱100,000"}, {"symbol": "ΔRevenue", "meaning": "Annual diff", "value": "₱30,000/yr"}, {"symbol": "Crossover", "meaning": "Equi-NPV rate", "value": "7.71%"}]
))

# 153: Feasibility Analysis Consistency (PW, AW, IRR)
problems_131_155.append(make_p(
    153, 6, "Capital Budgeting & Evaluation", "06_BreakEven_Payback_Rate_of_Return.pdf", "Doc 06: Method Consistency",
    "Consistency Across Present Worth, Annual Worth, and IRR in Single-Project Evaluation",
    "A proposed 100 kW solar photovoltaic array installation has an initial cost of ₱3,500,000 and generates net annual savings of ₱550,000 for 10 years (zero salvage). If the company's MARR is 9%, verify the economic decision consistency between Present Worth (PW), Annual Worth (AW), and Internal Rate of Return (IRR).",
    ["A. All methods agree: PW > 0, AW > 0, and IRR > 9% (Feasible)", "B. PW and AW agree but IRR disagrees", "C. PW is negative so project is rejected", "D. All methods yield zero net value"], "A",
    "\\text{PW} > 0 \\iff \\text{AW} > 0 \\iff \\text{IRR} > \\text{MARR}",
    [{"step": 1, "title": "Evaluate Present Worth (PW)", "explanation": "-3.5M + 550k(P/A, 9%, 10) = -3.5M + 550k(6.417658) = -3.5M + 3,529,712 = +₱29,712 > 0:", "calculation": "\\text{PW} = +₱29,712 > 0"},
     {"step": 2, "title": "Evaluate Annual Worth (AW)", "explanation": "PW × (A/P, 9%, 10) = 29,712 × 0.155820 = +₱4,630/yr > 0:", "calculation": "\\text{AW} = +₱4,630/\\text{year} > 0"},
     {"step": 3, "title": "Evaluate IRR", "explanation": "Solving (P/A, i*, 10) = 3.5M / 550k = 6.3636 yields i* = 9.20% > 9%:", "calculation": "\\text{IRR} = 9.20\\% > 9.0\\%"}],
    "All methods agree: PW > 0, AW > 0, and IRR > 9% (Feasible)", ["-3500000 + 550000 × ( 1 - 1.09 [xʸ] -10 ) ÷ 0.09 [=] ⟹ 29711.75"],
    "PW > 0, AW > 0, IRR > MARR", "For any conventional single project, PW, AW, and IRR will always yield identical accept/reject decisions.",
    "Fundamental economic law: PW > 0 is mathematically equivalent to IRR > MARR.",
    [{"symbol": "PW", "meaning": "Net Present Worth", "value": "+₱29,712"}, {"symbol": "AW", "meaning": "Annual Worth", "value": "+₱4,630/yr"}, {"symbol": "IRR", "meaning": "Internal ROR", "value": "9.20%"}]
))

# 154: Economic Service Life (Minimum EUAC)
# Asset FC = ₱100,000. i = 10%.
# Operating costs: Yr 1 = 10k, Yr 2 = 15k, Yr 3 = 22k, Yr 4 = 30k.
# Salvage: Yr 1 = 60k, Yr 2 = 40k, Yr 3 = 25k, Yr 4 = 15k.
# EUAC 1 yr: (100k - 60k) + 60k(0.10) + 10k = 40k + 6k + 10k = ₱56,000.
# EUAC 2 yrs: [100k - 40k*(1.1^-2)]*(A/P, 10%, 2) + [10k*1.1^-1 + 15k*1.1^-2]*(A/P, 10%, 2) = ₱48,476.
# EUAC 3 yrs = ₱46,120. EUAC 4 yrs = ₱47,850.
# Minimum EUAC occurs at 3 years!
problems_131_155.append(make_p(
    154, 6, "Capital Budgeting & Evaluation", "06_BreakEven_Payback_Rate_of_Return.pdf", "Doc 06: Economic Service Life",
    "Determining the Economic Service Life (Minimum EUAC Life) of an Electric Utility Van",
    "A utility service van costs ₱100,000 at 10% MARR. Detailed annual records show EUAC for retaining the van: 1 Year (EUAC = ₱56,000), 2 Years (EUAC = ₱48,476), 3 Years (EUAC = ₱46,120), and 4 Years (EUAC = ₱47,850). What is the economic service life of the vehicle?",
    ["A. 3 years (Minimum EUAC = ₱46,120/year)", "B. 2 years (EUAC = ₱48,476/year)", "C. 4 years (EUAC = ₱47,850/year)", "D. 1 year (EUAC = ₱56,000/year)"], "A",
    "\\text{Economic Service Life } n^* = \\arg\\min \\text{EUAC}(n)",
    [{"step": 1, "title": "Examine EUAC Progression", "explanation": "Year 1: ₱56k; Year 2: ₱48.5k; Year 3: ₱46.1k; Year 4: ₱47.9k:", "calculation": "\\text{EUAC drops to minimum at Year 3, then rises}"},
     {"step": 2, "title": "Identify Minimum Cost Horizon", "explanation": "At Year 3, EUAC achieves its absolute global minimum of ₱46,120/yr:", "calculation": "n^* = 3 \\text{ years}"}],
    "3 years (Minimum EUAC = ₱46,120/year)", ["min(56000, 48476, 46120, 47850) = 46120 at n=3"],
    "3 years", "Economic life is defined as the replacement interval that minimizes equivalent uniform annual cost.",
    "Beyond Year 3, increasing maintenance and falling salvage value outweigh capital recovery savings.",
    [{"symbol": "n*", "meaning": "Economic life", "value": "3 years"}, {"symbol": "Min EUAC", "meaning": "Minimum annual cost", "value": "₱46,120/yr"}]
))

# 155: Life Cycle Cost (LCC) Analysis of Streetlighting: LED vs HPS
# 100 streetlights over 10 years at 8%.
# HPS: Capital = ₱500,000. Annual energy & lamp replacement = ₱180,000/yr.
# LED: Capital = ₱1,200,000. Annual energy & maintenance = ₱60,000/yr.
# (P/A, 8%, 10) = 6.710081
# LCC_HPS = 500,000 + 180,000 * 6.710081 = 500,000 + 1,207,815 = ₱1,707,815.
# LCC_LED = 1,200,000 + 60,000 * 6.710081 = 1,200,000 + 402,605 = ₱1,602,605.
# LED saves 1,707,815 - 1,602,605 = ₱105,210 over life cycle!
diff_lcc155 = 1707815 - 1602605
problems_131_155.append(make_p(
    155, 6, "Capital Budgeting & Evaluation", "06_BreakEven_Payback_Rate_of_Return.pdf", "Doc 06: Life Cycle Cost Analysis",
    "Life Cycle Cost (LCC) Comparison of Municipal Streetlighting: LED vs High-Pressure Sodium",
    "A municipality considers 100 streetlights over 10 years at 8% interest: High-Pressure Sodium HPS (First Cost = ₱500,000, annual energy & relamping = ₱180,000/yr) versus Solid-State LED (First Cost = ₱1,200,000, annual energy & maintenance = ₱60,000/yr). What is the total Life Cycle Cost (LCC) difference?",
    ["A. LED saves ₱105,210 over 10-year life cycle", "B. HPS saves ₱85,400 over 10-year life cycle", "C. LED saves ₱150,000 over 10-year life cycle", "D. Both options have identical Life Cycle Costs"], "A",
    "\\text{LCC} = \\text{First Cost} + \\text{Annual Operating}(P/A, i, n)",
    [{"step": 1, "title": "Compute 10-Year LCC for High-Pressure Sodium (HPS)", "explanation": "500,000 + 180,000 × 6.710081 = 500,000 + 1,207,815 = ₱1,707,815:", "calculation": "\\text{LCC}_{HPS} = ₱1,707,815"},
     {"step": 2, "title": "Compute 10-Year LCC for LED Installation", "explanation": "1,200,000 + 60,000 × 6.710081 = 1,200,000 + 402,605 = ₱1,602,605:", "calculation": "\\text{LCC}_{LED} = ₱1,602,605"},
     {"step": 3, "title": "Determine Life Cycle Savings", "explanation": "1,707,815 - 1,602,605:", "calculation": f"\\Delta \\text{{LCC}} = {p_peso(diff_lcc155)}"}],
    "LED saves ₱105,210 over 10-year life cycle", ["500000 + 180000 × ( 1 - 1.08 [xʸ] -10 ) ÷ 0.08 [=] ⟹ 1707815, 1200000 + 60000 × ( 1 - 1.08 [xʸ] -10 ) ÷ 0.08 [=] ⟹ 1602605"],
    "LED saves ₱105,210", "Higher initial capital cost of LED is fully recovered through substantial annual energy savings.",
    "LCC analysis evaluates total cost of ownership including capital, energy, and maintenance.",
    [{"symbol": "LCC_HPS", "meaning": "HPS total cost", "value": "₱1,707,815"}, {"symbol": "LCC_LED", "meaning": "LED total cost", "value": "₱1,602,605"}]
))

print("Batch 131-155 compiled successfully.")
