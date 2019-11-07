<?php
$data = json_decode(file_get_contents("php://input"));
include "db.php";
$sql = "DELETE FROM users WHERE user_id = $data->id";
$result = $connection->query($sql);
$connection->close();
