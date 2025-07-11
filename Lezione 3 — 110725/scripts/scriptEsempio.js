// SCRIPT ESEMPIO: aggiungere alla pagina un div che contiene due paragrafi, uno rosso e uno blu, seguito da una linea di separazione hr

// questa variabile contiene il riferimento al body della pagina, che ha l'id "container"
// ci serve per poter aggiungere nuovi elementi alla pagina
// se non creiamo questa variabile, dobbiamo usare document.body.appendChild(), invece di mainContainer.appendChild()
const mainContainer = document.getElementById("container");

// creo un div
const nuovoDiv = document.createElement("div");

// creo un paragrafo
const nuovoP1 = document.createElement("p");

// scrivo il testo del paragrafo
nuovoP1.textContent = "Questo è un paragrafo creato con JavaScript, modificato con style.";

// modifico lo stile con .style
nuovoP1.style.color = "red";

// aggiungo il paragrafo al div
nuovoDiv.appendChild(nuovoP1);

// creo un altro paragrafo (USARE CONST E UN NUOVO NOME PER OGNI ELEMENTO)
const nuovoP2 = document.createElement("p");
nuovoP2.textContent = "Questo è un altro paragrafo creato con JavaScript, modificato con classList.add().";

// aggiungo una classe al secondo paragrafo per stilizzarlo
nuovoP2.classList.add("blue-text");
nuovoDiv.appendChild(nuovoP2);

// aggiungo il div, che già contiene i due paragrafi, al body della pagina
mainContainer.appendChild(nuovoDiv);

// aggiungo una linea di separazione (hr) dopo il div
const nuovoHr = document.createElement("hr");
mainContainer.appendChild(nuovoHr);
