let sum = 0;
 let count = 0;
  for (let i = 1; i <= 50; i++)
    { sum += i; count++; }; 
  let average = sum / count
 document.write("Średnia liczb od 1 do 50 to: " + average);