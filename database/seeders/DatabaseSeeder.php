<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Project;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'JZ',
            'email' => 'jz@example.com',
            'password' => bcrypt('password'), // Ensure to hash the password
            'email_verified_at' => time(), // Set email as verified
        ]);


        Project::factory()
        ->count(30)
        ->hasTasks(20)
        ->create();


        

    }
}
