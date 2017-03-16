<?php
if(isset($_POST['insert-json'])){
  $data = array(
    'name'=>$_POST['name'],
    'path'=>$_POST['path']
  );
  $content = file_get_contents('myndir.json');
  $contentsDecoded = json_decode($content, true);
  array_push($contentsDecoded, $data);
  $jsonData = json_encode($contentsDecoded);
  file_put_contents('myndir.json',$jsonData);
}
else{
  $content = file_get_contents('myndir.json');
  $contentsDecoded = json_decode($content, true);

}

  #print_r($contentsDecoded);
