function wybierzTrojkat() {
    document.getElementById("duzyObraz").src = "1d.bmp";
}

function wybierzProstokat() {
    document.getElementById("duzyObraz").src = "2d.bmp";
}

function oblicz() {
    var bokA = Number(document.getElementById("a").value);
    var bokB = Number(document.getElementById("b").value);
    var srcObraz = document.getElementById("duzyObraz").src;
    var wynik = 0;

    if (srcObraz.includes("2d.bmp")) {
        wynik = bokA * bokB;
    }
    else {
        wynik = (bokA * bokB) / 2;
    }

    document.getElementById("wynik").textContent = wynik;
}
