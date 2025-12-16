// ```
// Chiedo all'utente numero di chilometri
// const myKm = parseInt(prompt("inserisci qui i chilometri"));
// Chiedo all'utente l'età
// const myAge = parseInt(prompt("inserisci qui l'età"));
const myKm = parseInt(30);
const myAge = parseInt(19);
//     VALIDAZIONE IN NUMERI
if (isNaN(myKm) || isNaN(myAge)) {
  alert("Required Real NUMBER");
}
console.log("myKm", myKm);
console.log("myAge", myAge);

// Calcolo il prezzo del tragitto in base ai km
let myPrice = myKm * 0.21;
console.log("costo al km", myPrice);
//     SE sotto i 18 sconto 20%
if (myAge < 18) {
  alert("il prezzo è questo" + " = " + (myPrice * 20) / 100);
} else {
  alert("il prezzo è questo" + " = " + myPrice);
}
//     ALTRIMENTI SE sopra i 65 sconto 40%
//     ALTRIMENTI prezzo completo

//  Output prezzo in forma umana

// ```
