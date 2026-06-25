const cars = [
    {
        id: 1,
        name: "BMW X5",
        brand: "BMW",
        price: 5500000,
        type: "new",
        fuel: "Petrol",
        transmission: "Automatic",
        mileage: "15 kmpl",
        engine: "2998 cc",
        seats: 5,
        color: "Black",
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&q=80"
    },

    {
        id: 2,
        name: "Audi A4",
        brand: "Audi",
        price: 3200000,
        type: "old",
        fuel: "Diesel",
        transmission: "Automatic",
        mileage: "15 kmpl",
        engine: "2998 cc",
        seats: 5,
        color: "Black",
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&q=80"
    },

    {
        id: 3,
        name: "Mercedes C-Class",
        brand: "Mercedes",
        price: 6200000,
        type: "new",
        fuel: "Petrol",
        transmission: "Automatic",
        mileage: "15 kmpl",
        engine: "2998 cc",
        seats: 5,
        color: "Black",
        image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&q=80"
    },

    {
        id: 4,
        name: "Honda City",
        brand: "Honda",
        price: 1200000,
        type: "old",
        fuel: "Petrol",
        transmission: "Automatic",
        mileage: "15 kmpl",
        engine: "2998 cc",
        seats: 5,
        color: "Black",
        image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=400&q=80"
    },

    {
        id: 5,
        name: "Hyundai Creta",
        brand: "Hyundai",
        price: 1800000,
        type: "new",
        fuel: "Diesel",
        transmission: "Automatic",
        mileage: "15 kmpl",
        engine: "2998 cc",
        seats: 5,
        color: "Black",
        image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=400&q=80"
    },

    {
        id: 6,
        name: "Toyota Fortuner",
        brand: "Toyota",
        price: 4500000,
        type: "old",
        fuel: "Diesel",
        transmission: "Automatic",
        mileage: "15 kmpl",
        engine: "2998 cc",
        seats: 5,
        color: "Black",
        image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=400&q=80"
    }
];

const container =
document.getElementById("carsContainer");

function displayCars(carList){

    container.innerHTML = "";

    carList.forEach(car => {

        container.innerHTML += `

        <div class="car-card">

            <img
            src="${car.image}"
            alt="${car.name}"
            class="car-image"
            data-id="${car.id}">

            <div class="car-content">

                <h3>${car.name}</h3>

                <p><strong>Brand:</strong> ${car.brand}</p>

                <p>
                <strong>Price:</strong>
                ₹${car.price.toLocaleString()}
                </p>

                <p>
                <strong>Fuel:</strong>
                ${car.fuel}
                </p>

                <p>
                <strong>Transmission:</strong>
                ${car.transmission}
                </p>

                <p>
                <strong>Mileage:</strong>
                ${car.mileage}
                </p>

                <button
                class="remove-btn"
                data-id="${car.id}">
                Remove
                </button>

            </div>

        </div>

        `;

    });

    addRemoveFunction();
    addImageClickHandlers();
}

displayCars(cars);

function addRemoveFunction(){

    const buttons =
    document.querySelectorAll(".remove-btn");

    buttons.forEach(button=>{

        button.addEventListener("click",()=>{

            button
            .closest(".car-card")
            .remove();

        });

    });

}

const searchInput =
document.getElementById("searchInput");

searchInput.addEventListener("keyup",()=>{

    const value =
    searchInput.value.toLowerCase();

    const filteredCars =
    cars.filter(car =>

        car.name
        .toLowerCase()
        .includes(value)

    );

    displayCars(filteredCars);

});

// Image Modal Functionality
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const captionText = document.getElementById("caption");
const closeBtn = document.querySelector(".close");

function openImageModal(imageSrc, altText) {
    modal.style.display = "block";
    modalImg.src = imageSrc;
    captionText.innerHTML = altText;
}

function closeImageModal() {
    modal.style.display = "none";
}

closeBtn.addEventListener("click", closeImageModal);

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        closeImageModal();
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeImageModal();
    }
});

// Add image click handlers
function addImageClickHandlers() {
    const images = document.querySelectorAll(".car-image");
    images.forEach(img => {
        img.addEventListener("click", () => {
            openImageModal(img.src, img.alt);
        });
    });
}