function initTowerOfHanoi(n) {
  const tower1 = document.getElementById("tower-1");
  const tower2 = document.getElementById("tower-2");
  const tower3 = document.getElementById("tower-3");
  const minWidth = 100;
  const maxWidth = 280;

  // Remove only previous discs from tower-1
  tower1.querySelectorAll(".disc").forEach((d) => d.remove());
  tower2.querySelectorAll(".disc").forEach((d) => d.remove());
  tower3.querySelectorAll(".disc").forEach((d) => d.remove());

  for (let i = 1; i <= n; i++) {
    const disc = document.createElement("div");
    disc.classList.add("disc");
    disc.dataset.index = i;

    const width = minWidth + ((i - 1) * (maxWidth - minWidth)) / (n - 1);
    disc.style.width = `${width}px`;

    tower1.appendChild(disc);
  }
}

function moveDisc(fromTower, toTower) {
  const fromTop = getTopDisc(fromTower);
  const toTop = getTopDisc(toTower);

  if (!fromTop) return; // nothing to move

  const fromIndex = parseInt(fromTop.dataset.index);
  const toIndex = toTop ? parseInt(toTop.dataset.index) : Infinity;

  if (fromIndex < toIndex) {
    toTower.prepend(fromTop); // Place it at the top (before all others)
    if (checkWin()) {
      showMessage("🎉 You won!", 5000);
    }
  } else {
    console.log("Invalid move!");
    showMessage("❌ Invalid move!");
  }
}

function getTopDisc(tower) {
  const discs = [...tower.querySelectorAll(".disc")];
  return discs.sort((a, b) => a.dataset.index - b.dataset.index)[0] || null;
}

function showMessage(message, timeout = 1000) {
  const messageBox = document.querySelector(".message");
  messageBox.textContent = message;

  setTimeout(() => {
    messageBox.textContent = "";
  }, timeout);
}

function checkWin() {
  const finalTower = document.getElementById("tower-3");
  const discs = [...finalTower.querySelectorAll(".disc")];
  const n = document.querySelectorAll(".disc").length;

  if (discs.length !== n) return false;

  for (let i = 0; i < n - 1; i++) {
    const current = parseInt(discs[i].dataset.index);
    const next = parseInt(discs[i + 1].dataset.index);
    if (current > next) return false; // out of order
  }

  return true;
}

initTowerOfHanoi(3);

let selectedTower = null;

document.querySelectorAll(".tower").forEach((tower) => {
  tower.addEventListener("click", () => {
    if (!selectedTower) {
      selectedTower = tower;
    } else {
      moveDisc(selectedTower, tower);
      selectedTower = null;
    }
  });
});

// recursively generate moves.

let moves = [];

function generateMoves(n, from, to, aux) {
  if (n === 0) return;
  generateMoves(n - 1, from, aux, to);
  moves.push([from, to]);
  generateMoves(n - 1, aux, to, from);
}

// autoplay

function AutoPlay() {
  const speed = document.getElementById("autoplaySpeed").value; // 0–100
  const delay = 1000 - speed * 9; // Speed range → delay range (1000 to 100 ms)

  const towerIds = ["tower-1", "tower-2", "tower-3"];

  moves = [];
  const n = document.querySelectorAll("#tower-1 .disc").length;
  generateMoves(n, 0, 2, 1); // tower indices

  let i = 0;

  function nextMove() {
    if (i >= moves.length) return;

    const [from, to] = moves[i++];
    moveDisc(document.getElementById(towerIds[from]), document.getElementById(towerIds[to]));

    setTimeout(nextMove, delay);
  }

  nextMove();
}
