# -*- coding: utf-8 -*-
"""
Assembles all 175 Engineering Economics solving problems into src/data/driveSampleProblems.ts
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

print(f"Loaded {len(all_new)} new problems (61-175).")

# Verify all required keys
required_keys = [
    "id", "problemNumber", "category", "topicTitle", "difficulty",
    "question", "choices", "correctLetter", "shortcutSolution", "given",
    "governingFormula", "solutionSteps", "finalAnswer", "canonCalTech", "mentalModelOrTrap"
]
for p in all_new:
    for k in required_keys:
        assert k in p, f"Problem {p.get('problemNumber')} missing key {k}"

with open("src/data/driveSampleProblems.ts", "r", encoding="utf-8") as f:
    orig_text = f.read()

# Verify existing problems 1-60
p60_match = re.search(r'id:\s*[\'\"]dsp-econ-60[\'\"]', orig_text)
assert p60_match, "Could not find problem 60 in driveSampleProblems.ts"

# The file currently ends with `  }\n];` or similar
# Let's find the closing `];` at the end
end_idx = orig_text.rfind('];')
assert end_idx != -1, "Could not find closing ];"

base_text = orig_text[:end_idx].rstrip()
# If it ends with '}', add a comma
if base_text.endswith('}'):
    base_text += ',\n'

# Format each new problem as a TypeScript object
formatted_new = []
for p in all_new:
    ts_repr = json.dumps(p, indent=2, ensure_ascii=False)
    # indent by 2 spaces
    indented = "\n".join("  " + line for line in ts_repr.splitlines())
    formatted_new.append(indented)

new_content = base_text + ",\n".join(formatted_new) + "\n];\n"

with open("src/data/driveSampleProblems.ts", "w", encoding="utf-8") as f:
    f.write(new_content)

print(f"Successfully wrote {len(new_content)} characters to src/data/driveSampleProblems.ts.")
