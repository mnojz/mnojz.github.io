const canvas = document.getElementById("canvas");
// /** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext("2d");

canvas.height = canvas.offsetHeight;
canvas.width = canvas.offsetWidth;

// ctx.translate(canvas.width / 2, canvas.height / 2);
ctx.setTransform(1, 0, 0, -1, canvas.width / 2, canvas.height / 2);

//=======================================================================
//=======================================================================

let λ = 0.05; //wavelength
let f = 0.6; //frequency
let Φ = 0; //phase initialize

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(-canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);

  let f = document.getElementById("freq-slider").value; //frequency of wave
  let power = document.getElementById("pwr").checked;

  console.log(power);

  A = f == 0 || !power ? 0 : 80;

  ctx.strokeStyle = "#00aeff";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(-canvas.width / 2 - 1, 0);
  for (let i = -canvas.width / 2 - 1; i < canvas.width / 2; i++) {
    ctx.lineTo(i, Math.sin(i * λ + Φ) * A);
  }
  ctx.stroke();
  Φ += f / 100;
  λ = f / 10000;
}
animate();
