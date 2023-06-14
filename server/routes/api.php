<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

// USer registration API
Route::post('/register', [UserController::class, 'register']);

// User login
Route::post('/login', [UserController::class, 'login']);

// View user profile
Route::middleware('auth:sanctum')->get('/profile', [UserController::class, 'profile']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
