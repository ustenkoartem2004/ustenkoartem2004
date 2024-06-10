document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.remove-button').forEach(button => {
        button.addEventListener('click', function() {
            this.parentElement.style.display = 'none';
        });
    });
});