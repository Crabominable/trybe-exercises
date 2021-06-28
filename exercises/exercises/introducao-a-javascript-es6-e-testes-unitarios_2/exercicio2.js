const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

/*function addMorningTurn(obj, key, value) {
  obj[key] = value;
  console.log(lesson2)
}
addMorningTurn(lesson2, 'turno', 'noite');*/

/*function listObjKeys(obj) {
  const arrayList = Object.keys(obj);
  console.log(arrayList);
}
listObjKeys(lesson3);

const sizeObj = (obj) =>  Object.keys(obj).length;
console.log(sizeObj(lesson1));

const listObjValues = (obj) => Object.values(obj);
console.log(listObjValues(lesson3));*/

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

const getNumberOfStudents = (obj) => {
  let total = 0;
  const array = Object.keys(obj);
  for (index in array) {
    total += obj[array[index]].numeroEstudantes;
  }
  return total;
};
console.log(getNumberOfStudents(allLessons));