// Get program ID from URL
const urlParams = new URLSearchParams(window.location.search);
const programId = urlParams.get("id");

// Team members data with full information
const teamMembers = {
  Redho: {
    name: "Muhammad Redho Zickrie",
    nim: "2314111034",
    major: "Budidaya Perairan",
  },
  Dhito: {
    name: "Dhito Aryo Trengginas",
    nim: "2315061015",
    major: "Teknik Informatika",
  },
  Joyce: {
    name: "Joyce Caecilia Manullang",
    nim: "2318011108",
    major: "Kedokteran",
  },
  Lusi: { name: "Lusi Nagita Gultom", nim: "2317011077", major: "Kimia" },
  Marsha: { name: "Marsha Adelia M", nim: "2312011376", major: "Ilmu Hukum" },
  Reva: { name: "Reva Agustina", nim: "2311031037", major: "Akuntansi" },
  Rio: { name: "Okta Rio Romadan", nim: "2312011520", major: "Ilmu Hukum" },
  Tata: { name: "Dharma Lina Lestari", nim: "2358011016", major: "Kedokteran" },
  Reza: {
    name: "Muhammad Reza Syah Pahlevi",
    nim: "2316021023",
    major: "Ilmu Pemerintahan",
  },
  Adel: { name: "Ukhta Fadela R", nim: "2318011093", major: "Kedokteran" },
  Yotri: {
    name: "Komang Yotri Sagita",
    nim: "2351012012",
    major: "Bisnis Digital",
  },
  Dimas: {
    name: "Dimas Eka Putra Santoso",
    nim: "2315061114",
    major: "Teknik Informatika",
  },
  Lala: {
    name: "Nurmala Iksan Putri",
    nim: "2316021045",
    major: "Ilmu Pemerintahan",
  },
  Alkhan: {
    name: "Muhammad Alkhan",
    nim: "2356041045",
    major: "Administrasi Negara",
  },
  Jizdan: {
    name: "Kms Muhammad Jizdan Hafidzh",
    nim: "2256051043",
    major: "Administrasi Bisnis",
  },
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
    background:
      "Budikdamber (Budidaya Ikan Dalam Ember) adalah metode budidaya ikan yang dilakukan dalam wadah ember dengan memanfaatkan sistem sederhana dan hemat lahan, biasanya dikombinasikan dengan penanaman sayuran di bagian atasnya (akuaponik mini). Tanaman pada budikdamber berfungsi sebagai penyerap nutrien dari sisa pakan dan kotoran ikan, sehingga membantu menjaga kualitas air. Tanaman yang umum digunakan antara lain kangkung dan pacoy karena mudah tumbuh, cepat panen, dan akarnya mampu hidup di air.",
    objectives: [
      "Memanfaatkan limbah ikan sebagai nutrisi tanaman",
      "Menghasilkan ikan dan sayuran secara bersamaan",
      "Menghemat air, lahan, dan biaya produksi",
    ],
    results:
      "Sistem aquaponik ini berhasil menghasilkan ikan konsumsi (lele) dan tanaman sayur (kangkung dan pacoy) secara bersamaan dengan kualitas air yang lebih stabil karena terjaga siklus nutrisinya. Pertumbuhan ikan dan tanaman berlangsung lebih cepat dan sehat dibanding metode konvensional. Manfaatnya sangat terasa karena hemat air yang digunakan berulang, ramah lingkungan tanpa limbah dan pupuk kimia, serta efisien lahan sehingga cocok untuk pekarangan sempit. Biaya operasional juga lebih rendah dalam jangka panjang sambil menghasilkan pangan sehat yang bernilai ekonomi, sekaligus bisa jadi media edukasi dan peluang wirausaha bagi warga.",
  },
  "nobar-film": {
    title: "Nobar Film: Bahaya Judi Online & Human Trafficking",
    date: "17 Januari 2026",
    team: "Rio, Marsha, Reza",
    image: "img/proker/nobar-film/hero.jpg",
    description:
      "Penyuluhan edukatif melalui pemutaran film 'No More Bets' untuk meningkatkan kesadaran pemuda terhadap bahaya judi online dan human trafficking",
    background:
      "Perkembangan teknologi dan internet membuat masyarakat desa semakin mudah mengakses informasi, namun di sisi lain juga meningkatkan risiko terpapar judi online, pinjaman online ilegal, dan praktik human trafficking. Kurangnya pemahaman mengenai bahaya, modus, dan dampak dari masalah tersebut menyebabkan masyarakat, khususnya pemuda dan warga produktif, rentan menjadi korban. Oleh karena itu, diperlukan sosialisasi yang menarik dan mudah dipahami. Metode menonton bersama film No More Bets (2023) dipilih karena mampu menggambarkan dampak nyata dari judi online dan perdagangan manusia secara visual dan emosional, sehingga pesan lebih mudah diterima oleh masyarakat.",
    objectives: [
      "Meningkatkan pemahaman masyarakat Desa Lematang tentang bahaya judi online, pinjol ilegal, dan human trafficking",
      "Memberikan edukasi mengenai modus dan ciri-ciri kejahatan tersebut agar masyarakat tidak mudah tertipu",
      "Menumbuhkan sikap waspada dan bijak dalam menggunakan internet dan media digital",
      "Mendorong masyarakat untuk berani menolak dan melaporkan aktivitas yang mencurigakan",
      "Mengajak masyarakat, khususnya pemuda, untuk berperan aktif dalam pencegahan kejahatan digital dan sosial di lingkungan Desa Lematang",
    ],
    results:
      "Hasil dari kegiatan ini adalah meningkatnya pengetahuan masyarakat tentang ciri-ciri, modus, dan dampak negatif judi online, pinjol ilegal, dan human trafficking. Masyarakat menjadi lebih waspada dan memiliki kesadaran untuk saling mengingatkan serta melaporkan jika menemukan indikasi aktivitas mencurigakan. Manfaat jangka panjangnya adalah terciptanya lingkungan desa yang lebih aman, masyarakat yang lebih bijak dalam penggunaan teknologi, serta berkurangnya potensi korban kejahatan digital khususnya masyarakat Desa Lematang.",
  },
  "cek-diabetes": {
    title: "Cek Kesehatan Gratis Lansia - Posyandu Lubuk Bais",
    date: "16 Januari 2026",
    team: "Adel, Tata, Joyce",
    image: "img/proker/cek-diabetes/hero.jpg",
    description:
      "Kegiatan pemeriksaan kesehatan gratis untuk lansia sebagai upaya deteksi dini risiko penyakit pada lansia Desa Lematang",
    background:
      "Berdasarkan data kesehatan Desa Lematang, masih ditemukan cukup banyak warga yang menderita penyakit tidak menular, khususnya diabetes melitus, terutama pada kelompok usia dewasa dan lanjut usia, sehingga diperlukan upaya deteksi dini dan pemantauan kesehatan secara rutin untuk mencegah komplikasi.",
    objectives: [
      "Menyediakan fasilitas pemeriksaan kesehatan gratis sebagai upaya deteksi dini risiko penyakit diabetes",
      "Mengetahui risiko penyakit diabetes melalui pemeriksaan sederhana",
      "Meningkatkan kesadaran masyarakat akan pentingnya pemeriksaan kesehatan rutin dan pola hidup sehat",
      "Mencegah terjadinya komplikasi penyakit melalui edukasi kesehatan sejak dini",
      "Mendukung upaya promotif dan preventif dalam pelayanan kesehatan masyarakat desa",
    ],
    results:
      "Meningkatnya kesadaran lansia Desa Lematang akan pentingnya pemeriksaan kesehatan serta terlaksananya pemeriksaan tekanan darah, gula darah dan penyuluhan kesehatan untuk mencegah komplikasi penyakit.",
  },
  digitalisasi: {
    title: "Digitalisasi Website Desa Lematang",
    date: "20 - 30 Januari 2026",
    team: "Dhito, Dimas, Yotri",
    image: "img/proker/digitalisasi/hero.jpg",
    description:
      "Pengembangan website profil desa untuk meningkatkan transparansi informasi publik dan mempromosikan potensi pariwisata serta UMKM Desa Lematang",
    background:
      "Program digitalisasi melalui pembuatan website profil desa berbasis teknologi modern yang memuat informasi lengkap tentang profil, sejarah, struktur organisasi, galeri kegiatan, potensi pariwisata, dan direktori UMKM. Website dirancang responsif dan mudah diakses untuk menjadi wajah digital resmi Desa Lematang.",
    objectives: [
      "Meningkatkan transparansi informasi publik desa",
      "Mempromosikan potensi pariwisata dan UMKM lokal",
      "Menyediakan akses mudah ke data profil dan struktur desa",
      "Mendokumentasikan program kerja dan kegiatan desa",
      "Meningkatkan citra modern Desa Lematang di era digital",
    ],
    results:
      "Website Desa Lematang berhasil diluncurkan dengan 8 halaman utama meliputi beranda, profil desa, pemerintahan, lembaga, pariwisata & UMKM, dan galeri. Website dibangun dengan desain modern dan responsif, mudah diakses dari berbagai perangkat. Platform ini berhasil meningkatkan transparansi informasi desa dan menjadi rujukan digital untuk promosi potensi lokal Desa Lematang.",
  },
  "umkm-qris": {
    title: "Digitalisasi Ekosistem UMKM (QRIS & Mapping)",
    date: "20 Januari 2026",
    team: "Dimas, Yotri, Reva, Dhito",
    image: "img/proker/umkm-qris/hero.jpg",
    description:
      "Pendampingan UMKM untuk beralih ke transaksi nontunai menggunakan QRIS dan digital mapping lokasi usaha di Google Maps",
    background:
      "Program pendampingan UMKM untuk beralih ke transaksi digital menggunakan QR Code (QRIS) serta melakukan pemetaan digital lokasi usaha pada Google Maps untuk meningkatkan aksesibilitas konsumen dan modernisasi sistem pembayaran.",
    objectives: [
      "Mempercepat digitalisasi keuangan desa",
      "Meningkatkan visibilitas lokasi UMKM di pencarian digital",
      "Membantu pencatatan keuangan yang lebih rapi",
      "Memudahkan akses wisatawan ke lokasi UMKM",
    ],
    results:
      "UMKM Desa Lematang berhasil didampingi untuk mulai menggunakan QRIS dalam transaksi sehari-hari, memudahkan pembeli yang tidak membawa uang tunai. Lokasi usaha juga sudah terdaftar di Google Maps, jadi lebih gampang ditemukan pembeli atau wisatawan yang lewat. Pemilik usaha juga dapat pencerahan tentang cara kelola uang digital yang lebih teratur.",
  },
  "anti-bullying": {
    title: "Edukasi Anti-Bullying di SDN 2 Lematang",
    date: "30 Januari 2026",
    team: "Marsha, Lala, Reva, Alkhan",
    image: "img/proker/anti-bullying/hero.jpg",
    description:
      "Sosialisasi interaktif untuk meningkatkan pemahaman siswa SD mengenai bullying dan membangun generasi yang saling menghargai",
    background:
      "Bullying masih menjadi permasalahan yang sering terjadi di lingkungan sekolah dasar dan dapat berdampak negatif terhadap perkembangan emosional dan sosial anak. Kurangnya pemahaman mengenai bentuk serta dampak bullying membuat perilaku ini kerap dianggap sebagai hal biasa. Oleh karena itu, diperlukan kegiatan edukatif yang mampu menumbuhkan kesadaran, empati, serta sikap saling menghargai sejak dini pada siswa sekolah dasar.",
    objectives: [
      "Menumbuhkan kesadaran siswa akan pentingnya sikap saling menghargai sebagai upaya pencegahan bullying",
      "Menyediakan ruang aman bagi siswa untuk mengekspresikan pengalaman dan perasaan mereka secara tertulis",
      "Meningkatkan empati dan kepedulian terhadap sesama teman di lingkungan sekolah",
    ],
    results:
      "Berdasarkan hasil pre-test dan post-test terhadap 28 siswa kelas VI, terjadi peningkatan pemahaman mengenai bullying dengan rata-rata nilai naik dari 4,04 menjadi 4,61. Sebanyak 57% siswa mengalami peningkatan nilai, yang menunjukkan bahwa kegiatan ini efektif meningkatkan pemahaman siswa tentang bullying serta menumbuhkan sikap empati dan kepedulian dalam menciptakan lingkungan sekolah yang aman dan ramah.",
  },
  "sabun-pisang": {
    title: "Pembuatan Sabun Cuci Piring dari Limbah Kulit Pisang",
    date: "24 Januari 2026",
    team: "Lusi, Jizdan, Lala",
    image: "img/proker/sabun-pisang/hero.jpg",
    description:
      "Pelatihan pembuatan sabun cuci piring ramah lingkungan dari limbah kulit pisang untuk meningkatkan keterampilan masyarakat",
    background:
      "Meningkatnya kebutuhan masyarakat terhadap sabun cuci piring sebagai produk kebersihan sehari-hari, pembuatan sabun cuci piring secara mandiri dari limbah kulit pisang menjadi alternatif yang bermanfaat untuk memenuhi kebutuhan rumah tangga. Penggunaan kulit pisang sebagai bahan tambahan alami dalam pembuatan sabun cuci piring didasarkan pada kandungan senyawa aktif seperti flavonoid, tanin, dan senyawa fenolik yang memiliki sifat antibakteri.",
    objectives: [
      "Melatih masyarakat dalam proses pembuatan sabun cuci piring secara mandiri dengan metode yang mudah diterapkan",
      "Membuka peluang usaha (sabun cuci piring komersial) yang dapat meningkatkan perekonomian masyarakat",
      "Memberikan edukasi kepada masyarakat mengenai pemanfaatan limbah kulit pisang sebagai antibakteri alami dan mendorong pengurangan limbah organik rumah tangga",
    ],
    results:
      "Program berhasil menghasilkan produk sabun cuci piring sebanyak 30-35 botol ukuran 100 mL dengan kualitas yang baik. Masyarakat memperoleh pengetahuan serta kemampuan praktis dalam mengolah limbah kulit pisang dan membuat sabun cuci piring secara mandiri. Pemanfaatan limbah kulit pisang menjadi produk bernilai guna sehingga turut mengurangi volume limbah organik rumah tangga sekaligus membuka peluang usaha yang dapat meningkatkan perekonomian keluarga.",
  },
  "kunjungan-paud": {
    title: "Kunjungan ke Paud Melati",
    date: "26 Januari 2026",
    team: "Redho, Dhito, Joyce, Lusi, Marsha, Reva, Rio, Tata, Reza, Adel, Yotri, Dimas, Lala, Alkhan, Jizdan",
    image: "img/proker/kunjungan-paud/hero.jpg",
    description:
      "Kegiatan edukasi dan interaksi bersama anak-anak PAUD untuk mendukung pembelajaran usia dini melalui permainan edukatif dan storytelling",
    background:
      "Pendidikan Anak Usia Dini (PAUD) merupakan fondasi penting dalam pembentukan karakter dan perkembangan kognitif anak. PAUD Melati di Desa Lematang menjadi salah satu lembaga pendidikan awal yang berperan dalam membentuk generasi masa depan. Namun, keterbatasan sumber daya dan variasi kegiatan pembelajaran membuat anak-anak memerlukan stimulus tambahan yang menyenangkan dan edukatif. Oleh karena itu, mahasiswa KKN UNILA mengadakan kunjungan ke PAUD Melati untuk memberikan kegiatan pembelajaran yang interaktif, kreatif, dan menyenangkan.",
    objectives: [
      "Memberikan variasi kegiatan pembelajaran yang menarik dan menyenangkan bagi anak-anak PAUD",
      "Meningkatkan kreativitas dan imajinasi anak melalui permainan edukatif dan storytelling",
      "Membangun interaksi sosial yang positif antara mahasiswa KKN dengan anak-anak PAUD",
      "Mendukung perkembangan motorik halus dan kasar anak melalui aktivitas bermain",
      "Menumbuhkan rasa percaya diri dan keberanian anak untuk berekspresi",
    ],
    results:
      "Kegiatan kunjungan ke PAUD Melati berjalan dengan sangat meriah dan penuh antusiasme dari anak-anak. Mereka sangat aktif mengikuti berbagai permainan edukatif seperti mewarnai, menyanyi, menari, dan mendengarkan cerita dongeng. Anak-anak terlihat gembira dan lebih berani untuk mengekspresikan diri mereka. Guru-guru PAUD juga mengapresiasi kegiatan ini karena memberikan warna baru dalam proses pembelajaran. Manfaat jangka panjang dari kegiatan ini adalah terciptanya lingkungan belajar yang lebih menyenangkan, meningkatnya motivasi anak untuk belajar, serta terbentuknya karakter anak yang lebih percaya diri dan kreatif.",
  },
  "kunjungan-industri": {
    title: "Kunjungan Industri ke PT. HAKAAston",
    date: "22 Januari 2026",
    team: "Redho, Dhito, Joyce, Lusi, Marsha, Reva, Rio, Tata, Reza, Adel, Yotri, Dimas, Lala, Alkhan, Jizdan",
    image: "img/proker/kunjungan-industri/hero.jpg",
    description:
      "Kunjungan edukatif mahasiswa KKN UNILA ke PT. HAKAAston untuk mendapatkan wawasan langsung tentang proses produksi industri modern dan praktik manajemen perusahaan",
    background:
      "PT. HAKAAston merupakan salah satu perusahaan industri yang beroperasi di wilayah Lampung Selatan dan memiliki peran penting dalam perekonomian daerah. Sebagai mahasiswa KKN UNILA yang sedang bertugas di Desa Lematang, penting bagi kami untuk memahami dinamika industri lokal agar dapat berkontribusi lebih baik dalam program pemberdayaan masyarakat. Melalui kunjungan industri ini, mahasiswa KKN berkesempatan untuk melihat langsung bagaimana sebuah industri modern beroperasi, memahami sistem manajemen produksi, serta mempelajari praktik-praktik terbaik yang dapat diimplementasikan dalam program-program KKN di desa.",
    objectives: [
      "Memberikan wawasan kepada mahasiswa KKN UNILA tentang proses produksi dan operasional industri modern",
      "Memahami standar kerja, sistem manajemen mutu, dan keselamatan kerja (K3) yang diterapkan di industri",
      "Mempelajari praktik-praktik terbaik yang dapat diimplementasikan dalam program KKN di Desa Lematang",
      "Membangun jaringan dan kerjasama antara mahasiswa KKN dengan pihak industri untuk pengembangan program desa",
      "Meningkatkan kompetensi mahasiswa dalam memahami dinamika dunia industri sebagai bekal pengembangan program pemberdayaan masyarakat",
    ],
    results:
      "Kunjungan industri ke PT. HAKAAston memberikan pengalaman berharga bagi seluruh mahasiswa KKN UNILA. Kami mendapatkan penjelasan lengkap mengenai alur produksi, standar keselamatan kerja (K3), serta sistem manajemen mutu yang diterapkan di perusahaan. Mahasiswa berkesempatan melihat langsung proses produksi di lapangan dan berdiskusi dengan para karyawan dan manajer perusahaan. Kegiatan ini membuka wawasan kami tentang bagaimana industri modern beroperasi dan memberikan inspirasi untuk mengimplementasikan praktik-praktik terbaik dalam program-program KKN di Desa Lematang. Pengalaman ini juga memperkaya pemahaman kami tentang pentingnya kerjasama antara akademisi, industri, dan masyarakat dalam pembangunan desa.",
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
  const backgroundP = document.getElementById("programBackground");
  if (backgroundP && program.background) {
    backgroundP.textContent = program.background;
  }

  // Update objectives list
  const objectivesList = document.querySelector("#programObjectives");
  if (objectivesList && program.objectives) {
    objectivesList.innerHTML = "";
    program.objectives.forEach((objective) => {
      const li = document.createElement("li");
      li.textContent = objective;
      objectivesList.appendChild(li);
    });
  }

  // Update results section
  const resultsP = document.getElementById("programResults");
  if (resultsP && program.results) {
    resultsP.textContent = program.results;
  }
}

