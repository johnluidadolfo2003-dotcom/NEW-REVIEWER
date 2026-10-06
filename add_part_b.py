# -*- coding: utf-8 -*-
"""
Problems 106-140: Depreciation Analysis, Gradients & Amortization
"""
import math

def p_peso(val):
    return f"₱{val:,.2f}"

def p_int(val):
    return f"₱{round(val):,}"

from master_builder_175 import make_p

problems_106_140 = []

# =========================================================================
# Problems 106-125: Depreciation Analysis
# =========================================================================

# 106: Straight Line Method (SLM) Annual & Book Value
FC106 = 800000; SV106 = 80000; n106 = 8
d106 = (FC106 - SV106) / n106 # 720,000 / 8 = 90,000/yr
BV5_106 = FC106 - 5 * d106 # 800,000 - 450,000 = 350,000
problems_106_140.append(make_p(
    106, 4, "Depreciation Analysis", "04_Depreciation_Methods_SLM_SOYD_DBM.pdf", "Doc 04: Straight Line Depreciation",
    "Straight Line Method (SLM): Annual Depreciation Charge and Book Value at Year 5",
    "A commercial motor-generator set costs ₱800,000, has an estimated service life of 8 years, and a salvage value of ₱80,000. Using the Straight Line Method (SLM), determine: (a) the uniform annual depreciation charge, and (b) the book value of the machine at the end of the 5th year.",
    ["A. d = ₱90,000/yr | BV_5 = ₱350,000", "B. d = ₱100,000/yr | BV_5 = ₱300,000", "C. d = ₱85,000/yr | BV_5 = ₱375,000", "D. d = ₱90,000/yr | BV_5 = ₱440,000"], "A",
    "d = \\frac{FC - SV}{n}; \\quad BV_m = FC - m \\cdot d",
    [{"step": 1, "title": "Compute Total Depreciable Base", "explanation": "FC - SV = 800,000 - 80,000 = ₱720,000", "calculation": "FC - SV = ₱720,000"},
     {"step": 2, "title": "Compute Annual Depreciation d", "explanation": "Divide by life n = 8:", "calculation": f"d = \\frac{{720,000}}{{8}} = {p_peso(d106)}/\\text{{year}}"},
     {"step": 3, "title": "Compute Book Value at Year 5", "explanation": "BV_5 = 800,000 - (5 × 90,000):", "calculation": f"BV_5 = 800,000 - 450,000 = {p_peso(BV5_106)}"}],
    "d = ₱90,000/yr | BV_5 = ₱350,000", ["( 800000 - 80000 ) ÷ 8 [=] ⟹ 90000, 800000 - 5 × 90000 [=] ⟹ 350000"],
    "90,000 | 350,000", "SLM has constant annual depreciation d.",
    "Do not divide FC by n; always deduct salvage value SV first in SLM.",
    [{"symbol": "FC", "meaning": "First cost", "value": "₱800,000"}, {"symbol": "SV", "meaning": "Salvage value", "value": "₱80,000"}, {"symbol": "n", "meaning": "Life", "value": "8 years"}, {"symbol": "m", "meaning": "Year evaluated", "value": "5"}]
))

# 107: SLM Depreciation Rate and Accumulated Depreciation
rate107 = (1.0 / n106) * 100 # 12.5%
D5_107 = 5 * d106 # 450,000
problems_106_140.append(make_p(
    107, 4, "Depreciation Analysis", "04_Depreciation_Methods_SLM_SOYD_DBM.pdf", "Doc 04: Depreciation Rate",
    "SLM Depreciation Rate and Total Accumulated Depreciation over 5 Years",
    "For the ₱800,000 motor-generator set with an 8-year useful life and ₱80,000 salvage value, what is the annual depreciation rate expressed as a percentage of the depreciable base, and what is the total accumulated depreciation after 5 years?",
    ["A. Rate = 12.50% | Accumulated = ₱450,000", "B. Rate = 10.00% | Accumulated = ₱500,000", "C. Rate = 14.28% | Accumulated = ₱425,000", "D. Rate = 12.50% | Accumulated = ₱350,000"], "A",
    "\\text{Rate} = \\frac{1}{n} \\times 100\\%; \\quad D_m = m \\cdot d",
    [{"step": 1, "title": "Compute Annual Rate", "explanation": "Rate = 1 / 8 = 12.5%:", "calculation": "\\text{Rate} = \\frac{1}{8} = 12.50\\%"},
     {"step": 2, "title": "Compute Total Accumulated Depreciation D_5", "explanation": "5 × ₱90,000:", "calculation": f"D_5 = 5 \\times 90,000 = {p_peso(D5_107)}"}],
    "Rate = 12.50% | Accumulated = ₱450,000", ["1 ÷ 8 × 100 [=] ⟹ 12.5, 5 × 90000 [=] ⟹ 450000"],
    "12.5% | ₱450,000", "Accumulated depreciation D_m plus Book Value BV_m always equals First Cost FC.",
    "Check: D_5 + BV_5 = ₱450,000 + ₱350,000 = ₱800,000 = FC.",
    [{"symbol": "n", "meaning": "Life", "value": "8 years"}, {"symbol": "d", "meaning": "Annual depreciation", "value": "₱90,000"}, {"symbol": "m", "meaning": "Years elapsed", "value": "5"}]
))

