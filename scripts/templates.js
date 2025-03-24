function getDishesTemplate(i, j) {
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
  
  function getCartTemplate(i, j) {
      if (cart.amount > 0) {
        return ` 
            <div class="cart-box">
             <h2>Warenkorb</h2>
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
  
  