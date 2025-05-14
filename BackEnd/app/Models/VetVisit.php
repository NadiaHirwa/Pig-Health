<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VetVisit extends Model
{
    use HasFactory;

    protected $fillable = [
        'veterinary_id',
        'farmer_id',
        'visit_date',
        'notes',
    ];

    // Relationships
    public function vet()
    {
        return $this->belongsTo(User::class, 'veterinary_id');
    }

    public function farmer()
    {
        return $this->belongsTo(User::class, 'farmer_id');
    }
}
