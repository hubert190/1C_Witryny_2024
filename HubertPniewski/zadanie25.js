function isPerfectNumber(n) {
    let sumOfDivisors = 0;
    for (let i = 1; i < n; i++) {
      if (n % i === 0) {
        sumOfDivisors += i;
      }
    }
    return sumOfDivisors === n;
  }
  
  let number = parseInt(prompt("Podaj liczbę: "));
  if (isPerfectNumber(number)) {
    document.write(number + " jest liczbą doskonałą.");
  } else {
   document.write(number + " nie jest liczbą doskonałą.");
  }
  