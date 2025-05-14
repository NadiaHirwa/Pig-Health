<?php
namespace App\Http\Controllers;

use App\Models\HealthMonitoring;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;  // Add this import for Validator

class HealthMonitoringController extends Controller
{
    public function store(Request $request)
    {
        // Validation using Validator
        $validator = Validator::make($request->all(), [
            'pig_id' => 'required|exists:pigs,id',
            'temperature' => 'nullable|numeric',
            'heartbeat' => 'nullable|integer',
            'notes' => 'nullable|string',
        ]);

        // Check if validation fails
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);  // Return errors with 400 status if validation fails
        }

        // If validation passes, create the health monitoring data
        $data = HealthMonitoring::create($request->all());

        return response()->json($data, 201);
    }

    public function byPig($pigId)
    {
        return HealthMonitoring::where('pig_id', $pigId)->latest()->get();
    }
}
