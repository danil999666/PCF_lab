function filterRangeArray() {
    let inputArray = document.getElementById('inputArray').value.split(',').map(item => parseInt(item.trim()));
    let a = parseInt(document.getElementById('inputA').value);
    let b = parseInt(document.getElementById('inputB').value);
    let result = filterRange(inputArray, a, b);
    document.getElementById('result').innerText = result.join(', ');
}

function filterRange(arr, a, b) {
    return arr.filter(item => (a <= item && item <= b));
}