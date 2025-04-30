<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\createCitaRequestBody;
use App\Http\Requests\UpdateCitaRequestBody;
use Illuminate\Http\Request;

/**
 * CitasController
 *
 * @author Aspy
 * @version 1.0
 * @package App\Http\Controllers
 * 
 * Documentation:
 * ONLY for calling service and validating data.
 */

class CitasController extends Controller
{
    function getCitaById($id){
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

    function getCitasByPaciente($id){
        return null;
    }

    function getCitasEntreFechas($fechaInicio, $fechaFin){
        return null;
    }

    function getCitasByProfesional($profesionalId){
        return null;
    }

    function getCitasByEstado($estado){
        return null;
    }

    function getHistoriaClinicaByPaciente($pacienteId){
        return null;
    }

    function getHistoriaClinicaByCita($citaId){
        return null;
    }

    function createCita(createCitaRequestBody $request){
        $validatedData = $request->validated();

        return response()->json([
            'message' => 'Cita created successfully',
            'data' => $validatedData
        ], 201);
    }

    function updateCita(UpdateCitaRequestBody $request, $citaId){
        $validatedData = $request->validated();
        
        return response()->json([
            'message' => 'Cita updated successfully',
            'data' => $validatedData
        ], 200);
    }

}
