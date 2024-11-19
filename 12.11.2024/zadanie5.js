let number = prompt("Podaj liczbę:");


if (number !== null && number !== "") {

  let reversedNumber = "";


  for (let i = number.length - 1; i >= 0; i--) {
    reversedNumber += number[i]; 
  }

 document.write("Liczba w odwrotnej kolejności: " + reversedNumber);
} else {
 document.write("Nie podano liczby.");
}