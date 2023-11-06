function toCamelCase() {
    let input = prompt("Введіть назву css-стилю (з дефісами):");
    let camelCase = input.replace(/-([a-z])/g, function(match, letter) {
        return letter.toUpperCase();
    });

    alert(camelCase);
}
