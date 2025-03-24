function init() {
  renderDishes();
}

function showCartOverlay() {
  document.getElementById("overlay").classList.remove("dnone");
}

function renderDishes() {
  let dishesRef = document.getElementById("menu-contents");
  dishesRef.innerHTML = "";
  for (let i = 0; i < dishes.length; i++) {
    dishesRef.innerHTML += getDishesTemplate(i);
    if (document.getElementById("overlay").classList.contains("dnone") == false) {
      let cartRef = document.getElementById("overlay-cart");
      for (let j = 0; j < cart.length; j++) {
        cartRef.innerHTML += getCartTemplate(i, j);
      }
    } else {
      let cartRef = document.getElementById("sidebar-cart");
      for (let j = 0; j < cart.length; j++) {
        cartRef.innerHTML += getCartTemplate(i, j);
      }
    }
  }
}

function getDishesTemplate(i) {
  return ` 
    <div class="dishes-box">
        <div class="data-block">
            <h3>${dishes[i].name}</h2>
            <p>${dishes[i].price.toFixed(2)} €</p>
        </div>
        <div class="interact-row">
            <button class="button" onclick "removeDish(i, j)">-</button>
   
            <button class="button" onclick "addDish(i, j)">+</button>
        </div>
    </div>
    `;
}

function addDish(i, j) {
  if (cart[j].amount = 0) {
    let cartNumber = cart[j].amount + 1;
    cart[j].amount = cartNumber;

    renderDishes(i, j);
  }
}

function removeDish(i, j) {
  if (cart[j].amount > 0) {
    let cartNumber = cart[j].amount - 1;
    cart[j].amount = cartNumber;
    renderDishes(i, j);
  }
}

function getCartTemplate(i, j) {
  if (cart.amount > 0) {
    return ` 
        <div class="cart-box">
            <div class="data-block">
             <h3>${cart[j].name}</h2>
                <p>${cart[j].price.toFixed(2)} €</p>
            </div>
            <div class="interact-row">
                <button class="button" onclick "removeDish(i, j)">-</button>
                <p>${cart[j].amount}</p> 
                <button class="button" onclick "addDish(i, j)">+</button>
            </div>
    </div>
    `;
  }
}
