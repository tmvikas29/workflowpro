<?php

namespace Database\Seeders;

use App\Models\Permission;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PermissionSeeder extends Seeder
{
    public function run(): void
    {
        $permissions = [
            ['name' => 'view_users', 'label' => 'View Users'],
            ['name' => 'create_users', 'label' => 'Create Users'],
            ['name' => 'approve_users', 'label' => 'Approve Users'],
            ['name' => 'reject_users', 'label' => 'Reject Users'],
            ['name' => 'delete_users', 'label' => 'Delete Users'],
        ];

        foreach ($permissions as $permission) {
            Permission::firstOrCreate(
                ['name' => $permission['name']],
                $permission
            );
        }
    }
}
