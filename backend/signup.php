<?php
session_start();
include 'connection.php';

if ($_SERVER['REQUEST_METHOD']=='POST'){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password= $_POST['password'];
    $fav_genre = $_POST['fav_genre'];
}
