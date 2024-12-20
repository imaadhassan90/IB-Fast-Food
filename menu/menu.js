let cart = JSON.parse(localStorage.getItem("cart")) || []

function addToCart(name, price) {
    cart.push({name, price});
    console.log(cart);
    
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("item added to cart")
}

function displayCartItems() {
    console.log(cart);
    alert()
    const cartItemsContainer = document.getElementById("cart-items");
    cartItemsContainer.innerHTML = ""
    cart.map((item, index) => {
        const cartItem = document.createElement("div");
        cartItem.classList.add("item");
        cartItem.innerHTML =`
        <p>${item.name}</p>
        `
        cartItemsContainer.appendChild(cartItem)
        
    })
}

if (window.location.pathname.endsWith("addtocart/add.html")){
    displayCartItems();
}