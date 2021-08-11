function generatePhoneNumber(numberPhone) {
  let resultado = "";
  let repeatNumbers = 0;
  
  if (numberPhone.length === 11) {
  for (let index in numberPhone) {
  repeatNumbers = 0;
  for (let index2 in numberPhone) {
  if (numberPhone[index] === numberPhone[index2]) {
  repeatNumbers += 1;
  }
  }
  if (numberPhone[index] < 0 || numberPhone[index] > 9 || repeatNumbers >= 3) {
  resultado = 'não é possível gerar um número de telefone com esses valores';
  }
  }
  resultado = `(${numberPhone[0]}${numberPhone[1]}) ${numberPhone[2]}${numberPhone[3]}${numberPhone[4]}${numberPhone[5]}${numberPhone[6]}-${numberPhone[7]}${numberPhone[8]}${numberPhone[9]}${numberPhone[10]}`;
  } else {
  resultado = 'Array com tamanho incorreto.';
  }
  return resultado;
  }

