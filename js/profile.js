const user = JSON.parse(localStorage.getItem('user'));
if (!user) {
    window.location.href = 'index.html';
}

document.getElementById('userLogin').textContent = user.login;
document.getElementById('login').textContent = user.login;
document.getElementById('birthdate').textContent = user.birthdate;
document.getElementById('gender').textContent = user.gender === 'male' ? 'Мужской' : 'Женский';

const testScore = localStorage.getItem('testScore');
if (testScore) {
    document.getElementById('testScore').textContent = testScore;
}

document.getElementById('logout').addEventListener('click', () => {
    localStorage.removeItem('user');
    localStorage.removeItem('testScore');
    window.location.href = 'index.html';
});

document.getElementById('resetTest').addEventListener('click', () => {
    localStorage.removeItem('testScore');
    document.getElementById('testScore').textContent = 'Нет данных';
    alert('Результаты теста сброшены!');
});

document.getElementById('logoutProfile').addEventListener('click', () => {
    localStorage.removeItem('user');
    localStorage.removeItem('testScore');
    window.location.href = 'index.html';
});