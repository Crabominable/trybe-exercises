function encode(palavra) {
  // seu código aqui
  let palavraCodificada = palavra;
  for (let index = 0; index < palavra.length; index += 1) {
    if (palavra[index] === 'a') {
      palavraCodificada = palavraCodificada.replace('a', '1');
    } else if (palavra[index] === 'e') {
      palavraCodificada = palavraCodificada.replace('e', '2');
    } else if (palavra[index] === 'i') {
      palavraCodificada = palavraCodificada.replace('i', '3');
    } else if (palavra[index] === 'o') {
      palavraCodificada = palavraCodificada.replace('o', '4');
    } else if (palavra[index] === 'u') {
      palavraCodificada = palavraCodificada.replace('u', '5');
    }
  }
  return palavraCodificada;
}

function decode(palavra) {
  // seu código aqui
  let palavraDecodificada = palavra;
  for (let index = 0; index < palavra.length; index += 1) {
    if (palavra[index] === '1') {
      palavraDecodificada = palavraDecodificada.replace('1', 'a');
    } else if (palavra[index] === '2') {
      palavraDecodificada = palavraDecodificada.replace('2', 'e');
    } else if (palavra[index] === '3') {
      palavraDecodificada = palavraDecodificada.replace('3', 'i');
    } else if (palavra[index] === '4') {
      palavraDecodificada = palavraDecodificada.replace('4', 'o');
    } else if (palavra[index] === '5') {
      palavraDecodificada = palavraDecodificada.replace('5', 'u');
    }
  }
  return palavraDecodificada;
}

module.exports = { encode, decode };