<?php
  session_start();
  if(isset($_GET['logout'])){
	  session_destroy();
	  unset($_SESSION['username']);
	  header("location: login.php");
  }
  if(isset($_GET['logout'])){
	  session_destroy();
	  unset($_SESSION['username']);
	  header("location: login.php");
  }
?>
<!DOCTYPE html>
<html>
<head>
  <title>Test</title>
</head>
<body>
<p>You are login successfully! </p>
<p> <a href="test.php?logout='1'" style="color: red;">logout</a> </p>
</body>
</html>