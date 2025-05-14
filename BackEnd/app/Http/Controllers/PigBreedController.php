<?php
namespace App\Http\Controllers;

use App\Models\PigBreed;
use Illuminate\Http\Request;

class PigBreedController extends Controller
{
   

    // Create a new pig breed (Admin only)
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'description' => 'nullable|string',
            'image' => 'nullable|string',  // This will accept image URL or base64 encoded data
        ]);

        $breed = PigBreed::create($request->all());

        return response()->json($breed, 201);
    }

    // Show all pig breeds (Admin or anyone, depending on your requirements)
    public function index()
    {
        return response()->json(PigBreed::all(), 200);
    }

    // Update a pig breed (Admin only)
    public function update(Request $request, $id)
    {
        $breed = PigBreed::findOrFail($id);

        $request->validate([
            'name' => 'required|string',
            'description' => 'nullable|string',
            'image' => 'nullable|string',
        ]);

        $breed->update($request->all());

        return response()->json($breed, 200);
    }

    // Delete a pig breed (Admin only)
    public function destroy($id)
    {
        $breed = PigBreed::findOrFail($id);
        $breed->delete();

        return response()->json(null, 204);
    }
}
