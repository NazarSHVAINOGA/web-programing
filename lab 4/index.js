document.addEventListener("DOMContentLoaded", () => {
  const startScreen = document.getElementById("start-screen");
  const gameScreen = document.getElementById("game-screen");
  const endScreen = document.getElementById("end-screen");

  const difficultySelect = document.getElementById("difficulty");
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");

  const timerElement = document.getElementById("timer");
  const scoreElement = document.getElementById("score");
  const finalScoreElement = document.getElementById("final-score");

  const target = document.getElementById("target");

  let timer = 10;
  let score = 0;
  let gameInterval;
  let targetMoveInterval;

  const difficulties = {
    easy: 1500, // Час між рухами цятки (мс)
    medium: 1000,
    hard: 500
  };

  // Початок гри
  startButton.addEventListener("click", () => {
    const difficulty = difficultySelect.value;
    const moveSpeed = difficulties[difficulty];

    timer = 10;
    score = 0;

    startScreen.style.display = "none";
    gameScreen.style.display = "block";

    timerElement.textContent = `Час: ${timer}`;
    scoreElement.textContent = `Очки: ${score}`;
    target.style.display = "block";

    // Оновлення таймера
    gameInterval = setInterval(() => {
      timer--;
      timerElement.textContent = `Час: ${timer}`;
      if (timer <= 0) endGame();
    }, 1000);

    // Рух цятки
    moveTarget();
    targetMoveInterval = setInterval(moveTarget, moveSpeed);
  });

  // Клік по цятці
  target.addEventListener("click", () => {
    score++;
    scoreElement.textContent = `Очки: ${score}`;
  });

  // Перезапуск гри
  restartButton.addEventListener("click", () => {
    endScreen.style.display = "none";
    startScreen.style.display = "block";
  });

  // Рух цятки
  function moveTarget() {
    const gameArea = gameScreen.getBoundingClientRect();
    const targetSize = 50;

    const maxX = gameArea.width - targetSize;
    const maxY = gameArea.height - targetSize;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    target.style.left = `${randomX}px`;
    target.style.top = `${randomY}px`;
  }

  // Кінець гри
  function endGame() {
    clearInterval(gameInterval);
    clearInterval(targetMoveInterval);

    target.style.display = "none";
    gameScreen.style.display = "none";
    endScreen.style.display = "block";

    finalScoreElement.textContent = `Ваш рахунок: ${score}`;
  }
});
