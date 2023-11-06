function findDates() {
    let text = prompt("Введіть текст:");
    let dates = text.match(/\b\d{4}-\d{2}-\d{2}\b/g);
  
    if (dates !== null) {
      alert("Знайдені дати: " + dates.join(", "));
    } else {
      alert("Дати не знайдено.");
    }
  }
  
  findDates();
  