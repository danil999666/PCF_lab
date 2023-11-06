let session = [];

function displayDisciplines() {
  let passedDisciplines = [];
  let failedDisciplines = [];

  for (let i = 0; i < session.length; i++) {
    if (session[i].passed) {
      passedDisciplines.push(session[i].discipline);
    } else {
      failedDisciplines.push(session[i].discipline);
    }
  }

  alert("Зараховані дисципліни:\n" + passedDisciplines.join(", ") + "\n\nНезараховані дисципліни:\n" + failedDisciplines.join(", "));
}

function addDiscipline(discipline, points) {
  let existingDiscipline = session.find(item => item.discipline === discipline);

  if (existingDiscipline) {
    existingDiscipline.points += points;
    if (existingDiscipline.points >= 60) {
      existingDiscipline.passed = true;
    }
  } else {
    let newDiscipline = { discipline: discipline, points: points, passed: points >= 60 };
    session.push(newDiscipline);
  }
}

function averagePoints() {
  let totalPoints = 0;

  for (let i = 0; i < session.length; i++) {
    totalPoints += session[i].points;
  }

  return totalPoints / session.length;
}

function countFailedDisciplines() {
  let count = 0;

  for (let i = 0; i < session.length; i++) {
    if (!session[i].passed) {
      count++;
    }
  }

  return count;
}

function highestPointsDiscipline() {
  let maxPoints = 0;
  let disciplineName = "";

  for (let i = 0; i < session.length; i++) {
    if (session[i].points > maxPoints) {
      maxPoints = session[i].points;
      disciplineName = session[i].discipline;
    }
  }

  return disciplineName;
}

function displayPassedDisciplines(points) {
  let passedDisciplines = [];

  for (let i = 0; i < session.length; i++) {
    if (session[i].points >= points) {
      passedDisciplines.push(session[i].discipline);
    }
  }

  alert("Дисципліни, що здані на " + points + " балів і більше:\n" + passedDisciplines.join(", "));
}

// Приклад використання
function startSession() {
  while (true) {
    let discipline = prompt("Введіть назву дисципліни:");
    if (!discipline) {
      break;
    }
    let points = +prompt("Введіть кількість балів:");
    addDiscipline(discipline, points);
  }

  displayDisciplines();
  alert("Середній бал: " + averagePoints());
  alert("Кількість незарахованих дисциплін: " + countFailedDisciplines());
  alert("Дисципліна з найвищим балом: " + highestPointsDiscipline());

  let pointsThreshold = +prompt("Введіть кількість балів для виведення дисциплін:");
  displayPassedDisciplines(pointsThreshold);
}

startSession();

  