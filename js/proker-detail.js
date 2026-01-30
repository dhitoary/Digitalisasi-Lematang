// Get program ID from URL
const urlParams = new URLSearchParams(window.location.search);
const programId = urlParams.get("id");

// Team members data with full information
const teamMembers = {
  "Redho": { name: "Muhammad Redho Zickrie", nim: "2314111034", major: "Budidaya Perairan" },
  "Dhito": { name: "Dhito Aryo Trengginas", nim: "2315061015", major: "Teknik Informatika" },
  "Joyce": { name: "Joyce Caecilia Manullang", nim: "2318011108", major: "Kedokteran" },
  "Lusi": { name: "Lusi Nagita Gultom", nim: "2317011077", major: "Kimia" },
  "Marsha": { name: "Marsha Adelia M", nim: "2312011376", major: "Ilmu Hukum" },
  "Reva": { name: "Reva Agustina", nim: "2311031037", major: "Akuntansi" },
  "Rio": { name: "Okta Rio Romadan", nim: "2312011520", major: "Ilmu Hukum" },
  "Tata": { name: "Dharma Lina Lestari", nim: "2358011016", major: "Kedokteran" },
  "Reza": { name: "Muhammad Reza Syah Pahlevi", nim: "2316021023", major: "Ilmu Pemerintahan" },
  "Adel": { name: "Ukhta Fadela R", nim: "2318011093", major: "Kedokteran" },
  "Yotri": { name: "Komang Yotri Sagita", nim: "2351012012", major: "Bisnis Digital" },
  "Dimas": { name: "Dimas Eka Putra Santoso", nim: "2315061114", major: "Teknik Informatika" },
  "Lala": { name: "Nurmala Iksan Putri", nim: "2316021045", major: "Ilmu Pemerintahan" },
  "Alkhan": { name: "Muhammad Alkhan", nim: "2356041045", major: "Administrasi Negara" },
  "Jizdan": { name: "Kms Muhammad Jizdan Hafidzh", nim: "2256051043", major: "Administrasi Bisnis" },
};

