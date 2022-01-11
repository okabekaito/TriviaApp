<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title' => $this->faker->realText(rand(10, 15)),
            'category' => $this->faker->realText(rand(10, 15)),
            'content' => $this->faker->realText(rand(30, 40)),
            'created_at' => now(),
            'updated_at' => now()
        ];
    }
}
