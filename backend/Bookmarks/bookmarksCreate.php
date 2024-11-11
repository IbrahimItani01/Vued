<?php
include ('../connection.php');
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $user_id = $_POST['user_id'];
    $movie_id = $_POST['movie_id'];

    $stmt = $connection->prepare("INSERT INTO bookmarks (user_id, movie_id) VALUES (?, ?)");

    $stmt->bind_param("ii", $user_id, $movie_id);

    if ($stmt->execute()) {
        echo json_encode(["message" => "Booksmark added successfully"]);
    } else {
        echo json_encode(["error" => "Error: " . $stmt->error]);
    }

    $stmt->close();
}

?>

