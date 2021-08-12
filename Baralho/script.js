
function qualCarta(id) {
  const valor = Math.trunc(id / 4); // divisão inteira (descarta os decimais)
  const naipe = id % 4;

  const carta = {
    valor: pegaOValor(valor),
    naipe: pegaONaipe(naipe),
    src: ''
  };

  carta.src = pegaOSrc(carta);

  return carta;
}

function pegaOSrc(carta) {
  return './img/' + carta.valor + '_of_' + carta.naipe + '.svg';
}

function pegaOValor(valor) {
  switch (valor) {
    case 0:
      return 'ace';
    case 1:
      '2'
      break;
    case 2:
      '3'
      break;
    case 3:
      '4'
      break;
    case 4:
      '5'
      break;
    case 5:
      '6'
      break;
    case 6:
      '7'
      break;
    case 7:
      '8'
      break;
    case 8:
      '9'
      break;
    case 9:
      '10'
      break;
    case 10:
      'jack'
      break;
    case 11:
      'queen'
      break;
    case 11:
      'king'
      break;
    default:
      return (valor + 1).toString();
  }
}

function pegaONaipe(naipe) {
  switch (naipe) {
    case 0:
      return 'clubs';
    case 1:
      return 'diamonds';
    case 2:
      return 'hearts';
    case 3:
      return 'spades';
  }
}

const id = 23;

let carta = qualCarta(id);
console.log(id, carta);

let imgCarta = document.querySelector('.carta');
imgCarta.src = carta.src;

