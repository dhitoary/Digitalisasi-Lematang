# Panduan Modal UMKM dan Pariwisata

## Fitur yang Ditambahkan

Website Desa Lematang sekarang memiliki fitur modal popup untuk:
1. **Produk UMKM** - Menampilkan detail produk dengan tombol WhatsApp untuk pemesanan
2. **Destinasi Wisata** - Menampilkan informasi wisata dengan tombol Google Maps untuk lokasi

## Cara Kerja

### Modal UMKM
- Klik pada card produk UMKM untuk membuka popup detail
- Popup menampilkan:
  - Foto produk
  - Nama produk
  - Deskripsi lengkap
  - Tombol **Lokasi** (link ke Google Maps)
  - Tombol **Beli** (link ke WhatsApp penjual)

### Modal Pariwisata
- Klik pada card destinasi wisata untuk membuka popup detail
- Popup menampilkan:
  - Foto wisata
  - Nama destinasi
  - Deskripsi lengkap
  - Tombol **Lihat Lokasi** (link ke Google Maps)
  - Tombol **Hubungi** (link ke WhatsApp pengelola)

## Cara Mengatur Data

### Mengedit Data UMKM

Buka file `js/script.js` dan cari bagian `umkmData`. Edit data sesuai kebutuhan:

```javascript
umkm1: {
  title: "KERIPIK PISANG",
  description: "KERIPIK PISANG KEPOK ASLI GURIH TANPA BAHAN PENGAWET",
  image: "img/keripik-pisang.jpg", // Path gambar produk
  phone: "6281234567890", // Format: 62 + nomor tanpa 0
  location: "https://maps.google.com/?q=-5.4,105.3", // Link Google Maps
  message: "Halo, saya tertarik dengan Keripik Pisang...", // Pesan WhatsApp
},
```

### Mengedit Data Wisata

Buka file `js/script.js` dan cari bagian `tourismData`. Edit data sesuai kebutuhan:

```javascript
wisata1: {
  title: "WISATA PERTANIAN LEMATANG",
  description: "Nikmati pengalaman berwisata di area pertanian...",
  image: "img/wisata-pertanian.jpg",
  location: "https://maps.google.com/?q=-5.4,105.3",
  phone: "6281234567893",
  message: "Halo, saya ingin informasi tentang Wisata...",
},
```

## Cara Mendapatkan Link Google Maps

1. Buka Google Maps di browser
2. Cari lokasi yang diinginkan
3. Klik "Share" atau "Bagikan"
4. Pilih "Copy link"
5. Paste link tersebut ke field `location`

Atau gunakan format koordinat:
```
https://maps.google.com/?q=[LATITUDE],[LONGITUDE]
```
Contoh: `https://maps.google.com/?q=-5.4,105.3`

## Format Nomor WhatsApp

Format nomor harus: `62` + nomor tanpa 0 di depan

Contoh:
- Nomor: 0812-3456-7890
- Format: 6281234567890

## Menambah Produk/Wisata Baru

1. **Tambah data di JavaScript:**
   - Buka `js/script.js`
   - Tambahkan entry baru di `umkmData` atau `tourismData`

2. **Tambah card di HTML:**
   - Buka `pariwisata.html`
   - Copy salah satu card yang ada
   - Ubah `onclick="openUMKMModal('umkm1')"` menjadi ID baru (umkm4, umkm5, dll)

3. **Siapkan gambar:**
   - Upload gambar produk/wisata ke folder `img/`
   - Ukuran rekomendasi: 800x600px
   - Format: JPG atau PNG

## Menutup Modal

Pengguna bisa menutup modal dengan:
- Klik tombol X di pojok kanan atas
- Klik di luar area modal (area gelap)
- Tekan tombol ESC di keyboard

## Responsive Design

Modal sudah responsif dan akan menyesuaikan tampilan di:
- Desktop (lebar penuh)
- Tablet (90% lebar)
- Mobile (95% lebar, tombol vertikal)

## Tips Penggunaan

1. **Gambar:** Gunakan gambar berkualitas tinggi dengan rasio 4:3 atau 16:9
2. **Deskripsi:** Buat deskripsi singkat tapi informatif (max 150 karakter)
3. **Nomor WA:** Pastikan nomor WhatsApp aktif dan bisa menerima pesan
4. **Lokasi Maps:** Test link Google Maps sebelum dipublikasikan
5. **Pesan WA:** Buat template pesan yang jelas agar penjual/pengelola paham konteksnya

## File yang Dimodifikasi

- `pariwisata.html` - Struktur HTML modal dan card yang clickable
- `css/components/modal.css` - Styling modal (NEW)
- `css/style.css` - Import modal.css
- `js/script.js` - Fungsi modal dan data produk/wisata

## Support

Untuk pertanyaan atau bantuan, hubungi tim pengembang website Desa Lematang.
