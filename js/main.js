// ```
// Chiedo all'utente numero di chilometri
// const myKm = parseInt(prompt("inserisci qui i chilometri"));
// Chiedo all'utente l'età
// const myAge = parseInt(prompt("inserisci qui l'età"));
const myKm = parseInt(30);
const myAge = parseInt(30);
//     VALIDAZIONE IN NUMERI
if (isNaN(myKm) || isNaN(myAge)) {
  alert("Required Real NUMBER");
}
console.log("myKm", myKm);
console.log("myAge", myAge);

// Calcolo il prezzo del tragitto in base ai km
console.log("costo al km", myKm * 0.21);
//     SE sotto i 18 sconto 20%
//     ALTRIMENTI SE sopra i 65 sconto 40%
//     ALTRIMENTI prezzo completo

//  Output prezzo in forma umana

// ```
