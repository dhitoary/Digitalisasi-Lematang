/* ========================================
   DESA LEMATANG - MAIN JAVASCRIPT
   Enhanced & Optimized Version
   ======================================== */

// ===== GLOBAL STATE =====
const DesaLematang = {
  currentSlide: 0,
  autoSlideInterval: null,
  isDevMode: window.location.hostname === "localhost",
};

// ===== HERO SLIDER =====
const SliderModule = {
  slides: null,
  indicators: null,

  init() {
    this.slides = document.querySelectorAll(".slide");
    this.indicators = document.querySelectorAll(".indicator");

    if (this.slides.length > 0) {
      this.showSlide(0);
      this.startAutoSlide();
      this.setupHoverPause();
    }
  },

  showSlide(index) {
    // Remove active class from all
    this.slides.forEach((slide) => slide.classList.remove("active"));
    this.indicators.forEach((indicator) =>
      indicator.classList.remove("active"),
    );

    // Handle wrapping
    if (index >= this.slides.length) {
      DesaLematang.currentSlide = 0;
    } else if (index < 0) {
      DesaLematang.currentSlide = this.slides.length - 1;
    } else {
      DesaLematang.currentSlide = index;
    }

    // Add active class to current
    this.slides[DesaLematang.currentSlide].classList.add("active");
    this.indicators[DesaLematang.currentSlide].classList.add("active");
  },

  changeSlide(direction) {
    this.showSlide(DesaLematang.currentSlide + direction);
    this.resetAutoSlide();
  },

  goToSlide(index) {
    this.showSlide(index);
    this.resetAutoSlide();
  },

  autoSlide() {
    DesaLematang.currentSlide++;
    SliderModule.showSlide(DesaLematang.currentSlide);
  },

  startAutoSlide() {
    DesaLematang.autoSlideInterval = setInterval(this.autoSlide, 5000);
  },

  resetAutoSlide() {
    clearInterval(DesaLematang.autoSlideInterval);
    this.startAutoSlide();
  },

  setupHoverPause() {
    const heroSlider = document.querySelector(".hero-slider");
    if (heroSlider) {
      heroSlider.addEventListener("mouseenter", () => {
        clearInterval(DesaLematang.autoSlideInterval);
      });

      heroSlider.addEventListener("mouseleave", () => {
        this.startAutoSlide();
      });
    }
  },
};

// Make slider functions global for onclick handlers
window.changeSlide = (direction) => SliderModule.changeSlide(direction);
window.goToSlide = (index) => SliderModule.goToSlide(index);

// ===== NAVIGATION MODULE =====
const NavigationModule = {
  init() {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("navMenu");

    if (hamburger && navMenu) {
      this.setupMobileMenu(hamburger, navMenu);
      this.setupClickOutside(hamburger, navMenu);
      this.setupResize(hamburger, navMenu);
    }

    this.setupSmoothScroll(navMenu);
    this.setupNavbarScroll();
  },

  setupMobileMenu(hamburger, navMenu) {
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      this.animateHamburger(hamburger, navMenu.classList.contains("active"));
    });
  },

  animateHamburger(hamburger, isActive) {
    const spans = hamburger.querySelectorAll("span");
    spans.forEach((span, index) => {
      if (isActive) {
        if (index === 0)
          span.style.transform = "rotate(45deg) translate(5px, 5px)";
        if (index === 1) span.style.opacity = "0";
        if (index === 2)
          span.style.transform = "rotate(-45deg) translate(7px, -7px)";
      } else {
        span.style.transform = "";
        span.style.opacity = "";
      }
    });
  },

  setupClickOutside(hamburger, navMenu) {
    document.addEventListener("click", (event) => {
      const isClickInsideNav = navMenu.contains(event.target);
      const isClickOnHamburger = hamburger.contains(event.target);

      if (
        !isClickInsideNav &&
        !isClickOnHamburger &&
        navMenu.classList.contains("active")
      ) {
        navMenu.classList.remove("active");
        this.animateHamburger(hamburger, false);
      }
    });
  },

  setupResize(hamburger, navMenu) {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768 && navMenu.classList.contains("active")) {
        navMenu.classList.remove("active");
        this.animateHamburger(hamburger, false);
      }
    });
  },

  setupSmoothScroll(navMenu) {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        const href = this.getAttribute("href");
        if (href !== "#" && href !== "") {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });

            // Close mobile menu if open
            if (navMenu && navMenu.classList.contains("active")) {
              navMenu.classList.remove("active");
            }
          }
        }
      });
    });
  },

  setupNavbarScroll() {
    const navbar = document.querySelector(".navbar");
    if (navbar) {
      let lastScroll = 0;
      window.addEventListener("scroll", () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }

        lastScroll = currentScroll;
      });
    }
  },
};

