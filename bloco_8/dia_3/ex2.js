const objPeople = [
  { name: 'José', age: 21 },
  { name: 'Lucas', age: 19 },
  { name: 'Maria', age: 16 },
  { name: 'Gilberto', age: 18 },
  { name: 'Vitor', age: 15 },
];

const verifyAgeDrive = (name) => objPeople.filter((people) => people.age < 18 || people.name === name);
console.log(verifyAgeDrive('Lucas'));
// [ { name: 'Maria', age: 16 }, { name: 'Vitor', age: 15 } ]