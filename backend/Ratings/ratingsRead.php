

<?php
include('../connection.php');

$user_id = $_POST['user_id'];
$movie_id = $_POST['movie_id'];

$query = $connection->prepare("SELECT * FROM ratings WHERE user_id = ? AND movie_id = ?");
$query->bind_param('ii', $user_id, $movie_id);
$query->execute();

$result = $query->get_result();
$array = $result->fetch_assoc();

if ($array) {
    http_response_code(200);
    echo json_encode($array);
} else {
    http_response_code(404);
    echo json_encode(["message" => "No rating found."]);
}
?>