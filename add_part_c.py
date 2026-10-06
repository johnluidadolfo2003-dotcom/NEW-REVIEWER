# -*- coding: utf-8 -*-
"""
Problems 121-150: Depreciation, Gradients, Amortization, and Capital Budgeting
"""
import math

def p_peso(val):
    return f"₱{val:,.2f}"

def p_int(val):
    return f"₱{round(val):,}"

from master_builder_175 import make_p

problems_121_150 = []

# 121: Asset Retirement Disposal Gain/Loss
FC121 = 400000; n121 = 5; SV121 = 40000; d121 = (FC121 - SV121)/n121 # 72k/yr
# Sold at end of Year 3 for ₱160,000. Book value = 400,000 - 3*(72k) = 184,000. Loss = 184k - 160k = 24k.
BV3_121 = FC121 - 3 * d121
Loss121 = BV3_121 - 160000
problems_121_150.append(make_p(
    121, 4, "Depreciation Analysis", "04_Depreciation_Methods_SLM_SOYD_DBM.pdf", "Doc 04: Asset Disposal & Loss on Retirement",
    "Gain or Loss on Premature Disposal of an Industrial Transformer",
    "An auxiliary transformer costing ₱400,000 with a 5-year life and ₱40,000 salvage value is depreciated via SLM. If it is sold unexpectedly at the end of Year 3 for ₱160,000, what is the accounting gain or loss on disposal?",
    ["A. Loss of ₱24,000", "B. Gain of ₱16,000", "C. Loss of ₱32,000", "D. Zero Gain or Loss"], "A",
    "\\text{Gain/Loss} = \\text{Sale Price} - BV_3; \\quad BV_3 = FC - 3\\left(\\frac{FC - SV}{n}\\right)",
    [{"step": 1, "title": "Compute Book Value at Year 3", "explanation": "400,000 - 3(72,000) = 400,000 - 216,000 = ₱184,000:", "calculation": f"BV_3 = {p_peso(BV3_121)}"},
     {"step": 2, "title": "Determine Net Gain or Loss", "explanation": "Sale Price - Book Value = 160,000 - 184,000:", "calculation": f"\\text{{Result}} = 160,000 - 184,000 = -{p_peso(Loss121)} \\quad (\\text{{Loss}})"}],
    "Loss of ₱24,000", ["400000 - 3 × ( 400000 - 40000 ) ÷ 5 [=] ⟹ 184000, 160000 - Ans [=] ⟹ -24000"],
    "-₱24,000 (Loss)", "When selling price is less than book value, a loss on disposal occurs.",
    "A loss reduces taxable income in corporate tax calculations.",
    [{"symbol": "FC", "meaning": "Cost", "value": "₱400,000"}, {"symbol": "BV_3", "meaning": "Book value", "value": "₱184,000"}, {"symbol": "Sale", "meaning": "Price realized", "value": "₱160,000"}]
))