// ===== ANIMATION MODULE =====
const AnimationModule = {
  init() {
    this.setupScrollAnimations();
    this.setupCounterAnimations();
    this.setupCardIconAnimations();
  },

  setupScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -80px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Apply animations with stagger effect
    const animatedElements = document.querySelectorAll(
      ".info-card, .quick-link-card, .content-box, .history-content h3, .highlight",
    );

    animatedElements.forEach((element, index) => {
      element.style.opacity = "0";
      element.style.transform = "translateY(40px)";
      element.style.transition = `all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.15}s`;
      observer.observe(element);
    });
  },

  setupCounterAnimations() {
    const animateCounter = (element, target, duration = 2500) => {
      const startTime = performance.now();
      const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);

      const animate = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeOutQuart(progress);
        const current = Math.floor(easedProgress * target);

        element.textContent = current.toLocaleString();

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          element.textContent = target.toLocaleString();
        }
      };

      requestAnimationFrame(animate);
    };

    const infoCardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const numbers = entry.target.querySelectorAll("strong");
            numbers.forEach((num) => {
              const text = num.textContent.replace(/[^\d]/g, "");
              if (text && !isNaN(text)) {
                const value = parseInt(text);
                if (value > 100) {
                  num.textContent = "0";
                  setTimeout(() => animateCounter(num, value), 200);
                }
              }
            });
            infoCardObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 },
    );

    document.querySelectorAll(".info-card").forEach((card) => {
      infoCardObserver.observe(card);
    });
  },

  setupCardIconAnimations() {
    const cardIcons = document.querySelectorAll(".card-icon");
    cardIcons.forEach((icon) => {
      const card = icon.parentElement;

      card.addEventListener("mouseenter", () => {
        icon.style.animationPlayState = "paused";
        icon.style.transition = "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)";
      });

      card.addEventListener("mouseleave", () => {
        icon.style.animationPlayState = "running";
      });
    });
  },
};

// ===== SCROLL TO TOP MODULE =====
const ScrollToTopModule = {
  init() {
    const scrollToTopBtn = document.getElementById("scrollToTop");
    if (scrollToTopBtn) {
      this.setupScrollButton(scrollToTopBtn);
    }
  },

  setupScrollButton(button) {
    let scrollTimeout;

    window.addEventListener("scroll", () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        if (window.pageYOffset > 300) {
          button.classList.add("visible");
        } else {
          button.classList.remove("visible");
        }
      }, 100);
    });

    button.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  },
};

// ===== IMAGE LAZY LOADING =====
const LazyLoadModule = {
  init() {
    if ("IntersectionObserver" in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute("data-src");
              imageObserver.unobserve(img);
            }
          }
        });
      });

      document.querySelectorAll("img[data-src]").forEach((img) => {
        imageObserver.observe(img);
      });
    }
  },
};

