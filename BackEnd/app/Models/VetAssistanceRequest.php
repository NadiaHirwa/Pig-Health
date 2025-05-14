<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VetAssistanceRequest extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'pig_id',
        'issue',
        'status',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function pig()
    {
        return $this->belongsTo(Pig::class);
    }
}
