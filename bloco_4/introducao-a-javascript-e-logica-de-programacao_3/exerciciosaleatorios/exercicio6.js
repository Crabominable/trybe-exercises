let notaPorcentagem = 49;
let notaLetra = 'F';

if(notaPorcentagem >= 90) {
    notaLetra = 'A';
    console.log(notaLetra);
} else if (notaPorcentagem >= 80) {
    notaLetra = 'B';
    console.log(notaLetra);
} else if (notaPorcentagem >= 70) {
    notaLetra = 'C';
    console.log(notaLetra);
} else if (notaPorcentagem >= 60) {
    notaLetra = 'D';
    console.log(notaLetra);
} else if (notaPorcentagem >= 50) {
    notaLetra = 'E';
    console.log(notaLetra);
} else if (notaPorcentagem < 50) {
    notaLetra = 'F';
    console.log(notaLetra);
}