# 108: Sinking Fund Method (SFM)
FC108 = 1000000; SV108 = 100000; n108 = 10; i108 = 0.08
# Sinking fund deposit = (FC - SV) * i / ((1+i)^n - 1) = 900,000 * 0.08 / (1.08^10 - 1) = 900,000 * 0.069029 = 62,126.54
d_sfm108 = (FC108 - SV108) * (i108 / ((1 + i108)**n108 - 1))
# Accumulated depreciation at year 6: D_6 = d * ((1+i)^6 - 1) / i = 62,126.54 * 7.335929 = 455,756
D6_108 = d_sfm108 * (((1 + i108)**6 - 1) / i108)
BV6_108 = FC108 - D6_108
problems_106_140.append(make_p(
    108, 4, "Depreciation Analysis", "04_Depreciation_Methods_SLM_SOYD_DBM.pdf", "Doc 04: Sinking Fund Depreciation",
    "Sinking Fund Method (SFM): Annual Reserve Deposit and Book Value at Year 6 at 8%",
    "A distribution substation circuit breaker costs ₱1,000,000 with a 10-year life and ₱100,000 salvage value. Under the Sinking Fund Method with interest at 8% per annum, determine: (a) the annual sinking fund deposit, and (b) the book value at the end of the 6th year.",
    ["A. Deposit = ₱62,127/yr | BV_6 = ₱544,244", "B. Deposit = ₱90,000/yr | BV_6 = ₱460,000", "C. Deposit = ₱58,400/yr | BV_6 = ₱580,200", "D. Deposit = ₱62,127/yr | BV_6 = ₱455,756"], "A",
    "d = (FC - SV) \\left[ \\frac{i}{(1+i)^n - 1} \\right]; \\quad D_m = d \\left[ \\frac{(1+i)^m - 1}{i} \\right]; \\quad BV_m = FC - D_m",
    [{"step": 1, "title": "Compute Annual Deposit d", "explanation": "900,000 × [0.08 / (1.08^10 - 1)]:", "calculation": f"d = 900,000 \\times 0.069029 = {p_peso(d_sfm108)}"},
     {"step": 2, "title": "Compute Accumulated Depreciation at Year 6", "explanation": "Future worth of 6 deposits at 8%:", "calculation": f"D_6 = 62,126.54 \\times \\frac{{(1.08)^6 - 1}}{{0.08}} = {p_peso(D6_108)}"},
     {"step": 3, "title": "Compute Book Value at Year 6", "explanation": "FC - D_6:", "calculation": f"BV_6 = 1,000,000 - 455,755.77 = {p_peso(BV6_108)}"}],
    "Deposit = ₱62,127/yr | BV_6 = ₱544,244", ["900000 × 0.08 ÷ ( 1.08 [xʸ] 10 - 1 ) [=] ⟹ 62126.54", "Ans × ( 1.08 [xʸ] 6 - 1 ) ÷ 0.08 [=] ⟹ 455755.77", "1000000 - Ans [=] ⟹ 544244.23"],
    "₱62,127 | ₱544,244", "In SFM, accumulated depreciation D_m is the future worth of m deposits.",
    "SFM book value is always higher than SLM book value during early and mid life because interest increases depreciation in later years.",
    [{"symbol": "FC", "meaning": "First cost", "value": "₱1,000,000"}, {"symbol": "SV", "meaning": "Salvage", "value": "₱100,000"}, {"symbol": "n", "meaning": "Life", "value": "10 years"}, {"symbol": "i", "meaning": "Interest", "value": "8%"}]
))

# 109: SFM vs SLM Comparison
# In Problem 108: SLM BV_6 = 1M - 6 * (900k/10) = 1M - 540k = ₱460,000.
# SFM BV_6 = ₱544,244. Difference = ₱84,244.
diff109 = BV6_108 - 460000
problems_106_140.append(make_p(
    109, 4, "Depreciation Analysis", "04_Depreciation_Methods_SLM_SOYD_DBM.pdf", "Doc 04: SFM vs SLM Comparison",
    "Book Value Difference Between SFM and SLM at Year 6",
    "For the ₱1,000,000 circuit breaker with a 10-year life and ₱100,000 salvage value at 8% interest, compare the book value at the end of Year 6 under the Sinking Fund Method versus the Straight Line Method.",
    ["A. SFM BV is ₱84,244 higher than SLM", "B. SLM BV is ₱84,244 higher than SFM", "C. Both methods yield identical BV at Year 6", "D. SFM BV is ₱45,600 higher than SLM"], "A",
    "\\Delta BV = BV_{SFM} - BV_{SLM}",
    [{"step": 1, "title": "Compute SLM Book Value at Year 6", "explanation": "BV = 1,000,000 - 6 × 90,000:", "calculation": "BV_{SLM} = 1,000,000 - 540,000 = ₱460,000"},
     {"step": 2, "title": "Retrieve SFM Book Value", "explanation": "From previous problem, BV_SFM = ₱544,244:", "calculation": "BV_{SFM} = ₱544,244"},
     {"step": 3, "title": "Determine Difference", "explanation": "SFM BV exceeds SLM BV by:", "calculation": f"\\Delta BV = 544,244 - 460,000 = {p_peso(diff109)}"}],
    "SFM BV is ₱84,244 higher than SLM", ["544244 - 460000 [=] ⟹ 84244"],
    "₱84,244 higher", "SFM book value is always strictly greater than SLM book value for 0 < m < n.",
    "Because the sinking fund earns interest, early annual depreciation charges are small; thus book value declines more slowly.",
    [{"symbol": "BV_SFM", "meaning": "SFM Book Value", "value": "₱544,244"}, {"symbol": "BV_SLM", "meaning": "SLM Book Value", "value": "₱460,000"}]
))

