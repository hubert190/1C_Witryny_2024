let number = prompt("Podaj liczbę:");


if (number > 1) {
  document.write("Liczby nieparzyste mniejsze od " + number + " to:");


  for (let i = 1; i < number; i++) {
    if (i % 2 !== 0) 
      document.write(i+(", ")); 
  }
} else {
document.write("Proszę podać liczbę większą niż 1.");
}