// Function to update gallery section dynamically
function updateGallerySection(programId) {
  const galleryContainer = document.querySelector(".article-gallery");
  if (!galleryContainer) return;

  // Clear existing gallery
  galleryContainer.innerHTML = "";

  // Create gallery images (assuming 6 images per program: 1.jpg to 6.jpg)
  const imageCount = 6;
  for (let i = 1; i <= imageCount; i++) {
    const imgPath = `img/proker/${programId}/${i}.jpg`;
    const img = document.createElement("img");
    img.src = imgPath;
    img.alt = `Dokumentasi ${i}`;
    img.onclick = function () {
      openLightbox(imgPath);
    };

    // Hide image if it doesn't exist (404 error)
    img.onerror = function () {
      this.style.display = "none";
    };

    galleryContainer.appendChild(img);
  }
}

// Function to shorten long names
function shortenName(fullName) {
  // Split name into parts
  const parts = fullName.split(" ");

  // If name has 2 words or less, return as is
  if (parts.length <= 2) {
    return fullName;
  }

  // Process each part
  const shortened = parts.map((part, index) => {
    // If it's "Muhammad", shorten to "M."
    if (part.toLowerCase() === "muhammad") {
      return "M.";
    }
    // If it's the last part, shorten to initial with dot
    if (index === parts.length - 1) {
      return part.charAt(0).toUpperCase() + ".";
    }
    // Keep all other parts full (first, middle, etc)
    return part;
  });

  return shortened.join(" ");
}

// Function to update team section
function updateTeamSection(teamString) {
  const teamGrid = document.querySelector(".team-grid");
  if (!teamGrid) return;

  const memberNames = teamString.split(",").map((name) => name.trim());
  teamGrid.innerHTML = "";

  memberNames.forEach((nickname) => {
    const memberData = teamMembers[nickname];
    if (memberData) {
      const teamMemberDiv = document.createElement("div");
      teamMemberDiv.className = "team-member";
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
