const arrayMyStudents = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const removeStudentByName = (name, listStudents) => listStudents.filter((student) => student !== name);
  // Filtra todos os estudantes que não têm o nome 'Ricardo' e retorna um array com eles. Na prática, remove o Ricardo do array.

  console.log(removeStudentByName('Ricardo', arrayMyStudents)); // [ 'Maria', 'Manuela', 'Jorge', 'Wilson' ]