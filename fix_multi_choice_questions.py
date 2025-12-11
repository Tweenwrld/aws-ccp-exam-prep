#!/usr/bin/env python3
"""
Script to identify and help fix multi-choice questions with incomplete correct answers
"""
import json
import re

def load_questions(filename='questions_bank.json'):
    """Load questions from JSON file"""
    with open(filename, 'r', encoding='utf-8') as f:
        return json.load(f)

def save_questions(questions, filename='questions_bank.json'):
    """Save questions to JSON file"""
    with open(filename, 'w', encoding='utf-8') as f:
        json.dump(questions, f, indent=2, ensure_ascii=False)

def is_multi_choice(question_text):
    """Check if question requires multiple answers"""
    text_lower = question_text.lower()
    patterns = [
        r'\(choose\s+two\.?\)',
        r'\(choose\s+three\.?\)',
        r'\(select\s+two\.?\)',
        r'\(select\s+three\.?\)',
    ]
    return any(re.search(pattern, text_lower) for pattern in patterns)

def extract_choice_count(question_text):
    """Extract how many choices are required"""
    text_lower = question_text.lower()
    if 'three' in text_lower:
        return 3
    elif 'two' in text_lower:
        return 2
    return 1

def count_correct_answers(correct_value):
    """Count how many correct answers are provided"""
    if isinstance(correct_value, list):
        return len(correct_value)
    
    # Extract letter characters A-E
    letters = re.findall(r'[A-E]', str(correct_value).upper())
    return len(letters)

def analyze_questions(questions):
    """Analyze questions and find issues"""
    issues = []
    
    for q in questions:
        if is_multi_choice(q['text']):
            expected_count = extract_choice_count(q['text'])
            actual_count = count_correct_answers(q['correct'])
            
            if actual_count < expected_count:
                issues.append({
                    'id': q['id'],
                    'text': q['text'][:100] + '...' if len(q['text']) > 100 else q['text'],
                    'expected_answers': expected_count,
                    'actual_answers': actual_count,
                    'current_correct': q['correct'],
                    'options': q['options']
                })
    
    return issues

def display_issues(issues):
    """Display found issues"""
    if not issues:
        print("✓ No issues found! All multi-choice questions have complete answers.")
        return
    
    print(f"\n⚠ Found {len(issues)} questions with incomplete correct answers:\n")
    print("=" * 100)
    
    for i, issue in enumerate(issues, 1):
        print(f"\n{i}. Question ID: {issue['id']}")
        print(f"   Text: {issue['text']}")
        print(f"   Expected {issue['expected_answers']} answers, but found {issue['actual_answers']}")
        print(f"   Current correct value: {issue['current_correct']}")
        print(f"   Options:")
        for letter, text in sorted(issue['options'].items()):
            print(f"      {letter}. {text}")
        print("-" * 100)

def generate_report(issues, output_file='multi_choice_issues.txt'):
    """Generate a detailed report file"""
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write("Multi-Choice Questions with Incomplete Correct Answers\n")
        f.write("=" * 100 + "\n\n")
        f.write(f"Total issues found: {len(issues)}\n\n")
        
        for i, issue in enumerate(issues, 1):
            f.write(f"{i}. Question ID: {issue['id']}\n")
            f.write(f"   Text: {issue['text']}\n")
            f.write(f"   Expected: {issue['expected_answers']} answers\n")
            f.write(f"   Found: {issue['actual_answers']} answer(s)\n")
            f.write(f"   Current correct value: {issue['current_correct']}\n")
            f.write(f"   Options:\n")
            for letter, text in sorted(issue['options'].items()):
                marker = "✓" if letter in str(issue['current_correct']) else " "
                f.write(f"      [{marker}] {letter}. {text}\n")
            f.write("\n   TODO: Verify and update the 'correct' field with all correct answers\n")
            f.write("   " + "-" * 96 + "\n\n")
    
    print(f"\n✓ Detailed report saved to: {output_file}")

def main():
    print("AWS CCP Exam - Multi-Choice Question Analyzer")
    print("=" * 100)
    
    # Load questions
    print("\nLoading questions from questions_bank.json...")
    questions = load_questions()
    print(f"✓ Loaded {len(questions)} questions")
    
    # Analyze
    print("\nAnalyzing multi-choice questions...")
    issues = analyze_questions(questions)
    
    # Display results
    display_issues(issues)
    
    # Generate report
    if issues:
        generate_report(issues)
        
        print("\n" + "=" * 100)
        print("\nNEXT STEPS:")
        print("1. Review the generated 'multi_choice_issues.txt' file")
        print("2. For each question, research or verify the correct answers")
        print("3. Update the questions_bank.json file with complete correct answers")
        print("4. Use format: \"A and E\" or \"B and D\" or [\"A\", \"E\"] for the 'correct' field")
        print("\nExample fix:")
        print('  "correct": "A and E"  <- This will work correctly in the app')
        print("=" * 100)

if __name__ == '__main__':
    main()
