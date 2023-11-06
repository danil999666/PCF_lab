/*
    Це відбувається через те, що обидва об'єкти speedy і lazy
    використовують один і той же прототип hamster, а отже, 
    вони спільно діляться властивістю stomach.

    Щоб виправити це, ми можемо модифікувати метод eat так, 
    щоб він створював копію масиву stomach для кожного хом'яка. Виправлення:
*/

let hamster = {
    stomach: [],
  
    eat(food) {
      this.stomach = [...this.stomach, food]; 
    }
  };
  
  let speedy = {
    __proto__: hamster
  };
  
  let lazy = {
    __proto__: hamster
  };
  
  speedy.eat("apple");
  alert( speedy.stomach ); 
  
  alert( lazy.stomach ); 

  
// Тепер, кожен хом'як має свій власний масив stomach, і вони не діляться ним один з одним.
  