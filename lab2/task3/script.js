let text = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt ea earum incidunt minima nihil. Blanditiis consectetur cumque debitis delectus dolor dolorem dolorum, eos laboriosam, modi nemo, quasi quos sint voluptatibus!`;

// 1) Формування нового рядка із заданих символів
let newString = text[12] + text[6] + text[18] + text[25];
console.log(newString);

// 2) Приведення до нижнього регістру
let lowerCaseText = text.toLowerCase();
console.log(lowerCaseText);

// 3) Знаходження позицій, де зустрічається "in"
let positions = [];
for (let i = 0; i < text.length - 1; i++) {
  if (text.substring(i, i + 2) === "in") {
    positions.push(i);
  }
}
console.log(positions);

// 4) Розділення тексту на слова
let wordsArray = text.split(" ");
console.log(wordsArray);

// 5) Інвертування рядка
let invertedText = text.split("").reverse().join("");
console.log(invertedText);

// 6) Функція для першої великої літери
function ucFirst(txt) {
   let newTxt = txt.charAt(0).toUpperCase() + txt.slice(1);
   return newTxt;
}
console.log(ucFirst('some text'));
