document.addEventListener('DOMContentLoaded', function () {
  const authForm = document.getElementById('authForm');
  const errorElement = document.getElementById('error');

  authForm.addEventListener('submit', function (e) {
      e.preventDefault();

      errorElement.textContent = '';

      const login = document.getElementById('login').value;
      const birthdate = document.getElementById('birthdate').value;
      const gender = document.getElementById('gender').value;

      let hasErrors = false;

      if (!login) {
          showError('Пожалуйста, введите логин.');
          hasErrors = true;
      } else if (!/^[А-Яа-я0-9]{4,10}$/.test(login)) {
          showError('Логин должен содержать от 4 до 10 символов (русские буквы и цифры).');
          hasErrors = true;
      }

      if (!birthdate) {
          showError('Пожалуйста, введите дату рождения.');
          hasErrors = true;
      }

      if (!gender) {
          showError('Пожалуйста, выберите пол.');
          hasErrors = true;
      }

      if (!hasErrors) {
          localStorage.setItem('user', JSON.stringify({ login, birthdate, gender }));
          window.location.href = 'description.html';
      }
  });

  function showError(message) {
      errorElement.textContent = message;
      errorElement.style.color = 'red';
  }
});