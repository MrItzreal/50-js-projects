const resetBtn = document.getElementById("reset");
const playBtn = document.getElementById("play");
const timerEl = document.getElementById("timer");
const root = document.querySelector(":root");

//Initial setup
const totalSeconds = 60;
let playing = false;
let currentSeconds = totalSeconds;
timerEl.innerText = formatTime(totalSeconds);

//Run the run() function every second
const timerInterval = setInterval(run, 1000);

//Event listeners
//playing is set to whatever its not. So if is not
//playing it'll play and if it is, then, it'll stop.
playBtn.addEventListener("click", () => {
  playing = !playing;
  playBtn.classList.toggle("play");
  playBtn.classList.toggle("bg-green-500");
  //When playbtn is clicked it changes to pause icon.
  const playIcon = playBtn.querySelector("i");
  playIcon.classList.toggle("fa-play");
  playIcon.classList.toggle("fa-pause");
});

//Reset button
resetBtn.addEventListener("click", resetAll);

//Run timer
function run() {
  if (playing) {
    currentSeconds -= 1;
    if (currentSeconds <= 0) {
      clearInterval(timerInterval);
      resetAll();
    }
    timerEl.innerText = formatTime(currentSeconds);
    root.style.setProperty("--degrees", calcDeg());
  }
}

//Calculate degrees
function calcDeg() {
  return `${360 - (currentSeconds / totalSeconds) * 360}deg`;
}

//Reset timer
function resetAll() {
  playing = false;
  playBtn.classList.remove("play");
  playBtn.classList.remove("bg-green-500");
  const playIcon = playBtn.querySelector("i");
  playIcon.classList.remove("fa-pause");
  playIcon.classList.add("fa-play");
  currentSeconds = totalSeconds;
  timerEl.innerText = formatTime(totalSeconds);
  root.style.setProperty("--degrees", "0deg");
}

//Format time
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const newSeconds = seconds % 60;

  return `${minutes.toString().padStart(2, "0")}:${newSeconds
    .toString()
    .padStart(2, "0")}`;
}
