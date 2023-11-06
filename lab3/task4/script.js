function calculate() {
    let expression = prompt("Введіть математичний вираз (наприклад, 12 + 5):");

    let operators = ['+', '-', '*', '/'];
    let operator;
    for (let i = 0; i < operators.length; i++) {
        if (expression.includes(operators[i])) {
            operator = operators[i];
            break;
        }
    }

    if (operator) {
        let operands = expression.split(operator);
        let num1 = parseFloat(operands[0]);
        let num2 = parseFloat(operands[1]);

        switch (operator) {
            case '+':
                alert(`Результат: ${num1 + num2}`);
                break;
            case '-':
                alert(`Результат: ${num1 - num2}`);
                break;
            case '*':
                alert(`Результат: ${num1 * num2}`);
                break;
            case '/':
                alert(`Результат: ${num1 / num2}`);
                break;
        }
    } else {
        alert("Невірний формат виразу.");
    }
}
