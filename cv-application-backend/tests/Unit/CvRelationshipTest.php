<?php

namespace Tests\Unit;

use App\Models\Cv;
use App\Models\CvBaseData;
use App\Models\CvEducation;
use App\Models\CvJob;
use App\Models\CvJobAchievement;
use App\Models\CvJobResponsibility;
use Database\Factories\CvJobFactory;
use Database\Seeders\CvSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class CvRelationshipTest extends TestCase
{
    use RefreshDatabase;

    public function testCvReturnsAssociatedBaseData()
    {
        $this->seed(CvSeeder::class);
        $this->assertEquals(CvBaseData::first(), Cv::first()->baseData);
    }

    public function testCvReturnsAssociatedEducation()
    {
        $this->seed(CvSeeder::class);
        $this->assertEquals(CvEducation::first(), Cv::first()->education->first());
    }

    public function testCvReturnsAssociatedJobs()
    {
        $this->seed(CvSeeder::class);
        $this->assertEquals(CvJob::first(), Cv::first()->jobs->first());
        CvJob::factory()->create(['cv_id' => 1]);
        $this->assertEquals(CvJob::where('cv_id', 1)->get(), Cv::first()->jobs);
    }

    public function testJobReturnsAssociatedResponsibilities()
    {
        $this->seed(CvSeeder::class);
        $this->assertEquals(CvJobResponsibility::first(), CvJob::first()->jobResponsibilities->first());
        CvJobResponsibility::factory()->create(['job_id' => 1]);
        $this->assertEquals(CvJobResponsibility::where('job_id', 1)->get(), CvJob::first()->jobResponsibilities);
    }

    public function testJobReturnsAssociatedAchievements()
    {
        $this->seed(CvSeeder::class);
        $this->assertEquals(CvJobAchievement::first(), CvJob::first()->jobAchievements->first());
        CvJobAchievement::factory()->create(['job_id' => 1]);
        $this->assertEquals(CvJobAchievement::where('job_id', 1)->get(), CvJob::first()->jobAchievements);
    }
}
