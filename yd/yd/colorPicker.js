const pickButton = document.querySelector(".color-button");
const pickBox = document.querySelector(".color-picker");
const canvas = document.getElementById("colorWheel");
const ctx = canvas.getContext("2d");

canvas.height = 160;
canvas.width = 160;

ctx.imageSmoothingEnabled = true; // Enable anti-aliasing

let isVisible = false;
function togglePickerVisibility() {
  pickBox.style.visibility = isVisible ? "hidden" : "visible";
  isVisible = !isVisible;
}

function getBrightness(color) {
  const rgb = color.match(/\d+/g).map(Number); // Extract RGB values
  return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]; // luminance formula
}

function updateAccentContrast(color) {
  const brightness = getBrightness(color);
  const contrastColor = brightness > 128 ? "#000000" : "#ffffff"; // Choose black for bright, white for dark
  const accentContrast = brightness > 128 ? "#000000" : "#ffffff"; // Set accentContrast to black or white
  document.documentElement.style.setProperty("--accentContrast", accentContrast); // Update --accentContrast variable
  document.body.style.color = contrastColor; // Change text color for better readability
}

// Offscreen buffer to store the static parts of the color wheel
const bufferCanvas = document.createElement("canvas");
bufferCanvas.width = 160;
bufferCanvas.height = 160;
const bufferCtx = bufferCanvas.getContext("2d");

function drawOuterColorWheel(ctx) {
  const gradientCanvas = document.createElement("canvas");
  gradientCanvas.width = 160;
  gradientCanvas.height = 160;
  const gCtx = gradientCanvas.getContext("2d");

  const gradient = gCtx.createConicGradient(0, 80, 80);
  gradient.addColorStop(0 * 0.1666, "#ff0000");
  gradient.addColorStop(1 * 0.1666, "#ffff00");
  gradient.addColorStop(2 * 0.1666, "#00ff00");
  gradient.addColorStop(3 * 0.1666, "#00ffff");
  gradient.addColorStop(4 * 0.1666, "#0000ff");
  gradient.addColorStop(5 * 0.1666, "#ff00ff");
  gradient.addColorStop(6 * 0.1666, "#ff0000");

  gCtx.fillStyle = gradient;
  gCtx.fillRect(0, 0, 160, 160);

  ctx.beginPath();
  ctx.arc(80, 80, 80, 0, Math.PI * 2);
  ctx.closePath();
  ctx.clip();
  ctx.drawImage(gradientCanvas, 0, 0);

  ctx.fillStyle = "#191a1e";
  ctx.beginPath();
  ctx.arc(80, 80, 70, 0, Math.PI * 2);
  ctx.closePath();
  ctx.fill();
}

function drawInnerColorWheel(ctx, endColor) {
  const lGradient = ctx.createLinearGradient(0, 0, 0, 160);
  lGradient.addColorStop(0, "#ffffff");
  lGradient.addColorStop(1, endColor);

  ctx.fillStyle = lGradient;
  ctx.beginPath();
  ctx.arc(80, 80, 50, 0, 2 * Math.PI);
  ctx.closePath();
  ctx.fill();
}

function drawKnob(ctx, x, y) {
  ctx.beginPath();
  ctx.arc(x, y, 5, 0, Math.PI * 2);
  ctx.strokeStyle = "white";
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.closePath();
}

function getColorAt(x, y) {
  const pixel = ctx.getImageData(x, y, 1, 1).data;
  return `rgb(${pixel[0]}, ${pixel[1]}, ${pixel[2]})`;
}

// Get the stored accent color from localStorage
const storedAccentColor = localStorage.getItem("accentColor");

let innerGradientEndColor = "#ff0000";
let accentColor;
let angle = 0;
let innerKnobY = 80;
let draggingKnob = null;

// Draw static elements once on the buffer
drawOuterColorWheel(bufferCtx);

// Apply the stored accent color (if exists) immediately on page load
if (storedAccentColor) {
  accentColor = storedAccentColor;
} else {
  accentColor = "#6c5ce7"; // Default color
}

// Set the accent color immediately when the page loads
document.documentElement.style.setProperty("--accent", accentColor);

function draw() {
  ctx.clearRect(0, 0, 160, 160);

  // Draw from the buffer to avoid re-rendering the color wheels
  ctx.drawImage(bufferCanvas, 0, 0);
  drawInnerColorWheel(ctx, innerGradientEndColor);

  // Compute knob positions
  const knobX = 80 + 75 * Math.cos(angle);
  const knobY = 80 + 75 * Math.sin(angle);

  drawKnob(ctx, knobX, knobY);
  drawKnob(ctx, 80, innerKnobY);

  document.documentElement.style.setProperty("--accent", accentColor);
  updateAccentContrast(accentColor);
}

// Mouse events to rotate the knob
canvas.addEventListener("mousedown", (event) => {
  const { offsetX, offsetY } = event;
  const dx = offsetX - 80;
  const dy = offsetY - 80;
  const distance = Math.sqrt(dx * dx + dy * dy);

  if (distance >= 70 && distance <= 80) {
    draggingKnob = "outer";
  } else if (distance < 50) {
    draggingKnob = "inner";
  }
});

canvas.addEventListener("mousemove", (event) => {
  if (draggingKnob) {
    const { offsetX, offsetY } = event;
    const dx = offsetX - 80;
    const dy = offsetY - 80;

    if (draggingKnob === "outer") {
      angle = Math.atan2(dy, dx);
    } else if (draggingKnob === "inner") {
      innerKnobY = Math.max(80 - 49, Math.min(80 + 49, offsetY));
    }

    // After calculating the new position of the inner knob, get the new inner color
    const outerColor = getColorAt(80 + 75 * Math.cos(angle), 80 + 75 * Math.sin(angle));
    const innerColor = getColorAt(80, innerKnobY);

    innerGradientEndColor = outerColor;
    // Set the accent color to the inner color
    accentColor = innerColor;

    // Update the CSS variable for --accent
    document.documentElement.style.setProperty("--accent", accentColor);

    localStorage.setItem("accentColor", accentColor);

    updateAccentContrast(accentColor);

    draw();
  }
});

canvas.addEventListener("mouseup", () => (draggingKnob = null));

draw();

document.addEventListener("click", (event) => {
  const isClickInsidePickBox = pickBox.contains(event.target);
  const isClickOnPickButton = pickButton.contains(event.target);

  // If the click is outside the pickBox and pickButton, toggle the picker visibility
  if (!isClickInsidePickBox && !isClickOnPickButton) {
    isVisible = false;
    pickBox.style.visibility = "hidden";
  }
});
