<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/test1', function () {
    return response()->json(['message' => 'Hola desde Laravel API'])
        ->header('Access-Control-Allow-Origin', '*')
        ->header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
        ->header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
});
