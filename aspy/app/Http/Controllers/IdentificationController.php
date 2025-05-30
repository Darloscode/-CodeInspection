<?php

namespace App\Http\Controllers;

use App\Models\Identification;
use Illuminate\Http\Request;

class IdentificationController extends Controller
{
    public function index()
    {
        return Identification::with('person')->get();
    }

    public function show($id)
    {
        return Identification::with('person')->findOrFail($id);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'person_id' => 'required|integer|exists:person,person_id',
            'type' => 'required|string',
            'number' => 'required|string|unique:identification,number',
            'due_date' => 'nullable|date',
            'created_by' => 'sometimes|string',
        ]);

        return Identification::create($validated);
    }

    public function update(Request $request, $id)
    {
        $identification = Identification::findOrFail($id);
        $validated = $request->validate([
            'type' => 'string',
            'number' => 'string|unique:identification,number,'.$id,
            'due_date' => 'nullable|date',
            'modified_by' => 'sometimes|string',
        ]);
        $identification->update($validated);
        return $identification;
    }

    public function destroy($id)
    {
        $identification = Identification::findOrFail($id);
        $identification->delete();
        return response()->noContent();
    }
}
