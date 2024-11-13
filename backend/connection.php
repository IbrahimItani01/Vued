<?php

header("Access-Control-Allow-Origin: http://localhost:5500");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Credentials: true");

$host = 'localhost';
$username = 'root';
$pass = '';
$db = 'vueddb';

$connection = new mysqli($host,$username,$pass,$db);

if($connection -> connect_error){
    echo"connection failed";
}