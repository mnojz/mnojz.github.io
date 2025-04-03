const powerBtn = document.getElementById("pwr");
const freqValue = document.getElementById("freq-slider");
const freqEntry = document.getElementById("freq-entry");

const freqIncrement = document.querySelector(".forward");
const freqDecrement = document.querySelector(".backward");

let audioCtx;
let oscillator;

powerBtn.onclick = () => {
  if (powerBtn.checked) {
    audioCtx = new AudioContext();
    oscillator = new OscillatorNode(audioCtx);
    oscillator.type = "sine";
    oscillator.frequency.value = parseInt(freqValue.value);
    oscillator.connect(audioCtx.destination);
    oscillator.start(0);
    console.log("engine starting");

    freqValue.removeAttribute("disabled");
    freqEntry.removeAttribute("disabled");
    freqIncrement.removeAttribute("disabled");
    freqDecrement.removeAttribute("disabled");
  } else {
    audioCtx.close();
    console.log("engine shutting down");
    freqValue.setAttribute("disabled", "true");
  }
};

freqValue.oninput = function () {
  oscillator.frequency.setValueAtTime(oscillator.frequency.value, audioCtx.currentTime);
  oscillator.frequency.linearRampToValueAtTime(this.value, audioCtx.currentTime + 0.1);
  freqEntry.value = parseInt(freqValue.value);
};

freqEntry.oninput = function () {
  oscillator.frequency.setValueAtTime(oscillator.frequency.value, audioCtx.currentTime);
  oscillator.frequency.linearRampToValueAtTime(this.value, audioCtx.currentTime + 0.1);
  if (freqEntry.value) {
    freqValue.value = parseInt(freqEntry.value);
  } else {
    freqValue.value = 0;
  }
};

function decreaseFrequency() {
  if (freqValue.value > 0) {
    freqEntry.value--;
    freqValue.value--;
    oscillator.frequency.setValueAtTime(oscillator.frequency.value, audioCtx.currentTime);
    oscillator.frequency.linearRampToValueAtTime(freqValue.value, audioCtx.currentTime + 0.1);
  }
}

function increaseFrequency() {
  if (freqValue.value < 20000) {
    freqEntry.value++;
    freqValue.value++;
    oscillator.frequency.setValueAtTime(oscillator.frequency.value, audioCtx.currentTime);
    oscillator.frequency.linearRampToValueAtTime(freqValue.value, audioCtx.currentTime + 0.1);
  }
}
