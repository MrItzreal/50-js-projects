const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  //starts the counter w/ a string of "0"
  counter.innerText = "0";

  //updateCounter updates the count.
  //+ next to the counter converts from string to number.
  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const c = +counter.innerText;

    //increment controls the speed-count
    //lower the number faster the count
    const increment = target / 200;

    //c < target because we don't want to surpass.
    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      //setTimeout sets how soon to start count
      //higher number slower count
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});

//Math.ceil() rounds a number UP to the nearest integer.
//It returns the SMALLEST integer greater than or equal
//to the given number.

//Math.floor() rounds a number DOWN to the nearest integer.
//it returns the LARGEST integer less than
//or equal to the given number.
