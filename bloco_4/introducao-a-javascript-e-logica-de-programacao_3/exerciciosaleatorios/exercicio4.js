let a = 70;
let b = 70;
let c = -50;
let somaAngulos = 180;
let resultado = false;

if(a + b + c === 180) {
    resultado = true;
    console.log(`A soma dos ângulos internos é válido. ${resultado}, ${somaAngulos}!!`);
} else if(a < 0 || b < 0 || c < 0) {
    console.log(`Erro: ângulo inválido`);
} else {
    console.log(resultado);
}