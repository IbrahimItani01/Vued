<?php
include "../connection.php";
$data = json_decode(file_get_contents("php://input"), true);
$targetId = $data["userId"];

$query = $connection->prepare("SELECT favorite_genre from users where id=?");
$query->bind_param("i", $targetId);
$query->execute();
$result = $query->get_result();
if($result->num_rows > 0) {
    http_response_code(200);
    $response =[
        "status"=>"success",
        "message"=>"records fetched",
        "array"=>$result->fetch_assoc(),
    ];
}
else {
    http_response_code(404);
    $response =[
        "status"=>"error",
        "message"=>"empty record",
        "array"=>[],
    ];
}
echo json_encode($response);