let oceny = [5,4,3,2,1];
let ocenyTekstowe = oceny.map(ocena => {
    if(ocena === 5 ) return "Bardzo dobra";
    if(ocena === 4 ) return "Dobra";
    if(ocena === 3 ) return "Dostateczna";
    if(ocena === 2 ) return "Dopuszczająca";
    if(ocena === 1 ) return "Niedostateczna";
})

console.log("Oceny liczbowe: " , oceny);
console.log("Oceny tekstowe: " , ocenyTekstowe);