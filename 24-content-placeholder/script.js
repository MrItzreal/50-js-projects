let header = document.querySelector(".header");
let title = document.querySelector(".title");
let excerpt = document.querySelector(".excerpt");
let profile_img = document.querySelector(".profile_img");
let name = document.querySelector(".name");
let date = document.querySelector(".date");

let header2 = document.querySelector(".header2");
let title2 = document.querySelector(".title2");
let excerpt2 = document.querySelector(".excerpt2");
let profile_img2 = document.querySelector(".profile_img2");
let name2 = document.querySelector(".name2");
let date2 = document.querySelector(".date2");

let animated_bgs = document.querySelectorAll(".animated-bg");
let animated_bg_texts = document.querySelectorAll(".animated-bg-text");

setTimeout(getData, 1500);

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

setTimeout(getData2, 1700);

function getData2() {
  header2.innerHTML = `<img src="https://source.unsplash.com/random" />`;
  title2.innerHTML = `More Photos From Unsplash.`;
  excerpt2.innerHTML = `   Professional photos fetched from Unplash. New photo every reload.`;
  profile_img2.innerHTML = `<img src="https://randomuser.me/api/portraits/lego/1.jpg" alt="" />`;
  name2.innerHTML = `Pz Izzy `;
  date2.innerHTML = `Jan 18,2024`;

  animated_bgs.forEach((bg) => {
    bg.classList.remove("animated-bg");
  });

  animated_bg_texts.forEach((bg) => {
    bg.classList.remove("animated-bg-text");
  });
}
