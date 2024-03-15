const nav = document.querySelector(".nav");
window.addEventListener("scroll", fixNav);

function fixNav() {
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
  // console.log(window.scrollY, nav.offsetHeight);
  //if you log this you'll see that as soon as the,
  //Y-axis goes 150 over the offsetHeight the nav goes white.
}
