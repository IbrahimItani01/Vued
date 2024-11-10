<?php
session_start();
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
        $response = [];
        $response['status']= "Success";
        $response["message"]= 'password is correct';
        echo json_encode($response);

    }else{
        $response = [];
        $response['message'] = "check code";
        echo json_encode($response);
    }

}