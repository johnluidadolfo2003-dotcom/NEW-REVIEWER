# -*- coding: utf-8 -*-
"""
Rebuilds src/data/driveSampleProblems.ts to contain exactly 175 problems (1 to 175).
"""
import json
import re

import gen_p1
import gen_p2
import make_batch_91_100
import make_batch_101_110
import make_batch_111_120
import make_batch_121_135
import make_batch_136_155
import make_batch_156_175

all_new = (
    gen_p1.problems_61_90 +
    gen_p2.problems_81_110 +
    make_batch_91_100.problems_91_110 +
    make_batch_101_110.problems_101_135 +
    make_batch_111_120.problems_111_130 +
    make_batch_121_135.problems_121_135 +
    make_batch_136_155.problems_136_155 +
    make_batch_156_175.problems_156_175
)

assert len(all_new) == 115, f"Expected 115 new problems, got {len(all_new)}"
num_set = set(p["problemNumber"] for p in all_new)
assert num_set == set(range(61, 176)), "Problem numbers do not cover 61 to 175"

with open("src/data/driveSampleProblems.ts", "r", encoding="utf-8") as f:
    text = f.read()

idx_p61 = text.find("dsp-econ-61")
assert idx_p61 != -1, "dsp-econ-61 not found"
last_open = text.rfind("{", 0, idx_p61)
p60_end = text.rfind("}", 0, last_open)
clean_prefix = text[:p60_end + 1]

# Verify prefix has problems 1 to 60
prefix_ids = re.findall(r"[\'\"]?id[\'\"]?:\s*[\'\"](dsp-econ-[\w-]+)[\'\"]", clean_prefix)
assert len(prefix_ids) == 60, f"Expected 60 in prefix, got {len(prefix_ids)}"

# Format problems 61 to 175
formatted = []
for p in all_new:
    ts_json = json.dumps(p, indent=2, ensure_ascii=False)
    indented = "\n".join("  " + line for line in ts_json.splitlines())
    formatted.append(indented)

final_ts = clean_prefix + ",\n" + ",\n".join(formatted) + "\n];\n"

with open("src/data/driveSampleProblems.ts", "w", encoding="utf-8") as f:
    f.write(final_ts)

print(f"Successfully wrote {len(final_ts)} bytes to src/data/driveSampleProblems.ts.")
