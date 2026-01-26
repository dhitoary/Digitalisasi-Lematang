# 📋 Panduan Navbar dan Footer Terpisah

## ✅ Yang Sudah Dilakukan

Navbar dan Footer sekarang **dipisah ke file terpisah** untuk memudahkan pengeditan!

### 📁 File Baru:
- **`includes/navbar.html`** - File navbar yang bisa diedit sekali untuk semua halaman
- **`includes/footer.html`** - File footer yang bisa diedit sekali untuk semua halaman
- **`js/includes.js`** - Script untuk load navbar dan footer

### ✨ Keuntungan:
- ✅ **Edit sekali, berlaku di semua halaman**
- ✅ **Tidak perlu copy-paste navbar/footer ke setiap file**
- ✅ **Maintenance lebih mudah**
- ✅ **Konsistensi terjaga**

---

## 📝 Cara Edit Navbar

### Edit Menu Navigasi:
1. Buka file: **`includes/navbar.html`**
2. Edit bagian yang diinginkan
3. Save file
4. Refresh browser - semua halaman otomatis update!

### Contoh - Menambah Menu Baru:
```html
<li role="none">
  <a href="kontak.html" role="menuitem">Kontak</a>
</li>
```

### Contoh - Mengubah Logo:
```html
<div class="nav-brand">
  <img src="img/logo-baru.png" alt="Logo Desa Lematang" class="logo-spin" />
  <h2>Desa Lematang</h2>
</div>
```

---

## 📝 Cara Edit Footer

### Edit Footer:
1. Buka file: **`includes/footer.html`**
2. Edit informasi kontak, alamat, atau jam pelayanan
3. Save file
4. Refresh browser - semua halaman otomatis update!

### Contoh - Mengubah Alamat:
```html
<address>
  <strong>Kantor Desa:</strong><br />
  Alamat Baru Lengkap<br />
  Kecamatan Tanjung Bintang<br />
  Lampung Selatan, 35365
</address>
```

### Contoh - Mengubah Jam Pelayanan:
```html
<p>
  <strong>Senin - Jumat:</strong><br />
  07:30 - 15:30 WIB<br />
  <strong>Sabtu:</strong><br />
  08:00 - 13:00 WIB<br />
</p>
```

---

## 🎯 File yang Sudah Diupdate

Semua file HTML berikut sudah menggunakan sistem includes:

✅ index.html
✅ profil.html
✅ pemerintahan.html
✅ lembaga.html
✅ pariwisata.html
✅ galeri.html
✅ penghargaan.html

---

## 🔧 Cara Kerja Teknis

### 1. Placeholder di HTML:
```html
<!-- Navigation -->
<div id="navbar-placeholder"></div>

<!-- Konten halaman di sini -->

<!-- Footer -->
<div id="footer-placeholder"></div>
```

### 2. JavaScript Load Otomatis:
File `js/includes.js` akan:
- Load navbar dari `includes/navbar.html`
- Load footer dari `includes/footer.html`
- Set menu aktif sesuai halaman yang dibuka
- Initialize hamburger menu dan scroll button

### 3. Menu Aktif Otomatis:
Script otomatis menambahkan class `active` ke menu sesuai halaman:
- Di index.html → Menu "Beranda" aktif
- Di profil.html → Menu "Profil Desa" aktif
- Dan seterusnya

---

## 🚀 Tips Pengeditan

### ✅ DO (Lakukan):
- Edit `includes/navbar.html` untuk mengubah navbar
- Edit `includes/footer.html` untuk mengubah footer
- Test perubahan di browser dengan refresh (Ctrl+R atau F5)
- Cek semua halaman untuk memastikan konsistensi

### ❌ DON'T (Jangan):
- Jangan edit navbar/footer langsung di setiap file HTML
- Jangan hapus `<div id="navbar-placeholder"></div>`
- Jangan hapus script `js/includes.js`
- Jangan edit file di folder `backup/`

---

## 🐛 Troubleshooting

### Navbar/Footer tidak muncul?
**Penyebab:** JavaScript belum load atau path file salah

**Solusi:**
1. Pastikan `js/includes.js` di-load sebelum `js/script.js`
2. Cek path file: `includes/navbar.html` dan `includes/footer.html`
3. Buka Console browser (F12) untuk cek error

### Menu aktif tidak berubah?
**Penyebab:** Script `setActiveMenu()` belum jalan

**Solusi:**
- Refresh browser dengan hard reload (Ctrl+Shift+R)
- Pastikan nama file HTML sesuai dengan href di navbar

### Perubahan tidak muncul setelah edit?
**Solusi:**
- Clear cache browser (Ctrl+Shift+Delete)
- Hard reload (Ctrl+Shift+R)
- Pastikan file sudah di-save

---

## 📂 Struktur Folder

```
Digitalisasi-Lematang/
├── includes/
│   ├── navbar.html    ← Edit di sini untuk navbar
│   └── footer.html    ← Edit di sini untuk footer
├── js/
│   ├── includes.js    ← Script loader (jangan edit)
│   └── script.js      ← Script utama
├── index.html         ← File HTML (sudah menggunakan includes)
├── profil.html
├── pemerintahan.html
├── lembaga.html
├── pariwisata.html
├── galeri.html
└── penghargaan.html
```

---

## 📚 Contoh Kasus Penggunaan

### Kasus 1: Menambah Nomor Telepon di Footer
1. Buka `includes/footer.html`
2. Cari bagian "Kontak & Alamat"
3. Tambahkan:
```html
<p>📞 Telp: (0721) 123-4567</p>
```
4. Save → Refresh browser → Semua halaman update!

### Kasus 2: Mengubah Warna Navbar
1. Buka `css/components/navbar.css`
2. Edit warna sesuai kebutuhan
3. Save → Refresh browser

### Kasus 3: Menambah Link Social Media
1. Buka `includes/footer.html`
2. Tambahkan di section yang sesuai:
```html
<div class="social-media">
  <a href="https://facebook.com/desalematang"><i class="fab fa-facebook"></i></a>
  <a href="https://instagram.com/desalematang"><i class="fab fa-instagram"></i></a>
</div>
```

---

## ✨ Manfaat Jangka Panjang

1. **Maintenance Lebih Mudah**: Update sekali, berlaku di semua halaman
2. **Konsistensi Terjaga**: Navbar dan footer sama di semua halaman
3. **Hemat Waktu**: Tidak perlu edit 7 file berbeda
4. **Scalable**: Mudah menambah halaman baru
5. **Clean Code**: HTML lebih rapi dan terorganisir

---

**🎊 Sekarang navbar dan footer sudah terpisah dan mudah diedit!**

*Dibuat untuk kemudahan maintenance Website Desa Lematang*
