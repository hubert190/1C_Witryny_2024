<?php
    $conn = new mysqli("localhost", "root", "", "kino");
?>

<!DOCTYPE html>
<html lang="pl">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Informacje o aktorze | KinoTEKA</title>
        <link rel="stylesheet" href="styl.css">
    </head>
    <body>
            <header>
            <section id="naglowkowy1">
            <h2><a href="index.php">KinoTEKA</a></h2>
            </section>

            <section id="naglowkowy2">
            <p><em>W naszej bazie znajdują się najlepsi aktorzy</em></p>
            </section>
        </header>

        <main>
            <h1>Najlepsi aktorzy tylko w naszym kinie</h1>
            <div id="aktorzy">
                <?php
                    if (isset($_GET['id'])) {
                        $id = $_GET['id'];
                        $query = "SELECT imie, nazwisko, plik_awatara FROM aktorzy WHERE id_aktora = $id;";
                        $result = $conn->query($query);
                        $row = $result->fetch_assoc();
                        $imie = $row['imie'];
                        $nazwisko = $row['nazwisko'];
                        echo "<div>";
                            echo "<img src='".$row['plik_awatara']."' alt='".$row['imie']." ".$row['nazwisko']."' title='".$row['imie']." ".$row['nazwisko']."'>";
                            echo "<h1>".$row['imie']." ".$row['nazwisko']."</h1>";
                        echo "</div>";
                    }
                ?>
            </div>
            <?php
                if (isset($_GET['id'])) {
                    $id = $_GET['id'];
                    $query = "SELECT f.id_filmu, f.tytul, f.rok_produkcji FROM filmy f JOIN filmy_aktorzy fa ON f.id_filmu = fa.id_filmu WHERE fa.id_aktora = $id;";
                    $result = $conn->query($query);
                    if ($result->num_rows > 0) {
                        echo $imie . " znajduje się na listach obsady " . $result->num_rows . " znanych nam produkcji.";
                    }
                    else {
                        echo "<p>$imie nie znajduje się na listach obsady znanych nam produkcji.</p>";
                    }
                }
            ?>
        </main>

        <footer>
            <p>Autor: Hubert Pniewski</p>
        </footer>
    </body>
</html>

<?php
    $conn->close();
?>