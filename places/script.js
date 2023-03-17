const video = document.querySelector("video");
document.addEventListener("keydown", (e) => {
  const tagName = document.activeElement.tagName.toLowerCase();

  if (tagName === "input") return;

  switch (e.key.toLowerCase()) {
    case " ":
      if (tagName === "button") return;
    case "k":
      togglePlay();
      break;
    case "m":
      toggleMute();
      break;
    case "arrowleft":
    case "j":
      skip(-5);
      break;
    case "arrowright":
    case "l":
      skip(5);
      break;
  }
});

var videoNumber = 1;
function next() {
  if ((videoNumber = 38)) {
    videoNumber = 0;
  }
  video.src = `assets/vdo/${++videoNumber}.mp4`;
}
function previous() {
  if ((videoNumber = 1)) {
    videoNumber = 39;
  }
  video.src = `assets/vdo/${--videoNumber}.mp4`;
}
function toggleMute() {
  video.muted = !video.muted;
}

function togglePlay() {
  video.paused ? video.play() : video.pause();
}
