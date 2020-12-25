<?php

$logan=$_GET['login'];

include_once 'config.php';
// Create connection

$conn = new mysqli($server,$username,$password,$database);
$conn->set_charset("utf8");
// Check connection
if (!$conn) {
die("Connection failed: " . mysqli_connect_error());
}
#echo "Connected successfully";
echo $tip;
$dateoper=date('y-m-d H:i:s');


$sql=$conn->query("UPDATE delitonu SET oper='del',date_oper='$dateoper' WHERE login='$logan'");

if($sql){
    print 'Success! record updated / deleted';
}else{
    print 'Error : ('. $conn->errno .') '. $conn->error;
}



?>

