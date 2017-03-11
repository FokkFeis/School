<?php
class functionClass{
  function __construct($db){
    $this->db =$db;
  }
  function getPicturesLink(){
    $sql = 'SELECT * FROM pictures ORDER BY filename ASC;';
    $stm = $this->db->prepare($sql);
    $stm->execute();
    return $stm->fetchAll();
  }
  function getPictureCount(){
    $sql = 'SELECT count(*) FROM pictures;';
    $stm = $this->db->prepare($sql);
    $stm->execute();
    return $stm->fetchAll();
  }
  function showPictures($id){
    $sql = "SELECT filename, description, picturename FROM pictures
    WHERE id = $id";
    $row = $this->db->prepare($sql);
    $row->execute();
    return $row->fetch();
  }
  function getUsers(){
    $sql = "SELECT * FROM users";
    $stm = $this->db->prepare($sql);
    $stm->execute();
    return $stm->fetchAll();
  }
  function showUserPictures($userid){
    $sql ="SELECT users.id, users.username, pictures.filename, pictures.description, pictures.picturename FROM pictures INNER JOIN users ON pictures.user_id = users.id WHERE users.id = $userid";
    $stm = $this->db->prepare($sql);
    $stm->execute();
    return $stm->fetchAll();
  }

  function search($search){
    $sql = "SELECT users.id, users.username, pictures.filename, pictures.description, pictures.picturename FROM pictures INNER JOIN users ON pictures.user_id = users.id WHERE filename LIKE :search";
    $stm = $this->db->prepare($sql);
    $stm->bindValue(':search', '%'.$search);
    $stm->execute();
    return $stm->fetchAll();
  }
}
 ?>
