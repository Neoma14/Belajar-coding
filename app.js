/**
 * dy.florist — Modern Boutique Web Application
 * Florist • Gift • Craft • Coffee
 */

// ==========================================
// 1. DATA: PRODUCT CATALOG
// ==========================================
const PRODUCTS = [
  // FLORIST
  {
    id: 'f1',
    name: 'Serenade Pink Korean Rose Bouquet',
    category: 'florist',
    categoryName: 'Florist',
    price: 320000,
    rating: 5.0,
    reviews: 142,
    badge: 'Best Seller',
    image: './assets/bouquet.jpg',
    description: 'Rangkaian mawar pink premium, peony, baby breath, dan eucalyptus segar dengan teknik Korean wrapping matte blush pink & pita satin ivory. Cocok untuk anniversary & hari spesial.'
  },
  {
    id: 'f2',
    name: 'Royal Velvet Pastel Bloom Box',
    category: 'florist',
    categoryName: 'Florist',
    price: 450000,
    rating: 4.9,
    reviews: 89,
    badge: 'Signature',
    image: './assets/bloom_box.jpg',
    description: 'Kotak beludru pink mewah berisi kombinasi mawar peach, hydrangea biru lembut, dan lisianthus ungu. Dilengkapi pita emas dan oasis penjaga kesegaran hingga 7 hari.'
  },
  {
    id: 'f3',
    name: 'Graceful Sunset Tulip & Rose Wrap',
    category: 'florist',
    categoryName: 'Florist',
    price: 375000,
    rating: 4.9,
    reviews: 64,
    badge: 'Popular',
    image: './assets/bouquet.jpg',
    description: 'Kombinasi bunga tulip impor dan mawar bernuansa hangat orange-peach, dibalut kertas linen kraft premium dengan aksen pita copper elegan.'
  },
  {
    id: 'f4',
    name: 'Grand Opening Standing Bloom',
    category: 'florist',
    categoryName: 'Florist',
    price: 750000,
    rating: 5.0,
    reviews: 51,
    badge: 'Celebration',
    image: './assets/bloom_box.jpg',
    description: 'Standing flower mewah dengan rangkaian bunga segar melimpah untuk ucapan selamat pembukaan bisnis, kelulusan, atau pernikahan megah.'
  },

  // GIFT
  {
    id: 'g1',
    name: 'Luxe Bloom & Scented Candle Hamper',
    category: 'gift',
    categoryName: 'Gift & Hampers',
    price: 495000,
    rating: 5.0,
    reviews: 112,
    badge: 'Editor Pick',
    image: './assets/gift.jpg',
    description: 'Gift box eksklusif hardbox velvet berisi preserved mini bouquet, artisan soy wax scented candle (Elysian Bloom), wick trimmer rose gold, dan kartu ucapan kustom.'
  },
  {
    id: 'g2',
    name: 'Sweet Celebration Graduation Bundle',
    category: 'gift',
    categoryName: 'Gift & Hampers',
    price: 380000,
    rating: 4.8,
    reviews: 97,
    badge: 'Gift Fav',
    image: './assets/gift.jpg',
    description: 'Paket kado wisuda manis berisi boneka teddy toga wisuda, buket bunga segar mini, sekotak Ferrero Rocher (5 pcs), dan greeting card custom nama wisudawan.'
  },
  {
    id: 'g3',
    name: 'Personalised Acrylic Blossom Box',
    category: 'gift',
    categoryName: 'Gift & Hampers',
    price: 420000,
    rating: 4.9,
    reviews: 43,
    badge: 'Custom',
    image: './assets/gift.jpg',
    description: 'Kotak akrilik transparan berlampu LED dengan lettering nama custom berhias bunga mawar preserved abadi dan parfum roll-on botanical.'
  },
  {
    id: 'g4',
    name: 'Warm Hug Newborn & Mom Hamper',
    category: 'gift',
    categoryName: 'Gift & Hampers',
    price: 520000,
    rating: 5.0,
    reviews: 38,
    badge: 'New',
    image: './assets/gift.jpg',
    description: 'Hamper premium menyambut kelahiran buah hati: floral arrangement pastel, perlengkapan bayi organik lembut, dan scented reed diffuser untuk sang ibu.'
  },

  // CRAFT
  {
    id: 'c1',
    name: 'Eternal Rose Beauty Glass Dome',
    category: 'craft',
    categoryName: 'Craft & Preserved',
    price: 420000,
    rating: 5.0,
    reviews: 156,
    badge: 'Iconic',
    image: './assets/dome.jpg',
    description: 'Mawar preserved abadi yang diawetkan khusus dalam kubah kaca bening dengan tatakan kayu solid dan untaian lampu LED fairy warm white. Tahan 2-3 tahun tanpa air.'
  },
  {
    id: 'c2',
    name: 'Botanical Dried Flower Glass Frame',
    category: 'craft',
    categoryName: 'Craft & Preserved',
    price: 290000,
    rating: 4.8,
    reviews: 62,
    badge: 'Artisan',
    image: './assets/dome.jpg',
    description: 'Bingkai foto kaca ganda dengan susunan pressed flower asli dan kaligrafi nama emas. Dekorasi meja dan dinding yang estetik bernuansa vintage.'
  },
  {
    id: 'c3',
    name: 'Preserved Wildflower Bell Jar Mini',
    category: 'craft',
    categoryName: 'Craft & Preserved',
    price: 260000,
    rating: 4.9,
    reviews: 48,
    badge: 'Compact',
    image: './assets/dome.jpg',
    description: 'Kubah kaca mini dengan rangkaian lavender, baby breath, dan bunny tail yang menawan. Cocok sebagai hadiah ulang tahun mungil dan pemanis meja belajar.'
  },
  {
    id: 'c4',
    name: 'DIY Floral Arrangement Workshop Kit',
    category: 'craft',
    categoryName: 'Craft & Preserved',
    price: 340000,
    rating: 4.9,
    reviews: 31,
    badge: 'Workshop',
    image: './assets/dome.jpg',
    description: 'Kit belajar merangkai bunga preserved lengkap dengan vas keramik, aneka dried flowers, gunting florist, kawat florikultura, dan panduan video langkah demi langkah.'
  },

  // COFFEE & CAFE
  {
    id: 'cf1',
    name: 'Signature Rose Petal Latte & Croissant',
    category: 'coffee',
    categoryName: 'Cafe & Treats',
    price: 550000 / 10, // 55.000
    rating: 5.0,
    reviews: 210,
    badge: 'Cafe Star',
    image: './assets/coffee.jpg',
    description: 'Bundling terfavorit! Cangkir hangat Rose Petal Latte dengan espresso arabika, sirup mawar asli, foam lembut ditaburi kelopak mawar edible, plus French Butter Croissant renyah.'
  },
  {
    id: 'cf2',
    name: 'Bloom & Brew Duo (Mini Bouquet + Latte)',
    category: 'coffee',
    categoryName: 'Cafe & Treats',
    price: 185000,
    rating: 5.0,
    reviews: 134,
    badge: 'Best Value',
    image: './assets/coffee.jpg',
    description: 'Spesial dine-in/takeaway dy.florist: 1 Petite Fresh Rose Bouquet + 1 Iced Spanish Lavender Latte dalam kemasan cup estetik can-sealer.'
  },
  {
    id: 'cf3',
    name: 'Matcha Strawberry Bloom Latte',
    category: 'coffee',
    categoryName: 'Cafe & Treats',
    price: 35000,
    rating: 4.9,
    reviews: 88,
    badge: 'Sweet Sip',
    image: './assets/coffee.jpg',
    description: 'Layering memukau antara selai strawberry asli buatan rumah, fresh creamy oat milk, dan foam Uji Matcha Jepang premium berbusa halus.'
  },
  {
    id: 'cf4',
    name: 'Strawberry Biscoff Croffle Box (2 Pcs)',
    category: 'coffee',
    categoryName: 'Cafe & Treats',
    price: 45000,
    rating: 4.8,
    reviews: 76,
    badge: 'Crispy',
    image: './assets/coffee.jpg',
    description: 'Croffle butter karamel renyah dengan topping cream keju vanila lembut, potongan buah strawberry segar, saus Lotus Biscoff, dan remahan biskuit wangi.'
  }
];

