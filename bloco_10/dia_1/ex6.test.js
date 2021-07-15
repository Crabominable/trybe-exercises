const searchEmployee = require('./ex6.js');

describe('Testes referente a função searchEmployee', () => {
  test('Testa se a função está definida', () => {
    expect(searchEmployee).toBeDefined();
  });
  test('Testa se é uma função', () => {
    expect(typeof searchEmployee).toBe('function');
  });
  test('Testa se a função retorna', () => {
    expect(searchEmployee('4678-2', 'firstName')).toBe('Paul');
  });
});