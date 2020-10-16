const newYears = '1 Jan 2021';
const dayCountDown = document.querySelector('#days'),
  hoursCountdown = document.querySelector('#hours'),
  minsCountdown = document.querySelector('#mins'),
  secondsCountdown = document.querySelector('#seconds');

function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const totalSec = (newYearsDate - currentDate) / 1000;

  const days = Math.floor(totalSec / 3600 / 24);
  const hours = Math.floor(totalSec / 3600) % 24;
  const minutes = Math.floor(totalSec / 60) % 60;
  const seconds = Math.floor(totalSec) % 60;

  dayCountDown.innerText = formatTime(days);
  hoursCountdown.innerText = formatTime(hours);
  minsCountdown.innerText = formatTime(minutes);
  secondsCountdown.innerText = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? (`0${time}`) : time;
}

countdown();

setInterval(countdown, 1000);
