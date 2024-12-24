// Получаем данные пользователя
const user = JSON.parse(localStorage.getItem('user'));
if (!user) {
    window.location.href = 'index.html';
}

// Отображаем данные пользователя
document.getElementById('userLogin').textContent = user.login;
document.getElementById('login').textContent = user.login;
document.getElementById('birthdate').textContent = user.birthdate;
document.getElementById('gender').textContent = user.gender === 'male' ? 'Мужской' : 'Женский';

// Получаем результат последнего теста
const testScore = localStorage.getItem('testScore');
if (testScore) {
    document.getElementById('testScore').textContent = testScore;
}

// Обработчик кнопки "Выйти"
document.getElementById('logout').addEventListener('click', () => {
    localStorage.removeItem('user');
    localStorage.removeItem('testScore');
    window.location.href = 'index.html';
});

// Обработчик кнопки "Сбросить результаты"
document.getElementById('resetTest').addEventListener('click', () => {
    localStorage.removeItem('testScore');
    document.getElementById('testScore').textContent = 'Нет данных';
    alert('Результаты теста сброшены!');
});