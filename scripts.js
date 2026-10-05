let currentAnswer = 0;
let score = 0;

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function generateRandom() {
    const num1 = getRndInteger(1, 10);
    const num2 = getRndInteger(1, 10);
    const operation = Math.random() < 0.5 ? '+' : '-'

    currentAnswer = operation === '+' ? num1 + num2 : num1 - num2;

    const container = document.getElementById("question");
    if(container) {
        container.textContent = `${num1} ${operation} ${num2}`;
    }
}

function checkAnswer() {
    const inputElement = document.getElementById("answer");
    const messageElement = document.getElementById("message");
    const scoreElement = document.getElementById("score");
    const userAnswer = parseInt(inputElement.value, 10);

    if(isNaN(userAnswer)) {
        messageElement.textContent = "Please enter a valid number!";
        return;
    }

    if(userAnswer === currentAnswer) {
        score++;
        scoreElement.textContent = score;
        messageElement.textContent = "Correct!"
        messageElement.style.color = "green";
        if (score >= 5) {
            document.getElementById("div-questions").style.display = "none";
            document.getElementById("div-success").style.display = "block";
        }
    } else {
        messageElement.textContent = `Wrong, Correct Answer was ${currentAnswer}`;
        messageElement.style.color = "red";
    }
    generateRandom();
    inputElement.value = "";
}


function playAgain() {
    score = 0;
    document.getElementById("score").textContent = score;
    document.getElementById("message").textContent = "";
    document.getElementById("answer").value = "";
    
    document.getElementById("div-questions").style.display = "block";
    document.getElementById("div-success").style.display = "none";
    
    generateRandom();
}

document.addEventListener("DOMContentLoaded", () => {
    generateRandom();
}); 