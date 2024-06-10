document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    const status = document.getElementById('status');

    document.getElementById('calculate').addEventListener('click', function(event) {
        event.preventDefault();
        let age = document.getElementById('age').value;
        let gender = document.querySelector('input[name="gender"]:checked').value;

        if (age >= 0 && age <= 17) {
            status.textContent = "Вам работать ещё рано - учитесь";
        } else if ((age >= 18 && age <= 59 && gender === "male") || (age >= 18 && age <= 54 && gender === "female")) {
            status.textContent = "Вам ещё работать и работать";
        } else if ((age >= 60 && age <= 64 && gender === "male") || (age >= 55 && age <= 59 && gender === "female")) {
            status.textContent = "Скоро пенсия!";
        } else if ((age >= 65 && gender === "male") || (age >= 60 && gender === "female")) {
            status.textContent = "Вам пора на пенсию";
        } else {
            status.textContent = "Да кто ты такой?";
        }
    });

    document.getElementById('clear').addEventListener('click', function() {
        document.getElementById('age').value = '';
        document.querySelector('input[name="gender"]:checked').checked = false;
        status.textContent = '';
    });
});
