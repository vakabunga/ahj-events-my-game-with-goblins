export default class Popups {
  constructor(popup) {
    this.popup = popup;
  }

  show() {
    if (this.popup.querySelector('.input')) {
      this.popup.querySelector('.input').value = '';
    }
    this.popup.classList.remove('invis');
  }

  close() {
    this.popup.classList.add('invis');
  }
}
