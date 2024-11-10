<?php

include "connection.php";
$count=0;
$jsonData1 = file_get_contents("../scraper/movieDataCollection1.json");
$jsonData2 = file_get_contents("../scraper/movieDataCollection2.json");

$moviesArray1 = json_decode($jsonData1,true) ;
$moviesArray2 = json_decode($jsonData2,true) ;

if ($moviesArray1==null || $moviesArray2==null){
    echo "Error decoding JSON: ";
    exit;
}
foreach ($moviesArray1 as $movie){
    $title = $connection->real_escape_string($movie["title"]);
    $duration = (int)$movie["duration"];
    $genre = $connection->real_escape_string($movie["genre"]);
    $imageUrl = $connection->real_escape_string($movie["imageUrl"]);
    $releaseDate = $connection->real_escape_string($movie["releaseDate"]);
    $description = $connection->real_escape_string($movie["description"]);

    $query = $connection->prepare("INSERT INTO movies (title, duration, genre, imageUrl, releaseDate, description) 
            VALUES (?, ?, ?, ?, ?, ?)");
    $query->bind_param("sissss",$title,$duration,$genre,$imageUrl,$releaseDate,$description);
    $query->execute();
    if($query->affected_rows>0){
        $count++;
    }
}