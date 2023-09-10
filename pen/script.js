//variables

var color = "rgb(255, 0, 96)";
var bColor = "#000027";
let strokeSize = 2;

const penSize = document.getElementById("penSize");

//=============================================================
//for moving controls on screen    (disabled for this version) |
/*const box = document.querySelector(".controls");             |
        function onDrag({movementX, movementY}){                       |
            console.log(movementX, movementY);                         |
            let getstyle = window.getComputedStyle(box);               |
            let left = parseInt(getstyle.left);                        |
            let top = parseInt(getstyle.top);                          |
            box.style.left = left + movementX +'px';                   |
            box.style.top = top + movementY +'px';                     |
        }                                                              |
                                                                       |
        box.addEventListener('mousedown', () => {                      |
            box.addEventListener('mousemove', onDrag);                 |
        });                                                            |
                                                                       |
        document.addEventListener('mouseup', () => {                   |
            box.removeEventListener('mousemove', onDrag);              |
        });                                                            |
       */ //                                                            |
//=============================================================

function fetch(element) {
  color = element.value;
}
function change_color(element) {
  color = element.style.background;
}


function pen() {
  if (color == bColor) {
    color = "rgb(255, 0, 96)";
  }
  console.log("pen function running.");
  strokeSize = 2;
  document.querySelector("#canvas").style.cursor = "crosshair";
}
function hilighter() {
  if (color == bColor) {
    color = "rgb(255, 0, 96)";
  }  
  console.log("hilighter function working");
  strokeSize = 50;
  document.querySelector("#canvas").style.cursor = "text";
}
function erase() {
  console.log("eraser running.");
  color = bColor;
  strokeSize = 30;
  document.querySelector("#canvas").style.cursor =
    'url("https://hello-manoj.github.io/board/eraser.png") 12 12,auto';
}

penSize.addEventListener("input",()=>{
  strokeSize = penSize.value;
  document.querySelector(".pen-tip").style.height = strokeSize + "px";
  document.querySelector(".pen-tip").style.width = strokeSize + "px";
  console.log(strokeSize);
});

window.addEventListener("load", () => {
  const canvas = document.querySelector("#canvas");
  const ctx = canvas.getContext("2d");
  //resizing
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  //write code from below here === === === === === === ===
  //drawing
  let painting = false;

  function startPosition() {
    painting = true;
  }

  function endPosition() {
    painting = false;
    ctx.beginPath();
  }

  function draw(e) {

    if (!painting) return;
    ctx.strokeStyle = color;
    ctx.lineWidth = strokeSize;
    ctx.lineCap = "round";
    if (e.type == "touchmove") {
      ctx.lineTo(e.touches[0].clientX, e.touches[0].clientY);
    } else if (e.type == "mousemove") {
      ctx.lineTo(e.clientX, e.clientY);
    }

    ctx.stroke();
    ctx.beginPath();
    if (e.type == "touchmove") {
      ctx.moveTo(e.touches[0].clientX, e.touches[0].clientY);
    } else if (e.type == "mousemove") {
      ctx.moveTo(e.clientX, e.clientY);
    }
  }

  canvas.addEventListener("mousedown", startPosition);
  canvas.addEventListener("touchstart", startPosition);
  canvas.addEventListener("mouseup", endPosition);
  canvas.addEventListener("touchend", endPosition);
  canvas.addEventListener("mousemove", draw);
  canvas.addEventListener("touchmove", draw);
});

function clrscr() {
  var canvas = document.querySelector("#canvas");
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = bColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fill();
}
