const params =
new URLSearchParams(
window.location.search
);

const carId =
Number(params.get("id"));

const selectedCar =

cars.find(car =>
car.id === carId
);

const container =
document.getElementById("carDetails");

container.innerHTML =

`

<div class="row">

<div class="col-lg-6">

<img
src="${selectedCar.image}"

class="car-image">

</div>

<div class="col-lg-6">

<h1>

${selectedCar.name}

</h1>

<p>

Brand :
${selectedCar.brand}

</p>

<h2 class="price">

₹${selectedCar.price.toLocaleString()}

</h2>

<span class="badge bg-success">

${selectedCar.type}

</span>

<div class="spec-card">

<h4>

Specifications

</h4>

<p class="feature">

Fuel :
${selectedCar.fuel}

</p>

<p class="feature">

Transmission :
${selectedCar.transmission}

</p>

<p class="feature">

Mileage :
${selectedCar.mileage}

</p>

<p class="feature">

Engine :
${selectedCar.engine}

</p>

<p class="feature">

Seats :
${selectedCar.seats}

</p>

<p class="feature">

Color :
${selectedCar.color}

</p>

</div>

<button

class="btn btn-primary btn-lg mt-4"

onclick="addToCart()">

Billing Details

</button>

</div>

</div>

`;
function addToCart(){

let cart =

JSON.parse(
localStorage.getItem("cart")
)

|| [];

cart.push(selectedCar);

localStorage.setItem(

"cart",

JSON.stringify(cart)

);

alert(

`${selectedCar.name}
added to cart`

);

}



