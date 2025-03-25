let wiekKolegow = [12,19,22,15,23];
let osoby18plus = wiekKolegow.filter(wiek => wiek >= 18);
console.log("osoby mające 18 lat lub wiecej: " , osoby18plus);
console.log("Wiek kolegów: " , wiekKolegow);

let koledzy = [
    {imie: "Adam", wiek:15},
    {imie: "Hubert", wiek:19},
    {imie: "Filip", wiek:25},
    {imie: "Artur", wiek:18},
    {imie: "Piotr", wiek:17},
]

let osoby18plus1 = koledzy.filter(kolega => kolega.wiek >= 18).map(kolega => kolega.imie);
console.log("osoby mające 18 lat lub wiecej: " , osoby18plus1);
console.log("Wiek kolegów: " , koledzy);
