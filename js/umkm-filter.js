// ===============================================
// UMKM Filter Functionality
// Memfilter produk UMKM berdasarkan kategori
// ===============================================

document.addEventListener("DOMContentLoaded", function () {
  // Ambil semua tombol filter
  const filterButtons = document.querySelectorAll(".umkm-filter-btn");
  // Ambil semua card produk
  const productCards = document.querySelectorAll(".umkm-product-card");

  // Fungsi untuk filter produk
  function filterProducts(category) {
    productCards.forEach((card) => {
      const cardCategory = card.getAttribute("data-category");

      if (category === "all" || cardCategory === category) {
        // Tampilkan card yang sesuai
        card.classList.remove("hidden");
        // Animasi fade in
        setTimeout(() => {
          card.style.opacity = "1";
          card.style.transform = "translateY(0)";
        }, 10);
      } else {
        // Sembunyikan card yang tidak sesuai
        card.classList.add("hidden");
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
      }
    });
  }

  // Event listener untuk setiap tombol filter
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Hapus class active dari semua tombol
      filterButtons.forEach((btn) => btn.classList.remove("active"));

      // Tambahkan class active ke tombol yang diklik
      this.classList.add("active");

      // Ambil kategori dari data-filter attribute
      const filterCategory = this.getAttribute("data-filter");

      // Filter produk berdasarkan kategori
      filterProducts(filterCategory);
    });
  });

  // Inisialisasi: tampilkan semua produk saat halaman dimuat
  filterProducts("all");
});
