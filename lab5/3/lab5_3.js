function createTree(container, obj) {
    let ul = document.createElement('ul');
    
    for (let key in obj) {
        let li = document.createElement('li');
        li.textContent = key; 

        if (Object.keys(obj[key]).length > 0) {
            createTree(li, obj[key]); 
        }
        ul.appendChild(li); 
    }

    container.appendChild(ul); 
}

let data = {
    "Рыбы": {
        "форель": {},
        "лосось": {}
    },
    "Деревья": {
        "Огромные": {
            "секвойя": {},
            "дуб": {}
        },
        "Цветковые": {
            "яблоня": {},
            "магнолия": {}
        }
    }
};

let container = document.getElementById('container');
createTree(container, data); // Создает дерево в контейнере