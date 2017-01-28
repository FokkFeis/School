<?php

class image {

    public function __construct($name, $size, $owner, $path)
    {
      $this->name = $name;
      $this->size = $size;
      $this->owner = $owner;
      $this->path = $path;
    }

    public function getImageName() {
      return $this->name;
    }
    public function getOwnerName() {
      return $this->owner;
    }
    public function getImageSize() {
      $this->size = filesize($this->path);
      $this->size =$this->size /1024;
      return $this;
    }
    public function getPath() {
      return $this->Path = $path;
    }
    public function setImageName() {
      $this->ImageName = $NewName;
    }
    public function setPath() {
      $this->Path = $NewPath;
    }
    public function setOwnerName() {
      $this->OwnerName = $newOwnerName;
    }
    public function showImageSize() {
      echo '<p>Image is ' . $this->size . ' kb';
    }
    public function showImage() {
      echo '<img src="' . $this->path .'"/>'."\n";
    }
}

class upload {


    protected $uploaded = [];
    protected $destination;
    protected $max = 51200;
    protected $messages = [];
    protected $permitted = [
        'image/gif',
        'image/jpeg',
        'image/pjpeg',
        'image/png'
    ];


    public function __construct($path) {


        if (!is_dir($path)) {
            throw new \Exception("$path must be a valid, writable directory.");
        }

        $this->destination = $path;


    }

    public function upload() {

        $uploaded = current($_FILES);


        if ($this->checkFile($uploaded)) {

            $this->moveFile($uploaded);
        }
    }


    public function getMessages() {
        return $this->messages;
    }

    public function checkFile() {
      return true;
    }

    protected function moveFile($file) {

        $success = move_uploaded_file($file['tmp_name'], $this->destination . $file['name']);


        if ($success) {
            $result = $file['name'] . ' was uploaded successfully';
            $this->messages[] = $result;
        } else {
            $this->messages[] = 'Could not upload ' . $file['name'];
        }
    }
}


class book {
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