// WhatsApp Official Numbers
const WA_PHONE_NUMBER = '6288267108077'; // Pesan via WhatsApp
const WA_CS_NUMBER = '6287871897450';    // Layanan Pelanggan

// ==========================================
// 2. STATE MANAGEMENT
// ==========================================
let cart = JSON.parse(localStorage.getItem('dy_florist_cart')) || [];
let activeFilter = 'all';
let searchQuery = '';

// Bespoke Customizer State
const customizerState = {
  base: {
    type: 'bouquet',
    name: 'Hand Bouquet Korean',
    price: 280000,
    image: './assets/bouquet.jpg'
  },
  color: 'Signature Rose Magenta',
  wrap: 'Matte Blush Pink + Ivory Silk',
  addons: [], // array of { id, name, price }
  recipient: '',
  cardMessage: ''
};

// ==========================================
// 3. INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  renderCatalog();
  setupFilterTabs();
  setupSearch();
  setupCustomizer();
  setupCartDrawer();
  setupModals();
  setupFAQ();
  setupHeaderScroll();
  setupMobileMenu();
  updateCartBadge();
});

// Format Currency Utility
function formatIDR(amount) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  }).format(amount);
}

// ==========================================
// 4. CATALOG RENDERING & FILTERING
// ==========================================
function renderCatalog() {
  const grid = document.getElementById('productsGrid');
  const emptyState = document.getElementById('catalogEmpty');
  if (!grid) return;

  const filtered = PRODUCTS.filter(p => {
    const matchesCategory = activeFilter === 'all' || p.category === activeFilter;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.categoryName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = '';
    if (emptyState) emptyState.style.display = 'block';
    return;
  }

  if (emptyState) emptyState.style.display = 'none';

  grid.innerHTML = filtered.map(item => `
    <article class="product-card" data-id="${item.id}">
      <span class="product-badge-tag">${item.badge}</span>
      <div class="product-img-wrap">
        <img src="${item.image}" alt="${item.name}" loading="lazy">
        <button class="product-quick-view-btn" onclick="openQuickView('${item.id}')">
          Detail Produk 👁️
        </button>
      </div>
      <div class="product-info">
        <div class="product-category-meta">${item.categoryName}</div>
        <h3 class="product-title">${item.name}</h3>
        <div class="product-rating">
          ★★★★★ <span>(${item.reviews})</span>
        </div>
        <div class="product-price-row">
          <span class="product-price">${formatIDR(item.price)}</span>
          <button class="add-cart-icon-btn" onclick="addToCart('${item.id}')" title="Tambah ke Keranjang" aria-label="Tambah ${item.name} ke Keranjang">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </button>
        </div>
      </div>
    </article>
  `).join('');
}

function setupFilterTabs() {
  const tabs = document.querySelectorAll('.tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeFilter = tab.getAttribute('data-filter');
      renderCatalog();
    });
  });
}

