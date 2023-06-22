<?php
$name = $_POST['uname'];
$email = $_POST['email'];
$comment = $_POST['comment'];

// Validate Name field
if (empty($name) || strlen(trim($name)) < 2) {
  die('Error: Please enter your first and last name.');
}

// Validate Email field
if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
  die('Error: Please enter a valid email address.');
}

// Validate Comment field
if (empty($comment) || strlen(trim($comment)) > 150) {
  die('Error: Please limit your comment to 150 characters or less.');
}

// If all fields are valid, send an email or save the data to a database
// For example:

echo 'Thank you for your submission!';
?>