document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("form").addEventListener('submit', function(event) {
        event.preventDefault();

        let age = document.getElementById('age').value;
        let gender = document.querySelector('input[name="gender"]:checked').value;

        if (age >= 0 && age <= 17) {
            alert("Вам работать ещё рано - учитесь")
            return;
        } else if ((age >= 18 && age <= 59 && gender === "male") || (age >= 18 && age <= 54 && gender === "female")) {
            alert("Вам ещё работать и работать");
        } else if ((age >= 60 && age <= 64 && gender === "male") || (age >= 55 && age <= 59 && gender === "female")) {
            alert("Скоро пенсия!");
        } else if ((age >= 65 && gender === "male") || (age >= 60 && gender === "female")) {
            alert("Вам пора на пенсию");
        } else {
            alert("Да кто ты такой?");
        }

        this.submit();
    });
});