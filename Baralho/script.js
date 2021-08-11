function qualCarta(numero) {
  valor = Math.trunc(numero / 4); // divisão inteira
  naipe = numero % 4;

  nomeDaCarta = '';

  nomeDoValor = pegaOValor(valor);
  nomeDoNaipe = pegaONaipe(naipe);

  return nomeDaCarta
}

function pegaOValor(valor) {
  switch (valor) {
    case 0:
      'ace'
      break;

    // ...

  }
}

function pegaONaipe(naipe) {
  // ...
}

// TODO
// mostrar a carta na página