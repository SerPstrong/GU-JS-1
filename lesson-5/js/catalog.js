/*
* Сделать так, чтобы товары в каталоге выводились при помощи JS:
Создать массив товаров (сущность Product);
При загрузке страницы на базе данного массива генерировать
вывод из него. HTML-код должен содержать только div id=”catalog”
без вложенного кода. Весь вид каталога генерируется JS.
*/

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

function buildProductList(items) {
    var $catalog = document.getElementById("catalog");

    for (var i = 0; i < items.length; i++) {
        var $img = document.createElement("img");
        $img.src = items[i].img;

        var $title = document.createElement("h3");
        $title.textContent = items[i].name + " (" + items[i].price + ")";

        var $item = document.createElement("li");
        $item.appendChild($img);
        $item.appendChild($title);

        $catalog.appendChild($item);
    }
}

var products = [
    {
        img: "https://sun9-5.userapi.com/c849424/v849424786/15eee3/Y4C7mfELwBA.jpg?ava=1",
        name: "iphone XR",
        price: 70000,
    },
    {
        img: "https://bipbap.ru/wp-content/uploads/2017/12/65620375-6b2b57fa5c7189ba4e3841d592bd5fc1-800-640x426.jpg",
        name: "Трусы",
        price: 600,
    },
    {
        img: "https://rep.ru/files/models/widget_picture/7872/7872_photo_w980.jpg",
        name: "Пленка",
        price: 1500,
    },
];

buildProductList(products);