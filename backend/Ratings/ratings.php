<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type");

include('../connection.php');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $user_id = $_POST['user_id'];
    $movie_id = $_POST['movie_id'];
    $rate_value = $_POST['rate_value'];

    $stmt = $connection->prepare("INSERT INTO ratings (user_id, movie_id, rate_value) VALUES (?, ?, ?)");

    $stmt->bind_param("iii", $user_id, $movie_id, $rate_value);

    if ($stmt->execute()) {
        echo json_encode(["message" => "Rating added successfully"]);
    } else {
        echo json_encode(["error" => "Error: " . $stmt->error]);
    }

    $stmt->close();
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $user_id = isset($_POST['user_id']) ? $_POST['user_id'] : null;
    $movie_id = isset($_POST['movie_id']) ? $_POST['movie_id'] : null;
    
    $sql = "SELECT * FROM ratings";
    $conditions = [];

    if ($user_id) $conditions[] = "user_id = '$user_id'";
    if ($movie_id) $conditions[] = "movie_id = '$movie_id'";

    if (count($conditions) > 0) {
        $sql .= " WHERE " . implode(" AND ", $conditions);
    }

    $result = $connection->query($sql);
    $ratings = [];
    while ($row = $result->fetch_assoc()) {
        $ratings[] = $row;
    }
    echo json_encode($ratings);
}

if ($_SERVER['REQUEST_METHOD'] == 'DELETE') {
    parse_str(file_get_contents("php://input"), $_DELETE);
    $id = $_DELETE['id'];

    $sql = "DELETE FROM ratings WHERE id = '$id'";
    if ($conn->query($sql) === TRUE) {
        echo json_encode(["message" => "Rating deleted successfully"]);
    } else {
        echo json_encode(["error" => "Error: " . $conn->error]);
    }
}
