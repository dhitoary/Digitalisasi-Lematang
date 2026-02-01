# PowerShell version of security audit script
# Untuk Windows users

Write-Host "🔒 Security Audit - Desa Lematang Website" -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host ""

$WEBSITE_URL = "https://desalematang.vercel.app"

# 1. Check if website is accessible
Write-Host "1️⃣  Checking website accessibility..." -ForegroundColor Yellow
try {
    $response = Invoke-WebRequest -Uri $WEBSITE_URL -UseBasicParsing
    if ($response.StatusCode -eq 200) {
        Write-Host "✓ Website is accessible" -ForegroundColor Green
    }
} catch {
    Write-Host "✗ Website is not accessible!" -ForegroundColor Red
}
Write-Host ""

# 2. Check security headers
Write-Host "2️⃣  Checking security headers..." -ForegroundColor Yellow
try {
    $headers = Invoke-WebRequest -Uri $WEBSITE_URL -Method Head -UseBasicParsing
    
    $requiredHeaders = @(
        "X-Content-Type-Options",
        "X-Frame-Options",
        "X-XSS-Protection",
        "Strict-Transport-Security",
        "Content-Security-Policy"
    )
    
    foreach ($header in $requiredHeaders) {
        if ($headers.Headers.ContainsKey($header)) {
            Write-Host "✓ $header header found" -ForegroundColor Green
        } else {
            Write-Host "✗ $header header missing" -ForegroundColor Red
        }
    }
} catch {
    Write-Host "Error checking headers" -ForegroundColor Red
}
Write-Host ""

# 3. Check for HTTPS
Write-Host "3️⃣  Checking HTTPS..." -ForegroundColor Yellow
if ($WEBSITE_URL -like "https://*") {
    Write-Host "✓ HTTPS is enabled" -ForegroundColor Green
} else {
    Write-Host "✗ HTTPS is not enabled" -ForegroundColor Red
}
Write-Host ""

# 4. Check for suspicious content
Write-Host "4️⃣  Checking for suspicious content..." -ForegroundColor Yellow
try {
    $content = Invoke-WebRequest -Uri $WEBSITE_URL -UseBasicParsing
    $contentText = $content.Content.ToLower()
    
    $suspiciousKeywords = @("judol", "judi online", "slot online", "casino", "poker online", "togel", "sbobet")
    
    foreach ($keyword in $suspiciousKeywords) {
        if ($contentText -like "*$keyword*") {
            Write-Host "✗ WARNING: Found suspicious keyword: $keyword" -ForegroundColor Red
        } else {
            Write-Host "✓ No '$keyword' found" -ForegroundColor Green
        }
    }
} catch {
    Write-Host "Error checking content" -ForegroundColor Red
}
Write-Host ""

# 5. Check robots.txt
Write-Host "5️⃣  Checking robots.txt..." -ForegroundColor Yellow
try {
    $robots = Invoke-WebRequest -Uri "$WEBSITE_URL/robots.txt" -UseBasicParsing
    if ($robots.Content -like "*sitemap*") {
        Write-Host "✓ robots.txt exists and has sitemap" -ForegroundColor Green
    } else {
        Write-Host "⚠ robots.txt might be incomplete" -ForegroundColor Yellow
    }
} catch {
    Write-Host "⚠ robots.txt might be missing" -ForegroundColor Yellow
}
Write-Host ""

# 6. Check sitemap.xml
Write-Host "6️⃣  Checking sitemap.xml..." -ForegroundColor Yellow
try {
    $sitemap = Invoke-WebRequest -Uri "$WEBSITE_URL/sitemap.xml" -UseBasicParsing
    if ($sitemap.Content -like "*<urlset*") {
        Write-Host "✓ sitemap.xml exists" -ForegroundColor Green
    } else {
        Write-Host "⚠ sitemap.xml might be incomplete" -ForegroundColor Yellow
    }
} catch {
    Write-Host "⚠ sitemap.xml might be missing" -ForegroundColor Yellow
}
Write-Host ""

# 7. Summary
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host "✅ Security Audit Complete!" -ForegroundColor Green
Write-Host ""
Write-Host "📋 Next Steps:" -ForegroundColor Yellow
Write-Host "   1. Review any warnings or errors above"
Write-Host "   2. Check Google Search Console for security issues"
Write-Host "   3. Verify website visually for any changes"
Write-Host "   4. Check Git commit history for unauthorized changes"
Write-Host ""
Write-Host "📅 Last checked: $(Get-Date)" -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "🔗 Manual checks:" -ForegroundColor Yellow
Write-Host "   Google Safe Browsing: https://transparencyreport.google.com/safe-browsing/search?url=$WEBSITE_URL"
Write-Host "   VirusTotal: https://www.virustotal.com/gui/url/$WEBSITE_URL"
Write-Host "   SSL Labs: https://www.ssllabs.com/ssltest/analyze.html?d=desalematang.vercel.app"
Write-Host ""
