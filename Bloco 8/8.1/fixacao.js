// Para fixar
// Vamos praticar com os seguintes exercícios:
// 1 - Crie uma função que retorne a string 'Acordando!!' ;
// 2 - Crie outra função que retorne a string 'Bora tomar café!!' ;
// 3 - Crie mais uma função que retorne a string 'Partiu dormir!!' ;
// 4 - Agora desenvolva uma HOF chamada doingThings e configure esta função para que imprima no console o resultado da execução das funções que você criou nos exemplos anteriores. Exemplo:
//     // Ao chamar a função doingThings:
//       doingThings(wakeUp);

//     // Ela deve retornar o valor do respectivo parâmetro, neste caso:
//     // Acordando!!

// ___________

// 1 - Crie uma função que retorne a string 'Acordando!!' ;
let dia = () => 'Acordando!!';

// 2 - Crie outra função que retorne a string 'Bora tomar café!!' ;
let cafe = () => 'Bora tomar café!!';

// 3 - Crie mais uma função que retorne a string 'Partiu dormir!!';
let noite = () => 'Partiu dormir!!';

// 4 - Agora desenvolva uma HOF chamada doingThings e configure esta função para que imprima no console o resultado da execução das funções que você criou nos exemplos anteriores.
let doingThings = (func) => console.log(func)
// console.log(dia())
// console.log(cafe())
// console.log(noite())
doingThings(dia())
doingThings(cafe())
doingThings(noite())


// AULA DIA 02/SET - RODS //

const person = {
  name: 'Fabiana',
  lastName: 'Martins',
  greet: function(callback) {
    console.log(callback());
  }
}

const formalGreeting = () => 'Olá! Tudo bem?';
const badMoodGreeting = () => 'Oi.';
const loveGreeting = () => 'Oi oi!';


person.greet(formalGreeting);
person.greet(badMoodGreeting);
person.greet(loveGreeting);