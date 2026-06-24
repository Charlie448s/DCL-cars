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

<div class="gallery-container">

    <img
    id="mainImage"
    src="${selectedCar.images[0]}"
    class="car-image">

    <div class="gallery-nav">

        <button
        class="gallery-btn"
        onclick="prevImage()">

        ❮

        </button>

        <div id="thumbnails">

        ${selectedCar.images.map((img,index)=>`

            <img
            src="${img}"
            class="thumb ${index===0?'active':''}"
            onclick="changeImage(${index})">

        `).join('')}

        </div>

        <button
        class="gallery-btn"
        onclick="nextImage()">

        ❯

        </button>

    </div>

</div>

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

<h4>Specifications</h4>

<p class="feature">
Model Year :
${selectedCar.year}
</p>

<p class="feature">
Owner :
${selectedCar.owner}
</p>

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
let currentImage = 0;

function changeImage(index){

    currentImage = index;

    document
    .getElementById("mainImage")
    .src =
    selectedCar.images[index];

    updateActiveThumb();
}

function nextImage(){

    currentImage++;

    if(currentImage >= selectedCar.images.length)
        currentImage = 0;

    changeImage(currentImage);
}

function prevImage(){

    currentImage--;

    if(currentImage < 0)
        currentImage =
        selectedCar.images.length - 1;

    changeImage(currentImage);
}

function updateActiveThumb(){

    document
    .querySelectorAll(".thumb")
    .forEach((thumb,index)=>{

        thumb.classList.toggle(
            "active",
            index === currentImage
        );

    });
}
let autoSlide =

setInterval(()=>{

    nextImage();

},3000);

const gallery =

document.querySelector(
".gallery-container"
);

gallery.addEventListener(

"mouseenter",

()=>{

clearInterval(autoSlide);

});

gallery.addEventListener(

"mouseleave",

()=>{

autoSlide = setInterval(
nextImage,
3000
);

});
document.addEventListener(

"keydown",

(e)=>{

if(e.key==="ArrowRight"){

    nextImage();

}

if(e.key==="ArrowLeft"){

    prevImage();

}

});
