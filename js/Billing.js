console.log("Billing JS Loaded");

// Get ID from URL
const params =
new URLSearchParams(
    window.location.search
);

const carId =
Number(params.get("id"));
console.log(carId)

// Find selected car
const selectedCar =
cars.find(
    car => car.id === carId
);

// Check if car exists
if (!selectedCar) {
    alert("Car not found.");
}

// Car price
let price = selectedCar.price;

// Charges
let roadTax = price * 0.10;
let rto = 25000;
let insurance = 40000;
let fastag = 500;
let handling = 10000;
let accessories = 20000;

// Total price
let total =
    price +
    roadTax +
    rto +
    insurance +
    fastag +
    handling +
    accessories;

// Car Details
document.getElementById("carName").innerHTML =
    selectedCar.name;

document.getElementById("carModel").innerHTML =
    selectedCar.brand;

document.getElementById("carVariant").innerHTML =
    selectedCar.transmission;

document.getElementById("carPrice").innerHTML =
    "₹" + price.toLocaleString("en-IN");

// Price Breakdown
document.getElementById("showroomPrice").innerHTML =
    "₹" + price.toLocaleString("en-IN");

document.getElementById("roadTax").innerHTML =
    "₹" + roadTax.toLocaleString("en-IN");

document.getElementById("totalAmount").innerHTML =
    "₹" + total.toLocaleString("en-IN");

// Set loan amount automatically
document.getElementById("loan").value = price;

// EMI Calculator
function calculateEMI() {

    let P =
        document.getElementById("loan").value;

    let annualRate =
        document.getElementById("rate").value;

    let years =
        document.getElementById("years").value;

    let r = annualRate / 12 / 100;
    let n = years * 12;

    let emi =
        (P * r * Math.pow(1 + r, n)) /
        (Math.pow(1 + r, n) - 1);

    document.getElementById("emiResult").innerHTML =
        "Monthly EMI: ₹" +
        Math.round(emi).toLocaleString("en-IN");
}