# 110: Declining Balance Method (DBM / Matheson)
FC110 = 500000; SV110 = 50000; n110 = 6
# k = 1 - (SV/FC)^(1/n) = 1 - (50000/500000)^(1/6) = 1 - (0.10)^(0.166667) = 1 - 0.681292 = 0.318708 => 31.87%
k110 = 1 - (SV110 / FC110)**(1.0 / n110)
BV3_110 = FC110 * (1 - k110)**3 # 500,000 * 0.681292^3... wait: (1-k)^3 = (SV/FC)^(3/6) = (0.1)^0.5 = 0.316228 * 500,000 = 158,113.88
problems_106_140.append(make_p(
    110, 4, "Depreciation Analysis", "04_Depreciation_Methods_SLM_SOYD_DBM.pdf", "Doc 04: Declining Balance Method",
    "Declining Balance Method (DBM / Matheson): Constant Depreciation Rate k and Book Value at Year 3",
    "A CNC machining center costs ₱500,000, has a useful life of 6 years, and an estimated salvage value of ₱50,000. Using the Matheson Declining Balance Method (DBM), determine: (a) the constant annual depreciation rate k, and (b) the book value at the end of the 3rd year.",
    ["A. k = 31.87% | BV_3 = ₱158,114", "B. k = 33.33% | BV_3 = ₱148,150", "C. k = 28.50% | BV_3 = ₱182,400", "D. k = 31.87% | BV_3 = ₱175,000"], "A",
    "k = 1 - \\sqrt[n]{\\frac{SV}{FC}} = 1 - \\left(\\frac{SV}{FC}\\right)^{\\frac{1}{n}}; \\quad BV_m = FC(1 - k)^m",
    [{"step": 1, "title": "Compute Constant Rate k", "explanation": "k = 1 - (50,000 / 500,000)^(1/6):", "calculation": f"k = 1 - (0.10)^{{1/6}} = 1 - 0.681292 = {k110*100:.2f}\\%"},
     {"step": 2, "title": "Compute Book Value at Year 3", "explanation": "BV_3 = FC(1 - k)^3 = 500,000 × (0.681292)^3:", "calculation": f"BV_3 = 500,000 \\times 0.316228 = {p_peso(BV3_110)}"}],
    "k = 31.87% | BV_3 = ₱158,114", ["1 - ( 50000 ÷ 500000 ) [xʸ] ( 1 ÷ 6 ) [=] ⟹ 0.318708", "500000 × ( 1 - Ans ) [xʸ] 3 [=] ⟹ 158113.88"],
    "31.87% | ₱158,114", "Shortcut for BV at mid-life: BV_(n/2) = sqrt(FC × SV) = sqrt(500k × 50k) = ₱158,113.88!",
    "In Matheson DBM, salvage value SV cannot be zero, otherwise k = 1.0 (100%).",
    [{"symbol": "FC", "meaning": "First cost", "value": "₱500,000"}, {"symbol": "SV", "meaning": "Salvage value", "value": "₱50,000"}, {"symbol": "n", "meaning": "Life", "value": "6 years"}]
))

# 111: DBM 4th Year Depreciation
# d_4 = k * BV_3 = 0.318708 * 158,113.88 = 50,392.17
d4_111 = k110 * BV3_110
problems_106_140.append(make_p(
    111, 4, "Depreciation Analysis", "04_Depreciation_Methods_SLM_SOYD_DBM.pdf", "Doc 04: Specific Year Depreciation in DBM",
    "Depreciation Charge During the 4th Year Specifically under Matheson Method",
    "For the ₱500,000 CNC machine with 6-year life and ₱50,000 salvage value (k = 31.87%), determine the specific depreciation charge during the 4th year.",
    ["A. ₱50,392", "B. ₱54,800", "C. ₱46,250", "D. ₱58,100"], "A",
    "d_m = k \\cdot BV_{m-1} = FC \\cdot k(1 - k)^{m-1}",
    [{"step": 1, "title": "Recall Book Value at Year 3 (BV_3)", "explanation": "BV_3 = ₱158,114:", "calculation": "BV_3 = ₱158,114"},
     {"step": 2, "title": "Compute 4th Year Depreciation Charge", "explanation": "d_4 = k × BV_3 = 0.318708 × 158,113.88:", "calculation": f"d_4 = 0.318708 \\times 158,113.88 = {p_peso(d4_111)}"}],
    "₱50,392", ["0.318708 × 158113.88 [=] ⟹ 50392.17"],
    "₱50,392", "In DBM, depreciation decreases every year: d_m = k × BV_(m-1).",
    "Never apply k to the original first cost for years beyond the first; always apply to the preceding year's book value.",
    [{"symbol": "k", "meaning": "DBM rate", "value": "31.87%"}, {"symbol": "BV_3", "meaning": "Preceding book value", "value": "₱158,114"}]
))

