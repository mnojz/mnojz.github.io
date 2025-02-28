const apiKey = "b7cd39caff6527afc7aa786072ff7edfd051788b"; // my loader's api

const dropIcon = document.getElementById("dropIcon");
const formatList = document.querySelector(".formatGroup");
const formatText = document.getElementById("formatText");
const progressMain = document.getElementById("progress");
const progressDiv = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");
const resultBox = document.querySelector(".result");
const thumbnail = document.querySelector(".thumbnail");
const type = document.querySelector(".type");
const title = document.querySelector(".title");
const urlText = document.querySelector(".resultUrl");

let format = "720";
let progressInterval = 2000; // 2 seconds

// const apiKey = "dfcb6d76f2f6a9894gjkege8a4ab232222"; // ddowner's api

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

//================================================================================
//-------------------[Main downloading logic here]--------------------------------
//================================================================================

function startDownload() {
  const url = document.getElementById("videoUrl").value.trim();
  const apiUrl = `https://loader.to/ajax/download.php?&format=${format}&url=${encodeURIComponent(url)}&api=${apiKey}`;

  fetch(apiUrl, { cache: "no-store" })
    .then((res) => res.json())
    .then((data) => {
      if (data.success) {
        const downloadId = data.id;
        resultBox.style.display = "flex";
        type.innerHTML = format == parseInt(format) ? format + "p" : format;
        thumbnail.style.backgroundImage = `url("${decodeURIComponent(data.info.image)}")`;
        title.innerHTML = data.title;
        urlText.innerHTML = url;
        // console.log("video content:", atob(data.content)); //this thing return the whole html code for maybe card to download video
        trackDownloadProgress(downloadId);
        if (data.progress === 1000) {
          clearInterval(interval);
          console.log("Download completed. without progressing");
          updateProgress(100);
        }
      } else {
        console.log("Error:", data);
        progressText.innerHTML = "Failed to start download.";
      }
    })
    .catch((err) => {
      console.log("Request Error:", err);
      progressText.innerHTML = "Error occurred.";
    });
}

function trackDownloadProgress(downloadId) {
  // Initialize UI elements
  progressMain.style.display = "block";
  progressDiv.style.width = "0%";
  progressDiv.dataset.downp = 0;
  progressDiv.dataset.convp = 0;
  progressDiv.innerHTML = "";
  progressText.innerHTML = "starting...";

  const fetchWithTimeout = (url, options, timeout = 2000) => {
    return Promise.race([fetch(url, options), new Promise((_, reject) => setTimeout(() => reject(new Error("Request timed out")), timeout))]);
  };

  fetchWithTimeout(`https://p.oceansaver.in/ajax/progress.php?id=${downloadId}`, { cache: "no-store" })
    .then((response) => response.json())
    .then((data) => {
      const responseText = data?.text || "";
      if (responseText.toLowerCase() === "finished" || responseText.toLowerCase() === "error" || data.success === 1) {
        progressDiv.style.width = "100%";
        if (data.success === 1 && data.download_url === null && data.text) {
          progressText.innerHTML = data.text;
          return;
        }
      }

      if (responseText.toLowerCase() === "downloading") {
        let downP = data.progress / 10;
        let prevDownP = progressDiv.dataset.downp || 0;
        let currentDownP = parseFloat((downP > prevDownP ? downP : prevDownP) + "").toFixed(2);

        progressDiv.style.width = currentDownP + "%";
        progressDiv.dataset.downp = currentDownP;
        progressText.innerText = `Download in Progress ... ${currentDownP}%`;
      } else if (responseText.toLowerCase() === "converting") {
        let convP = data.progress / 10;
        let prevConvP = progressDiv.dataset.convp || 0;
        let currentConvP = parseFloat((convP > prevConvP ? convP : prevConvP) + "").toFixed(2);

        progressDiv.style.width = currentConvP + "%";
        progressDiv.dataset.downp = currentConvP;
        progressText.innerText = `Converting ...`;
      } else if (data.success == 1 && data.download_url == null) {
        progressDiv.style.width = "100%";
        progressText.innerHTML = errorText;
        return;
      }

      if (responseText.toLowerCase() === "finished") {
        progressDiv.innerHTML = `<a href="${data.download_url}" target="_blank" class="downloadBtn" >Click here to download</a>`;
        progressText.innerHTML = " ";
        return;
      }
    })
    .catch((error) => {
      console.error(error);
    });
}
