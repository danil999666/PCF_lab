function transformToObjects() {
    let ivan = { name: "Іван", surname: "Іванко", id: 1 };
    let petro = { name: "Петро", surname: "Петренко", id: 2 };
    let mariya = { name: "Марія", surname: "Мрійко", id: 3 };

    let users = [ivan, petro, mariya];

    let usersMapped = users.map(user => ({
        fullName: `${user.name} ${user.surname}`,
        id: user.id
    }));

    let outputHtml = '';

    for (let user of usersMapped) {
        outputHtml += `ID: ${user.id}, Full Name: ${user.fullName}<br>`;
    }

    document.getElementById('output').innerHTML = outputHtml;
}