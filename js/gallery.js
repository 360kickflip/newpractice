const images = [
    { src: 'slider1.jpg', caption: 'Ведьмак против монстров' },
    { src: 'slider2.jpg', caption: 'Цирилла и Геральт' },
    { src: 'slider3.jpg', caption: 'Геральт' },
    { src: 'slider4.jpg', caption: 'Геральт 2.0' },
    { src: 'slider5.jpg', caption: 'Мем' }
];
let currentIndex = 0;

const sliderImage = document.getElementById('sliderImage');
const slideInfo = document.getElementById('slideInfo');
const slideCaption = document.getElementById('slideCaption'); // Подпись к картинке

// Функция для обновления изображения и подписи
function updateImage() {
    sliderImage.src = `images/${images[currentIndex].src}`;
    slideInfo.textContent = `${currentIndex + 1} слайд из ${images.length}`;
    slideCaption.textContent = images[currentIndex].caption; // Обновляем подпись
    sliderImage.classList.remove('fade-in', 'fade-out'); // Убираем классы анимации
    void sliderImage.offsetWidth; // Сбрасываем анимацию
    sliderImage.classList.add('fade-in'); // Добавляем класс для появления
}

// Функция для переключения на предыдущий слайд
document.getElementById('prev').addEventListener('click', () => {
    if (currentIndex > 0) {
        sliderImage.classList.remove('fade-in');
        sliderImage.classList.add('fade-out');
        setTimeout(() => {
            currentIndex--;
            updateImage();
        }, 300); // Задержка для анимации
    }
});

// Функция для переключения на следующий слайд
document.getElementById('next').addEventListener('click', () => {
    if (currentIndex < images.length - 1) {
        sliderImage.classList.remove('fade-in');
        sliderImage.classList.add('fade-out');
        setTimeout(() => {
            currentIndex++;
            updateImage();
        }, 300); // Задержка для анимации
    }
});

// Инициализация слайдера
updateImage();