# 122: Composite Life of a Substation Facility
# Component A: Cost = ₱1,000,000, SV = ₱100k, Life = 10 yrs => d = 90k
# Component B: Cost = ₱600,000, SV = ₱60k, Life = 6 yrs => d = 90k
# Component C: Cost = ₱400,000, SV = ₱40k, Life = 4 yrs => d = 90k
# Total Depreciable Base = 900k + 540k + 360k = 1,800,000. Total annual d = 270,000.
# Composite life = 1,800,000 / 270,000 = 6.67 years.
comp_life122 = 1800000.0 / 270000.0 # 6.67 yrs
problems_121_150.append(make_p(
    122, 4, "Depreciation Analysis", "04_Depreciation_Methods_SLM_SOYD_DBM.pdf", "Doc 04: Composite Depreciation",
    "Composite Life and Composite Depreciation Rate of a Multi-Component Substation",
    "A distribution substation has three major components: Switchgear (Base = ₱900k, life = 10 yrs), Transformer (Base = ₱540k, life = 6 yrs), and Batteries (Base = ₱360k, life = 4 yrs). What is the composite life of the entire substation installation?",
    ["A. 6.67 years", "B. 6.00 years", "C. 7.25 years", "D. 5.80 years"], "A",
    "\\text{Composite Life} = \\frac{\\sum (FC - SV)_k}{\\sum d_k}",
    [{"step": 1, "title": "Compute Individual Annual Depreciations", "explanation": "d_A = 90k, d_B = 90k, d_C = 90k:", "calculation": "\\sum d_k = 90,000 + 90,000 + 90,000 = ₱270,000/\\text{year}"},
     {"step": 2, "title": "Compute Total Depreciable Base", "explanation": "900,000 + 540,000 + 360,000 = ₱1,800,000:", "calculation": "\\sum (FC - SV) = ₱1,800,000"},
     {"step": 3, "title": "Calculate Composite Life", "explanation": "1,800,000 / 270,000:", "calculation": f"\\text{{Composite Life}} = \\frac{{1,800,000}}{{270,000}} = {comp_life122:.2f} \\text{{ years}}"}],
    "6.67 years", ["( 900000 + 540000 + 360000 ) ÷ ( 90000 + 90000 + 90000 ) [=] ⟹ 6.66667"],
    "6.67 years", "Composite life is total depreciable sum divided by total annual straight-line depreciation.",
    "Do not compute simple average of lives (10+6+4)/3 = 6.67; here it coincides only because d values were equal.",
    [{"symbol": "Total Base", "meaning": "Depreciable sum", "value": "₱1,800,000"}, {"symbol": "Total d", "meaning": "Annual sum", "value": "₱270,000/yr"}]
))

# 123: Group Depreciation Method
problems_121_150.append(make_p(
    123, 4, "Depreciation Analysis", "04_Depreciation_Methods_SLM_SOYD_DBM.pdf", "Doc 04: Group Depreciation",
    "Group Depreciation Annual Rate for a Utility Fleet of 10 Service Trucks",
    "An electric cooperative acquires a fleet of 10 line service trucks for ₱12,000,000 total with estimated salvage value of ₱2,000,000 and average life of 8 years. What is the group depreciation rate based on original cost?",
    ["A. 10.42% per year", "B. 12.50% per year", "C. 8.33% per year", "D. 11.11% per year"], "A",
    "\\text{Group Rate} = \\frac{\\sum (FC - SV)}{\\sum FC \\cdot n} \\times 100\\% = \\frac{10,000,000}{12,000,000 \\times 8} \\times 100\\%",
    [{"step": 1, "title": "Compute Annual Depreciation for Group", "explanation": "(12M - 2M) / 8 = 10M / 8 = ₱1,250,000/yr:", "calculation": "d_{group} = ₱1,250,000/\\text{year}"},
     {"step": 2, "title": "Compute Rate on Original First Cost", "explanation": "1,250,000 / 12,000,000:", "calculation": "\\text{Rate} = \\frac{1,250,000}{12,000,000} = 10.4167\\% = 10.42\\%"}],
    "10.42% per year", ["( 12 - 2 ) ÷ 8 ÷ 12 × 100 [=] ⟹ 10.4167"],
    "10.42%", "Group depreciation applies a single composite rate across homogeneous assets.",
    "When individual trucks are retired, no gain or loss is recognized; the cost is credited to the asset account.",
    [{"symbol": "FC", "meaning": "Fleet cost", "value": "₱12,000,000"}, {"symbol": "SV", "meaning": "Fleet salvage", "value": "₱2,000,000"}, {"symbol": "n", "meaning": "Average life", "value": "8 years"}]
))

