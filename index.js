// Fetching all html elements into js
let timer_minute = document.querySelector(".timer-minute");
let timer_second = document.querySelector(".timer-second");
let start_button = document.querySelector(".buttons>button:nth-child(1)");
let reset_button = document.querySelector(".buttons>button:nth-child(2)");

// Click event for start and stop buttons
start_button.addEventListener("click",handleTimerStart);
reset_button.addEventListener("click",handleTimerReset);
