function factorial(n) {
    if (n === 0) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  
  let number = parseInt(prompt("Podaj liczbę: "));
  let result = factorial(number);
document.write("Silnia liczby " + number + " to: " + result);
  