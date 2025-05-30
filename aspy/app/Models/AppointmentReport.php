<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AppointmentReport extends Model
{
    protected $fillable = [
        'appointment_id',
        'comments',
        'sign',
        'created_by',
        'modified_by',
    ];

    public function appointment()
    {
        return $this->belongsTo(Appointment::class);
    }
}
