/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  var bodyEl = document.getElementById('cart');
  bodyEl.innerHTML = '';
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  var tableEl = document.getElementById('cart');

  // TODO: Iterate over the items in the cart
  for (var i = 0; i < cart.items.length; i++) {

    var newProduct = cart.items[i];
    console.log(newProduct);
    var rowEl = document.createElement('tr');
    var linkCell = document.createElement('td') ;
    var quantityCell = document.createElement('td');
    var itemCell = document.createElement('td');
    var buttonEl = document.createElement('button');

    buttonEl.textContent = 'X';
    buttonEl.setAttribute('type', 'submit');
    buttonEl.setAttribute('name', i);
    linkCell.appendChild(buttonEl);
    rowEl.appendChild(linkCell);
    quantityCell.textContent = newProduct.quantity;
    rowEl.appendChild(quantityCell);
    itemCell.textContent = newProduct.product;
    rowEl.appendChild(itemCell);
    tableEl.appendChild(rowEl);
  }

}
// TODO: Create a TR
// TODO: Create a TD for the delete link, quantity,  and the item
// TODO: Add the TR to the TBODY and each of the TD's to the TR


function removeItemFromCart(event) {

  cart.removeItem(event.target.id);
  cart.saveToLocalStorage();
  renderCart();
  // var deleteItem = event.target.name;
  // var currentCart = JSON.parse(localStorage.getItem('cart'));

  // console.log(deleteItem);
  // console.log(currentCart);
  // cart.removeItem(deleteItem);
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
