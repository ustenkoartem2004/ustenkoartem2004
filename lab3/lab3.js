export function getDecimal(num) {
    let n = Math.abs(num);
    let decimalPart = n - Math.floor(n);
    if (num < 0) {
        return parseFloat((1 - decimalPart).toFixed(2));
    }
    return parseFloat(decimalPart.toFixed(2));
}

export function normalizeUrl(url) {
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        return 'https://' + url;
    } else if (url.startsWith('http://')) {
        return 'https://' + url.slice(7);
    }
    return url;
}

export function checkSpam(str) {
    let lowerStr = str.toLowerCase();
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

export function truncate(str, maxlength) {
    if (str.length > maxlength) {
        return str.slice(0, maxlength - 1) + '\u2026';
    }
    return str;
}

export function camelize(str) {
    return str.split('-').map((word, index) => index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)).join('');
}

export function fibs(n) {
    let result = [];
    let a = 0n, b = 1n;
    if (n > 0) result.push(0n);
    if (n > 1) result.push(1n);
    for (let i = 2; i < n; i++) {
        let c = a + b;
        result.push(c);
        a = b;
        b = c;
    }
    return result;
}

export function arrReverseSorted(arr) {
    return [...arr].sort((a, b) => b - a);
}

export function unique(arr) {
    return [...new Set(arr)];
}
