let liczba = prompt("Podaj liczbę:");

let odwroconaLiczba = liczba.split("").reverse().join("");

let liczbaCyfr = liczba.length;

document.write(`Liczba cyfr: ${liczbaCyfr}`);
document.write(`Liczba w odwrotnej kolejności: ${odwroconaLiczba}`);