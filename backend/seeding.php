<?php

include "connection.php";

$jsonData1 = file_get_contents("../scraper/movieDataCollection1.json");
$jsonData2 = file_get_contents("../scraper/movieDataCollection2.json");

$moviesArray1 = json_decode($jsonData1,true) ;
$moviesArray2 = json_decode($jsonData2,true) ;

 echo gettype($moviesArray1);