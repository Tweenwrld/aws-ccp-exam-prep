# Multi-Choice Question Fix

**Date:** December 11, 2025  
**Status:** ✅ RESOLVED

## Problem
Multi-choice questions (those asking to "Choose two" or "Choose three") were returning only one option as the correct answer instead of all correct answers.

## Root Cause
The `exam_parser.py` script that converts `amazon.md` to `questions_bank.json` was only extracting the **first letter** from the correct answer field, ignoring subsequent correct answers.

## Solution
Modified `exam_parser.py` (lines 107-120) to extract **all** correct answer letters:

```python
# Extract all letters A-E from the answer text
all_letters = re.findall(r'\b([A-E])\b', answer_text)
if all_letters:
    if len(all_letters) > 1:
        correct_answer = " and ".join(all_letters)  # "A and E"
    else:
        correct_answer = all_letters[0]  # "A"
```

## Results
- ✅ Fixed 75 multi-choice questions
- ✅ All questions now have complete correct answers
- ✅ Format: `"correct": "A and E"` (properly parsed by app)

## Example Fixes
- Question 9: `"A"` → `"A and E"`
- Question 10: `"C"` → `"C and D"`
- Question 14: `"A"` → `"A and D"`

## Files Modified
1. `exam_parser.py` - Fixed answer extraction logic
2. `questions_bank.json` - Regenerated with complete data (484 questions)

**Note:** The application code was already correct and properly handles multiple correct answers. It only needed complete data.
