const btn = document.querySelector('.btn')
const text = document.querySelector('.text');
btn.addEventListener('click', function () {
    const userInput = prompt('введите значение');
    if (userInput !== null && userInput.trim() !== "") {
        text.textContent = userInput
    }
})

//-----------------------------------
document.addEventListener("DOMContentLoaded", function() {
    const userInput = prompt('Введите цвет светофора (Красный, Желтый или Зеленый)').toLowerCase();
    const trafficLight = document.querySelector('.traffic-light');
    const lights = trafficLight.querySelectorAll('.light');
    let message = '';

    switch (userInput) {
        case 'красный':
            lights[0].classList.add('active');
            lights[1].classList.remove('active');
            lights[2].classList.remove('active');
            message = 'СТОП!';
            break;
        case 'желтый':
            lights[0].classList.remove('active');
            lights[1].classList.add('active');
            lights[2].classList.remove('active');
            message = 'Приготовьтесь!';
            break;
        case 'зеленый':
            lights[0].classList.remove('active');
            lights[1].classList.remove('active');
            lights[2].classList.add('active');
            message = 'Вперед!';
            break;
        default:
            message = 'Неверный ввод! Введите Красный, Желтый или Зеленый.';
    }

    showMessage(message);
});

function showMessage(message) {
    const output = document.createElement('p');
    output.textContent = message;
    document.body.appendChild(output);
}