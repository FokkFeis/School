<?php
require_once("connection.php");

foreach($conn->query('SELECT * FROM images') as $row) {
    echo '<img src="'.$row['imagePath'] . '" height ="200" width="200"><br> ' . $row['imageName'] . ' <br>';
}
$newCat = 'CALL NewImage(?,?,?)';
$stmt = $conn->prepare($newCat);
$catName ='Hercules';
$catLink ='https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg';
$catText ='Short fur cat';

$stmt->bindParam(1, $catName, PDO::PARAM_STR|PDO::PARAM_INPUT_OUTPUT, 32);
$stmt->bindParam(2, $catLink, PDO::PARAM_STR|PDO::PARAM_INPUT_OUTPUT, 32);
$stmt->bindParam(3, $catText, PDO::PARAM_STR|PDO::PARAM_INPUT_OUTPUT, 32);
$stmt->execute();
 ?>
