function calculateSum() {
    let sum = 0;
    let numbers = [];

    while (true) {
        let number = parseFloat(prompt("Введіть число (або 0 для завершення):"));

        if (number === 0) {
            break;
        }

        if (!isNaN(number)) {
            sum += number;
            numbers.push(number);
        } else {
            alert("Будь ласка, введіть коректне число.");
        }
    }

    alert(`${numbers.join(' + ')} = ${sum}`);
}
