<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $user_id = isset($_POST['user_id']) ? $_POST['user_id'] : null;

    $sql = "SELECT * FROM bookmarks";
    if ($user_id) {
        $sql .= " WHERE user_id = ?";
        $stmt = $connection->prepare($sql);
        $stmt->bind_param("i", $user_id);
    } else {
        $stmt = $connection->prepare($sql);
    }

    $stmt->execute();
    $result = $stmt->get_result();
    $bookmarks = [];

    while ($row = $result->fetch_assoc()) {
        $bookmarks[] = $row;
    }

    echo json_encode($bookmarks);
    $stmt->close();
} else {
    echo json_encode(["error" => "Invalid request method. Use POST."]);
}
?>