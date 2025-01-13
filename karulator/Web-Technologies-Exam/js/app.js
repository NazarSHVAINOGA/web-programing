// Функція для обчислень
function calculate(operation) {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        alert("Будь ласка, введіть коректні числа.");
        return;
    }

    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                alert("Ділення на нуль неможливе!");
                return;
            }
            result = num1 / num2;
            break;
    }
    
    document.getElementById("result").textContent = result;
}

// Обчислення натурального логарифма
function calculateLog() {
    const num1 = parseFloat(document.getElementById("num1").value);
    
    if (isNaN(num1)) {
        alert("Будь ласка, введіть коректне число.");
        return;
    }
    
    if (num1 <= 0) {
        alert("Число повинно бути більше 0 для обчислення логарифма.");
        return;
    }

    const result = Math.log(num1);
    document.getElementById("result").textContent = result;
}

// Обчислення синуса
function calculateSin() {
    const num1 = parseFloat(document.getElementById("num1").value);
    
    if (isNaN(num1)) {
        alert("Будь ласка, введіть коректне число.");
        return;
    }

    // Перетворення градусів на радіани
    const result = Math.sin(num1 * Math.PI / 180);
    document.getElementById("result").textContent = result;
}

// Обчислення тангенса
function calculateTan() {
    const num1 = parseFloat(document.getElementById("num1").value);
    
    if (isNaN(num1)) {
        alert("Будь ласка, введіть коректне число.");
        return;
    }

    // Перетворення градусів на радіани
    const result = Math.tan(num1 * Math.PI / 180);
    document.getElementById("result").textContent = result;
}

// Завантаження довідки з серверу
function showHelp() {
    fetch('server.json')
        .then(response => response.json())
        .then(data => {
            document.getElementById("helpContent").style.display = "block";
            document.getElementById("helpContent").innerHTML = `
                <h3>Натуральний логарифм (ln)</h3>
                <p>${data.log}</p>
                <h3>Синус</h3>
                <p>${data.sin}</p>
                <h3>Тангенс</h3>
                <p>${data.tan}</p>
            `;
        })
        .catch(error => {
            console.error("Помилка при завантаженні довідки:", error);
        });
}
