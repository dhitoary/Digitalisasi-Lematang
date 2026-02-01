#!/bin/bash
# Security Audit Script untuk Website Desa Lematang
# Jalankan script ini secara berkala untuk monitoring keamanan

echo "🔒 Security Audit - Desa Lematang Website"
echo "=========================================="
echo ""

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Website URL
WEBSITE_URL="https://desalematang.vercel.app"

# 1. Check if website is accessible
echo "1️⃣  Checking website accessibility..."
if curl -s --head "$WEBSITE_URL" | head -n 1 | grep "200" > /dev/null; then
    echo -e "${GREEN}✓ Website is accessible${NC}"
else
    echo -e "${RED}✗ Website is not accessible!${NC}"
fi
echo ""

# 2. Check security headers
echo "2️⃣  Checking security headers..."
HEADERS=$(curl -s -I "$WEBSITE_URL")

check_header() {
    if echo "$HEADERS" | grep -i "$1" > /dev/null; then
        echo -e "${GREEN}✓ $1 header found${NC}"
    else
        echo -e "${RED}✗ $1 header missing${NC}"
    fi
}

check_header "X-Content-Type-Options"
check_header "X-Frame-Options"
check_header "X-XSS-Protection"
check_header "Strict-Transport-Security"
check_header "Content-Security-Policy"
echo ""

# 3. Check for HTTPS
echo "3️⃣  Checking HTTPS..."
if echo "$WEBSITE_URL" | grep "https://" > /dev/null; then
    echo -e "${GREEN}✓ HTTPS is enabled${NC}"
else
    echo -e "${RED}✗ HTTPS is not enabled${NC}"
fi
echo ""

# 4. Check for suspicious content
echo "4️⃣  Checking for suspicious content..."
CONTENT=$(curl -s "$WEBSITE_URL")

check_suspicious() {
    if echo "$CONTENT" | grep -i "$1" > /dev/null; then
        echo -e "${RED}✗ WARNING: Found suspicious keyword: $1${NC}"
        return 1
    else
        echo -e "${GREEN}✓ No '$1' found${NC}"
        return 0
    fi
}

check_suspicious "judol"
check_suspicious "judi online"
check_suspicious "slot online"
check_suspicious "casino"
check_suspicious "poker online"
check_suspicious "togel"
check_suspicious "sbobet"
echo ""

# 5. Check robots.txt
echo "5️⃣  Checking robots.txt..."
if curl -s "$WEBSITE_URL/robots.txt" | grep -i "sitemap" > /dev/null; then
    echo -e "${GREEN}✓ robots.txt exists and has sitemap${NC}"
else
    echo -e "${YELLOW}⚠ robots.txt might be missing or incomplete${NC}"
fi
echo ""

# 6. Check sitemap.xml
echo "6️⃣  Checking sitemap.xml..."
if curl -s "$WEBSITE_URL/sitemap.xml" | grep -i "<urlset" > /dev/null; then
    echo -e "${GREEN}✓ sitemap.xml exists${NC}"
else
    echo -e "${YELLOW}⚠ sitemap.xml might be missing${NC}"
fi
echo ""

# 7. Check Google Safe Browsing (requires API key)
echo "7️⃣  Google Safe Browsing status..."
echo -e "${YELLOW}ℹ Manual check required at:${NC}"
echo "   https://transparencyreport.google.com/safe-browsing/search?url=$WEBSITE_URL"
echo ""

# 8. Summary
echo "=========================================="
echo "✅ Security Audit Complete!"
echo ""
echo "📋 Next Steps:"
echo "   1. Review any warnings or errors above"
echo "   2. Check Google Search Console for security issues"
echo "   3. Verify website visually for any changes"
echo "   4. Check Git commit history for unauthorized changes"
echo ""
echo "📅 Last checked: $(date)"
echo "=========================================="
