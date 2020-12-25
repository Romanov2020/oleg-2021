<?php 

include_once 'config.php';

// Database configuration 
 
// Create database connection 
$db = new mysqli($server, $username, $password, $database); 
$db->set_charset("utf8"); 
// Check connection 
if ($db->connect_error) { 
    die("Connection failed: " . $db->connect_error); 
} 
 
// Get search term 
$searchTerm = $_GET['term']; 
$tarif = 'GEPON'; 
// Fetch matched data from the database 
$query = $db->query("SELECT realname.login,realname.realname,users.login,users.Tariff,users.ind FROM realname,users WHERE realname.login=users.login AND realname.realname LIKE '%".$searchTerm."%' AND users.Tariff LIKE 'GEPON%'AND users.ind!=1"); 
 
// Generate array with skills data 
$skillData = array(); 
if($query->num_rows > 0){ 
    while($row = $query->fetch_assoc()){  
        $data['login'] = $row['login'];
        $data['value'] = $row['realname'];
         
        array_push($skillData, $data); 
    } 
} 
 
// Return results as json encoded array 
echo json_encode($skillData); 


?>

