let numbers = [5, 9, 3, 19];
var soma = 0;

for (let i = 0;i < numbers.length; i += 1) {
    soma = numbers[i] + soma;
}
soma = soma / numbers.length;

if(soma > 20) {
    console.log('Maior que 20');
} else if (soma < 20) {
    console.log('Menor que 20')
}
