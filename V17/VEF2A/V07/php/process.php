<?php session_start();
require_once('connection.php');



if (isset($_POST['signupSubmit'])){

  $username = htmlspecialchars($_POST['username']);
  $email = htmlspecialchars($_POST['email']);
  $password = htmlspecialchars($_POST['password']);
  $hPass = password_hash($password, PASSWORD_DEFAULT);
  try {
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $sql = "INSERT INTO users (username,email,password)
    VALUES ('".$username."','".$email."','".$hPass."')";
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

try {
  $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  $sql = $pdo->prepare("SELECT username,password,email FROM users WHERE username = ?");
  $sql->execute(array($username));
  $result = $sql->fetchAll();
  $dbPassword =$result[0]['password'];
  if( $result[0]['username'] === $username and password_verify($password, $dbPassword) ){
    $email = $result[0]['email'];
    $_SESSION['username'] = $username;
    $_SESSION['email'] = $email;
    header('Location: ../admin.php');
  }
}
catch(PDOException $E) {
  header('Location: login.php');
  exit;
}
}


if(isset($_POST['logout'])){
  session_destroy();
  header('Location: ../index.php');
}

if(isset($_POST['updateUsernameSubmit'])){
  $newUsername = htmlspecialchars($_POST['updateUsername']);
  $sessionUsername = $_SESSION['username'];
  $sql = "UPDATE users SET username='".$newUsername."' WHERE username='".$sessionUsername."'";
  $pdo->query($sql);
  $_SESSION['username']=$newUsername;
  header('Location: ../admin.php');
}

if(isset($_POST['updatePasswordSubmit'])){
  $newPassword= htmlspecialchars($_POST['updatePassword']);
  $sessionUsername= $_SESSION['username'];
  $sql = "UPDATE users SET password='".$newPassword."' WHERE username='".$sessionUsername."'";
  $pdo->query($sql);
  $_SESSION['password']=$newPassword;
  header('Location: ../admin.php');
}

else{
  echo 'not so baller';
}
 ?>
