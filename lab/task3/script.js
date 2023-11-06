function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function getNextDate(day, month, year) {
    const daysInMonth = [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (day < daysInMonth[month - 1]) {
        return [day + 1, month, year];
    } else {
        if (month < 12) {
            return [1, month + 1, year];
        } else {
            return [1, 1, year + 1];
        }
    }
}

function getPreviousDate(day, month, year) {
    const daysInMonth = [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (day > 1) {
        return [day - 1, month, year];
    } else {
        if (month > 1) {
            return [daysInMonth[month - 2], month - 1, year];
        } else {
            return [31, 12, year - 1];
        }
    }
}

function processDate() {
    let day = parseInt(prompt("Введіть день:"));
    let month = parseInt(prompt("Введіть місяць:"));
    let year = parseInt(prompt("Введіть рік:"));

    if (day >= 1 && day <= 31 && month >= 1 && month <= 12 && year >= 1) {
        let nextDate = getNextDate(day, month, year);
        let previousDate = getPreviousDate(day, month, year);

        alert(`Наступна дата: ${nextDate.join('.')}`);
        alert(`Попередня дата: ${previousDate.join('.')}`);
    } else {
        alert("Невірно введені дані.");
    }
}
