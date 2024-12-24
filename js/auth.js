document.getElementById('authForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const login = document.getElementById('login').value;
    const birthdate = document.getElementById('birthdate').value;
    const gender = document.getElementById('gender').value;

    if (login && birthdate && gender) {
        localStorage.setItem('user', JSON.stringify({ login, birthdate, gender }));
        window.location.href = 'description.html';
    } else {
        document.getElementById('error').textContent = 'Пожалуйста, заполните все поля.';
    }
});

document.addEventListener('DOMContentLoaded', function () {
  console.log('DOM полностью загружен.');

  document.getElementById('authForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Предотвращаем отправку формы по умолчанию

    // Получаем значения полей
    const login = document.getElementById('login').value;
    const birthdate = document.getElementById('birthdate').value;
    const gender = document.getElementById('gender').value;

    // Очищаем сообщения об ошибках
    clearErrorMessages();

    // Проверяем каждое поле
    let hasErrors = false;

    if (!login) {
      showError('loginError', 'Пожалуйста, введите логин.');
      hasErrors = true;
    }

    if (!birthdate) {
      showError('birthdateError', 'Пожалуйста, введите дату рождения.');
      hasErrors = true;
    }

    if (!gender) {
      showError('genderError', 'Пожалуйста, выберите пол.');
      hasErrors = true;
    }

    // Если есть ошибки, останавливаем выполнение
    if (hasErrors) {
      return;
    }

    // Если все поля заполнены, сохраняем данные в localStorage
    localStorage.setItem('userLogin', login);
    localStorage.setItem('userBirthdate', birthdate);
    localStorage.setItem('userGender', gender);

    // Перенаправляем пользователя на другую страницу (например, на главную)
    window.location.href = 'description.html';
  });
});
