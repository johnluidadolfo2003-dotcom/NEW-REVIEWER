import json
import re

# Read current 60 problems
with open('src/data/driveSampleProblems.ts', 'r', encoding='utf-8') as f:
    code = f.read()

end_idx = code.rfind('];')
base_items = code[:end_idx].rstrip()
print("Base items length:", len(base_items))
