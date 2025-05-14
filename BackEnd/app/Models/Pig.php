<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pig extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'breed_id',
        'name',
        'age',
        'gender',
        'health_status',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function breed()
    {
        return $this->belongsTo(PigBreed::class, 'breed_id');
    }

    public function healthMonitoring()
    {
        return $this->hasMany(HealthMonitoring::class);
    }
}
