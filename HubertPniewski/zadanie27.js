let n = parseInt(prompt("Podaj wysokość prostokąta: "));
let m = parseInt(prompt("Podaj szerokość prostokąta: "));

for (let i = 0; i < n; i++) {
  let row = '<br>';
  for (let j = 0; j < m; j++) {
    row += '* ';

  }
  document.write(row);
}
