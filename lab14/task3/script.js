function filterRangeInPlaceArray() {
    let inputArray = document.getElementById('inputArray').value.split(',').map(item => parseInt(item.trim()));
    let a = parseInt(document.getElementById('inputA').value);
    let b = parseInt(document.getElementById('inputB').value);
    filterRangeInPlace(inputArray, a, b);
    alert('Масив після фільтрації: ' + inputArray.join(', '));
}

function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];
        if (val < a || val > b) {
        arr.splice(i, 1);
        i--;
        }
    }
}