// Program data (In real implementation, this could be fetched from a database)
const programData = {
  budidamber: {
    title: "Budidaya Ikan dalam Ember (Budikdamber)",
    date: "25 Januari 2026",
    team: "Redho, Jizdan, Rio",
    image: "img/proker/budidamber/hero.jpg",
    description:
      "Inovasi budidaya ikan lele dengan sistem aquaponik untuk memperkuat ketahanan pangan dan ekonomi warga desa",
    background: "Program Budikdamber merupakan inovasi budidaya yang menggabungkan pemeliharaan ikan lele dengan penanaman tanaman secara aquaponik. Metode ini menggunakan feses ikan sebagai nutrisi alami untuk tanaman, menciptakan sistem simbiosis mutualisme yang efisien dan ramah lingkungan.",
    objectives: [
      "Memperkuat ketahanan pangan masyarakat desa",
      "Membudidayakan ikan lele dan tanaman secara bersamaan",
      "Membantu ekonomi warga melalui hasil budidamber",
      "Memanfaatkan lahan terbatas secara optimal"
    ],
    results: "Program berhasil memperkenalkan metode budidaya modern kepada warga. Ikan menunjukkan pertumbuhan normal dan aktif, sementara tanaman tumbuh sehat dan hijau. Sistem ini dapat menjadi solusi ketahanan pangan dan tambahan ekonomi keluarga dengan memanfaatkan ruang terbatas."
  },
  "nobar-film": {
    title: "Nobar Film: Bahaya Judi Online & Human Trafficking",
    date: "17 Januari 2026",
    team: "Rio, Marsha, Reza",
    image: "img/proker/nobar-film/hero.jpg",
    description:
      "Penyuluhan edukatif melalui pemutaran film 'No More Bets' untuk meningkatkan kesadaran pemuda terhadap bahaya judi online dan human trafficking",
    background: "Kegiatan edukatif berbasis pemutaran film 'No More Bets (2023)' yang bertujuan meningkatkan kesadaran pemuda-pemudi Desa Lematang tentang bahaya judi online, pinjaman ilegal, lowongan kerja luar negeri ilegal, dan human trafficking melalui metode yang menarik dan mudah dipahami.",
    objectives: [
      "Meningkatkan pemahaman tentang bahaya judi online",
      "Membangun kesadaran kritis terhadap modus penipuan",
      "Mencegah kesalahpahaman melalui diskusi",
      "Mendorong sikap preventif menghadapi tawaran berisiko"
    ],
    results: "Kegiatan diikuti dengan antusias oleh pemuda-pemudi desa. Peserta mampu menjelaskan bahaya yang disampaikan dalam film dan menunjukkan kesadaran untuk lebih waspada terhadap tawaran judi online, pinjaman ilegal, dan lowongan kerja mencurigakan."
  },
  "cek-diabetes": {
    title: "Cek Kesehatan Gratis Lansia - Posyandu Lubuk Bais",
    date: "16 Januari 2026",
    team: "Adel, Tata, Joyce",
    image: "img/proker/cek-diabetes/hero.jpg",
    description:
      "Kegiatan pemeriksaan kesehatan gratis untuk lansia sebagai upaya deteksi dini risiko penyakit pada lansia Desa Lematang",
    background: "Kegiatan pemeriksaan kesehatan gratis di Posyandu Lubuk Bais sebagai upaya deteksi dini risiko penyakit kronis, khususnya diabetes pada lansia. Melalui pemeriksaan sederhana dan edukasi kesehatan, program ini meningkatkan kesadaran masyarakat terhadap pentingnya pemantauan kesehatan rutin.",
    objectives: [
      "Menyediakan fasilitas pemeriksaan kesehatan gratis",
      "Mengetahui risiko penyakit diabetes melalui pemeriksaan",
      "Meningkatkan kesadaran pola hidup sehat",
      "Mencegah komplikasi penyakit melalui edukasi dini"
    ],
    results: "Kegiatan berjalan lancar dengan partisipasi aktif lansia Desa Lematang. Pemeriksaan kesehatan berhasil mendeteksi beberapa risiko kesehatan yang memerlukan monitoring lanjutan. Lansia mendapat edukasi tentang pola hidup sehat dan pentingnya kontrol kesehatan rutin untuk mencegah komplikasi penyakit."
  },
  digitalisasi: {
    title: "Digitalisasi Website Desa Lematang",
    date: "15 - 26 Januari 2026",
    team: "Dhito, Dimas, Yotri",
    image: "img/proker/digitalisasi/hero.jpg",
    description:
      "Pengembangan website profil desa untuk meningkatkan transparansi informasi publik dan mempromosikan potensi pariwisata serta UMKM Desa Lematang",
    background: "Program digitalisasi melalui pembuatan website profil desa berbasis teknologi modern yang memuat informasi lengkap tentang profil, sejarah, struktur organisasi, galeri kegiatan, potensi pariwisata, dan direktori UMKM. Website dirancang responsif dan mudah diakses untuk menjadi wajah digital resmi Desa Lematang.",
    objectives: [
      "Meningkatkan transparansi informasi publik desa",
      "Mempromosikan potensi pariwisata dan UMKM lokal",
      "Menyediakan akses mudah ke data profil dan struktur desa",
      "Mendokumentasikan program kerja dan kegiatan desa",
      "Meningkatkan citra modern Desa Lematang di era digital"
    ],
    results: "Website Desa Lematang berhasil diluncurkan dengan 8 halaman utama meliputi beranda, profil desa, pemerintahan, lembaga, pariwisata & UMKM, dan galeri. Website dibangun dengan desain modern dan responsif, mudah diakses dari berbagai perangkat. Platform ini berhasil meningkatkan transparansi informasi desa dan menjadi rujukan digital untuk promosi potensi lokal Desa Lematang."
  },
  "umkm-qris": {
    title: "Digitalisasi Ekosistem UMKM (QRIS & Mapping)",
    date: "20 Januari 2026",
    team: "Dimas, Yotri, Reva, Dhito",
    image: "img/proker/umkm-qris/hero.jpg",
    description:
      "Pendampingan UMKM untuk beralih ke transaksi nontunai menggunakan QRIS dan digital mapping lokasi usaha di Google Maps",
    background: "Program pendampingan UMKM untuk beralih ke transaksi digital menggunakan QR Code (QRIS) serta melakukan pemetaan digital lokasi usaha pada Google Maps untuk meningkatkan aksesibilitas konsumen dan modernisasi sistem pembayaran.",
    objectives: [
      "Mempercepat digitalisasi keuangan desa",
      "Meningkatkan visibilitas lokasi UMKM di pencarian digital",
      "Membantu pencatatan keuangan yang lebih rapi",
      "Memudahkan akses wisatawan ke lokasi UMKM"
    ],
    results: "UMKM Desa Lematang berhasil didampingi untuk mulai menggunakan QRIS dalam transaksi sehari-hari, memudahkan pembeli yang tidak membawa uang tunai. Lokasi usaha juga sudah terdaftar di Google Maps, jadi lebih gampang ditemukan pembeli atau wisatawan yang lewat. Pemilik usaha juga dapat pencerahan tentang cara kelola uang digital yang lebih teratur."
  },
  "anti-bullying": {
    title: "Edukasi Anti-Bullying di SDN 2 Lematang",
    date: "14, 21, 28 Januari 2026",
    team: "Marsha, Lala, Reva, Alkhan",
    image: "img/proker/anti-bullying/hero.jpg",
    description:
      "Sosialisasi interaktif untuk meningkatkan pemahaman siswa SD mengenai bullying dan membangun generasi yang saling menghargai",
    background: "Kegiatan edukatif untuk meningkatkan pemahaman siswa SDN 2 Lematang mengenai bullying dan dampaknya. Program ini berupa sosialisasi interaktif dilanjutkan dengan pendekatan reflektif melalui metode blank paper, memberikan ruang aman bagi siswa untuk mengekspresikan pengalaman.",
    objectives: [
      "Menumbuhkan kesadaran dan sikap saling menghargai",
      "Memberikan ruang aman untuk ekspresikan perasaan",
      "Meningkatkan empati dan kepedulian siswa",
      "Mencegah perilaku bullying di lingkungan sekolah"
    ],
    results: "Kegiatan diikuti oleh ratusan siswa SDN 2 Lematang dengan antusias. Melalui sosialisasi interaktif dan metode blank paper, siswa menunjukkan peningkatan pemahaman tentang bullying dan dampaknya. Siswa lebih terbuka untuk berbagi pengalaman dan berkomitmen menciptakan lingkungan sekolah yang saling menghargai."
  },
  "sabun-pisang": {
    title: "Pembuatan Sabun Cuci Piring dari Limbah Kulit Pisang",
    date: "20 Januari 2026",
    team: "Lusi, Jizdan, Lala",
    image: "img/proker/sabun-pisang/hero.jpg",
    description:
      "Pelatihan pembuatan sabun cuci piring ramah lingkungan dari limbah kulit pisang untuk meningkatkan keterampilan masyarakat",
    background: "Program pelatihan pembuatan sabun cuci piring dari limbah kulit pisang yang bertujuan mengurangi limbah rumah tangga sekaligus menghasilkan produk bermanfaat. Sabun dibuat menggunakan texapon, kulit pisang, jeruk nipis, pewarna makanan, dan garam dengan metode sederhana.",
    objectives: [
      "Mengurangi limbah rumah tangga (kulit pisang)",
      "Meningkatkan keterampilan membuat produk mandiri",
      "Menghasilkan sabun cuci piring ramah lingkungan",
      "Meningkatkan kesadaran pengelolaan limbah"
    ],
    results: "Pelatihan berjalan lancar dengan partisipasi aktif warga. Peserta berhasil membuat sabun cuci piring dari kulit pisang dengan formula sederhana. Produk yang dihasilkan memiliki aroma segar dan efektif membersihkan. Program ini meningkatkan kesadaran tentang pemanfaatan limbah organik dan keterampilan produksi mandiri."
  },
};

