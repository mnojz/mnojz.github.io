const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let mouseX;
let mouseY;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

window.addEventListener("mousemove", (e) => {
  mouseY = parseFloat(e.clientY);
  mouseX = parseFloat(e.clientX);
});

let cr = new creature();

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  cr.update(mouseX, mouseY);
  cr.display();
}

animate();
