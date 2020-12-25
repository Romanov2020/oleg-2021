<?php

include_once 'config.php';

$del=$_GET['del2'];

$poi=$_GET['poisk'];

$mysqli = new mysqli($server,$username,$password,$database);
$mysqli->set_charset("utf8");

//Output any connection error^M
if ($mysqli->connect_error) {
    die('Error : ('. $mysqli->connect_errno .') '. $mysqli->connect_error);
}




//MySqli Select Query^M
$results = $mysqli->query("SELECT realname.realname,realname.login,users.login,users.ip,pononu.login,pononu.mac,address.login,address.aptid,apt.id,apt.buildid,build.id,build.streetid,build.buildnum,street.id,street.streetname,delitonu.login,delitonu.number,delitonu.index,delitonu.del,delitonu.oper  FROM realname,users,pononu,address,apt,build,street,delitonu WHERE realname.login=users.login AND realname.login=pononu.login AND realname.login=address.login AND address.aptid=apt.id AND apt.buildid=build.id AND build.streetid=street.id AND realname.login=delitonu.login AND realname.realname='$poi' AND delitonu.oper='ins'");

print '<table border="1">';
print '<tr><th>Абонент</th><th>Улица</th><th>№</th><th>Мак онушки</th><th>Ип></th></tr>';


while($row = $results->fetch_assoc()) {

    print '<tr>';
    print '<td>'.$row["realname"].'</td>';
    print '<td>'.$row["streetname"].'</td>';
    print '<td>'.$row["buildnum"].'</td>';
    print '<td>'.$row["mac"].'</td>';
    print '<td>'.$row["ip"].'</td>';
    $login=$row["login"];

    print '<tr>';
}



print '</table>';


echo '<a style="color:white;">'.$login.'</a>';
$dateoper=date('y-m-d H:i:s');
echo $dateoper;

// Frees the memory associated with a result^M
$results->free();

// close connection^M
$mysqli->close();


unset($del); 

?>

<html>

<div class="data-php20" data-attr="<?=$login; ?>"></div>

</html>

