<?php

/**
 * Send contact form message
 */

#YOUR E-MAIL
define('TO', 'mail here');
##E-MAIL SUBJECT
define('SUBJECT', 'Contact Form!');


$message = 'Message from: ' . $_POST['name'] . ' <'.$_POST['email'].'>' . "\n
Subject: " . $_POST['subject'] . "\n
Message: " . $_POST['message'];


if (mail(TO, SUBJECT, $message)){
	echo 'ok';
}else{
	echo 'Error occurred while sending email';
}

/**
* end of file
*/