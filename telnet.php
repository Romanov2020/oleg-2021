<?php

include_once './phptelnet_puh.php';
//Инициализируем класс и подключаемся к серверу
$telnet= new php_telnet('10.79.254.246','admin','sumy19051868');
// В случае отсутствия ошибок подключения выполняем команды
if (!$telnet->err_num){
// Метод do_comand принимает 2 аргумента: команда и необходимость вернуть результат, в случае когда 2-й аргумент не указан, результат выполнения возвращаться не будет
echo $telnet->do_comand("'help ", true);
//отключение от сервера с указанием команды завершения сеанса, если команда не указана, произойдет обрыв соединения
$telnet->disconect('exit');
}


?>