# 124: Sinking Fund Reserve Accumulation
FC124 = 2500000; SV124 = 250000; n124 = 15; i124 = 0.07
# At end of 15 years, the accumulated sinking fund must equal FC - SV = 2,250,000.
problems_121_150.append(make_p(
    124, 4, "Depreciation Analysis", "04_Depreciation_Methods_SLM_SOYD_DBM.pdf", "Doc 04: Sinking Fund Reserve",
    "Final Accumulated Reserve in a 15-Year Sinking Fund Depreciation Account",
    "A 500 kVA solar microgrid system costs ₱2,500,000 with a 15-year life and salvage value of ₱250,000. If annual sinking fund deposits are made at 7% interest, what will be the total accumulated reserve in the fund immediately after the 15th deposit?",
    ["A. ₱2,250,000", "B. ₱2,500,000", "C. ₱2,750,000", "D. ₱2,125,000"], "A",
    "D_n = FC - SV = \\text{Total Depreciable Base}",
    [{"step": 1, "title": "Recognize Fundamental SFM Principle", "explanation": "The sinking fund is specifically engineered so that total principal plus compound interest equals (FC - SV):", "calculation": f"D_{{15}} = 2,500,000 - 250,000 = {p_peso(FC124 - SV124)}"}],
    "₱2,250,000", ["2500000 - 250000 [=] ⟹ 2250000"],
    "₱2,250,000", "By definition, the accumulated sinking fund at year n equals FC - SV.",
    "Do not waste exam time calculating the annual deposit and compounding it for 15 years; the answer is simply FC - SV.",
    [{"symbol": "FC", "meaning": "First cost", "value": "₱2,500,000"}, {"symbol": "SV", "meaning": "Salvage", "value": "₱250,000"}]
))

# 125: Depreciation Tax Shield (Tax Savings from DDBM vs SLM)
# FC = 1,000,000, n = 5, tax rate = 30%, i = 10%. Year 1:
# SLM d1 = 200k (assuming SV = 0). Tax shield = 0.30 * 200k = 60k.
# DDBM d1 = 0.40 * 1M = 400k. Tax shield = 0.30 * 400k = 120k.
# Difference in Year 1 tax savings = 120k - 60k = ₱60,000!
diff_tax125 = 0.30 * (400000 - 200000)
problems_121_150.append(make_p(
    125, 4, "Depreciation Analysis", "04_Depreciation_Methods_SLM_SOYD_DBM.pdf", "Doc 04: Depreciation Tax Shield",
    "First-Year Income Tax Savings from Accelerated Depreciation (DDBM vs SLM) at 30% Tax Rate",
    "A manufacturing plant purchases a ₱1,000,000 robot (5-year life, zero salvage). The corporate income tax rate is 30%. How much additional cash flow from income tax shield does the firm save in Year 1 by using Double Declining Balance instead of Straight Line depreciation?",
    ["A. ₱60,000", "B. ₱45,000", "C. ₱75,000", "D. ₱50,000"], "A",
    "\\Delta \\text{Tax Shield} = T \\cdot (d_{DDBM} - d_{SLM}) = 0.30 \\times (400,000 - 200,000)",
    [{"step": 1, "title": "Compute Year 1 Depreciation Charges", "explanation": "DDBM: 40% of 1M = ₱400,000; SLM: 1M / 5 = ₱200,000:", "calculation": "\\Delta d = 400,000 - 200,000 = ₱200,000"},
     {"step": 2, "title": "Multiply by Corporate Tax Rate", "explanation": "30% × ₱200,000:", "calculation": f"\\Delta \\text{{Tax Shield}} = 0.30 \\times 200,000 = {p_peso(diff_tax125)}"}],
    "₱60,000", ["0.30 × ( 0.40 × 1000000 - 1000000 ÷ 5 ) [=] ⟹ 60000"],
    "₱60,000", "Accelerated depreciation produces a larger immediate tax deduction, deferring tax liability to later years.",
    "This increases present worth of project cash flows due to time value of money.",
    [{"symbol": "T", "meaning": "Tax rate", "value": "30%"}, {"symbol": "Δd", "meaning": "Depreciation difference", "value": "₱200,000"}]
))

