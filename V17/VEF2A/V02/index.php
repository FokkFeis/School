<?php
include("classes.php");
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>VEF2A V02 | ImageUpload</title>
</head>
<body>
  <div id="imageShow">
    <?php
      $image = new image("Profile", 0,"siggi","Resources/Pictures/picture1.jpg");
      $image->getImageSize();
      $image->showImage();
      $image->showImageSize();
    ?>
  </div>
  <div id ="imgupload">
    <p>image upload</p>
  </div>
  <div id ='image'>
    <?php
    if (isset($_POST['upload'])) {
      $destination = $_SERVER['DOCUMENT_ROOT'] . "\VEF2A\V02\Resources\Pictures/";
      try {
        $loader = new upload($destination);
        $loader->upload();
        $result = $loader->getMessages();
      } catch (Exception $e) {
        echo $e->getMessage();
      }
    }
    if (isset($result)) {
      echo '<ul>';
      foreach ($result as $message) {
        echo "<li>$message</li>";
      }
      echo '</ul>';
      }
    ?>

    <form action="" method="post" enctype="multipart/form-data" id="uploadImage">
        <p>
            <label for="image">Upload image:</label>
            <input type="file" name="image" id="image">
        </p>
        <p>
            <input type="submit" name="upload" id="upload" value="Upload">
        </p>
    </form>
  </div>


</body>
