let timeRemaining = document.querySelector(".timer");
const startBtn = document.querySelector("#start");
const startScreenEl = document.querySelector("#start-screen");
const questionsEl = document.querySelector("#test");
const endScreenEl = document.querySelector("#end-screen");
// Selects element by id
let time = document.getElementById("time");

let scoreListText = document.createElement("li");
const highScoreForm = document.querySelector("#high-score-form");
const initialInputEl = document.querySelector("#initial-input");
const submitScoreBtn = document.querySelector("#submit-score-btn");


// submitScoreBtn.addEventListener ("click", function (event) {
//   event.preventDefault();
//   const highScoreList = document.querySelector(".high-score-list").textContent(initialInputEl.value)
// highScoreForm.appendChild(highScoreList)
// })


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


// where does this go??
// endScreenElEl.classList.remove("hide");
// questionsEl.classList.add("hide");


// let questions = [  
//     {
//     question: "why is the sky blue?",
//     answer1: ["cuz sad","cuz space","cuz i said so"]
//     answer2: ["cuz i'm right"]
//     }
//     {
//     question: "why not?",
//     answer1: ["dunno", "shrug","ahhh"]
//     answer2: ["cuz i'm right"]
//         }
// ]
// var a = document.querySelector("#a")
// var b = document.querySelector("#b")
// var c = document.querySelector("#c")
// var d = document.querySelector("#d")

