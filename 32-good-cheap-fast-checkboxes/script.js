const toggles = document.querySelectorAll(".toggle");
const good = document.querySelector("#good");
const cheap = document.querySelector("#cheap");
const fast = document.querySelector("#fast");

//when you want to add events to checkboxes,
//you use "change" instead of "click"
toggles.forEach((toggle) =>
  toggle.addEventListener("change", (e) => doTheTrick(e.target))
);

function doTheTrick(theClickedOne) {
  if (good.checked && cheap.checked && fast.checked) {
    if (good === theClickedOne) {
      fast.checked = false;
    }

    if (cheap === theClickedOne) {
      good.checked = false;
    }

    if (fast === theClickedOne) {
      cheap.checked = false;
    }
  }
}

// .checked is used when you have a checkbox and you want to
// bring it into the DOM and see if is checked or not and it
// will be as true or false.
