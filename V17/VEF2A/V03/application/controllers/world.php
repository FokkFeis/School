<?php

class World extends Controller
{

    public function index()
    {
        // load views
        require APP . 'views/_templates/header.php';
        require APP . 'views/world/index.php';
        require APP . 'views/_templates/footer.php';
    }

}
