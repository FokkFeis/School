<?php

 ?>

<form action="php/process.php" method="POST">
  <div class="form-group">
    <label for="exampleInputEmail1">Username</label>
    <input name ='username'type="text" class="form-control" id="username" placeholder="Username">
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input name ='email'type="email" class="form-control" id="Email" placeholder="Email">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input name ='password' type="password" class="form-control" id="password" placeholder="Password">
  </div>
  <!--<div class="form-group">
    <label for="retypePassword">Retype password</label>
    <input type="password" class="form-control" id="retypePassword" placeholder="Retype Password">-->
  <button type="submit" class="btn btn-default" name="signupSubmit">Submit</button>
</form>
