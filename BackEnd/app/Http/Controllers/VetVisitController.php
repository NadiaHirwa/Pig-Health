<?php
namespace App\Http\Controllers;

use App\Models\VetVisit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class VetVisitController extends Controller
{
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'veterinary_id' => 'required|exists:users,id',
            'farmer_id' => 'required|exists:users,id',
            'visit_date' => 'required|date',
            'notes' => 'nullable|string',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $visit = VetVisit::create($request->all());

        return response()->json($visit, 201);
    }

    public function vetVisits($vetId)
    {
        $visits = VetVisit::where('veterinary_id', $vetId)->with('farmer')->get();
        return response()->json($visits);
    }

    public function farmerVisits($farmerId)
    {
        $visits = VetVisit::where('farmer_id', $farmerId)->with('vet')->get();
        return response()->json($visits);
    }
}
