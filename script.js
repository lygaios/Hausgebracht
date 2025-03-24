function init() {
  renderDishes();
}

function showCartOverlay() {
  document.getElementById("overlay").classList.remove("dnone");
}

function closeOverlay() {
    document.getElementById("overlay").classList.add("dnone"); 
}

function getValueFromInput(id) {
    let value = document.getElementById(id).value;
    return value;
}

function renderDishes() {
    let dishesRef = document.getElementById("menu-contents");
    dishesRef.innerHTML = "";
    for (let i = 0; i < dishes.length; i++) {
      dishesRef.innerHTML += getDishesTemplate(i);
      renderCart(i);
    }
  }
  
function renderSidebarCart(i) {
    if (document.getElementById("overlay").classList.contains("dnone")) {
        let cartRef = document.getElementById("sidebar-cart");}
    }


function renderOverlayCart(i) {
    if (document.getElementById("overlay").classList.contains("dnone") == false) {
        let cartRef = document.getElementById("overlay-cart");}
}

/*
  function renderCart(i, j) {
  if (document.getElementById("overlay").classList.contains("dnone") == false) {
      let cartRef = document.getElementById("overlay-cart");
      for (let j = 0; j < cart.length; j++) {
        cartRef.innerHTML += getCartTemplate(i, j);
        renderDishes(i, j)
      }
    } else {
      let cartRef = document.getElementById("sidebar-cart");
      for (let j = 0; j < cart.length; j++) {
        cartRef.innerHTML += getCartTemplate(i, j);
        renderDishes(i, j)
      }
    }
  }
    */
  
  
  function addDish(i, j) {
    if (cart[j].amount = 0) {
  let newCartDish = dishes[i];
  cart.push(newCartDish.innerHTML);
  let cartNumber = cart[j].amount + 1;
  cart[j].amount = cartNumber;
      renderDishes(i, j);
      renderCart(i, j)
    }
  }
  
  function removeDish(i, j) {
    if (cart[j].amount > 1) {
      let cartNumber = cart[j].amount - 1;
      cart[j].amount = cartNumber;
      renderDishes(i, j);
    } else if (cart[j].amount == 1) {
        cart.splice(j, 1);
        renderDishes(i, j);
        renderCart(i, j)
    }
  }
  
  
