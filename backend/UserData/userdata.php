<?php
include('../connection.php');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $sql = "SELECT id, email, name, favorite_genre, banned, user_type, chats_id FROM users";
    
    $result = $connection->query($sql);
    $users = [];
    
    while ($row = $result->fetch_assoc()) {
        $users[] = $row;
    }
    if(count($users) > 0) {
        http_response_code(200);
        echo json_encode($users);
    }
    else{
        http_response_code(404);
        echo "no users in db";
    }

}