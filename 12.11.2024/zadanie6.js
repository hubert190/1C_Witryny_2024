let najwieksza = -Infinity;

for (let i = 1; i <= 5; i++) {
    let liczba = prompt(`Podaj liczbę ${i}:`);

    
     if (liczba > najwieksza) {
        najwieksza = liczba; 
    }
}


document.write("Największa liczba to: " + najwieksza );