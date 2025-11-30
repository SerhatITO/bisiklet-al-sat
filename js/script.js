
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Menü dışına tıklayınca kapatma
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Ürün verileri - (Veri Tabanından veriler çekilince burası silinecek. Kısacası Önemsiz geçici veriler)
window.products = [
    {
        id: 1,
        title: "Cannondale Trail 6 Dağ Bisikleti",
        price: "8.500 TL",
        location: "İstanbul",
        type: "dab",
        image: "🚵‍♂️",
        category: "Dağ Bisikleti",
        description: "Bu bisiklet hafif kullanılmış olup, teknik olarak kusursuz durumdadır. Düzenli bakımları yapılmıştır. Sadece hafta sonları kullanıldı. Yeni bisiklet aldığım için satıyorum.",
        specs: {
            marka: "Cannondale",
            model: "Trail 6",
            kategori: "Dağ Bisikleti",
            cerceve: "Alüminyum",
            vites: "21 Vites",
            fren: "Disk Fren",
            jant: "29 inç",
            durum: "İkinci El - Çok İyi"
        },
        seller: {
            name: "Ahmet Y.",
            membership: "6 aylık üye",
            rating: "⭐⭐⭐⭐⭐ (12 değerlendirme)",
            phone: "0532 123 45 67"
        },
        ilanNo: "BST12548",
        ilanTarihi: "15 Aralık 2024",
        goruntulenme: 124
    },
    {
        id: 2,
        title: "Bianchi Via Nirone 7 Yol Bisikleti",
        price: "12.000 TL",
        location: "Ankara",
        type: "yol",
        image: "🚴‍♂️",
        category: "Yol Bisikleti",
        description: "Profesyonel yol bisikleti. Carbon çerçeve, Shimano 105 grupset. Yarışlar için ideal, çok hafif ve hızlı.",
        specs: {
            marka: "Bianchi",
            model: "Via Nirone 7",
            kategori: "Yol Bisikleti",
            cerceve: "Karbon",
            vites: "22 Vites",
            fren: "Kaliper Fren",
            jant: "28 inç",
            durum: "İkinci El - Mükemmel"
        },
        seller: {
            name: "Mehmet K.",
            membership: "1 yıllık üye",
            rating: "⭐⭐⭐⭐⭐ (8 değerlendirme)",
            phone: "0533 456 78 90"
        },
        ilanNo: "BST12549",
        ilanTarihi: "14 Aralık 2024",
        goruntulenme: 89
    },
    {
        id: 3,
        title: "Scott Sub Cross 40 Şehir Bisikleti",
        price: "6.200 TL",
        location: "İzmir",
        type: "sehir",
        image: "🚲",
        category: "Şehir Bisikleti",
        description: "Şehir içi kullanım için ideal, konforlu sürüş. Bagaj ve çamurluk dahil. Günlük kullanım için perfect.",
        specs: {
            marka: "Scott",
            model: "Sub Cross 40",
            kategori: "Şehir Bisikleti",
            cerceve: "Alüminyum",
            vites: "8 Vites",
            fren: "V-Fren",
            jant: "28 inç",
            durum: "İkinci El - İyi"
        },
        seller: {
            name: "Ayşe D.",
            membership: "3 aylık üye",
            rating: "⭐⭐⭐⭐ (5 değerlendirme)",
            phone: "0534 789 01 23"
        },
        ilanNo: "BST12550",
        ilanTarihi: "13 Aralık 2024",
        goruntulenme: 156
    },
    {
        id: 4,
        title: "Specialized Turbo Vado SL Elektrikli",
        price: "25.000 TL",
        location: "Bursa",
        type: "elektrikli",
        image: "⚡",
        category: "Elektrikli Bisiklet",
        description: "Elektrikli bisiklet, 120 km menzil. Akıllı asistan sistemi, 4 farklı destek modu. Neredeyse sıfır.",
        specs: {
            marka: "Specialized",
            model: "Turbo Vado SL",
            kategori: "Elektrikli Bisiklet",
            cerceve: "Alüminyum",
            vites: "10 Vites",
            fren: "Hidrolik Disk",
            jant: "29 inç",
            durum: "İkinci El - Sıfıra Yakın"
        },
        seller: {
            name: "Deniz T.",
            membership: "2 yıllık üye",
            rating: "⭐⭐⭐⭐⭐ (15 değerlendirme)",
            phone: "0535 012 34 56"
        },
        ilanNo: "BST12551",
        ilanTarihi: "12 Aralık 2024",
        goruntulenme: 67
    },
    {
        id: 5,
        title: "Trek Marlin 5 Dağ Bisikleti",
        price: "7.800 TL",
        location: "Antalya",
        type: "dab",
        image: "🚵‍♂️",
        category: "Dağ Bisikleti",
        description: "Giriş seviyesi dağ bisikleti. Hafif ve dayanıklı. Patika sürüşleri için ideal. 6 aylık.",
        specs: {
            marka: "Trek",
            model: "Marlin 5",
            kategori: "Dağ Bisikleti",
            cerceve: "Alüminyum",
            vites: "21 Vites",
            fren: "Mekanik Disk",
            jant: "27.5 inç",
            durum: "İkinci El - Yeni Gibi"
        },
        seller: {
            name: "Can B.",
            membership: "8 aylık üye",
            rating: "⭐⭐⭐⭐ (7 değerlendirme)",
            phone: "0536 345 67 89"
        },
        ilanNo: "BST12552",
        ilanTarihi: "11 Aralık 2024",
        goruntulenme: 98
    },
    {
        id: 6,
        title: "Giant Defy Advanced 2 Yol Bisikleti",
        price: "15.500 TL",
        location: "Adana",
        type: "yol",
        image: "🚴‍♂️",
        category: "Yol Bisikleti",
        description: "Advanced carbon çerçeve, Ultegra grupset. Uzun yol turları için konforlu geometri.",
        specs: {
            marka: "Giant",
            model: "Defy Advanced 2",
            kategori: "Yol Bisikleti",
            cerceve: "Karbon",
            vites: "22 Vites",
            fren: "Hidrolik Disk",
            jant: "28 inç",
            durum: "İkinci El - Profesyonel"
        },
        seller: {
            name: "Zeynep A.",
            membership: "1.5 yıllık üye",
            rating: "⭐⭐⭐⭐⭐ (11 değerlendirme)",
            phone: "0537 678 90 12"
        },
        ilanNo: "BST12553",
        ilanTarihi: "10 Aralık 2024",
        goruntulenme: 112
    }
];

