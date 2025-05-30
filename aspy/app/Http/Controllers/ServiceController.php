<?php

namespace App\Http\Controllers;

use App\Models\Service;
use Illuminate\Http\Request;

class ServiceController extends Controller
{
    public function index()
    {
        return Service::all();
    }

    public function show($id)
    {
        return Service::findOrFail($id);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|unique:services,name',
            'price' => 'required|numeric|min:0',
            'created_by' => 'sometimes|string',
        ]);

        return Service::create($validated);
    }

    public function update(Request $request, $id)
    {
        $service = Service::findOrFail($id);
        $validated = $request->validate([
            'name' => 'string|unique:services,name,'.$id,
            'price' => 'numeric|min:0',
            'modified_by' => 'sometimes|string',
        ]);
        $service->update($validated);
        return $service;
    }

    public function destroy($id)
    {
        $service = Service::findOrFail($id);
        $service->delete();
        return response()->noContent();
    }
}
