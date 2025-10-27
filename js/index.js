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

// Tunggu sampai DOM selesai dimuat
document.addEventListener('DOMContentLoaded', function () {
    // Modal functionality
    const modal = document.getElementById('detailModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalIcon = document.getElementById('modalIcon');
    const modalDescription = document.getElementById('modalDescription');
    const modalFeatures = document.getElementById('modalFeatures');
    const telegramOrder = document.getElementById('telegramOrder');

    // Debug: Pastikan semua elemen ditemukan
    console.log('Modal elements found:', {
        modal: !!modal,
        modalTitle: !!modalTitle,
        modalIcon: !!modalIcon,
        modalDescription: !!modalDescription,
        modalFeatures: !!modalFeatures,
        telegramOrder: !!telegramOrder
    });

    // Buka modal ketika tombol detail diklik
    document.querySelectorAll('.btn-detail').forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            const plan = this.getAttribute('data-plan');
            console.log('Detail button clicked for plan:', plan);
            showModal(plan);
        });
    });

    // Debug: Cek berapa tombol detail yang ditemukan
    console.log('Detail buttons found:', document.querySelectorAll('.btn-detail').length);

    // Tutup modal
    document.querySelectorAll('.close-modal, .close-modal-btn').forEach(button => {
        button.addEventListener('click', closeModal);
    });

    // Tutup modal ketika klik di luar konten
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    function showModal(plan) {
        const data = pricingData[plan];

        modalTitle.textContent = data.title;
        modalIcon.src = data.image;
        modalIcon.alt = data.title;
        modalDescription.textContent = data.description;

        // Kosongkan dan isi ulang fitur
        modalFeatures.innerHTML = '';
        data.features.forEach(feature => {
            const li = document.createElement('li');
            li.innerHTML = `<i class="fas fa-check"></i> ${feature}`;
            modalFeatures.appendChild(li);
        });

        // Set URL Telegram dengan target _blank untuk membuka di tab baru
        telegramOrder.href = data.telegramUrl;
        telegramOrder.target = '_blank';

        // Pastikan tombol order berfungsi dengan menambahkan event listener
        telegramOrder.onclick = function (e) {
            e.preventDefault();
            console.log('Telegram button clicked, opening:', data.telegramUrl);
            window.open(data.telegramUrl, '_blank');
            return false;
        };

        // Tampilkan modal
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Mobile navigation toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', (e) => {
        e.preventDefault();
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');

        // Prevent body scroll when menu is open
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    });
}

// Tutup mobile menu ketika link diklik
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu) {
            navMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
        if (navToggle) {
            navToggle.classList.remove('active');
        }
    });
});

// Tutup mobile menu ketika klik di luar
document.addEventListener('click', (e) => {
    if (navMenu && navToggle &&
        !navMenu.contains(e.target) &&
        !navToggle.contains(e.target) &&
        navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Smooth scrolling untuk anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    }
});

// Chat simulation
function simulateChat() {
    const chatMessages = document.querySelector('.chat-messages');
    if (!chatMessages) return;

    const messages = [
        { type: 'received', text: 'Paket Pro kami termasuk 3 nomor WhatsApp dan 2000 pesan/bulan. Mau lihat detail lengkap?' },
        { type: 'sent', text: 'Bisa lihat fitur lengkapnya?' },
        { type: 'received', text: 'Tentu! Berikut fitur utama Paket Pro:' }
    ];

    let delay = 2000;
    messages.forEach((message) => {
        setTimeout(() => {
            const messageDiv = document.createElement('div');
            messageDiv.className = `message ${message.type}`;
            messageDiv.innerHTML = `<p>${message.text}</p>`;

            chatMessages.appendChild(messageDiv);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, delay);
        delay += 2000;
    });
}

// Initialize chat simulation only on larger screens
if (window.innerWidth > 768) {
    setTimeout(simulateChat, 3000);
}

// Optimize for mobile performance
if ('ontouchstart' in window) {
    // Add touch-friendly class for mobile devices
    document.body.classList.add('touch-device');

    // Reduce animations on mobile for better performance
    const style = document.createElement('style');
    style.textContent = `
        @media (max-width: 768px) {
            *, *::before, *::after {
                animation-duration: 0.3s !important;
                transition-duration: 0.3s !important;
            }
        }
    `;
    document.head.appendChild(style);
}

// Lazy load images for better performance
const images = document.querySelectorAll('img');
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
            }
            observer.unobserve(img);
        }
    });
});

images.forEach(img => {
    if (img.dataset.src) {
        imageObserver.observe(img);
    }
});

// Quick reply interaction
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('quick-reply') || e.target.closest('.quick-reply button')) {
        const button = e.target.tagName === 'BUTTON' ? e.target : e.target.closest('button');
        if (button) {
            const chatMessages = document.querySelector('.chat-messages');
            const messageDiv = document.createElement('div');
            messageDiv.className = 'message sent';
            messageDiv.innerHTML = `<p>${button.textContent}</p>`;
            chatMessages.appendChild(messageDiv);
            chatMessages.scrollTop = chatMessages.scrollHeight;

            // Scroll ke section pricing jika memilih paket
            if (button.textContent === 'Basic' || button.textContent === 'Pro' || button.textContent === 'Enterprise') {
                setTimeout(() => {
                    document.getElementById('pricing').scrollIntoView({
                        behavior: 'smooth'
                    });
                }, 500);
            }
        }
    }
});