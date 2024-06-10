let num;

while (true) {
    num = prompt("Введите число, большее 100:", "");

    if (num === null) {
        break;
    }

    if (Number(num) > 100) {
        break;
    }
}
