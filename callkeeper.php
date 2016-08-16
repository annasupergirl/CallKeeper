<?php
$myArray = function()
{
    $res = [];

    for ($i = 1; $i <= 100; $i++) {
        if ($i%5 == 0 && $i%10 != 0 && $i%25 != 0) {
            $res[$i] = "<b>Hello world!</b>";
        } elseif ($i%10 == 0 && $i%25 != 0) {
	        $res[$i] = "<u>Hello world!</u>";
        } elseif ($i%25 == 0) {
            $res[$i] = "<i>Hello world!</i>";
        } else {
            $res[$i] = "Hello world!";
        }
    }

    var_export($res);
};

$myArray();