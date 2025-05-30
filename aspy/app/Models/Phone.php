<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Phone extends Model
{
    protected $fillable = [
        'person_id',
        'type',
        'number',
        'name',
        'relationship',
        'created_by',
        'modified_by',
    ];

    public function person()
    {
        return $this->belongsTo(Person::class);
    }
}
