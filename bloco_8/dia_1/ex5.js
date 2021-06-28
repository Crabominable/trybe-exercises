// Ao chamar a função doingThings:

const wakeUp = () => 'Acordando!!';
const coffeTime = () => 'Bora tomar café!!';
const bedTime = () => 'Partiu dormir!!'
const doingThings = (wake, coffe, bed) => console.log(wake, coffe, bed);

doingThings(wakeUp(), coffeTime(), bedTime());

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!
