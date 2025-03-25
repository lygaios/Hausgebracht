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
  }
}

function renderOverlayCart(i) {
  let overlayCartRef = document.getElementById("overlay-cart");
  overlayCartRef.innerHTML = "";
  for (let i = 0; i < cart.length; i++) {
    overlayCartRef.innerHTML += getCartTemplate(i);
  }
}

function addDish(i) {
  let newCartDishName = dishes[i].name;
  let newCartDishPrice = dishes[i].price;
  let newCartDishAmount = dishes[i].amount;

  let newCartDish = { name: newCartDishName, price: newCartDishPrice, amount: newCartDishAmount };

  if (newCartDishAmount == 0) {
    cart.push(newCartDish);
    dishes[i].amount++;
    cart[i].amount++;
  } else {
    dishes[i].amount++;
    cart[i].amount++;
  }
  renderDishes(i);
  renderSidebarCart(i);
  renderOverlayCart(i);
}
