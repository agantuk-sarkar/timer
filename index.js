// Fetching all html elements into js
let timer_minute = document.querySelector(".timer-minute");
let timer_second = document.querySelector(".timer-second");
let start_button = document.querySelector(".buttons>button:nth-child(1)");
let reset_button = document.querySelector(".buttons>button:nth-child(2)");

// Click event for start and reset buttons
start_button.addEventListener("click", handleTimerStart);
reset_button.addEventListener("click", handleTimerReset);

// Interval id for handling seconds and minutes in a timer
let intervalId = null;

// initializing seconds and minutes variables to handle timer start and stop
let seconds = 0;
let minutes = 0;

// flag is used to check if the condition is true then change the button value from start to stop
let flag = false;

// temp is used to check if the condition is true then change the button value from stop to start
let temp = false;

// function to handle timer start button
function handleTimerStart() {
  intervalId = setInterval(function () {
    seconds++;

    flag = true;
    temp = true;

    if (flag === true) {
      start_button.textContent = "STOP";
    }

    start_button.removeEventListener("click", handleTimerStart);

    // on single click both the event is triggered at the same moment
    start_button.addEventListener("click", handleTimerStop);
    start_button.addEventListener("click", function () {
      clearInterval(intervalId);
      if (temp === true) {
        start_button.textContent = "START";
      }
      start_button.removeEventListener("click", handleTimerStop);
      start_button.addEventListener("click", handleTimerStart);
    });

    if (seconds === 59) {
      minutes++;
      seconds = 0;
    }
    // console.log(seconds);

    timer_second.textContent = seconds;
    timer_minute.textContent = minutes;
  }, 100);
}

// function to handle timer stop button
function handleTimerStop() {
  clearInterval(intervalId);
}

// function to handle timer reset button
function handleTimerReset() {
  clearInterval(intervalId);
  start_button.removeEventListener("click", handleTimerStop);
  start_button.addEventListener("click", handleTimerStart);
  seconds = 0;
  minutes = 0;
  timer_second.textContent = seconds;
  timer_minute.textContent = minutes;

}
