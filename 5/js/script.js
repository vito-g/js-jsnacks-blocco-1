/* Crea un aray vuoto. Chiedi per 6 volte all'utente di inserire un numero, se è dispari inseriscilo nell'array. */
var array = [];
var number;

for ( var i= 0; i < 6; i++) {
  number = parseInt(prompt('Inserisci un numero'));
  if (number % 2 !== 0) {
    array.push(number);
}
}
console.log(array);
