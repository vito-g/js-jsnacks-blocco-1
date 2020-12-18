

var primaParola = prompt('inserisci la prima parola');
var secondaParola = prompt('inserisci la seconda parola');



if (primaParola.length > secondaParola.length ) {
  console.log(primaParola);
}
else if (primaParola.length < secondaParola.length) {
  console.log(secondaParola);
}
else if (primaParola.length === secondaParola.length) {
  console.log('le due parole hanno uguale lunghezza');
}
