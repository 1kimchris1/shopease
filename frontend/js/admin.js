/**
 * Admin Panel JavaScript
 * E-Commerce Management System - Frontend Prototype
 */

document.addEventListener('DOMContentLoaded', function () {
  initSidebar();
  initCharts();
  initDataTables();
  highlightActiveNav();
});

// ============================================================
// SIDEBAR
// ============================================================

function initSidebar() {
  const sidebar = document.querySelector('.admin-sidebar');
  const toggle = document.querySelector('#sidebarToggle');
  const overlay = document.querySelector('.sidebar-overlay');
  if (!sidebar) return;

  if (toggle) {
    toggle.addEventListener('click', function () {
      sidebar.classList.toggle('show');
      if (overlay) overlay.classList.toggle('show');
    });
  }
  if (overlay) {
    overlay.addEventListener('click', function () {
      sidebar.classList.remove('show');
      overlay.classList.remove('show');
    });
  }
}

function highlightActiveNav() {
  const currentPage = window.location.pathname.split('/').pop();
  document.querySelectorAll('.sidebar-nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href && href.includes(currentPage)) {
      link.classList.add('active');
    }
  });
}

// ============================================================
// CHARTS (Canvas-based, no external library)
// ============================================================

function initCharts() {
  drawSalesChart();
  drawDonutChart();
}

function drawSalesChart() {
  const canvas = document.getElementById('salesChart');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const W = canvas.width = canvas.parentElement.offsetWidth || 600;
  const H = canvas.height = 260;

  const months = ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'];
  const data = [85000, 110000, 95000, 142000, 128000, 165000, 189000];
  const maxVal = Math.max(...data) * 1.2;
  const padL = 65, padR = 20, padT = 20, padB = 40;
  const chartW = W - padL - padR;
  const chartH = H - padT - padB;

  ctx.clearRect(0, 0, W, H);

  // Grid lines
  ctx.strokeStyle = '#f0f2f5';
  ctx.lineWidth = 1;
  for (let i = 0; i <= 4; i++) {
    const y = padT + (chartH / 4) * i;
    ctx.beginPath();
    ctx.moveTo(padL, y);
    ctx.lineTo(W - padR, y);
    ctx.stroke();
    ctx.fillStyle = '#adb5bd';
    ctx.font = '11px Segoe UI';
    ctx.textAlign = 'right';
    const val = Math.round(maxVal - (maxVal / 4) * i);
    ctx.fillText('₱' + (val / 1000).toFixed(0) + 'k', padL - 5, y + 4);
  }

  // Bars
  const barW = (chartW / data.length) * 0.5;
  const gap = chartW / data.length;
  data.forEach((val, i) => {
    const x = padL + gap * i + gap * 0.25;
    const bH = (val / maxVal) * chartH;
    const y = padT + chartH - bH;

    // Gradient
    const grad = ctx.createLinearGradient(0, y, 0, padT + chartH);
    grad.addColorStop(0, '#1a6fc4');
    grad.addColorStop(1, '#0d2b55');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.roundRect(x, y, barW, bH, [4, 4, 0, 0]);
    ctx.fill();

    // Month label
    ctx.fillStyle = '#6c757d';
    ctx.font = '12px Segoe UI';
    ctx.textAlign = 'center';
    ctx.fillText(months[i], x + barW / 2, H - 10);

    // Value label
    ctx.fillStyle = '#0d2b55';
    ctx.font = 'bold 11px Segoe UI';
    ctx.fillText('₱' + (val / 1000).toFixed(0) + 'k', x + barW / 2, y - 5);
  });
}

function drawDonutChart() {
  const canvas = document.getElementById('categoryChart');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const size = 200;
  canvas.width = size;
  canvas.height = size;

  const data = [40, 25, 18, 10, 7];
  const labels = ['Electronics', 'Clothing', 'Footwear', 'Bags', 'Others'];
  const colors = ['#0d2b55', '#1a6fc4', '#f0a500', '#28a745', '#6c757d'];
  const total = data.reduce((a, b) => a + b, 0);
  const cx = size / 2, cy = size / 2, r = 80, ir = 50;
  let startAngle = -Math.PI / 2;

  ctx.clearRect(0, 0, size, size);
  data.forEach((val, i) => {
    const slice = (val / total) * 2 * Math.PI;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, r, startAngle, startAngle + slice);
    ctx.fillStyle = colors[i];
    ctx.fill();
    startAngle += slice;
  });

  // Hole
  ctx.beginPath();
  ctx.arc(cx, cy, ir, 0, 2 * Math.PI);
  ctx.fillStyle = '#ffffff';
  ctx.fill();

  // Center text
  ctx.fillStyle = '#0d2b55';
  ctx.font = 'bold 18px Segoe UI';
  ctx.textAlign = 'center';
  ctx.fillText('Sales', cx, cy - 5);
  ctx.font = '12px Segoe UI';
  ctx.fillStyle = '#6c757d';
  ctx.fillText('by Category', cx, cy + 15);

  // Legend
  const legend = document.getElementById('categoryLegend');
  if (legend) {
    legend.innerHTML = data.map((val, i) => `
      <div class="d-flex align-items-center justify-content-between mb-1">
        <div class="d-flex align-items-center gap-2">
          <span style="width:10px;height:10px;background:${colors[i]};border-radius:50%;display:inline-block"></span>
          <span style="font-size:0.82rem;">${labels[i]}</span>
        </div>
        <span style="font-size:0.82rem;font-weight:600">${val}%</span>
      </div>
    `).join('');
  }
}

// ============================================================
// ORDER STATUS UPDATE
// ============================================================

