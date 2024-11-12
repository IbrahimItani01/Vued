<?php
session_start();
include 'connection.php';

if ($_SERVER['REQUEST_METHOD']=='POST'){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password= $_POST['password'];
}

$test_sql= "SELECT email FROM users where email = ?";

$test_stmt = $connection->prepare($test_sql);

$test_stmt->bind_param("s",$email);

$test_stmt->execute();

$test_stmt->store_result();

// testing if the admin is already existing
if($test_stmt->num_rows > 0){
    $response= [];
    $response['status']= "failed";
    $response['massege']= "Admin existing";
    http_response_code(404);
    echo json_encode($response);

}else{
    $sql = "INSERT INTO users(email,password,name,favorite_genre,banned,user_type) VALUES(?,?,?,?,?,?)";

    $stmt = $connection-> prepare($sql);

    // preparing other fields
    $hashed_pass = password_hash($password,PASSWORD_DEFAULT);

    $fav_genre = "none";

    $banned = "0";
    
    $user_type = "admin";

    $stmt->bind_param("ssssss", $email, $hashed_pass,$name, $fav_genre, $banned,$user_type);

    if ($stmt->execute()){
        $response = [];
        $response['status'] = 'success';
        $response['message'] = 'Admin successfully registered!';
        http_response_code(200);
        echo json_encode($response);
    }else{
        $response = [];
        $response['status'] = "failed";
        $response['massege'] = "admin already registed!";
        http_response_code(404);
        echo json_encode($response);
    }
}