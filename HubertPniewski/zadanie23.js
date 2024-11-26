function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  }
  
  let primes = [];
  for (let num = 1; num <= 100; num++) {
    if (isPrime(num)) {
      primes.push(num);
    }
  }
 document.write("Liczby pierwsze od 1 do 100:", primes);
  