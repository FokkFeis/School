<?php
class Motd extends Controller{
  public function index() {
    require APP . 'views/_templates/header.php';
    require APP . 'views/motd/index.php';
    require APP . 'views/_templates/footer.php';
  }
}
 ?>
