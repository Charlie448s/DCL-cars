// State variables
let role = 'buyer';
let owners = 1;

// Populate years (e.g. 1999 to 2025)
const yearSelect = document.getElementById('yearSelect');
const currentYear = new Date().getFullYear();
for (let y = currentYear; y >= 1999; y--) {
    let option = document.createElement('option');
    option.value = y;
    option.innerText = y;
    yearSelect.appendChild(option);
}

// Handle toggles
document.querySelectorAll('.pill-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        const parent = this.parentElement;
        
        // Remove active class from siblings
        parent.querySelectorAll('.pill-btn').forEach(b => b.classList.remove('active'));
        
        // Add active class to clicked
        this.classList.add('active');

        // Update state
        if (parent.id === 'roleToggle') {
            role = this.dataset.value;
        } else if (parent.id === 'ownerToggle') {
            owners = parseInt(this.dataset.value);
        }
        
        // Auto-update if result is already visible
        autoUpdate();
    });
});

// Format Indian Rupee without decimals
function formatRupee(amount) {
    if (amount >= 10000000) return `₹ ${(amount / 10000000).toFixed(2)} Cr`;
    if (amount >= 100000)   return `₹ ${(amount / 100000).toFixed(2)} Lakh`;
    return `₹ ${amount.toLocaleString('en-IN')}`;
}

// Main calculation logic
function calculateAndDisplay() {
    const year = parseInt(yearSelect.value);
    const carName = document.getElementById('carInput').value;
    const basePrice = parseInt(document.getElementById('basePriceInput').value);
    const kms = parseInt(document.getElementById('kmsInput').value) || 0;

    if (!year || !carName || !basePrice) {
        return false;
    }

    // Depreciation logic (Realistic exponential model)
    let age = currentYear - year;
    if (age < 0) age = 0;

    let finalPrice = basePrice;

    // 1. Age Depreciation (15% drop year 1, 8% each subsequent year)
    if (age > 0) {
        finalPrice = finalPrice * 0.85;
        if (age > 1) {
            finalPrice = finalPrice * Math.pow(0.92, age - 1);
        }
    }

    // 2. Mileage Depreciation (3% drop per 10,000 km)
    let mileageDropCount = kms / 10000;
    finalPrice = finalPrice * Math.pow(0.97, mileageDropCount);

    // 3. Ownership Depreciation (10% drop per extra owner)
    if (owners > 1) {
        finalPrice = finalPrice * Math.pow(0.90, owners - 1);
    }

    // Cap depreciation so a car isn't completely worthless (min 5% of base price)
    if (finalPrice < basePrice * 0.05) {
        finalPrice = basePrice * 0.05;
    }

    // Buyer pays slightly more (dealer markup), Seller gets slightly less
    let lowerBound, upperBound;
    if (role === 'buyer') {
        lowerBound = finalPrice * 1.05;
        upperBound = finalPrice * 1.15;
    } else {
        lowerBound = finalPrice * 0.85;
        upperBound = finalPrice * 0.95;
    }

    // Display Result
    document.getElementById('priceRange').innerText = `${formatRupee(Math.trunc(lowerBound))} - ${formatRupee(Math.trunc(upperBound))}`;
    document.getElementById('resultBox').style.display = 'block';
    return true;
}

// Auto-update if result is already visible
function autoUpdate() {
    if (document.getElementById('resultBox').style.display === 'block') {
        calculateAndDisplay();
    }
}

// Check Value Button Click
document.getElementById('checkValueBtn').addEventListener('click', function(e) {
    e.preventDefault();
    if (!calculateAndDisplay()) {
        alert("Please provide the Manufacturing Year, Car Name, and Original Price.");
    }
});

// Attach autoUpdate to inputs
yearSelect.addEventListener('change', autoUpdate);
document.getElementById('carInput').addEventListener('input', autoUpdate);
document.getElementById('basePriceInput').addEventListener('input', autoUpdate);
document.getElementById('kmsInput').addEventListener('input', autoUpdate);
