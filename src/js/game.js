import EventListeners from './eventsListeners';
import Board from './board';
import Popups from './popups';
import Player from './player';
export default class Game {
  constructor() {
    this.popups = new Popups(document.querySelector('.popups'));
    this.popupStart = new Popups(document.querySelector('.popupStart'));
    this.popupEnd = new Popups(document.querySelector('.popupEnd'));
    this.popupGameOver = new Popups(document.querySelector('.popupGameOver'));
    this.board = new Board(document.querySelector('.board'));
    this.player = new Player();
    this.oldCell = 0;
    this.oldScore = 0;
    this.theGameBegins;
  }

  enter(callback = f) {
    this.popups.show();
    this.popupStart.show();
    EventListeners.popups(this.popupStart.popup, (playerName) => {
      if (playerName) {
        this.popupStart.close();
        this.popups.close();
        this.player.name = playerName;
        callback();
      }
    });
  }

  init() {
    this.board.initTitle(this.player.name);
    this.board.init([4, 4]);
    this.player.refreshData();
    EventListeners.cellMouseUp(this.board.board);
    EventListeners.cellMouseDown(this.board.board);
  }

  play() {
    // прячем гоблина
    this.board.hideGoblin(this.oldCell);
    // проверяем успел ли убить игрок гоблина, если нет, то плюсуем к пропущенным гоблинам, обновляем данные игрока
    if (this.player.score === this.oldScore) {
      this.player.loss += 1;
      this.player.refreshData();
    }
    // проверяем проиграл ли игрок
    if (this.player.loss === 5) {
      return this.gameOver();
    }
    // выбираем рандомную ячейку для отображения гоблина
    const cell = this.board.randomCell();
    // проверяем чтобы рандомная ячейка не совпадала с предыдущей
    while (this.oldCell === cell) {
      const cell = this.board.randomCell();
    }
    // отображаем гоблина
    this.board.showGoblin(cell);
    // присваиваем старому значению ячейки текущее значение (требуется для проверки повторения)
    this.oldCell = cell;
  }

  gameOver() {
    this.player.loss = 0;
    this.player.score = 0;
    clearInterval(this.theGameBegins);
    this.player.refreshData();
    this.popups.show();
    this.popupGameOver.show();
    EventListeners.popups(this.popupGameOver.popup, () => {
      this.popupGameOver.close();
      this.popups.close();
      this.theGameBegins = setInterval(() => {
        this.play();
        // создаем событие по клику на доске. Если нажал на ячейку с гоблином, то прячем гоблина, плюсуем очко и обновляем данные
        EventListeners.click(this.board.board, (target) => {
          if (target.classList.contains('active')) {
            this.board.hideGoblin(cell);
            this.player.score += 1;
            this.player.refreshData();
          }
        });
      }, 1000);
    });
  }
}
