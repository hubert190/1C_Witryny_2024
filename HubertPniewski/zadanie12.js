let word = "banana";
let count = 0;
for (let i = 0; i < word.length; i++) {
  if (word[i] === 'a') {
    count++;
  }
}
document.write("Litera 'a' występuje " + count + " razy w słowie 'banana'.");
