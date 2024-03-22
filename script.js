let clickCount = 0;
const clickImage = document.getElementById('clickImage');
const clickCountDisplay = document.getElementById('count');
const clickSound = document.getElementById('clickSound');
const soundButton = document.getElementById('soundButton');

let soundEnabled = false;

clickImage.onclick = function() {
    clickCount++;
    clickCountDisplay.textContent = clickCount;

    // Генерация случайного цвета для фона страницы
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;

    // Воспроизведение звука, если звук включен
    if (soundEnabled) {
        clickSound.currentTime = 0;
        clickSound.play();
    }

    // Сброс анимации и добавление класса для запуска анимации вращения
    clickImage.style.animation = 'none';
    void clickImage.offsetWidth; // Принудительный рефлоу
    clickImage.style.animation = 'spin 1s linear';
};

soundButton.onclick = function() {
    soundEnabled = !soundEnabled;
    if (soundEnabled) {
        soundButton.textContent = 'Выключить звук';
    } else {
        soundButton.textContent = 'Включить звук';
    }
};