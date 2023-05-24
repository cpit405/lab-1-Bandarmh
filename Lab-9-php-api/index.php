<?php 

require_once('./db_connections.php');

header("Content-Type:application/json");
if ($_SERVER["REQUEST_METHOD"] == "GET"){
    require('./get_todos.php');
    get_all_todos();
}


?>