var lista = [ 'Pippo', 'Paperino', 'Minni', 'Paperone', 'PLuto'];
var nome = prompt('Inserisci il tuo nome');
nome = nome[0].toUpperCase() + nome.slice(1);
console.log(nome);

for (var i = 0; i < lista.length; i++) {
  if (nome = lista[i]) {
    console.log('Puoi entrare');
  }
  else if (nome != lista[i]) {
    console.log('Non puoi entrare');
  }

}
