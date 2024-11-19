let number = prompt("Podaj liczbę, dla której chcesz wyświetlić tabliczkę dzielenia:");

if (!isNaN(number)) {

    document.write("Tabliczka dzielenia dla liczby " + number + ":");


  for (let i = 1; i <= 10; i++) {
    let result = number / i; 
    document.write(number + " / " + i + " = " + result + ";    "); 
  }
} else {
    document.write("Proszę podać poprawną liczbę.");
}