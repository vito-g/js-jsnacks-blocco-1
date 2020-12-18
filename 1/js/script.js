/* L’utente inserisce due numeri in successione, con due
prompt. Il software stampa il maggiore. */

/*N.B.:  Se qui sotto non inserisco il parseINt e vado a confrontare un numero ( che di fatto resta una stringa) di 4 cifre con uno di 3 cifre ma con la prima cifra di quest'ultimo
più grande della prima cifra del primo, l'output risultante è sballato.*/
var firstNumber = parseInt(prompt('Inserisci il primo numero'));
console.log(firstNumber);
var secondNumber = parseInt(prompt('Inserisci il secondo numero'));
console.log(secondNumber);

// if ( firstNumber > secondNumber) {
//   console.log(firstNumber);
// }
// else if ( firstNumber < secondNumber) {
//   console.log(secondNumber);
// }



// ALTERNATIVA Ciclo If + Completa:
if ( firstNumber === secondNumber) {
  alert('I numeri sono uguali');
}
else if (firstNumber > secondNumber) {
  console.log(firstNumber);
}
else {
  console.log(secondNumber);
}
