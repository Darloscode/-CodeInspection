<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MedicalProfile extends Model
{
    protected $fillable = [
        'person_id',
        'diagnose',
        'created_by',
        'modified_by',
    ];

    public function client()
    {
        return $this->belongsTo(Client::class, 'person_id');
    }
}
