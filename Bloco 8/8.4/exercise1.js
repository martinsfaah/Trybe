// 1 - Dada uma matriz, transforme em um array.

const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  const juntando = arrays.reduce((tudo,atual) => tudo.concat(atual))
  return juntando
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);