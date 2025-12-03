<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php

function witaj() {
    echo "Witaj w świecie funkcji!\n";
}
witaj();


function dodaj($a, $b) {
    return $a + $b;
}
echo dodaj(5, 3);


function przywitaj($imie) {
    echo "Cześć, $imie\n";
}
przywitaj("Maciek");


function poleTrapezu($a, $b, $h) {
    return (($a + $b) * $h)/2;
}
echo poleTrapezu(4,6,3);


function czyParzysta($liczba) {
 return $liczba %2 === 0;
}
var_dump(czyParzysta(4));
var_dump(czyParzysta(3));


function ocenaSlowna($ocena){
    $slownik = [
        1 => "niedopuszczający",
        2 => "dopuszczający",
        3 => "dostateczny",
        4 => "dobry",
        5 => "bardzo dobry",
        6 => "celujący",
    ];
    return $slownik[$ocena];
}
echo ocenaSlowna(4);


function powitanie($imie = "Kuba"){
    echo "Cześć, $imie\n";
}
powitanie();


function max3($a, $b, $c) {
    return max($a, $b, $c);
}
echo max3(3,4,7);

?>
</body>
</html>