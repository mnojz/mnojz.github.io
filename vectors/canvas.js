const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.height = canvas.offsetHeight;
canvas.width = canvas.offsetWidth;

// ctx.translate(canvas.width / 2, canvas.height / 2);
ctx.setTransform(1, 0, 0, -1, (canvas.width/2), (canvas.height/2));

// creating cartesian coordinate plane
//====================================
function drawGrid(){
  // thin grid
  for (let i = -350; i < 350; i += 10) {
    ctx.beginPath();
    ctx.strokeStyle = "#2c324e20";
    ctx.lineWidth = 1;
    ctx.moveTo(i, -250);
    ctx.lineTo(i, 250);
    ctx.stroke();
  }
  for (let i = -250; i < 250; i += 10) {
    ctx.beginPath();
    ctx.strokeStyle = "#2c324e20";
    ctx.lineWidth = 1;
    ctx.moveTo(-350, i);
    ctx.lineTo(350, i);
    ctx.stroke();
  }

  // thick grid

  for (let i = -350; i < 350; i += 50) {
    ctx.beginPath();
    ctx.strokeStyle = "#2c324e70";
    ctx.lineWidth = 1;
    ctx.moveTo(i, -250);
    ctx.lineTo(i, 250);
    ctx.stroke();
  }
  for (let i = -250; i < 250; i += 50) {
    ctx.beginPath();
    ctx.strokeStyle = "#2c324e70";
    ctx.lineWidth = 1;
    ctx.moveTo(-350, i);
    ctx.lineTo(350, i);
    ctx.stroke();
  }

  // axes
  {
    // curly braces help to organize code into blocks they dont do anything special
    ctx.beginPath();
    ctx.strokeStyle = "#2c324e90";
    ctx.lineWidth = 2;
    ctx.moveTo(0, -250);
    ctx.lineTo(0, 250);
    ctx.moveTo(-350, 0);
    ctx.lineTo(350, 0);
    ctx.stroke();
    ctx.closePath();
  }
}
drawGrid();
//====================================
{
  function drawArrowhead(x, y, angle, color) {
    ctx.fillStyle = color;
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle - Math.PI / 2);
    ctx.beginPath();
    ctx.moveTo(0, 5);
    ctx.lineTo(-5, -5);
    ctx.lineTo(5, -5);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  function drawArrow(x1, y1, x2, y2, color) {
    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    const angle = Math.atan2(y2 - y1, x2 - x1);
    drawArrowhead(x2, y2, angle, color);
  }
}

function graph() {
  ctx.clearRect(-325,-250,canvas.width,canvas.height);
  drawGrid();
  let xa = document.getElementById("xa").value;
  let ya = document.getElementById("ya").value;

  let xb = document.getElementById("xb").value;
  let yb = document.getElementById("yb").value;

  let resX = parseInt(xa)+parseInt(xb);
  let resY = parseInt(ya)+parseInt(yb);

  drawArrow(0, 0, xa, ya, "#1ee5ff");
  drawArrow(0, 0, xb, yb, "#ff477e");
  drawArrow(0, 0, resX, resY, "#ff7b41");
}
