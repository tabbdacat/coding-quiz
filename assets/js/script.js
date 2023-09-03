let timeRemaining = document.querySelector(".timer");
const startBtn = document.querySelector("#start");
const startScreenEl = document.querySelector("#start-screen");
const questionsEl = document.querySelector("#test");
const endScreenEl = document.querySelector("#end-screen");
// Selects element by id
let time = document.getElementById("time");
let questions = document.querySelector('#questions');
let optionBtns = document.querySelectorAll('.optionBtn');
let currentQuestionIndex = 0;



startBtn.addEventListener("click", function () {
  // time for quiz
  let secondsLeft = 10;
  // Sets interval in variable
  var timerInterval = setInterval(function () {
    // subtracting 1 from seconds left
    secondsLeft--;

    timeRemaining.textContent = secondsLeft + " seconds left.";

    if (secondsLeft <= 0) {
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
  displayQuestion(currentQuestionIndex);
})


// if all questions completed, or no time remaining, end test
// where does this go??
// endScreenElEl.classList.remove("hide");
// questionsEl.classList.add("hide");



// question list object
let myQuestions = [
  {
    quest: "why is the sky blue?",
    options: ["cuz sad", "cuz space", "cuz i said so", "cuz i'm right"],
    answer: "cuz i'm right",
  },
  {
    quest: "why not?",
    options: ["dunno", "shrug", "ahhh", "cuz i'm right"],
    answer: "cuz i'm right",
  }
]

function displayQuestion(i) {
  let currentQuestionText = myQuestions[i].quest;
  questions.textContent = currentQuestionText;
  optionBtns[0].textContent = myQuestions[i].options[0];
  optionBtns[1].textContent = myQuestions[i].options[1];
  optionBtns[2].textContent = myQuestions[i].options[2];
  optionBtns[3].textContent = myQuestions[i].options[3];
}

btn0 = document.querySelector('#btn0');

optionBtns.forEach(function (i) {

  i.addEventListener("click", function () {
    currentQuestionIndex += 1;
    displayQuestion(currentQuestionIndex);
  })

});


// give each option a button

// function answerClick {
// 
// }

// if (options === answer) {
// display message of correct answer
// }
// else {
// display message of incorrect answer

// deduct time from timer
// secondsLeft = secondsLeft - 5;
// }





const numHighScores = 10;
let scoreListText = document.createElement("li");
const highScoreForm = document.querySelector("#high-score-form");
const initialInputEl = document.querySelector("#initial-input");
const submitScoreBtn = document.querySelector("#submit-score-btn");


// submitScoreBtn.addEventListener ("click", function (event) {
//   event.preventDefault();
//   const highScoreList = document.querySelector(".high-score-list").textContent(initialInputEl.value)
// highScoreForm.appendChild(highScoreList)
// })