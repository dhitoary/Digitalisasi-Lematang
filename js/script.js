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
      title: "WARUNG KITA",
      description:
        "Toko sembako lengkap untuk kebutuhan sehari-hari di Dusun Lubuk Bais. Menyediakan berbagai kebutuhan pokok, bahan makanan, dan perlengkapan rumah tangga dengan harga terjangkau. Lokasi strategis di Jl. Abdul Halim.",
      image: "img/desa1.jpg",
      phone: "62853795896170",
      location: "https://maps.app.goo.gl/a9mYsaXgsq3C5m1E9",
      message:
        "Halo Kak Novia, saya ingin tanya ketersediaan barang di Warung Kita.",
    },
    umkm2: {
      title: "WARUNG TEH ERNA",
      description:
        "Toko sembako dengan berbagai kebutuhan pokok di Dusun Lubuk Bais, sebelahan dengan Warung Kita. Melayani pembelian kebutuhan sehari-hari dengan lengkap dan harga bersahabat.",
      image: "img/desa2.jpg",
      phone: "62821795565650",
      location: "https://maps.app.goo.gl/cXMjKQE6WG81tT9y5",
      message: "Halo Ibu Erna, saya ingin belanja di Warung Teh Erna.",
    },
    umkm3: {
      title: "WARUNG IBU TIKA",
      description:
        "Toko sembako dan gorengan segar setiap hari. Berlokasi di sebelah Masjid Al Ikhmah dekat SDN 2 Lematang. Menyediakan sembako lengkap dan aneka gorengan yang enak untuk camilan keluarga.",
      image: "img/desa3.jpg",
      phone: "62857886486730",
      location: "https://maps.app.goo.gl/woqJ5KWFreg9Ny2C9",
      message: "Halo Ibu Tika, saya mau pesan gorengan dan sembako.",
    },
    umkm4: {
      title: "WARUNG BUDHE",
      description:
        "Warung makan keluarga dengan menu lengkap dan harga terjangkau. Berlokasi di depan Warung Ibu Tika dekat SDN 2. Menyediakan berbagai menu masakan rumahan yang enak dan bergizi.",
      image: "img/desa1.jpg",
      phone: "62831682563600",
      location: "https://maps.app.goo.gl/JAEJxfeC9gTuNUes9",
      message: "Halo Ibu Rusnia, saya ingin pesan makanan di Warung Budhe.",
    },
    umkm5: {
      title: "WARUNG TEH NENA",
      description:
        "Warung kebutuhan sehari-hari yang berlokasi dekat SDN 2 Lematang. Lokasi strategis untuk belanja keperluan rumah tangga dengan akses mudah dari area sekolah dan perumahan sekitar.",
      image: "img/desa2.jpg",
      phone: "62831664057430",
      location: "https://maps.google.com/?q=Warung+Teh+Nena+SDN+2+Lematang",
      message: "Halo Kak Nenawati, saya mau belanja di Warung Teh Nena.",
    },
    umkm6: {
      title: "WARUNG IBU ANA",
      description:
        "Warung sembako strategis di depan kebun karet, sebelum SDN 2 Lematang dan gapura desa. Menyediakan kebutuhan pokok lengkap dengan lokasi yang mudah dijangkau dari berbagai arah.",
      image: "img/desa3.jpg",
      phone: "6285835022640",
      location:
        "https://maps.google.com/?q=Warung+Ibu+Ana+Lematang+Tanjung+Bintang",
      message: "Halo Ibu Suhana, saya ingin belanja di Warung Ibu Ana.",
    },
    umkm7: {
      title: "IFRA RASA",
      description:
        "Produsen lempok durian dan aneka keripik khas Lampung. Produk berkualitas dengan rasa autentik yang cocok untuk oleh-oleh. Informasi kontak dan lokasi akan segera diperbarui.",
      image: "img/desa1.jpg",
      phone: "6281234567890",
      location: "https://maps.google.com/?q=Desa+Lematang+Tanjung+Bintang",
      message: "Halo, saya tertarik dengan produk Ifra Rasa.",
    },
    umkm8: {
      title: "BASO AZAM",
      description:
        "Bakso enak dengan kuah segar dan isian melimpah. Cocok untuk makan siang atau sore hari bersama keluarga. Informasi lengkap akan segera diperbarui.",
      image: "img/desa2.jpg",
      phone: "6281234567890",
      location: "https://maps.google.com/?q=Desa+Lematang+Tanjung+Bintang",
      message: "Halo, saya ingin pesan Baso Azam.",
    },
    umkm9: {
      title: "PEMPEK NAJWA (BU KADUS IIS)",
      description:
        "Pempek Palembang asli dengan cuko yang mantap. Berbagai varian pempek tersedia: lenjer, kapal selam, adaan, dan kulit. Pempek segar dan nikmat untuk keluarga.",
      image: "img/umkm/pempek-bu-kadus-iis.jpg",
      phone: "6285273010704",
      location: "https://maps.google.com/?q=Desa+Lematang+Tanjung+Bintang",
      message: "Halo Bu Kadus Iis, saya ingin pesan pempek.",
    },
    umkm10: {
      title: "KERIPIK PISANG BU RODIAH",
      description:
        "Keripik pisang renyah dan gurih tanpa pengawet. Dibuat dari pisang pilihan dengan proses higienis. Cocok untuk camilan dan oleh-oleh. Info lengkap segera hadir.",
      image: "img/desa1.jpg",
      phone: "6281234567890",
      location: "https://maps.google.com/?q=Desa+Lematang+Tanjung+Bintang",
      message: "Halo Bu Rodiah, saya ingin pesan keripik pisang.",
    },
    umkm11: {
      title: "ANEKA KUE IBU IDA",
      description:
        "Berbagai kue tradisional dan kue basah segar setiap hari. Cocok untuk acara arisan, pengajian, atau sekadar camilan keluarga. Informasi kontak akan segera diperbarui.",
      image: "img/desa2.jpg",
      phone: "6281234567890",
      location: "https://maps.google.com/?q=Desa+Lematang+Tanjung+Bintang",
      message: "Halo Ibu Ida, saya ingin pesan kue.",
    },
    umkm12: {
      title: "SALON IBU LENA",
      description:
        "Salon kecantikan dengan berbagai treatment rambut: potong, cat, smoothing, rebonding, dan creambath. Melayani dengan ramah dan profesional. Info lengkap segera hadir.",
      image: "img/desa3.jpg",
      phone: "6281234567890",
      location: "https://maps.google.com/?q=Desa+Lematang+Tanjung+Bintang",
      message: "Halo Ibu Lena, saya ingin reservasi salon.",
    },
    umkm13: {
      title: "BUKET IBU DWI",
      description:
        "Buket bunga dan hadiah untuk berbagai acara: ulang tahun, wisuda, pernikahan, dan lainnya. Desain custom sesuai keinginan. Informasi kontak akan segera diperbarui.",
      image: "img/desa1.jpg",
      phone: "6281234567890",
      location: "https://maps.google.com/?q=Desa+Lematang+Tanjung+Bintang",
      message: "Halo Ibu Dwi, saya ingin pesan buket.",
    },
    umkm14: {
      title: "KUE BOLU & KUKUR IBU REVI",
      description:
        "Kue bolu lembut dan kukur manis untuk oleh-oleh atau acara keluarga. Tersedia berbagai varian rasa. Produk fresh dan higienis. Info lengkap segera hadir.",
      image: "img/desa2.jpg",
      phone: "6281234567890",
      location: "https://maps.google.com/?q=Desa+Lematang+Tanjung+Bintang",
      message: "Halo Ibu Revi, saya ingin pesan kue bolu dan kukur.",
    },
    umkm15: {
      title: "FRIED CHICKEN ZENA (IBU TIARA)",
      description:
        "Ayam goreng crispy dengan bumbu rahasia yang gurih dan renyah. Cocok untuk makan keluarga atau acara. Tersedia paket hemat dan bisa pre-order.",
      image: "img/umkm/fried-chicken.jpg",
      phone: "62089602630513",
      location: "https://maps.google.com/?q=Desa+Lematang+Tanjung+Bintang",
      message: "Halo Ibu Tiara, saya ingin pesan fried chicken.",
    },
    umkm16: {
      title: "TEMPAT PRINT KUE",
      description:
        "Jasa print gambar edible untuk kue ulang tahun dan kue tart. Berlokasi di depan Balai Desa Lematang. Hasil print berkualitas dengan tinta food grade yang aman. Informasi kontak akan segera diperbarui.",
      image: "img/desa1.jpg",
      phone: "6281234567890",
      location:
        "https://maps.google.com/?q=Balai+Desa+Lematang+Tanjung+Bintang",
      message: "Halo, saya ingin print gambar untuk kue.",
    },
    umkm17: {
      title: "TOKO BERON",
      description:
        "Toko alat-alat listrik lengkap untuk kebutuhan rumah tangga dan bangunan. Berlokasi dekat Klinik Lematang dengan akses mudah. Menyediakan berbagai peralatan listrik berkualitas.",
      image: "img/desa2.jpg",
      phone: "62081273346036",
      location: "https://maps.google.com/?q=Klinik+Lematang+Tanjung+Bintang",
      message: "Halo, saya ingin tanya ketersediaan alat listrik di Toko Beron.",
    },
  },

  // Data Wisata
  tourismData: {
    wisata1: {
      title: "DANAU LEMATANG (DANAU BESI)",
      description:
        "Danau unik bekas tambang bijih besi yang terletak di Desa Lematang, Tanjung Bintang, Lampung Selatan. Tempat ini terkenal karena pemandangan warna air yang khas dan eksotis, hasil dari kandungan mineral bekas tambang. Beroperasi 24 jam, danau ini menjadi destinasi favorit untuk fotografi dengan latar pemandangan yang unik dan memukau. Cocok untuk wisata singkat, berfoto, dan menikmati keindahan alam yang berbeda dari biasanya.",
      image: "img/pariwisata/danau-lematang.jpg",
      mapEmbed:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.042114692138!2d105.34588097394082!3d-5.410557054039935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40dd004d8473bd%3A0x599932fa9a085789!2sDanau%20pt!5e0!3m2!1sid!2sid!4v1769784761819!5m2!1sid!2sid",
      location: "https://maps.app.goo.gl/mdQZZcUR3ugu2x898",
      phone: "6281234567893",
      message:
        "Halo, saya ingin informasi tentang Danau Lematang (Danau Besi).",
    },

    wisata2: {
      title: "KEBON JATI LEMATANG",
      description:
        "Perkebunan jati yang luas dan asri di Desa Lematang, Tanjung Bintang, Lampung Selatan. Tempat ini menawarkan udara sejuk dan segar di tengah rimbunnya pepohonan jati yang hijau dan menenangkan. Cocok untuk berbagai aktivitas seperti wisata alam, jalan-jalan santai, healing, edukasi kehutanan, dan fotografi dengan latar alam yang asri. Pengunjung dapat menikmati suasana tenang, relaksasi dari hiruk pikuk kota, dan belajar tentang budidaya serta manfaat tanaman jati.",
      image: "img/pariwisata/kebon-jati.jpg",
      mapEmbed:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.0636343281485!2d105.35478527394079!3d-5.40727865401426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40dd3e6e4f0f95%3A0x8f86e4486876b1c6!2sKebon%20Jati%20Lematang!5e0!3m2!1sid!2sid!4v1769784673208!5m2!1sid!2sid",
      location: "https://maps.app.goo.gl/CrVmd8uqEgTgqk1e7",
      phone: "6281234567896",
      message: "Halo, saya ingin berkunjung ke Kebon Jati Lematang.",
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

  // Set iframe maps
  const mapElement = document.getElementById("tourismModalMap");
  if (data.mapEmbed) {
    mapElement.src = data.mapEmbed;
  }

  // Set button action - buka di Google Maps
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
