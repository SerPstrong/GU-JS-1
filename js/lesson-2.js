/*
var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2 Сначала увеличение на 1 потом присваивание
d = b++; alert(d);           // 1 b увеличится на 1 после присваивания
c = (2+ ++a); alert(c);      // 5 a = 2 увеличивается на 1 + 2 затем присваивание
d = (2+ b++); alert(d);      // 4 b увеличится на 1 после присваивания
alert(a);                    // 3 Изначально a равно 1 затем два раза увеличение на 1
alert(b);                    // 3 Изначально b равно 1 затем два раза увеличение на 1
*/


/*
var a = 2;
var x = 1 + (a *= 2);
5
*/


/*Объявить две целочисленные переменные — a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
если a и b положительные, вывести их разность;
если а и b отрицательные, вывести их произведение;
если а и b разных знаков, вывести их сумму;
Ноль можно считать положительным числом.*/

/*
var a = getRandomInt(-100, 100);
var b = getRandomInt(-100, 100);

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

if (a >= 0 && b >= 0) {
    alert("Разность равна: " + (a - b));
} else if (a < 0 && b < 0) {
    alert("Произведение равно: " + (a * b));
} else if (a < 0 && b >= 0 || a >= 0 && b < 0) {
    alert("Сумма равна: " + (a + b));
}
*/

/*Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.*/

/*function getRandomIntSwitch(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

var a = getRandomIntSwitch(0, 15);

switch (a) {
    case 0:
        console.log(0);
    case 1:
        console.log(1);
    case 2:
        console.log(2);
    case 3:
        console.log(3);
    case 4:
        console.log(4);
    case 5:
        console.log(5);
    case 6:
        console.log(6);
    case 7:
        console.log(7);
    case 8:
        console.log(8);
    case 9:
        console.log(9);
    case 10:
        console.log(10);
    case 11:
        console.log(11);
    case 12:
        console.log(12);
    case 13:
        console.log(13);
    case 14:
        console.log(14);
    case 15:
        console.log(15);
}*/


/*Реализовать четыре основные арифметические операции в виде функций с двумя параметрами.
Обязательно использовать оператор return.*/

/*function funcAmount(x, y) {
    return x + y;
}

function funcDifference(x, y) {
    return x - y;
}

function funcComposition(x, y) {
    return x * y;
}

function funcPrivate(x, y) {
    return x / y;
}*/


/*Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 — значения аргументов, operation — строка с названием операции.
    В зависимости от переданного значения выполнить одну из арифметических операций
    (использовать функции из пункта 5) и вернуть полученное значение (применить switch).*/
/*
function operation(arg1, arg2, operation) {
    switch (operation) {
        case "amount":
            alert(funcAmount(arg1, arg2));
            break;
        case "difference":
            alert(funcDifference(arg1, arg2));
            break;
        case "composition":
            alert(funcComposition(arg1, arg2));
            break;
        case "private":
            alert(funcPrivate(arg1, arg2));
            break;
    }
}

operation(5, 4, "difference");*/


/* Сравнить null и 0. Объяснить результат.*/

/*console.log(null > 0);
console.log(null < 0);
console.log(null === 0);
console.log(null !== 0);*/


/* С помощью рекурсии организовать функцию возведения числа в степень.
Формат: function power(val, pow), где val — заданное число, pow –— степень.*/

function power(val, pow) {
    return (pow !== 1) ? val * power(val, pow - 1) : val; // 2*pow(2, 2)

}

console.log(power(10, 3));