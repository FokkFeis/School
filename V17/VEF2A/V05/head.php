<?php
require('dbconnection.php');
require('functions.php');
$info = new functionClass($pdo); #initalize connection to function class
$pictureLink = $info->getPicturesLink(); # Array with links of all pictures in database
$pictureCount = $info->getPictureCount(); # count of all pictures
$users = $info->getUsers();
