const sayHello = () => {
  console.log('hello trybers');
}

setTimeout(sayHello, 1000);

const sumFixAmount = (amount) => {
  return (number) => amount + number;
}