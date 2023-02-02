var link = document.querySelector(".link");
var format = document.querySelector(".format");
var dwnbtn = document.querySelector(".result2");
var r1 = document.querySelector(".result1");
var r2 = document.querySelector(".result2");
var css = "https://hello-manoj.github.io/extracss/api.css";
var buttonColor = "3d2c93";
function download() {
  if (link.value != "") {
    if (link.value.indexOf("https://youtu.be/") != -1) {
      var url1 = link.value.replace("https://youtu.be/", "https://www.youtube.com/embed/");
      r1.innerHTML = `<iframe id="myframe" width="105%" height="105%" src="${url1}" encrypted-media; allowfullscreen></iframe>`;
      var url2 = `https://loader.to/api/button/?url=${link.value}&f=${format.value}&color=${buttonColor}&css=${css}`;
      r2.innerHTML += `<iframe scrolling="no" src="${url2}"></iframe>`;
      dwnbtn.style.backgroundColor = "#3d2c93";
    } else if (link.value.indexOf("https://www.youtube.com/watch?v=") != -1) {
      var url1 = link.value.replace("https://www.youtube.com/watch?v=", "https://www.youtube.com/embed/");
      r1.innerHTML = `<iframe id="myframe" width="105%" height="105%" src="${url1}" encrypted-media; allowfullscreen></iframe>`;
      var u = link.value.replace("https://www.youtube.com/watch?v=", "https://youtu.be/");
      var url2 = `https://loader.to/api/button/?url=${u}&f=${format.value}&color=${buttonColor}&css=${css}`;
      r2.innerHTML += `<iframe scrolling="no" src="${url2}"></iframe>`;
      dwnbtn.style.backgroundColor = "#3d2c93";
    } else if (link.value.indexOf("https://youtube.com/shorts/") != -1) {
      var url1 = link.value.replace("https://youtube.com/shorts/", "https://www.youtube.com/embed/");
      var u3 = url1.replace("?feature=share", "");
      r1.innerHTML = `<iframe id="myframe" width="105%" height="105%" src="${u3}" encrypted-media; allowfullscreen></iframe>`;
      var u = link.value.replace("https://youtube.com/shorts/", "https://youtu.be/");
      var u2 = u.replace("?feature=share", "");
      var url2 = `https://loader.to/api/button/?url=${u2}&f=${format.value}&color=${buttonColor}&css=${css}`;
      r2.innerHTML += `<iframe scrolling="no" src="${url2}"></iframe>`;
      dwnbtn.style.backgroundColor = "#3d2c93";
    }
  }
}
