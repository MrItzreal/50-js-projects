const background = document.getElementById("background");
const password = document.getElementById("password");

//My version:
password.addEventListener("input", (e) => {
  const input = e.target.value;
  const length = input.length;
  background.style.filter = `blur(${20 - length * 2}px)`;
});

/*Instructor's version:
password.addEventListener("input", (e) => {
  const input = e.target.value;
  const length = input.length;
  const blurValue = 20 - length * 2;
  background.style.filter = `blur(${blurValue}px)`;
});
*/
