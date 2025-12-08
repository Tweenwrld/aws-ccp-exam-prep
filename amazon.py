import re

def parse_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    questions = []
    current_question = {
        'id': None,
        'text': [],
        'options': [],
        'answer': None,
        'explanation': [],
        'links': []
    }
    
    # State flags
    in_explanation = False
    
    # Regex patterns
    question_start_pattern_1 = re.compile(r'^(\d+)\)\s+(.*)')
    question_start_pattern_2 = re.compile(r'^❓ Question (\d+)')
    correct_answer_pattern = re.compile(r'^(✅\s*)?Correct [Aa]nswers?:\s*(.*)')
    option_header_pattern = re.compile(r'^🔘\s*Options')
    # Option pattern to find embedded options like "A. foo B. bar"
    # We look for [A-Z]. followed by space, but we need to be careful not to split "U.S."
    # A safe heuristic is [A-Z]. space, and usually at start of line or preceded by space.
    option_split_pattern = re.compile(r'(?<!\w)([A-Z]\.\s+)')
    link_pattern = re.compile(r'https?://[^\s]+')
    
    # AWS Service Mapping
    aws_links_map = {
        "Amazon EC2": "https://aws.amazon.com/ec2/",
        "Amazon S3": "https://aws.amazon.com/s3/",
        "Amazon RDS": "https://aws.amazon.com/rds/",
        "Amazon VPC": "https://aws.amazon.com/vpc/",
        "AWS Lambda": "https://aws.amazon.com/lambda/",
        "Amazon DynamoDB": "https://aws.amazon.com/dynamodb/",
        "Amazon SNS": "https://aws.amazon.com/sns/",
        "Amazon SQS": "https://aws.amazon.com/sqs/",
        "AWS IAM": "https://aws.amazon.com/iam/",
        "AWS CloudFormation": "https://aws.amazon.com/cloudformation/",
        "Amazon CloudWatch": "https://aws.amazon.com/cloudwatch/",
        "AWS CloudTrail": "https://aws.amazon.com/cloudtrail/",
        "AWS Config": "https://aws.amazon.com/config/",
        "AWS Trusted Advisor": "https://aws.amazon.com/premiumsupport/technology/trusted-advisor/",
        "AWS Organizations": "https://aws.amazon.com/organizations/",
        "AWS Cost Explorer": "https://aws.amazon.com/aws-cost-management/aws-cost-explorer/",
        "AWS Budgets": "https://aws.amazon.com/aws-cost-management/aws-budgets/",
        "Amazon Route 53": "https://aws.amazon.com/route53/",
        "Amazon EFS": "https://aws.amazon.com/efs/",
        "Amazon EBS": "https://aws.amazon.com/ebs/",
        "Amazon Glacier": "https://aws.amazon.com/glacier/",
        "Amazon Aurora": "https://aws.amazon.com/rds/aurora/",
        "Amazon Redshift": "https://aws.amazon.com/redshift/",
        "AWS Auto Scaling": "https://aws.amazon.com/autoscaling/",
        "Elastic Load Balancing": "https://aws.amazon.com/elasticloadbalancing/",
        "AWS Shield": "https://aws.amazon.com/shield/",
        "AWS WAF": "https://aws.amazon.com/waf/",
        "Amazon Inspector": "https://aws.amazon.com/inspector/",
        "Amazon GuardDuty": "https://aws.amazon.com/guardduty/",
        "AWS Key Management Service": "https://aws.amazon.com/kms/",
        "AWS Artifact": "https://aws.amazon.com/artifact/",
        "AWS Systems Manager": "https://aws.amazon.com/systems-manager/",
        "AWS Professional Services": "https://aws.amazon.com/professional-services/",
        "AWS Partner Network": "https://aws.amazon.com/partners/",
        "Amazon Connect": "https://aws.amazon.com/connect/",
        "Amazon FSx": "https://aws.amazon.com/fsx/",
        "AWS Billing Conductor": "https://aws.amazon.com/billing-conductor/",
        "Amazon CodeGuru": "https://aws.amazon.com/codeguru/",
        "Amazon SageMaker": "https://aws.amazon.com/sagemaker/",
        "AWS Compute Optimizer": "https://aws.amazon.com/compute-optimizer/"
    }

    def demash_text(text):
        # Fix "AuroraRelational" -> "Aurora Relational"
        text = re.sub(r'([a-z])([A-Z])', r'\1 \2', text)
        # Fix "SESOnly" -> "SES Only"
        text = re.sub(r'([A-Z]{2,})([A-Z][a-z])', r'\1 \2', text)
        
        # Restore common terms split by above regex
        text = text.replace("My SQL", "MySQL").replace("Postgre SQL", "PostgreSQL")
        return text

    def clean_emojis(text):
        # Remove specific emojis found in source
        emojis = ["❌", "🧠", "🔍", "🧩", "💡", "📚", "✅", "❓"]
        for emoji in emojis:
            text = text.replace(emoji, "")
        return text.strip()

    expecting_question_text = False
    in_distractor_table = False
    in_reinforcing_table = False
    in_sources_section = False
    in_skipped_section = False
    table_rows = []

    # State for paragraph bundling
    explanation_buffer = []
    table_buffer = []

    def flush_explanation_buffer(q_dict, buffer):
        if buffer:
            # Join lines with spaces to form a paragraph
            paragraph = " ".join([l.strip() for l in buffer if l.strip()])
            if paragraph:
                q_dict['explanation'].append(paragraph)
            buffer.clear()

    def flush_table_buffer(q_dict, buffer):
        if not buffer:
            return
            
        # Parse table
        try:
            # Extract headers
            header_line = buffer[0]
            headers = [c.strip() for c in header_line.split('|') if c.strip()]
            
            for line in buffer[1:]:
                if '---' in line:
                    continue
                    
                cols = [c.strip() for c in line.split('|') if c.strip()]
                if not cols:
                    continue
                    
                # Format as list item
                # First column is usually the key (e.g. Option, Feature)
                item_text = f"- **{cols[0]}**"
                
                details = []
                for i in range(1, len(cols)):
                    val = cols[i]
                    if i < len(headers):
                        label = headers[i]
                        # Don't repeat label if it's generic like "Detail" or "Description" unless needed
                        if label.lower() in ['detail', 'description', 'text']:
                             details.append(val)
                        else:
                             details.append(f"**{label}**: {val}")
                    else:
                        details.append(val)
                
                if details:
                    item_text += " " + " ".join(details)
                
                q_dict['explanation'].append(item_text)
                
        except Exception as e:
            # Fallback if parsing fails
            print(f"Table parsing error: {e}")
            for line in buffer:
                q_dict['explanation'].append(line)
        
        buffer.clear()

    for line in lines:
        stripped_line = line.strip()
        
        # Check for Question Start "N) ..."
        q_match_1 = question_start_pattern_1.match(line)
        if q_match_1:
            # Save previous question
            if current_question['answer'] or current_question['text']:
                flush_explanation_buffer(current_question, explanation_buffer)
                
                questions.append(current_question)
                current_question = {
                    'id': None, 'text': [], 'options': [], 'answer': None, 'explanation': [], 'links': []
                }
                in_explanation = False
                in_sources_section = False
                in_distractor_table = False
                in_reinforcing_table = False
                in_skipped_section = False
            
            current_question['id'] = q_match_1.group(1)
            current_question['text'].append(q_match_1.group(2))
            expecting_question_text = False
            continue

        # Check for Question Start "❓ Question N"
        q_match_2 = question_start_pattern_2.match(line)
        if q_match_2:
            # Save previous question
            if current_question['answer'] or current_question['text']:
                flush_explanation_buffer(current_question, explanation_buffer)

                questions.append(current_question)
                current_question = {
                    'id': None, 'text': [], 'options': [], 'answer': None, 'explanation': [], 'links': []
                }
                in_explanation = False
                in_sources_section = False
                in_distractor_table = False
                in_reinforcing_table = False
                in_skipped_section = False
            
            current_question['id'] = q_match_2.group(1)
            expecting_question_text = True
            continue

        # Check for "Correct answer:"
        a_match = correct_answer_pattern.match(line)
        if a_match:
            if current_question['answer'] is None:
                 current_question['answer'] = a_match.group(2)
                 in_explanation = True 
                 expecting_question_text = False
            continue

        # Check for Options header
        if option_header_pattern.match(line):
            expecting_question_text = False
            continue

        # Check for Links
        link_match = link_pattern.search(line)
        if link_match:
            urls = link_pattern.findall(line)
            for url in urls:
                current_question['links'].append(url)
            if len(line) < len(urls[0]) + 15:
                continue

        # Content processing
        if in_explanation:
            # Helper to get question number
            def get_q_num(qid):
                if not qid: return 0
                digits = ''.join(filter(str.isdigit, str(qid)))
                return int(digits) if digits else 0
            
            q_num = get_q_num(current_question['id'])

            # Check for headers
            if "Conceptual Framing" in line:
                if q_num >= 496:
                    in_skipped_section = True
                    continue
                
                in_skipped_section = False
                flush_explanation_buffer(current_question, explanation_buffer)
                flush_table_buffer(current_question, table_buffer)
                current_question['explanation'].append(f"\n### Conceptual Framing")
                in_sources_section = False
                in_distractor_table = False
                in_reinforcing_table = False
            elif "Why" in line and "is Correct" in line:
                in_skipped_section = False
                flush_explanation_buffer(current_question, explanation_buffer)
                flush_table_buffer(current_question, table_buffer)
                cleaned_line = clean_emojis(line)
                current_question['explanation'].append(f"\n### {cleaned_line}")
                in_sources_section = False
                in_distractor_table = False
                in_reinforcing_table = False
                
                # Check if the line itself contains the start of an answer explanation
                # e.g. "Why D and E Are Correct D. Outbound data..."
                # We want to split "D. Outbound data..." onto a new line if it's mashed
                # But usually the next lines contain the content.
                # The user wants separate paragraphs for multiple correct answers.
                # We will handle this in the generic line processing by detecting "X. Option" patterns.
                
            elif "Distractor Breakdown" in line:
                in_skipped_section = False
                flush_explanation_buffer(current_question, explanation_buffer)
                flush_table_buffer(current_question, table_buffer)
                current_question['explanation'].append(f"\n---\n### Distractor Breakdown")
                in_distractor_table = True
                in_sources_section = False
                in_reinforcing_table = False
                continue 
            elif "Real-World Tie-In" in line:
                if q_num >= 496:
                    in_skipped_section = True
                    continue

                in_skipped_section = False
                flush_explanation_buffer(current_question, explanation_buffer)
                flush_table_buffer(current_question, table_buffer)
                current_question['explanation'].append(f"\n---\n### Real-World Tie-In")
                in_sources_section = False
                in_distractor_table = False
                in_reinforcing_table = False
            elif "Reinforcing" in line:
                in_skipped_section = False
                flush_explanation_buffer(current_question, explanation_buffer)
                flush_table_buffer(current_question, table_buffer)
                # Extract the full line as header text if needed, or just use a standard header
                # Usually "Reinforcing with [Concept]"
                header_text = clean_emojis(line.strip())
                # Remove any leading bullets or excessive whitespace
                header_text = header_text.lstrip('-*').strip()
                current_question['explanation'].append(f"\n---\n### {header_text}")
                in_sources_section = False
                in_distractor_table = False
                in_reinforcing_table = True
            elif line.startswith("Sources:") or line.strip() == "Sources":
                in_skipped_section = False
                flush_explanation_buffer(current_question, explanation_buffer)
                flush_table_buffer(current_question, table_buffer)
                current_question['explanation'].append(f"\n---\n### Sources")
                in_sources_section = True
                in_distractor_table = False
                in_reinforcing_table = False
            else:
                if in_skipped_section:
                    continue
                # Generic Table Detection
                if line.strip().startswith('|'):
                    flush_explanation_buffer(current_question, explanation_buffer)
                    table_buffer.append(line)
                    continue
                else:
                    if table_buffer:
                        flush_table_buffer(current_question, table_buffer)

                # Distractor Breakdown AND Reinforcing processing (Text Mode - List)
                if in_distractor_table or in_reinforcing_table:
                    flush_explanation_buffer(current_question, explanation_buffer) # Ensure buffer is empty before list items
                    
                    # Check for mashed header line (handle both quote types) - Distractor Breakdown
                    if in_distractor_table and "Option" in line and ("Why It’s Incorrect" in line or "Why It's Incorrect" in line):
                        # Remove header
                        cleaned = line.replace("OptionWhy It’s Incorrect", "").replace("Option\tWhy It’s Incorrect", "").replace("Option  Why It’s Incorrect", "")
                        cleaned = cleaned.replace("OptionWhy It's Incorrect", "").replace("Option\tWhy It's Incorrect", "").replace("Option  Why It's Incorrect", "").strip()
                        
                        if not cleaned:
                            continue # Just a header line, skip
                        
                        # Mashed content on same line!
                        parts = re.split(r'([A-Z]\.)', cleaned)
                        
                        current_opt = None
                        current_text = ""
                        
                        for p in parts:
                            if not p.strip(): continue
                            if re.match(r'^[A-Z]\.$', p.strip()):
                                if current_opt:
                                    current_question['explanation'].append(f"- **{current_opt}** {demash_text(clean_emojis(current_text.strip()))}")
                                current_opt = p.strip()
                                current_text = ""
                            else:
                                current_text += p
                        
                        if current_opt:
                             current_question['explanation'].append(f"- **{current_opt}** {demash_text(clean_emojis(current_text.strip()))}")
                        continue

                    # Check for header line - Reinforcing
                    if in_reinforcing_table and "Category" in line and "Cost Factors" in line:
                         continue

                    # Normal row processing
                    # Try to split by tab or multiple spaces OR "❌"
                    parts = re.split(r'\t|\s{2,}|(?=❌)', line.strip())
                    if len(parts) >= 2:
                        opt = parts[0]
                        reason = " ".join(parts[1:])
                        current_question['explanation'].append(f"- **{opt}** {demash_text(clean_emojis(reason))}")
                        continue
                    elif line.strip():
                        if re.match(r'^[A-Z]\.', line.strip()):
                             # Fallback
                             if "❌" in line:
                                 p = line.split("❌", 1)
                                 current_question['explanation'].append(f"- **{p[0].strip()}** {demash_text(clean_emojis(p[1].strip()))}")
                             else:
                                 current_question['explanation'].append(f"- {clean_emojis(line.strip())}")
                             continue
                
                # Normal Explanation Text Processing (Conceptual Framing, Why Correct, etc.)
                # Check if this line starts a new correct answer block (e.g. "A. Option A")
                # This is to separate multiple correct answers.
                if re.match(r'^[A-Z]\.', line.strip()):
                     flush_explanation_buffer(current_question, explanation_buffer)
                     # Bold the option letter and name if possible
                     # e.g. "A. Option Name Because..." -> "**A. Option Name** Because..."
                     # Heuristic: split by first sentence or reasonable length?
                     # Or just bold the "A." part.
                     # User wants: "**D. Option** Reason..."
                     
                     # Simple heuristic: bold up to the first period? Or just the "A."?
                     # Let's try to bold "A. Option Name" if it looks like a title.
                     # But often it's just "A. Because..."
                     
                     # Let's just bold the "A." for now, or the whole line if it's short?
                     # Better: just treat it as a new paragraph.
                     # If we can detect "A. Option Name", bold it.
                     
                     # Let's just append it to buffer, but since we flushed, it starts a new paragraph.
                     # To make it distinct, maybe add a break?
                     # Markdown paragraphs are separated by blank lines.
                     explanation_buffer.append(f"**{line.strip().split(' ', 1)[0]}** " + (line.strip().split(' ', 1)[1] if ' ' in line.strip() else ""))
                     continue

                # Check for implicit lists (common in Q1-30) e.g. "* A. Option" or "- A. Option"
                # We want to format these as "- **A. Option** ..."
                implicit_list_match = re.match(r'^[\*\-]\s*([A-Z]\.)\s*(.*)', line.strip())
                if implicit_list_match:
                    flush_explanation_buffer(current_question, explanation_buffer)
                    opt_letter = implicit_list_match.group(1)
                    opt_content = implicit_list_match.group(2)
                    # Clean emojis from content just in case
                    opt_content = clean_emojis(opt_content)
                    current_question['explanation'].append(f"- **{opt_letter}** {demash_text(opt_content)}")
                    continue

                # Link Enrichment for Sources
                if in_sources_section:
                     flush_explanation_buffer(current_question, explanation_buffer)
                     # Check if line matches a service
                     for service, url in aws_links_map.items():
                         if service.lower() in line.lower():
                             if url not in current_question['links']:
                                 current_question['links'].append(url)

                # Handle bullet points
                if line.strip().startswith('* '):
                    flush_explanation_buffer(current_question, explanation_buffer)
                    current_question['explanation'].append(f"- {line.strip()[2:]}")
                elif line.strip().startswith('- '):
                    flush_explanation_buffer(current_question, explanation_buffer)
                    current_question['explanation'].append(f"- {line.strip()[2:]}")
                else:
                    # Regular text line - check if empty to flush paragraph
                    if not line.strip():
                        flush_explanation_buffer(current_question, explanation_buffer)
                    else:
                        explanation_buffer.append(line)
        else:
            # Question Text or Options
            if expecting_question_text:
                current_question['text'].append(line)
            else:
                # Heuristic for options
                parts = option_split_pattern.split(line)
                current_option = ""
                for part in parts:
                    if not part.strip(): continue
                    if option_split_pattern.match(part):
                        if current_option:
                            current_question['options'].append(current_option.strip())
                        current_option = part
                    else:
                        current_option += part
                if current_option:
                    current_question['options'].append(current_option.strip())
                
                if not parts or (len(parts) == 1 and not option_split_pattern.match(parts[0])):
                     if not current_question['options']:
                         current_question['text'].append(line)
                     else:
                         current_question['options'][-1] += " " + line

    # Add last question
    if current_question['answer'] or current_question['text']:
        flush_explanation_buffer(current_question, explanation_buffer)
        questions.append(current_question)
        
    return questions