let filteredProducts = [...window.products];

// Ürünleri listeleme fonksiyonu
function loadProducts(productsToShow = filteredProducts) {
    const productGrid = document.querySelector('.product-grid');
    if (!productGrid) return;
    
    productGrid.innerHTML = '';
    
    if (productsToShow.length === 0) {
        productGrid.innerHTML = `
            <div class="no-products">
                <h3>Ürün bulunamadı</h3>
                <p>Arama kriterlerinize uygun bisiklet bulunamadı.</p>
            </div>
        `;
        return;
    }
    
    productsToShow.forEach(product => {
        const productCard = `
            <div class="product-card" data-type="${product.type}">
                <div class="product-image">
                    ${product.image}
                </div>
                <div class="product-info">
                    <h4>${product.title}</h4>
                    <p class="price">${product.price}</p>
                    <p class="location">📍 ${product.location}</p>
                    <p class="category">🏷️ ${product.category}</p>
                    <button class="btn-detay" onclick="goToProductDetail(${product.id})">İncele</button>
                </div>
            </div>
        `;
        productGrid.innerHTML += productCard;
    });
}

function goToProductDetail(productId) {
    window.location.href = `ilan-detay.html?id=${productId}`;
}

// Search Fonksiyonu
function setupSearch() {
    const searchInput = document.querySelector('.search-bar input');
    const searchButton = document.querySelector('.search-bar button');
    if (!searchInput || !searchButton) return;
    
    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        
        if (searchTerm === '') {
            filteredProducts = [...window.products];
            loadProducts();
            return;
        }
        
        filteredProducts = window.products.filter(product => {
            return (
                product.title.toLowerCase().includes(searchTerm) ||
                product.category.toLowerCase().includes(searchTerm) ||
                product.type.toLowerCase().includes(searchTerm) ||
                product.location.toLowerCase().includes(searchTerm) ||
                product.specs.marka.toLowerCase().includes(searchTerm)
            );
        });
        
        loadProducts();
        
        if (filteredProducts.length > 0) {
            showMessage(`"${searchTerm}" için ${filteredProducts.length} sonuç bulundu`);
        } else {
            showMessage(`"${searchTerm}" için sonuç bulunamadı`, 'error');
        }
    }
}

