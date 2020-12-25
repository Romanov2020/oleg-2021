<?php

$ipolt=$_GET['ip'];
$adres=$_GET['a'];
$port=$_GET['p'];
$del=$_GET['id'];

echo '<b style="position:absolute;z-index:7;color:white;left:60px;top:20px;Font-family:Arial;width:300px;">'."ИП коммутатора: ",$ipolt.'</b>';
echo '<b style="position:absolute;z-index:7;color:white;left:430px;top:20px;Font-family:Arial;width:150px;" >'."Делитель №: ",$del.'</b>';
echo '<b style="position:absolute;z-index:7;color:white;left:60px;top:50px;Font-family:Arial;width:600px;" >'."Адрес делителя: ",$adres.'</b>';
echo '<b style="position:absolute;z-index:7;color:white;left:430px;top:50px;Font-family:Arial;width:300px;" >'."Порт коммутатора: ",$port.'</b>';



?>


<html>

<div class="data-php21" data-attr="<?=$del; ?>"></div>
<div class="data-php12" data-attr="<?=$adres;?>"></div>
<div class="data-php44" data-attr="<?=$port; ?>"></div>
<div class="data-php24" data-attr="<?=$ipolt;?>"></div>



</html>




