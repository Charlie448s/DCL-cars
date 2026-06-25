let currentFilter = 'all';
 
// ── Helpers ──
function formatPrice(p) {
  if (p >= 10000000) return `₹${(p / 10000000).toFixed(1)} Cr`;
  if (p >= 100000)   return `₹${(p / 100000).toFixed(1)} L`;
  return `₹${p.toLocaleString()}`;
}
 
function fuelIcon(fuel) {
  if (fuel === 'Electric') return 'ti-bolt';
  if (fuel === 'Diesel')   return 'ti-droplet';
  return 'ti-flame';
}
 
// ── Render ──
function displayCars(list) {
  const container = document.getElementById('carsContainer');
  const countBar  = document.getElementById('countBar');
 
  countBar.innerHTML = `<span>${list.length}</span> car${list.length !== 1 ? 's' : ''} available`;
 
  if (!list.length) {
    container.innerHTML = `
      <div class="empty">
        <i class="ti ti-car-off" aria-hidden="true"></i>
        No cars found. Try a different search.
      </div>`;
    return;
  }
 
  container.innerHTML = list.map(car => `
    <div class="car-card" onclick="viewDetails(${car.id})">
      <div class="car-card-img">
        <img
          src="${car.image}"
          alt="${car.name}"
          loading="lazy"
          onerror="this.src='https://via.placeholder.com/400x200/1E1E24/888?text=No+Image'"
        >
        <span class="type-badge badge-${car.type}">
          ${car.type === 'new' ? 'New' : 'Pre-owned'}
        </span>
      </div>
      <div class="car-card-body">
        <div class="car-brand">${car.brand}</div>
        <div class="car-name">${car.name}</div>
        <div class="car-meta">
          <span><i class="ti ${fuelIcon(car.fuel)}" aria-hidden="true"></i>${car.fuel}</span>
          <span><i class="ti ti-calendar" aria-hidden="true"></i>${car.type === 'new' ? '2024' : 'Used'}</span>
        </div>
        <div class="car-footer">
          <div>
            <div class="car-price">${formatPrice(car.price)}</div>
            <div class="car-price-sub">ex-showroom</div>
          </div>
          <button class="view-btn" onclick="event.stopPropagation(); viewDetails(${car.id})">
            Details →
          </button>
        </div>
      </div>
    </div>
  `).join('');
}
 
// ── Filter & Search ──
function applyFilters() {
  const kw = document.getElementById('searchInput').value.toLowerCase();
  let list = cars;
 
  if (currentFilter !== 'all') {
    list = list.filter(c => c.type === currentFilter);
  }
 
  if (kw) {
    list = list.filter(c =>
      c.name.toLowerCase().includes(kw)  ||
      c.brand.toLowerCase().includes(kw) ||
      c.fuel.toLowerCase().includes(kw)
    );
  }
 
  displayCars(list);
}
 
function setFilter(type, btn) {
  currentFilter = type;
 
  // Sync all filter buttons (nav + controls)
  document.querySelectorAll('.nav-links button, .filter-btns button').forEach(b => {
    b.classList.remove('active');
  });
 
  // Activate matching buttons by data attribute or text
  document.querySelectorAll('.nav-links button, .filter-btns button').forEach(b => {
    const label = b.textContent.trim().toLowerCase();
    if (
      (type === 'all' && (label === 'all' || label === 'all cars')) ||
      (type === 'new' && label === 'new') ||
      (type === 'old' && (label === 'pre-owned' || label === 'old'))
    ) {
      b.classList.add('active');
    }
  });
 
  applyFilters();
}
 
// ── Navigation ──
function viewDetails(id) {
  window.location.href = `details.html?id=${id}`;
}
 
// ── Event Listeners ──
document.getElementById('searchInput').addEventListener('input', applyFilters);
 
// ── Init ──
displayCars(cars);