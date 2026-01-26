// Get program ID from URL
const urlParams = new URLSearchParams(window.location.search);
const programId = urlParams.get("id");

// Program data (In real implementation, this could be fetched from a database)
const programData = {
  digitalisasi: {
    title: "Digitalisasi Website Desa",
    date: "10-25 Januari 2026",
    team: "Tim IT & Dokumentasi",
    image: "img/desa1.jpg",
    description:
      "Pembuatan website profil desa modern untuk meningkatkan transparansi pemerintahan dan akses informasi masyarakat",
  },
  "penyuluhan-kesehatan": {
    title: "Penyuluhan Kesehatan Masyarakat",
    date: "8-22 Januari 2026",
    team: "Tim Kesehatan",
    image: "img/desa2.jpg",
    description:
      "Program edukasi kesehatan lingkungan, pola hidup sehat, dan pencegahan penyakit untuk seluruh warga desa",
  },
  "pelatihan-umkm": {
    title: "Pelatihan Digital Marketing UMKM",
    date: "12-26 Januari 2026",
    team: "Tim Ekonomi Kreatif",
    image: "img/desa3.jpg",
    description:
      "Workshop pemasaran digital dan e-commerce untuk pelaku UMKM desa agar produk lokal lebih dikenal luas",
  },
  "literasi-anak": {
    title: "Program Literasi Anak Desa",
    date: "5-23 Januari 2026",
    team: "Tim Pendidikan",
    image: "img/desa1.jpg",
    description:
      "Gerakan literasi melalui dongeng, perpustakaan keliling, dan kegiatan membaca untuk meningkatkan minat baca anak",
  },
  "gotong-royong": {
    title: "Gotong Royong Pembersihan Desa",
    date: "6-20 Januari 2026",
    team: "Seluruh Tim KKN",
    image: "img/desa2.jpg",
    description:
      "Kegiatan bersih desa rutin melibatkan warga untuk menciptakan lingkungan yang bersih, sehat, dan asri",
  },
  "festival-budaya": {
    title: "Festival Seni & Budaya Lokal",
    date: "27 Januari 2026",
    team: "Tim Seni & Budaya",
    image: "img/desa3.jpg",
    description:
      "Penyelenggaraan festival untuk melestarikan dan memperkenalkan kesenian tradisional kepada generasi muda",
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
