var anguloA = 60;
var anguloB = 60;
var anguloC = -61;
var resultado;

if (anguloA + anguloB + anguloC == 180) {
    resultado = true;
    console.log(resultado);
} else if (anguloA + anguloB + anguloC != 180){
    resultado = false;
    console.log(resultado);
} else if (anguloA | anguloB | anguloC < '-') {
    console.log('Erro!')
}