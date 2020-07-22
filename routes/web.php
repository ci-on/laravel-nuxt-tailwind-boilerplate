<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return response()->json(['status'=>'ok']);
});

Route::post('/login', 'Auth\LoginController');
Route::post('/logout', 'Auth\LogoutController');
