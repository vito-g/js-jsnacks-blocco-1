/*In un array sono contenuti i nomi degli invitati alla festa del
grande Gatsby, chiedi all’utente il suo nome e comunicagli se
può partecipare o no alla festa. */
var lista = [ 'Pippo', 'Paperino', 'Minni', 'Paperone', 'Pluto'];
var nome = prompt('Inserisci il tuo nome');
nome = nome[0].toUpperCase() + nome.slice(1);
console.log(nome);

var nomeTrovato = false;

for (var i = 0; i < lista.length; i++) {
  if (nome === lista[i]) {
    nomeTrovato = true;
  }
}
if (nomeTrovato === true) {
  console.log('Puoi entrare');
}
else {
  console.log('Non puoi entrare');
}
