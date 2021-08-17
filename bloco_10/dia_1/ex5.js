function hydrate(stringRecebida) {
  // seu código aqui
  let auxiliarResultado = stringRecebida.match(/\d/g);
  auxiliarResultado = auxiliarResultado.join('');
  let auxiliarResultado1 = auxiliarResultado;
  let resultado = 0;
  for (let index = 0; index < auxiliarResultado1.length; index += 1) {
    resultado += parseInt(auxiliarResultado1[index], 10);
  }
  if (resultado === 1) {
    resultado += ' copo de água';
  } else if (resultado > 1) {
    resultado += ' copos de água';
  }
  return resultado;
}

module.exports = hydrate;