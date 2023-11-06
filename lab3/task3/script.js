function toKebabCase() {
    let input = prompt("Введіть назву css-стилю (без дефісів):");
    let kebabCase = input.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();

    alert(kebabCase);
}