# 126: Arithmetic Gradient Present Worth
# Base A = 10,000, G = 2,000, n = 6, i = 10%
# P = A*(P/A, 10%, 6) + G*(P/G, 10%, 6)
# (P/A, 10%, 6) = 4.355261
# (P/G, 10%, 6) = [(1 - (1.10)^-6)/0.10 - 6*(1.10)^-6] / 0.10 = [4.355261 - 3.386855] / 0.10 = 9.68406
P_ann126 = 10000 * 4.355261
P_grad126 = 2000 * 9.684060
P_tot126 = P_ann126 + P_grad126 # 43,552.61 + 19,368.12 = 62,920.73
problems_121_150.append(make_p(
    126, 5, "Gradients & Amortization", "03_Annuities_Ordinary_Due_Deferred.pdf", "Doc 03: Arithmetic Gradient Present Worth",
    "Present Worth of an Arithmetic Gradient Maintenance Series (₱10k Base + ₱2k/yr Gradient)",
    "The maintenance expenses of an industrial air compressor are expected to be ₱10,000 at the end of Year 1, increasing by ₱2,000 each year through Year 6 (Year 2 = ₱12k, Year 3 = ₱14k, ..., Year 6 = ₱20k). If the interest rate is 10% per annum, find the total present worth of these expenses.",
    ["A. ₱62,921", "B. ₱60,500", "C. ₱65,400", "D. ₱58,800"], "A",
    "P = A(P/A, i, n) + G(P/G, i, n); \\quad (P/G, i, n) = \\frac{1}{i}\\left[ (P/A, i, n) - n(1+i)^{-n} \\right]",
    [{"step": 1, "title": "Compute Uniform Series Present Worth P_A", "explanation": "10,000 × (P/A, 10%, 6) = 10,000 × 4.355261 = ₱43,552.61:", "calculation": f"P_A = {p_peso(P_ann126)}"},
     {"step": 2, "title": "Compute Gradient Factor (P/G, 10%, 6)", "explanation": "[4.355261 - 6(1.10)^(-6)] / 0.10 = 9.68406:", "calculation": f"P_G = 2,000 \\times 9.68406 = {p_peso(P_grad126)}"},
     {"step": 3, "title": "Sum Present Worths", "explanation": "43,552.61 + 19,368.12:", "calculation": f"P_{{total}} = {p_peso(P_tot126)}"}],
    "₱62,921", ["10000 × ( 1 - 1.10 [xʸ] -6 ) ÷ 0.10 + 2000 ÷ 0.10 × ( ( 1 - 1.10 [xʸ] -6 ) ÷ 0.10 - 6 × 1.10 [xʸ] -6 ) [=] ⟹ 62920.73"],
    "62,920.73", "On Canon F-789SGA, store (P/A) in memory variable A to compute (P/G) quickly.",
    "Notice that the gradient G begins at Year 2 (cash flow at Year 1 is the base amount A).",
    [{"symbol": "A", "meaning": "Base expense", "value": "₱10,000"}, {"symbol": "G", "meaning": "Uniform increase", "value": "₱2,000/yr"}, {"symbol": "n", "meaning": "Periods", "value": "6"}, {"symbol": "i", "meaning": "Interest", "value": "10%"}]
))

# 127: Arithmetic Gradient Uniform Annual Equivalent A_eq
# A_eq = A + G*(A/G, 10%, 6) = 10,000 + 2,000 * (9.68406 / 4.355261) = 10,000 + 2,000 * 2.22353 = 14,447.06
A_eq127 = 10000 + 2000 * (9.684060 / 4.355261)
problems_121_150.append(make_p(
    127, 5, "Gradients & Amortization", "03_Annuities_Ordinary_Due_Deferred.pdf", "Doc 03: Equivalent Uniform Annual Series",
    "Equivalent Uniform Annual Expense of the ₱10,000 Base and ₱2,000/yr Gradient Series",
    "For the compressor maintenance expenses in Problem 126 (₱10k in Year 1 increasing by ₱2k/yr to Year 6 at 10% interest), what is the Equivalent Uniform Annual Cost (EUAC) over the 6-year period?",
    ["A. ₱14,447/year", "B. ₱15,000/year", "C. ₱13,850/year", "D. ₱14,920/year"], "A",
    "A_{eq} = A + G(A/G, i, n) = A + G \\left[ \\frac{1}{i} - \\frac{n}{(1+i)^n - 1} \\right]",
    [{"step": 1, "title": "Compute Factor (A/G, 10%, 6)", "explanation": "1/0.10 - 6/[(1.10)^6 - 1] = 10 - 6/0.771561 = 10 - 7.776442 = 2.22353:", "calculation": "(A/G, 10\\%, 6) = 2.22353"},
     {"step": 2, "title": "Compute Equivalent Annual Cost", "explanation": "10,000 + 2,000 × 2.22353:", "calculation": f"A_{{eq}} = 10,000 + 4,447.06 = {p_peso(A_eq127)}/\\text{{year}}"}],
    "₱14,447/year", ["10000 + 2000 × ( 1 ÷ 0.10 - 6 ÷ ( 1.10 [xʸ] 6 - 1 ) ) [=] ⟹ 14447.06"],
    "14,447.06", "The arithmetic average is (10k+20k)/2 = ₱15,000; the time-value equivalent is lower (₱14,447) because larger expenses occur later.",
    "Shortcut: (A/G) factor is simply 1/i - n/((1+i)^n - 1).",
    [{"symbol": "A", "meaning": "Base", "value": "₱10,000"}, {"symbol": "G", "meaning": "Gradient", "value": "₱2,000"}, {"symbol": "Factor", "meaning": "(A/G)", "value": "2.2235"}]
))

