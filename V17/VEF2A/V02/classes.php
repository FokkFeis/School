<?php

class Book
{
  public function __construct($title,$price,$publisher)
  {
    $this->title=$title;
    $this->price=$price;
    $this->publisher=$publisher;
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
class Publisher extends Book
{
  function setPublisher($newPublisher)
  {
    $this->publisher = $newPublisher;
  }
  function getPublisher()
  {
    return $publisher;
  }
}
//$efnafraedi = new Book('Efnafraedi 101', 10, 'siggi publisher');

//$staerdfraedi = new Book('Staerdfraedi 101', 12, 'siggi publisher');

$islenska = new Book('Islenska 101', 11, 'siggi publisher');

//print_r($efnafraedi);
//print_r($staerdfraedi);
print_r($islenska);



?>
