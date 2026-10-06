# -*- coding: utf-8 -*-
"""
Problems 156-175: Break-Even Analysis, Bonds, Replacement Studies, Depletion & Synthesis
Completes the full 175-problem database.
"""
import math

def p_peso(val):
    return f"₱{val:,.2f}"

def p_int(val):
    return f"₱{round(val):,}"

from master_builder_175 import make_p

problems_156_175 = []

# 156: Break-Even Production Volume
FC156 = 1200000; Price156 = 45.0; VC156 = 25.0
Q_be156 = FC156 / (Price156 - VC156) # 1,200,000 / 20 = 60,000 units
problems_156_175.append(make_p(
    156, 7, "Break-Even, Bonds & Replacement", "06_BreakEven_Payback_Rate_of_Return.pdf", "Doc 06: Break-Even Production",
    "Break-Even Production Volume for an Electrical Junction Box Manufacturing Plant",
    "A manufacturing plant produces weatherproof electrical junction boxes. Fixed overhead costs are ₱1,200,000 per year, direct variable cost is ₱25.00 per unit, and the selling price is ₱45.00 per unit. Determine the annual break-even sales volume in units.",
    ["A. 60,000 units per year", "B. 55,000 units per year", "C. 65,000 units per year", "D. 48,000 units per year"], "A",
    "Q_{BE} = \\frac{FC}{P - VC} = \\frac{\\text{Fixed Cost}}{\\text{Unit Contribution Margin}}",
    [{"step": 1, "title": "Compute Unit Contribution Margin", "explanation": "Selling Price - Variable Cost = 45.00 - 25.00 = ₱20.00/unit:", "calculation": "\\text{CM} = 45.00 - 25.00 = ₱20.00/\\text{unit}"},
     {"step": 2, "title": "Calculate Break-Even Volume Q_BE", "explanation": "Divide fixed costs by contribution margin:", "calculation": f"Q_{{BE}} = \\frac{{1,200,000}}{{20.00}} = {round(Q_be156):,} \\text{{ units}}"}],
    "60,000 units per year", ["1200000 ÷ ( 45 - 25 ) [=] ⟹ 60000"],
    "60,000 units", "At 60,000 units, Total Revenue = 60k × 45 = ₱2.7M; Total Cost = 1.2M + 60k × 25 = ₱2.7M. Profit = 0.",
    "Contribution margin (P - VC) is the revenue left over from each unit to pay for fixed overhead.",
    [{"symbol": "FC", "meaning": "Fixed cost", "value": "₱1,200,000"}, {"symbol": "P", "meaning": "Unit price", "value": "₱45.00"}, {"symbol": "VC", "meaning": "Unit variable cost", "value": "₱25.00"}]
))

# 157: Break-Even Capacity Utilization
Plant_Cap157 = 80000.0
cap_util157 = (Q_be156 / Plant_Cap157) * 100.0 # 60,000 / 80,000 = 75.0%
problems_156_175.append(make_p(
    157, 7, "Break-Even, Bonds & Replacement", "06_BreakEven_Payback_Rate_of_Return.pdf", "Doc 06: Break-Even Capacity Utilization",
    "Break-Even Capacity Utilization Percentage Given Maximum Plant Output of 80,000 Units",
    "If the manufacturing plant in Problem 156 has a maximum single-shift capacity of 80,000 units per year, what percentage of plant capacity represents the break-even operating point?",
    ["A. 75.0% capacity utilization", "B. 68.5% capacity utilization", "C. 80.0% capacity utilization", "D. 70.0% capacity utilization"], "A",
    "\\% \\text{Capacity}_{BE} = \\frac{Q_{BE}}{\\text{Rated Capacity}} \\times 100\\%",
    [{"step": 1, "title": "Divide Break-Even Volume by Plant Capacity", "explanation": "60,000 units / 80,000 units = 0.75:", "calculation": f"\\% \\text{{Capacity}} = \\frac{{60,000}}{{80,000}} \\times 100\\% = {cap_util157:.1f}\\%"}],
    "75.0% capacity utilization", ["60000 ÷ 80000 × 100 [=] ⟹ 75"],
    "75.0%", "The plant must operate at least 75% capacity to avoid financial losses.",
    "Higher fixed costs shift the break-even capacity point upward, increasing operating risk.",
    [{"symbol": "Q_BE", "meaning": "Break-even units", "value": "60,000"}, {"symbol": "Capacity", "meaning": "Plant rating", "value": "80,000 units"}]
))

# 158: Profit Target Production Volume
Target_Profit158 = 500000
Q_profit158 = (FC156 + Target_Profit158) / (Price156 - VC156) # 1,700,000 / 20 = 85,000 units
problems_156_175.append(make_p(
    158, 7, "Break-Even, Bonds & Replacement", "06_BreakEven_Payback_Rate_of_Return.pdf", "Doc 06: Target Profit Output",
    "Production Volume Required to Achieve an Annual Target Profit of ₱500,000",
    "For the electrical junction box plant (FC = ₱1,200,000/yr, VC = ₱25/unit, Price = ₱45/unit), how many units must be manufactured and sold per year to achieve a net operating profit of ₱500,000?",
    ["A. 85,000 units per year", "B. 80,000 units per year", "C. 90,000 units per year", "D. 75,000 units per year"], "A",
    "Q = \\frac{FC + \\text{Target Profit}}{P - VC}",
    [{"step": 1, "title": "Sum Fixed Costs and Target Profit", "explanation": "1,200,000 + 500,000 = ₱1,700,000 required contribution:", "calculation": "\\text{Total Required} = ₱1,700,000"},
     {"step": 2, "title": "Divide by Unit Contribution Margin", "explanation": "1,700,000 / ₱20.00:", "calculation": f"Q = \\frac{{1,700,000}}{{20.00}} = {round(Q_profit158):,} \\text{{ units}}"}],
    "85,000 units per year", ["( 1200000 + 500000 ) ÷ ( 45 - 25 ) [=] ⟹ 85000"],
    "85,000 units", "Target profit simply adds to the fixed cost numerator in break-even analysis.",
    "Since maximum single shift is 80,000 units, producing 85,000 units will require overtime or a second partial shift.",
    [{"symbol": "Target", "meaning": "Target profit", "value": "₱500,000"}, {"symbol": "CM", "meaning": "Contribution margin", "value": "₱20/unit"}]
))

