function isPalindrome(text) {
    text = text.toLowerCase().replace(/ /g, "");  
    let reversedText = "";
    for (let i = text.length - 1; i >= 0; i--) {
      reversedText += text[i];
    }
    return text === reversedText;
  }
  
  let text = "vdvd";
  if (isPalindrome(text)) {
    document.write(`"${text}" jest palindromem.`);
  } else {
    document.write(`"${text}" nie jest palindromem.`);
  }
  