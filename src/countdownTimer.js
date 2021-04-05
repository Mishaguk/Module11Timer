import timerTemplate from './countdownTimer.hbs';

export default class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;

    this.body = document.querySelector(this.selector);

    this.days = 0;
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;

    this.render();
    this.start();
  }

  calculateDate() {
    const currentDate = Date.now();
    const targetDate = this.targetDate.getTime();
    const time = targetDate - currentDate;

    this.days = Math.floor(time / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((time % (1000 * 60)) / 1000);
  }

  render() {
    const timerMarkup = timerTemplate({
      days: this.days,
      hours: this.hours,
      minutes: this.minutes,
      seconds: this.seconds,
    });

    this.body.innerHTML = '';
    this.body.insertAdjacentHTML('beforeend', timerMarkup);
  }

  start() {
    this.id = setInterval(() => {
      this.calculateDate();

      if (this.seconds < 0) {
        this.stop();
      } else {
        this.render();
      }
    }, 1000);
  }

  stop() {
    clearInterval(this.id);
  }
}
    
