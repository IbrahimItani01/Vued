<?php
include 'connection.php';

$sql = 'SELECT * From users where banned = ?';

$banned = "0";

$stmt = $connection->prepare($sql);

$stmt->bind_param("s",$banned);

$stmt->execute();

$result = $stmt->get_result();

while($user = $stmt->fetch_assoc())
