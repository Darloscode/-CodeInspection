<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CitasController;

Route::post('/login', [AuthController::class, 'login']);
Route::middleware('auth:sanctum')->get('/user', [AuthController::class, 'user']);
Route::middleware('auth:sanctum')->post('/logout', [AuthController::class, 'logout']);


Route::get('citas/{id}', [CitasController::class, 'getCitaById']);
Route::get('citas/paciente/{id}', [CitasController::class, 'getCitasByPaciente']);
Route::get('citas/entreFechas/{fechaInicio}/{fechaFin}', [CitasController::class, 'getCitasEntreFechas']);
Route::get('citas/profesional/{profesionalId}', [CitasController::class, 'getCitasByProfesional']);
Route::get('citas/estado/{estado}', [CitasController::class, 'getCitasByEstado']);
Route::get('historiaClinica/paciente/{pacienteId}', [CitasController::class, 'getHistoriaClinicaByPaciente']);
Route::post('citas', [CitasController::class, 'createCita']);
Route::put('citas/{id}', [CitasController::class, 'updateCita']);