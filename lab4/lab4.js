class Book {
    constructor(title, pubYear, price) {
        this._title = title;
        this._pubYear = pubYear;
        this._price = price;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        if (!value) throw new Error("Это поле не может быть пустым");
        this._title = value;
    }

    get pubYear() {
        return this._pubYear;
    }

    set pubYear(value) {
        if (value <= 0) throw new Error("Год публикации должен быть положительным");
        this._pubYear = value;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        if (value <= 0) throw new Error("Цена должна быть положительной");
        this._price = value;
    }

    show() {
        console.log(`${this.title}: ${this.price}`);
    }

    static compare(bookA, bookB) {
        return bookA.pubYear - bookB.pubYear;
    }
}

let books = [
    new Book("Book1", 2001, 200),
    new Book("Book2", 1995, 450),
    new Book("Book3", 2010, 16)
];
books.sort(Book.compare);
console.log("отсортировано")
console.log(books)

function isEmpty(obj) {
    return Object.getOwnPropertySymbols(obj).length === 0 && Object.keys(obj).length === 0;
}

let emptyObj = {[Symbol()]: true};
console.log(isEmpty(emptyObj));

let obj = {
    className: 'open menu',
    addClass(cls) {
        if (!this.className.includes(cls)) {
            this.className += ` ${cls}`;
        }
        return this;
    },
    removeClass(cls) {
        let classes = this.className.split(' ');
        this.className = classes.filter(c => c !== cls).join(' ');
        return this;
    }
};
obj.addClass('new').removeClass('menu');
console.log(obj.className);

let json = JSON.stringify(obj, null, 2);
console.log(json);
let obj2 = JSON.parse(json);
console.log(obj === obj2);

function getSecondsToday() {
    let now = new Date();
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    return Math.round((now - today) / 1000);
}
console.log(getSecondsToday());
console.log("в секундах прошло от начала дня")

function formatDate(date) {
    let day = date.getDate().toString().padStart(2, '0');
    let month = (date.getMonth() + 1).toString().padStart(2, '0');
    let year = date.getFullYear().toString().slice(2);
    return `${day}.${month}.${year}`;
}
console.log(formatDate(new Date()));
