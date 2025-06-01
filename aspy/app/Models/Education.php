<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Education extends Model
{
    protected $table = 'education';
    protected $primaryKey = 'education_id';
    protected $fillable = ['name'];

    public function people()
    {
        return $this->hasMany(Person::class);
    }
}
