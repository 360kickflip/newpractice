document.addEventListener('DOMContentLoaded', function () {
    const authForm = document.getElementById('authForm');

    authForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Предотвращаем отправку формы

        // Очищаем все сообщения об ошибках
        clearErrorMessages();

        // Получаем значения полей
        const login = document.getElementById('login').value;
        const birthdate = document.getElementById('birthdate').value;
        const gender = document.getElementById('gender').value;

        // Проверяем каждое поле
        let hasErrors = false;

        // Проверка логина
        if (!login) {
            showError('loginError', 'Пожалуйста, введите логин.');
            hasErrors = true;
        } else if (!/^[А-Яа-я0-9]{4,10}$/.test(login)) {
            showError('loginError', 'Логин должен содержать от 4 до 10 символов (русские буквы и цифры).');
            hasErrors = true;
        }

        // Проверка даты рождения
        if (!birthdate) {
            showError('birthdateError', 'Пожалуйста, введите дату рождения.');
            hasErrors = true;
        }

        // Проверка пола
        if (!gender) {
            showError('genderError', 'Пожалуйста, выберите пол.');
            hasErrors = true;
        }

        // Если ошибок нет, сохраняем данные и перенаправляем пользователя
        if (!hasErrors) {
            localStorage.setItem('user', JSON.stringify({ login, birthdate, gender }));
            window.location.href = 'description.html';
        }
    });

    // Функция для вывода сообщений об ошибках
    function showError(elementId, message) {
        const errorElement = document.getElementById(elementId);
        errorElement.textContent = message;
    }

    // Функция для очистки всех сообщений об ошибках
    function clearErrorMessages() {
        const errorElements = document.querySelectorAll('.error');
        errorElements.forEach(element => {
            element.textContent = '';
        });
    }
});