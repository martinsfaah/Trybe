// let objetos = variaveis


// let Name = 'Marta';
// let lastName = 'Silva';
// let age = 34;
// let medals = { golden: 2, silver: 3 };
// let bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018]

// let jogadora = {
//   Name = 'Marta',
//   lastName = 'Silva',
//   age = 34,
//   medals = {
//     golden: 2, 
//     silver: 3,
//    },
//   bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018],
// }

// console.log('A jogadora ' + jogadora.Name + ' ' + jogadora.lastName + ' tem ' + jogadora.age + ' anos de idade.')
// console.log('A jogadora ' + jogadora.Name + ' ' + jogadora.lastName + ' foi eleita a melhor do mundo por ' + jogadora.bestInTheWorld.length + ' vezes.')
// console.log('A jogadora ' + jogadora.Name + ' ' + jogadora.lastName + ' possui ' + jogadora.medals.golden + ' medalhas de ouro e ' + jogadora.medals.silver + ' medalhas de prata.')

// console.log(jogadora)

let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

// //nº1
// console.log('Bem-vinda, ' + info.personagem + '.');

// //nº2
info['recorrente'] = "Sim";
// console.log(info);

// //nº3 todas as chaves do objeto
// for (let index in info) {
//   console.log(index);
// }

// //nº4 todos os valores das chaves do objeto
// for (let index in info) {
//   console.log(info[index]);
// }

//nº5
//imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:
// Margarida e Tio Patinhas
// Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
// Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
// Ambos recorrentes // Atenção para essa última linha!

let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinha",
  recorrente: "Sim",
};

for (let index in info, info2) {
  if (index === index){
  console.log(info[index] + 'e' + info2[index])
} else (info.recorrente === info2.recorrente){
    console.log("Ambos recorrentes.")
  }{ console.log(info[index] + 'e' + info2[index])
}

for(let key in object){ console.log(key); }

