// Mobile Navigation (jika ada)
document.addEventListener('DOMContentLoaded', function() {
    // Tab Switching Functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Remove active class from all buttons
            tabButtons.forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Hide all tab contents
            tabContents.forEach(content => {
                content.classList.remove('active');
            });
            
            // Show selected tab content
            const activeTab = document.getElementById(`${tabId}-tab`);
            if (activeTab) {
                activeTab.classList.add('active');
            }
        });
    });

    // Initialize first tab as active
    const firstTabBtn = document.querySelector('.tab-btn[data-tab="about"]');
    if (firstTabBtn) {
        firstTabBtn.classList.add('active');
    }

    // Pricing Data
    const pricingData = {
        basic: {
            title: "SC BOT TELE JASHARE",
            image: "./image/jashare.png",
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
            image: "./image/createmt.png",
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
            image: "./image/wamd.png",
            description: "Script Bot Ini Dapat Membantu Anda Bermain Dan Untuk Menjaga Group Dari Link Group Lainya.",
            features: [
                "Bermain Bot Dengan Fitur Game",
                "Bermain Bot Dengan Fitur RPG",
                "Downloader Video Sosmes (tiktok, ig dll)",
                "Membuat Sticker",
                "Menggunakan Fitur Tools"
            ]
        },
        infochannel: {
            title: "Sc Bot Telegram Gacha",
            image: "./image/gacha.png",
            description: "Bot Telegram Untuk Mendapatkan Sebuah Item Melalui Fitur Gacha Hadianya Random Bisa Zip Dan File Lainya",
            features: [
                "Gacha Item",
                "Menggunakan Limit Untuk Gacha",
                "Gacha Otomatis 10x",
                "Gacha Premium Item Legend",
                "Setiap Pengguna Gacha Harus Join Ch",
                "Run di Panel dan Termux"
            ]
        },
        admingroup: {
            title: "Sc Bot Telegram MD",
            image: "./image/telemd.png",
            description: "Bot Telegram Multi Device Ini Mempunyai Banyak Fitur Dapat Membantu Menjaga Group Otomatis",
            features: [
                "Auto Hapus Pesan Promosi / Penjualan",
                "Auto Hapus Pesan Yang Berisi Link Group Dan Ch",
                "Membuat Gambar Iphone Quick Chat",
                "Download Video Sosmed",
                "Game Menu",
                "Islamic Menu"
            ]
        }
    };

    // Data untuk Jasa Layanan
    const servicesData = {
        "jasa-wa": {
            title: "Jasa Membuat SC Bot WhatsApp",
            icon: "fab fa-whatsapp",
            description: "Jasa pembuatan script (SC) Bot WhatsApp custom berbasis Baileys / WhatsApp Multi Device. Cocok untuk kebutuhan bisnis, komunitas, maupun personal seperti auto-reply, auto share promosi, push kontak, downloader, sticker, dan berbagai fitur automasi WhatsApp lainnya.",
            features: [
                "Bot WhatsApp Custom dengan fitur sesuai kebutuhan",
                "Integrasi dengan API ",
                "Database management untuk penyimpanan data",
                "Multi-language support jika diperlukan",
                "Dashboard untuk monitoring aktivitas bot",
                "Fitur automasi pesan dan broadcast"
            ],
            process: [
                "Konsultasi kebutuhan dan spesifikasi bot",
                "Analisis kebutuhan dan estimasi waktu pengerjaan",
                "Development dan pengujian fitur",
                "Deployment dan konfigurasi server",
                "Training penggunaan dan dokumentasi",
                "Support 1 bulan setelah delivery"
            ]
        },

        "jasa-tele": {
            title: "Jasa Membuat SC Bot Telegram",
            icon: "fab fa-telegram",
            description: "Jasa pembuatan script (SC) Bot Telegram menggunakan Node.js atau Python (Telegraf / Pyrogram). Mendukung berbagai fitur seperti bot admin grup, auto posting channel, downloader, PPOB, OTP / SMS automation, hingga bot custom sesuai request.",
            features: [
                "Bot Telegram dengan fitur custom sesuai kebutuhan",
                "Multi-function (admin tools, automasi, dll)",
                "Hosting gratis 1 bulan di server premium",
                "Dashboard monitoring yang user-friendly",
                "Integrasi dengan payment gateway",
                "Support multi-language jika diperlukan"
            ],
            process: [
                "Diskusi kebutuhan dan tujuan bot",
                "Wireframing dan planning fitur",
                "Development dan testing menyeluruh",
                "Deployment dan konfigurasi hosting",
                "Training penggunaan untuk admin",
                "Maintenance dan support 1 bulan"
            ]
        },

        "jasa-website": {
            title: "Jasa Pembuatan Website",
            icon: "fas fa-code",
            description: "Jasa pembuatan website khusus untuk kebutuhan bot dan sistem digital seperti landing page bot, dashboard monitoring bot WhatsApp/Telegram, halaman order layanan, serta website admin berbasis Laravel atau frontend modern.",
            features: [
                "Website responsive (mobile, tablet, desktop)",
                "SEO friendly structure untuk peringkat Google",
                "Domain & hosting included (1 tahun pertama)",
                "CMS (WordPress/Laravel) sesuai kebutuhan",
                "SSL Certificate untuk keamanan",
                "Backup rutin dan maintenance"
            ],
            process: [
                "Analisis kebutuhan dan tujuan website",
                "UI/UX design dan wireframing",
                "Development frontend dan backend",
                "Content integration dan SEO setup",
                "Testing (speed, security, responsive)",
                "Launch dan training penggunaan"
            ]
        },

        "jasa-unband": {
            title: "Jasa Unband WhatsApp",
            icon: "fas fa-unlock-alt",
            description: "Jasa unband WhatsApp khusus untuk akun yang terkena banned akibat penggunaan bot, auto share, spam, atau aktivitas tidak wajar. Menggunakan metode aman dan sudah terbukti, tanpa perlu ganti nomor.",
            features: [
                "Unband WhatsApp Permanent (tidak sementara)",
                "Unband Spam",
                "Unband Perma Tinjau",
                "Unband Perma Hard",
                "Unband Perma Batu",
                "Metode aman dan terpercaya"
            ],
            process: [
                "Konfirmasi nomor dan penyebab banned",
                "Proses unband dengan metode terbaru",
                "Verifikasi dan testing akses",
                "Bimbingan konfigurasi ulang WhatsApp",
                "Tips agar tidak terkena banned lagi",
                "Mendapatkan jawaban dalan pengamanan"
            ]
        }
    };

    // Modal Functionality untuk Produk
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

    // Modal Functionality untuk Jasa
    const serviceModal = document.getElementById('serviceModal');
    const closeServiceModalBtns = document.querySelectorAll('.close-service-modal, .close-service-modal-btn');
    const serviceDetailButtons = document.querySelectorAll('.btn-service-detail');
    
    // Open Service Modal
    serviceDetailButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const service = this.getAttribute('data-service');
            openServiceModal(service);
        });
    });
    
    // Close Service Modal
    closeServiceModalBtns.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            closeServiceModal();
        });
    });
    
    // Close on outside click
    window.addEventListener('click', function(e) {
        if (e.target === serviceModal) {
            closeServiceModal();
        }
    });
    
    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && serviceModal.style.display === 'block') {
            closeServiceModal();
        }
    });
    
    function openServiceModal(service) {
        const data = servicesData[service];
        if (!data || !serviceModal) return;
        
        // Set modal content
        document.getElementById('serviceModalTitle').textContent = data.title;
        document.getElementById('serviceModalIcon').className = data.icon;
        document.getElementById('serviceModalDescription').textContent = data.description;
        
        // Set features
        const featuresList = document.getElementById('serviceModalFeatures');
        featuresList.innerHTML = '';
        data.features.forEach(feature => {
            const li = document.createElement('li');
            li.innerHTML = `<i class="fas fa-check"></i> ${feature}`;
            featuresList.appendChild(li);
        });
        
        // Set process
        const processList = document.getElementById('serviceModalProcess');
        processList.innerHTML = '';
        data.process.forEach(step => {
            const li = document.createElement('li');
            li.textContent = step;
            processList.appendChild(li);
        });
        
        // Show modal
        serviceModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
    
    function closeServiceModal() {
        const serviceModal = document.getElementById('serviceModal');
        serviceModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    // ==================== TELEGRAM REQUEST SYSTEM ====================
    
    // Telegram Request Form Handler
    const telegramForm = document.getElementById('telegramRequestForm');
    
    if (telegramForm) {
        telegramForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('tg-name').value.trim(),
                username: document.getElementById('tg-username').value.trim(),
                type: document.getElementById('tg-request-type').value,
                details: document.getElementById('tg-details').value.trim(),
                timestamp: new Date().toLocaleString('id-ID'),
                page: window.location.href,
                source: 'Website Vinss Botz'
            };
            
            // Validate form
            if (!validateTelegramForm(formData)) {
                return;
            }
            
            // Send to Telegram
            sendToTelegram(formData);
        });
    }
    
    // Validate Telegram Form
    function validateTelegramForm(data) {
        const errors = [];
        
        if (!data.name) errors.push("Nama harus diisi");
        if (!data.username) errors.push("Username Telegram harus diisi");
        if (!data.type) errors.push("Jenis request harus dipilih");
        if (!data.details) errors.push("Detail request harus diisi");
        
        if (data.username && data.username.startsWith('@')) {
            errors.push("Username tanpa @, contoh: vinss_unband");
        }
        
        if (data.username && !/^[a-zA-Z0-9_]{5,}$/.test(data.username)) {
            errors.push("Username harus minimal 5 karakter (huruf, angka, underscore)");
        }
        
        if (errors.length > 0) {
            showTelegramMessage(errors.join("<br>"), 'error');
            return false;
        }
        
        return true;
    }
    
    // Show Telegram Message
    function showTelegramMessage(message, type) {
        // Remove existing message
        const existingMsg = document.querySelector('.telegram-message');
        if (existingMsg) {
            existingMsg.remove();
        }
        
        // Create message
        const messageDiv = document.createElement('div');
        messageDiv.className = `telegram-message ${type}`;
        messageDiv.innerHTML = `
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
            <div>${message}</div>
        `;
        
        // Insert before form
        telegramForm.parentNode.insertBefore(messageDiv, telegramForm);
        
        // Auto remove after some time
        const removeTime = type === 'error' ? 5000 : 8000;
        setTimeout(() => {
            if (messageDiv.parentNode) {
                messageDiv.remove();
            }
        }, removeTime);
    }
    
    // Send to Telegram
    function sendToTelegram(data) {
        // === KONFIGURASI TELEGRAM ===
        // Ganti dengan username Telegram Anda (tanpa @)
        const TELEGRAM_USERNAME = 'VinssBoyz'; // Ganti dengan username Telegram Anda
        
        // Format message untuk Telegram
        const message = `
📋 *NEW REQUEST - VINSS BOTZ WEBSITE*

👤 *Nama:* ${data.name}
📱 *Telegram:* @${data.username}
🏷️ *Jenis Request:* ${getRequestTypeText(data.type)}
🕐 *Waktu:* ${data.timestamp}

📝 *Detail Request:*
${data.details}

🔗 *Dari Website:* ${data.source}
        `;
        
        // Encode message untuk URL
        const encodedMessage = encodeURIComponent(message);
        
        // URL untuk membuka Telegram dengan pesan yang sudah diisi
        const telegramUrl = `https://t.me/${TELEGRAM_USERNAME}?text=${encodedMessage}`;
        
        // Show loading
        const submitBtn = document.getElementById('tg-submit-btn');
        const originalText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Mengirim...';
        
        // Simpan ke local storage (untuk tracking)
        saveRequestToStorage(data);
        
        // Tampilkan pesan sukses
        setTimeout(() => {
            showTelegramMessage('Request berhasil dibuat! Membuka Telegram...', 'success');
            
            // Reset form
            telegramForm.reset();
            
            // Open Telegram after a short delay
            setTimeout(() => {
                window.open(telegramUrl, '_blank');
            }, 1500);
            
            // Reset button
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
        }, 1000);
    }
    
    // Helper function untuk jenis request
    function getRequestTypeText(type) {
        const types = {
            'script-wa': 'Script Bot WhatsApp',
            'script-tele': 'Script Bot Telegram',
            'website': 'Website Custom',
            'unband': 'Jasa Unband WhatsApp',
            'modifikasi': 'Modifikasi Script',
            'hosting': 'Hosting & Deployment',
            'consultation': 'Konsultasi Teknis',
            'other': 'Lainnya'
        };
        return types[type] || type;
    }
    
    // Save request to localStorage (optional)
    function saveRequestToStorage(data) {
        try {
            const requests = JSON.parse(localStorage.getItem('vinss_requests') || '[]');
            requests.push({
                ...data,
                id: Date.now(),
                status: 'pending',
                read: false
            });
            localStorage.setItem('vinss_requests', JSON.stringify(requests));
            console.log('Request saved to localStorage:', data);
        } catch (error) {
            console.error('Error saving request:', error);
        }
    }
    
    // Auto format Telegram username
    const usernameInput = document.getElementById('tg-username');
    if (usernameInput) {
        usernameInput.addEventListener('input', function(e) {
            let value = e.target.value;
            
            // Remove @ if user types it
            if (value.startsWith('@')) {
                value = value.substring(1);
            }
            
            // Remove spaces and special characters (only allow letters, numbers, underscore)
            value = value.replace(/[^a-zA-Z0-9_]/g, '');
            
            e.target.value = value.toLowerCase();
        });
    }
    
    // Handle image errors
    const profileImg = document.querySelector('.profile-img');
    
    if (profileImg) {
        profileImg.addEventListener('error', function() {
            console.log('Profile image failed to load');
            this.style.opacity = '0';
        });
        
        profileImg.addEventListener('load', function() {
            this.style.opacity = '1';
        });
    }

    // Back to Top Button
    const backToTopBtn = document.getElementById('backToTop');
    
    if (backToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });
        
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Smooth scroll untuk internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (!target) return;
            
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });

    // Fix for iOS Safari 100vh issue
    function fixVH() {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    window.addEventListener('resize', fixVH);
    window.addEventListener('orientationchange', fixVH);
    fixVH();

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
});