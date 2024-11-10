<?php
$host = 'localhost';
$username = 'root';
$pass = '';
$db = 'vueddb';

$connection = new mysqli($host,$username,$pass,$db);

if($connection -> connect_error){
    echo"connection failed";
}