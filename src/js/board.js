export default class Board {
  constructor(board) {
    this.board = board;
  }

  init(size) {
    // отрисовка доски, входной параметр - массив из двух данных
    const board = document.querySelector('.board');
    let counterId = 1;
    for (let row = 0; row < size[0]; row += 1) {
      for (let col = 0; col < size[1]; col += 1) {
        board.insertAdjacentHTML('beforeend', `<div class="cell" id=${counterId}></div>`);
        counterId += 1;
      }
    }
  }

  initTitle(name) {
    document.querySelector('.boardBody').insertAdjacentHTML(
      'beforebegin',
      `<div class="boardTitle">
        <h1>The Game of the Year</h1>
        <div class="player">
          <div class="playerName">${name}</div>
          <div class="playerScore">Счёт: <span class="score"></span></div>
          <div class="playerLoss">Пропущенные гоблины: <span class="loss"></span></div>
        </div>
      </div>`
    );
  }

  randomCell() {
    const cell = document.querySelectorAll('.cell');
    const id = Math.round(Math.random() * (16 - 1));
    return cell[id];
  }

  showGoblin(cell) {
    cell.classList.add('active');
  }

  hideGoblin(cell) {
    if (cell) {
      cell.classList.remove('active');
    }
  }
}
