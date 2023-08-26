let timeRemaining = document.querySelector(".timer");
const startBtn = document.querySelector("#start");
const startScreenEl = document.querySelector("#start-screen");
const questionsEl = document.querySelector("#test");
const endScreenEl = document.querySelector("#end-screen")
// Selects element by id
let time = document.getElementById("time");


startBtn.addEventListener ("click", function()  {
    // time for quiz
    let secondsLeft = 10;
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    // subtracting 1 from seconds left
    secondsLeft--;

    timeRemaining.textContent = secondsLeft + " seconds left.";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to send message
      sendMessage();

    }

  }, 1000);

 function sendMessage() {
    timeRemaining.textContent = "Time is up!"
 }

startScreenEl.classList.add("hide");
questionsEl.classList.remove("hide");
})

endScreenElEl.classList.remove("hide");
questionsEl.classList.add("hide");



