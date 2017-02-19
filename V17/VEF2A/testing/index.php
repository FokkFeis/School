<?php
$json = '{"facts": ["Miacis, the primitive ancestor of cats, was a small, tree-living creature of the late Eocene period, some 45 to 50 million years ago."], "success": "true"}';
$catfact = json_decode($json);
var_dump($catfact);
echo $catfact->facts[0];
