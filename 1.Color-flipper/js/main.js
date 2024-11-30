const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const colorText = document.querySelector(".hero__text");

btn.addEventListener("click", () => {
  const randomColor = onChangeBgColor();
  colorText.textContent = colors[randomColor];
  document.body.style.backgroundColor = colors[randomColor];

  console.log(colors[getRandomNumber()]);
});

function onChangeBgColor() {
  return Math.floor(Math.random() * colors.length);
}