# 159: Break-Even Point Between Manual vs Automated Process
# Process 1 (Manual): FC_1 = ₱200,000/yr, VC_1 = ₱18.00/unit.
# Process 2 (Automated): FC_2 = ₱800,000/yr, VC_2 = ₱6.00/unit.
# 200,000 + 18*Q = 800,000 + 6*Q => 12*Q = 600,000 => Q = 50,000 units.
Q_proc159 = (800000 - 200000) / (18.0 - 6.0)
problems_156_175.append(make_p(
    159, 7, "Break-Even, Bonds & Replacement", "06_BreakEven_Payback_Rate_of_Return.pdf", "Doc 06: Process Indifference Point",
    "Break-Even Production Quantity Between Manual and Automated Manufacturing",
    "A firm can assemble printed circuit boards using Process 1 (Manual: Fixed Cost = ₱200,000/yr, Variable Cost = ₱18.00/unit) or Process 2 (Robotic: Fixed Cost = ₱800,000/yr, Variable Cost = ₱6.00/unit). At what annual production volume are both processes equal in total cost?",
    ["A. 50,000 units per year", "B. 45,000 units per year", "C. 60,000 units per year", "D. 55,000 units per year"], "A",
    "FC_1 + VC_1 \\cdot Q = FC_2 + VC_2 \\cdot Q \\implies Q = \\frac{FC_2 - FC_1}{VC_1 - VC_2}",
    [{"step": 1, "title": "Compute Difference in Fixed Overhead", "explanation": "800,000 - 200,000 = ₱600,000:", "calculation": "\\Delta FC = ₱600,000"},
     {"step": 2, "title": "Compute Variable Cost Savings per Unit", "explanation": "18.00 - 6.00 = ₱12.00/unit savings from automation:", "calculation": "\\Delta VC = ₱12.00/\\text{unit}"},
     {"step": 3, "title": "Compute Indifference Production Quantity", "explanation": "600,000 / 12.00:", "calculation": f"Q = \\frac{{600,000}}{{12.00}} = {round(Q_proc159):,} \\text{{ units}}"}],
    "50,000 units per year", ["( 800000 - 200000 ) ÷ ( 18 - 6 ) [=] ⟹ 50000"],
    "50,000 units", "For production below 50,000 units, manual Process 1 is cheaper; above 50,000 units, automated Process 2 is cheaper.",
    "This is known as the operational indifference or crossover volume.",
    [{"symbol": "Process 1", "meaning": "Manual assembly", "value": "FC=₱200k, VC=₱18"}, {"symbol": "Process 2", "meaning": "Robotic assembly", "value": "FC=₱800k, VC=₱6"}]
))

# 160: Shut-Down Point
# Selling price drops to P = ₱22.00/unit. Variable cost is ₱25.00/unit.
problems_156_175.append(make_p(
    160, 7, "Break-Even, Bonds & Replacement", "06_BreakEven_Payback_Rate_of_Return.pdf", "Doc 06: Operational Shut-Down Rule",
    "Short-Run Plant Shut-Down Decision When Market Price Drops Below Variable Cost",
    "Due to imported dumping, market price for electrical conduit drops to ₱22.00 per unit. The local plant has Fixed Overhead of ₱500,000 per year and Variable Production Cost of ₱25.00 per unit. Under economic decision rules, what should management do in the short run?",
    ["A. Shut down operations immediately (P < VC)", "B. Continue operating at full capacity", "C. Lower fixed overhead and continue", "D. Increase production to lower unit fixed cost"], "A",
    "\\text{Shut Down if } P < VC \\iff \\text{Revenue} < \\text{Total Variable Cost}",
    [{"step": 1, "title": "Evaluate Operating Margin", "explanation": "Unit Contribution Margin = P - VC = 22.00 - 25.00 = -₱3.00/unit:", "calculation": "P - VC = -₱3.00 < 0"},
     {"step": 2, "title": "Apply Economic Shut-Down Theorem", "explanation": "Operating adds ₱3 of cash loss on every unit beyond unavoidable fixed overhead; shutting down restricts losses to fixed overhead alone:", "calculation": "\\text{Decision} = \\text{Cease production in short run}"}],
    "Shut down operations immediately (P < VC)", ["P < VC = Shut Down"],
    "Shut down immediately", "If price cannot cover even the incremental variable cost of materials and labor, every unit produced increases total losses.",
    "In the short run, fixed costs are sunk; minimize losses by producing zero units.",
    [{"symbol": "P", "meaning": "Selling price", "value": "₱22.00"}, {"symbol": "VC", "meaning": "Variable cost", "value": "₱25.00"}]
))

# 161: Bond Valuation Purchase Price to Yield 10%
# Par value = ₱1,000,000. Coupon rate = 8% payable semi-annually (C = 40,000/period). Term = 10 yrs (n = 20 periods).
# Desired yield = 10% compounded semi-annually (i = 5.0%/period).
# V_0 = Par*(1+i)^-n + C*(P/A, i, n) = 1,000,000*(1.05)^-20 + 40,000*[(1 - 1.05^-20)/0.05]
# (1.05)^-20 = 0.376889 => 1M * 0.376889 = 376,889.
# (P/A, 5%, 20) = 12.462210 => 40k * 12.462210 = 498,488.
# V_0 = 376,889 + 498,488 = ₱875,378.
V0_161 = 1000000 * 1.05**(-20) + 40000 * ((1 - 1.05**(-20)) / 0.05)
problems_156_175.append(make_p(
    161, 7, "Break-Even, Bonds & Replacement", "06_BreakEven_Payback_Rate_of_Return.pdf", "Doc 06: Bond Valuation",
    "Purchase Price of a ₱1,000,000 8% Semi-Annual Bond to Yield 10% Over 10 Years",
    "A utility company issues a 10-year ₱1,000,000 bond paying an 8% coupon semi-annually (₱40,000 every 6 months). If an investor demands a yield of 10% per annum compounded semi-annually, what purchase price should be paid today?",
    ["A. ₱875,378 (Selling at a Discount)", "B. ₱920,400", "C. ₱850,000", "D. ₱1,124,622 (Selling at a Premium)"], "A",
    "V_0 = \\text{Par}(1+i)^{-n} + C \\left[ \\frac{1 - (1+i)^{-n}}{i} \\right]",
    [{"step": 1, "title": "Identify Periodic Parameters", "explanation": "Semi-annual coupon C = ₱1M × 0.08 / 2 = ₱40,000; Yield i = 10% / 2 = 5.0%; n = 10 × 2 = 20 periods:", "calculation": "C = ₱40,000; \\quad i = 0.05; \\quad n = 20"},
     {"step": 2, "title": "Discount Face Value at Maturity", "explanation": "1,000,000 × (1.05)^(-20) = ₱376,889.48:", "calculation": "\\text{PW}_{par} = ₱376,889.48"},
     {"step": 3, "title": "Discount Semi-Annual Coupon Stream", "explanation": "40,000 × (P/A, 5%, 20) = 40,000 × 12.462210 = ₱498,488.41:", "calculation": "\\text{PW}_{coupon} = ₱498,488.41"},
     {"step": 4, "title": "Sum Present Values", "explanation": "V_0 = 376,889.48 + 498,488.41:", "calculation": f"V_0 = {p_peso(V0_161)}"}],
    "₱875,378 (Selling at a Discount)", ["1000000 × 1.05 [xʸ] -20 + 40000 × ( 1 - 1.05 [xʸ] -20 ) ÷ 0.05 [=] ⟹ 875377.90"],
    "₱875,378", "When desired yield (10%) exceeds coupon rate (8%), the bond sells at a discount below par.",
    "Remember to halve annual coupon rate and annual yield, and double the years for semi-annual bonds.",
    [{"symbol": "Par", "meaning": "Face value", "value": "₱1,000,000"}, {"symbol": "Coupon", "meaning": "8% semi-annual", "value": "₱40,000/period"}, {"symbol": "Yield", "meaning": "Desired yield", "value": "10% semi-annual"}]
))

