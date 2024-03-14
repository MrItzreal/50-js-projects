const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Global Variables
let size = 20;
let isPressed = false;
let color = "white";
let x;
let y;

canvas.addEventListener("mousedown", (e) => {
  isPressed = true;

  //position of where the mouse is
  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener("mouseup", (e) => {
  isPressed = false;

  //when unclick the mouse it clears position
  x = "undefined";
  y = undefined;
});

canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);

    x = x2;
    y = y2;
  }
});

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}

// drawCircle(100, 200);
//Meaning of the 4 numbers in drawLine():
//1st 2 numbers are where you move to: x,y axis,
//last 2 numbers is where you actually draw.
// drawLine(300, 300, 400, 500);

//NOTES:
// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API
// The fillStyle property makes the rectangle green.
// The fillRect() method places its top-left corner at (10, 10),
// and gives it a size of 150 units wide by 100 tall.
// Ex: ctx.fillRect(10, 10, 150, 100);
