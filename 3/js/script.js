/*Il software deve chiedere per 5 volte all’utente di inserire un
numero. Il programma stampa la somma di tutti i numeri
inseriti. Esegui questo programma in due versioni, con il for
e con il while.*/

// CICLO For + Array
// --------------------------------------------------------------------------------
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


// ALTERNATIVA, sempre con ciclo For.
// --------------------------------------------------------------------------------
// var somma = 0;
// for ( var i=1; i <= 5; i++) {
//    var numero = prompt('inserisci un numero');
//    somma += parseInt(numero);
//  }
//  console.log('La somma dei 5 numeri inseriti è :' + somma);


 // ALTERNATIVA,  con ciclo While.
 // --------------------------------------------------------------------------------
 var numero;
 var somma = 0;
 var i = 0;
 while ( i < 5) {
    numero = prompt('inserisci un numero');
    /*Il parseInt è necessario qui sotto pena la lettura dei numeri inseriti come fossero stringhe: in quest'ultimo caso
      non verrebbe stampata la somma ma i numeri inseriti un di seguito all'altro preceduti da 0 che è il valore iniziale
      impostato per i*/
    somma += parseInt(numero);
    i++;
 }
 console.log(somma);
