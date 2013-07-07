<?php 
	$name = $_POST['nameinput'];
	$email = $_POST['emailinput'];
	$message = $_POST['messageinput'];
	$formcontent="From: $name \n Message: $message";
	$recipient = "boyangh@gmail.com";
	$subject = "From e-resume";
	$mailheader = "From: $email \r\n";
	mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
?>
<body onload = "location.href = 'bo.html'"></>
