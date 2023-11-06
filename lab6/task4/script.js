function processArguments() {
    let args = prompt("Введіть числа та слова через кому (приклад: Jane,1,3,like,5,9,read,4,book):").split(',');
  
    let maxNumber = -Infinity;
    let sum = 0;
    let sentence = '';
  
    for (let arg of args) {
      let value = parseFloat(arg.trim());
  
      if (!isNaN(value)) {
        maxNumber = Math.max(maxNumber, value);
        sum += value;
      } else {
        sentence += arg + ' ';
      }
    }
  
    alert(`Максимальне число: ${maxNumber}\nСума чисел: ${sum}\nРечення: ${sentence.trim()}`);
  }
  
  processArguments();
  