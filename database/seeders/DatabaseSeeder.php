<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Demo Admin User
        User::updateOrCreate(
            ['email' => 'admin@zytrixon.com'],
            [
                'name' => 'Zytrixon Admin',
                'password' => bcrypt('admin123'),
                'role' => 'admin',
                'email_verified_at' => now(),
            ]
        );

        // Demo Customer User
        User::updateOrCreate(
            ['email' => 'customer@zytrixon.com'],
            [
                'name' => 'Demo Customer',
                'password' => bcrypt('customer123'),
                'role' => 'customer',
                'email_verified_at' => now(),
            ]
        );

        $this->call([
            SeoDataSeeder::class,
            ContactEnquirySeeder::class,
            BlogSeeder::class,
        ]);
    }
}
