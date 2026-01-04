<?php

namespace App\Http\Controllers;

use App\Models\Role;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        return Inertia::render('Pages/Dashboard', [
            'stats' => [
                'users' => User::count(),
                'roles' => Role::count(),
            ],
        ]);
    }
}