# 112: Double Declining Balance Method (DDBM)
FC112 = 600000; SV112 = 60000; n112 = 5
k112 = 2.0 / n112 # 2/5 = 0.40 (40%)
# Year 1: d1 = 0.40 * 600k = 240k; BV1 = 360k
# Year 2: d2 = 0.40 * 360k = 144k; BV2 = 216k
# Year 3: d3 = 0.40 * 216k = 86.4k; BV3 = 129.6k
BV3_112 = FC112 * (1 - k112)**3 # 600k * 0.6^3 = 600k * 0.216 = 129,600
problems_106_140.append(make_p(
    112, 4, "Depreciation Analysis", "04_Depreciation_Methods_SLM_SOYD_DBM.pdf", "Doc 04: Double Declining Balance",
    "Double Declining Balance Method (DDBM): Rate k and Book Value at Year 3",
    "A commercial delivery van costs ₱600,000, has an economic life of 5 years, and a salvage value of ₱60,000. Using Double Declining Balance Method (DDBM), determine: (a) the constant rate k, and (b) the book value at the end of the 3rd year.",
    ["A. k = 40.0% | BV_3 = ₱129,600", "B. k = 33.3% | BV_3 = ₱177,778", "C. k = 40.0% | BV_3 = ₱144,000", "D. k = 20.0% | BV_3 = ₱307,200"], "A",
    "k = \\frac{2}{n}; \\quad BV_m = FC(1 - k)^m",
    [{"step": 1, "title": "Compute DDBM Rate k", "explanation": "k = 2 / 5 = 0.40 (40%):", "calculation": "k = \\frac{2}{5} = 40.00\\%"},
     {"step": 2, "title": "Compute Book Value at Year 3", "explanation": "BV_3 = 600,000 × (1 - 0.40)^3 = 600,000 × (0.60)^3:", "calculation": f"BV_3 = 600,000 \\times 0.216000 = {p_peso(BV3_112)}"}],
    "k = 40.0% | BV_3 = ₱129,600", ["2 ÷ 5 [=] ⟹ 0.40, 600000 × ( 1 - 0.40 ) [xʸ] 3 [=] ⟹ 129600"],
    "40.0% | ₱129,600", "Notice that DDBM completely ignores salvage value SV when determining rate k.",
    "Salvage value is only used as a floor below which book value cannot drop.",
    [{"symbol": "FC", "meaning": "First cost", "value": "₱600,000"}, {"symbol": "n", "meaning": "Life", "value": "5 years"}, {"symbol": "SV", "meaning": "Salvage floor", "value": "₱60,000"}]
))

# 113: DDBM Depreciation Schedule & Salvage Floor
# In Problem 112: Year 4: potential d4 = 0.40 * 129,600 = 51,840 => potential BV4 = 129,600 - 51,840 = 77,760.
# Year 5: potential d5 = 0.40 * 77,760 = 31,104 => potential BV5 = 46,656 < SV (60,000)!
# Max d5 = BV4 - SV = 77,760 - 60,000 = 17,760!
d5_actual = 77760 - 60000
problems_106_140.append(make_p(
    113, 4, "Depreciation Analysis", "04_Depreciation_Methods_SLM_SOYD_DBM.pdf", "Doc 04: DDBM Salvage Floor Rule",
    "Application of Salvage Value Floor in Final Year of DDBM Schedule",
    "For the delivery van in Problem 112 (FC = ₱600,000, n = 5 years, SV = ₱60,000, k = 40%), what is the actual allowable depreciation charge during the final 5th year so that the book value does not fall below salvage value?",
    ["A. ₱17,760", "B. ₱31,104", "C. ₱24,500", "D. ₱60,000"], "A",
    "d_n = BV_{n-1} - SV \\quad (\\text{when } k \\cdot BV_{n-1} \\text{ would reduce BV below SV})",
    [{"step": 1, "title": "Compute Book Value at End of Year 4", "explanation": "BV_4 = 600,000 × (0.60)^4 = 600,000 × 0.1296 = ₱77,760:", "calculation": "BV_4 = ₱77,760"},
     {"step": 2, "title": "Evaluate Unconstrained Year 5 Depreciation", "explanation": "0.40 × 77,760 = ₱31,104, which yields BV_5 = ₱46,656 < ₱60,000 SV:", "calculation": "77,760 - 31,104 = ₱46,656 < ₱60,000 \\quad (\\text{Violates Floor})"},
     {"step": 3, "title": "Apply Salvage Value Floor Rule", "explanation": "d_5 is limited to BV_4 - SV:", "calculation": f"d_5 = 77,760 - 60,000 = {p_peso(d5_actual)}"}],
    "₱17,760", ["77760 - 60000 [=] ⟹ 17760"],
    "₱17,760", "DDBM cannot depreciate an asset below its salvage value.",
    "A favorite PRC board exam trap: test if examinee blindly multiplies by 0.40 or correctly enforces the SV floor.",
    [{"symbol": "BV_4", "meaning": "Book value at Year 4", "value": "₱77,760"}, {"symbol": "SV", "meaning": "Salvage floor", "value": "₱60,000"}]
))

