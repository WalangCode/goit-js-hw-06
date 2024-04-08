let btn = document.querySelector(".change-color");
let spancolor = document.querySelector(".color");
btn.onclick = function () {
  let color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  spancolor.innerHTML = color;
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
