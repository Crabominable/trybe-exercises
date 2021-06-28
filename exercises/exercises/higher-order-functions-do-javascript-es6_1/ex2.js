const betChecker = (betToCheck, prizeNumber) => {
  let result = '';
  betToCheck === prizeNumber ? result = 'Parabéns você ganhou' : result = 'Tente novamente';
  return result;
}

const newPrizeDraw = (betNumber, action) => {
  let newPrizeNumber = Math.floor(Math.random() * 2) + 1;
  const result = action(betNumber, newPrizeNumber);
  return result;
}

console.log(newPrizeDraw(1, betChecker));