# 114: Sum-of-the-Years-Digits (SOYD)
FC114 = 900000; SV114 = 90000; n114 = 8
# SOYD = n(n+1)/2 = 8(9)/2 = 36
# Year 4 reverse digit: 8 - 4 + 1 = 5
# d_4 = (5 / 36) * (FC - SV) = (5 / 36) * 810,000 = 112,500
d4_114 = (5.0 / 36.0) * (FC114 - SV114)
# Accumulated depreciation through year 4: digits = 8 + 7 + 6 + 5 = 26
# D_4 = (26 / 36) * 810,000 = 585,000
BV4_114 = FC114 - (26.0 / 36.0) * (FC114 - SV114) # 900,000 - 585,000 = 315,000
problems_106_140.append(make_p(
    114, 4, "Depreciation Analysis", "04_Depreciation_Methods_SLM_SOYD_DBM.pdf", "Doc 04: Sum-of-the-Years-Digits",
    "Sum-of-the-Years-Digits (SOYD): 4th Year Depreciation and Book Value at Year 4",
    "An injection molding machine costs ₱900,000 with an 8-year useful life and ₱90,000 salvage value. Using the Sum-of-the-Years-Digits (SOYD) method, determine: (a) the depreciation charge in the 4th year, and (b) the book value at the end of the 4th year.",
    ["A. d_4 = ₱112,500 | BV_4 = ₱315,000", "B. d_4 = ₱135,000 | BV_4 = ₱292,500", "C. d_4 = ₱90,000 | BV_4 = ₱350,000", "D. d_4 = ₱112,500 | BV_4 = ₱405,000"], "A",
    "\\sum \\text{digits} = \\frac{n(n+1)}{2}; \\quad d_m = \\frac{n - m + 1}{\\sum \\text{digits}}(FC - SV); \\quad BV_m = FC - D_m",
    [{"step": 1, "title": "Compute Sum of Years Digits", "explanation": "8(9)/2 = 36:", "calculation": "\\sum \\text{digits} = \\frac{8 \\times 9}{2} = 36"},
     {"step": 2, "title": "Compute 4th Year Depreciation d_4", "explanation": "Remaining life digit for year 4 is 8 - 4 + 1 = 5:", "calculation": f"d_4 = \\frac{{5}}{{36}} \\times 810,000 = {p_peso(d4_114)}"},
     {"step": 3, "title": "Compute Accumulated Depreciation & Book Value", "explanation": "Sum of first 4 digits = 8+7+6+5 = 26:", "calculation": f"D_4 = \\frac{{26}}{{36}} \\times 810,000 = ₱585,000; \\quad BV_4 = 900,000 - 585,000 = {p_peso(BV4_114)}"}],
    "d_4 = ₱112,500 | BV_4 = ₱315,000", ["8 × 9 ÷ 2 [=] ⟹ 36, 5 ÷ 36 × ( 900000 - 90000 ) [=] ⟹ 112500", "900000 - ( 8 + 7 + 6 + 5 ) ÷ 36 × 810000 [=] ⟹ 315000"],
    "₱112,500 | ₱315,000", "In SOYD, the numerator counts backwards: year 1 uses n, year 2 uses n-1, ..., year m uses n - m + 1.",
    "Accumulated depreciation D_m uses sum of digits up to year m.",
    [{"symbol": "FC", "meaning": "First cost", "value": "₱900,000"}, {"symbol": "SV", "meaning": "Salvage", "value": "₱90,000"}, {"symbol": "n", "meaning": "Life", "value": "8 years"}]
))

