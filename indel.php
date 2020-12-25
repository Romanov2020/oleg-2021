

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

$sql = "INSERT INTO delitonu (login, addressonu, number,cat,port,del,ipolt,date_oper,oper) VALUES ('$logan','$address','$del','2','$port','$tip','$oltip','$dateoper','ins')"; 



if (mysqli_query($conn, $sql)) {
//echo '<script type="text/javascript">';
//echo ' alert("ПРИВЯЗКА ОСУЩЕСТВЛЕНА.ЖЕЛАЕТЕ ПРОДОЛЖИТЬ ?")';  //not showing an alert box.
//echo '</script>';

} else {
      echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}
mysqli_close($conn);


?>



