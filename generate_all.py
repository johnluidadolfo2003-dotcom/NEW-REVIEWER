import json
import re

# Read existing 60 problems from src/data/driveSampleProblems.ts
with open('src/data/driveSampleProblems.ts', 'r', encoding='utf-8') as f:
    existing_content = f.read()

# Find the end of array
end_idx = existing_content.rfind('];')
existing_block = existing_content[:end_idx].rstrip()

print("Existing block characters:", len(existing_block))
