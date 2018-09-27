<?php
$servername="local host";
$username = "username";
$password = "password";

//create connection
$conn = mysqli_connect($servername, $username, $passowrd);

// Check connection
if(!$conn){
	die("Connection failed: " .mysqli_connect_error());
}
echo"Connected successfully";
?>