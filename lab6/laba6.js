document.addEventListener('DOMContentLoaded', function() {
    var currentEditableTd = null;

    var table = document.querySelector('table');
    table.addEventListener('click', function(e) {
        if (currentEditableTd) return;
        
        var target = e.target;
        if (target.tagName.toLowerCase() === 'td' && !target.querySelector('textarea')) {
            currentEditableTd = target;
            var textarea = document.createElement('textarea');
            textarea.style.width = '100%'; 
            textarea.value = target.innerHTML;
            target.innerHTML = '';
            target.appendChild(textarea);
            textarea.focus();
            var okButton = document.createElement('button');
            okButton.textContent = 'OK';
            var cancelButton = document.createElement('button');
            cancelButton.textContent = 'ОТМЕНА';
            target.appendChild(okButton);
            target.appendChild(cancelButton);

            okButton.onclick = function() {
                target.innerHTML = textarea.value;
                currentEditableTd = null;
            };
            cancelButton.onclick = function() {
                target.innerHTML = textarea.value; 
                target.removeChild(textarea);
                target.removeChild(okButton);
                target.removeChild(cancelButton);
                currentEditableTd = null;
            };
        }
    });


    function showPrompt(html, callback) {
        var overlay = document.querySelector('.overlay');
        var modal = document.querySelector('.modal');
        modal.innerHTML = html;
        var input = document.createElement('input');
        var okButton = document.createElement('button');
        okButton.textContent = 'OK';
        var cancelButton = document.createElement('button');
        cancelButton.textContent = 'ОТМЕНА';
        
        modal.appendChild(input);
        modal.appendChild(okButton);
        modal.appendChild(cancelButton);
        
        overlay.style.display = 'block';
        modal.style.display = 'block';
        
        input.focus();
        
        input.onkeydown = function(e) {
            if (e.key === 'Enter') {
                callback(input.value);
                closeModal();
            } else if (e.key === 'Escape') {
                callback(null);
                closeModal();
            }
        };
        
        okButton.onclick = function() {
            callback(input.value);
            closeModal();
        };
        
        cancelButton.onclick = function() {
            callback(null);
            closeModal();
        };
        
        function closeModal() {
            modal.style.display = 'none';
            overlay.style.display = 'none';
            modal.innerHTML = ''; 
        }
    }
    

    var promptButton = document.getElementById('promptButton');
    promptButton.addEventListener('click', function() {
        showPrompt('Введите ваш текст', function(value) {
            if (value) {
                console.log('Введено: ' + value);
            } else {
                console.log('Ввод отменен');
            }
        });
    });
});
