<?php

namespace App\Http\Controllers;

use App\Models\PaymentData;
use Illuminate\Http\Request;

class PaymentDataController extends Controller
{
    public function index()
    {
        return PaymentData::all();
    }

    public function show($id)
    {
        return PaymentData::findOrFail($id);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'type' => 'required|string',
            'number' => 'required|integer',
            'file' => 'required|string|unique:payment_data,file',
            'created_by' => 'sometimes|string',
        ]);

        return PaymentData::create($validated);
    }

    public function update(Request $request, $id)
    {
        $paymentData = PaymentData::findOrFail($id);
        $validated = $request->validate([
            'type' => 'string',
            'number' => 'integer',
            'file' => 'string|unique:payment_data,file,'.$id,
            'modified_by' => 'sometimes|string',
        ]);
        $paymentData->update($validated);
        return $paymentData;
    }

    public function destroy($id)
    {
        $paymentData = PaymentData::findOrFail($id);
        $paymentData->delete();
        return response()->noContent();
    }
}