# 115: SOYD First Year vs Last Year
d1_115 = (8.0 / 36.0) * 810000 # 180,000
d8_115 = (1.0 / 36.0) * 810000 # 22,500
ratio115 = d1_115 / d8_115 # 8.0
problems_106_140.append(make_p(
    115, 4, "Depreciation Analysis", "04_Depreciation_Methods_SLM_SOYD_DBM.pdf", "Doc 04: SOYD First vs Last Year",
    "Comparison of First Year and Final Year Depreciation Charges under SOYD",
    "For the ₱900,000 machine with 8-year life and ₱90,000 salvage value under SOYD, what are the depreciation charges in Year 1 and Year 8, and what is their ratio?",
    ["A. d_1 = ₱180,000 | d_8 = ₱22,500 | Ratio = 8.0", "B. d_1 = ₱160,000 | d_8 = ₱20,000 | Ratio = 8.0", "C. d_1 = ₱202,500 | d_8 = ₱25,312 | Ratio = 8.0", "D. d_1 = ₱180,000 | d_8 = ₱45,000 | Ratio = 4.0"], "A",
    "d_1 = \\frac{n}{\\sum \\text{digits}}(FC - SV); \\quad d_n = \\frac{1}{\\sum \\text{digits}}(FC - SV); \\quad \\frac{d_1}{d_n} = n",
    [{"step": 1, "title": "Compute Year 1 Depreciation", "explanation": "Uses top digit n = 8:", "calculation": f"d_1 = \\frac{{8}}{{36}} \\times 810,000 = {p_peso(d1_115)}"},
     {"step": 2, "title": "Compute Year 8 Depreciation", "explanation": "Uses bottom digit 1:", "calculation": f"d_8 = \\frac{{1}}{{36}} \\times 810,000 = {p_peso(d8_115)}"},
     {"step": 3, "title": "Compute Ratio d_1 / d_n", "explanation": "The ratio is identically equal to n:", "calculation": f"\\text{{Ratio}} = \\frac{{180,000}}{{22,500}} = {ratio115:.1f}"}],
    "d_1 = ₱180,000 | d_8 = ₱22,500 | Ratio = 8.0", ["8 ÷ 36 × 810000 [=] ⟹ 180000, 1 ÷ 36 × 810000 [=] ⟹ 22500"],
    "₱180,000 | ₱22,500 | 8.0", "Under SOYD, the first year depreciation is always exactly n times the final year depreciation.",
    "Quick board exam shortcut: d_1 / d_n = n for any SOYD problem regardless of costs.",
    [{"symbol": "n", "meaning": "Life", "value": "8 years"}, {"symbol": "Base", "meaning": "FC - SV", "value": "₱810,000"}]
))

# 116: Service Output Method
FC116 = 1500000; SV116 = 150000; Total_Units116 = 500000
dep_per_unit116 = (FC116 - SV116) / Total_Units116 # 1,350,000 / 500,000 = ₱2.70/unit
units_yr1 = 60000
d_yr1 = units_yr1 * dep_per_unit116 # 162,000
BV_yr1 = FC116 - d_yr1 # 1,338,000
problems_106_140.append(make_p(
    116, 4, "Depreciation Analysis", "04_Depreciation_Methods_SLM_SOYD_DBM.pdf", "Doc 04: Service Output Method",
    "Service Output Method: Depreciation per Unit and First Year Book Value",
    "A commercial wire-drawing machine costs ₱1,500,000, has an estimated salvage value of ₱150,000, and is rated for a lifetime production of 500,000 kilograms of copper wire. If it manufactures 60,000 kg during its first year, determine the depreciation per kilogram and the book value at the end of Year 1.",
    ["A. ₱2.70/kg | BV_1 = ₱1,338,000", "B. ₱3.00/kg | BV_1 = ₱1,320,000", "C. ₱2.70/kg | BV_1 = ₱1,350,000", "D. ₱2.50/kg | BV_1 = ₱1,350,000"], "A",
    "d_{\\text{unit}} = \\frac{FC - SV}{\\text{Total Output}}; \\quad BV_m = FC - (\\text{Cumulative Output}) \\cdot d_{\\text{unit}}",
    [{"step": 1, "title": "Compute Depreciation Rate per Unit Output", "explanation": "(1,500,000 - 150,000) / 500,000:", "calculation": f"d_{{unit}} = \\frac{{1,350,000}}{{500,000}} = ₱{dep_per_unit116:.2f}/\\text{{kg}}"},
     {"step": 2, "title": "Compute Year 1 Depreciation Charge", "explanation": "60,000 kg × ₱2.70/kg:", "calculation": f"d_1 = 60,000 \\times 2.70 = {p_peso(d_yr1)}"},
     {"step": 3, "title": "Compute Book Value at End of Year 1", "explanation": "1,500,000 - 162,000:", "calculation": f"BV_1 = 1,500,000 - 162,000 = {p_peso(BV_yr1)}"}],
    "₱2.70/kg | BV_1 = ₱1,338,000", ["( 1500000 - 150000 ) ÷ 500000 [=] ⟹ 2.70, 1500000 - 60000 × 2.70 [=] ⟹ 1338000"],
    "₱2.70/kg | ₱1,338,000", "Depreciation is tied directly to physical usage rather than calendar time.",
    "If production is zero in a given year, depreciation is zero under this method.",
    [{"symbol": "FC", "meaning": "First cost", "value": "₱1,500,000"}, {"symbol": "SV", "meaning": "Salvage", "value": "₱150,000"}, {"symbol": "Output", "meaning": "Rated lifetime output", "value": "500,000 kg"}]
))

