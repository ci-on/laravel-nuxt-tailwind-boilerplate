<?php

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

if (config('app.env') === 'local') { // workaround for sanctum not working with localhost domains
    Route::get('/user', function (Request $request) {
        return User::where('email', 'john@gmail.com')->first();
    });
} else {
    Route::group(['middleware' => 'auth:sanctum'], function () {
        Route::get('/user', function (Request $request) {
            return $request->user();
        });
    });
}
