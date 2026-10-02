document.addEventListener("answer", answer_Checker);

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function generateRandom() {
    const num1 = getRndInteger(1, 10);
    const num2 = getRndInteger(1, 10);
    const operation = Math.random() < 0.5 ? '+' : '-'
    return `${num1}${operation}${num2}`
}

function answer_Checker() {
    let Answer = document.getElementById("answer").innerHTML;
}

document.addEventListener("DOMContentLoaded", () => {
    try {
        const problem = generateRandom();
        const container = document.getElementById("question");
        if(!container) {
            console.error("Problem container not found");
            return
        }
        container.textContent = problem;
    } catch (error) {
        console.error("Error generating problem: ", error);
    }
});