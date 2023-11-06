function toSnakeCase() {
    let lowerCamelCase = prompt("Введіть значення у стилі 'lowerCamelCase':");
    let snakeCase = lowerCamelCase.replace(/[A-Z]/g, (match) => '_' + match.toLowerCase());
  
    alert("Результат: " + snakeCase);
  }
  
  toSnakeCase();
  