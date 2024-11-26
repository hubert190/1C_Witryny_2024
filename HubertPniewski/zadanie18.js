let array = [5, 12, 8, 20, 1];
let maxElement = array[0];
for (let i = 1; i < array.length; i++) {
  if (array[i] > maxElement) {
    maxElement = array[i];
  }
}
document.write("Największy element w tablicy to: " + maxElement);
