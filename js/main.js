const myKm = parseInt(prompt("inserisci qui i chilometri"));
const myAge = parseInt(prompt("inserisci qui l'età"));
if (isNaN(myKm) || isNaN(myAge)) {
  alert("Required Real NUMBER");
}
console.log("myKm", myKm);
console.log("myAge", myAge);
