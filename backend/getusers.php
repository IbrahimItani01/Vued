<?php
include 'connection.php';

$sql = 'SELECT * From users where banned = ?';

$stmt = $connection->prepare($sql);


