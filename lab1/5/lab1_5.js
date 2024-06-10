function generateTable() {
    const numRows = Number(prompt("Введите количество строк: "));
    const basePattern = ["dog", "dog", "dog", "cat", "cat", "dog"];
    let output = "";
    let currentPattern = basePattern.slice();

    function rotateArray(arr) {
        arr.push(arr.shift());
    }

    for (let i = 0; i < numRows; i++) {
        if (i !== 0) rotateArray(currentPattern);
        output += currentPattern.join("\t") + "\n";
    }

    console.clear();
    console.log(output);
}

generateTable()