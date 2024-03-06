const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    if (panel.classList.contains("active")) {
      panel.classList.remove("active");
    } else {
      removeActiveClasses();
      panel.classList.add("active");
    }
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

/*This is the course panels.forEach loop. However, I decided to use 
if statements and gradients to improve the project.

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});
*/
