document.write("Tabliczka mnożenia od 1 do 10:");
for (let i = 1; i <= 10; i++) {
  let row = "";
  for (let j = 1; j <= 10; j++) {
    row += (i * j).toString().padStart(3, ' ') + " ";
  }
 document.write(row);
}
