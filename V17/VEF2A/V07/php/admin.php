<?php
if(isset($_SESSION['username']))
{
?>
<h1>Hello <strong><?php echo $_SESSION['username']; ?></strong></h1>
<h2>Your email is <strong><?php echo $_SESSION['email']; ?></strong></h2>
<div class="container">

<!-- User update form -->
  <div class = "col-md-9">
    <form class="" action="php/process.php" method="post">

      <div class="form-group">
        <label for="updateUsername">Update Username</label>
        <input name ='updateUsername' type="text" class="form-control" id="updateUsername" placeholder="New username">
        <button name="updateUsernameSubmit" class ="btn btn-default">Update Username</button>
      </div>

      <div class = "form-group">
        <label for="updateEmail">Update Email</label>
        <input name ="updateEmail" type="text" class="form-control" id="updateEmail" placeholder="New Email">
        <button type="submit" class="btn btn-default" name="updateEmailSubmit">Update Password</button>
      </div>

      <div class = "form-group">
        <label for="updatePassword">Update Password</label>
        <input name ="updatePassword" type="password" class="form-control" id="updatePassword" placeholder="New password">
        <button type="submit" class="btn btn-default" name="updatePasswordSubmit">Update Password</button>
      </div>

      <button name="logout" class ="btn btn-danger">Logout</button>
    </form>

  </div>
<!-- Picture management -->

</div>
<?php
}
else {
  header('location: login.php');
}
?>
