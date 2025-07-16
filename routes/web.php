<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FortuneController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Aqui é onde você pode registrar rotas de API para sua aplicação.
| Estas rotas são carregadas pelo RouteServiceProvider dentro de um grupo
| que é atribuído o middleware "api". Aproveite para criar!
|
*/

// Exemplo: http://127.0.0.1:8000/api/fortune
Route::get('/fortune', [FortuneController::class, 'randomMessage']);
