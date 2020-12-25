<?php
include_once 'config.php';

$logan=$_GET['login'];

$address=$_GET['adres'];

$del=$_GET['del'];


// Create connection

$conn = new mysqli($server, $username, $password,$database);


<?php

include_once 'config.php';

$logan=$_GET['login'];

$address=$_GET['adres'];

$del=$_GET['del'];



// Create connection

$conn = new mysqli($server, $username, $password,$database);
$conn->set_charset("utf8");
// Check connection
if (!$conn) {
die("Connection failed: " . mysqli_connect_error());
}
#echo "Connected successfully";

$sql = "INSERT INTO delitonu (login, addressonu, number,cat) VALUES ('$logan','$address','$del','2')";
if (mysqli_query($conn, $sql)) {
      echo '<b style="color:red;font-size:20px;font-family:Arial;">'."▒~_▒| ▒~X▒~RЯ▒~W▒~Z▒~P ▒~^СУЩ▒~UСТ▒~R▒~[▒~U▒~]▒~P".'</b>';
} else {
      echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}
mysqli_close($conn);



?>

