function Calculator() {
    this.methods = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b
    };

    this.calculate = function(expression) {
        let split = expression.split(' '),
            a = +split[0],
            op = split[1],
            b = +split[2];

        if (isNaN(a) || isNaN(b)) {
            return "Невірний вираз!";
        }

        let result = this.methods[op](a, b);

        if (isNaN(result)) {
            return "Невірний вираз!";
        }

        return result;
    };

    this.addMethod = function(name, func) {
        this.methods[name] = func;
    };
}

let calc = new Calculator;

function performCalculation() {
    let expression = prompt("Введіть вираз (наприклад, 3 + 7):");
    alert(calc.calculate(expression));
}

function addCustomOperator() {
    let name = prompt("Введіть назву нового оператора:");
    let func = new Function('a, b', 'return ' + prompt("Введіть функцію (наприклад, 'a * b'):"));
    calc.addMethod(name, func);
}
