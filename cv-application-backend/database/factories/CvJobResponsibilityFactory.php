<?php

namespace Database\Factories;

use App\Models\CvJobResponsibility;
use Illuminate\Database\Eloquent\Factories\Factory;

class CvJobResponsibilityFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = CvJobResponsibility::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'job_id' => 1,
            'responsibility' => $this->faker->sentence(4)
        ];
    }
}
