<?php

// This here blocks direct access to this file (so an attacker can't look into application/views/_templates/header.php).
// "$this" only exists if header.php is loaded from within the app, but not if THIS file here is called directly.
// If someone called header.php directly we completely stop everything via exit() and send a 403 server status code.
// Also make sure there are NO spaces etc. before "<!DOCTYPE" as this might break page rendering.
if (!$this) {
    exit(header('HTTP/1.0 403 Forbidden'));
}

?><!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="ISO-8859-1">
    <title>VEF2A V03</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" >

    <!-- JS -->
    <!-- please note: The JavaScript files are loaded in the footer to speed up page construction -->
    <!-- See more here: http://stackoverflow.com/q/2105327/1114320 -->

    <!-- CSS -->
    <link href="<?php echo URL; ?>public/css/style.css" rel="stylesheet">
</head>
<body>
    <!-- header -->
      <div class="navigation">
          <ul class="navElements">
              <!-- same like "home" or "home/index" -->
              <li><a href="<?php echo URL_WITH_INDEX_FILE; ?>">Home</a></li>
              <li><a href="<?php echo URL_WITH_INDEX_FILE; ?>world">World</a></li>
              <li><a href="<?php echo URL_WITH_INDEX_FILE;?>motd">Message of the Day</a></li>
          </ul>
      </div>
