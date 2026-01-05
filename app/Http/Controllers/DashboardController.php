<?php

namespace App\Http\Controllers;

use App\Models\Role;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index(Request $request)
    {
        $user = $request->user();

        $stats = [
            'total_users' => User::whereHas('role', function ($q) {
                $q->where('name', '!=', 'admin');
            })->count(),

            'total_roles' => Role::count(),

            'active_users' => null,
            'new_users' => User::whereHas('role', function ($q) {
                $q->where('name', '!=', 'admin');
            })
            ->where('created_at', '>=', now()->subDays(7))
            ->count(),
        ];

        return Inertia::render('Pages/Dashboard', [
            'stats' => $stats,
        ]);
    }


}
