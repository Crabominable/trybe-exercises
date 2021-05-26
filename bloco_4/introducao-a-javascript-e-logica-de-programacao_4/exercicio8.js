function indiceDoMenor(numeros) {
    let indiceMenor = 0;

    for(let indice in numeros) {
        if(numeros[indiceMenor] > numeros[indice]) {
            indiceMenor = indice;
        }
    }
    return indiceMenor;
}


console.log(indiceDoMenor([2, 3, 6, 7, 10, 4])); //4