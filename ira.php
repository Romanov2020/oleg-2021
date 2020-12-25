<?php
//Open a new connection to the MySQL server

include_once 'config.php';

$ipolt=$_GET['ip'];
#echo '<a style="position:absolute;z-index:9;">'.$ipolt.'</a>';

$mysqli = new mysqli($server,$username,$password,$database);
$mysqli->set_charset("utf8");

//Output any connection error
if ($mysqli->connect_error) {
    die('Error : ('. $mysqli->connect_errno .') '. $mysqli->connect_error);
}


$ifVendor = (snmp2_walk("10.79.254.245", "public", '.1.3.6.1.4.1.3320.101.10.1.1.1'));
$ifModel = (snmp2_walk("10.79.254.245", "public", '.1.3.6.1.4.1.3320.101.10.1.1.2'));
$ifDist = (snmp2_walk("10.79.254.245", "public", '1.3.6.1.4.1.3320.101.10.1.1.27'));
$ifSignal = (snmp2_walk("10.79.254.245", "public", "enterprises.3320.101.10.5.1.5"));
$ifOnuMac = (snmp2_walk("10.79.254.245", "public", "1.3.6.1.4.1.3320.101.10.1.1.3"));


$array=$ifVendor;

for ($i=0, $c<count($array); $i<$c; $i++){

$firma= str_replace("STRING:", "", $ifVendor[$i]);
$model=str_replace("STRING:","",$ifModel[$i]);
$dist= str_replace("INTEGER:","",$ifDist[$i]);
$sig=trim (str_replace("INTEGER:", "", $ifSignal[$i])/10);
$tr= str_replace("Hex-STRING:", "", $ifOnuMac[$i]);
$str=implode(":",str_split(str_replace(" ","",$tr),2));

}

//MySqli Select Query
$results = $mysqli->query("SELECT realname.realname,realname.login,users.login,users.ip,pononu.login,pononu.mac,address.login,address.aptid,apt.id,apt.buildid,build.id,build.streetid,build.buildnum,street.id,street.streetname,delitonu.login,delitonu.number,delitonu.index,delitonu.del,delitonu.del,delitonu.oper,nethosts.ip,pononu.mac FROM realname,users,pononu,address,apt,build,street,delitonu,nethosts WHERE realname.login=users.login AND pononu.mac!=nethosts.mac AND users.ip=nethosts.ip AND realname.login=pononu.login AND realname.login=address.login AND address.aptid=apt.id AND apt.buildid=build.id AND build.streetid=street.id AND realname.login=delitonu.login AND delitonu.number='{$_GET['id']}' AND delitonu.oper='ins' ");



$vs=$_GET['d'];
echo '<b style="left:50px;top:5px;color:white;">'."Количество портов: ",$vs.'</b>';
echo '                 ';
$row_cnt = $results->num_rows;
echo '<b style="top:5px;color:blue;">'."Занято портов: ",$row_cnt.'</b>';
$ost=$vs-$row_cnt;
echo '                 ';
echo '<b style="top:5px;">'."Осталось свободных: ",$ost.'</b>';




print '<table border="1">';
print '<tr><th>Абонент</th><th>Адрес<th>Номер</th></th><th>Мак онушки</th><th>Ип за онушкой</th><th>Активность</th></tr>';



while($row = $results->fetch_assoc()) {




    print '<tr>';
    print '<td id="real">'.$row["realname"].'</td>';
    print '<td>'.$row["streetname"].'</td>';
    print '<td>'.$row["buildnum"].'</td>';
    print '<td>'.$row["mac"].'</td>';
//    $host2=$row["ip"];    
    print '<td>'.$row["ip"].'</td>';   
    if ($result2==0){echo '<td style="background-color:green;font-weight:bold;font-size:14px;color:white;">'."Да".'</td>';}
   else {echo '<td style="background-color:red;font-weight:bold;font-size:14px;color:white;">'."Нет".'</td>';}        
 
    print '<b style="color:blue;">'.substr($row["del"],8).'</td>';
    print '<tr>';
}



print '</table>';

// Frees the memory associated with a result
$results->free();

// close connection
$mysqli->close();

?>

<html>

<div class="data-php14" data-attr="<?=$vs; ?>"></div>
<div class="data-php15" data-attr="<?=$ost;?>"></div>
<div class="data-php16" data-attr="<?=$row_cnt; ?>"></div>

</html>




