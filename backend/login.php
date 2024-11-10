<?php
session_start();
include 'connection.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST'){
    $email = $_POST['login_email'];
    $hashed_pass = $_POST['login_pass'];
}

$sql = 'SELECT FROM users where email = ?';

$stmt = $connection-> prepare($sql);

$stmt->bind_param("s",$email);

$stmt->execute();

$stmt->store_result();

if ($stmt-> num_rows == 1){

}