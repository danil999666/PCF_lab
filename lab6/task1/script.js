function displayTextWithFontSize() {
    let text = prompt("Введіть текст:");
    let fontSize = prompt("Введіть розмір шрифту:");
    
    document.write(`<div style="font-size: ${fontSize}px;">${text}</div>`);
  }
  
  displayTextWithFontSize();
  