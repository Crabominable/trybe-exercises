function division(x, y) {
  // Queremos que o código retorne um erro com uma mensagem específica
  // caso o parâmetro y seja 0. Por isso lançamos uma exceção se essa condição
  // for verdadeira, o que irá interromper a execução da função.

  if (x === 0) throw new Error('parameter x must not be 0');
  return x / y;
}
division(0, 10);