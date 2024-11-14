<?php
include "../connection.php";
$data = json_decode(file_get_contents("php://input"), true);
$targetId = $data["movieId"];

$query = $connection->prepare("SELECT id,title,image_url from movies where id>=? limit 4");
$query->bind_param("i", $targetId);
$query->execute();
$result = $query->get_result();
if($result->num_rows > 0) {
    http_response_code(200);
    $response =[
        "status"=>"success",
        "message"=>"records fetched",
        "array"=>$result->fetch_all(MYSQLI_ASSOC),
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