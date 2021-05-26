let salarioBruto = 9000;
let salarioLiquido = 0;
let impostoInss = 0;
let impostoRenda = 0;

if(salarioBruto <= 1556) {
    impostoInss = salarioBruto/100 * 8;
    console.log(Math.round(impostoInss));
} else if(salarioBruto >= 1557 && salarioBruto <= 2594) {
    impostoInss = salarioBruto/100 * 9;
    console.log(Math.round(impostoInss));
} else if(salarioBruto >= 2595 && salarioBruto <= 5189) {
    impostoInss = salarioBruto/100 * 11;
    console.log(Math.round(impostoInss));
} else if(salarioBruto > 5189) {
    impostoInss = salarioBruto - 570;
    console.log(Math.round(impostoInss));
}

let salarioDebitado = salarioBruto - impostoInss;

if(salarioDebitado <= 1903) {
    console.log(`Isento do imposto de renda.`);
} else if(salarioDebitado > 1903 && salarioDebitado <= 2826) {
    impostoRenda = (salarioDebitado/100 * 7.5) - 142;
    console.log(Math.round(impostoRenda));
} else if(salarioDebitado > 2826 && salarioDebitado <= 3751) {
    impostoRenda = (salarioDebitado/100 * 15) - 354;
    console.log(Math.round(impostoRenda));
} else if(salarioDebitado > 3751 && salarioDebitado <= 4664) {
    impostoRenda = (salarioDebitado/100 * 22.5) - 636;
    console.log(Math.round(impostoRenda));
} else if(salarioDebitado > 4664) {
    impostoRenda = (salarioDebitado/100 * 27.5) - 869;
    console.log(Math.round(impostoRenda));
} 

salarioLiquido = salarioDebitado - impostoRenda;
console.log(Math.round(salarioLiquido));