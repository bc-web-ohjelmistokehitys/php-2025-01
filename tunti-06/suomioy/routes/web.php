<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('/surnames/{name}', function (string $name) {

    $data = DB::table('person')
        ->select([
            'last_name AS name',
            DB::raw('COUNT(last_name) as amount')
        ])
        ->groupBy('last_name')
        ->orderBy('amount', 'DESC')
        ->where('last_name', '=', ucfirst($name))
        // ->get();
        ->firstOrFail();

    return Inertia::render('surname', [
        'name' => $data
    ]);
})->name('surname');


Route::get('/surnames', function () {

    // array / list
    $arr = [0, 1, 2, 3];

    // associative array / hashmap
    $arr2 = [
        'name' => 'John Doe',
        'age' => 30,
    ];

    $names = DB::table('person')
        ->select([
            'last_name AS name',
            DB::raw('COUNT(last_name) as amount')
        ])
        ->groupBy('last_name')
        ->orderBy('amount', 'DESC')
        ->limit(50)
        ->get();

    return Inertia::render('surnames', [
        'names' => $names
    ]);
})->name('surnames');


Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
