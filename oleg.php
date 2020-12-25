<?php

include_once 'config.php';

$mysqli = new mysqli($server,$username,$password,$database);
$mysqli->set_charset("utf8");

//Output any connection error
if ($mysqli->connect_error) {
    die('Error : ('. $mysqli->connect_errno .') '. $mysqli->connect_error);
}

print '<table id="edge">';
print '<tr><th>Порт</th><th>Абонент</th><th>Улица</th><th>Дом</th><th>Мак</th><th>Ип</th><th>Уровень сигнала</th></tr>';

$results = $mysqli->query("SELECT * INTO users FROM realname WHERE users.login=realname.login ");

while($row = $results->fetch_assoc()) {


    print '<tr>';
    print '<td>'.$port.'</td>';
    print '<td>'.$row["login"].'</td>';
    print '<td>'.$row["realname"].'</td>';
    print '<td>'.$row["Tariff"].'</td>';
    print '<td>'.$row["cat"].'</td>';
    //print '<td>'.$row["ip"].'</td>';
    print '</tr>';
}



print '</table>';

?>
