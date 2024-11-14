<?php

include ('../connection.php');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (isset($_POST['user_id']) && isset($_POST['movie_id'])) {
        $user_id = $_POST['user_id'];
        $movie_id = $_POST['movie_id'];

        $stmt = $connection->prepare("DELETE FROM bookmarks WHERE user_id = ? AND movie_id = ?");
        $stmt->bind_param("ii", $user_id, $movie_id);

        if ($stmt->execute()) {
            http_response_code(response_code: 200);
            echo json_encode(["message" => "Bookmark deleted successfully"]);
        } else {
            http_response_code(response_code: 404);
            echo json_encode(["error" => "Error: " . $stmt->error]);
        }

        $stmt->close();
    } else {
        http_response_code(405);
        echo json_encode(["error" => "Missing required fields: user_id and movie_id"]);
    }
} else {
    http_response_code(500);
    echo json_encode(["error" => "Invalid request method. Use POST."]);
}
