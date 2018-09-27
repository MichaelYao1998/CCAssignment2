<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <link href="https://fonts.googleapis.com/css?family=Fontdiner+Swanky|Graduate|Oregano" rel="stylesheet">
<?php
if(isset($_POST["temperature"]))
{
	header("Location: temperature.php");
}
if(isset($_POST["rainfall"]))
{
	header("Location: index.php");
}
?>
<form method="post">
<input type="submit" name ="rainfall" value="Rainfall of States" />
<input type="submit" name ="temperature" value="Temperature of States" />

</form>
</head>
</html>