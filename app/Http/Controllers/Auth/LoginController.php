<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function __invoke()
    {
        if (Auth::attempt([
            'email' => request('email'),
            'password' => request('password'),
        ])) {
            return response()->json('', 204);
        }

        return response()->json([
            'error' => 'invalid_credentials',
        ], 403);
    }
}
