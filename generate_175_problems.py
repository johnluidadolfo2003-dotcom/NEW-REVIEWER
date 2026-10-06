# -*- coding: utf-8 -*-
"""
Script to generate complete set of 175 Engineering Economics solving board exam problems
for the 'economics sample problem' reference drive folder.
Problems 1-60 are already in src/data/driveSampleProblems.ts.
This script adds problems 61-175 with complete mathematical rigor, choices,
correct answers, step-by-step solutions, and Canon F-789SGA CalTech keystrokes.
"""

import json
import re

# We will load existing problems 1-60 from src/data/driveSampleProblems.ts
with open('src/data/driveSampleProblems.ts', 'r', encoding='utf-8') as f:
    existing_ts = f.read()

# Locate the end of the array
end_bracket_idx = existing_ts.rfind('];')
if end_bracket_idx == -1:
    raise Exception("Could not find end of array ]; in driveSampleProblems.ts")

existing_body = existing_ts[:end_bracket_idx].rstrip()
# Check if trailing comma is needed
if not existing_body.endswith(','):
    existing_body += ','

print("Read existing file up to end bracket. Appending problems 61 to 175...")
