<?php

namespace App\Http\Controllers;

use App\Models\Discount;
use Illuminate\Http\Request;

class DiscountController extends Controller
{
    public function index()
    {
        return Discount::all();
    }

    public function show($id)
    {
        return Discount::findOrFail($id);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|unique:discounts,name',
            'discount' => 'required|integer|min:0|max:100',
            'created_by' => 'sometimes|string',
        ]);

        return Discount::create($validated);
    }

    public function update(Request $request, $id)
    {
        $discount = Discount::findOrFail($id);
        $validated = $request->validate([
            'name' => 'string|unique:discounts,name,'.$id,
            'discount' => 'integer|min:0|max:100',
            'modified_by' => 'sometimes|string',
        ]);
        $discount->update($validated);
        return $discount;
    }

    public function destroy($id)
    {
        $discount = Discount::findOrFail($id);
        $discount->delete();
        return response()->noContent();
    }
}
