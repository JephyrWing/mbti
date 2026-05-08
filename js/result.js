import { results, mbtis } from "../data/data.js";

const urlParams = new URLSearchParams(location.search);
const mbti = urlParams.get("mbti");
const selectedIdx = mbtis[mbti];
const mainTitleEl = document.querySelector(".page-title");
const characterEl = document.querySelector(".character");
const resultEl = document.querySelector(".result");
const job1El = document.querySelector(".job-box .job1");
const job2El = document.querySelector(".job-box .job2");
const lectureimgEl = document.querySelector(".lectureimg");
const lectureurlEl = document.querySelector(".lecture");


function pageConductor() {
  const result = results[selectedIdx];
  mainTitleEl.innerHTML = result.title;
  characterEl.src = result.character;
  resultEl.innerHTML = "";
  result.results.forEach((x) => {
    const div = document.createElement("div");
    div.innerHTML = x;
    div.className = "resultContent";
    resultEl.appendChild(div);
  });
  job1El.innerHTML = result.jobs[0];
  job2El.innerHTML = result.jobs[1];
  lectureimgEl.src = result.lectureImg;
  lectureurlEl.setAttribute("href", result.lectureUrl)
}


pageConductor();
