<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Permission;
use App\Models\User;
use App\Models\Role;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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
        $permissions = Permission::get();
        return Inertia::render('Admin/Users/Create', [
            'roles' => $roles,
            'permissions'=>$permissions
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|min:6',
            'role_id' => 'required|exists:roles,id',
            'permissions' => 'array'
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'role_id' => $request->role_id,
        ]);

        $role = Role::find($request->role_id);

        if ($role && $role->name !== 'admin') {
            $user->permissions()->sync($request->permissions ?? []);
        }

        return redirect()->route('admin.users.index')->with('success', 'User created successfully');
    }

    public function approve(User $user){
        if ($user->status !== 1) {
            return back()->withErrors(['status' => 'User already processed']);
        }

        $user->update([
            'status' => 2,
            'approved_by' => Auth::id(),
            'approved_at' => now(),
        ]);

        return back()->with('success', 'User approved successfully');
    }

    public function reject(User $user){
        if ($user->status !== 1) {
            return back()->withErrors(['status' => 'User already processed']);
        }

        $user->update([
            'status' => 3,
            'approved_by' => Auth::id(),
            'approved_at' => now(),
        ]);

        return back()->with('success', 'User rejected successfully');
    }


}
