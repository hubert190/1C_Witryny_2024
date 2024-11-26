function fibonacciUpTo100() {
    let fibSequence = [0, 1];
    while (true) {
      let nextValue = fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2];
      if (nextValue > 100) break;
      fibSequence.push(nextValue);
    }
    return fibSequence;
  }
  
 document.write(fibonacciUpTo100());
  