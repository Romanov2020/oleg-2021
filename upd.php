<?php

$logan=$_GET['login'];

$address=$_GET['adres'];

$del=$_GET['del'];

$port=$_GET['port'];

$oltip=$_GET['oltip'];

$tip=$_GET['tip'];


$servername = "localhost";

$username = "root";

$password = "mys1ca6f678";

$dbname = "stg";
// Create connection

$conn = new mysqli($servername, $username, $password,$dbname);
$conn->set_charset("utf8");
// Check connection
if (!$conn) {
die("Connection failed: " . mysqli_connect_error());
}
#echo "Connected successfully";
//echo $tip;
$dateoper=date('y-m-d H:i:s');

$sql = "UPDATE users SET ind=1 WHERE login='$logan'";



if (mysqli_query($conn, $sql)) {


} else {
      echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}
mysqli_close($conn);


?>

