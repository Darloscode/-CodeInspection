<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Cita extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'Cita';
    public $timestamps = true;
    protected $fillable = ['idCita', 'cedulaPaciente', 'profesional', 'servicio', 'tipoConsulta', 'fecha', 'horaInicio', 'horaFin'];
    protected $primaryKey = 'idCita';
}
