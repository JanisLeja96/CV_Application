<?php

namespace Database\Seeders;

use App\Models\Cv;
use App\Models\CvBaseData;
use App\Models\CvEducation;
use App\Models\CvJob;
use App\Models\CvJobAchievement;
use App\Models\CvJobResponsibility;
use Database\Factories\CvJobResponsibilityFactory;
use Illuminate\Database\Seeder;

class CvSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Cv::factory()->create();
        CvBaseData::factory()->create();
        CvEducation::factory()->create();
        CvJob::factory()->create();
        CvJobResponsibility::factory()->create();
        CvJobAchievement::factory()->create();
    }
}
