const { expect, test } = require('@jest/globals');
const sum = require('./ex.js');

describe('Testa as possibilidades da função sum', () => {
  test('Testa se o retorno de sum(4, 5) é 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
  test('Testa se o retorno de sum(0, 0) é 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
  test('Testa se a função sum lança um erro quando os parâmetros são 4 e "5"', () => {
    expect(() => sum(4, "5")).toThrow();
  });
  test('Testa se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")', () => {
    expect(() => sum(4, "5")).toThrowError(new Error('parameters must be numbers'));
  });
});