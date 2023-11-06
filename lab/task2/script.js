function rearrangeDigits() {
    let number = prompt("Введіть п'ятизначне число:");

    if (number.length === 5) {
        let rearrangedNumber = number.slice(-1) + number.slice(0, -1);
        alert(`Результат: ${rearrangedNumber}`);
    } else {
        alert("Будь ласка, введіть п'ятизначне число.");
    }
}
