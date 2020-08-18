export default class Player {
  constructor() {
    this.name = '';
    this.score = 0;
    this.loss = 0;
  }

  refreshData() {
    const pageScore = document.querySelector('.score');
    const pageLoss = document.querySelector('.loss');
    pageLoss.textContent = this.loss;
    pageScore.textContent = this.score;
  }
}
