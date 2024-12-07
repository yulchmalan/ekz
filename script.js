document.getElementById('task').addEventListener('click', () => {
    const inputs = document.querySelectorAll('.num');

    let sum = 0;
    let invalidInput = false; 
    
    inputs.forEach(input => {
        const value = input.value.trim();
        const number = parseFloat(value); 
        if (value === '' || isNaN(number)) { 
            invalidInput = true;
        } else {
            sum += number; 
        }
    });

    const resultElement = document.getElementById('result');
    
    if (invalidInput) {
        resultElement.textContent = 'Введіть числа!';
        resultElement.style.color = 'red'; 
    } else {
        resultElement.textContent = `Сума: ${sum}`;
        resultElement.style.color = 'aliceblue'; 
    }
});