function setupSearch() {
  const searchInput = document.getElementById('searchInput');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.trim();
    renderCatalog();
  });
}

// Global filter helper for header/pillar cards
window.filterCatalog = function(categoryKey) {
  activeFilter = categoryKey;
  const tabs = document.querySelectorAll('.tab-btn');
  tabs.forEach(tab => {
    if (tab.getAttribute('data-filter') === categoryKey) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  });

  const catalogElem = document.getElementById('catalog');
  if (catalogElem) {
    catalogElem.scrollIntoView({ behavior: 'smooth' });
  }
  renderCatalog();
};

window.resetFilters = function() {
  activeFilter = 'all';
  searchQuery = '';
  const searchInput = document.getElementById('searchInput');
  if (searchInput) searchInput.value = '';
  filterCatalog('all');
};

// ==========================================
// 5. BESPOKE STUDIO (CUSTOMIZER)
// ==========================================
function setupCustomizer() {
  // Base Type Selection
  const baseButtons = document.querySelectorAll('#customBaseOptions .option-pill');
  const baseImages = {
    bouquet: './assets/bouquet.jpg',
    bloombox: './assets/bloom_box.jpg',
    dome: './assets/dome.jpg',
    hamper: './assets/gift.jpg'
  };

  baseButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      baseButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const val = btn.dataset.value;
      const name = btn.querySelector('.opt-name').innerText;
      const price = parseInt(btn.dataset.price, 10);

      customizerState.base = {
        type: val,
        name: name,
        price: price,
        image: baseImages[val] || './assets/bouquet.jpg'
      };

      updateCustomizerSummary();
    });
  });

  // Color Palette Selection
  const colorButtons = document.querySelectorAll('#customColorOptions .color-circle-btn');
  const colorLabel = document.getElementById('selectedColorLabel');
  colorButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      colorButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const color = btn.dataset.color;
      customizerState.color = color;
      if (colorLabel) {
        colorLabel.innerHTML = `Warna Terpilih: <strong>${color}</strong>`;
      }
      updateCustomizerSummary();
    });
  });

  // Wrapping Paper
  const wrapButtons = document.querySelectorAll('#customWrapOptions .option-pill');
  wrapButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      wrapButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      customizerState.wrap = btn.dataset.wrap;
      updateCustomizerSummary();
    });
  });

  // Addons Checkboxes
  const addonCheckboxes = document.querySelectorAll('#customAddonsOptions input[type="checkbox"]');
  addonCheckboxes.forEach(chk => {
    chk.addEventListener('change', () => {
      const selected = [];
      addonCheckboxes.forEach(c => {
        if (c.checked) {
          selected.push({
            id: c.value,
            name: c.dataset.name,
            price: parseInt(c.dataset.price, 10)
          });
        }
      });
      customizerState.addons = selected;
      updateCustomizerSummary();
    });
  });

  // Recipient and Message Input
  const recipientInput = document.getElementById('customRecipientName');
  const messageInput = document.getElementById('customCardMsg');

  if (recipientInput) {
    recipientInput.addEventListener('input', (e) => {
      customizerState.recipient = e.target.value.trim();
      updateCustomizerSummary();
    });
  }

  if (messageInput) {
    messageInput.addEventListener('input', (e) => {
      customizerState.cardMessage = e.target.value.trim();
    });
  }

  // WA Order Button
  const btnOrderCustom = document.getElementById('btnOrderCustomWA');
  if (btnOrderCustom) {
    btnOrderCustom.addEventListener('click', () => {
      sendCustomOrderToWhatsApp();
    });
  }

  updateCustomizerSummary();
}

