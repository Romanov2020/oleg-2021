<html>
<head>

<script src="js/jquery-3.4.1.min.js"></script>


<script>

$('table').on('click','td',function() {
pi2=($(this).text());

//alert(pi2);


$(document).ready(function() {
            var da='?php echo $es;?>';
            $.get('ping.php',{host:pi2},function(data) {
                $('#ping_edge').html(data);
                });
                });


});


</script>



</head>
</html>


<?php

include_once 'config.php';

$mysqli = new mysqli($server,$username,$password,$database);
$mysqli->set_charset("utf8");

//Output any connection error
if ($mysqli->connect_error) {
    die('Error : ('. $mysqli->connect_errno .') '. $mysqli->connect_error);
}



$rez1 = snmp2_walk("10.79.254.101","public",'1.3.6.1.2.1.17.4.3.1.1');
$rez2 = snmp2_walk("10.79.254.101","public",'1.3.6.1.2.1.17.4.3.1.2');



print '<table id="edge">';
print '<tr><th>Порт</th><th>Абонент</th><th>Улица</th><th>Дом</th><th>Мак</th><th>Ип</th></tr>';






for ($i=0;$i<count($rez1); $i++)

{

$rez2[$i] = substr($rez2[$i],8);



$tr= str_replace("Hex-STRING:", "", $rez1[$i]);

$str=implode(":",str_split(str_replace(" ","",$tr),2));

#echo "Port: $rez2[$i] MAC :$str<br>";

$results = $mysqli->query("SELECT realname.realname,realname.login,users.login,users.ip,address.login,address.aptid,apt.id,apt.buildid,build.id,build.streetid,build.buildnum,street.id,street.streetname,nethosts.ip,nethosts.mac FROM realname,users,address,apt,build,street,nethosts  WHERE realname.login=users.login  AND realname.login=address.login AND address.aptid=apt.id AND apt.buildid=build.id AND build.streetid=street.id AND users.ip=nethosts.ip AND nethosts.mac='$str'");



while($row = $results->fetch_assoc()) {
    print '<tr>';
    print '<td>'.$rez2[$i].'</td>';
    print '<td>'.$row["realname"].'</td>';
    print '<td>'.$row["streetname"].'</td>';
    print '<td>'.$row["buildnum"].'</td>';
    print '<td>'.$row["mac"].'</td>';
    print '<td style="color:white;background:green;"id="pin2">'.$row["ip"].'</td>';
    print '</tr>';
}

}


print '</table>';




?>
