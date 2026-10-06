# -*- coding: utf-8 -*-
"""
Full generator for problems 61 through 175 in src/data/driveSampleProblems.ts
"""
import math
import json
import re

def p_peso(val):
    return f"₱{val:,.2f}"

def p_int(val):
    return f"₱{round(val):,}"

problems = []

# Helper to add problem
def add_prob(p):
    problems.append(p)

print("Starting to compile problems 61 to 175...")
