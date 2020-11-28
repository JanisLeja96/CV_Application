<?php

use App\Http\Controllers\CvController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

//Route::get('/documents', [CvController::class, 'index']);
//Route::get('/documents/{id}', [CvController::class, 'show']);
//Route::post('/documents/new', [CvController::class, 'store']);

Route::apiResource('documents', CvController::class);
