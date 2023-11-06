class Student {
    constructor(lastName, firstName) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.grades = [];
    }

    addGrade(subject, grade) {
        this.grades.push({ subject, grade });
    }

    calculateAverageGrade() {
        let sum = 0;
        this.grades.forEach(grade => {
            sum += grade.grade;
        });
        return this.grades.length ? sum / this.grades.length : 0;
    }
}

class ListOfStudents {
    constructor() {
        this.students = [];
    }

    addStudent(student) {
        this.students.push(student);
    }

    generateTable() {
        let table = document.createElement("table");
        table.innerHTML = `
            <tr>
                <th>Last Name</th>
                <th>First Name</th>
                <th>Subjects</th>
                <th>Grades</th>
                <th>Average Grade</th>
            </tr>
        `;

        this.students.forEach(student => {
            let row = table.insertRow();
            let lastNameCell = row.insertCell(0);
            let firstNameCell = row.insertCell(1);
            let subjectsCell = row.insertCell(2);
            let gradesCell = row.insertCell(3);
            let avgGradeCell = row.insertCell(4);

            lastNameCell.innerHTML = student.lastName;
            firstNameCell.innerHTML = student.firstName;

            let subjects = student.grades.map(grade => grade.subject).join(", ");
            subjectsCell.innerHTML = subjects;

            let grades = student.grades.map(grade => grade.grade).join(", ");
            gradesCell.innerHTML = grades;

            let avgGrade = student.calculateAverageGrade();
            avgGradeCell.innerHTML = avgGrade.toFixed(2);
        });

        return table;
    }

    calculateTotalAvg() {
        let sum = 0;
        this.students.forEach(student => {
            sum += student.calculateAverageGrade();
        });
        return this.students.length ? sum / this.students.length : 0;
    }
}

let listOfStudents = new ListOfStudents();
let outputTable = document.getElementById("outputTable");
let totalAvg = document.getElementById("totalAvg");

function addGrade() {
    let lastName = document.getElementById("lastName").value;
    let firstName = document.getElementById("firstName").value;
    let subject = document.getElementById("subject").value;
    let grade = parseInt(document.getElementById("grade").value);

    let existingStudent = listOfStudents.students.find(student => student.lastName === lastName && student.firstName === firstName);

    if (existingStudent && subject && grade) {
        existingStudent.addGrade(subject, grade);
    }

    updateTable();
}

function addStudent() {
    let lastName = document.getElementById("lastName").value;
    let firstName = document.getElementById("firstName").value;

    let existingStudent = listOfStudents.students.find(student => student.lastName === lastName && student.firstName === firstName);

    if (!existingStudent && lastName && firstName) {
        let newStudent = new Student(lastName, firstName);
        listOfStudents.addStudent(newStudent);
    }

    updateTable();
}

function updateTable() {
    outputTable.innerHTML = "";
    let table = listOfStudents.generateTable();
    outputTable.appendChild(table);

    let totalAvgValue = listOfStudents.calculateTotalAvg();
    totalAvg.innerText = `Total Average Grade: ${totalAvgValue.toFixed(2)}`;
}
