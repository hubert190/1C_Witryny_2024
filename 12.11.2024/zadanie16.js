let n = prompt("Podaj liczbę:");


for (let i = 1; i <= n; i++) {
  let row = ''; 


  for (let j = 1; j <= i; j++) {
    row += j; 
  }

  
  document.write(row + "  ");
  
}