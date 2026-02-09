<?php

namespace Database\Seeders;

use App\Models\Permission;
use App\Models\Role;
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
    public function run(): void{
        $this->call([
            RoleSeeder::class,
            UserStatusSeeder::class,
            PermissionSeeder::class,
        ]);

        // Create admin user
        $admin = User::firstOrCreate(
            ['email' => 'admin@example.com'],
            [
                'name'     => 'Admin User',
                'password' => Hash::make('admin'),
                'role_id'  => Role::where('name', 'admin')->value('id'),
                'status'   => 2,
            ]
        );

        // 🔑 Give ALL permissions to admin ROLE
        $adminRole = Role::where('name', 'admin')->first();

        if ($adminRole) {
            $adminRole->permissions()->sync(
                Permission::pluck('id')->toArray()
            );
        }
    }
}
