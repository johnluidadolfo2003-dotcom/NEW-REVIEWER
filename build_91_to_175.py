# -*- coding: utf-8 -*-
"""
Generates problems 91 through 175 for Engineering Economics
and assembles the complete 175-problem database.
"""
import math
import json
import re

def format_peso(val):
    return f"₱{val:,.2f}"

def format_peso_int(val):
    return f"₱{round(val):,}"

problems_91_175 = []

def add(p):
    problems_91_175.append(p)

print("Starting generation of problems 91 to 175...")
