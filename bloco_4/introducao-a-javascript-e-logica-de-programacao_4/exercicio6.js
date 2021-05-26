function verificarPalindrome(palavra) {
    let reverse = palavra.split('').reverse().join('');
    if (reverse === palavra) {
      return true;
    } else {
      return false;
    }
  }
  
  console.log(verificarPalindrome('reviver')); //true