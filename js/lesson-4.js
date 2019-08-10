/*
Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999,
надо получить на выходе объект, в котором в соответствующих свойствах описаны
единицы, десятки и сотни. Например, для числа 245 надо получить
следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}.
Если число превышает 999, необходимо выдать соответствующее
сообщение с помощью console.log и вернуть пустой объект
*/

/*

Вариант 1

detNumber();

function detNumber(num) {
    var number = +prompt("Введите число от 0 до 999");
    number += "";

    var objNumber = {
        "hundreds": 0,
        "tens": 0,
        "units": 0,
    };

    if (number > 999) {
        console.log("Введите число меньше 1000");
        console.log(objNumber);
        return detNumber();
    }

    objNumber.units = number[2];
    objNumber.tens = number[1];
    objNumber.hundreds = number[0];

    console.log(objNumber);
}
*/


/*
Вариант 2

var number = +prompt("Введите число от 0 до 999");
number += "";

console.log(detNumber(number));

function detNumber(num) {

    var objNumber = {
        "hundreds": 0,
        "tens": 0,
        "units": 0,
    };

    if (number > 999) {
        console.log("Введите число меньше 1000");
        return (objNumber);

    }

    objNumber.units = number[2];
    objNumber.tens = number[1];
    objNumber.hundreds = number[0];

    return objNumber;

}*/


/*
Продолжить работу с интернет-магазином:
    В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
    Реализуйте такие объекты.
    Перенести функционал подсчета корзины на объектно-ориентированную базу.
*/

var basket = [
    phone = {
        quantity: 10,
        price: 12000,
    },
    laptop = {
        quantity: 5,
        price: 33000,
    },
];

function countBasketPrice(items) {
    var total = 0;
    for (var i = 0; i < items.length; i++) {
        total += items[i].quantity * items[i].price
    }
    return total;
}

console.log("Общая стоимость корзины " + countBasketPrice(basket));