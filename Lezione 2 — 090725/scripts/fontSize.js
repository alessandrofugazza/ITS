const btnDiminuisciFont = document.getElementById("btn-diminuisci-font");
const btnAumentaFont = document.getElementById("btn-aumenta-font");

btnDiminuisciFont.addEventListener("click", () => {
  const currentSize = parseFloat(getComputedStyle(document.body).fontSize);
  document.body.style.fontSize = currentSize - 1 + "px";
});
btnAumentaFont.addEventListener("click", () => {
  const currentSize = parseFloat(getComputedStyle(document.body).fontSize);
  document.body.style.fontSize = currentSize + 1 + "px";
});