# 162: Bond Selling at Premium
# Same bond, but desired yield is 6% (i = 3.0%/period).
# V_0 = 1,000,000*(1.03)^-20 + 40,000*(P/A, 3%, 20) = 553,676 + 40k*14.877475 = 553,676 + 595,099 = ₱1,148,775.
V0_162 = 1000000 * 1.03**(-20) + 40000 * ((1 - 1.03**(-20)) / 0.03)
problems_156_175.append(make_p(
    162, 7, "Break-Even, Bonds & Replacement", "06_BreakEven_Payback_Rate_of_Return.pdf", "Doc 06: Premium Bond Valuation",
    "Purchase Price of the ₱1,000,000 8% Semi-Annual Bond to Yield 6% (Premium)",
    "For the 10-year ₱1,000,000 bond paying an 8% coupon semi-annually (₱40,000/period), what price should an investor pay if the desired market yield is only 6% per annum compounded semi-annually?",
    ["A. ₱1,148,775 (Selling at a Premium)", "B. ₱1,080,000", "C. ₱1,210,500", "D. ₱1,000,000 (Par)"], "A",
    "V_0 = \\text{Par}(1+i)^{-n} + C \\left[ \\frac{1 - (1+i)^{-n}}{i} \\right]",
    [{"step": 1, "title": "Identify Periodic Yield", "explanation": "Market yield i = 6% / 2 = 3.0% per semi-annual period:", "calculation": "i = 0.03; \\quad n = 20"},
     {"step": 2, "title": "Compute Present Worth of Par and Coupons", "explanation": "1,000,000(1.03)^(-20) + 40,000(P/A, 3%, 20):", "calculation": f"V_0 = 553,675.75 + 595,099.00 = {p_peso(V0_162)}"}],
    "₱1,148,775 (Selling at a Premium)", ["1000000 × 1.03 [xʸ] -20 + 40000 × ( 1 - 1.03 [xʸ] -20 ) ÷ 0.03 [=] ⟹ 1148774.75"],
    "₱1,148,775", "When coupon rate (8%) exceeds market yield (6%), the bond commands a premium above face value.",
    "The investor is willing to pay more today because the bond pays above-market cash interest.",
    [{"symbol": "Par", "meaning": "Face value", "value": "₱1,000,000"}, {"symbol": "Yield", "meaning": "6% semi-annual", "value": "3.0%/period"}]
))

# 163: Yield to Maturity (YTM)
# Par = ₱100,000. Price = ₱92,000. Coupon = ₱7,000/yr (7% annual). Maturity = 5 yrs.
# Approximate YTM formula: YTM_approx = [C + (Par - Price)/n] / [(Par + 2*Price) / 3]
# = [7,000 + (100,000 - 92,000)/5] / [(100,000 + 184,000) / 3] = [7,000 + 1,600] / [284,000 / 3] = 8,600 / 94,666.67 = 9.08%
# Exact IRR: 92,000 = 7000*(P/A, i, 5) + 100,000*(1+i)^-5 => i = 9.06%
problems_156_175.append(make_p(
    163, 7, "Break-Even, Bonds & Replacement", "06_BreakEven_Payback_Rate_of_Return.pdf", "Doc 06: Yield to Maturity (YTM)",
    "Yield to Maturity (YTM) of a 5-Year ₱100,000 7% Bond Purchased at a Discount for ₱92,000",
    "An investor purchases a 5-year ₱100,000 par bond paying an annual coupon of 7% (₱7,000/yr) for a discounted price of ₱92,000. What is the Yield to Maturity (YTM) of this bond?",
    ["A. 9.06% per annum (Exact)", "B. 8.50% per annum", "C. 7.60% per annum", "D. 9.85% per annum"], "A",
    "\\text{YTM} \\approx \\frac{C + \\frac{\\text{Par} - V_0}{n}}{\\frac{\\text{Par} + 2V_0}{3}} \\quad \\text{or solve } 92,000 = 7,000(P/A, i, 5) + 100,000(1+i)^{-5}",
    [{"step": 1, "title": "Apply Approximate YTM Formula", "explanation": "[7,000 + (100,000 - 92,000)/5] / [(100,000 + 2×92,000)/3] = 8,600 / 94,667 = 9.08%:", "calculation": "\\text{YTM}_{approx} = 9.08\\%"},
     {"step": 2, "title": "Compute Exact YTM via Canon SOLVE", "explanation": "Solving 92,000 = 7,000(P/A, i, 5) + 100,000(1+i)^(-5) yields:", "calculation": "\\text{YTM}_{exact} = 9.06\\%"}],
    "9.06% per annum (Exact)", ["92000 = 7000 × ( 1 - ( 1 + X ) [xʸ] -5 ) ÷ X + 100000 × ( 1 + X ) [xʸ] -5 [SHIFT] [SOLVE] ⟹ X = 0.09063"],
    "9.06%", "YTM accounts for both the 7% annual coupon flow and the capital gain of ₱8,000 realized at maturity.",
    "On PRC exams, the standard approximate formula gives 9.08%, very close to the exact 9.06%.",
    [{"symbol": "Price", "meaning": "Purchase cost", "value": "₱92,000"}, {"symbol": "Par", "meaning": "Face value", "value": "₱100,000"}, {"symbol": "Coupon", "meaning": "Annual coupon", "value": "₱7,000"}]
))

