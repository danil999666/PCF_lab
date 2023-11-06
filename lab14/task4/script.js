function sortDescending() {
    let userInput = prompt("Введіть числа через кому:");
    let arr = userInput.split(',').map(Number);
    arr.sort((a, b) => b - a);
    alert("Відсортований масив: " + arr.join(', '));
}
