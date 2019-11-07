<?php
$data = json_decode(file_get_contents("php://input"));
include "db.php";
$sql = "UPDATE users SET user_fname = '$data->user_fname', ";
$sql .= "user_lname = '$data->user_lname', ";
$sql .= "user_gender = '$data->user_gender', ";
$sql .= "user_birthday = '$data->user_birthday', ";
$sql .= "user_email = '$data->user_email', ";
$sql .= "user_address = '$data->user_address', ";
$sql .= "user_phone = '$data->user_phone' ";
$sql .= "WHERE user_id = $data->user_id ";
$query = $connection->query($sql);
if ($data->fname) {
    
}
$connection->close();
