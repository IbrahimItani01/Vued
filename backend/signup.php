<?php
session_start();
include 'connection.php';

if ($_SERVER['REQUEST_METHOD']=='POST'){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password= $_POST['password'];
    $fav_genre = $_POST['fav_genre'];
}

$sql2= 'SELECT email FROM users where email = ?';

$stmt2 = $connection->prepare($sql2);

$stmt2->bind_param("s",$email);

$stmt2->execute();

$stmt2->store_result();

if($stmt2->num_rows > 0){
    $response = [];
    $response['status'] = 'failed';
    $response['message'] = 'User already registered';
    http_response_code(404);
    echo json_encode($response);
    exit;
}
else{
    // adding the user 
$hashed_pass = password_hash($password, PASSWORD_DEFAULT);

$sql = "INSERT INTO users(email,password,name,favorite_genre,banned,user_type) VALUES(?,?,?,?,?,?)";

$user_type = "normal";

$banned = '0';

$stmt = $connection->prepare($sql);

$stmt->bind_param("ssssss",$email,$hashed_pass,$name,$fav_genre,$banned,$user_type); 

if ($stmt->execute()){
    $response = [];
    $response['status'] = 'success';
    $response['message'] = 'User successfully registered!';
    http_response_code(200);
    echo json_encode($response);
}else{
    $response = [];
    $response['status'] = 'error';
    $response['message'] = 'error preparing statement' . $stmt->error;
    http_response_code(404);
}
}
