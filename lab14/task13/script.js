function groupById(arr) {
    return arr.reduce((acc, user) => {
        acc[user.id] = user;
        return acc;
    }, {});
}

let users = [
  {id: 'іван', name: "Іван Іванко", age: 20},
  {id: 'ганна', name: "Ганна Іванко", age: 24},
  {id: 'петро', name: "Петро Петренко", age: 31},
];

let usersById = groupById(users);

alert(JSON.stringify(usersById, null, 2));
