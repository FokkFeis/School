<?php
  $json = file_get_contents('http://apis.is/petrol');
  $data = json_decode($json, true);
  #print_r($data);

 ?>
