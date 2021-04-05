import CountdownTimer from './CountdownTimer';

const timer = new CountdownTimer({
  selector: '#my-timer',
  targetDate: new Date(2021, 4, 10, 11, 25),
});

document.querySelector('#start').addEventListener('click', () => {
  timer.start();
});

document.querySelector('#stop').addEventListener('click', () => {
  timer.stop();
});

 