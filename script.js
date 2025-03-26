function init() {
  renderDishes();
}

function showCartOverlay() {
  document.getElementById("overlay").classList.remove("dnone");
}

function closeOverlay() {
  document.getElementById("overlay").classList.add("dnone");
}

function renderDishes() {
  let dishesRef = document.getElementById("menu-contents");
  dishesRef.innerHTML = "";
  for (let i = 0; i < dishes.length; i++) {
    dishesRef.innerHTML += getDishesTemplate(i);

    renderSidebarCart();
    renderOverlayCart();
  }
}

function renderSidebarCart() {
  let sidebarCartRef = document.getElementById("sidebar-cart");
  sidebarCartRef.innerHTML = "";
  for (let i = 0; i < cart.length; i++) {
    sidebarCartRef.innerHTML += getCartTemplate(i);
    getTotalPriceSidebar();
  }
}

function renderOverlayCart() {
  let overlayCartRef = document.getElementById("overlay-cart");
  overlayCartRef.innerHTML = "";
  for (let i = 0; i < cart.length; i++) {
    overlayCartRef.innerHTML += getCartTemplate(i);
    getTotalPriceOverlay();
    getTotalPriceButton();
  }
}

function addDish(i) {
  removeConfirmationMessage();
  let cartDish = cart.find(cartDish => cartDish.id === dishes[i].id);
  if (cartDish) {
    cartDish.amount++;
  } else {
    cart.push({ id: dishes[i].id, name: dishes[i].name, price: dishes[i].price, amount: 1 });
   
  };
  if (dishes[i].amount === undefined) {
    dishes[i].amount = 1;
  } else {
    dishes[i].amount++;
  }
  renderData();
}

function removeDish(i) {
  let cartDish = cart.find(cartDish => cartDish.id === dishes[i].id);
  if (cartDish.amount == 1) {
    cart.splice(cartDish, 1);
    nullTotalPrice();
  } else if (cartDish.amount > 1) {
    cartDish.amount--;
  };
  if (dishes[i].amount > 1) {
    dishes[i].amount--; 
  } else if (dishes[i].amount == 1) {
    dishes[i].amount = 0;
  };
  renderData();
}


function calculateTotalPrice() {
  let totalPrice = 0;
  for (let i = 0; i < cart.length; i++) {
    totalPrice += cart[i].price.toFixed(2) * cart[i].amount;
  }
  return totalPrice.toFixed(2) + " € ";
}

function getTotalPriceSidebar() {
  let sidebarPriceRef = document.getElementById("total-price-sidebar-box");
  sidebarPriceRef.innerHTML = calculateTotalPrice();
}

function getTotalPriceOverlay() {
  let overlayPriceRef = document.getElementById("total-price-overlay-box");
  overlayPriceRef.innerHTML = calculateTotalPrice();
}

function getTotalPriceButton() {
  let buttonPriceRef = document.getElementById("buttonprice");
  buttonPriceRef.innerHTML = calculateTotalPrice();
}

function orderAndClear() {
  renderConfirmationMessage();
  for (let i = 0; i < dishes.length; i++) {
    dishes[i].amount = 0;
  }
  for (let j = 0; j < cart.length; j++) {
    cart[j].amount = 0;
  }
  cart = [];
  nullTotalPrice();
  renderData();
}

function renderConfirmationMessage() {
  renderConfirmationMessageSidebar();
  renderConfirmationMessageOverlay();
}

function renderConfirmationMessageSidebar() {
  let confirmationRef = document.getElementById("confirmation-sidebar");
  confirmationRef.innerHTML = `<p>Ihre Testbestellung war erfolgreich.</p>`;
}

function renderConfirmationMessageOverlay() {
  let confirmationRef = document.getElementById("confirmation-overlay");
  confirmationRef.innerHTML = `<p>Ihre Testbestellung war erfolgreich.</p>`;
}

function removeConfirmationMessage() {
  removeConfirmationMessageSidebar();
  removeConfirmationMessageOverlay();
}

function removeConfirmationMessageSidebar() {
  let confirmationRef = document.getElementById("confirmation-sidebar");
  confirmationRef.innerHTML = "";
}

function removeConfirmationMessageOverlay() {
  let confirmationRef = document.getElementById("confirmation-overlay");
  confirmationRef.innerHTML = "";
}

function nullTotalPrice() {
  nullTotalPriceSidebar();
  nullTotalPriceOverlay();
  nullTotalPriceButton();
}

function nullTotalPriceSidebar() {
  let sidebarPriceRef = document.getElementById("total-price-sidebar-box");
  sidebarPriceRef.innerHTML = "";
}

function nullTotalPriceOverlay() {
  let overlayPriceRef = document.getElementById("total-price-overlay-box");
  overlayPriceRef.innerHTML = "";
}

function nullTotalPriceButton() {
  let buttonPriceRef = document.getElementById("buttonprice");
  buttonPriceRef.innerHTML = "";
}

function renderData() {
  renderDishes();
  renderSidebarCart();
  renderOverlayCart();
}