function updateOrderStatus(orderId, selectEl) {
  const newStatus = selectEl.value;
  const row = selectEl.closest('tr');
  if (row) {
    const statusCell = row.querySelector('.status-cell');
    if (statusCell) {
      const map = {
        'Pending': 'badge-status-pending',
        'Processing': 'badge-status-processing',
        'Shipped': 'badge-status-shipped',
        'Delivered': 'badge-status-delivered',
        'Cancelled': 'badge-status-cancelled',
      };
      statusCell.innerHTML = `<span class="badge ${map[newStatus]}">${newStatus}</span>`;
    }
  }
  showToast(`Order ${orderId} status updated to <b>${newStatus}</b>`, 'success');
}

// ============================================================
// PRODUCT TABLE ACTIONS
// ============================================================

function deleteProduct(id, name) {
  if (confirm(`Are you sure you want to delete "${name}"?\n\nThis action cannot be undone.`)) {
    const row = document.querySelector(`[data-product-id="${id}"]`);
    if (row) {
      row.style.opacity = '0';
      row.style.transition = 'opacity 0.3s';
      setTimeout(() => row.remove(), 300);
    }
    showToast(`Product "<b>${name}</b>" deleted.`, 'info');
  }
}

function toggleProductStatus(id, btn) {
  const isActive = btn.textContent.trim() === 'Active';
  btn.textContent = isActive ? 'Inactive' : 'Active';
  btn.className = isActive
    ? 'status-badge status-inactive'
    : 'status-badge status-active';
  showToast(`Product status updated.`, 'success');
}

// ============================================================
// DATA TABLES
// ============================================================

function initDataTables() {
  // Search/filter on admin tables
  const searchInputs = document.querySelectorAll('.table-search');
  searchInputs.forEach(input => {
    input.addEventListener('input', function () {
      const query = this.value.toLowerCase();
      const tableId = this.getAttribute('data-table');
      const table = document.getElementById(tableId);
      if (!table) return;
      table.querySelectorAll('tbody tr').forEach(row => {
        row.style.display = row.textContent.toLowerCase().includes(query) ? '' : 'none';
      });
    });
  });
}

// ============================================================
// SALES REPORT
// ============================================================

function drawRevenueLineChart() {
  const canvas = document.getElementById('revenueChart');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const W = canvas.width = canvas.parentElement.offsetWidth || 700;
  const H = canvas.height = 300;

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'];
  const revenue = [45000, 62000, 58000, 79000, 85000, 110000, 95000, 142000, 128000, 165000, 189000];
  const orders = [12, 18, 15, 22, 25, 32, 28, 40, 36, 45, 52];
  const maxR = Math.max(...revenue) * 1.15;
  const padL = 70, padR = 20, padT = 30, padB = 40;
  const cW = W - padL - padR, cH = H - padT - padB;

  ctx.clearRect(0, 0, W, H);

  // Grid
  ctx.strokeStyle = '#f0f2f5'; ctx.lineWidth = 1;
  for (let i = 0; i <= 5; i++) {
    const y = padT + (cH / 5) * i;
    ctx.beginPath(); ctx.moveTo(padL, y); ctx.lineTo(W - padR, y); ctx.stroke();
    const v = Math.round(maxR - (maxR / 5) * i);
    ctx.fillStyle = '#adb5bd'; ctx.font = '11px Segoe UI'; ctx.textAlign = 'right';
    ctx.fillText('₱' + (v / 1000).toFixed(0) + 'k', padL - 5, y + 4);
  }

  const step = cW / (months.length - 1);
  const pts = revenue.map((v, i) => ({ x: padL + step * i, y: padT + cH - (v / maxR) * cH }));

  // Area fill
  const grad = ctx.createLinearGradient(0, padT, 0, padT + cH);
  grad.addColorStop(0, 'rgba(26,111,196,0.2)');
  grad.addColorStop(1, 'rgba(26,111,196,0)');
  ctx.beginPath();
  ctx.moveTo(pts[0].x, padT + cH);
  pts.forEach(p => ctx.lineTo(p.x, p.y));
  ctx.lineTo(pts[pts.length - 1].x, padT + cH);
  ctx.fillStyle = grad; ctx.fill();

  // Line
  ctx.beginPath(); ctx.strokeStyle = '#1a6fc4'; ctx.lineWidth = 3; ctx.lineJoin = 'round';
  pts.forEach((p, i) => i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y));
  ctx.stroke();

  // Dots + labels
  pts.forEach((p, i) => {
    ctx.beginPath(); ctx.arc(p.x, p.y, 5, 0, 2 * Math.PI);
    ctx.fillStyle = '#fff'; ctx.fill();
    ctx.strokeStyle = '#1a6fc4'; ctx.lineWidth = 2.5; ctx.stroke();
    ctx.fillStyle = '#6c757d'; ctx.font = '11px Segoe UI'; ctx.textAlign = 'center';
    ctx.fillText(months[i], p.x, H - 10);
  });
}

// ============================================================
// IMAGE UPLOAD PREVIEW
// ============================================================

function initImageUpload(inputId, previewId) {
  const input = document.getElementById(inputId);
  const preview = document.getElementById(previewId);
  if (!input || !preview) return;

  input.addEventListener('change', function () {
    preview.innerHTML = '';
    Array.from(this.files).forEach(file => {
      if (!file.type.startsWith('image/')) return;
      const reader = new FileReader();
      reader.onload = function (e) {
        const div = document.createElement('div');
        div.className = 'image-preview-item';
        div.innerHTML = `<img src="${e.target.result}" style="width:100%;height:100%;object-fit:cover;">`;
        preview.appendChild(div);
      };
      reader.readAsDataURL(file);
    });
  });
}

window.addEventListener('resize', function () {
  drawSalesChart();
  drawRevenueLineChart();
});