# 164: Bond Redemption at Premium
# Par = ₱500,000. Redeemed at 105% of par (₱525,000) at end of 8 years. Coupon = 9% annual (₱45,000/yr). Desired yield = 8%.
# V_0 = 525,000*(1.08)^-8 + 45,000*(P/A, 8%, 8) = 525,000*0.540269 + 45,000*5.746639 = 283,641 + 258,599 = ₱542,240.
V0_164 = 525000 * 1.08**(-8) + 45000 * ((1 - 1.08**(-8)) / 0.08)
problems_156_175.append(make_p(
    164, 7, "Break-Even, Bonds & Replacement", "06_BreakEven_Payback_Rate_of_Return.pdf", "Doc 06: Bond Callable at Premium",
    "Purchase Price of an 8-Year ₱500,000 9% Bond Redeemable at a 5% Premium to Yield 8%",
    "A ₱500,000 corporate bond pays an annual coupon of 9% (₱45,000/year) and matures in 8 years, redeemable at a 5% premium over par (₱525,000 redemption value). What should an investor pay to earn an 8% yield?",
    ["A. ₱542,240", "B. ₱525,000", "C. ₱555,800", "D. ₱530,100"], "A",
    "V_0 = \\text{Redemption}(1+i)^{-n} + C(P/A, i, n)",
    [{"step": 1, "title": "Compute Redemption Value", "explanation": "1.05 × ₱500,000 = ₱525,000:", "calculation": "\\text{Redemption} = ₱525,000"},
     {"step": 2, "title": "Discount Redemption and Coupons at 8%", "explanation": "525,000(1.08)^(-8) + 45,000(P/A, 8%, 8):", "calculation": f"V_0 = 283,641.17 + 258,598.76 = {p_peso(V0_164)}"}],
    "₱542,240", ["525000 × 1.08 [xʸ] -8 + 45000 × ( 1 - 1.08 [xʸ] -8 ) ÷ 0.08 [=] ⟹ 542239.93"],
    "₱542,240", "Use the redemption value in place of par value in the future worth term.",
    "Coupons are still calculated on the face par value (9% of ₱500k = ₱45k), not on the redemption price.",
    [{"symbol": "Par", "meaning": "Face par", "value": "₱500,000"}, {"symbol": "Redemption", "meaning": "105% of par", "value": "₱525,000"}]
))

# 165: Replacement Study (Defender vs Challenger, Sunk Cost Fallacy)
# Defender: Bought 3 yrs ago for ₱400,000. Book value = ₱250,000. Current market trade-in value = ₱120,000.
# In replacement analysis, what is the initial investment for the defender?
problems_156_175.append(make_p(
    165, 7, "Break-Even, Bonds & Replacement", "06_BreakEven_Payback_Rate_of_Return.pdf", "Doc 06: Sunk Cost Fallacy in Replacement",
    "Relevant Initial Investment and Sunk Cost Fallacy in Defender vs Challenger Replacement",
    "An electric motor was purchased 3 years ago for ₱400,000 and has a current book value of ₱250,000. A new energy-efficient motor (Challenger) is evaluated. If the existing motor (Defender) can be sold today for ₱120,000 in the secondary market, what is the economically relevant initial capital cost of retaining the Defender?",
    ["A. ₱120,000 (Current Net Market Value)", "B. ₱250,000 (Current Book Value)", "C. ₱400,000 (Original Purchase Cost)", "D. ₱130,000 (Sunk Cost Loss)"], "A",
    "\\text{Defender Capital Cost} = \\text{Current Market (Opportunity) Value} = ₱120,000",
    [{"step": 1, "title": "Identify Sunk Cost", "explanation": "Book value (₱250k) and original cost (₱400k) are historical sunk costs that cannot be changed by present decisions:", "calculation": "\\text{Sunk Cost} = BV - \\text{Market Value} = 250,000 - 120,000 = ₱130,000 \\quad (\\text{Irrelevant})"},
     {"step": 2, "title": "Apply Opportunity Cost Principle", "explanation": "Retaining the defender forfeits immediate cash of ₱120,000 from sale; thus its economic cost today is its current market value:", "calculation": "\\text{Relevant Cost} = ₱120,000"}],
    "₱120,000 (Current Net Market Value)", ["Current Market Value = 120000"],
    "₱120,000 (Market Value)", "Golden rule of replacement analysis: Original cost and book value are completely irrelevant sunk costs.",
    "The defender's investment value is strictly its current net realizable market value (opportunity cost).",
    [{"symbol": "Market Value", "meaning": "Opportunity cost", "value": "₱120,000"}, {"symbol": "Book Value", "meaning": "Sunk accounting value", "value": "₱250,000"}]
))

# 166: Replacement Study: Challenger Economic Life vs Retaining Defender for 1 Year
# Defender: Market value today = ₱120,000. Market value next year = ₱90,000. O&M next year = ₱50,000. MARR = 10%.
# Cost to keep defender 1 more year:
# Capital recovery = (120k - 90k) + 120k(0.10) = 30k + 12k = ₱42,000.
# Total cost of defender next year = 42,000 + 50,000 = ₱92,000.
# Challenger has minimum EUAC = ₱85,000/yr.
# Decision: Replace immediately because Defender's next year cost (₱92,000) > Challenger EUAC (₱85,000).
cost_def166 = (120000 - 90000) + 120000 * 0.10 + 50000 # 30k + 12k + 50k = 92k
problems_156_175.append(make_p(
    166, 7, "Break-Even, Bonds & Replacement", "06_BreakEven_Payback_Rate_of_Return.pdf", "Doc 06: One-Year Retention Cost",
    "Cost of Retaining Defender for 1 Additional Year vs Challenger Minimum EUAC",
    "For the existing motor in Problem 165 (Market value today = ₱120,000, estimated market value next year = ₱90,000, operating cost next year = ₱50,000, MARR = 10%), what is the cost of retaining the Defender for one more year, and should it be replaced if the Challenger has a minimum EUAC of ₱85,000/year?",
    ["A. Defender Cost = ₱92,000 | Replace Immediately", "B. Defender Cost = ₱80,000 | Keep Defender 1 Year", "C. Defender Cost = ₱95,000 | Keep Defender 1 Year", "D. Defender Cost = ₱85,000 | Indifferent"], "A",
    "\\text{Cost}_{def}(1) = (MV_0 - MV_1) + MV_0 \\cdot i + O_1",
    [{"step": 1, "title": "Compute Capital Loss and Interest on Market Value", "explanation": "(120,000 - 90,000) + 120,000(0.10) = 30,000 + 12,000 = ₱42,000:", "calculation": "\\text{Capital Cost} = ₱42,000"},
     {"step": 2, "title": "Add Operating Expenses for Next Year", "explanation": "42,000 + 50,000 = ₱92,000:", "calculation": f"\\text{{Cost}}_{{def}} = {p_peso(cost_def166)}"},
     {"step": 3, "title": "Compare with Challenger EUAC", "explanation": "Since ₱92,000 > ₱85,000, the defender is more expensive to keep for even one more year:", "calculation": "\\text{Decision} = \\text{Replace immediately with Challenger}"}],
    "Defender Cost = ₱92,000 | Replace Immediately", ["( 120000 - 90000 ) + 120000 × 0.10 + 50000 [=] ⟹ 92000"],
    "₱92,000 (Replace immediately)", "The cost of keeping the defender for 1 year equals loss in market value + interest on current market value + operating expenses.",
    "Since Defender (₱92k) exceeds Challenger EUAC (₱85k), immediate replacement is economically optimal.",
    [{"symbol": "MV_0", "meaning": "Value today", "value": "₱120,000"}, {"symbol": "MV_1", "meaning": "Value next yr", "value": "₱90,000"}, {"symbol": "Challenger", "meaning": "EUAC", "value": "₱85,000/yr"}]
))