// Load program data if ID exists
if (programId && programData[programId]) {
  const program = programData[programId];
  document.getElementById("articleTitle").textContent = program.title;
  document.getElementById("programTitle").textContent = program.title;
  document.getElementById("articleDate").textContent = program.date;
  document.getElementById("articleTeam").textContent = program.team;
  document.getElementById("heroImage").src = program.image;
  document.title = program.title + " - Desa Lematang";

  // Update meta tags
  document.querySelector('meta[property="og:title"]').content =
    program.title + " - KKN Desa Lematang";
  document.querySelector('meta[name="description"]').content =
    "Detail program " + program.title + " KKN UNILA di Desa Lematang";
  
  // Update content sections
  updateContentSections(program);
  
  // Update gallery section dynamically
  updateGallerySection(programId);
  
  // Update team section dynamically
  updateTeamSection(program.team);
}

// Function to update content sections
function updateContentSections(program) {
  // Update background section
  const backgroundP = document.getElementById('programBackground');
  if (backgroundP && program.background) {
    backgroundP.textContent = program.background;
  }
  
  // Update objectives list
  const objectivesList = document.querySelector('#programObjectives');
  if (objectivesList && program.objectives) {
    objectivesList.innerHTML = '';
    program.objectives.forEach(objective => {
      const li = document.createElement('li');
      li.textContent = objective;
      objectivesList.appendChild(li);
    });
  }
  
  // Update results section
  const resultsP = document.getElementById('programResults');
  if (resultsP && program.results) {
    resultsP.textContent = program.results;
  }
}

