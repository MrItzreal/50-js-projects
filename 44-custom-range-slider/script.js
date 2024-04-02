const range = document.getElementById("range");

range.addEventListener("input", (e) => {
  const value = +e.target.value;
  const label = e.target.nextElementSibling;

  //Both width variables gives us the respective width of range and label.
  const range_width = getComputedStyle(e.target).getPropertyValue("width");
  const label_width = getComputedStyle(label).getPropertyValue("width");

  //Removes the px off the range which is 300 & 80.
  const num_width = +range_width.substring(0, range_width.length - 2);
  const num_label_width = +label_width.substring(0, label_width.length - 2);

  //Value of min-max range for range bar.
  const min = +e.target.min;
  const max = +e.target.max;

  //Makes range number border follow range ball left/right.
  const left =
    value * (num_width / max) -
    num_label_width / 2 +
    scale(value, min, max, 10, -10);

  //Assigns a new value to the CSS left property.
  label.style.left = `${left}px`;

  //Adds value to inner html of the label element.
  label.innerHTML = value;
});

//Function to help us get min-max
const scale = (number, inMin, inMax, outMin, outMax) => {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};