# 167: Fisher Inflation Equation
# Nominal market rate d = 12%, Inflation rate f = 5%.
# True real rate i_real = (1 + d)/(1 + f) - 1 = (1.12 / 1.05) - 1 = 1.066667 - 1 = 6.67%
i_real167 = (1.12 / 1.05) - 1
problems_156_175.append(make_p(
    167, 7, "Break-Even, Bonds & Replacement", "01_Compound_Interest_Time_Value_Money.pdf", "Doc 01: Fisher Inflation Equation",
    "True Real Rate of Return (Purchasing Power) Under 12% Nominal Yield and 5% Inflation",
    "A treasury development note yields a nominal market interest rate of 12% per annum during a period when the general consumer price inflation rate is 5% per annum. What is the true real rate of interest (purchasing power growth)?",
    ["A. 6.67% per annum", "B. 7.00% per annum (crude subtraction)", "C. 6.25% per annum", "D. 7.35% per annum"], "A",
    "i_{\\text{real}} = \\frac{1 + d}{1 + f} - 1 = \\frac{d - f}{1 + f}",
    [{"step": 1, "title": "Apply Exact Fisher Relationship", "explanation": "(1 + 0.12) / (1 + 0.05) - 1 = 1.12 / 1.05 - 1:", "calculation": f"i_{{real}} = \\frac{{1.12}}{{1.05}} - 1 = 1.066667 - 1 = {i_real167*100:.2f}\\%"}],
    "6.67% per annum", ["1.12 ÷ 1.05 - 1 [=] ⟹ 0.066667"],
    "6.67%", "Do not use the crude rule-of-thumb (d - f = 12% - 5% = 7.00%) unless choices lack the exact answer.",
    "The true real return is 6.67%; the denominator (1 + f) accounts for the erosion of interest purchasing power.",
    [{"symbol": "d", "meaning": "Nominal rate", "value": "12%"}, {"symbol": "f", "meaning": "Inflation", "value": "5%"}]
))

# 168: Constant vs Current Peso Cash Flows
# Today's peso = ₱100,000. In 10 years at inflation f = 4%.
# Future inflated cost in current pesos = 100,000 * (1.04)^10 = 100,000 * 1.480244 = ₱148,024.
F_infl168 = 100000 * (1.04**10)
problems_156_175.append(make_p(
    168, 7, "Break-Even, Bonds & Replacement", "01_Compound_Interest_Time_Value_Money.pdf", "Doc 01: Constant vs Current Pesos",
    "Future Inflated Equivalent (Current Pesos) of a ₱100,000 Base Cost After 10 Years at 4% Inflation",
    "An engineering maintenance contract costs ₱100,000 in Year 0 constant pesos. If the average inflation rate is 4% per year over the next decade, what will be the actual future cash outlay required in Year 10 current (inflated) pesos?",
    ["A. ₱148,024 in Year 10 pesos", "B. ₱140,000 in Year 10 pesos", "C. ₱152,400 in Year 10 pesos", "D. ₱136,800 in Year 10 pesos"], "A",
    "\\text{Current Pesos}_n = \\text{Constant Pesos}_0 \\times (1 + f)^n",
    [{"step": 1, "title": "Compute Inflation Multiplier", "explanation": "(1 + 0.04)^10 = (1.04)^10 = 1.480244:", "calculation": "(1.04)^{10} = 1.480244"},
     {"step": 2, "title": "Multiply Base Cost", "explanation": "100,000 × 1.480244:", "calculation": f"\\text{{Outlay}} = 100,000 \\times 1.480244 = {p_peso(F_infl168)}"}],
    "₱148,024 in Year 10 pesos", ["100000 × 1.04 [xʸ] 10 [=] ⟹ 148024.43"],
    "₱148,024", "Constant pesos measure real purchasing power at Year 0; current pesos measure future nominal dollars at time n.",
    "To convert constant to current pesos, multiply by (1 + f)^n.",
    [{"symbol": "Base", "meaning": "Year 0 constant pesos", "value": "₱100,000"}, {"symbol": "f", "meaning": "Inflation", "value": "4%/yr"}, {"symbol": "n", "meaning": "Years", "value": "10"}]
))

# 169: Cost Depletion of a Coal Mining Property
# Property cost = ₱30,000,000. Residual land value = ₱2,000,000. Total reserves = 2,000,000 tons.
# Depletion unit rate = (30M - 2M) / 2M = 28M / 2M = ₱14.00/ton.
# In Year 1, 150,000 tons mined. Cost depletion = 150,000 * 14.00 = ₱2,100,000.
dep_rate169 = 28000000.0 / 2000000.0 # ₱14/ton
cost_dep169 = 150000 * dep_rate169
problems_156_175.append(make_p(
    169, 7, "Break-Even, Bonds & Replacement", "04_Depreciation_Methods_SLM_SOYD_DBM.pdf", "Doc 04: Cost Depletion of Natural Reserves",
    "Cost Depletion Allowance for a 2,000,000-Ton Coal Mining Property",
    "A thermal power generation company purchases a coal mining lease for ₱30,000,000 with an estimated 2,000,000 metric tons of recoverable coal and a residual post-mining land value of ₱2,000,000. If 150,000 metric tons are extracted during the first year, what is the allowable cost depletion deduction?",
    ["A. ₱2,100,000 (₱14.00/ton)", "B. ₱2,250,000 (₱15.00/ton)", "C. ₱1,950,000 (₱13.00/ton)", "D. ₱2,400,000 (₱16.00/ton)"], "A",
    "\\text{Depletion Rate} = \\frac{\\text{Cost} - \\text{Residual}}{\\text{Total Reserves}}; \\quad \\text{Depletion} = (\\text{Units Extracted}) \\cdot \\text{Rate}",
    [{"step": 1, "title": "Compute Unit Depletion Rate", "explanation": "(30,000,000 - 2,000,000) / 2,000,000 = ₱14.00/ton:", "calculation": "\\text{Rate} = \\frac{28,000,000}{2,000,000} = ₱14.00/\\text{ton}"},
     {"step": 2, "title": "Compute Year 1 Depletion Deduction", "explanation": "150,000 tons × ₱14.00/ton = ₱2,100,000:", "calculation": f"\\text{{Depletion}} = 150,000 \\times 14.00 = {p_peso(cost_dep169)}"}],
    "₱2,100,000 (₱14.00/ton)", ["( 30000000 - 2000000 ) ÷ 2000000 × 150000 [=] ⟹ 2100000"],
    "₱2,100,000", "Cost depletion is identical in formula structure to the service output method of depreciation.",
    "Subtract residual surface land value from property acquisition cost before dividing by reserves.",
    [{"symbol": "Cost", "meaning": "Lease cost", "value": "₱30,000,000"}, {"symbol": "Reserves", "meaning": "Recoverable tons", "value": "2,000,000 tons"}, {"symbol": "Extracted", "meaning": "Year 1 output", "value": "150,000 tons"}]
))

