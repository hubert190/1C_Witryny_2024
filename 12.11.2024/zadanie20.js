let numbers = [];


for (let i = 0; i < 10; i++) {
  let number =prompt("Podaj liczbę (" + (i + 1) + "/10):");
  numbers.push(number);
}

document.write("Liczby większe niż 5:");
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 5) {
    document.write(numbers[i]+"; "); 
  }
}