
function changeBackgroundColor() {
    // Генеруємо випадковий колір для фону
    var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    
    // Змінюємо фоновий колір тіла документа
    document.body.style.backgroundColor = randomColor;
}