<?php
session_start();
include 'connection.php';

if ($_SERVER['REQUEST_METHOD']=='POST'){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password= $_POST['password'];
    $fav_genre = $_POST['fav_genre'];
}
$hashed_pass = password_hash($password, PASSWORD_DEFAULT);
echo $hashed_pass;
$sql = "INSERT INTO users(email,password,name,favorite_genre,banned,user_type) VALUES(?,?,?,?,?,?)";

$user_type = "normal";

$banned = false;

$stmt = $connection->prepare($sql);

$stmt->bind_param("ssssss",$email,$hashed_pass,$name,$fav_genre,$banned,$user_type); 

if ($stmt->execute()){
    $response = [];
    $response['status'] = 'success';
    $response['message'] = 'User successfully registered!';
    echo json_encode($response);
    // header();
}else{
    $response['status'] = 'error';
    $response['message'] = 'error preparing statement' . $stmt->error;
}