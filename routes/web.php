<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;

Route::get('/', function () {
    return redirect('/home');
});

Route::get('/home', [HomeController::class, 'home'])->name('home');

Route::get('/menu', [HomeController::class, 'menu'])->name('menu');