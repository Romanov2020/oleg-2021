<?php

include_once 'config.php';

$ipolt=$_GET['ipolt'];

$mysqli = new mysqli($server,$username,$password,$database);
$mysqli->set_charset("utf8");

//Output any connection error
if ($mysqli->connect_error) {
    die('Error : ('. $mysqli->connect_errno .') '. $mysqli->connect_error);
}

$ifVendor = (snmp2_walk($ipolt, "public", '.1.3.6.1.4.1.3320.101.10.1.1.1'));
$ifModel = (snmp2_walk($ipolt, "public", '.1.3.6.1.4.1.3320.101.10.1.1.2'));
$ifDist = (snmp2_walk($ipolt, "public", '1.3.6.1.4.1.3320.101.10.1.1.27'));
$ifSignal = (snmp2_walk($ipolt, "public", '1.3.6.1.4.1.3320.101.10.5.1.5'));
$ifOnuMac = (snmp2_walk($ipolt, "public", "1.3.6.1.4.1.3320.101.10.1.1.3"));
$active = (snmp2_walk($ipolt, "public", "1.3.6.1.4.1.3320.101.10.1.1.26"));
$ports = (snmp2_walk($ipolt,"public",'.1.3.6.1.2.1.2.2.1.2'));
$number= (snmp2_walk($ipolt,"public",'.1.3.6.1.4.1.3320.101.10.5.1.1'));
$sosport =(snmp2_walk($ipolt,"public",'.1.3.6.1.4.1.3320.101.6.1.1.2'));



$array = $ifVendor;

print '<table>';
print '<tr><th>PORT</th><th>FIO</th><th>ulica</th><th>dom</th><th>mac</th><th>ip</th><th>firma</th><th>model</th><th>dist</th><th>signal</th></tr>';

for($i = 0, $c = count($array);$i<$c; $i++){


$firma= str_replace("STRING:", "", $ifVendor[$i]);
$model=str_replace("STRING:","",$ifModel[$i]);
$dist= str_replace("INTEGER:","",$ifDist[$i]);
$act=str_replace("INTEGER:","",$active[$i]);
#$sig=trim (str_replace("INTEGER:", "", $ifSignal[$i])/10);
$tr= str_replace("Hex-STRING:", "", $ifOnuMac[$i]);
$str=implode(":",str_split(str_replace(" ","",$tr),2));

$num=str_replace("INTEGER:","",$number[$i]);
$po=str_replace("INTEGER:","",$sosport[1]);

$results = $mysqli->query("SELECT realname.realname,realname.login,users.login,users.ip,address.login,address.aptid,apt.id,apt.buildid,build.id,build.streetid,build.buildnum,street.id,street.streetname,delitonu.login,delitonu.number,delitonu.index,delitonu.port,pononu.login,pononu.mac FROM realname,users,pononu,address,apt,build,street,delitonu  WHERE realname.login=users.login AND realname.login=pononu.login AND realname.login=address.login AND address.aptid=apt.id AND apt.buildid=build.id AND build.streetid=street.id AND realname.login=delitonu.login AND pononu.mac='$str' ");




while($row = $results->fetch_assoc()) {

if ($act==3){$det='act';} elseif ($act==2){$det='pas';}



$port=str_replace("STRING:","",$ports[$i+10]);
$sig=trim (str_replace("INTEGER:", "", $ifSignal[$i])/10);

    print '<tr>';
    print '<td>'.$port.'</td>';
    print '<td>'.$row["realname"].'</td>';
    print '<td>'.$row["streetname"].'</td>';
    print '<td>'.$row["buildnum"].'</td>';
    print '<td>'.$row["mac"].'</td>';   
    print '<td>'.$row["ip"].'</td>';
    print '<td>'.$firma.'</td>';
    print '<td>'.$model.'</td>';
    print '<td>'.$dist.'</td>';
    print '<td>'.$sig.'</td>';
    print '<td>'.$det.'</td>';
    print '<td>'.$num.'</td>';
    print '</tr>';


}

}
print '</table>';


?>

