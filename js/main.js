// Pari e Dispari L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

// Consigli del giorno
// Scriviamo sempre in italiano i passaggi che vogliamo fare
// Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.

// Domande da farsi quando si crea una funzione:
// Come dovrebbe chiamarsi?
// Ho bisogno di parametri?
// Devo restituire un valore?
// Se sì, di che tipo?

// Chiedere all’utente di inserire una parola

const ask = prompt("inserire parola");
console.log(ask);

// per determinare se una parola è uguale da un lato e dall'altro come posso fare?
let wordReverse = "";

for (let i = ask.length; i >= 0; i--) {
  const wordResult = ask.charAt(i);
  console.log(wordResult);
  wordReverse = wordReverse + wordResult;
}
console.log(wordReverse);

// SE (ask è === ) log. ok ALTRIMENTI log. no
if (ask === wordReverse) {
  console.log("è pali!");
} else {
  console.log("no pali :(");
}

// Creare una funzione per capire se la parola inserita è palindroma
