var array = [];
var primoNumero = prompt('inserisci il primo numero');
console.log(primoNumero);
array.push(primoNumero);

var secondoNumero = prompt('inserisci il secondo numero');
console.log(secondoNumero);
array.push(secondoNumero);

var terzoNumero = prompt('inserisci il terzo numero');
console.log(terzoNumero);
array.push(terzoNumero );
var quartoNumero = prompt('inserisci il quarto numero');
console.log(quartoNumero);
array.push(quartoNumero);
var quintoNumero = prompt('inserisci il quinto numero');
console.log(quintoNumero);
array.push(quintoNumero);
console.log(array);
var somma = 0;


 for ( var i=0; i < array.length; i++) {
   somma += parseInt(array[i]);
 }
console.log(somma);