# 170: Percentage Depletion
# Gross revenue = ₱12,000,000. Statutory depletion rate = 15%.
# Potential depletion = 0.15 * 12M = ₱1,800,000.
# Taxable net income before depletion = ₱3,000,000.
# Statutory ceiling = 50% of net income = 0.50 * 3M = ₱1,500,000.
# Actual allowable depletion = min(1.8M, 1.5M) = ₱1,500,000!
pct_dep170 = min(0.15 * 12000000, 0.50 * 3000000)
problems_156_175.append(make_p(
    170, 7, "Break-Even, Bonds & Replacement", "04_Depreciation_Methods_SLM_SOYD_DBM.pdf", "Doc 04: Percentage Depletion Ceiling",
    "Allowable Percentage Depletion with 50% Net Income Statutory Ceiling",
    "A copper mining property generates ₱12,000,000 in gross revenue during the tax year. The statutory percentage depletion rate for copper is 15%. If taxable net income before depletion is ₱3,000,000, and tax law limits depletion to a maximum of 50% of net taxable income, what is the allowable percentage depletion?",
    ["A. ₱1,500,000 (Constrained by 50% Net Income Ceiling)", "B. ₱1,800,000 (15% of Gross Revenue)", "C. ₱1,650,000", "D. ₱1,350,000"], "A",
    "\\text{Depletion} = \\min( \\text{Rate} \\times \\text{Gross}, 0.50 \\times \\text{Net Income} )",
    [{"step": 1, "title": "Compute Unconstrained Percentage Depletion", "explanation": "15% of ₱12,000,000 gross revenue = ₱1,800,000:", "calculation": "0.15 \\times 12,000,000 = ₱1,800,000"},
     {"step": 2, "title": "Compute 50% Net Income Limitation", "explanation": "50% of ₱3,000,000 net income = ₱1,500,000:", "calculation": "0.50 \\times 3,000,000 = ₱1,500,000"},
     {"step": 3, "title": "Apply Statutory Minimum Rule", "explanation": "Depletion is limited to the lesser of the two amounts:", "calculation": f"\\text{{Allowable}} = \\min(1,800,000, 1,500,000) = {p_peso(pct_dep170)}"}],
    "₱1,500,000 (Constrained by 50% Net Income Ceiling)", ["min( 0.15 × 12000000, 0.50 × 3000000 ) = 1500000"],
    "₱1,500,000", "Percentage depletion cannot exceed 50% of the property's taxable net income (before depletion).",
    "A frequent PRC exam trap: test if examinee remembers the 50% net income ceiling.",
    [{"symbol": "Gross", "meaning": "Gross sales", "value": "₱12,000,000"}, {"symbol": "Net", "meaning": "Net taxable income", "value": "₱3,000,000"}, {"symbol": "Rate", "meaning": "Statutory rate", "value": "15%"}]
))

# 171: Valuation of Timber Forest with Recurring Cycles
# Forest tract produces net timber harvest of ₱800,000 every 20 years indefinitely. First harvest in 20 yrs. Interest = 6%.
# P = 800,000 / [(1.06)^20 - 1] = 800,000 / (3.207135 - 1) = 800,000 / 2.207135 = ₱362,461.
P171 = 800000 / (1.06**20 - 1)
problems_156_175.append(make_p(
    171, 7, "Break-Even, Bonds & Replacement", "05_Capitalized_Cost_Perpetual_Replacements.pdf", "Doc 05: Renewable Resource Valuation",
    "Present Capitalized Valuation of a Timber Tract Harvested Every 20 Years Forever at 6%",
    "A sustainable commercial pine forest produces a mature timber harvest yielding ₱800,000 net profit every 20 years indefinitely, with the first harvest occurring 20 years from today. If money is worth 6% per annum, what is the capitalized present value of the perpetual timber yield?",
    ["A. ₱362,461", "B. ₱400,000", "C. ₱325,800", "D. ₱385,200"], "A",
    "P = \\frac{R}{(1+i)^k - 1}",
    [{"step": 1, "title": "Compute 20-Year Compounding Factor", "explanation": "(1.06)^20 - 1 = 3.207135 - 1 = 2.207135:", "calculation": "(1.06)^{20} - 1 = 2.207135"},
     {"step": 2, "title": "Divide Periodic Harvest by Factor", "explanation": "800,000 / 2.207135:", "calculation": f"P = \\frac{{800,000}}{{2.207135}} = {p_peso(P171)}"}],
    "₱362,461", ["800000 ÷ ( 1.06 [xʸ] 20 - 1 ) [=] ⟹ 362460.89"],
    "₱362,461", "Known as Faustmann's Formula in forest resource economics.",
    "It is mathematically identical to the capitalized cost of periodic replacements: P = R / ((1+i)^k - 1).",
    [{"symbol": "Harvest", "meaning": "Net yield every 20 yrs", "value": "₱800,000"}, {"symbol": "Cycle", "meaning": "Rotation period", "value": "20 years"}, {"symbol": "i", "meaning": "Rate", "value": "6%"}]
))