function updateCustomizerSummary() {
  const previewImg = document.getElementById('customPreviewImg');
  const baseNameEl = document.getElementById('previewBaseName');
  const colorEl = document.getElementById('previewColor');
  const wrapEl = document.getElementById('previewWrap');
  const addonsEl = document.getElementById('previewAddons');
  const recipientEl = document.getElementById('previewRecipient');
  const priceEl = document.getElementById('customTotalPrice');

  if (previewImg) previewImg.src = customizerState.base.image;
  if (baseNameEl) baseNameEl.innerText = customizerState.base.name;
  if (colorEl) colorEl.innerText = customizerState.color;
  if (wrapEl) wrapEl.innerText = customizerState.wrap;

  if (addonsEl) {
    if (customizerState.addons.length === 0) {
      addonsEl.innerText = 'Tidak ada';
    } else {
      addonsEl.innerText = customizerState.addons.map(a => a.name).join(', ');
    }
  }

  if (recipientEl) {
    recipientEl.innerText = customizerState.recipient || '-';
  }

  // Calculate Total
  let total = customizerState.base.price;
  customizerState.addons.forEach(a => { total += a.price; });

  if (priceEl) {
    priceEl.innerText = formatIDR(total);
  }
}

function sendCustomOrderToWhatsApp() {
  let total = customizerState.base.price;
  customizerState.addons.forEach(a => { total += a.price; });

  const addonsText = customizerState.addons.length > 0
    ? customizerState.addons.map(a => `- ${a.name} (${formatIDR(a.price)})`).join('\n')
    : '- Tidak ada';

  const recipient = customizerState.recipient || '(Belum diisi)';
  const message = customizerState.cardMessage || '(Kosong / Ditulis tangan sendiri)';

  const text = `🌸 *PESANAN BESPOKE CUSTOM — DY.FLORIST* 🌸\n` +
               `---------------------------------------------\n` +
               `*Tipe Rangkaian:* ${customizerState.base.name}\n` +
               `*Nuansa Warna:* ${customizerState.color}\n` +
               `*Wrapping & Pita:* ${customizerState.wrap}\n` +
               `*Add-ons Spesial:*\n${addonsText}\n\n` +
               `*Penerima:* ${recipient}\n` +
               `*Ucapan Kartu:*\n"${message}"\n` +
               `---------------------------------------------\n` +
               `*Estimasi Total:* ${formatIDR(total)}\n\n` +
               `Halo Florist dy.florist, saya ingin memesan rangkaian custom di atas. Mohon konfirmasi ketersediaan dan detail pengirimannya. Terima kasih! ✨`;

  const waUrl = `https://wa.me/${WA_PHONE_NUMBER}?text=${encodeURIComponent(text)}`;
  window.open(waUrl, '_blank');
}