// Function to update gallery section dynamically
function updateGallerySection(programId) {
  const galleryContainer = document.querySelector('.article-gallery');
  if (!galleryContainer) return;
  
  // Clear existing gallery
  galleryContainer.innerHTML = '';
  
  // Create gallery images (assuming 6 images per program: 1.jpg to 6.jpg)
  const imageCount = 6;
  for (let i = 1; i <= imageCount; i++) {
    const imgPath = `img/proker/${programId}/${i}.jpg`;
    const img = document.createElement('img');
    img.src = imgPath;
    img.alt = `Dokumentasi ${i}`;
    img.onclick = function() { openLightbox(imgPath); };
    
    // Hide image if it doesn't exist (404 error)
    img.onerror = function() { this.style.display = 'none'; };
    
    galleryContainer.appendChild(img);
  }
}

// Function to shorten long names
function shortenName(fullName) {
  // Split name into parts
  const parts = fullName.split(' ');
  
  // If name has 2 words or less, return as is
  if (parts.length <= 2) {
    return fullName;
  }
  
  // Process each part
  const shortened = parts.map((part, index) => {
    // If it's "Muhammad", shorten to "M."
    if (part.toLowerCase() === 'muhammad') {
      return 'M.';
    }
    // If it's the last part, shorten to initial with dot
    if (index === parts.length - 1) {
      return part.charAt(0).toUpperCase() + '.';
    }
    // Keep all other parts full (first, middle, etc)
    return part;
  });
  
  return shortened.join(' ');
}

// Function to update team section
function updateTeamSection(teamString) {
  const teamGrid = document.querySelector('.team-grid');
  if (!teamGrid) return;
  
  const memberNames = teamString.split(',').map(name => name.trim());
  teamGrid.innerHTML = '';
  
  memberNames.forEach(nickname => {
    const memberData = teamMembers[nickname];
    if (memberData) {
      const teamMemberDiv = document.createElement('div');
      teamMemberDiv.className = 'team-member';
      const displayName = shortenName(memberData.name);
      teamMemberDiv.innerHTML = `
        <div class="team-member-avatar">
          <img src="img/team/${nickname.toLowerCase()}.png" alt="${displayName}" onerror="this.parentElement.querySelector('.fas').style.display='block'" />
          <i class="fas fa-user" style="display: none;"></i>
        </div>
        <h4>${displayName}</h4>
        <p class="team-nim">${memberData.nim}</p>
        <p class="team-major">${memberData.major}</p>
      `;
      teamGrid.appendChild(teamMemberDiv);
    }
  });
}

// Lightbox Functions
function openLightbox(imageSrc) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  lightboxImg.src = imageSrc;
  lightbox.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  lightbox.classList.remove("active");
  document.body.style.overflow = "auto";
}

// Close lightbox with Escape key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeLightbox();
  }
});

// Share Functions
function shareToFacebook() {
  const url = encodeURIComponent(window.location.href);
  window.open(
    "https://www.facebook.com/sharer/sharer.php?u=" + url,
    "_blank",
    "width=600,height=400",
  );
}

function shareToTwitter() {
  const url = encodeURIComponent(window.location.href);
  const title = encodeURIComponent(
    document.getElementById("articleTitle").textContent,
  );
  window.open(
    "https://twitter.com/intent/tweet?url=" + url + "&text=" + title,
    "_blank",
    "width=600,height=400",
  );
}

function shareToWhatsApp() {
  const url = encodeURIComponent(window.location.href);
  const title = encodeURIComponent(
    document.getElementById("articleTitle").textContent,
  );
  window.open("https://wa.me/?text=" + title + "%20" + url, "_blank");
}

function shareToTelegram() {
  const url = encodeURIComponent(window.location.href);
  const title = encodeURIComponent(
    document.getElementById("articleTitle").textContent,
  );
  window.open("https://t.me/share/url?url=" + url + "&text=" + title, "_blank");
}
