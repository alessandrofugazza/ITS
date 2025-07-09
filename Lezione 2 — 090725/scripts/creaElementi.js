const listaGiaEsistente = document.getElementById("lista-gia-esistente");

const btnAggiungiInFondo = document.getElementById("btn-aggiungi-in-fondo");
btnAggiungiInFondo.addEventListener("click", () => {
  const nuovoElemento = document.createElement("li");
  nuovoElemento.textContent = "Nuovo li aggiunto in fondo.";
  listaGiaEsistente.appendChild(nuovoElemento);
});

const btnAggiungiAllInizio = document.getElementById("btn-aggiungi-all-inizio");
btnAggiungiAllInizio.addEventListener("click", () => {
  const nuovoElemento = document.createElement("li");
  nuovoElemento.textContent = "Nuovo li aggiunto all'inizio.";
  listaGiaEsistente.insertBefore(nuovoElemento, listaGiaEsistente.firstChild);
});
