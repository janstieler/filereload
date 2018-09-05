<?php
    // declare here the path to the file you want to watch
    $file = 'css/style.css';
    echo hash_file( 'SHA1', $file, $raw_output=false );
?>
