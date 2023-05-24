<?php

$servername = "localhost";
$username = getenv('DB_USER');
$password = getenv('DB_PW');
$database = "todo_db";

$conn = new mysqli($servername, $username, $password, $database);

// check the connection
if ($conn->connect_error) {
    // exit and kill this process
    echo "Failed to connect to database!";
    die("Connection failed: ");
}

?>