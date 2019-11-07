<?php
$data = json_decode(file_get_contents("php://input"));
include "db.php";
$sql = "INSERT INTO users(user_fname, user_lname, user_gender, user_birthday, user_email, user_address, user_phone) ";
$sql .= "VALUES ('$data->fname', '$data->lname', '$data->gender', '$data->birthday', '$data->email', '$data->address', '$data->phone')";
if ($data->fname) {
	$query = $connection->query($sql);
}
$connection->close();
