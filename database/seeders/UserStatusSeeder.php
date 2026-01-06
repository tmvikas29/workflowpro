<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class UserStatusSeeder extends Seeder
{
    public function run(): void
    {
        $statuses = [
            [
                'key'   => 'pending',
                'label' => 'Pending Approval',
                'color' => 'warning',
            ],
            [
                'key'   => 'active',
                'label' => 'Active',
                'color' => 'success',
            ],
            [
                'key'   => 'rejected',
                'label' => 'Rejected',
                'color' => 'danger',
            ],
            [
                'key'   => 'blocked',
                'label' => 'Blocked',
                'color' => 'secondary',
            ],
        ];

        foreach ($statuses as $status) {
            DB::table('user_statuses')->updateOrInsert(
                ['key' => $status['key']],
                $status
            );
        }
    }
}

