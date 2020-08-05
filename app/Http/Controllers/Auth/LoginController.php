<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Resources\User as UserResource;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Request;

class LoginController extends Controller
{
    public function __invoke()
    {
        if (Auth::attempt([
            'email' => request('email'),
            'password' => request('password'),
        ])) {
            return new UserResource(auth()->user());
        }

        return response()->json([
            'message' => 'invalid credentials or such user doesn\'t exist',
            'error' => 'Unprocessable Entity (validation failed)',
        ], 422);
    }
}
