let format = "720";

const apiKey = "dfcb6d76f2f6a9894gjkege8a4ab232222";

const dropIcon = document.getElementById("dropIcon");
const formatList = document.querySelector(".formatGroup");
const formatText = document.getElementById("formatText");
const progressMain = document.getElementById("progress");
const progressDiv = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");

formatList.style.visibility = "hidden";

function showFormats() {
  if (formatList.style.visibility === "hidden") {
    formatList.style.visibility = "visible";
    dropIcon.style.transform = "rotate(180deg)";
  } else {
    formatList.style.visibility = "hidden";
    dropIcon.style.transform = "rotate(0deg)";
  }
}

function setFormat(formatValue) {
  format = formatValue;
  if (format == parseInt(format)) {
    formatText.innerHTML = format == 1440 ? "2k" : format + "p";
  } else {
    formatText.innerHTML = format;
  }
  showFormats();
}

function startDownload() {
  const url = document.getElementById("videoUrl").value;

  fetch(
    `https://loader.to/ajax/download.php?format=${format}&url=${encodeURIComponent(
      url
    )}&api=${apiKey}`
  )
    .then((res) => res.json())
    .then((data) => {
      if (data.success) {
        const downloadId = data.id;
        trackDownloadProgress(downloadId);
      } else {
        console.log("Error:", data);
        document.getElementById("progress").innerHTML =
          "Failed to start download.";
      }
    })
    .catch((err) => {
      console.log("Request Error:", err);
      document.getElementById("progress").innerHTML = "Error occurred.";
    });
}

function trackDownloadProgress(downloadId) {
  progressMain.style.display = "block";
  progressDiv.style.width = "0%";
  progressText.innerHTML = "";

  const interval = setInterval(() => {
    fetch(`https://p.oceansaver.in/ajax/progress.php?id=${downloadId}`)
      .then((res) => res.json())
      .then((data) => {
        const progress = data.progress / 10;
        progressDiv.style.width = `${progress}%`;
        progressText.innerHTML = `Downloading ${progress}%`;

        console.log(progress);

        if (data.progress === 1000) {
          clearInterval(interval);
          progressText.innerHTML = " ";
          progressDiv.innerHTML = `<a href="${data.download_url}" target="_blank" class="downloadBtn" >Click here to download</a>`;
        }
      })
      .catch((err) => console.log("Error:", err));
  }, 1000);
}
