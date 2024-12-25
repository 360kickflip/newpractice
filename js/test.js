const questions = [
    {
        question: "Кем является Цири Геральту?",
        answers: ["Приемной дочкой", "Женой", "Никем"],
        correct: 0
    },
    {
        question: "Что есть в Ведьмаке?",
        answers: ["Бомбы", "Лисы", "Зомби"],
        correct: 0
    },
    {
        question: "Сколько всего известно ведьмачьих магических знаков?",
        type: "input",
        correct: "7"
    },
    {
        question: "Кто такой Эмгыр вар Эмрейс?",
        type: "input",
        correct: "Император Нильфгаарда"
    },
    {
        question: "Откуда родом Геральт?",
        answers: ["Из Ривии", "Неизвестно" ],
        correct: 0
    },
    {
        question: "Как звали нерожденную дочь Анны и Кровавого барона?",
        type: "input",
        correct: "Дея"
    }
];

const testForm = document.getElementById('testForm');
const checkAnswersButton = document.getElementById('checkAnswers');
const restartTestButton = document.getElementById('restartTest');

function generateQuestions() {
    testForm.innerHTML = '';
    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.innerHTML = `<p>${index + 1}. ${q.question}</p>`;
        if (q.type === 'input') {
            questionDiv.innerHTML += `<input type="text" id="answer${index}">`;
        } else {
            q.answers.forEach((answer, i) => {
                questionDiv.innerHTML += `<label><input type="radio" name="q${index}" value="${i}"> ${answer}</label>`;
            });
        }
        testForm.appendChild(questionDiv);
    });
}

generateQuestions();

checkAnswersButton.addEventListener('click', () => {
    let score = 0;
    questions.forEach((q, index) => {
        let userAnswer;
        if (q.type === 'input') {
            userAnswer = document.getElementById(`answer${index}`).value.trim();
        } else {
            const selected = document.querySelector(`input[name="q${index}"]:checked`);
            userAnswer = selected ? selected.value : null;
        }

        const resultDiv = document.createElement('div');
        resultDiv.classList.add('result');

        if (userAnswer === q.correct.toString() || userAnswer === q.correct) {
            resultDiv.textContent = "Правильно!";
            resultDiv.style.color = "green";
            score++;
        } else {
            resultDiv.textContent = `Неправильно. Правильный ответ: ${q.type === 'input' ? q.correct : q.answers[q.correct]}`;
            resultDiv.style.color = "red";
        }

        testForm.children[index].appendChild(resultDiv);
    });

    document.getElementById('result').textContent = `Ваш результат: ${score} из ${questions.length}`;

    localStorage.setItem('testScore', score);

    checkAnswersButton.disabled = true;
    checkAnswersButton.style.backgroundColor = "#777";
    checkAnswersButton.style.cursor = "not-allowed";

    restartTestButton.style.display = 'block';
});

restartTestButton.addEventListener('click', () => {
    generateQuestions();
    document.getElementById('result').textContent = '';
    restartTestButton.style.display = 'none';

    checkAnswersButton.disabled = false;
    checkAnswersButton.style.backgroundColor = "#333";
    checkAnswersButton.style.cursor = "pointer";
});