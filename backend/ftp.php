<?php 
$target = "IDV10751.xml";
$url = "ftp.bom.gov.au";

// connect to the server
$conn = ftp_connect($url) or die("Could not connect to server");
$username = "anonymous";
$password = "guest";
// login as anonymous
if (ftp_login($conn, $username, $password)) {
    echo "Connection established";
}
else {
    echo "Could not establish connection";
}

// close the connection
ftp_close($conn);

?>
