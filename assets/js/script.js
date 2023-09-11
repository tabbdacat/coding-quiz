let timeRemaining = document.querySelector(".timer");
const startBtn = document.querySelector("#start");
const startScreenEl = document.querySelector("#start-screen");
const questionsEl = document.querySelector("#test");
const endScreenEl = document.querySelector("#end-screen");
// Selects element by id
let time = document.getElementById("#time");
let questions = document.querySelector('#questions');
let optionBtns = document.querySelectorAll('.optionBtn');
let currentQuestionIndex = 0;
let secondsLeft;


startBtn.addEventListener("click", function () {
  // time for quiz
  secondsLeft = 100;
  // Sets interval in variable
  let timerInterval = setInterval(function () {
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


  startScreenEl.classList.add("hide");
  questionsEl.classList.remove("hide");
  displayQuestion(currentQuestionIndex);
})

function sendMessage() {
  timeRemaining.textContent = "Time is up!"
}

// question list object
let myQuestions = [
  {
    quest: "Which of the following function of Array object adds one or more elements to the end of an array and returns the new length of the array?",
    options: ["A - shift()", "B - push()", "C - join()", "D - add()"],
    answer: "B - push()",
  },
  {
    quest: "why not?",
    options: ["dunno", "cuz i'm right", "shrug", "ahhh"],
    answer: "cuz i'm right",
  },
  {
    quest: "whyyyyyyy?",
    options: ["not sure", "cuz i'm right", "shrug", "ahhh"],
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



// const rightAnswer= document.querySelector("#right-answer");

// function correct() {
//   rightAnswer.classList.remove("hide");
// }
// function removeCorrect() {
//   rightAnswer.classList.remove("hide");
// }

optionBtns.forEach(function (x) {

  x.addEventListener("click", function (e) {
    if (e.target.textContent === myQuestions[currentQuestionIndex].answer) {
      alert("That's correct!");
      // setTimeout(correct(), 1000);
      // setTimeout(removeCorrect(), 1000);
    } else {
      alert("Wrong Answer! 10 seconds deducted from timer.");
      secondsLeft = secondsLeft - 10;
    }

    currentQuestionIndex++;


    if (currentQuestionIndex >= myQuestions.length) {
      endOfQuiz()


      return
    }
    displayQuestion(currentQuestionIndex);
  })
});


function endOfQuiz() {
  endScreenEl.classList.remove("hide");
  questionsEl.classList.add("hide");
  curScore.textContent = secondsLeft;
  secondsLeft = 0;
}

const numHighScores = 10;
const highScoreForm = document.querySelector("#high-score-form");
const initialInputEl = document.querySelector("#initial-input");
const submitScoreBtn = document.querySelector("#submit-score-btn");
const highScoreList = document.querySelector("#high-score-list");
const curScore = document.querySelector("#cur-score");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const clearHistoryBtn = document.querySelector("#clearHistoryBtn");


submitScoreBtn.addEventListener("click", function (event) {
  event.preventDefault();
  console.log('clicked');
  // displayHighScores();

  localStorage.setItem("initials", initialInputEl);
  localStorage.setItem("score", curScore);
  submitHighScores();
  updateHighScores(initialInputEl.value, JSON.parse(curScore.textContent));


})

function updateHighScores(initialInput, curScore) {
  const result = { initials: initialInput, score: curScore };

  highScores.push(result);
  highScores.sort((a, b) => b.score - a.score)
  highScores.splice(5);
  console.log(highScores);
  localStorage.setItem("highScores", JSON.stringify(highScores));
}

function submitHighScores() {
  let initialArr = [];
  let scoreArr = [];
  highScoreList.innerHTML = "";
  // creates variable for value input of initials entered, minus white spaces
  var initialText = initialInputEl.value.trim();

  //   console.log(initialText,secondsLeft);

  // for (var i = 0; i < initialArr.length; i++) {
  //   // create variable for current initial in iteration
  //   var initial = InitialArr[i];

  //   console.log(initial);
  // adds input to initial array
  initialArr.push(initialText);
  // creates list item
  var li = document.createElement("li");
  // setting text of the li to the current initial entered
  li.textContent = "Score:" + curScore.textContent + "  Name:" + initialText;
  // places list item in high score list
  highScoreList.appendChild(li);

  console.log(li);
}


clearHistoryBtn.addEventListener("click", function () {
  localStorage.clear();
});


// function init() {
//   renderHighScores();
// }