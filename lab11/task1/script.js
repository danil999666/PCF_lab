let animal = {
    jumps: null
  };
  let rabbit = {
    __proto__: animal,
    jumps: true
};
  
alert( rabbit.jumps ); // true (1)

/*
У цьому випадку, коли ми запитуємо rabbit.jumps, 
JavaScript спочатку шукає властивість jumps в об'єкті rabbit. 
Він знаходить jumps: true, тому повертає true.
*/

delete rabbit.jumps;

alert( rabbit.jumps ); // null (2)

/*
    Ми видаляємо властивість jumps з об'єкта rabbit. 
    Оскільки тепер rabbit не має власної властивості jumps, 
    вона успадкована від animal. Але оскільки ми видалили властивість 
    jumps з rabbit, вона тепер відображається як undefined.
*/

delete animal.jumps;

alert( rabbit.jumps ); // undefined (3)

/*
    Ми видаляємо властивість jumps з об'єкта animal. 
    Тепер, коли JavaScript намагається знайти jumps в rabbit,
    він не може знайти його ні в rabbit, ні в animal, тому повертає undefined
*/