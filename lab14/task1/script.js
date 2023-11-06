function camelizeString() {
    let inputString = document.getElementById('inputString').value;
    let result = camelize(inputString);
    document.getElementById('result').innerText = result;
}

function camelize(str) {
    return str
    .split('-')
    .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
    .join('');
}