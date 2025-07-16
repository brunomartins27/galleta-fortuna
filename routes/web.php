<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FortuneController;

Route::get('/fortune', [FortuneController::class, 'randomMessage']);
