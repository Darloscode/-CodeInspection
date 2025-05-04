<?php
namespace App\Services;

use App\Models\Cita;
use App\Http\Requests\createCitaRequestBody;

/**
 * Class CitaService
 * @package App\Services
 * @version 1.0
 * @author Melissa Ayllon
 * @description Service class for handling Cita operations.
 * @property Cita $cita
 */
class CitaService
{

    public function getCitaById($idCita): ?Cita
    {
        return Cita::find($idCita);
    }

    public function getCitasByPaciente($cedulaPaciente): ?array
    {
        return Cita::where('cedulaPaciente', $cedulaPaciente)->get()->toArray();
    }

    public function getCitasEntreFechas($fechaInicio, $fechaFin): ?array
    {
        return Cita::whereBetween('fecha', [$fechaInicio, $fechaFin])->get()->toArray();
    }

    public function getCitasByProfesional($profesional): ?array
    {
        return Cita::where('profesional', $profesional)->get()->toArray();
    }

    public function getCitasByEstado($estado): ?array
    {
        return Cita::where('estado', $estado)->get()->toArray();
    }

    public function getHistoriaClinicaByPaciente($cedulaPaciente): ?array
    {
        return Cita::where('cedulaPaciente', $cedulaPaciente)->get()->toArray();
    }

    public function getHistoriaClinicaByCita($idCita): ?array
    {
        return Cita::where('idCita', $idCita)->get()->toArray();
    }

    public function createCita(createCitaRequestBody $request): Cita
    {
        return Cita::create([
            'cedulaPaciente' => $request->cedulaPaciente,
            'profesional' => $request->profesional,
            'servicio' => $request->servicio,
            'tipoConsulta' => $request->tipoConsulta,
            'fecha' => $request->fecha,
            'horaInicio' => $request->horaInicio,
            'horaFin' => $request->horaFin,
        ]);
    }
}