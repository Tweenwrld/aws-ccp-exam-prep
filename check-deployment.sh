#!/bin/bash

# Deployment Readiness Check Script
# Verifies that the project is ready for Vercel deployment

echo "🔍 Checking AWS CCP Exam Prep - Deployment Readiness"
echo "=================================================="
echo ""

# Color codes
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Counters
PASSED=0
FAILED=0

# Function to check file exists
check_file() {
    if [ -f "$1" ]; then
        echo -e "${GREEN}✓${NC} $2"
        ((PASSED++))
        return 0
    else
        echo -e "${RED}✗${NC} $2"
        ((FAILED++))
        return 1
    fi
}

# Function to check directory exists
check_dir() {
    if [ -d "$1" ]; then
        echo -e "${GREEN}✓${NC} $2"
        ((PASSED++))
        return 0
    else
        echo -e "${RED}✗${NC} $2"
        ((FAILED++))
        return 1
    fi
}

echo "📁 Checking Required Files..."
check_file "index.html" "index.html exists"
check_file "styles.css" "styles.css exists"
check_file "questions_bank.json" "questions_bank.json exists"
check_file "vercel.json" "vercel.json exists"
check_file "package.json" "package.json exists"
check_file ".vercelignore" ".vercelignore exists"
echo ""

echo "📂 Checking JavaScript Modules..."
check_dir "js" "js/ directory exists"
check_file "js/app.js" "js/app.js exists"
check_file "js/config.js" "js/config.js exists"
check_file "js/utils.js" "js/utils.js exists"
check_file "js/questionService.js" "js/questionService.js exists"
check_file "js/sessionManager.js" "js/sessionManager.js exists"
check_file "js/storageService.js" "js/storageService.js exists"
check_file "js/timerController.js" "js/timerController.js exists"
check_file "js/uiController.js" "js/uiController.js exists"
echo ""

echo "🔗 Checking Import Statements..."
# Check for .js extensions in imports
if grep -r "import.*from.*['\"]\..*[^\.js]['\"]" js/ 2>/dev/null | grep -v "node_modules"; then
    echo -e "${RED}✗${NC} Found imports without .js extension"
    ((FAILED++))
else
    echo -e "${GREEN}✓${NC} All imports have .js extension"
    ((PASSED++))
fi
echo ""

echo "📊 Checking File Sizes..."
JSON_SIZE=$(stat -f%z "questions_bank.json" 2>/dev/null || stat -c%s "questions_bank.json" 2>/dev/null)
if [ $JSON_SIZE -gt 0 ]; then
    echo -e "${GREEN}✓${NC} questions_bank.json is not empty ($(numfmt --to=iec-i --suffix=B $JSON_SIZE 2>/dev/null || echo $JSON_SIZE bytes))"
    ((PASSED++))
else
    echo -e "${RED}✗${NC} questions_bank.json is empty"
    ((FAILED++))
fi
echo ""

echo "🌐 Checking HTML Structure..."
if grep -q "type=\"module\"" index.html; then
    echo -e "${GREEN}✓${NC} HTML uses ES6 modules"
    ((PASSED++))
else
    echo -e "${RED}✗${NC} HTML missing type=\"module\""
    ((FAILED++))
fi

if grep -q "src=\"js/app.js\"" index.html; then
    echo -e "${GREEN}✓${NC} HTML references correct app.js path"
    ((PASSED++))
else
    echo -e "${RED}✗${NC} HTML has incorrect app.js path"
    ((FAILED++))
fi
echo ""

echo "⚙️  Checking Vercel Configuration..."
if grep -q "\"rewrites\"" vercel.json; then
    echo -e "${GREEN}✓${NC} SPA routing configured"
    ((PASSED++))
else
    echo -e "${YELLOW}⚠${NC} SPA routing not configured"
fi

if grep -q "\"headers\"" vercel.json; then
    echo -e "${GREEN}✓${NC} Caching headers configured"
    ((PASSED++))
else
    echo -e "${YELLOW}⚠${NC} Caching headers not configured"
fi
echo ""

echo "=================================================="
echo "📋 Summary:"
echo -e "   ${GREEN}Passed: $PASSED${NC}"
echo -e "   ${RED}Failed: $FAILED${NC}"
echo ""

if [ $FAILED -eq 0 ]; then
    echo -e "${GREEN}✅ Project is ready for deployment!${NC}"
    echo ""
    echo "Next steps:"
    echo "  1. Install Vercel CLI: npm install -g vercel"
    echo "  2. Login: vercel login"
    echo "  3. Deploy: vercel"
    echo ""
    exit 0
else
    echo -e "${RED}❌ Please fix the issues above before deploying${NC}"
    echo ""
    exit 1
fi
