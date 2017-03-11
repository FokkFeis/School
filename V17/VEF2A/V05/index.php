<?php
include('head.php');
?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>VEF2A | V05</title>
  </head>
  <body>
    <div class="container">
      <div class="NumberOfPics">
        <h3> There are <?php echo($pictureCount[0][0]); ?> pictures in this database </h3>
      </div>
      <div class="links">
        <!-- Picture dropdown -->
        <form class="" action="pictures.php" method="GET">
          <select  name="id">
            <?php
            foreach($pictureLink as $link)
            {?>
            <option value="<?=$link['id'];?>"
              <?php if (isset($_GET['id']) && $_GET['id'] == $link['id']){
                echo 'selected';
              }?>
              ><?=$link['filename']; ?></option>
            <?php } ?>
          </select>
          <input type="submit" name="go" value="Display picture">
        </form>
        <!-- Users dropdown -->
        <form class="" action="pictures.php" method="get">
          <select name = 'userid'>
          <?php foreach ($users as $user)
          {?>
          <option value="<?=$user['id'];?>"
            <?php if(isset($_GET['userid']) && $_GET['userid'] == $user['id']){
              echo 'selected';
            }?>
            ><?=$user['username']; ?></option>

          <?php } ?>
        </select>
        <input type="submit" name="go" value="Display UserPictures">
        </form>

      </div>
      <div class="search">
        <form class="search" action="pictures.php" method="post">
          
        </form>
      </div>
    </div>
  </body>
</html>
