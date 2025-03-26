function getDishesTemplate(i) {
  return ` 
      <div class="dishes-box">
          <div class="data-block">
              <h3>${dishes[i].name}</h3>
              <p>${dishes[i].price.toFixed(2)} €</p>
          </div>
            <button class="button" onclick="addDish(${i})">+</button>
      </div>
      `;
}

function getCartTemplate(i) {
  return ` 
          <div class="cart-box">
              <div class="data-block">
               <h3>${dishes[i].name}</h3>
                  <p>${dishes[i].price.toFixed(2)} €</p>
              </div>
              <div class="interact-row">
                  <button class="button" onclick="removeDish(${i})">-</button>
                  <p>${dishes[i].amount}</p> 
                  <button class="button" onclick="addDish(${i})">+</button>
              </div>
        </div>
      `;
}

function getConfirmationTemplate() {
  return `
    <p>Ihre Testbestellung war erfolgreich.</p>
    `;
}
