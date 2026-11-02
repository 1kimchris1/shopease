/**
 * E-Commerce Management System
 * Core JavaScript - Sample Data & Shared Utilities
 * FRONTEND PROTOTYPE ONLY - No real backend operations
 */

// ============================================================
// SAMPLE DATA
// ============================================================

const SAMPLE_PRODUCTS = [
  { id: 1, name: "Samsung Galaxy A55 5G", category: "Electronics", price: 19990, oldPrice: 22990, rating: 4.5, reviews: 128, stock: 45, image: "📱", badge: "hot", description: "6.6-inch Super AMOLED display, 50MP camera, 5000mAh battery. The perfect blend of performance and style." },
  { id: 2, name: "Apple AirPods Pro (2nd Gen)", category: "Electronics", price: 14999, oldPrice: 17999, rating: 4.8, reviews: 256, stock: 30, image: "🎧", badge: "new", description: "Active Noise Cancellation, Adaptive Transparency, Personalized Spatial Audio. Up to 30 hours total battery life." },
  { id: 3, name: "Nike Air Max 270", category: "Footwear", price: 7500, oldPrice: 9500, rating: 4.3, reviews: 89, stock: 22, image: "👟", badge: "sale", description: "Max Air unit delivers unrivaled, all-day comfort. The sleek, running-inspired design is ready for your casual wardrobe." },
  { id: 4, name: "Leather Messenger Bag", category: "Bags", price: 3499, oldPrice: null, rating: 4.6, reviews: 54, stock: 18, image: "👜", badge: "new", description: "Genuine leather messenger bag with multiple compartments. Perfect for professionals on the go." },
  { id: 5, name: "Mechanical Keyboard RGB", category: "Electronics", price: 4599, oldPrice: 5999, rating: 4.7, reviews: 203, stock: 60, image: "⌨️", badge: "hot", description: "TKL mechanical keyboard with blue switches. RGB backlight with 16M colors. Anti-ghosting technology." },
  { id: 6, name: "Classic Polo Shirt", category: "Clothing", price: 899, oldPrice: 1199, rating: 4.2, reviews: 312, stock: 150, image: "👕", badge: "sale", description: "100% cotton polo shirt available in multiple colors. Breathable fabric for all-day comfort." },
  { id: 7, name: "Smart Watch Series 9", category: "Electronics", price: 12999, oldPrice: 14999, rating: 4.6, reviews: 175, stock: 25, image: "⌚", badge: "new", description: "Health monitoring, GPS tracking, 18-hour battery. Compatible with iOS and Android." },
  { id: 8, name: "Running Sneakers Pro", category: "Footwear", price: 4299, oldPrice: 5500, rating: 4.4, reviews: 67, stock: 40, image: "🏃", badge: null, description: "Lightweight and responsive running shoes with energy-returning foam midsole." },
  { id: 9, name: "Wireless Bluetooth Speaker", category: "Electronics", price: 2999, oldPrice: 3800, rating: 4.5, reviews: 143, stock: 55, image: "🔊", badge: "sale", description: "360° surround sound, IPX7 waterproof, 24-hour battery life. Portable and powerful." },
  { id: 10, name: "Denim Jacket Classic", category: "Clothing", price: 1599, oldPrice: 2199, rating: 4.1, reviews: 88, stock: 35, image: "🧥", badge: null, description: "Classic denim jacket with modern slim fit. A timeless wardrobe essential." },
  { id: 11, name: "Laptop Backpack 17\"", category: "Bags", price: 2299, oldPrice: 2999, rating: 4.7, reviews: 195, stock: 28, image: "🎒", badge: "hot", description: "Waterproof 17-inch laptop backpack with USB charging port and anti-theft pocket." },
  { id: 12, name: "4K Gaming Monitor 27\"", category: "Electronics", price: 28500, oldPrice: 32000, rating: 4.8, reviews: 94, stock: 12, image: "🖥️", badge: "new", description: "27-inch 4K IPS display, 144Hz refresh rate, 1ms response time. HDR400 compatible." },
];

