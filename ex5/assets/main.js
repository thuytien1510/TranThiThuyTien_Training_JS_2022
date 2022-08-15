let id = (id) => document.getElementById(id);
let allClass = (classes) => document.querySelectorAll(classes);

var timer;
const COUNTER_KEY = 'my-counter';

function countDown(i, callback) {
  timer = setInterval(function () {
    minutes = parseInt(i / 60, 10);
    seconds = parseInt(i % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    id("displayDiv").innerHTML = "Countdown time " + "0:" + minutes + ":" + seconds;

    if ((i--) > 0) {
      localStorage.setItem(COUNTER_KEY, i);
    } else {
      localStorage.removeItem(COUNTER_KEY);
      clearInterval(timer);
      callback();
    }
  }, 1000);
}

var countDownTime = localStorage.getItem(COUNTER_KEY) || 10;
countDown(countDownTime, function () {
  id('answer').style.display = 'block';
  let yourMark = 0;
  for (let i = 0; i < allClass('.option-question').length; i++) {
    let inputSelect = document.querySelector(`input[name= 'question${i}']:checked`)
    let yourAnswer = (inputSelect || {}).value;
    let right = data[i].correctAnswer;
    if(yourAnswer == right){
      yourMark += 10;
    }
  }
  id('mark').innerHTML = `${yourMark}`;
  id('mark').style.color = 'red';
  localStorage.clear();
});

const data = [
  {
    question: "Javascript is _________ language.",
    answers: {
      a: "Programming",
      b: "Application",
      c: "None of These",
      d: "Scripting",
    },
    correctAnswer: "a",
  },
  {
    question:
      "Which of the following is a valid type of function javascript supports?",
    answers: {
      a: "named function",
      b: "anonymous function",
      c: "both of the above",
      d: "none of the above",
    },
    correctAnswer: "c",
  },
  {
    question:
      "Which built-in method returns the index within the calling String object of the first occurrence of the specified value?",
    answers: {
      a: "getIndex()",
      b: "location()",
      c: "indexOf()",
      d: "getLocation()",
    },
    correctAnswer: "c",
  }
];

//quizApp
const renderData = data.map(
  ({
    question,
    answers: { a, b, c, d }
  }, index) => {
    html = `
    <h1 class="number-question">
    Question ${index + 1} :
</h1>
<h4 class="question">
    ${question}
</h4>
<div class="option-question">
    <div class="option-item">
        <input class="inputabs" id="tab${index}1" type="radio" name="question${index}" value="a">
        <label class="labeltabs" for="tab${index}1">a. ${a}</label>
    </div>
    <div class="option-item">
        <input class="inputabs" id="tab${index}2" type="radio" name="question${index}" value="b" >
        <label class="labeltabs"for="tab${index}2">b. ${b}</label>
    </div>
    <div class="option-item">
        <input class="inputabs" id="tab${index}3" type="radio" name="question${index}" value="c">
        <label class="labeltabs" for="tab${index}3">c. ${c}</label>
    </div>
    <div class="option-item">
        <input class="inputabs" id="tab${index}4" type="radio" name="question${index}" value="d">
        <label class="labeltabs" for="tab${index}4">d. ${d}</label>
    </div>
</div>
        `;
    return html;
  }
)

id('quizz').innerHTML = renderData.join("");

const renderMark = data.map(
  ({
    correctAnswer
  }, index) => {
    index++;
    html = `
      <div><h2>${index} . ${correctAnswer}</h2></div>
        `;
    return html;
  }
)

id('correctAnswer').innerHTML = renderMark.join("");

document.addEventListener('click', e => {
  for (let i = 0; i < allClass('.option-question').length; i++) {
    let answers = allClass(`input[name='question${i}']`);
    for (let key in answers) {
      if (answers[key].checked) {
        localStorage.setItem(`question${i}`, answers[key].id);
      }
    }
  }
})

for (let i = 0; i < allClass('.option-question').length; i++) {
  id(localStorage.getItem(`question${i}`)).checked = true;
}