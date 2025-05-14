<?php
namespace App\Http\Controllers;

use App\Models\Chat;
use Illuminate\Http\Request;

class ChatController extends Controller
{
    public function create(Request $request)
    {
        $request->validate([
            'type' => 'required|in:private,community',
        ]);

        $chat = Chat::create([
            'type' => $request->type,
            'creator_id' => auth()->id(),
        ]);

        return response()->json($chat, 201);
    }

    public function getMessages($id)
    {
        $chat = Chat::with('messages.user')->findOrFail($id);
        return response()->json($chat->messages);
    }
}
