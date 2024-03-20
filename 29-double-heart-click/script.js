const loveMe = document.querySelector(".loveMe");
const times = document.querySelector("#times");

let clickTime = 0;
let timesClicked = 0;

loveMe.addEventListener("click", (e) => {
  //Can use "dblclick" but decided to create one
  //for If/else statements practice.
  if (clickTime === 0) {
    clickTime = new Date().getTime();
  } else {
    if (new Date().getTime() - clickTime < 800) {
      createHeart(e);
      clickTime = 0;
    } else {
      clickTime = new Date().getTime();
    }
  }
});

const createHeart = (e) => {
  const heart = document.createElement("i");
  heart.classList.add("fas");
  heart.classList.add("fa-heart");

  //calculates the entire window
  const x = e.clientX;
  const y = e.clientY;

  //ONLY calculates the targeted element
  const leftOffset = e.target.offsetLeft;
  const topOffset = e.target.offsetTop;

  //Calculates coordinates relative to clicked element
  const xInside = x - leftOffset;
  const yInside = y - topOffset;

  //DOM manipulation to dynamically change style
  heart.style.top = `${yInside}px`;
  heart.style.left = `${xInside}px`;

  loveMe.appendChild(heart);

  times.innerHTML = ++timesClicked;

  setTimeout(() => {
    heart.remove();
  }, 1000);
};
