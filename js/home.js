const carsContainer =
document.getElementById("carsContainer");

const searchInput =
document.getElementById("searchInput");

function displayCars(carList){

carsContainer.innerHTML = "";

carList.forEach(car=>{

carsContainer.innerHTML +=

`

<div class="col-lg-4 col-md-6 mb-4">

<div class="card shadow h-100">

<img
src="${car.image}"
class="card-img-top">

<div class="card-body">

<h4>${car.name}</h4>

<p>
Brand :
${car.brand}
</p>

<p>
Fuel :
${car.fuel}
</p>

<h5 class="text-primary">

₹${car.price.toLocaleString()}

</h5>

<span class="badge bg-success">

${car.type}

</span>

<br><br>

<button
class="btn btn-dark"

onclick="viewDetails(${car.id})">

View Details

</button>

</div>

</div>

</div>

`;

});

}

displayCars(cars);

function filterCars(type){

const filteredCars =

cars.filter(car =>
car.type === type
);

displayCars(filteredCars);

}

function showAllCars(){

displayCars(cars);

}

searchInput.addEventListener("keyup",()=>{

const keyword =
searchInput.value.toLowerCase();

const result =

cars.filter(car =>
car.name
.toLowerCase()
.includes(keyword)
);

displayCars(result);

});

function viewDetails(id){

window.location.href =
`details.html?id=${id}`;

}