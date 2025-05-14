<?php

namespace App\Http\Controllers;

use App\Models\VetAssistanceRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class VetAssistanceRequestController extends Controller
{
    // Farmer submits a request
    public function store(Request $request)
    {
        $request->validate([
            'issue' => 'required|string',
            'pig_id' => 'nullable|exists:pigs,id',
        ]);

        $assistance = VetAssistanceRequest::create([
            'user_id' => Auth::id(),
            'pig_id' => $request->pig_id,
            'issue' => $request->issue,
            'status' => 'pending',
        ]);

        return response()->json($assistance, 201);
    }

    // Vet views all assigned farmer requests
    public function index()
    {
        $vetId = Auth::id();

        $requests = VetAssistanceRequest::whereHas('user.assignedVet', function ($query) use ($vetId) {
            $query->where('vet_id', $vetId);
        })->with('user', 'pig')->get();

        return response()->json($requests);
    }

    // Vet updates the request status (e.g., to 'resolved')
    public function updateStatus(Request $request, $id)
    {
        $request->validate([
            'status' => 'required|in:pending,in_progress,resolved',
        ]);

        $assistance = VetAssistanceRequest::findOrFail($id);
        $assistance->status = $request->status;
        $assistance->save();

        return response()->json($assistance);
    }
}
