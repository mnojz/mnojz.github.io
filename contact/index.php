<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="style.css" />
  <title>contact</title>
</head>

<body>
  <div class="container">
    <form onsubmit="sendEmail(); reset(); return false;">
      <input type="text" name="name" placeholder="your name" required />
      <input type="email" name="email" placeholder="email id" required />
      <input type="text" name="subject" placeholder="subject" required />
      <textarea name="message" rows="5" placeholder="message"></textarea>
      <button type="submit">send</button>
    </form>
  </div>
</body>

</html>

<?php
$to = "mj8303987@gmail.com";
$subject = "hello world";
$message = "hi this is msg";
$headers = "From : your.bloody.friend@gmail.com";

mail($to, $subject, $message, $headers);
?>