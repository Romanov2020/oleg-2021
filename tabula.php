<?php

$ipol = $_GET['ipolt'];

echo $ipol;

include_once 'config.php';

$mysqli = new mysqli($server,$username,$password,$database);
$mysqli->set_charset("utf8");

//Output any connection error
if ($mysqli->connect_error) {
    die('Error : ('. $mysqli->connect_errno .') '. $mysqli->connect_error);
}

$rez1 = snmp2_walk($ipol,"public",'1.3.6.1.4.1.3320.101.10.1.1.3');
#$firma = snmp2_walk($ipol,"public",'1.3.6.1.4.1.3320.101.10.5.1.1');
$Signal = snmp2_walk($ipol,"public", '1.3.6.1.4.1.3320.101.10.5.1.5');
$ports = snmp2_walk($ipol,"public",'1.3.6.1.2.1.2.2.1.2');
$rez2 = snmp2_walk($ipol,"public",'1.3.6.1.2.1.2.2.1.1');

print '<table id="edge">';
print '<tr><th style="font-size:13px;">№</th><th>ПОРТ</th><th>АБОНЕМЕНТ</th><th>УЛИЦА</th><th>ДОМ</th><th>МАК ОНУ</th><th>МАК РОУТЕРА</th><th>ИП</th><th>СИГНАЛ</th><th>ТИП ДЕЛИТЕЛЯ</th><th>АДРЕС ДЕЛИТЕЛЯ</th></tr>';


for ($i=0;$i<count($rez2); $i++)

{

$rez2[$i] = substr($rez2[$i+10],8);

$gu = ($rez2[$i]);

$tr= str_replace("Hex-STRING:", "", $rez1[$i]);

$str=implode(":",str_split(str_replace(" ","",$tr),2));

$der= trim (str_replace("INTEGER:", "", $Signal[$i])/10);

$port = str_replace("","",$ports[$i+10]);

$results = $mysqli->query("SELECT realname.realname,realname.login,users.login,users.ip,address.login,address.aptid,apt.id,apt.buildid,build.id,build.streetid,build.buildnum,street.id,street.streetname,pononu.login,pononu.mac,delitonu.login,delitonu.addressonu,delitonu.del FROM realname,users,address,apt,build,street,pononu,delitonu  WHERE realname.login=users.login  AND realname.login=address.login AND realname.login=delitonu.login  AND address.aptid=apt.id AND apt.buildid=build.id AND build.streetid=street.id AND users.login=pononu.login AND pononu.mac='$str'  ");

while($row = $results->fetch_assoc()) {

$numer = $numer+1;



$ber = ($rez2[$i]);
//$ger = snmp2_walk(10.79.254.245,"public", '1.3.6.1.4.1.3320.101.10.5.1.5.11'); 
$port2=substr($port,7);
    print '<tr>';
    print '<td>'.$numer.'</td>';    
    print '<td style="font-size:14px;">'.$port2.'</td>';
    print '<td style="color:black;font-size:12px;font-weight:bold;">'.$row["realname"].'</td>';
    print '<td style="font-size:12px;">'.$row["streetname"].'</td>';
    print '<td>'.$row["buildnum"].'</td>';
    print '<td>'.$row["mac"].'</td>';
    print '<td>'.$str.'</td>';
    print '<td>'.$row["ip"].'</td>';
    print '<td>'.$der.'</td>';
    print '<td style="color:blue;font-size:12px;font-weight:bold;">'.$row["del"].'</td>';
    print '<td style="font-weight:bold;">'.$row["addressonu"].'</td>';
//    print '<td>'.$rez2[$i].'</td>';
//    print '<td>'.$ber.'</td>';
//    print '<td>'.$der.'</td>';
//  print '<td style="color:white;background:green;"id="pin2">'.$row["ip"].'</td>';
    print '</tr>';
}

}

print '</table>';




?>
