# -*- coding: utf-8 -*-
"""
Generates problems 91 through 175 for Engineering Economics
and creates the complete 175-problem suite.
"""
import math
import json
import re

def format_peso(val):
    return f"₱{val:,.2f}"

def format_peso_int(val):
    return f"₱{round(val):,}"

def make_problem(
    num,
    category,
    topic,
    question,
    given,
    formula,
    steps,
    final_ans,
    choices,
    correct_letter,
    shortcut,
    keystrokes,
    cal_disp,
    cal_tip,
    trap,
    week_day=None,
    diff="Board Exam Standard"
):
    if week_day is None:
        if num <= 25:
            week_day = 1
        elif num <= 50:
            week_day = 2
        elif num <= 75:
            week_day = 3
        elif num <= 100:
            week_day = 4
        elif num <= 125:
            week_day = 5
        elif num <= 150:
            week_day = 6
        else:
            week_day = 7

    folder_map = {
        "Simple & Compound Interest": "01_Compound_Interest_Time_Value_Money.pdf",
        "Annuities & Capital Recovery": "02_Annuities_Amortization_Sinking_Funds.pdf",
        "Amortization & Loans": "02_Annuities_Amortization_Sinking_Funds.pdf",
        "Depreciation Methods": "03_Depreciation_Methods_Asset_Valuation.pdf",
        "Break-Even & Cost Analysis": "04_Break_Even_Analysis_Cost_Concepts.pdf",
        "Bonds & Securities": "05_Bonds_Financial_Securities_Valuation.pdf",
        "Capital Budgeting & Evaluation": "06_Capital_Budgeting_PW_AW_ROR_BC.pdf",
        "Advanced Replacement & Inflation": "07_Replacement_Analysis_Inflation_Taxes.pdf"
    }
    source_file = folder_map.get(category, "06_Capital_Budgeting_PW_AW_ROR_BC.pdf")

    doc_map = {
        "Simple & Compound Interest": "Doc 01: Simple Interest & Promissory Notes",
        "Annuities & Capital Recovery": "Doc 02: Ordinary Annuities & Sinking Funds",
        "Amortization & Loans": "Doc 03: Amortization Schedules & Loan Payoffs",
        "Depreciation Methods": "Doc 04: Depreciation & Asset Valuation",
        "Break-Even & Cost Analysis": "Doc 05: Break-Even, Shut-Down & Profit Analysis",
        "Bonds & Securities": "Doc 06: Bond Valuation & Yield to Maturity",
        "Capital Budgeting & Evaluation": "Doc 07: PW, AW, FW & Rate of Return Comparisons",
        "Advanced Replacement & Inflation": "Doc 08: Replacement Analysis, Tax Shields & Inflation"
    }
    doc_name = doc_map.get(category, "Doc 07: PW, AW, FW & Rate of Return Comparisons")

    id_str = f"dsp-econ-{num:02d}" if num < 10 else f"dsp-econ-{num}"

    sol_steps = []
    for idx, (title, exp, calc) in enumerate(steps, 1):
        step_obj = {
            "step": idx,
            "title": title,
            "explanation": exp
        }
        if calc:
            step_obj["calculation"] = calc
        sol_steps.append(step_obj)

    return {
        "id": id_str,
        "problemNumber": num,
        "weekDay": week_day,
        "folderName": "economics sample problem",
        "sourceFile": source_file,
        "sourceDocumentName": doc_name,
        "category": category,
        "topicTitle": topic,
        "prcExamRef": f"PRC Board Exam Standard (ESAS Review Item #{num})",
        "difficulty": diff,
        "question": question,
        "choices": choices,
        "correctLetter": correct_letter,
        "shortcutSolution": shortcut,
        "given": [{"symbol": k, "meaning": m, "value": v} for k, m, v in given],
        "governingFormula": formula,
        "solutionSteps": sol_steps,
        "finalAnswer": final_ans,
        "canonCalTech": {
            "calculator": "Casio fx-991ES PLUS / fx-570ES PLUS / fx-991EX",
            "mode": "COMP Mode [MODE] [1]",
            "keystrokes": keystrokes,
            "resultDisplay": cal_disp,
            "proTip": cal_tip
        },
        "mentalModelOrTrap": trap
    }

print("make_problem helper ready.")
