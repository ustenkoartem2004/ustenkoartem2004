
let num = Number(prompt("Введите число"));

let text = "На ветке сидит " + num + " ";
let lastDigit = num % 10;
let lastTwoDigits = num % 100;

if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
    text += "ворон";
} else {
    switch (lastDigit) {
        case 1:
            text += "ворона";
            break;
        case 2:
        case 3:
        case 4:
            text += "вороны";
            break;
        default:
            text += "ворон";
            break;
    }
}
alert(text);