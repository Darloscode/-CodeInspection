<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Gender extends Model
{

    protected $table = 'gender';
    protected $primaryKey = 'gender_id';
    protected $fillable = ['name'];

    public function people()
    {
        return $this->hasMany(Person::class);
    }
}
