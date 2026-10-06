# -*- coding: utf-8 -*-
"""
Merges existing 60 problems from src/data/driveSampleProblems.ts
with the 115 new problems (61 to 175) to produce the complete 175 solving problems file.
"""
import json
import re

import gen_p1
import gen_p2
import data_part3
import build_part_a
import master_builder_175
import add_part_b
import add_part_c
import add_part_d
import add_part_e

# Gather all 115 new problems
new_batches = [
    gen_p1.problems_61_90,
    gen_p2.problems_81_110,
    data_part3.problems_91_120,
    build_part_a.problems_96_125,
    master_builder_175.new_problems,
    add_part_b.problems_106_140,
    add_part_c.problems_121_150,
    add_part_d.problems_131_155,
    add_part_e.problems_156_175
]

all_new = []
for b in new_batches:
    all_new.extend(b)

print(f"Total new problems gathered: {len(all_new)}")

# Read existing file up to end of problem 60
with open('src/data/driveSampleProblems.ts', 'r', encoding='utf-8') as f:
    existing_content = f.read()

end_idx = existing_content.rfind('];')
if end_idx == -1:
    raise Exception("Could not locate end of array ]; in src/data/driveSampleProblems.ts")

base_ts = existing_content[:end_idx].rstrip()
if not base_ts.endswith(','):
    base_ts += ','

# Convert each new problem into valid formatted TypeScript/JSON object
new_ts_blocks = []
for p in all_new:
    dumped = json.dumps(p, indent=2, ensure_ascii=False)
    # Indent by 2 spaces
    indented = "\n".join("  " + line for line in dumped.splitlines())
    new_ts_blocks.append(indented)

merged_content = base_ts + "\n" + ",\n".join(new_ts_blocks) + "\n];\n"

# Write out to src/data/driveSampleProblems.ts
with open('src/data/driveSampleProblems.ts', 'w', encoding='utf-8') as f:
    f.write(merged_content)

print(f"Successfully wrote {len(merged_content)} characters to src/data/driveSampleProblems.ts!")
