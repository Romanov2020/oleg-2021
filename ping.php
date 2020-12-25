<?php
$host=$_GET['host'];

$str = shell_exec("ping -c 4 $host");
echo "<br>";
echo $str."</br>";
if ($result == 0){
  echo "ping succeeded";
}else{
  echo "ping failed";
}
?>
