<?php

class Image {
    public function __construct($name, $size, $owner, $path)
    {
      $this->name = $name;
      $this->size = $size;
      $this->owner = $owner;
      $this->path = $path;
    }

    public function getImageName() {

    }
    public function getOwnerName() {

    }
    public function getImageSize() {

    }
    public function getPath() {

    }
    public function setImageName() {

    }
    public function setPath() {

    }
    public function setOwnerName() {

    }
    public function showImageSize() {

    }
    public function showImage() {

    }
    ]
}

class Book
{
  public function __construct($title,$price)
  {
    $this->title=$title;
    $this->price=$price;
  }
  function setPrice($newPrice)
  {
    $this->price = $newPrice;

  }
  function getPrice()
  {
    print_r($this->price);
  }

}


class User {

  public function __construct(array $userInfo) {
    $this->email=$userInfo[0];
    $this->password=$userInfo[1];
  }

  public function setPassword($newPass){
    $this->password=$newPass;
  }
  public function getPassword() {
    print($this->password);
  }
  public function setEmail($newEmail) {
    $this->email=$newEmail;
  }
  public function getEmail() {
    print($this->email);
  }
}
?>
