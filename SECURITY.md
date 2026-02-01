# 🔒 Panduan Keamanan Website Desa Lematang

## ⚠️ ANCAMAN UMUM UNTUK WEBSITE PEMERINTAH DESA

### 1. **Hack Judi Online (Judol)**

Website desa sering di-hack untuk menyisipkan:

- Link judi online / slot online
- Redirect ke situs judi
- Hidden spam links untuk SEO judi
- Iframe tersembunyi berisi konten judi

### 2. **Defacement**

- Tampilan website diubah oleh hacker
- Logo/konten diganti dengan pesan hacker
- Merusak reputasi pemerintah desa

### 3. **Malware & Phishing**

- Menyisipkan malware untuk mencuri data
- Fake login page untuk curi password
- Spam email mengatasnamakan desa

### 4. **SQL Injection**

- Serangan ke database (jika ada form)
- Mencuri data warga
- Menghapus data penting

## ✅ PROTEKSI YANG SUDAH DITERAPKAN

### 1. Security Headers (vercel.json)

```
✓ X-Content-Type-Options: nosniff - Cegah MIME type sniffing
✓ X-Frame-Options: DENY - Cegah clickjacking
✓ X-XSS-Protection - Aktifkan XSS filter browser
✓ Content-Security-Policy - Batasi sumber konten yang boleh dimuat
✓ Strict-Transport-Security - Paksa HTTPS
✓ Referrer-Policy - Kontrol informasi referrer
```

### 2. Content Security Policy (CSP)

Membatasi:

- Script hanya dari domain sendiri dan CDN terpercaya
- Tidak boleh inline script berbahaya
- Tidak boleh eval() atau Function()
- Iframe hanya dari Google Maps
- Tidak boleh object/embed dari luar

### 3. Hosting Security (Vercel)

- ✅ HTTPS otomatis
- ✅ DDoS protection
- ✅ CDN global
- ✅ Automatic security updates

## 🛡️ LANGKAH-LANGKAH KEAMANAN TAMBAHAN

### A. MONITORING RUTIN (WAJIB!)

#### 1. Cek Website Setiap Hari

**Yang Harus Dicek:**

```
□ Apakah tampilan website normal?
□ Ada link/konten aneh yang tidak Anda buat?
□ Ada redirect ke situs lain?
□ Cek source code: klik kanan > View Page Source
  - Cari kata: "slot", "judi", "casino", "poker", "togel"
  - Cari link aneh yang tidak dikenal
□ Cek di Google: site:desalematang.vercel.app
  - Lihat halaman yang terindex
  - Ada halaman aneh yang tidak Anda buat?
```

#### 2. Tools untuk Monitoring

```
1. Google Search Console
   - Cek "Security Issues"
   - Cek "Manual Actions"
   - Alert jika ada masalah

2. Google Safe Browsing
   - https://transparencyreport.google.com/safe-browsing/search
   - Masukkan URL website Anda
   - Cek status keamanan

3. VirusTotal
   - https://www.virustotal.com
   - Scan URL website Anda
   - Deteksi malware

4. Sucuri SiteCheck
   - https://sitecheck.sucuri.net
   - Free website security scanner
```

### B. BEST PRACTICES

#### 1. Credentials Security

```bash
✓ Jangan share password Vercel/GitHub
✓ Gunakan password kuat (min 16 karakter)
✓ Aktifkan 2FA (Two-Factor Authentication)
✓ Jangan login dari WiFi publik
✓ Ganti password setiap 3 bulan
```

#### 2. GitHub Repository

```bash
✓ Private repository lebih baik
✓ Jangan commit file dengan credential
✓ Review setiap pull request
✓ Batasi akses contributor
✓ Enable branch protection
```

#### 3. Domain & DNS

```bash
✓ Lock domain di registrar
✓ Gunakan DNS yang aman (Cloudflare)
✓ Enable DNSSEC
✓ Monitor perubahan DNS
```

### C. BACKUP RUTIN

#### Backup Otomatis

```bash
# GitHub sudah otomatis menjadi backup
# Tapi buat backup lokal juga:

1. Clone repository setiap minggu
   git clone https://github.com/yourusername/repo.git

2. Simpan di:
   - Hard disk eksternal
   - Google Drive
   - Cloud storage lain

3. Backup database (jika ada)
```

