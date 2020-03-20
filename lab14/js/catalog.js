/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
var cart = new Cart([]);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  var selectElement = document.getElementById('items');
  for (var i = 0; i < Product.allProducts.length; i++) {
    var itemEl = document.createElement('option');
    itemEl.setAttribute = ('value', Product.allProducts[i].name);
    itemEl.innerText = (Product.allProducts[i].name);
    selectElement.appendChild(itemEl);
  }

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {

  // TODO: Prevent the page from reloading
  event.preventDefault();

  // Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();

}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  // TODO: suss out the item picked from the select list
  var dropDownMenu = document.getElementById('items');
  var quantityMenu = document.getElementById('quantity');
  // TODO: get the quantity
  var quantity =  quantityMenu.value;
  var product = dropDownMenu.options[dropDownMenu.selectedIndex].value;
  // // TODO: using those, add one item to the Cart
  // cart.items.push(newItem);
  // console.log(cart);
  cart.addItem(product, quantity);
}

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
  var display = document.getElementById('itemCount');
  display.innerText = cart.items.length;
  // console.log(display);
}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  var div = document.getElementById('cartContents');
  div.innerHTML = '';
  // TODO: Get the item and quantity from the form
  for (var i = 0; i < cart.items.length; i++) {
    // TODO: Add a new element to the cartContents div with that information
    var divEl = document.getElementById('cartContents');
    var listEl = document.createElement('ul');
    divEl.appendChild(listEl);
    var previewProduct = cart.items[i];

    var itemPreview =  previewProduct.product + ' ' + previewProduct.quantity;
    var itemEl = document.createElement('li');
    itemEl.innerText = itemPreview;
    listEl.appendChild(itemEl);
  }

}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
var catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
