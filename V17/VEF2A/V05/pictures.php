<?php
include('head.php');

#if picture is click show this
if (isset($_GET['id'])) {
 if (!is_numeric($_GET['id'])) {
 $image_id = 1;
 } else {
 $image_id = (int) $_GET['id'];
 }
 $showPictures = $info->showPictures($image_id);


 ?>
 <figure>
   <h3><?php echo $showPictures['picturename'];?></h3>
 <img src="pictures/<?= $showPictures['filename']; ?>" width ="200" height="200">
 <figcaption><?= $showPictures['description']; ?></figcaption>
 </figure>
<?php }
#If user is clicked show this
if (isset($_GET['userid'])){
  if(!is_numeric($_GET['userid'])){
    $user_id = 0;
  } else {
    $user_id = (int) $_GET['userid'];
  }
  $showUserPictures = $info->showUserPictures($user_id);
?>
<figure>
  <?php
    foreach ($showUserPictures as $row){
      ?>
        <h3><?php echo $row['picturename']; ?></h3>
      <img src ="pictures/<?=$row['filename']; ?>" width ="200" height="200">
      <figcaption><?= $row['description']; ?></figcaption>
      <?php
    }
  ?>
</figure>
<?php } ?>