// ==========================================
// 6. SHOPPING CART & DRAWER
// ==========================================
function saveCart() {
  localStorage.setItem('dy_florist_cart', JSON.stringify(cart));
  updateCartBadge();
  renderCartDrawer();
}

function updateCartBadge() {
  const badge = document.getElementById('cartCountBadge');
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  if (badge) {
    badge.innerText = totalCount;
    badge.style.transform = 'scale(1.25)';
    setTimeout(() => { badge.style.transform = 'scale(1)'; }, 200);
  }
}

window.addToCart = function(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existingIndex = cart.findIndex(i => i.id === productId);
  if (existingIndex > -1) {
    cart[existingIndex].quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });
  }

  saveCart();
  showToast(`"${product.name}" ditambahkan ke keranjang! 💐`);
  openCart();
};

window.changeCartQty = function(productId, delta) {
  const itemIndex = cart.findIndex(i => i.id === productId);
  if (itemIndex > -1) {
    cart[itemIndex].quantity += delta;
    if (cart[itemIndex].quantity <= 0) {
      cart.splice(itemIndex, 1);
    }
    saveCart();
  }
};

window.removeFromCart = function(productId) {
  cart = cart.filter(i => i.id !== productId);
  saveCart();
  showToast('Item dihapus dari keranjang.');
};

function setupCartDrawer() {
  const openBtn = document.getElementById('openCartBtn');
  const closeBtn = document.getElementById('closeCartBtn');
  const overlay = document.getElementById('cartOverlay');
  const checkoutBtn = document.getElementById('btnCheckoutWA');

  if (openBtn) openBtn.addEventListener('click', openCart);
  if (closeBtn) closeBtn.addEventListener('click', closeCart);
  if (overlay) overlay.addEventListener('click', closeCart);

  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', checkoutCartWhatsApp);
  }
}

