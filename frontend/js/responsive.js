/**
 * responsive.js — Mobile UX helpers for ShopEase
 * Handles: customer sidebar toggle, filter offcanvas,
 *          mobile bottom nav badge sync, touch improvements
 */

document.addEventListener('DOMContentLoaded', function () {

  // ── Customer sidebar toggle ──────────────────────────────
  const custSidebar = document.querySelector('.customer-sidebar');
  const custOverlay = document.querySelector('.cust-sidebar-overlay');
  const custToggle  = document.querySelector('#custSidebarToggle');

  if (custSidebar && custOverlay) {
    const openSidebar  = () => { custSidebar.classList.add('show');    custOverlay.classList.add('show');    document.body.style.overflow = 'hidden'; };
    const closeSidebar = () => { custSidebar.classList.remove('show'); custOverlay.classList.remove('show'); document.body.style.overflow = ''; };
    if (custToggle)  custToggle.addEventListener('click', openSidebar);
    custOverlay.addEventListener('click', closeSidebar);
    // Close on link click (mobile nav)
    custSidebar.querySelectorAll('a').forEach(a => a.addEventListener('click', closeSidebar));
  }

  // ── Filter offcanvas (catalog page) ─────────────────────
  const filterOffcanvas  = document.querySelector('.filter-offcanvas');
  const filterBackdrop   = document.querySelector('.filter-offcanvas-backdrop');
  const filterOpenBtn    = document.querySelector('#filterOpenBtn');
  const filterCloseBtn   = document.querySelector('#filterCloseBtn');

  if (filterOffcanvas && filterBackdrop) {
    const openFilter  = () => { filterOffcanvas.classList.add('show');    filterBackdrop.classList.add('show');    document.body.style.overflow = 'hidden'; };
    const closeFilter = () => { filterOffcanvas.classList.remove('show'); filterBackdrop.classList.remove('show'); document.body.style.overflow = ''; };
    if (filterOpenBtn)  filterOpenBtn.addEventListener('click', openFilter);
    if (filterCloseBtn) filterCloseBtn.addEventListener('click', closeFilter);
    filterBackdrop.addEventListener('click', closeFilter);
  }

  // ── Sync mobile bottom-nav cart badge ────────────────────
  function syncMobBadge() {
    const count = Cart ? Cart.count() : 0;
    document.querySelectorAll('.mob-cart-badge').forEach(el => {
      el.textContent = count;
      el.style.display = count > 0 ? 'flex' : 'none';
    });
  }
  // Re-run after Cart is ready
  if (typeof Cart !== 'undefined') syncMobBadge();
  // Patch Cart.save to always update mobile badge too
  if (typeof Cart !== 'undefined') {
    const _origSave = Cart.save.bind(Cart);
    Cart.save = function(items) { _origSave(items); syncMobBadge(); };
  }

  // ── Active page highlight for mobile bottom nav ──────────
  const path = window.location.pathname;
  document.querySelectorAll('.mobile-bottom-nav a[data-page]').forEach(a => {
    if (path.includes(a.dataset.page)) a.classList.add('active');
  });

  // ── Back to top ──────────────────────────────────────────
  const backBtn = document.querySelector('.back-to-top');
  if (backBtn) {
    window.addEventListener('scroll', () => backBtn.classList.toggle('show', window.scrollY > 300), { passive: true });
    backBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  // ── Prevent 300ms tap delay on buttons ───────────────────
  document.querySelectorAll('button, .btn, a').forEach(el => {
    el.style.touchAction = 'manipulation';
  });

});
