 
    
    let liczba = prompt("Podaj liczbę, dla której chcesz zobaczyć tabliczkę mnożenia:");

    liczba = parseInt(liczba);

        document.write(`Tabliczka mnożenia dla liczby  ${liczba }: `);
        
        for (let i = 1; i <= 10; i++) {
            let wynik = liczba * i;
            document.write(`${liczba} x ${i} = ${wynik} `);
        }
 
