function describeAge(age) {
    const words = ["рік", "роки", "років"];

    if (age >= 11 && age <= 14) {
        return `${age} років`;
    } else if (age % 10 === 1) {
        return `${age} ${words[0]}`;
    } else if (age % 10 >= 2 && age % 10 <= 4) {
        return `${age} ${words[1]}`;
    } else {
        return `${age} ${words[2]}`;
    }
}

let age = parseInt(prompt("Введіть вік:"));
let description = describeAge(age);
alert(description); 