# 172: Make or Buy Decision
# Make: Tooling FC = ₱150,000/yr. Unit production cost = ₱35/unit.
# Buy: Purchase price = ₱55/unit.
# 150,000 + 35*Q = 55*Q => 20*Q = 150,000 => Q = 7,500 units.
Q172 = 150000.0 / (55.0 - 35.0)
problems_156_175.append(make_p(
    172, 7, "Break-Even, Bonds & Replacement", "06_BreakEven_Payback_Rate_of_Return.pdf", "Doc 06: Make or Buy Analysis",
    "Make-or-Buy Break-Even Quantity for Sheet Metal Electrical Enclosures",
    "A panelboard manufacturer can make sheet metal enclosures in-house (Fixed tooling cost = ₱150,000/yr, variable fabrication cost = ₱35.00/unit) or buy them from an outside supplier for ₱55.00 per unit. What is the break-even volume above which making in-house is more economical?",
    ["A. 7,500 units per year", "B. 6,800 units per year", "C. 8,200 units per year", "D. 7,000 units per year"], "A",
    "Q = \\frac{FC_{\\text{make}}}{\\text{Price}_{\\text{buy}} - VC_{\\text{make}}} = \\frac{150,000}{55.00 - 35.00}",
    [{"step": 1, "title": "Compute Unit Savings from In-House Fabrication", "explanation": "55.00 - 35.00 = ₱20.00/unit savings:", "calculation": "\\Delta C = ₱20.00/\\text{unit}"},
     {"step": 2, "title": "Calculate Break-Even Threshold Quantity", "explanation": "150,000 / 20.00:", "calculation": f"Q = \\frac{{150,000}}{{20.00}} = {round(Q172):,} \\text{{ units}}"}],
    "7,500 units per year", ["150000 ÷ ( 55 - 35 ) [=] ⟹ 7500"],
    "7,500 units", "For demand below 7,500 units, buy from outside supplier; for demand above 7,500 units, make in-house.",
    "Classic break-even comparison between variable vendor cost and fixed internal tooling.",
    [{"symbol": "Tooling", "meaning": "Fixed cost", "value": "₱150,000"}, {"symbol": "Make VC", "meaning": "Unit internal cost", "value": "₱35.00"}, {"symbol": "Buy", "meaning": "Vendor unit price", "value": "₱55.00"}]
))

# 173: Multi-Product Sales Mix Break-Even
# Product A: Price = ₱100, VC = ₱60 (CM = ₱40). Sales mix = 60%.
# Product B: Price = ₱200, VC = ₱100 (CM = ₱100). Sales mix = 40%.
# Weighted CM = 0.60 * 40 + 0.40 * 100 = 24 + 40 = ₱64/unit package.
# Total FC = ₱1,920,000/yr.
# Total composite units = 1,920,000 / 64 = 30,000 composite units.
# Product A units = 0.60 * 30,000 = 18,000 units.
# Product B units = 0.40 * 30,000 = 12,000 units.
composite_CM173 = 0.60 * 40 + 0.40 * 100 # 64
Q_comp173 = 1920000 / composite_CM173 # 30,000
QA_173 = 0.60 * Q_comp173 # 18,000
QB_173 = 0.40 * Q_comp173 # 12,000
problems_156_175.append(make_p(
    173, 7, "Break-Even, Bonds & Replacement", "06_BreakEven_Payback_Rate_of_Return.pdf", "Doc 06: Multi-Product Break-Even",
    "Multi-Product Break-Even Analysis with 60:40 Product Mix Ratio",
    "A lighting factory produces two fixtures with total fixed overhead of ₱1,920,000/yr: Fixture A (Price = ₱100, VC = ₱60, 60% of sales) and Fixture B (Price = ₱200, VC = ₱100, 40% of sales). How many units of Fixture A and Fixture B must be sold annually to break even?",
    ["A. Fixture A: 18,000 units | Fixture B: 12,000 units", "B. Fixture A: 20,000 units | Fixture B: 10,000 units", "C. Fixture A: 15,000 units | Fixture B: 15,000 units", "D. Fixture A: 24,000 units | Fixture B: 16,000 units"], "A",
    "\\bar{CM} = \\sum w_k (P_k - VC_k); \\quad Q_{\\text{composite}} = \\frac{FC}{\\bar{CM}}",
    [{"step": 1, "title": "Compute Weighted Average Contribution Margin", "explanation": "0.60(100 - 60) + 0.40(200 - 100) = 0.60(40) + 0.40(100) = 24 + 40 = ₱64.00/unit:", "calculation": "\\bar{CM} = ₱64.00"},
     {"step": 2, "title": "Compute Total Composite Break-Even Volume", "explanation": "1,920,000 / 64.00 = 30,000 total units:", "calculation": "Q_{composite} = 30,000 \\text{ units}"},
     {"step": 3, "title": "Apportion by Sales Mix", "explanation": "A: 60% × 30k = 18,000 units; B: 40% × 30k = 12,000 units:", "calculation": "Q_A = 18,000; \\quad Q_B = 12,000"}],
    "Fixture A: 18,000 units | Fixture B: 12,000 units", ["1920000 ÷ ( 0.60 × 40 + 0.40 × 100 ) [=] ⟹ 30000, Ans × 0.60 [=] ⟹ 18000, 30000 × 0.40 [=] ⟹ 12000"],
    "A: 18,000 | B: 12,000", "Use weighted average contribution margin across products.",
    "Verify: Total Revenue = 18k(100) + 12k(200) = 1.8M + 2.4M = ₱4.2M. Total VC = 18k(60) + 12k(100) = 1.08M + 1.2M = ₱2.28M. Total CM = ₱1.92M = FC.",
    [{"symbol": "A", "meaning": "CM=₱40, 60%", "value": "18,000 units"}, {"symbol": "B", "meaning": "CM=₱100, 40%", "value": "12,000 units"}]
))

