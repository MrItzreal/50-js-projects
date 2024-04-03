const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const nav = document.querySelectorAll(".nav");

openBtn.addEventListener("click", () => {
  nav.forEach((open) => {
    open.classList.toggle("visible");
  });
});

closeBtn.addEventListener("click", () => {
  nav.forEach((close) => {
    close.classList.toggle("visible");
  });
});