const SAMPLE_CATEGORIES = [
  { id: 1, name: "Electronics", icon: "💻", count: 48, color: "#cce5ff" },
  { id: 2, name: "Clothing", icon: "👕", count: 126, color: "#d4edda" },
  { id: 3, name: "Footwear", icon: "👟", count: 65, color: "#fff3cd" },
  { id: 4, name: "Bags", icon: "👜", count: 34, color: "#f8d7da" },
  { id: 5, name: "Sports", icon: "⚽", count: 52, color: "#d1ecf1" },
  { id: 6, name: "Home & Living", icon: "🏠", count: 89, color: "#e2d9f3" },
  { id: 7, name: "Beauty", icon: "💄", count: 43, color: "#fce4ec" },
  { id: 8, name: "Books", icon: "📚", count: 78, color: "#e8f5e9" },
];

const SAMPLE_ORDERS = [
  { id: "ORD-2026-001", customer: "Maria Santos", date: "2026-10-28", total: 19990, status: "Delivered", items: 1, payment: "GCash" },
  { id: "ORD-2026-002", customer: "Jose Reyes", date: "2026-10-30", total: 7499, status: "Shipped", items: 2, payment: "GCash" },
  { id: "ORD-2026-003", customer: "Ana Cruz", date: "2026-11-01", total: 15599, status: "Processing", items: 3, payment: "GCash" },
  { id: "ORD-2026-004", customer: "Carlos Dela Cruz", date: "2026-11-01", total: 4599, status: "Pending", items: 1, payment: "GCash" },
  { id: "ORD-2026-005", customer: "Liza Mendoza", date: "2026-11-02", total: 28500, status: "Processing", items: 1, payment: "GCash" },
  { id: "ORD-2026-006", customer: "Ramon Garcia", date: "2026-10-25", total: 3498, status: "Delivered", items: 2, payment: "GCash" },
  { id: "ORD-2026-007", customer: "Teresa Bautista", date: "2026-10-22", total: 12999, status: "Cancelled", items: 1, payment: "GCash" },
];

const SAMPLE_CUSTOMERS = [
  { id: 1, name: "Maria Santos", email: "maria.santos@email.com", joined: "2026-03-15", orders: 12, spent: 48500, status: "Active" },
  { id: 2, name: "Jose Reyes", email: "jose.reyes@email.com", joined: "2026-04-20", orders: 8, spent: 32100, status: "Active" },
  { id: 3, name: "Ana Cruz", email: "ana.cruz@email.com", joined: "2026-05-10", orders: 5, spent: 21450, status: "Active" },
  { id: 4, name: "Carlos Dela Cruz", email: "carlos.dc@email.com", joined: "2026-06-01", orders: 3, spent: 9800, status: "Active" },
  { id: 5, name: "Liza Mendoza", email: "liza.mendoza@email.com", joined: "2026-07-14", orders: 15, spent: 67200, status: "Active" },
  { id: 6, name: "Ramon Garcia", email: "ramon.garcia@email.com", joined: "2026-08-05", orders: 2, spent: 5600, status: "Inactive" },
];

// ============================================================
// CART MANAGEMENT (localStorage)
// ============================================================

const Cart = {
  get() {
    try {
      return JSON.parse(localStorage.getItem('ecom_cart') || '[]');
    } catch { return []; }
  },

  save(items) {
    localStorage.setItem('ecom_cart', JSON.stringify(items));
    this.updateBadge();
  },

  add(productId, quantity = 1) {
    const product = SAMPLE_PRODUCTS.find(p => p.id === productId);
    if (!product) return;
    const cart = this.get();
    const existing = cart.find(i => i.id === productId);
    if (existing) {
      existing.quantity += quantity;
    } else {
      cart.push({ id: productId, quantity, name: product.name, price: product.price, image: product.image });
    }
    this.save(cart);
    showToast(`<b>${product.name}</b> added to cart!`, 'success');
  },

  remove(productId) {
    const cart = this.get().filter(i => i.id !== productId);
    this.save(cart);
  },

  updateQty(productId, qty) {
    const cart = this.get();
    const item = cart.find(i => i.id === productId);
    if (item) {
      item.quantity = Math.max(1, qty);
      this.save(cart);
    }
  },

  total() {
    return this.get().reduce((sum, i) => sum + (i.price * i.quantity), 0);
  },

  count() {
    return this.get().reduce((sum, i) => sum + i.quantity, 0);
  },

  clear() {
    localStorage.removeItem('ecom_cart');
    this.updateBadge();
  },

  updateBadge() {
    const count = this.count();
    document.querySelectorAll('.cart-badge').forEach(el => {
      el.textContent = count;
      el.style.display = count > 0 ? 'flex' : 'none';
    });
  }
};

