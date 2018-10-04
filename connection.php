<?php

// Create connection
$conn = mysqli_connect(null,'root', 'MFys980304','registration',null,'/cloudsql/s3548974-cc2018:australia-southeast1:cloud');

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
$sql = "Select * from users";
$results=mysqli_query($conn, $sql);
if (mysqli_query($conn, $sql)) {
    print_r($results);
} else {
    echo "Error creating table: " . mysqli_error($conn);
}

mysqli_close($conn);
?>