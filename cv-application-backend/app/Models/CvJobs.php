<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CvJobs extends Model
{
    use HasFactory;

    protected $table = 'cv_jobs';

    public function jobInfo()
    {
        return $this->hasMany(CvJobInfo::class, 'job_id');
    }

    public function jobResponsibilities()
    {
        return $this->hasMany(CvJobResponsibilities::class, 'job_id');
    }

    public function jobAchievements()
    {
        return $this->hasMany(CvJobAchievements::class, 'job_id');
    }
}
