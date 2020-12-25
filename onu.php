<?php

#$id=$_GET['term'];

include_once 'config.php';

$mysqli = new mysqli($server,$username,$password,$database);
$mysqli->set_charset("utf8");

//Output any connection error
if ($mysqli->connect_error) {
    die('Error : ('. $mysqli->connect_errno .') '. $mysqli->connect_error);
}

//MySqli Select Query
$results = $mysqli->query("SELECT realname.realname,realname.login,users.login,users.ip,pononu.login,pononu.mac,address.login,address.aptid,apt.id,apt.buildid,build.id,build.streetid,build.buildnum,street.id,street.streetname,delitonu.login,delitonu.number,delitonu.index  FROM realname,users,pononu,address,apt,build,street,delitonu WHERE realname.login=users.login AND realname.login=pononu.login AND realname.login=address.login AND address.aptid=apt.id AND apt.buildid=build.id AND build.streetid=street.id AND realname.login=delitonu.login AND delitonu.index=106 ");

$res = $mysqli->query("SELECT users.login,users.ip,nethosts.mac,nethosts.ip FROM users,nethosts WHERE users.ip=nethosts.ip AND users.ip='10.79.50.26' ");


$onu=86;

$result=(snmp2_walk("10.79.254.245","public","1.3.6.1.4.1.3320.101.10.5.1.5.$onu"));



for ($i=0; $i<count($result);$i++)
{
$result[$i] = substr($result[$i],8);

$signal= $result[$i]/10;




}


while($row = $results->fetch_assoc()) {


$name=$row["realname"];
$address=$row["streetname"];
$numer=$row["buildnum"];
$maconu=$row["mac"];
$ipkl=$row["ip"];
$port=$row["number"];


    echo $name."<br>";
    echo $address." ";
    echo $numer."<br>";
    echo "<b>"."MACONU: "."</b>".$maconu."<br>";
    echo "<b>"."IPADRESS: "."</b>".$ipkl."<br>";
    echo $number."<br>";
    
}

#print '</table>';



while($sow = $res->fetch_assoc()) {

$mas=$sow["mac"]; }

echo "         Konechiq MAK: ".$mas."<br>";
echo "         SIGNAL: ".$signal."<br>";

// Frees the memory associated with a result
$results->free();

// close connection
$mysqli->close();



?>

