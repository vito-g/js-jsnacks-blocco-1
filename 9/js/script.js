//Calcola la somma e la media dei primi dieci numeri.
var somma = 0;
var media = 0;
for ( var i = 1; i <= 10; i++) {
  somma += i;
}
console.log('La somma dei primi 10 numeri è: ' + somma);
media += somma/10;
console.log('La loro media è: ' + media);
