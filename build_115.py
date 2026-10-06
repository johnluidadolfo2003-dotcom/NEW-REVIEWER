# -*- coding: utf-8 -*-
"""
Python script to build problems 61 through 175 for Engineering Economics
and update src/data/driveSampleProblems.ts.
"""

import math
import json
import re

def p_peso(val):
    return f"₱{val:,.2f}"

def p_int(val):
    return f"₱{round(val):,}"

problems = []

def add_p(p):
    problems.append(p)

print("Defining problems 61 through 175...")
