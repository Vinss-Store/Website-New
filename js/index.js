// Data untuk paket pricing
const pricingData = {
    basic: {
        title: "Detail Script",
        image: "image/jashare.png",
        description: "Script Bot Ini Sangat Cocok Untuk Membantu Share Penjualan Kalian Tanpa Ribet.",
        features: [
            "Melakukan Share ke Semua Group",
            "Share Menggunkan Jadwal",
            "Share Otomatis",
            "Bisa Open Premium Menggunkan Jashare",
            "Suppport Run Di Panel Dan Termux"
        ],
        telegramUrl: "https://t.me/VinssBoyz"
    },
    pro: {
        title: "Detail Script",
        image: "image/createmt.png",
        description: "Script Bot Telegram Create Methode Banned Whatsapp Dapat Membantu Anda Yang Open Murid Banned.",
        features: [
            "Create Methode Fakchat",
            "Create Methode Api",
            "Create Methode Menggunakan Thema",
            "Mudah Digunakan Murid Banned",
            "Support Run Di Panel Dan Termux"
        ],
        telegramUrl: "https://t.me/VinssBoyz"
    },
    enterprise: {
        title: "Detail Script",
        image: "image/wamd.png",
        description: "Script Bot Ini Dapat Membantu Anda Bermain Dan Untuk Menjaga Group Dari Link Group Lainya.",
        features: [
            "Bermain Bot Dengan Fitur Game",
            "Bermain Bot Dengan Fitur RPG",
            "Downloader Video Sosmes (tiktok, ig dll)",
            "Membuat Sticker",
            "Menggunakan Fitur Tools"
        ],
        telegramUrl: "https://t.me/VinssBoyz"
    }
};

// Mobile Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', (e) => {
        e.preventDefault();
        navMenu.classList.toggle('active');
        
        // Animate hamburger to X
        const bars = document.querySelectorAll('.bar');
        if (navMenu.classList.contains('active')) {
            bars[0].style.transform = 'rotate(45deg) translate(5px, 6px)';
            bars[1].style.opacity = '0';
            bars[2].style.transform = 'rotate(-45deg) translate(5px, -6px)';
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
        } else {
            bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'none';
            document.body.style.overflow = 'auto';
            document.documentElement.style.overflow = 'auto';
        }
    });

    // Tutup mobile menu ketika link diklik
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                
                // Reset hamburger
                const bars = document.querySelectorAll('.bar');
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
                
                document.body.style.overflow = 'auto';
                document.documentElement.style.overflow = 'auto';
            }
        });
    });
}

// Modal functionality
let modal = null;
let modalTitle = null;
let modalIcon = null;
let modalDescription = null;
let modalFeatures = null;
let telegramOrder = null;

// Tunggu sampai DOM selesai dimuat
document.addEventListener('DOMContentLoaded', function () {
    // Initialize modal elements
    modal = document.getElementById('detailModal');
    modalTitle = document.getElementById('modalTitle');
    modalIcon = document.getElementById('modalIcon');
    modalDescription = document.getElementById('modalDescription');
    modalFeatures = document.getElementById('modalFeatures');
    telegramOrder = document.getElementById('telegramOrder');

    // Setup detail buttons
    const detailButtons = document.querySelectorAll('.btn-detail');
    detailButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            const plan = this.getAttribute('data-plan');
            
            // Validasi plan
            if (!pricingData[plan]) {
                console.error('Invalid plan:', plan);
                return;
            }
            
            showModal(plan);
        });
    });

    // Setup close buttons
    document.querySelectorAll('.close-modal, .close-modal-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            closeModal();
        });
    });

    // Close modal on outside click
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal && modal.style.display === 'block') {
            closeModal();
        }
    });
});

function showModal(plan) {
    const data = pricingData[plan];
    
    if (!data || !modal) {
        console.error('Modal elements or data not found');
        return;
    }

    modalTitle.textContent = data.title;
    modalIcon.src = data.image;
    modalIcon.alt = data.title;
    modalDescription.textContent = data.description;

    // Kosongkan dan isi ulang fitur
    modalFeatures.innerHTML = '';
    data.features.forEach(feature => {
        const li = document.createElement('li');
        li.innerHTML = <i class="fas fa-check"></i> ${feature};
        modalFeatures.appendChild(li);
    });

    // Set URL Telegram
    telegramOrder.href = data.telegramUrl;
    telegramOrder.target = '_blank';

    // Tampilkan modal dengan animasi
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    
    // Trigger reflow untuk animasi
    modal.offsetHeight;
    modal.querySelector('.modal-content').style.transform = 'translateY(0)';
    modal.querySelector('.modal-content').style.opacity = '1';
}