// ===== UTILITY FUNCTIONS =====
const Utils = {
  validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return false;

    const inputs = form.querySelectorAll(
      "input[required], textarea[required], select[required]",
    );
    let isValid = true;

    inputs.forEach((input) => {
      if (!input.value.trim()) {
        isValid = false;
        input.style.borderColor = "red";

        let errorMsg = input.nextElementSibling;
        if (!errorMsg || !errorMsg.classList.contains("error-message")) {
          errorMsg = document.createElement("span");
          errorMsg.className = "error-message";
          errorMsg.style.color = "red";
          errorMsg.style.fontSize = "0.9rem";
          errorMsg.textContent = "Field ini wajib diisi";
          input.parentNode.insertBefore(errorMsg, input.nextSibling);
        }
      } else {
        input.style.borderColor = "";
        const errorMsg = input.nextElementSibling;
        if (errorMsg && errorMsg.classList.contains("error-message")) {
          errorMsg.remove();
        }
      }
    });

    return isValid;
  },

  sharePage() {
    if (navigator.share) {
      navigator
        .share({
          title: document.title,
          url: window.location.href,
        })
        .catch((err) => console.log("Error sharing:", err));
    } else {
      navigator.clipboard.writeText(window.location.href).then(() => {
        alert("Link telah disalin ke clipboard!");
      });
    }
  },

  printPage() {
    window.print();
  },
};

// ===== MODAL SYSTEM =====
const ModalModule = {
  // Placeholder image jika gambar belum tersedia
  placeholderImage:
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23667eea;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23764ba2;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23grad)' width='800' height='600'/%3E%3Ccircle cx='400' cy='250' r='80' fill='white' opacity='0.2'/%3E%3Cpath d='M 350 230 L 370 250 L 450 170' stroke='white' stroke-width='8' fill='none' stroke-linecap='round' stroke-linejoin='round' opacity='0.3'/%3E%3Ctext x='50%25' y='400' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='32' fill='white' font-weight='bold'%3EGambar Belum Tersedia%3C/text%3E%3Ctext x='50%25' y='450' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='18' fill='white' opacity='0.8'%3ESilakan upload gambar ke folder img/%3C/text%3E%3C/svg%3E",

  // Data UMKM
  umkmData: {
    umkm1: {
      title: "KERIPIK PISANG",
      description:
        "KERIPIK PISANG KEPOK ASLI GURIH TANPA BAHAN PENGAWET",
      image: "img/keripik-pisang.jpg", // Ganti dengan path gambar yang sesuai
      phone: "6281234567890", // Format: 62 + nomor tanpa 0 di depan
      location: "https://maps.google.com/?q=-5.4,105.3", // Ganti dengan koordinat yang sesuai
      message: "Halo, saya tertarik dengan Keripik Pisang. Apakah masih tersedia?",
    },
    umkm2: {
      title: "BERAS LOKAL PREMIUM",
      description:
        "BERAS BERKUALITAS TINGGI LANGSUNG DARI PETANI LOKAL LEMATANG",
      image: "img/beras-lokal.jpg",
      phone: "6281234567891",
      location: "https://maps.google.com/?q=-5.41,105.31",
      message: "Halo, saya ingin memesan Beras Lokal Premium.",
    },
    umkm3: {
      title: "KERAJINAN ANYAMAN BAMBU",
      description:
        "BERBAGAI KERAJINAN TANGAN DARI ANYAMAN BAMBU BERKUALITAS TINGGI",
      image: "img/anyaman-bambu.jpg",
      phone: "6281234567892",
      location: "https://maps.google.com/?q=-5.39,105.29",
      message: "Halo, saya tertarik dengan produk Kerajinan Anyaman Bambu.",
    },
  },

  // Data Wisata
  tourismData: {
    wisata1: {
      title: "WISATA PERTANIAN LEMATANG",
      description:
        "Nikmati pengalaman berwisata di area pertanian dengan pemandangan sawah yang luas. Cocok untuk edukasi dan rekreasi keluarga.",
      image: "img/wisata-pertanian.jpg",
      location: "https://maps.google.com/?q=-5.4,105.3",
      phone: "6281234567893",
      message: "Halo, saya ingin informasi tentang Wisata Pertanian Lematang.",
    },
    wisata2: {
      title: "WISATA ALAM SUNGAI LEMATANG",
      description:
        "Destinasi wisata alam dengan pemandangan sungai yang indah dan udara segar. Tempat yang sempurna untuk bersantai dan menikmati alam.",
      image: "img/wisata-alam.jpg",
      location: "https://maps.google.com/?q=-5.41,105.31",
      phone: "6281234567894",
      message: "Halo, saya ingin berkunjung ke Wisata Alam Sungai Lematang.",
    },
    wisata3: {
      title: "WISATA SEJARAH & BUDAYA",
      description:
        "Jelajahi sejarah panjang Desa Lematang sejak tahun 1909 dan pelajari budaya lokal yang kaya. Tersedia pemandu wisata.",
      image: "img/wisata-budaya.jpg",
      location: "https://maps.google.com/?q=-5.39,105.29",
      phone: "6281234567895",
      message: "Halo, saya tertarik dengan Wisata Sejarah & Budaya Lematang.",
    },
    wisata4: {
      title: "WISATA INDUSTRI",
      description:
        "Tour edukasi ke kawasan industri untuk mempelajari proses produksi. Cocok untuk kunjungan sekolah dan mahasiswa.",
      image: "img/wisata-industri.jpg",
      location: "https://maps.google.com/?q=-5.38,105.32",
      phone: "6281234567896",
      message: "Halo, saya ingin mengatur kunjungan Wisata Industri.",
    },
  },
};

