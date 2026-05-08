import { questions } from "../data/data.js";

// 사용할 태그를 변수에 지정
// Progress의 value
const questionBox = document.querySelector(".box_bg");
const progressValue = document.querySelector(".progress .value");
const numberEl = document.querySelector(".number");
const questionEl = document.querySelector(".question");
const choice1El = document.querySelector(".choice1");
const choice2El = document.querySelector(".choice2");
renderQuestion(0);

let currentNumber = 1;
let mbti = "";

// 1. EventListener를 두개 붙인다.
choice1El.addEventListener("click", function(){nextQuestion(0)});
choice2El.addEventListener("click", function(){nextQuestion(1)});

// 2. 질문번호를 클릭하면
function nextQuestion(choiceNumber) {
  // - currentNumber를 하나 증가시킨다.
  // - 결과를 mbti 변수에 저장한다.
  if (currentNumber >= 10){
    mbti = mbti + questions[currentNumber - 1].choices[choiceNumber].value;
    location.href = `./result.html?mbti=${mbti}`;
    // 받는 페이지
    // const urlParams = new URLSearchParams(window.location.search);
    // const mbti = urlParams.get("mbti");
    // console.log(mbti);


    //===================================================================
    // 보내는 페이지
    // localStorage(또는 sessionStorage).setItem("mbti", mbti);
    // location.href = "nextpage.html";

    // 받는 페이지 에서는
    // const mbti = localStorage(또는 sessionStorage).getItem("mbti");
    // console.log(mbti);

    // 삭제할 시
    // localStorage.removeItem("mbti");

  } else {
    renderQuestion(currentNumber);
      mbti = mbti + questions[currentNumber - 1].choices[choiceNumber].value;
    currentNumber ++;
  }
}  
 

// 3. 마지막 질문인지 확인해서 결과페이지로 넘긴다.
// result.html -> console.log로 출력만
function renderQuestion(currentNumber) {
  questionBox.style = `background-image : url("./images/box${currentNumber}.jpg")`
  numberEl.innerHTML = questions[currentNumber].number;
  questionEl.innerHTML = questions[currentNumber].question;
  choice1El.innerHTML = questions[currentNumber].choices[0].text;
  choice2El.innerHTML = questions[currentNumber].choices[1].text;
  progressValue.style.width = (currentNumber + 1) * 10 + "%";
}