window.openCart = function() {
  renderCartDrawer();
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartOverlay');
  if (drawer && overlay) {
    drawer.classList.add('open');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
};

window.closeCart = function() {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartOverlay');
  if (drawer && overlay) {
    drawer.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }
};

function renderCartDrawer() {
  const list = document.getElementById('cartItemsList');
  const emptyState = document.getElementById('emptyCartState');
  const drawerFooter = document.getElementById('drawerFooter');
  const itemCountEl = document.getElementById('drawerItemCount');
  const subtotalEl = document.getElementById('drawerSubtotal');

  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (itemCountEl) itemCountEl.innerText = `${totalCount} Item`;

  if (cart.length === 0) {
    if (emptyState) emptyState.style.display = 'block';
    if (list) list.innerHTML = '';
    if (drawerFooter) drawerFooter.style.display = 'none';
    return;
  }

  if (emptyState) emptyState.style.display = 'none';
  if (drawerFooter) drawerFooter.style.display = 'block';

  if (list) {
    list.innerHTML = cart.map(item => `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" class="cart-item-img">
        <div class="cart-item-info">
          <div class="cart-item-title">${item.name}</div>
          <div class="cart-item-price">${formatIDR(item.price)}</div>
          <div class="cart-item-qty">
            <button class="qty-btn" onclick="changeCartQty('${item.id}', -1)">-</button>
            <span class="qty-val">${item.quantity}</span>
            <button class="qty-btn" onclick="changeCartQty('${item.id}', 1)">+</button>
          </div>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart('${item.id}')" title="Hapus">✕</button>
      </div>
    `).join('');
  }

  if (subtotalEl) subtotalEl.innerText = formatIDR(subtotal);
}

function checkoutCartWhatsApp() {
  if (cart.length === 0) return;

  const recipient = document.getElementById('drawerRecipient')?.value.trim() || '(Belum diisi)';
  const date = document.getElementById('drawerDate')?.value.trim() || '(Segera / Hari Ini)';
  const note = document.getElementById('drawerNote')?.value.trim() || '(Tanpa ucapan)';

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  let itemsText = cart.map((item, index) => {
    return `${index + 1}. *${item.name}* x${item.quantity} = ${formatIDR(item.price * item.quantity)}`;
  }).join('\n');

  const text = `🛍️ *ORDER BARU — DY.FLORIST* 🛍️\n` +
               `---------------------------------------------\n` +
               `*Daftar Produk:*\n${itemsText}\n\n` +
               `---------------------------------------------\n` +
               `*Total Harga:* ${formatIDR(subtotal)}\n` +
               `---------------------------------------------\n` +
               `*Nama Pemesan / Penerima:* ${recipient}\n` +
               `*Waktu Pengiriman / Ambil:* ${date}\n` +
               `*Pesan Kartu Ucapan:*\n"${note}"\n\n` +
               `Halo Florist dy.florist, saya ingin konfirmasi pesanan ini. Mohon info nomor rekening & ketersediaan. Terima kasih! ✨`;

  const waUrl = `https://wa.me/${WA_PHONE_NUMBER}?text=${encodeURIComponent(text)}`;
  window.open(waUrl, '_blank');
}

// ==========================================
// 7. PRODUCT QUICK VIEW MODAL
// ==========================================
function setupModals() {
  const overlay = document.getElementById('quickViewOverlay');
  const closeBtn = document.getElementById('closeQuickViewBtn');

  if (closeBtn) {
    closeBtn.addEventListener('click', closeQuickView);
  }
  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeQuickView();
    });
  }
}

window.openQuickView = function(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const body = document.getElementById('quickViewBody');
  const overlay = document.getElementById('quickViewOverlay');

  if (body) {
    body.innerHTML = `
      <div class="modal-product-layout">
        <div class="modal-img-col">
          <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="modal-details-col">
          <span class="modal-category">${product.categoryName} • ${product.badge}</span>
          <h2 class="modal-title">${product.name}</h2>
          <div class="product-rating" style="margin-bottom: 12px;">
            ★★★★★ <span>(${product.reviews} ulasan pembeli)</span>
          </div>
          <div class="modal-price">${formatIDR(product.price)}</div>
          <p class="modal-desc">${product.description}</p>
          
          <div class="modal-meta-box">
            <div>🌿 <strong>Kualitas:</strong> Bunga segar pilihan premium atau preserved grade A</div>
            <div style="margin-top: 4px;">🎁 <strong>Bonus:</strong> Free Custom Greeting Card & Satin Ribbon</div>
          </div>

          <div style="display: flex; gap: 12px; margin-top: auto;">
            <button class="btn btn-primary" style="flex: 1;" onclick="addToCart('${product.id}'); closeQuickView();">
              Tambah ke Keranjang
            </button>
            <a href="https://wa.me/${WA_PHONE_NUMBER}?text=Halo%20dy.florist,%20saya%20tertarik%20dengan%20${encodeURIComponent(product.name)}" target="_blank" class="btn btn-glass" style="flex: 1;">
              Tanya via WA
            </a>
          </div>
        </div>
      </div>
    `;
  }

  if (overlay) {
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
};

window.closeQuickView = function() {
  const overlay = document.getElementById('quickViewOverlay');
  if (overlay) {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }
};

// ==========================================
// 8. FAQ ACCORDION
// ==========================================
function setupFAQ() {
  const items = document.querySelectorAll('.faq-item');
  items.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      items.forEach(i => i.classList.remove('active'));
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

// ==========================================
// 9. HEADER & MOBILE NAVIGATION
// ==========================================
function setupHeaderScroll() {
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });
}

function setupMobileMenu() {
  const toggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (toggle && navMenu) {
    toggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
  }
}

// ==========================================
// 10. TOAST SYSTEM
// ==========================================
function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <span>${message}</span>
  `;

  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}
