<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Aga extends Model
{   
    protected $table = 'aga';
    protected $primaryKey = 'aga_id';
    protected $fillable = ['name'];

    public function addresses()
    {
        return $this->hasMany(Address::class, 'aga');
    }
}
