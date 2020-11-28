<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CvJob extends Model
{
    use HasFactory;

    protected $table = 'cv_jobs';
    protected $guarded = [];

    public function jobInfo()
    {
        return $this->hasMany(CvJobInfo::class, 'job_id');
    }

    public function jobResponsibilities()
    {
        return $this->hasMany(CvJobResponsibility::class, 'job_id');
    }

    public function jobAchievements()
    {
        return $this->hasMany(CvJobAchievement::class, 'job_id');
    }

    public function cv()
    {
        return $this->belongsTo(Cv::class, 'cv_id');
    }
}