def generate_markdown(questions, output_path):
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write("# AWS Certification Questions\n\n")
        f.write("> [!NOTE]\n> This document contains practice questions and detailed explanations for AWS Certification.\n\n")
        
        for i, q in enumerate(questions):
            # Determine a title/number
            q_num = q['id'] if q['id'] else f"Q{i+1}"
            
            f.write(f"## Question {q_num}\n\n")
            
            # Question Text
            if q['text']:
                text = " ".join(q['text'])
                f.write(f"**{text}**\n\n")
            
            # Options
            if q['options']:
                f.write("### Options\n")
                for opt in q['options']:
                    f.write(f"- {opt}\n")
                f.write("\n")
            
            # Correct Answer
            if q['answer']:
                f.write(f"> [!TIP]\n> **Correct Answer:** {q['answer']}\n\n")
            
            # Explanation
            if q['explanation']:
                f.write("### Explanation\n")
                for exp in q['explanation']:
                    # Format bullet points
                    if exp.startswith('* '):
                        f.write(f"- {exp[2:]}\n")
                    else:
                        f.write(f"{exp}\n")
                f.write("\n")
            
            # Links
            if q['links']:
                f.write("### References\n")
                for link in q['links']:
                    f.write(f"- [{link}]({link})\n")
            
            f.write("\n---\n\n")

if __name__ == "__main__":
    input_file = "/home/cliente/.gemini/antigravity/scratch/Amazon.txt"
    output_file = "/home/cliente/.gemini/antigravity/scratch/Amazon.md"
    
    print(f"Parsing {input_file}...")
    questions = parse_file(input_file)
    print(f"Found {len(questions)} questions.")
    
    print(f"Generating {output_file}...")
    generate_markdown(questions, output_file)
    print("Done.")
