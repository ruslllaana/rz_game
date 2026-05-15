let answers = [];

function startGame(level) {
    const questionsDiv = document.getElementById("questions");
    const game = document.getElementById("game");
    const levelTitle = document.getElementById("levelTitle");
    const result = document.getElementById("result");

    result.innerHTML = "";
    questionsDiv.innerHTML = "";
    answers = [];

    game.classList.remove("hidden");

    let min = 1;
    let max = 5;

      if (level === 2) {
        min = 5;
        max = 10;
    }

    if (level === 3) {
        min = 10;
        max = 15;
    }

    levelTitle.innerHTML = level + ". Līmenis";

    for (let i = 0; i < 9; i++) {
        const a = random(min, max);
        const b = random(min, max);

        answers.push(a * b);
          const div = document.createElement("div");
        div.className = "question";

        div.innerHTML = `
            ${a} × ${b} =
            <input type="number" id="answer${i}">
            <span id="emoji${i}"></span>
        `;

        questionsDiv.appendChild(div);
    }
}
function checkAnswers() {
    let score = 0;

    for (let i = 0; i < answers.length; i++) {
        const input = document.getElementById(`answer${i}`);
        const emoji = document.getElementById(`emoji${i}`);

        if (Number(input.value) === answers[i]) {
            emoji.innerHTML = "✅";
            emoji.className = "correct";
            score++;
        } else {
            emoji.innerHTML = "❌";
            emoji.className = "wrong";
        }
         }

    document.getElementById("result").innerHTML =
        `Pareizās atbildes: ${score} no ${answers.length}`;
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}