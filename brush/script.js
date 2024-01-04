const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.height = innerHeight;
canvas.width = innerWidth;

ctx.lineWidth = 5;
ctx.strokeStyle = '#88888844'

// ctx.globalCompositeOperation = 'lighter'

let drawing = false;

let angle = 0;

function brush(rad, inset, n, x, y) {
  ctx.beginPath();
  ctx.save();
  ctx.translate(x, y);
  ctx.moveTo(0, 0 - rad);
  for (let i = 0; i < n; i++) {
    ctx.lineTo(0, 0 - rad);
    ctx.rotate(Math.PI / n);
    ctx.lineTo(0, 0 - rad * inset);
    ctx.rotate(Math.PI / n);
  }
  ctx.restore();
  ctx.closePath();
  ctx.stroke();
  ctx.fill();
}
function clearScreen(){
  console.log("function called");
  ctx.clearRect(0,0,innerWidth,innerHeight);
}

canvas.addEventListener("mousedown", () => {
  drawing = true;
  document.querySelector("h1").style.display = "none";
});
canvas.addEventListener("mouseup", () => {
  drawing = false;
});
canvas.addEventListener("mousemove", (e) => {
  let radius = document.getElementById("radius").value;
  let inset = document.getElementById("inset").value;
  let n = document.getElementById("n").value;
  let color1 = document.getElementById("color1").value;
  let color2 = document.getElementById("color2").value;
  if (drawing) {
    ctx.save();
    ctx.translate(e.x, e.y);
    ctx.rotate(angle);
    angle++;
    ctx.fillStyle = color1;
    brush(radius, inset, n, 0, 0);
    ctx.fillStyle = color2;
    brush(10, 0.8, 20, 30, 30);
    ctx.restore();
  }
});

//===============================| canvas end here |======================================//
const sliders = document.querySelectorAll('.range-slider');

sliders.forEach(slider => {
  slider.addEventListener('input', function() {
    slider.setAttribute('data-value', slider.value);
  });
});
