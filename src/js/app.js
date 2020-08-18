import Game from './game.js';
import EventListeners from './eventsListeners.js';

const game = new Game();

// начинаем игру с выпадающего окна
game.enter(() => {
  // как только данные введены, инициализируем игру
  game.init();
  // запускаем игру в цикле
  game.theGameBegins = setInterval(() => {
    game.play();
    // создаем событие по клику на доске.
    // Если нажал на ячейку с гоблином, то прячем гоблина, плюсуем очко и обновляем данные
    EventListeners.click(game.board.board, (target) => {
      if (target.classList.contains('active')) {
        game.board.hideGoblin(target);
        game.player.score += 1;
        game.player.refreshData();
      }
    });
  }, 1000);
});
