<?php

namespace App\Http\Controllers;

use App\Models\UserAccount;
use Illuminate\Http\Request;

class UserAccountController extends Controller
{
    public function index()
    {
        return UserAccount::all();
    }

    public function show($id)
    {
        return UserAccount::findOrFail($id);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'role_id' => 'required|integer',
            'email' => 'required|email|unique:user_accounts,email',
            'password_hash' => 'required|string',
            'status' => 'required|integer',
            'created_by' => 'sometimes|string',
        ]);

        return UserAccount::create($validated);
    }

    public function update(Request $request, $id)
    {
        $user = UserAccount::findOrFail($id);
        $validated = $request->validate([
            'role_id' => 'integer',
            'email' => 'email|unique:user_accounts,email,'.$id,
            'password_hash' => 'string',
            'status' => 'integer',
            'modified_by' => 'sometimes|string',
        ]);

        $user->update($validated);
        return $user;
    }

    public function destroy($id)
    {
        $user = UserAccount::findOrFail($id);
        $user->delete();
        return response()->noContent();
    }
}
