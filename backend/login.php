<?php
session_start();

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
include 'connection.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST'){
    $email = $_POST['login_email'];
    $password = $_POST['login_pass'];
}

$sql = 'SELECT password FROM users where email = ?';

$stmt = $connection-> prepare($sql);

$stmt->bind_param("s",$email);

$stmt->execute();

$stmt->store_result();

if ($stmt-> num_rows == 1){
    // storing the retrieved pass to variable $hashed_pass
    $stmt->bind_result($hashed_pass);
    $stmt->fetch();

    // checking if the password entered is valid
    if (password_verify($password,$hashed_pass)){

        $sql2= 'SELECT user_type, banned, name,id  FROM users where email = ? ';
        
        $stmt2 = $connection->prepare($sql2);

        $stmt2->bind_param("s",$email);

        $stmt2->execute();

        $stmt2->store_result();

        $stmt2->bind_result($user_type, $banned, $name, $id);
        // get the binded results

        $stmt2->fetch();

        if($banned == "1"){
            $response = [];
            $response['status'] = "banned";
            $response['massage'] = "User banned";
            http_response_code(403);
            echo json_encode($response);
        }

        // if user is admin
        if($user_type == "admin"){
            $response = [];
            $response['status'] = "admin";
            $response['massage'] = "Hello admin"; 
            http_response_code(200);
            echo json_encode($response);    
        }
        else{
        $response = [];
        $response['status']= "normal";
        $response["message"]= 'password is correct';
        $response['id'] = $id;
        http_response_code(200);
        echo json_encode($response);
        }

    }else{
        $response = [];
        $response['status'] = "login-failed";
        $response['message'] = "Password incorrect!";
        http_response_code(404);
        echo json_encode($response);
    }

}
else{
    $response =[];
    $response['status'] = "not-found";
    $response['massege'] = "user not found, signup now";
    http_response_code(404);
    echo json_encode($response);
    
}
