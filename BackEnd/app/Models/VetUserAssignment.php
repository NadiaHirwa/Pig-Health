<?php
// app/Models/VetUserAssignment.php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VetUserAssignment extends Model
{
    use HasFactory;

    protected $fillable = [
        'vet_id',
        'farmer_id',
    ];

    public function vet()
    {
        return $this->belongsTo(User::class, 'vet_id');
    }

    public function farmer()
    {
        return $this->belongsTo(User::class, 'farmer_id');
    }
}
