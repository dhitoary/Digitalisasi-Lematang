# Website Profil Desa Lematang

Website profil resmi Kelurahan Lematang, Kecamatan Tanjung Bintang, Kabupaten Lampung Selatan. Website ini dibuat sebagai bagian dari program digitalisasi desa untuk meningkatkan transparansi dan pelayanan publik kepada masyarakat.

## 📋 Fitur Website

### Halaman yang Tersedia:
1. **Beranda (index.html)**
   - Sejarah Desa Lematang (berdiri sejak 1909)
   - Informasi singkat tentang desa
   - Quick links ke halaman lainnya

2. **Profil Desa (profil.html)**
   - Letak geografis dan batas wilayah
   - Data wilayah dusun (8 dusun)
   - Luas wilayah per kategori
   - Orbitasi (jarak dengan pusat kegiatan)
   - Data kependudukan dan demografi

3. **Pemerintahan (pemerintahan.html)**
   - Kepemimpinan saat ini
   - Struktur organisasi pemerintahan desa
   - Sejarah kepala desa dari masa ke masa
   - Visi dan misi pemerintahan

4. **Lembaga Desa (lembaga.html)**
   - Badan Permusyawaratan Desa (BPD)
   - Pemberdayaan Kesejahteraan Keluarga (PKK)
   - Karang Taruna
   - RT/RW
   - Lembaga dan organisasi lainnya

5. **Pariwisata & UMKM (pariwisata.html)**
   - Potensi pariwisata desa
   - Kategori UMKM lokal
   - Daftar UMKM unggulan
   - Informasi pusat ekonomi dan perdagangan

6. **Penghargaan (penghargaan.html)**
   - Daftar penghargaan yang diraih
   - Kategori prestasi
   - Timeline penghargaan
   - Statistik pencapaian

## 🛠️ Teknologi yang Digunakan

- **HTML5** - Struktur website
- **CSS3** - Styling dan desain responsif
- **JavaScript** - Interaktivitas dan animasi
- **Responsive Design** - Dapat diakses dari berbagai perangkat

## 📁 Struktur Folder

```
Digitalisasi-Lematang/
│
├── index.html              # Halaman beranda
├── profil.html            # Halaman profil desa
├── pemerintahan.html      # Halaman pemerintahan
├── lembaga.html           # Halaman lembaga desa
├── pariwisata.html        # Halaman pariwisata & UMKM
├── penghargaan.html       # Halaman penghargaan
│
├── css/
│   └── style.css          # File CSS utama
│
├── js/
│   └── script.js          # File JavaScript utama
│
└── README.md              # Dokumentasi
```

## 🚀 Cara Menggunakan

### Metode 1: Buka Langsung di Browser
1. Download atau clone repository ini
2. Buka file `index.html` dengan browser (Chrome, Firefox, Edge, dll)
3. Website akan langsung berjalan tanpa perlu server

### Metode 2: Menggunakan Local Server
1. Buka terminal/command prompt di folder project
2. Jalankan server lokal:
   ```bash
   # Menggunakan Python 3
   python -m http.server 8000
   
   # Atau menggunakan PHP
   php -S localhost:8000
   
   # Atau menggunakan Node.js (http-server)
   npx http-server
   ```
3. Buka browser dan akses `http://localhost:8000`

## 📱 Fitur Responsif

Website ini dirancang responsive dan dapat diakses dengan baik melalui:
- 💻 Desktop (1200px+)
- 💼 Laptop (992px - 1199px)
- 📱 Tablet (768px - 991px)
- 📱 Mobile (< 768px)

## ✨ Fitur JavaScript

- **Mobile Navigation** - Menu hamburger untuk tampilan mobile
- **Smooth Scrolling** - Navigasi halus antar section
- **Scroll Animation** - Animasi saat scroll
- **Back to Top Button** - Tombol kembali ke atas
- **Counter Animation** - Animasi angka statistik
- **Lazy Loading** - Loading gambar yang optimal

## 🎨 Customization

### Mengubah Warna
Edit file `css/style.css` pada bagian `:root`:
```css
:root {
    --primary-color: #2c5f2d;      /* Warna hijau utama */
    --secondary-color: #97bc62;    /* Warna hijau sekunder */
    --accent-color: #ffd700;       /* Warna aksen (emas) */
}
```

### Menambahkan Logo
1. Simpan logo di folder `images/logo.png`
2. Tambahkan di navbar:
```html
<div class="nav-brand">
    <img src="images/logo.png" alt="Logo" style="height: 40px;">
    <h2>Kelurahan Lematang</h2>
</div>
```

### Menambahkan Foto
Untuk menambahkan foto Kepala Desa, UMKM, atau foto lainnya:
1. Simpan foto di folder `images/`
2. Ganti `<div class="photo-placeholder">👤</div>` dengan:
```html
<img src="images/nama-foto.jpg" alt="Deskripsi">
```

## 📝 Data yang Dapat Disesuaikan

### Data yang Sudah Terisi:
- ✅ Sejarah Desa Lematang
- ✅ Data geografis dan batas wilayah
- ✅ Data wilayah dusun (8 dusun dengan RT)
- ✅ Luas wilayah per kategori
- ✅ Data kependudukan tahun 2020
- ✅ Sejarah Kepala Desa
- ✅ Struktur organisasi pemerintahan

### Data yang Perlu Dilengkapi:
- ⚠️ Foto Kepala Desa dan Aparatur
- ⚠️ Nama lengkap aparatur desa (Kaur, Kasi, Kadus)
- ⚠️ Penghargaan spesifik yang pernah diraih
- ⚠️ Daftar UMKM dengan kontak lengkap
- ⚠️ Foto potensi pariwisata
- ⚠️ Informasi pasar dan hari pasar

## 🔐 Keamanan

Website ini bersifat **statis** dan tidak menggunakan database. Untuk menambahkan fitur:
- Form kontak → Gunakan layanan seperti Formspree atau EmailJS
- Database → Perlu menambahkan backend (PHP, Node.js, dll)
- Login admin → Perlu implementasi backend dan database

## 🌐 Deployment

Website dapat di-deploy ke:
1. **GitHub Pages** (Gratis)
   - Push code ke GitHub
   - Aktifkan GitHub Pages di Settings
   
2. **Netlify** (Gratis)
   - Drag & drop folder ke Netlify
   
3. **Vercel** (Gratis)
   - Import dari GitHub atau upload manual

4. **Hosting Tradisional**
   - Upload semua file via FTP
   - Arahkan domain ke folder website

## 📞 Kontak

**Kelurahan Lematang**
- Alamat: Jl. Ir. Sutami Km 11, Kecamatan Tanjung Bintang, Lampung Selatan
- Jam Pelayanan: Senin-Jumat (08:00-16:00), Sabtu (08:00-12:00)

## 📄 Lisensi

Website ini dibuat untuk Kelurahan Lematang sebagai bagian dari program KKN UNILA - Digitalisasi Lematang.

## 🙏 Kontributor

- **Program**: KKN UNILA - Digitalisasi Lematang
- **Kelurahan**: Kelurahan Lematang, Kecamatan Tanjung Bintang
- **Tahun**: 2026

## 📝 Catatan Pengembangan

Website ini dapat terus dikembangkan dengan menambahkan fitur:
- [ ] Form pengajuan surat online
- [ ] Sistem pengaduan masyarakat
- [ ] Galeri foto dan video
- [ ] Berita dan pengumuman desa
- [ ] Informasi cuaca dan tanaman
- [ ] Integrasi dengan e-Government
- [ ] Sistem informasi layanan administrasi

---

**Dibuat dengan ❤️ untuk Kelurahan Lematang**