<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return redirect('/home');
});

Route::get('/home', function () {
    return Inertia:: render (('Home/Home'));
});
Route::get('/about', function () {
    return Inertia::render('About/about'); 
});