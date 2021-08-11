// Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
function mudandoTexto() {
  document.getElementsByTagName('p')[0].innerHTML = "Daqui a 2 anos quero:";
  document.getElementsByTagName('p')[1].innerHTML = "--> Estar ganhando bem;";
  document.getElementsByTagName('p')[2].innerHTML = "--> Programando bem.";
}
mudandoTexto();

// Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
function mudandoCor(xablau, newColor) {
  document.getElementsByClassName(xablau)[0].style.background = newColor;
}
mudandoCor("main-content", 'rgb(76,164,109)');

// Crie uma função que mude a cor do quadrado vermelho para branco.
mudandoCor('center-content', 'white');

//* Crie uma função que corrija o texto da tag <h1>.*
function corrigindo(lugar) {
  document.getElementsByClassName(lugar)[0].innerHTML = 'Exercício 5.1 - JavaScripit';
}
corrigindo('title');

//* Crie uma função que modifique todo o texto da tag <p> para maiúsculo.*
function grandao() {
  document.getElementsByTagName('p')[0].style.textTransform = 'uppercase';
}
grandao()

//* Crie uma função que exiba o conteúdo de todas as tags <p> no console.*
function exibindo(batata) {
  console.log(document.getElementsByTagName(batata).innertext('p');
}
exibindo('p')

