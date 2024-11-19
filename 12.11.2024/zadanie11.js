let number = parseInt(prompt("Podaj liczbę:"));


if (number > 0) {
  
  document.write("Dzielniki liczby " + number + " to:");
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) 
      document.write(i+", "); 
    
  }
} else {
  document.write("Proszę podać liczbę większą od 0.");
}