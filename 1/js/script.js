/* L’utente inserisce due numeri in successione, con due
prompt. Il software stampa il maggiore. */
var firstNumber = prompt('Inserisci il primo numero');
console.log(firstNumber);
var secondNumber = prompt('Inserisci il secondo numero');
console.log(secondNumber);

if ( firstNumber > secondNumber) {
  console.log(firstNumber);
}
else if ( firstNumber < secondNumber) {
  console.log(secondNumber);
}
