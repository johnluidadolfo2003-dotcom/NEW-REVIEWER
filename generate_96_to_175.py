# -*- coding: utf-8 -*-
"""
Generates problems 96 to 175 compactly with authentic engineering economics board exam parameters.
"""
import math

def p_peso(val):
    return f"₱{val:,.2f}"

def p_int(val):
    return f"₱{round(val):,}"

problems_96_175 = []

# Helper to register problem
def reg(p):
    problems_96_175.append(p)

print("Compiling problems 96 to 175...")
