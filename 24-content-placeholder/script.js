const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_img");
const name = document.getElementById("name");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(".animated-bg-text");

setTimeout(getData, 2500);

function getData() {
  header.innerHTML = `<img src="https://source.unsplash.com/random" />`;
  title.innerHTML = ` Random Photos From Unsplash.`;
  excerpt.innerHTML = `   Professional photos fetched from Unplash. New photo every reload.`;
  profile_img.innerHTML = `<img src="https://randomuser.me/api/portraits/lego/0.jpg" alt="" />`;
  name.innerHTML = `Izzy Pz`;
  date.innerHTML = `Mar 14,2024`;

  animated_bgs.forEach((bg) => {
    bg.classList.remove("animated-bg");
  });

  animated_bg_texts.forEach((bg) => {
    bg.classList.remove("animated-bg-text");
  });
}
