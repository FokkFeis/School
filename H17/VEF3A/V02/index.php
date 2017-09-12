<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
    class Model {
        public $text;

        public function __construct() {
            $this->text = ["steveJobs"=>"Steve Jobs","biography"=>"Biography","pictures"=>"Pictures"];
        }
    }

    class View {
        private $model;

        public function __construct(Model $model){
            $this->model = $model;
            $outtext = $this->model->text;
            print('<div class="nav">');
            foreach($outtext as $row => $newOut){
                print('<a class="navItem" href ="?action='.$row.'">'.$newOut.'</a>');
            }
            print('</div>');
            print('<img src="https://images-na.ssl-images-amazon.com/images/I/81VStYnDGrL.jpg" style="height:500px;width:400px;"');
            print('</div>');
        }
        public function output() {
            $outtext = $this->model->text; 
        }
    }
    class Controller {
        private $model;

        public function __construct(Model $model){
            $this->model = $model;
        }
        public function steveJobs(){
            print('<div class="content">');
            print("Hallo STeve");
            print('</div>');
        }
        public function biography() {
            print('<div class="content">');
            print("Holy shit this guy did some shit");
            print('</div>');
        }
        public function pictures(){
            print('<div class="content">');
            print("Aww damn look at dem pictures");
            print('</div>');
        }

    }

    $model = new Model();
    $controller = new Controller($model);
    $view = new View($model);

    if (isset($_GET['action'])){
        $controller->{$_GET['action']}();
    }

    echo $view->output();

?>

<!DOCTYPE HTML>
<html>
<head>
    <title> VEF3A V02 Project solution </title>
    <meta charset="utf-8">
    <style>
    a {
        margin: 20;
        padding: 20;
        color:white;
        
    }
    .content{
        margin:20;
    }
    .nav{
        background:black;
    }
    </style>
</head>

</html>