function closeModal() {
    if (!modal) return;
    
    // Animate out
    modal.querySelector('.modal-content').style.transform = 'translateY(-20px)';
    modal.querySelector('.modal-content').style.opacity = '0';
    
    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        document.documentElement.style.overflow = 'auto';
    }, 300);
}

// Smooth scrolling untuk anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Skip if href is just #
        if (href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        
        if (target) {
            // Close mobile menu if open
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                const bars = document.querySelectorAll('.bar');
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
                document.body.style.overflow = 'auto';
                document.documentElement.style.overflow = 'auto';
            }
            
            // Smooth scroll
            const headerHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background on scroll
let scrollTimeout;
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    
    // Clear previous timeout
    if (scrollTimeout) {
        clearTimeout(scrollTimeout);
    }
    
    // Debounce scroll event
    scrollTimeout = setTimeout(() => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(15, 15, 15, 0.98)';
            navbar.style.backdropFilter = 'blur(20px)';
            navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)';
        } else {
            navbar.style.background = 'rgba(15, 15, 15, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
            navbar.style.boxShadow = 'none';
        }
    }, 10);
});

// Optimasi untuk mobile performance
if ('ontouchstart' in window) {
    // Add touch-friendly class
    document.body.classList.add('touch-device');
    
    // Reduce animations for better mobile performance
    const style = document.createElement('style');
    style.textContent = `
        @media (max-width: 768px) {
            *, *::before, *::after {
                animation-duration: 0.3s !important;
                transition-duration: 0.3s !important;
            }
            
            /* Improve touch targets */
            .btn, .nav-link, button {
                min-height: 44px;
                min-width: 44px;
            }
            
            /* Prevent text selection on tap */
            * {
                -webkit-tap-highlight-color: transparent;
                -webkit-touch-callout: none;
                user-select: none;
            }
            
            /* Allow text selection in specific elements */
            p, h1, h2, h3, h4, h5, h6, span {
                user-select: text;
                -webkit-user-select: text;
            }
        }
    `;
    document.head.appendChild(style);
}

// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.onload = () => img.classList.add('loaded');
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    }, {
        rootMargin: '50px 0px',
        threshold: 0.1
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Handle resize events
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        // Close mobile menu on resize to desktop
        if (window.innerWidth > 768 && navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            const bars = document.querySelectorAll('.bar');
            bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'none';
            document.body.style.overflow = 'auto';
            document.documentElement.style.overflow = 'auto';
        }
    }, 250);
});

// Preload modal images
function preloadModalImages() {
    Object.values(pricingData).forEach(data => {
        if (data.image) {
            const img = new Image();
            img.src = data.image;
        }
    });
}

// Start preloading
setTimeout(preloadModalImages, 1000);

// Handle orientation change
window.addEventListener('orientationchange', () => {
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 100);
});

// Fix for iOS Safari 100vh issue
function setVH() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', ${vh}px);
}

window.addEventListener('resize', setVH);
window.addEventListener('orientationchange', setVH);
setVH();

// Add loading class to body for initial load
document.body.classList.add('loading');
window.addEventListener('load', () => {
    setTimeout(() => {
        document.body.classList.remove('loading');
        document.body.classList.add('loaded');
    }, 300);
});

// Error handling untuk gambar
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function() {
        console.warn('Failed to load image:', this.src);
        this.style.display = 'none';
    });
});

// Touch device specific optimizations
if ('ontouchstart' in window) {
    // Improve button feedback on touch devices
    document.querySelectorAll('.btn, button').forEach(button => {
        button.addEventListener('touchstart', function() {
            this.classList.add('touch-active');
        });
        
        button.addEventListener('touchend', function() {
            this.classList.remove('touch-active');
        });
    });
}
