<?php session_start();

?>
<nav class="navbar navbar-default">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="index.php">VEF2A | V07</a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li><a href="index.php">Front Page<span class="sr-only">(current)</span></a></li>
        <li><a href="submit.php">Submit new picture</a></li>
      </ul>

      <ul class="nav navbar-nav navbar-right">
        <?php
        if(isset($_SESSION['username'])){
          echo "<li><a href='admin.php'>Profile</a></li>";
        }
        else{
          echo "<li><a href='login.php'>login</a></li>";
        }
        if(isset($_SESSION['username'])){

        }
        else {
          echo "<li><a href='signup.php'>Signup</a></li>";
        }?>

      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
