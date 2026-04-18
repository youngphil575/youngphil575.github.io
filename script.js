let cart = JSON.parse(localStorage.get)
// Add to cart
function addToCart(name, price){
    cart.push ({ name, price});
    localStorage.setitem("cart", JSON.stringify(cart));
    updateCartCount();
    alert("Added to cart");
}

//update cart count 
function updateCartCount(){
    let count = document.getElementById("cart-count");
    if (count){
        count.innerText = cart.lenth;
    }
}

// show cart items 
function displayCart(){
    let total = 0 ;

    if (cartDiv) {
        cartDiv.innerHTML = "";

        cart.forEach(item, index) =>{
            total += item.price;

            cartDiv.innerHTML +='
          
             ' <p>  ${item.name}-${item.price}
            <button onclick="removeitems(${index})">remove</button><p/>
            '
        });

        document.getElementById("total").innertext = "Total: $" + total;
    }
}

//remove item
function removeItems(index) {
    cart.splice (index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
    updateCartCount();
}

//clear cart 
function clearCart(){
    localStorage.removeItem("cart");
    cart=[];
    displayCart();
    updateCartCount();
}
//run function
updateCartCount();
displayCart();