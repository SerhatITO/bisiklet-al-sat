
document.addEventListener('DOMContentLoaded', function() {
    
    if (!window.products) {
        window.products = [
            {
                id: 1,
                title: "Cannondale Trail 6 Dağ Bisikleti",
                price: "8.500 TL",
                location: "İstanbul",
                type: "dab",
                image: "🚵‍♂️",
                category: "Dağ Bisikleti",
                description: "Bu bisiklet hafif kullanılmış olup, teknik olarak kusursuz durumdadır.",
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
                description: "Profesyonel yol bisikleti. Carbon çerçeve, Shimano 105 grupset.",
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
            }
        ];
    }
    
    loadProductDetail();
});

function getProductIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = parseInt(urlParams.get('id'));
    return isNaN(id) ? 1 : id; // Varsayılan olarak 1. bisiklet
}

// Ürün detayını yükle
function loadProductDetail() {
    const productId = getProductIdFromURL();
    const product = window.products.find(p => p.id === productId);
    
    if (product) {
        displayProductDetail(product);
    } else {
        document.getElementById('productDetailContent').innerHTML = `
            <section class="product-detail-hero">
                <div class="container">
                    <h1>Ürün Bulunamadı</h1>
                    <p>Bu bisiklet artık satışta değil veya mevcut değil.</p>
                </div>
            </section>
            <section class="product-detail">
                <div class="container">
                    <div style="text-align: center; padding: 3rem;">
                        <h3>Bu bisiklet bulunamadı</h3>
                        <p>Ana sayfaya dönerek diğer bisikletlere göz atabilirsiniz.</p>
                        <a href="index.html" class="read-more" style="display: inline-block; margin-top: 1rem;">Ana Sayfaya Dön</a>
                    </div>
                </div>
            </section>
        `;
    }
}

// Ürün detayını göster
function displayProductDetail(product) {
    const container = document.getElementById('productDetailContent');
    
    // Benzer Ürünleri Bul
    const similarProducts = window.products
        .filter(p => p.id !== product.id && p.type === product.type)
        .slice(0, 2);
    
    container.innerHTML = `
        <section class="product-detail-hero">
            <div class="container">
                <h1>${product.title}</h1>
                <p>${product.location} • 2 gün önce eklendi</p>
            </div>
        </section>

        <section class="product-detail">
            <div class="container">
                <div class="detail-grid">
                    <div class="product-gallery">
                        <div class="main-image">
                            <div class="image-placeholder">${product.image}</div>
                        </div>
                        <div class="image-thumbnails">
                            <div class="thumb">${product.image}</div>
                            <div class="thumb">📏</div>
                            <div class="thumb">🔧</div>
                        </div>
                    </div>
                    
                    <div class="product-info">
                        <div class="price-section">
                            <h2>${product.price}</h2>
                            <p class="location">📍 ${product.location}</p>
                            <button class="btn-contact" onclick="contactSeller('${product.seller.phone}', '${product.title}')">📞 Satıcıyı Ara</button>
                            <button class="btn-message" onclick="sendMessage('${product.seller.name}')">💬 Mesaj Gönder</button>
                        </div>
                        
                        <div class="seller-info">
                            <h3>Satıcı Bilgileri</h3>
                            <p><strong>Ad:</strong> ${product.seller.name}</p>
                            <p><strong>Üyelik:</strong> ${product.seller.membership}</p>
                            <p><strong>Güvenilirlik:</strong> ${product.seller.rating}</p>
                        </div>
                        
                        <div class="product-specs">
                            <h3>Teknik Özellikler</h3>
                            <ul>
                                <li><strong>Marka:</strong> ${product.specs.marka}</li>
                                <li><strong>Model:</strong> ${product.specs.model}</li>
                                <li><strong>Kategori:</strong> ${product.specs.kategori}</li>
                                <li><strong>Çerçeve:</strong> ${product.specs.cerceve}</li>
                                <li><strong>Vites:</strong> ${product.specs.vites}</li>
                                <li><strong>Fren:</strong> ${product.specs.fren}</li>
                                <li><strong>Jant:</strong> ${product.specs.jant}</li>
                                <li><strong>Durum:</strong> ${product.specs.durum}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div class="product-description">
                    <h3>Açıklama</h3>
                    <p>${product.description}</p>
                    
                    <h4>Özellikler:</h4>
                    <ul>
                        <li>${product.specs.cerceve} çerçeve</li>
                        <li>${product.specs.vites} sistemi</li>
                        <li>${product.specs.fren}</li>
                        <li>${product.specs.jant} jantlar</li>
                        <li>Amortisörlü maşa</li>
                        <li>Hafif ve dayanıklı</li>
                    </ul>
                    
                    <h4>İlan Detayları:</h4>
                    <ul>
                        <li><strong>İlan No:</strong> ${product.ilanNo}</li>
                        <li><strong>İlan Tarihi:</strong> ${product.ilanTarihi}</li>
                        <li><strong>Son Ziyaret:</strong> 2 saat önce</li>
                        <li><strong>Görüntülenme:</strong> ${product.goruntulenme} kez</li>
                    </ul>
                </div>
                
                ${similarProducts.length > 0 ? `
                <div class="similar-products">
                    <h3>Benzer İlanlar</h3>
                    <div class="similar-grid">
                        ${similarProducts.map(similar => `
                            <div class="similar-item" onclick="goToProductDetail(${similar.id})">
                                <div class="similar-image">${similar.image}</div>
                                <div class="similar-info">
                                    <h4>${similar.title}</h4>
                                    <p class="price">${similar.price}</p>
                                    <p class="location">${similar.location}</p>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                ` : ''}
            </div>
        </section>
    `;
    
    // Sayfa başlığını güncelle
    document.title = `${product.title} - BisikletAlSat`;
    
    // Meta description güncelle
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
        metaDesc.setAttribute('content', 
            `${product.title} - ${product.price} - ${product.location}. ${product.description.substring(0, 150)}...`);
    }
}

function contactSeller(phone, productTitle) {
    alert(`📞 Satıcıyı ara: ${phone}\n\nÜrün: ${productTitle}\n\nLütfen bisiklet hakkında detaylı bilgi almak için arayın.`);
}

function sendMessage(sellerName) {
    const message = prompt(`${sellerName} adlı satıcıya göndermek istediğiniz mesajı yazın:`);
    if (message) {
        alert('💬 Mesajınız gönderildi!\n\nSatıcı en kısa sürede dönüş yapacaktır.');
    }
}

// Ana sayfadaki fonksiyonlara erişim
function goToProductDetail(productId) {
    window.location.href = `ilan-detay.html?id=${productId}`;
}

// Modal fonksiyonları
function showIlanForm() {
    const modal = document.getElementById('ilanModal');
    if (modal) {
        modal.style.display = 'block';
    }
}

function closeIlanForm() {
    const modal = document.getElementById('ilanModal');
    if (modal) {
        modal.style.display = 'none';
    }
}