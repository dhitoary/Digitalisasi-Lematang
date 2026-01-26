/* ========================================
   DESA LEMATANG - MAIN JAVASCRIPT
   Enhanced & Optimized Version
   ======================================== */

// ===== GLOBAL STATE =====
const DesaLematang = {
    currentSlide: 0,
    autoSlideInterval: null,
    isDevMode: window.location.hostname === 'localhost'
};

// ===== HERO SLIDER =====
const SliderModule = {
    slides: null,
    indicators: null,

    init() {
        this.slides = document.querySelectorAll('.slide');
        this.indicators = document.querySelectorAll('.indicator');
        
        if (this.slides.length > 0) {
            this.showSlide(0);
            this.startAutoSlide();
            this.setupHoverPause();
        }
    },

    showSlide(index) {
        // Remove active class from all
        this.slides.forEach(slide => slide.classList.remove('active'));
        this.indicators.forEach(indicator => indicator.classList.remove('active'));
        
        // Handle wrapping
        if (index >= this.slides.length) {
            DesaLematang.currentSlide = 0;
        } else if (index < 0) {
            DesaLematang.currentSlide = this.slides.length - 1;
        } else {
            DesaLematang.currentSlide = index;
        }
        
        // Add active class to current
        this.slides[DesaLematang.currentSlide].classList.add('active');
        this.indicators[DesaLematang.currentSlide].classList.add('active');
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
        const heroSlider = document.querySelector('.hero-slider');
        if (heroSlider) {
            heroSlider.addEventListener('mouseenter', () => {
                clearInterval(DesaLematang.autoSlideInterval);
            });
            
            heroSlider.addEventListener('mouseleave', () => {
                this.startAutoSlide();
            });
        }
    }
};

// Make slider functions global for onclick handlers
window.changeSlide = (direction) => SliderModule.changeSlide(direction);
window.goToSlide = (index) => SliderModule.goToSlide(index);

// ===== NAVIGATION MODULE =====
const NavigationModule = {
    init() {
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('navMenu');

        if (hamburger && navMenu) {
            this.setupMobileMenu(hamburger, navMenu);
            this.setupClickOutside(hamburger, navMenu);
            this.setupResize(hamburger, navMenu);
        }

        this.setupSmoothScroll(navMenu);
        this.setupNavbarScroll();
    },

    setupMobileMenu(hamburger, navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            this.animateHamburger(hamburger, navMenu.classList.contains('active'));
        });
    },

    animateHamburger(hamburger, isActive) {
        const spans = hamburger.querySelectorAll('span');
        spans.forEach((span, index) => {
            if (isActive) {
                if (index === 0) span.style.transform = 'rotate(45deg) translate(5px, 5px)';
                if (index === 1) span.style.opacity = '0';
                if (index === 2) span.style.transform = 'rotate(-45deg) translate(7px, -7px)';
            } else {
                span.style.transform = '';
                span.style.opacity = '';
            }
        });
    },

    setupClickOutside(hamburger, navMenu) {
        document.addEventListener('click', (event) => {
            const isClickInsideNav = navMenu.contains(event.target);
            const isClickOnHamburger = hamburger.contains(event.target);
            
            if (!isClickInsideNav && !isClickOnHamburger && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                this.animateHamburger(hamburger, false);
            }
        });
    },

    setupResize(hamburger, navMenu) {
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                this.animateHamburger(hamburger, false);
            }
        });
    },

    setupSmoothScroll(navMenu) {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href !== '#' && href !== '') {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                        
                        // Close mobile menu if open
                        if (navMenu && navMenu.classList.contains('active')) {
                            navMenu.classList.remove('active');
                        }
                    }
                }
            });
        });
    },

    setupNavbarScroll() {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            let lastScroll = 0;
            window.addEventListener('scroll', () => {
                const currentScroll = window.pageYOffset;
                
                if (currentScroll > 100) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
                
                lastScroll = currentScroll;
            });
        }
    }
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
            rootMargin: '0px 0px -80px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Apply animations with stagger effect
        const animatedElements = document.querySelectorAll(
            '.info-card, .quick-link-card, .content-box, .history-content h3, .highlight'
        );

        animatedElements.forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(40px)';
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

        const infoCardObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const numbers = entry.target.querySelectorAll('strong');
                    numbers.forEach(num => {
                        const text = num.textContent.replace(/[^\d]/g, '');
                        if (text && !isNaN(text)) {
                            const value = parseInt(text);
                            if (value > 100) {
                                num.textContent = '0';
                                setTimeout(() => animateCounter(num, value), 200);
                            }
                        }
                    });
                    infoCardObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        document.querySelectorAll('.info-card').forEach(card => {
            infoCardObserver.observe(card);
        });
    },

    setupCardIconAnimations() {
        const cardIcons = document.querySelectorAll('.card-icon');
        cardIcons.forEach(icon => {
            const card = icon.parentElement;
            
            card.addEventListener('mouseenter', () => {
                icon.style.animationPlayState = 'paused';
                icon.style.transition = 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
            });
            
            card.addEventListener('mouseleave', () => {
                icon.style.animationPlayState = 'running';
            });
        });
    }
};

