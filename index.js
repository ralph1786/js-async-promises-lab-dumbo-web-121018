const questions = [
  {
    questionText: "Lightning never strikes in the same place twice",
    answer: false
  },
  {
    questionText:
      "Humans can distinguish between over one trillion different smells",
    answer: true
  },
  {
    questionText: "Goldfish only have a memory of about three seconds",
    answer: false
  }
];

let question;

function appendQuestion() {
  let question = questions[0].questionText;
  const placeHolder = document.querySelector(".question-container");
  placeHolder.innerHTML = question;
}

function askQuestionThen(time) {
  question = questions[0];
  appendQuestion(question);
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(question);
    }, time);
  });
}

function removeQuestion() {
  return new Promise(() => {
    const placeHolder = document.querySelector(".question-container");
    placeHolder.remove();
  });
}

function askQuestionThenRemoveQuestion(time) {
  return askQuestionThen(time).then(removeQuestion);
}

function trueAndFalseButtons() {
  return (buttons = document
    .querySelector(".true-false-list")
    .querySelectorAll(".btn"));
}

function toggleTrueAndFalseButtons() {
  trueAndFalseButtons().forEach(button => {
    button.classList.toggle("hide");
  });
}

function displayQuestionOnClick() {
  const button = document.querySelector("a");
  button.addEventListener("click", () => {
    trueAndFalseButtons();
    askQuestionThenRemoveQuestion(5000);
  });
}
