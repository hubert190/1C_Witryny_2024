<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p>
    <?php
        $zmienna1 = $_POST['Imie'];
        echo "Podane Imie: $zmienna1 <br>";
         $zmienna2 = $_POST['Nazwisko'];
        echo "Podane Nazwisko: $zmienna2 <br>";
         $zmienna3 = $_POST['Numer_domu'];
        echo "Podany numer domu: $zmienna3 <br>";
         $zmienna4 = $_POST['Numer_telefonu'];
        echo "Podany numer telefonu: $zmienna4 <br>";
         $zmienna5 = $_POST['Adres_zamieszkania'];
        echo "Podany adres zamieszkania: $zmienna5 <br>";
         $zmienna6 = $_POST['Kod_pocztowy'];
        echo "Podany kod pocztowy: $zmienna6 <br>";
        $zmienna7 = $_POST['Adres_email'];
        echo  "Podany adres email: $zmienna7 <br>";
          $zmienna8 = $_POST['Data_urodzenia'];
        echo  "Podana data urodzenia: $zmienna8 <br>"
        ?>
        </p>
</body>
</html>