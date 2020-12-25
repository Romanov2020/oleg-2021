<?php


$ipolt=$_GET['ipolt'];

$sosport =(snmp2_walk($ipolt,"public",'.1.3.6.1.4.1.3320.101.6.1.1.2'));

$po1=str_replace("INTEGER:","",$sosport[0]);
$po2=str_replace("INTEGER:","",$sosport[1]);
$po3=str_replace("INTEGER:","",$sosport[2]);
$po4=str_replace("INTEGER:","",$sosport[3]);


echo '<b style="position:absolute;z-index:7;color:white;left:170px;top:2px;font-size:26px;Font-family:Arial;width:300px;max-width:10px;max-height:10px;" >'.$po1.'</b>';
echo '<b style="position:absolute;z-index:7;color:white;left:223px;top:2px;font-size:26px;Font-family:Arial;width:150px;" >'.$po2.'</b>';
echo '<b style="position:absolute;z-index:7;color:white;left:280px;top:2px;font-size:26px;Font-family:Arial;width:600px;" >'.$po3.'</b>';
echo '<b style="position:absolute;z-index:7;color:white;left:340px;top:2px;font-size:26px;Font-family:Arial;width:300px;" >'.$po4.'</b>';

?>
