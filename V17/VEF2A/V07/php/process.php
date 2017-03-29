<?php
require_once('connection.php');

if (isset($_POST['signupSubmit'])){
  $username = htmlspecialchars($_POST['username']);
  $email = htmlspecialchars($_POST['email']);
  $password = htmlspecialchars($_POST['password']);

  try {
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $sql = "INSERT INTO users (username,email,password)
    VALUES ('".$username."','".$email."','".$password."')";
    if($pdo->query($sql)){
      header('Location: ../index.php');
      exit;
    }
  }
  catch(PDOException $E){
    echo "<script type='text/javascript'>alert('Failed to add new user');<script>";
    header('Location: signup.php');
    exit;
  }


}

if(isset($_POST['loginSubmit'])){
  $username = htmlspecialchars($_POST['username']);
  $password = htmlspecialchars($_POST['password']);

  $sql = $pdo->prepare("SELECT username,password FROM users WHERE username = ?");
  $sql->execute(array($username));
  $result = $sql->fetchAll();
  if( $result[0]['username'] === $username and $result[0]['password'] === $password){
    header('Location: ../admin.php');
  }
}

else{
  echo 'not so baller';
}
 ?>
