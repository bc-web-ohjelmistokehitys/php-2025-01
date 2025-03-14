<?php

$numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

$even = array_filter($numbers, function ($number) {
    return $number % 2 === 0;
});

$multiplied = array_map(fn($number) => $number * 10, $even);

$sum = array_reduce($multiplied, function ($previous, $current) {
    return $previous + $current;
});

$sum2 = 0;
foreach ($numbers as $number) {
    if ($number % 2 === 0) {
        $sum2 = $sum2 + $number * 10;
    }
}

var_dump($sum);
var_dump($sum2);
