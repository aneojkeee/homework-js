const controlDec = document.querySelectorAll('.product__quantity-control_dec');
const controlInk = document.querySelectorAll('.product__quantity-control_inc');
const btnsProductAdd = document.querySelectorAll('.product__add');
const cardProducts = document.getElementsByClassName('cart__products')[0];

function clickMinus() {
    let quality = parseInt(this.closest('div.product__quantity-controls').querySelector('div.product__quantity-value').innerText);
    if ((quality - 1) >= 1) {
        quality = quality - 1;
        this.closest('div.product__quantity-controls').querySelector('div.product__quantity-value').innerText = quality;
    }
}

function clickPlus() {
    let quality = parseInt(this.closest('div.product__quantity-controls').querySelector('div.product__quantity-value').innerText);
    quality = quality + 1;
    this.closest('div.product__quantity-controls').querySelector('div.product__quantity-value').innerText = quality;
}

function productAdd() {
    if (cardProducts.querySelector('div.cart__product') != null) {
        for (let i = 0; i < Array.from(cardProducts.querySelectorAll('div.cart__product')).length; i++) {
            const element = Array.from(cardProducts.querySelectorAll('div.cart__product'))[i];
            if (element.dataset.id === this.closest('div.product').dataset.id) {
                element.querySelector('div.cart__product-count').innerText = parseInt(element.querySelector('div.cart__product-count').innerText) +
                    parseInt(this.closest('div.product').querySelector('div.product__quantity-value').innerText);
                return false;
            }
            if (i + 1 === Array.from(cardProducts.querySelectorAll('div.cart__product')).length) {
                addNewCard(this);
                i = i + 1;
            }
        }
    } else {
        addNewCard(this);
    }
}

function addNewCard(context) {
    let newCard = document.createElement('div');
    newCard.classList.add("cart__product");
    newCard.dataset.id = context.closest('div.product').dataset.id;
    newCard.innerHTML = `<img class="cart__product-image" src="${context.closest('div.product').querySelector('img').src}"><div class="cart__product-count">
    ${context.closest('div.product').querySelector('div.product__quantity-value').innerText}</div>`;
    cardProducts.appendChild(newCard);
}

for (let i = 0; i < Array.from(controlDec).length; i++) {
    const element = Array.from(controlDec)[i];
    element.addEventListener('click', clickMinus);
}
for (let i = 0; i < Array.from(controlInk).length; i++) {
    const element = Array.from(controlInk)[i];
    element.addEventListener('click', clickPlus);
}
for (let i = 0; i < Array.from(btnsProductAdd).length; i++) {
    const element = Array.from(btnsProductAdd)[i];
    element.addEventListener('click', productAdd);
}