# 174: Sensitivity Analysis of Project NPV
# Base: Cost = ₱1,000,000. Annual savings = ₱250,000 for 6 yrs. i = 10%.
# Base NPV = -1M + 250k*(P/A, 10%, 6) = -1M + 250k*4.355261 = -1M + 1,088,815 = +₱88,815.
# Case 1: 10% increase in capital cost (Cost = ₱1.1M).
# New NPV = -1.1M + 1,088,815 = -₱11,185 (Drops into negative territory!).
# Percentage change in NPV = (-11,185 - 88,815) / 88,815 = -100k / 88,815 = -112.6%.
base_npv174 = -1000000 + 250000 * 4.355261 # +88,815.25
new_npv174 = -1100000 + 250000 * 4.355261  # -11,184.75
problems_156_175.append(make_p(
    174, 7, "Break-Even, Bonds & Replacement", "06_BreakEven_Payback_Rate_of_Return.pdf", "Doc 06: Sensitivity Analysis",
    "Sensitivity of Project NPV to a 10% Capital Cost Overrun at 10% MARR",
    "A mini-hydro plant has a baseline cost of ₱1,000,000 and returns ₱250,000/yr for 6 years at 10% MARR (Base NPV = +₱88,815). If unforeseen site civil works cause a 10% cost overrun (capital cost becomes ₱1,100,000), what is the new project NPV?",
    ["A. NPV drops to -₱11,185 (Project becomes Unfeasible)", "B. NPV drops to +₱25,400 (Still Feasible)", "C. NPV drops to +₱50,000 (Still Feasible)", "D. NPV drops to -₱45,200 (Project becomes Unfeasible)"], "A",
    "\\text{NPV}_{new} = \\text{NPV}_{base} - \\Delta FC",
    [{"step": 1, "title": "Compute Base Net Present Value", "explanation": "-1,000,000 + 250,000 × 4.355261 = +₱88,815.25:", "calculation": "\\text{NPV}_{base} = +₱88,815.25"},
     {"step": 2, "title": "Subtract 10% Capital Overrun (₱100,000)", "explanation": "Since capital occurs at t=0, every ₱1 increase in cost reduces NPV by exactly ₱1:", "calculation": f"\\text{{NPV}}_{{new}} = 88,815.25 - 100,000 = {p_peso(new_npv174)}"}],
    "NPV drops to -₱11,185 (Project becomes Unfeasible)", ["88815.25 - 100000 [=] ⟹ -11184.75"],
    "-₱11,185", "A mere 10% increase in capital turns the project from profitable to unprofitable.",
    "This illustrates high sensitivity to upfront capital cost.",
    [{"symbol": "Base NPV", "meaning": "Original NPV", "value": "+₱88,815"}, {"symbol": "Overrun", "meaning": "10% cost overrun", "value": "₱100,000"}, {"symbol": "New NPV", "meaning": "Revised NPV", "value": "-₱11,185"}]
))

# 175: Comprehensive PRC Licensure Exam Synthesis
# Full Synthesis:
# Initial Capital = ₱2,000,000. Life = 5 years. Salvage value = ₱200,000.
# Annual Revenue = ₱900,000. Annual Operating Cost = ₱250,000.
# Straight-line depreciation = (2,000,000 - 200,000) / 5 = ₱360,000/yr.
# Taxable Income = 900,000 - 250,000 - 360,000 = ₱290,000/yr.
# Income Tax (30%) = 0.30 * 290,000 = ₱87,000/yr.
# Net Operating Profit After Tax (NOPAT) = 290,000 - 87,000 = ₱203,000/yr.
# After-Tax Operating Cash Flow (ATCF) = NOPAT + Depreciation = 203,000 + 360,000 = ₱563,000/yr.
# (Or ATCF = (Revenue - O&M)*(1 - T) + T*d = 650,000*(0.70) + 0.30*360,000 = 455,000 + 108,000 = ₱563,000/yr!)
# End of Year 5: Terminal salvage recovery = ₱200,000 (equal to book value, so no tax on salvage).
# MARR = 10%.
# (P/A, 10%, 5) = 3.790787; (P/F, 10%, 5) = 0.620921.
# After-Tax NPV = -2,000,000 + 563,000 * 3.790787 + 200,000 * 0.620921
# = -2,000,000 + 2,134,213.08 + 124,184.20 = +₱258,397.28.
atcf175 = 563000
npv175 = -2000000 + 563000 * 3.790787 + 200000 * 0.620921
problems_156_175.append(make_p(
    175, 7, "Break-Even, Bonds & Replacement", "06_BreakEven_Payback_Rate_of_Return.pdf", "Doc 06: Grand Synthesis (After-Tax Cash Flow NPV)",
    "Grand Licensure Exam Synthesis: Complete After-Tax Cash Flow NPV Evaluation with Depreciation Tax Shield",
    "A manufacturing facility installs a robotic production cell for ₱2,000,000 (5-year life, salvage value = ₱200,000, SLM depreciation). Annual revenue is ₱900,000, operating expenses are ₱250,000, the corporate tax rate is 30%, and the after-tax MARR is 10%. What is the annual After-Tax Cash Flow (ATCF) and the project's Net Present Value (NPV)?",
    ["A. ATCF = ₱563,000/year | After-Tax NPV = +₱258,397", "B. ATCF = ₱455,000/year | After-Tax NPV = -₱150,000", "C. ATCF = ₱650,000/year | After-Tax NPV = +₱580,200", "D. ATCF = ₱563,000/year | After-Tax NPV = +₱134,213"], "A",
    "\\text{ATCF} = (R - O)(1 - T) + T \\cdot d; \\quad \\text{NPV} = -FC + \\text{ATCF}(P/A, i, n) + SV(P/F, i, n)",
    [{"step": 1, "title": "Compute Straight Line Depreciation", "explanation": "d = (2,000,000 - 200,000) / 5 = ₱360,000/year:", "calculation": "d = ₱360,000/\\text{year}"},
     {"step": 2, "title": "Compute Annual After-Tax Cash Flow (ATCF)", "explanation": "ATCF = (900k - 250k)(1 - 0.30) + 0.30(360,000) = 650k(0.70) + 108,000 = 455,000 + 108,000 = ₱563,000/year:", "calculation": f"\\text{{ATCF}} = {p_peso(atcf175)}/\\text{{year}}"},
     {"step": 3, "title": "Compute After-Tax Net Present Value (NPV)", "explanation": "-2M + 563,000(3.790787) + 200,000(0.620921) = -2M + 2,134,213 + 124,184:", "calculation": f"\\text{{NPV}} = {p_peso(npv175)}"}],
    "ATCF = ₱563,000/year | After-Tax NPV = +₱258,397", ["( 900000 - 250000 ) × 0.70 + 0.30 × 360000 [=] ⟹ 563000, -2000000 + 563000 × ( 1 - 1.10 [xʸ] -5 ) ÷ 0.10 + 200000 × 1.10 [xʸ] -5 [=] ⟹ 258397.28"],
    "ATCF: ₱563,000 | NPV: +₱258,397", "The master equation of engineering economics: ATCF = (R - O)(1 - T) + T · d.",
    "Depreciation provides a tax shield of T · d (30% of ₱360k = ₱108,000) that adds directly to after-tax cash flow.",
    [{"symbol": "FC", "meaning": "First cost", "value": "₱2,000,000"}, {"symbol": "ATCF", "meaning": "After-tax cash flow", "value": "₱563,000/yr"}, {"symbol": "NPV", "meaning": "After-tax NPV", "value": "+₱258,397"}]
))

print("Batch 156-175 compiled successfully.")
