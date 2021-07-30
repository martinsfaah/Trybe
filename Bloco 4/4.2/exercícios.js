// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// nº1 percorra o array imprimindo todos os valores nele contidos com a função console.log()
// console.log(numbers)

// nº2 some todos os valores contidos no array e imprima o resultado
// let soma = 0
// for (i = 0; i < numbers.length; i += 1){
//   soma += numbers[i]
// }
// console.log(soma)

// nº3 Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array. (A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.)
// let soma = 0
// for (i = 0; i < numbers.length; i += 1){
//   soma += numbers[i]
// }
// let mediaAritmetica = soma / numbers.length
// console.log(mediaAritmetica)

// nº4 Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20"
// let soma = 0
// for (i = 0; i < numbers.length; i += 1){
//   soma += numbers[i]
// }
// let mediaAritmetica = soma / numbers.length
// console.log(mediaAritmetica)
// if (mediaAritmetica > 20){
//   console.log("valor maior que 20")
// } else {
//   console.log("valor menor ou igual a 20")
// }

// nº5 Utilizando for , descubra qual o maior valor contido no array e imprima-o
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let maior = 0
// for (i = 0; i < numbers.length; i += 1){
//   if (numbers[i] > maior){
//     maior = numbers[i]
//   }
// }
// console.log(maior)

// nº6 Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado"
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impar = 0;
for (i = 0; i < numbers.length; i += 1){
  if (numbers[i] % 0){
    par += 1
  } else {impar += 1}
}
console.log(impar);



// nº7 Utilizando for , descubra qual o menor valor contido no array e imprima-o

// nº8 Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado

// nº9 Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2