# 128: Decreasing Arithmetic Gradient
# A = 100,000, G = -8,000, n = 5, i = 8%
# (P/A, 8%, 5) = 3.992710
# (P/G, 8%, 5) = [3.992710 - 5*(1.08)^-5] / 0.08 = [3.992710 - 3.402916] / 0.08 = 7.372425
P128 = 100000 * 3.992710 - 8000 * 7.372425 # 399,271 - 58,979 = 340,292
problems_121_150.append(make_p(
    128, 5, "Gradients & Amortization", "03_Annuities_Ordinary_Due_Deferred.pdf", "Doc 03: Decreasing Arithmetic Gradient",
    "Present Worth of a Decreasing Revenue Gradient Series over 5 Years at 8%",
    "An oilwell production revenue is ₱100,000 in Year 1 and declines by ₱8,000 each year through Year 5 (Year 2 = ₱92k, Year 3 = ₱84k, Year 4 = ₱76k, Year 5 = ₱68k). At an interest rate of 8% per annum, what is the present worth of this declining stream?",
    ["A. ₱340,292", "B. ₱352,400", "C. ₱328,150", "D. ₱345,800"], "A",
    "P = A(P/A, i, n) - G(P/G, i, n)",
    [{"step": 1, "title": "Compute Base Present Worth", "explanation": "100,000 × (P/A, 8%, 5) = ₱399,271.00:", "calculation": "P_A = ₱399,271.00"},
     {"step": 2, "title": "Compute Gradient Subtraction", "explanation": "8,000 × 7.372425 = ₱58,979.40:", "calculation": "P_G = ₱58,979.40"},
     {"step": 3, "title": "Subtract to Get Net Present Worth", "explanation": "399,271.00 - 58,979.40:", "calculation": f"P = {p_peso(P128)}"}],
    "₱340,292", ["100000 × ( 1 - 1.08 [xʸ] -5 ) ÷ 0.08 - 8000 ÷ 0.08 × ( ( 1 - 1.08 [xʸ] -5 ) ÷ 0.08 - 5 × 1.08 [xʸ] -5 ) [=] ⟹ 340291.60"],
    "340,291.60", "For a decreasing gradient, simply use a minus sign before the G term.",
    "Ensure the final cash flow in year n does not drop below zero unless negative cash flow is intended.",
    [{"symbol": "A", "meaning": "Base revenue", "value": "₱100,000"}, {"symbol": "G", "meaning": "Decline rate", "value": "-₱8,000/yr"}, {"symbol": "n", "meaning": "Years", "value": "5"}]
))

