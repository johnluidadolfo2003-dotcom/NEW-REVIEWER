# -*- coding: utf-8 -*-
"""
Complete Builder for Problems 61-175 in src/data/driveSampleProblems.ts
Ensures total solving questions count = 175.
"""
import math
import json
import re

def p_peso(val):
    return f"₱{val:,.2f}"

def p_int(val):
    return f"₱{round(val):,}"

all_new_problems = []

# Helper to register problem
def reg(p):
    all_new_problems.append(p)

