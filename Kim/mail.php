<?php 
	$name = $_POST['nameinput'];
	$email = $_POST['emailinput'];
	$message = $_POST['messageinput'];
	$formcontent="From: $name \n Message: $message";
	$recipient = "kimberleychen2011@gmail.com";
	$subject = "From e-resume";
	$mailheader = "From: $email \r\n";
	mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
	echo "Mail Sent. Thank You!";
?>
