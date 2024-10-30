<?php

use App\Http\Controllers\StudentController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::get('/students', [StudentController::class,'index'])->name('ShowStudents');
Route::post('/students', [StudentController::class, 'store'])->name('AddStudents');
Route::put('/students/{id}', [StudentController::class, 'update'])->name('UpdateStudents');
Route::delete('/students/{id}', [StudentController::class, 'delete'])->name('DeleteStudents');