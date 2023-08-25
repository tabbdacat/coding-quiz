var timeRemaining = document.querySelector(".timer");

// Selects element by id
var time = document.getElementById("time");

var secondsLeft = 10;

function setTime() {
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
}

 function sendMessage() {
    timeRemaining.textContent = "Time is up!"
 }

 setTime();