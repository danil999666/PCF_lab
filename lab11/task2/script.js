// 1. Спочатку, використаємо властивість __proto__ для встановлення прототипів:

pockets.__proto__ = bed;
bed.__proto__ = table;
table.__proto__ = head;

// Тепер, за таким шляхом, отримання властивостей буде виглядати так: pockets → bed → table → head.

// 2. Для отримання властивості glasses швидше буде визначити її через head.glasses, оскільки head є
// прямим батьківським об'єктом та не потрібно буде шукати через прототипи. Порівняльний тест підтвердить це:

console.time('pockets.glasses');
console.log(pockets.glasses);
console.timeEnd('pockets.glasses');

console.time('head.glasses');
console.log(head.glasses);
console.timeEnd('head.glasses');

// Результати показують, що head.glasses видає значення швидше.