// Mesaj gösterme 
function showMessage(message, type = 'success') {
    const existingMessage = document.querySelector('.search-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `search-message ${type}`;
    messageDiv.textContent = message;
    messageDiv.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'error' ? '#e74c3c' : '#2ecc71'};
        color: white;
        padding: 1rem 2rem;
        border-radius: 5px;
        z-index: 1000;
        font-weight: bold;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    `;
    
    document.body.appendChild(messageDiv);
    
    setTimeout(() => {
        messageDiv.remove();
    }, 3000);
}

// Kategori filtreleme
function setupCategoryFilter() {
    document.querySelectorAll('.category-item').forEach(item => {
        item.addEventListener('click', function() {
            const category = this.dataset.category;
            
            document.querySelectorAll('.category-item').forEach(cat => {
                cat.classList.remove('active');
            });
            
            this.classList.add('active');
            filterProductsByCategory(category);
        });
    });
}

function filterProductsByCategory(category) {
    if (category === 'all') {
        filteredProducts = [...window.products];
    } else {
        filteredProducts = window.products.filter(product => product.type === category);
    }
    
    loadProducts();
    
    const categoryNames = {
        'dab': 'Dağ Bisikleti',
        'yol': 'Yol Bisikleti', 
        'sehir': 'Şehir Bisikleti',
        'elektrikli': 'Elektrikli Bisiklet'
    };
    
    const categoryName = categoryNames[category] || 'Tüm Bisikletler';
    showMessage(`${categoryName} kategorisi gösteriliyor (${filteredProducts.length} ürün)`);
}

// Ücretsiz İlan Ver butonu için
function setupIlanButton() {
    const ilanButtons = document.querySelectorAll('.btn-ilan');
    ilanButtons.forEach(button => {
        button.onclick = function(e) {
            e.preventDefault();
            showIlanForm();
        };
    });
}

// Modal fonksiyonları
function showIlanForm() {
    const modal = document.getElementById('ilanModal');
    if (modal) {
        modal.style.display = 'block';
    } else {
        alert('Ücretsiz ilan ver formu yakında eklenecek!');
    }
}

function closeIlanForm() {
    const modal = document.getElementById('ilanModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelector('.product-grid')) {
        loadProducts();
        setupSearch();
        setupCategoryFilter();
    }
    
    setupIlanButton();
    
    // İlan formu gönderimi
    const ilanForm = document.getElementById('ilanForm');
    if (ilanForm) {
        ilanForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('✅ İlanınız başarıyla gönderildi!\n\nİlanınız incelendikten sonra yayınlanacaktır. Teşekkür ederiz!');
            closeIlanForm();
            this.reset();
        });
    }
    
    // Modal dışına tıklayınca kapatma
    window.onclick = function(event) {
        const modal = document.getElementById('ilanModal');
        if (event.target === modal) {
            closeIlanForm();
        }
    }
    
    // Smooth scroll için
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
});