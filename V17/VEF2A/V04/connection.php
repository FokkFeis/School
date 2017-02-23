<?php
# þú notar require_once() til að sækja þessa skrá á þeirri vefsíðu sem þarf á tengingu við db.

// tegund og nafn á miðlara, nafn á gagnagrunni.
$source = 'mysql:host=localhost;dbname=myndir';
$user = 'root';
$passw = '';

// Sjá nánar um PDO:
// http://www.sitepoint.com/re-introducing-pdo-the-right-way-to-access-databases-in-php/

try {
	# tenging við database með PDO
	$conn = new PDO($source, $user, $passw);

 	# Notum utf-8 og gerum það með SQL fyrirspurn exec sendir sql fyrirspurnir til database
 	$conn->exec('SET NAMES "utf8"');

} catch (PDOException $e) {
		echo 'Tenging mistókst: ' . $e->getMessage();
		exit(); // látum php hætta keyrslu
}
