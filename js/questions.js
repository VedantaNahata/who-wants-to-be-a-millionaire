let question = [];
let qns = document.querySelector(".qns");
let option1 = document.querySelector("#option1");
let option2 = document.querySelector("#option2");
let option3 = document.querySelector("#option3");
let option4 = document.querySelector("#option4");
let box = document.querySelector(".box");
let ansDisplay = document.querySelector(".ansDisplay");
let qno = 0;
let btn = document.querySelector(".btn");
let quit = document.getElementById("quit");
let askExpert = document.getElementById("expert");
let fiftyfifty = document.getElementById("fifty-fifty");
let flip = document.getElementById("flip-qns");
let amountWon = [
  "$0",
  "$100",
  "$200",
  "$300",
  "$500",
  "$1,000",
  "$2,000",
  "$4,000",
  "$8,000",
  "$16,000",
  "$32,000",
  "$64,000",
  "$125,000",
  "$250,000",
  "$500,000",
  "$1,000,000",
];
let amountWonBox = document.querySelector(".amountWon");
window.onload = sendRequest;
function sendRequest() {
  const url = "https://opentdb.com/api.php?amount=16&type=multiple";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      question = data.results;

      let options = question[qno].incorrect_answers;
      options.push(question[qno].correct_answer);
      options = shuffle(options);
      qns.innerHTML = question[qno].question;
      option1.style.display = "block";
      option2.style.display = "block";
      option3.style.display = "block";
      option4.style.display = "block";
      option1.innerText = options[0];
      option2.innerText = options[1];
      option3.innerText = options[2];
      option4.innerText = options[3];
      option1.addEventListener("click", () => {
        if (option1.innerText == question[qno].correct_answer) {
          qno++;
          let numbersOfQns = document.querySelector(".qns-number");
          numbersOfQns.innerHTML = "Questions Answered Correctly: " + qno;
          let options = question[qno].incorrect_answers;
          options.push(question[qno].correct_answer);
          options = shuffle(options);
          qns.innerHTML = question[qno].question;
          option1.style.display = "block";
          option2.style.display = "block";
          option3.style.display = "block";
          option4.style.display = "block";
          option1.innerText = options[0];
          option2.innerText = options[1];
          option3.innerText = options[2];
          option4.innerText = options[3];

          amountWonBox.innerHTML = "Amount Won: " + amountWon[qno];
          if (amountWonBox.innerHTML == "Amount Won: $1,000,000") {
            box.style.display = "none";
            document.querySelector(".congrats").style.display = "block";
            document.querySelector(".quit").style.display = "none";
          }
        } else {
          amountWonBox.innerHTML = "Amount Won: $0";
          box.style.display = "none";
          document.getElementById("countdown").style.display = "none";
          ansDisplay.innerText =
            "The correct Answer to this question was: " +
            question[qno].correct_answer;
        }
      });
      option2.addEventListener("click", () => {
        if (option2.innerText == question[qno].correct_answer) {
          qno++;
          let numbersOfQns = document.querySelector(".qns-number");
          numbersOfQns.innerHTML = "Questions Answered Correctly: " + qno;
          let options = question[qno].incorrect_answers;
          options.push(question[qno].correct_answer);
          options = shuffle(options);
          qns.innerHTML = question[qno].question;
          option1.style.display = "block";
          option2.style.display = "block";
          option3.style.display = "block";
          option4.style.display = "block";
          option1.innerText = options[0];
          option2.innerText = options[1];
          option3.innerText = options[2];
          option4.innerText = options[3];

          amountWonBox.innerHTML = "Amount Won: " + amountWon[qno];
          if (amountWonBox.innerHTML == "Amount Won: $1,000,000") {
            box.style.display = "none";
            document.querySelector(".congrats").style.display = "block";
            document.querySelector(".quit").style.display = "none";
          }
        } else {
          amountWonBox.innerHTML = "Amount Won: $0";
          box.style.display = "none";
          document.getElementById("countdown").style.display = "none";
          ansDisplay.innerText =
            "The correct Answer to this question was: " +
            question[qno].correct_answer;
        }
      });
      option3.addEventListener("click", () => {
        if (option3.innerText == question[qno].correct_answer) {
          qno++;
          let numbersOfQns = document.querySelector(".qns-number");
          numbersOfQns.innerHTML = "Questions Answered Correctly: " + qno;
          let options = question[qno].incorrect_answers;
          options.push(question[qno].correct_answer);
          options = shuffle(options);
          qns.innerHTML = question[qno].question;
          option1.style.display = "block";
          option2.style.display = "block";
          option3.style.display = "block";
          option4.style.display = "block";
          option1.innerText = options[0];
          option2.innerText = options[1];
          option3.innerText = options[2];
          option4.innerText = options[3];

          amountWonBox.innerHTML = "Amount Won: " + amountWon[qno];
          if (amountWonBox.innerHTML == "Amount Won: $1,000,000") {
            box.style.display = "none";
            document.querySelector(".congrats").style.display = "block";
            document.querySelector(".quit").style.display = "none";
          }
        } else {
          amountWonBox.innerHTML = "Amount Won: $0";
          box.style.display = "none";
          document.getElementById("countdown").style.display = "none";
          ansDisplay.innerText =
            "The correct Answer to this question was: " +
            question[qno].correct_answer;
        }
      });
      option4.addEventListener("click", () => {
        if (option4.innerText == question[qno].correct_answer) {
          qno++;
          let numbersOfQns = document.querySelector(".qns-number");
          numbersOfQns.innerHTML = "Questions Answered Correctly: " + qno;
          let options = question[qno].incorrect_answers;
          options.push(question[qno].correct_answer);
          options = shuffle(options);
          qns.innerHTML = question[qno].question;
          option1.style.display = "block";
          option2.style.display = "block";
          option3.style.display = "block";
          option4.style.display = "block";
          option1.innerText = options[0];
          option2.innerText = options[1];
          option3.innerText = options[2];
          option4.innerText = options[3];

          amountWonBox.innerHTML = "Amount Won: " + amountWon[qno];
          if (amountWonBox.innerHTML == "Amount Won: $1,000,000") {
            box.style.display = "none";
            document.querySelector(".congrats").style.display = "block";
            document.querySelector(".quit").style.display = "none";
          }
        } else {
          amountWonBox.innerHTML = "Amount Won: $0";
          box.style.display = "none";
          document.getElementById("countdown").style.display = "none";
          ansDisplay.innerText =
            "The correct Answer to this question was: " +
            question[qno].correct_answer;
        }
      });
      quit.addEventListener("click", () => {
        box.style.display = "none";
        document.getElementById("countdown").style.display = "none";
        document.querySelector(".btn-groups").style.display = "none";
        ansDisplay.innerText =
          "The correct Answer to this question was: " +
          question[qno].correct_answer;
      });
      askExpert.addEventListener("click", () => {
        alert(
          "I think the correct answer is" + " " + question[qno].correct_answer
        );
        askExpert.style.display = "none";
      });
      fiftyfifty.addEventListener("click", () => {
        let fiftyfiftyCount = 1;
        for (let i = 0; i < options.length; i++) {
          if (options[i] !== question[qno].correct_answer) {
            if (fiftyfiftyCount <= 2) {
              let deleteOption = "option" + (i + 1);
              document.getElementById(deleteOption).style.display = "none";
              fiftyfiftyCount++;
            }
          }
        }
        fiftyfifty.style.display = "none";
      });
      flip.addEventListener("click", () => {
        qno++;
        qns.innerHTML = question[qno].question;
        let options = question[qno].incorrect_answers;
        options.push(question[qno].correct_answer);
        options = shuffle(options);
        option1.innerText = options[0];
        option2.innerText = options[1];
        option3.innerText = options[2];
        option4.innerText = options[3];
        flip.style.display = "none";
      });
    });
}
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}
function timer() {
  var count = 120;
  var interval = setInterval(function () {
    document.getElementById("countdown").innerHTML =
      count + " " + "seconds left";
    count--;
    if (count === 0) {
      clearInterval(interval);
      document.getElementById("countdown").innerHTML =
        "You ran out of time! Better Luck Next Time";
      box.style.display = "none";
      document.querySelector(".btn-groups").style.display = "none";
    }
  }, 1000);
}
timer();
