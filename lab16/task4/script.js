let currentScore = 0;
        let currentTask = generateTask();

        function generateTask() {
            const a = Math.floor(Math.random() * 9) + 1;
            const b = Math.floor(Math.random() * 9) + 1;
            const taskElement = document.getElementById('task');
            taskElement.textContent = `${a} x ${b} = ?`;
            return a * b;
        }

        function nextTask() {
            currentTask = generateTask();
            document.getElementById('answer').value = '';
            document.getElementById('result').textContent = '';
        }

        function checkAnswer() {
            const userAnswer = parseInt(document.getElementById('answer').value, 10);
            if (!isNaN(userAnswer)) {
                if (userAnswer === currentTask) {
                    currentScore++;
                    document.getElementById('score').textContent = `Рахунок: ${currentScore}`;
                    document.getElementById('result').textContent = 'Вірно!';
                } else {
                    document.getElementById('result').textContent = `Невірно! Правильна відповідь: ${currentTask}`;
                }
            }
        }