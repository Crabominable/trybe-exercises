let fruits = [3, 4, 1];
let resultado = 0;

for(let index = 0; index < fruits.length; index += 1) {
    resultado = resultado + fruits[index];
}

if(resultado > 15) {
    console.log(`Resultado:  ${resultado}`);
} else if (resultado <= 15) {
    console.log('Resultado menor que 16')
}