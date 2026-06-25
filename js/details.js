const params = new URLSearchParams(window.location.search);
const carId = Number(params.get("id"));
const selectedCar = cars.find(car => car.id === carId);
const container = document.getElementById("carDetails");

if (selectedCar) {
    container.innerHTML = `
        <div class="gallery">
            <div class="main-img-wrap">
                <img id="mainImage" src="${selectedCar.images[0]}" alt="${selectedCar.name}">
                <div class="gallery-arrow arrow-left" onclick="prevImage()">
                    <i class="ti ti-chevron-left"></i>
                </div>
                <div class="gallery-arrow arrow-right" onclick="nextImage()">
                    <i class="ti ti-chevron-right"></i>
                </div>
                <div class="img-counter" id="imgCounter">1 / ${selectedCar.images.length}</div>
            </div>
            <div class="thumbs" id="thumbnails">
                ${selectedCar.images.map((img, index) => `
                    <img src="${img}" class="thumb ${index === 0 ? 'active' : ''}" onclick="changeImage(${index})">
                `).join('')}
            </div>
        </div>
        <div class="info">
            <div class="car-header">
                <div class="car-eyebrow">${selectedCar.brand}</div>
                <h1 class="car-title">${selectedCar.name}</h1>
                <div class="badges">
                    <span class="badge ${selectedCar.type === 'New' ? 'badge-new' : 'badge-old'}">${selectedCar.type}</span>
                </div>
            </div>
            <div class="price-row">
                <div class="price">₹${selectedCar.price.toLocaleString()}</div>
            </div>
            <div>
                <div class="specs-title">Specifications</div>
                <div class="specs-grid">
                    <div class="spec-item">
                        <span class="spec-label"><i class="ti ti-calendar"></i> Year</span>
                        <span class="spec-value">${selectedCar.year}</span>
                    </div>
                    ${selectedCar.type === 'old' ? `
                    <div class="spec-item">
                        <span class="spec-label"><i class="ti ti-road"></i> Kms Driven</span>
                        <span class="spec-value">${selectedCar.kmsDriven}</span>
                    </div>
                    ` : ''}
                    <div class="spec-item">
                        <span class="spec-label"><i class="ti ti-user"></i> Owner</span>
                        <span class="spec-value">${selectedCar.owner}</span>
                    </div>
                    <div class="spec-item">
                        <span class="spec-label"><i class="ti ti-gas-station"></i> Fuel</span>
                        <span class="spec-value">${selectedCar.fuel}</span>
                    </div>
                    <div class="spec-item">
                        <span class="spec-label"><i class="ti ti-manual-gearbox"></i> Transmission</span>
                        <span class="spec-value">${selectedCar.transmission}</span>
                    </div>
                    <div class="spec-item">
                        <span class="spec-label"><i class="ti ti-dashboard"></i> Mileage</span>
                        <span class="spec-value">${selectedCar.mileage}</span>
                    </div>
                    <div class="spec-item">
                        <span class="spec-label"><i class="ti ti-engine"></i> Engine</span>
                        <span class="spec-value">${selectedCar.engine}</span>
                    </div>
                    <div class="spec-item">
                        <span class="spec-label"><i class="ti ti-users"></i> Seats</span>
                        <span class="spec-value">${selectedCar.seats}</span>
                    </div>
                    <div class="spec-item">
                        <span class="spec-label"><i class="ti ti-palette"></i> Color</span>
                        <span class="spec-value">${selectedCar.color}</span>
                    </div>
                </div>
            </div>
            <div class="cta-row">
                <button class="btn-primary-cta" onclick="goToBilling(${carId})">Billing Details</button>
            </div>
        </div>
    `;
} else {
    container.innerHTML = `<div class="empty"><i class="ti ti-car-off"></i><p>Car not found.</p></div>`;
}

let currentImage = 0;

function changeImage(index) {
    if (!selectedCar) return;
    currentImage = index;
    document.getElementById("mainImage").src = selectedCar.images[index];
    document.getElementById("imgCounter").innerText = `${index + 1} / ${selectedCar.images.length}`;
    updateActiveThumb();
}

function nextImage() {
    if (!selectedCar) return;
    currentImage++;
    if (currentImage >= selectedCar.images.length) currentImage = 0;
    changeImage(currentImage);
}

function prevImage() {
    if (!selectedCar) return;
    currentImage--;
    if (currentImage < 0) currentImage = selectedCar.images.length - 1;
    changeImage(currentImage);
}

function updateActiveThumb() {
    document.querySelectorAll(".thumb").forEach((thumb, index) => {
        thumb.classList.toggle("active", index === currentImage);
    });
}

let autoSlide = setInterval(() => {
    nextImage();
}, 3000);

const gallery = document.querySelector(".gallery-container") || document.querySelector(".main-img-wrap");
if (gallery) {
    gallery.addEventListener("mouseenter", () => {
        clearInterval(autoSlide);
    });

    gallery.addEventListener("mouseleave", () => {
        autoSlide = setInterval(nextImage, 3000);
    });
}

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
        nextImage();
    }
    if (e.key === "ArrowLeft") {
        prevImage();
    }
});

function goToBilling(carId) {
    window.location.href = `Billing.html?id=${carId}`;
}