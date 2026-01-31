#!/bin/bash

# Restaurant MVP Verification Script
# Checks if all required files are present and configured correctly

echo "🔍 Restaurant MVP - Project Verification"
echo "========================================"
echo ""

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Counters
PASS=0
FAIL=0
WARN=0

# Function to check file exists
check_file() {
    if [ -f "$1" ]; then
        echo -e "${GREEN}✓${NC} $1"
        ((PASS++))
    else
        echo -e "${RED}✗${NC} $1 (MISSING)"
        ((FAIL++))
    fi
}

# Function to check directory exists
check_dir() {
    if [ -d "$1" ]; then
        echo -e "${GREEN}✓${NC} $1/"
        ((PASS++))
    else
        echo -e "${RED}✗${NC} $1/ (MISSING)"
        ((FAIL++))
    fi
}

echo "📁 Checking Project Structure..."
echo "================================"

# Root files
check_file "package.json"
check_file "tsconfig.json"
check_file "next.config.js"
check_file "tailwind.config.ts"
check_file "postcss.config.js"
check_file ".gitignore"
check_file ".eslintrc.json"
check_file ".editorconfig"
check_file "vercel.json"
echo ""

# Documentation
echo "📚 Checking Documentation..."
check_file "README.md"
check_file "DEPLOYMENT.md"
check_file "QUICKSTART.md"
check_file "PROJECT_SUMMARY.md"
echo ""

# Directories
echo "📂 Checking Directories..."
check_dir "src"
check_dir "src/app"
check_dir "src/components"
check_dir "src/context"
check_dir "src/data"
check_dir "src/types"
check_dir "src/utils"
echo ""

# App pages
echo "📄 Checking App Pages..."
check_file "src/app/layout.tsx"
check_file "src/app/page.tsx"
check_file "src/app/globals.css"
check_file "src/app/cart/page.tsx"
check_file "src/app/checkout/page.tsx"
check_file "src/app/review/page.tsx"
check_file "src/app/confirmation/page.tsx"
check_file "src/app/privacy/page.tsx"
check_file "src/app/terms/page.tsx"
check_file "src/app/contact/page.tsx"
echo ""

# Components
echo "🧩 Checking Components..."
check_file "src/components/Header.tsx"
check_file "src/components/Footer.tsx"
check_file "src/components/ProductCard.tsx"
check_file "src/components/CategoryFilter.tsx"
check_file "src/components/FloatingCart.tsx"
check_file "src/components/checkout/OrderTypeStep.tsx"
check_file "src/components/checkout/DeliveryLocationStep.tsx"
check_file "src/components/checkout/DeliveryTimeStep.tsx"
check_file "src/components/checkout/DineInStep.tsx"
check_file "src/components/checkout/ContactStep.tsx"
check_file "src/components/checkout/PreferencesStep.tsx"
echo ""

# Context
echo "🔄 Checking Context Providers..."
check_file "src/context/CartContext.tsx"
check_file "src/context/LanguageContext.tsx"
echo ""

# Data
echo "📊 Checking Data Files..."
check_file "src/data/menu.ts"
check_file "src/data/locations.ts"
check_file "src/data/config.ts"
check_file "src/data/translations.ts"
echo ""

# Types and Utils
echo "🛠️ Checking Types & Utils..."
check_file "src/types/index.ts"
check_file "src/utils/security.ts"
echo ""

# Configuration checks
echo "⚙️ Checking Configuration..."

if [ -f "package.json" ]; then
    if grep -q '"next"' package.json; then
        echo -e "${GREEN}✓${NC} Next.js dependency found"
        ((PASS++))
    else
        echo -e "${RED}✗${NC} Next.js dependency missing"
        ((FAIL++))
    fi

    if grep -q '"react"' package.json; then
        echo -e "${GREEN}✓${NC} React dependency found"
        ((PASS++))
    else
        echo -e "${RED}✗${NC} React dependency missing"
        ((FAIL++))
    fi

    if grep -q '"typescript"' package.json; then
        echo -e "${GREEN}✓${NC} TypeScript dependency found"
        ((PASS++))
    else
        echo -e "${RED}✗${NC} TypeScript dependency missing"
        ((FAIL++))
    fi
fi
echo ""

# Code statistics
echo "📈 Project Statistics..."
echo "======================="

if command -v find >/dev/null 2>&1; then
    TS_FILES=$(find src -name "*.ts" -o -name "*.tsx" 2>/dev/null | wc -l)
    echo "TypeScript files: $TS_FILES"
    
    if [ -d "src/app" ]; then
        PAGES=$(find src/app -name "page.tsx" 2>/dev/null | wc -l)
        echo "Pages: $PAGES"
    fi
    
    if [ -d "src/components" ]; then
        COMPONENTS=$(find src/components -name "*.tsx" 2>/dev/null | wc -l)
        echo "Components: $COMPONENTS"
    fi
fi

if [ -f "src/data/menu.ts" ]; then
    PRODUCTS=$(grep -c "id: '" src/data/menu.ts 2>/dev/null || echo "N/A")
    echo "Menu products: $PRODUCTS"
fi

if [ -f "src/data/translations.ts" ]; then
    TRANSLATIONS=$(grep -c "':'" src/data/translations.ts 2>/dev/null || echo "N/A")
    echo "Translation keys: ~$((TRANSLATIONS / 2))"
fi

echo ""

# Final summary
echo "📊 Verification Summary"
echo "======================"
echo -e "${GREEN}Passed:${NC} $PASS"
if [ $FAIL -gt 0 ]; then
    echo -e "${RED}Failed:${NC} $FAIL"
fi
if [ $WARN -gt 0 ]; then
    echo -e "${YELLOW}Warnings:${NC} $WARN"
fi
echo ""

# Final verdict
if [ $FAIL -eq 0 ]; then
    echo -e "${GREEN}✅ Project structure is complete!${NC}"
    echo ""
    echo "Next steps:"
    echo "1. Run 'npm install' to install dependencies"
    echo "2. Run 'npm run dev' to test locally"
    echo "3. Follow DEPLOYMENT.md to deploy on Vercel"
    echo ""
    exit 0
else
    echo -e "${RED}❌ Project has missing files!${NC}"
    echo ""
    echo "Please check the failed items above and ensure all files are present."
    echo ""
    exit 1
fi
