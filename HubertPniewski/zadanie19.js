let array = [5, 12, 8, 20, 1];
let count = 0;
for (let i = 0; i < array.length; i++) {
  if (array[i] > 10) {
    count++;
  }
}
document.write("Liczba elementów w tablicy większych od 10 to: " + count);
