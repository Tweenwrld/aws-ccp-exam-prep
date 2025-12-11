#!/usr/bin/env python3
"""
AWS CCP Exam Question Parser - Robust Version
Extracts questions from amazon.md handling all format variations.
"""

import re
import json

def parse_amazon_md(file_path):
    """Parse amazon.md and extract all questions into structured format."""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    questions = []
    
    # Split by question headers (## Question ...)
    question_blocks = re.split(r'\n## Question ', content)
    
    for block in question_blocks[1:]:  # Skip the first split (header)
        try:
            question_data = parse_question_block(block)
            if question_data:
                questions.append(question_data)
        except Exception as e:
            qid = block.split('\n')[0].strip()
            print(f"Error parsing question {qid}: {e}")
            continue
    
    return questions

def parse_question_block(block):
    """Parse a single question block and extract structured data."""
    lines = block.split('\n')
    
    # Extract question ID from first line
    question_id = lines[0].strip()
    
    # Initialize variables
    question_text = ""
    options = {}
    correct_answer = ""
    
    # Find the sections
    options_start = -1
    answer_line = -1
    
    for i, line in enumerate(lines):
        if '### Options' in line:
            options_start = i
        if '**Correct Answer:**' in line:
            answer_line = i
            break
    
    # Extract question text (everything between header and ### Options)
    if options_start > 0:
        question_lines = []
        for i in range(1, options_start):
            line = lines[i].strip()
            # Skip empty lines, TIP blocks, and section headers
            if not line or line.startswith('>') or line.startswith('###') or line == '---':
                continue
            question_lines.append(line)
        
        # Join all question lines
        full_text = ' '.join(question_lines)
        
        # Try to extract from bold markers
        # Look for pattern: ** ... ** where the content may contain nested ** markers
        # Strategy: find the first ** and the LAST ** before the end
        if '**' in full_text:
            # Find first **
            first_marker = full_text.find('**')
            # Find last **
            last_marker = full_text.rfind('**')
            
            if first_marker != -1 and last_marker != -1 and last_marker > first_marker + 2:
                # Extract text between first and last **
                question_text = full_text[first_marker + 2:last_marker].strip()
            else:
                # Fallback: use full text
                question_text = full_text.replace('**', '').strip()
        else:
            # If no bold markers, use the full text
            question_text = full_text
        
        # Clean up extra whitespace
        question_text = ' '.join(question_text.split())
    
    # Extract options
    if options_start > 0 and answer_line > options_start:
        for i in range(options_start + 1, answer_line):
            line = lines[i].strip()
            if line.startswith('- '):
                # Match option pattern: - A. text or - A) text
                option_match = re.match(r'-\s+([A-E])[\.\)]\s+(.*)', line)
                if option_match:
                    option_letter = option_match.group(1)
                    option_text = option_match.group(2).strip()
                    # Remove trailing emojis and arrows
                    option_text = re.sub(r'\s*[➡️✅❌🔴🟢]+\s*$', '', option_text)
                    options[option_letter] = option_text
    
    # Extract correct answer
    if answer_line > 0:
        answer_line_text = lines[answer_line]
        # Try to extract the answer text after "**Correct Answer:**"
        if '**Correct Answer:**' in answer_line_text:
            answer_text = answer_line_text.split('**Correct Answer:**')[1].strip()
            # Extract all letters A-E from the answer text
            all_letters = re.findall(r'\b([A-E])\b', answer_text)
            if all_letters:
                if len(all_letters) > 1:
                    # Multiple correct answers: join with " and "
                    correct_answer = " and ".join(all_letters)
                else:
                    # Single correct answer
                    correct_answer = all_letters[0]
    
    # Validate we have all required fields
    if question_text and len(options) >= 2 and correct_answer:
        # Final validation: question text should be reasonable length
        if len(question_text) < 10:
            print(f"Warning: Question {question_id} has very short text: '{question_text}'")
        
        return {
            "id": question_id,
            "text": question_text,
            "options": options,
            "correct": correct_answer
        }
    
    return None

def main():
    input_file = "/home/cliente/Desktop/Amazon/aws-ccp-exam-prep/amazon.md"
    output_file = "/home/cliente/Desktop/Amazon/aws-ccp-exam-prep/questions_bank.json"
    
    print(f"Parsing {input_file}...")
    questions = parse_amazon_md(input_file)
    
    print(f"\nSuccessfully extracted {len(questions)} questions")
    
    # Check for incomplete questions
    incomplete = [q for q in questions if len(q['text']) < 30]
    if incomplete:
        print(f"\nWarning: {len(incomplete)} questions have short text (< 30 chars):")
        for q in incomplete[:10]:  # Show first 10
            print(f"  {q['id']}: '{q['text']}'")
    
    # Save to JSON
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(questions, f, indent=2, ensure_ascii=False)
    
    print(f"\nQuestions saved to {output_file}")
    
    # Display sample
    print("\nFirst 5 questions:")
    for q in questions[:5]:
        print(f"\n{q['id']}: {q['text'][:100]}...")
        print(f"  Options: {len(q['options'])}")
        print(f"  Correct: {q['correct']}")
    
    # Statistics
    print(f"\nStatistics:")
    print(f"  Total questions: {len(questions)}")
    print(f"  Questions with 4 options: {len([q for q in questions if len(q['options']) == 4])}")
    print(f"  Questions with 5 options: {len([q for q in questions if len(q['options']) == 5])}")
    print(f"  Average question length: {sum(len(q['text']) for q in questions) / len(questions):.0f} chars")

if __name__ == "__main__":
    main()
