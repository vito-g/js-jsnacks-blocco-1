/*Il software deve chiedere per 5 volte all’utente di inserire un
numero. Il programma stampa la somma di tutti i numeri
inseriti. Esegui questo programma in due versioni, con il for
e con il while.*/
//
// var array = [];
// var primoNumero = prompt('inserisci il primo numero');
// console.log(primoNumero);
// array.push(primoNumero);
//
// var secondoNumero = prompt('inserisci il secondo numero');
// console.log(secondoNumero);
// array.push(secondoNumero);
//
// var terzoNumero = prompt('inserisci il terzo numero');
// console.log(terzoNumero);
// array.push(terzoNumero );
// var quartoNumero = prompt('inserisci il quarto numero');
// console.log(quartoNumero);
// array.push(quartoNumero);
// var quintoNumero = prompt('inserisci il quinto numero');
// console.log(quintoNumero);
// array.push(quintoNumero);
// console.log(array);
// var somma = 0;
//
//
//  for ( var i=0; i < array.length; i++) {
//    somma += parseInt(array[i]);
//  }
// console.log(somma);

var somma = 0;
for ( var i=1; i <= 5; i++) {
   var numero = prompt('inserisci un numero');
   somma += parseInt(numero);
 }
 console.log('La somma dei 5 numeri inseriti è :' + somma);
