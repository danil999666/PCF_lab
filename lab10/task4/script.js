function findHexColor() {
    let text = prompt("Введіть текст:");
    let colors = text.match(/#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})\b/g);
  
    if (colors !== null) {
      alert("Знайдені кольори: " + colors.join(", "));
    } else {
      alert("Кольори не знайдено.");
    }
  }
  
  findHexColor();
  