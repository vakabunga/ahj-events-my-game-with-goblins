// Задаем размер доски [row, column]
const boardSize = [4, 4];
const body = document.querySelector('body');
body.setAttribute('style', `width: ${boardSize[1] * 120 + boardSize[1] * 6}px`);

body.insertAdjacentHTML(
  'beforebegin',
  `<h1>The Game of the Year</h1>
  <div class="player" style="width: ${boardSize[1] * 120 + boardSize[1] * 6}px">
  <div class="playerName">Player Name: <span class="playerName">Player1</span></div>
  <div class="playerScore">Score: <span class="score">0</span></div>
  </div>`
);

const score = document.querySelector('.score');

// функция для отрисовки доски, входной параметр - массив из двух данных
export default function boardInit(size) {
  const board = document.querySelector('.board');
  let counterId = 1;
  for (let row = 0; row < size[0]; row += 1) {
    for (let col = 0; col < size[1]; col += 1) {
      board.insertAdjacentHTML('beforeend', `<div class="cell" id=${counterId}></div>`);
      counterId += 1;
    }
  }
}

boardInit(boardSize);

let playerScore = 0;
const cell = document.querySelectorAll('.cell');
const board = document.querySelector('.board');
let oldGoblin = 0;

setInterval(() => {
  const activeCell = document.querySelector('.active');
  if (activeCell) {
    activeCell.classList.remove('active');
  }
  let goblin = Math.round(Math.random() * (boardSize[0] * boardSize[1] - 1));
  while (goblin === oldGoblin) {
    goblin = Math.round(Math.random() * (boardSize[0] * boardSize[1] - 1));
  }
  oldGoblin = goblin;
  cell[goblin].classList.add('active');
}, 1000);

board.addEventListener('mousedown', (event) => {
  if (event.target.classList.contains('cell')) {
    event.target.classList.add('clicked');
  }
});

board.addEventListener('mouseup', (event) => {
  if (event.target.classList.contains('clicked')) {
    event.target.classList.remove('clicked');
  }
});

board.addEventListener('click', (event) => {
  if (event.target.classList.contains('active')) {
    playerScore += 1;
    score.textContent = playerScore;
    event.target.classList.remove('active');
  } else {
    playerScore = 0;
    score.textContent = playerScore;
    alert('Game Over');
  }
});
