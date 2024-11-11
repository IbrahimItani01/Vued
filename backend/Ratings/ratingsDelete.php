<?php

include('../connection.php');

if ($_SERVER['REQUEST_METHOD'] == 'DELETE') {
    parse_str(file_get_contents("php://input"), $_DELETE);
    $id = $_DELETE['id'];

    $sql = "DELETE FROM ratings WHERE id = '$id'";
    if ($conn->query($sql) === TRUE) {
        echo json_encode(["message" => "Rating deleted successfully"]);
    } else {
        echo json_encode(["error" => "Error: " . $connection->error]);
    }
}
