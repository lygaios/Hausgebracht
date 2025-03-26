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

    renderSidebarCart(i);
    renderOverlayCart(i);
  }
}

function renderSidebarCart(i) {
  let sidebarCartRef = document.getElementById("sidebar-cart");
  sidebarCartRef.innerHTML = "";
  for (let i = 0; i < cart.length; i++) {
    sidebarCartRef.innerHTML += getCartTemplate(i);
    getTotalPriceSidebar(i);
  }
}

function renderOverlayCart(i) {
  let overlayCartRef = document.getElementById("overlay-cart");
  overlayCartRef.innerHTML = "";
  for (let i = 0; i < cart.length; i++) {
    overlayCartRef.innerHTML += getCartTemplate(i);
    getTotalPriceOverlay(i);
    getTotalPriceButton(i);
  }
}

function addDish(i) {
  if (dishes[i].amount == 0) {
    dishes[i].amount = 1;
    cart.push({ name: dishes[i].name, price: dishes[i].price, amount: 1 });
  } else {
    cart[i].amount++;
    dishes[i].amount++;
  }
  renderDishes(i);
  renderSidebarCart(i);
  renderOverlayCart(i);
}

function removeDish(i) {
  if (cart[i].amount > 1) {
    cart[i].amount--;
    dishes[i].amount--;
  } else {
    dishes[i].amount = 0;
    cart[i].price = 0;
    cart.splice(i, 1);
  }
  renderDishes(i);
  renderSidebarCart(i);
  renderOverlayCart(i);
}

function calculateTotalPrice(i) {
  let totalPrice = 0;
  for (let i = 0; i < cart.length; i++) {
    totalPrice += cart[i].price.toFixed(2) * cart[i].amount;
  }
  return totalPrice.toFixed(2) + " € ";
}

function getTotalPriceSidebar(i) {
  let sidebarPriceRef = document.getElementById("total-price-sidebar-box");
  sidebarPriceRef.innerHTML = calculateTotalPrice(i);
}

function getTotalPriceOverlay(i) {
  let overlayPriceRef = document.getElementById("total-price-overlay-box");
  overlayPriceRef.innerHTML = calculateTotalPrice(i);
}

function getTotalPriceButton(i) {
  let buttonPriceRef = document.getElementById("buttonprice");
  buttonPriceRef.innerHTML = calculateTotalPrice(i);
}

function orderAndClear() {
  renderConfirmationMessageSidebar();
  renderConfirmationMessageOverlay();
  for (let i = 0; i < dishes.length; i++) {
    dishes[i].amount = 0;
  };
  for (let j = 0; j < cart.length; j++) {
    cart[j].amount = 0;
  }
  cart = [];
  renderDishes();
  renderSidebarCart();
  renderOverlayCart();
}

function renderConfirmationMessageSidebar() {
  let confirmationRef = document.getElementById("confirmation-sidebar");
  confirmationRef.innerHTML = `<p>Ihre Testbestellung war erfolgreich.</p>`;
}

function renderConfirmationMessageOverlay() {
  let confirmationRef = document.getElementById("confirmation-overlay");
  confirmationRef.innerHTML = `<p>Ihre Testbestellung war erfolgreich.</p>`;
}
