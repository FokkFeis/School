<?php
  require_once('connection.php');



 ?>
 <form action="php/process.php" method="POST">
   <div class="form-group">
     <label for="exampleInputEmail1">username</label>
     <input name ="username"type="text" class="form-control" id="exampleInputEmail1" placeholder="Email">
   </div>
   <div class="form-group">
     <label for="exampleInputPassword1">Password</label>
     <input name="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
   </div>
   <button type="submit" name="loginSubmit" class="btn btn-default">Submit</button>
 </form>
