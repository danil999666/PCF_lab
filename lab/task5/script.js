function calculator() {
    let continueCalculation = true;

    while (continueCalculation) {
        let num1 = parseFloat(prompt("Введіть перше число:"));
        let operator = prompt("Введіть операцію (+, -, *, /):");
        let num2 = parseFloat(prompt("Введіть друге число:"));

        let result;

        switch (operator) {
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "*":
                result = num1 * num2;
                break;
            case "/":
                result = num1 / num2;
                break;
            default:
                alert("Невірна операція. Будь ласка, введіть +, -, *, або /");
                continue;
        }

        alert(`Результат: ${result}`);

        continueCalculation = confirm("Хочете вирішити ще один приклад?");
    }
}
