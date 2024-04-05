const screens = document.querySelectorAll(".screen");
const choose_insect_btns = document.querySelectorAll(".choose-insect-btn");
const game_container = document.getElementById("game-container");
const start_btn = document.getElementById("start-btn");
const timeEl = document.getElementById("time");
const scoreEl = document.getElementById("score");
const message = document.getElementById("message");

//Global variables
let seconds = 0;
let score = 0;
let selected_insect = {};

//adds up class after click for next section
start_btn.addEventListener("click", () => screens[0].classList.add("up"));

choose_insect_btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    //img inside of button
    const img = btn.querySelector("img");
    //link to img inside of button
    const src = img.getAttribute("src");
    //alt to img inside of button
    const alt = img.getAttribute("alt");
    //insert both src/alt to the empty object
    selected_insect = { src, alt };
    //adds up class after click for next section
    screens[1].classList.add("up");
    //starts game after one second
    setTimeout(createInsect, 1000);
    startGame();
  });
});

function startGame() {
  setInterval(increaseTime, 1000);
}

function increaseTime() {
  //gives our mins
  let m = Math.floor(seconds / 60);
  //gives our secs.
  let s = seconds % 60;
  //below adds a "0" if mins/secs are less than 10
  m = m < 10 ? `0${m}` : m;
  s = s < 10 ? `0${s}` : s;

  timeEl.innerHTML = `Time: ${m}:${s}`;
  seconds++;
}

function createInsect() {
  const insect = document.createElement("div");
  insect.classList.add("insect");
  const { x, y } = getRandomLocation();
  //Results for .top/.left below is based on the equation of getRandomLocation()
  insect.style.top = `${y}px`;
  insect.style.left = `${x}px`;
  insect.innerHTML = `
  <img 
  src="${selected_insect.src}" 
  alt"${selected_insect.alt}" 
  style="transform: rotate(${Math.random() * 360}deg)"
  />`;

  insect.addEventListener("click", catchInsect);

  game_container.appendChild(insect);
}

function getRandomLocation() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const x = Math.random() * (width - 200) + 100;
  const y = Math.random() * (height - 200) + 100;
  return { x, y };
}

function catchInsect() {
  increaseScore();
  this.classList.add("caught");
  setTimeout(() => this.remove(), 2000);
  addInsects();
}

function addInsects() {
  setTimeout(createInsect, 1000);
  setTimeout(createInsect, 1500);
}

function increaseScore() {
  score++;
  if (score > 19) {
    message.classList.add("visible");
  }
  scoreEl.innerHTML = `Score: ${score}`;
}