// Fungsi membuka modal UMKM
function openUMKMModal(umkmId) {
  const data = ModalModule.umkmData[umkmId];
  if (!data) return;

  const modal = document.getElementById("umkmModal");
  document.getElementById("umkmModalTitle").textContent = data.title;
  document.getElementById("umkmModalDescription").textContent =
    data.description;

  // Set image dengan fallback ke placeholder
  const imgElement = document.getElementById("umkmModalImage");
  imgElement.src = data.image;
  imgElement.alt = data.title;
  imgElement.onerror = function () {
    this.src = ModalModule.placeholderImage;
  };

  // Set button actions
  const locationBtn = document.getElementById("umkmLocationBtn");
  const orderBtn = document.getElementById("umkmOrderBtn");

  locationBtn.onclick = (e) => {
    e.stopPropagation();
    window.open(data.location, "_blank");
  };

  orderBtn.onclick = (e) => {
    e.stopPropagation();
    const waUrl = `https://wa.me/${data.phone}?text=${encodeURIComponent(data.message)}`;
    window.open(waUrl, "_blank");
  };

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

// Fungsi membuka modal Wisata
function openTourismModal(wisataId) {
  const data = ModalModule.tourismData[wisataId];
  if (!data) return;

  const modal = document.getElementById("tourismModal");
  document.getElementById("tourismModalTitle").textContent = data.title;
  document.getElementById("tourismModalDescription").textContent =
    data.description;

  // Set image dengan fallback ke placeholder
  const imgElement = document.getElementById("tourismModalImage");
  imgElement.src = data.image;
  imgElement.alt = data.title;
  imgElement.onerror = function () {
    this.src = ModalModule.placeholderImage;
  };

  // Set button action - hanya tombol lokasi
  const locationBtn = document.getElementById("tourismLocationBtn");

  locationBtn.onclick = (e) => {
    e.stopPropagation();
    window.open(data.location, "_blank");
  };

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

// Fungsi menutup modal
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.classList.remove("active");
  document.body.style.overflow = "auto";
}

// Event listener untuk menutup modal dengan tombol ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal("umkmModal");
    closeModal("tourismModal");
  }
});

// ===== INITIALIZATION =====
document.addEventListener("DOMContentLoaded", () => {
  // Initialize all modules
  SliderModule.init();
  NavigationModule.init();
  AnimationModule.init();
  ScrollToTopModule.init();
  LazyLoadModule.init();

  // Console welcome message (only in development)
  if (DesaLematang.isDevMode) {
    console.log(
      "%c🏡 Website Kelurahan Lematang",
      "font-size: 20px; color: #003135; font-weight: bold;",
    );
    console.log(
      "%cSelamat datang di Website Profil Desa Lematang",
      "font-size: 14px; color: #0FA4AF;",
    );
    console.log("Kecamatan Tanjung Bintang, Kabupaten Lampung Selatan");
  }
});

// Export public API
window.DesaLematang = {
  ...DesaLematang,
  validateForm: Utils.validateForm,
  sharePage: Utils.sharePage,
  printPage: Utils.printPage,
};
