/*Продолжаем реализовывать модуль корзины:
    Добавлять в объект корзины выбранные товары по клику на кнопке «Купить»
без перезагрузки страницы;
    Привязать к событию покупки товара пересчет корзины и обновление ее внешнего вида.*/

/*У товара может быть несколько изображений. Нужно:
    Реализовать функционал показа полноразмерных картинок товара в модальном окне;
    Реализовать функционал перехода между картинками внутри модального окна.*/

const products = [
    {
        id: 1,
        name: "iphone XR",
        price: 70000,
        image: "img/gallery/small/1.jpg",
    },
    {
        id: 2,
        name: "Пленка",
        price: 1000,
        image: "img/gallery/small/2.jpg",
    },
    {
        id: 3,
        name: "Бампер",
        price: 3300,
        image: "img/gallery/small/3.jpg",
    }
];

var cart = [];

function buildCatalog() {
    var $catalog = document.querySelector("#catalog");

    for (var i = 0; i < products.length; i++) {
        var $template = document.querySelector("#template").children[0].cloneNode(true);
        $template.querySelector(".title").textContent = products[i].name;
        $template.querySelector(".price").textContent = products[i].price;
        $template.querySelector(".picture").src = products[i].image;

        $template.querySelector(".buy").dataset.id = products[i].id;
        $template.querySelector(".buy").dataset.name = products[i].name;
        $template.querySelector(".buy").dataset.price = products[i].price;
        $template.querySelector(".buy").dataset.image = products[i].image;

        $catalog.appendChild($template);
    }
}

function isExist(id) {
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].id === id) {
            return true;
        }
    }
    return false;
}

function findIdx(id) {
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].id === id) {
            return i;
        }
    }
}

function handlBuyClick(event) {
    if (event.target.tagName === "BUTTON") {
        if (isExist(+event.target.dataset.id)) {
            //Товар уже есть в корзине - нужно увеличить колличество
            var idx = findIdx(+event.target.dataset.id);
            cart[idx].quantity++;
        } else {
            //Товара в корзине еще нет - нужно добавить
            cart.push({
                id: +event.target.dataset.id,
                name: +event.target.dataset.name,
                price: +event.target.dataset.price,
                image: +event.target.dataset.image,
                quantity: 1,
            });
        }

        countCartTotal(cart);
    }

    if (event.target.tagName === "IMG") {
        var $overlay = document.querySelector(".overlay");
        $overlay.style.display = "block";

        $overlay.querySelector(".preview").src = event.target.src;
    }
}

function countCartTotal(items) {
    var total = 0;
    var count = 0;
    for (var i = 0; i < items.length; i++) {
        total += items[i].price * items[i].quantity;
        count += items[i].quantity;
    }

    var message = "";
    if (items.length) {
        message = "В корзине " + count + "товаров на сумму " + total + " рублей"
    } else {
        message = "Корзина пуста";
    }
    var $cart = document.getElementById("cart");
    $cart.textContent = message;
}

function handleCloseClick() {
    var $overlay = document.querySelector(".overlay");
    $overlay.style.display = "none";
}

function init() {
    buildCatalog();

    var $catalog = document.querySelector("#catalog");
    $catalog.addEventListener("click", handlBuyClick);

    var $close = document.querySelector(".close");
    $close.addEventListener("click", handleCloseClick);
}

window.addEventListener("load", init);