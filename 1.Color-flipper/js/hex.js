const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const colorText = document.querySelector(".hero__text");

btn.addEventListener("click", () => {
  let hexColor = "#";

  for (let i = 0; i < 6; i += 1) {
    hexColor += hex[onChangeBgColor()];
  }
  document.body.style.backgroundColor = hexColor;
  colorText.textContent = hexColor;
});

function onChangeBgColor() {
  return Math.floor(Math.random() * hex.length);
}