// ===== SCROLL TO TOP MODULE =====
const ScrollToTopModule = {
    init() {
        const scrollToTopBtn = document.getElementById('scrollToTop');
        if (scrollToTopBtn) {
            this.setupScrollButton(scrollToTopBtn);
        }
    },

    setupScrollButton(button) {
        let scrollTimeout;
        
        window.addEventListener('scroll', () => {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                if (window.pageYOffset > 300) {
                    button.classList.add('visible');
                } else {
                    button.classList.remove('visible');
                }
            }, 100);
        });

        button.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
};

// ===== IMAGE LAZY LOADING =====
const LazyLoadModule = {
    init() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                            img.removeAttribute('data-src');
                            imageObserver.unobserve(img);
                        }
                    }
                });
            });

            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }
    }
};

// ===== UTILITY FUNCTIONS =====
const Utils = {
    validateForm(formId) {
        const form = document.getElementById(formId);
        if (!form) return false;

        const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
        let isValid = true;

        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.style.borderColor = 'red';
                
                let errorMsg = input.nextElementSibling;
                if (!errorMsg || !errorMsg.classList.contains('error-message')) {
                    errorMsg = document.createElement('span');
                    errorMsg.className = 'error-message';
                    errorMsg.style.color = 'red';
                    errorMsg.style.fontSize = '0.9rem';
                    errorMsg.textContent = 'Field ini wajib diisi';
                    input.parentNode.insertBefore(errorMsg, input.nextSibling);
                }
            } else {
                input.style.borderColor = '';
                const errorMsg = input.nextElementSibling;
                if (errorMsg && errorMsg.classList.contains('error-message')) {
                    errorMsg.remove();
                }
            }
        });

        return isValid;
    },

    sharePage() {
        if (navigator.share) {
            navigator.share({
                title: document.title,
                url: window.location.href
            }).catch(err => console.log('Error sharing:', err));
        } else {
            navigator.clipboard.writeText(window.location.href).then(() => {
                alert('Link telah disalin ke clipboard!');
            });
        }
    },

    printPage() {
        window.print();
    }
};

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all modules
    SliderModule.init();
    NavigationModule.init();
    AnimationModule.init();
    ScrollToTopModule.init();
    LazyLoadModule.init();

    // Console welcome message (only in development)
    if (DesaLematang.isDevMode) {
        console.log('%c🏡 Website Kelurahan Lematang', 'font-size: 20px; color: #003135; font-weight: bold;');
        console.log('%cSelamat datang di Website Profil Desa Lematang', 'font-size: 14px; color: #0FA4AF;');
        console.log('Kecamatan Tanjung Bintang, Kabupaten Lampung Selatan');
    }
});

// Export public API
window.DesaLematang = {
    ...DesaLematang,
    validateForm: Utils.validateForm,
    sharePage: Utils.sharePage,
    printPage: Utils.printPage
};
