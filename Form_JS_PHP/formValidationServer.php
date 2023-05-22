<?php
 if ($_SERVER['REQUEST_METHOD'] != 'POST' ){

header ($_SERVER ["SERVER_PROTOCOL"]." 405 Method Not Allowed", true, 405);
die ("<h1>Error: 405 Method Not Allowed</h1>");

 // Clean the input (remove extra whitespaces
 $Nname = trim($_POST ["uname"]) ;
 $email = trim($_POST(["email"]));
 $comment = trim($_POST(["ucomment"]));

 if (empty($Nname) || empty($email) || empty($comment)) {

   echo "<p>Error: User name, email, and password data are required. </p>" ;

return;
 }

 //name validation
 $unamelength = strlen($Nname);
  if(preg_match($Nname)) {
echo "<p>name is valid</p>";
  }else {
echo "<p>Error: Invalid user name. User name must be between 8 and 32 characters and may contal</p>";
 }

 //comment validation
 $unamelength = strlen($comment);
  if(preg_match($comment)) {
echo "<p>comment is valid</p>";
  }else {
echo "<p>Error: Invalid writen must be at most 150 charecter</p>";
 }


// Email validation
  (filter_var($email, FILTER_VALIDATE_EMAIL)) {
echo "«p>Email address is valid.</p>";
   } else {
echo "«p>Error: Invalid email address.</p>":
   }