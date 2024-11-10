<?php
include "connection.php";

$queryScript = "SELECT title,image_url from movies";

$query = $connection->prepare($queryScript);
$query->execute();
$result = $query->get_result();
if($result->num_rows > 0){
    $resultArray =[];
    while($row = $result->fetch_assoc()){
        $resultArray[]= $row;
    }
    $response =[
        "status"=>"success",
        "message"=>"records fetched",
        "array"=>$resultArray,
    ];
    echo json_encode($response);
}
else{
    $response=[
        "status" => "error",
        "message" => "empty records",
        "array" => [],
    ];
    echo json_encode($response);
}