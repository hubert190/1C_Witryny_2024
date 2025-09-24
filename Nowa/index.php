<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
<?php print "tekst - instrukcja  print <br>";
echo "Tekst - instrukcja echo <br>"
?>

<?php print "<b>Grafika:</b>" . "<i>php.gif</i>";
print "<img src=\"php.gif\"><br>";
?>

<?php 
define("IMIE","Jan Kowalski");
define("ROK", "1981");
$zawod = "Informatyk";
$wiek = "31";
print (IMIE . "<br>");
print ($zawod . "<br>");
print ("rocznik- " . ROK . "<br>");
print($wiek . "lat<br>");
?>
</body>
</html>
