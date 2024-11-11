<?php

include ('../connection.php');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (isset($_POST['user_id']) && isset($_POST['movie_id'])) {
        $user_id = $_POST['user_id'];
        $movie_id = $_POST['movie_id'];

        $stmt = $connection->prepare("DELETE FROM bookmarks WHERE user_id = ? AND movie_id = ?");
        $stmt->bind_param("ii", $user_id, $movie_id);

        if ($stmt->execute()) {
            echo json_encode(["message" => "Bookmark deleted successfully"]);
        } else {
            echo json_encode(["error" => "Error: " . $stmt->error]);
        }

        $stmt->close();
    } else {
        echo json_encode(["error" => "Missing required fields: user_id and movie_id"]);
    }
} else {
    echo json_encode(["error" => "Invalid request method. Use POST."]);
}
?>