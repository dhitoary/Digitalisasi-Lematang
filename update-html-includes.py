"""
Script untuk update semua HTML files untuk menggunakan includes
"""
import re
import os

# Daftar file yang akan diupdate
html_files = [
    "profil.html",
    "pemerintahan.html",
    "lembaga.html",
    "galeri.html",
    "penghargaan.html"
]

# Pola untuk mencari dan mengganti navbar
navbar_pattern = r'<nav class="navbar".*?</nav>'
navbar_replacement = '<div id="navbar-placeholder"></div>'

# Pola untuk mencari dan mengganti footer + scroll button
footer_pattern = r'<footer class="footer".*?</footer>\s*<!-- Scroll to Top Button -->.*?<button class="scroll-to-top".*?</button>'
footer_replacement = '<div id="footer-placeholder"></div>'

# Pola untuk mencari dan mengganti script
script_pattern = r'<script src="js/script\.js"></script>'
script_replacement = '<script src="js/includes.js"></script>\n    <script src="js/script.js"></script>'

for filename in html_files:
    filepath = f"d:/Kuliah Dhito/KKN UNILA/Digitalisasi-Lematang/{filename}"
    
    if os.path.exists(filepath):
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Replace navbar
        content = re.sub(navbar_pattern, navbar_replacement, content, flags=re.DOTALL)
        
        # Replace footer
        content = re.sub(footer_pattern, footer_replacement, content, flags=re.DOTALL)
        
        # Replace script
        content = re.sub(script_pattern, script_replacement, content)
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"✓ Updated {filename}")
    else:
        print(f"✗ File not found: {filename}")

print("\nDone!")
