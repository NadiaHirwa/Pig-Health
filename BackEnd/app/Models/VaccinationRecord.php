<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VaccinationRecord extends Model
{
    use HasFactory;

    protected $fillable = [
        'pig_id',
        'vaccine_name',
        'date_given',
        'notes',
    ];

    public function pig()
    {
        return $this->belongsTo(Pig::class);
    }
}
