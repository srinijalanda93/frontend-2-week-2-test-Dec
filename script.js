let popup = document.querySelector(".popup");
let login = document.getElementById("btn");
// alert(login)
function toggle() {
  if (login.innerText === "Login") {
    alert("Please Login First");
    return;
  }
  if (popup.style.display === "none") {
    popup.style.display = "flex";
  } else popup.style.display = "none";
}

//let's get that close..

let cls = document.querySelector(".close");

cls.addEventListener("click", toggle);

let str = document.querySelector(".start");
str.addEventListener("click", toggle);

login.addEventListener("click", () => {
  if (login.innerText != "Login") return;
  let name = prompt("Enter Your Name");
  login.innerHTML = `<span style="color: #FCC822; font-size: large;"><i class="fa-brands fa-servicestack"></i> ${name} <i class="fa-solid fa-caret-down"></i></span>`;
});
let totalScore = 0;

let first = false;
function check(x, a1) {
  if (first) return;
  first = true;
  let card = document.querySelectorAll(".card");
  card[x - 1].style.backgroundColor = "#FCC822";
  if (x == a1) {
    let score = document.querySelector(".score");
    score.innerText = "Score: " + (totalScore = totalScore + 5);
  }

  if (x === a1) {
    alert("Your Answer is Correct!!");
  } else alert("Your Answer is Wrong!!!");
}
let currQ = 1;
let nextBtn = document.querySelector(".next");
let pervBtn = document.querySelector(".prev");

let skipBtn = document.querySelector(".skip");
let submit = document.querySelector(".submit");

function nextQuestion(cq, nq, isPrev) {
  if (isPrev && cq == 1) {
    pervBtn.style.display = "none";
    return;
  }
  if (currQ == 4 && isPrev == false) {
    return;
  }

  if (nq == 4) {
    nextBtn.style.display = "none";
    skipBtn.style.display = "none";
    submit.style.display = "flex";
  } else {
    nextBtn.style.display = "flex";
    skipBtn.style.display = "flex";
    submit.style.display = "none";
  }
  pervBtn.style.display = "flex";

  if (nq == 1) pervBtn.style.display = "none";

  first = false;
  let cls = ".que" + cq;

  let cqd = document.querySelector(cls);

  cqd.style.display = "none";

  let cln = ".que" + nq;
  currQ = nq;

  let nqd = document.querySelector(cln);

  nqd.style.display = "flex";
}

nextBtn.addEventListener("click", () => {
  nextQuestion(currQ, currQ + 1, false);
});

pervBtn.addEventListener("click", () => {
  nextQuestion(currQ, currQ - 1, true);
});

skipBtn.addEventListener("click", () => {
  nextQuestion(currQ, currQ + 1, false);
});

let homepage = document.querySelector(".homepage");
let questions = document.getElementById("questions");

let afterTest = document.querySelector(".afterTest");

let scoreAfterTest = document.getElementById("afterTest");

submit.addEventListener("click", () => {
  afterTest.style.display = "flex";

  scoreAfterTest.innerText = "YOU SCORE IS: " + totalScore;
  totalScore = 0;
  questions.style.display = "none";
});

let startQuiz = document.getElementById("startQuiz");

startQuiz.addEventListener("click", () => {
  homepage.style.display = "none";
  questions.style.display = "flex";
  popup.style.display = "none";
});

let closeAfterTest = document.querySelector(".closeAfterTest");

closeAfterTest.addEventListener("click", () => {
  homepage.style.display = "flex";
  afterTest.style.display = "none";
});

function howit(params) {
  alert("First Login and then Click on Start Quiz Button");
}

function about() {
  alert("Author:- Aniket Khanagar");
}

function feature() {
  alert("You Can Give the Mock on this platform!");
}
// / const popup = document.querySelector(".popup-div");
// function startQuiz() {
//         // toggles the popup
//         if (popup.style.display === "none") {
//             popup.style.display = "flex";
//         }
//         else {
//             popup.style.display = "none";
//         }

// }
// function changeColor(box){
//     let contentSpan = box.querySelector(".close-btn");

//     // Check if the span element exists
//     if (contentSpan) {
//         // Set the background color of the span element
//         contentSpan.style.backgroundColor = "black";
//         contentSpan.style.width='60px';
// contentSpan.style.height="50px";
// contentSpan.style.color="white";
//     }

//     // Rest of your code...
//     // Change the color of the entire box if needed
//     box.style.backgroundColor = "yellow";

//     // Display the close-btn if needed
//     let closeBtn = box.querySelector(".close-btn");
//     if (closeBtn) {
//         closeBtn.style.display = "inline-block";
//     }
// }

// function resetColor(box){
//     let contentSpan = box.querySelector(".close-btn");
//     if (contentSpan.style.backgroundColor==="black") {
//         contentSpan.style.display = "none";
//         let divcolor=document.getElementsByClassName("color-box");
//         divcolor.style.backgroundColor = "grey";

//     }
// }

// function submitAnswers() {
//     // Process and validate user answers
//     // Calculate score and navigate to results page
//     window.location.href = 'results.html';
// }

// function retryQuiz() {
//     // Reset quiz state and navigate to home page
//     window.location.href = 'index.html';
// }
