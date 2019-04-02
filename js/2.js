/*1. Дан код:
    var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2 (Сначала прибавляется один к а, получается 2 и присваивается к с)
d = b++; alert(d);           // 1 (Сначала присваивается к d потом увеличивается на единицу)
c = (2+ ++a); alert(c);      // 5 (а=2 увеличивается на 1, +2)
d = (2+ b++); alert(d);      // 4 (b = 2 + 2)
alert(a);                    // 3 (Было 2 раза увеличение на единицу)
alert(b);                    // 3 (Было 2 раза увеличение на единицу)
Почему код даёт именно такие результаты?*/


/*2. Чему будет равен x в примере ниже?
var a = 2;
var x = 1 + (a *= 2);

х = 5

*/


/*3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения.
    Затем написать скрипт, который работает по следующему принципу:
    если a и b положительные, вывести их разность;
если а и b отрицательные, вывести их произведение;
если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом. ###*/

function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var a = randInt(-10, 10);
var b = randInt(-10, 10);

console.log("a = " + a + "\n" + "b = " + b)

if (a >= 0 && b >= 0) {
    console.log(a - b);
} else if (a < 0 && b < 0) {
    console.log(a * b);
} else if (a !== b) {
    console.log(a + b);
}


/*4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15. ###*/

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var a = randomNumber(0, 15);

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

}


/*5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.*/

function sum(x, y) {
    return (x + y);
}

function difference(x, y) {
    return (x - y);
}

function composition(x, y) {
    return (x * y);
}

function privat(x, y) {
    return (x / y);
}

console.log("func " + "\n" + composition(a = randomNumber(1, 100), b = randomNumber(1, 100)));


/*6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 –
значения аргументов, operation – строка с названием операции. В зависимости от переданного значения операции
выполнить одну из арифметических операций (использовать функции из пункта 3) и вернуть полученное значение
(использовать switch).*/

function mathOperation(arg1, arg2, operation) {
    switch (true) {
        case (operation === sum):
            return arg1 + arg2;
        case (operation === difference):
            return arg1 - arg2;
        case (operation === composition):
            return arg1 * arg2;
        case (operation === privat):
            return arg1 / arg2;

    }
}

console.log(mathOperation(7, 3, composition));


/*7. *Сравнить null и 0. Попробуйте объяснить результат.*/




/*8. *С помощью рекурсии
организовать функцию возведения числа в степень.
Формат: function power(val, pow), где val – заданное число, pow – степень.*/

