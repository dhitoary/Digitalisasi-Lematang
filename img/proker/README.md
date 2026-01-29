# Struktur Folder Gambar Program Kerja

## Cara Penggunaan

Setiap folder proker berisi gambar-gambar untuk program kerja masing-masing:

### Struktur Folder:
```
img/proker/
├── budidamber/          # Budidaya Ikan dalam Ember
├── nobar-film/          # Nobar Film Anti Judi Online
├── cek-diabetes/        # Cek Kesehatan Gratis Lansia
├── digitalisasi/        # Digitalisasi Website Desa
├── umkm-qris/          # Digitalisasi UMKM (QRIS & Mapping)
├── anti-bullying/       # Edukasi Anti-Bullying
└── sabun-pisang/        # Pembuatan Sabun dari Kulit Pisang
```

### Format Penamaan File:

**Gambar Utama (Hero Image):**
- `hero.jpg` - Gambar utama yang ditampilkan di hero section

**Gambar Dokumentasi:**
- `1.jpg`, `2.jpg`, `3.jpg`, dst. - Gambar dokumentasi kegiatan
- Gunakan nomor urut untuk memudahkan pengelolaan

**Contoh:**
```
img/proker/budidamber/
├── hero.jpg
├── 1.jpg
├── 2.jpg
├── 3.jpg
├── 4.jpg
└── 5.jpg
```

### Update Path di JavaScript:

Setelah menambahkan gambar, path akan otomatis mengikuti struktur:
- Hero image: `img/proker/[nama-proker]/hero.jpg`
- Dokumentasi: `img/proker/[nama-proker]/1.jpg`, `2.jpg`, dst.

File `proker-detail.js` akan membaca gambar dari folder masing-masing proker.
