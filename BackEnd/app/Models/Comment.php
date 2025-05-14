<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    protected $fillable = ['message_id', 'user_id', 'content'];

    public function message() {
        return $this->belongsTo(Message::class);
    }

    public function user() {
        return $this->belongsTo(User::class);
    }
}

