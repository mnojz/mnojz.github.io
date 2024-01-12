const powerBtn = document.querySelector("#pwr");
const ind = document.querySelector(".ind");
const gainValue = document.getElementById("gain");
const freqValue = document.getElementById("freq");
const display = document.querySelector(".display");

let on = false;
let audioCtx;
let oscillator;
let gainNode;

powerBtn.onclick = () => {
  if (!on) {
    audioCtx = new AudioContext();
    oscillator = new OscillatorNode(audioCtx);
    gainNode = new GainNode(audioCtx);
    oscillator.type = "sine";
    oscillator.frequency.value = parseInt(freqValue.value);
    oscillator.connect(gainNode);
    gainNode.gain.value = gainValue.value / 100;
    gainNode.connect(audioCtx.destination);
    oscillator.start(0);
    console.log("engine starting");
    on = !on;
    powerBtn.style.color = "#00ff95";
    powerBtn.style.borderColor = "#00ff95";
    ind.style.backgroundColor = "#00ff95";
    freqValue.removeAttribute("disabled");
    gainValue.removeAttribute("disabled");
  } else {
    audioCtx.close();
    console.log("engine shutting down");
    on = !on;
    powerBtn.style.color = "#d3d3d38f";
    powerBtn.style.borderColor = "#d3d3d38f";
    ind.style.backgroundColor = "#00ff9575";
    freqValue.setAttribute("disabled","true");
    gainValue.setAttribute("disabled","true");
  }
};

gainValue.oninput = function () {
  console.log(parseFloat(this.value / 100));
  gainNode.gain.setValueAtTime(gainNode.gain.value, audioCtx.currentTime);
  gainNode.gain.linearRampToValueAtTime(
    parseFloat(this.value / 100),
    audioCtx.currentTime + 0.1
  );
};

freqValue.oninput = function () {
  console.log(parseInt(this.value));
  oscillator.frequency.setValueAtTime(
    oscillator.frequency.value,
    audioCtx.currentTime
  );
  oscillator.frequency.linearRampToValueAtTime(
    this.value,
    audioCtx.currentTime + 0.1
  );
  display.innerHTML = parseInt(freqValue.value) + " Hz";
};