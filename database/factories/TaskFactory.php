<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Task>
 */
class TaskFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->sentence(),
            'description' => fake()->realText(),
            'due_date' => fake()->dateTimeBetween('now', '+1 year'),
            'status' => fake()->randomElement(['active', 'completed', 'on hold']),
            'priority' => fake()->randomElement(['low', 'medium', 'high']),
            'image_path' => fake()->imageUrl(),
            'assigned_user_id' => 1, // Assuming user with ID 1 exists
            'created_by' => 1, // Assuming user with ID 1 exists
            'updated_by' => 1, // Assuming user with ID 1 exists
        ];
    }
}