# 117: Working Hours Method
FC117 = 3000000; SV117 = 300000; Total_Hrs117 = 40000
dep_per_hr117 = (FC117 - SV117) / Total_Hrs117 # 2,700,000 / 40,000 = ₱67.50/hr
hrs_yr1 = 4500
d_yr1_117 = hrs_yr1 * dep_per_hr117 # 303,750
BV_yr1_117 = FC117 - d_yr1_117 # 2,696,250
problems_106_140.append(make_p(
    117, 4, "Depreciation Analysis", "04_Depreciation_Methods_SLM_SOYD_DBM.pdf", "Doc 04: Working Hours Method",
    "Working Hours Method: Hourly Depreciation Rate for a 2 MW Gas Turbine",
    "A 2 MW peaking gas turbine generator costs ₱3,000,000 with a salvage value of ₱300,000 and an engineered life of 40,000 operating hours. If the turbine operates 4,500 hours in its first year, determine the depreciation charge per operating hour and the book value at the end of Year 1.",
    ["A. ₱67.50/hr | BV_1 = ₱2,696,250", "B. ₱75.00/hr | BV_1 = ₱2,662,500", "C. ₱67.50/hr | BV_1 = ₱2,700,000", "D. ₱60.00/hr | BV_1 = ₱2,730,000"], "A",
    "d_{\\text{hour}} = \\frac{FC - SV}{\\text{Total Hours}}; \\quad BV_m = FC - (\\text{Cumulative Hours}) \\cdot d_{\\text{hour}}",
    [{"step": 1, "title": "Compute Hourly Depreciation Rate", "explanation": "(3,000,000 - 300,000) / 40,000:", "calculation": f"d_{{hour}} = \\frac{{2,700,000}}{{40,000}} = ₱{dep_per_hr117:.2f}/\\text{{hour}}"},
     {"step": 2, "title": "Compute Year 1 Depreciation", "explanation": "4,500 hours × ₱67.50/hr:", "calculation": f"d_1 = 4,500 \\times 67.50 = {p_peso(d_yr1_117)}"},
     {"step": 3, "title": "Compute Book Value at End of Year 1", "explanation": "3,000,000 - 303,750:", "calculation": f"BV_1 = 3,000,000 - 303,750 = {p_peso(BV_yr1_117)}"}],
    "₱67.50/hr | BV_1 = ₱2,696,250", ["( 3000000 - 300000 ) ÷ 40000 [=] ⟹ 67.50, 3000000 - 4500 × 67.50 [=] ⟹ 2696250"],
    "₱67.50/hr | ₱2,696,250", "Commonly used for aircraft, heavy power generation turbines, and leased generators.",
    "Deduct salvage value before dividing by total rated operating hours.",
    [{"symbol": "FC", "meaning": "First cost", "value": "₱3,000,000"}, {"symbol": "SV", "meaning": "Salvage", "value": "₱300,000"}, {"symbol": "Hours", "meaning": "Lifetime operating hours", "value": "40,000 hrs"}]
))

# 118: Comparison of Depreciation Methods on Book Value at Mid-Life
# Machine FC = 1,000,000, SV = 100,000, n = 5 yrs. At Year 2:
# SLM: BV = 1M - 2*(180k) = 640k
# SOYD: digits = 15. D_2 = (5+4)/15 * 900k = 540k => BV = 460k
# DDBM: k = 2/5 = 0.40. BV_2 = 1M * (0.6)^2 = 360k
problems_106_140.append(make_p(
    118, 4, "Depreciation Analysis", "04_Depreciation_Methods_SLM_SOYD_DBM.pdf", "Doc 04: Cross-Method Comparison",
    "Comparison of SLM, SOYD, and DDBM Book Values at Year 2 for a ₱1,000,000 Asset",
    "An industrial test bench costs ₱1,000,000 with a 5-year life and ₱100,000 salvage value. Rank the book values at the end of Year 2 in descending order for Straight Line (SLM), Sum-of-the-Years-Digits (SOYD), and Double Declining Balance (DDBM).",
    ["A. SLM (₱640k) > SOYD (₱460k) > DDBM (₱360k)", "B. DDBM (₱360k) > SOYD (₱460k) > SLM (₱640k)", "C. SOYD (₱460k) > SLM (₱640k) > DDBM (₱360k)", "D. SLM (₱640k) > DDBM (₱360k) > SOYD (₱460k)"], "A",
    "BV_{SLM} = FC - 2d; \\quad BV_{SOYD} = FC - \\frac{9}{15}(FC - SV); \\quad BV_{DDBM} = FC(1 - 0.4)^2",
    [{"step": 1, "title": "Compute SLM BV_2", "explanation": "1M - 2(180,000) = ₱640,000:", "calculation": "BV_{SLM} = ₱640,000"},
     {"step": 2, "title": "Compute SOYD BV_2", "explanation": "1M - (9/15)(900,000) = 1M - 540,000 = ₱460,000:", "calculation": "BV_{SOYD} = ₱460,000"},
     {"step": 3, "title": "Compute DDBM BV_2", "explanation": "1M × (0.60)^2 = ₱360,000:", "calculation": "BV_{DDBM} = ₱360,000"}],
    "SLM (₱640k) > SOYD (₱460k) > DDBM (₱360k)", ["1000000 - 2 × 180000 [=] ⟹ 640000", "1000000 - 9 ÷ 15 × 900000 [=] ⟹ 460000", "1000000 × 0.36 [=] ⟹ 360000"],
    "SLM > SOYD > DDBM", "Accelerated methods (DDBM, SOYD) depress early book values much faster than SLM.",
    "Order of early conservatism: DDBM is most aggressive, followed by SOYD, then SLM.",
    [{"symbol": "FC", "meaning": "First cost", "value": "₱1,000,000"}, {"symbol": "n", "meaning": "Life", "value": "5 years"}, {"symbol": "Year", "meaning": "Evaluation point", "value": "Year 2"}]
))

