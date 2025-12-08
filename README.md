# AWS Certified Cloud Practitioner Exam Prep

Professional study materials for the AWS Certified Cloud Practitioner (CCP) exam, featuring 499 practice questions with detailed explanations.

## Contents

- **`amazon.md`** — Formatted Markdown version with structured explanations, AWS service links, and professional styling
- **`amazon.pdf`** — Print-ready PDF (10MB) optimized for readability with custom CSS
- **`amazon.py`** — Parser that transforms raw question text into structured Markdown
- **`amazon_md2html.py`** — HTML/PDF generator with professional styling

## Features

- **499 Practice Questions** covering all CCP exam domains
- **Detailed Explanations** with "Why Correct" and "Distractor Breakdown" sections
- **AWS Service Links** automatically enriched with official documentation URLs
- **Professional Formatting** with clean separation, blue callouts, and optimized spacing
- **Minimalistic Q496+** — Compressed explanations for advanced questions

## Quick Start

### Generate Markdown
```bash
python3 amazon.py
```

### Generate PDF
```bash
python3 amazon_md2html.py
google-chrome --headless --print-to-pdf=amazon.pdf --no-pdf-header-footer amazon.html
```

## Requirements

- Python 3.x
- `markdown` library (`pip install markdown`)
- Google Chrome (for PDF generation)

## Study Tips

1. Review questions sequentially (Q1-495 have full explanations)
2. Focus on "Distractor Breakdown" sections to understand why incorrect answers fail
3. Use "Sources" links to dive deeper into AWS documentation
4. Questions 496+ are condensed for rapid review

## Exam Coverage

- Cloud Concepts
- Security and Compliance
- Technology (Compute, Storage, Database, Networking)
- Billing and Pricing

---

**License:** Educational use only  
**Maintained by:** [@Tweenwrld](https://github.com/Tweenwrld)
