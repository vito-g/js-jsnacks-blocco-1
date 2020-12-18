/*Chiedi un numero di 4 cifre all'utente e calcola la somma di tutte le cifre che compongono il numero*/

var numero = prompt('inserisci un numero di 4 cifre'); // l'input verrà letto come stringa
var somma = 0;
console.log(numero);

if (numero.length !== 4) {
  alert('Il numero deve essere unicamente di 4 cifre');
}
else {
for ( var i = 0; i < numero.length; i++) {
  somma += parseInt(numero[i]);
}
console.log(somma);
}
