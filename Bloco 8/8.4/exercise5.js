// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  const letraA = names.forEach((palavra) => {
    const letras = palavra.toLowerCase().split('a')
    letras.length - 1
    return 
  })
  console.log()
  // const quantidade = letraA.reduce((acc, num) => acc += num)
  // const letraA = names.reduce((quantidade, letra) => )
}
containsA()
// assert.deepStrictEqual(containsA(), 20);