const questions = [
    {question: '2 x 2 = ?', options: [2, 4, 8], correctAnswer: 2},
    {question: '3 x 3 = ?', options: [6, 9, 12], correctAnswer: 9},
    {question: '4 x 4 = ?', options: [8, 12, 16], correctAnswer: 16},
];
let currentQuestionIndex = 0;
let score = 0;

function nextQuestion() {
    const questionElement = document.getElementById('question');
    const option1Element = document.getElementById('option1');
    const option2Element = document.getElementById('option2');
    const option3Element = document.getElementById('option3');

    questionElement.textContent = questions[currentQuestionIndex].question;
    option1Element.textContent = 'Відповідь ' + questions[currentQuestionIndex].options[0];
    option2Element.textContent = 'Відповідь ' + questions[currentQuestionIndex].options[1];
    option3Element.textContent = 'Відповідь ' + questions[currentQuestionIndex].options[2];

    currentQuestionIndex++;
    document.getElementById('result').textContent = '';
    if (currentQuestionIndex >= questions.length) {
        document.querySelector('button').disabled = true;
    }
}

function checkAnswer() {
    const radios = document.querySelectorAll('input[type="radio"]');
    let selectedAnswer = null;

    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            selectedAnswer = parseInt(radios[i].value);
            break;
        }
    }

    if (selectedAnswer === questions[currentQuestionIndex - 1].correctAnswer) {
        score++;
    }

    document.getElementById('score').textContent = 'Рахунок: ' + score;
    radios.forEach(radio => radio.checked = false);
    document.getElementById('result').textContent = selectedAnswer === questions[currentQuestionIndex - 1].correctAnswer ? 'Правильно!' : 'Неправильно. Правильна відповідь: ' + questions[currentQuestionIndex - 1].correctAnswer;
}