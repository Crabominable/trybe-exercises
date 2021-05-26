let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
};
for(let infoIndex in info) {
    console.log(`Essas são as chaves do objeto: ${infoIndex}`);
    console.log(`Essas são os valores de cada chave do objeto: ${info[infoIndex]}`);
}
console.log(`Bem vinda, ${info['personagem']}`);
console.log(info['recorrente']);

let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
};
for(let info2Index in info2) {
    console.log(`${info2Index}: ${info2[info2Index]}`);
}