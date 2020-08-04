// Задаем размер доски [row, column]
const boardSize = [4, 4];
document.querySelector('body').setAttribute('style', `width: ${boardSize[1] * 120 + boardSize[1] * 6}px`);

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

const cell = document.querySelectorAll('.cell');
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
