<?php

// app/Http/Controllers/VetAssignmentController.php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\VetUserAssignment;
use Illuminate\Http\Request;

class VetAssignmentController extends Controller
{
       
    public function assignVet(Request $request)
    {
        $request->validate([
            'vet_id' => 'required|exists:users,id',
            'farmer_id' => 'required|exists:users,id',
        ]);
    
        $vet = User::find($request->vet_id);
        $farmer = User::find($request->farmer_id);
    
        // Check roles
        if ($vet->role !== 'vet') {
            return response()->json(['error' => 'Selected user is not a vet.'], 422);
        }
    
        if ($farmer->role !== 'farmer') {
            return response()->json(['error' => 'Selected user is not a farmer.'], 422);
        }
    
        // Check if already assigned
        $existing = VetUserAssignment::where('farmer_id', $farmer->id)->first();
        if ($existing) {
            return response()->json(['error' => 'This farmer already has a vet assigned.'], 409);
        }
    
        // Assign vet to farmer
        VetUserAssignment::create([
            'vet_id' => $vet->id,
            'farmer_id' => $farmer->id,
        ]);
    
        return response()->json(['message' => 'Vet assigned to farmer successfully.']);
    }
    

    // Optional: get farmers for a vet
    public function getAssignedFarmers($vetId)
    {
        $vet = User::findOrFail($vetId);
        $farmers = $vet->assignedFarmers;

        return response()->json($farmers);
    }

    // Optional: get assigned vet for a farmer
    public function getAssignedVet($farmerId)
    {
        $assignment = VetUserAssignment::where('farmer_id', $farmerId)->with('vet')->first();

        return $assignment
            ? response()->json($assignment->vet)
            : response()->json(['message' => 'No vet assigned'], 404);
    }
}
