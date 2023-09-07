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

    if (currentQuestionIndex >= myQuestions[i].length) {
 
      clearInterval(timerInterval);
    }

  }, 1000);

  function sendMessage() {
    timeRemaining.textContent = "Time is up!"

    clearInterval(timerInterval);
  }

  startScreenEl.classList.add("hide");
  questionsEl.classList.remove("hide");
  displayQuestion(currentQuestionIndex);
})



// question list object
let myQuestions = [
  {
    quest: "why is the sky blue?",
    options: ["cuz sad", "cuz space", "cuz i said so", "cuz i'm right"],
    answer: "cuz i'm right",
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

  if (currentQuestionIndex >= myQuestions[i].length) {

    endScreenEl.classList.remove("hide");
 questionsEl.classList.add("hide");
 
  }
}


optionBtns.forEach(function (x) {

  x.addEventListener("click", function (e) {
          if (e.target.textContent === myQuestions[currentQuestionIndex].answer) {
        alert("That's correct!");
      } else {
        alert("Wrong Answer! 10 seconds deducted from timer.");
        secondsLeft = secondsLeft - 10;
      }
    
    currentQuestionIndex ++;

    if (currentQuestionIndex >= myQuestions.length) {

      endScreenEl.classList.remove("hide");
   questionsEl.classList.add("hide");
 
   return
    }
    displayQuestion(currentQuestionIndex);
  })
});

let curScoreEl = document.querySelector("#cur-score");

function displayCurScore (x) {
curScoreEl = x;
console.log(curScoreEl);
}

const numHighScores = 10;
const highScoreForm = document.querySelector("#high-score-form");
const initialInputEl = document.querySelector("#initial-input");
const submitScoreBtn = document.querySelector("#submit-score-btn");
const highScoreList = document.querySelector("#high-score-list");
const topScores = document.querySelectorAll(".topScores");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const clearHistoryBtn = document.querySelector("#clearHistoryBtn");


submitScoreBtn.addEventListener ("click", function (event) {
  event.preventDefault();
  displayHighScores();
  
  event.preventDefault();
  console.log(initialInputEl.value);

  scoreListText.textContent = initialInputEl.value;

  console.log(highScoreList);
highScoreList.appendChild(highScoreForm.value);

})


let initials = "";
let curScore = 10;



function updateHighScores(initialInput, curScore) {
  const result = {initials: initialInput, score: curScore};

  highScores.push(result);
  highScores.sort((a, b) => b.score - a.score)
  highScores.splice(5);
  localStorage.setItem("highScores", JSON.stringify(highScores));
  
}

function displayHighScores () {
  var testHighScores = [1, 2, 3, 4, 5];
  for(i=0; i < topScores.length; i++) {
      topScores[i].innerHTML = highScores[i].initials + " "  + highScores[i].score;
      console.log("test");
  }
} 

clearHistoryBtn.addEventListener ("click", function() {
  localStorage.clear();
});
