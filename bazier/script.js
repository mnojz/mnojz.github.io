window.addEventListener("load", () => {
  window.addEventListener("mousemove", (e) => {
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    //resizing
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    //playground
    let x1 = 100;
    let y1 = window.innerHeight / 2;
    let x2 = window.innerWidth - 100;
    let y2 = window.innerHeight / 2;
    let x;
    let y;
    let t = 0.02;

    x = e.clientX;
    y = e.clientY;

    context.lineWidth = 1;
    context.strokeStyle = "rgb(0,255,0)";

    context.beginPath();

    for (let i = 0; i <= 1.0001; i += t) {
      context.moveTo(lerp(x1, x, i), lerp(y1, y, i));
      context.lineTo(lerp(x, x2, i), lerp(y, y2, i));
    }

    context.stroke();
  });
});

function lerp(min, max, percent) {
  return min + (max - min) * percent;
}
