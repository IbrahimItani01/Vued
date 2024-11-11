<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type");

$host = 'localhost';
$username = 'root';
$pass = '';
$db = 'vueddb';

$connection = new mysqli($host,$username,$pass,$db);

if($connection -> connect_error){
    echo"connection failed";
}