/*
Сделать генерацию корзины динамической: верстка корзины
не должна находиться в HTML-структуре. Там должен быть
только div, в который будет вставляться корзина,
    сгенерированная на базе JS:
    Пустая корзина должна выводить строку «Корзина пуста»;
Наполненная должна выводить «В корзине: n товаров
на сумму m рублей».
*/

function countCartTotal(items) {
    var total = 0;
    var count = 0;
    for (var i = 0; i < items.length; i++) {
        total += items[i].price * items[i].quantity;
        count += items[i].quantity;
    }

    var message = "";
    if(items.length) {
        message = "В корзине " + count + "товаров на сумму " + total+ " рублей"
    }else {
        message = "Корзина пуста";
    }
    var $cart = document.getElementById("cart");
    $cart.textContent = message;
}

var cart = [
    {
        name: "iphone XR",
        price: 70000,
        quantity: 1,
    },
    {
        name: "Трусы",
        price: 600,
        quantity: 4,
    },
    {
        name: "Пленка",
        price: 1500,
        quantity: 2,
    },
];

countCartTotal(cart);