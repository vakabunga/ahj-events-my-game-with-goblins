/* eslint-disable no-undef */
export default class EventsListener {
  static cellMouseDown(target) {
    target.addEventListener('mousedown', (event) => {
      if (event.target.classList.contains('cell')) {
        event.target.classList.add('clicked');
      }
    });
  }

  static cellMouseUp(target) {
    target.addEventListener('mouseup', (event) => {
      if (event.target.classList.contains('clicked')) {
        event.target.classList.remove('clicked');
      }
    });
  }

  static click(target, callback = f) {
    target.addEventListener('click', (event) => {
      callback(event.target);
    });
  }

  static popups(popup, callback = f) {
    popup.querySelector('.button').addEventListener('click', (event) => {
      if (event.target.classList.contains('start')) {
        if (event.target.previousElementSibling.classList.contains('input')) {
          const playerName = document.querySelector('input').value;
          callback(playerName);
        }
      } else {
        callback();
      }
    });
  }
}
