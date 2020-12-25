<?php

include_once 'config.php';

$poi=$_GET['poisk'];

$mysqli = new mysqli($server,$username,$password,$database);
$mysqli->set_charset("utf8");

//Output any connection error^M
if ($mysqli->connect_error) {
    die('Error : ('. $mysqli->connect_errno .') '. $mysqli->connect_error);
}




//MySqli Select Query^M
$results = $mysqli->query("SELECT realname.realname,realname.login,users.login,users.ip,users.Tariff,pononu.login,pononu.mac,address.login,address.aptid,apt.id,apt.buildid,build.id,build.streetid,build.buildnum,street.id,street.streetname  FROM realname,users,pononu,address,apt,build,street  WHERE realname.login=users.login AND realname.login=pononu.login AND realname.login=address.login AND address.aptid=apt.id AND apt.buildid=build.id AND build.streetid=street.id AND realname.realname='$poi'  ");

print '<table border="0">';
print '<tr><th>Абонент</th><th>Улица</th><th>№</th><th>Мак Онушки</th><th>Мак роутера</th><th>ИП абонента</th></tr>';


while($row = $results->fetch_assoc()) {

    print '<tr>';
    print '<td>'.$row["realname"].'</td>';
    print '<td>'.$row["streetname"].'</td>';
    print '<td>'.$row["buildnum"].'</td>';
    print '<td>'.$row["mac"].'</td>';
    print '<td>'.$row["mac"].'</td>';
    print '<td>'.$row["ip"].'</td>';
    $login=$row["login"];    
    
    print '<tr>';
}



print '</table>';


echo '<a style="color:black;position:absolute;top:350px;left:350px;">'.$login.'</a>';



// Frees the memory associated with a result^M
$results->free();

// close connection^M
$mysqli->close();

?>

<html>
<div class="data-php4" data-attr="<?=$login;?>"></div>
</html>