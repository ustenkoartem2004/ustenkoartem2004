
let age = Number(prompt("Введите ваш возраст^"));
let gender = Number(prompt("Введите ваш пол: 0 - мужской, 1 - женский: "));

if (age >= 0 && age <= 17) {
    alert("Вам работать ещё рано - учитесь")
} else if ((age >= 18 && age <= 59 && !gender) || (age >= 18 && age <= 54 && gender)) {
    alert("Вам ещё работать и работать");
} else if ((age >= 60 && age <= 64 && !gender) || (age >= 55 && age <= 59 && gender)) {
    alert("Скоро пенсия!");
} else if ((age >= 65 && !gender) || (age >= 60 && gender)) {
    alert("Вам пора на пенсию");
} else {
    alert("Да кто ты такой?");
}