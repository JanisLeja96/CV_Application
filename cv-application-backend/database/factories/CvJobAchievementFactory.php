<?php

namespace Database\Factories;

use App\Models\CvJobAchievement;
use Illuminate\Database\Eloquent\Factories\Factory;

class CvJobAchievementFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = CvJobAchievement::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'job_id' => 1,
            'achievement' => $this->faker->word
        ];
    }
}