# 129: Geometric Gradient Present Worth (g != i)
# A1 = 50,000, g = 0.06, i = 0.10, n = 8
# P = A1 * [1 - ((1+g)/(1+i))^n] / (i - g) = 50,000 * [1 - (1.06/1.10)^8] / 0.04
# (1.06/1.10)^8 = (0.963636)^8 = 0.742468 => 1 - 0.742468 = 0.257532
# P = 50,000 * 0.257532 / 0.04 = 50,000 * 6.43830 = 321,915.11
P129 = 50000 * (1 - (1.06/1.10)**8) / (0.10 - 0.06)
problems_121_150.append(make_p(
    129, 5, "Gradients & Amortization", "03_Annuities_Ordinary_Due_Deferred.pdf", "Doc 03: Geometric Gradient Series",
    "Present Worth of an 8-Year Operating Cost Stream Escalating by 6% per Year at 10% Interest",
    "The energy operating cost of an industrial chilling system is ₱50,000 at the end of Year 1 and escalates by 6% per year thereafter for 8 years (Year 2 = ₱53,000, Year 3 = ₱56,180, etc.). If the discount rate is 10% per annum, what is the present worth of this escalating series?",
    ["A. ₱321,915", "B. ₱310,400", "C. ₱335,200", "D. ₱305,800"], "A",
    "P = A_1 \\left[ \\frac{1 - \\left(\\frac{1+g}{1+i}\\right)^n}{i - g} \\right] \\quad (g \\neq i)",
    [{"step": 1, "title": "Compute Escalation-Discount Ratio", "explanation": "(1 + 0.06)/(1 + 0.10) = 1.06 / 1.10 = 0.963636:", "calculation": "\\left(\\frac{1+g}{1+i}\\right)^8 = (0.963636)^8 = 0.742468"},
     {"step": 2, "title": "Evaluate Geometric Series Factor", "explanation": "[1 - 0.742468] / (0.10 - 0.06) = 0.257532 / 0.04 = 6.43830:", "calculation": "\\text{Factor} = 6.43830"},
     {"step": 3, "title": "Calculate Present Worth P", "explanation": "50,000 × 6.43830:", "calculation": f"P = {p_peso(P129)}"}],
    "₱321,915", ["50000 × ( 1 - ( 1.06 ÷ 1.10 ) [xʸ] 8 ) ÷ ( 0.10 - 0.06 ) [=] ⟹ 321915.11"],
    "321,915.11", "Remember: numerator is 1 - ((1+g)/(1+i))^n and denominator is (i - g).",
    "Geometric gradient is very common on board exams for inflation-adjusted operating costs.",
    [{"symbol": "A_1", "meaning": "Initial cost", "value": "₱50,000"}, {"symbol": "g", "meaning": "Growth rate", "value": "6%/yr"}, {"symbol": "i", "meaning": "Interest", "value": "10%"}, {"symbol": "n", "meaning": "Periods", "value": "8"}]
))

# 130: Geometric Gradient (g = i)
# A1 = 40,000, g = 0.08, i = 0.08, n = 7
# When g = i: P = n * A1 / (1 + i) = 7 * 40,000 / 1.08 = 280,000 / 1.08 = 259,259.26
P130 = 7 * 40000 / 1.08
problems_121_150.append(make_p(
    130, 5, "Gradients & Amortization", "03_Annuities_Ordinary_Due_Deferred.pdf", "Doc 03: Special Geometric Gradient (g = i)",
    "Present Worth of Geometric Gradient Series When Growth Rate Equals Discount Rate (g = i)",
    "A software licensing fee starts at ₱40,000 in Year 1 and increases by exactly 8% per year for 7 years. If the company's cost of capital is also exactly 8% per annum (g = i = 8%), what is the present worth of the 7-year licensing payments?",
    ["A. ₱259,259", "B. ₱280,000", "C. ₱245,600", "D. ₱270,450"], "A",
    "P = \\frac{n \\cdot A_1}{1 + i} \\quad (\\text{when } g = i)",
    [{"step": 1, "title": "Apply Special Formula for g = i", "explanation": "Since (1+g)/(1+i) = 1, each discounted term equals A_1/(1+i):", "calculation": f"P = \\frac{{7 \\times 40,000}}{{1 + 0.08}} = \\frac{{280,000}}{{1.08}} = {p_peso(P130)}"}],
    "₱259,259", ["7 × 40000 ÷ 1.08 [=] ⟹ 259259.26"],
    "259,259.26", "When g = i, the standard formula yields 0/0. Use the simplified form: P = n · A_1 / (1 + i).",
    "A classic trick question designed to test if the examinee spots the division-by-zero trap.",
    [{"symbol": "A_1", "meaning": "Year 1 payment", "value": "₱40,000"}, {"symbol": "g = i", "meaning": "Identical rate", "value": "8%"}, {"symbol": "n", "meaning": "Periods", "value": "7"}]
))

print("Batch 121-130 compiled.")
