// select items

const productsEl = document.querySelector(".product-container")
const cartItemsEl = document.querySelector(".shopping-cart")

// Render Products

function renderProducts(){
    products.forEach((products) => {
        productsEl.innerHTML += `
        <div class="product">
        <h1>${products.name}</h1>
        <h2>${products.price}</h2>
        <button id="add" class="btn-add">+</button>
        </div>
        `


    })
}
renderProducts();

// render cart items
function renderCartItems(){
    cartItemsEl.innerHTML = ""; // clear cart element
    cartItemsEl.forEach((products)=> {
        cartItemsEl.innerHTML += `
        <div class="shopping-cart">
        <div class="product-shoppingCart">${products.name}</div>
        <div class="price-shoppingCart">${products.price}</div>
        <hr>
        <div class="finalPrice-shoppingCart">Total: 30.35</div>
        </div>
        `
    })
}