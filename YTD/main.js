var link = document.querySelector(".link");
var format = document.querySelector(".format");
var dwnbtn = document.querySelector(".result2");
var r1 = document.querySelector(".result1");
var r2 = document.querySelector(".result2");

function download() {
  if (link.value != "") {
    if (link.value.indexOf("https://youtu.be/") != -1) {
      var url1 = link.value.replace("https://youtu.be/","https://www.youtube.com/embed/");

      r1.innerHTML = `<iframe width="100%" height="100%" src="${url1}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

      var url2 = `https://loader.to/api/button/?url=${link.value}&f=${format.value}`;

      r2.innerHTML += `<iframe scrolling="no" src="${url2}"></iframe>`;
    } 

    else if (link.value.indexOf("https://www.youtube.com/watch?v=") != -1) {
      var url1 = link.value.replace("https://www.youtube.com/watch?v=","https://www.youtube.com/embed/");

      r1.innerHTML = `<iframe width="100%" height="100%" src="${url1}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

      var u = link.value.replace("https://www.youtube.com/watch?v=","https://youtu.be/");
      var url2 = `https://loader.to/api/button/?url=${u}&f=${format.value}`;

      r2.innerHTML += `<iframe scrolling="no" src="${url2}"></iframe>`;
    } 
    
    else if (link.value.indexOf("https://youtube.com/shorts/") != -1) {
      var url1 = link.value.replace("https://youtube.com/shorts/","https://www.youtube.com/embed/");
      var u3 = url1.replace("?feature=share", "");
      r1.innerHTML = `<iframe width="100%" height="100%" src="${u3}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

      var u = link.value.replace("https://youtube.com/shorts/","https://youtu.be/");
      var u2 = u.replace("?feature=share", "");
      var url2 = `https://loader.to/api/button/?url=${u2}&f=${format.value}`;

      r2.innerHTML += `<iframe scrolling="no" src="${url2}"></iframe>`;
    }
    dwnbtn.style.backgroundColor = "#ff255c";
  }
}

