<?php
include('../connection.php');

$user_id = $_POST['user_id'];
$movie_id = $_POST['movie_id'];

$query = $connection->prepare("DELETE FROM ratings WHERE user_id = ? AND movie_id = ? ");
$query->bind_Param('ii', $user_id, $movie_id);

if ($query->execute()) {
    echo json_encode(["message" => "Rating deleted successfully."]);
} else {
    echo json_encode(["message" => "Error deleting rating."]);
}
?>