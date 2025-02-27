document.addEventListener("DOMContentLoaded", () => {
  let path = document.querySelectorAll(".path");

  path.forEach((item, index) => {
    let length = item.getTotalLength();
    item.style.strokeDasharray = length;
    item.style.strokeDashoffset = length;
  });
});
