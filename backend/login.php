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

        $sql2= 'SELECT user_type, banned FROM users where email = ? '
        
        $stmt2 = $connection->prepare($sql2);

        $stmt2->bind_param("s",$email);

        $stmt2->execute();

        $stmt->store_result();

        

        $reesponse = [];
        $response['status']= "Success";
        $response["message"]= 'password is correct';
        http_response_code(200);
        echo json_encode($response);

        // take the user to the main page
        // header();

    }else{
        $response = [];
        $response['status'] = "login failed";
        $response['message'] = "Password incorrect!";
        http_response_code(404);
        echo json_encode($response);
    }

}
