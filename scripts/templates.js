function getDishesTemplate(i) {
    return ` 
      <div class="dishes-box">
          <div class="data-block">
              <h3>${dishes[i].name}</h2>
              <p>${dishes[i].price.toFixed(2)} €</p>
          </div>
          <div class="interact-row">
              <button class="button" onclick "removeDish(i)">-</button> 
              <button class="button" onclick "addDish(i)">+</button>
          </div>
      </div>
      `;
  }
  
  function getCartTemplate(i) {
      return ` 
          <div class="cart-box">
              <div class="data-block">
               <h3>${cart[i].name}</h2>
                  <p>${cart[i].price.toFixed(2)} €</p>
              </div>
              <div class="interact-row">
                  <button class="button" onclick "removeDish(i)">-</button>
                  <p>${cart[i].amount}</p> 
                  <button class="button" onclick "addDish(i)">+</button>
              </div>
      </div>
      `;
  }

  
  