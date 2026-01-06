<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Role;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index()
    {
        $user = User::with('role')->whereHas('role', function ($q) { $q->where('name', '!=', 'admin');})->get();
        return Inertia::render('Admin/Users/Index', [
            'users' => $user,
        ]);
    }

    public function create()
    {
        $roles =Role::where('name', '!=', 'admin')->get();
        return Inertia::render('Admin/Users/Create', [
            'roles' => $roles,
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|min:6',
            'role_id' => 'required|exists:roles,id',
        ]);

        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'role_id' => $request->role_id,

            //  dd($request->role_id)
        ]);

        return redirect()->route('admin.users.index')->with('success', 'User created successfully');
    }

    public function approve(User $user){
        if ($user->status !== 'pending') {
            return back()->with('error', 'User already processed');
        }

        $user->update([
            'status'      => 'active',
            'approved_by' => auth()->id(),
            'approved_at' => now(),
        ]);

        return back()->with('success', 'User approved successfully');
    }

    public function reject(User $user){
        if ($user->status !== 'pending') {
            return back()->with('error', 'User already processed');
        }

        $user->update([
            'status'      => 'rejected',
            'approved_by' => auth()->id(),
            'approved_at' => now(),
        ]);

        return back()->with('success', 'User rejected');
    }


}
