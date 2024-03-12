// Fetching all html elements into js
let timer_minute = document.querySelector(".timer-minute");
let timer_second = document.querySelector(".timer-second");
let start_button = document.querySelector(".buttons>button:nth-child(1)");
let reset_button = document.querySelector(".buttons>button:nth-child(2)");

// Click event for start and stop buttons
start_button.addEventListener("click", handleTimerStart);
reset_button.addEventListener("click", handleTimerReset);

// Interval id
let intervalId = null;
let seconds = 0;
let minutes = 0;

// function to handle timer start button
function handleTimerStart() {
  intervalId = setInterval(function () {
    seconds++;

    if (seconds === 59) {
      minutes++;
      seconds = 0;
    }
    console.log(seconds);

    timer_second.textContent = seconds;
    timer_minute.textContent = minutes;
  }, 200);
}
