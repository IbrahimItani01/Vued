<?php

include('../connection.php');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $user_id = $_POST['user_id'];
    $movie_id = $_POST['movie_id'];
    $rate_value = $_POST['rate_value'];

    $stmt = $connection->prepare("INSERT INTO ratings (user_id, movie_id, rate_value) VALUES (?, ?, ?)");

    $stmt->bind_param("iii", $user_id, $movie_id, $rate_value);

    if ($stmt->execute() && $stmt->affected_rows > 0) {
        http_response_code(200);
        echo json_encode(["message" => "Rating added successfully"]);
    } else {
        http_response_code(404);
        echo json_encode(["error" => "Error: " . $stmt->error]);
    }

    $stmt->close();
}


