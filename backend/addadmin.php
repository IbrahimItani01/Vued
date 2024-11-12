<?php
session_start();

if ($_SERVER['REQUEST_METHOD']=='POST'){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password= $_POST['password'];
}

// $fav_genre = "none";
$test_sql= 'SELECT email FROM users where email = ?';

$test_stmt = $connection->prepare($test_sql);

$test_stmt->bind_param("s",$email);

$test_stmt->execute();

$test_stmt->store_results();

if($test_stmt->num_rows > 0){
    $response= [];
    $response['status']= "failed";
    $response['massege']= "Admin existing";
    http_response_code(404);
}