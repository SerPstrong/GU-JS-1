/*
Создать функцию, генерирующую шахматную доску.
    Можно использовать любые html-теги.
    Доска должна быть верно разлинована
на черные и белые ячейки. Строки должны нумероваться числами
от 1 до 8, столбцы — латинскими буквами A, B, C, D, E, F, G, H.
*/

var $container = document.getElementById('chess');
var $table = document.createElement('table');

var letters = ["", "A", "B", "C", "D", "E", "F", "G", "H", ""];

for (var i = 0; i < 10; i++) {
    var $row = document.createElement('tr');

    for (var j = 0; j < 10; j++) {
        var $cell = document.createElement('td');
        $row.appendChild($cell);
        if ((i === 0 || i === 9) && (j !== 0 && j !== 9)) {
            $cell.textContent = j;
            continue;
        }

        if (j === 0 || j === 9) {
            $cell.textContent = letters[i];
            continue;
        }

        if ((i + j) % 2 === 0) {
            $cell.classList.add('black');
        } else {
            $cell.classList.add('white');
        }
    }

    $table.appendChild($row);
}

$container.appendChild($table);

