<?php

namespace Database\Factories;

use App\Models\CvJob;
use Illuminate\Database\Eloquent\Factories\Factory;

class CvJobFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = CvJob::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'company_title' => $this->faker->word,
            'position' => $this->faker->jobTitle,
            'workload' => 'Full time',
            'description' => $this->faker->sentence,
            'cv_id' => 1,
            'started_at' => $this->faker->date()
        ];
    }
}
