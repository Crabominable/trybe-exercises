let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  for(let key in car) {
    console.log(`Essas são as propriedades: ${key}, e esses são seus valores: ${car[key]}`);
}