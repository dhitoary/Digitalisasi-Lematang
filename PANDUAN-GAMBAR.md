# Panduan Struktur Gambar Website Desa Lematang

## Struktur Folder

```
img/
├── proker/              # Gambar Program Kerja
│   ├── budidamber/
│   │   ├── hero.jpg     # Gambar utama (ditampilkan di hero section)
│   │   ├── 1.jpg        # Dokumentasi 1
│   │   ├── 2.jpg        # Dokumentasi 2
│   │   └── ...          # dst (maksimal 6 gambar dokumentasi)
│   ├── nobar-film/
│   ├── cek-diabetes/
│   ├── digitalisasi/
│   ├── umkm-qris/
│   ├── anti-bullying/
│   └── sabun-pisang/
│
├── team/                # Foto Tim KKN
│   ├── dhito.jpg
│   ├── dimas.jpg
│   ├── yotri.jpg
│   └── ...              # Nama file: nama panggilan (lowercase)
│
├── galeri/              # Galeri Kegiatan Desa
│   ├── 1.jpg
│   ├── 2.jpg
│   └── ...              # Numbered sequence atau nama deskriptif
│
├── aparatur/            # Foto Aparatur Desa
│   ├── kepala-desa.jpg
│   ├── sekretaris-desa.jpg
│   ├── kaur-keuangan.jpg
│   └── ...              # Nama jabatan (lowercase, pisah dengan dash)
│
├── desa1.jpg            # Gambar legacy (bisa dihapus setelah migrasi)
├── desa2.jpg
├── desa3.jpg
└── logo.png             # Logo desa
```

## Penggunaan di Website

### 1. Program Kerja (Detail Proker)

**Lokasi:** `img/proker/[nama-proker]/`

**File yang dibutuhkan:**
- `hero.jpg` - Gambar utama ditampilkan di hero section
- `1.jpg` sampai `6.jpg` - Gambar dokumentasi kegiatan

**Penamaan folder proker:**
- budidamber
- nobar-film
- cek-diabetes
- digitalisasi
- umkm-qris
- anti-bullying
- sabun-pisang

**Cara kerja:**
- JavaScript otomatis mengambil gambar dari folder sesuai ID proker
- Jika gambar tidak ada, akan di-hide otomatis (tidak error)

### 2. Tim KKN

**Lokasi:** `img/team/`

**Format nama file:** `[nama-panggilan].jpg` (lowercase)

**Contoh:**
```
dhito.jpg
dimas.jpg
yotri.jpg
redho.jpg
lusi.jpg
```

**Cara kerja:**
- JavaScript otomatis mengambil foto berdasarkan nama panggilan
- Jika foto tidak ada, akan tampil icon default

### 3. Galeri Desa

**Lokasi:** `img/galeri/`

**Format:**
- Numbered: `1.jpg`, `2.jpg`, `3.jpg`, dst.
- Atau deskriptif: `posyandu.jpg`, `gotong-royong.jpg`, dst.

**Catatan:** Saat ini galeri.html masih menggunakan path lama. Akan diupdate nanti.

### 4. Aparatur Desa

**Lokasi:** `img/aparatur/`

**Format nama file:** `[jabatan].jpg` (lowercase, pisah dengan dash)

**Contoh:**
```
kepala-desa.jpg
sekretaris-desa.jpg
kaur-keuangan.jpg
kasi-pemerintahan.jpg
```

## Spesifikasi Gambar

### Hero Images (Program Kerja)
- Dimensi: 1200x600px (rasio 2:1)
- Format: JPG
- Ukuran file: Max 500KB
- Kualitas: 80-90%

### Dokumentasi
- Dimensi: 800x600px atau 1024x768px
- Format: JPG
- Ukuran file: Max 300KB per gambar

### Foto Tim & Aparatur
- Dimensi: 400x400px (rasio 1:1)
- Format: JPG
- Background: Polos/formal
- Ukuran file: Max 200KB

### Logo
- Format: PNG (transparant background)
- Dimensi: 200x200px

## Update yang Sudah Dilakukan

✅ proker-detail.js - Path gambar hero menggunakan `img/proker/[nama-proker]/hero.jpg`
✅ proker-detail.js - Galeri dokumentasi dinamis `img/proker/[nama-proker]/1.jpg-6.jpg`
✅ proker-detail.js - Foto tim menggunakan `img/team/[nama].jpg`
✅ proker-detail.html - Gallery container dibuat dinamis

## Yang Perlu Diupdate Nanti

⏳ galeri.html - Update path dari `img/desa1.jpg` ke `img/galeri/1.jpg`
⏳ pemerintahan.html - Update foto aparatur ke `img/aparatur/`
⏳ index.html - Update hero images jika ada

## Cara Menambah Gambar Baru

1. **Untuk Program Kerja Baru:**
   - Buat folder baru di `img/proker/[nama-proker]/`
   - Masukkan `hero.jpg` dan dokumentasi `1.jpg` - `6.jpg`
   - Tambahkan data program di `js/proker-detail.js`

2. **Untuk Anggota Tim Baru:**
   - Save foto dengan nama panggilan: `img/team/[nama].jpg`
   - Tambahkan data di `teamMembers` object di `js/proker-detail.js`

3. **Untuk Galeri Desa:**
   - Upload ke `img/galeri/` dengan nomor urut atau nama deskriptif
   - Update galeri.html (manual untuk sekarang)

4. **Untuk Aparatur Baru:**
   - Save foto: `img/aparatur/[jabatan].jpg`
   - Update pemerintahan.html
