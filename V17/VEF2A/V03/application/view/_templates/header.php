<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>MINI3</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- JS -->
    <!-- please note: The JavaScript files are loaded in the footer to speed up page construction -->
    <!-- See more here: http://stackoverflow.com/q/2105327/1114320 -->

    <!-- CSS -->
    <link href="<?php echo URL; ?>css/style.css" rel="stylesheet">
</head>
<body>
    <!-- logo, check the CSS file for more info how the logo "image" is shown -->
    <div class="logo"></div>

    <!-- navigation -->
    <div class="navigation">
        <ul class="navElements">
            <!-- same like "home" or "home/index" -->
            <li><a href="<?php echo URL; ?>">home</a></li>
            <li><a href="<?php echo URL; ?>World">World</a></li>
            <li><a href="<?php echo URL; ?>Motd">Message of the day</a></li>
        </ul>
    </div>
