function techList(arrayTecnologies, name) {
  // seu código aqui
  if (arrayTecnologies.length === 0) return 'Vazio!';
  let aux = [];
  arrayTecnologies.forEach((element) => {
    let auxObj = {};
    auxObj['tech'] = element;
    auxObj['name'] = name;
    aux.push(auxObj);
  });
  return aux;
}

module.exports = techList;