// ============================================================
// AUTH STATE (localStorage)
// ============================================================

const Auth = {
  getUser() {
    try {
      return JSON.parse(localStorage.getItem('ecom_user') || 'null');
    } catch { return null; }
  },

  login(userData) {
    localStorage.setItem('ecom_user', JSON.stringify(userData));
  },

  logout() {
    localStorage.removeItem('ecom_user');
    window.location.href = '/';
  },

  isLoggedIn() {
    return this.getUser() !== null;
  },

  isAdmin() {
    const u = this.getUser();
    return u && u.role === 'admin';
  }
};

// ============================================================
// TOAST NOTIFICATIONS
// ============================================================

function showToast(message, type = 'success') {
  let container = document.querySelector('.toast-container-custom');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container-custom';
    document.body.appendChild(container);
  }

  const icons = { success: 'bi-check-circle-fill text-success', error: 'bi-x-circle-fill text-danger', info: 'bi-info-circle-fill text-primary' };
  const toast = document.createElement('div');
  toast.className = `custom-toast toast-${type}`;
  toast.innerHTML = `<i class="bi ${icons[type] || icons.info}"></i><span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ============================================================
// UTILITY FUNCTIONS
// ============================================================

function formatPrice(amount) {
  return '₱' + Number(amount).toLocaleString('en-PH', { minimumFractionDigits: 2 });
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-PH', { year: 'numeric', month: 'long', day: 'numeric' });
}

function generateOrderId() {
  return 'ORD-2026-' + String(Math.floor(Math.random() * 900) + 100);
}

function generateRefNumber() {
  return 'REF-' + Date.now().toString().slice(-8);
}

function renderStars(rating) {
  let stars = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) stars += '<i class="bi bi-star-fill"></i>';
    else if (i - rating < 1) stars += '<i class="bi bi-star-half"></i>';
    else stars += '<i class="bi bi-star"></i>';
  }
  return stars;
}

function getStatusBadge(status) {
  const map = {
    'Pending': 'badge-status-pending',
    'Processing': 'badge-status-processing',
    'Shipped': 'badge-status-shipped',
    'Delivered': 'badge-status-delivered',
    'Cancelled': 'badge-status-cancelled',
  };
  return `<span class="badge ${map[status] || 'bg-secondary'}">${status}</span>`;
}

function getBasePath() { return '/'; }
function getGuestPath() { return '/pages/guest/'; }
function getCustomerPath() { return '/pages/customer/'; }
function getAdminPath() { return '/pages/admin/'; }

// ============================================================
// BACK TO TOP
// ============================================================

document.addEventListener('DOMContentLoaded', function () {
  // Cart badge init
  Cart.updateBadge();

  // Back to top
  const btn = document.createElement('button');
  btn.className = 'back-to-top';
  btn.innerHTML = '<i class="bi bi-arrow-up"></i>';
  btn.setAttribute('aria-label', 'Back to top');
  document.body.appendChild(btn);

  window.addEventListener('scroll', function () {
    btn.classList.toggle('show', window.scrollY > 300);
  });

  btn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Navbar auth state
  updateNavAuth();
});

function updateNavAuth() {
  const user = Auth.getUser();
  const loginLinks = document.querySelectorAll('.nav-login-link');
  const userMenus = document.querySelectorAll('.nav-user-menu');
  const userNameSpans = document.querySelectorAll('.nav-user-name');

  if (user) {
    loginLinks.forEach(el => el.style.display = 'none');
    userMenus.forEach(el => el.style.display = 'flex');
    userNameSpans.forEach(el => el.textContent = user.name || 'My Account');
  } else {
    loginLinks.forEach(el => el.style.display = '');
    userMenus.forEach(el => el.style.display = 'none');
  }
}

// ============================================================
// SEARCH
// ============================================================

function performSearch(query) {
  if (query.trim()) {
    window.location.href = '/pages/guest/search/?q=' + encodeURIComponent(query.trim());
  }
}

function demoCustomerLogin() {
  Auth.login({ id: 1, name: 'Maria Santos', email: 'maria@demo.com', role: 'customer' });
  window.location.href = '/pages/customer/dashboard/';
}

function demoAdminLogin() {
  Auth.login({ id: 0, name: 'Admin User', email: 'admin@demo.com', role: 'admin' });
  window.location.href = '/pages/admin/dashboard/';
}
