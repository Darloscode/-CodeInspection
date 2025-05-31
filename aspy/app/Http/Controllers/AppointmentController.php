<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use Illuminate\Http\Request;

class AppointmentController extends Controller
{
    public function index()
    {
        return Appointment::with(['payment', 'scheduledBy', 'workerSchedule', 'status', 'trackingAppointment'])->get();
    }

    public function show($id)
    {
        return Appointment::with(['payment', 'scheduledBy', 'workerSchedule', 'status', 'trackingAppointment'])->findOrFail($id);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'payment_id' => 'required|integer',
            'scheduled_by' => 'required|integer',
            'worker_schedule_id' => 'required|integer|unique:appointments,worker_schedule_id',
            'tracking_appointment' => 'nullable|integer|unique:appointments,tracking_appointment',
            'status' => 'required|integer',
            'created_by' => 'sometimes|string',
        ]);

        return Appointment::create($validated);
    }

    public function update(Request $request, $id)
    {
        $appointment = Appointment::findOrFail($id);
        $validated = $request->validate([
            'status' => 'integer',
            'modified_by' => 'sometimes|string',
        ]);
        $appointment->update($validated);
        return $appointment;
    }

    public function destroy($id)
    {
        $appointment = Appointment::findOrFail($id);
        $appointment->delete();
        return response()->noContent();
    }
}
