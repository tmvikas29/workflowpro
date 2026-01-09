<?php

namespace Database\Seeders;

use App\Models\Permission;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        $this->call(RoleSeeder::class);
        $this->call(UserStatusSeeder::class);
        $this->call(PermissionSeeder::class);
        $admin = User::create([
            'name'     => 'Admin User',
            'email'    => 'admin@example.com',
            'password' => Hash::make('admin'),
            'role_id'  => 1,
            'status'   => 2,
        ]);
        $allPermissionIds = Permission::pluck('id');
        $admin->permissions()->sync($allPermissionIds);
    }
}