### D. UPDATE DEPENDENCIES

#### Cek Update Rutin

```bash
# Cek dependencies yang usang/vulnerable
npm outdated

# Update dependencies
npm update

# Audit keamanan
npm audit
npm audit fix
```

## 🚨 JIKA TERJADI HACK

### Langkah Darurat:

#### 1. SEGERA

```
1. Ambil screenshot sebagai bukti
2. Catat waktu kejadian
3. Jangan panik, jangan hapus apa-apa dulu
4. Hubungi tim IT/developer
```

#### 2. RECOVERY

```
1. Roll back ke versi sebelumnya di Vercel
   - Deployment History > Roll back

2. Atau restore dari GitHub
   - Cari commit terakhir yang aman
   - git reset --hard [commit-hash]
   - git push -f

3. Scan seluruh file untuk backdoor
   - Cari file .php yang mencurigakan
   - Cari script encode/base64
```

#### 3. INVESTIGASI

```
1. Cek log Vercel
2. Cek Git history - siapa yang commit?
3. Cek akses GitHub - ada orang tidak dikenal?
4. Ganti semua password
5. Enable 2FA jika belum
6. Review security settings
```

#### 4. POST-INCIDENT

```
1. Buat laporan kejadian
2. Submit ke Google (jika kena blacklist)
3. Perbaiki security holes
4. Monitor ketat 2 minggu ke depan
5. Edukasi tim
```

## 📋 SECURITY CHECKLIST HARIAN

```
□ Cek website tampilan normal
□ Cek Google Search Console - ada alert?
□ Cek Vercel dashboard - ada deployment aneh?
□ Cek GitHub - ada commit tidak dikenal?
```

## 📋 SECURITY CHECKLIST MINGGUAN

```
□ Scan dengan VirusTotal
□ Scan dengan Sucuri SiteCheck
□ Cek site:desalematang.vercel.app di Google
□ Review Git commits
□ Backup lokal
```

## 📋 SECURITY CHECKLIST BULANAN

```
□ Ganti password (opsional, minimal 3 bulan sekali)
□ Update dependencies (npm update)
□ Security audit (npm audit)
□ Review security policies
□ Test disaster recovery
```

## 🔐 KONTAK DARURAT

**Jika Website Di-hack:**

1. Developer/Tim IT Desa
2. Email: kknlematang2026@gmail.com
3. Instagram: @kkndesalematang

**Lapor ke Google (jika di-blacklist):**

- Google Search Console > Security Issues
- https://safebrowsing.google.com/safebrowsing/report_error/

## 📚 RESOURCES

### Security Tools (Free)

- Google Search Console: https://search.google.com/search-console
- Google Safe Browsing: https://transparencyreport.google.com/safe-browsing
- VirusTotal: https://www.virustotal.com
- Sucuri SiteCheck: https://sitecheck.sucuri.net
- SSL Labs: https://www.ssllabs.com/ssltest/

### Learning Resources

- OWASP Top 10: https://owasp.org/www-project-top-ten/
- Web Security Academy: https://portswigger.net/web-security

## ⚡ QUICK TIPS

1. **Jangan Install Plugin/Script Sembarangan**
   - Hanya gunakan script dari sumber terpercaya
   - Jangan copy-paste kode dari website tidak jelas

2. **Hati-hati Form Input**
   - Validasi semua input
   - Sanitize data sebelum simpan
   - Gunakan CAPTCHA untuk form contact

3. **Keep It Simple**
   - Website statis lebih aman dari dinamis
   - Semakin sedikit feature, semakin aman
   - No backend = no SQL injection risk

4. **Regular Monitoring**
   - Set Google Alert untuk nama domain Anda
   - Monitor traffic yang tidak wajar
   - Review log access secara berkala

## 🎯 REMEMBER

> **Security bukan satu kali setup, tapi proses berkelanjutan!**

- Monitor rutin ✓
- Update berkala ✓
- Backup konsisten ✓
- Edukasi tim ✓

---

**Dibuat:** 2 Februari 2026  
**Update Terakhir:** 2 Februari 2026  
**Versi:** 1.0
