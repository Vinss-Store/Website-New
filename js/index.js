// Mobile Navigation (jika ada)
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded - Starting initialization');
    
    // ==================== BACKGROUND MUSIC AUTOPLAY ====================
    
    function initBackgroundMusic() {
        console.log('Initializing background music...');
        
        const audio = document.getElementById('backgroundMusic');
        
        if (!audio) {
            console.error('❌ Background music element not found!');
            return;
        }
        
        console.log('✅ Audio element found');
        
        // Set volume rendah (30%)
        audio.volume = 0.3;
        
        // Cek jika audio sudah bisa diputar
        audio.addEventListener('canplay', () => {
            console.log('✅ Audio can be played now');
            
            // Strategy 1: Coba play langsung
            const playAudio = () => {
                const playPromise = audio.play();
                
                if (playPromise !== undefined) {
                    playPromise.then(() => {
                        console.log('🎵 Background music started successfully');
                        localStorage.setItem('music_autoplay', 'true');
                    }).catch(error => {
                        console.log('❌ Autoplay blocked:', error.name);
                        
                        // Strategy 2: Coba setelah sedikit delay
                        setTimeout(() => {
                            audio.play().then(() => {
                                console.log('✅ Music started after timeout');
                            }).catch(e => {
                                console.log('❌ Still blocked, waiting for user interaction');
                            });
                        }, 1000);
                    });
                }
            };
            
            // Coba play setelah semua resource loaded
            if (document.readyState === 'complete') {
                playAudio();
            } else {
                window.addEventListener('load', playAudio);
            }
        });
        
        // Tambahkan error handler
        audio.addEventListener('error', (e) => {
            console.error('Audio error:', audio.error);
            console.error('Error code:', audio.error ? audio.error.code : 'unknown');
            
            // Cek file path
            console.log('Audio src:', audio.currentSrc);
            console.log('Network state:', audio.networkState);
            console.log('Ready state:', audio.readyState);
        });
        
        // Tambahkan event untuk user interaction
        const startMusicOnInteraction = () => {
            console.log('🎯 User interaction detected, starting music...');
            
            audio.play().then(() => {
                console.log('✅ Music started after user interaction');
                
                // Hapus event listeners setelah berhasil
                document.removeEventListener('click', startMusicOnInteraction);
                document.removeEventListener('touchstart', startMusicOnInteraction);
                document.removeEventListener('keydown', startMusicOnInteraction);
            }).catch(e => {
                console.log('❌ Still cannot play after interaction:', e.name);
            });
        };
        
        // Listen for any user interaction
        document.addEventListener('click', startMusicOnInteraction, { once: true });
        document.addEventListener('touchstart', startMusicOnInteraction, { once: true });
        document.addEventListener('keydown', startMusicOnInteraction, { once: true });
        
        // Handle page visibility
        document.addEventListener('visibilitychange', function() {
            if (document.hidden) {
                audio.pause();
            } else if (!audio.paused) {
                audio.play().catch(e => console.log('Cannot resume:', e));
            }
        });
    }

    // Start music initialization
    initBackgroundMusic();

    // ==================== TAB SWITCHING FUNCTIONALITY ====================
    // ... (kode tab switching yang sama) ...

    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            tabButtons.forEach(btn => {
                btn.classList.remove('active');
            });
            
            this.classList.add('active');
            
            tabContents.forEach(content => {
                content.classList.remove('active');
            });
            
            const activeTab = document.getElementById(`${tabId}-tab`);
            if (activeTab) {
                activeTab.classList.add('active');
            }
        });
    });

    const firstTabBtn = document.querySelector('.tab-btn[data-tab="about"]');
    if (firstTabBtn) {
        firstTabBtn.classList.add('active');
    }

    // ==================== PRICING DATA ====================
    // ... (kode pricing data yang sama) ...
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

    // ==================== SERVICES DATA ====================
    // ... (kode services data yang sama) ...

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

    // ==================== MODAL FUNCTIONALITY ====================
    // ... (kode modal functionality yang sama) ...

    const modal = document.getElementById('detailModal');
    const closeModalBtns = document.querySelectorAll('.close-modal, .close-modal-btn');
    const detailButtons = document.querySelectorAll('.btn-detail');
    
    detailButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const plan = this.getAttribute('data-plan');
            openModal(plan);
        });
    });
    
    closeModalBtns.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            closeModal();
        });
    });
    
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
    
    function openModal(plan) {
        const data = pricingData[plan];
        if (!data || !modal) return;
        
        document.getElementById('modalTitle').textContent = data.title;
        document.getElementById('modalIcon').src = data.image;
        document.getElementById('modalIcon').alt = data.title;
        document.getElementById('modalDescription').textContent = data.description;
        
        const featuresList = document.getElementById('modalFeatures');
        featuresList.innerHTML = '';
        data.features.forEach(feature => {
            const li = document.createElement('li');
            li.innerHTML = `<i class="fas fa-check"></i> ${feature}`;
            featuresList.appendChild(li);
        });
        
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
    
    function closeModal() {
        const modal = document.getElementById('detailModal');
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    const serviceModal = document.getElementById('serviceModal');
    const closeServiceModalBtns = document.querySelectorAll('.close-service-modal, .close-service-modal-btn');
    const serviceDetailButtons = document.querySelectorAll('.btn-service-detail');
    
    serviceDetailButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const service = this.getAttribute('data-service');
            openServiceModal(service);
        });
    });
    
    closeServiceModalBtns.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            closeServiceModal();
        });
    });
    
    window.addEventListener('click', function(e) {
        if (e.target === serviceModal) {
            closeServiceModal();
        }
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && serviceModal.style.display === 'block') {
            closeServiceModal();
        }
    });
    
    function openServiceModal(service) {
        const data = servicesData[service];
        if (!data || !serviceModal) return;
        
        document.getElementById('serviceModalTitle').textContent = data.title;
        document.getElementById('serviceModalIcon').className = data.icon;
        document.getElementById('serviceModalDescription').textContent = data.description;
        
        const featuresList = document.getElementById('serviceModalFeatures');
        featuresList.innerHTML = '';
        data.features.forEach(feature => {
            const li = document.createElement('li');
            li.innerHTML = `<i class="fas fa-check"></i> ${feature}`;
            featuresList.appendChild(li);
        });
        
        const processList = document.getElementById('serviceModalProcess');
        processList.innerHTML = '';
        data.process.forEach(step => {
            const li = document.createElement('li');
            li.textContent = step;
            processList.appendChild(li);
        });
        
        serviceModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
    
    function closeServiceModal() {
        const serviceModal = document.getElementById('serviceModal');
        serviceModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    // ==================== TELEGRAM REQUEST SYSTEM ====================
    // ... (kode telegram system yang sama) ...

    const telegramForm = document.getElementById('telegramRequestForm');
    
    if (telegramForm) {
        telegramForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = {
                name: document.getElementById('tg-name').value.trim(),
                username: document.getElementById('tg-username').value.trim(),
                type: document.getElementById('tg-request-type').value,
                details: document.getElementById('tg-details').value.trim(),
                timestamp: new Date().toLocaleString('id-ID'),
                page: window.location.href,
                source: 'Website Vinss Botz'
            };
            
            if (!validateTelegramForm(formData)) {
                return;
            }
            
            sendToTelegram(formData);
        });
    }
    
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
    
    function showTelegramMessage(message, type) {
        const existingMsg = document.querySelector('.telegram-message');
        if (existingMsg) {
            existingMsg.remove();
        }
        
        const messageDiv = document.createElement('div');
        messageDiv.className = `telegram-message ${type}`;
        messageDiv.innerHTML = `
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
            <div>${message}</div>
        `;
        
        telegramForm.parentNode.insertBefore(messageDiv, telegramForm);
        
        const removeTime = type === 'error' ? 5000 : 8000;
        setTimeout(() => {
            if (messageDiv.parentNode) {
                messageDiv.remove();
            }
        }, removeTime);
    }
    
    function sendToTelegram(data) {
        const TELEGRAM_USERNAME = 'VinssBoyz';
        
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
        
        const encodedMessage = encodeURIComponent(message);
        const telegramUrl = `https://t.me/${TELEGRAM_USERNAME}?text=${encodedMessage}`;
        
        const submitBtn = document.getElementById('tg-submit-btn');
        const originalText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Mengirim...';
        
        saveRequestToStorage(data);
        
        setTimeout(() => {
            showTelegramMessage('Request berhasil dibuat! Membuka Telegram...', 'success');
            
            telegramForm.reset();
            
            setTimeout(() => {
                window.open(telegramUrl, '_blank');
            }, 1500);
            
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
        }, 1000);
    }
    
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
        } catch (error) {
            console.error('Error saving request:', error);
        }
    }
    
    const usernameInput = document.getElementById('tg-username');
    if (usernameInput) {
        usernameInput.addEventListener('input', function(e) {
            let value = e.target.value;
            
            if (value.startsWith('@')) {
                value = value.substring(1);
            }
            
            value = value.replace(/[^a-zA-Z0-9_]/g, '');
            
            e.target.value = value.toLowerCase();
        });
    }
    
    const profileImg = document.querySelector('.profile-img');
    
    if (profileImg) {
        profileImg.addEventListener('error', function() {
            this.style.opacity = '0';
        });
        
        profileImg.addEventListener('load', function() {
            this.style.opacity = '1';
        });
    }

    // ==================== BACK TO TOP BUTTON ====================
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

    function fixVH() {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    window.addEventListener('resize', fixVH);
    window.addEventListener('orientationchange', fixVH);
    fixVH();

    window.addEventListener('orientationchange', function() {
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 100);
    });

    document.body.classList.add('loading');
    window.addEventListener('load', function() {
        setTimeout(() => {
            document.body.classList.remove('loading');
        }, 300);
    });
});