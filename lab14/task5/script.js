function copySorted(arr) {
    return arr.slice().sort();
}

function sortAndDisplay() {
    let userInput = prompt("Введіть рядки через кому:");
    let arr = userInput.split(',');
    let sorted = copySorted(arr);
    alert("Відсортований масив: " + sorted.join(', '));
}
