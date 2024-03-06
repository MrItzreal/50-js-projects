const toggles = document.querySelectorAll(".faq-toggle");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.parentNode.classList.toggle("active");
  });
});

/*
Code explanation:
1- Brought in the toggle buttons.
2- Looped w/ a forEach loop.
3- Added "click" event listeners.
4- Toggled the active class on the parent node and  classList.*/
