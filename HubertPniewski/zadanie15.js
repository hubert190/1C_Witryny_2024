let text = "programming";
let vowels = "aeiou";
for (let i = 0; i < text.length; i++) {
  if (vowels.includes(text[i].toLowerCase())) {
    document.write(text[i]);
  }
}
