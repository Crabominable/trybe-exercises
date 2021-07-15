const { encode, decode} = require('./ex3.js');

describe('Testa as possibilidades das funções Encode e Decode', () => {
  test('Testa se a função encode é definida', () => {
    expect(encode).toBeDefined();
  });
  test('Testa se encode é uma função', () => {
    expect(typeof encode).toEqual('function');
  });
  test('Testa se a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
    expect(encode('a', 'e', 'i', 'o', 'u')).toEqual('1', '2', '3', '4', '5');
  });
  test('Testa se a função decode teste se os números 1, 2, 3, 4 e 5 são convertido nas vogais a, e, i, o, u , respectivamente', () => {
    expect(decode('1', '2', '3', '4', '5')).toEqual('a', 'e', 'i', 'o', 'u');
  });
  test('Teste se as demais letras/números não são convertidos para cada caso', () => {
    expect(encode('a', 'b', 'c', 'e', 'i', 'o', 'u', 'z')).toEqual('1', 'b', 'c', '2', '3', '4', '5', 'z');
  });
  test('converte a vogal "i" no número 3', () => {
    expect(encode('xixi')).toEqual('x3x3');
  });
  test('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.', () => {
    expect(encode('trybe').length).toEqual(5);
  });
});