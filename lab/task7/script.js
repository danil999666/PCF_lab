function powerOfK(S, K) {
    return Math.pow(S, K);
}

let S = parseInt(prompt("Введіть число S:"));
let K = parseInt(prompt("Введіть ступінь K:"));

let result = powerOfK(S, K);
alert(`Результат: ${result}`);

