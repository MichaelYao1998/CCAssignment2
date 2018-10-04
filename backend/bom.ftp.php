<?php 
$target = "IDV10751.xml";
$bom_server = "ftp://ftp.bom.gov.au/anon/gen/fwo/IDV10751.xml";
$data = implode("", file($bom_server));
$xml = new SimpleXMLElement($data)
print_r($xml);

/*$wd = "anon/gen/fwo";
$username = "anonymous";
$password = "";

// connect to the server
$conn = ftp_connect($bom_server) or die("Could not connect to server");
// login as anonymous
ftp_login($conn, $username, $password) or die ("could not login");
// change working directory
ftp_chdir($conn, $wd) or die ("path does not exist");
// open a stream to write to
$storage = "forecast.txt";
$fp = fopen($storage, "w");

if (ftp_get($conn, $storage, $target, FTP_ASCII)) {
  echo "success";
} else {
    echo "failure";
}

// close the connection
ftp_close($conn);
fclose($fp);
 */
?>
