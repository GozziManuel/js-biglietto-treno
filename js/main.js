// ```
// Chiedo all'utente numero di chilometri
const myKm = parseInt(prompt("inserisci qui i chilometri"));
// Chiedo all'utente l'età
const myAge = parseInt(prompt("inserisci qui l'età"));

//     VALIDAZIONE IN NUMERI
if (isNaN(myKm) || isNaN(myAge)) {
  alert("Required Real NUMBER");
}
console.log("myKm", myKm);
console.log("myAge", myAge);

let outputPrice;
// Calcolo il prezzo del tragitto in base ai km
let myPrice = myKm * 0.21;
console.log("costo al km", myPrice);
//     SE sotto i 18 sconto 20%
if (myAge < 18) {
  outputPrice = "il prezzo è questo" + " = " + (21 - (myPrice * 20) / 100);
}
//     ALTRIMENTI SE sopra i 65 sconto 40%
else if (myAge > 65) {
  outputPrice = "il prezzo è questo" + " = " + (21 - (myPrice * 40) / 100);
}
//     ALTRIMENTI prezzo completo
else {
  outputPrice = "il prezzo è questo" + " = " + myPrice;
}

//  Output prezzo in forma umana
console.log(outputPrice);
alert(outputPrice);
// ```
