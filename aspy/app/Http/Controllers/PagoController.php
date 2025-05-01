<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreatePagoRequestBody;
use App\Http\Requests\UpdateEstadoPago;
use Illuminate\Http\Request;

class PagoController extends Controller
{
    function getPagosByPaciente($id){
        $data = [
            'id' => 1,
            'monto' => 100.00,
            'fecha' => '2023-10-01',
            'paciente' => 'Juan Perez',
            'estado' => 'Pagado'
        ];

        return response()->json($data);
    }

    function getPagoByCita($citaId){
        return null;
    }

    function getPagosByEstado($estado){
        return null;
    }

    function getPagosByServicio($servicioId){
        return null;
    }

    function createPago(CreatePagoRequestBody $request){
        return null;
    }

    function updateEstadoPago(UpdateEstadoPago $request, $idCita){
        return null;
    }
}
