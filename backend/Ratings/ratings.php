<?php
include('../connection.php');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $user_id = $_POST['user_id'];
    $movie_id = $_POST['movie_id'];
    $rate_value = $_POST['rate_value'];

    $sql = "INSERT INTO ratings (user_id, movie_id, rate_value) VALUES ('$user_id', '$movie_id', '$rate_value')";
    if ($connection->query($sql) === TRUE) {
        echo json_encode(["message" => "Rating added successfully"]);
    } else {
        echo json_encode(["error" => "Error: " . $connection->error]);
    }
}

