<?php
namespace App\Http\Controllers;

use App\Models\Report;
use App\Models\Message;
use Illuminate\Http\Request;

class ReportController extends Controller
{
    public function report(Request $request, $messageId)
    {
        $request->validate(['reason' => 'required|string']);

        $report = Report::create([
            'message_id' => $messageId,
            'user_id' => auth()->id(),
            'reason' => $request->reason,
        ]);

        return response()->json($report, 201);
    }
}

