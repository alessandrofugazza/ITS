const btnCambiaParagrafo = document.getElementById("btn-cambia-paragrafo");
btnCambiaParagrafo.addEventListener("click", () => {
  document.getElementById("paragrafo-1").textContent = "Paragrafo cambiato con getElementById.";
});

const btnCambiaParagrafi = document.getElementById("btn-cambia-paragrafi");
btnCambiaParagrafi.addEventListener("click", () => {
  const paragrafi = document.getElementsByClassName("classe-paragrafo");
  Array.from(paragrafi).forEach((paragrafo) => {
    paragrafo.textContent = "Paragrafo cambiato con getElementsByClassName.";
  });
});

const btnAggiungiClasse = document.getElementById("btn-aggiungi-classe");
btnAggiungiClasse.addEventListener("click", () => {
  document.querySelector(".classe-paragrafo").classList.add("classe-aggiunta-con-querySelector");
});

const btnAggiungiClassi = document.getElementById("btn-aggiungi-classi");
btnAggiungiClassi.addEventListener("click", () => {
  document.querySelectorAll(".classe-paragrafo").forEach((paragrafo) => {
    paragrafo.classList.add("classe-aggiunta-con-querySelector-all");
  });
});

const btnSelezionaP = document.getElementById("btn-seleziona-p");
btnSelezionaP.addEventListener("click", () => {
  const paragrafi = document.getElementsByTagName("p");
  Array.from(paragrafi).forEach((paragrafo) => {
    paragrafo.textContent = "Paragrafo cambiato con getElementsByTagName.";
  });
});
