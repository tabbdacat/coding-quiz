// Select html elements
const timeRemaining = document.querySelector(".timer");
const startBtn = document.querySelector("#start");
const startScreenEl = document.querySelector("#start-screen");
const highScoreDisplayEl = document.querySelector("#high-score-display");
const questionsEl = document.querySelector("#test");
const endScreenEl = document.querySelector("#end-screen");
const time = document.getElementById("#time");
const questions = document.querySelector('#questions');
const optionBtns = document.querySelectorAll('.optionBtn');
const highScoreForm = document.querySelector("#high-score-form");
const initialInputEl = document.querySelector("#initial-input");
const submitScoreBtn = document.querySelector("#submit-score-btn");
const highScoreList = document.querySelector("#high-score-list");
const curScore = document.querySelector("#cur-score");
const clearHistoryBtn = document.querySelector("#clearHistoryBtn");
// retrieve items from local storage or set as empty array
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

let currentQuestionIndex = 0;
let secondsLeft;

// start timer
startBtn.addEventListener("click", function () {
  // time for quiz
  secondsLeft = 60;
  // Sets interval in variable
  let timerInterval = setInterval(function () {
    // subtracting 1 from seconds left
    secondsLeft--;
    timeRemaining.textContent = secondsLeft + " seconds left.";

    function stopTimer() {
      clearInterval(timerInterval);
      timeRemaining.textContent = ""
    };

    // end quiz if timer runs out
    if (secondsLeft <= 0) {
      console.log("im hit!");
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Clears timer text 
      timeRemaining.textContent = "";
      endScreenEl.classList.remove("hide");
      questionsEl.classList.add("hide");
      highScoreDisplayEl.classList.remove("hide");
    }
  }, 1000);

  startScreenEl.classList.add("hide");
  highScoreDisplayEl.classList.add("hide");
  questionsEl.classList.remove("hide");
  displayQuestion(currentQuestionIndex);
})

// question list array
let myQuestions = [
  {
    quest: "Which of the following function of Array object adds one or more elements to the end of an array and returns the new length of the array?",
    options: ["A - shift()", "B - push()", "C - join()", "D - add()"],
    answer: "B - push()",
  },
  {
    quest: "What will be the output of this code?: console.log(1 + '2' + '2');",
    options: ["A - 122", "B - NaN", "C - 5", "D - 14"],
    answer: "A - 122",
  },
  {
    quest: "What will be the output of the following code snippet? print(typeof(NaN));",
    options: ["A - String", "B - Undefined", "C - Object", "D - Number"],
    answer: "D - Number",
  }
]

// display questions with options
function displayQuestion(i) {
  let currentQuestionText = myQuestions[i].quest;

  questions.textContent = currentQuestionText;
  optionBtns[0].textContent = myQuestions[i].options[0];
  optionBtns[1].textContent = myQuestions[i].options[1];
  optionBtns[2].textContent = myQuestions[i].options[2];
  optionBtns[3].textContent = myQuestions[i].options[3];
}

optionBtns.forEach(function (x) {
  // listens for correct answer
  x.addEventListener("click", function (e) {
    if (e.target.textContent === myQuestions[currentQuestionIndex].answer) {
      alert("That's correct!");
    } else {
      alert("Wrong Answer! 10 seconds deducted from timer.");
      secondsLeft = secondsLeft - 10;
    }

    // increase question index by 1 after click
    currentQuestionIndex++;

    // end quiz if at end of question list
    if (currentQuestionIndex >= myQuestions.length) {
      endOfQuiz();
      return
    }

    // display next question
    displayQuestion(currentQuestionIndex);
  })
});

// change user view
function endOfQuiz() {
  // set score to seconds remaining
  curScore.textContent = secondsLeft;
  if(secondsLeft > 0) {
    secondsLeft = 0;
  };
}

function displayHighScores() {
  highScoreList.innerHTML = "";
  for (var i = 0; i < highScores.length; i++) {
console.log(highScores);
console.log(highScores[i].score)
var li = document.createElement("li");
li.textContent = "Score: " + highScores[i].score + "  Name: " + highScores[i].initials;
// places list item in high score list
highScoreList.appendChild(li);
  }
}

submitScoreBtn.addEventListener("click", function (event) {
  // prevent page refresh
  event.preventDefault();
  // calls high score function
  // submitHighScores();
  updateHighScores(initialInputEl.value, JSON.parse(curScore.textContent));
  init();
})

// input intials and score to local storage
function updateHighScores(initialInput, curScore) {
  const result = { initials: initialInput, score: curScore };

  highScores.push(result);

  var initialText = initialInputEl.value.trim();
  var li = document.createElement("li");
  // setting text of the li to the current initial entered
  li.textContent = "Score: " + curScore + "  Name: " + initialText;

    // Sort high scores high to low
    highScores.sort((a, b) => b.score - a.score)
    // keep 5 highest scores
    highScores.splice(5);
    localStorage.setItem("highScores", JSON.stringify(highScores));
}

// listen to button to clear high score history 
clearHistoryBtn.addEventListener("click", function () {
  localStorage.clear();
  highScoreList.innerHTML = "";
});


function init() {
  displayHighScores();
  startScreenEl.classList.remove("hide");
  endScreenEl.classList.add("hide");
  currentQuestionIndex = 0;
}

init();