<?php
include("json.php");
 ?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>VEF2A | V06 JSON Segment</title>
  </head>
  <body>
    <h1> This is the JSON segment</h1>
    <form class="json-submit" action="" method="post">
      <input type="text" name="name" value="image name">
      <input type="text" name="path" value="image path">
      <button type="submit" name="insert-json">Insert JSON</button>
    </form>
    <?php
    foreach ($contentsDecoded as $key){
      echo "<h1>".$key["name"]."</h1><br>";
      echo "<img src='".$key["path"]."' width='400' height='400'><br>";
    }
     ?>
  </body>
</html>
