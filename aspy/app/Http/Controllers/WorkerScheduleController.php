<?php

namespace App\Http\Controllers;

use App\Models\WorkerSchedule;
use Illuminate\Http\Request;

class WorkerScheduleController extends Controller
{
    public function index()
    {
        return WorkerSchedule::with(['schedule', 'person'])->get();
    }

    public function show($id)
    {
        return WorkerSchedule::with(['schedule', 'person'])->findOrFail($id);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'schedule_id' => 'required|integer',
            'person_id' => 'required|integer',
            'is_available' => 'required|boolean',
            'created_by' => 'sometimes|string',
        ]);

        return WorkerSchedule::create($validated);
    }

    public function update(Request $request, $id)
    {
        $workerSchedule = WorkerSchedule::findOrFail($id);
        $validated = $request->validate([
            'is_available' => 'boolean',
            'modified_by' => 'sometimes|string',
        ]);
        $workerSchedule->update($validated);
        return $workerSchedule;
    }

    public function destroy($id)
    {
        $workerSchedule = WorkerSchedule::findOrFail($id);
        $workerSchedule->delete();
        return response()->noContent();
    }
}
