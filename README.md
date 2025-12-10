# AWS CCP Timed Learning Game

A professional, exam-style timed learning game for AWS Certified Cloud Practitioner (CCP) exam preparation. Features 457 practice questions with a realistic 40-minute, 69-question session format.

## 🎯 Features

- **457 Practice Questions** extracted from comprehensive study materials
- **Realistic Exam Simulation**: 69 questions per session, 40-minute timer
- **Professional Interface**: Dark theme with modern design and smooth animations
- **Smart Timer**: Visual warnings at 5 minutes and 1 minute remaining
- **Answer Tracking**: All responses recorded with timestamps
- **Detailed Review**: "Show My Marks" feature with question-by-question breakdown
- **Random Selection**: Different questions each session for varied practice
- **Auto-Submit**: Session automatically submits when time expires

## 🚀 Quick Start

### Prerequisites

- Python 3.x
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Running the Application

```bash
# Navigate to project directory
cd /home/cliente/Desktop/Amazon/aws-ccp-exam-prep

# Start local server
python3 -m http.server 8000

# Open browser to:
# http://localhost:8000/index.html
```

## 📁 Project Structure

```
aws-ccp-exam-prep/
├── index.html              # Main application HTML
├── styles.css              # Professional styling and animations
├── app.js                  # Game logic and session management
├── exam_parser.py          # Question extraction script
├── questions_bank.json     # Structured question database (457 questions)
├── amazon.md               # Source content (26,385 lines)
├── amazon.pdf              # Additional study material
└── README.md               # This file
```

## 🎮 How to Use

### Starting a Session

1. Open the application in your browser
2. Review the session details:
   - 69 questions
   - 40-minute duration
   - 70% passing score
3. Click "Start Session"

### During the Session

- **Answer Questions**: Click on your chosen option (A, B, C, or D)
- **Navigate**: Use Previous/Next buttons to move between questions
- **Monitor Time**: Watch the countdown timer in the header
- **Submit**: Click "Submit Session" on question 69 (or wait for auto-submit)

### Reviewing Results

1. View your overall score percentage
2. See breakdown of correct, incorrect, and unanswered questions
3. Click "Show My Marks" for detailed review
4. Review each question with:
   - Your selected answer
   - The correct answer
   - Mark awarded (1 or 0)

## 🔧 Regenerating Question Bank

If you update the source materials:

```bash
python3 exam_parser.py
```

This will re-parse `amazon.md` and regenerate `questions_bank.json`.

## 📊 Question Format

Each question follows the AWS exam format:

- **Question Text**: Clear, professional phrasing
- **4 Options**: Labeled A, B, C, D
- **Single Correct Answer**: Only one option is correct
- **Unique ID**: Each question has a reference ID

## 🎨 Design Features

- **Dark Theme**: Easy on the eyes for extended study sessions
- **Glassmorphism**: Modern card effects with backdrop blur
- **Color Coding**:
  - 🟢 Green: Correct answers
  - 🔴 Red: Incorrect answers
  - 🟠 Orange: Unanswered questions
  - 🔵 Blue: Primary actions and highlights
- **Responsive**: Works on desktop and tablet devices
- **Animations**: Smooth transitions and micro-interactions

## 📈 Scoring System

- **Correct Answer**: 1 mark
- **Incorrect Answer**: 0 marks
- **Unanswered**: 0 marks
- **Passing Score**: 70% (49 out of 69 questions)
- **Total Possible**: 69 marks

## 🛠️ Technical Details

### Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Custom CSS with CSS Grid and Flexbox
- **Fonts**: Inter (Google Fonts)
- **Backend**: None (fully client-side)
- **Data Format**: JSON

### Browser Compatibility

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

### Performance

- Loads 457 questions instantly
- Smooth 60fps animations
- Minimal memory footprint
- No external dependencies

## 📝 Session Details

| Feature | Specification |
|---------|---------------|
| Questions per Session | 69 |
| Session Duration | 40 minutes |
| Total Question Bank | 457 |
| Question Selection | Random |
| Timer Warnings | 5 min, 1 min |
| Auto-Submit | Yes (on timer expiry) |
| Answer Persistence | Yes (during session) |

## 🎓 Study Tips

1. **Complete Full Sessions**: Practice under timed conditions
2. **Review Mistakes**: Use "Show My Marks" to understand errors
3. **Multiple Attempts**: Each session has different questions
4. **Track Progress**: Note your scores to measure improvement
5. **Focus on Weak Areas**: Review incorrect answers carefully

## 📄 License

Educational use only. Based on AWS CCP exam preparation materials.

## 👤 Author

Maintained by [@Tweenwrld](https://github.com/Tweenwrld)

## 🔗 Related Files

- [Implementation Plan](file:///home/cliente/.gemini/antigravity/brain/6d925821-89cd-4538-ae0c-956f91bdec6a/implementation_plan.md)
- [Walkthrough](file:///home/cliente/.gemini/antigravity/brain/6d925821-89cd-4538-ae0c-956f91bdec6a/walkthrough.md)
- [Task Breakdown](file:///home/cliente/.gemini/antigravity/brain/6d925821-89cd-4538-ae0c-956f91bdec6a/task.md)

---

**Ready to practice?** Start the server and begin your AWS CCP exam preparation! 🚀
