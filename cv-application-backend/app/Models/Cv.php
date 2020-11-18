<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Cv extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $guarded = [];
    protected $table = 'cvs';

    public function baseData()
    {
        return $this->hasOne(CvBaseData::class);
    }

    public function education()
    {
        return $this->hasOne(CvEducation::class);
    }

    public function jobs()
    {
        return $this->hasMany(CvJobs::class);
    }
}
