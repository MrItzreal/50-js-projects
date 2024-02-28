const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

//this is our index that will go as
//far as 4 and not lower than 1.
let currentActive = 1;

//This makes sure that we don't go above
// 4 when we click next btn since we only have 4 circles.
next.addEventListener("click", () => {
  currentActive++;

  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  update();
});

//This makes sure that we don't go below
// 1 when we click prev to avoid going negative.
prev.addEventListener("click", () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
});

//This function updates the DOM whether
//we click "prev" or click "next" buttons.
function update() {
  circles.forEach((circle, i) => {
    if (i < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  //Code below is for progress bar
  //to go to next number
  const actives = document.querySelectorAll(".active");

  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  //code below:
  //If bar reaches 1, then, Prev button disabled.
  //If bar reaches 4, then, Next button disabled.
  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
