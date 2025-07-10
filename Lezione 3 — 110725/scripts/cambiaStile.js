const box = document.getElementById("box");

const btnCambiaBg = document.getElementById("btn-cambia-bg");
btnCambiaBg.addEventListener("click", () => {
  box.style.backgroundColor = "red";
});

const btnCambiaBorder = document.getElementById("btn-cambia-border");
btnCambiaBorder.addEventListener("click", () => {
  box.style.border = "2px solid black";
});
