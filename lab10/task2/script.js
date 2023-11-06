function toCamelCase() {
    let snakeCase = prompt("Введіть значення у стилі 'snake_case':");
    let camelCase = snakeCase.replace(/_([a-z])/g, (match, letter) => letter.toUpperCase());
  
    alert("Результат: " + camelCase);
  }
  
  toCamelCase();
  