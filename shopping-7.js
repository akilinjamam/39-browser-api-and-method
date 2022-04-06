const displayLocalStorageCard = () => {
    const cart = getItemOfCart();
    for (const name in cart) {
        displayProducts(name);
    }
}

const addItem = () => {
    const inputText = document.getElementById('input');
    const name = inputText.value;

    if (!name) {
        return
    }

    // showing in the display
    displayProducts(name);

    // storage
    setProductToCart(name)
    inputText.value = '';
}

const displayProducts = data => {
    const inUl = document.getElementById('products');

    const li = document.createElement('li');

    li.innerText = data;

    inUl.appendChild(li);
    // console.log(li.innerText)
}

const getItemOfCart = () => {

    const cart = localStorage.getItem('cart');

    let objectcrt;

    if (cart) {
        objectcrt = JSON.parse(cart);

    } else {
        objectcrt = {}
    }
    return objectcrt
}

const setProductToCart = name => {
    const card = getItemOfCart();
    if (card[name]) {
        card[name] = card[name] + 1;
    } else {
        card[name] = 1
    }

    // return card;
    console.log(card);
    const cartStringified = JSON.stringify(card);
    localStorage.setItem('cart', cartStringified);
}




const placeOrder = () => {
    document.getElementById('products').textContent = '';
    localStorage.removeItem('cart');
}

displayLocalStorageCard();