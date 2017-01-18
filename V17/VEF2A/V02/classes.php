<?php
  class Book
  {
      var $title;
      var $author;
      var $publisher;
      var $yearOfPublication;
  }
$first = new Book;
$first->title               ='Game of Thrones';
$first->author              ='George R. R. Martin';
$first->publisher           ='Voyager Books';
$first->yearOfPublication   = 1996;

$second = new Book;
$second->title              = 'The Colour Of Magic';
$second->author             = 'Terry Pratchett';
$second->publisher          = 'Colin Smythe';
$second->yearOfPublication  = 1983;


?>
