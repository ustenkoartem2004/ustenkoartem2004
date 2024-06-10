
function pow(x, n) {
    return Math.pow(x, n);
}


function sumTo(n) {
    return n * (n + 1) / 2;
}


function isLeapYear(year) {
    return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
}

function factorial(n) {
    if (n === 0) return BigInt(1);
    return BigInt(n) * factorial(n - 1);
}

function fib(n) {
    let a = BigInt(0), b = BigInt(1);
    for (let i = 0; i < n; i++) {
        let temp = a;
        a = b;
        b = temp + b;
    }
    return a;
}

function compare(x) {
    return function(y) {
        if (y > x) return true;
        if (y < x) return false;
        return null;
    };
}

function sum(...args) {
    return args.reduce((acc, curr) => acc + curr, 0);
}

function addBlackSpot(obj) {
    obj[Symbol.for("blackSpot")] = true;
    return obj;
}
