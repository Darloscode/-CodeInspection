<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CitasController extends Controller
{
    function getCitaById(){
        $data = [
            'id' => 1,
            'nombre' => 'Cita 1',
            'fecha' => '2023-10-01',
            'hora' => '10:00 AM',
            'paciente' => 'Juan Perez',
            'doctor' => 'Dr. Smith'
        ];
    
        return response()->json($data);
    }
}
