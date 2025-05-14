<?php
namespace App\Http\Controllers;

use App\Models\Chat;
use App\Models\Message;
use Illuminate\Http\Request;

class MessageController extends Controller
{
    public function postMessage(Request $request, $chatId)
    {
        $request->validate(['content' => 'required|string']);
        $chat = Chat::findOrFail($chatId);

        $message = $chat->messages()->create([
            'user_id' => auth()->id(),
            'content' => $request->content,
        ]);

        return response()->json($message, 201);
    }
}

