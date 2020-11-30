<?php

namespace Database\Factories;

use App\Models\CvBaseData;
use Illuminate\Database\Eloquent\Factories\Factory;

class CvBaseDataFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = CvBaseData::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'id' => 1,
            'first_name' => $this->faker->firstName(),
            'last_name' => $this->faker->lastName,
            'email' => $this->faker->email,
            'phone_number' => $this->faker->phoneNumber,
            'summary' => $this->faker->paragraph,
            'cv_id' => 1
        ];
    }
}
