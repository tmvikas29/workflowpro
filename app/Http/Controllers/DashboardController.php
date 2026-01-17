<?php

namespace App\Http\Controllers;

use App\Models\Permission;
use App\Models\Role;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index(Request $request){
        $user = $request->user();
        $permissions = $user->role->name === 'admin' ? Permission::pluck('name')->toArray() : $user->permissions->pluck('name')->toArray();

        $stats = [];
        if (in_array('view_users', $permissions)) {
            $stats['total_users'] = User::whereHas('role', function ($q) {
                $q->where('name', '!=', 'admin');
            })->count();

            $stats['new_users'] = User::whereHas('role', function ($q) {
                $q->where('name', '!=', 'admin');
            })->where('created_at', '>=', now()->subDays(7))->count();

            $stats['active_users'] = User::whereHas('role', function ($q) {
                $q->where('name', '!=', 'admin');
            })
            ->where('status', 2)
            ->count();
        }
        if (in_array('manage_roles', $permissions)) {
            $stats['total_roles'] = Role::count();
        }

        return Inertia::render('Pages/Dashboard', [
            'stats' => $stats,
            'permissions' => $permissions,
        ]);
    }



}
