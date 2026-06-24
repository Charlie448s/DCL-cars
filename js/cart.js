let cart =

JSON.parse(
localStorage.getItem("cart")
)

|| [];

// console.log("Cart Data:", cart);

const cartContainer =
document.getElementById("cartItems");
console.log(cartContainer);

function renderCart(){

cartContainer.innerHTML = "";

let subtotal = 0;

cart.forEach((car,index)=>{

subtotal += car.price;

cartContainer.innerHTML +=

`

<div class="cart-card">

<div class="row">

<div class="col-md-4">

<img
src="${car.image}"

class="car-img">

</div>

<div class="col-md-8">

<h3>

${car.name}

</h3>

<p>

Brand :
${car.brand}

</p>

<p>

Fuel :
${car.fuel}

</p>

<p class="price">

₹${car.price.toLocaleString()}

</p>

<button

class="btn btn-danger"

onclick="removeItem(${index})">

Remove

</button>

</div>

</div>

</div>

`;

});

calculateBill(subtotal);

}

function removeItem(index){

cart.splice(index,1);

localStorage.setItem(

"cart",

JSON.stringify(cart)

);

renderCart();

}

function calculateBill(subtotal){

const gst =

subtotal * 0.18;

const shipping =

cart.length > 0
? 10000
: 0;

const grandTotal =

subtotal +
gst +
shipping;

document
.getElementById("subtotal")
.innerText =
subtotal.toLocaleString();

document
.getElementById("gst")
.innerText =
gst.toLocaleString();

document
.getElementById("shipping")
.innerText =
shipping.toLocaleString();

document
.getElementById("grandTotal")
.innerText =
grandTotal.toLocaleString();

}