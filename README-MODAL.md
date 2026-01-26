# ✅ FITUR MODAL BERHASIL DITAMBAHKAN!

## 🎯 Apa yang Sudah Dibuat?

Sekarang website Desa Lematang sudah punya **popup modal** seperti di screenshot:

### Untuk UMKM:
- Klik produk → Muncul popup detail
- Tombol **Lokasi** → Buka Google Maps
- Tombol **Beli** → Chat WhatsApp penjual

### Untuk Wisata:
- Klik destinasi → Muncul popup detail  
- Tombol **Lihat Lokasi** → Buka Google Maps
- Tombol **Hubungi** → Chat WhatsApp pengelola

---

## 🚀 CARA MENGGUNAKAN (3 LANGKAH)

### 1️⃣ Test Modal
Buka file ini di browser untuk test:
```
test-modal.html
```
Atau langsung buka:
```
pariwisata.html
```

### 2️⃣ Edit Data (Nomor WA & Lokasi)
Buka file: **`js/script.js`**

Cari bagian ini dan edit:
```javascript
phone: "6281234567890",  // ← Ganti dengan nomor WA asli
location: "https://maps.google.com/?q=-5.4,105.3",  // ← Ganti dengan link Maps asli
```

**Format Nomor WA:**
- Nomor: 0812-3456-7890
- Tulis: `6281234567890` (62 + nomor tanpa 0)

### 3️⃣ Upload Gambar
Upload gambar ke folder **`img/`** dengan nama:
- `keripik-pisang.jpg`
- `beras-lokal.jpg`
- `anyaman-bambu.jpg`
- `wisata-pertanian.jpg`
- `wisata-alam.jpg`
- `wisata-budaya.jpg`
- `wisata-industri.jpg`

Ukuran gambar: **800x600px**

---

## 📝 CARA EDIT DATA LENGKAP

### Edit Produk UMKM
Buka `js/script.js`, cari `umkmData`:

```javascript
umkm1: {
  title: "KERIPIK PISANG",  // ← Nama produk
  description: "KERIPIK PISANG KEPOK ASLI GURIH...",  // ← Deskripsi
  image: "img/keripik-pisang.jpg",  // ← Path gambar
  phone: "6281234567890",  // ← Nomor WA (format: 62...)
  location: "https://maps.google.com/?q=-5.4,105.3",  // ← Link Maps
  message: "Halo, saya tertarik...",  // ← Template chat WA
},
```

### Edit Destinasi Wisata
Cari `tourismData` di file yang sama:

```javascript
wisata1: {
  title: "WISATA PERTANIAN LEMATANG",
  description: "Nikmati pengalaman...",
  image: "img/wisata-pertanian.jpg",
  location: "https://maps.google.com/?q=-5.4,105.3",
  phone: "6281234567893",
  message: "Halo, saya ingin informasi...",
},
```

---

## 🗺️ CARA DAPAT LINK GOOGLE MAPS

### Opsi 1: Copy Link
1. Buka Google Maps
2. Cari lokasi
3. Klik tombol **Share** / **Bagikan**
4. Klik **Copy link**
5. Paste ke field `location`

### Opsi 2: Pakai Koordinat
Format: `https://maps.google.com/?q=LATITUDE,LONGITUDE`

Contoh:
```
https://maps.google.com/?q=-5.4,105.3
```

---

## ➕ CARA TAMBAH PRODUK/WISATA BARU

### Step 1: Tambah Data di JavaScript
Edit `js/script.js`, tambah entry baru:

```javascript
umkm4: {  // ← ID baru (umkm4, umkm5, dst)
  title: "PRODUK BARU ANDA",
  description: "Deskripsi produk...",
  image: "img/produk-baru.jpg",
  phone: "6281234567890",
  location: "https://maps.google.com/?q=-5.4,105.3",
  message: "Halo, saya tertarik...",
},
```

### Step 2: Tambah Card di HTML
Edit `pariwisata.html`, copy card yang ada dan ganti ID:

```html
<div class="umkm-item" onclick="openUMKMModal('umkm4')">
  <!-- ↑ Ganti ID sesuai dengan data di JS -->
  <div class="umkm-logo">🏪</div>
  <h3>Produk Baru Anda</h3>
  <p class="umkm-category">Kategori: Kuliner</p>
  <p class="umkm-desc">Deskripsi singkat produk</p>
  <p class="umkm-contact">📍 Lokasi | 📞 Klik untuk info</p>
</div>
```

### Step 3: Upload Gambar
Upload file `produk-baru.jpg` ke folder `img/`

---

## 📱 RESPONSIVE & MOBILE FRIENDLY

Modal sudah otomatis menyesuaikan di:
- ✅ Desktop
- ✅ Tablet  
- ✅ Mobile

---

## 🐛 TROUBLESHOOTING

**Modal tidak muncul?**
- Pastikan file `js/script.js` sudah di-load
- Buka Console browser (F12) untuk cek error

**Gambar tidak muncul?**
- Akan otomatis tampil placeholder jika gambar belum ada
- Check nama file gambar di folder `img/`

**WhatsApp tidak kebuka?**
- Cek format nomor: `6281234567890` (tanpa + dan -)
- Test link: `https://wa.me/6281234567890`

**Google Maps tidak kebuka?**
- Test link di browser biasa dulu
- Pastikan format URL benar

---

## 📚 DOKUMENTASI LENGKAP

Lihat file-file ini untuk detail lebih lanjut:

- **`PANDUAN-MODAL.md`** - Panduan lengkap semua fitur
- **`DAFTAR-GAMBAR.md`** - Spesifikasi gambar yang dibutuhkan  
- **`test-modal.html`** - File untuk testing

---

## ✅ CHECKLIST

Sebelum launch, pastikan:

- [ ] Ganti nomor WhatsApp dengan nomor asli
- [ ] Update link Google Maps dengan lokasi sebenarnya
- [ ] Upload gambar produk/wisata asli (800x600px)
- [ ] Edit deskripsi sesuai kondisi asli
- [ ] Test di browser (Chrome, Firefox, Safari)
- [ ] Test di mobile device
- [ ] Test tombol WhatsApp dan Maps berfungsi

---

**🎊 SELAMAT! Website sudah siap dengan fitur modal interaktif!**

Untuk pertanyaan, lihat dokumentasi di atas atau hubungi tim developer.

*Dibuat untuk Desa Lematang 🏡*
