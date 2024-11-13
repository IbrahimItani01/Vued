<?php
include "connection.php";
$targetId = $_POST["movieId"];

$query = $connection->prepare("SELECT * from movies where id=?");
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