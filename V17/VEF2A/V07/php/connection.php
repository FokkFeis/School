<?php
$source = 'mysql:host=localhost;dbname=crud';
$user = 'root';
$passw = '';
try {

	$pdo = new PDO($source, $user, $passw);

 	$pdo->exec('SET NAMES "utf8"');

} catch (PDOException $e) {
		echo 'Tenging mistókst: ' . $e->getMessage();
		exit();
}
