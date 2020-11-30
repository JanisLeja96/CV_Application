<?php

namespace Database\Factories;

use App\Models\CvEducation;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;

class CvEducationFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = CvEducation::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'institution' => $this->faker->word,
            'faculty' => $this->faker->word,
            'field_of_study' => $this->faker->word,
            'level_of_education' => $this->faker->word,
            'status' => 'complete',
            'started_at' => $this->faker->date(),
            'cv_id' => 1
        ];
    }
}
