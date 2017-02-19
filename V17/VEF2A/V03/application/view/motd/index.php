<?php if (!$this) { exit(header('HTTP/1.0 403 Forbidden')); }
$json_array = file_get_contents('http://catfacts-api.appspot.com/api/facts?number=1');
$json_data=json_decode($json_array);
?>
<div class="container">
  <div class="catFacts">
    <h1>Random Cat Fact</h1>
    <p> <?php echo $json_data->facts[0]; ?></p>
  </div>
</div>
