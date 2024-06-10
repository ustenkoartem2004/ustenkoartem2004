document.addEventListener('DOMContentLoaded', function () {
    var title = document.querySelector('.menu .title');
    title.addEventListener('click', function() {
        var menu = this.closest('.menu');
        menu.classList.toggle('open');
    });
});
