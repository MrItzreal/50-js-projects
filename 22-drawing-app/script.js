const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let size = 20;
let color = "white";
let x;
let y;

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
  ctx.lineWidth = size;
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
