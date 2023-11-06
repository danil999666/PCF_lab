function replaceDateFormats() {
    let text = prompt("Введіть текст з датами у форматі рррр/мм/дд:");

    let formattedText = text.replace(/\b(\d{4})\/(\d{2})\/(\d{2})\b/g, '$3.$2.$1');

    alert(formattedText);
}

