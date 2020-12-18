/* L’utente inserisce due parole in successione, con due
prompt. Il software stampa prima la parola più corta, poi la
parola più lunga. */
var primaParola = prompt('inserisci la prima parola');
var secondaParola = prompt('inserisci la seconda parola');



if (primaParola.length > secondaParola.length ) {
  console.log(secondaParola);
  console.log(primaParola);
}
else if (primaParola.length < secondaParola.length) {
  console.log(primaParola);
  console.log(secondaParola);
}
else if (primaParola.length === secondaParola.length) {
  console.log('le due parole hanno uguale lunghezza');
}
