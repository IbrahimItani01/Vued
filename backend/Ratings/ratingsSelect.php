<?php

include('../connection.php');

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

?>

