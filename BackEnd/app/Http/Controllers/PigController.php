<?php
namespace App\Http\Controllers;

use App\Models\Pig;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;  // Add this import for Validator

class PigController extends Controller
{
    public function index()
    {
        return Pig::with('healthMonitoring', 'breed')->get();
    }

    public function store(Request $request)
    {
        // Validation using Validator
        $validator = Validator::make($request->all(), [
            'user_id' => 'required|exists:users,id',
            'breed_id' => 'required|exists:pig_breeds,id',
            'name' => 'required|string',
            'age' => 'required|integer',
            'gender' => 'required|string',
            'health_status' => 'nullable|string',
        ]);

        // Check if validation fails
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);  // Return errors with 400 status if validation fails
        }

        // If validation passes, create the pig
        $pig = Pig::create($request->all());

        return response()->json($pig, 201);
    }

    public function show($id)
    {
        return Pig::with('healthMonitoring', 'breed')->findOrFail($id);
    }
}
