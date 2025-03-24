function init() {
    renderDishes()
}

function showCartOverlay() {
    document.getElementById("overlay").classList.remove("dnone");
}

function renderDishes() {
    let dishesRef = document.getElementById("menu-contents");
    dishesRef.innerHTML = "";
    for (let i = 0; i < dishes.length; i++) {
        dishesRef.innerHTML += getDishesTemplate(i);
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
            <button id="less" class="button" onclick "removeDish()">-</button>
            <button id="more" class="button" onclick "addDish()">+</button>
        </div>
    </div>
    `;
}

function removeDish() {

}

function addDish() {
    
}