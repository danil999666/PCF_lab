function sortByAge() {
    let ivan = { name: "Іван", age: 25 };
    let petro = { name: "Петро", age: 30 };
    let mariya = { name: "Марія", age: 28 };

    let arr = [petro, ivan, mariya];

    arr.sort((a, b) => a.age - b.age);

    alert(arr.map(user => user.name).join(', '));
}

document.getElementById('sortButton').addEventListener('click', sortByAge);
