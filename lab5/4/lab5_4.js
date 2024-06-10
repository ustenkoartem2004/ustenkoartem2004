let hider = document.getElementById('hider');
let text = document.getElementById('text');

hider.addEventListener('click', function() {

    if (text.style.display !== 'none') {
        text.style.display = 'none';
        hider.value = 'Показать текст'; 
    } else {
        text.style.display = ''; 
        hider.value = 'Спрятать текст'; 
    }
});