// Mobile Navigation
const navToggle = document.getElementById('navToggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', function(e) {
        e.preventDefault();
        navMenu.classList.toggle('active');
        
        // Animate hamburger to X
        const bars = document.querySelectorAll('.bar');
        if (navMenu.classList.contains('active')) {
            bars[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
            bars[1].style.opacity = '0';
            bars[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
            document.body.style.overflow = 'hidden';
        } else {
            bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Close menu when clicking links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                const bars = document.querySelectorAll('.bar');
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navMenu.contains(e.target) && 
            !navToggle.contains(e.target) && 
            navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            const bars = document.querySelectorAll('.bar');
            bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}

// Pricing Data
const pricingData = {
    basic: {
        title: "SC BOT TELE JASHARE",
        image: "image/jashare.png",
        description: "Script Bot Ini Sangat Cocok Untuk Membantu Share Penjualan Kalian Tanpa Ribet.",
        features: [
            "Auto Share Otomatis",
            "Pesan Terjadwal",
            "Share Menggunakan Gambar",
            "Bisa Open Premium Menggunkan Jashare",
            "Suppport Run Di Panel Dan Termux"
        ]
    },
    pro: {
        title: "Sc Bot Tele Create MT",
        image: "image/createmt.png",
        description: "Script Bot Telegram Create Methode Banned Whatsapp Dapat Membantu Anda Yang Open Murid Banned.",
        features: [
            "Create Methode Fakchat",
            "Create Methode Api",
            "Create Methode Berbagai Thema",
            "Mudah Digunakan Murid Banned",
            "Support Run Di Panel Dan Termux"
        ]
    },
    enterprise: {
        title: "Sc Bot WhatsApp MD",
        image: "image/wamd.png",
        description: "Script Bot Ini Dapat Membantu Anda Bermain Dan Untuk Menjaga Group Dari Link Group Lainya.",
        features: [
            "Bermain Bot Dengan Fitur Game",
            "Bermain Bot Dengan Fitur RPG",
            "Downloader Video Sosmes (tiktok, ig dll)",
            "Membuat Sticker",
            "Menggunakan Fitur Tools"
        ]
    }
};

// Modal Functionality
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('detailModal');
    const closeModalBtns = document.querySelectorAll('.close-modal, .close-modal-btn');
    const detailButtons = document.querySelectorAll('.btn-detail');
    
    // Open Modal
    detailButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const plan = this.getAttribute('data-plan');
            openModal(plan);
        });
    });
    
    // Close Modal
    closeModalBtns.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            closeModal();
        });
    });
    
    // Close on outside click
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
    
    function openModal(plan) {
        const data = pricingData[plan];
        if (!data || !modal) return;
        
        // Set modal content
        document.getElementById('modalTitle').textContent = data.title;
        document.getElementById('modalIcon').src = data.image;
        document.getElementById('modalIcon').alt = data.title;
        document.getElementById('modalDescription').textContent = data.description;
        
        // Set features
        const featuresList = document.getElementById('modalFeatures');
        featuresList.innerHTML = '';
        data.features.forEach(feature => {
            const li = document.createElement('li');
            li.innerHTML = `<i class="fas fa-check"></i> ${feature}`;
            featuresList.appendChild(li);
        });
        
        // Show modal
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
    
    function closeModal() {
        const modal = document.getElementById('detailModal');
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (!target) return;
        
        // Close mobile menu if open
        if (navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            const bars = document.querySelectorAll('.bar');
            bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'none';
            document.body.style.overflow = 'auto';
        }
        
        // Calculate scroll position
        const navbar = document.querySelector('.navbar');
        const offset = navbar ? navbar.offsetHeight : 70;
        const targetPosition = target.offsetTop - offset;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});

// Navbar Scroll Effect
let scrollTimeout;
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    
    // Clear previous timeout
    if (scrollTimeout) {
        clearTimeout(scrollTimeout);
    }
    
    // Debounce scroll event
    scrollTimeout = setTimeout(() => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(10, 10, 10, 0.98)';
            navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    }, 10);
});

// Fix for iOS Safari 100vh issue
function fixVH() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

window.addEventListener('resize', fixVH);
window.addEventListener('orientationchange', fixVH);
fixVH();

// Image error handling
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function() {
        console.log('Failed to load image:', this.src);
        this.style.opacity = '0.5';
    });
    
    img.addEventListener('load', function() {
        this.style.opacity = '1';
    });
});

// Handle orientation change
window.addEventListener('orientationchange', function() {
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 100);
});

// Add loading class
document.body.classList.add('loading');
window.addEventListener('load', function() {
    setTimeout(() => {
        document.body.classList.remove('loading');
    }, 300);
});