# 119: DBM with Unknown Salvage Value
# Given: BV_2 = ₱320,000 and BV_4 = ₱204,800. Find constant rate k and initial cost FC.
# BV_4 / BV_2 = (1 - k)^2 = 204,800 / 320,000 = 0.64 => 1 - k = 0.80 => k = 20% (0.20)
# FC = BV_2 / (1 - k)^2 = 320,000 / 0.64 = ₱500,000
problems_106_140.append(make_p(
    119, 4, "Depreciation Analysis", "04_Depreciation_Methods_SLM_SOYD_DBM.pdf", "Doc 04: Solving for DBM Parameters",
    "Finding Initial First Cost and Rate k in DBM Given Book Values at Year 2 and Year 4",
    "Under the declining balance method, an asset has a book value of ₱320,000 at the end of Year 2 and ₱204,800 at the end of Year 4. What was the original purchase cost (first cost) and the annual depreciation rate k?",
    ["A. First Cost = ₱500,000 | k = 20.0%", "B. First Cost = ₱450,000 | k = 18.5%", "C. First Cost = ₱520,000 | k = 22.0%", "D. First Cost = ₱480,000 | k = 20.0%"], "A",
    "\\frac{BV_4}{BV_2} = (1 - k)^2 \\implies 1 - k = \\sqrt{\\frac{BV_4}{BV_2}}; \\quad FC = \\frac{BV_2}{(1 - k)^2}",
    [{"step": 1, "title": "Determine Multiplier (1 - k)", "explanation": "Take square root of ratio:", "calculation": "1 - k = \\sqrt{\\frac{204,800}{320,000}} = \\sqrt{0.64} = 0.80 \\implies k = 20.0\\%"},
     {"step": 2, "title": "Compute Original First Cost FC", "explanation": "Divide BV_2 by (1 - k)^2:", "calculation": "FC = \\frac{320,000}{(0.80)^2} = \\frac{320,000}{0.64} = ₱500,000"}],
    "First Cost = ₱500,000 | k = 20.0%", ["\\sqrt( 204800 ÷ 320000 ) [=] ⟹ 0.80, 1 - Ans [=] ⟹ 0.20", "320000 ÷ 0.64 [=] ⟹ 500000"],
    "₱500,000 | 20.0%", "In DBM, the ratio of any two book values separated by Δt years is (1 - k)^Δt.",
    "This classic problem requires no salvage value knowledge.",
    [{"symbol": "BV_2", "meaning": "Book value at Year 2", "value": "₱320,000"}, {"symbol": "BV_4", "meaning": "Book value at Year 4", "value": "₱204,800"}]
))

# 120: Reverse SOYD to Find First Cost
# n = 6 yrs, SV = ₱20,000. In Year 4, depreciation charge is ₱45,000. Find FC.
# SOYD = 6(7)/2 = 21. Year 4 digit: 6 - 4 + 1 = 3.
# d_4 = (3 / 21) * (FC - 20,000) = 45,000 => (1/7) * (FC - 20,000) = 45,000
# FC - 20,000 = 45,000 * 7 = 315,000 => FC = 335,000
problems_106_140.append(make_p(
    120, 4, "Depreciation Analysis", "04_Depreciation_Methods_SLM_SOYD_DBM.pdf", "Doc 04: Reverse SOYD Calculation",
    "Deducing Original First Cost Given 4th Year Depreciation in SOYD",
    "An engineering instrument has a 6-year useful life and a salvage value of ₱20,000. If the depreciation charge during the 4th year under the Sum-of-the-Years-Digits method is exactly ₱45,000, what was the initial purchase cost of the instrument?",
    ["A. ₱335,000", "B. ₱315,000", "C. ₱350,000", "D. ₱320,000"], "A",
    "d_m = \\frac{n - m + 1}{\\sum \\text{digits}}(FC - SV) \\implies FC = SV + d_m \\cdot \\frac{\\sum \\text{digits}}{n - m + 1}",
    [{"step": 1, "title": "Compute Sum of Digits and Year 4 Multiplier", "explanation": "6(7)/2 = 21; Year 4 digit = 6 - 4 + 1 = 3:", "calculation": "\\text{Fraction} = \\frac{3}{21} = \\frac{1}{7}"},
     {"step": 2, "title": "Solve for Depreciable Base", "explanation": "FC - SV = 45,000 × 7 = ₱315,000:", "calculation": "FC - 20,000 = 45,000 \\times 7 = ₱315,000"},
     {"step": 3, "title": "Add Salvage Value to Obtain First Cost", "explanation": "FC = 315,000 + 20,000:", "calculation": "FC = 315,000 + 20,000 = ₱335,000"}],
    "₱335,000", ["45000 × 21 ÷ 3 + 20000 [=] ⟹ 335000"],
    "₱335,000", "Don't forget to add back the salvage value at the end.",
    "A frequent board exam pitfall is choosing ₱315,000 (which is only the depreciable base FC - SV).",
    [{"symbol": "d_4", "meaning": "4th year depreciation", "value": "₱45,000"}, {"symbol": "n", "meaning": "Life", "value": "6 years"}, {"symbol": "SV", "meaning": "Salvage", "value": "₱20,000"}]
))

print("Batch 106-120 compiled.")
